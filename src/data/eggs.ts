export interface EggVariety {
  id: string;
  name: string;
  badge?: string;
  category: "pasture" | "organic" | "wholesale" | "specialty";
  subtitle: string;
  description: string;
  packSize: string;
  shellColor: string;
  yolkProfile: string;
  diet: string;
  idealFor: string;
  highlights: string[];
  specs: {
    label: string;
    value: string;
  }[];
  svgPattern: "brown" | "speckled" | "green" | "wholesale" | "organic";
}

export const EGG_VARIETIES: EggVariety[] = [
  {
    id: "pasture-raised-large",
    name: "Pasture-Raised Heritage Large",
    badge: "Customer Favorite",
    category: "pasture",
    subtitle: "Sun-foraged daily on 108+ sq. ft. of clover & perennial pasture per hen",
    description:
      "Our flagship table egg. Hens spend every day outdoors in open sunlight foraging native grasses, clover, seeds, and insects. The result is a thick, sturdy shell with a tall, vibrant marigold-orange yolk known for unmatched richness and depth of flavor.",
    packSize: "1 Dozen (12 Eggs) in 100% Recycled Pulp Carton",
    shellColor: "Warm Cinnamon Russet",
    yolkProfile: "Deep Marigold Gold (Score 13-14 on Roche yolk fan)",
    diet: "Unsprayed pasture forage supplemented with non-GMO, corn-minimized whole grains",
    idealFor: "Sunny-side up, soft-boiled ramen eggs, hollandaise sauce, and daily breakfast",
    highlights: [
      "108+ sq. ft. pasture per hen",
      "Rotated weekly onto fresh grass",
      "Rich in Omega-3 and Vitamin D",
      "Zero prophylactic antibiotics or synthetic colorants",
    ],
    specs: [
      { label: "Grade", value: "Grade AA Fresh" },
      { label: "Egg Size", value: "Large (approx. 56g each)" },
      { label: "Packaging", value: "Biodegradable molded pulp" },
      { label: "Shelf Life", value: "45 days refrigerated" },
    ],
    svgPattern: "brown",
  },
  {
    id: "certified-organic-large",
    name: "Certified Organic Free-Range",
    badge: "Certified Organic",
    category: "organic",
    subtitle: "100% Certified Organic vegetarian feed with unrestricted pasture range",
    description:
      "Produced by Rhode Island Red and Plymouth Rock flocks raised on certified organic acreage. Fed strictly non-GMO, pesticide-free grains grown without synthetic fertilizers or chemical additives. Clean, wholesome, and delicately buttery.",
    packSize: "1 Dozen (12 Eggs) in Compostable Carton",
    shellColor: "Uniform Golden Honey Brown",
    yolkProfile: "Bright Golden Amber",
    diet: "100% USDA Certified Organic grains, organic alfalfa, and outdoor forage",
    idealFor: "Custards, delicate quiches, scrambled eggs, and wholesome family breakfasts",
    highlights: [
      "USDA Certified Organic pastures & feed",
      "Zero pesticides, herbicides, or fungicides",
      "Unrestricted open-air outdoor access",
      "Certified Humane Raised and Handled",
    ],
    specs: [
      { label: "Grade", value: "Grade AA Fresh" },
      { label: "Egg Size", value: "Large (approx. 57g each)" },
      { label: "Packaging", value: "100% post-consumer recycled paper" },
      { label: "Certification", value: "USDA Organic / CCOF" },
    ],
    svgPattern: "organic",
  },
  {
    id: "pasture-raised-heritage-colored",
    name: "Heirloom Pastel & Olive Egger Collection",
    badge: "Farmstand Specialty",
    category: "specialty",
    subtitle: "Naturally colorful shells from rare heritage Ameraucana & Marans breeds",
    description:
      "A stunning baker's dozen palette of naturally colored shells ranging from pale robin's egg blue and sage olive to deep chocolate terracotta. Laid by heritage purebred hens renowned for exceptional yolk-to-white volume ratio.",
    packSize: "1 Dozen (12 Eggs) Assorted Heirloom Colors",
    shellColor: "Speckled Olive, Sky Blue, & Chocolate",
    yolkProfile: "Lustrous Tangerine Orange with thick, viscous albumin",
    diet: "Free pasture foraging with sprouted barley, field peas, and sunflower seed blend",
    idealFor: "French macarons, sourdough brioche, gourmet plating, and holiday gifts",
    highlights: [
      "Heritage chicken breeds (Ameraucana, Cream Legbar, Black Copper Marans)",
      "High yolk-to-white ratio prized by pastry chefs",
      "All-natural pigment without dyes or feed additives",
      "Small-batch rotational flock",
    ],
    specs: [
      { label: "Grade", value: "Grade AA Fresh" },
      { label: "Egg Size", value: "Mixed Medium to Extra Large" },
      { label: "Packaging", value: "Window-top display craft carton" },
      { label: "Availability", value: "Year-round (Limited farmstand supply)" },
    ],
    svgPattern: "green",
  },
  {
    id: "soy-free-pasture-raised",
    name: "Soy-Free & Corn-Free Pasture-Raised",
    badge: "Hypoallergenic Feed",
    category: "specialty",
    subtitle: "Rationed with field peas, flaxseed, and barley for sensitive dietary needs",
    description:
      "Specially formulated for families and individuals sensitive to soy or corn in secondary food chains. Our hens roam wild bug-rich acreage and receive a carefully balanced ration of roasted field peas, oats, flaxseed, and calcium-rich oyster shell.",
    packSize: "1 Dozen (12 Eggs) in Sealed Kraft Carton",
    shellColor: "Light Cream Russet",
    yolkProfile: "Natural Deep Amber with a clean, mild finish",
    diet: "Zero soy, zero corn; milled with local barley, oats, field peas, and live mealworms",
    idealFor: "Allergy-conscious households, AIP/Paleo meal prep, and clean eating diets",
    highlights: [
      "Tested 100% Soy-free & Corn-free supplemental ration",
      "Abundant outdoor insect & grass forage",
      "Enhanced Omega-3 profile from flaxseed",
      "No antibiotics or synthetic preservatives",
    ],
    specs: [
      { label: "Grade", value: "Grade AA Fresh" },
      { label: "Egg Size", value: "Extra Large (approx. 62g each)" },
      { label: "Packaging", value: "Specialty sealed eco-carton" },
      { label: "Shelf Life", value: "45 days refrigerated" },
    ],
    svgPattern: "speckled",
  },
  {
    id: "wholesale-commercial-flats",
    name: "Commercial Wholesale Trays (30-Egg Flats)",
    badge: "Foodservice Grade",
    category: "wholesale",
    subtitle: "Direct delivery for artisan bakeries, brunch restaurants, and boutique cafes",
    description:
      "Stackable commercial fiber flats loaded with farm-fresh pasture-raised eggs candled, sanitized, and graded within 24 hours of collection. Designed specifically for kitchen efficiency, rapid high-volume prep, and pristine baking performance.",
    packSize: "30 Eggs per Tray / Bundle of 6 Trays (Half-Case: 180 Eggs)",
    shellColor: "Consistent Grade A Uniform Russet Brown",
    yolkProfile: "Firm, upstanding yolk with robust membrane (withstands high-heat griddling)",
    diet: "Pasture-supplemented whole grain mix for consistent albumen whipping volume",
    idealFor: "Scratch bakeries, brunch eateries, farm-to-table dining, and egg pasta makers",
    highlights: [
      "Candled, washed, and inspected to USDA Grade AA standards",
      "Direct refrigerated delivery within 50-mile radius",
      "Predictable albumin viscosity for high-yield whipping",
      "Custom standing weekly delivery schedules",
    ],
    specs: [
      { label: "Unit Count", value: "30 Eggs / Interlocking Tray" },
      { label: "Weight Class", value: "Large (approx. 4.2 lbs per flat)" },
      { label: "Minimum Order", value: "2 Half-Cases (12 flats / 360 eggs)" },
      { label: "Delivery", value: "Chilled van direct to kitchen door" },
    ],
    svgPattern: "wholesale",
  },
  {
    id: "wholesale-bulk-master-cases",
    name: "Bulk Master Case (15 Dozen / 180 Eggs)",
    badge: "Wholesale Only",
    category: "wholesale",
    subtitle: "Heavy-duty corrugated master cartons for regional grocers, co-ops, and markets",
    description:
      "Pre-packed with fifteen 12-egg retail cartons barcoded and ready for immediate display on grocery shelves. Shipped chilled in heavy-duty vented cardboard boxes with complete batch traceability and harvest dating stamped on every pack.",
    packSize: "15 Retail Cartons (180 Eggs Total) per Master Box",
    shellColor: "Choice of Pasture-Raised Brown or Certified Organic",
    yolkProfile: "Consistent deep yellow-orange",
    diet: "Pasture-raised or certified organic protocols with full audit trails",
    idealFor: "Independent grocers, natural food co-ops, neighborhood bodegas, and buying clubs",
    highlights: [
      "UPC barcoded retail cartons inside",
      "Batch date & flock lot number printed on each carton",
      "Pallet or mixed-case delivery options",
      "Co-op and volume rebate programs available",
    ],
    specs: [
      { label: "Case Size", value: "15 Dozen (180 eggs in cartons)" },
      { label: "Case Dimensions", value: "24\" x 12\" x 14\" (approx. 27 lbs)" },
      { label: "Pallet Tier", value: "30 cases per pallet (5,400 eggs)" },
      { label: "Order Lead Time", value: "48-72 hours advance notice" },
    ],
    svgPattern: "wholesale",
  },
];
