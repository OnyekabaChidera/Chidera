export const metadata = {
  title: "Zero-Budget Affiliate Marketing Hub for Beginners | LeadVaultsHub",
  description: "Learn affiliate marketing with zero budget - guides on offers, landing pages, and free traffic methods for beginners.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#030a05] text-white">
      {/* HEADER WITH LOGO */}
      <header className="max-w-[1100px] mx-auto px-6 py-5 flex items-center justify-between border-b border-white/5">
        <a href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center text-black font-black">L</span>
          LeadVaultsHub
        </a>
        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="/blog" className="hover:text-white">Blog</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <div className="max-w-[780px] mx-auto px-6 pt-16 pb-20">
        <p className="text-green-400 text-xs font-bold tracking-widest mb-4">AFFILIATE MARKETING HUB</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Zero-Budget Affiliate Marketing Hub for Beginners</h1>

        <p className="text-slate-300 text-[17px] leading-relaxed mb-4">
          Welcome to LeadVaultsHub. I started affiliate marketing with no budget, no paid ads, and no following. This site shares the fundamentals that actually worked — not hype.
        </p>
        <p className="text-slate-300 text-[17px] leading-relaxed mb-8">
          Here you will learn how to choose better affiliate offers, how to build simple landing pages that convert, and how to drive consistent free traffic using short-form content.
        </p>

        <h2 className="text-xl font-bold text-white mt-12 mb-4">Start Here</h2>
        <div className="grid gap-4">
          <a href="/blog/affiliate-marketing-for-beginners-with-no-money" className="border border-white/10 rounded-xl p-5 hover:border-green-500/30 transition">
            <h3 className="font-bold">1. How to Start With No Money →</h3>
            <p className="text-sm text-slate-400 mt-1">The complete beginner roadmap</p>
          </a>
          <a href="/blog" className="border border-white/10 rounded-xl p-5 hover:border-green-500/30 transition">
            <h3 className="font-bold">2. Browse All 9 Guides →</h3>
            <p className="text-sm text-slate-400 mt-1">In-depth articles on offers, traffic & tools</p>
          </a>
          <a href="/vault" className="border border-white/10 rounded-xl p-5 hover:border-green-500/30 transition opacity-60">
            <h3 className="font-bold">3. The Vault (Tools) →</h3>
            <p className="text-sm text-slate-400 mt-1">My private stack - noindex</p>
          </a>
        </div>

        <div className="mt-12 border-t border-white/5 pt-8 flex gap-6 text-sm text-slate-500">
          <a href="/about" className="hover:text-white">About</a>
          <a href="/privacy" className="hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-white">Terms</a>
          <a href="/contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </main>
  )
}
