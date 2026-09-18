import type { Guide } from "@/types";

export const guides: Guide[] = [
  {
    slug: "best-time-to-visit-japan",
    title: "Best Time to Visit Japan: A Complete Seasonal Guide",
    description:
      "Japan is a year-round destination, but timing your visit to the season can make or break your experience. From cherry blossoms to autumn leaves, here's when to go and why.",
    heroImage:
      "https://images.unsplash.com/photo-1503899092288-5b3e9f5d6c7d?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Cherry blossoms in full bloom at Ueno Park, Tokyo",
    authorId: "auth-003",
    publishedAt: "2025-03-15",
    updatedAt: "2025-09-01",
    readingTime: 12,
    contentType: "research",
    destinationSlug: "tokyo",
    relatedGuideSlugs: ["things-to-do-in-tokyo", "ultimate-tokyo-travel-guide"],
    seo: {
      title: "Best Time to Visit Japan: A Complete Seasonal Guide",
      description:
        "Discover the best time to visit Japan with our complete seasonal guide. From cherry blossom season to autumn leaves, plan your perfect trip.",
      keywords: [
        "best time to visit japan",
        "japan seasons",
        "cherry blossoms",
        "japan weather",
        "travel guide",
      ],
    },
  },
  {
    slug: "things-to-do-in-tokyo",
    title: "25 Essential Things to Do in Tokyo",
    description:
      "Tokyo is a city of endless discovery. From the bustling streets of Shibuya to serene temples in Asakusa, here are 25 unmissable experiences in Japan's capital.",
    heroImage:
      "https://images.unsplash.com/photo-15409787d93425-92a4d2f8c6a2?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Shibuya Crossing at night with neon signs",
    authorId: "auth-003",
    publishedAt: "2024-08-22",
    updatedAt: "2025-07-15",
    readingTime: 14,
    contentType: "inspiration",
    destinationSlug: "tokyo",
    relatedGuideSlugs: ["best-time-to-visit-japan", "ultimate-tokyo-travel-guide"],
    seo: {
      title: "25 Essential Things to Do in Tokyo",
      description:
        "Discover 25 must-do experiences in Tokyo, from Shibuya Crossing to serene temples and world-class dining.",
      keywords: ["things to do in tokyo", "tokyo travel guide", "tokyo experiences"],
    },
  },
  {
    slug: "ultimate-tokyo-travel-guide",
    title: "The Ultimate Tokyo Travel Guide",
    description:
      "Your complete guide to Tokyo: where to stay, what to eat, how to get around, and the best neighborhoods for first-time visitors.",
    heroImage:
      "https://images.unsplash.com/photo-1503899092288-5b3e9f5d6c7d?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Tokyo skyline at sunset showing Tokyo Skytree",
    authorId: "auth-003",
    publishedAt: "2024-05-10",
    updatedAt: "2025-08-10",
    readingTime: 20,
    contentType: "research",
    destinationSlug: "tokyo",
    relatedGuideSlugs: ["best-time-to-visit-japan", "things-to-do-in-tokyo"],
    seo: {
      title: "The Ultimate Tokyo Travel Guide",
      description:
        "Complete Tokyo travel guide: neighborhoods, hotels, food, transport, and 7-day itinerary for first-time visitors.",
      keywords: ["tokyo travel guide", "tokyo itinerary", "where to stay in tokyo"],
    },
  },
  {
    slug: "paris-in-7-days",
    title: "Paris in 7 Days: The Complete Itinerary",
    description:
      "Seven days in Paris gives you time to explore beyond the Eiffel Tower. Our curated itinerary covers museums, markets, and hidden gems.",
    heroImage:
      "https://images.unsplash.com/photo-1502602689347-2c13b6a4c0c9?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Eiffel Tower at golden hour with Parisian rooftops",
    authorId: "auth-002",
    publishedAt: "2024-09-05",
    updatedAt: "2025-06-12",
    readingTime: 18,
    contentType: "inspiration",
    destinationSlug: "paris",
    relatedGuideSlugs: ["hidden-gems-of-kenya"],
    seo: {
      title: "Paris in 7 Days: Complete Itinerary",
      description: "7-day Paris itinerary covering museums, markets, and hidden gems beyond the Eiffel Tower.",
      keywords: ["paris itinerary", "7 days in paris", "paris travel guide"],
    },
  },
  {
    slug: "hidden-gems-of-kenya",
    title: "Beyond the Safari: Hidden Gems of Kenya",
    description:
      "Kenya is more than just safari. From the coral reefs of Watamu to the tea highlands of the Aberdares, discover lesser-known destinations.",
    heroImage:
      "https://images.unsplash.com/photo-1512595934324-5e3c6e6a4b4f?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Tea plantation in the Kenyan highlands",
    authorId: "auth-001",
    publishedAt: "2024-11-20",
    updatedAt: "2025-05-18",
    readingTime: 15,
    contentType: "inspiration",
    destinationSlug: "nairobi",
    relatedGuideSlugs: ["paris-in-7-days"],
    seo: {
      title: "Beyond the Safari: Hidden Gems of Kenya",
      description:
        "Discover Kenya's hidden gems beyond safari: coral reefs, tea highlands, and local communities.",
      keywords: ["kenya travel", "hidden gems kenya", "travel guide"],
    },
  },
  {
    slug: "safari-in-masai-mara",
    title: "The Safari-goer's Guide to Maasai Mara",
    description:
      "Everything you need to know about safari in the Maasai Mara: the Great Migration, best lodges, photography tips, and responsible tourism.",
    heroImage:
      "https://images.unsplash.com/photo-1512595934324-5e3c6e6a4b4f?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Lion pride resting on the Serengeti plains",
    authorId: "auth-001",
    publishedAt: "2024-06-30",
    updatedAt: "2025-03-14",
    readingTime: 22,
    contentType: "research",
    destinationSlug: "maasai-mara",
    relatedGuideSlugs: ["hidden-gems-of-kenya"],
    seo: {
      title: "The Safari-goer's Guide to Maasai Mara",
      description:
        "Complete Maasai Mara safari guide: Great Migration timing, best lodges, photography tips, and responsible tourism.",
      keywords: ["masai mara safari", "great migration", "safari guide"],
    },
  },
  {
    slug: "bangkok-street-food-guide",
    title: "The Ultimate Bangkok Street Food Guide",
    description:
      "Bangkok's street food scene is legendary. From pad thai to mango sticky rice, this guide covers 30+ must-try dishes and where to find them.",
    heroImage:
      "https://images.unsplash.com/photo-1520962894952-6a3caf084cd3?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Fresh ingredients at a Bangkok street market",
    authorId: "auth-004",
    publishedAt: "2024-07-12",
    updatedAt: "2025-04-20",
    readingTime: 16,
    contentType: "food",
    destinationSlug: "bangkok",
    relatedGuideSlugs: [],
    seo: {
      title: "The Ultimate Bangkok Street Food Guide",
      description:
        "Bangkok's legendary street food: 30+ must-try dishes and where to find them, from pad thai to mango sticky rice.",
      keywords: ["bangkok street food", "thai food", "bangkok food guide"],
    },
  },
  {
    slug: "italian-cuisine-road-trip",
    title: "A Road Trip Through Italy's Food Regions",
    description:
      "Follow the flavors of Italy: from Tuscany's olive oil to Sicily's seafood, this guide maps the country's culinary soul by region.",
    heroImage:
      "https://images.unsplash.com/photo-1538552147117-8c4780d1a6d4?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Fresh pasta being made in a traditional Italian kitchen",
    authorId: "auth-002",
    publishedAt: "2024-10-18",
    updatedAt: "2025-04-25",
    readingTime: 19,
    contentType: "food",
    destinationSlug: "rome",
    relatedGuideSlugs: [],
    seo: {
      title: "A Road Trip Through Italy's Food Regions",
      description:
        "Map Italy's culinary soul by region: Tuscan olive oil, Neapolitan pizza, Sicilian seafood, and more.",
      keywords: ["italian food", "italy road trip", "food travel"],
    },
  },
  {
    slug: "dubai-luxury-travel",
    title: "Dubai: A Guide to Luxury Travel in the Desert City",
    description:
      "Dubai sets the standard for luxury travel, from seven-star hotels to private desert safaris. Here's how to experience it in style.",
    heroImage:
      "https://images.unsplash.com/photo-1534438324344-e3a9e2c8b3af?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Luxury hotel interior with gold accents and chandeliers",
    authorId: "auth-002",
    publishedAt: "2024-09-14",
    updatedAt: "2025-06-08",
    readingTime: 17,
    contentType: "luxury-travel",
    destinationSlug: "dubai",
    relatedGuideSlugs: [],
    seo: {
      title: "Dubai: A Guide to Luxury Travel in the Desert City",
      description:
        "Experience Dubai's luxury: seven-star hotels, private desert safaris, and high-end dining.",
      keywords: ["dubai luxury travel", "luxury travel dubai", "luxury travel guide"],
    },
  },
  {
    slug: "new-york-city-on-a-budget",
    title: "New York City on a Budget: How to Save Money in the Big Apple",
    description:
      "NYC doesn't have to break the bank. From cheap eats to free museums, this guide shows how to enjoy New York on a budget.",
    heroImage:
      "https://images.unsplash.com/photo-1501394076032-21d1d0f8e44b?auto=format&fit=crop&w=2100&q=80",
    heroImageAlt: "Manhattan skyline from Brooklyn Bridge Park",
    authorId: "auth-004",
    publishedAt: "2024-03-28",
    updatedAt: "2025-07-30",
    readingTime: 14,
    contentType: "budget-travel",
    destinationSlug: "new-york",
    relatedGuideSlugs: [],
    seo: {
      title: "New York City on a Budget",
      description:
        "Enjoy NYC without breaking the bank: cheap eats, free museums, budget hotels, and money-saving tips.",
      keywords: ["nyc on a budget", "new york cheap", "budget travel nyc"],
    },
  },
];

export const getGuideBySlug = (slug: string): Guide | undefined =>
  guides.find((g) => g.slug === slug);

export const getGuidesByDestination = (destinationSlug: string): Guide[] =>
  guides.filter((g) => g.destinationSlug === destinationSlug);

export const getFeaturedGuides = (count: number = 4): Guide[] =>
  guides.slice(0, count);

export const getGuidesByType = (type: string, count?: number): Guide[] => {
  const filtered = guides.filter((g) => g.contentType === type);
  return count ? filtered.slice(0, count) : filtered;
};

export const getRelatedGuides = (guide: Guide): Guide[] => {
  return guide.relatedGuideSlugs
    .map((slug) => getGuideBySlug(slug))
    .filter(Boolean) as Guide[];
};
