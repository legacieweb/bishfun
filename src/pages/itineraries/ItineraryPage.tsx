import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { clsx } from "clsx";
import { getItineraryBySlug } from "@/data/itineraries";
import { getDestinationBySlug } from "@/data/destinations/cities";
import { countries } from "@/data/destinations/countries";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { AffiliateCTA } from "@/ui/components/affiliate/AffiliateCTA";
import { getTrackingForPage } from "@/integrations/travelpayouts";
import { trackEvent } from "@/hooks/useAnalytics";

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconUsers = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3.77-4" />
    <path d="M16 3.13a4 4 0 0 1 0 7.87" />
  </svg>
);
const IconWallet = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" />
    <line x1="7" y1="17" x2="7.01" />
  </svg>
);
const IconArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 19 19 12 12 5" />
  </svg>
);
const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function ItineraryPage() {
  const { itinerarySlug } = useParams<{ itinerarySlug: string }>();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);

  const itinerary = getItineraryBySlug(itinerarySlug || "");

  if (!itinerary) {
    navigate("/");
    return null;
  }

  const destination = getDestinationBySlug(itinerary.destinationSlug);
  const country = destination?.countrySlug
    ? countries.find((c) => c.slug === destination.countrySlug)
    : null;
  const tracking = getTrackingForPage("itinerary_page", itinerary.destinationSlug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: itinerary.title,
    description: itinerary.description,
    image: itinerary.heroImage,
    totalTime: `P${itinerary.days}D`,
    step: itinerary.dailyPlans.map((plan) => ({
      "@type": "HowToStep",
      name: `Day ${plan.day}: ${plan.title}`,
      text: `${plan.morning.map((a) => a.title).join(", ")} / ${plan.afternoon.map((a) => a.title).join(", ")} / ${plan.evening.map((a) => a.title).join(", ")}`,
    })),
  };

  const saveItinerary = () => {
    trackEvent("trip_saved", {
      content: itinerary.title,
      itinerary: itinerary.slug,
    });
    if (typeof localStorage !== "undefined") {
      const saved = JSON.parse(localStorage.getItem("bishfun_saved_trips") || "[]");
      if (!saved.includes(itinerary.slug)) {
        saved.push(itinerary.slug);
        localStorage.setItem("bishfun_saved_trips", JSON.stringify(saved));
      }
    }
    setIsSaved(true);
  };

  return (
    <>
      <SEO
        title={itinerary.title}
        description={itinerary.description}
        image={itinerary.heroImage}
        article
        publishedTime={new Date().toISOString()}
        canonical={`https://${brandConfig.domain}/itineraries/${itinerary.slug}`}
        structuredData={structuredData}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Itineraries", url: "/itineraries" },
          { name: itinerary.title, url: `/itineraries/${itinerary.slug}` },
        ]}
      />

      <nav aria-label="breadcrumb" className="pt-6 pb-4">
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            <span>/</span>
            <li><Link to="/itineraries" className="hover:text-accent">Itineraries</Link></li>
            <span>/</span>
            <li className="text-gray-900">{itinerary.title}</li>
          </ol>
        </div>
      </nav>

      <section className="relative h-[500px] min-h-[350px]">
        <img
          src={itinerary.heroImage}
          alt={itinerary.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={2100}
          height={900}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 flex h-full items-end pb-12 px-4">
          <div className="text-white max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{itinerary.title}</h1>
            <p className="text-gray-200 mb-4">{itinerary.description}</p>
            <div className="flex flex-wrap gap-3 items-center text-sm text-gray-300">
              <span className="inline-flex items-center gap-1.5">
                <IconCalendar /> {itinerary.days} days
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconUsers /> {itinerary.travelers} travelers
              </span>
              <span className="inline-flex items-center gap-1.5">
                <IconWallet /> {itinerary.budgetLevel} budget
              </span>
              {destination && (
                <Link
                  to={`/destinations/${country?.regionSlug}/${country?.slug}/${destination.slug}`}
                  className="inline-flex items-center gap-1 text-accent hover:underline"
                >
                  {destination.name} <IconArrowRight />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="heading-h3 mb-3">Trip Overview</h2>
              <div className="space-y-3">
                <div>
                  <span className="text-gray-500">Duration</span>
                  <p className="font-medium">{itinerary.days} days</p>
                </div>
                <div>
                  <span className="text-gray-500">Travel Style</span>
                  <p className="font-medium">{itinerary.travelStyle}</p>
                </div>
                <div>
                  <span className="text-gray-500">Budget Level</span>
                  <p className="font-medium">{itinerary.budgetLevel}</p>
                </div>
                <div>
                  <span className="text-gray-500">Estimated Budget</span>
                  <p className="font-medium">
                    {itinerary.currencySymbol}{itinerary.estimatedBudget.budget} (budget) -{" "}
                    {itinerary.currencySymbol}{itinerary.estimatedBudget.luxury} (luxury)
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="heading-h3 mb-3">Save This Itinerary</h2>
              <p className="text-gray-600 mb-4">Add this trip to your saved itineraries.</p>
              <button
                type="button"
                onClick={saveItinerary}
                disabled={isSaved}
                className={clsx(
                  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-base font-semibold text-white shadow-lg shadow-accent/20 transition-all duration-250",
                  isSaved
                    ? "bg-success hover:bg-success/90"
                    : "bg-accent hover:bg-accent-hover",
                )}
              >
                {isSaved ? (
                  <>
                    <IconCheck /> Saved to My Trips
                  </>
                ) : (
                  "Add to My Trips"
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-8">Daily Plan</h2>
          <div className="space-y-8">
            {itinerary.dailyPlans.map((plan) => (
              <div key={plan.day} id={`day-${plan.day}`} className="border border-gray-200 rounded-xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Day {plan.day} — {plan.title}
                </h3>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Morning</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {plan.morning.map((a) => (
                        <li key={a.title} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5"><IconCheck /></span>
                          <span>{a.title} ({a.duration})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Afternoon</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {plan.afternoon.map((a) => (
                        <li key={a.title} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5"><IconCheck /></span>
                          <span>{a.title} ({a.duration})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Evening</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {plan.evening.map((a) => (
                        <li key={a.title} className="flex items-start gap-2">
                          <span className="text-accent mt-0.5"><IconCheck /></span>
                          <span>{a.title} ({a.duration})</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-1">Accommodation</h4>
                  <p className="text-sm text-gray-600">{plan.accommodation.name}</p>
                  <p className="text-xs text-gray-500">{plan.accommodation.budget}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-sm bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-4">Estimated Travel Budget</h2>
          <p className="text-gray-600 mb-6">
            Estimated costs per person. Prices are in {itinerary.currencySymbol}.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Budget</h3>
              <p className="text-3xl font-bold text-accent">{itinerary.currencySymbol}{itinerary.estimatedBudget.budget}</p>
              <p className="text-xs text-gray-500 mt-2">Per day</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Mid-range</h3>
              <p className="text-3xl font-bold text-accent">{itinerary.currencySymbol}{itinerary.estimatedBudget.midRange}</p>
              <p className="text-xs text-gray-500 mt-2">Per day</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Luxury</h3>
              <p className="text-3xl font-bold text-accent">{itinerary.currencySymbol}{itinerary.estimatedBudget.luxury}</p>
              <p className="text-xs text-gray-500 mt-2">Per day</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-4">Travel Tips</h2>
          <ul className="text-gray-600 space-y-2 max-w-3xl">
            {itinerary.tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-accent mt-0.5"><IconCheck /></span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-accent-subtle rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Plan Your Journey</h2>
            <p className="text-gray-700 mb-4">
              Find the flights, hotels, and experiences that bring your itinerary to life.
            </p>
            <AffiliateCTA
              title="Book Your Trip"
              links={[
                {
                  label: "Search Flights",
                  href: "/flights",
                  tracking: { ...tracking, placement: "itinerary-flights" },
                },
                {
                  label: "Find Hotels",
                  href: "/hotels",
                  tracking: { ...tracking, placement: "itinerary-hotels" },
                },
                {
                  label: "Explore Experiences",
                  href: "/experiences",
                  tracking: { ...tracking, placement: "itinerary-experiences" },
                },
              ]}
              disclosure
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default ItineraryPage;
