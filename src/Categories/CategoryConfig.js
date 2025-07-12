import sports from "./assets/sports.json";
import fitness from "./assets/fitness.json";
import restaurant from "./assets/restaurant.json";
import lido from "./assets/lidoResources.json";
import spa from "./assets/spa.json";
import pet from "./assets/pet.json";
import water_sports from "./assets/waterSports.json";

export const available_categories = [
  {
    category_id: 1,
    id: "Water",
    name: "Water",
    image: water_sports,
  },
  {
    category_id: 2,
    id: "land",
    name: "Land",
    image: sports,
  },
  {
    category_id: 3,
    id: "sports",
    name: "Sports",
    image: sports,
  },
  {
    category_id: 4,
    id: "rentals",
    name: "Water Sports",
    image: water_sports,
  },
  {
    category_id: 5,
    id: "spa",
    name: "Spa & Wellness",
    image: spa,
  },
  {
    category_id: 6,
    id: "pool",
    name: "Lido & Pool",
    image: lido,
  },
  {
    category_id: 7,
    id: "Adventure",
    name: "Adventure",
    image: sports,
  },

  {
    category_id: 8,
    id: "pet",
    name: "Pet Services",
    image: pet,
  },
];
