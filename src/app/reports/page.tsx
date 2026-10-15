import Link from "next/link";
import { AlertTriangle, Flag } from "lucide-react";

export default function ReportsPage() {
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
          <Flag className="text-primary mx-auto mb-4" size={48} />
          <h1 className="text-4xl font-display font-bold mb-4">Report Content</h1>
          <p className="text-text-secondary">Help us maintain a safe community</p>
        </div>

        <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-accent-red flex-shrink-0 mt-1" size={24} />
            <div>
              <p className="font-bold text-white mb-2">Special Priority: Raw Leaks</p>
              <p className="text-text-secondary text-sm">
                If you see raw, unaltered leaked content, report it immediately with reason "Raw leak".
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-alt rounded-lg p-8 border border-border-subtle/20">
          <p className="text-text-secondary text-center">
            To report content, navigate to the edit/compilation page and click the "Report" button.
            Select the appropriate reason and provide details.
          </p>
        </div>
      </div>
    </main>
  );
}