import type { Itinerary, DailyPlan, Activity, AccommodationRef } from "@/types";

const activities = (items: Partial<Activity>[]): Activity[] =>
  items.map((item) => ({
    title: item.title || "",
    description: item.description || "",
    duration: item.duration || "",
    category: item.category || "",
  }));

export const itineraries: Itinerary[] = [
  {
    slug: "7-days-in-japan",
    title: "7 Days in Japan: Complete Itinerary",
    description:
      "Experience the best of Japan in 7 days: Tokyo's neon energy, Kyoto's ancient temples, and a glimpse of traditional culture.",
    heroImage:
      "https://images.unsplash.com/photo-1503899092288-5b3e9f5d6c7d?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Tokyo skyline with Mount Fuji in the distance",
    destinationSlug: "tokyo",
    days: 7,
    travelers: 2,
    travelStyle: "culture",
    budgetLevel: "mid-range",
    estimatedBudget: { budget: 1200, midRange: 2500, luxury: 5000 },
    currency: "USD",
    currencySymbol: "$",
    dailyPlans: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        morning: activities([
          {
            title: "Arrive at Narita or Haneda Airport",
            description: "Transfer to your hotel in Shinjuku or Shibuya.",
            duration: "3h",
            category: "transport",
          },
        ]),
        afternoon: activities([
          {
            title: "Check into Shinjuku hotel",
            description: "Settle in and explore the immediate neighborhood.",
            duration: "2h",
            category: "accommodation",
          },
        ]),
        evening: activities([
          {
            title: "Shibuya Crossing at night",
            description: "Experience the famous scramble crossing illuminated by neon.",
            duration: "1.5h",
            category: "sightseeing",
          },
        ]),
        accommodation: {
          name: "Hotel Sunroute Plaza Shinjuku",
          description: "Modern hotel in the heart of Shibuya, walking distance to major attractions.",
          budget: "$120-180/night",
          bookingUrl: "https://travelpayouts.com",
          isDemo: true,
        },
      },
      {
        day: 2,
        title: "Tokyo Exploration",
        morning: activities([
          {
            title: "Sensai-ji Temple",
            description: "Visit Tokyo's oldest temple in Asakusa.",
            duration: "2h",
            category: "culture",
          },
          {
            title: "Sumida River cruise",
            description: "Scenic cruise to Hamamatsucho.",
            duration: "1h",
            category: "sightseeing",
          },
        ]),
        afternoon: activities([
          {
            title: "Imperial Palace East Gardens",
            description: "Explore the beautiful gardens and moats of the Imperial Palace.",
            duration: "2h",
            category: "culture",
          },
        ]),
        evening: activities([
          {
            title: "Omoide Yokocho (Memory Lane)",
            description: "Sample yakitori and ramen in this narrow alley of tiny restaurants.",
            duration: "2h",
            category: "food",
          },
        ]),
        accommodation: {
          name: "Hotel Sunroute Plaza Shinjuku",
          description: "Modern hotel in the heart of Shibuya, walking distance to major attractions.",
          budget: "$120-180/night",
          bookingUrl: "https://travelpayouts.com",
          isDemo: true,
        },
      },
    ],
    tips: [
      "Purchase a Suica or Pasmo card for convenient transit.",
      "Consider a 7-day Japan Rail Pass for long-distance travel.",
      "Download offline maps and translation apps.",
    ],
    seo: {
      title: "7 Days in Japan: Complete Itinerary",
      description: "Experience the best of Japan in 7 days with our curated itinerary: Tokyo, Kyoto, and traditional culture.",
      keywords: ["japan itinerary", "7 days in japan", "tokyo kyoto itinerary"],
    },
  },
  {
    slug: "5-days-in-paris",
    title: "5 Days in Paris: The Art & Soul of the City",
    description: "Five days in Paris lets you dive deep into its museums, neighborhoods, cuisine, and joie de vivre.",
    heroImage:
      "https://images.unsplash.com/photo-1502602689347-2c13b6a4c0c9?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Eiffel Tower at golden hour",
    destinationSlug: "paris",
    days: 5,
    travelers: 2,
    travelStyle: "culture",
    budgetLevel: "mid-range",
    estimatedBudget: { budget: 800, midRange: 1800, luxury: 4000 },
    currency: "EUR",
    currencySymbol: "€",
    dailyPlans: [
      {
        day: 1,
        title: "Arrival & Left Bank Discovery",
        morning: activities([
          {
            title: "Arrive at Charles de Gaulle Airport",
            description: "Take the RER B to central Paris.",
            duration: "1h",
            category: "transport",
          },
        ]),
        afternoon: activities([
          {
            title: "Notre-Dame & Île de la Cité",
            description: "Walk the historic island and see Notre-Dame's exterior.",
            duration: "2h",
            category: "culture",
          },
          {
            title: "Lunch at a traditional bistro",
            description: "Try French onion soup and a classic croque-monsieur.",
            duration: "1.5h",
            category: "food",
          },
        ]),
        evening: activities([
          {
            title: "Seine river cruise",
            description: "See Paris's monuments sparkle from the water.",
            duration: "1h",
            category: "sightseeing",
          },
        ]),
        accommodation: {
          name: "Hôtel Lutetia",
          description: "Historic luxury hotel on the Left Bank, a short walk from the Eiffel Tower.",
          budget: "€200-350/night",
          bookingUrl: "https://travelpayouts.com",
          isDemo: true,
        },
      },
    ],
    tips: [
      "Buy museum passes in advance.",
      "Use the metro — it's the fastest way to get around.",
      "Eat at local markets like Marché des Enfants Rouges.",
    ],
    seo: {
      title: "5 Days in Paris: The Art & Soul of the City",
      description: "Dive into Paris's museums, neighborhoods, and cuisine with our 5-day itinerary.",
      keywords: ["paris itinerary", "5 days in paris", "paris travel guide"],
    },
  },
  {
    slug: "3-days-in-london",
    title: "3 Days in London: A Capital Adventure",
    description: "Three days in London covers the classics, some hidden gems, and a taste of British culture.",
    heroImage:
      "https://images.unsplash.com/photo-1513151239731-2cb87d6adfa5?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "London skyline with Westminster and Big Ben",
    destinationSlug: "united-kingdom",
    days: 3,
    travelers: 1,
    travelStyle: "culture",
    budgetLevel: "mid-range",
    estimatedBudget: { budget: 300, midRange: 700, luxury: 1500 },
    currency: "GBP",
    currencySymbol: "£",
    dailyPlans: [
      {
        day: 1,
        title: "Historic London",
        morning: activities([
          {
            title: "Tower of London & Crown Jewels",
            description: "Walk the medieval walls and see the Crown Jewels.",
            duration: "2h",
            category: "history",
          },
        ]),
        afternoon: activities([
          {
            title: "Borough Market",
            description: "Sample British and international food at this historic market.",
            duration: "2h",
            category: "food",
          },
        ]),
        evening: activities([
          {
            title: "Thames walk to Tower Bridge",
            description: "Stroll along the river and watch the sunset over the city.",
            duration: "1.5h",
            category: "sightseeing",
          },
        ]),
        accommodation: {
          name: "The Z Hotel Shoreditch",
          description: "Stylish boutique hotel in the heart of Shoreditch's creative district.",
          budget: "£120-180/night",
          bookingUrl: "https://travelpayouts.com",
          isDemo: true,
        },
      },
    ],
    tips: [
      "Get an Oyster card for public transport.",
      "Museums are free — prioritize the British Museum and Tate Modern.",
      "Afternoon tea is a must.",
    ],
    seo: {
      title: "3 Days in London: A Capital Adventure",
      description: "Three days in London: the classics, hidden gems, and British culture.",
      keywords: ["london itinerary", "3 days in london", "london travel guide"],
    },
  },
];

export const getItineraryBySlug = (slug: string): Itinerary | undefined =>
  itineraries.find((i) => i.slug === slug);

export const getItinerariesByDestination = (destinationSlug: string): Itinerary[] =>
  itineraries.filter((i) => i.destinationSlug === destinationSlug);

export const getFeaturedItineraries = (count: number = 4): Itinerary[] =>
  itineraries.slice(0, count);
