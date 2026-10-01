import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://leadvaultshub.com",
      lastModified: new Date("2026-09-30"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://leadvaultshub.com/about",
      lastModified: new Date("2026-09-30"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://leadvaultshub.com/privacy",
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
