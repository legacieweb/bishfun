import { travelpayoutsConfig, isDemoMode } from "./config";
import { AffiliateLink, TrackingParams, buildAffiliateLink } from "./affiliateLinks";

const WIDGET_CACHE_KEY = "bishfun_widgets_loaded";
const DRIVE_LOADED_KEY = "bishfun_drive_loaded";

export const loadTravelpayoutsDrive = (containerId: string) => {
  if (isDemoMode() || !travelpayoutsConfig.driveScriptUrl) {
    console.warn("[Bishfun] Travelpayouts Drive not configured. Using placeholder.");
    return false;
  }

  if (typeof window === "undefined") return false;

  if (localStorage.getItem(DRIVE_LOADED_KEY) === "true") {
    return true;
  }

  const script = document.createElement("script");
  script.src = travelpayoutsConfig.driveScriptUrl;
  script.async = true;
  script.defer = true;
  script.onload = () => {
    localStorage.setItem(DRIVE_LOADED_KEY, "true");
  };
  script.onerror = () => {
    console.error("[Bishfun] Failed to load Travelpayouts Drive script.");
  };

  const container = document.getElementById(containerId);
  if (container) {
    container.appendChild(script);
  }

  return true;
};

export const initWidget = (widgetId: string, config?: Record<string, unknown>): boolean => {
  if (isDemoMode()) {
    console.warn(`[Bishfun] Travelpayouts widget "${widgetId}" in demo mode.`);
    return false;
  }

  if (typeof window === "undefined") return false;

  const tp = (window as unknown as Record<string, unknown>).travelpayouts;
  if (!tp) {
    console.error("[Bishfun] Travelpayouts widget script not loaded.");
    return false;
  }

  const widgetFn = (tp as Record<string, Record<string, unknown>>)[widgetId];
  if (typeof widgetFn !== "function") {
    console.error(`[Bishfun] Travelpayouts widget "${widgetId}" not found.`);
    return false;
  }

  widgetFn(config || {});
  return true;
};

export interface WidgetConfig {
  containerId: string;
  widgetType: "search" | "hotels" | "flights" | "calendar" | "prices";
  tracking?: TrackingParams;
  options?: Record<string, unknown>;
}

export const renderWidget = (config: WidgetConfig): boolean => {
  const { containerId, widgetType, tracking, options } = config;

  if (isDemoMode()) {
    console.warn(`[Bishfun] Widget "${widgetType}" in demo mode. Container: ${containerId}`);
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML =
        '<div class="text-center py-8 text-gray-500">Travelpayouts widget placeholder (demo mode)</div>';
    }
    return false;
  }

  const defaultOptions = buildAffiliateLink("/widgets", tracking || {});

  const widgetMap = {
    search: "TPWidget.Search",
    hotels: "TPWidget.Hotels",
    flights: "TPWidget.Flights",
    calendar: "TPWidget.Calendar",
    prices: "TPWidget.Prices",
  };

  const widgetPath = widgetMap[widgetType];
  if (!widgetPath) {
    console.error(`[Bishfun] Unknown widget type: ${widgetType}`);
    return false;
  }

  const [namespace, method] = widgetPath.split(".") as [keyof typeof window, string];
  const ns = (window as unknown as Record<string, Record<string, unknown>>)[namespace as string];
  const fn = ns?.[method];

  if (typeof fn !== "function") {
    console.error(`[Bishfun] Widget method ${widgetPath} not available.`);
    return false;
  }

  fn({
    container: containerId,
    ...options,
    ...(tracking ? { subID: tracking.destination || "" } : {}),
  });

  localStorage.setItem(WIDGET_CACHE_KEY, "loaded");
  return true;
};

export const trackAffiliateClick = (tracking: TrackingParams) => {
  const track = () => {
    if (typeof window === "undefined") return;
    const event = new CustomEvent("tp_click", { detail: tracking });
    window.dispatchEvent(event);
  };

  track();
};

