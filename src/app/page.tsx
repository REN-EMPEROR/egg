import React from "react";
import Link from "next/link";
import EggIllustration from "@/components/EggIllustration";
import { EGG_VARIETIES } from "@/data/eggs";

export default function HomePage() {
  const featuredEggs = EGG_VARIETIES.slice(0, 3);

  return (
    <div className="bg-[#FAF7F2]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1F382B] via-[#244233] to-[#1F382B] text-[#FAF7F2] py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b-8 border-[#D97706]">
        {/* Subtle decorative background elements */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#FAF7F2_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -top-24 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                Regenerative Family Poultry Farm
              </div>

              <h1 className="font-serif-farm text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Pure Pasture. <br />
                <span className="text-amber-400">Happy Hens.</span> <br />
                Golden Yolks.
              </h1>

              <p className="text-lg sm:text-xl text-[#D0DEC4] max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
                Informational digital catalog for eggeat. We raise heritage breed hens on open green pastures under the sun—producing nutrient-dense eggs with tall, rich marigold yolks for discerning kitchens, bakeries, and local grocers.
              </p>

              {/* Informational CTA Buttons (No cart, no checkout) */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/eggs"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-base font-bold text-[#1F382B] bg-[#F59E0B] hover:bg-[#D97706] hover:text-white transition duration-200 shadow-md"
                >
                  Browse Egg Varieties &rarr;
                </Link>
                <Link
                  href="/where-to-buy"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-base font-bold text-[#FAF7F2] bg-white/10 hover:bg-white/20 border border-white/25 transition duration-200"
                >
                  Find Local Stockists
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-base font-bold text-[#FAF7F2] border border-amber-400/50 hover:bg-amber-400/10 text-amber-300 transition duration-200"
                >
                  Wholesale Inquiries
                </Link>
              </div>

              {/* Key Trust Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif-farm text-2xl sm:text-3xl font-bold text-amber-400">108+</p>
                  <p className="text-xs text-[#B4C9B8] uppercase tracking-wider font-medium">
                    Sq. Ft. Pasture / Hen
                  </p>
                </div>
                <div>
                  <p className="font-serif-farm text-2xl sm:text-3xl font-bold text-amber-400">48 Hr</p>
                  <p className="text-xs text-[#B4C9B8] uppercase tracking-wider font-medium">
                    Nest to Carton
                  </p>
                </div>
                <div>
                  <p className="font-serif-farm text-2xl sm:text-3xl font-bold text-amber-400">100%</p>
                  <p className="text-xs text-[#B4C9B8] uppercase tracking-wider font-medium">
                    Non-GMO & Cage-Free
                  </p>
                </div>
              </div>
            </div>

            {/* Right Hero Image / Farm Scene Representation */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-2xl border-4 border-[#355845] bg-[#16291E]">
                {/* Farm Illustration Banner */}
                <div className="relative h-80 sm:h-96 w-full bg-gradient-to-b from-[#87B5D5] via-[#DEE5D2] to-[#46734B] p-6 flex flex-col justify-between overflow-hidden">
                  {/* Sun */}
                  <div className="absolute top-6 right-8 w-20 h-20 rounded-full bg-amber-200/90 shadow-[0_0_40px_rgba(251,191,36,0.8)]" />
                  
                  {/* Rolling hills */}
                  <div className="absolute -bottom-10 -left-10 -right-10 h-44 rounded-[100%] bg-[#36613C] border-t-2 border-[#548E5C]" />
                  <div className="absolute -bottom-20 -left-20 -right-20 h-44 rounded-[100%] bg-[#25472A] opacity-80" />

                  {/* Red Farm Barn Silhouette */}
                  <div className="absolute bottom-28 left-8 z-10">
                    <div className="w-16 h-12 bg-[#8C2D19] border-t-2 border-[#AA3821] relative rounded-xs shadow-md">
                      <div className="absolute -top-5 left-0 right-0 border-l-[32px] border-r-[32px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#702414]" />
                      <div className="w-3 h-5 bg-[#FAF7F2] mx-auto mt-4 rounded-t-xs" />
                    </div>
                  </div>

                  {/* Roaming Pasture Hens Silhouette & Coop */}
                  <div className="absolute bottom-16 right-8 z-10 flex items-center gap-3">
                    <div className="w-8 h-7 bg-[#FAF7F2] rounded-full relative shadow-sm border border-amber-200">
                      <div className="absolute -top-1.5 right-0.5 w-2 h-2 bg-red-600 rounded-full" />
                      <div className="absolute top-1.5 -right-1 w-1.5 h-1.5 bg-amber-500 rotate-45" />
                    </div>
                    <div className="w-7 h-6 bg-[#C9844B] rounded-full relative shadow-sm">
                      <div className="absolute -top-1.5 right-0.5 w-2 h-2 bg-red-600 rounded-full" />
                      <div className="absolute top-1.5 -right-1 w-1.5 h-1.5 bg-amber-500 rotate-45" />
                    </div>
                    <div className="w-8 h-7 bg-[#2C2723] rounded-full relative shadow-sm">
                      <div className="absolute -top-1.5 right-0.5 w-2 h-2 bg-red-600 rounded-full" />
                      <div className="absolute top-1.5 -right-1 w-1.5 h-1.5 bg-amber-500 rotate-45" />
                    </div>
                  </div>

                  {/* Foreground Badge */}
                  <div className="relative z-20">
                    <span className="inline-block px-3 py-1 rounded bg-[#1F382B]/85 backdrop-blur-xs text-xs font-semibold text-amber-300">
                      Pasture View: Millfield Valley, Parcel #4
                    </span>
                  </div>

                  <div className="relative z-20 bg-[#1F382B]/90 backdrop-blur-sm p-3.5 rounded-xl border border-white/10 text-xs space-y-1">
                    <p className="font-serif-farm text-amber-300 font-bold text-sm">
                      Regenerative Rotational Pasture
                    </p>
                    <p className="text-[#C5D7C9]">
                      Hens moved every 7 days to fresh perennial clover stands, providing continuous insect forage and natural soil regeneration.
                    </p>
                  </div>
                </div>

                {/* Farm Imagery Caption */}
                <div className="p-4 bg-[#182C22] text-xs text-[#B9CBBF] flex items-center justify-between">
                  <span>Photo Archive: Summer Grazing Flock</span>
                  <span className="text-amber-400 font-mono">100% Uncaged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ABOUT OUR FARM (Animal Welfare & Local Sourcing Focus) */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-[#B45309] uppercase">
            Rooted in Reverence
          </span>
          <h2 className="font-serif-farm text-3xl sm:text-4xl font-extrabold text-[#1F382B]">
            About eggeat
          </h2>
          <div className="w-20 h-1 bg-[#D97706] mx-auto rounded-full" />
          <p className="text-[#5C5043] text-base sm:text-lg leading-relaxed">
            We believe that extraordinary eggs begin with the fundamental welfare of the hen and the ecological health of our valley soil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Farm Story & Values */}
          <div className="space-y-6 text-[#453A30] leading-relaxed">
            <h3 className="font-serif-farm text-2xl font-bold text-[#1F382B]">
              Farming With Compassion, Integrity, and Sunshine
            </h3>
            <p>
              Founded in 1984 by the Miller family in the rolling foothills of Millfield Valley, eggeat began with a simple observation: chickens are not factory machines; they are curious, active creatures whose natural instincts belong under open skies.
            </p>
            <p>
              While industrial egg operations house tens of thousands of caged or enclosed birds under artificial lights, our flocks spend their daylight hours foraging through wild clover, dandelion greens, grasshoppers, and earthworms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-[#F2EDE4] border border-[#E0D7C9]">
                <h4 className="font-bold text-[#1F382B] text-sm flex items-center gap-2 mb-1">
                  <span className="text-emerald-700 text-base">&bull;</span>
                  Uncompromising Animal Welfare
                </h4>
                <p className="text-xs text-[#63574A] leading-normal">
                  Certified Humane standards. Shade mobile coops, predator-safe guardian dogs, and generous perches for restful roosting every evening.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#F2EDE4] border border-[#E0D7C9]">
                <h4 className="font-bold text-[#1F382B] text-sm flex items-center gap-2 mb-1">
                  <span className="text-emerald-700 text-base">&bull;</span>
                  Local & Regenerative Sourcing
                </h4>
                <p className="text-xs text-[#63574A] leading-normal">
                  Our rotational chicken grazing builds organic topsoil matter, while all supplemental grains are sourced from regional independent grain mills.
                </p>
              </div>
            </div>

            <div className="border-l-4 border-[#B45309] pl-4 italic text-[#57493A] bg-[#FAF1E6] py-3 pr-3 rounded-r-md">
              &ldquo;When you care for the land first and honor the creatures under your stewardship, the food on your table carries a difference you can see in the yolk and taste in every bite.&rdquo;
              <span className="block not-italic font-bold text-xs text-[#1F382B] mt-2">
                — Arthur & Evelyn Miller, First-Generation Farmers
              </span>
            </div>
          </div>

          {/* Visual Pillars & Standards */}
          <div className="bg-[#FAF4EC] p-8 rounded-2xl border border-[#E5DDD0] shadow-sm space-y-6">
            <h3 className="font-serif-farm text-xl font-bold text-[#1F382B] border-b border-[#E0D5C5] pb-3">
              Our 4 Pillars of Pasture Excellence
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1F382B] text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1F382B]">108+ Square Feet Per Bird</h4>
                  <p className="text-xs text-[#63574A] mt-0.5">
                    Standard &ldquo;free-range&rdquo; requires as little as 2 sq. ft. We provide over 50 times more outdoor pasture territory for unconstrained roaming.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1F382B] text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1F382B]">Zero Antibiotics, Zero Hormones</h4>
                  <p className="text-xs text-[#63574A] mt-0.5">
                    Clean mountain air, fresh forage, and active exercise keep our flocks naturally robust without preventive medication or chemical stimulants.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1F382B] text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1F382B]">Vibrant Deep Marigold Yolks</h4>
                  <p className="text-xs text-[#63574A] mt-0.5">
                    Naturally rich in lutein, beta-carotene, and Omega-3 fats derived entirely from active grass and wild clover consumption—never synthetic coloring dyes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1F382B] text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#1F382B]">Hyper-Local Community Distribution</h4>
                  <p className="text-xs text-[#63574A] mt-0.5">
                    Eggs are delivered to neighborhood grocers and farmers markets within 48 hours of lay, keeping food miles short and community roots strong.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/where-to-buy"
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-[#2D5A3F] text-[#FAF7F2] text-xs font-bold uppercase tracking-wider hover:bg-[#1F382B] transition"
              >
                See Where Our Eggs Are Stocked &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED EGG VARIETIES PREVIEW */}
      <section className="bg-[#F3EDE3] py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-[#E5DDD0]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#B45309] uppercase">
                Catalog Highlights
              </span>
              <h2 className="font-serif-farm text-3xl sm:text-4xl font-extrabold text-[#1F382B] mt-1">
                Featured Egg Varieties
              </h2>
              <p className="text-[#63574A] text-sm mt-1 max-w-xl">
                Explore a few of our primary varieties. Visit the complete catalog for specifications, packaging formats, and restaurant tray options.
              </p>
            </div>
            <Link
              href="/eggs"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1F382B] hover:text-[#B45309] transition-colors"
            >
              View Full Egg Catalog (All 6 Varieties) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEggs.map((egg) => (
              <div
                key={egg.id}
                className="bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#E0D7C9] shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <EggIllustration pattern={egg.svgPattern} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] bg-amber-100 px-2 py-0.5 rounded">
                        {egg.badge || "Farm Fresh"}
                      </span>
                      <span className="text-xs text-[#7A6E60] font-mono">Grade AA</span>
                    </div>
                    <h3 className="font-serif-farm text-xl font-bold text-[#1F382B] mb-2">
                      {egg.name}
                    </h3>
                    <p className="text-xs text-[#54483C] leading-relaxed line-clamp-3 mb-4">
                      {egg.description}
                    </p>
                    <div className="space-y-1.5 text-xs text-[#6A5E50] border-t border-[#EAE2D5] pt-3">
                      <p>
                        <strong className="text-[#2C2723]">Pack:</strong> {egg.packSize}
                      </p>
                      <p>
                        <strong className="text-[#2C2723]">Yolk:</strong> {egg.yolkProfile}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/eggs#${egg.id}`}
                    className="block text-center w-full py-2 px-3 rounded-md bg-[#EAE2D5] text-[#1F382B] text-xs font-bold uppercase tracking-wider hover:bg-[#DCD0C0] transition"
                  >
                    View Specs & Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHOLESALE & STOCKIST CALLOUT BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#1F382B] to-[#2E543F] rounded-2xl p-8 sm:p-12 text-[#FAF7F2] shadow-xl border border-[#3D6950] relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-[radial-gradient(#F59E0B_2px,transparent_2px)] [background-size:16px_16px]" />

          <div className="relative max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
              For Chefs, Bakers & Grocers
            </span>
            <h2 className="font-serif-farm text-3xl sm:text-4xl font-extrabold text-white">
              Looking for Dependable Farm-Direct Wholesale Supply?
            </h2>
            <p className="text-[#D3E2D6] text-sm sm:text-base leading-relaxed">
              We partner with local restaurants, boutique scratch bakeries, catering kitchens, and regional independent grocers across the valley. Enjoy cold-chain weekly farm deliveries in stackable 30-egg flats or barcoded 15-dozen master cases.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-md bg-[#F59E0B] text-[#1F382B] font-bold text-sm uppercase tracking-wider hover:bg-[#D97706] hover:text-white transition shadow-sm"
              >
                Inquire About Wholesale Pricing & Schedules
              </Link>
              <Link
                href="/eggs#wholesale-commercial-flats"
                className="px-6 py-3 rounded-md bg-white/10 text-[#FAF7F2] font-semibold text-sm hover:bg-white/20 transition border border-white/20"
              >
                View Commercial Trays
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
