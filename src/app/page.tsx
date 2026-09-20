import React from "react";
import Link from "next/link";
import EggIllustration from "@/components/EggIllustration";
import { EGG_VARIETIES } from "@/data/eggs";

export default function HomePage() {
  const featuredEggs = EGG_VARIETIES.slice(0, 3);

  return (
    <div className="bg-eggwhite">
      {/* ─── HERO SECTION ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-20 lg:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-yolk">
        {/* Subtle yolk-dot background watermark */}
        <div className="absolute inset-0 bg-egg-dots pointer-events-none" />
        {/* Yellow glow orbs */}
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-yolk/15 blur-3xl pointer-events-none" />
        <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-yolk/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-yolk-light border border-yolk text-charcoal text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-yolk animate-pulse" />
                Regenerative Family Poultry Farm
              </div>

              <h1 className="font-serif-farm text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-charcoal leading-tight">
                Pure Pasture. <br />
                <span className="text-yolk-darker">Happy Hens.</span> <br />
                Golden Yolks.
              </h1>

              <p className="text-lg sm:text-xl text-charcoal-light max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
                Informational digital catalog for eggeat. We raise heritage breed hens on open green pastures under the sun—producing nutrient-dense eggs with tall, rich marigold yolks for discerning kitchens, bakeries, and local grocers.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                <Link
                  href="/eggs"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-base font-bold text-charcoal bg-yolk hover:bg-yolk-dark transition duration-200 shadow-md"
                >
                  Browse Egg Varieties &rarr;
                </Link>
                <Link
                  href="/where-to-buy"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-base font-bold text-charcoal-mid bg-eggshell hover:bg-eggshell-mid border border-eggshell-deep transition duration-200"
                >
                  Find Local Stockists
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-md text-base font-bold text-charcoal border-2 border-yolk hover:bg-yolk-xlight transition duration-200"
                >
                  Wholesale Inquiries
                </Link>
              </div>

              {/* Stats strip */}
              <div className="pt-6 border-t border-eggshell-deep grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-serif-farm text-2xl sm:text-3xl font-bold text-yolk-darker">108+</p>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider font-medium mt-0.5">
                    Sq. Ft. Pasture / Hen
                  </p>
                </div>
                <div>
                  <p className="font-serif-farm text-2xl sm:text-3xl font-bold text-yolk-darker">48 Hr</p>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider font-medium mt-0.5">
                    Nest to Carton
                  </p>
                </div>
                <div>
                  <p className="font-serif-farm text-2xl sm:text-3xl font-bold text-yolk-darker">100%</p>
                  <p className="text-xs text-charcoal-light uppercase tracking-wider font-medium mt-0.5">
                    Non-GMO &amp; Cage-Free
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Farm Scene Illustration */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-xl border-2 border-yolk bg-white">
                {/* Farm Illustration */}
                <div className="relative h-80 sm:h-96 w-full bg-gradient-to-b from-[#87B5D5] via-[#DEE5D2] to-[#46734B] p-6 flex flex-col justify-between overflow-hidden">
                  {/* Sun – larger yolk-yellow glow */}
                  <div className="absolute top-6 right-8 w-20 h-20 rounded-full bg-yolk shadow-[0_0_40px_rgba(251,191,36,0.85)]" />

                  {/* Rolling hills */}
                  <div className="absolute -bottom-10 -left-10 -right-10 h-44 rounded-[100%] bg-[#36613C] border-t-2 border-[#548E5C]" />
                  <div className="absolute -bottom-20 -left-20 -right-20 h-44 rounded-[100%] bg-[#25472A] opacity-80" />

                  {/* Barn */}
                  <div className="absolute bottom-28 left-8 z-10">
                    <div className="w-16 h-12 bg-[#8C2D19] border-t-2 border-[#AA3821] relative rounded-xs shadow-md">
                      <div className="absolute -top-5 left-0 right-0 border-l-[32px] border-r-[32px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#702414]" />
                      <div className="w-3 h-5 bg-white mx-auto mt-4 rounded-t-xs" />
                    </div>
                  </div>

                  {/* Hens */}
                  <div className="absolute bottom-16 right-8 z-10 flex items-center gap-3">
                    <div className="w-8 h-7 bg-white rounded-full relative shadow-sm border border-yolk/60">
                      <div className="absolute -top-1.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
                      <div className="absolute top-1.5 -right-1 w-1.5 h-1.5 bg-yolk rotate-45" />
                    </div>
                    <div className="w-7 h-6 bg-[#C9844B] rounded-full relative shadow-sm">
                      <div className="absolute -top-1.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
                      <div className="absolute top-1.5 -right-1 w-1.5 h-1.5 bg-yolk rotate-45" />
                    </div>
                    <div className="w-8 h-7 bg-[#2C2723] rounded-full relative shadow-sm">
                      <div className="absolute -top-1.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
                      <div className="absolute top-1.5 -right-1 w-1.5 h-1.5 bg-yolk rotate-45" />
                    </div>
                  </div>

                  {/* Location badge */}
                  <div className="relative z-20">
                    <span className="inline-block px-3 py-1 rounded bg-black/60 backdrop-blur-xs text-xs font-semibold text-yolk">
                      Pasture View: Millfield Valley, Parcel #4
                    </span>
                  </div>

                  {/* Infobox */}
                  <div className="relative z-20 bg-white/90 backdrop-blur-sm p-3.5 rounded-xl border border-yolk/40 text-xs space-y-1">
                    <p className="font-serif-farm text-charcoal font-bold text-sm">
                      Regenerative Rotational Pasture
                    </p>
                    <p className="text-charcoal-light">
                      Hens moved every 7 days to fresh perennial clover stands, providing continuous insect forage and natural soil regeneration.
                    </p>
                  </div>
                </div>

                {/* Caption bar */}
                <div className="p-4 bg-yolk-light text-xs text-charcoal flex items-center justify-between border-t border-yolk/40">
                  <span className="font-medium">Photo Archive: Summer Grazing Flock</span>
                  <span className="text-charcoal font-mono font-bold">100% Uncaged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT OUR FARM ───────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-widest text-yolk-darker uppercase">
            Rooted in Reverence
          </span>
          <h2 className="font-serif-farm text-3xl sm:text-4xl font-extrabold text-charcoal">
            About eggeat
          </h2>
          <div className="w-20 h-1 bg-yolk mx-auto rounded-full" />
          <p className="text-charcoal-light text-base sm:text-lg leading-relaxed">
            We believe that extraordinary eggs begin with the fundamental welfare of the hen and the ecological health of our valley soil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Farm Story */}
          <div className="space-y-6 text-charcoal-light leading-relaxed">
            <h3 className="font-serif-farm text-2xl font-bold text-charcoal">
              Farming With Compassion, Integrity, and Sunshine
            </h3>
            <p>
              Founded in 1984 by the Miller family in the rolling foothills of Millfield Valley, eggeat began with a simple observation: chickens are not factory machines; they are curious, active creatures whose natural instincts belong under open skies.
            </p>
            <p>
              While industrial egg operations house tens of thousands of caged or enclosed birds under artificial lights, our flocks spend their daylight hours foraging through wild clover, dandelion greens, grasshoppers, and earthworms.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-lg bg-yolk-xlight border border-yolk/30">
                <h4 className="font-bold text-charcoal text-sm flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-yolk shrink-0" />
                  Uncompromising Animal Welfare
                </h4>
                <p className="text-xs text-charcoal-light leading-normal">
                  Certified Humane standards. Shade mobile coops, predator-safe guardian dogs, and generous perches for restful roosting every evening.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-yolk-xlight border border-yolk/30">
                <h4 className="font-bold text-charcoal text-sm flex items-center gap-2 mb-1">
                  <span className="w-3 h-3 rounded-full bg-yolk shrink-0" />
                  Local &amp; Regenerative Sourcing
                </h4>
                <p className="text-xs text-charcoal-light leading-normal">
                  Our rotational chicken grazing builds organic topsoil matter, while all supplemental grains are sourced from regional independent grain mills.
                </p>
              </div>
            </div>

            {/* Pull quote */}
            <div className="border-l-4 border-yolk pl-4 italic text-charcoal-light bg-yolk-xlight py-3 pr-3 rounded-r-md">
              &ldquo;When you care for the land first and honor the creatures under your stewardship, the food on your table carries a difference you can see in the yolk and taste in every bite.&rdquo;
              <span className="block not-italic font-bold text-xs text-charcoal mt-2">
                — Arthur &amp; Evelyn Miller, First-Generation Farmers
              </span>
            </div>
          </div>

          {/* 4 Pillars card */}
          <div className="bg-white p-8 rounded-2xl border border-eggshell-deep shadow-sm space-y-6">
            <h3 className="font-serif-farm text-xl font-bold text-charcoal border-b border-eggshell-mid pb-3">
              Our 4 Pillars of Pasture Excellence
            </h3>

            <div className="space-y-4">
              {[
                {
                  n: "1",
                  title: "108+ Square Feet Per Bird",
                  body: "Standard \"free-range\" requires as little as 2 sq. ft. We provide over 50 times more outdoor pasture territory for unconstrained roaming.",
                },
                {
                  n: "2",
                  title: "Zero Antibiotics, Zero Hormones",
                  body: "Clean mountain air, fresh forage, and active exercise keep our flocks naturally robust without preventive medication or chemical stimulants.",
                },
                {
                  n: "3",
                  title: "Vibrant Deep Marigold Yolks",
                  body: "Naturally rich in lutein, beta-carotene, and Omega-3 fats derived entirely from active grass and wild clover consumption—never synthetic coloring dyes.",
                },
                {
                  n: "4",
                  title: "Hyper-Local Community Distribution",
                  body: "Eggs are delivered to neighborhood grocers and farmers markets within 48 hours of lay, keeping food miles short and community roots strong.",
                },
              ].map((p) => (
                <div key={p.n} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yolk text-charcoal flex items-center justify-center font-bold text-sm shrink-0">
                    {p.n}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-charcoal">{p.title}</h4>
                    <p className="text-xs text-charcoal-light mt-0.5">{p.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                href="/where-to-buy"
                className="w-full flex items-center justify-center py-2.5 px-4 rounded-lg bg-yolk text-charcoal text-xs font-bold uppercase tracking-wider hover:bg-yolk-dark transition"
              >
                See Where Our Eggs Are Stocked &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED EGG VARIETIES PREVIEW ──────────────────────────────── */}
      <section className="bg-eggshell py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-eggshell-deep">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold tracking-widest text-yolk-darker uppercase">
                Catalog Highlights
              </span>
              <h2 className="font-serif-farm text-3xl sm:text-4xl font-extrabold text-charcoal mt-1">
                Featured Egg Varieties
              </h2>
              <p className="text-charcoal-light text-sm mt-1 max-w-xl">
                Explore a few of our primary varieties. Visit the complete catalog for specifications, packaging formats, and restaurant tray options.
              </p>
            </div>
            <Link
              href="/eggs"
              className="inline-flex items-center gap-2 text-sm font-bold text-charcoal hover:text-yolk-darker transition-colors"
            >
              View Full Egg Catalog (All 6 Varieties) &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredEggs.map((egg) => (
              <div
                key={egg.id}
                className="bg-white rounded-xl overflow-hidden border border-eggshell-deep shadow-sm hover:shadow-md hover:border-yolk/40 transition duration-200 flex flex-col justify-between"
              >
                <div>
                  <EggIllustration pattern={egg.svgPattern} />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-yolk-darker bg-yolk-light px-2 py-0.5 rounded">
                        {egg.badge || "Farm Fresh"}
                      </span>
                      <span className="text-xs text-charcoal-light font-mono">Grade AA</span>
                    </div>
                    <h3 className="font-serif-farm text-xl font-bold text-charcoal mb-2">
                      {egg.name}
                    </h3>
                    <p className="text-xs text-charcoal-light leading-relaxed line-clamp-3 mb-4">
                      {egg.description}
                    </p>
                    <div className="space-y-1.5 text-xs text-charcoal-light border-t border-eggshell-mid pt-3">
                      <p>
                        <strong className="text-charcoal">Pack:</strong> {egg.packSize}
                      </p>
                      <p>
                        <strong className="text-charcoal">Yolk:</strong> {egg.yolkProfile}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href={`/eggs#${egg.id}`}
                    className="block text-center w-full py-2 px-3 rounded-md bg-yolk-light text-charcoal text-xs font-bold uppercase tracking-wider hover:bg-yolk transition border border-yolk/30"
                  >
                    View Specs &amp; Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHOLESALE CALLOUT BANNER ─────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-charcoal rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden border border-charcoal-mid">
          {/* Yolk-dot pattern accent on the right */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 bg-egg-dots pointer-events-none" />
          {/* Yolk glow */}
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-yolk/20 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl space-y-4">
            <span className="px-3 py-1 rounded-full bg-yolk/20 text-yolk text-xs font-bold uppercase tracking-wider border border-yolk/30">
              For Chefs, Bakers &amp; Grocers
            </span>
            <h2 className="font-serif-farm text-3xl sm:text-4xl font-extrabold text-white">
              Looking for Dependable Farm-Direct Wholesale Supply?
            </h2>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              We partner with local restaurants, boutique scratch bakeries, catering kitchens, and regional independent grocers across the valley. Enjoy cold-chain weekly farm deliveries in stackable 30-egg flats or barcoded 15-dozen master cases.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-md bg-yolk text-charcoal font-bold text-sm uppercase tracking-wider hover:bg-yolk-dark transition shadow-sm"
              >
                Inquire About Wholesale Pricing &amp; Schedules
              </Link>
              <Link
                href="/eggs#wholesale-commercial-flats"
                className="px-6 py-3 rounded-md bg-white/10 text-white font-semibold text-sm hover:bg-white/20 transition border border-white/20"
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
