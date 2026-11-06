"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#030a05] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          LeadVaults<span className="text-green-400">Hub</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link>
          <Link href="/shop" className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full">Shop Landers</Link>
          <button onClick={() => setOpen(!open)} className="text-2xl p-2">{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-white/10 px-4 py-4 flex flex-col gap-1 bg-[#030a05]">
          <Link href="/networks" onClick={() => setOpen(false)} className="py-3 px-3 rounded-xl text-base hover:bg-white/10">Networks</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="py-3 px-3 rounded-xl text-base hover:bg-white/10">Shop</Link>
        </nav>
      )}
    </header>
  );
}
