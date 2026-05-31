import React from "react";
import { 
  Building2, 
  ShieldCheck, 
  Wind, 
  Award, 
  HardHat, 
  Clock, 
  Search, 
  LineChart, 
  Compass, 
  CheckCircle,
  FileCheck
} from "lucide-react";
import { SBL_SERVICES } from "@/utils/data";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Services() {
  const steps = [
    {
      step: "01",
      title: "Geotechnical Soil Study",
      desc: "Detailed soil test drillings and load-bearing calculations conducted by reputable laboratories to structure SBL piling.",
      icon: Search
    },
    {
      step: "02",
      title: "Finite Element Flex Design",
      desc: "3D CAD finite element modeling to simulate severe lateral wind speeds (225 km/h) and earthquake ductility confinement joints.",
      icon: Compass
    },
    {
      step: "03",
      title: "Strict Material Sourcing",
      desc: "Contracting directly with top-tier steel deformed bars (BSRM Grade 500W) and premium Portland cement matrices.",
      icon: HardHat
    },
    {
      step: "04",
      title: "Cylinder Crushing Audits",
      desc: "Performing rigorous daily ready-mix concrete pouring cylinder audits to verify compressive PSI matches high specification standards.",
      icon: LineChart
    },
    {
      step: "05",
      title: "Ductile Detailing Integration",
      desc: "Careful laying of structural reinforcement joints conforming fully to the latest BNBC structural confinement zones.",
      icon: Award
    },
    {
      step: "06",
      title: "Key Handover & Documents",
      desc: "Delivering complete digital manuals holding concrete tests log, piping maps, steel grade certificates, and keys.",
      icon: FileCheck
    }
  ];

  return (
    <div className="pt-24 bg-transparent">
      {/* Editorial Header Banner */}
      <section className="bg-navy-gradient text-white py-20 relative">
        <div className="absolute inset-0 bg-dot-grid opacity-25 pointer-events-none" />
        <ScrollReveal variant="fade-up" duration={0.9} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left space-y-4">
          <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase">
            Our Disciplines
          </span>
          <h1 className="font-serif text-4xl md:text-5xl font-black max-w-3xl leading-tight">
            High-End Construction & Safety Engineering
          </h1>
          <p className="text-gray-300 font-sans text-sm md:text-base font-light max-w-xl leading-relaxed">
            From geotechnical foundations to custom finishing joinery, SBL delivers uncompromising quality standard.
          </p>
        </ScrollReveal>
      </section>

      {/* Main Services Deep Dive Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-24">
        {SBL_SERVICES.map((serv, idx) => (
          <div 
            key={serv.id} 
            className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-b border-white/10 pb-20 last:border-0 last:pb-0 ${
              idx % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Context Column */}
            <ScrollReveal 
              variant={idx % 2 === 1 ? "fade-left" : "fade-right"} 
              duration={0.9} 
              className={`lg:col-span-7 w-full text-left space-y-6 ${idx % 2 === 1 ? "lg:order-2" : ""}`}
            >
              <div>
                <div className="inline-flex items-center gap-2 text-gold">
                  {serv.iconName === "building" && <Building2 className="w-5 h-5 text-gold shrink-0" />}
                  {serv.iconName === "shield" && <ShieldCheck className="w-5 h-5 text-gold shrink-0" />}
                  {serv.iconName === "award" && <Award className="w-5 h-5 text-gold shrink-0" />}
                  {serv.iconName === "compass" && <Wind className="w-5 h-5 text-gold shrink-0" />}
                  <span className="font-sans text-xs font-bold uppercase tracking-wider">Service Overview</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-extrabold text-white leading-snug mt-3">
                  {serv.title}
                </h2>
                <p className="text-gray-300 font-sans text-sm md:text-base font-light leading-relaxed mt-4">
                  {serv.detailedDescription}
                </p>

                <div className="space-y-3 pt-4">
                  <h4 className="font-serif text-xs font-bold text-white uppercase tracking-wider">Core Quality Benefits</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    {serv.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 bg-[#140f2a]/80 p-3 rounded-lg border border-white/10">
                        <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                        <span className="text-white font-sans text-xs font-medium">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Visual Spacer block */}
            <ScrollReveal 
              variant={idx % 2 === 1 ? "fade-right" : "fade-left"} 
              duration={0.9} 
              delay={0.15}
              className={`lg:col-span-5 w-full bg-[#140f2a]/80 p-8 rounded-3xl border border-white/10 text-left space-y-6 ${idx % 2 === 1 ? "lg:order-1" : ""}`}
            >
              <div>
                <span className="font-sans text-[10px] font-bold text-gold tracking-widest uppercase">SBL engineering safeguard</span>
                <h3 className="font-serif text-lg font-bold text-white uppercase mt-2">Strict compliance seal</h3>
                <p className="text-gray-400 font-sans text-xs font-light leading-relaxed mt-3">
                  Every detail under this category is audited internally by third-party testing labs before structural signoff.
                </p>
                <div className="h-[1px] bg-white/10 w-full my-4" />
                <div className="flex items-center justify-between text-xs text-white font-sans">
                  <span className="font-semibold uppercase tracking-wider">Quality Code:</span>
                  <span className="bg-gold/10 text-gold px-3 py-1 rounded font-bold">BNBC-2020 APPROVED</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </section>

      {/* SBL Construct Workflow Flowchart Steps */}
      <section className="py-24 bg-[#140f2a]/25 backdrop-blur-[2px] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <ScrollReveal variant="fade-up" duration={0.8}>
            <span className="font-sans text-xs font-bold text-gold tracking-[0.25em] uppercase block mb-3">
              Workflow Flowchart
            </span>
            <h2 className="font-serif text-3xl font-extrabold text-white mb-16">
              The Six Steps of Our Architectural Construction Process
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {steps.map((st, idx) => (
              <ScrollReveal 
                key={st.step}
                variant="fade-up"
                delay={idx * 0.1}
                duration={0.8}
              >
                <div className="bg-[#1e1740]/80 p-8 rounded-3xl border border-white/10 shadow-md relative overflow-hidden group flex flex-col justify-between hover:border-gold/30 transition-all duration-300 h-full min-h-[220px]">
                  {/* Large visual back index */}
                  <div className="absolute -top-4 -right-2 font-serif text-8xl font-black text-white/5 select-none group-hover:text-gold/5 transition-colors">
                    {st.step}
                  </div>

                  <div className="space-y-4 relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold border border-gold/15">
                      <st.icon className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-white uppercase tracking-wide">{st.title}</h4>
                    <p className="text-gray-400 font-sans text-xs leading-relaxed font-light">{st.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
