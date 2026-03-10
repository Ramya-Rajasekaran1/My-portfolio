"use client";

import Link from "next/link";
import { Compass, Activity, MousePointer2, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-[var(--background)] py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20">
          <div className="flex flex-col gap-10">
            <Link href="/" className="flex items-center gap-5 group">
              <div className="w-3 h-3 rounded-full bg-zinc-300 group-hover:bg-[var(--posthog-orange)] group-hover:scale-150 transition-all duration-700" />
              <div className="flex flex-col">
                <span className="font-serif text-4xl text-black leading-[1]">Ramya Rajasekaran</span>
                <span className="text-[11px] text-zinc-400 mt-2 tracking-[0.2em] uppercase">UX Designer & Researcher</span>
              </div>
            </Link>
            <p className="font-sans text-[12px] text-zinc-500 max-w-sm leading-relaxed">
              © {new Date().getFullYear()} Designed with purpose. Building intuitive, human-centric experiences.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <span className="tech-label tracking-[0.1em] text-zinc-400">Index</span>
            <div className="flex flex-col gap-4 font-medium text-sm text-zinc-600">
              <Link href="/work" className="hover:text-black transition-colors w-max">Archive</Link>
              <Link href="/about" className="hover:text-black transition-colors w-max">Profile</Link>
              <Link href="/contact" className="hover:text-black transition-colors w-max">Reach out</Link>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="tech-label tracking-[0.1em] text-zinc-400">Socials</span>
            <div className="flex flex-col gap-4 font-medium text-sm text-zinc-600">
              <a href="https://linkedin.com/in/ramyar06" target="_blank" className="hover:text-black transition-colors w-max">LinkedIn</a>
              <a href="https://medium.com/@crramya06" target="_blank" className="hover:text-black transition-colors w-max">Medium</a>
              <a href="/resume.pdf" target="_blank" className="hover:text-black transition-colors w-max">Resume</a>
            </div>
          </div>
        </div>

        {/* Editorial Sign-off */}
        <div className="mt-32 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-zinc-400 text-xs">
          <span>Based in the USA. Open to global opportunities.</span>
          <span>Designed with care, coded with precision.</span>
        </div>
      </div>
    </footer>
  );
}
