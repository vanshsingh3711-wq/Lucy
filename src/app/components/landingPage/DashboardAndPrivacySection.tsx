"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Package, 
  Bookmark, 
  History, 
  Lock, 
  EyeOff, 
  ShieldCheck, 
  ArrowRight
} from "lucide-react";

export default function DashboardAndPrivacySection() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax for background elements
  const yGlow = useTransform(scrollYProgress, [0, 1], [200, -200]);
  
  const easePremium = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easePremium } },
  };

  return (
    <section ref={containerRef} className="relative w-full bg-[#050505] py-32 md:py-48 px-6 overflow-hidden">
      
      {/* Ambient Lighting */}
      <motion.div 
        style={{ y: yGlow }}
        className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] bg-[#D4C3A3]/[0.02] rounded-full blur-[150px] pointer-events-none mix-blend-screen" 
      />

      {/* 
        ========================================================================
        SECTION 10: THE PERSONAL DASHBOARD (The Client Atelier)
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto mb-40 md:mb-64">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, ease: easePremium }}>
            <span className="block text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-[#A09F9C] mb-6">
              The Client Atelier
            </span>
            <h2 className="font-serif text-[10vw] md:text-[60px] lg:text-[70px] text-[#F3F2F0] leading-[0.9] tracking-tight">
              Your digital <br />
              <span className="italic text-[#DCD7CB]">wardrobe archive.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }} className="pb-2">
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#A09F9C] border border-white/10 px-4 py-2 rounded-full bg-white/[0.02] backdrop-blur-md">
              Secure Portal Active
            </span>
          </motion.div>
        </div>

        {/* The Spatial Dashboard Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6 relative z-10"
        >
          
          {/* Active Order Tracker (Large Feature) */}
          <motion.div variants={itemVariants} className="md:col-span-7 group relative rounded-[2rem] border border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl overflow-hidden h-[400px] md:h-[450px] flex flex-col justify-between p-8 hover:border-white/[0.1] transition-colors duration-500">
            <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700">
              <img src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1000&auto=format&fit=crop" alt="Delivery" className="w-full h-full object-cover grayscale mix-blend-overlay" />
            </div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#D4C3A3]/10 border border-[#D4C3A3]/30 flex items-center justify-center">
                  <Package className="w-4 h-4 text-[#D4C3A3]" />
                </div>
                <div>
                  <span className="block text-[9px] uppercase tracking-[0.2em] text-[#D4C3A3] mb-0.5">Active Delivery</span>
                  <span className="text-sm font-medium text-[#F3F2F0] tracking-wide">The Row Collection</span>
                </div>
              </div>
              <span className="text-[10px] text-[#A09F9C] uppercase tracking-widest font-mono">ID: LX-9082</span>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-end mb-4">
                <span className="font-serif text-4xl text-[#F3F2F0]">Arriving Tomorrow</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A09F9C]">Out for delivery</span>
              </div>
              {/* Premium Status Bar */}
              <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden">
                <motion.div initial={{ width: 0 }} whileInView={{ width: "85%" }} transition={{ duration: 2, delay: 0.5, ease: easePremium }} className="h-full bg-gradient-to-r from-[#D4C3A3]/50 to-[#D4C3A3]" />
              </div>
            </div>
          </motion.div>

          {/* Saved Styles & Wishlist */}
          <motion.div variants={itemVariants} className="md:col-span-5 group relative rounded-[2rem] border border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl overflow-hidden h-[400px] md:h-[450px] flex flex-col p-8 hover:border-white/[0.1] transition-colors duration-500">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                <Bookmark className="w-3.5 h-3.5 text-[#A09F9C]" />
              </div>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#A09F9C]">Curated Wishlist</span>
            </div>

            {/* Fanned Polaroids Effect */}
            <div className="relative flex-1 flex justify-center items-center mt-4">
              <div className="absolute w-[160px] aspect-[3/4] rounded-xl overflow-hidden border border-white/10 -rotate-12 -translate-x-12 opacity-40 group-hover:-rotate-[15deg] group-hover:-translate-x-16 transition-all duration-700 ease-out shadow-2xl">
                <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Saved 1" />
              </div>
              <div className="absolute w-[160px] aspect-[3/4] rounded-xl overflow-hidden border border-white/10 rotate-12 translate-x-12 opacity-40 group-hover:rotate-[15deg] group-hover:translate-x-16 transition-all duration-700 ease-out shadow-2xl">
                <img src="https://images.unsplash.com/photo-1618245233158-1f5589c32f81?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover grayscale" alt="Saved 2" />
              </div>
              <div className="absolute z-10 w-[180px] aspect-[3/4] rounded-xl overflow-hidden border border-[#D4C3A3]/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:scale-105 group-hover:-translate-y-4 transition-all duration-700 ease-out">
                <img src="https://images.unsplash.com/photo-1550614000-4b95d466f914?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Saved 3" />
                <div className="absolute bottom-3 left-3 bg-[#050505]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <span className="text-[8px] uppercase tracking-widest text-[#F3F2F0]">Look 44 / Saved</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Shopping History List */}
          <motion.div variants={itemVariants} className="md:col-span-12 rounded-[2rem] border border-white/[0.05] bg-white/[0.01] backdrop-blur-3xl p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 hover:border-white/[0.1] transition-colors duration-500">
            <div className="flex items-center gap-6 w-full md:w-auto">
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-[#0A0A0A]">
                <History className="w-4 h-4 text-[#A09F9C]" />
              </div>
              <div>
                <span className="font-serif text-2xl text-[#F3F2F0] block mb-1">Shopping History</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A09F9C]">14 looks acquired • 2 returns processed</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] overflow-hidden bg-[#111]">
                    <img src={`https://images.unsplash.com/photo-${1500000000000 + i * 10000}?q=80&w=100&auto=format&fit=crop`} alt="Item" className="w-full h-full object-cover opacity-60" />
                  </div>
                ))}
              </div>
              <button className="text-[10px] uppercase tracking-[0.2em] text-[#F3F2F0] hover:text-[#D4C3A3] transition-colors flex items-center gap-2">
                View Archive <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* 
        ========================================================================
        SECTION 11: PRIVACY & TRUST
        ========================================================================
      */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: easePremium }}>
            <span className="flex items-center justify-center gap-2 text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-medium text-[#A09F9C] mb-6">
              <Lock className="w-3 h-3 text-[#D4C3A3]" /> Absolute Discretion
            </span>
            <h2 className="font-serif text-[9vw] md:text-[50px] lg:text-[60px] text-[#F3F2F0] leading-[0.9] tracking-tight">
              Your style belongs <br className="hidden md:block" />
              <span className="italic text-[#DCD7CB]">only to you.</span>
            </h2>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6"
        >
          {/* Card 1: Explicit Approval */}
          <motion.div variants={itemVariants} className="group rounded-[2rem] border border-white/[0.04] bg-[#0A0A0A] p-10 hover:bg-white/[0.02] transition-colors duration-500 h-[320px] flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center group-hover:border-[#D4C3A3]/50 transition-colors duration-500">
              <ShieldCheck className="w-5 h-5 text-[#A09F9C] group-hover:text-[#D4C3A3] transition-colors duration-500" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#F3F2F0] mb-3">Never buys without approval.</h3>
              <p className="text-sm text-[#A09F9C] font-light leading-relaxed">
                Lucy curates and holds items in your cart. A transaction is absolutely never processed without your explicit, one-tap final consent.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Private Preferences */}
          <motion.div variants={itemVariants} className="group rounded-[2rem] border border-white/[0.04] bg-[#0A0A0A] p-10 hover:bg-white/[0.02] transition-colors duration-500 h-[320px] flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center group-hover:border-[#D4C3A3]/50 transition-colors duration-500">
              <EyeOff className="w-5 h-5 text-[#A09F9C] group-hover:text-[#D4C3A3] transition-colors duration-500" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#F3F2F0] mb-3">Zero data brokering.</h3>
              <p className="text-sm text-[#A09F9C] font-light leading-relaxed">
                Your sizes, stylistic preferences, and budget constraints are encrypted. Your data is used exclusively to style you, never sold to advertisers.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Secure Vault */}
          <motion.div variants={itemVariants} className="group rounded-[2rem] border border-white/[0.04] bg-[#0A0A0A] p-10 hover:bg-white/[0.02] transition-colors duration-500 h-[320px] flex flex-col justify-between">
            <div className="w-12 h-12 rounded-full border border-white/10 bg-[#050505] flex items-center justify-center group-hover:border-[#D4C3A3]/50 transition-colors duration-500">
              <Lock className="w-5 h-5 text-[#A09F9C] group-hover:text-[#D4C3A3] transition-colors duration-500" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#F3F2F0] mb-3">Bank-grade architecture.</h3>
              <p className="text-sm text-[#A09F9C] font-light leading-relaxed">
                Financial details are vaulted using AES-256 encryption. We utilize the same commerce infrastructure trusted by global luxury houses.
              </p>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}