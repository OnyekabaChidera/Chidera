"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-[#030a05] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LEFT: YOUR ORIGINAL LOGO + NAME - UNCHANGED */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png.jpg" alt="LeadVaultsHub" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-lg font-bold tracking-tight">
            <span className="text-white">LeadVaults</span>
            <span className="text-[#86efac]">Hub</span>
          </span>
        </Link>

        {/* DESKTOP: Full nav - visible on md+ only */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link>
          <Link href="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
          <Link href="/networks" className="text-sm text-gray-300 hover:text-white">Networks</Link>
          <Link href="/shop" className="text-sm text-gray-300 hover:text-white">Shop</Link>
          <Link href="/shop" className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full">Shop Landers →</Link>
        </nav>

        {/* MOBILE: Blog + Home + Hamburger - visible on mobile only */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/blog" className="text-sm text-gray-300 hover:text-white">Blog</Link>
          <Link href="/" className="text-sm text-gray-300 hover:text-white">Home</Link>
          <button onClick={() => setOpen(!open)} className="text-2xl p-1">{open ? "✕" : "☰"}</button>
        </div>
      </div>

      {/* MOBILE DROPDOWN - only on mobile */}
      {open && (
        <nav className="md:hidden border-t border-white/10 px-6 py-6 flex flex-col gap-6 bg-[#030a05]">
          <Link href="/networks" onClick={() => setOpen(false)} className="text-2xl">Networks</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="text-2xl">Shop</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="bg-white text-black text-center text-xl font-bold px-6 py-4 rounded-full">Shop Landers →</Link>
        </nav>
      )}
    </header>
  );
}
