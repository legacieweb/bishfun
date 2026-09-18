import { writeFileSync } from "fs";
import { resolve } from "path";
import { regions } from "../src/data/destinations/regions";
import { countries } from "../src/data/destinations/countries";
import { cities } from "../src/data/destinations/cities";
import { guides } from "../src/data/guides";
import { itineraries } from "../src/data/itineraries";
import { brandConfig } from "../src/config/brand";

const baseUrl = `https://${brandConfig.domain}`;

const urls: string[] = [
  "",
  "/flights",
  "/hotels",
  "/experiences",
  "/deals",
  "/plan",
  "/my-trips",
  "/destinations",
  "/about",
  "/privacy",
  "/terms",
  "/cookie-policy",
  "/affiliate-disclosure",
];

// Region pages
regions.forEach((r) => urls.push(`/destinations/${r.slug}`));

// Country pages
countries.forEach((c) => urls.push(`/destinations/${c.regionSlug}/${c.slug}`));

// City pages
cities.forEach((c) => {
  const country = countries.find((co) => co.slug === c.countrySlug);
  if (country) {
    urls.push(`/destinations/${country.regionSlug}/${country.slug}/${c.slug}`);
  }
});

// Guide pages
guides.forEach((g) => urls.push(`/guides/${g.slug}`));

// Itinerary pages
itineraries.forEach((it) => urls.push(`/itineraries/${it.slug}`));

// Content category pages
const contentCategories = [
  "inspiration", "research", "budget-travel", "luxury-travel", "adventure",
  "family-travel", "solo-travel", "food", "safari", "culture",
  "city-guides", "road-trips", "weekend-getaways", "seasonal-travel",
];
contentCategories.forEach((c) => urls.push(`/content/${c}`));

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>${url === "" ? "always" : "weekly"}</changefreq>
    <priority>${url === "" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const outputPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outputPath, sitemap);
console.log(`Generated sitemap.xml with ${urls.length} URLs`);
