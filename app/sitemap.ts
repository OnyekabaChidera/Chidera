import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://leadvaultshub.com";

  // 1. Your static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
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

  // 2. Automatic blog pages from public/blog
  const blogDir = path.join(process.cwd(), "public", "blog");
  let blogPages: MetadataRoute.Sitemap = [];

  try {
    const files = fs.readdirSync(blogDir);
    blogPages = files
      .filter((file) => file.endsWith(".html"))
      .map((file) => ({
        url: `${baseUrl}/blog/${file.replace(".html", "")}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.8,
      }));
  } catch (err) {
    console.log("Blog folder not found");
  }

  return [...staticPages, ...blogPages];
}
