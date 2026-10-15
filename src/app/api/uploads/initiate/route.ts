import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createMultipartUpload } from "@/lib/storage";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { filename, contentType } = await req.json();
    
    if (!filename || !contentType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const key = `uploads/${session.user.id}/${crypto.randomUUID()}-${filename}`;
    const result = await createMultipartUpload(key, contentType, "originals");

    return NextResponse.json({
      uploadId: result.uploadId,
      key: result.key,
    });
  } catch (error) {
    console.error("Upload initiation error:", error);
    return NextResponse.json({ error: "Failed to initiate upload" }, { status: 500 });
  }
}