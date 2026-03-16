import fs from "node:fs";
import path from "node:path";

const siteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL;
if (!siteUrl) {
  console.error(
    "Missing SITE_URL (or VITE_SITE_URL). Example: SITE_URL=https://yourdomain.com npm run generate:sitemap"
  );
  process.exit(1);
}

const base = siteUrl.replace(/\/+$/, "");
const now = new Date().toISOString();

// Keep in sync with src/App.tsx routes.
const routes = [
  "/",
  "/products",
  "/contact",
  "/company/about",
  "/solutions",
];

const urlset = routes
  .map((p) => {
    const loc = `${base}${p}`;
    return [
      "  <url>",
      `    <loc>${loc}</loc>`,
      `    <lastmod>${now}</lastmod>`,
      "  </url>",
    ].join("\n");
  })
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  `${urlset}\n` +
  `</urlset>\n`;

const outPath = path.join(process.cwd(), "public", "sitemap.xml");
fs.writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${outPath}`);

