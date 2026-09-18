import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { clsx } from "clsx";
import { brandConfig } from "@/config/brand";
import { regions } from "@/data/destinations/regions";
import { countries } from "@/data/destinations/countries";

const navItems = [
  { label: "Explore", path: "/" },
  { label: "Destinations", path: "/destinations" },
  { label: "Flights", path: "/flights" },
  { label: "Taxis", path: "/taxis" },
  { label: "Experiences", path: "/experiences" },
  { label: "Guides", path: "/content/inspiration" },
  { label: "Itineraries", path: "/itineraries" },
  { label: "Deals", path: "/deals" },
];

const navItemLabels: Record<string, string> = {
  Explore: "Explore",
  Destinations: "Destinations",
  Flights: "Flights",
  Taxis: "Taxis",
  Experiences: "Experiences",
  Guides: "Guides",
  Itineraries: "Itineraries",
  Deals: "Deals",
};

function DesktopNav() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const location = useLocation();

  const destinationCountries = activeRegion
    ? countries.filter((c) => c.regionSlug === activeRegion)
    : [];

  return (
    <>
      <nav className="hidden md:flex items-center space-x-1">
        {navItems.map((item) => (
          <div
            key={item.path}
            className="relative"
            onMouseEnter={() => setActiveMenu(item.label)}
            onMouseLeave={() => {
              if (item.label !== "Destinations") {
                setTimeout(() => setActiveMenu(null), 300);
              }
            }}
          >
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                clsx(
                  "px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-250",
                  isActive || location.pathname === item.path
                    ? "text-accent"
                    : "text-gray-700 hover:text-accent hover:bg-gray-100",
                )
              }
            >
              {item.label}
            </NavLink>

            {item.label === "Destinations" && activeMenu === "Destinations" && (
              <div
                className="absolute top-full left-0 mt-2 w-[640px] bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
                onMouseEnter={() => setActiveMenu("Destinations")}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <div className="grid grid-cols-5 gap-0">
                  <div
                    className="bg-gray-50 p-4 cursor-pointer hover:bg-gray-100 transition-colors"
                    onMouseEnter={() => setActiveRegion(null)}
                  >
                    <h4 className="font-semibold text-gray-900">All Regions</h4>
                    <p className="text-xs text-gray-500 mt-1">Explore all destinations</p>
                  </div>
                  {regions.map((region) => (
                    <div
                      key={region.slug}
                      className="p-4 cursor-pointer border-l border-gray-100 first:border-l-0 first:border-t border-t hover:bg-gray-50 transition-colors"
                      onMouseEnter={() => setActiveRegion(region.slug)}
                    >
                      <h4 className="font-semibold text-gray-900">{region.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">{region.countryCount} countries</p>
                      <Link
                        to={`/destinations/${region.slug}`}
                        className="text-xs text-accent hover:underline mt-1 inline-block"
                        onClick={() => setActiveMenu(null)}
                      >
                        View region →
                      </Link>
                    </div>
                  ))}
                </div>

                {activeRegion && destinationCountries.length > 0 && (
                  <div className="absolute top-0 left-[640px] bg-white w-64 border-l border-gray-200 p-4 max-h-80 overflow-y-auto">
                    <h4 className="font-semibold text-gray-900 mb-2">
                      {regions.find((r) => r.slug === activeRegion)?.name}
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {destinationCountries.map((country) => (
                        <Link
                          key={country.slug}
                          to={`/destinations/${country.regionSlug}/${country.slug}`}
                          className="block px-2 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded hover:text-accent"
                          onClick={() => {
                            setActiveMenu(null);
                            setActiveRegion(null);
                          }}
                        >
                          {country.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
        <Link
          to="/plan"
          className="ml-4 btn btn-primary"
        >
          Plan My Trip
        </Link>
      </nav>
    </>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedRegion, setExpandedRegion] = useState<string | null>(null);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setExpandedRegion(null);
      setExpandedSection(null);
    }
  };

  const closeNav = () => {
    setIsOpen(false);
    setExpandedRegion(null);
    setExpandedSection(null);
  };

  return (
    <>
      <button
        onClick={toggleNav}
        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accent"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="block w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-250"></span>
        <span className="block w-6 h-0.5 bg-gray-700 mb-1 transition-all duration-250"></span>
        <span className="block w-6 h-0.5 bg-gray-700 transition-all duration-250"></span>
      </button>

      <div
        className={clsx(
          "fixed inset-0 z-50 bg-white transform transition-transform duration-300 md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="h-full overflow-y-auto pb-20">
          <div className="flex justify-end p-4">
            <button
              onClick={closeNav}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <nav className="px-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.path}>
                <Link
                  to={item.path}
                  onClick={closeNav}
                  className="flex items-center justify-between py-3 text-lg font-medium text-gray-900 hover:bg-gray-100 rounded-lg px-3"
                >
                  <span>{item.label}</span>
                  {item.label === "Destinations" && (
                    <button
                      onClick={() =>
                        setExpandedSection(
                          expandedSection === "destinations" ? null : "destinations",
                        )
                      }
                      className="p-1"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={clsx(
                          "transition-transform",
                          expandedSection === "destinations" ? "rotate-180" : "",
                        )}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                  )}
                </Link>

                {item.label === "Destinations" && expandedSection === "destinations" && (
                  <div className="ml-4 mt-2 space-y-1">
                    {regions.map((region) => (
                      <div key={region.slug}>
                        <button
                          onClick={() =>
                            setExpandedRegion(
                              expandedRegion === region.slug ? null : region.slug,
                            )
                          }
                          className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg px-3"
                        >
                          <span>{region.name}</span>
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            className={clsx(
                              "transition-transform",
                              expandedRegion === region.slug ? "rotate-180" : "",
                            )}
                          >
                            <polyline points="6 9 12 15 18 9" />
                          </svg>
                        </button>

                        {expandedRegion === region.slug && (
                          <div className="ml-4 mt-1 space-y-0.5">
                            <Link
                              to={`/destinations/${region.slug}`}
                              onClick={closeNav}
                              className="block py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg px-3"
                            >
                              {region.name} Overview
                            </Link>
                            {countries
                              .filter((c) => c.regionSlug === region.slug)
                              .map((country) => (
                                <Link
                                  key={country.slug}
                                  to={`/destinations/${region.slug}/${country.slug}`}
                                  onClick={closeNav}
                                  className="block py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg px-3"
                                >
                                  {country.name}
                                </Link>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link
              to="/plan"
              onClick={closeNav}
              className="flex items-center justify-center py-4 mt-4 btn btn-primary text-lg font-semibold"
            >
              Plan My Trip
            </Link>
          </nav>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 md:hidden"
          onClick={closeNav}
        />
      )}
    </>
  );
}

export { DesktopNav, MobileNav };
