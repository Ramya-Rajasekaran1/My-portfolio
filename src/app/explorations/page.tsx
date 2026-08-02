import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { explorations } from "@/data/explorations";
import { ExplorationCard } from "@/components/explorations/exploration-card";

export const metadata: Metadata = {
  title: "Cal AI Labs · Explorations | Ramya Rajasekaran",
  description:
    "Interactive experiments and creative prototypes from Cal AI Labs — scroll-driven 3D experiences, generative art, and immersive landing pages.",
};

export default function ExplorationsPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 relative z-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mb-16">
          <span className="text-xs font-bold font-outfit uppercase tracking-[0.35em] text-blush mb-4 block">
            Cal AI Labs
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 tracking-tight text-white">
            Explorations
          </h1>
          <p className="text-lg md:text-xl text-parchment max-w-2xl font-sans leading-relaxed">
            A lab for interactive prototypes — where artwork, motion, and code meet.
            Each piece is a self-contained experience you can scroll, explore, and feel.
          </p>
        </div>

        <div className="space-y-12">
          {explorations.map((exploration, index) => (
            <ExplorationCard key={exploration.slug} exploration={exploration} index={index} />
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/10 text-center">
          <p className="text-parchment/70 text-sm mb-6 font-sans">
            More experiments coming soon — 3D robotics, gesture interfaces, and beyond.
          </p>
          <Link
            href="/work/"
            className="inline-flex items-center gap-3 text-xs font-bold font-outfit uppercase tracking-widest text-blush hover:text-petal transition-colors"
          >
            View professional case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
