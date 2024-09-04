import "./globals.css";
import "github-markdown-css/github-markdown-light.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ClientOnly } from "@/components/client-only";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Markdown Live Preview",
  description: "This is the online markdown editor with live preview.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Markdown Live Preview",
    description: "This is the online markdown editor with live preview.",
    url: "https://markdownlivepreview.vercel.app/",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}
