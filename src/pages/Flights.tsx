import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { AffiliateCTA } from "@/ui/components/affiliate/AffiliateCTA";
import { trackEvent } from "@/hooks/useAnalytics";
import { isDemoMode, getTrackingForPage, buildFlightSearchLink } from "@/integrations/travelpayouts";

function Flights() {
  const tracking = getTrackingForPage("flights_page");

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
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <h2 className="heading-h3 mb-4">Search Flights</h2>
            <form className="grid grid-cols-1 md:grid-cols-6 gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="From"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-base focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="To"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-base focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-base focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-base focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="9"
                  defaultValue={1}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-base focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-accent text-white rounded-lg px-4 py-2.5 text-base font-medium hover:bg-accent-hover transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  trackEvent("flight_search", tracking);
                }}
              >
                Search
              </button>
            </form>

            {isDemoMode() && (
              <p className="mt-4 text-sm text-gray-500">
                Demo mode: Connect Travelpayouts to enable live flight search.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-6">Popular Routes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { from: "NYC", to: "LON", price: 450 },
              { from: "TYO", to: "JKT", price: 320 },
              { from: "DXB", to: "JNB", price: 890 },
              { from: "PAR", to: "ROM", price: 120 },
              { from: "SFO", to: "SYD", price: 1100 },
              { from: "CAI", to: "IST", price: 280 },
            ].map((route) => (
              <div key={`${route.from}-${route.to}`} className="border border-gray-200 rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-bold text-gray-900">{route.from}</span>
                    <span className="text-gray-400 mx-2">→</span>
                    <span className="font-bold text-gray-900">{route.to}</span>
                  </div>
                  <span className="text-xl font-bold text-accent">${route.price}</span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  {isDemoMode() && <span className="font-medium">Demo price</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Flights;
