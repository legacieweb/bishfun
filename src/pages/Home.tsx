import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { DestinationCard, GuideCard, ItineraryCard, HotelCard } from "@/ui/components/shared/Cards";
import { Newsletter } from "@/ui/components/newsletter/Newsletter";
import SEO from "@/ui/components/shared/Seo";
import { brandConfig } from "@/config/brand";
import { homepageData } from "@/data";
import { regions } from "@/data/destinations/regions";
import { cities } from "@/data/destinations/cities";
import { countries } from "@/data/destinations/countries";

const getDestinationPath = (citySlug: string): string => {
  const city = cities.find((item) => item.slug === citySlug);
  const country = city ? countries.find((item) => item.slug === city.countrySlug) : undefined;
  const region = country ? regions.find((item) => item.slug === country.regionSlug) : undefined;

  if (!city || !country || !region) return "/destinations";
  return `/destinations/${region.slug}/${country.slug}/${city.slug}`;
};

function Home() {
  const experiencesWidgetRef = useRef<HTMLDivElement>(null);
  const dealsWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = experiencesWidgetRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.src =
      "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=989258%2C988367%2C1102719%2C974575%2C1062527%2C1015872%2C1115699%2C1054116%2C1053664%2C1129122&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948";
    script.charset = "utf-8";
    container.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, []);

  useEffect(() => {
    const container = dealsWidgetRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    script.src =
      "https://tpembd.com/content?currency=USD&trs=575237&shmarker=671328&product=1111404%2C973977%2C979887%2C1111286&language=en&layout=vertical&powered_by=true&campaign_id=89&promo_id=3948";
    container.appendChild(script);

    return () => {
      script.remove();
      container.replaceChildren();
    };
  }, []);

  const {
    featuredDestinations,
    trendingDestinations,
    featuredGuides,
    featuredItineraries,
    featuredHotels,
  } = homepageData;

  return (
    <>
      <SEO
        title={brandConfig.name}
        description={brandConfig.description}
      />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center px-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url('https://images.unsplash.com/photo-1618083707368-b3823daa2726?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        />
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight">
            DISCOVER THE WORLD.
            <br />
            PLAN YOUR JOURNEY.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
            {brandConfig.supportingLine}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/plan"
              className="btn btn-primary btn-lg h-auto py-3 px-8 text-lg"
            >
              Plan My Trip
            </Link>
            <Link
              to="/destinations"
              className="btn btn-secondary btn-lg h-auto py-3 px-8 text-lg"
            >
              Explore Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="section">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="heading-h2">Trending Destinations</h2>
            <p className="text-gray-600 mt-2">Where travelers are discovering next.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingDestinations.map((dest) => (
              <DestinationCard
                key={dest.slug}
                slug={dest.slug}
                to={getDestinationPath(dest.slug)}
                name={dest.name}
                subtitle={dest.countrySlug ? `${dest.countrySlug}` : undefined}
                description={dest.description}
                image={dest.heroImage}
                imageAlt={dest.heroImageAlt}
                tags={dest.tags}
                size="md"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Plan It Your Way - Signature Section */}
      <section className="section bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-h2">Plan It Your Way</h2>
            <p className="text-lead mx-auto">
              Bishfun helps you craft the journey around your time, style, and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-accent-subtle rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discover</h3>
              <p className="text-gray-600">Find somewhere worth going, with inspiration from our global editorial team.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-accent-subtle rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Plan</h3>
              <p className="text-gray-600">Shape the journey around your time, style, and budget with our trip planner.</p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm text-center">
              <div className="w-12 h-12 mx-auto bg-accent-subtle rounded-full flex items-center justify-center mb-4">
                <span className="text-xl">✈️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Go</h3>
              <p className="text-gray-600">Find the flights, stays, and experiences that bring your trip to life.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link to="/plan" className="btn btn-primary">
              Start Planning
            </Link>
          </div>
        </div>
      </section>

      {/* Explore by Region */}
      <section className="section">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="heading-h2">Explore the World</h2>
            <p className="text-gray-600 mt-2">
              Every region has a story worth discovering.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {regions.map((region) => (
              <Link
                key={region.slug}
                to={`/destinations/${region.slug}`}
                className="group relative overflow-hidden rounded-xl shadow-md h-32"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${region.heroImage}')` }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white font-bold text-lg">{region.name}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/destinations" className="btn btn-ghost">
              All Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Experiences */}
      <section className="section-sm bg-gray-50">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="heading-h2">Popular Experiences</h2>
          </div>
          <div ref={experiencesWidgetRef} className="w-full overflow-hidden">
          </div>
        </div>
      </section>

      {/* Travel Inspiration / Guides */}
      <section className="section">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="heading-h2">Travel Guides</h2>
            <p className="text-gray-600 mt-2">
              In-depth guides to help you make informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredGuides.map((guide) => (
              <GuideCard
                key={guide.slug}
                slug={guide.slug}
                title={guide.title}
                description={guide.description}
                image={guide.heroImage}
                imageAlt={guide.heroImageAlt}
                authorName="Amara Okello"
                publishedAt={guide.publishedAt}
                readingTime={guide.readingTime}
                contentType={guide.contentType}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Itineraries */}
      <section className="section-sm">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="heading-h2">Featured Itineraries</h2>
            <p className="text-gray-600 mt-2">
              Curated trip plans for your next adventure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItineraries.map((itinerary) => (
              <ItineraryCard
                key={itinerary.slug}
                slug={itinerary.slug}
                title={itinerary.title}
                description={itinerary.description}
                days={itinerary.days}
                image={itinerary.heroImage}
                imageAlt={itinerary.heroImageAlt}
                destinationName={itinerary.destinationSlug}
                budgetLevel={itinerary.budgetLevel}
                estimatedBudget={itinerary.estimatedBudget}
                currencySymbol={itinerary.currencySymbol}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hotel Discovery */}
      <section className="section-sm">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="heading-h2">Featured Stays</h2>
            <p className="text-gray-600 mt-2">Handpicked hotels for your journey.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredHotels.map((hotel) => (
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
        </div>
      </section>

      {/* Travel Deals */}
      <section className="section bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="heading-h2 text-white">Travel Deals</h2>
            <p className="text-gray-300 mt-2">Curated offers from our travel partners.</p>
          </div>
          <div ref={dealsWidgetRef} className="destination-widget-mount bg-white text-gray-900">
          </div>
          <div className="text-center mt-8">
            <Link to="/deals" className="btn btn-accent">
              View All Deals
            </Link>
          </div>
        </div>
      </section>

      {/* Plan My Trip CTA */}
      <section className="section">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="heading-h2 mb-4">Ready to Plan?</h2>
            <p className="text-lead mx-auto mb-6">
              Tell Bishfun where you want to go and we'll build a personalized trip for you.
            </p>
            <Link to="/plan" className="btn btn-primary btn-lg h-auto py-3 px-8 text-lg">
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-sm bg-gray-50">
        <div className="container mx-auto">
          <Newsletter />
        </div>
      </section>
    </>
  );
}

export default Home;
