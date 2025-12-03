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
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Selected Work</h2>
                        <p className="text-neutral-600 dark:text-neutral-400 max-w-xl">
                            A collection of projects that showcase my passion for creating intuitive and impactful user experiences.
                        </p>
                    </div>
                    <Link
                        href="/work"
                        className="group flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
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
