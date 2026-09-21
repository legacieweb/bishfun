import { useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { cities, getCityBySlug } from "@/data/destinations/cities";
import { countries } from "@/data/destinations/countries";
import { regions } from "@/data/destinations/regions";
import SEO from "@/ui/components/shared/Seo";
import { ExperienceCard, ItineraryCard, HotelCard } from "@/ui/components/shared/Cards";
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

  const experiences = getExperiencesByDestination(city.slug);
  const itineraries = getItinerariesByDestination(city.slug);
  const hotels = getHotelsByDestination(city.slug);
  const tracking = getTrackingForPage("destination_page", city.slug);

  const destinationWidgetLocale: Record<string, {
    locale?: string;
    cards?: number;
    layout?: "responsive" | "vertical";
    products?: string;
  }> = {
    tokyo: { locale: "72181", cards: 35 },
    paris: { locale: "66746", cards: 100 },
    kyoto: { locale: "72420", cards: 13 },
    rome: { locale: "71631", cards: 100 },
    phuket: { locale: "78451", cards: 50 },
    bangkok: { locale: "78586", cards: 56 },
    melbourne: { locale: "60426", cards: 67 },
    sydney: { locale: "60400", cards: 54 },
    cairns: { locale: "60466", cards: 30 },
    perth: { locale: "60372", cards: 20 },
    brisbane: { locale: "91", cards: 15 },
    "surfers-paradise": { locale: "60401", cards: 14 },
    "gold-coast": { locale: "60442", cards: 32 },
    hobart: { locale: "60437", cards: 10 },
    rotorua: { locale: "75177", cards: 10 },
    christchurch: { locale: "75166", cards: 10 },
    auckland: { locale: "75167", cards: 8 },
    queenstown: { locale: "111798", cards: 8 },
    "milford-sound": { locale: "2100", cards: 2 },
    wanaka: { locale: "220811", cards: 3 },
    "franz-josef": { locale: "730", cards: 2 },
    taupo: { locale: "75150", cards: 1 },
    dubai: { locale: "60005", cards: 100, layout: "responsive" },
    "abu-dhabi": { locale: "60013", cards: 37, layout: "responsive" },
    sharjah: { locale: "60007", cards: 10, layout: "responsive" },
    "ras-al-khaimah": { locale: "60003", cards: 3, layout: "responsive" },
    fujairah: {
      layout: "vertical",
      products: "1093580,1093100,1093651",
    },
    amman: { locale: "520", cards: 1, layout: "vertical" },
    petra: { locale: "106501", cards: 1, layout: "vertical" },
    cairo: {
      layout: "vertical",
      products: "1115362,1106928,1119839,1105891,1115096,1115844,1102154,1104412,1129181,1116286,1101194",
    },
    giza: { locale: "274", cards: 8, layout: "responsive" },
    hurghada: { locale: "44", cards: 15, layout: "responsive" },
    luxor: {
      layout: "vertical",
      products: "1095488,1132779,1102719,1136071,1102460,1107616,1101699,1107619",
    },
    "marsa-alam": {
      layout: "vertical",
      products: "1095053,1094786,1094078,1094618,1095057",
    },
    "sharm-el-sheikh": { locale: "263612", cards: 2, layout: "responsive" },
    "port-ghalib": { locale: "272593", cards: 2, layout: "responsive" },
    quseir: { locale: "272993", cards: 5, layout: "responsive" },
    "rio-de-janeiro": { locale: "61535", cards: 18, layout: "responsive" },
    "buenos-aires": { locale: "60189", cards: 30, layout: "responsive" },
    "el-calafate": { locale: "83553", cards: 15, layout: "responsive" },
    "puerto-iguazu": { locale: "30", cards: 2, layout: "responsive" },
    ushuaia: { locale: "60210", cards: 1, layout: "responsive" },
    salta: { locale: "60240", cards: 1, layout: "responsive" },
    bariloche: { locale: "60331", cards: 1, layout: "responsive" },
    cusco: {
      layout: "responsive",
      products: "1000021,1015926,1019653,976581,976578,976576,1000586,1000645,1000148",
    },
    "aguas-calientes": { locale: "261863", cards: 9, layout: "responsive" },
    lima: { locale: "75306", cards: 1, layout: "responsive" },
    arequipa: { locale: "75334", cards: 1, layout: "responsive" },
    "new-york": { locale: "260932", cards: 100, layout: "responsive" },
    "las-vegas": { locale: "82073", cards: 100, layout: "responsive" },
    "san-francisco": { locale: "1772", cards: 56, layout: "responsive" },
    "los-angeles": { locale: "81810", cards: 55, layout: "responsive" },
    orlando: { locale: "79889", cards: 55, layout: "responsive" },
    chicago: { locale: "80816", cards: 55, layout: "responsive" },
    miami: { locale: "79868", cards: 54, layout: "responsive" },
    "san-antonio": { locale: "248671", cards: 54, layout: "responsive" },
    singapore: { locale: "78125", cards: 80, layout: "responsive" },
    bali: { locale: "267738", cards: 38, layout: "responsive" },
    kuta: { locale: "68442", cards: 3, layout: "responsive" },
    ubud: { locale: "68270", cards: 3, layout: "responsive" },
    bandung: { locale: "68560", cards: 5, layout: "responsive" },
    yogyakarta: { locale: "68255", cards: 3, layout: "responsive" },
    denpasar: { locale: "68506", cards: 9, layout: "responsive" },
    "south-kuta": { locale: "261236", cards: 7, layout: "responsive" },
    kintamani: { locale: "1110", cards: 5, layout: "responsive" },
    pattaya: { locale: "48", cards: 20, layout: "responsive" },
    "chiang-mai": { locale: "78479", cards: 25, layout: "responsive" },
    kathu: { locale: "78468", cards: 10, layout: "responsive" },
    krabi: { locale: "78465", cards: 19, layout: "responsive" },
    "hua-hin": { locale: "78472", cards: 1, layout: "responsive" },
    osaka: { locale: "28", cards: 20, layout: "responsive" },
    fukuoka: { locale: "72613", cards: 7, layout: "responsive" },
    okinawa: { locale: "72654", cards: 2, layout: "responsive" },
    kobe: { locale: "72454", cards: 2, layout: "responsive" },
    sapporo: { locale: "72801", cards: 2, layout: "responsive" },
    nagoya: { locale: "274648", cards: 2, layout: "responsive" },
    london: { locale: "67458", cards: 100, layout: "responsive" },
    edinburgh: { locale: "21", cards: 40, layout: "responsive" },
    liverpool: { locale: "67463", cards: 40, layout: "responsive" },
    manchester: { locale: "67441", cards: 22, layout: "responsive" },
    york: { locale: "67204", cards: 22, layout: "responsive" },
    brighton: { locale: "67570", cards: 22, layout: "responsive" },
    blackpool: { locale: "67591", cards: 8, layout: "responsive" },
    belfast: { locale: "67614", cards: 8, layout: "responsive" },
    barcelona: { locale: "66342", cards: 100, layout: "responsive" },
    madrid: { locale: "66254", cards: 100, layout: "responsive" },
    seville: { locale: "65870", cards: 100, layout: "responsive" },
    valencia: { locale: "65847", cards: 100, layout: "responsive" },
    malaga: { locale: "32", cards: 20, layout: "responsive" },
    "palma-de-mallorca": { locale: "65915", cards: 70, layout: "responsive" },
    tenerife: { locale: "65876", cards: 30, layout: "responsive" },
    venice: { locale: "71510", cards: 100, layout: "responsive" },
    florence: { locale: "71854", cards: 100, layout: "responsive" },
    milan: { locale: "71749", cards: 100, layout: "responsive" },
    naples: { locale: "71720", cards: 100, layout: "responsive" },
    turin: { locale: "71534", cards: 50, layout: "responsive" },
    palermo: { locale: "71428", cards: 50, layout: "responsive" },
    genoa: { locale: "71831", cards: 80, layout: "responsive" },
    bordeaux: { locale: "67101", cards: 30, layout: "responsive" },
    nice: { locale: "66770", cards: 40, layout: "responsive" },
    lyon: { locale: "66838", cards: 40, layout: "responsive" },
    toulouse: { locale: "66619", cards: 20, layout: "responsive" },
    marseille: { locale: "66825", cards: 20, layout: "responsive" },
    nantes: { locale: "66776", cards: 15, layout: "responsive" },
    avignon: { locale: "184100", cards: 19, layout: "responsive" },
    "cape-town": { locale: "82923", cards: 50, layout: "responsive" },
    johannesburg: { locale: "82862", cards: 3, layout: "responsive" },
    hazyview: { locale: "272628", cards: 1, layout: "responsive" },
    marrakesh: { locale: "73471", cards: 32, layout: "responsive" },
    zanzibar: { locale: "79200", cards: 2, layout: "responsive" },
    nairobi: { locale: "72893", cards: 4, layout: "responsive" },
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
              <DestinationWidget {...destinationWidget} />
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

function DestinationWidget({
  locale,
  cards,
  layout = "responsive",
  products,
}: {
  locale?: string;
  cards?: number;
  layout?: "responsive" | "vertical";
  products?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || container.querySelector("script")) return;

    const script = document.createElement("script");
    script.async = true;
    script.charset = "utf-8";
    const params = new URLSearchParams({
      currency: "USD",
      trs: "575237",
      shmarker: "671328",
      language: "en",
      layout,
      powered_by: "true",
      campaign_id: "89",
      promo_id: products ? "3948" : "3947",
    });
    if (locale) params.set("locale", locale);
    if (cards) params.set("cards", String(cards));
    if (products) params.set("product", products);
    script.src = `https://tpembd.com/content?${params.toString()}`;
    container.appendChild(script);

    return () => {
      container.replaceChildren();
    };
  }, [cards, layout, locale, products]);

  return <div ref={containerRef} className="destination-widget-mount" />;
}

export default CityPage;
