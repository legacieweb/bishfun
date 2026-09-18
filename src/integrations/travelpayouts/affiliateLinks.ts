export interface TrackingParams {
  destination?: string;
  content?: string;
  placement?: string;
  campaign?: string;
  subID?: string;
  source?: string;
}

export interface AffiliateLink {
  url: string;
  isDemo: boolean;
  tracking: TrackingParams;
}

const constructQueryString = (params: Record<string, string | number | undefined>): string => {
  return Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(String(v))}`)
    .join("&");
};

export const buildAffiliateLink = (
  path: string,
  tracking: TrackingParams = {},
): AffiliateLink => {
  const {
    partnerId,
    projectId,
    affiliateBaseUrl,
    locale,
    currency,
  } = travelpayoutsConfig;

  const subIdParts: string[] = [];
  if (tracking.destination) subIdParts.push(tracking.destination);
  if (tracking.content) subIdParts.push(tracking.content);
  if (tracking.placement) subIdParts.push(tracking.placement);
  if (tracking.campaign) subIdParts.push(tracking.campaign);
  const subID = tracking.subID || subIdParts.join("_");

  const params: Record<string, string | number | undefined> = {
    marker: partnerId,
    project: projectId,
    locale,
    currency,
    subID,
  };

  const qs = constructQueryString(params);
  const url = `${affiliateBaseUrl}${path}${qs ? `?${qs}` : ""}`;

  return {
    url,
    isDemo: false,
    tracking,
  };
};

export const buildFlightSearchLink = (params: {
  origin: string;
  destination: string;
  departureDate?: string;
  returnDate?: string;
  travelers?: number;
  cabin?: string;
}, tracking: TrackingParams = {}): AffiliateLink => {
  const { origin, destination, departureDate, returnDate, travelers = 1, cabin = "economy" } = params;
  const path = `/search/${origin}-${destination}`;

  const extra: Record<string, string | number | undefined> = {
    departure_date: departureDate,
    return_date: returnDate,
    passengers: travelers,
    cabin,
  };

  const trackingWithExtra: TrackingParams = {
    ...tracking,
    placement: "flight-search",
    campaign: tracking.campaign || "flights",
  };

  const link = buildAffiliateLink(path, trackingWithExtra);
  const extraQs = constructQueryString(extra);
  const finalUrl = extraQs ? `${link.url}&${extraQs}` : link.url;

  return { ...link, url: finalUrl };
};

export const buildHotelSearchLink = (params: {
  destination: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  rooms?: number;
}, tracking: TrackingParams = {}): AffiliateLink => {
  const { destination, checkIn, checkOut, guests = 2, rooms = 1 } = params;
  const path = `/hotels/${destination}`;

  const extra: Record<string, string | number | undefined> = {
    check_in: checkIn,
    check_out: checkOut,
    adults: guests,
    rooms,
  };

  const trackingWithExtra: TrackingParams = {
    ...tracking,
    placement: "hotel-search",
    campaign: tracking.campaign || "hotels",
  };

  const link = buildAffiliateLink(path, trackingWithExtra);
  const extraQs = constructQueryString(extra);
  const finalUrl = extraQs ? `${link.url}&${extraQs}` : link.url;

  return { ...link, url: finalUrl };
};

export const buildExperienceLink = (params: {
  destination: string;
  category?: string;
}, tracking: TrackingParams = {}): AffiliateLink => {
  const { destination, category } = params;
  const path = `/activities/${destination}${category ? `/${category}` : ""}`;

  const trackingWithExtra: TrackingParams = {
    ...tracking,
    placement: "experience",
    campaign: tracking.campaign || "experiences",
  };

  return buildAffiliateLink(path, trackingWithExtra);
};

export const buildDeeplink = (path: string, tracking: TrackingParams = {}): AffiliateLink => {
  return buildAffiliateLink(path, { ...tracking, source: "deeplink" });
};

export { constructQueryString };
import { travelpayoutsConfig } from "./config";
