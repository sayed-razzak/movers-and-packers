import { mkdir, writeFile, readFile } from "node:fs/promises";
import { siteConfig as c } from "../src/config/siteConfig.js";
await mkdir("dist", { recursive: true });
const productionUrl =
  c.siteUrl ||
  process.env.VITE_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? "https://" + process.env.VERCEL_PROJECT_PRODUCTION_URL
    : "");
if (productionUrl) {
  const url = new URL(productionUrl).origin + "/";
  const xmlSafe = (s) =>
    s
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll('"', "&quot;");
  await writeFile(
    "dist/sitemap.xml",
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>' +
      xmlSafe(url) +
      "</loc></url></urlset>\n",
  );
  await writeFile(
    "dist/robots.txt",
    "User-agent: *\nAllow: /\nSitemap: " + url + "sitemap.xml\n",
  );
  let html = await readFile("dist/index.html", "utf8");
  html = html.replace(
    "</head>",
    '<link rel="canonical" href="' +
      xmlSafe(url) +
      '"/><meta property="og:url" content="' +
      xmlSafe(url) +
      '"/></head>',
  );
  if (c.socialImage)
    html = html.replace(
      "</head>",
      '<meta property="og:image" content="' +
        xmlSafe(c.socialImage) +
        '"/></head>',
    );
  await writeFile("dist/index.html", html);
} else
  console.log(
    "Production domain not configured: canonical and sitemap intentionally omitted.",
  );
