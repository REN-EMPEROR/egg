export interface MarketLocation {
  id: string;
  name: string;
  type: "farmers-market" | "grocery" | "farmstand";
  city: string;
  address: string;
  schedule: string;
  season: string;
  productsCarried: string[];
  contactNote?: string;
  featured?: boolean;
}

export const LOCATIONS: MarketLocation[] = [
  {
    id: "eggeat-honor-stand",
    name: "eggeat Farm Gate Stand",
    type: "farmstand",
    city: "Millfield Valley",
    address: "4180 Old Pasture Road, Millfield Valley, State 14850",
    schedule: "Daily: Dawn to Dusk (7:00 AM – 7:30 PM)",
    season: "Open Year-Round (Weather permitting)",
    productsCarried: [
      "Heritage Large 12-Packs",
      "Heirloom Pastel & Olive Cartons",
      "Farm-Fresh Jams & Seasonal Honey",
    ],
    contactNote: "Self-serve honor cooler. Cash, personal check, or Venmo QR accepted on site.",
    featured: true,
  },
  {
    id: "downtown-farmers-market",
    name: "Historic Downtown Farmers Market",
    type: "farmers-market",
    city: "Riverdale",
    address: "Pioneer Plaza, 200 Market Street, Riverdale",
    schedule: "Every Saturday: 8:00 AM – 1:00 PM",
    season: "May 1st through November 20th",
    productsCarried: [
      "Pasture-Raised Heritage Large",
      "Certified Organic Free-Range",
      "Heirloom Pastel Cartons",
      "Soy-Free Dozens",
    ],
    contactNote: "Look for the green canvas canopy with our wooden rooster crest near the fountain.",
    featured: true,
  },
  {
    id: "county-midweek-market",
    name: "Valley Green Midweek Market",
    type: "farmers-market",
    city: "Valley Springs",
    address: "Community Park Pavilion, 450 Oak Grove Lane, Valley Springs",
    schedule: "Wednesdays: 3:30 PM – 7:00 PM",
    season: "June through September",
    productsCarried: [
      "Pasture-Raised Heritage Large",
      "Certified Organic Free-Range",
      "Discounted Cracked-Shell Baker's Bags",
    ],
    contactNote: "Arrive early; heritage cartons usually sell out by 5:30 PM.",
  },
  {
    id: "harvest-roots-coop",
    name: "Harvest Roots Community Co-op",
    type: "grocery",
    city: "Riverdale",
    address: "812 North Elm Avenue, Riverdale",
    schedule: "Open Monday – Saturday 8:00 AM – 8:00 PM, Sunday 9:00 AM – 6:00 PM",
    season: "Year-Round Partner Stockist",
    productsCarried: [
      "Pasture-Raised Heritage Large",
      "Certified Organic Free-Range",
      "Soy-Free Dozens",
    ],
    contactNote: "Found in Dairy Cooler Aisle 2 next to regional raw dairy and artisan butter.",
    featured: true,
  },
  {
    id: "green-pasture-natural-foods",
    name: "Green Pasture Natural Market",
    type: "grocery",
    city: "Oakridge",
    address: "1404 West Ridgeway Boulevard, Oakridge",
    schedule: "Daily: 9:00 AM – 7:00 PM",
    season: "Year-Round Partner Stockist",
    productsCarried: [
      "Pasture-Raised Heritage Large",
      "Certified Organic Free-Range",
      "Specialty Heirloom Pastel Cartons",
    ],
    contactNote: "Delivered fresh every Tuesday and Friday morning directly from our refrigerated farm van.",
  },
  {
    id: "cedar-creek-provisions",
    name: "Cedar Creek Country Pantry & Delicatessen",
    type: "grocery",
    city: "Pine Ridge",
    address: "55 Main Street, Pine Ridge",
    schedule: "Tuesday – Sunday: 7:30 AM – 6:00 PM (Closed Mondays)",
    season: "Year-Round Partner Stockist",
    productsCarried: [
      "Pasture-Raised Heritage Large",
      "Commercial Flats available on request for catering",
    ],
    contactNote: "Local specialty general store featuring our eggs alongside regional farmhouse cheeses.",
  },
  {
    id: "westside-organic-grocers",
    name: "The Westside Organic Grocer",
    type: "grocery",
    city: "Springfield",
    address: "2201 West End Avenue, Suite 104, Springfield",
    schedule: "Daily: 8:00 AM – 9:00 PM",
    season: "Year-Round Partner Stockist",
    productsCarried: [
      "Certified Organic Free-Range",
      "Soy-Free & Corn-Free Pasture-Raised",
    ],
    contactNote: "Restocked weekly on Mondays and Thursdays with verified cold-chain monitoring.",
  },
];
