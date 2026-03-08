import type { MetadataRoute } from "next";
import {projects} from "@/app/lib/projectData"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://lumina-gl.sujitkoji.com";

  
    const projectsUrls: MetadataRoute.Sitemap = projects.map((project) =>({
       url: `${baseUrl}/lab/${project.slug}`,
       lastModified: new Date().toISOString(),
       changeFrequency: "weekly",
       priority: 0.8,

    }));
 return [ ...projectsUrls];
}