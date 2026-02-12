"use client";

import "./globals.css";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const hideNavbar =
    pathname === "/login" || pathname === "/register";

  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white">
        {!hideNavbar && <Navbar />}
        <div className="px-6 py-10">{children}</div>
      </body>
    </html>
  );
}
