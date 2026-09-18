import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { isDemoMode } from "@/integrations/travelpayouts";

function Flights() {
  return (
    <>
      <SEO
        title="Find Cheap Flights"
        description="Search and compare flights worldwide with Bishfun's Travelpayouts integration."
        canonical={`https://${brandConfig.domain}/flights`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">Find Your Next Flight</h1>
          <p className="text-lead mt-4">
            Search and compare flights from hundreds of airlines worldwide.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flight-widget-frame-wrap">
            <iframe
              className="flight-widget-frame flight-search-frame"
              src="/travelpayouts-flight-widget.html"
              title="Flight search"
              loading="eager"
            />
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flight-compensation-card">
            <div>
              <p className="eyebrow">Flight protection</p>
              <h2 className="heading-h2 mt-2">Delayed or canceled flight?</h2>
              <p className="text-lead mt-3">
                You may be entitled to compensation. See how much you could claim and get help with the process.
              </p>
            </div>
            <a className="btn btn-primary btn-lg" href="#/flight-compensation">
              Check compensation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Flights;
