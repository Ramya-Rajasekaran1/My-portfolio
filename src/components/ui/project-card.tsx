"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Minus, X, Star, Zap } from "lucide-react";
import Image from "next/image";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    const display_title = project.title.toUpperCase();

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 1.2,
                delay: index * 0.1,
                ease: [0.2, 0.65, 0.3, 0.9]
            }}
            className="group block relative"
        >
            <Link href={`/work/${project.slug}`} className="flex flex-col gap-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] bg-zinc-100 mb-2">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                        <span className="font-sans text-[11px] uppercase tracking-[0.1em] text-zinc-400">{project.category}</span>
                        <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-black transition-colors duration-500" />
                    </div>

                    <h3 className="font-serif text-3xl text-black leading-tight group-hover:text-zinc-600 transition-colors">
                        {project.title}
                    </h3>

                    <p className="font-sans text-sm text-zinc-500 leading-relaxed line-clamp-2 pr-8">
                        {project.description}
                    </p>
                </div>
            </Link>
        </motion.div>
    );
}
