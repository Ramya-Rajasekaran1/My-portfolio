"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";

export function FeaturedProjects() {
    const featuredProjects = projects.slice(0, 3);

    return (
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-12 gap-4 md:gap-6">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-extralight mb-4 tracking-tight text-neutral-900 dark:text-white">Selected Work</h2>
                        <p className="text-neutral-600 dark:text-white/80 max-w-xl text-base md:text-lg font-light leading-relaxed">
                            A collection of projects that showcase my passion for creating intuitive and impactful user experiences.
                        </p>
                        {/* Mobile only: link below text */}
                        <Link
                            href="/work"
                            className="md:hidden mt-4 group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blush-text dark:text-blush hover:text-blue-950 dark:hover:text-petal transition-colors"
                        >
                            View all projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    {/* Desktop only: link on the right */}
                    <Link
                        href="/work"
                        className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-blush-text dark:text-blush hover:text-blue-950 dark:hover:text-petal transition-colors group"
                    >
                        View all projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
