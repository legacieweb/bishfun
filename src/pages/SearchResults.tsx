import { useLocation, Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { DestinationCard } from "@/ui/components/shared/Cards";
import { allDestinations } from "@/data/destinations";
import { guides } from "@/data/guides";
import { itineraries } from "@/data/itineraries";

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  const results = {
    destinations: allDestinations.filter(
      (d) =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        (d.countrySlug && d.countrySlug.toLowerCase().includes(query.toLowerCase())),
    ),
    guides: guides.filter(
      (g) =>
        g.title.toLowerCase().includes(query.toLowerCase()) ||
        g.description.toLowerCase().includes(query.toLowerCase()),
    ),
    itineraries: itineraries.filter(
      (i) =>
        i.title.toLowerCase().includes(query.toLowerCase()) ||
        i.description.toLowerCase().includes(query.toLowerCase()),
    ),
  };

  const total = results.destinations.length + results.guides.length + results.itineraries.length;

  return (
    <>
      <SEO
        title={query ? `Search results for "${query}"` : "Search"}
        description={`Search results for ${query} across destinations, guides, and itineraries on ${brandConfig.name}.`}
      />

      <section className="section-sm">
        <div className="container mx-auto">
          <h1 className="heading-h2 mb-4">
            {query ? `Search results for "${query}"` : "Search"}
          </h1>
          {query && (
            <p className="text-gray-600 mb-6">
              Found {results.destinations.length} destinations, {results.guides.length} guides,
              and {results.itineraries.length} itineraries.
            </p>
          )}

          {!query && (
            <div className="text-center py-12">
              <h2 className="text-xl text-gray-600 mb-4">Start typing to search...</h2>
              <p className="text-gray-500">Search for destinations, guides, experiences, and itineraries.</p>
            </div>
          )}

          {query && (
            <>
              {results.destinations.length > 0 && (
                <div className="mb-8">
                  <h2 className="heading-h3 mb-4">Destinations</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.destinations.slice(0, 6).map((d) => (
                      <DestinationCard
                        key={d.slug}
                        slug={d.slug}
                        name={d.name}
                        description={d.description}
                        image={d.heroImage}
                        imageAlt={d.heroImageAlt}
                        tags={d.tags}
                        size="sm"
                        to={d.countrySlug ? `/destinations/${d.countrySlug}/${d.slug}` : `/destinations/${d.slug}`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {results.guides.length > 0 && (
                <div className="mb-8">
                  <h2 className="heading-h3 mb-4">Guides</h2>
                  <div className="space-y-4">
                    {results.guides.slice(0, 5).map((g) => (
                      <Link
                        key={g.slug}
                        to={`/guides/${g.slug}`}
                        className="block group p-3 rounded-lg hover:bg-gray-50"
                      >
                        <h3 className="font-semibold text-gray-900 group-hover:text-accent line-clamp-1">{g.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-1">{g.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {results.itineraries.length > 0 && (
                <div className="mb-8">
                  <h2 className="heading-h3 mb-4">Itineraries</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.itineraries.slice(0, 3).map((it) => (
                      <div
                        key={it.slug}
                        className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                      >
                        <Link to={`/itineraries/${it.slug}`} className="block">
                          <h3 className="font-semibold text-gray-900 hover:text-accent">{it.title}</h3>
                          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{it.description}</p>
                          <div className="mt-2 text-xs text-gray-500">{it.days} days</div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {total === 0 && (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">
                    Try searching for a different destination, guide, or itinerary.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default SearchResults;
