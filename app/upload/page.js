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
            contents: [{
              parts: [{ text: `Summarize these notes in a clear and concise way:\n\n${text}` }]
            }]
          })
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
    <div className="max-w-xl mx-auto mt-10">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">
          Upload Your Notes
        </h2>

        <input
          type="file"
          accept=".txt"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />

        {file && (
          <p className="text-sm text-gray-300">
            Selected: {file.name}
          </p>
        )}

        <button
          onClick={handleGenerate}
          disabled={!file || loading}
          className="mt-6 bg-indigo-600 px-6 py-3 rounded disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Summary"}
        </button>
      </div>
    </div>
  );
}
