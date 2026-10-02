export default function BlogPage() {
  const posts = [
    {
      title: "How I Made $1,247 with Affiliate Marketing as a Complete Beginner",
      slug: "/blog/affiliate-marketing-for-beginners-with-no-money.html",
      desc: "Learn the exact system I used to make $1,247 in my first month using free traffic and high-converting pages.",
      date: "Sept 30, 2026",
      badge: "CASE STUDY"
    },
    {
      title: "5 Affiliate Marketing Mistakes Beginners Make (And How To Fix Them)",
      slug: "/blog/5-affiliate-marketing-mistakes-beginners-make.html",
      desc: "I built LeadVaultsHub to test simple strategies. Here are 5 mistakes that keep beginners stuck and how to fix them fast.",
      date: "May 13, 2026",
      badge: "AFFILIATE TIPS"
    }
  ];
  return (
    <main className="min-h-screen bg-[#030a05] text-white">
      <nav className="sticky top-0 z-50 bg-[#030a05]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[780px] mx-auto px-6 py-3.5 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2.5 font-bold text-lg text-white no-underline">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center text-[#030a05] font-extrabold text-sm">L</div>
            LeadVaultsHub
          </a>
          <div className="flex items-center gap-6">
            <a href="/blog" className="text-sm font-medium text-white">Blog</a>
            <a href="/" className="text-sm font-medium text-slate-300 hover:text-white">Home</a>
          </div>
        </div>
      </nav>
      <div className="max-w-[780px] mx-auto px-6 pt-14 pb-20">
        <h1 className="font-serif text-3xl font-bold mb-2">Blog</h1>
        <p className="text-slate-400 mb-10">Practical affiliate tips for beginners with zero budget.</p>
        <div className="grid gap-6">
          {posts.map((post) => (
            <a key={post.slug} href={post.slug} className="block bg-[#0c1610] border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition">
              <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-3">{post.badge} • {post.date}</div>
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">{post.title}</h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">{post.desc}</p>
              <div className="text-green-400 text-sm font-medium mt-4">Read article →</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
