import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { User, Music, Calendar } from "lucide-react";

export default async function ProfilePage() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/login");
  }

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <User size={32} className="text-primary" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{session.user.name || session.user.username}</h1>
              <p className="text-text-secondary">@{session.user.username}</p>
              <p className="text-text-secondary">{session.user.email}</p>
            </div>
          </div>
        </div>

        <div className="bg-surface-alt rounded-lg border border-border-subtle/20">
          <div className="p-6 border-b border-border-subtle/20">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Music size={20} />
              My Uploads
            </h2>
          </div>
          <div className="p-12 text-center">
            <Music className="text-text-secondary mx-auto mb-4" size={48} />
            <p className="text-text-secondary">No uploads yet</p>
            <Link href="/upload" className="text-primary hover:underline mt-2 inline-block">
              Upload your first edit
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}