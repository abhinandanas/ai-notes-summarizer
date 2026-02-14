"use client";
import { useState } from "react";

export default function Planner() {
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState("");
  const [day, setDay] = useState("");
  const [hours, setHours] = useState("");

  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const addSubject = () => {
    if (subject && day && hours) {
      setSubjects([...subjects, { subject, day, hours }]);
      setSubject("");
      setDay("");
      setHours("");
    }
  };

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-8 bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white">

      {/* Heading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-center">
        Weekly Study Planner
      </h2>

      {/* Input Section */}
      <div className="w-full max-w-xl mx-auto bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl mb-8 sm:mb-10">
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-3 mb-3 rounded bg-white/20 outline-none text-sm sm:text-base"
        />

        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="w-full p-3 mb-3 rounded bg-white/20 outline-none text-sm sm:text-base"
        >
          <option value="">Select Day</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Hours"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="w-full p-3 mb-4 rounded bg-white/20 outline-none text-sm sm:text-base"
        />

        <button
          onClick={addSubject}
          className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded w-full text-sm sm:text-base"
        >
          Add Plan
        </button>
      </div>

      {/* Weekly Grid */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 min-w-[700px] lg:min-w-0">
          {days.map((d) => (
            <div
              key={d}
              className="bg-white/10 backdrop-blur-md p-4 rounded-xl min-h-[180px]"
            >
              <h3 className="font-bold text-sm sm:text-base mb-3 text-center border-b border-white/20 pb-2">
                {d}
              </h3>

              <div className="space-y-2">
                {subjects
                  .filter((item) => item.day === d)
                  .map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/20 p-2 rounded text-xs sm:text-sm"
                    >
                      <p className="font-semibold">
                        {item.subject}
                      </p>
                      <p className="text-gray-200">
                        {item.hours} hours
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
