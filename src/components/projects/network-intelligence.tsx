"use client";

import React, { useState } from "react";
import { type Project } from "@/lib/data";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { motion } from "framer-motion";

export function NetworkIntelligenceProject({ project }: { project: Project }) {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

    const getSection = (title: string) => project.sections?.find((s) => s.title === title);

    const objective = getSection("PROJECT OBJECTIVE:");
    const role = getSection("ROLE:");
    const tech = getSection("TECHNOLOGIES:");

    const fadeUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }
    };

    const staggerContainer: any = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <main className="bg-[var(--background)] min-h-screen text-black font-sans selection:bg-zinc-200">
            {/* Editorial Navigation */}
            <nav className="fixed top-0 w-full z-50 mix-blend-difference pb-4 pt-8 px-6 md:px-12 pointer-events-none">
                <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
                    <Link
                        href="/work"
                        className="group flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-zinc-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                        Return to Archive
                    </Link>
                    <span className="text-xs tracking-[0.2em] uppercase text-zinc-500 hidden md:block">
                        {project.category} • Case Study
                    </span>
                </div>
            </nav>

            {/* Hero Header */}
            <section className="pt-40 md:pt-56 pb-20 px-6 md:px-12 relative">
                <div className="max-w-7xl mx-auto">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                        <div className="lg:col-span-8 flex flex-col justify-end">
                            <motion.div variants={fadeUp} className="mb-8">
                                <span className="text-xs font-sans tracking-[0.2em] uppercase text-zinc-400">{project.category}</span>
                            </motion.div>
                            <motion.h1 variants={fadeUp} className="font-serif text-6xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-tight mb-12">
                                {project.title}.
                            </motion.h1>
                            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-zinc-600 max-w-2xl leading-relaxed font-light">
                                {project.description}
                            </motion.p>
                        </div>

                        <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col justify-end gap-8 pb-4">
                            {role && Array.isArray(role.content) && (
                                <div className="border-t border-black/10 pt-4">
                                    <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-2">Role</span>
                                    <div className="flex flex-col gap-1">
                                        {role.content.map((r: string, i: number) => (
                                            <span key={i} className="block text-sm text-zinc-800">{r}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            {tech && Array.isArray(tech.content) && (
                                <div className="border-t border-black/10 pt-4">
                                    <span className="block text-[10px] tracking-[0.2em] uppercase text-zinc-400 mb-2">Technologies</span>
                                    <div className="flex flex-col gap-1">
                                        {tech.content.slice(0, 4).map((t: string, i: number) => (
                                            <span key={i} className="block text-sm text-zinc-800">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Hero Image */}
            <section className="px-6 md:px-12 pb-32">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
                        className="w-full aspect-video md:aspect-[21/9] bg-zinc-100 relative overflow-hidden flex items-center justify-center cursor-pointer group"
                        onClick={() => setLightboxImage({ src: project.image, alt: project.title })}
                    >
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-1000"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Narrative Section: Objective */}
            <section className="py-24 px-6 md:px-12 bg-zinc-50 border-y border-black/5">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                        <div className="lg:col-span-4 lg:col-start-2">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-6">Chapter I • Strategy</span>
                            <h3 className="font-serif text-4xl md:text-5xl leading-tight">
                                Strategic Problem.
                            </h3>
                        </div>
                        <div className="lg:col-span-5 lg:col-start-7 prose prose-zinc prose-lg">
                            <ul className="space-y-6 list-none pl-0">
                                {Array.isArray(objective?.content) && objective.content.map((bullet: string, i: number) => (
                                    <li key={i} className="text-zinc-600 font-light leading-relaxed text-lg flex items-start gap-4">
                                        <ArrowRight className="w-5 h-5 text-zinc-300 flex-shrink-0 mt-1" />
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sub-sections rendering */}
            {project.sections?.filter((s) => !["PROJECT OBJECTIVE:", "ROLE:", "TECHNOLOGIES:"].includes(s.title)).map((section, idx: number) => (
                <section key={idx} className="py-24 px-6 md:px-12 bg-white border-b border-black/5">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                            <div className={`lg:col-span-5 ${(section as any).image ? '' : 'lg:col-start-2'}`}>
                                <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-6">Discovery 0{idx + 1}</span>
                                <h3 className="font-serif text-4xl leading-tight mb-8 capitalize">
                                    {section.title.toLowerCase().replace(":", ".")}
                                </h3>

                                <div className="space-y-6">
                                    {Array.isArray(section.content) && section.content.map((p: string, i: number) => (
                                        <p key={i} className="text-zinc-500 font-light leading-relaxed text-lg">
                                            {p}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {(section as any).image && (
                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1 }}
                                    className="lg:col-span-6 lg:col-start-7 group cursor-pointer"
                                    onClick={() => setLightboxImage({ src: (section as any).image, alt: section.title })}
                                >
                                    <div className="aspect-[4/3] bg-zinc-50 flex items-center justify-center overflow-hidden relative group-hover:bg-zinc-100 transition-colors">
                                        <Image
                                            src={(section as any).image}
                                            alt={section.title}
                                            fill
                                            className="object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between items-center text-[10px] tracking-[0.2em] uppercase text-zinc-400 border-b border-black/5 pb-2">
                                        <span>Preview</span>
                                        <span>{section.title.split(' ')[0]}</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>
            ))}

            <ImageLightbox
                src={lightboxImage?.src || ""}
                alt={lightboxImage?.alt || ""}
                onClose={() => setLightboxImage(null)}
            />

            {/* Reflection Footer */}
            <section className="py-40 px-6 md:px-12 bg-white text-center">
                <div className="max-w-4xl mx-auto">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400 block mb-8">Reflection</span>
                    <h2 className="font-serif text-4xl md:text-5xl leading-tight text-zinc-800 italic mb-12">
                        "Transforming complex, high-stakes infrastructure into seamless human experiences requires both rigorous logic and deep empathy."
                    </h2>
                    <div className="mx-auto w-12 h-[1px] bg-zinc-300 mb-12"></div>
                    <p className="text-sm tracking-[0.2em] uppercase text-zinc-400 font-sans">
                        {project.title} · {project.category} · 2025
                    </p>
                </div>
            </section>
        </main>
    );
}
