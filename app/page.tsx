export const metadata = {
  title: "Zero-Budget Affiliate Marketing Hub for Beginners | LeadVaultsHub",
  description: "Learn affiliate marketing with zero budget - guides on offers, landing pages, and free traffic methods.",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#030a05] text-white">
      <div className="max-w-[780px] mx-auto px-6 pt-16 pb-20">
        <p className="text-green-400 text-xs font-bold tracking-widest mb-4">AFFILIATE MARKETING HUB</p>
        <h1 className="text-4xl font-bold leading-tight mb-6">Zero-Budget Affiliate Marketing Hub for Beginners</h1>
        <p className="text-slate-300 text-[17px] leading-relaxed mb-4">
          Welcome to LeadVaultsHub. I started affiliate marketing with no budget, no paid ads, and no following. This site shares the fundamentals that actually worked — not hype.
        </p>
        <p className="text-slate-300 text-[17px] leading-relaxed mb-8">
          Here you will learn how to choose better affiliate offers, how to build simple landing pages that convert, and how to drive consistent free traffic using short-form content.
        </p>
        <h2 className="text-xl font-bold text-white mt-10 mb-4">Start Here</h2>
        <div className="grid gap-4">
          <a href="/blog/affiliate-marketing-for-beginners-with-no-money" className="border border-white/10 rounded-xl p-5">
            <h3 className="font-bold">1. How to Start With No Money →</h3>
            <p className="text-sm text-slate-400 mt-1">Complete beginner roadmap</p>
          </a>
          <a href="/blog" className="border border-white/10 rounded-xl p-5">
            <h3 className="font-bold">2. Browse All Guides →</h3>
            <p className="text-sm text-slate-400 mt-1">9 in-depth articles</p>
          </a>
        </div>
      </div>
    </main>
  )
}
