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
    <div className="bg-[#FAF7F2] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-800 text-xs font-bold uppercase tracking-wider">
            Informational Digital Catalog
          </div>
          <h1 className="font-serif-farm text-4xl sm:text-5xl font-extrabold text-[#1F382B] tracking-tight">
            Our Farm-Fresh Egg Varieties
          </h1>
          <div className="w-24 h-1 bg-[#D97706] mx-auto rounded-full" />
          <p className="text-base sm:text-lg text-[#5D5042] leading-relaxed">
            Browse our full catalog of heritage, organic, and commercial foodservice eggs. Every egg is harvested from happy, active hens enjoying daily sunshine and regenerative pasture forage.
          </p>
          <p className="text-xs text-[#8C7A6B] italic">
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
                  ? "bg-[#1F382B] text-amber-300 shadow-sm border border-[#1F382B]"
                  : "bg-[#EFE7DC] text-[#55473A] hover:bg-[#E5DDD0] border border-[#DDD3C4]"
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
                className="bg-[#FFFDFB] rounded-2xl border border-[#E3D8CA] overflow-hidden shadow-xs hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
              >
                <div>
                  {/* Visual Illustration */}
                  <EggIllustration pattern={egg.svgPattern} />

                  <div className="p-6 space-y-4">
                    {/* Badge and Tagline */}
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                          isWholesale
                            ? "bg-stone-800 text-amber-300"
                            : "bg-[#E9F0E9] text-[#1F382B] border border-[#CBDCCF]"
                        }`}
                      >
                        {egg.badge || "Pasture Fresh"}
                      </span>
                      <span className="text-[11px] text-[#7A6E60] font-mono font-medium">
                        ID: {egg.id}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h2 className="font-serif-farm text-2xl font-bold text-[#1F382B] leading-snug">
                        {egg.name}
                      </h2>
                      <p className="text-xs text-[#82715F] font-medium mt-1">
                        {egg.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-[#524538] leading-relaxed">
                      {egg.description}
                    </p>

                    {/* Specifications List */}
                    <div className="bg-[#F8F3EC] rounded-xl p-3.5 border border-[#E8DFC0] space-y-2 text-xs">
                      <div className="flex justify-between border-b border-[#ECE2D2] pb-1.5">
                        <span className="text-[#7A6C5C] font-medium">Packaging:</span>
                        <span className="text-[#2C2723] font-semibold text-right">
                          {egg.packSize}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-[#ECE2D2] pb-1.5">
                        <span className="text-[#7A6C5C] font-medium">Shell Hue:</span>
                        <span className="text-[#2C2723] font-semibold">
                          {egg.shellColor}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-[#ECE2D2] pb-1.5">
                        <span className="text-[#7A6C5C] font-medium">Yolk Color:</span>
                        <span className="text-[#B45309] font-semibold">
                          {egg.yolkProfile}
                        </span>
                      </div>
                      <div className="flex justify-between pt-0.5">
                        <span className="text-[#7A6C5C] font-medium">Hen Diet:</span>
                        <span className="text-[#2C2723] font-semibold text-right max-w-[60%]">
                          {egg.diet}
                        </span>
                      </div>
                    </div>

                    {/* Culinary Recommendations */}
                    <div className="text-xs space-y-1">
                      <span className="font-bold text-[#1F382B] block uppercase tracking-wider text-[10px]">
                        Chef & Kitchen Note:
                      </span>
                      <p className="text-[#5A4E41] italic">
                        &ldquo;{egg.idealFor}&rdquo;
                      </p>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#736354]">
                        Standards & Handling:
                      </span>
                      <ul className="grid grid-cols-1 gap-1 text-[11px] text-[#473B2F]">
                        {egg.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-1.5">
                            <span className="text-emerald-700 font-bold">&check;</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Footer Action on Card */}
                <div className="p-6 pt-0 border-t border-[#F0E6D8] mt-4">
                  {isWholesale ? (
                    <Link
                      href="/contact"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#1F382B] text-[#FAF7F2] hover:bg-[#2A4D3B] text-xs font-bold uppercase tracking-wider transition shadow-2xs"
                    >
                      <span>Inquire for Wholesale Delivery</span>
                      <span>&rarr;</span>
                    </Link>
                  ) : (
                    <Link
                      href="/where-to-buy"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#EAE2D5] text-[#1F382B] hover:bg-[#DCD0C0] text-xs font-bold uppercase tracking-wider transition"
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

      {/* Educational Farm Standards Strip */}
      <div className="max-w-7xl mx-auto mt-20 p-8 rounded-2xl bg-[#F0EAE0] border border-[#DFD5C6]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif-farm text-lg font-bold text-[#1F382B] mb-2">
              Grade AA Freshness
            </h3>
            <p className="text-xs text-[#5D5041] leading-relaxed">
              Every carton packed at eggeat meets USDA Grade AA standards. That means thick, stand-up egg whites, high spherical yolks, and flawless clean shells.
            </p>
          </div>
          <div>
            <h3 className="font-serif-farm text-lg font-bold text-[#1F382B] mb-2">
              Sustainable Packaging
            </h3>
            <p className="text-xs text-[#5D5041] leading-relaxed">
              We pack strictly in 100% post-consumer recycled molded paper pulp cartons. No expanded polystyrene foam or single-use plastics touch our eggs.
            </p>
          </div>
          <div>
            <h3 className="font-serif-farm text-lg font-bold text-[#1F382B] mb-2">
              Restaurant Standing Orders
            </h3>
            <p className="text-xs text-[#5D5041] leading-relaxed">
              For commercial food partners, we offer scheduled refrigerated delivery routes twice per week, ensuring your morning pastry bakes and weekend brunch never run short.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
