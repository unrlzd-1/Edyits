import Link from "next/link";

export default function GuidelinesPage() {
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
        <h1 className="text-4xl font-display font-bold mb-6">Community Guidelines</h1>
        <div className="space-y-6 text-text-secondary">
          <section>
            <h2 className="text-xl font-bold text-white mb-2">1. Transformative Content Only</h2>
            <p>All uploads must be meaningful edits or compilations with clear changes from the source material.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">2. No Raw Leaks</h2>
            <p>Unaltered leaked files are strictly prohibited. This is non-negotiable.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">3. Respect Creators</h2>
            <p>Give proper credit to original producers and tools used. Respect intellectual property rights.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">4. Be Respectful</h2>
            <p>No harassment, hate speech, or abusive behavior. Keep comments constructive.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-white mb-2">5. Follow Moderation</h2>
            <p>Respect moderator decisions and use the report system when needed.</p>
          </section>
        </div>
      </div>
    </main>
  );
}