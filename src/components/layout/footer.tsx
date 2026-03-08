"use client";

import Link from "next/link";
import { Compass, Activity, MousePointer2, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t-8 border-black bg-[var(--background)] py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="flex flex-col gap-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="p-3 bg-black text-white group-hover:bg-[var(--posthog-orange)] transition-all shadow-[8px_8px_0_var(--posthog-orange)] group-hover:shadow-[8px_8px_0_#000]">
                <Compass className="w-8 h-8 group-hover:rotate-180 transition-transform duration-700" />
              </div>
              <div className="flex flex-col">
                <span className="text-4xl font-black uppercase tracking-tighter text-black leading-[0.8]">STUDIO OS</span>
                <span className="tech-label text-[var(--posthog-orange)] mt-2 tracking-[0.4em]">VER. 2024 LITE</span>
              </div>
            </Link>
            <p className="text-[11px] font-black text-zinc-400 uppercase tracking-[0.5em] max-w-sm leading-relaxed">
              © {new Date().getFullYear()} ARCHIVAL SYSTEM ESTABLISHED. ALL DESIGNS INDEXED FOR PERMANENT REFERENCE.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            <div className="flex flex-col gap-6">
              <span className="tech-label tracking-[0.3em] opacity-40">DIRECTORY</span>
              <div className="flex flex-col gap-4 font-black uppercase text-sm tracking-tighter">
                <Link href="/work" className="hover:text-[var(--posthog-orange)] transition-all">[ARCHIVE]</Link>
                <Link href="/about" className="hover:text-[var(--posthog-orange)] transition-all">[PROFILE]</Link>
                <Link href="/contact" className="hover:text-[var(--posthog-orange)] transition-all">[SIGNAL]</Link>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="tech-label tracking-[0.3em] opacity-40">RESOURCES</span>
              <div className="flex flex-col gap-4 font-black uppercase text-sm tracking-tighter">
                <a href="https://linkedin.com/in/ramyar06" target="_blank" className="hover:text-[var(--posthog-orange)] transition-all">LINKEDIN</a>
                <a href="https://medium.com/@crramya06" target="_blank" className="hover:text-[var(--posthog-orange)] transition-all">MEDIUM INTEL</a>
                <a href="/resume.pdf" target="_blank" className="hover:text-[var(--posthog-orange)] transition-all">RESUME ACCESS</a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Designer Footer */}
        <div className="mt-32 pt-12 border-t-4 border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40 group hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-8">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="w-2 h-6 bg-black" />)}
            </div>
            <span className="tech-label tracking-[0.3em]">STUDIO SESSION ACTIVE // LOCALHOST 3000</span>
          </div>

          <div className="flex items-center gap-5">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-black" />
            </motion.div>
            <span className="tech-label italic tracking-[0.4em] uppercase">SYSTEM READY FOR COLLABORATION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
