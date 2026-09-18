import type { Country } from "@/types";

export const countries: Country[] = [
  {
    slug: "kenya",
    name: "Kenya",
    regionSlug: "africa",
    description:
      "Kenya is home to the Great Wildebeest Migration, pristine beaches, and diverse wildlife across iconic landscapes from the Maasai Mara to Mount Kenya.",
    currency: "KES",
    currencySymbol: "KSh",
    languages: ["English", "Swahili"],
    capital: "Nairobi",
    heroImage:
      "https://cdn.pixabay.com/photo/2020/11/10/18/21/mara-river-5730663_960_720.jpg",
    heroImageAlt: "Wildebeest crossing the Mara River in Kenya",
    bestTimeToVisit: "June to October (dry season) and December to March (short dry season)",
  },
  {
    slug: "tanzania",
    name: "Tanzania",
    regionSlug: "africa",
    description:
      "Tanzania offers the majesty of Mount Kilimanjaro, the Serengeti plains, and the spice island of Zanzibar.",
    currency: "TZS",
    currencySymbol: "TSh",
    languages: ["English", "Swahili"],
    capital: "Dodoma",
    heroImage:
      "https://cdn.pixabay.com/photo/2018/10/28/16/11/volcano-3779159_1280.jpg",
    heroImageAlt: "Mount Kilimanjaro rising above the African plain",
    bestTimeToVisit: "December to March and June to October",
  },
  {
    slug: "morocco",
    name: "Morocco",
    regionSlug: "africa",
    description:
      "Morocco enchants with its medinas, desert dunes, and mountain kasbahs, blending Arabic, Berber, and French influences.",
    currency: "MAD",
    currencySymbol: "د.م.",
    languages: ["Arabic", "Berber", "French"],
    capital: "Rabat",
    heroImage:
      "https://morocco-quest.com/storage/images/activities/01K0FCTZWXWP5MBXEA7V7A6F1X.webp",
    heroImageAlt: "Aerial view of Fez medina with blue alleys",
    bestTimeToVisit: "March to May and September to November",
  },
  {
    slug: "south-africa",
    name: "South Africa",
    regionSlug: "africa",
    description:
      "South Africa combines cosmopolitan cities, dramatic coastlines, and world-class wine regions with iconic safari experiences.",
    currency: "ZAR",
    currencySymbol: "R",
    languages: ["English", "Afrikaans", "isiZulu"],
    capital: "Pretoria (administrative), Cape Town (legislative)",
    heroImage:
      "https://cdn.pixabay.com/photo/2020/05/23/15/33/africa-5210116_1280.jpg",
    heroImageAlt: "Cape Town with Table Mountain in the background",
    bestTimeToVisit: "March to May and September to November",
  },
  {
    slug: "france",
    name: "France",
    regionSlug: "europe",
    description:
      "France is synonymous with art de vivre, from Parisian boulevards to Provence lavender fields and the French Riviera.",
    currency: "EUR",
    currencySymbol: "€",
    languages: ["French"],
    capital: "Paris",
    heroImage:
      "https://images.unsplash.com/photo-1725528141836-c3238fd35d04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Eiffel Tower at sunset with reflection in Seine",
    bestTimeToVisit: "April to June and September to October",
  },
  {
    slug: "italy",
    name: "Italy",
    regionSlug: "europe",
    description:
      "Italy overflows with Renaissance art, medieval hill towns, coastal villages, and world-class cuisine.",
    currency: "EUR",
    currencySymbol: "€",
    languages: ["Italian"],
    capital: "Rome",
    heroImage:
      "https://images.unsplash.com/photo-1575238847174-ee5fc69cf75f?q=80&w=1678&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Colosseum in Rome with blue sky",
    bestTimeToVisit: "April to June and September to October",
  },
  {
    slug: "spain",
    name: "Spain",
    regionSlug: "europe",
    description:
      "Spain pulses with passion — flamenco, tapas, Gaudí architecture, and sun-drenched coastlines.",
    currency: "EUR",
    currencySymbol: "€",
    languages: ["Spanish", "Catalan"],
    capital: "Madrid",
    heroImage:
      "https://media.architecturaldigest.com/photos/66df5877d600aa994603fbd5/3:2/w_3000,h_2000,c_limit/GettyImages-1467072114.jpg",
    heroImageAlt: "Sagrada Familia basilica in Barcelona",
    bestTimeToVisit: "May to June and September to October",
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    regionSlug: "europe",
    description:
      "The UK blends centuries of history with contemporary culture — from Edinburgh Castle to London's museums.",
    currency: "GBP",
    currencySymbol: "£",
    languages: ["English"],
    capital: "London",
    heroImage:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "London skyline with Big Ben and Parliament",
    bestTimeToVisit: "May to September",
  },
  {
    slug: "japan",
    name: "Japan",
    regionSlug: "asia",
    description:
      "Japan offers a seamless blend of ultramodern cities, ancient temples, and pristine natural landscapes.",
    currency: "JPY",
    currencySymbol: "¥",
    languages: ["Japanese"],
    capital: "Tokyo",
    heroImage:
      "https://images.unsplash.com/photo-1724837962088-7deca2f3f872?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Tokyo skyline with Mount Fuji in the distance",
    bestTimeToVisit: "March to May (cherry blossoms) and September to November (autumn)",
  },
  {
    slug: "thailand",
    name: "Thailand",
    regionSlug: "asia",
    description:
      "Thailand captivates with golden temples, turquoise waters, and world-renowned street food culture.",
    currency: "THB",
    currencySymbol: "฿",
    languages: ["Thai", "English"],
    capital: "Bangkok",
    heroImage:
      "https://images.pexels.com/photos/35126792/pexels-photo-35126792.jpeg?_gl=1*1wzkt44*_ga*MzIyMDYyODUxLjE3ODk2NzM1MjI.*_ga_8JE65Q40S6*czE3ODk3MTYwMTckbzMkZzEkdDE3ODk3MTYwNDMkajM0JGwwJGgw",
    heroImageAlt: "Maya Bay in Krabi with limestone cliffs",
    bestTimeToVisit: "November to February (cool dry season)",
  },
  {
    slug: "indonesia",
    name: "Indonesia",
    regionSlug: "asia",
    description:
      "Indonesia is an archipelago of over 17,000 islands, from Bali's beaches to Sumatra's jungles.",
    currency: "IDR",
    currencySymbol: "Rp",
    languages: ["Indonesian"],
    capital: "Jakarta",
    heroImage:
      "https://cdn.pixabay.com/photo/2019/08/06/12/15/beach-4388225_1280.jpg",
    heroImageAlt: "Tropical beach with palm trees in Bali",
    bestTimeToVisit: "April to October (dry season)",
  },
  {
    slug: "singapore",
    name: "Singapore",
    regionSlug: "asia",
    description:
      "Singapore is a gleaming city-state of gardens, hawker centers, and futuristic architecture.",
    currency: "SGD",
    currencySymbol: "$",
    languages: ["English", "Mandarin", "Malay", "Tamil"],
    capital: "Singapore",
    heroImage:
      "https://images.pexels.com/photos/9786424/pexels-photo-9786424.jpeg?_gl=1*2gdbmo*_ga*MzIyMDYyODUxLjE3ODk2NzM1MjI.*_ga_8JE65Q40S6*czE3ODk3MTYwMTckbzMkZzEkdDE3ODk3MTc0NDkkajU5JGwwJGgw",
    heroImageAlt: "Marina Bay Sands at night with light show",
    bestTimeToVisit: "February to April and August to October",
  },
  {
    slug: "usa",
    name: "United States",
    regionSlug: "north-america",
    description:
      "From New York's energy to the Grand Canyon's majesty, the USA is a continent of landscapes and cultures within one nation.",
    currency: "USD",
    currencySymbol: "$",
    languages: ["English"],
    capital: "Washington, D.C.",
    heroImage:
      "https://images.unsplash.com/photo-1718046263737-553dfecb126e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Route 66 highway stretching into the desert",
    bestTimeToVisit: "September to November and March to May",
  },
  {
    slug: "canada",
    name: "Canada",
    regionSlug: "north-america",
    description:
      "Canada offers vast wilderness, vibrant cities, and iconic Rocky Mountain scenery.",
    currency: "CAD",
    currencySymbol: "C$",
    languages: ["English", "French"],
    capital: "Ottawa",
    heroImage:
      "https://images.unsplash.com/photo-1594741873407-c292ca075f8b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Lake Louise in the Canadian Rockies",
    bestTimeToVisit: "June to September (summer) and December to February (ski season)",
  },
  {
    slug: "mexico",
    name: "Mexico",
    regionSlug: "north-america",
    description:
      "Mexico offers ancient Maya ruins, vibrant Día de los Muertos celebrations, and stunning Pacific and Caribbean coasts.",
    currency: "MXN",
    currencySymbol: "$",
    languages: ["Spanish"],
    capital: "Mexico City",
    heroImage:
      "https://images.unsplash.com/photo-1623674587543-9c7564de99d1?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Chichen Itza pyramid at sunset",
    bestTimeToVisit: "December to April",
  },
  {
    slug: "brazil",
    name: "Brazil",
    regionSlug: "south-america",
    description:
      "Brazil is home to the Amazon rainforest, the Amazon River, and vibrant cities like Rio de Janeiro.",
    currency: "BRL",
    currencySymbol: "R$",
    languages: ["Portuguese"],
    capital: "Brasília",
    heroImage:
      "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Christ the Redeemer statue in Rio de Janeiro",
    bestTimeToVisit: "May to September (dry season)",
  },
  {
    slug: "argentina",
    name: "Argentina",
    regionSlug: "south-america",
    description:
      "Argentina is famous for the tango, the Andes, Patagonia's glaciers, and world-class Malbec wines.",
    currency: "ARS",
    currencySymbol: "$",
    languages: ["Spanish"],
    capital: "Buenos Aires",
    heroImage:
      "https://images.unsplash.com/photo-1552751753-0fc84ae5b6c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Perito Moreno Glacier in Patagonia",
    bestTimeToVisit: "March to May and September to November",
  },
  {
    slug: "peru",
    name: "Peru",
    regionSlug: "south-america",
    description:
      "Peru is the home of the Inca Empire, Machu Picchu, and the Sacred Valley.",
    currency: "PEN",
    currencySymbol: "S/",
    languages: ["Spanish", "Quechua"],
    capital: "Lima",
    heroImage:
      "https://images.unsplash.com/photo-1594902294032-b00d798485e8?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Machu Picchu ancient Inca citadel in the clouds",
    bestTimeToVisit: "May to September (dry season)",
  },
  {
    slug: "uae",
    name: "United Arab Emirates",
    regionSlug: "middle-east",
    description:
      "The UAE blends ultra-modern architecture with desert adventures and luxury shopping.",
    currency: "AED",
    currencySymbol: "د.إ",
    languages: ["Arabic", "English"],
    capital: "Abu Dhabi",
    heroImage:
      "https://images.unsplash.com/photo-1651467606797-e1c660cf3fda?q=80&w=1193&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Dubai skyline with Burj Khalifa",
    bestTimeToVisit: "October to April (cooler months)",
  },
  {
    slug: "jordan",
    name: "Jordan",
    regionSlug: "middle-east",
    description:
      "Jordan is home to Petra, the ancient rose-red city carved into rock, plus the Dead Sea and Wadi Rum.",
    currency: "JOD",
    currencySymbol: "JD",
    languages: ["Arabic", "English"],
    capital: "Amman",
    heroImage:
      "https://images.pexels.com/photos/23124659/pexels-photo-23124659.jpeg?_gl=1*18686xz*_ga*MzIyMDYyODUxLjE3ODk2NzM1MjI.*_ga_8JE65Q40S6*czE3ODk3MTYwMTckbzMkZzEkdDE3ODk3MTgyODckajM5JGwwJGgw",
    heroImageAlt: "Petra Treasury carved into rose-red rock",
    bestTimeToVisit: "March to May and September to November",
  },
  {
    slug: "egypt",
    name: "Egypt",
    regionSlug: "middle-east",
    description:
      "Egypt is the land of the pyramids, the Nile, and ancient temples that have endured millennia.",
    currency: "EGP",
    currencySymbol: "£",
    languages: ["Arabic", "English"],
    capital: "Cairo",
    heroImage:
      "https://images.pexels.com/photos/38290619/pexels-photo-38290619.jpeg?_gl=1*ko0n53*_ga*MzIyMDYyODUxLjE3ODk2NzM1MjI.*_ga_8JE65Q40S6*czE3ODk3MTYwMTckbzMkZzEkdDE3ODk3MTg2MTckajM3JGwwJGgw",
    heroImageAlt: "Great Pyramid of Giza with Sphinx at sunset",
    bestTimeToVisit: "October to April",
  },
  {
    slug: "australia",
    name: "Australia",
    regionSlug: "oceania",
    description:
      "Australia combines vibrant cities with iconic natural wonders like the Great Barrier Reef and Uluru.",
    currency: "AUD",
    currencySymbol: "A$",
    languages: ["English"],
    capital: "Canberra",
    heroImage:
      "https://images.pexels.com/photos/11635664/pexels-photo-11635664.jpeg?_gl=1*y0wuzu*_ga*MzIyMDYyODUxLjE3ODk2NzM1MjI.*_ga_8JE65Q40S6*czE3ODk3MTYwMTckbzMkZzEkdDE3ODk3MTg3ODAkajEyJGwwJGgw",
    heroImageAlt: "Great Ocean Road with limestone stacks",
    bestTimeToVisit: "September to November and March to May",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    regionSlug: "oceania",
    description:
      "New Zealand is a land of dramatic fjords, snow-capped peaks, and pristine wilderness.",
    currency: "NZD",
    currencySymbol: "NZ$",
    languages: ["English", "Maori"],
    capital: "Wellington",
    heroImage:
      "https://images.unsplash.com/photo-1703719489967-1d93bdc51857?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heroImageAlt: "Milford Sound fjord in Fiordland National Park",
    bestTimeToVisit: "December to February (summer) and March to May (autumn)",
  },
];

export const getCountryBySlug = (slug: string): Country | undefined =>
  countries.find((c) => c.slug === slug);

export const getCountriesByRegion = (regionSlug: string): Country[] =>
  countries.filter((c) => c.regionSlug === regionSlug);
