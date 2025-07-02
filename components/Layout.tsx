// components/Layout.tsx

import Head from "next/head";
import Link from "next/link";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function Layout({
  children,
  title = "CodeVerse - Developer Blog",
  description = "A blog for developers built with Next.js and TypeScript",
}: LayoutProps) {
  return (
    <>
      {/* ✅ SEO nâng cao: title, description, social sharing */}
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:url" content="https://codeverse.vercel.app" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@your_twitter" />

        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="w-full shadow mb-6">
        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-purple-700">
            CodeVerse
          </Link>
          <nav className="flex gap-4">
            <Link href="/" className="text-gray-600 hover:text-purple-700">
              Home
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-purple-700"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
