"use client";

import React, { useState } from "react";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ProjectPageClient({ project }: { project: any }) {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <main className="min-h-screen pt-32 pb-24 bg-white dark:bg-neutral-950 transition-colors duration-500">
            <div className="container mx-auto px-4">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Work
                </Link>

                <article className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <span className="text-xs font-bold font-outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4 block">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight text-neutral-900 dark:text-white">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                            {project.description}
                        </p>
                    </div>

                    {project.image && (
                        <div 
                            className="rounded-2xl overflow-hidden mb-16 border border-neutral-200 dark:border-white/10 cursor-zoom-in group"
                            onClick={() => setLightboxImage({ src: project.image, alt: project.title })}
                        >
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                            />
                        </div>
                    )}

                    <div className="space-y-16">
                        {project.sections?.map((section: any, idx: number) => (
                            <section key={idx} className="space-y-6">
                                <h2 className="text-2xl md:text-3xl font-serif font-bold text-neutral-900 dark:text-white">
                                    {section.title}
                                </h2>
                                <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-700 dark:text-neutral-300">
                                    {Array.isArray(section.content) ? (
                                        <ul className="space-y-4 list-disc pl-6">
                                            {section.content.map((item: string, i: number) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p>{section.content}</p>
                                    )}
                                </div>
                            </section>
                        ))}
                    </div>
                </article>
            </div>

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