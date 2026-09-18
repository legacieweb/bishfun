import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export type EventType =
  | "page_view"
  | "destination_view"
  | "guide_view"
  | "itinerary_view"
  | "flight_search"
  | "hotel_search"
  | "experience_click"
  | "affiliate_click"
  | "trip_created"
  | "trip_saved"
  | "newsletter_signup"
  | "search"
  | "cta_click";

export interface EventProperties {
  [key: string]: unknown;
  destination?: string;
  content?: string;
  placement?: string;
  campaign?: string;
  subID?: string;
  query?: string;
  contentType?: string;
}

interface AnalyticsEvent {
  type: EventType;
  properties: EventProperties;
}

const queue: AnalyticsEvent[] = [];
let initialized = false;

export const initAnalytics = () => {
  if (initialized) return;
  initialized = true;
  if (queue.length > 0) {
    queue.forEach((event) => fireEvent(event.type, event.properties));
    queue.length = 0;
  }
};

const fireEvent = (type: EventType, properties: EventProperties) => {
  if (!(window as unknown & { gtag?: (...args: unknown[]) => void }).gtag) return;
  if (!(window as unknown & { dataLayer?: unknown[] }).dataLayer) return;
  (window as unknown & { dataLayer: unknown[] }).dataLayer.push({
    event: `bishfun_${type}`,
    ...properties,
  });
};

export const trackEvent = (type: EventType, properties: EventProperties = {}) => {
  if (!initialized) {
    queue.push({ type, properties });
    return;
  }
  fireEvent(type, properties);
};

export const usePageTracking = () => {
  const location = useLocation();
  useEffect(() => {
    initAnalytics();
    trackEvent("page_view", {
      path: location.pathname,
      search: location.search,
    });
  }, [location]);
};

export const useTrackOnView = (type: Exclude<EventType, "page_view">) => {
  useEffect(() => {
    initAnalytics();
    trackEvent(type);
  }, [type]);
};
