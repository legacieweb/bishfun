import { useLocation, Link } from "react-router-dom";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { DestinationCard, ExperienceCard } from "@/ui/components/shared/Cards";
import { allDestinations } from "@/data/destinations";
import { cities } from "@/data/destinations/cities";
import { countries } from "@/data/destinations/countries";
import { regions } from "@/data/destinations/regions";
import { experiences } from "@/data/experiences";
import { guides } from "@/data/guides";
import { itineraries } from "@/data/itineraries";

const getDestinationPath = (destinationSlug: string, countrySlug?: string): string => {
  const city = cities.find((item) => item.slug === destinationSlug);
  const country = countries.find((item) => item.slug === (countrySlug || city?.countrySlug));
  const region = country ? regions.find((item) => item.slug === country.regionSlug) : undefined;

  if (city && country && region) {
    return `/destinations/${region.slug}/${country.slug}/${city.slug}`;
  }

  return "/destinations";
};

function SearchResults() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";
  const searchWords = query.toLowerCase().trim().split(/\s+/).filter(Boolean);

  const matchesWords = (fields: string[]) => {
    const searchableText = fields.join(" ").toLowerCase();
    return searchWords.every((word) => searchableText.includes(word));
  };

  const results = {
    destinations: allDestinations.filter(
      (d) => matchesWords([d.name, d.countrySlug || "", d.description, ...(d.tags || [])]),
    ),
    guides: guides.filter(
      (g) => matchesWords([g.title, g.description]),
    ),
    itineraries: itineraries.filter(
      (i) => matchesWords([i.title, i.description]),
    ),
    experiences: experiences.filter((e) =>
      matchesWords([
        e.title,
        e.description,
        e.category,
        e.destinationSlug,
        ...e.travelStyle,
        ...e.seo.keywords,
      ]),
    ),
  };

  const total =
    results.destinations.length +
    results.guides.length +
    results.itineraries.length +
    results.experiences.length;

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
              {results.itineraries.length} itineraries, and {results.experiences.length} experiences.
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
                        to={getDestinationPath(d.slug, d.countrySlug)}
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

              {results.experiences.length > 0 && (
                <div className="mb-8">
                  <h2 className="heading-h3 mb-4">Experiences</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {results.experiences.slice(0, 6).map((experience) => (
                      <ExperienceCard
                        key={experience.slug}
                        slug={experience.slug}
                        title={experience.title}
                        description={experience.description}
                        image={experience.image}
                        imageAlt={experience.imageAlt}
                        category={experience.category}
                        price={experience.price}
                        currencySymbol={experience.currencySymbol}
                        duration={experience.duration}
                        isDemo={experience.isDemo}
                      />
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
