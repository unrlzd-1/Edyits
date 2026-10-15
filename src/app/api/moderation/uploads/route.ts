import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await auth();
    if (!session?.user || (session.user.role !== "MODERATOR" && session.user.role !== "ADMIN")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const uploads = await prisma.upload.findMany({
      where: {
        OR: [
          { status: "PENDING" },
          { status: "FLAGGED" },
          { flaggedByFilter: true },
        ],
      },
      include: {
        user: {
          select: {
            id: true,
            username: true,
            email: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(uploads);
  } catch (error) {
    console.error("Moderation uploads error:", error);
    return NextResponse.json({ error: "Failed to fetch uploads" }, { status: 500 });
  }
}