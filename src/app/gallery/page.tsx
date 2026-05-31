import React from "react";
import GallerySection from "@/components/ui/GallerySection";

export default function Gallery() {
  return (
    <div className="pt-24 bg-transparent">
      {/* Editorial Header Banner */}
      <section className="bg-navy-gradient text-white py-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left space-y-4">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase">
            SBL Captures
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            The Luxury Imagery Catalogue
          </h1>
          <p className="text-gray-300 font-sans text-sm md:text-base font-light max-w-xl leading-relaxed">
            A beautiful visual archive detailing our exterior renders, premium marble lobbies, and structural engineering grids.
          </p>
        </div>
      </section>

      {/* Expanded masonry gallery section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <GallerySection />
      </section>
    </div>
  );
}
