import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function Deals() {
  const dealsWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = dealsWidgetRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src =
      "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1111404%2C973977%2C979887%2C1111286&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948";
    container.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, []);

  return (
    <>
      <SEO
        title="Travel Deals"
        description="Find the best travel deals on flights, hotels, and experiences from our trusted partners."
        canonical={`https://${brandConfig.domain}/deals`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">Travel Deals</h1>
          <p className="text-lead mt-4">
            Handpicked offers from our travel partners.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div ref={dealsWidgetRef} className="destination-widget-mount">
          </div>
        </div>
      </section>
    </>
  );
}

export default Deals;