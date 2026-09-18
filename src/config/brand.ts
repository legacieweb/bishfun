export interface BrandConfig {
  name: string;
  shortName: string;
  tagline: string;
  supportingLine: string;
  description: string;
  domain: string;
  keywords: string[];
  accentColor: {
    primary: string;
    secondary: string;
  };
  author: string;
  publisher: string;
  developer: string;
  developerUrl: string;
  logo: {
    text: string;
  };
  social: {
    twitter: string;
  };
}

export const brandConfig: BrandConfig = {
  name: "Bishfun",
  shortName: "Bishfun",
  tagline: "Discover the world. Plan your journey.",
  supportingLine:
    "Find places worth going, plan how to get there, and discover the experiences that make the journey unforgettable.",
  description:
    "Bishfun is a global travel discovery and planning platform. Explore destinations, find places to stay, discover unforgettable experiences and build your next trip.",
  domain: "bishfun.com",
  keywords: [
    "travel",
    "travel planning",
    "destination guide",
    "travel inspiration",
    "itinerary",
    "travel deals",
    "flights",
    "hotels",
    "experiences",
    "travel blog",
    "travel tips",
  ],
  accentColor: {
    primary: "#E85D4A",
    secondary: "#147D82",
  },
  author: "Bishfun",
  publisher: "Iyoni Corp",
  developer: "Iyoni Corp",
  developerUrl: "https://iyonicorp.com",
  logo: {
    text: "BISHFUN",
  },
  social: {
    twitter: "@bishfun",
  },
};
