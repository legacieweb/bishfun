import type { Hotel } from "@/types";

export const hotels: Hotel[] = [
  {
    slug: "shinjuku-granbell-hotel",
    name: "Shinjuku Granbell Hotel",
    description: "A modern design hotel in the heart of Shinjuku, offering sleek rooms and a rooftop bar with city views.",
    destinationSlug: "tokyo",
    address: "1-3-14 Nishi-Shinjuku, Shinjuku City, Tokyo 163-0115, Japan",
    price: 185,
    originalPrice: 250,
    currency: "USD",
    currencySymbol: "$",
    rating: 4.2,
    reviewCount: 856,
    amenities: ["Free WiFi", "Spa", "Restaurant", "Bar", "24h Concierge"],
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfe29?auto=format&fit=crop&w=2100&q=80",
    ],
    imageAlt: "Modern hotel lobby with sleek interior design",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Shinjuku Granbell Hotel, Tokyo",
      description: "Modern design hotel in the heart of Shinjuku with rooftop bar and city views.",
      keywords: ["shinjuku hotel tokyo", "tokyo hotels", "luxury hotel tokyo"],
    },
  },
  {
    slug: "le-meurice",
    name: "Le Meurice",
    description:
      "A legendary Parisian palace hotel blending 18th-century opulence with contemporary art and Michelin-starred dining.",
    destinationSlug: "paris",
    address: "228 Rue de Rivoli, 75001 Paris, France",
    price: 650,
    currency: "EUR",
    currencySymbol: "€",
    rating: 4.8,
    reviewCount: 428,
    amenities: ["Spa & Wellness", "Michelin Restaurant", "Bar", "Concierge", "Gym"],
    images: [
      "https://images.unsplash.com/photo-1502602689347-2c13b6a4c0c9?auto=format&fit=crop&w=2100&q=80",
    ],
    imageAlt: "Opulent hotel lobby with crystal chandeliers and gilded details",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Le Meurice, Paris",
      description: "Legendary Parisian palace hotel with Michelin-starred dining and luxury spa.",
      keywords: ["le meurice paris", "luxury hotel paris", "5 star paris"],
    },
  },
  {
    slug: "fairmont-royal-pavilion",
    name: "Fairmont Royal Pavilion",
    description:
      "A beachfront luxury resort on Barbados featuring colonial-style architecture and expansive ocean views.",
    destinationSlug: "caribbean",
    address: "St. James, Barbados",
    price: 420,
    originalPrice: 550,
    currency: "USD",
    currencySymbol: "$",
    rating: 4.5,
    reviewCount: 1203,
    amenities: ["Beachfront", "Spa", "Golf", "Pool", "Restaurant", "Kids Club"],
    images: [
      "https://images.unsplash.com/photo-1544363564-4fd416f3b119?auto=format&fit=crop&w=2100&q=80",
    ],
    imageAlt: "Luxury beachfront resort with palm trees and turquoise water",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Fairmont Royal Pavilion, Barbados",
      description: "Beachfront luxury resort on Barbados with colonial architecture and ocean views.",
      keywords: ["barbados resort", "luxury beach resort", "fairmont royal pavilion"],
    },
  },
  {
    slug: "burj-al-arab",
    name: "Burj Al Arab Jumeirah",
    description:
      "The iconic sail-shaped superhotel on a private island, offering unparalleled luxury and service in Dubai.",
    destinationSlug: "dubai",
    address: "Dubai, United Arab Emirates",
    price: 850,
    currency: "AED",
    currencySymbol: "د.إ",
    rating: 4.9,
    reviewCount: 2100,
    amenities: ["Butler Service", "Spa", "Multiple Restaurants", "Helicopter Transfer", "Private Beach"],
    images: [
      "https://images.unsplash.com/photo-1534438324344-e3a9e2c8b3af?auto=format&fit=crop&w=2100&q=80",
    ],
    imageAlt: "Iconic sail-shaped Burj Al Arab hotel at sunset",
    isDemo: true,
    bookingUrl: "https://travelpayouts.com",
    seo: {
      title: "Burj Al Arab Jumeirah, Dubai",
      description: "The iconic sail-shaped superhotel on a private island offering unparalleled luxury.",
      keywords: ["burj al arab", "luxury hotel dubai", "7 star hotel"],
    },
  },
];

export const getHotelBySlug = (slug: string): Hotel | undefined =>
  hotels.find((h) => h.slug === slug);

export const getHotelsByDestination = (destinationSlug: string): Hotel[] =>
  hotels.filter(
    (h) =>
      h.destinationSlug === destinationSlug ||
      destinationSlug === "caribbean" && h.destinationSlug === "caribbean",
  );

export const getFeaturedHotels = (count: number = 4): Hotel[] =>
  hotels.slice(0, count);

export const featuredHotels: Hotel[] = getFeaturedHotels(4);
