export const metadata = {
  title: "Zero-Budget Affiliate Marketing Hub for Beginners | LeadVaultsHub",
  description: "Learn affiliate marketing with zero budget - guides on offers, landing pages, and free traffic from someone who started with nothing.",
  alternates: { canonical: "https://leadvaultshub.com/" },
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#030a05] text-white">
      {/* HEADER - YOUR EXACT LOGO */}
      <header className="max-w-[1100px] mx-auto px-6 py-5 flex items-center justify-between border-b border-white/5">
        <a href="/" className="flex items-center gap-3 font-bold text-[18px]">
          <img src="/logo.png" alt="LeadVaultsHub Logo" className="w-8 h-8" />
          LeadVaultsHub
        </a>
        <nav className="flex gap-5 text-[14px] text-slate-300">
          <a href="/blog" className="hover:text-white transition">Blog</a>
          <a href="/about" className="hover:text-white transition">About</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>
      </header>

      {/* HERO - WARM */}
      <div className="max-w-[780px] mx-auto px-6 pt-14 pb-20">
        <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-3.5 py-1.5 text-[12px] text-slate-300 mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Built with $0 budget • 9 practical guides inside
        </div>

        <h1 className="text-[36px] md:text-[48px] font-bold leading-[1.1] tracking-tight mb-5">
          I started affiliate marketing with
          <span className="text-[#22c55e]"> $0. No ads. No followers.</span>
          <br/>This is what actually worked.
        </h1>

        <p className="text-[17px] leading-[1.7] text-slate-300 mb-4">
          Hey — I'm the guy behind LeadVaultsHub. I didn't have money for ads, I didn't know how to code, and my first 3 weeks made $0.
        </p>
        <p className="text-[17px] leading-[1.7] text-slate-300 mb-8">
          I built this hub to document the real fundamentals that finally moved the needle: how to pick offers that don't get banned, how to build a page people trust, and how to get free traffic without spamming.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <a href="/blog/affiliate-marketing-for-beginners-with-no-money" className="bg-white text-black px-6 py-3 rounded-full font-semibold text-[15px] hover:bg-slate-100 transition">
            Start here - it's free →
          </a>
          <a href="/blog" className="border border-white/15 px-6 py-3 rounded-full font-semibold text-[15px] hover:border-white/30 transition">
            Browse all guides
          </a>
        </div>

        <div className="grid grid-cols-3 gap-4 border-y border-white/5 py-6 mb-12">
          <div>
            <p className="text-2xl font-bold">9</p>
            <p className="text-[13px] text-slate-400">In-depth guides</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Zero</p>
            <p className="text-[13px] text-slate-400">Paid ads needed</p>
          </div>
          <div>
            <p className="text-2xl font-bold">100%</p>
            <p className="text-[13px] text-slate-400">Free to read</p>
          </div>
        </div>

        <h2 className="text-[22px] font-bold mb-5">What you'll learn inside</h2>
        <div className="grid gap-4 mb-14">
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
            <h3 className="font-semibold mb-1">✓ How to find offers that actually convert</h3>
            <p className="text-[14px] text-slate-400 leading-relaxed">Not every CPA offer is worth your time. I show you how I filter them so you don't waste weeks.</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
            <h3 className="font-semibold mb-1">✓ How to build pages people trust</h3>
            <p className="text-[14px] text-slate-400 leading-relaxed">Simple design, clear words, no fake countdowns. The stuff that made my CTR double.</p>
          </div>
          <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
            <h3 className="font-semibold mb-1">✓ How to get free traffic that lasts</h3>
            <p className="text-[14px] text-slate-400 leading-relaxed">Short-form content + SEO guides that bring clicks even when you're offline.</p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#16a34a]/20 to-transparent border border-green-500/20 rounded-2xl p-7">
          <h3 className="font-bold text-[18px] mb-2">New here? Start with this one article.</h3>
          <p className="text-[15px] text-slate-300 mb-4 leading-relaxed">
            If you only read one thing, read how I started with no money. It's 7 minutes and covers the whole roadmap I wish I had.
          </p>
          <a href="/blog/affiliate-marketing-for-beginners-with-no-money" className="inline-block text-[#22c55e] font-semibold text-[14px] hover:underline">
            Read: Affiliate Marketing For Beginners With No Money →
          </a>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 flex gap-6 text-[13px] text-slate-500">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </main>
  )
}
