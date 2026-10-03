import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
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
            <a href="/" className="text-sm font-medium text-slate-300 hover:text-white">Home</a>
            <a href="/blog" className="text-sm font-medium text-white">Blog</a>
          </div>
        </div>
      </nav>

      <div className="max-w-[780px] mx-auto px-6 pt-14 pb-20">
        <div className="text-green-400 text-xs font-semibold tracking-widest uppercase mb-3">{post.date}</div>
        <h1 className="font-serif text-3xl font-bold mb-4 leading-tight">{post.title}</h1>
        <p className="text-slate-400 mb-8">{post.description}</p>

        <article className="prose prose-invert max-w-none prose-p:text-slate-200 prose-headings:text-white prose-headings:font-serif prose-a:text-green-400 prose-strong:text-white">
          <ReactMarkdown
            components={{
              // This makes > Want the templates? become the green card from your screenshot
              blockquote: ({ children }) => (
                <div className="my-8 rounded-xl border-l-4 border-green-400 bg-white/[0.04] p-6">
                  <div className="text-white [&>p]:text-white [&>strong]:text-white [&_a]:text-green-400 [&_a]:font-bold [&_a]:no-underline">
                    {children}
                  </div>
                </div>
              ),
              h2: ({ children }) => <h2 className="text-2xl font-bold mt-10 mb-4">{children}</h2>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        <p className="mt-10 text-sm text-slate-500 leading-relaxed">
          <strong className="text-slate-400">Disclosure:</strong> LeadVaultsHub is free to use. To keep it free, some resources are supported by sponsors. I may earn a commission if you complete a sponsor offer. No extra cost to you.
        </p>
      </div>
    </main>
  );
}
