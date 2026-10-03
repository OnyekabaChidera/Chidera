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
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
  return files.map(file => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug: file.replace(/\.mdx?$/, ""),
      title: data.title || "",
      date: data.date ? String(data.date) : "",
      description: data.description || "",
      content,
    };
  }).sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const md = path.join(contentDir, `${slug}.md`);
  const mdx = path.join(contentDir, `${slug}.mdx`);
  const fp = fs.existsSync(md) ? md : mdx;
  if (!fs.existsSync(fp)) return null;
  const raw = fs.readFileSync(fp, "utf-8");
  const { data, content } = matter(raw);
  return { slug, title: data.title, date: data.date, description: data.description, content };
}
