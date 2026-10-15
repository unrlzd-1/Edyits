import Link from "next/link";
import { Trophy, Award } from "lucide-react";

export default function LeaderboardPage() {
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
        <div className="text-center mb-8">
          <Trophy className="text-primary mx-auto mb-4" size={48} />
          <h1 className="text-4xl font-display font-bold mb-4">Top Editors</h1>
          <p className="text-text-secondary">Celebrating the community&apos;s best transformative edits</p>
        </div>

        <div className="bg-surface-alt rounded-lg p-12 text-center border border-border-subtle/20">
          <Award className="text-text-secondary mx-auto mb-4" size={48} />
          <p className="text-text-secondary">Leaderboard will appear as editors upload their work</p>
        </div>
      </div>
    </main>
  );
}