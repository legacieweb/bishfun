export type RegionSlug =
  | "africa"
  | "europe"
  | "asia"
  | "north-america"
  | "south-america"
  | "middle-east"
  | "oceania";

export interface Region {
  slug: RegionSlug;
  name: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  countryCount: number;
}

export interface Country {
  slug: string;
  name: string;
  regionSlug: RegionSlug;
  description: string;
  currency: string;
  currencySymbol: string;
  languages: string[];
  capital: string;
  heroImage: string;
  heroImageAlt: string;
  bestTimeToVisit: string;
}

export interface City {
  slug: string;
  countrySlug: string;
  name: string;
  subtitle: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  currency: string;
  currencySymbol: string;
  language: string;
  averageStay: string;
  travelStyle: string[];
  budgetLevel: "budget" | "mid-range" | "luxury";
  bestTimeToVisit: string;
}

export interface Destination {
  slug: string;
  name: string;
  type: "city" | "country" | "region" | "landmark";
  countrySlug?: string;
  regionSlug: RegionSlug;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  quickFacts?: QuickFacts;
  tags: string[];
  seo: SEOPair;
}

export interface QuickFacts {
  bestTime: string;
  currency: string;
  currencySymbol: string;
  language: string;
  averageStay: string;
  travelStyle: string[];
  budgetLevel: "budget" | "mid-range" | "luxury";
}

export interface SEOPair {
  title: string;
  description: string;
  keywords: string[];
}

export type ContentType =
  | "inspiration"
  | "research"
  | "budget-travel"
  | "luxury-travel"
  | "adventure"
  | "family-travel"
  | "solo-travel"
  | "honeyymoon"
  | "beach"
  | "safari"
  | "culture"
  | "food"
  | "city-guides"
  | "road-trips"
  | "weekend-getaways"
  | "seasonal-travel";

export interface Author {
  id: string;
  name: string;
  bio: string;
  image: string;
  imageAlt: string;
  website?: string;
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  authorId: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  contentType: ContentType;
  destinationSlug: string;
  relatedGuideSlugs: string[];
  seo: SEOPair;
}

export interface Itinerary {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  destinationSlug: string;
  days: number;
  travelers: number;
  travelStyle: string;
  budgetLevel: "budget" | "mid-range" | "luxury";
  estimatedBudget: { budget: number; midRange: number; luxury: number };
  currency: string;
  currencySymbol: string;
  dailyPlans: DailyPlan[];
  tips: string[];
  seo: SEOPair;
}

export interface DailyPlan {
  day: number;
  title: string;
  morning: Activity[];
  afternoon: Activity[];
  evening: Activity[];
  accommodation: AccommodationRef;
}

export interface Activity {
  title: string;
  description: string;
  duration: string;
  category: string;
}

export interface AccommodationRef {
  name: string;
  description: string;
  budget: string;
  bookingUrl?: string;
  isDemo?: boolean;
}

export interface Experience {
  slug: string;
  title: string;
  description: string;
  category: ExperienceCategory;
  destinationSlug: string;
  duration: string;
  price: number;
  pricePer: "person" | "group";
  currency: string;
  currencySymbol: string;
  difficulty: "easy" | "moderate" | "challenging";
  travelStyle: string[];
  image: string;
  imageAlt: string;
  isDemo?: boolean;
  bookingUrl?: string;
  seo: SEOPair;
}

export type ExperienceCategory =
  | "adventure"
  | "beach"
  | "culture"
  | "food"
  | "nature"
  | "wildlife"
  | "city"
  | "family"
  | "luxury"
  | "nightlife"
  | "wellness"
  | "sports";

export interface Deal {
  slug: string;
  title: string;
  description: string;
  type: "flight" | "hotel" | "experience";
  category: DealCategory;
  destinationSlug: string;
  originalPrice?: number;
  salePrice?: number;
  currency: string;
  currencySymbol: string;
  discountPercent?: number;
  validUntil?: string;
  image: string;
  imageAlt: string;
  isDemo?: boolean;
  bookingUrl?: string;
  seo: SEOPair;
}

export type DealCategory =
  | "flight-deals"
  | "hotel-deals"
  | "weekend-deals"
  | "beach-deals"
  | "adventure-deals"
  | "luxury-deals"
  | "budget-deals"
  | "family-deals";

export interface Hotel {
  slug: string;
  name: string;
  description: string;
  destinationSlug: string;
  address: string;
  price: number;
  originalPrice?: number;
  currency: string;
  currencySymbol: string;
  rating: number;
  reviewCount: number;
  amenities: string[];
  images: string[];
  imageAlt: string;
  checkIn?: string;
  checkOut?: string;
  isDemo?: boolean;
  bookingUrl?: string;
  seo: SEOPair;
}

export interface TripPlan {
  id: string;
  destinationSlug: string;
  destinationName: string;
  destinationImage: string;
  destinationImageAlt: string;
  startDate: string;
  endDate: string;
  travelers: number;
  travelStyle: string[];
  budget: number;
  currency: string;
  currencySymbol: string;
  flights: FlightPreference;
  hotels: HotelPreference;
  experiences: ExperiencePreference;
  itinerary: ItineraryPreference;
  transport: string;
  tips: string[];
  createdAt: string;
}

export interface FlightPreference {
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  travelers: number;
  cabin: "economy" | "premium-economy" | "business" | "first";
}

export interface HotelPreference {
  destination: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
}

export interface ExperiencePreference {
  destination: string;
  category: string;
}

export interface ItineraryPreference {
  days: number;
}
