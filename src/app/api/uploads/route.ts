import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const era = searchParams.get("era");
    const editType = searchParams.get("editType");
    const sort = searchParams.get("sort") || "newest";

    const skip = (page - 1) * limit;

    const where: any = {
      status: "APPROVED",
      isApproved: true,
    };

    if (era && era !== "All Eras") {
      where.era = era;
    }
    if (editType && editType !== "All Types") {
      where.editType = editType.toUpperCase().replace("REMIX", "REMIX").replace("MASHUP", "MASHUP").replace("REMASTER", "REMASTER").replace("EXTENDED", "EXTENDED").replace("CLEAN", "CLEAN").replace("REBUILD", "REBUILD").replace("COMPILATION/TRACKLIST", "COMPILATION_TRACKLIST").replace("OTHER", "OTHER");
    }

    const orderBy: any = {};
    if (sort === "newest") {
      orderBy.createdAt = "desc";
    } else if (sort === "trending") {
      orderBy.playsCount = "desc";
    } else if (sort === "top") {
      orderBy.likesCount = "desc";
    }

    const uploads = await prisma.upload.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            username: true,
            name: true,
          },
        },
      },
      orderBy,
      skip,
      take: limit,
    });

    const total = await prisma.upload.count({ where });

    return NextResponse.json({
      uploads,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    console.error("Uploads fetch error:", error);
    return NextResponse.json({ error: "Failed to fetch uploads" }, { status: 500 });
  }
}