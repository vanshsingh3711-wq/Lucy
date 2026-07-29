"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  
  // 1. Smooth Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scaleDown = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  // 2. Interactive Mouse Parallax (Follows cursor smoothly)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Springs add weight and luxury to the movement (no harsh snapping)
  const springConfig = { damping: 50, stiffness: 100, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    // Normalize coordinates between -1 and 1
    const x = (clientX / innerWidth - 0.5) * 2;
    const y = (clientY / innerHeight - 0.5) * 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax ranges for different depth layers
  const bgGradientX = useTransform(smoothX, [-1, 1], [-100, 100]);
  const bgGradientY = useTransform(smoothY, [-1, 1], [-100, 100]);
  const card1X = useTransform(smoothX, [-1, 1], [-30, 30]);
  const card1Y = useTransform(smoothY, [-1, 1], [-30, 30]);
  const card2X = useTransform(smoothX, [-1, 1], [40, -40]); // Moves opposite for depth
  const card2Y = useTransform(smoothY, [-1, 1], [40, -40]);

  // 3. Apple-Style Blur-Reveal Animation
  const easePremium = [0.16, 1, 0.3, 1] as const;
  const wordAnimation = {
    hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
    visible: (custom: number) => ({
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)", 
      transition: { delay: custom * 0.15, duration: 1.5, ease: easePremium }
    })
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[110vh] w-full overflow-hidden bg-[#050505] flex flex-col items-center justify-center pt-20 selection:bg-[#D4C3A3] selection:text-[#050505]"
    >
      {/* 
        ========================================================================
        1. THE LIVING ENVIRONMENT (Gradients & Film Grain)
        ========================================================================
      */}
      {/* Subtle digital film grain overlay for physical texture */}
      <div 
        className="absolute inset-0 z-50 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
      />

      {/* Interactive Floating Gradients */}
      <motion.div 
        style={{ x: bgGradientX, y: bgGradientY }}
        className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] rounded-full blur-[140px] pointer-events-none mix-blend-screen opacity-60 bg-gradient-to-br from-[#D4C3A3]/10 to-transparent" 
      />
      <motion.div 
        style={{ x: useTransform(smoothX, [-1, 1], [100, -100]), y: useTransform(smoothY, [-1, 1], [100, -100]) }}
        className="absolute bottom-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full blur-[160px] pointer-events-none mix-blend-screen opacity-50 bg-gradient-to-tl from-indigo-900/20 via-purple-900/5 to-transparent" 
      />

      {/* 
        ========================================================================
        2. PARALLAX FASHION MOODBOARD
        Floating cards that react to mouse movement, providing a 3D feel.
        ========================================================================
      */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center max-w-[1440px] mx-auto">
        
        {/* Left Floating Card - In Focus */}
        <motion.div
          style={{ x: card1X, y: card1Y }}
          initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
          animate={{ opacity: 0.7, scale: 1, rotate: -6 }}
          transition={{ duration: 2.5, delay: 0.3, ease: easePremium }}
          className="absolute left-[5%] md:left-[8%] top-[25%] w-[180px] md:w-[260px] aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)]"
        >
          <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" alt="Look 1" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/60" />
        </motion.div>

        {/* Right Floating Card - Out of Focus (Depth) */}
        <motion.div
          style={{ x: card2X, y: card2Y }}
          initial={{ opacity: 0, scale: 0.8, rotate: 8 }}
          animate={{ opacity: 0.4, scale: 1, rotate: 12 }}
          transition={{ duration: 2.5, delay: 0.5, ease: easePremium }}
          className="absolute right-[5%] md:right-[10%] bottom-[20%] w-[150px] md:w-[220px] aspect-[4/5] rounded-xl overflow-hidden blur-[3px] border border-white/5 shadow-2xl"
        >
          <img src="https://images.unsplash.com/photo-1550614000-4b95d466f914?q=80&w=800&auto=format&fit=crop" alt="Look 2" className="w-full h-full object-cover" />
        </motion.div>

        {/* Center Background - Silhouette / Texture */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.15, y: 0 }}
          transition={{ duration: 3, delay: 0.2, ease: easePremium }}
          className="absolute bottom-[-10%] w-[800px] h-[800px] blur-[20px] rounded-full overflow-hidden"
        >
          <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=800&auto=format&fit=crop" alt="Texture" className="w-full h-full object-cover" />
        </motion.div>
      </div>

      {/* 
        ========================================================================
        3. TYPOGRAPHY & INTERACTION
        ========================================================================
      */}
      <motion.div 
        style={{ opacity: opacityFade, scale: scaleDown }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center mt-[-5vh]"
      >
        <h1 className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <div className="flex overflow-hidden pb-4">
            <motion.span 
              custom={1} variants={wordAnimation} initial="hidden" animate="visible"
              className="font-serif text-[15vw] md:text-[130px] lg:text-[150px] text-[#F3F2F0] leading-[0.85] tracking-tighter"
            >
              Meet Lucy.
            </motion.span>
          </div>
          <div className="flex overflow-hidden pb-4">
            <motion.span 
              custom={3} variants={wordAnimation} initial="hidden" animate="visible"
              className="font-serif italic text-[10vw] md:text-[80px] lg:text-[100px] text-[#DCD7CB] leading-[0.85] tracking-tight pr-4"
            >
              Your Personal Stylist.
            </motion.span>
          </div>
        </h1>

        <motion.p
          custom={5} variants={wordAnimation} initial="hidden" animate="visible"
          className="mt-10 mx-auto text-sm md:text-base text-[#A09F9C] font-light max-w-2xl leading-relaxed tracking-wide"
        >
          Lucy understands your style, builds complete outfits, lets you try them on virtually, purchases with your approval, and stays with you until every order reaches your door.
        </motion.p>

        {/* Premium CTAs */}
        <motion.div
          custom={6} variants={wordAnimation} initial="hidden" animate="visible"
          className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          {/* Primary CTA: Warm Beige */}
          <button className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-full bg-[#E5DFD3] text-[#050505] overflow-hidden transition-all hover:scale-[1.03] active:scale-[0.97] duration-500 ease-out shadow-[0_0_40px_rgba(229,223,211,0.15)]">
            <span className="relative z-10 text-xs md:text-sm font-medium tracking-[0.15em] uppercase">
              Start Styling
            </span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-1 transition-transform duration-500 ease-out" />
            <div className="absolute inset-0 bg-white translate-y-[100%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.16,1,0.3,1]" />
          </button>

          {/* Secondary CTA: Frosted Glass */}
          <button className="group flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4 rounded-full border border-[#F3F2F0]/10 bg-[#F3F2F0]/[0.03] backdrop-blur-xl text-[#F3F2F0] hover:bg-[#F3F2F0]/[0.08] hover:border-[#F3F2F0]/20 transition-all duration-500 ease-out">
            <div className="w-6 h-6 rounded-full bg-[#F3F2F0]/10 flex items-center justify-center group-hover:bg-[#F3F2F0]/20 transition-colors duration-500">
              <Play className="w-2 h-2 text-[#F3F2F0] ml-0.5" />
            </div>
            <span className="text-xs md:text-sm font-light tracking-[0.15em] uppercase">
              Watch Demo
            </span>
          </button>
        </motion.div>
      </motion.div>

    </section>
  );
}