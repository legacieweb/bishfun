import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { ItineraryCard } from "@/ui/components/shared/Cards";
import { itineraries, getFeaturedItineraries } from "@/data/itineraries";
import { getDestinationBySlug } from "@/data/destinations/cities";
import { isDemoMode } from "@/integrations/travelpayouts";
import type { Itinerary } from "@/types";

type BudgetFilter = "all" | "budget" | "mid-range" | "luxury";

const budgetFilters: { value: BudgetFilter; label: string }[] = [
  { value: "all", label: "All Itineraries" },
  { value: "budget", label: "Budget" },
  { value: "mid-range", label: "Mid-range" },
  { value: "luxury", label: "Luxury" },
];

function Itineraries() {
  const [activeFilter, setActiveFilter] = useState<BudgetFilter>("all");

  const featured = getFeaturedItineraries(4);
  const filtered =
    activeFilter === "all"
      ? itineraries
      : itineraries.filter((i) => i.budgetLevel === activeFilter);

  const resolveDestinationName = (slug: string): string => {
    const dest = getDestinationBySlug(slug);
    return dest ? dest.name : slug;
  };

  return (
    <>
      <SEO
        title="Travel Itineraries"
        description="Curated trip itineraries for cities and countries worldwide. Day-by-day plans, budgets, and tips to plan your journey."
        canonical={`https://${brandConfig.domain}/itineraries`}
      />

      <section className="pt-16 pb-8">
        <div className="container mx-auto">
          <h1 className="heading-display">Curated Itineraries</h1>
          <p className="text-lead mt-4">
            Day-by-day plans, estimated budgets, and insider tips to help you
            explore the world with confidence.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="heading-h2 mb-0">All Itineraries</h2>
            {isDemoMode() && (
              <span className="text-xs text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                Demo data
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter itineraries">
            {budgetFilters.map((filter) => {
              const isActive = activeFilter === filter.value;
              return (
                <button
                  type="button"
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  aria-pressed={isActive}
                  className={
                    isActive
                      ? "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-semibold bg-accent text-white shadow-md shadow-accent/20"
                      : "inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200"
                  }
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-gray-500 py-12">
              No itineraries match this filter. Try a different budget level.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((itinerary) => (
                <ItineraryCard
                  key={itinerary.slug}
                  slug={itinerary.slug}
                  title={itinerary.title}
                  description={itinerary.description}
                  days={itinerary.days}
                  image={itinerary.heroImage}
                  imageAlt={itinerary.heroImageAlt}
                  destinationName={resolveDestinationName(itinerary.destinationSlug)}
                  budgetLevel={itinerary.budgetLevel}
                  estimatedBudget={itinerary.estimatedBudget}
                  currencySymbol={itinerary.currencySymbol}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="section-sm bg-accent-subtle">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="heading-h2 mb-2">Need Help Planning?</h2>
              <p className="text-gray-700">
                Start building your trip from a blank canvas — flights, hotels,
                and experiences all in one place.
              </p>
            </div>
            <Link
              to="/plan"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 focus-visible:ring-offset-2 transition-colors"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Itineraries;
