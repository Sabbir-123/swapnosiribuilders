import React from "react";
import ProjectSection from "@/components/ui/ProjectSection";

export default function Projects() {
  return (
    <div className="pt-24 bg-transparent">
      {/* Editorial Header Banner */}
      <section className="bg-navy-gradient text-white py-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left space-y-4">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase">
            SBL Portfolios
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            Flagship Residential Developments
          </h1>
          <p className="text-gray-300 font-sans text-sm md:text-base font-light max-w-xl leading-relaxed">
            Discover our premier developments in Purbachal New Town and Jolshiri Abashon, built with pristine safety engineering standards.
          </p>
        </div>
      </section>

      {/* Projects catalogue section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <ProjectSection />
      </section>
    </div>
  );
}
