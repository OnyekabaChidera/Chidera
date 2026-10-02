import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(p => ({ slug: p.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

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
        <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-3">{post.date}</div>
        <h1 className="font-serif text-3xl font-bold mb-4 leading-tight">{post.title}</h1>
        <p className="text-slate-400 mb-8">{post.description}</p>
        <div className="prose prose-invert max-w-none text-slate-200 whitespace-pre-wrap leading-relaxed">
          {post.content}
        </div>
      </div>
    </main>
  );
}
