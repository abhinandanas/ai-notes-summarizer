"use client";
import { useState } from "react";

export default function Flashcards() {
  const cards = [
    {
      question: "What is React?",
      answer: "A JavaScript library for building UI."
    },
    {
      question: "What is Next.js?",
      answer: "A React framework for full-stack apps."
    },
    {
      question: "What is Tailwind CSS?", 
      answer: "A utility-first CSS framework."
    }
  ];

  const [flipped, setFlipped] = useState(null);

  return (
    <div className="mt-16 text-center">
      <h1 className="text-3xl font-bold mb-10">
        Flashcards
      </h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="perspective"
            onClick={() =>
              setFlipped(flipped === index ? null : index)
            }
          >
            <div
              className={`relative w-full h-40 transition-transform duration-500 transform-style ${
                flipped === index ? "rotate-y-180" : ""
              }`}
            >

              <div className="absolute w-full h-full bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center p-4 backface-hidden">
                {card.question}
              </div>


              <div className="absolute w-full h-full bg-indigo-600 rounded-xl flex items-center justify-center p-4 rotate-y-180 backface-hidden">
                {card.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
