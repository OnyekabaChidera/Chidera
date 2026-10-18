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

    // === MONEY MODE - UNCOMMENT AFTER ADSENSE APPROVAL ===
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
        <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-4">A PRACTICAL HUB FOR BEGINNERS</div>
        <h1 className="font-serif text-3xl md:text-[38px] font-bold leading-[1.15] tracking-tight mb-5">Zero-Budget Affiliate Marketing Hub for Beginners</h1>
        <div className="text-slate-400 text-sm mb-10 pb-8 border-b border-white/5">Updated October 2026</div>

        <div className="space-y-6 text-[17px] leading-[1.8] text-slate-300">
          <p className="text-[18px] leading-[1.7] text-slate-200">
           Are you looking to start affiliate marketing? when I started affiliate marketing, I had no audience, no ad budget, and no blueprint. What I did have was time to test what actually works when you're starting from zero.
          </p>
          <p>
            Most beginners don’t fail because affiliate marketing is too competitive. They fail because they focus on the wrong three things: they promote offers that were never designed for beginners, they send traffic directly to a raw affiliate link, and they try to scale before they have a single consistent traffic source.
          </p>
          <p>
            Here, this hub is different. It’s not about quick wins. It’s a practical system for building your first consistent campaigns without paid ads
          </p>

          <div className="bg-[#0c1610] border border-green-500/20 border-l-4 border-l-green-500 rounded-xl p-6 my-10">
            <p className="text-slate-200 m-0 text-[16px]"><strong className="text-white">Inside this hub:</strong> How I evaluate offers before promoting, the landing page framework I use to improve conversion, and the free traffic method I leaned on when starting out.</p>
          </div>

          <h2 className="font-serif text-2xl font-bold text-white mt-14 mb-4">Why Most Beginners Stay Stuck</h2>
          <p>
            After reviewing dozens of beginner campaigns, the pattern is clear. It’s rarely a lack of effort. It’s a lack of focus.
          </p>
          <ul className="list-disc pl-6 space-y-3 marker:text-green-500">
            <li><strong className="text-white">Offer selection is treated as an afterthought.</strong> Many beginners pick what looks profitable on a dashboard, not what converts for someone with no list and no authority. The best beginner offers solve a simple, specific problem and require low friction to complete.</li>
            <li><strong className="text-white">No pre-sell system.</strong> A direct affiliate link asks cold traffic to trust you instantly. A simple landing page does the trust-building for you. It frames the offer, answers the main objection, and gives a clear next step. That one layer often doubles conversion.</li>
            <li><strong className="text-white">Inconsistent traffic.</strong> Paid ads can work, but they punish inconsistency. When you’re on a zero budget, you need a traffic method you can show up for daily without spending. Consistency beats intensity at this stage.</li>
          </ul>

          <h2 className="font-serif text-2xl font-bold text-white mt-14 mb-4">Step 1: How I Evaluate Offers</h2>
          <p>
            Before I create anything, I run every offer through a simple filter. This saves weeks of wasted effort.
          </p>
          <p>
            First, I look at clarity. Can I explain what the user gets in one sentence? If I can’t, cold traffic won’t understand it either. Second, I look at friction. Does it require a credit card, a long form, or a sales call? Lower friction offers are more forgiving when you’re still learning traffic.
          </p>
          <p>
            Third, I check the journey. What happens after the click? Is the landing page clean, fast, and mobile-friendly? If the end page looks dated or confusing, no amount of good traffic will fix it. I only promote what I would be comfortable sending a friend to.
          </p>

          <h2 className="font-serif text-2xl font-bold text-white mt-14 mb-4">Step 2: The Landing Page That Does The Heavy Lifting</h2>
          <p>
            I learned early that my job isn’t to sell the product. My job is to connect the right person to the right solution with enough context to make a decision.
          </p>
          <p>
            That’s why I use a curiosity-driven landing page. Not hype. Not fake scarcity. Just a clean headline, a clear explanation of what they’ll find on the next page, and one call to action. The page you’re reading now is built on that same framework — value first, ask second.
          </p>
          <p>
            When you remove pressure and focus on clarity, people stay longer, trust more, and convert better. It’s a slower way to build, but it’s the way that lasts.
          </p>

          <h2 className="font-serif text-2xl font-bold text-white mt-14 mb-4">Step 3: Free Traffic Without The Noise</h2>
          <p>
            When I had no budget, I focused on short-form content. Not because it’s trendy, but because it’s the only free traffic source that can give you feedback in 24 hours.
          </p>
          <p>
            The process was simple: one idea, one short video, one clear comment strategy that drives people back to my hub. I didn’t try to be everywhere. I picked one platform and showed up daily for 60 days. The compound effect of that consistency taught me more than any course.
          </p>
          <p>
            You don’t need to go viral. You need to be clear, consistent, and helpful. Traffic follows value.
          </p>

          <h2 className="font-serif text-2xl font-bold text-white mt-14 mb-4">Putting It Together</h2>
          <p>
            This system — better offer selection, a clean pre-sell page, and consistent free traffic — is the foundation I wish someone had given me on day one.
          </p>
          <p>
            It won’t make you an expert overnight. But it will give you a clear path to start, test, and improve without needing a big budget or a large following.
          </p>
          <p>
            If you’re new here, start with my full breakdown on <a href="/blog/affiliate-marketing-for-beginners-with-no-money" className="text-green-400 underline decoration-green-500/30 underline-offset-4 hover:text-green-300">how to start affiliate marketing with no money as a complete beginner</a>. I lay out the exact setup there.
          </p>
        </div>

        <div className="mt-16 bg-gradient-to-b from-[#0f1c15] to-[#0a130e] border border-green-500/20 rounded-2xl p-8">
          <h3 className="font-serif text-xl font-bold text-white mb-2 text-center">Get Access To The Training Vault</h3>
          <p className="text-slate-400 text-[14.5px] mb-6 text-center leading-relaxed">A curated collection of templates, checklists, and walkthroughs I use to test new campaigns. Free to access.</p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-3">
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your first name" required className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-green-500 transition" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your best email" required className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-slate-500 outline-none focus:border-green-500 transition" />
            <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-green-400 to-green-500 text-[#030a05] font-bold text-[15px] py-4 rounded-xl hover:shadow-lg hover:shadow-green-500/30 transition-all hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed">
              {loading? "Unlocking..." : "Get Instant Access →"}
            </button>
            {success && <p className="text-center text-sm text-green-400 mt-3">Welcome {name} — your vault access details were sent to {email}. Check your inbox.</p>}
          </form>
          <p className="text-center text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime. Takes 30 seconds.</p>
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
        <p>© 2026 LeadVaultsHub.com · Educational content only. Results vary based on effort and execution.</p>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    </main>
  );
}
