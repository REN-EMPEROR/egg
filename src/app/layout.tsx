import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "eggeat | Farm-Fresh Pasture-Raised Chicken Eggs",
  description:
    "Informational catalog for eggeat. Family-owned regenerative farm offering pasture-raised, organic, and wholesale eggs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      {/* eggwhite background + charcoal text for every page */}
      <body className="min-h-full flex flex-col bg-eggwhite text-charcoal antialiased selection:bg-yolk selection:text-charcoal">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
