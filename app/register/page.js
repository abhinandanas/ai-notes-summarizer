"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/authStore";

export default function RegisterPage() {
  const router = useRouter();
  const register = useAuthStore((state) => state.register);

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
      router.push("/");
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 px-4 sm:px-6 md:px-8 py-10">
      
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-6">

          {error && (
            <p className="text-red-300 text-sm text-center">{error}</p>
          )}

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm sm:text-base text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm sm:text-base text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm sm:text-base text-white">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 active:scale-95 text-white py-3 rounded-lg transition duration-200 font-semibold"
          >
            Register
          </button>
        </form>

        {/* Login link */}
        <p className="text-sm sm:text-base text-center text-white mt-6">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="cursor-pointer underline hover:text-purple-300 transition"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
