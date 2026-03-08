"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Minus, X, Star, Zap } from "lucide-react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const display_title = project.title.toUpperCase();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 1,
                delay: index * 0.15,
                ease: [0.23, 1, 0.32, 1]
            }}
            className="os-card os-card-hover group bg-white border-[3px] border-black shadow-[15px_15px_0_rgba(0,0,0,0.05)] hover:shadow-[25px_25px_0_var(--posthog-orange)] transition-all duration-700"
        >
            <Link href={`/work/${project.slug}`} className="block">
                {/* Window Title Bar */}
                <div className="window-title border-b-[3px] border-black py-4 px-6 bg-zinc-50/50">
                    <div className="flex items-center gap-4">
                        <Star className="w-4 h-4 text-[var(--posthog-orange)]" />
                        <span className="truncate max-w-[200px] font-black tracking-[0.3em] text-[11px]">{display_title}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-3.5 h-[3px] bg-black/10" />
                        <X className="w-5 h-5 text-black/20 group-hover:text-[var(--posthog-orange)] group-hover:rotate-90 transition-all cursor-none" />
                    </div>
                </div>

                {/* Project Content */}
                <div className="p-10 space-y-10">
                    <div className="relative aspect-[16/10] overflow-hidden border-[3px] border-black bg-zinc-100 group-hover:scale-[1.02] transition-all duration-700 shadow-inner">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 opacity-90 group-hover:opacity-100"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-5 right-5 px-4 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest z-20 shadow-[5px_5px_0_var(--posthog-orange)]">
                            DESIGN ARCHIVE
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-2.5 h-2.5 bg-black rounded-full" />
                                <span className="text-[10px] font-black tracking-[0.3em] uppercase opacity-40">{project.category}</span>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.3, rotate: 45 }}
                                className="p-3 bg-black text-white group-hover:bg-[var(--posthog-orange)] group-hover:text-black transition-all shadow-[6px_6px_0_rgba(0,0,0,0.1)]"
                            >
                                <ArrowUpRight className="w-5 h-5" />
                            </motion.div>
                        </div>

                        <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.85] group-hover:underline decoration-[var(--posthog-orange)] decoration-[10px] underline-offset-10">
                            {project.title}
                        </h3>

                        <p className="text-[13px] font-bold text-zinc-600 leading-tight uppercase tracking-tight line-clamp-2 italic">
                            &ldquo;{project.description}&rdquo;
                        </p>
                    </div>

                    {/* Bottom Meta Bar */}
                    <div className="pt-8 flex items-center justify-between border-t-[3px] border-black/5">
                        <div className="flex gap-4">
                            {["UX RESEARCH", "STRATEGY"].map(tag => (
                                <span key={tag} className="px-3 py-1.5 bg-black/5 text-black text-[10px] font-black tracking-widest uppercase">{tag}</span>
                            ))}
                        </div>
                        <div className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-[var(--posthog-orange)] animate-pulse" />
                            <span className="text-[10px] font-black opacity-30 tracking-[0.2em]">VERIFIED 2024</span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
