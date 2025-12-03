"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string;
    backgroundColor?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
        >
            <Link href={`/work/${project.slug}`}>
                <div
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-200 dark:bg-neutral-800"
                    style={{ backgroundColor: project.backgroundColor }}
                >
                    <div
                        className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${(project as any).thumbnailImage || project.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <ArrowUpRight className="w-5 h-5 text-neutral-900 dark:text-white" />
                    </div>

                    {/* Glass Overlay with Additional Details on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 glass border-t border-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2 block">
                            {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2">
                            {project.title}
                        </h3>
                        <p className="text-neutral-700 dark:text-neutral-300 text-sm line-clamp-3">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Shorter default view - just category and title */}
                <div className="space-y-2 mt-4">
                    <span className="text-xs font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400">
                        {project.category}
                    </span>
                    <h3 className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                </div>
            </Link>
        </motion.div>
    );
}
