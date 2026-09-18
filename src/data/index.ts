export { regions } from "./destinations/regions";
export { countries, getCountryBySlug, getCountriesByRegion } from "./destinations/countries";
export { cities, getCityBySlug, getCitiesByCountry, getDestinationBySlug, buildDestination, featuredDestinations, trendingDestinations, allDestinations, getDestinationsByRegion } from "./destinations";
export { authors, getAuthorById } from "./authors";
export { guides, getGuideBySlug, getGuidesByDestination, getFeaturedGuides, getGuidesByType, getRelatedGuides } from "./guides";
export { itineraries, getItineraryBySlug, getItinerariesByDestination, getFeaturedItineraries } from "./itineraries";
export { experiences, getExperienceBySlug, getExperiencesByDestination, getExperiencesByCategory, getFeaturedExperiences, experienceCategories } from "./experiences";
export { hotels, getHotelBySlug, getHotelsByDestination, getFeaturedHotels } from "./hotels";
export { deals, getDealBySlug, getDealsByCategory, getFeaturedDeals, dealCategories } from "./deals";

import { featuredDestinations, trendingDestinations } from "./destinations";
import { getFeaturedGuides } from "./guides";
import { getFeaturedItineraries } from "./itineraries";
import { getFeaturedExperiences } from "./experiences";
import { getFeaturedHotels } from "./hotels";
import { getFeaturedDeals } from "./deals";

export const homepageData = {
  featuredDestinations,
  trendingDestinations,
  featuredGuides: getFeaturedGuides(4),
  featuredItineraries: getFeaturedItineraries(4),
  featuredExperiences: getFeaturedExperiences(6),
  featuredHotels: getFeaturedHotels(4),
  featuredDeals: getFeaturedDeals(4),
};
