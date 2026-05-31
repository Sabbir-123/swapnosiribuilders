import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Target, Eye, Users, Award, Hammer, Trophy, TrendingUp, Sparkles, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function About() {
  const coreValues = [
    {
      title: "Integrity Above All",
      desc: "We maintain absolute transparency across our structural calculations, blueprint specs, material certifications, and legal transactions.",
      icon: ShieldCheck
    },
    {
      title: "Engineering Excellence",
      desc: "Our engineering operations maintain a strict zero-tolerance code compliance policy, implementing high-confinement ductile details.",
      icon: Hammer
    },
    {
      title: "Customer-Centric Care",
      desc: "Every buyer receives bespoke customer relation support, coordinating layout custom adjustments and handover updates.",
      icon: Users
    },
    {
      title: "Innovation & Design",
      desc: "Collaborating with elite visual architects to construct smart houses featuring green roofs, solar grids, and EV portals.",
      icon: Sparkles
    }
  ];

  const timelineEvents = [
    {
      year: "2023",
      title: "The Inception of SBL",
      desc: "Swapnosiri Builders Ltd. was established under corporate license by MD. Shahbuddin, with a vision to construct elite secure homes in Purbachal New Town.",
      icon: Trophy
    },
    {
      year: "2024",
      title: "Acquiring Flagship Plots",
      desc: "Acquired prime Sector 15 and Jolshiri Abashon plots, launching the structural engineering planning for SBL's flagship Heights project.",
      icon: TrendingUp
    },
    {
      year: "2025",
      title: "Outperforming Industry handovers",
      desc: "Delivered Swapnosiri Purbachal Skyline ahead of schedule with 100% independent BNBC safety test clears and zero site accidents.",
      icon: Award
    },
    {
      year: "2026",
      title: "Launching Green Residences",
      desc: "Pioneered smart structural green layouts with solar offsets and wind-tunnel simulations in Jolshiri Abashon residential sectors.",
      icon: Target
    }
  ];

  return (
    <div className="pt-24 bg-transparent">
      {/* Editorial Header Banner */}
      <section className="bg-navy-gradient text-white py-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
        <ScrollReveal variant="fade-up" duration={0.9} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left space-y-4">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase">
            About Our Brand
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            Crafting Structural Excellence & Uncompromised Safety
          </h1>
          <p className="text-gray-300 font-sans text-sm md:text-base font-light max-w-xl leading-relaxed">
            Swapnosiri Builders Ltd. represents the peak of elite residential construction in Dhaka's premier modern smart sectors.
          </p>
        </ScrollReveal>
      </section>

      {/* Company Overview Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <ScrollReveal variant="fade-right" duration={0.9} className="lg:col-span-6 w-full">
            <div className="relative aspect-video md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
              <Image
                src="/images/luxury_lobby.png"
                alt="SBL Premium marble lobby"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="fade-left" duration={0.9} delay={0.15} className="lg:col-span-6 w-full text-left space-y-6">
            <div>
              <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase">
                Company Overview
              </span>
              <h2 className="font-serif text-3xl font-extrabold text-white mt-2">
                Integrity, Professionalism, and Superior Construction Detailing
              </h2>
              <p className="text-gray-300 font-sans text-sm md:text-base font-light leading-relaxed mt-4">
                Founded in 2023, Swapnosiri Builders Ltd. has maintained an unwavering dedication to quality. Focusing our development energies strictly in the smart sectors of Purbachal New Town and Jolshiri Abashon, we construct residential assets that function as generational wealth vaults.
              </p>
              <p className="text-gray-400 font-sans text-sm font-light leading-relaxed mt-4">
                Our developments combine premium aesthetics with maximum engineering safety compliance. Collaborating strictly with premier construction laboratories and steel manufacturers, SBL guarantees robust, BNBC-compliant wind and earthquake resistant structures.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-[#140f2a]/25 backdrop-blur-[2px] relative border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {/* Mission */}
            <ScrollReveal variant="fade-right" duration={0.9} className="w-full">
              <div className="bg-[#1e1740]/80 p-8 md:p-12 rounded-3xl border border-white/10 shadow-md flex flex-col space-y-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold border border-gold/15 shrink-0">
                  <Target className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wide">Our Mission</h3>
                <p className="text-gray-300 font-sans text-sm font-light leading-relaxed">
                  To develop modern, highly sustainable, and elite residential buildings that deliver comfort, safety, and long-term investment value, while maintaining absolute transparent communications, premium material sourcing, and timely project delivery.
                </p>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal variant="fade-left" duration={0.9} delay={0.15} className="w-full">
              <div className="bg-[#1e1740]/80 p-8 md:p-12 rounded-3xl border border-white/10 shadow-md flex flex-col space-y-6 h-full">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold border border-gold/15 shrink-0">
                  <Eye className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white uppercase tracking-wide">Our Vision</h3>
                <p className="text-gray-300 font-sans text-sm font-light leading-relaxed">
                  To become one of the most trusted and leading luxury real estate developers in Bangladesh, setting new international safety benchmarks in structural quality control, architectural innovation, custom buyer satisfaction, and ethical business conduct.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <ScrollReveal variant="fade-up" duration={0.8}>
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block mb-3">
            Our Brand Pillars
          </span>
          <h2 className="font-serif text-3xl font-extrabold text-white mb-16">
            The SBL Core Values Dictating Every Project
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
          {coreValues.map((val, idx) => (
            <ScrollReveal 
              key={idx}
              variant="fade-up"
              delay={idx * 0.1}
              duration={0.8}
            >
              <div className="bg-[#140f2a]/80 p-6 rounded-2xl border border-white/10 hover:shadow-lg hover:border-gold/30 transition-all duration-300 h-full">
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold mb-6 border border-gold/15">
                  <val.icon className="w-5 h-5 text-gold" />
                </div>
                <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wide mb-3">{val.title}</h4>
                <p className="text-gray-400 font-sans text-xs leading-relaxed font-light">{val.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CEO Message Section (Condensed/Editorial) */}
      <section className="py-24 bg-navy text-white relative">
        <div className="absolute inset-0 bg-dot-grid opacity-15 pointer-events-none" />
        <ScrollReveal variant="scale-up" duration={0.9} className="max-w-5xl mx-auto px-6 text-center relative z-10 space-y-8">
          <QuoteIcon className="w-16 h-16 text-gold mx-auto opacity-35" />
          <h3 className="font-serif text-2xl md:text-3xl font-medium italic leading-relaxed">
            "At Swapnosiri Builders Ltd., we do not build for today. We construct safety vaults designed to shield your families from natural forces, crafted with pristine integrity, and built to stand tall for generations."
          </h3>
          <div className="space-y-1">
            <h4 className="font-serif text-gold text-lg font-bold">Md. Shahbuddin</h4>
            <p className="text-gray-400 font-sans text-xs uppercase tracking-widest">Chief Executive Officer</p>
          </div>
        </ScrollReveal>
      </section>

      {/* Company Journey (Interactive Timeline Grid) */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block mb-3">
              Company Journey
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-white mb-16">
              Visual Milestones of Architectural Accomplishment
            </h2>
          </ScrollReveal>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline center line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1.5px] bg-gold/30 hidden md:block" />

            <div className="space-y-12">
              {timelineEvents.map((ev, idx) => (
                <ScrollReveal 
                  key={idx}
                  variant={idx % 2 === 0 ? "fade-left" : "fade-right"}
                  duration={0.85}
                  delay={(idx % 2) * 0.1}
                >
                  <div 
                    className={`flex flex-col md:flex-row items-center gap-8 md:gap-0 ${
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content block */}
                    <div className="w-full md:w-[45%] text-left">
                      <div className="bg-[#140f2a]/80 p-6 rounded-2xl border border-white/10 shadow-sm space-y-3">
                        <span className="font-serif text-xl font-bold text-gold">{ev.year}</span>
                        <h4 className="font-serif text-base font-bold text-white">{ev.title}</h4>
                        <p className="text-gray-400 font-sans text-xs font-light leading-relaxed">{ev.desc}</p>
                      </div>
                    </div>

                    {/* Bullet node */}
                    <div className="relative z-10 w-10 h-10 rounded-full border-2 border-gold bg-[#1e1740] flex items-center justify-center text-gold shrink-0">
                      <ev.icon className="w-4 h-4" />
                    </div>

                    {/* Empty spacer block for alignment */}
                    <div className="hidden md:block w-[45%]" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
