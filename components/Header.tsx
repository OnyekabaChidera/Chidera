"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Networks", href: "/networks" },
    { name: "Shop", href: "/shop" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#12161c]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg">
          LeadVaults<span className="text-green-400">Hub</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.name} href={l.href} className="text-sm text-gray-300 hover:text-white">{l.name}</Link>
          ))}
          <Link href="/shop" className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full">Shop Landers</Link>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <Link href="/blog" className="bg-white text-black text-sm font-bold px-4 py-2 rounded-full">Blog</Link>
          <button onClick={() => setOpen(!open)} className="text-2xl p-2">{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-white/10 px-4 py-4 flex flex-col gap-1 bg-[#12161c]">
          {links.map((l) => (
            <Link key={l.name} href={l.href} onClick={() => setOpen(false)} className="py-3 px-3 rounded-xl text-base hover:bg-white/10">{l.name}</Link>
          ))}
          <Link href="/shop" onClick={() => setOpen(false)} className="mt-2 text-center bg-white text-black font-bold py-3 rounded-full">Shop Landers →</Link>
        </nav>
      )}
    </header>
  );
}
