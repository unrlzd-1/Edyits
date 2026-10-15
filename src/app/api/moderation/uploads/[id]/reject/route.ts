import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await auth();
    if (!session?.user || (session.user.role !== "MODERATOR" && session.user.role !== "ADMIN")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { reason } = await req.json();

    const upload = await prisma.upload.update({
      where: { id: params.id },
      data: {
        status: "REJECTED",
        rejectedReason: reason,
      },
    });

    await prisma.moderationLog.create({
      data: {
        action: "REJECT",
        entityType: "UPLOAD",
        entityId: upload.id,
        moderatorId: session.user.id,
        reason: reason || "Rejected by moderator",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Reject error:", error);
    return NextResponse.json({ error: "Failed to reject upload" }, { status: 500 });
  }
}