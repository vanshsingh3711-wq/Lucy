"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Scan, Sparkles } from "lucide-react";

// Rich data cards instead of simple text tags
const PROFILE_CARDS = [
  { label: "Aesthetic", value: "Minimalist / Old Money", top: "10%", left: "-10%", delay: 0.1 },
  { label: "Budget constraint", value: "Under $200 / item", top: "25%", left: "65%", delay: 0.3 },
  { label: "Upcoming Occasion", value: "Outdoor Wedding", top: "65%", left: "-5%", delay: 0.5 },
  { label: "Color Palette", value: "Black, Ivory, Slate", top: "75%", left: "55%", delay: 0.7 },
];

export default function MeetLucySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const easePremium = [0.16, 1, 0.3, 1] as const;
  
  // Parallax for the 3D floating effect
  const yCore = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yCards = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#050505] py-32 md:py-56 px-6 overflow-hidden flex items-center"
    >
      {/* Cinematic Ambient Lighting */}
      <div className="absolute top-[30%] left-[10%] w-[50vw] h-[50vw] bg-[#D4C3A3]/[0.02] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-[20%] right-[10%] w-[40vw] h-[40vw] bg-white/[0.01] rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center z-10">
        
        {/* 
          ========================================================================
          LEFT SIDE: EDITORIAL TYPOGRAPHY
          ========================================================================
        */}
        <div className="lg:col-span-5 relative z-20 flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: easePremium }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-8 h-[1px] bg-[#D4C3A3]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-[#A09F9C]">
              The Intelligence Engine
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, delay: 0.1, ease: easePremium }}
            className="font-serif text-[11vw] md:text-[70px] lg:text-[80px] text-[#F3F2F0] leading-[0.9] tracking-tight mb-12"
          >
            Lucy learns you before recommending anything.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, delay: 0.3 }}
            className="relative pl-6 md:pl-8 border-l border-white/10 py-2 space-y-8"
          >
            <p className="text-base md:text-lg text-[#A09F9C] font-light leading-relaxed max-w-md">
              She understands your <span className="text-[#F3F2F0]">style</span>, respects your <span className="text-[#F3F2F0]">budget</span>, maps your <span className="text-[#F3F2F0]">favorite colors</span>, and anticipates your <span className="text-[#F3F2F0]">occasions</span>.
            </p>

            <div className="flex flex-col">
              <span className="text-sm text-[#A09F9C] font-light">Instead of recommending what everyone buys...</span>
              <span className="font-serif italic text-[#DCD7CB] text-2xl md:text-3xl mt-2 tracking-wide">
                Lucy recommends what <em className="not-italic text-[#F3F2F0]">you</em> should buy.
              </span>
            </div>
          </motion.div>
        </div>

        {/* 
          ========================================================================
          RIGHT SIDE: THE PROFILE DOSSIER (Glassmorphism & Depth)
          ========================================================================
        */}
        <div className="lg:col-span-7 relative h-[600px] md:h-[700px] w-full flex items-center justify-center">
          
          {/* Central Anchor (The User / Core) */}
          <motion.div 
            style={{ y: yCore }}
            className="relative z-10 w-[220px] md:w-[280px] h-[320px] md:h-[400px] rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
          >
            <img 
              src="https://images.unsplash.com/photo-1524041255072-7da0525d6b34?q=80&w=1000&auto=format&fit=crop" 
              alt="User Core" 
              className="w-full h-full object-cover scale-105"
            />
            {/* Inner vignette for luxury feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-transparent opacity-80" />
            
            {/* Center Scan Target */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30">
              <Scan className="w-12 h-12 text-[#D4C3A3]" strokeWidth={1} />
            </div>
          </motion.div>

          {/* Rotating Targeting Rings (Behind the Core) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div 
              animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="w-[300px] md:w-[450px] h-[300px] md:h-[450px] rounded-full border border-white/[0.03] border-dashed"
            />
            <motion.div 
              animate={{ rotate: -360 }} transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
              className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full border border-white/[0.02]"
            />
          </div>

          {/* The Apple-Style Profile Data Cards (Floating around the core) */}
          <motion.div style={{ y: yCards }} className="absolute inset-0 z-20 pointer-events-none">
            {PROFILE_CARDS.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: card.delay, ease: easePremium }}
                style={{ top: card.top, left: card.left }}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 5 + index, ease: "easeInOut" }}
                  className="flex flex-col gap-1.5 px-5 py-4 rounded-2xl border border-white/[0.08] bg-white/[0.01] backdrop-blur-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] min-w-[160px] md:min-w-[200px]"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-3 h-3 text-[#D4C3A3]" />
                    <span className="text-[8px] md:text-[9px] uppercase tracking-[0.2em] text-[#A09F9C]">
                      {card.label}
                    </span>
                  </div>
                  <span className="font-serif text-[#F3F2F0] text-sm md:text-base tracking-wide">
                    {card.value}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}