"use client";
import { useState } from "react";

export default function Upload() {
  const [file, setFile] = useState(null);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">
          Upload Your Notes
        </h2>

        <input
          type="file"
          accept=".pdf"
          onChange={(e) => setFile(e.target.files[0])}
          className="mb-4"
        />

        {file && (
          <p className="text-sm text-gray-300">
            Selected: {file.name}
          </p>
        )}

        <button className="mt-6 bg-indigo-600 px-6 py-3 rounded">
          Generate Summary
        </button>
      </div>
    </div>
  );
}
