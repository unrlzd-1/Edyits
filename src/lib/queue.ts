// Queue configuration - simplified for build
// In production, use BullMQ with Redis

export const connection = null as any;

// Stub queues
export const audioProcessingQueue = {
  add: async () => {},
} as any;
export const transcodingQueue = {
  add: async () => {},
} as any;
export const zipExtractionQueue = {
  add: async () => {},
} as any;