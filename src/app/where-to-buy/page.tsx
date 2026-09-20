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

  const filterBtnClass = (id: string) =>
    `px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition ${
      filter === id
        ? "bg-yolk text-charcoal shadow-sm border border-yolk-dark"
        : "bg-white text-charcoal-mid hover:bg-yolk-xlight border border-eggshell-deep hover:border-yolk/50"
    }`;

  return (
    <div className="bg-eggwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yolk-light border border-yolk text-charcoal text-xs font-bold uppercase tracking-wider mb-4">
          Local Distribution Points
        </div>
        <h1 className="font-serif-farm text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
          Where to Buy Our Eggs
        </h1>
        <div className="w-24 h-1 bg-yolk mx-auto rounded-full my-4" />
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-charcoal-light leading-relaxed">
          We believe in direct community connections. Find our pasture-raised eggs stocked weekly at local independent grocers, weekly community farmers markets, or visit our 24/7 honor stand right here at the farm.
        </p>

        {/* Filter Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <button onClick={() => setFilter("all")} className={filterBtnClass("all")}>
            All Locations ({LOCATIONS.length})
          </button>
          <button onClick={() => setFilter("farmers-market")} className={filterBtnClass("farmers-market")}>
            Farmers Markets
          </button>
          <button onClick={() => setFilter("grocery")} className={filterBtnClass("grocery")}>
            Grocery Stores &amp; Co-ops
          </button>
          <button onClick={() => setFilter("farmstand")} className={filterBtnClass("farmstand")}>
            Farm Gate Stand
          </button>
        </div>
      </div>

      {/* Locations Grid */}
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
                    ? "bg-yolk-xlight border-yolk shadow-md ring-2 ring-yolk/30"
                    : "bg-white border-eggshell-deep shadow-sm hover:shadow-md hover:border-yolk/40"
                }`}
              >
                <div className="space-y-4">
                  {/* Tag & City */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                        isFarmStand
                          ? "bg-yolk text-charcoal"
                          : isMarket
                          ? "bg-charcoal text-white"
                          : "bg-eggshell-mid text-charcoal-mid"
                      }`}
                    >
                      {isFarmStand
                        ? "On-Farm Honor Stand"
                        : isMarket
                        ? "Farmers Market"
                        : "Retail Partner Grocer"}
                    </span>
                    <span className="text-xs font-semibold text-charcoal-light">
                      {loc.city}
                    </span>
                  </div>

                  {/* Name */}
                  <h2 className="font-serif-farm text-xl sm:text-2xl font-bold text-charcoal leading-tight">
                    {loc.name}
                  </h2>

                  {/* Address */}
                  <div className="flex items-start gap-2.5 text-xs text-charcoal-light">
                    <svg
                      className="w-4 h-4 text-yolk-darker shrink-0 mt-0.5"
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
                  <div className="bg-eggshell p-3 rounded-lg border border-eggshell-mid text-xs space-y-1.5">
                    <div className="flex items-start gap-2">
                      <span className="text-charcoal-light font-semibold min-w-16">Hours:</span>
                      <span className="text-charcoal font-bold">{loc.schedule}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-charcoal-light font-semibold min-w-16">Season:</span>
                      <span className="text-charcoal-mid font-medium">{loc.season}</span>
                    </div>
                  </div>

                  {/* Products */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-charcoal-light">
                      Typically Stocked:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {loc.productsCarried.map((prod, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] bg-yolk-light text-charcoal px-2 py-0.5 rounded font-medium border border-yolk/30"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Note */}
                  {loc.contactNote && (
                    <div className="text-xs text-charcoal-light italic bg-white p-2.5 rounded border-l-2 border-yolk">
                      &ldquo;{loc.contactNote}&rdquo;
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-eggshell-mid">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(
                      `${loc.name} ${loc.address}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-charcoal hover:text-yolk-darker transition py-1"
                  >
                    <span>View Map &amp; Directions</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Delivery Info strip */}
      <div className="max-w-7xl mx-auto mt-16 bg-white rounded-2xl p-8 border border-eggshell-deep shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-serif-farm text-2xl font-bold text-charcoal">
              Stockist Delivery &amp; Freshness Schedule
            </h3>
            <p className="text-sm text-charcoal-light leading-relaxed">
              Our refrigerated delivery van runs two dedicated regional loops every week:
              <strong className="text-charcoal"> Tuesdays</strong> covering Millfield Valley &amp; Riverdale, and{" "}
              <strong className="text-charcoal">Fridays</strong> servicing Oakridge and Springfield grocers.
              Eggs found at our retail stockists are typically less than 3 days from nest collection.
            </p>
            <p className="text-xs text-charcoal-light">
              Need guaranteed availability of rare heirloom pastel or soy-free cartons? We encourage visiting the Saturday Morning Downtown Market or ordering direct through our wholesale program.
            </p>
          </div>

          <div className="bg-yolk-xlight p-6 rounded-xl border border-yolk/30 text-center space-y-3">
            <h4 className="font-bold text-sm text-charcoal uppercase tracking-wider">
              Become a Retail Partner
            </h4>
            <p className="text-xs text-charcoal-light">
              Interested in offering eggeat eggs at your grocery store, farmstand, or artisan cafe?
            </p>
            <Link
              href="/contact"
              className="inline-block px-5 py-2.5 bg-yolk text-charcoal text-xs font-bold uppercase tracking-wider rounded-md hover:bg-yolk-dark transition"
            >
              Wholesale Stockist Request
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
