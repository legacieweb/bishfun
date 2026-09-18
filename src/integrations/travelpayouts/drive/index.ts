/**
 * Travelpayouts Drive Integration
 *
 * Drive provides contextual travel product recommendations (flights, hotels,
 * experiences) that can be embedded into editorial content.
 *
 * SETUP INSTRUCTIONS:
 * 1. Obtain the production Drive script URL from Travelpayouts Partner Center.
 * 2. Add it to your environment: VITE_TRAVELPAYOUTS_DRIVE_SCRIPT_URL=<script-url>
 * 3. The script is loaded dynamically and asynchronously — it never blocks SSR.
 * 4. Content is always rendered by Bishfun first. Drive is layered on top
 *    as additional monetization where appropriate.
 *
 * IMPORTANT: The Drive script must NOT be hard-coded. Always use the config value.
 */

import { travelpayoutsConfig, isDemoMode } from "../config";

export const DRIVE_CONTAINER_ID = "bishfun-drive-container";
const DRIVE_LOADED_FLAG = "bishfun_drive_loaded";

export function initDrive(containerId: string = DRIVE_CONTAINER_ID): boolean {
  if (typeof document === "undefined") {
    return false;
  }

  if (isDemoMode()) {
    console.warn(
      "[Bishfun Drive] Travelpayouts Drive not configured in production. " +
        "Demo mode: no Drive script will be loaded.",
    );
    return false;
  }

  if (!travelpayoutsConfig.driveScriptUrl) {
    console.warn(
      "[Bishfun Drive] VITE_TRAVELPAYOUTS_DRIVE_SCRIPT_URL is not set. " +
        "Drive integration is disabled.",
    );
    return false;
  }

  if (typeof localStorage !== "undefined" && localStorage.getItem(DRIVE_LOADED_FLAG) === "true") {
    window.dispatchEvent(new CustomEvent("tp:drive:reload"));
    return true;
  }

  const script = document.createElement("script");
  script.src = travelpayoutsConfig.driveScriptUrl;
  script.async = true;
  script.defer = true;

  script.onload = () => {
    if (typeof localStorage !== "undefined") {
      localStorage.setItem(DRIVE_LOADED_FLAG, "true");
    }
  };

  script.onerror = () => {
    console.error("[Bishfun Drive] Failed to load Travelpayouts Drive script.");
  };

  const container = document.getElementById(containerId) ?? document.head;
  container.appendChild(script);

  return true;
}

export function placeDriveSlot(slotId: string, options?: Record<string, unknown>): string {
  if (isDemoMode()) {
    return `<div data-drive-slot="${slotId}" class="min-h-[60px] flex items-center justify-center text-gray-400 text-sm">Drive slot: ${slotId} (configure VITE_TRAVELPAYOUTS_DRIVE_SCRIPT_URL to enable)</div>`;
  }

  const opts = new URLSearchParams();
  if (options) {
    Object.entries(options).forEach(([k, v]) => {
      opts.set(k, String(v));
    });
  }

  return `<div data-drive-slot="${slotId}" data-drive-options="${opts.toString()}"></div>`;
}

export function resetDriveCache(): void {
  localStorage.removeItem(DRIVE_LOADED_FLAG);
}
