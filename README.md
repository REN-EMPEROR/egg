# eggeat — Digital Egg Catalog

An informational digital catalog website for eggeat, a family-owned regenerative chicken farm providing pasture-raised, organic, and wholesale eggs to local grocers, farmers markets, and culinary professionals.

> **Note:** This website serves strictly as an informational catalog. In accordance with farm operations, there is **no checkout, cart, or payment processing logic**.

---

## Features

- **Responsive, Rustic-Themed Layout**: Natural earthy farm color palette (pasture greens, warm amber, cream, and rustic brown) with mobile-responsive navigation.
- **Home (`/`)**: Hero section with stylized farm imagery, quick stats, customer trust badges, and an "About Our Farm" section highlighting animal welfare (108+ sq. ft. per hen, certified humane) and regenerative rotational grazing.
- **Our Eggs (`/eggs`)**: Comprehensive catalog displaying pasture-raised, certified organic, heirloom pastel, soy-free, and commercial wholesale trays (30-egg flats and 15-dozen master cases) in a CSS grid with category filtering.
- **Where to Buy (`/where-to-buy`)**: Directory of weekly farmers markets, local independent grocery stockists, and the on-farm honor stand with addresses, schedules, and stocking notes.
- **Contact (`/contact`)**: Static wholesale inquiry form tailored for restaurants, scratch bakeries, and retail grocers, complete with delivery terms and packing facility contacts.

---

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Visuals**: Zero-dependency inline SVGs designed for crisp offline rendering and fast load times.

---

## Getting Started

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

Prerenders all catalog pages as static pages.
