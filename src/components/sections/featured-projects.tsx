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
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12 border-b-8 border-black pb-12"
                >
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 bg-[var(--posthog-orange)] shadow-[0_0_10px_var(--posthog-orange)]" />
                            <span className="tech-label tracking-[0.4em]">SELECTED CASE STUDIES</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                            High Impact<br />Case Studies
                        </h2>
                        <p className="text-zinc-600 font-bold text-lg max-w-2xl uppercase tracking-tighter leading-tight italic">
                            A curated selection of end to end design solutions, from deep UX research to scalable design systems.
                        </p>
                    </div>
                    <Link
                        href="/work"
                        className="btn-posthog flex items-center gap-4 group px-10 py-5 text-sm"
                    >
                        EXPLORE ARCHIVE
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-500" />
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
