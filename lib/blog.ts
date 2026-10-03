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
      const filePath = path.join(contentDir, file);
      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      posts.push({
        slug: file.replace(/\.md$/, ""),
        title: data.title || file,
        date: data.date ? String(data.date) : "2026-05-13",
        description: data.description || "",
        content,
      });
    } catch (err) {
      // even if one file fails, don't hide it
      posts.push({
        slug: file.replace(/\.md$/, ""),
        title: file.replace(/-/g, " "),
        date: "2026-05-13",
        description: "",
        content: "",
      });
    }
  }
  return posts.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title,
    date: String(data.date),
    description: data.description,
    content,
  };
}
