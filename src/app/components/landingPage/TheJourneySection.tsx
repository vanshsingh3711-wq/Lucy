"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const JOURNEY_PHASES = [
  {
    phase: "01",
    title: "The Curation",
    steps: [
      "You express a need for an outfit.",
      "Lucy analyzes your exact style profile.",
      "Searches thousands of global products.",
      "Builds and harmonizes the complete look."
    ]
  },
  {
    phase: "02",
    title: "The Acquisition",
    steps: [
      "Presents the look for your final approval.",
      "Seamless, secure one-tap payment.",
      "Order is officially confirmed with the designer."
    ]
  },
  {
    phase: "03",
    title: "The Concierge",
    steps: [
      "Monitors preparation and packaging.",
      "Tracks the shipment globally.",
      "Updates you when it is out for delivery.",
      "Confirmed delivery to your door."
    ]
  },
  {
    phase: "04",
    title: "The Aftercare",
    steps: [
      "Manages all returns if a piece isn't perfect.",
      "Learns from your feedback for the next curation."
    ]
  }
];

export default function TheJourneySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // The glowing thread that draws down the page
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const easePremium = [0.16, 1, 0.3, 1] as const;

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-32 md:py-48 px-6 overflow-hidden">
      
      {/* Absolute Minimalism: No heavy background images, just a delicate ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[80vh] bg-[#D4C3A3]/[0.015] blur-[150px] pointer-events-none rounded-full" />

      {/* 
        ========================================================================
        1. THE EDITORIAL HEADER
        ========================================================================
      */}
      <div className="max-w-4xl mx-auto mb-32 md:mb-48 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: easePremium }}>
          <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-[#A09F9C] mb-8 text-center md:text-left">
            Total Ownership
          </span>
          <h2 className="font-serif text-[11vw] md:text-[70px] lg:text-[85px] text-[#F3F2F0] leading-[0.9] tracking-tight mb-8 text-center md:text-left">
            Most assistants disappear after checkout. <br />
            <span className="italic text-[#DCD7CB]">Lucy stays.</span>
          </h2>
          <p className="text-base md:text-lg text-[#A09F9C] font-light leading-relaxed max-w-xl text-center md:text-left mx-auto md:mx-0">
            From the moment you request a look to the moment it hangs in your closet, she takes complete responsibility for your shopping experience.
          </p>
        </motion.div>
      </div>

      {/* 
        ========================================================================
        2. THE CONTINUOUS ITINERARY (Zero Boxes, Pure Typography)
        ========================================================================
      */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* The Track (Muted background line) */}
        <div className="absolute top-0 bottom-0 left-[15px] md:left-[23px] w-[1px] bg-white/[0.05]" />
        
        {/* The Golden Thread (Animated scroll line) */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute top-0 left-[15px] md:left-[23px] w-[1px] bg-gradient-to-b from-[#D4C3A3] via-[#D4C3A3] to-transparent shadow-[0_0_15px_rgba(212,195,163,0.8)]"
        />

        <div className="flex flex-col gap-24 md:gap-32">
          {JOURNEY_PHASES.map((phase, phaseIndex) => (
            <div key={phaseIndex} className="relative pl-12 md:pl-24">
              
              {/* Phase Node (The circle on the line) */}
              <div className="absolute left-[11px] md:left-[19px] top-2 w-2.5 h-2.5 rounded-full border border-white/20 bg-[#050505] z-10">
                {/* Node fill animation based on scroll */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 0.5, ease: easePremium }}
                  className="w-full h-full rounded-full bg-[#D4C3A3]"
                />
              </div>

              {/* Phase Header */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1, ease: easePremium }}
                className="mb-10"
              >
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#D4C3A3]">
                    PHASE {phase.phase}
                  </span>
                  <div className="w-8 h-[1px] bg-white/10" />
                </div>
                <h3 className="font-serif text-3xl md:text-5xl text-[#F3F2F0] tracking-wide">
                  {phase.title}
                </h3>
              </motion.div>

              {/* The Micro-Steps (Magazine Style Typography) */}
              <div className="flex flex-col gap-6">
                {phase.steps.map((step, stepIndex) => (
                  <motion.div 
                    key={stepIndex}
                    initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: stepIndex * 0.1, ease: easePremium }}
                    className="flex items-start gap-6 group"
                  >
                    <span className="text-[9px] font-mono text-[#A09F9C]/40 mt-1.5 transition-colors duration-500 group-hover:text-[#D4C3A3]/60">
                      {(stepIndex + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-base md:text-xl text-[#A09F9C] font-light tracking-wide transition-colors duration-500 group-hover:text-[#F3F2F0]">
                      {step}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}