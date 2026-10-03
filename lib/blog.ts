import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDirectory = path.join(process.cwd(), "content/blog")

export interface BlogPost {
  slug: string
  title: string
  date: string
  description: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(contentDirectory)) return []
  const fileNames = fs.readdirSync(contentDirectory)
  
  const posts = fileNames
    .filter((name) => name.endsWith(".md") || name.endsWith(".mdx"))
    .map((fileName) => {
      try {
        const fullPath = path.join(contentDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, "utf8")
        const { data, content } = matter(fileContents)
        
        return {
          slug: fileName.replace(/\.mdx?$/, ""),
          title: data.title || fileName,
          date: data.date ? String(data.date) : "2026-05-13",
          description: data.description || "",
          content: content,
        }
      } catch (e) {
        return null
      }
    })
    .filter(Boolean) as BlogPost[]

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(contentDirectory, `${slug}.md`)
    const altPath = path.join(contentDirectory, `${slug}.mdx`)
    const filePath = fs.existsSync(fullPath) ? fullPath : altPath
    if (!fs.existsSync(filePath)) return null
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)
    return {
      slug,
      title: data.title || slug,
      date: data.date ? String(data.date) : "2026-05-13",
      description: data.description || "",
      content,
    }
  } catch {
    return null
  }
}
