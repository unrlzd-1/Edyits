import Link from "next/link";
import { Shield, AlertTriangle, CheckCircle, XCircle, FileText, Users } from "lucide-react";

export default function ModerationPage() {
  return (
    <main className="min-h-screen bg-surface">
      <header className="border-b border-border-subtle/20 bg-surface/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Shield className="text-primary" size={24} />
            <span className="text-2xl font-display font-bold">Moderation Dashboard</span>
          </div>
          <Link href="/" className="text-text-secondary hover:text-white transition-colors">
            Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Pending Review</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <FileText className="text-yellow-400" size={32} />
            </div>
          </div>
          <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Flagged</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <AlertTriangle className="text-accent-red" size={32} />
            </div>
          </div>
          <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Reports</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <AlertTriangle className="text-orange-400" size={32} />
            </div>
          </div>
          <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-text-secondary text-sm">Total Users</p>
                <p className="text-2xl font-bold">0</p>
              </div>
              <Users className="text-primary" size={32} />
            </div>
          </div>
        </div>

        <div className="bg-surface-alt rounded-lg border border-border-subtle/20">
          <div className="p-6 border-b border-border-subtle/20">
            <h2 className="text-xl font-bold">Review Queue</h2>
          </div>
          <div className="p-12 text-center">
            <FileText className="text-text-secondary mx-auto mb-4" size={48} />
            <p className="text-text-secondary">No items pending review</p>
          </div>
        </div>
      </div>
    </main>
  );
}