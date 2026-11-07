"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const shopFont = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
  return (
    <header className="sticky top-0 z-50 bg-[#030a05] border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO - UNTOUCHED */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <img src="/logo.png.jpg" alt="LeadVaultsHub" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-[18px] font-medium tracking-[-0.02em] leading-none">
            <span className="text-white">LeadVaults</span>
            <span className="text-[#86efac]">Hub</span>
          </span>
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex items-center gap-5">
          <Link href="/blog" className="text-sm font-medium text-white">Blog</Link>
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white">Home</Link>
          <Link href="/networks" className="text-[15px] font-normal text-neutral-300 hover:text-white">Networks</Link>
          <Link href="/shop" className="text-[15px] font-normal text-neutral-300 hover:text-white">Shop</Link>
          <Link href="/shop" style={{ fontFamily: shopFont, fontWeight: 500 }} className="bg-white text-black text-[14px] px-4 py-2 rounded-full">Shop Landers →</Link>
        </nav>

        {/* MOBILE - SMALLER, SLIGHTLY THICK, MODERN, RIGHT TO HAMBURGER */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
          <Link href="/blog" className="text-sm font-medium text-white leading-none flex items-center h-8">Blog</Link>
          <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white leading-none flex items-center h-8">Home</Link>
          <button onClick={() => setOpen(!open)} className="w-8 h-8 flex items-center justify-center text-[22px] leading-none text-white ml-1">{open ? "✕" : "☰"}</button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <nav className="md:hidden border-t border-white/10 px-6 py-5 flex flex-col gap-5 bg-[#030a05]">
          <Link href="/networks" onClick={() => setOpen(false)} className="text-[16px] font-normal text-neutral-200">Networks</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="text-[16px] font-normal text-neutral-200">Shop</Link>
          <Link href="/shop" onClick={() => setOpen(false)} style={{ fontFamily: shopFont, fontWeight: 500 }} className="bg-white text-black text-center text-[15px] tracking-[-0.01em] px-6 py-3.5 rounded-full">Shop Landers →</Link>
        </nav>
      )}
    </header>
  );
}
