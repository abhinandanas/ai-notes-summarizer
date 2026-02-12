"use client";

import { useState } from "react";

export default function Flashcard({ question, answer }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className="w-full max-w-md h-64 perspective cursor-pointer"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform ${
          flipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div
          className="absolute w-full h-full bg-indigo-600 text-white rounded-2xl flex items-center justify-center p-6 shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          <h2 className="text-xl font-semibold text-center">
            {question}
          </h2>
        </div>

        {/* Back */}
        <div
          className="absolute w-full h-full bg-white text-black rounded-2xl flex items-center justify-center p-6 shadow-xl transform rotate-y-180"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-lg text-center">{answer}</p>
        </div>
      </div>
    </div>
  );
}
