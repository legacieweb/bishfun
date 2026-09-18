import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function Taxis() {
  return (
    <>
      <SEO
        title="Book Airport Transfers"
        description="Compare airport transfers and taxis for your next journey with Bishfun."
        canonical={`https://${brandConfig.domain}/taxis`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">Book Your Airport Transfer</h1>
          <p className="text-lead mt-4">
            Find reliable taxis and airport transfers for a smoother arrival and departure.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flight-widget-frame-wrap">
            <iframe
              className="taxi-widget-frame"
              src="/taxi-widget.html"
              title="Airport taxi search"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Taxis;
