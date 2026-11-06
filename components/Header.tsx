"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#030a05] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-black text-sm">LV</span>
          LeadVaults<span className="text-green-400">Hub</span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link>
          <Link href="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
          <button onClick={() => setOpen(!open)} className="text-2xl p-1">{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-6 py-6 flex flex-col gap-6 bg-[#030a05]">
          <Link href="/networks" onClick={() => setOpen(false)} className="text-2xl">Networks</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="text-2xl">Shop</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="bg-white text-black text-center text-xl font-bold px-6 py-4 rounded-full">Shop Landers →</Link>
        </nav>
      )}
    </header>
  );
}
