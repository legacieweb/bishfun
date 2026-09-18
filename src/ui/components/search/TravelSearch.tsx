import { useState } from "react";
import { clsx } from "clsx";

interface TravelSearchProps {
  defaultTab?: "flights" | "hotels" | "experiences";
  compact?: boolean;
}

export const TravelSearch = ({ defaultTab = "flights", compact = false }: TravelSearchProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  const tabs = [
    { id: "flights", label: "Flights" },
    { id: "hotels", label: "Hotels" },
    { id: "experiences", label: "Experiences" },
  ] as const;

  return (
    <div
      className={clsx(
        "bg-white rounded-xl shadow-lg",
        compact ? "p-4" : "p-6 md:p-8",
        "border border-gray-200",
      )}
    >
      <div className="flex space-x-1 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              "px-4 py-3 text-sm font-medium transition-all",
              activeTab === tab.id
                ? "border-b-2 border-accent text-accent"
                : "text-gray-600 hover:text-gray-900",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="pt-4">
        {activeTab === "flights" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="From"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="To"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Departure"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Return"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <button
                onClick={() => {}}
                className="bg-accent text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Search Flights
              </button>
            </div>
          </div>
        )}

        {activeTab === "hotels" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Check-in"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Check-out"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="10"
                  defaultValue={2}
                  placeholder="Guests"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <button
                onClick={() => {}}
                className="bg-accent text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Search Hotels
              </button>
            </div>
          </div>
        )}

        {activeTab === "experiences" && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <div className="relative">
                <select className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none">
                  <option value="">All Categories</option>
                  <option value="adventure">Adventure</option>
                  <option value="beach">Beach</option>
                  <option value="culture">Culture</option>
                  <option value="food">Food</option>
                  <option value="wildlife">Wildlife</option>
                </select>
              </div>
              <div className="relative">
                <input
                  type="date"
                  placeholder="Date"
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 text-sm focus:border-accent focus:ring-accent outline-none"
                />
              </div>
              <button
                onClick={() => {}}
                className="bg-accent text-white rounded-lg px-4 py-2.5 text-sm font-medium hover:bg-accent-hover transition-colors"
              >
                Search Experiences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
