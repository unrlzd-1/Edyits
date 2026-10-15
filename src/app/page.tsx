import Link from "next/link";
import { Search, Music, Upload, Shield, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Header */}
      <header className="border-b border-border-subtle/20 bg-surface/95 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-display font-bold">
              Edyits
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/browse" className="text-text-secondary hover:text-white transition-colors font-medium">
                Browse
              </Link>
              <Link href="/leaderboard" className="text-text-secondary hover:text-white transition-colors font-medium">
                Top Editors
              </Link>
              <Link href="/about" className="text-text-secondary hover:text-white transition-colors font-medium">
                About
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/search" className="p-2 rounded-full hover:bg-surface-alt transition-colors">
              <Search size={20} className="text-text-secondary" />
            </Link>
            <Link
              href="/upload"
              className="bg-primary hover:bg-primary/90 text-black px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105"
            >
              Upload
            </Link>
            <Link
              href="/login"
              className="border border-border px-6 py-2 rounded-full font-bold text-sm hover:bg-white/10 transition-colors"
            >
              Log in
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-surface-alt to-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 tracking-tight">
              Edits & Compilations
              <br />
              <span className="text-primary">For Kanye Fans</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              A curated community for transformative Kanye West edits and fan-made compilations.
              <br />
              <span className="text-white font-medium">Edits and compilations only. No raw leaks.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/browse"
                className="bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-full font-bold text-base transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Music size={20} />
                Browse Edits
              </Link>
              <Link
                href="/upload"
                className="border border-white/70 text-white px-8 py-3 rounded-full font-bold text-base hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
              >
                <Upload size={20} />
                Share Your Edit
              </Link>
            </div>
          </div>
        </div>

        {/* Background gradient accent */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-3xl" />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-border-subtle/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">Built with the community in mind</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Strict Leak Prevention</h3>
              <p className="text-text-secondary">
                Every upload requires confirmation it&apos;s a transformative edit, with automated filters and
                mandatory moderator review.
              </p>
            </div>
            <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
              <Sparkles className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">High Quality Streaming</h3>
              <p className="text-text-secondary">
                HLS streaming, gapless album playback, waveform visualization, and optional lossless downloads.
              </p>
            </div>
            <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
              <Music className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2">Curated & Community Driven</h3>
              <p className="text-text-secondary">
                Find edits by era, discover top creators, build playlists, and engage with threaded comments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Critical rule banner */}
      <section className="bg-accent-red/10 border-y border-accent-red/30 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white font-bold mb-1">Edits and compilations only. No raw leaks.</p>
          <p className="text-sm text-text-secondary">
            Raw, unaltered leaked files are strictly prohibited. All uploads undergo moderation review.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-border-subtle/20 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Edyits</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-text-secondary hover:text-white text-sm transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/leaderboard" className="text-text-secondary hover:text-white text-sm transition-colors">
                    Top Editors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/content-policy" className="text-text-secondary hover:text-white text-sm transition-colors">
                    Content Policy
                  </Link>
                </li>
                <li>
                  <Link href="/dmca" className="text-text-secondary hover:text-white text-sm transition-colors">
                    DMCA/Takedown
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/guidelines" className="text-text-secondary hover:text-white text-sm transition-colors">
                    Guidelines
                  </Link>
                </li>
                <li>
                  <Link href="/reports" className="text-text-secondary hover:text-white text-sm transition-colors">
                    Report Content
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-text-secondary hover:text-white text-sm transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/moderation" className="text-text-secondary hover:text-white text-sm transition-colors">
                    Moderation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border-subtle/20 text-center text-sm text-text-secondary">
            <p>© 2026 Edyits. All rights reserved. Edits and compilations only. No raw leaks.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}