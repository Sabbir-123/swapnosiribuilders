"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface GalleryItem {
  id: number;
  title: string;
  category: "Exterior" | "Interior" | "Construction";
  image: string;
}

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<"All" | "Exterior" | "Interior" | "Construction">("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Swapnosiri Facade Dusk Splendor",
      category: "Exterior",
      image: "/images/SBL-VIEW-01.jpg",
    },
    {
      id: 2,
      title: "Swapnosiri Tower Daylight Elevation",
      category: "Exterior",
      image: "/images/SBL-VIEW-02.jpg",
    },
    {
      id: 3,
      title: "Swapnosiri Skyline Dusk Render",
      category: "Exterior",
      image: "/images/SBL-VIEW-03.jpg",
    },
    {
      id: 4,
      title: "Swapnosiri Tower Perspective Elevation",
      category: "Exterior",
      image: "/images/SBL-VIEW-04.jpg",
    },
    {
      id: 5,
      title: "Swapnosiri Grand Entrance Ground Level Close-up",
      category: "Exterior",
      image: "/images/SBL-VIEW-05.jpg",
    },
    {
      id: 6,
      title: "Swapnosiri Heights Side-Angle View",
      category: "Exterior",
      image: "/images/SBL-VIEW-06.jpg",
    },
    {
      id: 7,
      title: "Swapnosiri Tower Aerial Perspective",
      category: "Exterior",
      image: "/images/SBL-VIEW-07.jpg",
    },
    {
      id: 8,
      title: "Swapnosiri Heights Landscape Perspective",
      category: "Exterior",
      image: "/images/SBL-VIEW-08.jpg",
    },
    {
      id: 9,
      title: "Bespoke Royal Master Bedroom Suite",
      category: "Interior",
      image: "/images/BED.jpg",
    },
    {
      id: 10,
      title: "Grand Imperial Dining Hall",
      category: "Interior",
      image: "/images/DINING.jpg",
    },
    {
      id: 11,
      title: "Executive Family Lounge",
      category: "Interior",
      image: "/images/F.LIVING.jpg",
    },
    {
      id: 12,
      title: "State-of-the-Art Gourmet Kitchen",
      category: "Interior",
      image: "/images/KITCHEN.jpg",
    },
    {
      id: 13,
      title: "Polished Italian Marble Living Hall",
      category: "Interior",
      image: "/images/LIVING ROOM.jpg",
    },
    {
      id: 14,
      title: "Luxury Ensuite Spa Sanctuary",
      category: "Interior",
      image: "/images/TOILET.jpg",
    },
    {
      id: 15,
      title: "Seismic Soil-Structure Foundation Audits",
      category: "Construction",
      image: "/images/summer_time_render_2K_202605181722.jpg",
    },
    {
      id: 16,
      title: "Piling & Reinforced Framework Pits",
      category: "Construction",
      image: "/images/sbl_exterior_new.jpg",
    },
    {
      id: 17,
      title: "Ductile Reinforcement Cage Audits",
      category: "Construction",
      image: "/images/evening_render,_moving_car,_apartment_202605181711.jpg",
    },
  ];

  const filteredItems = galleryItems.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="space-y-12">
      {/* Category Filter Toolbar */}
      <ScrollReveal variant="fade-up" duration={0.8}>
        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {(["All", "Exterior", "Interior", "Construction"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gold text-white shadow-lg"
                  : "bg-[#140f2a]/80 border border-white/10 text-white hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </ScrollReveal>

      {/* Masonry Layout Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md group cursor-pointer border border-white/10 hover:border-gold/30 transition-all duration-300"
              onClick={() => setSelectedImageIndex(idx)}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Luxury gold hover vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="font-sans text-[10px] font-bold text-gold tracking-widest uppercase mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-white text-base font-medium tracking-wide">
                  {item.title}
                </h4>
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white bg-dark/30 hover:bg-gold hover:border-gold transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImageIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Gallery Slide Navigator */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl aspect-[16/10] overflow-hidden rounded-2xl shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                fill
                className="object-contain"
                priority
              />
              
              {/* Caption Overlay */}
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-dark to-transparent p-8 text-left">
                <span className="font-sans text-xs font-bold text-gold tracking-widest uppercase mb-1 block">
                  {filteredItems[selectedImageIndex].category}
                </span>
                <h3 className="font-serif text-white text-xl font-medium tracking-wide">
                  {filteredItems[selectedImageIndex].title}
                </h3>
              </div>
            </motion.div>

            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
