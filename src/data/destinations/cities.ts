import type { City, Destination, QuickFacts } from "@/types";
import { countries } from "./countries";
import { regions } from "./regions";

const additionalCitySeeds = [
  ["australia", "melbourne", "Melbourne"], ["australia", "cairns", "Cairns"], ["australia", "perth", "Perth"],
  ["australia", "brisbane", "Brisbane"], ["australia", "surfers-paradise", "Surfers Paradise"], ["australia", "gold-coast", "Gold Coast"], ["australia", "hobart", "Hobart"],
  ["new-zealand", "rotorua", "Rotorua"], ["new-zealand", "christchurch", "Christchurch"], ["new-zealand", "milford-sound", "Milford Sound"], ["new-zealand", "wanaka", "Wanaka"], ["new-zealand", "franz-josef", "Franz Josef"], ["new-zealand", "taupo", "Taupo"],
  ["uae", "abu-dhabi", "Abu Dhabi"], ["uae", "sharjah", "Sharjah"], ["uae", "ras-al-khaimah", "Ras al-Khaimah"], ["uae", "fujairah", "Fujairah"],
  ["jordan", "wadi-rum", "Wadi Rum"], ["jordan", "petra", "Petra"],
  ["egypt", "cairo", "Cairo"], ["egypt", "giza", "Giza"], ["egypt", "hurghada", "Hurghada"], ["egypt", "luxor", "Luxor"], ["egypt", "marsa-alam", "Marsa Alam"], ["egypt", "sharm-el-sheikh", "Sharm El-Sheikh"], ["egypt", "port-ghalib", "Port Ghalib"], ["egypt", "quseir", "Quseir"],
  ["brazil", "rio-de-janeiro", "Rio de Janeiro"],
  ["argentina", "buenos-aires", "Buenos Aires"], ["argentina", "el-calafate", "El Calafate"], ["argentina", "puerto-iguazu", "Puerto Iguazú"], ["argentina", "ushuaia", "Ushuaia"], ["argentina", "salta", "Salta"], ["argentina", "bariloche", "Bariloche"],
  ["peru", "cusco", "Cusco"], ["peru", "aguas-calientes", "Aguas Calientes"], ["peru", "lima", "Lima"], ["peru", "arequipa", "Arequipa"],
  ["usa", "new-york", "New York"], ["usa", "las-vegas", "Las Vegas"], ["usa", "san-francisco", "San Francisco"], ["usa", "orlando", "Orlando"], ["usa", "los-angeles", "Los Angeles"], ["usa", "chicago", "Chicago"], ["usa", "miami", "Miami"], ["usa", "san-antonio", "San Antonio"],
  ["canada", "vancouver", "Vancouver"], ["canada", "niagara-falls", "Niagara Falls"], ["canada", "toronto", "Toronto"], ["canada", "montreal", "Montreal"], ["canada", "calgary", "Calgary"], ["canada", "victoria", "Victoria"], ["canada", "quebec-city", "Quebec City"], ["canada", "ottawa", "Ottawa"],
  ["mexico", "mexico-city", "Mexico City"], ["mexico", "cancun", "Cancún"], ["mexico", "playa-del-carmen", "Playa del Carmen"], ["mexico", "tulum", "Tulum"], ["mexico", "veracruz", "Veracruz"], ["mexico", "puerto-morelos", "Puerto Morelos"], ["mexico", "cozumel", "Cozumel"], ["mexico", "akumal", "Akumal"],
  ["indonesia", "bali", "Bali"], ["indonesia", "kuta", "Kuta"], ["indonesia", "ubud", "Ubud"], ["indonesia", "bandung", "Bandung"], ["indonesia", "yogyakarta", "Yogyakarta"], ["indonesia", "denpasar", "Denpasar"], ["indonesia", "south-kuta", "South Kuta"], ["indonesia", "kintamani", "Kintamani"],
  ["singapore", "singapore", "Singapore"],
  ["thailand", "bangkok", "Bangkok"], ["thailand", "phuket", "Phuket"], ["thailand", "pattaya", "Pattaya"], ["thailand", "chiang-mai", "Chiang Mai"], ["thailand", "kathu", "Kathu"], ["thailand", "krabi", "Krabi"], ["thailand", "hua-hin", "Hua Hin"], ["thailand", "mueang-phuket", "Mueang Phuket"],
  ["japan", "tokyo", "Tokyo"], ["japan", "osaka", "Osaka"], ["japan", "kyoto", "Kyoto"], ["japan", "fukuoka", "Fukuoka"], ["japan", "okinawa", "Okinawa"], ["japan", "kobe", "Kobe"], ["japan", "sapporo", "Sapporo"], ["japan", "nagoya", "Nagoya"],
  ["united-kingdom", "london", "London"], ["united-kingdom", "edinburgh", "Edinburgh"], ["united-kingdom", "liverpool", "Liverpool"], ["united-kingdom", "manchester", "Manchester"], ["united-kingdom", "york", "York"], ["united-kingdom", "brighton", "Brighton"], ["united-kingdom", "blackpool", "Blackpool"], ["united-kingdom", "belfast", "Belfast"],
  ["spain", "barcelona", "Barcelona"], ["spain", "madrid", "Madrid"], ["spain", "seville", "Seville"], ["spain", "valencia", "València"], ["spain", "malaga", "Málaga"], ["spain", "palma-de-mallorca", "Palma de Mallorca"], ["spain", "granada", "Granada"], ["spain", "tenerife", "Tenerife"],
  ["italy", "rome", "Rome"], ["italy", "venice", "Venice"], ["italy", "florence", "Florence"], ["italy", "milan", "Milan"], ["italy", "naples", "Naples"], ["italy", "turin", "Turin"], ["italy", "palermo", "Palermo"], ["italy", "genoa", "Genoa"],
  ["france", "paris", "Paris"], ["france", "bordeaux", "Bordeaux"], ["france", "nice", "Nice"], ["france", "lyon", "Lyon"], ["france", "toulouse", "Toulouse"], ["france", "marseille", "Marseille"], ["france", "nantes", "Nantes"], ["france", "avignon", "Avignon"],
  ["morocco", "marrakesh", "Marrakesh"],
  ["south-africa", "cape-town", "Cape Town"], ["south-africa", "johannesburg", "Johannesburg"], ["south-africa", "hazyview", "Hazyview"],
  ["tanzania", "zanzibar", "Zanzibar"],
] as const;

const additionalCities: City[] = additionalCitySeeds.map(([countrySlug, slug, name]) => {
  const country = countries.find((item) => item.slug === countrySlug);

  return {
    slug,
    countrySlug,
    name,
    subtitle: country?.name || "",
    description: `${name} is a memorable base for discovering ${country?.name || "the region"}, combining local character, standout scenery, and easy access to nearby experiences.`,
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85",
    heroImageAlt: `${name} travel scene`,
    currency: country?.currency || "USD",
    currencySymbol: country?.currencySymbol || "$",
    language: country?.languages.join(", ") || "English",
    averageStay: "2-4 days",
    travelStyle: ["culture", "food", "beach", "adventure"],
    budgetLevel: "mid-range",
    bestTimeToVisit: country?.bestTimeToVisit || "November to April",
  };
});

const rawCities: City[] = [
  ...additionalCities,
  {
    slug: "tokyo",
    countrySlug: "japan",
    name: "Tokyo",
    subtitle: "Japan",
    description:
      "Tokyo is a mesmerizing fusion of ultramodern neighborhoods and historic temples, where neon-lit skyscrapers stand alongside centuries-old shrines.",
    heroImage:
      "https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2025/02/map-of-tokyo-japan-travel-scaled.jpg?fit=2560%2C1707&ssl=1",
    heroImageAlt: "Tokyo skyline at night with neon lights",
    currency: "JPY",
    currencySymbol: "¥",
    language: "Japanese",
    averageStay: "4-5 days",
    travelStyle: ["city", "culture", "food", "shopping"],
    budgetLevel: "mid-range",
    bestTimeToVisit: "March to May (cherry blossoms) and September to November (autumn)",
  },
  {
    slug: "paris",
    countrySlug: "france",
    name: "Paris",
    subtitle: "France",
    description:
      "Paris, the City of Light, captivates with its iconic landmarks, world-class art, and timeless café culture.",
    heroImage:
      "https://images.unsplash.com/photo-1667271331041-0454c9f5902e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Eiffel Tower at golden hour with blue sky",
    currency: "EUR",
    currencySymbol: "€",
    language: "French",
    averageStay: "3-4 days",
    travelStyle: ["culture", "food", "romance", "city"],
    budgetLevel: "luxury",
    bestTimeToVisit: "April to June and September to October",
  },
  {
    slug: "kyoto",
    countrySlug: "japan",
    name: "Kyoto",
    subtitle: "Japan",
    description:
      "Kyoto is Japan's cultural heart, where over 1,000 temples and shrines whisper centuries of tradition.",
    heroImage:
      "https://cdn.pixabay.com/photo/2016/12/06/17/11/fushimi-inari-shrine-1886975_1280.jpg",
    heroImageAlt: "Fushimi Inari Shrine with thousands of red torii gates",
    currency: "JPY",
    currencySymbol: "¥",
    language: "Japanese",
    averageStay: "2-3 days",
    travelStyle: ["culture", "history", "food"],
    budgetLevel: "mid-range",
    bestTimeToVisit: "March to May and October to November",
  },
  {
    slug: "nairobi",
    countrySlug: "kenya",
    name: "Nairobi",
    subtitle: "Kenya",
    description:
      "Nairobi is Kenya's vibrant capital, home to the famous David Sheldrick Elephant Orphanage and a growing food scene.",
    heroImage:
      "https://images.pexels.com/photos/15496542/pexels-photo-15496542.jpeg?_gl=1*1ysp5yf*_ga*MzIyMDYyODUxLjE3ODk2NzM1MjI.*_ga_8JE65Q40S6*czE3ODk3MTM1OTMkbzIkZzEkdDE3ODk3MTM2MjkkajI0JGwwJGgw",
    heroImageAlt: "Nairobi skyline with city life",
    currency: "KES",
    currencySymbol: "KSh",
    language: "English, Swahili",
    averageStay: "2-3 days",
    travelStyle: ["city", "safari", "culture"],
    budgetLevel: "budget",
    bestTimeToVisit: "June to October and December to March",
  },
  {
    slug: "bangkok",
    countrySlug: "thailand",
    name: "Bangkok",
    subtitle: "Thailand",
    description:
      "Bangkok pulses with life, from glittering temples and floating markets to some of Asia's best street food.",
    heroImage:
      "https://images.unsplash.com/photo-1722700407861-89597bcef6ca?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Wat Arun temple on the Chao Phraya River",
    currency: "THB",
    currencySymbol: "฿",
    language: "Thai, English",
    averageStay: "2-3 days",
    travelStyle: ["city", "culture", "food"],
    budgetLevel: "budget",
    bestTimeToVisit: "November to February (cool dry season)",
  },
  {
    slug: "phuket",
    countrySlug: "thailand",
    name: "Phuket",
    subtitle: "Thailand",
    description:
      "Phuket, Thailand's largest island, is a tropical paradise of white-sand beaches and crystal-clear waters.",
    heroImage:
      "https://images.unsplash.com/photo-1745781230148-cd467af9ac58?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Tropical beach with turquoise water and limestone cliffs",
    currency: "THB",
    currencySymbol: "฿",
    language: "Thai, English",
    averageStay: "4-5 days",
    travelStyle: ["beach", "relaxation", "adventure"],
    budgetLevel: "mid-range",
    bestTimeToVisit: "November to April",
  },
  {
    slug: "rome",
    countrySlug: "italy",
    name: "Rome",
    subtitle: "Italy",
    description:
      "Rome is an open-air museum where every corner reveals millennia of history, from the Colosseum to Baroque fountains.",
    heroImage:
      "https://images.unsplash.com/photo-1724398915427-edc535c546fe?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Colosseum in Rome with blue sky",
    currency: "EUR",
    currencySymbol: "€",
    language: "Italian",
    averageStay: "3-4 days",
    travelStyle: ["culture", "history", "food", "city"],
    budgetLevel: "mid-range",
    bestTimeToVisit: "April to June and September to October",
  },
  {
    slug: "new-york",
    countrySlug: "usa",
    name: "New York City",
    subtitle: "United States",
    description:
      "New York City is a global center of culture, finance, and entertainment, where iconic skyline meets world-class museums.",
    heroImage:
      "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "New York skyline at sunset",
    currency: "USD",
    currencySymbol: "$",
    language: "English",
    averageStay: "3-4 days",
    travelStyle: ["city", "culture", "food", "shopping"],
    budgetLevel: "luxury",
    bestTimeToVisit: "September to November and March to May",
  },
  {
    slug: "dubai",
    countrySlug: "uae",
    name: "Dubai",
    subtitle: "United Arab Emirates",
    description:
      "Dubai dazzles with futuristic architecture, luxury shopping, and desert adventures just beyond the city.",
    heroImage:
      "https://images.unsplash.com/flagged/photo-1559717865-a99cac1c95d8?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Dubai skyline with Burj Khalifa at sunset",
    currency: "AED",
    currencySymbol: "د.إ",
    language: "Arabic, English",
    averageStay: "3-4 days",
    travelStyle: ["luxury", "shopping", "adventure"],
    budgetLevel: "luxury",
    bestTimeToVisit: "October to April (cooler months)",
  },
  {
    slug: "sydney",
    countrySlug: "australia",
    name: "Sydney",
    subtitle: "Australia",
    description:
      "Sydney is Australia's iconic harbor city, defined by the Opera House, Harbour Bridge, and golden beaches.",
    heroImage:
      "https://images.unsplash.com/photo-1613033402715-e66f36181e46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Sydney Opera House and Harbour Bridge at sunset",
    currency: "AUD",
    currencySymbol: "A$",
    language: "English",
    averageStay: "3-4 days",
    travelStyle: ["city", "beach", "culture"],
    budgetLevel: "mid-range",
    bestTimeToVisit: "September to November and March to May",
  },
];

const uniqueCities = new Map<string, City>();
rawCities.forEach((city) => uniqueCities.set(`${city.countrySlug}:${city.slug}`, city));

export const cities: City[] = [...uniqueCities.values()];

export const getCityBySlug = (slug: string): City | undefined =>
  cities.find((c) => c.slug === slug);

export const getCitiesByCountry = (countrySlug: string): City[] =>
  cities.filter((c) => c.countrySlug === countrySlug);

function getRegionFromCountry(countrySlug: string) {
  const country = countries.find((c) => c.slug === countrySlug);
  if (!country) return undefined;
  return regions.find((r) => r.slug === country.regionSlug);
}

export const buildDestination = (
  city: City,
): Destination => {
  const country = countries.find((c) => c.slug === city.countrySlug);
  const region = country ? getRegionFromCountry(city.countrySlug) : undefined;

  const quickFacts: QuickFacts = {
    bestTime: city.bestTimeToVisit,
    currency: city.currency,
    currencySymbol: city.currencySymbol,
    language: city.language,
    averageStay: city.averageStay,
    travelStyle: city.travelStyle,
    budgetLevel: city.budgetLevel,
  };

  return {
    slug: city.slug,
    name: city.name,
    type: "city",
    countrySlug: city.countrySlug,
    regionSlug: region?.slug || country?.regionSlug || "africa",
    description: city.description,
    heroImage: city.heroImage,
    heroImageAlt: city.heroImageAlt,
    quickFacts,
    tags: city.travelStyle,
    seo: {
      title: `${city.name} Travel Guide`,
      description: `${city.name}, ${country?.name}. ${city.description.substring(0, 120)}`,
      keywords: [`${city.name} travel`, `${city.name} guide`, `${city.name} itinerary`],
    },
  };
};

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  const city = getCityBySlug(slug);
  if (city) return buildDestination(city);

  const country = countries.find((c) => c.slug === slug);
  if (!country) return undefined;

  const region = regions.find((r) => r.slug === country.regionSlug);
  const quickFacts: QuickFacts = {
    bestTime: country.bestTimeToVisit,
    currency: country.currency,
    currencySymbol: country.currencySymbol,
    language: country.languages.join(", "),
    averageStay: "5-7 days",
    travelStyle: ["culture", "adventure"],
    budgetLevel: "mid-range",
  };

  return {
    slug: country.slug,
    name: country.name,
    type: "country",
    regionSlug: country.regionSlug,
    description: country.description,
    heroImage: country.heroImage,
    heroImageAlt: country.heroImageAlt,
    quickFacts,
    tags: ["travel", "guide"],
    seo: {
      title: `${country.name} Travel Guide`,
      description: `${country.name} travel guide. ${country.description.substring(0, 120)}`,
      keywords: [`${country.name} travel`, `${country.name} guide`],
    },
  };
};
