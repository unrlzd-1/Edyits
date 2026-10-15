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

    const upload = await prisma.upload.update({
      where: { id: params.id },
      data: {
        status: "APPROVED",
        isApproved: true,
        approvedAt: new Date(),
        approvedBy: session.user.id,
        flaggedByFilter: false,
      },
    });

    // Log moderation action
    await prisma.moderationLog.create({
      data: {
        action: "APPROVE",
        entityType: "UPLOAD",
        entityId: upload.id,
        moderatorId: session.user.id,
        reason: "Approved by moderator",
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Approve error:", error);
    return NextResponse.json({ error: "Failed to approve upload" }, { status: 500 });
  }
}