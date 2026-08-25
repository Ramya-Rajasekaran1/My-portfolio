"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Exploration } from "@/data/explorations";
import { useEffect } from "react";

interface BobaTeaExplorationProps {
  exploration: Exploration;
}

export function BobaTeaExploration({ exploration }: BobaTeaExplorationProps) {
  const demoUrl = exploration.externalUrl || "https://ramya-rajasekaran1.github.io/Bobatea/";

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="h-screen w-screen bg-canvas overflow-hidden fixed inset-0 z-[9999]">
      {/* Floating Back Button */}
      <Link
        href="/explorations/"
        className="absolute top-[80px] left-[40px] z-40 inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-widest text-white hover:text-blush transition-all duration-300 bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-lg cursor-pointer"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back
      </Link>

      {/* Embedded Iframe Container */}
      <div className="w-full h-full relative bg-canvas">
        <iframe
          src={demoUrl}
          title={exploration.title}
          className="w-full h-full border-none absolute inset-0 bg-canvas"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
      </div>
    </div>
  );
}
