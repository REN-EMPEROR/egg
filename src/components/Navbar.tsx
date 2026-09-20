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
    <header className="sticky top-0 z-50 bg-white/97 backdrop-blur-md border-b border-eggshell-deep shadow-sm">
      {/* Yolk-yellow announcement banner */}
      <div className="bg-yolk text-charcoal text-xs font-semibold py-1.5 px-4 text-center">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="hidden sm:inline">
            🥚 Fresh pastured eggs collected daily in Millfield Valley
          </span>
          <span className="mx-auto sm:mx-0">
            Certified Humane &middot; 108+ Sq Ft Pasture Per Hen
          </span>
          <Link
            href="/where-to-buy"
            className="hidden md:inline text-charcoal hover:text-charcoal-mid underline font-bold transition"
          >
            Find in Local Markets &rarr;
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* Egg logo mark – yolk inside white circle */}
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm border-2 border-yolk group-hover:border-yolk-dark transition-colors">
              <div className="w-6 h-6 rounded-full bg-yolk group-hover:bg-yolk-dark transition-colors shadow-inner" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-farm text-xl sm:text-2xl font-bold tracking-tight text-charcoal leading-tight">
                eggeat
              </span>
              <span className="text-[11px] uppercase tracking-widest text-charcoal-light font-medium">
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
                      ? "text-charcoal bg-yolk-light font-bold border-b-2 border-yolk-dark"
                      : "text-charcoal-mid hover:text-charcoal hover:bg-yolk-xlight"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA – yolk yellow button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold tracking-wider uppercase rounded-full bg-yolk text-charcoal hover:bg-yolk-dark transition shadow-sm"
            >
              Wholesale Inquiry
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-charcoal-mid hover:text-charcoal hover:bg-yolk-xlight focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden border-t border-eggshell-deep bg-white px-4 pt-3 pb-5 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-semibold ${
                  active
                    ? "text-charcoal bg-yolk-light font-bold border-l-4 border-yolk-dark"
                    : "text-charcoal-mid hover:bg-yolk-xlight hover:text-charcoal"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-eggshell-deep">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center py-2.5 px-4 text-sm font-bold uppercase tracking-wider rounded-md bg-yolk text-charcoal hover:bg-yolk-dark transition"
            >
              Wholesale Inquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
