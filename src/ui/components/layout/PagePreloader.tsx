import { useEffect, useState } from "react";
import { brandConfig } from "@/config/brand";

const PRELOADER_DURATION = 4500;

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
        <div className="page-preloader__mark" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <p className="page-preloader__brand">{brandConfig.logo.text}</p>
        <p className="page-preloader__message">The world is waiting</p>
        <div className="page-preloader__track" aria-hidden="true">
          <span />
        </div>
      </div>
    </div>
  );
}

export default PagePreloader;
