# Edyits

A community hub for compilations of Kanye West leaks and fan-made edits of those leaks. **Edits and compilations only. No raw leaks.**

## Features

- **Strict Content Moderation**: Automated keyword filters, audio fingerprinting checks, and mandatory moderator review before publication. Raw leaks are strictly prohibited.
- **User Accounts**: Authentication with email/password and OAuth (Google, GitHub), role-based access (user, moderator, admin).
- **Upload System**: Chunked/resumable uploads with progress tracking, support for MP3/WAV/FLAC up to 100MB. Multi-file album uploads with zip support.
- **Audio Streaming**: HLS transcoding for high-quality streaming, waveform generation, gapless playback for albums, media session API (lock screen controls).
- **Community Features**: Likes, threaded comments, playlists, follow system, creator profiles, and Top Editors leaderboard.
- **Moderation Tools**: Review queue, flagged content, reports, strike system (1st warning+removal, 2nd 7-day ban, 3rd permanent ban), audit logging.
- **Safety Features**: Signed URLs for private file access, DMCA takedown system, per-user storage quotas, rate limiting.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Storage**: Cloudflare R2 (production) or MinIO (local development) - S3-compatible
- **Queue**: BullMQ + Redis for background processing (transcoding, fingerprinting, zip extraction)
- **Audio Processing**: FFmpeg for HLS transcoding, waveform generation
- **Authentication**: NextAuth.js (Auth.js)

## Prerequisites

- Node.js 18+ and npm
- PostgreSQL 14+
- Redis 6+
- FFmpeg (for audio processing/transcoding)
- MinIO (for local development, optional if using R2 in dev)

## Setup

### 1. Clone and Install Dependencies

```bash
cd edyits
npm install
```

### 2. Environment Variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

Required variables:
- `DATABASE_URL`: PostgreSQL connection string
- `NEXTAUTH_SECRET`: Random secret for NextAuth
- `NEXTAUTH_URL`: Your app URL (http://localhost:3000 for dev)

### 3. Database Setup

Generate Prisma client and push schema:

```bash
npx prisma generate
npx prisma db push
```

Or run migrations:

```bash
npx prisma migrate dev --name init
```

### 4. Start Required Services (Local Dev)

You'll need PostgreSQL, Redis, and MinIO running locally. You can use Docker:

```bash
# Example with docker-compose (not included, but recommended)
docker compose up -d postgres redis minio
```

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
edyits/
├── prisma/
│   └── schema.prisma          # Database schema
├── src/
│   ├── app/                   # Next.js App Router pages and API routes
│   │   ├── api/               # API endpoints (auth, uploads, moderation, etc.)
│   │   ├── upload/            # Upload page
│   │   ├── moderation/        # Moderation dashboard (protected)
│   │   ├── browse/            # Browse/edit discovery
│   │   ├── content-policy/    # Content policy page
│   │   └── dmca/              # DMCA takedown page
│   ├── components/            # React components
│   │   ├── ui/                # Reusable UI components
│   │   └── providers/         # Context providers
│   ├── lib/                   # Utility libraries
│   │   ├── auth.ts            # NextAuth configuration
│   │   ├── prisma.ts          # Prisma client
│   │   ├── storage.ts         # S3/R2 storage adapter
│   │   ├── validation.ts      # File validation & keyword filters
│   │   ├── fingerprinting.ts   # Audio fingerprinting
│   │   └── queue.ts            # BullMQ queue setup
│   └── types/                 # TypeScript type definitions
├── public/                    # Static assets
└── .env.example               # Environment variables template
```

## API Routes

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth endpoints
- `POST /api/auth/signup` - User registration

### Uploads
- `POST /api/uploads/initiate` - Initiate multipart upload
- `POST /api/uploads/presign-part` - Get presigned part URL
- `POST /api/uploads/complete` - Complete multipart upload
- `POST /api/uploads/submit` - Submit upload for moderation
- `GET /api/uploads` - List approved uploads

### Moderation (Moderator/Admin only)
- `GET /api/moderation/uploads` - List uploads pending review
- `POST /api/moderation/uploads/[id]/approve` - Approve upload
- `POST /api/moderation/uploads/[id]/reject` - Reject upload

## No Raw Leaks Enforcement

This is the platform's most critical rule, enforced through multiple layers:

1. **Required Confirmation**: Upload form requires checkbox confirming it's not a raw leak
2. **Edit Description**: Minimum 50-character explanation of what was changed
3. **Keyword Filtering**: Automatic detection of terms like "raw", "OG", "unedited", "leak rip", etc.
4. **Moderator Review**: ALL uploads go to pending review before publication
5. **Reporting System**: "Report" button with "Raw leak" reason option
6. **Strike System**: Progressive penalties for violations
7. **Content Policy**: Prominently displayed everywhere

## Moderation Guide

See [MODERATION_GUIDE.md](./MODERATION_GUIDE.md) for detailed moderator instructions.

## License

This project is for educational/community purposes. Please respect copyright laws and platform policies.