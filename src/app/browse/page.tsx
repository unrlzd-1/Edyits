import Link from "next/link";
import { Search, Filter } from "lucide-react";

const ERAS = [
  "All Eras",
  "College Dropout",
  "Late Registration",
  "Graduation",
  "808s",
  "MBDTF",
  "Yeezus",
  "TLOP",
  "Ye",
  "Jesus Is King",
  "Donda",
  "Vultures",
];

const EDIT_TYPES = [
  "All Types",
  "Remaster",
  "Remix",
  "Mashup",
  "Extended",
  "Clean",
  "Rebuild",
  "Compilation/Tracklist",
  "Other",
];

export default function BrowsePage() {
  return (
    <main className="min-h-screen bg-surface">
      <header className="border-b border-border-subtle/20 bg-surface/95 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold">
            Edyits
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/upload" className="bg-primary hover:bg-primary/90 text-black px-6 py-2 rounded-full font-bold text-sm transition-all hover:scale-105">
              Upload
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-4">Browse Edits</h1>
          <p className="text-text-secondary">Discover transformative Kanye edits and compilations</p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
            <input
              type="text"
              placeholder="Search edits..."
              className="w-full bg-surface-alt border border-border-subtle pl-10 pr-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select className="bg-surface-alt border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary">
            {ERAS.map((era) => (
              <option key={era} value={era}>
                {era}
              </option>
            ))}
          </select>
          <select className="bg-surface-alt border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary">
            {EDIT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          <select className="bg-surface-alt border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="newest">Newest</option>
            <option value="trending">Trending</option>
            <option value="top">Top Rated</option>
          </select>
        </div>

        {/* Empty state */}
        <div className="bg-surface-alt rounded-lg p-12 text-center border border-border-subtle/20">
          <FileAudio className="text-text-secondary mx-auto mb-4" size={64} />
          <h2 className="text-2xl font-bold mb-2">No edits yet</h2>
          <p className="text-text-secondary mb-6">
            Be the first to upload a transformative Kanye edit or compilation
          </p>
          <Link href="/upload">
            <Button>Upload Now</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}