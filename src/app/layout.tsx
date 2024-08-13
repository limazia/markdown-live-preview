import "./globals.css";

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
  /*
  openGraph: {
    title: "Acacio de Lima (@limazia)",
    description: "Desenvolvedor FullStack / Brasil / limadeacacio@gmail.com",
    url: "https://limazia.dev",
    images: ["https://www.limazia.dev/images/og.jpg"],
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
  */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased">
        <ClientOnly>{children}</ClientOnly>
      </body>
    </html>
  );
}
