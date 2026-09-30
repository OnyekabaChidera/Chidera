"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [clickid, setClickid] = useState("");
  const LOCKER_URL = "https://saveapp.store/cl/i/j7nqqp";

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setClickid(params.get("clickid") || params.get("subid") || "");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name ||!email) return alert("Enter name and email");
    window.location.href = `${LOCKER_URL}?clickid=${clickid}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;
  };

  return (
    <main className="min-h-screen bg-[#030a05] text-white selection:bg-green-500/30 overflow-x-hidden">
      <nav className="fixed top-0 w-full z-50 bg-[#030a05]/80 backdrop-blur-2xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3 font-black text-xl tracking-tight">
            <img src="/IMG_9606.jpeg" alt="LeadVaultsHub logo" className="h-9 w-9 rounded-xl object-cover" />
            LeadVaultsHub
            <span className="hidden md:inline ml-3 px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold tracking-widest">VAULT 3.0 LIVE</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm text-white/50 font-medium">
            <a href="#inside">Inside Vault</a><a href="#results">Results</a><a href="#faq">FAQ</a>
          </div>
          <a href="#unlock" className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-black hover:bg-green-400 transition">Unlock Access</a>
        </div>
      </nav>

      <section className="pt-36 pb-20 px-6 max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 text-green-300 text-xs font-bold mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /> PRIVATE VAULT — HOW I MADE $1,247
          </div>
          <h1 className="text-[42px] md:text-[74px] font-black leading-[0.85] tracking-[-0.04em] mb-6">
            The All-in-One
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-green-300">Affiliate Vault</span>
            That Prints Daily Leads
          </h1>
          <p className="text-[17px] leading-7 text-white/60 max-w-[580px] mb-8">
            LeadVaultsHub is a private training vault for affiliate marketing. Enter your details to get access control, complete a quick verification, and unlock the full system: 35-minute blueprint, 3 proven landing pages, email follow-up sequence, and the TikTok traffic method that built my first $1,247 month. Built for beginners who want real implementation, not theory.
          </p>
          <div className="grid grid-cols-3 gap-3 max-w-lg">
            <div className="bg-[#0a1710] border border-white/5 rounded-2xl p-4"><div className="text-2xl font-black text-green-400">2000+</div><div className="text-[11px] text-white/40 uppercase tracking-widest">Hours Saved</div></div>
            <div className="bg-[#0a1710] border border-white/5 rounded-2xl p-4"><div className="text-2xl font-black text-green-400">40%+</div><div className="text-[11px] text-white/40 uppercase tracking-widest">Page CVR</div></div>
            <div className="bg-[#0a1710] border border-white/5 rounded-2xl p-4"><div className="text-2xl font-black text-green-400">$1,247</div><div className="text-[11px] text-white/40 uppercase tracking-widest">First Month</div></div>
          </div>
        </div>

        <div id="unlock" className="relative">
          <div className="absolute -inset-6 bg-gradient-to-br from-green-500/30 to-emerald-500/10 blur-[40px] rounded-[40px]" />
          <div className="relative bg-gradient-to-b from-[#101f17] to-[#080f0a] border border-white/10 rounded-[32px] p-8 shadow-[0_20px_80px_rgba(34,197,94,0.15)]">
            <div className="flex justify-between items-center mb-2"><h3 className="font-black text-xl">Unlock Private Access</h3><span className="text-[11px] font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full animate-pulse">37 LEFT</span></div>
            <p className="text-xs text-white/40 mb-6">Verification takes 30 seconds. Instant unlock after.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input value={name} onChange={e=>setName(e.target.value)} placeholder="Your first name" className="w-full p-4 rounded-2xl bg-black/60 border border-white/10 outline-none focus:border-green-500/50 text-white" required />
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your best email" className="w-full p-4 rounded-2xl bg-black/60 border border-white/10 outline-none focus:border-green-500/50 text-white" required />
              <button className="w-full bg-gradient-to-r from-green-400 to-emerald-500 text-black py-5 rounded-2xl font-black text-[17px] shadow-xl shadow-green-500/20 hover:scale-[1.01] transition">Unlock Free Training Now →</button>
            </form>
          </div>
        </div>
      </section>

      <section id="inside" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center tracking-tight mb-4">Complete 360° Vault Under One Roof</h2>
        <p className="text-center text-white/40 max-w-2xl mx-auto mb-14">Comprehensive templates and traffic systems — not just theory.</p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#0d1a12] border border-white/5 rounded-[24px] p-8"><h3 className="font-bold mb-2">Offer Vault + Blacklist</h3><p className="text-sm text-white/50">Which offers pay $1.80+ EPC and which to avoid. Updated monthly.</p></div>
          <div className="bg-[#0d1a12] border border-white/5 rounded-[24px] p-8"><h3 className="font-bold mb-2">3 Landing Pages 40%+ CVR</h3><p className="text-sm text-white/50">Copy-paste psychology that beats direct link by 3.2x.</p></div>
          <div className="bg-[#0d1a12] border border-white/5 rounded-[24px] p-8"><h3 className="font-bold mb-2">TikTok Traffic Engine</h3><p className="text-sm text-white/50">0 to 10k views without ads. Hook scripts and comment funnel.</p></div>
        </div>
      </section>

      <section id="results" className="py-24 px-6 bg-[#0a1710] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Real Members Inside</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0f1f17] border border-white/5 rounded-3xl p-8"><div className="text-yellow-400">★★★★★</div><p className="mt-3 text-white/70 text-sm">"Hit $8,200 in 60 days after using his swipes."</p><div className="mt-4 font-bold text-sm">Sarah Chen - Texas</div></div>
            <div className="bg-[#0f1f17] border border-white/5 rounded-3xl p-8"><div className="text-yellow-400">★★★★★</div><p className="mt-3 text-white/70 text-sm">"Conversion 12% to 44% overnight."</p><div className="mt-4 font-bold text-sm">Marcus Lopez - UK</div></div>
            <div className="bg-[#0f1f17] border border-white/5 rounded-3xl p-8"><div className="text-yellow-400">★★★★★</div><p className="mt-3 text-white/70 text-sm">"Made first $47 in 3 days from Onitsha."</p><div className="mt-4 font-bold text-sm">Chinedu O. - Onitsha NG</div></div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-black text-center mb-10">FAQ</h2>
        <div className="space-y-4 text-sm text-white/60 leading-6">
          <div className="bg-[#0d1a12] border border-white/5 rounded-2xl p-6"><b className="text-white block mb-2">What am I unlocking?</b> 35-min blueprint, 3 landing pages, email swipes, TikTok hooks, offer list.</div>
          <div className="bg-[#0d1a12] border border-white/5 rounded-2xl p-6"><b className="text-white block mb-2">Need ads?</b> No. Free traffic method included.</div>
          <div className="bg-[#0d1a12] border border-white/5 rounded-2xl p-6"><b className="text-white block mb-2">For Nigeria?</b> Yes. Built from Onitsha. Works worldwide.</div>
        </div>
      </section>

      <footer className="py-12 text-center border-t border-white/5 text-xs text-white/20">© 2026 LeadVaultsHub.com — All Rights Reserved.</footer>
    </main>
  );
}
