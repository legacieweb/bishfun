import { useEffect, useState } from "react";
import { brandConfig } from "@/config/brand";

const PRELOADER_DURATION = 1400;

const getCityName = (pageKey: string) => {
  const citySlug = pageKey.split("/").filter(Boolean).at(-1) || "your destination";
  return citySlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

function PagePreloader({ pageKey }: { pageKey: string }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
    const timeoutId = window.setTimeout(() => setIsVisible(false), PRELOADER_DURATION);
    return () => window.clearTimeout(timeoutId);
  }, [pageKey]);

  if (!isVisible) return null;

  return (
    <div className="page-preloader" role="status" aria-label="Loading page">
      <div className="page-preloader__content">
        <div className="page-preloader__eyebrow">{brandConfig.logo.text}</div>
        <div className="page-preloader__mark" aria-hidden="true"><span /><span /><span /></div>
        <p className="page-preloader__message">Arriving in</p>
        <p className="page-preloader__destination">{getCityName(pageKey)}</p>
        <div className="page-preloader__track" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}

export default PagePreloader;
