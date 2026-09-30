"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clickid, setClickid] = useState("");
  const LOCKER_URL = "https://saveapp.store/cl/i/j7nqqp";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const cid = params.get("clickid") || params.get("subid") || "";
    setClickid(cid);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name ||!email) return alert("Please enter your name and email");
    window.location.href = `${LOCKER_URL}?clickid=${clickid}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
  };

  return (
    <main className="min-h-screen bg-[#030a05] text-white font-sans selection:bg-green-500/30">
      <nav className="fixed top-0 w-full z-50 bg-[#030a05]/70 backdrop-blur-2xl border-b border-white/[0.05] px-6 py-4 flex justify-between items-center">
        <div className="flex gap-2 items-center font-bold text-xl tracking-tight">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center text-black font-black">L</div>
          LeadVaultsHub
          <span className="ml-2 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px]">LIVE ACCESS</span>
        </div>
      </nav>

      <section className="pt-32 pb-24 px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-400 text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span> PRIVATE VAULT — HOW I MADE $1,247
          </div>
          <h1 className="text-5xl md:text-[68px] font-black leading-[0.9] tracking-tight mb-6">
            Turn <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Simple Traffic</span> Into Daily Commissions
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">
            LeadVaultsHub is a private training vault for affiliate marketing. Enter your details to get access control, complete a quick verification, and unlock the full system: 35-minute blueprint, 3 proven landing pages, email follow-up sequence, and the TikTok traffic method that built my first $1,247 month. Built for beginners who want real implementation, not theory.
          </p>

          <div className="flex gap-3 mb-8">
            <div className="bg-[#0a1710] border border-white/5 rounded-2xl p-4 flex-1"><div className="text-2xl font-black text-green-400">40%+</div><div className="text-xs text-white/40">Page Conversion</div></div>
            <div className="bg-[#0a1710] border border-white/5 rounded-2xl p-4 flex-1"><div className="text-2xl font-black text-green-400">3,200+</div><div className="text-xs text-white/40">Members Inside</div></div>
            <div className="bg-[#0a1710] border border-white/5 rounded-2xl p-4 flex-1"><div className="text-2xl font-black text-green-400">$1,247</div><div className="text-xs text-white/40">First Month Result</div></div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-3xl rounded-[40px]"></div>
          <div className="relative bg-gradient-to-b from-[#0f1f17] to-[#080f0a] border border-white/10 rounded-[32px] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">🔓 Unlock Private Access</h3>
              <span className="text-xs text-red-400 animate-pulse font-bold">37 Spots Left</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Your first name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-4 rounded-2xl bg-black/50 border border-white/10 text-white outline-none focus:border-green-500/50 transition" required />
              <input type="email" placeholder="Your best email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 rounded-2xl bg-black/50 border border-white/10 text-white outline-none focus:border-green-500/50 transition" required />
              <button type="submit" className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black py-5 rounded-2xl text-lg font-black shadow-xl shadow-green-500/20 hover:scale-[1.02] transition">
                Get Instant Access →
              </button>
            </form>
            <p className="text-[11px] text-white/30 text-center mt-4">Secure verification required to prevent bot access. Takes 30 seconds.</p>

            <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-2 gap-3 text-xs text-white/40">
              <div>✓ Beginner friendly</div><div>✓ No paid ads</div>
              <div>✓ Templates included</div><div>✓ Instant unlock</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-[#07120a] border-y border-white/[0.03]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Inside The Vault</h2>
          <p className="text-center text-white/40 max-w-2xl mx-auto mb-12">Everything I used to go from $0 to $1,247. No fluff. Just templates, traffic, and conversion.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0a1710] border border-white/5 rounded-3xl p-8 hover:border-green-500/20 transition"><div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4 text-xl">📦</div><h3 className="font-bold mb-2">Offer Selection System</h3><p className="text-sm text-white/50">How to pick offers that pay $1.80+ per lead and avoid saturated ones. Includes my top 7 for beginners.</p></div>
            <div className="bg-[#0a1710] border border-white/5 rounded-3xl p-8 hover:border-green-500/20 transition"><div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4 text-xl">🎨</div><h3 className="font-bold mb-2">3 Pages That Convert 40%+</h3><p className="text-sm text-white/50">Copy-paste landing pages with breakdown of headlines, colors, and placement that triple conversions.</p></div>
            <div className="bg-[#0a1710] border border-white/5 rounded-3xl p-8 hover:border-green-500/20 transition"><div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center mb-4 text-xl">🚀</div><h3 className="font-bold mb-2">TikTok Free Traffic</h3><p className="text-sm text-white/50">My exact hook scripts, posting time, and comment strategy to drive daily free leads without spending on ads.</p></div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-black text-center mb-12">Members Inside The Vault</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0d1a12] border border-white/5 rounded-3xl p-8"><div className="text-yellow-400 mb-3">★★★★★</div><p className="text-white/80 text-sm">"This is the first system that actually showed me the backend. Hit $8,200 in 60 days."</p><div className="mt-4 font-bold text-sm">Sarah Chen - Texas</div></div>
          <div className="bg-[#0d1a12] border border-white/5 rounded-3xl p-8"><div className="text-yellow-400 mb-3">★★★★★</div><p className="text-white/80 text-sm">"Used the landing templates. Conversion jumped from 12% to 44% overnight."</p><div className="mt-4 font-bold text-sm">Marcus Lopez - London</div></div>
          <div className="bg-[#0d1a12] border border-white/5 rounded-3xl p-8"><div className="text-yellow-400 mb-3">★★★★★</div><p className="text-white/80 text-sm">"From Onitsha, made my first $47 in 3 days with the TikTok method. It's real."</p><div className="mt-4 font-bold text-sm">Chinedu O. - Onitsha NG</div></div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 text-xs text-white/20">© 2026 LeadVaultsHub.com — Private Affiliate Marketing Training Vault. All Rights Reserved.</footer>
    </main>
  )
}
