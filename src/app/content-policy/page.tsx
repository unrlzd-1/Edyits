import Link from "next/link";
import { Shield, AlertTriangle } from "lucide-react";

export default function ContentPolicyPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Header */}
      <header className="border-b border-border-subtle/20 bg-surface/95 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold">
            Edyits
          </Link>
          <Link
            href="/"
            className="text-text-secondary hover:text-white transition-colors font-medium"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-4">Content Policy</h1>
          <p className="text-text-secondary">Last updated: October 15, 2026</p>
        </div>

        {/* Critical rule - No Raw Leaks */}
        <div className="bg-accent-red/10 border-2 border-accent-red/50 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-accent-red flex-shrink-0 mt-1" size={28} />
            <div>
              <h2 className="text-2xl font-bold mb-3 text-accent-red">NO RAW LEAKS</h2>
              <p className="text-white mb-3 font-medium">
                This is our most important rule. Raw, unaltered leaked files are strictly prohibited.
              </p>
              <p className="text-text-secondary mb-2">
                <strong className="text-white">Allowed:</strong> Transformative edits, remixes, remasters, mashups,
                extended versions, rebuilt instrumentals, compilations with commentary.
              </p>
              <p className="text-text-secondary">
                <strong className="text-white">Not Allowed:</strong> Unedited leaked MP3/WAV/FLAC files, direct rips,
                unaltered snippets, or reuploads of leaked tracks.
              </p>
            </div>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Shield size={24} />
            Upload Requirements
          </h2>
          <ul className="space-y-3 text-text-secondary">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                All uploads must be transformative fan-made works with meaningful changes.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                A detailed "Edit Description" explaining what was changed (minimum 50 characters) is required.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                You must explicitly confirm this is an edit/compilation and NOT a raw or unaltered leak.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                All uploads go to pending review and must be approved by a moderator before going public.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>
                Compilations must be tracklist-based with notes; they may not bundle raw leaked files.
              </span>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Moderation & Strikes</h2>
          <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
            <p className="text-text-secondary mb-4">
              We use an automated detection system combined with human moderation to enforce our policies.
            </p>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="bg-yellow-600/20 text-yellow-400 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium">First Violation</p>
                  <p className="text-text-secondary text-sm">Warning + removal of content</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-orange-600/20 text-orange-400 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium">Second Violation</p>
                  <p className="text-text-secondary text-sm">7-day upload ban + content removal</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="bg-red-600/20 text-red-400 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium">Third Violation</p>
                  <p className="text-text-secondary text-sm">Permanent ban from uploading</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Reporting</h2>
          <p className="text-text-secondary mb-4">
            If you see content that violates our policies, especially raw leaks, please report it using the
            &quot;Report&quot; button on any page. Include the specific reason so our moderators can act quickly.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">DMCA & Copyright</h2>
          <p className="text-text-secondary mb-4">
            If you believe content on Edyits infringes your copyright, please submit a DMCA takedown request
            through our <Link href="/dmca" className="text-primary hover:underline">DMCA form</Link>.
            We take copyright seriously and will respond promptly to valid requests.
          </p>
        </section>
      </div>
    </main>
  );
}