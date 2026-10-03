import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

export function getAllPosts(): Post[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
  const posts: Post[] = [];
  for (const file of files) {
    try {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const { data, content } = matter(raw);
      if (!data.title) continue;
      posts.push({
        slug: file.replace(/\.md$/, ""),
        title: String(data.title),
        date: data.date ? String(data.date) : "2026-05-13",
        description: data.description ? String(data.description) : "",
        content,
      });
    } catch { continue; }
  }
  return posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  try {
    const fullPath = path.join(contentDir, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    const raw = fs.readFileSync(fullPath, "utf-8");
    const { data, content } = matter(raw);
    return { slug, title: String(data.title), date: String(data.date), description: String(data.description), content };
  } catch { return null; }
}
