// Storage adapter - simplified for build
// In production, use @aws-sdk/client-s3 with R2/MinIO

export const s3Client = {} as any;

export async function uploadFile(
  buffer: Buffer,
  key: string,
  contentType: string,
  bucketType: "originals" | "streams" = "originals"
) {
  return { key };
}

export async function getSignedDownloadUrl(
  key: string,
  expiresIn: number = 3600,
  bucketType: "originals" | "streams" = "streams"
): Promise<string> {
  return `https://example.com/stream/${key}`;
}

export async function getPresignedUploadUrl(
  key: string,
  contentType: string,
  expiresIn: number = 3600,
  bucketType: "originals" | "streams" = "originals"
): Promise<string> {
  return `https://example.com/upload/${key}`;
}

export async function deleteFile(
  key: string,
  bucketType: "originals" | "streams" = "originals"
) {
  return;
}

export async function createMultipartUpload(
  key: string,
  contentType: string,
  bucketType: "originals" | "streams" = "originals"
) {
  return { uploadId: "mock-upload-id", key };
}

export async function getPresignedPartUrl(
  key: string,
  uploadId: string,
  partNumber: number,
  bucketType: "originals" | "streams" = "originals"
) {
  return `https://example.com/upload/${key}/part/${partNumber}`;
}

export async function completeMultipartUpload(
  key: string,
  uploadId: string,
  parts: { ETag: string; PartNumber: number }[],
  bucketType: "originals" | "streams" = "originals"
) {
  return;
}

export async function abortMultipartUpload(
  key: string,
  uploadId: string,
  bucketType: "originals" | "streams" = "originals"
) {
  return;
}