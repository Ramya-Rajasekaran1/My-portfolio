"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { projects } from "@/lib/data";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { NetworkIntelligenceProject } from "@/components/projects/network-intelligence";
import { ContentVerifyProject } from "@/components/projects/content-verify";
import { GenAiInclusivityProject } from "@/components/projects/gen-ai-inclusivity";
import { ArrowLeft, FileText, ChevronRight, Terminal, Minus, Square, X, Activity, Compass, Target, Monitor, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    if (slug === "network-intelligence") {
        return <NetworkIntelligenceProject project={project} />;
    }

    if (slug === "content-verify") {
        return <ContentVerifyProject project={project} />;
    }

    if (slug === "gen-ai-inclusivity") {
        return <GenAiInclusivityProject project={project} />;
    }

    return (
        <main className="min-h-screen pt-40 pb-40 bg-[var(--background)] antialiased selection:bg-[var(--posthog-orange)]/30">
            <div className="container mx-auto px-6">
                <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b-4 border-black">
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
                                <Sparkles className="w-5 h-5 animate-spin-slow" />
                            </div>
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black hidden md:block">
                                RESEARCH BRIEF: {project.title.toUpperCase()}
                            </span>
                        </div>
                    </div>
                </nav>

                <article className="max-w-6xl mx-auto space-y-24">
                    {/* Project Header Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="os-card bg-white border-4 border-black shadow-[30px_30px_0px_#000]"
                    >
                        <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                            <div className="flex items-center gap-5">
                                <FileText className="w-5 h-5 text-[var(--posthog-orange)]" />
                                <span className="font-black uppercase tracking-[0.3em] text-[11px]">ANALYSIS FILE: {project.slug.toUpperCase()}</span>
                            </div>
                            <div className="flex gap-3">
                                <Minus className="w-4 h-4 text-black/20" />
                                <Square className="w-4 h-4 text-black/20" />
                                <X className="w-4 h-4 text-black/40 hover:text-red-500 cursor-pointer transition-colors" />
                            </div>
                        </div>
                        <div className="p-10 md:p-20 space-y-12">
                            <div className="space-y-6">
                                <div className="inline-block px-4 py-1.5 bg-[var(--posthog-orange)] border-2 border-black text-[10px] font-black uppercase tracking-[0.3em] text-black">
                                    CATEGORY: {project.category.toUpperCase()}
                                </div>
                                <h1 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] text-black">
                                    {project.title}
                                </h1>
                                <p className="text-2xl md:text-3xl text-zinc-600 font-bold leading-tight max-w-4xl italic">
                                    &ldquo;{project.description}&rdquo;
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Main Project Image Window */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="os-card bg-white border-4 border-black shadow-[20px_20px_0px_#000] overflow-hidden relative group cursor-pointer"
                        onClick={() => setLightboxImage({ src: project.image, alt: project.title })}>
                        <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                            <div className="flex items-center gap-3">
                                <Monitor className="w-4 h-4 text-[var(--posthog-orange)]" />
                                <span className="font-black uppercase tracking-[0.3em] text-[10px]">VISUAL BRIEF</span>
                            </div>
                        </div>
                        <div className="aspect-video relative overflow-hidden bg-zinc-100">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                        </div>
                    </motion.div>

                    {/* Content Sections */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                        <div className="md:col-span-4 space-y-12">
                            {/* Project Metadata Window */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="os-card bg-white border-4 border-black shadow-[12px_12px_0px_#000]"
                            >
                                <div className="window-title border-b-4 border-black py-3 px-6 bg-black text-white">
                                    <span className="font-black uppercase tracking-[0.3em] text-[9px]">PROJECT DATA</span>
                                </div>
                                <div className="p-8 space-y-6 font-bold text-[11px]">
                                    {[
                                        { label: "STATUS", value: "FINALIZED" },
                                        { label: "TIMELINE", value: "2024 ACTIVE" },
                                        { label: "ROLE", value: "UX LEAD" },
                                        { label: "PLATFORM", value: "ENTERPRISE" }
                                    ].map((meta, i) => (
                                        <div key={i} className="flex justify-between border-b-2 border-black/5 pb-4">
                                            <span className="text-zinc-500 uppercase tracking-widest">{meta.label}</span>
                                            <span className="text-black font-black">{meta.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="p-8 border-4 border-black bg-white flex flex-col gap-6 shadow-[12px_12px_0_var(--posthog-orange)]"
                            >
                                <div className="flex items-center gap-4 text-black font-black text-[10px] uppercase tracking-[0.2em]">
                                    <Activity className="w-5 h-5 text-[var(--posthog-orange)]" />
                                    <span>SYSTEM INTEGRITY</span>
                                </div>
                                <div className="h-3 bg-zinc-100 border-2 border-black overflow-hidden p-0.5">
                                    <div className="h-full bg-black w-[92%]" />
                                </div>
                                <span className="font-black text-[10px] text-black tracking-widest">92.4% CONFIDENCE RATING</span>
                            </motion.div>
                        </div>

                        <div className="md:col-span-8 space-y-12">
                            {project.sections?.map((section, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="os-card bg-white border-4 border-black shadow-[20px_20px_0px_#000]"
                                >
                                    <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                                        <div className="flex items-center gap-4">
                                            <div className="w-3 h-3 bg-black transform rotate-45" />
                                            <span className="font-black uppercase tracking-[0.3em] text-[11px]">{section.title.toUpperCase()}</span>
                                        </div>
                                    </div>
                                    <div className="p-10 md:p-16 text-xl md:text-2xl text-zinc-900 font-bold leading-relaxed space-y-8 antialiased">
                                        {Array.isArray(section.content) ? (
                                            <div className="space-y-8">
                                                {section.content.map((line, i) => (
                                                    <div key={i} className="flex gap-8 group">
                                                        <span className="text-zinc-200 font-black text-4xl group-hover:text-[var(--posthog-orange)] transition-colors leading-none">{(i + 1).toString().padStart(2, '0')}</span>
                                                        <p className="tracking-tight">{line}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="tracking-tight">{section.content}</p>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </article>
            </div>

            {lightboxImage && (
                <ImageLightbox
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    onClose={() => setLightboxImage(null)}
                />
            )}
        </main>
    );
}
