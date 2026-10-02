import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content/blog");

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

function parseFile(raw: string) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {} as any, content: raw };
  const front = match[1];
  const content = match[2];
  const data: any = {};
  front.split("\n").forEach(line => {
    const idx = line.indexOf(":");
    if (idx === -1) return;
    const key = line.slice(0, idx).trim();
    let val = line.slice(idx + 1).trim();
    if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
    data[key] = val;
  });
  return { data, content };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(contentDir)) return [];
  const files = fs.readdirSync(contentDir).filter(f => f.endsWith(".md"));
  return files.map(file => {
    const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
    const { data, content } = parseFile(raw);
    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || "",
      date: data.date || "",
      description: data.description || "",
      content,
    };
  }).sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string) {
  const fp = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(fp)) return null;
  const raw = fs.readFileSync(fp, "utf-8");
  const { data, content } = parseFile(raw);
  return { slug, title: data.title, date: data.date, description: data.description, content };
}
