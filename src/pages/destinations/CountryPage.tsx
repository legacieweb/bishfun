import { useParams, Link, useNavigate } from "react-router-dom";
import { countries } from "@/data/destinations/countries";
import { cities, getCitiesByCountry, getDestinationBySlug } from "@/data/destinations/cities";
import { regions } from "@/data/destinations/regions";
import SEO from "@/ui/components/shared/Seo";
import { DestinationCard, HotelCard } from "@/ui/components/shared/Cards";
import { brandConfig } from "@/config/brand";
import { getHotelsByDestination } from "@/data/hotels";
import { getFeaturedGuides } from "@/data/guides";
import { getFeaturedItineraries } from "@/data/itineraries";

function CountryPage() {
  const { regionSlug, countrySlug } = useParams<{ regionSlug: string; countrySlug: string }>();
  const navigate = useNavigate();

  const country = countries.find((c) => c.slug === countrySlug);
  const region = regionSlug ? regions.find((r) => r.slug === regionSlug) : null;

  if (!country) {
    navigate("/destinations");
    return null;
  }

  const countryCities = getCitiesByCountry(country.slug);
  const countryHotels = getHotelsByDestination(country.slug);
  const countryGuides = getFeaturedGuides().filter((g) => g.destinationSlug === country.slug);
  const countryItineraries = getFeaturedItineraries().filter((it) => it.destinationSlug === country.slug);

  const parentRegion = region || regions.find((r) => r.slug === country.regionSlug);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Country",
    name: country.name,
    description: country.description,
    url: `https://${brandConfig.domain}/destinations/${parentRegion?.slug ?? country.regionSlug}/${country.slug}`,
    containedInPlace: parentRegion
      ? {
          "@type": "Place",
          name: parentRegion.name,
        }
      : undefined,
  };

  return (
    <>
      <SEO
        title={`${country.name} Travel Guide`}
        description={country.description}
        canonical={`https://${brandConfig.domain}/destinations/${parentRegion?.slug ?? country.regionSlug}/${country.slug}`}
        structuredData={structuredData}
      />

      <section
        className="relative min-h-[60vh] flex items-center justify-center text-center px-4"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.4)), url('${country.heroImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative z-10 max-w-3xl">
          <nav className="mb-4 text-sm text-gray-300">
            <Link to="/destinations" className="hover:text-white">Destinations</Link>
            {"  /  "}
            {parentRegion && (
              <>
                <Link to={`/destinations/${parentRegion.slug}`} className="hover:text-white">{parentRegion.name}</Link>
                {"  /  "}
              </>
            )}
            <span className="text-white">{country.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{country.name}</h1>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">{country.description}</p>
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
            <h2 className="heading-h3 mb-4">Quick Facts</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <span className="text-gray-500 text-sm">Capital</span>
                <p className="font-medium mt-1">{country.capital}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Currency</span>
                <p className="font-medium mt-1">{country.currencySymbol} ({country.currency})</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Languages</span>
                <p className="font-medium mt-1">{country.languages.join(", ")}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">Best Time to Visit</span>
                <p className="font-medium mt-1 text-sm">{country.bestTimeToVisit}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {countryCities.length > 0 && (
        <section className="section-sm">
          <div className="container mx-auto">
            <h2 className="heading-h2 mb-6">Cities in {country.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryCities.map((city) => (
                <DestinationCard
                  key={city.slug}
                  slug={city.slug}
                  name={city.name}
                  subtitle={city.subtitle}
                  description={city.description}
                  image={city.heroImage}
                  imageAlt={city.heroImageAlt}
                  tags={city.travelStyle}
                  size="md"
                  to={`/destinations/${parentRegion?.slug ?? country.regionSlug}/${country.slug}/${city.slug}`}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="heading-h2 mb-0">Where to Stay in {country.name}</h2>
            <Link to="/hotels" className="text-accent hover:underline font-medium">
              View all hotels →
            </Link>
          </div>
          {countryHotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {countryHotels.map((hotel) => (
                <HotelCard
                  key={hotel.slug}
                  slug={hotel.slug}
                  name={hotel.name}
                  description={hotel.description}
                  image={hotel.images[0]}
                  imageAlt={hotel.imageAlt}
                  price={hotel.price}
                  originalPrice={hotel.originalPrice}
                  currency={hotel.currency}
                  currencySymbol={hotel.currencySymbol}
                  rating={hotel.rating}
                  reviewCount={hotel.reviewCount}
                  amenities={hotel.amenities}
                  isDemo={hotel.isDemo}
                />
              ))}
            </div>
          ) : (
            <Link to="/hotels" className="btn btn-accent">
              Search Hotels in {country.name}
            </Link>
          )}
        </div>
      </section>

      <section className="section-sm">
        <div className="container mx-auto text-center">
          <h2 className="heading-h2 mb-4">Plan Your {country.name} Trip</h2>
          <p className="text-lead mx-auto mb-6">
            Let Bishfun build a personalized itinerary for your journey.
          </p>
          <Link
            to="/plan"
            className="btn btn-primary btn-lg h-auto py-3 px-8"
          >
            Plan My Trip
          </Link>
        </div>
      </section>
    </>
  );
}

export default CountryPage;
