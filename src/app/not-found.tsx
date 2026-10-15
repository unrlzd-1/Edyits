import Link from "next/link";
import { Music } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="text-center">
        <Music className="text-primary mx-auto mb-6" size={64} />
        <h1 className="text-6xl font-display font-bold mb-4">404</h1>
        <p className="text-2xl font-bold mb-2">Page not found</p>
        <p className="text-text-secondary mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </main>
  );
}