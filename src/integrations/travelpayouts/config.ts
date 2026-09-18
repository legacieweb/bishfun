export interface TravelpayoutsConfig {
  partnerId: string;
  projectId: string;
  token: string;
  currency: string;
  locale: string;
  driveScriptUrl: string;
  apiBaseUrl: string;
  affiliateBaseUrl: string;
}

const isDev = import.meta.env.MODE === "development";

export const travelpayoutsConfig: TravelpayoutsConfig = {
  partnerId:
    import.meta.env.VITE_TRAVELPAYOUTS_PARTNER_ID ||
    (isDev ? "dev_partner_demo" : ""),
  projectId:
    import.meta.env.VITE_TRAVELPAYOUTS_PROJECT_ID ||
    (isDev ? "dev_project_demo" : ""),
  token: import.meta.env.VITE_TRAVELPAYOUTS_TOKEN || "",
  currency: import.meta.env.VITE_TRAVELPAYOUTS_CURRENCY || "USD",
  locale: import.meta.env.VITE_TRAVELPAYOUTS_LOCALE || "en",
  driveScriptUrl:
    import.meta.env.VITE_TRAVELPAYOUTS_DRIVE_SCRIPT_URL ||
    (isDev ? "https://demo.drive.script.url/placeholder" : ""),
  apiBaseUrl: "https://api.travelpayouts.com",
  affiliateBaseUrl: "https://travelpayouts.com",
};

export const isTravelpayoutsConfigured = (): boolean => {
  return (
    !!travelpayoutsConfig.partnerId &&
    !!travelpayoutsConfig.projectId &&
    travelpayoutsConfig.partnerId !== "dev_partner_demo"
  );
};

export const isDemoMode = (): boolean => {
  return !isTravelpayoutsConfigured();
};

export const env = { isDev, mode: import.meta.env.MODE };
