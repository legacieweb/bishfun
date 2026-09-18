import type { AffiliateLink } from "./affiliateLinks";

export interface TravelpayoutsTypes {
  Airport: {
    iata: string;
    name: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
  };
  Currency: {
    code: string;
    name: string;
    symbol: string;
    rate: number;
  };
  SearchParams: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate?: string;
    travelers: number;
    cabin: "economy" | "premium-economy" | "business" | "first";
    currency: string;
  };
  HotelSearchParams: {
    destination: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    rooms: number;
    currency: string;
  };
}

export interface TravelpayoutsLinkOptions {
  link: AffiliateLink;
  label: string;
  description?: string;
  isDemo?: boolean;
  tracking?: {
    destination?: string;
    content?: string;
    placement?: string;
    campaign?: string;
    subID?: string;
  };
}

export { AffiliateLink };
