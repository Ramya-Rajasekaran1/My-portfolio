"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Exploration } from "@/data/explorations";
import { assetPath } from "@/lib/base-path";

interface ExplorationCardProps {
  exploration: Exploration;
  index: number;
}

export function ExplorationCard({ exploration, index }: ExplorationCardProps) {
  const coverSrc = assetPath(`${exploration.coverImage}?v=2`);
  const isExternal = !!exploration.externalUrl;
  const launchHref = exploration.externalUrl || `/explorations/${exploration.slug}/`;
  const launchProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      className="group"
    >
      <div className="bg-card rounded-card border border-white/5 overflow-hidden transition-all duration-300 hover:border-blush/25">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <Link
            href={launchHref}
            {...launchProps}
            className="lg:col-span-7 relative aspect-[4/5] lg:aspect-auto lg:min-h-[420px] overflow-hidden block"
            aria-label={`Open ${exploration.title} exploration`}
          >
            <img
              src={coverSrc}
              alt={exploration.title}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80 lg:opacity-40" />
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm p-2.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
          </Link>

          <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center gap-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-blush mb-3 block">
                {exploration.subtitle}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight mb-4 group-hover:text-petal transition-colors">
                {exploration.title}
              </h3>
              <p className="text-parchment leading-relaxed text-sm md:text-base">
                {exploration.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {exploration.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono uppercase tracking-wider text-parchment/80 bg-white/5 border border-white/10 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href={launchHref}
                {...launchProps}
                className="inline-flex items-center gap-2 bg-blush hover:bg-petal text-blush-text font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300"
              >
                Launch experience
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/explorations/${exploration.slug}/`}
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-5 py-2.5 rounded-full text-xs uppercase tracking-widest transition-all duration-300"
              >
                View in portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
