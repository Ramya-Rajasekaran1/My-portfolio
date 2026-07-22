"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import type { Exploration } from "@/data/explorations";
import { useState } from "react";

interface RobotTurntableExplorationProps {
  exploration: Exploration;
}

export function RobotTurntableExploration({ exploration }: RobotTurntableExplorationProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const demoUrl = "https://calrobot.netlify.app";

  return (
    <div className="h-screen w-screen flex flex-col bg-[#07090e] text-[#CFC5BA] overflow-hidden fixed inset-0 z-[9999]">
      {/* Header HUD */}
      {!isFullscreen && (
        <header className="w-full bg-[#111622]/90 backdrop-blur-md border-b border-white/5 py-4 px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all duration-300 relative z-30">
          <div className="flex items-center gap-4">
            <Link
              href="/work/"
              className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-widest text-[#F79CBa] hover:text-[#FFC4D4] transition-colors bg-white/5 border border-white/10 rounded-full px-4 py-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Work
            </Link>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#F79CBa]/70">
                {exploration.subtitle}
              </span>
              <h1 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight">
                {exploration.title}
              </h1>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap gap-1.5 mr-2">
              {exploration.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-mono uppercase tracking-wider text-[#CFC5BA]/85 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => setIsFullscreen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-bold font-outfit uppercase tracking-widest hover:text-white transition-colors bg-white/5 hover:bg-white/10 border border-white/10 rounded-full px-4 py-2"
              title="Fullscreen Mode"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              Fullscreen
            </button>

            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#F79CBa] hover:bg-[#FFC4D4] text-[#4A152B] font-bold px-4 py-2 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:translate-x-0.5"
            >
              Open Site
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </header>
      )}

      {/* Embedded Iframe Container */}
      <div className="flex-1 w-full relative bg-[#07090e]">
        {isFullscreen && (
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-40 inline-flex items-center gap-1.5 text-xs font-bold font-outfit uppercase tracking-widest text-[#4A152B] bg-[#F79CBa] hover:bg-[#FFC4D4] border border-[#F79CBa] rounded-full px-4 py-2 shadow-lg transition-all duration-300"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            Exit Fullscreen
          </button>
        )}
        <iframe
          src={demoUrl}
          title={exploration.title}
          className="w-full h-full border-none absolute inset-0 bg-[#07090e]"
          allow="autoplay; fullscreen; xr-spatial-tracking"
        />
      </div>
    </div>
  );
}

