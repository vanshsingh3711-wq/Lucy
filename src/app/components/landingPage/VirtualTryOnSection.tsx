"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveHorizontal, Sparkles, ScanFace } from "lucide-react";

export default function VirtualTryOnSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax for the section background
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const easePremium = [0.16, 1, 0.3, 1] as const;

  // Handle the interactive sliding logic
  const handleMove = (clientX: number) => {
    if (!containerRef.current || !isDragging) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const position = ((clientX - left) / width) * 100;
    // Clamp between 0 and 100
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full bg-[#050505] py-32 md:py-48 overflow-hidden select-none"
    >
      {/* Ambient Depth Lighting */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-[#D4C3A3]/[0.02] rounded-full blur-[150px] pointer-events-none mix-blend-screen" 
      />

      {/* 
        ========================================================================
        1. THE EDITORIAL HEADER
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-28 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: easePremium }}
          className="flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-3 mb-8">
            <ScanFace className="w-4 h-4 text-[#D4C3A3]" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-[#A09F9C]">
              Architectural Try-On
            </span>
          </div>
          
          <h2 className="font-serif text-[11vw] md:text-[70px] lg:text-[85px] text-[#F3F2F0] leading-[0.9] tracking-tight mb-8">
            See yourself <br />
            <span className="italic text-[#DCD7CB]">before you buy.</span>
          </h2>
          
          <p className="text-sm md:text-base text-[#A09F9C] font-light leading-relaxed max-w-xl mx-auto">
            Upload a single photo. Lucy renders a photorealistic simulation of the exact garment mapped to your unique body architecture. No guessing, no return labels.
          </p>
        </motion.div>
      </div>

      {/* 
        ========================================================================
        2. THE INTERACTIVE SPATIAL LENS (Before/After Slider)
        ========================================================================
      */}
      <div className="max-w-6xl mx-auto px-6 relative z-30">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: easePremium }}
          className="relative w-full h-[60vh] md:h-[80vh] rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] cursor-ew-resize group"
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setIsDragging(true)}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={handleTouchMove}
        >
          
          {/* BASE IMAGE: THE "BEFORE" (User in basic clothes) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop" 
              alt="User Before" 
              className="w-full h-full object-cover grayscale opacity-60"
              draggable={false}
            />
            {/* Metadata overlay for "Before" */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 bg-[#050505]/40 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full">
              <span className="text-[10px] uppercase tracking-widest text-[#A09F9C]">Source: Original</span>
            </div>
          </div>

          {/* OVERLAY IMAGE: THE "AFTER" (Lucy's AI Rendering) */}
          <div 
            className="absolute inset-0 w-full h-full will-change-auto"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop" 
              alt="User After" 
              className="w-full h-full object-cover scale-[1.01]" 
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent" />
            
            {/* Metadata overlay for "After" */}
            <div className="absolute top-6 right-6 md:top-10 md:right-10 flex flex-col gap-2 items-end">
              <div className="bg-[#D4C3A3]/10 backdrop-blur-md border border-[#D4C3A3]/30 px-4 py-2 rounded-full flex items-center gap-2">
                <Sparkles className="w-3 h-3 text-[#D4C3A3]" />
                <span className="text-[10px] uppercase tracking-widest text-[#D4C3A3]">Lucy Engine Active</span>
              </div>
              <div className="flex flex-col items-end mr-4">
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/70 shadow-sm drop-shadow-md block mb-1">Fabric Physics: Mapped</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/70 shadow-sm drop-shadow-md block mb-1">Lighting: Matched</span>
                <span className="text-[8px] uppercase tracking-[0.2em] text-white/70 shadow-sm drop-shadow-md block">Proportions: 1:1</span>
              </div>
            </div>
          </div>

          {/* 
            THE INTERACTIVE GLASS LENS (The Slider Handle) 
          */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#D4C3A3] to-transparent shadow-[0_0_15px_rgba(212,195,163,0.8)] z-40 transition-transform duration-75 ease-out"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            {/* The physical "knob" the user grabs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-20 rounded-full border border-white/20 bg-white/[0.05] backdrop-blur-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:border-[#D4C3A3]/50 transition-all duration-300">
              <div className="flex gap-1.5 items-center">
                <div className="w-[1px] h-6 bg-[#A09F9C]/50 group-hover:bg-[#D4C3A3]/80 transition-colors" />
                <MoveHorizontal className="w-4 h-4 text-[#F3F2F0] group-hover:text-[#D4C3A3] transition-colors" />
                <div className="w-[1px] h-6 bg-[#A09F9C]/50 group-hover:bg-[#D4C3A3]/80 transition-colors" />
              </div>
            </div>
          </div>

        </motion.div>
      </div>

      {/* 
        ========================================================================
        3. TRUST & PRECISION METRICS
        ========================================================================
      */}
      <div className="max-w-4xl mx-auto mt-12 px-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A3]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F3F2F0]">Millimeter Accuracy</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A3]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F3F2F0]">Drape Simulation</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A3]" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#F3F2F0]">True-Color Rendering</span>
        </div>
      </div>

    </section>
  );
}