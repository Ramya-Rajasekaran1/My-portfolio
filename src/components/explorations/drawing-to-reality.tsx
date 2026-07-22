"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Exploration } from "@/data/explorations";
import { assetPath } from "@/lib/base-path";

interface DrawingToRealityExplorationProps {
  exploration: Exploration;
}

export function DrawingToRealityExploration({ exploration }: DrawingToRealityExplorationProps) {
  const [demoUrl, setDemoUrl] = useState("");

  useEffect(() => {
    const url = assetPath(`/demos/${exploration.slug}/index.html`);
    setDemoUrl(url);
    window.location.replace(url);
  }, [exploration.slug]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-[#120603] text-[#CFC5BA] px-6">
      <p className="font-serif text-xl text-white">Opening {exploration.title}…</p>
      {demoUrl ? (
        <a
          href={demoUrl}
          className="inline-flex items-center gap-2 bg-[#F79CBa] hover:bg-[#FFC4D4] text-[#4A152B] font-bold px-6 py-3 rounded-full text-xs uppercase tracking-widest"
        >
          Open experience
          <ExternalLink className="w-4 h-4" />
        </a>
      ) : null}
      <Link
        href="/explorations/"
        className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-widest hover:text-[#FFC4D4] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Explorations
      </Link>
    </div>
  );
}
