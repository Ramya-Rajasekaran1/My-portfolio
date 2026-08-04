"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    slug: string;
    backgroundColor?: string;
    thumbnailImage?: string;
    externalLink?: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
    isFeatured?: boolean;
}

export function ProjectCard({ project, index, isFeatured }: ProjectCardProps) {
    if (isFeatured) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
                className="group cursor-pointer col-span-full"
            >
                <a 
                    href={project.externalLink || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/${project.slug}/`} 
                    target={project.externalLink ? "_blank" : undefined}
                    rel={project.externalLink ? "noopener noreferrer" : undefined}
                    className="block w-full h-full z-[10000] relative cursor-pointer pointer-events-auto rounded-[32px] focus:outline-none focus-visible:ring-4 focus-visible:ring-blush focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black" 
                    aria-label={`View ${project.title} case study`}
                >
                    {/* Featured Layout (Horizontal Row on Desktop) */}
                    <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 bg-white/40 dark:bg-black/40 border border-neutral-250/20 dark:border-white/5 backdrop-blur-sm rounded-[32px] p-6 lg:p-10 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.03)] dark:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-2">
                        
                        {/* Image Showcase Container */}
                        <div className="w-full lg:w-3/5 aspect-[16/10] overflow-hidden rounded-[24px] border border-neutral-200/20 dark:border-neutral-800 relative shrink-0">
                            <div
                                className={`absolute inset-0 ${project.slug === "tracking-quality-dashboard" ? "bg-contain bg-center" : "bg-cover bg-left"} bg-no-repeat transition-transform duration-700 group-hover:scale-105`}
                                style={{ backgroundImage: `url(${project.thumbnailImage || project.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                            <div className="absolute top-4 right-4 bg-white/95 dark:bg-black p-2 rounded-[12px] shadow-md border border-neutral-200/50 dark:border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                <ArrowUpRight className="w-4 h-4 text-blush" />
                            </div>
                        </div>

                        {/* Meta text details */}
                        <div className="w-full lg:flex-1 flex flex-col gap-4 text-left">
                            <span className="px-3.5 py-1.5 w-fit text-[10px] font-bold font-outfit uppercase tracking-widest bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 text-blush dark:text-orange-400 rounded-full shadow-sm">
                                {project.category}
                            </span>
                            <h3 className="text-2xl md:text-4xl font-outfit font-black tracking-tight text-neutral-900 dark:text-white group-hover:text-blush transition-colors leading-tight">
                                {project.title}
                            </h3>
                            <p className="font-serif text-neutral-600 dark:text-neutral-300 text-sm md:text-base leading-relaxed">
                                {project.description}
                            </p>
                            <div className="text-xs font-bold text-blush font-outfit uppercase tracking-wider mt-2 flex items-center gap-1.5">
                                Explore Case Study &rarr;
                            </div>
                        </div>
                    </div>
                </a>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
            className="group cursor-pointer"
        >
            <a 
                href={project.externalLink || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/${project.slug}/`} 
                target={project.externalLink ? "_blank" : undefined}
                rel={project.externalLink ? "noopener noreferrer" : undefined}
                className="block w-full h-full z-[10000] relative cursor-pointer pointer-events-auto rounded-3xl focus:outline-none focus-visible:ring-4 focus-visible:ring-blush focus-visible:ring-offset-2 dark:focus-visible:ring-offset-black" 
                aria-label={`View ${project.title} case study`}
            >
                <div className="flex flex-col">
                    {/* Title & Tag - MOBILE ONLY: above image */}
                    <div className="md:hidden flex flex-col gap-2.5 mb-4">
                        <h3 className="text-xl font-outfit font-black tracking-tight text-neutral-900 dark:text-white group-hover:text-blush transition-colors">
                            {project.title}
                        </h3>
                        <div className="flex">
                            <span className="px-3 py-1.5 text-[10px] font-bold font-outfit uppercase tracking-widest bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 text-blush dark:text-orange-400 rounded-full shadow-sm">
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Image (Clay Card Container) */}
                    <div
                        className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-white dark:bg-black border border-neutral-200/20 dark:border-neutral-800 shadow-[0_20px_40px_-10px_rgba(15,23,42,0.08),0_0_0_1px_rgba(15,23,42,0.02),inset_-6px_-6px_12px_rgba(15,23,42,0.05),inset_6px_6px_12px_rgba(255,255,255,1)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05),inset_-6px_-6px_12px_rgba(0,0,0,0.8),inset_6px_6px_12px_rgba(255,255,255,0.03)] transition-transform duration-500 group-hover:-translate-y-2"
                        style={{ backgroundColor: project.backgroundColor }}
                    >
                        <div
                            className={`absolute inset-0 ${project.slug === "tracking-quality-dashboard" ? "bg-contain bg-center" : "bg-cover bg-left"} bg-no-repeat transition-transform duration-700 group-hover:scale-105`}
                            style={{ backgroundImage: `url(${project.thumbnailImage || project.image})` }}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        <div className="absolute top-4 right-4 bg-white/95 dark:bg-black p-2 rounded-[12px] shadow-md border border-neutral-200/50 dark:border-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                            <ArrowUpRight className="w-4 h-4 text-blush" />
                        </div>

                        {/* Mild Noise Effect */}
                        <div
                            className="absolute inset-0 opacity-[0.08] dark:opacity-[0.04] pointer-events-none mix-blend-overlay z-0"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                backgroundRepeat: "repeat",
                            }}
                        />

                        {/* Glass Overlay on Hover */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 glass border-t border-neutral-200/30 dark:border-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-b-[24px]">
                            <span className="text-[10px] font-bold font-outfit uppercase tracking-widest text-blush mb-1 block">
                                {project.category}
                            </span>
                            <h3 className="text-lg font-black font-outfit text-neutral-900 dark:text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="font-serif text-neutral-600 dark:text-neutral-300 text-xs leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    </div>

                    {/* Title & Tag - DESKTOP ONLY: below image */}
                    <div className="hidden md:flex flex-col gap-3 mt-6">
                        <h3 className="text-xl md:text-2xl font-outfit font-black tracking-tight text-neutral-900 dark:text-white group-hover:text-blush transition-colors">
                            {project.title}
                        </h3>
                        <p className="font-serif text-neutral-600 dark:text-neutral-300 text-xs leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex mt-1">
                            <span className="px-3.5 py-1.5 text-[10px] font-bold font-outfit uppercase tracking-widest bg-white dark:bg-black border border-neutral-300 dark:border-neutral-800 text-blush dark:text-orange-400 rounded-full shadow-sm">
                                {project.category}
                            </span>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
}
