"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "Discover", href: "#discover" },
  { name: "Experience", href: "#experience" },
  { name: "Trending", href: "#trending" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-lucy-page/80 backdrop-blur-md border-b border-white/5 py-4 shadow-2xl"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Branding & Agent Status */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="font-serif text-2xl tracking-[0.2em] text-lucy-ivory hover:text-lucy-accent transition-colors duration-300 uppercase"
          >
            Lucy
          </Link>

          {/* Minimal Agent Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/10">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lucy-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-lucy-accent"></span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-lucy-muted font-medium">
              Agent Active
            </span>
          </div>
        </div>

        {/* Center: Editorial Links */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.2em] text-lucy-ivory/70 hover:text-lucy-ivory transition-colors duration-300 py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-lucy-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Right: Primary Call to Action */}
        <div className="flex items-center gap-6">
          <Link
            href="#meet-lucy"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-lucy-ivory/20 bg-lucy-surface/40 text-lucy-ivory hover:border-lucy-accent hover:text-lucy-accent transition-all duration-300 text-xs uppercase tracking-[0.15em] font-medium backdrop-blur-sm"
          >
            <span>Meet Lucy</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-lucy-muted group-hover:text-lucy-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </Link>
        </div>

      </div>
    </motion.header>
  );
}