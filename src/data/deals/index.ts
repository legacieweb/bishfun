import type { Deal, DealCategory } from "@/types";

export const dealCategories: { slug: DealCategory; name: string }[] = [
  { slug: "flight-deals", name: "Flight Deals" },
  { slug: "hotel-deals", name: "Hotel Deals" },
  { slug: "weekend-deals", name: "Weekend Deals" },
  { slug: "beach-deals", name: "Beach Deals" },
  { slug: "adventure-deals", name: "Adventure Deals" },
  { slug: "luxury-deals", name: "Luxury Deals" },
  { slug: "budget-deals", name: "Budget Deals" },
  { slug: "family-deals", name: "Family Deals" },
];

export const deals: Deal[] = [
  {
    slug: "tokyo-osaka-flight-deal",
    title: "Tokyo to Osaka flights",
    description: "Round-trip flights between Tokyo and Osaka for your Japan itinerary.",
    type: "flight",
    category: "flight-deals",
    destinationSlug: "tokyo",
    originalPrice: 320,
    salePrice: 189,
    currency: "USD",
    currencySymbol: "$",
    discountPercent: 41,
    validUntil: "2025-12-31",
    image:
      "https://images.unsplash.com/photo-1503899092288-5b3e9f5d6c7d?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Domestic flight over Mt. Fuji",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Tokyo to Osaka flights — 41% off",
      description: "Round-trip flights between Tokyo and Osaka from $189 with 41% discount.",
      keywords: ["tokyo osaka flights", "japan flights", "flight deal"],
    },
  },
  {
    slug: "paris-boutique-hotel-deal",
    title: "Boutique hotel in Le Marais",
    description: "Stay in a charming boutique hotel in the historic Marais district of Paris.",
    type: "hotel",
    category: "hotel-deals",
    destinationSlug: "paris",
    originalPrice: 280,
    salePrice: 195,
    currency: "EUR",
    currencySymbol: "€",
    discountPercent: 30,
    validUntil: "2025-11-30",
    image:
      "https://images.unsplash.com/photo-1502602689347-2c13b6a4c0c9?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Elegant hotel room with Parisian style",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Boutique hotel in Paris Le Marais — 30% off",
      description: "Charming boutique hotel in Paris's Marais district from €195 with 30% discount.",
      keywords: ["paris hotel deal", "boutique hotel paris", "le marais hotel"],
    },
  },
  {
    slug: "safari-weekend-deal",
    title: "Weekend Safari in Maasai Mara",
    description: "A 3-day weekend safari package in Kenya's iconic Maasai Mara National Reserve.",
    type: "experience",
    category: "weekend-deals",
    destinationSlug: "maasai-mara",
    originalPrice: 890,
    salePrice: 650,
    currency: "USD",
    currencySymbol: "$",
    discountPercent: 27,
    validUntil: "2025-12-15",
    image:
      "https://images.unsplash.com/photo-1512595934324-5e3c6e6a4b4f?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Safari jeep tracking elephants in the Maasai Mara",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Weekend Safari in Maasai Mara — 27% off",
      description: "3-day weekend safari in Kenya's Maasai Mara from $650 with 27% discount.",
      keywords: ["maasai mara safari", "kenya safari deal", "weekend safari"],
    },
  },
  {
    slug: "bali-beach-resort-deal",
    title: "Beach resort stay in Bali",
    description: "Relax at a luxury beachfront resort in Nusa Dua, Bali with direct ocean access.",
    type: "hotel",
    category: "beach-deals",
    destinationSlug: "bali",
    originalPrice: 350,
    salePrice: 245,
    currency: "USD",
    currencySymbol: "$",
    discountPercent: 30,
    validUntil: "2025-10-31",
    image:
      "https://images.unsplash.com/photo-1512595934324-5e3c6e6a4b4f?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Luxury beachfront villa with private pool in Bali",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Bali beach resort — 30% off",
      description: "Luxury beachfront resort in Nusa Dua, Bali from $245 with 30% discount.",
      keywords: ["bali resort deal", "beach resort bali", "nusa dua hotel"],
    },
  },
];

export const getDealBySlug = (slug: string): Deal | undefined =>
  deals.find((d) => d.slug === slug);

export const getDealsByCategory = (category: DealCategory): Deal[] =>
  deals.filter((d) => d.category === category);

export const getFeaturedDeals = (count: number = 4): Deal[] =>
  deals.slice(0, count);

