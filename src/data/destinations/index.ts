export { regions } from "./regions";
export { countries, getCountryBySlug, getCountriesByRegion } from "./countries";
export { cities, getCityBySlug, getCitiesByCountry, getDestinationBySlug, buildDestination } from "./cities";

import { regions } from "./regions";
import { countries } from "./countries";
import { cities, getDestinationBySlug } from "./cities";
import type { Destination } from "@/types";

export const featuredDestinations: Destination[] = [
  getDestinationBySlug("tokyo")!,
  getDestinationBySlug("paris")!,
  getDestinationBySlug("nairobi")!,
  getDestinationBySlug("dubai")!,
  getDestinationBySlug("bangkok")!,
  getDestinationBySlug("sydney")!,
];

export const trendingDestinations: Destination[] = [
  getDestinationBySlug("tokyo")!,
  getDestinationBySlug("kyoto")!,
  getDestinationBySlug("maasai-mara")!,
  getDestinationBySlug("new-york")!,
  getDestinationBySlug("rome")!,
  getDestinationBySlug("phuket")!,
];

export const allDestinations: Destination[] = (() => {
  const dests: Destination[] = [];
  cities.forEach((c) => {
    const d = getDestinationBySlug(c.slug);
    if (d) dests.push(d);
  });
  return dests;
})();

export const getDestinationsByRegion = (regionSlug: string): Destination[] =>
  allDestinations.filter((d) => d.regionSlug === regionSlug);
