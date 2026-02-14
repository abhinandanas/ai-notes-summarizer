"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 py-10 sm:py-14">

      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
        Study Smarter with AI
      </h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl transition duration-300 hover:scale-[1.03] active:scale-100">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Upload Notes
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Upload PDFs and generate summaries instantly.
          </p>
          <Link
            href="/upload"
            className="text-indigo-400 hover:underline"
          >
            Go →
          </Link>
        </div>

        {/* Card 2 */}
        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl transition duration-300 hover:scale-[1.03] active:scale-100">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            View Summary
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Get key points and simplified explanations.
          </p>
          <Link
            href="/summary"
            className="text-indigo-400 hover:underline"
          >
            Go →
          </Link>
        </div>

        {/* Card 3 */}
        <div className="bg-white/10 backdrop-blur-md p-5 sm:p-6 rounded-xl transition duration-300 hover:scale-[1.03] active:scale-100">
          <h3 className="text-lg sm:text-xl font-semibold mb-3">
            Study Planner
          </h3>
          <p className="text-gray-300 text-sm mb-4">
            Organize subjects by days and hours.
          </p>
          <Link
            href="/planner"
            className="text-indigo-400 hover:underline"
          >
            Go →
          </Link>
        </div>

      </div>
    </div>
  );
}
