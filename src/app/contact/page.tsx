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

  return (
    <div className="bg-[#FAF7F2] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider mb-4">
          Direct Farm Inquiries
        </div>
        <h1 className="font-serif-farm text-4xl sm:text-5xl font-extrabold text-[#1F382B] tracking-tight">
          Wholesale & Partner Inquiries
        </h1>
        <div className="w-24 h-1 bg-[#D97706] mx-auto rounded-full my-4" />
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#5C4F41] leading-relaxed">
          Tailored for restaurants, pastry chefs, artisanal bakeries, local grocers, and institutional food programs seeking regular, cold-chain farm-direct deliveries.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Contact Form */}
        <div className="lg:col-span-7 bg-[#FFFDFB] rounded-2xl border border-[#E3D8CA] p-8 sm:p-10 shadow-sm">
          {submitted ? (
            <div className="py-12 px-4 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-2xl font-bold border border-emerald-300">
                &check;
              </div>
              <h2 className="font-serif-farm text-2xl sm:text-3xl font-bold text-[#1F382B]">
                Inquiry Received!
              </h2>
              <p className="text-sm text-[#544638] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.contactName || "valued partner"}</strong>. We have logged your request for <strong>{formData.businessName || "your organization"}</strong>. Our wholesale dispatch team will review route capacity and reach out within 1 business day.
              </p>
              <div className="pt-4 border-t border-[#EAE1D3] max-w-md mx-auto text-xs text-[#7A6B5C]">
                Need immediate coordination? Call our packing shed directly at{" "}
                <span className="font-mono text-[#1F382B] font-bold">(555) 382-3447</span>.
              </div>
              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                  }}
                  className="px-6 py-2.5 rounded-md bg-[#EAE2D5] text-[#1F382B] text-xs font-bold uppercase tracking-wider hover:bg-[#DCD0C0] transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-serif-farm text-2xl font-bold text-[#1F382B] mb-1">
                  Wholesale Requisition Form
                </h2>
                <p className="text-xs text-[#7A6C5C]">
                  Please fill out your kitchen or store details. No payment or credit card is collected on this catalog.
                </p>
              </div>

              {/* Inquiry Type */}
              <div>
                <label
                  htmlFor="inquiryType"
                  className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-2"
                >
                  I Am Inquiring As A:
                </label>
                <select
                  id="inquiryType"
                  value={formData.inquiryType}
                  onChange={(e) =>
                    setFormData({ ...formData, inquiryType: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] bg-[#FAF7F2] text-[#2C2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F382B]"
                >
                  <option value="wholesale-restaurant">
                    Restaurant / Brunch Kitchen / Cafe (Commercial Flats)
                  </option>
                  <option value="bakery">
                    Artisan Bakery / Pastry Chef (High Yolk Viscosity)
                  </option>
                  <option value="grocery-stockist">
                    Independent Grocery / Co-op Retail Stockist (Barcoded Cartons)
                  </option>
                  <option value="community-buying-club">
                    Community Food Club / Buying Cooperative
                  </option>
                  <option value="general">
                    Individual / General Farm Stand Question
                  </option>
                </select>
              </div>

              {/* Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contactName"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-1.5"
                  >
                    Your Full Name <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    placeholder="e.g., Chef Marcus Rivera"
                    value={formData.contactName}
                    onChange={(e) =>
                      setFormData({ ...formData, contactName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] bg-[#FAF7F2] text-[#2C2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F382B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="businessName"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-1.5"
                  >
                    Business / Restaurant Name
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    placeholder="e.g., Hearth & Timber Bistro"
                    value={formData.businessName}
                    onChange={(e) =>
                      setFormData({ ...formData, businessName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] bg-[#FAF7F2] text-[#2C2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F382B]"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-1.5"
                  >
                    Email Address <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="marcus@hearthandtimber.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] bg-[#FAF7F2] text-[#2C2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F382B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-1.5"
                  >
                    Phone Number <span className="text-amber-700">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    placeholder="(555) 019-2834"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] bg-[#FAF7F2] text-[#2C2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F382B]"
                  />
                </div>
              </div>

              {/* City / Location & Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-1.5"
                  >
                    Delivery City / Town
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="e.g., Riverdale or Millfield"
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] bg-[#FAF7F2] text-[#2C2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F382B]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="volume"
                    className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-1.5"
                  >
                    Estimated Weekly Volume
                  </label>
                  <select
                    id="volume"
                    value={formData.volume}
                    onChange={(e) =>
                      setFormData({ ...formData, volume: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] bg-[#FAF7F2] text-[#2C2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F382B]"
                  >
                    <option value="1-5-cases">1 – 5 Cases / week (15 – 75 Dozen)</option>
                    <option value="6-15-cases">6 – 15 Cases / week (90 – 225 Dozen)</option>
                    <option value="15-plus-cases">15+ Cases / week (Commercial Pallet)</option>
                    <option value="sample">Culinary Sample Request (Trial Flat)</option>
                    <option value="retail-stockist">Retail Carton Shelf Stocking</option>
                  </select>
                </div>
              </div>

              {/* Egg Varieties of Interest */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-2">
                  Varieties of Interest (Select All That Apply):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3E3226]">
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
                      className="flex items-center gap-2 p-2 rounded-md bg-[#FAF4EB] border border-[#E5DAC8] cursor-pointer hover:bg-[#F2E8DA]"
                    >
                      <input
                        type="checkbox"
                        checked={formData.varieties.includes(variety)}
                        onChange={() => handleCheckboxChange(variety)}
                        className="rounded text-[#1F382B] focus:ring-[#1F382B]"
                      />
                      <span className="font-medium">{variety}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message / Delivery Notes */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#4A3D30] mb-1.5"
                >
                  Delivery Requirements & Questions
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Include preferred delivery days, dock access details, or specific culinary specifications..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D5C7B5] bg-[#FAF7F2] text-[#2C2723] text-sm focus:outline-none focus:ring-2 focus:ring-[#1F382B]"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-lg bg-[#1F382B] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#2A4D3B] transition shadow-sm"
                >
                  Submit Wholesale Inquiry
                </button>
                <p className="text-[11px] text-center text-[#857463] mt-2">
                  No credit card required. Informational wholesale catalog inquiry only.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* Right Column: Farm Information & Policies */}
        <div className="lg:col-span-5 space-y-6">
          {/* Direct Farm Information Box */}
          <div className="bg-[#FAF4EC] rounded-2xl border border-[#E2D6C6] p-6 sm:p-8 space-y-6">
            <h3 className="font-serif-farm text-xl font-bold text-[#1F382B] border-b border-[#DCD0BF] pb-3">
              Farm & Packing Shed Contacts
            </h3>

            <div className="space-y-4 text-xs text-[#524436]">
              <div>
                <strong className="block text-sm text-[#1F382B]">
                  Packing Facility & Dispatch Shed:
                </strong>
                <span>4180 Old Pasture Road, Millfield Valley, State 14850</span>
              </div>

              <div>
                <strong className="block text-sm text-[#1F382B]">
                  Wholesale Dispatch Phone:
                </strong>
                <span className="font-mono text-sm font-semibold text-[#1F382B]">
                  (555) 382-3447
                </span>
                <p className="text-[#7A6C5B]">Hours: Mon – Fri, 7:00 AM – 4:00 PM</p>
              </div>

              <div>
                <strong className="block text-sm text-[#1F382B]">
                  Wholesale Desk Email:
                </strong>
                <span className="font-mono text-sm font-semibold text-[#1F382B]">
                  orders@eggeat.local
                </span>
              </div>

              <div>
                <strong className="block text-sm text-[#1F382B]">
                  Farm Gate Honor Stand:
                </strong>
                <p>Open 7 Days a week &bull; Dawn to Dusk</p>
                <p className="text-[#7A6C5B]">
                  Cash, check, or Venmo honor payment on site.
                </p>
              </div>
            </div>
          </div>

          {/* Wholesale Logistics & Terms FAQ */}
          <div className="bg-[#FFFDFB] rounded-2xl border border-[#E2D6C6] p-6 sm:p-8 space-y-4">
            <h3 className="font-serif-farm text-lg font-bold text-[#1F382B]">
              Wholesale Terms & Protocols
            </h3>

            <div className="space-y-3 text-xs text-[#524436]">
              <div className="border-b border-[#ECE2D2] pb-2.5">
                <p className="font-bold text-[#1F382B]">Minimum Order Quantities:</p>
                <p className="text-[#695B4C]">
                  Direct van delivery requires a minimum of 2 half-cases (12 thirty-egg flats = 360 eggs) or 3 retail master cases.
                </p>
              </div>

              <div className="border-b border-[#ECE2D2] pb-2.5">
                <p className="font-bold text-[#1F382B]">Delivery Routes & Radius:</p>
                <p className="text-[#695B4C]">
                  Refrigerated transit within a 50-mile radius of Millfield Valley on scheduled Tuesday and Friday route runs.
                </p>
              </div>

              <div className="border-b border-[#ECE2D2] pb-2.5">
                <p className="font-bold text-[#1F382B]">Chef Culinary Trials:</p>
                <p className="text-[#695B4C]">
                  Executive chefs and head bakers can request a complimentary 30-egg sample flat for yolk emulsion and baking tests.
                </p>
              </div>

              <div>
                <p className="font-bold text-[#1F382B]">Billing & Invoicing:</p>
                <p className="text-[#695B4C]">
                  Net-30 billing available for established commercial accounts upon credit verification.
                </p>
              </div>
            </div>
          </div>

          {/* Retail Consumer Redirect */}
          <div className="bg-[#EAE2D5] rounded-xl p-5 border border-[#D5C9B7] text-xs space-y-2">
            <h4 className="font-bold text-[#1F382B] uppercase tracking-wider text-[11px]">
              Looking for Just a Carton or Two?
            </h4>
            <p className="text-[#594B3C]">
              We do not sell single retail dozens through this wholesale form. Please check our local farmers markets or partner grocers:
            </p>
            <Link
              href="/where-to-buy"
              className="inline-block font-bold text-[#1F382B] hover:text-[#D97706] underline"
            >
              View Farmers Markets & Grocery Stockists &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
