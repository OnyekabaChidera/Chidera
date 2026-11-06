"use client";
import { useState } from "react";
import Link from "next/link";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export default function Header() {
  const [open, setOpen] = useState(false);
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
        <nav className="hidden md:flex items-center gap-7">
          <Link href="/blog" className={`${manrope.className} text-[15px] font-bold text-neutral-300 hover:text-white`}>Blog</Link>
          <Link href="/" className={`${manrope.className} text-[15px] font-bold text-neutral-300 hover:text-white`}>Home</Link>
          <Link href="/networks" className="text-[15px] font-normal text-neutral-300 hover:text-white">Networks</Link>
          <Link href="/shop" className="text-[15px] font-normal text-neutral-300 hover:text-white">Shop</Link>
          <Link href="/shop" className={`${manrope.className} bg-white text-black text-[14px] font-bold px-4 py-2 rounded-full`}>Shop Landers →</Link>
        </nav>

        {/* MOBILE - SAME SIZE, NOW THICKER LIKE BEFORE */}
        <div className="flex md:hidden items-center gap-4 ml-auto">
          <Link href="/blog" className={`${manrope.className} text-[15px] font-bold tracking-[-0.01em] text-white leading-none flex items-center h-8`}>Blog</Link>
          <Link href="/" className={`${manrope.className} text-[15px] font-bold tracking-[-0.01em] text-white leading-none flex items-center h-8`}>Home</Link>
          <button onClick={() => setOpen(!open)} className="w-8 h-8 flex items-center justify-center text-[22px] leading-none text-white ml-1">{open ? "✕" : "☰"}</button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <nav className="md:hidden border-t border-white/10 px-6 py-5 flex flex-col gap-5 bg-[#030a05]">
          <Link href="/networks" onClick={() => setOpen(false)} className="text-[16px] font-normal text-neutral-200">Networks</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className="text-[16px] font-normal text-neutral-200">Shop</Link>
          <Link href="/shop" onClick={() => setOpen(false)} className={`${manrope.className} bg-white text-black text-center text-[15px] font-bold tracking-[-0.01em] px-6 py-3.5 rounded-full`}>Shop Landers →</Link>
        </nav>
      )}
    </header>
  );
}
