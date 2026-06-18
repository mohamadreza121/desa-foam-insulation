import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";

const baseUrl = "https://desafoaminsulation.com";

const staticRoutes = [
  {
    path: "/",
    changeFrequency: "weekly",
    priority: 1,
  },
  {
    path: "/about",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/services",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/spray-foam-insulation",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/drywall",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/batt-insulation",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/attic-insulation",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/attic-insulation-removal",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/steel-framing",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/fireproofing",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/foam-slab-jacking",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/projects",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/blog",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/contact",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/project-assessment",
    changeFrequency: "monthly",
    priority: 0.8,
  },
] as const;

function getValidDate(value: string): Date | undefined {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  return date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map((post) => {
    const publishedDate = getValidDate(post.date);

    return {
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: "monthly",
      priority: 0.7,
      ...(publishedDate ? { lastModified: publishedDate } : {}),
    };
  });

  return [...staticPages, ...blogPages];
}