"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/authStore";

export default function RegisterPage() {
  const router = useRouter();
  const register = useAuthStore((state) => state.register);

  const [name, setName] = useState(""); // optional for now
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await register(email, password);
      router.push("/planner");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <div>
            <label className="block mb-2 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 text-black dark:text-white"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 text-black dark:text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 text-black dark:text-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 border rounded-lg dark:bg-gray-700 text-black dark:text-white"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="text-blue-600 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
