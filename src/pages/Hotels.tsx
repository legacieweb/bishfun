import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { HotelCard } from "@/ui/components/shared/Cards";
import { featuredHotels } from "@/data/hotels";
import { isDemoMode } from "@/integrations/travelpayouts";

function Hotels() {
  return (
    <>
      <SEO
        title="Find Hotels"
        description="Search and compare hotels worldwide through Bishfun's travel partner network."
        canonical={`https://${brandConfig.domain}/hotels`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">Find Your Stay</h1>
          <p className="text-lead mt-4">
            Compare and book hotels from our trusted travel partners.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <h2 className="heading-h3 mb-4">Search Hotels</h2>
            <form className="grid grid-cols-1 md:grid-cols-6 gap-3">
              <div className="md:col-span-2 relative">
                <input
                  type="text"
                  placeholder="Destination"
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
                  max="10"
                  defaultValue={2}
                  placeholder="Guests"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-base focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <button
                type="submit"
                className="bg-accent text-white rounded-lg px-4 py-2.5 text-base font-medium hover:bg-accent-hover transition-colors"
              >
                Search
              </button>
            </form>

            {isDemoMode() && (
              <p className="mt-4 text-sm text-gray-500">
                Demo mode: Connect Travelpayouts to enable live hotel search.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="heading-h2 mb-0">Featured Stays</h2>
            {isDemoMode() && <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Demo data</span>}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredHotels.map((hotel) => (
              <HotelCard
                key={hotel.slug}
                slug={hotel.slug}
                name={hotel.name}
                description={hotel.description}
                image={hotel.images[0]}
                imageAlt={hotel.imageAlt}
                price={hotel.price}
                originalPrice={hotel.originalPrice}
                currency={hotel.currency}
                currencySymbol={hotel.currencySymbol}
                rating={hotel.rating}
                reviewCount={hotel.reviewCount}
                amenities={hotel.amenities}
                isDemo={hotel.isDemo}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hotels;
