"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { SBL_TESTIMONIALS } from "@/utils/data";

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SBL_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SBL_TESTIMONIALS.length) % SBL_TESTIMONIALS.length);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Quotation Icon Overlay background */}
      <div className="absolute -top-12 -left-12 opacity-5 text-gold hidden md:block">
        <Quote className="w-40 h-40" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-[#140f2a]/80 rounded-3xl p-8 md:p-12 shadow-xl border border-white/10 relative z-10 flex flex-col text-left"
        >
          {/* Review Stars */}
          <div className="flex items-center gap-1 mb-6">
            {[...Array(SBL_TESTIMONIALS[activeIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>

          {/* Review Text */}
          <p className="font-serif text-white text-lg md:text-xl leading-relaxed mb-8 italic">
            "{SBL_TESTIMONIALS[activeIndex].quote}"
          </p>

          <div className="flex flex-col md:flex-row md:items-center justify-between border-t border-white/10 pt-6 gap-4">
            {/* Bio info */}
            <div>
              <h4 className="font-serif text-base font-bold text-white">
                {SBL_TESTIMONIALS[activeIndex].name}
              </h4>
              <p className="text-gray-400 font-sans text-xs font-light">
                {SBL_TESTIMONIALS[activeIndex].designation}
                {SBL_TESTIMONIALS[activeIndex].company && ` at ${SBL_TESTIMONIALS[activeIndex].company}`}
              </p>
            </div>

            {/* Project bought indicator */}
            <div className="bg-gold/10 px-4 py-1.5 rounded-full border border-gold/25 self-start md:self-auto">
              <span className="font-sans text-[10px] font-bold text-gold uppercase tracking-widest">
                Owner: {SBL_TESTIMONIALS[activeIndex].projectBought.replace("Swapnosiri ", "")}
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-center gap-4 mt-8 relative z-20">
        <button
          onClick={handlePrev}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#140f2a]/80 text-white hover:bg-gold hover:border-gold hover:text-white transition-all shadow-md"
          aria-label="Previous Testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-1.5">
          {SBL_TESTIMONIALS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-350 ${
                activeIndex === idx ? "w-6 bg-gold" : "w-2 bg-white/20"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#140f2a]/80 text-white hover:bg-gold hover:border-gold hover:text-white transition-all shadow-md"
          aria-label="Next Testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
