"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Scale, AlertCircle } from "lucide-react";

export default function DMCAPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    url: "",
    description: "",
    signature: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-surface">
        <header className="border-b border-border-subtle/20 bg-surface/95 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-2xl font-display font-bold">
              Edyits
            </Link>
          </div>
        </header>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
          <div className="bg-surface-alt rounded-lg p-8 border border-border-subtle/20">
            <Scale className="text-primary mx-auto mb-4" size={48} />
            <h1 className="text-2xl font-bold mb-4">Request Submitted</h1>
            <p className="text-text-secondary mb-6">
              We have received your DMCA takedown request. We will review it and respond within 24-48 hours.
            </p>
            <Link href="/">
              <Button>Return to Home</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-surface">
      <header className="border-b border-border-subtle/20 bg-surface/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold">
            Edyits
          </Link>
          <Link href="/content-policy" className="text-text-secondary hover:text-white transition-colors">
            Content Policy
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-4 flex items-center gap-3">
            <Scale size={32} />
            DMCA Takedown Request
          </h1>
          <p className="text-text-secondary">
            Use this form to submit a DMCA takedown request for content you believe infringes your copyright.
          </p>
        </div>

        <div className="bg-yellow-600/10 border border-yellow-600/30 rounded-lg p-4 mb-6 flex gap-3">
          <AlertCircle className="text-yellow-400 flex-shrink-0 mt-1" size={20} />
          <p className="text-sm text-text-secondary">
            Only submit this form if you are the copyright holder or authorized to act on their behalf.
            Submitting false claims may result in legal consequences.
          </p>
        </div>

        <div className="bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company/Organization
                </label>
                <input
                  id="company"
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label htmlFor="url" className="block text-sm font-medium mb-2">
                URL of Infringing Content *
              </label>
              <input
                id="url"
                type="url"
                required
                placeholder="https://edyits.com/edit/..."
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium mb-2">
                Description of Infringing Work *
              </label>
              <textarea
                id="description"
                required
                rows={4}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Please identify the copyrighted work and explain how it is being infringed."
              />
            </div>

            <div>
              <label htmlFor="signature" className="block text-sm font-medium mb-2">
                Electronic Signature (Your Full Name) *
              </label>
              <input
                id="signature"
                type="text"
                required
                value={formData.signature}
                onChange={(e) => setFormData({ ...formData, signature: e.target.value })}
                className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button type="submit" className="w-full">
              Submit DMCA Request
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}