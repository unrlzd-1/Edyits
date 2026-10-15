"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Upload as UploadIcon, AlertTriangle, FileAudio, CheckCircle } from "lucide-react";

const ERAS = [
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
  { value: "REMASTER", label: "Remaster" },
  { value: "REMIX", label: "Re-mix" },
  { value: "MASHUP", label: "Mashup" },
  { value: "EXTENDED", label: "Extended" },
  { value: "CLEAN", label: "Clean" },
  { value: "REBUILD", label: "Rebuild" },
  { value: "COMPILATION_TRACKLIST", label: "Compilation/Tracklist" },
  { value: "OTHER", label: "Other" },
];

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [editType, setEditType] = useState("REMIX");
  const [era, setEra] = useState("");
  const [tags, setTags] = useState("");
  const [credits, setCredits] = useState("");
  const [confirmNoLeak, setConfirmNoLeak] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      // Check file type
      const allowedTypes = ["audio/mpeg", "audio/wav", "audio/flac"];
      if (!allowedTypes.includes(selectedFile.type)) {
        alert("Only MP3, WAV, and FLAC files are allowed.");
        return;
      }
      if (selectedFile.size > 100 * 1024 * 1024) {
        alert("File size must be less than 100MB.");
        return;
      }
      setFile(selectedFile);
    }
  };

  return (
    <main className="min-h-screen bg-surface">
      <header className="border-b border-border-subtle/20 bg-surface/95 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="text-2xl font-display font-bold">
            Edyits
          </Link>
          <Link href="/browse" className="text-text-secondary hover:text-white transition-colors font-medium">
            Browse
          </Link>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-display font-bold mb-4">Upload Edit</h1>
          <p className="text-text-secondary">Share your transformative Kanye edit or compilation</p>
        </div>

        {/* Critical banner */}
        <div className="bg-accent-red/10 border border-accent-red/30 rounded-lg p-4 mb-6 flex gap-3">
          <AlertTriangle className="text-accent-red flex-shrink-0 mt-1" size={20} />
          <div>
            <p className="font-bold text-white mb-1">Edits and compilations only. No raw leaks.</p>
            <p className="text-sm text-text-secondary">
              Your upload must be a transformative work. All uploads go to pending review before publishing.
            </p>
          </div>
        </div>

        <form className="space-y-6 bg-surface-alt rounded-lg p-6 border border-border-subtle/20">
          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium mb-3">Audio File *</label>
            <div className="border-2 border-dashed border-border-subtle rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
              <input
                type="file"
                accept=".mp3,.wav,.flac,audio/mpeg,audio/wav,audio/flac"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                {file ? (
                  <div className="flex flex-col items-center gap-2">
                    <CheckCircle className="text-primary" size={48} />
                    <p className="font-medium">{file.name}</p>
                    <p className="text-sm text-text-secondary">
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center gap-2">
                    <UploadIcon className="text-text-secondary" size={48} />
                    <p className="font-medium">Click to upload or drag and drop</p>
                    <p className="text-sm text-text-secondary">MP3, WAV, FLAC (max 100MB)</p>
                  </div>
                )}
              </label>
            </div>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-2">
              Title *
            </label>
            <input
              id="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="e.g., Runaway (MBDTF Rebuild)"
            />
          </div>

          {/* Edit Type */}
          <div>
            <label htmlFor="editType" className="block text-sm font-medium mb-2">
              Edit Type *
            </label>
            <select
              id="editType"
              required
              value={editType}
              onChange={(e) => setEditType(e.target.value)}
              className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {EDIT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          {/* Era */}
          <div>
            <label htmlFor="era" className="block text-sm font-medium mb-2">
              Era (optional)
            </label>
            <select
              id="era"
              value={era}
              onChange={(e) => setEra(e.target.value)}
              className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select era</option>
              {ERAS.map((eraOption) => (
                <option key={eraOption} value={eraOption}>
                  {eraOption}
                </option>
              ))}
            </select>
          </div>

          {/* Short Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium mb-2">
              Short Description
            </label>
            <textarea
              id="description"
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Brief description for browsing"
            />
          </div>

          {/* Edit Description - REQUIRED with min 50 chars */}
          <div>
            <label htmlFor="editDescription" className="block text-sm font-medium mb-2">
              Edit Description * (Explain what you changed)
            </label>
            <textarea
              id="editDescription"
              required
              rows={4}
              minLength={50}
              value={editDescription}
              onChange={(e) => setEditDescription(e.target.value)}
              className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Describe what you changed: re-arranged sections, new mixing, rebuilt drums, added elements, etc. (minimum 50 characters)"
            />
            <p className="text-xs text-text-secondary mt-1">
              {editDescription.length}/50 characters minimum
            </p>
          </div>

          {/* Credits */}
          <div>
            <label htmlFor="credits" className="block text-sm font-medium mb-2">
              Credits (optional)
            </label>
            <textarea
              id="credits"
              rows={2}
              value={credits}
              onChange={(e) => setCredits(e.target.value)}
              className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Original producers, tools used (e.g., Ableton, stems)"
            />
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block text-sm font-medium mb-2">
              Tags (optional)
            </label>
            <input
              id="tags"
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full bg-surface border border-border-subtle px-4 py-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Comma separated (e.g., mbdtf, remix, 2010)"
            />
          </div>

          {/* Critical confirmation checkbox */}
          <div className="border-2 border-accent-red/30 bg-accent-red/5 rounded-lg p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={confirmNoLeak}
                onChange={(e) => setConfirmNoLeak(e.target.checked)}
                className="mt-1 w-4 h-4 accent-primary"
              />
              <div>
                <p className="font-bold text-white mb-1">
                  I confirm this is my own edit/compilation and NOT a raw or unaltered leak. *
                </p>
                <p className="text-xs text-text-secondary">
                  I understand raw leaks are strictly prohibited and may result in account penalties.
                </p>
              </div>
            </label>
          </div>

          {uploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Uploading...</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-surface rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={uploading || !file || !confirmNoLeak || editDescription.length < 50}>
            {uploading ? "Uploading..." : "Submit for Review"}
          </Button>

          <p className="text-xs text-text-secondary text-center">
            All uploads go to pending review. A moderator must approve before going public.
          </p>
        </form>
      </div>
    </main>
  );
}