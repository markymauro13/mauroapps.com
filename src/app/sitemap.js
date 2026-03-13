export default function sitemap() {
  const baseUrl = "https://mauroapps.com";

  // Major routes
  const routes = [
    "",
    "/about",
    "/contact",
    "/solutions",
    "/privacy",
    "/terms",
    "/privacy-dearly",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
