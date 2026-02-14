"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 px-6 py-4">
      
      <div className="flex justify-between items-center">
        
        <h1 className="text-lg sm:text-xl font-bold tracking-wide">
          AI Study Planner
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm">
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

        {/* Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 text-sm">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/upload" onClick={() => setIsOpen(false)}>
            Upload
          </Link>
          <Link href="/summary" onClick={() => setIsOpen(false)}>
            Summary
          </Link>
          <Link href="/flashcards" onClick={() => setIsOpen(false)}>
            Flashcards
          </Link>
          <Link href="/planner" onClick={() => setIsOpen(false)}>
            Planner
          </Link>
        </div>
      )}
    </nav>
  );
}
