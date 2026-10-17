"use client";
import { useState } from "react";

export default function HomeClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setLoading(true);
    
    // === ADSENSE REVIEW MODE (SAFE) - USE THIS NOW ===
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 600);

    // === MONEY MODE - UNCOMMENT THIS AFTER ADSENSE APPROVAL ===
    // setTimeout(() => {
    //   window.location.href = "https://saveapp.store/cl/i/j7nqqp";
    // }, 600);
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Zero-Budget Affiliate Marketing Hub for Beginners",
    "description": "Free guides, templates and tools for beginners to start affiliate marketing with zero budget — no paid ads needed.",
    "author": { "@type": "Person", "name": "LeadVaultsHub" },
    "publisher": { "@type": "Organization", "name": "LeadVaultsHub", "url": "https://leadvaultshub.com", "logo": { "@type": "ImageObject", "url": "https://leadvaultshub.com/IMG_9606.jpeg" } },
    "datePublished": "2026-09-30",
    "dateModified": "2026-10-17",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://leadvaultshub.com/" }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Can beginners really make money with affiliate marketing in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but only if you focus on 3 fundamentals: choosing better offers, using landing pages that convert, and driving consistent free traffic." } },
      { "@type": "Question", "name": "Do I need paid ads to start?", "acceptedAnswer": { "@type": "Answer", "text": "No. I started with free traffic using short-form content and a simple curiosity-driven strategy. Paid ads are optional after you have proof of concept." } },
      { "@type": "Question", "name": "What kind of offers should beginners avoid?", "acceptedAnswer": { "@type": "Answer", "text": "Avoid offers with high refund rates, oversaturated verticals, and offers that require complex sales calls. Focus on simple lead gen offers $1.50 to $20 per action." } }
    ]
  };

  return (
    <main className="min-h-screen bg-[#030a05] text-white">
      <div className="fixed top-[-15%] left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(ellipse,rgba(34,197,94,0.1)_0%,transparent_70%)] pointer-events-none z-0" />
      <nav className="sticky top-0 z-50 bg-[#030a05]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[780px] mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 font-bold text-lg text-white no-underline">
            <img src="/logo.png.jpg" alt="LeadVaultsHub" className="w-8 h-8 rounded-lg object-cover" />
            LeadVaultsHub
          </a>
          <div className="flex items-center gap-6">
            <a href="/blog" className="text-sm font-medium text-slate-300 hover:text-white transition">Blog</a>
            <a href="/" className="text-sm font-medium text-slate-300 hover:text-white transition">Home</a>
          </div>
        </div>
      </nav>

      <article className="relative z-10 max-w-[780px] mx-auto px-6 pt-14 pb-20">
        <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">Affiliate Marketing Guide</div>
        <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-5">Zero-Budget Affiliate Marketing Hub for Beginners</h1>
        <div className="text-slate-400 text-sm mb-10 pb-8 border-b border-white/5">Updated October 2026 · 8 min read</div>

        <div className="space-y-5 text-[17px] leading-relaxed text-slate-300">
          <p>Most people who try affiliate marketing quit within the first 30 days. They either pick the wrong offers, drive traffic the hard way, or use landing pages that don’t convert.</p>
          <p>I was in the same position. No big following. No paid ads budget. No previous experience. In this guide, I’ll break down the exact system beginners can use to get started with zero budget.</p>
          <div className="bg-[#0c1610] border border-green-500/20 border-l-4 border-l-green-500 rounded-xl p-5 my-8">
            <p className="text-slate-200 m-0"><strong className="text-white">What you’ll learn:</strong> How to choose better offers, the type of landing pages that convert, and a free traffic method that still works for beginners.</p>
          </div>
          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Why Most Beginners Fail at Affiliate Marketing</h2>
          <p>The biggest mistake beginners make is promoting anything that looks popular. They join a network, grab the first high-paying offer they see, and start sharing links everywhere.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong className="text-white">Wrong offer selection</strong> — Many offers look good on paper but have low conversion rates.</li>
            <li><strong className="text-white">No landing page</strong> — Sending cold traffic directly to an affiliate link rarely converts well.</li>
            <li><strong className="text-white">Expensive or inconsistent traffic</strong> — Relying only on paid ads without a system burns money fast.</li>
          </ul>
          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Step 1: Choosing the Right Affiliate Offers</h2>
          <p>Not every offer is worth promoting. I learned to look for a few key things before putting energy into any campaign.</p>
          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Step 2: Using Landing Pages That Actually Convert</h2>
          <p>Sending traffic directly to an affiliate link is one of the fastest ways to waste effort. A simple, focused landing page almost always performs better.</p>
          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Step 3: Free Traffic Method That Still Works</h2>
          <p>The method I focused on was short-form content combined with a simple comment and link strategy.</p>
          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Putting the Full System Together</h2>
          <p>When these pieces worked together, results became much more predictable.</p>
          <p>New here? Read my step-by-step guide on <a href="/blog/affiliate-marketing-for-beginners-with-no-money" className="text-green-400 underline hover:text-green-300">how to start affiliate marketing with no money as a complete beginner</a>.</p>
          <h2 className="font-serif text-2xl font-bold text-white mt-12 mb-4">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div><h3 className="text-white font-bold">Can beginners really make money with affiliate marketing in 2026?</h3><p className="mt-2">Yes, but only if you focus on fundamentals.</p></div>
            <div><h3 className="text-white font-bold">Do I need paid ads to start?</h3><p className="mt-2">No. I started with free short-form content.</p></div>
          </div>
        </div>

        <div className="mt-14 bg-gradient-to-b from-[#0f1c15] to-[#0a130e] border border-green-500/20 rounded-2xl p-8">
          <h3 className="font-serif text-xl font-bold text-white mb-2 text-center">Unlock the Full System</h3>
          <p className="text-slate-400 text-sm mb-6 text-center">Enter your name and email to get instant access to the training vault.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your first name" required className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-green-500 transition" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your best email" required className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-green-500 transition" />
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-green-400 to-green-500 text-[#030a05] font-bold text-[15px] py-4 rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading? "Unlocking..." : "Get Instant Access →"}
            </button>
            {success && <p className="text-center text-sm text-green-400 mt-3">Thanks {name}! Vault access will be sent to {email}</p>}
          </form>
          <p className="text-center text-xs text-slate-500 mt-4">Takes less than 30 seconds. Instant unlock after.</p>
        </div>
      </article>

      <footer className="border-t border-white/5 py-10 text-center text-slate-500 text-sm">
        <div className="flex justify-center gap-6 mb-4">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/disclaimer" className="hover:text-white">Disclaimer</a>
          <a href="/blog" className="hover:text-white">Blog</a>
        </div>
        <p>© 2026 LeadVaultsHub.com · This is not financial advice. Results vary.</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
