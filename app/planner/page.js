"use client";
import { useState } from "react";

export default function Planner() {
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState("");
  const [day, setDay] = useState("");
  const [hours, setHours] = useState("");

  const addSubject = () => {
    if (subject && day && hours) {
      setSubjects([
        ...subjects,
        { subject, day, hours }
      ]);
      setSubject("");
      setDay("");
      setHours("");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-6">
          Study Planner
        </h2>

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 mb-3 rounded bg-white/20 outline-none"
        />

        <input
          type="text"
          placeholder="Day (e.g. Monday)"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="w-full p-3 mb-3 rounded bg-white/20 outline-none"
        />

        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-white/20 outline-none"
        />

        <button
          onClick={addSubject}
          className="bg-indigo-600 px-4 py-2 rounded mb-4"
        >
          Add Plan
        </button>

        <ul className="space-y-3">
          {subjects.map((item, index) => (
            <li
              key={index}
              className="bg-white/20 p-3 rounded"
            >
              <p className="font-semibold">{item.subject}</p>
              <p className="text-sm text-gray-300">
                {item.day} • {item.hours} hours
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
