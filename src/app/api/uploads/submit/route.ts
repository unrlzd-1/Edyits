import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { checkForRawLeakKeywords, validateEditDescription } from "@/lib/validation";
import { computeAudioFingerprint, checkAgainstBlocklist } from "@/lib/fingerprinting";
import { z } from "zod";

const submitSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
  editDescription: z.string().min(50),
  editType: z.enum([
    "REMASTER",
    "REMIX",
    "MASHUP",
    "EXTENDED",
    "CLEAN",
    "REBUILD",
    "COMPILATION_TRACKLIST",
    "OTHER",
  ]),
  era: z.string().optional(),
  tags: z.array(z.string()).optional(),
  credits: z.any().optional(),
  originalFileKey: z.string(),
  originalFileName: z.string(),
  originalFileSize: z.number(),
  mimeType: z.string(),
});

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const data = submitSchema.parse(body);

    // Validate edit description
    const descValidation = validateEditDescription(data.editDescription);
    if (!descValidation.valid) {
      return NextResponse.json({ error: descValidation.error }, { status: 400 });
    }

    // Check for raw leak keywords in title, description, editDescription
    const combinedText = `${data.title} ${data.description || ""} ${data.editDescription}`;
    const keywordCheck = checkForRawLeakKeywords(combinedText);

    let flaggedByFilter = keywordCheck.isSuspicious;
    let filterReason = keywordCheck.isSuspicious
      ? `Matched keywords: ${keywordCheck.matchedKeywords.join(", ")}`
      : null;

    // Create upload in database
    const upload = await prisma.upload.create({
      data: {
        userId: session.user.id,
        title: data.title,
        description: data.description || "",
        editDescription: data.editDescription,
        editType: data.editType,
        era: data.era,
        tags: data.tags || [],
        credits: data.credits,
        originalFileKey: data.originalFileKey,
        originalFileName: data.originalFileName,
        originalFileSize: BigInt(data.originalFileSize),
        mimeType: data.mimeType,
        status: "PENDING",
        isApproved: false,
        flaggedByFilter,
        filterReason,
        // If flagged by filter, it goes to review
        isFingerprintChecked: false,
      },
    });

    return NextResponse.json({
      uploadId: upload.id,
      status: upload.status,
      message: "Upload submitted successfully. Pending review.",
    });
  } catch (error) {
    console.error("Upload submission error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: "Failed to submit upload" }, { status: 500 });
  }
}