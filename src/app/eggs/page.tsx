"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EGG_VARIETIES, EggVariety } from "@/data/eggs";
import EggIllustration from "@/components/EggIllustration";

export default function OurEggsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Varieties (6)" },
    { id: "pasture", label: "Pasture-Raised" },
    { id: "organic", label: "Certified Organic" },
    { id: "specialty", label: "Heritage & Specialty" },
    { id: "wholesale", label: "Wholesale & Foodservice" },
  ];

  const filteredEggs =
    selectedCategory === "all"
      ? EGG_VARIETIES
      : EGG_VARIETIES.filter((egg) => egg.category === selectedCategory);

  return (
    <div className="bg-eggwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yolk-light border border-yolk text-charcoal text-xs font-bold uppercase tracking-wider">
            Informational Digital Catalog
          </div>
          <h1 className="font-serif-farm text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
            Our Farm-Fresh Egg Varieties
          </h1>
          <div className="w-24 h-1 bg-yolk mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-charcoal-light leading-relaxed">
            Browse our full catalog of heritage, organic, and commercial foodservice eggs. Every egg is harvested from happy, active hens enjoying daily sunshine and regenerative pasture forage.
          </p>
          <p className="text-xs text-charcoal-light/70 italic">
            * Note: We do not process direct retail online orders or checkout. Please refer to our stockists list or contact our wholesale department for bulk restaurant supplies.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-150 ${
                selectedCategory === cat.id
                  ? "bg-yolk text-charcoal shadow-sm border border-yolk-dark"
                  : "bg-white text-charcoal-mid hover:bg-yolk-xlight border border-eggshell-deep hover:border-yolk/50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Egg Varieties Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEggs.map((egg: EggVariety) => {
            const isWholesale = egg.category === "wholesale";

            return (
              <div
                key={egg.id}
                id={egg.id}
                className="bg-white rounded-2xl border border-eggshell-deep overflow-hidden shadow-sm hover:shadow-md hover:border-yolk/40 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <EggIllustration pattern={egg.svgPattern} />

                  <div className="p-6 space-y-4">
                    {/* Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isWholesale
                            ? "bg-charcoal text-yolk"
                            : "bg-yolk-light text-charcoal border border-yolk/40"
                        }`}
                      >
                        {egg.badge || "Pasture Fresh"}
                      </span>
                      <span className="text-[11px] text-charcoal-light font-mono font-medium">
                        ID: {egg.id}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h2 className="font-serif-farm text-2xl font-bold text-charcoal leading-snug">
                        {egg.name}
                      </h2>
                      <p className="text-xs text-charcoal-light font-medium mt-1">
                        {egg.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-charcoal-light leading-relaxed">
                      {egg.description}
                    </p>

                    {/* Specs table */}
                    <div className="bg-eggshell rounded-xl p-3.5 border border-eggshell-mid space-y-2 text-xs">
                      <div className="flex justify-between border-b border-eggshell-deep pb-1.5">
                        <span className="text-charcoal-light font-medium">Packaging:</span>
                        <span className="text-charcoal font-semibold text-right">
                          {egg.packSize}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-eggshell-deep pb-1.5">
                        <span className="text-charcoal-light font-medium">Shell Hue:</span>
                        <span className="text-charcoal font-semibold">{egg.shellColor}</span>
                      </div>
                      <div className="flex justify-between border-b border-eggshell-deep pb-1.5">
                        <span className="text-charcoal-light font-medium">Yolk Color:</span>
                        <span className="text-yolk-darker font-semibold">{egg.yolkProfile}</span>
                      </div>
                      <div className="flex justify-between pt-0.5">
                        <span className="text-charcoal-light font-medium">Hen Diet:</span>
                        <span className="text-charcoal font-semibold text-right max-w-[60%]">
                          {egg.diet}
                        </span>
                      </div>
                    </div>

                    {/* Chef note */}
                    <div className="text-xs space-y-1">
                      <span className="font-bold text-charcoal block uppercase tracking-wider text-[10px]">
                        Chef &amp; Kitchen Note:
                      </span>
                      <p className="text-charcoal-light italic">
                        &ldquo;{egg.idealFor}&rdquo;
                      </p>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-light">
                        Standards &amp; Handling:
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-[11px] text-charcoal-light">
                        {egg.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-1.5">
                            <span className="text-yolk-darker font-bold mt-px">&check;</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="p-6 pt-0 border-t border-eggshell-mid mt-4">
                  {isWholesale ? (
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-yolk text-charcoal hover:bg-yolk-dark text-xs font-bold uppercase tracking-wider transition shadow-sm"
                    >
                      <span>Inquire for Wholesale Delivery</span>
                      <span>&rarr;</span>
                    </Link>
                  ) : (
                    <Link
                      href="/where-to-buy"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-yolk-light text-charcoal hover:bg-yolk text-xs font-bold uppercase tracking-wider transition border border-yolk/30"
                    >
                      <span>Find Retailers Stocking This</span>
                      <span>&rarr;</span>
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Standards strip */}
      <div className="max-w-7xl mx-auto mt-20 p-8 rounded-2xl bg-white border border-eggshell-deep shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-eggshell-deep">
          <div className="pb-6 md:pb-0 md:pr-8">
            <div className="w-8 h-8 rounded-full bg-yolk flex items-center justify-center mb-3">
              <span className="text-charcoal text-sm font-bold">A</span>
            </div>
            <h3 className="font-serif-farm text-lg font-bold text-charcoal mb-2">
              Grade AA Freshness
            </h3>
            <p className="text-xs text-charcoal-light leading-relaxed">
              Every carton packed at eggeat meets USDA Grade AA standards. That means thick, stand-up egg whites, high spherical yolks, and flawless clean shells.
            </p>
          </div>
          <div className="pt-6 md:pt-0 md:px-8">
            <div className="w-8 h-8 rounded-full bg-yolk flex items-center justify-center mb-3">
              <span className="text-charcoal text-sm font-bold">♻</span>
            </div>
            <h3 className="font-serif-farm text-lg font-bold text-charcoal mb-2">
              Sustainable Packaging
            </h3>
            <p className="text-xs text-charcoal-light leading-relaxed">
              We pack strictly in 100% post-consumer recycled molded paper pulp cartons. No expanded polystyrene foam or single-use plastics touch our eggs.
            </p>
          </div>
          <div className="pt-6 md:pt-0 md:pl-8">
            <div className="w-8 h-8 rounded-full bg-yolk flex items-center justify-center mb-3">
              <span className="text-charcoal text-sm font-bold">🚚</span>
            </div>
            <h3 className="font-serif-farm text-lg font-bold text-charcoal mb-2">
              Restaurant Standing Orders
            </h3>
            <p className="text-xs text-charcoal-light leading-relaxed">
              For commercial food partners, we offer scheduled refrigerated delivery routes twice per week, ensuring your morning pastry bakes and weekend brunch never run short.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
