import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.loteoladalmacia.com/",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 1,
    },
    {
      url: "https://www.loteoladalmacia.com/info",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.8,
    },
    {
      url: "https://www.loteoladalmacia.com/contact",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
    {
      url: "https://www.loteoladalmacia.com/photos",
      lastModified: new Date(),
      changeFrequency: "always",
      priority: 0.5,
    },
  ];
}
