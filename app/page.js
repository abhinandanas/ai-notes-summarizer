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
    <div className="mt-16 text-center">
      <h1 className="text-4xl font-bold mb-6">
        Study Smarter with AI
      </h1>

      <div className="grid md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
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

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
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

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">
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
