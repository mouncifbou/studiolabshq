import type { MetadataRoute } from "next";
import { company } from "./company";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-08");
  return [
    { url: company.website, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${company.website}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${company.website}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${company.website}/refunds`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
