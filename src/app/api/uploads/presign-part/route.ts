import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { getPresignedPartUrl } from "@/lib/storage";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { key, uploadId, partNumber } = await req.json();
    
    if (!key || !uploadId || !partNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const url = await getPresignedPartUrl(key, uploadId, partNumber, "originals");
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Presign part error:", error);
    return NextResponse.json({ error: "Failed to get presigned URL" }, { status: 500 });
  }
}