import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leadvaultshub.com";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // 2. NEW: reads from content/blog (your new system)
  const blogDir = path.join(process.cwd(), "content", "blog");
  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const files = fs.readdirSync(blogDir);
    blogPages = files
      .filter((file) => file.endsWith(".md"))
      .map((file) => {
        const filePath = path.join(blogDir, file);
        const stat = fs.statSync(filePath);
        return {
          url: `${baseUrl}/blog/${file.replace(".md", "")}`,
          lastModified: stat.mtime,
          changeFrequency: "weekly" as const,
          priority: 0.8,
        };
      });
  } catch (err) {
    console.log("Blog folder not found");
  }

  return [...staticPages, ...blogPages];
}
