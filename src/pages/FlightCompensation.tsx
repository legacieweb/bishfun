import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function FlightCompensation() {
  return (
    <>
      <SEO
        title="Flight Compensation"
        description="Check whether your delayed or canceled flight may qualify for compensation."
        canonical={`https://${brandConfig.domain}/flight-compensation`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <p className="eyebrow">Flight protection</p>
          <h1 className="heading-display mt-2">Delayed or canceled flight?</h1>
          <p className="text-lead mt-4">
            Get up to €600. You have rights when your flight is disrupted, and the experts can handle the claim for you.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flight-compensation-frame-wrap">
            <iframe
              className="flight-compensation-frame"
              src="/flight-compensation-widget.html"
              title="Flight compensation checker"
              loading="eager"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default FlightCompensation;
