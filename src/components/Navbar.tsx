"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Eggs", href: "/eggs" },
    { name: "Where to Buy", href: "/where-to-buy" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && pathname !== "/") return false;
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E5DDD3] shadow-xs">
      {/* Top rustic announcement banner */}
      <div className="bg-[#1F382B] text-[#FAF7F2] text-xs font-medium py-1.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline">
            🥚 Fresh pastured eggs collected daily in Millfield Valley
          </span>
          <span className="mx-auto sm:mx-0">
            Certified Humane &middot; 108+ Sq Ft Pasture Per Hen
          </span>
          <Link
            href="/where-to-buy"
            className="hidden md:inline text-amber-300 hover:text-amber-200 underline font-semibold transition"
          >
            Find in Local Markets &rarr;
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-[#1F382B] flex items-center justify-center text-amber-400 shadow-inner group-hover:bg-[#2A4D3B] transition-colors border border-amber-600/30">
              {/* Rustic Rooster / Egg SVG */}
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3c-4.418 0-8 3.582-8 8 0 3.314 2.686 8 8 8s8-4.686 8-8c0-4.418-3.582-8-8-8z"
                />
                <circle cx="12" cy="11" r="3" fill="#F59E0B" stroke="none" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 6c-1 0-1.5-.5-1.5-1.2 0-.8.7-1.3 1.5-1.3.8 0 1.5.5 1.5 1.3 0 .7-.5 1.2-1.5 1.2z"
                  fill="#D97706"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-farm text-xl sm:text-2xl font-bold tracking-tight text-[#1F382B] group-hover:text-[#2A4D3B] transition-colors leading-tight">
                eggeat
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#786C5E] font-medium">
                Regenerative Farm &middot; Est. 1984
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-semibold transition-colors duration-150 ${
                    active
                      ? "text-[#1F382B] bg-[#EFE9E0] shadow-2xs font-bold border-b-2 border-[#1F382B]"
                      : "text-[#54483C] hover:text-[#1F382B] hover:bg-[#F3EDE4]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-[#1F382B] text-[#FAF7F2] hover:bg-[#2A4D3B] transition shadow-xs hover:shadow-sm"
            >
              Wholesale Inquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#54483C] hover:text-[#1F382B] hover:bg-[#EFE9E0] focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden border-t border-[#E5DDD3] bg-[#F7F2EB] px-4 pt-3 pb-5 space-y-2 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-semibold ${
                  active
                    ? "text-[#1F382B] bg-[#EAE2D5] font-bold border-l-4 border-[#1F382B]"
                    : "text-[#54483C] hover:bg-[#EAE2D5] hover:text-[#1F382B]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-[#E0D7C9]">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-2.5 px-4 text-sm font-bold uppercase tracking-wider rounded-md bg-[#1F382B] text-[#FAF7F2] hover:bg-[#2A4D3B]"
            >
              Wholesale Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
