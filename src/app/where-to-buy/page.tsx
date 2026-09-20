"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LOCATIONS, MarketLocation } from "@/data/locations";

export default function WhereToBuyPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredLocations =
    filter === "all"
      ? LOCATIONS
      : LOCATIONS.filter((loc) => loc.type === filter);

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-4">
          Local Distribution Points
        </div>
        <h1 className="font-serif-farm text-4xl sm:text-5xl font-extrabold text-[#1F382B] tracking-tight">
          Where to Buy Our Eggs
        </h1>
        <div className="w-24 h-1 bg-[#D97706] mx-auto rounded-full my-4" />
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5E5143] leading-relaxed">
          We believe in direct community connections. Find our pasture-raised eggs stocked weekly at local independent grocers, weekly community farmers markets, or visit our 24/7 honor stand right here at the farm.
        </p>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              filter === "all"
                ? "bg-[#1F382B] text-amber-300 shadow-xs"
                : "bg-[#EFE7DC] text-[#55473A] hover:bg-[#E5DDD0]"
            }`}
          >
            All Locations ({LOCATIONS.length})
          </button>
          <button
            onClick={() => setFilter("farmers-market")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              filter === "farmers-market"
                ? "bg-[#1F382B] text-amber-300 shadow-xs"
                : "bg-[#EFE7DC] text-[#55473A] hover:bg-[#E5DDD0]"
            }`}
          >
            Farmers Markets
          </button>
          <button
            onClick={() => setFilter("grocery")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              filter === "grocery"
                ? "bg-[#1F382B] text-amber-300 shadow-xs"
                : "bg-[#EFE7DC] text-[#55473A] hover:bg-[#E5DDD0]"
            }`}
          >
            Grocery Stores & Co-ops
          </button>
          <button
            onClick={() => setFilter("farmstand")}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
              filter === "farmstand"
                ? "bg-[#1F382B] text-amber-300 shadow-xs"
                : "bg-[#EFE7DC] text-[#55473A] hover:bg-[#E5DDD0]"
            }`}
          >
            Farm Gate Stand
          </button>
        </div>
      </div>

      {/* Locations List Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredLocations.map((loc: MarketLocation) => {
            const isFarmStand = loc.type === "farmstand";
            const isMarket = loc.type === "farmers-market";

            return (
              <div
                key={loc.id}
                className={`rounded-2xl border p-6 flex flex-col justify-between transition-all duration-200 ${
                  isFarmStand
                    ? "bg-[#FFF9EE] border-amber-300 shadow-md ring-2 ring-amber-400/30"
                    : "bg-[#FFFDFB] border-[#E3D8CA] shadow-xs hover:shadow-md"
                }`}
              >
                <div className="space-y-4">
                  {/* Category Tag & City */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        isFarmStand
                          ? "bg-amber-600 text-white"
                          : isMarket
                          ? "bg-[#1F382B] text-[#FAF7F2]"
                          : "bg-[#2D5A3F]/15 text-[#1F382B]"
                      }`}
                    >
                      {isFarmStand
                        ? "On-Farm Honor Stand"
                        : isMarket
                        ? "Farmers Market"
                        : "Retail Partner Grocer"}
                    </span>
                    <span className="text-xs font-semibold text-[#8B7867]">
                      {loc.city}
                    </span>
                  </div>

                  {/* Location Name */}
                  <h2 className="font-serif-farm text-xl sm:text-2xl font-bold text-[#1F382B] leading-tight">
                    {loc.name}
                  </h2>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 text-xs text-[#5C4F41]">
                    <svg
                      className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="font-medium">{loc.address}</span>
                  </div>

                  {/* Schedule & Season */}
                  <div className="bg-[#FAF4EB] p-3 rounded-lg border border-[#E8DEC7] text-xs space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-[#877564] font-semibold min-w-16">
                        Hours:
                      </span>
                      <span className="text-[#2C2723] font-bold">
                        {loc.schedule}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-[#877564] font-semibold min-w-16">
                        Season:
                      </span>
                      <span className="text-[#594B3C] font-medium">
                        {loc.season}
                      </span>
                    </div>
                  </div>

                  {/* Products Carried */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#7A6C5B]">
                      Typically Stocked:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.productsCarried.map((prod, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-[#EFE8DC] text-[#473A2D] px-2 py-0.5 rounded font-medium"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Shopper Note */}
                  {loc.contactNote && (
                    <div className="text-xs text-[#6B5A4B] italic bg-[#F6F0E7] p-2.5 rounded border-l-2 border-[#D97706]">
                      &ldquo;{loc.contactNote}&rdquo;
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#ECE0D0]">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${loc.name} ${loc.address}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1F382B] hover:text-[#B45309] transition py-1"
                  >
                    <span>View Map & Directions</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Freshness & Restock Advisory */}
      <div className="max-w-7xl mx-auto mt-16 bg-[#F2EDE4] rounded-2xl p-8 border border-[#E0D7C9]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif-farm text-2xl font-bold text-[#1F382B]">
              Stockist Delivery & Freshness Schedule
            </h3>
            <p className="text-sm text-[#544739] leading-relaxed">
              Our refrigerated delivery van runs two dedicated regional loops every week:
              <strong> Tuesdays</strong> covering Millfield Valley & Riverdale, and <strong>Fridays</strong> servicing Oakridge and Springfield grocers. Eggs found at our retail stockists are typically less than 3 days from nest collection.
            </p>
            <p className="text-xs text-[#736353]">
              Need guaranteed availability of rare heirloom pastel or soy-free cartons? We encourage visiting the Saturday Morning Downtown Market or ordering direct through our wholesale program.
            </p>
          </div>

          <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#D5C9B7] text-center space-y-3">
            <h4 className="font-bold text-sm text-[#1F382B] uppercase tracking-wider">
              Become a Retail Partner
            </h4>
            <p className="text-xs text-[#635546]">
              Interested in offering eggeat eggs at your grocery store, farmstand, or artisan cafe?
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 bg-[#1F382B] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-[#2E543F] transition"
            >
              Wholesale Stockist Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
