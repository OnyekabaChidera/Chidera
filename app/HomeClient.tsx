"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Networks", href: "/networks" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-[#030a05]/90 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[780px] mx-auto px-6 py-3.5 flex items-center justify-between">
        <Link href="/" className="relative flex items-center gap-2.5 no-underline">
          <img src="/logo.png.jpg" alt="LeadVaultsHub" className="w-8 h-8 rounded-lg object-cover relative z-10" />
          <span className="text-lg font-bold tracking-tight relative z-10">
            <span className="text-white">LeadVaults</span>
            <span className="text-[#86efac]">Hub</span>
          </span>
          <span className="pointer-events-none absolute left-[82%] top-[75%] h-[16px] w-[32px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22c55e]/15 blur-[8px] z-0" />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <Link key={l.name} href={l.href} className="text-sm font-medium text-slate-300 hover:text-white transition">{l.name}</Link>
          ))}
        </div>
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setOpen(!open)} className="text-xl p-2 text-white">{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && (
        <nav className="md:hidden border-t border-white/5 px-6 py-4 flex flex-col gap-1 bg-[#030a05]">
          {links.map((l) => (
            <Link key={l.name} href={l.href} onClick={() => setOpen(false)} className="py-3 text-sm font-medium text-slate-300 hover:text-white">{l.name}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
