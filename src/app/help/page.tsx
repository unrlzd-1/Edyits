import Link from "next/link";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-surface">
      <header className="border-b border-border-subtle/20 bg-surface/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold">
            Edyits
          </Link>
          <Link href="/" className="text-text-secondary hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-display font-bold mb-6">Help Center</h1>
        <div className="space-y-6">
          <section className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
            <h2 className="text-xl font-bold mb-2">How do I upload?</h2>
            <p className="text-text-secondary">
              Click "Upload" in the top navigation, fill in the required fields including your edit description
              (min 50 chars), confirm it&apos;s not a raw leak, and submit. All uploads are moderated.
            </p>
          </section>
          <section className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
            <h2 className="text-xl font-bold mb-2">What counts as a valid edit?</h2>
            <p className="text-text-secondary">
              Any transformative work - remixes, remasters, mashups, rebuilds, extended versions with meaningful changes.
              Simply trimming or renaming doesn&apos;t count as transformative.
            </p>
          </section>
          <section className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
            <h2 className="text-xl font-bold mb-2">Why are uploads moderated?</h2>
            <p className="text-text-secondary">
              To enforce our strict "No Raw Leaks" policy and maintain quality. Every upload goes to pending review.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}