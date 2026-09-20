"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    inquiryType: "wholesale-restaurant",
    volume: "1-5-cases",
    city: "",
    varieties: ["Pasture-Raised Heritage Brown", "Commercial 30-Egg Flats"],
    message: "",
  });

  const handleCheckboxChange = (variety: string) => {
    setFormData((prev) => {
      const exists = prev.varieties.includes(variety);
      return {
        ...prev,
        varieties: exists
          ? prev.varieties.filter((v) => v !== variety)
          : [...prev.varieties, variety],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /* Shared input class for accessibility and brand consistency */
  const inputClass =
    "w-full px-3.5 py-2.5 rounded-lg border border-eggshell-deep bg-eggwhite text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-yolk focus:border-yolk";

  const labelClass =
    "block text-xs font-bold uppercase tracking-wider text-charcoal mb-1.5";

  return (
    <div className="bg-eggwhite min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yolk-light border border-yolk text-charcoal text-xs font-bold uppercase tracking-wider mb-4">
          Direct Farm Inquiries
        </div>
        <h1 className="font-serif-farm text-4xl sm:text-5xl font-extrabold text-charcoal tracking-tight">
          Wholesale &amp; Partner Inquiries
        </h1>
        <div className="w-24 h-1 bg-yolk mx-auto rounded-full my-4" />
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-charcoal-light leading-relaxed">
          Tailored for restaurants, pastry chefs, artisanal bakeries, local grocers, and institutional food programs seeking regular, cold-chain farm-direct deliveries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* ── LEFT: Form ─────────────────────────────────────────────────── */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-eggshell-deep p-8 sm:p-10 shadow-sm">
          {submitted ? (
            /* Success state */
            <div className="py-12 px-4 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-yolk flex items-center justify-center mx-auto text-charcoal text-2xl font-bold shadow-sm">
                &check;
              </div>
              <h2 className="font-serif-farm text-2xl sm:text-3xl font-bold text-charcoal">
                Inquiry Received!
              </h2>
              <p className="text-sm text-charcoal-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-charcoal">{formData.contactName || "valued partner"}</strong>. We have logged your request for{" "}
                <strong className="text-charcoal">{formData.businessName || "your organization"}</strong>. Our wholesale dispatch team will review route capacity and reach out within 1 business day.
              </p>
              <div className="pt-4 border-t border-eggshell-mid max-w-md mx-auto text-xs text-charcoal-light">
                Need immediate coordination? Call our packing shed directly at{" "}
                <span className="font-mono text-charcoal font-bold">(555) 382-3447</span>.
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-md bg-yolk text-charcoal text-xs font-bold uppercase tracking-wider hover:bg-yolk-dark transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-serif-farm text-2xl font-bold text-charcoal mb-1">
                  Wholesale Requisition Form
                </h2>
                <p className="text-xs text-charcoal-light">
                  Please fill out your kitchen or store details. No payment or credit card is collected on this catalog.
                </p>
              </div>

              {/* Inquiry Type */}
              <div>
                <label htmlFor="inquiryType" className={labelClass}>
                  I Am Inquiring As A:
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  className={inputClass}
                >
                  <option value="wholesale-restaurant">Restaurant / Brunch Kitchen / Cafe (Commercial Flats)</option>
                  <option value="bakery">Artisan Bakery / Pastry Chef (High Yolk Viscosity)</option>
                  <option value="grocery-stockist">Independent Grocery / Co-op Retail Stockist (Barcoded Cartons)</option>
                  <option value="community-buying-club">Community Food Club / Buying Cooperative</option>
                  <option value="general">Individual / General Farm Stand Question</option>
                </select>
              </div>

              {/* Name & Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactName" className={labelClass}>
                    Your Full Name <span className="text-yolk-darker">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    placeholder="e.g., Chef Marcus Rivera"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="businessName" className={labelClass}>
                    Business / Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    placeholder="e.g., Hearth & Timber Bistro"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-yolk-darker">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="marcus@hearthandtimber.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone Number <span className="text-yolk-darker">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="(555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* City & Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className={labelClass}>
                    Delivery City / Town
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="e.g., Riverdale or Millfield"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="volume" className={labelClass}>
                    Estimated Weekly Volume
                  </label>
                  <select
                    id="volume"
                    value={formData.volume}
                    onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    className={inputClass}
                  >
                    <option value="1-5-cases">1 – 5 Cases / week (15 – 75 Dozen)</option>
                    <option value="6-15-cases">6 – 15 Cases / week (90 – 225 Dozen)</option>
                    <option value="15-plus-cases">15+ Cases / week (Commercial Pallet)</option>
                    <option value="sample">Culinary Sample Request (Trial Flat)</option>
                    <option value="retail-stockist">Retail Carton Shelf Stocking</option>
                  </select>
                </div>
              </div>

              {/* Variety checkboxes */}
              <div>
                <label className={labelClass}>
                  Varieties of Interest (Select All That Apply):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
                  {[
                    "Pasture-Raised Heritage Brown",
                    "Certified Organic Free-Range",
                    "Commercial 30-Egg Flats",
                    "Bulk 15-Dozen Master Case",
                    "Heirloom Pastel & Olive Cartons",
                    "Soy-Free Pasture-Raised",
                  ].map((variety) => (
                    <label
                      key={variety}
                      className="flex items-center gap-2 p-2.5 rounded-md bg-eggshell border border-eggshell-mid cursor-pointer hover:bg-yolk-xlight hover:border-yolk/40 transition"
                    >
                      <input
                        type="checkbox"
                        checked={formData.varieties.includes(variety)}
                        onChange={() => handleCheckboxChange(variety)}
                        className="rounded accent-yolk-darker"
                      />
                      <span className="font-medium">{variety}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Delivery Requirements &amp; Questions
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Include preferred delivery days, dock access details, or specific culinary specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className={inputClass}
                />
              </div>

              {/* ── PRIMARY SUBMIT BUTTON – yolk yellow ── */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-yolk text-charcoal text-sm font-bold uppercase tracking-wider hover:bg-yolk-dark transition shadow-sm"
                >
                  Submit Wholesale Inquiry
                </button>
                <p className="text-[11px] text-center text-charcoal-light mt-2">
                  No credit card required. Informational wholesale catalog inquiry only.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* ── RIGHT: Farm Info sidebar ────────────────────────────────────── */}
        <div className="lg:col-span-5 space-y-6">
          {/* Contact Box */}
          <div className="bg-white rounded-2xl border border-eggshell-deep p-6 sm:p-8 space-y-6 shadow-sm">
            <h3 className="font-serif-farm text-xl font-bold text-charcoal border-b border-eggshell-mid pb-3">
              Farm &amp; Packing Shed Contacts
            </h3>

            <div className="space-y-4 text-xs text-charcoal-light">
              <div>
                <strong className="block text-sm text-charcoal">
                  Packing Facility &amp; Dispatch Shed:
                </strong>
                <span>4180 Old Pasture Road, Millfield Valley, State 14850</span>
              </div>
              <div>
                <strong className="block text-sm text-charcoal">
                  Wholesale Dispatch Phone:
                </strong>
                <span className="font-mono text-sm font-semibold text-charcoal">
                  (555) 382-3447
                </span>
                <p className="text-charcoal-light">Hours: Mon – Fri, 7:00 AM – 4:00 PM</p>
              </div>
              <div>
                <strong className="block text-sm text-charcoal">
                  Wholesale Desk Email:
                </strong>
                <span className="font-mono text-sm font-semibold text-charcoal">
                  orders@eggeat.local
                </span>
              </div>
              <div>
                <strong className="block text-sm text-charcoal">
                  Farm Gate Honor Stand:
                </strong>
                <p>Open 7 Days a week &bull; Dawn to Dusk</p>
                <p className="text-charcoal-light">
                  Cash, check, or Venmo honor payment on site.
                </p>
              </div>
            </div>
          </div>

          {/* Wholesale Terms */}
          <div className="bg-white rounded-2xl border border-eggshell-deep p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="font-serif-farm text-lg font-bold text-charcoal">
              Wholesale Terms &amp; Protocols
            </h3>

            <div className="space-y-3 text-xs text-charcoal-light">
              {[
                {
                  q: "Minimum Order Quantities:",
                  a: "Direct van delivery requires a minimum of 2 half-cases (12 thirty-egg flats = 360 eggs) or 3 retail master cases.",
                },
                {
                  q: "Delivery Routes & Radius:",
                  a: "Refrigerated transit within a 50-mile radius of Millfield Valley on scheduled Tuesday and Friday route runs.",
                },
                {
                  q: "Chef Culinary Trials:",
                  a: "Executive chefs and head bakers can request a complimentary 30-egg sample flat for yolk emulsion and baking tests.",
                },
                {
                  q: "Billing & Invoicing:",
                  a: "Net-30 billing available for established commercial accounts upon credit verification.",
                },
              ].map((item) => (
                <div key={item.q} className="border-b border-eggshell-mid pb-2.5 last:border-0 last:pb-0">
                  <p className="font-bold text-charcoal">{item.q}</p>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Retail Redirect */}
          <div className="bg-yolk-xlight rounded-xl p-5 border border-yolk/30 text-xs space-y-2">
            <h4 className="font-bold text-charcoal uppercase tracking-wider text-[11px]">
              Looking for Just a Carton or Two?
            </h4>
            <p className="text-charcoal-light">
              We do not sell single retail dozens through this wholesale form. Please check our local farmers markets or partner grocers:
            </p>
            <Link
              href="/where-to-buy"
              className="inline-block font-bold text-charcoal hover:text-yolk-darker underline transition"
            >
              View Farmers Markets &amp; Grocery Stockists &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
