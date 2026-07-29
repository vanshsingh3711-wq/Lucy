"use client";

import { useRef, MouseEvent } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Sparkles, Activity, Tag, Fingerprint } from "lucide-react";

// --- The Reactive Glass Card Component ---
// This creates the Apple-style cursor spotlight effect
function PremiumCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-[2rem] border border-white/[0.04] bg-[#0A0A0A] md:bg-white/[0.01] backdrop-blur-3xl transition-colors duration-500 hover:border-white/[0.1] ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(212, 195, 163, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}

export default function StyleProfileSection() {
  const easePremium = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easePremium } },
  };

  return (
    <section className="relative w-full bg-[#050505] py-32 md:py-56 px-6 overflow-hidden">
      
      {/* Cinematic Deep Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] bg-gradient-to-tr from-[#D4C3A3]/[0.03] to-transparent rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-900/[0.02] rounded-full blur-[100px] pointer-events-none" />

      {/* 1. Header Section */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: easePremium }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <Fingerprint className="w-4 h-4 text-[#D4C3A3]" />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-[#A09F9C]">
                The Dynamic Dossier
              </span>
            </div>
            <h2 className="font-serif text-[10vw] md:text-[60px] lg:text-[75px] text-[#F3F2F0] leading-[0.9] tracking-tight mb-6">
              She gets smarter <br className="hidden md:block" />
              <span className="italic text-[#DCD7CB]">over time.</span>
            </h2>
            <p className="text-sm md:text-base text-[#A09F9C] font-light leading-relaxed max-w-lg border-l border-white/10 pl-5">
              Every interaction, every swipe, and every purchase refines your digital dossier. Lucy's algorithm evolves perfectly with your changing taste.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-3 border border-white/10 bg-white/[0.02] backdrop-blur-md rounded-full px-5 py-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A3] animate-pulse shadow-[0_0_10px_rgba(212,195,163,0.8)]" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#F3F2F0]">Syncing Data</span>
            </div>
            <span className="text-[8px] tracking-[0.2em] text-[#A09F9C] uppercase opacity-50 mr-2">Last updated: Just now</span>
          </div>
        </motion.div>
      </div>

      {/* 2. The Interactive Bento Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6"
      >
        
        {/* =========================================================
            LEFT COLUMN: The Analysis Portrait
            ========================================================= */}
        <motion.div variants={itemVariants} className="md:col-span-5 relative h-[500px] md:h-[650px]">
          <PremiumCard className="h-full flex flex-col justify-end p-8">
            
            {/* The Image & Visual Tech FX */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              <motion.img 
                animate={{ scale: [1, 1.05, 1] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop" 
                alt="Client Profile" 
                className="w-full h-full object-cover object-top opacity-60 grayscale"
              />
              {/* Overlay scanning grid */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            </div>
            
            {/* Architectural Crosshairs */}
            <div className="absolute top-8 left-8 w-3 h-3 border-t border-l border-white/30" />
            <div className="absolute top-8 right-8 w-3 h-3 border-t border-r border-white/30" />
            <div className="absolute bottom-32 left-8 w-3 h-3 border-b border-l border-white/30" />
            <div className="absolute bottom-32 right-8 w-3 h-3 border-b border-r border-white/30" />

            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#D4C3A3]" />
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#A09F9C]">Prediction Confidence</span>
                </div>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#A09F9C]/50">ID: LU-8829</span>
              </div>
              
              <div className="flex items-end gap-3 mb-5">
                <span className="font-serif text-[70px] md:text-[85px] text-[#F3F2F0] leading-none tracking-tighter">
                  98.4<span className="text-4xl text-[#DCD7CB] font-light ml-1">%</span>
                </span>
              </div>

              {/* Glowing Progress Bar */}
              <div className="relative w-full h-[2px] bg-white/10 rounded-full overflow-hidden mb-4">
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "98.4%" }} viewport={{ once: true }} transition={{ duration: 2.5, delay: 0.5, ease: easePremium }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#D4C3A3]/50 to-[#D4C3A3] shadow-[0_0_10px_rgba(212,195,163,0.8)]"
                />
              </div>
              <p className="text-[11px] md:text-xs font-light text-[#A09F9C] uppercase tracking-widest max-w-[250px]">
                Algorithm predicts absolute match for next purchase.
              </p>
            </div>
          </PremiumCard>
        </motion.div>

        {/* =========================================================
            RIGHT COLUMN: The Data Grid
            ========================================================= */}
        <div className="md:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          
          {/* Aesthetic Evolution */}
          <motion.div variants={itemVariants} className="h-full">
            <PremiumCard className="p-8 flex flex-col justify-between h-[240px] md:h-auto">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#A09F9C]">Current Aesthetics</span>
                <Sparkles className="w-3.5 h-3.5 text-white/20" />
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-light text-[#F3F2F0] shadow-xl">Minimalist</div>
                <div className="px-4 py-2 rounded-full border border-[#D4C3A3]/40 bg-[#D4C3A3]/5 text-[11px] font-medium text-[#DCD7CB] shadow-[0_0_15px_rgba(212,195,163,0.1)]">Quiet Luxury</div>
                <div className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] text-[11px] font-light text-[#F3F2F0] shadow-xl">Old Money</div>
                {/* Visualizing the AI "learning" and rejecting a style */}
                <div className="px-4 py-2 rounded-full border border-white/5 bg-transparent text-[11px] font-light text-[#A09F9C]/40 line-through decoration-red-900/50">Streetwear</div>
              </div>
            </PremiumCard>
          </motion.div>

          {/* Color Matrix */}
          <motion.div variants={itemVariants} className="h-full">
            <PremiumCard className="p-8 flex flex-col justify-between h-[240px] md:h-auto">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[9px] uppercase tracking-[0.25em] text-[#A09F9C]">Dominant Palette</span>
                <span className="text-[8px] tracking-[0.2em] text-[#A09F9C]/40 uppercase">Fall/Winter</span>
              </div>
              
              <div className="flex items-center gap-0">
                {/* Elegant overlapping swatch cards */}
                <div className="group relative w-14 h-16 rounded-lg bg-[#0F0F0F] border border-white/10 shadow-2xl shrink-0 -rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 hover:z-50 cursor-crosshair">
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest text-[#F3F2F0] opacity-0 group-hover:opacity-100 transition-opacity">Onyx</span>
                </div>
                <div className="group relative w-14 h-16 rounded-lg bg-[#E5DFD3] border border-white/10 shadow-2xl shrink-0 -ml-4 rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 hover:z-50 cursor-crosshair">
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest text-[#F3F2F0] opacity-0 group-hover:opacity-100 transition-opacity">Ivory</span>
                </div>
                <div className="group relative w-14 h-16 rounded-lg bg-[#3D4035] border border-white/10 shadow-2xl shrink-0 -ml-4 -rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 hover:z-50 cursor-crosshair">
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest text-[#F3F2F0] opacity-0 group-hover:opacity-100 transition-opacity">Olive</span>
                </div>
                <div className="group relative w-14 h-16 rounded-lg bg-[#5A2E2E] border border-white/10 shadow-2xl shrink-0 -ml-4 rotate-6 hover:rotate-0 hover:-translate-y-2 transition-all duration-500 hover:z-50 cursor-crosshair">
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] uppercase tracking-widest text-[#F3F2F0] opacity-0 group-hover:opacity-100 transition-opacity">Wine</span>
                </div>
              </div>
            </PremiumCard>
          </motion.div>

          {/* Brand Affinity & Budget */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <PremiumCard className="p-8 md:p-10 flex flex-col md:flex-row justify-between md:items-end gap-10">
              <div className="relative">
                <div className="flex items-center gap-2 mb-5">
                  <Tag className="w-3.5 h-3.5 text-[#D4C3A3]" />
                  <span className="text-[9px] uppercase tracking-[0.25em] text-[#A09F9C]">Brand Affinity</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-[28px] md:text-[34px] text-[#F3F2F0] leading-tight tracking-wide">The Row, Khaite,</span>
                  <span className="font-serif italic text-[28px] md:text-[34px] text-[#A09F9C] leading-tight tracking-wide">Saint Laurent, Loewe.</span>
                </div>
              </div>
              
              <div className="text-left md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-5 md:pl-0 md:pr-5">
                <span className="block text-[9px] uppercase tracking-[0.25em] text-[#A09F9C] mb-3">Target Budget</span>
                <span className="font-sans font-light text-2xl text-[#F3F2F0] tracking-wide">$300 - $1.2k</span>
                <span className="block text-[10px] text-[#A09F9C] font-light mt-1 uppercase tracking-widest">Per Garment</span>
              </div>
            </PremiumCard>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}