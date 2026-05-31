import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Building2, 
  ShieldCheck, 
  Wind, 
  Award, 
  Users, 
  CheckCircle2, 
  Clock, 
  ArrowUpRight, 
  HardHat, 
  Gauge, 
  FlameKindling, 
  Search, 
  MapPin, 
  ArrowRight,
  Phone,
  MessageSquare,
  Sparkles
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import HeroSection from "@/components/ui/HeroSection";
import ProjectSection from "@/components/ui/ProjectSection";
import GallerySection from "@/components/ui/GallerySection";
import TestimonialSection from "@/components/ui/TestimonialSection";
import InquiryForm from "@/components/ui/InquiryForm";
import BlueprintCanvas from "@/components/ui/BlueprintCanvas";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SBL_SERVICES, SBL_NEWS } from "@/utils/data";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION */}
      {/* ========================================================================= */}
      <HeroSection />

      {/* ========================================================================= */}
      {/* SECTION 2: COMPANY INTRODUCTION */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#0e0b1f]/80 relative overflow-hidden border-b border-white/5">
        {/* Subtle grid background and 3D architectural particle blueprint */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <BlueprintCanvas />

        {/* Ambient Gold glow reflection */}
        <div className="absolute w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,160,23,0.06)_0%,transparent_70%)] blur-3xl -left-64 top-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Visual Column */}
            <ScrollReveal variant="fade-right" duration={0.9} className="lg:col-span-5 w-full">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border-2 border-white/10 group shadow-luxury-glow">
                <Image
                  src="/images/luxury_lobby.png"
                  alt="Swapnosiri Luxury Lobby Interior"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-103"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b1f]/80 to-transparent pointer-events-none" />
                <div className="absolute bottom-8 left-8 right-8 text-left bg-[#140f2a]/70 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                  <span className="font-serif text-gold text-lg font-bold block mb-1 uppercase tracking-wider">Architectural Excellence</span>
                  <span className="text-gray-200 text-xs font-sans font-light leading-relaxed">Collating international marble inlays, smart high-ceiling structures, and sustainable safety cores.</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Context Column */}
            <ScrollReveal variant="fade-left" duration={0.9} delay={0.15} className="lg:col-span-7 w-full">
              <div className="flex flex-col items-start text-left space-y-8">
                <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase">
                  Welcome to Swapnosiri Builders Ltd.
                </span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black text-white leading-tight uppercase tracking-tight">
                  Crafting Prestigious Residences Built for Generations
                </h2>
                <p className="text-gray-300 font-sans text-base font-light leading-relaxed">
                  Guided by integrity, innovation, and state-of-the-art engineering, Swapnosiri Builders Ltd. has established itself as an elite residential developer in Bangladesh. Our projects in Purbachal New Town and Jolshiri Abashon showcase high-end structural safety coupled with cinematic luxury formats.
                </p>
                <p className="text-gray-400 font-sans text-sm font-light leading-relaxed">
                  Every brick laid and beam cast reflects our meticulous engineering rigor. Compliant with the ultimate BNBC structural policies, we implement advanced earthquake ductile steel frame detailing and aerodynamic structures tested against the most severe 225 km/h tropical winds, giving our prestigious buyers absolute peace of mind.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-4 w-full border-t border-white/10">
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">100% Transparency</h4>
                      <p className="text-gray-400 text-xs font-sans font-light mt-0.5">Real-time digital audits and certificates.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">On-Time Delivery</h4>
                      <p className="text-gray-400 text-xs font-sans font-light mt-0.5">Prompt project handover with full accountability.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Link
                    href="/about"
                    className="font-sans text-xs font-bold tracking-widest text-white hover:text-gold uppercase flex items-center gap-1 group/link"
                  >
                    Our Corporate Journey
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: STATISTICS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-[#0a0818]/75 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal variant="scale-up" duration={0.9}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <div className="flex flex-col items-center justify-center text-center space-y-2 border-r border-white/5 last:border-0">
                <AnimatedCounter value={5} suffix="+" />
                <span className="text-gray-400 font-sans text-xs uppercase tracking-widest">Premium Projects</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-2 border-r border-white/5 last:border-0">
                <AnimatedCounter value={120} suffix="+" />
                <span className="text-gray-400 font-sans text-xs uppercase tracking-widest">Prestigious Clients</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-2 border-r border-white/5 last:border-0">
                <AnimatedCounter value={3} suffix="+" />
                <span className="text-gray-400 font-sans text-xs uppercase tracking-widest">Years Experience</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center space-y-2 border-r border-white/5 last:border-0">
                <AnimatedCounter value={100} suffix="%" />
                <span className="text-gray-400 font-sans text-xs uppercase tracking-widest">BNBC Compliant</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: WHY CHOOSE US */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#110d24]/75 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase block mb-3">
              Why Swapnosiri
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black text-white mb-16 max-w-3xl mx-auto uppercase tracking-tight">
              Setting Uncompromising Benchmarks in Luxury Development
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "BNBC Compliance",
                desc: "Fully compliant structural designs under structural frameworks of the Bangladesh National Building Code.",
                icon: ShieldCheck
              },
              {
                title: "Premium Materials",
                desc: "We exclusively buy elite BSRM 500W steel reinforcement bars and premium cement (Lafarge/Holcim).",
                icon: HardHat
              },
              {
                title: "Earthquake Protection",
                desc: "Robust seismic shear joints detailed to absorb and secure the vertical frame against intense seismic forces.",
                icon: Award
              },
              {
                title: "225 km/h Wind Shield",
                desc: "Structural frame analysis engineered to safely buffer high-force tropical cyclonic winds up to 225 km/h.",
                icon: Wind
              },
              {
                title: "Experienced Engineers",
                desc: "Supervised 24/7 by structural experts and civil engineer veterans with over 15 years in high-rise works.",
                icon: Users
              },
              {
                title: "Transparent Handover",
                desc: "Full open access to material lab certificates, structural calculations, and digital updates.",
                icon: Clock
              },
              {
                title: "Modern Architecture",
                desc: "High-glass facades, high double-height entryways, and premium marble finishes (Apple style minimalism).",
                icon: Building2
              },
              {
                title: "Customer-Centric service",
                desc: "Personal relationship managers coordinate all layout customizations and legal transactions smoothly.",
                icon: CheckCircle2
              }
            ].map((card, idx) => (
              <ScrollReveal 
                key={idx}
                variant="fade-up"
                delay={(idx % 4) * 0.1}
                duration={0.8}
              >
                <div className="bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl border border-white/8 hover:border-gold/30 hover:shadow-gold-glow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center border border-gold/15">
                      <card.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wide">{card.title}</h4>
                    <p className="text-gray-400 font-sans font-light text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: FEATURED PROJECTS */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#0e0b1f]/70 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
              <div>
                <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase block mb-3">
                  Flagship Portfolios
                </span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black text-white max-w-2xl uppercase tracking-tight">
                  Showcasing Architectural Grandeur in Premier Areas
                </h2>
              </div>
              <Link
                href="/projects"
                className="px-6 py-3.5 border border-gold/40 bg-gold/5 hover:bg-gold hover:text-white text-gold rounded-lg font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-gold-glow hover:-translate-y-0.5 self-start md:self-auto flex items-center gap-2 shrink-0"
                style={{
                  boxShadow: "0 0 15px rgba(212, 160, 23, 0.15)"
                }}
              >
                All Projects Catalogue
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="scale-up" duration={0.9} delay={0.15}>
            <ProjectSection />
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: SERVICES */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#140f2a]/70 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase block mb-3">
              Core Competencies
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black text-white mb-16 max-w-3xl mx-auto uppercase tracking-tight">
              Comprehensive Real Estate & Quality Structural Services
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {SBL_SERVICES.map((serv, idx) => (
              <ScrollReveal 
                key={serv.id}
                variant="fade-up"
                delay={idx * 0.1}
                duration={0.8}
              >
                <div className="bg-white/[0.02] backdrop-blur-md p-8 rounded-2xl border border-white/8 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-gold">
                      {serv.iconName === "building" && <Building2 className="w-5 h-5" />}
                      {serv.iconName === "shield" && <ShieldCheck className="w-5 h-5" />}
                      {serv.iconName === "award" && <Award className="w-5 h-5" />}
                      {serv.iconName === "compass" && <Wind className="w-5 h-5" />}
                    </div>
                    <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wide">{serv.title}</h4>
                    <p className="text-gray-300 font-sans font-light text-xs leading-relaxed">{serv.description}</p>
                  </div>
                  <Link
                    href="/services"
                    className="font-sans text-[10px] font-bold tracking-widest text-gold hover:text-white uppercase pt-6 inline-flex items-center gap-1 group/serv-link mt-4"
                  >
                    Read More
                    <ArrowRight className="w-3.5 h-3.5 group-hover/serv-link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: CONSTRUCTION QUALITY */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#0a0818]/75 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Details */}
            <ScrollReveal variant="fade-right" duration={0.9} className="lg:col-span-7 w-full order-2 lg:order-1">
              <div className="flex flex-col items-start text-left space-y-6">
                <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase">
                  Engineering Rigor
                </span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black text-white leading-tight uppercase tracking-tight">
                  Zero Tolerance on Building Structural Safety
                </h2>
                <p className="text-gray-300 font-sans text-base font-light leading-relaxed">
                  At Swapnosiri Builders Ltd., structural safety forms the primary core of our business architecture. We follow a highly calculated, multi-stage inspection procedure starting from soil investigations to structural frame delivery.
                </p>

                <div className="space-y-4 w-full pt-4 border-t border-white/10">
                  {[
                    {
                      title: "BNBC 2020 Codal Compliance",
                      desc: "Rigid design protocols adhering to extreme shear, axial, and bending limits specified in latest national building codes."
                    },
                    {
                      title: "Zone 2 Seismic Ductility Detailing",
                      desc: "Specially designed column-beam confinement zones with closely spaced high-grade steel rings to absorb seismic movements without shear collapses."
                    },
                    {
                      title: "Dynamic Wind Shear Anchors",
                      desc: "Tested to resist a high velocity of 225 km/h wind shear forces, securing all cladding, structural framework, and premium double-glass panels."
                    }
                  ].map((spec, idx) => (
                    <div key={idx} className="flex gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="w-7 h-7 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 font-sans font-bold text-xs mt-1">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider">{spec.title}</h4>
                        <p className="text-gray-400 text-xs font-sans font-light mt-0.5">{spec.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Visual Skyscraper Structure Render */}
            <ScrollReveal variant="fade-left" duration={0.9} delay={0.15} className="lg:col-span-5 w-full order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-luxury-glow bg-[#0e0b1f]">
                {/* Dynamic canvas structural render coordinate drawing */}
                <div className="absolute inset-0 bg-blueprint-grid opacity-[0.08] pointer-events-none" />
                <BlueprintCanvas />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white z-10">
                  <div className="border border-gold/20 p-10 rounded-2xl bg-[#0e0b1f]/70 backdrop-blur-md max-w-sm space-y-6">
                    <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold mx-auto bg-[#0e0b1f]/60">
                      <ShieldCheck className="w-6 h-6 animate-pulse" />
                    </div>
                    <h3 className="font-serif text-lg font-bold uppercase tracking-wider text-luxury-gradient">BNBC Approved Frame</h3>
                    <div className="h-[1px] bg-gold/30 w-16 mx-auto" />
                    <p className="text-gray-300 font-sans text-xs font-light leading-relaxed">
                      Finite element calculations certified against intense wind speed (225 km/h) and earthquake ductility configurations.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8: CEO MESSAGE */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#110d24]/75 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* CEO Image */}
            <ScrollReveal variant="fade-right" duration={0.9} className="lg:col-span-4 w-full">
              <div className="relative aspect-square md:aspect-[4/5] lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-luxury-glow group border-2 border-gold/25">
                <Image
                  src="/images/ceo_portrait.png"
                  alt="Md. Shahbuddin CEO Swapnosiri Builders Ltd"
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover transition-transform duration-750 group-hover:scale-102"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0b1f]/90 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-left">
                  <span className="font-serif text-white text-lg font-bold block">Md. Shahbuddin</span>
                  <span className="text-gold text-xs font-sans font-medium uppercase tracking-widest">Chief Executive Officer</span>
                </div>
              </div>
            </ScrollReveal>

            {/* CEO Quote Message */}
            <ScrollReveal variant="fade-left" duration={0.9} delay={0.15} className="lg:col-span-8 w-full">
              <div className="flex flex-col items-start text-left space-y-6">
                <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase">
                  A Message from Our CEO
                </span>
                <h3 className="font-serif text-2xl md:text-3xl lg:text-[34px] font-bold text-white leading-snug">
                  "At Swapnosiri Builders Ltd., our mission is simple — to build quality homes with honesty, care, and commitment. Thank you for trusting us."
                </h3>
                
                <div className="h-[1px] bg-gold/30 w-24 my-2" />

                <p className="text-gray-300 font-sans text-base font-light leading-relaxed">
                  When SBL was founded in 2023, our vision was to establish an elite benchmark in the real estate sectors of Bangladesh. I have always believed that a home is more than just concrete and steel; it is a repository of dreams, security, and hard-earned values. That is why SBL never cuts corners.
                </p>
                <p className="text-gray-400 font-sans text-sm font-light leading-relaxed">
                  We partner only with premium material producers, veteran architects, and structural safety engineers to guarantee every single building is structurally resilient, BNBC compliant, and aesthetic. Our promise is simple—honesty in every cubic foot, transparency in every legal deed, and premium luxury as a standard.
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <div className="flex flex-col">
                    <span className="font-serif text-white font-bold text-base">Md. Shahbuddin</span>
                    <span className="text-gray-400 text-xs font-sans font-light">CEO, Swapnosiri Builders Ltd.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 9: GALLERY */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#0e0b1f]/70 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase block mb-3">
              Luxury Gallery
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black text-white mb-16 max-w-3xl mx-auto uppercase tracking-tight">
              A Visual Journey of SBL Architectural Masterpieces
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="scale-up" duration={0.9} delay={0.15}>
            <GallerySection />
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 10: TESTIMONIALS */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#140f2a]/70 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase block mb-3">
              Client Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black text-white mb-16 max-w-3xl mx-auto uppercase tracking-tight">
              Trusted by Dhaka's Most Discerning Homeowners
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="scale-up" duration={0.9} delay={0.15}>
            <TestimonialSection />
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 11: NEWS & UPDATES */}
      {/* ========================================================================= */}
      <section className="py-32 bg-[#0a0818]/75 relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.03] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
              <div>
                <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase block mb-3">
                  Editorial Insights
                </span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black text-white max-w-2xl uppercase tracking-tight leading-tight">
                  Stay Updated with SBL Construction Progress & Insights
                </h2>
              </div>
              <Link
                href="/news"
                className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest text-white hover:text-gold uppercase group/insights"
              >
                All Articles
                <ArrowRight className="w-4 h-4 group-hover/insights:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {SBL_NEWS.map((art, idx) => (
              <ScrollReveal 
                key={art.slug}
                variant="fade-up"
                delay={idx * 0.1}
                duration={0.8}
              >
                <div className="bg-white/[0.02] backdrop-blur-md rounded-3xl overflow-hidden border border-white/8 hover:border-gold/30 hover:shadow-gold-glow hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={art.image}
                        alt={art.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 glassmorphism-light px-3 py-1 rounded-full text-[10px] font-sans font-bold text-white uppercase tracking-widest">
                        {art.category}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 space-y-4">
                      <div className="flex items-center gap-4 text-gray-400 text-xs font-sans font-light">
                        <span>{art.publishDate}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h4 className="font-serif text-white text-lg font-bold leading-snug hover:text-gold transition-colors duration-300 uppercase tracking-wide">
                        <Link href={`/news`}>{art.title}</Link>
                      </h4>
                      <p className="text-gray-400 font-sans text-xs leading-relaxed font-light">{art.excerpt}</p>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 pt-0 mt-auto border-t border-white/10 flex justify-between items-center">
                    <Link
                      href={`/news`}
                      className="font-sans text-[10px] font-bold tracking-widest text-white hover:text-gold uppercase flex items-center gap-1 group/news-btn"
                    >
                      Read Full Article
                      <ArrowRight className="w-3.5 h-3.5 group-hover/news-btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 12: CONTACT CTA BANNER */}
      {/* ========================================================================= */}
      <section className="py-32 bg-navy-gradient text-white relative overflow-hidden">
        {/* Structural grids and particle background */}
        <div className="absolute inset-0 bg-blueprint-grid opacity-[0.04] pointer-events-none" />
        <BlueprintCanvas />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Context */}
            <ScrollReveal variant="fade-right" duration={0.9} className="lg:col-span-6 w-full">
              <div className="text-left space-y-6">
                <span className="font-sans text-xs font-bold text-gold tracking-[0.3em] uppercase">
                  Let's Build Together
                </span>
                <h2 className="font-serif text-3xl md:text-5xl lg:text-[52px] font-black leading-tight uppercase tracking-tight">
                  Let's Build Your Dream Home Together
                </h2>
                <p className="text-gray-300 font-sans text-base font-light leading-relaxed">
                  Ready to secure an elite premium home in Purbachal New Town or Jolshiri Abashon? Fill out our luxury multi-step inquiry portal, and one of our dedicated architectural relationship managers will coordinate an online or offline consultation with you.
                </p>

                <div className="flex flex-col gap-4 pt-4 text-sm font-sans font-light">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-gold/20 bg-[#1e1740] flex items-center justify-center">
                      <Phone className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs block">Direct Phone Consultation</span>
                      <a href="tel:+8801759983983" className="text-white hover:text-gold transition-colors font-semibold">+8801759983983</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border border-gold/20 bg-[#1e1740] flex items-center justify-center">
                      <MessageSquare className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <span className="text-gray-400 text-xs block">WhatsApp Real-Time Chat</span>
                      <a href="https://wa.me/8801759983983" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors font-semibold">Message SBL Consultants</a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Premium Inquiry Form Card */}
            <ScrollReveal variant="scale-up" duration={0.9} delay={0.15} className="lg:col-span-6 w-full max-w-xl mx-auto shadow-luxury-glow rounded-2xl">
              <InquiryForm />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
