import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { completeMultipartUpload } from "@/lib/storage";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { key, uploadId, parts } = await req.json();
    
    if (!key || !uploadId || !parts) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await completeMultipartUpload(key, uploadId, parts, "originals");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Complete upload error:", error);
    return NextResponse.json({ error: "Failed to complete upload" }, { status: 500 });
  }
}