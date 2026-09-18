import type { Author } from "@/types";

export const authors: Author[] = [
  {
    id: "auth-001",
    name: "Amara Okello",
    bio: "Award-winning travel writer specializing in African destinations and cultural immersion. Has traveled to over 60 countries.",
    image:
      "https://images.unsplash.com/photo-1573496317002-2c8c8d6c7c62?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Amara Okello, travel writer",
  },
  {
    id: "auth-002",
    name: "Luca Moretti",
    bio: "European travel expert with a focus on culinary tourism and luxury accommodations. Based between Rome and Paris.",
    image:
      "https://images.unsplash.com/photo-1535992318031-ce55a1f1a089?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Luca Moretti, European travel expert",
  },
  {
    id: "auth-003",
    name: "Yuki Tanaka",
    bio: "Specializes in Asian travel with a focus on sustainable tourism and traditional culture. Author of 'Hidden Japan'.",
    image:
      "https://images.unsplash.com/photo-15409787d93425-92a4d2f8c6a2?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Yuki Tanaka, Asian travel expert",
  },
  {
    id: "auth-004",
    name: "Marcus Rivera",
    bio: "North American travel specialist focusing on road trips, outdoor adventure, and budget travel strategies.",
    image:
      "https://images.unsplash.com/photo-1501394076032-21d1d0f8e44b?auto=format&fit=crop&w=400&q=80",
    imageAlt: "Marcus Rivera, North American travel expert",
  },
];

export const getAuthorById = (id: string): Author | undefined =>
  authors.find((a) => a.id === id);
