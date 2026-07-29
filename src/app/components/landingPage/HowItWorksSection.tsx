"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const TIMELINE_STEPS = [
  {
    num: "01",
    title: "Understand You",
    description: "She maps your aesthetic, proportions, and specific occasions in seconds, building a flawless profile of your taste.",
  },
  {
    num: "02",
    title: "Search & Sift",
    description: "Scanning thousands of global luxury and contemporary brands to find the exact pieces that fit your brief.",
  },
  {
    num: "03",
    title: "Reject the Noise",
    description: "Filtering out synthetic fabrics, poor fits, and generic trends. Only the absolute best matches survive.",
  },
  {
    num: "04",
    title: "Build the Look",
    description: "She doesn't just find a shirt. She curates a complete, harmonized outfit—from the jewelry down to the shoes.",
  },
  {
    num: "05",
    title: "Virtual Try-On",
    description: "Visualize the exact silhouette on your own body before spending a single dollar. Total confidence.",
  },
  {
    num: "06",
    title: "Purchase Approval",
    description: "Seamless one-tap checkout. But she never spends your money without your explicit final approval.",
  },
  {
    num: "07",
    title: "Track & Deliver",
    description: "Her job isn't done at checkout. She monitors logistics and manages returns until the pieces are in your closet.",
  },
];

export default function HowItWorksSection() {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track the scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"],
  });

  // The glowing line grows downward based on scroll
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  
  const easePremium = [0.16, 1, 0.3, 1] as const;

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#050505] py-32 md:py-48 overflow-hidden"
    >
      {/* 1. Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-32 md:mb-48 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: easePremium }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="w-8 h-[1px] bg-[#D4C3A3]" />
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-[#A09F9C]">
            The Stylist Protocol
          </span>
          <div className="w-8 h-[1px] bg-[#D4C3A3]" />
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: 0.1, ease: easePremium }}
          className="font-serif text-[10vw] md:text-[70px] lg:text-[85px] text-[#F3F2F0] leading-[0.9] tracking-tight"
        >
          How she works.
        </motion.h2>
      </div>

      {/* 2. The Interactive Timeline */}
      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* The Central Track (Background Line) */}
        <div className="absolute top-0 bottom-0 left-[24px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-white/[0.05]" />
        
        {/* The Golden Thread (Animated Scroll Progress) */}
        <motion.div 
          style={{ height: lineHeight }}
          className="absolute top-0 left-[24px] md:left-1/2 md:-translate-x-1/2 w-[1px] bg-gradient-to-b from-[#D4C3A3] via-[#D4C3A3] to-transparent shadow-[0_0_15px_rgba(212,195,163,0.8)] z-10"
        />

        {/* The Steps */}
        <div className="relative z-20 flex flex-col gap-24 md:gap-40">
          {TIMELINE_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row items-start md:items-center w-full ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
              >
                
                {/* Node Dot (Aligns perfectly with the line) */}
                <div className="absolute left-0 md:left-1/2 top-0 md:top-1/2 -translate-x-[5px] md:-translate-x-1/2 md:-translate-y-1/2 w-3 h-3 rounded-full bg-[#050505] border border-white/20 z-20 flex items-center justify-center transition-all duration-700 hover:border-[#D4C3A3] hover:scale-150">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-200px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-1.5 h-1.5 rounded-full bg-[#D4C3A3]"
                  />
                </div>

                {/* Content Block */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-150px" }}
                  transition={{ duration: 1.2, ease: easePremium }}
                  className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left' : 'md:pl-16 md:text-left'}`}
                >
                  {/* Massive Magazine Number */}
                  <div className="absolute -top-10 md:-top-16 opacity-[0.03] select-none pointer-events-none font-serif text-[100px] md:text-[140px] leading-none tracking-tighter text-white">
                    {step.num}
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl text-[#F3F2F0] mb-4 tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#A09F9C] font-light leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>

              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
}