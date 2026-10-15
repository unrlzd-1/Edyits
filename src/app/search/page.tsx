import Link from "next/link";
import { Search as SearchIcon } from "lucide-react";

export default function SearchPage() {
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
        <h1 className="text-4xl font-display font-bold mb-6">Search</h1>
        <div className="relative">
          <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={20} />
          <input
            type="text"
            placeholder="Search by title, creator, era, or tags..."
            className="w-full bg-surface-alt border border-border-subtle pl-12 pr-4 py-3 rounded-lg text-white text-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>
    </main>
  );
}