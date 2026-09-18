import type { TrackingParams } from "./affiliateLinks";

export const trackingTemplates: Record<string, TrackingParams> = {
  homepage_hero: {
    campaign: "homepage_hero",
    placement: "hero",
    source: "homepage",
  },
  homepage_search: {
    campaign: "homepage_search",
    placement: "search",
    source: "homepage",
  },
  destination_page: {
    campaign: "destination",
    placement: "destination",
    source: "destination_page",
  },
  guide_page: {
    campaign: "guide",
    placement: "guide",
    source: "guide_page",
  },
  itinerary_page: {
    campaign: "itinerary",
    placement: "itinerary",
    source: "itinerary_page",
  },
  flights_page: {
    campaign: "flights",
    placement: "flights",
    source: "flights_page",
  },
  hotels_page: {
    campaign: "hotels",
    placement: "hotels",
    source: "hotels_page",
  },
  experiences_page: {
    campaign: "experiences",
    placement: "experiences",
    source: "experiences_page",
  },
  plan_trip: {
    campaign: "plan_trip",
    placement: "planner",
    source: "plan_trip",
  },
  deals_page: {
    campaign: "deals",
    placement: "deals",
    source: "deals_page",
  },
};

export const buildSubID = (parts: Record<string, string | undefined>): string => {
  return Object.values(parts)
    .filter(Boolean)
    .join("_");
};

export const getTrackingForPage = (pageType: string, destination?: string): TrackingParams => {
  const base = trackingTemplates[pageType] || { campaign: pageType, source: pageType };
  return {
    ...base,
    destination: destination || undefined,
  };
};
