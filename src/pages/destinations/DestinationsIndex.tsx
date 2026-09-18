import { useParams, Link } from "react-router-dom";
import { notFound } from "@/pages/NotFound";
import { regions } from "@/data/destinations/regions";
import { countries, getCountriesByRegion } from "@/data/destinations/countries";
import { allDestinations } from "@/data/destinations";
import type { Destination } from "@/types";
import SEO from "@/ui/components/shared/Seo";
import { DestinationCard } from "@/ui/components/shared/Cards";
import { brandConfig } from "@/config/brand";

function DestinationsIndex() {
  return (
    <>
      <SEO
        title="Destinations"
        description="Explore Bishfun's comprehensive destination guides covering every continent."
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display mb-4">Destinations</h1>
          <p className="text-lead">
            Every country, every city, every place worth discovering — organized by region.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-6">Explore by Region</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regions.map((region) => (
              <Link
                key={region.slug}
                to={`/destinations/${region.slug}`}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-xl shadow-md h-48">
                  <img
                    src={region.heroImage}
                    alt={region.heroImageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={600}
                    height={480}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-white font-bold text-2xl">{region.name}</h3>
                  </div>
                </div>
                <div className="mt-2">
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-accent">{region.name}</h4>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-2">{region.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{region.countryCount} countries</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-6">Featured Destinations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allDestinations.slice(0, 12).map((dest) => (
              <DestinationCard
                key={dest.slug}
                slug={dest.slug}
                name={dest.name}
                subtitle={dest.countrySlug}
                image={dest.heroImage}
                imageAlt={dest.heroImageAlt}
                size="sm"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default DestinationsIndex;
