import React from "react";
import GallerySection from "@/components/ui/GallerySection";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Architecture Gallery | Swapnosiri Builders Ltd.",
  description: "A premium visual archive of SBL's exterior skyscraper facades, high-end lobby interiors, and reinforced concrete foundations.",
  keywords: [
    "SBL luxury imagery",
    "Dhaka premium penthouse gallery",
    "apartment lobby design Dhaka",
    "under-construction building photos Bangladesh",
    "skyscraper renders Dhaka"
  ]
};

export default function Gallery() {
  return (
    <div className="pt-24 bg-transparent">
      {/* Editorial Header Banner */}
      <section className="bg-navy-gradient text-white py-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
        <ScrollReveal variant="fade-up" duration={0.9} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left space-y-4">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase">
            SBL Captures
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            The Luxury Imagery Catalogue
          </h1>
          <p className="text-gray-300 font-sans text-sm md:text-base font-light max-w-xl leading-relaxed">
            A beautiful visual archive detailing our exterior renders, premium marble lobbies, and structural engineering grids.
          </p>
        </ScrollReveal>
      </section>

      {/* Expanded masonry gallery section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <ScrollReveal variant="scale-up" duration={0.9}>
          <GallerySection />
        </ScrollReveal>
      </section>
    </div>
  );
}
