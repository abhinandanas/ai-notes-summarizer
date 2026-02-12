"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white/10 backdrop-blur-md border-b border-white/20">
      <h1 className="text-xl font-bold tracking-wide">
        AI Study Planner
      </h1>

      <div className="space-x-6 text-sm">
        <Link href="/" className="hover:text-indigo-300">
          Home
        </Link>
        <Link href="/upload" className="hover:text-indigo-300">
          Upload
        </Link>
        <Link href="/summary" className="hover:text-indigo-300">
          Summary
        </Link>
        <Link href="/flashcards" className="hover:text-indigo-300">
  Flashcards
</Link>

        <Link href="/planner" className="hover:text-indigo-300">
          Planner
        </Link>
      </div>
    </nav>
  );
}
