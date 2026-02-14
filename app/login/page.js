"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "../../store/authStore";

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await login(email, password);
      router.push("/");
    } catch (err) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 px-4 sm:px-6 md:px-8 py-10">
      
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white/10 backdrop-blur-xl p-6 sm:p-8 md:p-10 rounded-2xl shadow-2xl border border-white/20">

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8">
          Welcome Back
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">

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
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 active:scale-95 text-white py-3 rounded-lg transition duration-200 font-semibold"
          >
            Login
          </button>
        </form>

        {/* Register link */}
        <p className="text-sm sm:text-base text-center text-white mt-6">
          Don’t have an account?{" "}
          <span
            onClick={() => router.push("/register")}
            className="cursor-pointer underline hover:text-purple-300 transition"
          >
            Register
          </span>
        </p>

      </div>
    </div>
  );
}
