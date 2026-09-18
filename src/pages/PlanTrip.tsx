import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { allDestinations } from "@/data/destinations";
import { trackEvent } from "@/hooks/useAnalytics";
import type { TripPlan } from "@/types";

const generateId = (): string => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
};

const travelStyles = [
  "Adventure",
  "Relaxation",
  "Luxury",
  "Budget",
  "Family",
  "Romantic",
  "Culture",
  "Nature",
  "Food",
  "City",
];

const budgetOptions = [
  { label: "Under $1,000", value: 1000 },
  { label: "$1,000 - $3,000", value: 2000 },
  { label: "$3,000 - $5,000", value: 4000 },
  { label: "$5,000 - $10,000", value: 7500 },
  { label: "Over $10,000", value: 12000 },
];

function PlanTrip() {
  const [step, setStep] = useState(1);
  const [destination, setDestination] = useState("");
  const [destinationName, setDestinationName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [budget, setBudget] = useState(2000);

  const handleStyleToggle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style],
    );
  };

  const handleDestinationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDestination(value);
    const match = allDestinations.find(
      (d) => d.name.toLowerCase() === value.toLowerCase(),
    );
    setDestinationName(match?.name || value);
  };

  const days = startDate && endDate
    ? Math.ceil(
        (new Date(endDate).getTime() - new Date(startDate).getTime()) /
          (1000 * 60 * 60 * 24),
      ) + 1
    : 7;

  const handleBuildTrip = () => {
    const tripPlan: TripPlan = {
      id: generateId(),
      destinationSlug: destination,
      destinationName: destinationName || destination,
      destinationImage: allDestinations.find((d) => d.slug === destination)?.heroImage || "",
      destinationImageAlt: allDestinations.find((d) => d.slug === destination)?.heroImageAlt || "",
      startDate,
      endDate,
      travelers,
      travelStyle: selectedStyles,
      budget,
      currency: "USD",
      currencySymbol: "$",
      flights: {
        from: "",
        to: destination,
        departureDate: startDate,
        returnDate: endDate,
        travelers,
        cabin: "economy",
      },
      hotels: {
        destination,
        checkIn: startDate,
        checkOut: endDate,
        guests: travelers,
        rooms: Math.ceil(travelers / 2),
      },
      experiences: {
        destination,
        category: selectedStyles.join(","),
      },
      itinerary: { days },
      transport: "Public transport + walking",
      tips: [
        "Buy travel insurance before you depart.",
        "Download offline maps for your destination.",
        "Check visa requirements for your nationality.",
        "Exchange some currency before arrival.",
      ],
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      `bishfun_trip_${tripPlan.id}`,
      JSON.stringify(tripPlan),
    );

    trackEvent("trip_created", {
      destination: destination,
      travelers: travelers,
      days,
      budget,
    });

    window.location.href = `/my-trips?trip=${tripPlan.id}`;
  };

  const totalPages = 6;

  return (
    <>
      <SEO
        title="Plan My Trip"
        description="Build a personalized travel itinerary with Bishfun's trip planner."
        canonical={`https://${brandConfig.domain}/plan`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <h1 className="heading-display">Plan My Trip</h1>
          <p className="text-lead mt-4">
            Tell us about your ideal journey and Bishfun will help you plan every step.
          </p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto max-w-3xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <span
                  key={n}
                  className={`transition-colors ${
                    step >= n ? "text-accent font-medium" : ""
                  }`}
                >
                  Step {n}
                </span>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / totalPages) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Destination */}
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="heading-h3">Where do you want to go?</h2>
              <p className="text-gray-600">
                Start typing to search for destinations, countries, and cities.
              </p>
              <input
                type="text"
                placeholder="e.g., Tokyo, Japan..."
                value={destination}
                onChange={handleDestinationChange}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base focus:border-accent focus:ring-accent outline-none"
              />
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Popular destinations:</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {allDestinations.slice(0, 6).map((d) => (
                    <button
                      key={d.slug}
                      onClick={() => {
                        setDestination(d.slug);
                        setDestinationName(d.name);
                      }}
                      className="text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-100 border border-gray-200"
                    >
                      {d.name}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  disabled={!destination}
                  className="btn btn-primary"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Dates */}
          {step === 2 && (
            <div className="space-y-4">
              <h2 className="heading-h3">When are you traveling?</h2>
              <p className="text-gray-600">Select your departure and return dates.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Departure</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base focus:border-accent focus:ring-accent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Return</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-base focus:border-accent focus:ring-accent outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(1)} className="btn btn-secondary">
                  Back
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!startDate || !endDate}
                  className="btn btn-primary"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Travelers */}
          {step === 3 && (
            <div className="space-y-4">
              <h2 className="heading-h3">How many travelers?</h2>
              <div className="flex items-center gap-4">
                <label className="text-sm font-medium">Adults</label>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setTravelers(Math.max(1, travelers - 1))}
                    className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center"
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{travelers}</span>
                  <button
                    onClick={() => setTravelers(travelers + 1)}
                    className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(2)} className="btn btn-secondary">
                  Back
                </button>
                <button onClick={() => setStep(4)} className="btn btn-primary">
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Travel Style */}
          {step === 4 && (
            <div className="space-y-4">
              <h2 className="heading-h3">What's your travel style?</h2>
              <p className="text-gray-600 mb-4">Select all that apply.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {travelStyles.map((style) => (
                  <button
                    key={style}
                    onClick={() => handleStyleToggle(style)}
                    className={`p-3 text-sm font-medium rounded-lg border transition-all text-center ${
                      selectedStyles.includes(style)
                        ? "bg-accent text-white border-accent"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(3)} className="btn btn-secondary">
                  Back
                </button>
                <button
                  onClick={() => setStep(5)}
                  disabled={selectedStyles.length === 0}
                  className="btn btn-primary"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 5: Budget */}
          {step === 5 && (
            <div className="space-y-4">
              <h2 className="heading-h3">What's your budget?</h2>
              <p className="text-gray-600">This helps us find the best options for you.</p>
              <div className="space-y-2">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => setBudget(opt.value)}
                    className={`w-full text-left p-3 rounded-lg border transition-all ${
                      budget === opt.value
                        ? "border-accent bg-accent-subtle"
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <span className="font-medium">{opt.label}</span>
                  </button>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(4)} className="btn btn-secondary">
                  Back
                </button>
                <button onClick={() => setStep(6)} className="btn btn-primary">
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 6: Build Trip */}
          {step === 6 && (
            <div className="space-y-4">
              <h2 className="heading-h3">Your Trip Summary</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <dl className="space-y-2">
                  <div>
                    <dt className="text-sm text-gray-500">Destination</dt>
                    <dd className="font-medium">{destinationName || destination}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Travel Dates</dt>
                    <dd className="font-medium">
                      {startDate} to {endDate} ({days} days)
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Travelers</dt>
                    <dd className="font-medium">{travelers} people</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Travel Style</dt>
                    <dd className="font-medium">{selectedStyles.join(", ") || "Any"}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Budget</dt>
                    <dd className="font-medium">${budget} total</dd>
                  </div>
                </dl>
              </div>
              <div className="flex justify-between">
                <button onClick={() => setStep(5)} className="btn btn-secondary">
                  Back
                </button>
                <button onClick={handleBuildTrip} className="btn btn-primary">
                  Build My Trip
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default PlanTrip;
