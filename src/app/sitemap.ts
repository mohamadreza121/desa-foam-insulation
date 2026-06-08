import type { MetadataRoute } from "next";

const baseUrl = "https://desafoaminsulation.com/";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/spray-foam-insulation",
    "/services/drywall",
    "/services/batt-insulation",
    "/services/attic-insulation",
    "/services/attic-insulation-removal",
    "/services/steel-framing",
    "/services/fireproofing",
    "/services/foam-slab-jacking",
    "/projects",
    "/contact",
    "/blog",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services") ? 0.9 : 0.7,
  }));
}