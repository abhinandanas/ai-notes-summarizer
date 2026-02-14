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
      router.push("/home"); // redirect after register
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
        
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create Account
        </h1>

        <form onSubmit={handleRegister} className="space-y-5">
          
          {error && (
            <p className="text-red-300 text-sm text-center">{error}</p>
          )}

          <div>
            <label className="block mb-2 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-white">
              Password
            </label>
            <input
              type="password"
              placeholder="Create password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-white">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition"
          >
            Register
          </button>
        </form>

        <p className="text-sm text-center text-white mt-4">
          Already have an account?{" "}
          <span
            onClick={() => router.push("/login")}
            className="cursor-pointer underline"
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
