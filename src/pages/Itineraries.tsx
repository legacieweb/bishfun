import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { ItineraryCard } from "@/ui/components/shared/Cards";
import { itineraries } from "@/data/itineraries";
import { getDestinationBySlug } from "@/data/destinations/cities";

type BudgetFilter = "all" | "budget" | "mid-range" | "luxury";

const budgetFilters: { value: BudgetFilter; label: string }[] = [
  { value: "all", label: "All Itineraries" },
  { value: "budget", label: "Budget" },
  { value: "mid-range", label: "Mid-range" },
  { value: "luxury", label: "Luxury" },
];

function Itineraries() {
  const [activeFilter, setActiveFilter] = useState<BudgetFilter>("all");
  const [selectedSlug, setSelectedSlug] = useState(itineraries[0]?.slug || "");
  const widgetRef = useRef<HTMLDivElement>(null);
  const filtered =
    activeFilter === "all"
      ? itineraries
      : itineraries.filter((i) => i.budgetLevel === activeFilter);
  const selectedItinerary = filtered.find((item) => item.slug === selectedSlug) || filtered[0];

  useEffect(() => {
    if (!selectedItinerary || !widgetRef.current) return;
    const cityLocales: Record<string, { locale: string; cards: number }> = {
      tokyo: { locale: "72181", cards: 35 },
      paris: { locale: "66746", cards: 100 },
      "united-kingdom": { locale: "67458", cards: 100 },
    };
    const widget = cityLocales[selectedItinerary.destinationSlug];
    if (!widget) return;
    const params = new URLSearchParams({
      currency: "USD",
      trs: "575237",
      shmarker: "671328",
      language: "en",
      locale: widget.locale,
      layout: "responsive",
      cards: String(widget.cards),
      powered_by: "true",
      campaign_id: "89",
      promo_id: "3947",
    });
    const script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src = `https://tpembd.com/content?${params.toString()}`;
    widgetRef.current.replaceChildren(script);
    return () => widgetRef.current?.replaceChildren();
  }, [selectedItinerary]);

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
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Build your route</p>
            <h2 className="heading-h2 mb-2">Choose your pace</h2>
            <p className="text-gray-600">Start with a curated plan, then browse live tours for its destination.</p>
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

          <div className="mb-10 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Live in destination</p>
                <h2 className="heading-h3 mt-1">Tours for your itinerary</h2>
              </div>
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Itinerary destinations">
                {filtered.map((itinerary) => (
                  <button
                    type="button"
                    key={itinerary.slug}
                    onClick={() => setSelectedSlug(itinerary.slug)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium ${selectedItinerary?.slug === itinerary.slug ? "bg-accent text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  >
                    {resolveDestinationName(itinerary.destinationSlug)}
                  </button>
                ))}
              </div>
            </div>
            <div ref={widgetRef} className="destination-widget-mount" />
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
