import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";

function Rentals() {
  return (
    <>
      <SEO
        title="Car and Bike Rentals"
        description="Rent a car or bike for more freedom on your next journey with Bishfun."
        canonical={`https://${brandConfig.domain}/rentals`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <p className="eyebrow">Move your way</p>
          <h1 className="heading-display mt-2">Rent the ride that fits your trip</h1>
          <p className="text-lead mt-4">
            Choose a car for the open road or a bike for a closer look at the places you visit.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="rental-panel">
            <div className="rental-panel-heading">
              <p className="eyebrow">Four wheels</p>
              <h2 className="heading-h2 mt-2">Car rentals</h2>
              <p className="text-gray-600 mt-2">Find a car for road trips, city breaks, and everything between.</p>
            </div>
            <iframe className="rental-widget-frame" src="/car-rental-widget.html" title="Car rentals" loading="eager" />
          </article>

          <article className="rental-panel">
            <div className="rental-panel-heading">
              <p className="eyebrow">Two wheels</p>
              <h2 className="heading-h2 mt-2">Bike rentals</h2>
              <p className="text-gray-600 mt-2">Explore neighborhoods, coastlines, and countryside at your own pace.</p>
            </div>
            <iframe className="rental-widget-frame" src="/bike-rental-widget.html" title="Bike rentals" loading="lazy" />
          </article>
        </div>
      </section>
    </>
  );
}

export default Rentals;
