import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import type { TripPlan } from "@/types";

interface SavedItem {
  id: string;
  type: "destination" | "hotel" | "guide" | "experience" | "itinerary" | "trip-plan";
  title: string;
  image: string;
  imageAlt: string;
  description: string;
  slug: string;
  url: string;
}

function MyTrips() {
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [savedTripPlans, setSavedTripPlans] = useState<TripPlan[]>([]);
  const [activeTab, setActiveTab] = useState<"items" | "trips">("items");

  useEffect(() => {
    const saved = localStorage.getItem("bishfun_saved_items");
    if (saved) {
      try {
        setSavedItems(JSON.parse(saved));
      } catch {
        setSavedItems([]);
      }
    }

    const tripIds: string[] = JSON.parse(localStorage.getItem("bishfun_saved_trips") || "[]");
    const plans: TripPlan[] = [];
    tripIds.forEach((id) => {
      const plan = localStorage.getItem(`bishfun_trip_${id}`);
      if (plan) {
        try {
          plans.push(JSON.parse(plan));
        } catch {}
      }
    });
    setSavedTripPlans(plans);
  }, []);

  const saveItem = (item: SavedItem) => {
    const exists = savedItems.some((i) => i.id === item.id);
    let updated: SavedItem[];
    if (exists) {
      updated = savedItems.filter((i) => i.id !== item.id);
    } else {
      updated = [...savedItems, item];
    }
    setSavedItems(updated);
    localStorage.setItem("bishfun_saved_items", JSON.stringify(updated));
  };

  const removeItem = (id: string) => {
    const updated = savedItems.filter((i) => i.id !== id);
    setSavedItems(updated);
    localStorage.setItem("bishfun_saved_items", JSON.stringify(updated));
  };

  const removeTripPlan = (id: string) => {
    const updatedPlans = savedTripPlans.filter((t) => t.id !== id);
    setSavedTripPlans(updatedPlans);
    const tripIds = updatedPlans.map((t) => t.id);
    localStorage.setItem("bishfun_saved_trips", JSON.stringify(tripIds));
    localStorage.removeItem(`bishfun_trip_${id}`);
  };

  const tabs = [
    { id: "items", label: "Saved Items" },
    { id: "trips", label: "Trip Plans" },
  ];

  return (
    <>
      <SEO
        title="My Trips"
        description="View and manage your saved destinations, guides, experiences, and trip plans."
        canonical={`https://${brandConfig.domain}/my-trips`}
      />

      <section className="pt-12 pb-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="heading-display">My Trips</h1>
              <p className="text-lead mt-2">
                Your saved destinations, experiences, and trip plans.
              </p>
            </div>
            <Link to="/plan" className="btn btn-primary">
              Plan a New Trip
            </Link>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="border-b border-gray-200 mb-6">
            <nav className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg ${
                    activeTab === tab.id
                      ? "bg-accent-subtle text-accent"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === "items" && (
            <div>
              {savedItems.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">⭐</div>
                  <h3 className="text-xl font-semibold mb-2">Nothing saved yet</h3>
                  <p className="text-gray-600 mb-4">
                    Browse destinations, guides, and experiences to save them here.
                  </p>
                  <Link to="/destinations" className="btn btn-primary">
                    Start Exploring
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {savedItems.map((item) => (
                    <div
                      key={`${item.type}-${item.id}`}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl"
                    >
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-20 h-16 object-cover rounded-lg"
                        loading="lazy"
                        width={80}
                        height={64}
                      />
                      <div className="flex-1">
                        <span className="text-xs text-gray-500 uppercase">
                          {item.type}
                        </span>
                        <h3 className="font-medium text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{item.description}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-gray-400 hover:text-red-500"
                        aria-label={`Remove ${item.title}`}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "trips" && (
            <div>
              {savedTripPlans.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🧳</div>
                  <h3 className="text-xl font-semibold mb-2">No trip plans yet</h3>
                  <p className="text-gray-600 mb-4">
                    Use the Trip Planner to create and save your custom itineraries.
                  </p>
                  <Link to="/plan" className="btn btn-primary">
                    Plan Your First Trip
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedTripPlans.map((trip) => (
                    <div
                      key={trip.id}
                      className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                      <div className="aspect-[3/2] overflow-hidden">
                        {trip.destinationImage && (
                          <img
                            src={trip.destinationImage}
                            alt={trip.destinationImageAlt}
                            className="w-full h-full object-cover"
                            loading="lazy"
                            width={400}
                            height={267}
                          />
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg text-gray-900">{trip.destinationName}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {trip.startDate} — {trip.endDate}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          {trip.travelers} traveler{trip.travelers > 1 ? "s" : ""}
                        </p>
                        <p className="text-sm text-gray-500">
                          Budget: {trip.currencySymbol}${trip.budget}
                        </p>
                        <div className="mt-3 flex gap-2">
                          <Link
                            to={`/my-trips?trip=${trip.id}`}
                            className="text-sm text-accent hover:underline"
                          >
                            Open Trip
                          </Link>
                          <button
                            onClick={() => removeTripPlan(trip.id)}
                            className="ml-auto text-sm text-gray-400 hover:text-red-500"
                            aria-label="Remove trip"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default MyTrips;
