"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageLightbox } from "@/components/ui/image-lightbox";

interface ProjectSection {
    title: string;
    content: string | string[];
    glassCard?: boolean;
    multiImage?: string[];
    verticalImages?: boolean;
}

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string;
    sections?: ProjectSection[];
}

interface NetworkIntelligenceProjectProps {
    project: Project;
}

export function NetworkIntelligenceProject({ project }: NetworkIntelligenceProjectProps) {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

    const getSection = (title: string) => project.sections?.find(s => s.title === title);

    const overview = getSection("PROJECT OVERVIEW");
    const role = getSection("ROLE & TIMELINE");
    const audience = getSection("TARGET AUDIENCE");
    const painPoints = getSection("PAIN POINTS");
    const modules = getSection("PROJECT MODULES");
    const solutioning = getSection("STEP TOWARDS SOLUTIONING");
    const designs = getSection("VISUAL DESIGNS");

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
            {/* Custom Navigation */}
            <div className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-white hover:text-purple-400 transition-colors uppercase tracking-widest text-sm font-bold"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1 space-y-8">
                        <span className="text-purple-400 font-bold tracking-[0.2em] uppercase text-sm">
                            CASE STUDY — 2022
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">
                            Orders &<br />Inventory
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-400 max-w-lg leading-relaxed">
                            {project.description}
                        </p>

                        {role && Array.isArray(role.content) && (
                            <div className="pt-8 border-t border-white/10">
                                {role.content.map((line, i) => (
                                    <p key={i} className="text-neutral-500 font-mono text-sm uppercase tracking-wider mb-2">
                                        {line}
                                    </p>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="order-1 lg:order-2 relative group cursor-pointer" onClick={() => setLightboxImage({ src: project.image, alt: project.title })}>
                        <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full opacity-50 grouphover:opacity-70 transition-opacity" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="relative w-full h-auto drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>
                </div>
            </section>

            {/* Target Audience - Custom Grid */}
            {audience && (
                <section className="py-24 bg-neutral-900 border-y border-white/5">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl font-bold mb-16 text-center text-neutral-400 uppercase tracking-widest">Target Audience</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {Array.isArray(audience.content) && audience.content.map((item, i) => (
                                <div key={i} className="aspect-square flex items-center justify-center p-6 text-center glass rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                    <span className="text-lg font-bold text-white">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Modules - Horizontal list */}
            {modules && (
                <section className="py-24 bg-black">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="md:w-1/3">
                                <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                                    Project Modules
                                </h2>
                                <p className="text-neutral-500">The ecosystem consists of several interconnected modules.</p>
                            </div>
                            <div className="md:w-2/3 flex flex-wrap gap-4 justify-end">
                                {Array.isArray(modules.content) && modules.content.map((item, i) => (
                                    <span key={i} className="px-6 py-3 rounded-full border border-purple-500/30 text-purple-300 text-sm font-bold uppercase tracking-wider hover:bg-purple-500/10 transition-colors cursor-default">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Pain Points - Glass Cards */}
            {painPoints && (
                <section className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-[#11001c] z-0" />
                    <div className="container mx-auto px-4 relative z-10">
                        <h2 className="text-3xl font-bold mb-12 text-center uppercase tracking-widest">Pain Points</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.isArray(painPoints.content) && painPoints.content.map((point, i) => (
                                <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all hover:-translate-y-2 group">
                                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/40 transition-colors">
                                        <span className="text-purple-400 font-bold">{i + 1}</span>
                                    </div>
                                    <p className="text-lg text-neutral-300 leading-relaxed">
                                        {point.startsWith("-") ? point.substring(1).trim() : point}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Solutioning */}
            {solutioning && (
                <section className="py-24 bg-[#0a0a0a]">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h2 className="text-3xl font-bold mb-12 uppercase tracking-widest text-purple-400">Solution Approach</h2>
                        <div className="space-y-6">
                            {Array.isArray(solutioning.content) && solutioning.content.map((line, i) => (
                                <div key={i} className="flex gap-4">
                                    {line.startsWith("-") && <span className="text-purple-500 mt-1">•</span>}
                                    <p className={`text-xl ${line.startsWith("-") ? "text-neutral-400" : "text-white font-bold text-2xl mb-4"}`}>
                                        {line.startsWith("-") ? line.substring(1).trim() : line}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Visual Designs */}
            {designs && designs.multiImage && (
                <section className="py-24 bg-white text-black">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold mb-16 text-center text-black">Visual Designs</h2>
                        <div className="space-y-24">
                            {designs.multiImage.map((img, i) => (
                                <div key={i} className="rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.01] cursor-pointer" onClick={() => setLightboxImage({ src: img, alt: "Visual Design" })}>
                                    <img src={img} alt="Design Mockup" className="w-full h-auto" />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

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
