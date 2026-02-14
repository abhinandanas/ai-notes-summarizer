"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useNotesStore from "../../store/notesStore";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const setSummary = useNotesStore((state) => state.setSummary);

  const handleGenerate = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const text = await file.text();

      const response = await fetch(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyBYnjziDxZWr5AZMWB5Q3JBeoWfUDuU1ao",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `Summarize these notes in a clear and concise way:\n\n${text}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const summary = data.candidates[0].content.parts[0].text;
      setSummary(summary);
      router.push("/summary");
    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 px-4 sm:px-6 md:px-8 py-10">
      
      <div className="w-full max-w-sm sm:max-w-md md:max-w-xl bg-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20 text-white">

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Upload Your Notes
        </h2>

        {/* File Input */}
        <div className="mb-4">
          <input
            type="file"
            accept=".txt"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full text-sm sm:text-base file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-indigo-700 file:cursor-pointer cursor-pointer"
          />
        </div>

        {/* Selected File */}
        {file && (
          <p className="text-sm text-gray-300 mb-4 break-words">
            Selected: {file.name}
          </p>
        )}

        {/* Button */}
        <button
          onClick={handleGenerate}
          disabled={!file || loading}
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed py-3 rounded-lg transition duration-200 font-semibold"
        >
          {loading ? "Generating..." : "Generate Summary"}
        </button>
      </div>
    </div>
  );
}
