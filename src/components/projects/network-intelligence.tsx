"use client";

import React, { useState } from "react";
import { type Project } from "@/lib/data";
import {
    ArrowLeft, Activity, Compass,
    Monitor, Target, Zap, ShieldCheck, Layers, ChevronRight, Search, Star
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { motion } from "framer-motion";

export function NetworkIntelligenceProject({ project }: { project: Project }) {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

    // Helper to find sections
    const getSection = (title: string) => project.sections?.find((s) => s.title === title);

    const objective = getSection("PROJECT OBJECTIVE:");
    const role = getSection("ROLE:");
    const tech = getSection("TECHNOLOGIES:");

    return (
        <main className="min-h-screen bg-[var(--background)] text-black font-sans selection:bg-[var(--posthog-orange)]/30 antialiased overflow-hidden">
            {/* Custom Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b-4 border-black">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-4 text-sm font-black text-zinc-500 hover:text-black transition-all uppercase tracking-[0.3em] group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                        [BACK TO ARCHIVE]
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="p-2 bg-black text-white shadow-[4px_4px_0_var(--posthog-orange)]">
                            <Compass className="w-5 h-5 animate-spin-slow" />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black hidden md:block">
                            STRATEGY BREAKDOWN: {project.title.toUpperCase()}
                        </span>
                    </div>
                </div>
            </nav>

            <article className="container mx-auto px-6 pt-40 pb-40 space-y-40">
                {/* Hero / Header Window */}
                <section className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                        className="os-card bg-white border-4 border-black shadow-[30px_30px_0px_#000] overflow-hidden"
                    >
                        <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                            <div className="flex items-center gap-5">
                                <Monitor className="w-5 h-5 text-[var(--posthog-orange)]" />
                                <span className="font-black tracking-[0.3em] text-[11px]">PROJECT CANVAS</span>
                            </div>
                            <div className="flex items-center gap-4 opacity-20">
                                <Star className="w-4 h-4 text-[var(--posthog-orange)] animate-spin-slow" />
                                <ShieldCheck className="w-5 h-5 text-black" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 md:p-20 space-y-12 border-b-4 lg:border-b-0 lg:border-r-4 border-black/5">
                                <div className="space-y-8">
                                    <div className="inline-block px-6 py-2 bg-[var(--posthog-orange)] border-4 border-black text-[11px] font-black text-black uppercase tracking-[0.3em] shadow-[8px_8px_0_#000]">
                                        AUDIT PHASE: {project.category.toUpperCase()}
                                    </div>
                                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] text-black">
                                        {project.title}
                                    </h1>
                                    <p className="text-2xl text-zinc-900 font-bold leading-tight uppercase tracking-tight italic">
                                        &ldquo;{project.description}&rdquo;
                                    </p>
                                </div>

                                {role && Array.isArray(role.content) && (
                                    <div className="space-y-6">
                                        <span className="tech-label tracking-[0.3em]">STRATEGIC ROLE</span>
                                        <div className="flex flex-wrap gap-4">
                                            {role.content.map((r: string, i: number) => (
                                                <div key={i} className="px-6 py-3 bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[8px_8px_0_var(--posthog-orange)]">
                                                    {r}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="relative group cursor-none aspect-video lg:aspect-auto" onClick={() => setLightboxImage({ src: project.image, alt: project.title })}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 contrast-125 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white p-6 border-4 border-black group-hover:bg-[var(--posthog-orange)] group-hover:text-black transition-all opacity-0 group-hover:opacity-100 z-30 shadow-[10px_10px_0_#000]">
                                    <Search className="w-8 h-8" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Objective Section */}
                <section className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="os-card bg-white border-4 border-black shadow-[20px_20px_0_rgba(0,0,0,0.05)]"
                    >
                        <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                            <div className="flex items-center gap-5">
                                <Target className="w-5 h-5 text-[var(--posthog-orange)]" />
                                <span className="font-black tracking-[0.3em] text-[11px]">MISSION PARAMETERS</span>
                            </div>
                        </div>
                        <div className="p-12 md:p-20 flex flex-col lg:flex-row gap-20">
                            <div className="flex-1 space-y-10">
                                <span className="tech-label tracking-[0.3em]">01 // STRATEGIC PROBLEM</span>
                                <ul className="space-y-8">
                                    {Array.isArray(objective?.content) && objective.content.map((bullet: string, i: number) => (
                                        <li key={i} className="flex gap-8 group">
                                            <div className="text-[var(--posthog-orange)] font-black group-hover:translate-x-3 transition-transform text-2xl">»</div>
                                            <span className="text-2xl md:text-3xl font-black leading-[1.1] text-zinc-900 uppercase tracking-tighter">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:w-px bg-black/10" />
                            <div className="flex-1 space-y-10">
                                <span className="tech-label tracking-[0.3em]">02 // ARCHITECTURE UNIT</span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {Array.isArray(tech?.content) && tech.content.map((t: string, i: number) => (
                                        <div key={i} className="p-6 bg-zinc-50 border-4 border-black/5 flex items-center justify-between group hover:bg-black hover:text-white transition-all shadow-[8px_8px_0_rgba(0,0,0,0.03)] hover:shadow-[12px_12px_0_var(--posthog-orange)]">
                                            <span className="text-[11px] font-black uppercase tracking-[0.2em]">{t}</span>
                                            <Zap className="w-5 h-5 text-[var(--posthog-orange)] group-hover:rotate-12 transition-transform" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* Sub-sections rendering */}
                {project.sections?.filter((s) => !["PROJECT OBJECTIVE:", "ROLE:", "TECHNOLOGIES:"].includes(s.title)).map((section, idx: number) => (
                    <motion.section
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="max-w-7xl mx-auto space-y-16"
                    >
                        <div className="flex items-center gap-10">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-black shrink-0">{section.title}</h2>
                            <div className="h-2 bg-black/10 flex-1 shadow-inner" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">
                            <div className={`md:col-span-12 space-y-10 ${(section as any).image ? 'md:col-span-6' : ''}`}>
                                {Array.isArray(section.content) && section.content.map((p: string, i: number) => (
                                    <div key={i} className="flex gap-10 p-12 bg-white border-4 border-black shadow-[15px_15px_0_rgba(0,0,0,0.03)] hover:shadow-[20px_20px_0_var(--posthog-orange)] transition-all">
                                        <div className="mt-1"><ChevronRight className="w-8 h-8 text-[var(--posthog-orange)]" /></div>
                                        <p className="text-2xl md:text-3xl text-zinc-900 font-bold leading-[1.1] uppercase tracking-tighter italic">
                                            &ldquo;{p}&rdquo;
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {(section as any).image && (
                                <div className="md:col-span-6">
                                    <div className="os-card bg-white p-5 border-4 border-black group cursor-none shadow-[20px_20px_0_rgba(0,0,0,0.05)]" onClick={() => setLightboxImage({ src: (section as any).image, alt: section.title })}>
                                        <div className="relative aspect-video overflow-hidden border-4 border-black opacity-90 group-hover:opacity-100 transition-opacity">
                                            <Image
                                                src={(section as any).image}
                                                alt={section.title}
                                                fill
                                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 contrast-125 scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10" />
                                        </div>
                                        <div className="mt-8 flex justify-between items-center px-4">
                                            <span className="tech-label tracking-[0.3em] opacity-40">HIFI PREVIEW 0{idx + 1}</span>
                                            <div className="flex gap-3 opacity-20">
                                                <div className="w-3 h-3 rounded-full bg-black" />
                                                <div className="w-3 h-3 rounded-full bg-black animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.section>
                ))}

                <ImageLightbox
                    src={lightboxImage?.src || ""}
                    alt={lightboxImage?.alt || ""}
                    onClose={() => setLightboxImage(null)}
                />
            </article>

            {/* Shutdown Divider */}
            <div className="container mx-auto px-6 py-60">
                <div className="h-2 bg-black w-full relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-[var(--background)] border-4 border-black"
                    >
                        <Compass className="w-10 h-10 text-black" />
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
