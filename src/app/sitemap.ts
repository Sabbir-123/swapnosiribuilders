import { MetadataRoute } from "next";
import { SBL_PROJECTS } from "@/utils/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://swapnosiribuilders.com";

  // 1. Static Pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/gallery",
    "/news",
    "/contact",
    "/projects",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Dynamic Project Pages
  const projectPages = SBL_PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...staticPages, ...projectPages];
}
