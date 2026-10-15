const ALLOWED_AUDIO_TYPES = ["audio/mpeg", "audio/wav", "audio/flac", "audio/x-flac"]
const MAX_FILE_SIZE = 100 * 1024 * 1024 // 100MB

export const RAW_LEAK_KEYWORDS = [
  "raw",
  "og",
  "unedited",
  "leak rip",
  "full leak",
  "unmastered",
  "original leak",
  "studio leak",
  "demo leak",
  "snippet leak",
  "no edit",
  "unedited version",
  "raw version",
]

export function validateAudioFile(file: File) {
  if (!ALLOWED_AUDIO_TYPES.includes(file.type)) {
    return {
      valid: false,
      error: "Only MP3, WAV, and FLAC files are allowed.",
    }
  }

  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: "File size must be less than 100MB.",
    }
  }

  return { valid: true }
}

export function checkForRawLeakKeywords(text: string): {
  isSuspicious: boolean
  matchedKeywords: string[]
} {
  const lowercased = text.toLowerCase()
  const matchedKeywords = RAW_LEAK_KEYWORDS.filter((keyword) =>
    lowercased.includes(keyword.toLowerCase())
  )

  return {
    isSuspicious: matchedKeywords.length > 0,
    matchedKeywords,
  }
}

export function validateEditDescription(description: string): {
  valid: boolean
  error?: string
} {
  if (!description || description.trim().length < 50) {
    return {
      valid: false,
      error: "Edit description must be at least 50 characters long.",
    }
  }
  return { valid: true }
}