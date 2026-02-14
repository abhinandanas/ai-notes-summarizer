"use client";
import useNotesStore from "../../store/notesStore";

export default function Summary() {
  const summary = useNotesStore((state) => state.summary);

  return (
    <div className="max-w-3xl mx-auto mt-10 px-4">
      <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Notes Summary
        </h2>

        <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
          {summary || "No summary generated yet. Upload notes to get started."}
        </p>
      </div>
    </div>
  );
}
