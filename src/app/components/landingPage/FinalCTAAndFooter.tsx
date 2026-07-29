"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Define the shape of our particle data
interface Particle {
  x: number;
  delay: number;
  duration: number;
  size: number;
}

export default function FinalCTAAndFooter() {
  const containerRef = useRef<HTMLElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);

  // 1. Generate random particles ONLY on the client to prevent hydration errors
  useEffect(() => {
    const generatedParticles = [...Array(12)].map(() => ({
      x: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: Math.random() * 3 + 1,
    }));
    setParticles(generatedParticles);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const easePremium = [0.16, 1, 0.3, 1] as const;

  // Parallax the gradient orb up as you scroll to the bottom
  const yOrb = useTransform(scrollYProgress, [0, 1], [300, -100]);
  const opacityOrb = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);

  return (
    <footer ref={containerRef} className="relative w-full bg-[#050505] overflow-hidden flex flex-col">
      
      {/* 
        ========================================================================
        SECTION 12: THE CINEMATIC CTA
        ========================================================================
      */}
      <div className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-6 pt-32 pb-20 z-10">
        
        {/* Film Grain Overlay for Cinematic Texture */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
        />

        {/* Moving Gradient & Cinematic Lighting */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.div 
            style={{ y: yOrb, opacity: opacityOrb }}
            className="w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-gradient-to-tr from-[#D4C3A3]/20 via-indigo-900/10 to-transparent rounded-full blur-[120px] mix-blend-screen"
          />
        </div>

        {/* Floating Particles (Cinematic Dust) - Now safe from Hydration errors */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute bottom-[-10%] rounded-full bg-[#D4C3A3] shadow-[0_0_10px_rgba(212,195,163,0.8)]"
              style={{ left: `${particle.x}%`, width: particle.size, height: particle.size }}
              animate={{
                y: ["0vh", "-120vh"],
                opacity: [0, Math.random() * 0.5 + 0.2, 0],
                scale: [1, Math.random() * 2 + 1, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
                delay: particle.delay,
              }}
            />
          ))}
        </div>

        {/* The Emotional Typography */}
        <div className="relative z-20 text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: easePremium }}
            className="mb-8"
          >
            <h2 className="font-serif text-[12vw] md:text-[90px] lg:text-[110px] text-[#F3F2F0] leading-[0.85] tracking-tighter">
              Shopping should feel <br className="hidden md:block" />
              <span className="italic text-[#DCD7CB] tracking-tight">personal again.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2, ease: easePremium }}
            className="text-base md:text-xl text-[#A09F9C] font-light tracking-wide mb-16"
          >
            Meet the stylist who understands you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4, ease: easePremium }}
          >
            <button className="group relative flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-[#E5DFD3] text-[#050505] overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.97] duration-500 ease-out shadow-[0_0_60px_rgba(229,223,211,0.2)]">
              <span className="relative z-10 text-xs md:text-sm font-medium tracking-[0.2em] uppercase">
                Start with Lucy
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
              <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
            </button>
          </motion.div>
        </div>

      </div>

      {/* 
        ========================================================================
        THE LUXURY FOOTER
        ========================================================================
      */}
      <div className="relative z-20 w-full border-t border-white/[0.04] bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-10">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 md:gap-8 mb-20">
            
            <div className="col-span-2 lg:col-span-2 flex flex-col justify-between">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-[#F3F2F0] tracking-tight">Lucy.</span>
                <p className="mt-4 text-xs text-[#A09F9C] font-light max-w-[200px] leading-relaxed">
                  Your digital personal stylist and luxury concierge.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A09F9C]/50 mb-2">Company</span>
              <a href="#" className="text-xs text-[#A09F9C] hover:text-[#F3F2F0] transition-colors duration-300 tracking-wide w-fit">About</a>
              <a href="#" className="text-xs text-[#A09F9C] hover:text-[#F3F2F0] transition-colors duration-300 tracking-wide w-fit">Contact</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A09F9C]/50 mb-2">Legal</span>
              <a href="#" className="text-xs text-[#A09F9C] hover:text-[#F3F2F0] transition-colors duration-300 tracking-wide w-fit">Privacy Policy</a>
              <a href="#" className="text-xs text-[#A09F9C] hover:text-[#F3F2F0] transition-colors duration-300 tracking-wide w-fit">Terms of Service</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A09F9C]/50 mb-2">Socials</span>
              <a href="#" className="text-xs text-[#A09F9C] hover:text-[#F3F2F0] transition-colors duration-300 tracking-wide w-fit">Instagram</a>
              <a href="#" className="text-xs text-[#A09F9C] hover:text-[#F3F2F0] transition-colors duration-300 tracking-wide w-fit">Twitter / X</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#A09F9C]/50 mb-2">Developers</span>
              <a href="#" className="text-xs text-[#A09F9C] hover:text-[#F3F2F0] transition-colors duration-300 tracking-wide w-fit">GitHub</a>
              <a href="#" className="text-xs text-[#A09F9C] hover:text-[#F3F2F0] transition-colors duration-300 tracking-wide w-fit">Discord</a>
            </div>
            
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.04] gap-4 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-widest text-[#A09F9C]/50">
              © 2024 Lucy Technologies Inc.
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#A09F9C]/50">
              All Rights Reserved.
            </span>
          </div>

        </div>
      </div>
      
    </footer>
  );
}