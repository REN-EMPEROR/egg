import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#192D22] text-[#E7E2DB] border-t-4 border-[#D97706]">
      {/* Certification Strip */}
      <div className="border-b border-[#2A4737] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-6 text-center text-xs tracking-wider uppercase font-semibold text-[#B9CEBE]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            100% Pasture-Raised &middot; 108+ Sq. Ft. / Hen
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            Certified Humane Raised & Handled
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            Non-GMO Project Verified Grains
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            Daily Rotational Regenerative Grazing
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Col 1: About Farm */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 font-serif-farm text-xl font-bold">
                E
              </div>
              <span className="font-serif-farm text-xl font-bold text-white tracking-wide">
                eggeat
              </span>
            </div>
            <p className="text-sm text-[#B4C4B8] leading-relaxed">
              Family-owned regenerative poultry farm nestled in Millfield Valley. We cultivate healthy soils, happy hens, and rich golden yolks with deep respect for natural rhythms.
            </p>
            <div className="text-xs text-amber-400/90 font-mono">
              USDA Est. #VA-1485 &middot; Food Safety Certified
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif-farm text-base font-bold text-white tracking-wider mb-4 uppercase">
              Digital Catalog
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500 text-xs">&rsaquo;</span> Home & Farm Philosophy
                </Link>
              </li>
              <li>
                <Link
                  href="/eggs"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500 text-xs">&rsaquo;</span> Egg Varieties & Grades
                </Link>
              </li>
              <li>
                <Link
                  href="/where-to-buy"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500 text-xs">&rsaquo;</span> Markets & Grocery Stockists
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="text-amber-500 text-xs">&rsaquo;</span> Wholesale & Chef Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Farm Gate & Contact */}
          <div>
            <h3 className="font-serif-farm text-base font-bold text-white tracking-wider mb-4 uppercase">
              Farm Gate & Hours
            </h3>
            <div className="space-y-2.5 text-sm text-[#B4C4B8]">
              <p>
                <strong className="text-[#FAF7F2] block">Honor Farm Stand:</strong>
                4180 Old Pasture Road, Millfield Valley
                <br />
                <span className="text-xs text-amber-300">Open Daily &bull; Dawn to Dusk</span>
              </p>
              <p className="pt-1">
                <strong className="text-[#FAF7F2] block">Wholesale Dispatch:</strong>
                orders@eggeat.local
                <br />
                (555) 382-3447 (Mon-Fri 7am - 4pm)
              </p>
            </div>
          </div>

          {/* Col 4: Informational Notice */}
          <div className="bg-[#122219] p-5 rounded-lg border border-[#254231] space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Notice for Visitors & Partners
            </h3>
            <p className="text-xs text-[#A8BEAF] leading-relaxed">
              This is an informational digital catalog. eggeat does not process consumer transactions, shopping carts, or online payments through this website.
            </p>
            <p className="text-xs text-[#A8BEAF] leading-relaxed">
              To purchase our eggs, please visit our partner grocery stores, local farmers markets, or submit a wholesale requisition for restaurant and foodservice distribution.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[#263E30] flex flex-col sm:flex-row items-center justify-between text-xs text-[#8DA093] gap-4">
          <p>&copy; {new Date().getFullYear()} eggeat LLC. All rights reserved.</p>
          <p className="flex items-center gap-4">
            <span>Regenerative Agriculture</span>
            <span>&bull;</span>
            <span>Uncaged, Pasture-Raised Poultry</span>
            <span>&bull;</span>
            <span>Local Food Stewardship</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
