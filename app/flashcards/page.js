"use client";
import { useState } from "react";

export default function Flashcards() {
  const cards = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building UI.",
    },
    {
      question: "What is Next.js?",
      answer: "A React framework for full-stack apps.",
    },
    {
      question: "What is Tailwind CSS?",
      answer: "A utility-first CSS framework.",
    },
  ];

  const [flipped, setFlipped] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white px-4 sm:px-8 py-12">
      
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
        Flashcards
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative w-full h-48 sm:h-56 cursor-pointer"
            onClick={() =>
              setFlipped(flipped === index ? null : index)
            }
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] ${
                flipped === index ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute w-full h-full bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center p-6 text-center [backface-visibility:hidden] shadow-lg">
                <p className="text-base sm:text-lg font-semibold">
                  {card.question}
                </p>
              </div>

              {/* Back */}
              <div className="absolute w-full h-full bg-indigo-600 rounded-xl flex items-center justify-center p-6 text-center rotate-y-180 [backface-visibility:hidden] shadow-lg">
                <p className="text-base sm:text-lg">
                  {card.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Custom styles for flip */}
      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
