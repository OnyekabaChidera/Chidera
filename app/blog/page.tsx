import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#030a05] text-white">
      <div className="max-w-[780px] mx-auto px-6 pt-14 pb-20">
        <h1 className="font-serif text-3xl font-bold mb-2">Blog</h1>
        <p className="text-slate-400 mb-10">Practical affiliate tips for beginners with zero budget.</p>
        <div className="grid gap-6">
          {posts.map((post) => (
            <a key={post.slug} href={`/blog/${post.slug}`} className="block bg-[#0c1610] border border-white/5 rounded-2xl p-6 hover:border-green-500/30 transition">
              <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-3">{post.date}</div>
              <h2 className="text-xl font-bold text-white mb-2 leading-tight">{post.title}</h2>
              <p className="text-slate-400 text-[15px] leading-relaxed">{post.description}</p>
              <div className="text-green-400 text-sm font-medium mt-4">Read article →</div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
