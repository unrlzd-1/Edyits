import Link from "next/link";
import { Music, Shield, Sparkles } from "lucide-react";

export default function AboutPage() {
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
        <h1 className="text-4xl font-display font-bold mb-6">About Edyits</h1>

        <section className="mb-8">
          <p className="text-xl text-text-secondary mb-4">
            Edyits is a curated community hub for compilations of Kanye West leaks and fan-made edits of those leaks.
          </p>
          <p className="text-text-secondary">
            We celebrate the creativity of Kanye fans through transformative edits - remixes, remasters, mashups,
            rebuilds, extended versions, and carefully curated compilations that reimagine the music.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Our Core Principle</h2>
          <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-6">
            <p className="text-white font-bold text-lg text-center">
              Edits and compilations only. No raw leaks.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6">What Makes Us Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
              <Shield className="text-primary mb-3" size={24} />
              <h3 className="font-bold mb-2">Quality Over Quantity</h3>
              <p className="text-sm text-text-secondary">
                Every upload is reviewed by moderators to ensure it&apos;s a meaningful transformation.
              </p>
            </div>
            <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
              <Sparkles className="text-primary mb-3" size={24} />
              <h3 className="font-bold mb-2">High-Quality Audio</h3>
              <p className="text-sm text-text-secondary">
                HLS streaming, waveform visualization, and gapless playback for album experiences.
              </p>
            </div>
            <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
              <Music className="text-primary mb-3" size={24} />
              <h3 className="font-bold mb-2">Creator-Focused</h3>
              <p className="text-sm text-text-secondary">
                Proper credits, creator profiles, and a leaderboard celebrating top editors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}