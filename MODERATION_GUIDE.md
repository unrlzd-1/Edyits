# Edyits Moderation Guide

## Core Principle
**Edits and compilations only. No raw leaks.** This is the most important rule to enforce.

## Review Process

### 1. Check Pending Uploads
Access the moderation dashboard at `/moderation` (requires moderator or admin role).

### 2. Evaluate Each Upload

When reviewing an upload, check:

- **Transformative nature**: Does it have meaningful changes? (Re-mixing, re-arranging, new mastering, rebuilt elements, mashup, etc.)
- **Edit description**: Does it clearly explain what was changed (minimum 50 chars)?
- **Not a raw leak**: Is this an unaltered leaked file? Direct rips are not allowed.
- **File quality**: Is it a valid audio file (MP3/WAV/FLAC)?
- **Metadata**: Title, credits, etc. are appropriate

### 3. Decision Actions

#### Approve
- Upload is a legitimate edit/compilation
- Has meaningful transformation
- Clear edit description
- Not a raw leak

Action: Click "Approve" - upload becomes public immediately.

#### Reject
- Raw, unaltered leak
- Not transformative (e.g., just trimmed/renamed)
- Missing or insufficient edit description
- Violates content policy
- Spam or inappropriate content

Action: Click "Reject" and provide clear reason. The uploader will see this reason.

#### Flag for Review
Use flagging if you're uncertain and need another moderator's opinion.

## Strike System

Edyits enforces progressive penalties:

| Violation | Consequence |
|---|---|
| 1st | Warning + Content removal |
| 2nd | 7-day upload ban + Content removal |
| 3rd | Permanent upload ban |

Apply strikes through the moderation panel when rejecting for policy violations.

## Reports

Monitor reports in the moderation dashboard:
- **Raw leak** - Highest priority, review immediately
- **Copyright/DMCA** - Follow DMCA procedure
- **Inappropriate content** - Evaluate against guidelines
- **Spam/Harassment** - Take appropriate action

## DMCA Takedowns

When receiving a valid DMCA notice (via `/dmca` form):
1. Verify the notice contains all required information
2. Remove the infringing content immediately
3. Log the action in the audit log
4. Notify the user if appropriate
5. Document the takedown

## Audit Log

All moderation actions are logged with:
- Action taken (approve/reject/remove/warn/ban)
- Entity type and ID
- Moderator ID
- Reason
- Timestamp

Never delete audit logs.

## Tips

- Be consistent - apply the same standards to all uploads
- Document your reasoning when rejecting
- Prioritize raw leak reports - they can harm the platform
- If unsure, flag for second opinion rather than making a rushed decision
- Stay objective and follow the "No raw leaks" rule strictly