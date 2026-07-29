"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  const easePremium = [0.16, 1, 0.3, 1] as const;

  // Staggered reveal for the cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easePremium } },
  };

  return (
    <section className="relative w-full bg-[#050505] pt-12 pb-32 md:pb-48 px-6 overflow-hidden">
      
      {/* 
        ========================================================================
        1. THE TRUST BAR
        Extremely minimal. Monochromatic logos fading in from the darkness.
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto border-b border-white/[0.05] pb-20">
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5 }}
          className="text-center text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#A09F9C]/60 mb-10"
        >
          Built with trusted commerce technology
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale contrast-125"
        >
          {/* Using text/SVG approximations for the logos to keep it pristine */}
          <span className="font-sans font-bold text-xl tracking-tighter text-white">VISA</span>
          <span className="font-serif italic text-2xl text-white">Prava</span>
          <div className="flex items-center gap-1.5 text-white">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A6.0651 6.0651 0 0 0 19.02 19.818a5.9847 5.9847 0 0 0 3.9977-2.9001 6.0462 6.0462 0 0 0-.7358-7.0968zM12 20.474a8.474 8.474 0 1 1 0-16.948 8.474 8.474 0 0 1 0 16.948z"/></svg>
            <span className="font-medium text-lg tracking-tight">OpenAI</span>
          </div>
          <span className="font-sans font-bold text-xl tracking-tight text-white flex items-center gap-1">
            <span className="w-4 h-4 bg-white rounded-sm" /> Shopify
          </span>
          <span className="font-sans font-bold text-xl tracking-tighter text-white">stripe</span>
        </motion.div>
      </div>

      {/* 
        ========================================================================
        2. THE PROBLEM HEADLINE
        Magazine style. Short sentences. Enormous contrast.
        ========================================================================
      */}
      <div className="max-w-5xl mx-auto text-center mt-32 md:mt-48 mb-24">
        <h2 className="flex flex-col items-center justify-center space-y-2 md:space-y-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: easePremium }} className="overflow-hidden">
            <span className="block font-serif text-[10vw] md:text-[80px] lg:text-[100px] text-[#F3F2F0] leading-[0.9] tracking-tight">
              Shopping should feel exciting.
            </span>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.15, ease: easePremium }} className="overflow-hidden">
            <span className="block font-serif italic text-[9vw] md:text-[70px] lg:text-[90px] text-[#A09F9C] leading-[0.9] tracking-normal">
              Not exhausting.
            </span>
          </motion.div>
        </h2>
      </div>

      {/* 
        ========================================================================
        3. THE CARDS (With Premium Abstract Micro-Illustrations)
        ========================================================================
      */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        {/* CARD 1: Too many choices */}
        <motion.div variants={itemVariants} className="group relative rounded-3xl border border-white/[0.04] bg-[#F3F2F0]/[0.01] p-8 md:p-10 hover:bg-[#F3F2F0]/[0.02] transition-colors duration-500 flex flex-col justify-between overflow-hidden min-h-[400px]">
          
          {/* Abstract Illustration: Overwhelming overlapping cards */}
          <div className="relative w-full h-40 mb-10 flex items-center justify-center">
            <div className="absolute w-20 h-28 border border-white/10 rounded-lg -rotate-12 -translate-x-10 translate-y-4 opacity-30 group-hover:-rotate-[15deg] group-hover:-translate-x-12 transition-transform duration-700 ease-out" />
            <div className="absolute w-20 h-28 border border-white/10 rounded-lg rotate-12 translate-x-10 translate-y-4 opacity-30 group-hover:rotate-[15deg] group-hover:translate-x-12 transition-transform duration-700 ease-out" />
            <div className="absolute w-24 h-32 border border-[#D4C3A3]/40 bg-[#050505] rounded-xl z-10 shadow-[0_0_30px_rgba(212,195,163,0.1)] group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
              <div className="w-10 h-[1px] bg-[#D4C3A3]/50" />
            </div>
          </div>

          <div className="relative z-20">
            <h3 className="text-xl md:text-2xl font-serif text-[#F3F2F0] mb-3 tracking-wide">
              Too many choices.
            </h3>
            <p className="text-sm text-[#A09F9C] font-light leading-relaxed">
              Scrolling hundreds of products is overwhelming.
            </p>
          </div>
        </motion.div>

        {/* CARD 2: Generic recommendations */}
        <motion.div variants={itemVariants} className="group relative rounded-3xl border border-white/[0.04] bg-[#F3F2F0]/[0.01] p-8 md:p-10 hover:bg-[#F3F2F0]/[0.02] transition-colors duration-500 flex flex-col justify-between overflow-hidden min-h-[400px]">
          
          {/* Abstract Illustration: One glowing element among generic ones */}
          <div className="relative w-full h-40 mb-10 flex items-center justify-center gap-4">
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[#D4C3A3] blur-md opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="w-3 h-3 rounded-full bg-[#D4C3A3] z-10 scale-100 group-hover:scale-125 transition-transform duration-700 ease-out" />
            </div>
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>

          <div className="relative z-20">
            <h3 className="text-xl md:text-2xl font-serif text-[#F3F2F0] mb-3 tracking-wide">
              Generic recommendations.
            </h3>
            <p className="text-sm text-[#A09F9C] font-light leading-relaxed">
              Popular doesn't mean perfect for you.
            </p>
          </div>
        </motion.div>

        {/* CARD 3: Shopping ends too early */}
        <motion.div variants={itemVariants} className="group relative rounded-3xl border border-white/[0.04] bg-[#F3F2F0]/[0.01] p-8 md:p-10 hover:bg-[#F3F2F0]/[0.02] transition-colors duration-500 flex flex-col justify-between overflow-hidden min-h-[400px]">
          
          {/* Abstract Illustration: A timeline that continues past the usual stop point */}
          <div className="relative w-full h-40 mb-10 flex flex-col justify-center gap-6 px-4">
            {/* The standard broken journey */}
            <div className="flex items-center gap-3 opacity-30">
              <div className="w-4 h-4 rounded-full border border-white/20" />
              <div className="flex-1 h-[1px] bg-gradient-to-r from-white/20 to-transparent" />
            </div>
            
            {/* The Lucy continuous journey */}
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border border-[#D4C3A3]/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A3]" />
              </div>
              <div className="flex-1 h-[1px] bg-[#D4C3A3]/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-[#D4C3A3] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out delay-100" />
              </div>
              <div className="w-4 h-4 rounded-full border border-[#D4C3A3]/50 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#D4C3A3]" />
              </div>
            </div>
          </div>

          <div className="relative z-20">
            <h3 className="text-xl md:text-2xl font-serif text-[#F3F2F0] mb-3 tracking-wide">
              Shopping ends too early.
            </h3>
            <p className="text-sm text-[#A09F9C] font-light leading-relaxed">
              Most assistants disappear after checkout.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}