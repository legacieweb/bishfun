import { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { cities, getCityBySlug } from "@/data/destinations/cities";
import { countries } from "@/data/destinations/countries";
import { regions } from "@/data/destinations/regions";
import SEO from "@/ui/components/shared/Seo";
import { GuideCard, ExperienceCard, ItineraryCard, HotelCard } from "@/ui/components/shared/Cards";
import { getGuidesByDestination } from "@/data/guides";
import { getExperiencesByDestination } from "@/data/experiences";
import { getItinerariesByDestination } from "@/data/itineraries";
import { getHotelsByDestination } from "@/data/hotels";
import { brandConfig } from "@/config/brand";
import { BookingCTA, AffiliateCTA } from "@/ui/components/affiliate/AffiliateCTA";
import { getTrackingForPage } from "@/integrations/travelpayouts";

function CityPage() {
  const { regionSlug, countrySlug, citySlug } = useParams<{
    regionSlug: string;
    countrySlug: string;
    citySlug: string;
  }>();

  const navigate = useNavigate();
  const city = getCityBySlug(citySlug || "");
  const country = city ? countries.find((c) => c.slug === city.countrySlug) : null;
  const region = country ? regions.find((r) => r.slug === country.regionSlug) : null;

  if (!city) {
    navigate("/destinations");
    return null;
  }

  const guides = getGuidesByDestination(city.slug);
  const experiences = getExperiencesByDestination(city.slug);
  const itineraries = getItinerariesByDestination(city.slug);
  const hotels = getHotelsByDestination(city.slug);
  const tracking = getTrackingForPage("destination_page", city.slug);

  const destinationWidgetLocale: Record<string, { locale: string; cards: number }> = {
    tokyo: { locale: "72181", cards: 35 },
    paris: { locale: "66746", cards: 100 },
    kyoto: { locale: "72420", cards: 13 },
    rome: { locale: "71631", cards: 100 },
    phuket: { locale: "78451", cards: 50 },
  };
  const destinationWidget = destinationWidgetLocale[city.slug];

  const { quickFacts } = (() => {
    const qf = {
      bestTime: city.bestTimeToVisit,
      currency: city.currency,
      currencySymbol: city.currencySymbol,
      language: city.language,
      averageStay: city.averageStay,
      travelStyle: city.travelStyle,
      budgetLevel: city.budgetLevel,
    };
    return { quickFacts: qf };
  })();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "City",
    name: city.name,
    description: city.description,
    url: `https://${brandConfig.domain}/destinations/${region?.slug ?? country?.regionSlug}/${country?.slug}/${city.slug}`,
    containedInPlace: {
      "@type": "Country",
      name: country?.name,
    },
    touristType: city.travelStyle,
  };

  return (
    <>
      <SEO
        title={`${city.name} Travel Guide | ${country?.name}`}
        description={city.description}
        canonical={`https://${brandConfig.domain}/destinations/${region?.slug ?? country?.regionSlug}/${country?.slug}/${city.slug}`}
        structuredData={structuredData}
      />

      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="pt-6 pb-4">
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-accent">Home</Link></li>
            {region && (
              <>
                <span>/</span>
                <li><Link to="/destinations" className="hover:text-accent">Destinations</Link></li>
                <span>/</span>
                <li><Link to={`/destinations/${region.slug}`} className="hover:text-accent">{region.name}</Link></li>
              </>
            )}
            {country && (
              <>
                <span>/</span>
                <li><Link to={`/destinations/${region?.slug ?? country.regionSlug}/${country.slug}`} className="hover:text-accent">{country.name}</Link></li>
              </>
            )}
            <span>/</span>
            <li className="text-gray-900">{city.name}</li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center">
        <img
          src={city.heroImage}
          alt={city.heroImageAlt}
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto relative z-10 px-4 text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{city.name}</h1>
          <p className="text-lg md:text-xl max-w-3xl">{city.description}</p>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="section-sm">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-6">Quick Facts</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="text-gray-500 text-sm">Best time to visit</span>
              <p className="font-medium mt-1">{quickFacts.bestTime}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="text-gray-500 text-sm">Currency</span>
              <p className="font-medium mt-1">{quickFacts.currencySymbol} ({quickFacts.currency})</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="text-gray-500 text-sm">Language</span>
              <p className="font-medium mt-1">{quickFacts.language}</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <span className="text-gray-500 text-sm">Average stay</span>
              <p className="font-medium mt-1">{quickFacts.averageStay}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Visit */}
      <section className="section-sm">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-4">Why Visit {city.name}?</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-6">{city.description}</p>
          <p className="text-gray-600">
            {city.name} offers a compelling mix of {city.travelStyle.join(", ")}, making it a
            versatile destination for travelers of all styles.
          </p>
        </div>
      </section>

      {destinationWidget && (
        <section className="section-sm bg-gray-50">
          <div className="container mx-auto">
            <h2 className="heading-h2 mb-4">Things to do in {city.name}</h2>
            <div className="destination-widget-frame-wrap">
              <DestinationWidget locale={destinationWidget.locale} cards={destinationWidget.cards} />
            </div>
          </div>
        </section>
      )}

      {/* Where to Stay */}
      <section className="section">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="heading-h2 mb-0">Where to Stay in {city.name}</h2>
            <Link to="/hotels" className="text-accent hover:underline font-medium">
              View all hotels →
            </Link>
          </div>
          {hotels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotels.map((hotel) => (
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
            <BookingCTA
              title={`Find Hotels in ${city.name}`}
              description="Compare and book the best hotels for your stay."
              actionText="Search Hotels"
              actionUrl="/hotels"
              isDemo={false}
              tracking={tracking}
            />
          )}
        </div>
      </section>

      {/* How to Get There */}
      <section className="section-sm bg-gray-50">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-4">How to Get There</h2>
          <p className="text-gray-600 max-w-2xl">
            The nearest major airport is {city.name} International Airport (or a nearby hub).
            From there, you can take a taxi, train, or rideshare to your accommodation.
          </p>
          <div className="mt-4">
            <BookingCTA
              title={`Search Flights to ${city.name}`}
              description="Find the best flight deals from your location."
              actionText="Search Flights"
              actionUrl="/flights"
              isDemo={false}
              tracking={getTrackingForPage("destination_page", city.slug)}
            />
          </div>
        </div>
      </section>

      {/* Experiences */}
      {experiences.length > 0 && (
        <section className="section">
          <div className="container mx-auto">
            <h2 className="heading-h2 mb-6">Experiences in {city.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <ExperienceCard
                  key={exp.slug}
                  slug={exp.slug}
                  title={exp.title}
                  description={exp.description}
                  image={exp.image}
                  imageAlt={exp.imageAlt}
                  category={exp.category}
                  price={exp.price}
                  currencySymbol={exp.currencySymbol}
                  duration={exp.duration}
                  isDemo={exp.isDemo}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Suggested Itineraries */}
      {itineraries.length > 0 && (
        <section className="section-sm">
          <div className="container mx-auto">
            <h2 className="heading-h2 mb-6">Suggested Itineraries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {itineraries.map((itinerary) => (
                <ItineraryCard
                  key={itinerary.slug}
                  slug={itinerary.slug}
                  title={itinerary.title}
                  description={itinerary.description}
                  days={itinerary.days}
                  image={itinerary.heroImage}
                  imageAlt={itinerary.heroImageAlt}
                  destinationName={city.name}
                  budgetLevel={itinerary.budgetLevel}
                  estimatedBudget={itinerary.estimatedBudget}
                  currencySymbol={itinerary.currencySymbol}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {itineraries.length === 0 && (
        <section className="section-sm">
          <div className="container mx-auto text-center">
            <Link to="/itineraries" className="btn btn-accent">
              View All Itineraries
            </Link>
          </div>
        </section>
      )}

      {/* Travel Budget */}
      <section className="section">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-4">Travel Budget for {city.name}</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Budget</h3>
              <p className="text-2xl font-bold text-accent">${city.averageStay}</p>
              <p className="text-sm text-gray-500 mt-1">Per day, per person</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Mid-range</h3>
              <p className="text-2xl font-bold text-accent">${city.averageStay}</p>
              <p className="text-sm text-gray-500 mt-1">Per day, per person</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Luxury</h3>
              <p className="text-2xl font-bold text-accent">${city.averageStay}</p>
              <p className="text-sm text-gray-500 mt-1">Per day, per person</p>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="section-sm">
        <div className="container mx-auto">
          <h2 className="heading-h2 mb-4">Travel Tips for {city.name}</h2>
          <div className="prose max-w-3xl">
            <ul className="text-gray-600">
              <li><strong>Getting around:</strong> Use local public transport or ride-hailing apps.</li>
              <li><strong>Language:</strong> {city.language} is the primary language.</li>
              <li><strong>Currency:</strong> Local currency is {city.currencySymbol}. Credit cards are widely accepted.</li>
              <li><strong>Weather:</strong> Best visited during {city.bestTimeToVisit.toLowerCase()}.</li>
              <li><strong>Stay connected:</strong> Purchase a local SIM card or portable Wi-Fi at the airport.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Related Guides */}
      {guides.length > 0 && (
        <section className="section bg-gray-50">
          <div className="container mx-auto">
            <h2 className="heading-h2 mb-6">Related Guides</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {guides.map((guide) => (
                <GuideCard
                  key={guide.slug}
                  slug={guide.slug}
                  title={guide.title}
                  description={guide.description}
                  image={guide.heroImage}
                  imageAlt={guide.heroImageAlt}
                  authorName="Travel Writer"
                  publishedAt={guide.publishedAt}
                  readingTime={guide.readingTime}
                  contentType={guide.contentType}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Plan Your Trip CTA */}
      <section className="section">
        <div className="container mx-auto text-center">
          <h2 className="heading-h2 mb-4">Plan Your {city.name} Trip</h2>
          <p className="text-lead mx-auto mb-6">
            Let Bishfun build a personalized itinerary for your journey to {city.name}.
          </p>
          <Link to="/plan" className="btn btn-primary btn-lg h-auto py-3 px-8">
            Plan My Trip
          </Link>
        </div>
      </section>
    </>
  );
}

function DestinationWidget({ locale, cards }: { locale: string; cards: number }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src = `https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&language=en&locale=${locale}&layout=responsive&cards=${cards}&powered_by=true&campaign_id=89&promo_id=3947`;
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, [cards, locale]);

  return <div ref={containerRef} className="destination-widget-mount" />;
}

export default CityPage;
