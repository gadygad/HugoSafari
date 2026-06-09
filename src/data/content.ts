export interface Destination {
  id: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  coordinates: string;
  bestTime: string;
  category: "safari" | "heritage" | "coastal";
}

export interface Wildlife {
  id: string;
  name: string;
  scientificName: string;
  habitat: string;
  description: string;
  image: string;
  imageAlt: string;
  conservation: string;
}

export interface MarqueeItem {
  id: string;
  text: string;
  icon?: string;
}

export interface ZanzibarExperience {
  id: string;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  activity: string;
}

export const siteConfig = {
  name: "HugoSafari",
  tagline: "Discover the Soul of Tanzania",
  description:
    "Experience world-class safaris, ancient heritage, and pristine coastlines. HugoSafari brings Tanzania's wonders to travelers across the globe.",
  email: "hello@hugosafari.com",
  phone: "+255 754 000 000",
  location: "Arusha & Zanzibar, Tanzania",
};

export const heroStats = [
  { value: "947K", label: "km² of wilderness" },
  { value: "1.5M", label: "wildebeest migration" },
  { value: "120+", label: "tribes & cultures" },
  { value: "UNESCO", label: "World Heritage sites" },
];

export const marqueeHighlights: MarqueeItem[] = [
  { id: "1", text: "🦁 Big Five Safari Adventures" },
  { id: "2", text: "🌍 Olduvai Gorge — Cradle of Mankind" },
  { id: "3", text: "🦓 Great Migration — Serengeti" },
  { id: "4", text: "🌋 Ngorongoro Crater — Eden on Earth" },
  { id: "5", text: "🏝️ Zanzibar — Spice Island Paradise" },
  { id: "6", text: "🌅 Forodhani Night Market & Dhow Sunsets" },
  { id: "7", text: "🐘 25,000+ Elephants in Tanzania" },
  { id: "8", text: "⭐ 5-Star Luxury Lodges & Camps" },
  { id: "9", text: "🎭 Maasai Culture & Traditional Dance" },
  { id: "10", text: "🤿 Mnemba Atoll — Crystal Waters" },
];

export const destinations: Destination[] = [
  {
    id: "olduvai",
    name: "Olduvai Gorge",
    region: "Ngorongoro Conservation Area",
    tagline: "Where humanity began",
    description:
      "Walk in the footsteps of our earliest ancestors at one of the world's most important paleoanthropological sites. Olduvai Gorge has yielded fossils dating back 2 million years, earning it the title 'Cradle of Mankind'.",
    highlights: [
      "2-million-year-old hominid fossils",
      "Olduvai Museum & excavation sites",
      "Laetoli footprint trail (3.6 Ma)",
      "Guided archaeological tours",
    ],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    imageAlt: "Dramatic gorge landscape at Olduvai, Tanzania",
    coordinates: "2°59′S 35°21′E",
    bestTime: "June – October",
    category: "heritage",
  },
  {
    id: "ngorongoro",
    name: "Ngorongoro Crater",
    region: "Northern Circuit",
    tagline: "Africa's Garden of Eden",
    description:
      "Descend into the world's largest intact volcanic caldera — a natural amphitheater teeming with wildlife. The 260 km² crater floor hosts over 25,000 large animals including the densest population of lions in Africa.",
    highlights: [
      "UNESCO World Heritage Site",
      "Black rhino sanctuary",
      "Flamingo-filled Lake Magadi",
      "Maasai coexistence zone",
    ],
    image:
      "https://images.unsplash.com/photo-1516426122076-c23e76319801?w=1200&q=80",
    imageAlt: "Ngorongoro Crater panoramic view with wildlife",
    coordinates: "3°10′S 35°35′E",
    bestTime: "Year-round (dry: Jun–Oct)",
    category: "safari",
  },
  {
    id: "serengeti",
    name: "Serengeti National Park",
    region: "Mara & Simiyu",
    tagline: "Endless plains, endless wonder",
    description:
      "Witness the greatest wildlife spectacle on Earth — the Great Migration of 1.5 million wildebeest and 200,000 zebras. Serengeti's 14,750 km² of savanna is home to unparalleled predator-prey drama.",
    highlights: [
      "Great Migration river crossings",
      "Big Five game viewing",
      "Hot air balloon safaris",
      "Kopjes & acacia woodlands",
    ],
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d040615?w=1200&q=80",
    imageAlt: "Serengeti plains with acacia trees at golden hour",
    coordinates: "2°20′S 34°34′E",
    bestTime: "Jan–Feb (calving), Jul–Oct (crossings)",
    category: "safari",
  },
  {
    id: "zanzibar",
    name: "Zanzibar Archipelago",
    region: "Indian Ocean",
    tagline: "Spice, stone & sapphire seas",
    description:
      "From the labyrinthine alleys of Stone Town to powder-white beaches, Zanzibar blends Swahili, Arab, and African heritage with tropical luxury. Dive into history, spice farms, and world-class snorkeling.",
    highlights: [
      "Stone Town UNESCO site",
      "Spice plantation tours",
      "Mnemba & Pemba diving",
      "Jozani Forest red colobus",
    ],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    imageAlt: "Turquoise waters and dhow boats off Zanzibar coast",
    coordinates: "6°10′S 39°12′E",
    bestTime: "June – October",
    category: "coastal",
  },
];

export const zanzibarExperiences: ZanzibarExperience[] = [
  {
    id: "forodhani",
    title: "Forodhani Gardens",
    location: "Stone Town, Zanzibar",
    description:
      "As the sun sets over the Indian Ocean, Forodhani Gardens transforms into Zanzibar's most vibrant night market. Sizzling Zanzibari pizzas, fresh seafood skewers, sugar cane juice, and the famous urojo soup draw locals and travelers alike.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    imageAlt: "Forodhani night market with food stalls and ocean backdrop",
    activity: "Night market & street food",
  },
  {
    id: "jumping",
    title: "Dhow Jump & Ocean Leap",
    location: "Nungwi & Kendwa Beaches",
    description:
      "Feel the adrenaline as local fishermen and adventurous travelers leap from traditional dhow boats into crystal-clear waters. This iconic Zanzibar experience combines Swahili maritime culture with pure island joy.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    imageAlt: "People jumping from boats into turquoise Zanzibar waters",
    activity: "Boat jumping & swimming",
  },
  {
    id: "sunset-dhow",
    title: "Sunset Dhow Cruise",
    location: "Stone Town Harbor",
    description:
      "Glide across the harbor on a hand-crafted dhow as the sky blazes orange and pink. Watch fishermen cast nets, hear the call to prayer echo from minarets, and sip fresh coconut water as day turns to night.",
    image:
      "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=800&q=80",
    imageAlt: "Traditional dhow sailing at sunset in Zanzibar",
    activity: "Sunset sailing",
  },
];

export const wildlife: Wildlife[] = [
  {
    id: "lion",
    name: "African Lion",
    scientificName: "Panthera leo",
    habitat: "Serengeti, Ngorongoro, Ruaha",
    description:
      "The king of the savanna rules Tanzania's plains in prides of up to 30. Serengeti alone hosts 3,000 lions — among the largest populations in Africa.",
    image:
      "https://images.unsplash.com/photo-1546182990-d095f2be28d7?w=800&q=80",
    imageAlt: "Majestic African lion on the Serengeti plains",
    conservation: "Vulnerable — protected in all national parks",
  },
  {
    id: "zebra",
    name: "Plains Zebra",
    scientificName: "Equus quagga",
    habitat: "Serengeti, Tarangire, Ngorongoro",
    description:
      "Over 200,000 zebras join the Great Migration, their striped herds creating one of nature's most iconic spectacles across the endless Serengeti horizon.",
    image:
      "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&q=80",
    imageAlt: "Zebra herd grazing on the African savanna",
    conservation: "Near Threatened — stable in Tanzania",
  },
  {
    id: "hyena",
    name: "Spotted Hyena",
    scientificName: "Crocuta crocuta",
    habitat: "Serengeti, Ngorongoro, Selous",
    description:
      "Misunderstood masters of the night — spotted hyenas are skilled hunters with complex social structures. Their haunting whoops echo across the crater at dusk.",
    image:
      "https://images.unsplash.com/photo-1564349683136-77e08db1bdb3?w=800&q=80",
    imageAlt: "Spotted hyena in the African wilderness",
    conservation: "Least Concern — thriving in protected areas",
  },
  {
    id: "elephant",
    name: "African Elephant",
    scientificName: "Loxodonta africana",
    habitat: "Tarangire, Serengeti, Ruaha",
    description:
      "Tanzania shelters Africa's largest elephant population. Tarangire alone hosts 3,000 elephants, drawn to ancient baobab forests and the life-giving Tarangire River.",
    image:
      "https://images.unsplash.com/photo-1557050543-4d6f4e0710de?w=800&q=80",
    imageAlt: "African elephant family walking through savanna",
    conservation: "Endangered — strict anti-poaching measures",
  },
  {
    id: "cheetah",
    name: "Cheetah",
    scientificName: "Acinonyx jubatus",
    habitat: "Serengeti, Ruaha",
    description:
      "The Serengeti is one of the best places on Earth to witness a cheetah's 110 km/h sprint. These elegant cats hunt by day on the open plains.",
    image:
      "https://images.unsplash.com/photo-1456929177925-aa0868a8f108?w=800&q=80",
    imageAlt: "Cheetah scanning the Serengeti horizon",
    conservation: "Vulnerable — Serengeti Cheetah Project active",
  },
  {
    id: "flamingo",
    name: "Lesser Flamingo",
    scientificName: "Phoeniconaias minor",
    habitat: "Lake Natron, Lake Manyara",
    description:
      "Millions of pink flamingos paint Tanzania's soda lakes in breathtaking color. Lake Natron is the world's most important breeding site for lesser flamingos.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    imageAlt: "Flock of flamingos at a Tanzanian lake",
    conservation: "Near Threatened — Lake Natron protected",
  },
];

export const testimonials = [
  {
    id: "1",
    quote:
      "HugoSafari crafted the journey of a lifetime. Watching the migration cross the Mara River left us speechless.",
    author: "Sarah & James",
    country: "United Kingdom",
  },
  {
    id: "2",
    quote:
      "From Ngorongoro's crater floor to Forodhani's night market — every moment was pure magic.",
    author: "Marco Rossi",
    country: "Italy",
  },
  {
    id: "3",
    quote:
      "The guides knew every animal, every story. Olduvai Gorge changed how I see human history.",
    author: "Aisha Patel",
    country: "India",
  },
  {
    id: "4",
    quote:
      "Jumping from the dhow in Zanzibar at sunset — I'll never forget that feeling of freedom.",
    author: "Emma Larsson",
    country: "Sweden",
  },
];

export const navLinks = [
  { href: "#destinations", label: "Destinations" },
  { href: "#wildlife", label: "Wildlife" },
  { href: "#zanzibar", label: "Zanzibar" },
  { href: "#experiences", label: "Experiences" },
  { href: "#contact", label: "Plan Your Safari" },
];
