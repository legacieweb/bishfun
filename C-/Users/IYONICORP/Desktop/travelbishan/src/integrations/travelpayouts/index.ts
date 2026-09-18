export { travelpayoutsConfig } from "./config";
export { isDemoMode, isTravelpayoutsConfigured, env } from "./config";
export {
  buildAffiliateLink,
  buildFlightSearchLink,
  buildHotelSearchLink,
  buildExperienceLink,
  buildDeeplink,
  constructQueryString,
} from "./affiliateLinks";
export type { AffiliateLink, TrackingParams } from "./affiliateLinks";
export { loadTravelpayoutsDrive, initWidget, renderWidget, trackAffiliateClick } from "./widgets";
export type { WidgetConfig } from "./widgets";
export { trackingTemplates, buildSubID, getTrackingForPage } from "./tracking";
export type { TravelpayoutsLinkOptions } from "./types";
