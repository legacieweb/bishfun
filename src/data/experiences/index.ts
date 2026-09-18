import type { Experience, ExperienceCategory } from "@/types";

export const experienceCategories: { slug: ExperienceCategory; name: string }[] = [
  { slug: "adventure", name: "Adventure" },
  { slug: "beach", name: "Beach" },
  { slug: "culture", name: "Culture" },
  { slug: "food", name: "Food" },
  { slug: "nature", name: "Nature" },
  { slug: "wildlife", name: "Wildlife" },
  { slug: "city", name: "City" },
  { slug: "family", name: "Family" },
  { slug: "luxury", name: "Luxury" },
  { slug: "nightlife", name: "Nightlife" },
  { slug: "wellness", name: "Wellness" },
  { slug: "sports", name: "Sports" },
];

export const experiences: Experience[] = [
  {
    slug: "tokyo-food-tour",
    title: "Tokyo Street Food Adventure",
    description: "A guided tour through Tokyo's best-hidden food spots, from ramen shops to izakayas.",
    category: "food",
    destinationSlug: "tokyo",
    duration: "4 hours",
    price: 85,
    pricePer: "person",
    currency: "USD",
    currencySymbol: "$",
    difficulty: "easy",
    travelStyle: ["food", "city"],
    image:
      "https://images.unsplash.com/photo-1520962894952-6a3caf084cd3?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Assorted Japanese street food dishes",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Tokyo Street Food Adventure",
      description: "Guided tour through Tokyo's best hidden food spots — ramen, izakayas, and more.",
      keywords: ["tokyo food tour", "tokyo street food", "food experience tokyo"],
    },
  },
  {
    slug: "maasai-mara-hot-air-balloon",
    title: "Hot Air Balloon Safari over Maasai Mara",
    description:
      "Float silently over the Serengeti at sunrise, watching wildlife awaken from above in a breathtaking spectacle.",
    category: "wildlife",
    destinationSlug: "maasai-mara",
    duration: "1 hour",
    price: 495,
    pricePer: "person",
    currency: "USD",
    currencySymbol: "$",
    difficulty: "moderate",
    travelStyle: ["safari", "adventure"],
    image:
      "https://images.unsplash.com/photo-1512595934324-5e3c6e6a4b4f?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Hot air balloon floating over the African savanna at sunrise",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Hot Air Balloon Safari over Maasai Mara",
      description: "Float over the Serengeti at sunrise, watching wildlife awaken from above.",
      keywords: ["balloon safari", "maasai mara", "hot air balloon africa"],
    },
  },
  {
    slug: "paris-cooking-class",
    title: "French Cooking Class in Paris",
    description:
      "Learn to make classic French pastries and dishes from a local chef in a private kitchen.",
    category: "food",
    destinationSlug: "paris",
    duration: "3.5 hours",
    price: 120,
    pricePer: "person",
    currency: "EUR",
    currencySymbol: "€",
    difficulty: "easy",
    travelStyle: ["culture", "food"],
    image:
      "https://images.unsplash.com/photo-1538552147117-8c4780d1a6d4?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Fresh ingredients and cooking equipment in a Parisian kitchen",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "French Cooking Class in Paris",
      description: "Learn classic French pastries and dishes from a local chef in a private kitchen.",
      keywords: ["paris cooking class", "french cooking", "cooking class paris"],
    },
  },
  {
    slug: "dubai-desert-safari",
    title: "Luxury Desert Safari in Dubai",
    description: "An evening adventure through the dunes in a luxury 4x4, complete with dinner and entertainment.",
    category: "adventure",
    destinationSlug: "dubai",
    duration: "6 hours",
    price: 125,
    pricePer: "person",
    currency: "USD",
    currencySymbol: "$",
    difficulty: "easy",
    travelStyle: ["adventure", "luxury"],
    image:
      "https://images.unsplash.com/photo-1534438324344-e3a9e2c8b3af?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "4x4 vehicles driving across golden sand dunes at sunset",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Luxury Desert Safari in Dubai",
      description: "Evening adventure through Dubai's dunes in a luxury 4x4, with dinner and entertainment.",
      keywords: ["dubai desert safari", "desert tour dubai", "luxury safari"],
    },
  },
  {
    slug: "sydney-harbour-sea-kayak",
    title: "Sydney Harbour Sea Kayak Tour",
    description: "Paddle alongside the Sydney Opera House and Harbour Bridge on a guided sea kayak tour.",
    category: "adventure",
    destinationSlug: "sydney",
    duration: "3 hours",
    price: 95,
    pricePer: "person",
    currency: "AUD",
    currencySymbol: "A$",
    difficulty: "moderate",
    travelStyle: ["adventure", "nature"],
    image:
      "https://images.unsplash.com/photo-1506506340451-6dc74a6f6ea4?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Sea kayakers paddling past the Sydney Opera House",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Sydney Harbour Sea Kayak Tour",
      description: "Paddle alongside the Sydney Opera House and Harbour Bridge on a guided sea kayak tour.",
      keywords: ["sydney kayak", "sydney harbour tour", "sea kayak sydney"],
    },
  },
  {
    slug: "bangkok-meditation-workshop",
    title: "Morning Meditation & Mindfulness Workshop in Bangkok",
    description: "Start your day with guided meditation and mindfulness techniques taught by Buddhist monks.",
    category: "wellness",
    destinationSlug: "bangkok",
    duration: "2 hours",
    price: 45,
    pricePer: "person",
    currency: "USD",
    currencySymbol: "$",
    difficulty: "easy",
    travelStyle: ["wellness", "culture"],
    image:
      "https://images.unsplash.com/photo-15409787d93425-92a4d2f8c6a2?auto=format&fit=crop&w=2100&q=80",
    imageAlt: "Woman meditating peacefully in a temple setting",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Morning Meditation Workshop in Bangkok",
      description: "Guided meditation and mindfulness with Buddhist monks in Bangkok.",
      keywords: ["bangkok meditation", "mindfulness workshop", "wellness bangkok"],
    },
  },
];

export const getExperienceBySlug = (slug: string): Experience | undefined =>
  experiences.find((e) => e.slug === slug);

export const getExperiencesByDestination = (destinationSlug: string): Experience[] =>
  experiences.filter((e) => e.destinationSlug === destinationSlug);

export const getExperiencesByCategory = (category: ExperienceCategory): Experience[] =>
  experiences.filter((e) => e.category === category);

export const getFeaturedExperiences = (count: number = 6): Experience[] =>
  experiences.slice(0, count);

