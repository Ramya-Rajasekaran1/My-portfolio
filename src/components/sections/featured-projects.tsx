"use client";

import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { motion } from "framer-motion";

export function FeaturedProjects() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="py-40 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12"
                >
                    <div className="space-y-6 max-w-2xl">
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-4">Selected Work</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-black leading-[1.1] tracking-tight">
                            Impact-driven case studies.
                        </h2>
                    </div>
                    <Link
                        href="/work"
                        className="group flex items-center gap-4 text-sm font-medium text-zinc-600 hover:text-black transition-colors pb-2 border-b border-transparent hover:border-black"
                    >
                        View Full Archive
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
