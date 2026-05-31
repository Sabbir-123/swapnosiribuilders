import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { SBL_NEWS } from "@/utils/data";

export default function News() {
  return (
    <div className="pt-24 bg-transparent">
      {/* Editorial Header Banner */}
      <section className="bg-navy-gradient text-white py-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left space-y-4">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase">
            Corporate Press
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            News & Construction Progress Log
          </h1>
          <p className="text-gray-300 font-sans text-sm md:text-base font-light max-w-xl leading-relaxed">
            Follow our structural safety updates, independent audits logs, and luxury developer insights.
          </p>
        </div>
      </section>

      {/* Magazine Editorial Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Headline Story (First Article) */}
          {SBL_NEWS.length > 0 && (
            <div className="lg:col-span-8 space-y-6 text-left">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-white/10 group">
                <Image
                  src={SBL_NEWS[0].image}
                  alt={SBL_NEWS[0].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute top-6 left-6 glassmorphism-light px-4 py-1.5 rounded-full text-xs font-sans font-bold text-white uppercase tracking-widest">
                  {SBL_NEWS[0].category}
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-gray-400 text-xs font-sans font-light">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-gold" />
                    {SBL_NEWS[0].publishDate}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gold" />
                    {SBL_NEWS[0].readTime}
                  </span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-white hover:text-gold transition-colors duration-300">
                  {SBL_NEWS[0].title}
                </h2>
                <p className="text-gray-300 font-sans text-sm leading-relaxed font-light">
                  {SBL_NEWS[0].content}
                </p>
              </div>
            </div>
          )}

          {/* Sidebar Grid (Remaining Articles) */}
          <div className="lg:col-span-4 space-y-8 text-left">
            <h3 className="font-serif text-lg font-bold text-white uppercase tracking-wider mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-gold" />
              Developer Insights
            </h3>
            
            <div className="space-y-8">
              {SBL_NEWS.slice(1).map((art) => (
                <div key={art.slug} className="group border-b border-white/10 pb-6 last:border-0 last:pb-0 space-y-3">
                  <div className="flex items-center gap-3 text-[10px] font-sans font-bold text-gold uppercase tracking-widest">
                    <span>{art.category}</span>
                    <span>•</span>
                    <span>{art.publishDate}</span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-white group-hover:text-gold transition-colors duration-300 leading-snug">
                    {art.title}
                  </h4>
                  <p className="text-gray-400 font-sans text-xs leading-relaxed font-light line-clamp-2">
                    {art.excerpt}
                  </p>
                  <p className="text-gray-300 font-sans text-xs leading-relaxed font-light pt-2 italic text-white/70 border-l-2 border-gold/45 pl-3">
                    {art.content.slice(0, 160)}...
                  </p>
                </div>
              ))}
            </div>

            {/* SBL Audit Highlight card */}
            <div className="bg-light p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="w-9 h-9 rounded-lg bg-gold/10 flex items-center justify-center text-gold border border-gold/15">
                <Sparkles className="w-5 h-5 text-gold" />
              </div>
              <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">Independent safety logs</h4>
              <p className="text-gray-400 font-sans text-xs font-light leading-relaxed">
                All structural concrete and steel deformed reinforcement certificates are archived and available for buyer verification at SBL head office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
