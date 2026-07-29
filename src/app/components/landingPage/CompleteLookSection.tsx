"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Crosshair,  ArrowRight, ShieldCheck } from "lucide-react";

// The Rationale Data for the Interactive Anatomy
const RATIONALE_DATA = [
  {
    id: "fabric",
    top: "30%",
    left: "40%",
    title: "Material Intelligence",
    desc: "100% heavy-weight silk crepe. Selected because your profile strictly filters out synthetic blends for evening wear. It provides the exact drape your silhouette requires.",
    match: "99%",
  },
  {
    id: "cut",
    top: "55%",
    left: "65%",
    title: "Proportional Geometry",
    desc: "The bias cut gracefully skims without clinging. The asymmetrical hemline creates an elongated optical illusion, mathematically mapped to your height.",
    match: "97%",
  },
  {
    id: "context",
    top: "75%",
    left: "35%",
    title: "Contextual Synergy",
    desc: "Hits the exact formality balance required for the outdoor evening wedding on your calendar. Dark enough for evening, light enough for the season.",
    match: "98%",
  }
];

export default function CompleteLookSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const easePremium = [0.16, 1, 0.3, 1] as const;

  // Cinematic Parallax setup
  const yImage = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const yBag = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const yShoes = useTransform(scrollYProgress, [0, 1], [250, -250]);

  // State for the interactive anatomy
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-32 md:py-56 overflow-hidden">
      
      {/* Film Grain Overlay */}
      <div 
        className="absolute inset-0 z-50 opacity-[0.02] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* 
        ========================================================================
        PART 1: THE SPATIAL CURATION GRID
        ========================================================================
      */}
      <div className="max-w-[1400px] mx-auto px-6 mb-40 md:mb-64">
        
        <div className="text-center mb-24 md:mb-32 relative z-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: easePremium }}>
            <span className="flex items-center justify-center gap-3 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-[#A09F9C] mb-6">
              {/* <ScanFocus className="w-4 h-4 text-[#D4C3A3]" /> */}
              Holistic Assembly
            </span>
            <h2 className="font-serif text-[11vw] md:text-[80px] lg:text-[100px] text-[#F3F2F0] leading-[0.85] tracking-tighter">
              She doesn't find pieces. <br />
              <span className="italic text-[#DCD7CB] tracking-tight">She curates looks.</span>
            </h2>
          </motion.div>
        </div>

        {/* The Spatial Grid Layout */}
        <div className="relative h-[800px] md:h-[1000px] w-full flex items-center justify-center mt-10">
          
          {/* Main Anchor: The Dress */}
          <div className="relative z-10 w-[90%] md:w-[45%] h-[75%] md:h-[95%] rounded-[2rem] overflow-hidden">
            <motion.img 
              style={{ y: yImage, scale: 1.1 }}
              src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=1200&auto=format&fit=crop" 
              alt="Complete Look" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Inner Shadow / Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] z-20" />
            
            {/* Anchor Label */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end z-30">
              <div>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#D4C3A3] mb-1">Base Layer</span>
                <span className="font-serif text-2xl text-white">The Row Silk Slip</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-white/50 border border-white/20 px-3 py-1 rounded-full backdrop-blur-md">
                Look 01 / 03
              </span>
            </div>
          </div>

          {/* Connected Accessory 1: The Bag (with AI Synergy Data) */}
          <motion.div 
            style={{ y: yBag }}
            className="absolute z-30 left-[2%] md:left-[10%] top-[5%] md:top-[15%] flex flex-col items-center gap-4"
          >
            {/* The Image Card */}
            <div className="w-[150px] md:w-[240px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative group">
              <img src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=800&auto=format&fit=crop" alt="Bag" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            {/* The AI Data Plate */}
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl w-full translate-x-4 -translate-y-12">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#A09F9C]">Accessory 01</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#D4C3A3]">Synergy: 99%</span>
              </div>
              <span className="font-serif text-sm text-[#F3F2F0] block">Leather Clutch</span>
              <span className="text-[10px] text-[#A09F9C] font-light mt-1 block">Texture contrast match.</span>
            </div>
          </motion.div>

          {/* Connected Accessory 2: The Shoes */}
          <motion.div 
            style={{ y: yShoes }}
            className="absolute z-30 right-[2%] md:right-[10%] bottom-[10%] md:bottom-[20%] flex flex-col items-center gap-4"
          >
            <div className="w-[140px] md:w-[220px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] relative group">
              <img src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop" alt="Shoes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-[#050505]/20 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl p-4 shadow-2xl w-full -translate-x-4 -translate-y-12">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#A09F9C]">Accessory 02</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-[#D4C3A3]">Synergy: 96%</span>
              </div>
              <span className="font-serif text-sm text-[#F3F2F0] block">Suede Pumps</span>
              <span className="text-[10px] text-[#A09F9C] font-light mt-1 block">Color-blocks the silk.</span>
            </div>
          </motion.div>

        </div>
      </div>

      {/* 
        ========================================================================
        PART 2: THE INTERACTIVE ANATOMY (Interactive Rationale)
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-6 relative z-20">
        
        {/* Ambient Rationale Glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[40vw] h-[40vw] bg-[#D4C3A3]/[0.04] rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT: The Interactive Blueprint Image */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: easePremium }}
            className="relative h-[650px] md:h-[800px] rounded-[2rem] overflow-hidden border border-white/[0.08] bg-[#0A0A0A] shadow-[0_0_100px_rgba(0,0,0,0.5)] cursor-crosshair"
          >
            <img 
              src="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1000&auto=format&fit=crop" 
              alt="Interactive Dress" 
              className="w-full h-full object-cover object-center opacity-70"
            />
            <div className="absolute inset-0 bg-[#050505]/20 mix-blend-overlay pointer-events-none" />
            
            {/* The Targeting Nodes (Hotspots) */}
            {RATIONALE_DATA.map((node, index) => {
              const isActive = activeIndex === index;
              return (
                <div 
                  key={node.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  className="absolute z-30 flex items-center justify-center w-16 h-16 -translate-x-1/2 -translate-y-1/2 group"
                  style={{ top: node.top, left: node.left }}
                >
                  {/* Outer pulsing ring */}
                  <motion.div 
                    animate={isActive ? { scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] } : { scale: 1, opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="absolute w-12 h-12 rounded-full border border-[#D4C3A3]"
                  />
                  {/* Inner glowing dot */}
                  <div className={`w-3 h-3 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(212,195,163,0.8)] flex items-center justify-center ${isActive ? 'bg-[#D4C3A3] scale-125' : 'bg-white/40 backdrop-blur-md scale-100'}`}>
                    {isActive && <div className="w-1 h-1 bg-[#050505] rounded-full" />}
                  </div>
                  {/* Connecting Line (Only visible when active) */}
                  <div className={`absolute top-1/2 left-full w-24 h-[1px] bg-gradient-to-r from-[#D4C3A3]/50 to-transparent transition-all duration-500 origin-left ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`} />
                </div>
              );
            })}
          </motion.div>

          {/* RIGHT: The Dynamic Explanation Panel */}
          <div className="relative z-10 flex flex-col justify-center h-full">
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: easePremium }} className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Crosshair className="w-4 h-4 text-[#D4C3A3]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A09F9C]">Targeted Rationale</span>
              </div>
              <h3 className="font-serif text-[9vw] md:text-[55px] lg:text-[70px] text-[#F3F2F0] leading-[0.9] tracking-tight">
                Why Lucy <br />
                <span className="italic text-[#A09F9C]">chose this.</span>
              </h3>
            </motion.div>

            {/* Dynamic Content Block (Changes based on hovered node) */}
            <div className="relative h-[250px] border-l-2 border-white/10 pl-8 md:pl-12 py-4">
              {/* Active Indicator Line */}
              <motion.div 
                className="absolute left-[-2px] w-[2px] bg-[#D4C3A3]"
                initial={false}
                animate={{ top: `${(activeIndex * 33.33)}%`, height: "33.33%" }}
                transition={{ type: "spring", stiffness: 200, damping: 25 }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.5, ease: easePremium }}
                  className="flex flex-col h-full justify-center"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] border border-[#D4C3A3]/40 text-[#DCD7CB] px-3 py-1 rounded-full bg-[#D4C3A3]/5">
                      Match: {RATIONALE_DATA[activeIndex].match}
                    </span>
                    <span className="text-[10px] text-[#A09F9C] uppercase tracking-widest">
                      Node 0{activeIndex + 1}
                    </span>
                  </div>
                  <h4 className="font-serif text-3xl md:text-4xl text-[#F3F2F0] mb-4 tracking-wide">
                    {RATIONALE_DATA[activeIndex].title}
                  </h4>
                  <p className="text-base text-[#A09F9C] font-light leading-relaxed max-w-md">
                    {RATIONALE_DATA[activeIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Instruction / Secondary CTA */}
            <div className="mt-12 flex items-center gap-4 opacity-50">
              {/* <ScanFocus className="w-4 h-4 text-[#F3F2F0]" /> */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#F3F2F0]">Hover over image nodes to inspect rationale</span>
            </div>

          </div>
        </div>
      </div>
      
    </section>
  );
}