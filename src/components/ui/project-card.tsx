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
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${(project as any).thumbnailImage || project.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <ArrowUpRight className="w-5 h-5 text-neutral-900 dark:text-white" />
                    </div>

                    {/* Mild Noise Effect */}
                    <div
                        className="absolute inset-0 opacity-[0.1] dark:opacity-[0.05] pointer-events-none mix-blend-overlay z-0"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "repeat",
                        }}
                    />

                    {/* Glass Overlay with Additional Details on Hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 glass border-t border-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs font-medium font-outfit uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2 block">
                            {project.category}
                        </span>
                        <h3 className="text-xl font-bold font-outfit text-neutral-900 dark:text-white mb-2">
                            {project.title}
                        </h3>
                        <p className="font-inter text-neutral-700 dark:text-neutral-300 text-sm line-clamp-3">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Shorter default view - just category and title */}
                <div className="flex flex-col gap-4 mt-6">
                    <div className="flex">
                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full border border-purple-500/20">
                            {project.category}
                        </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {project.title}
                    </h3>
                </div>
            </Link>
        </motion.div>
    );
}
