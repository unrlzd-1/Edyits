import type { Metadata } from "next";
import "./globals.css";
import { SessionProvider } from "@/components/providers/SessionProvider";

export const metadata: Metadata = {
  title: "Edyits - Kanye West Edits & Compilations",
  description:
    "A community hub for compilations of Kanye West leaks and fan-made edits of those leaks. Edits and compilations only. No raw leaks.",
  keywords: ["kanye west", "kanye edits", "kanye leaks", "fan edits", "compilations", "remix"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}