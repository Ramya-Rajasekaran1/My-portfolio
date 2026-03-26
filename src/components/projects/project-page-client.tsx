"use client";

import React, { useState } from "react";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function ProjectPageClient({ project }: { project: any }) {
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

    return (
        <main className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-widest text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Work
                </Link>

                <article className="max-w-4xl mx-auto">
                    {/* Rest of your JSX code from the original file */}
                    <div className="mb-12">
                        <span className="text-xs font-bold font-outfit uppercase tracking-widest text-purple-600 dark:text-purple-400 mb-4 block">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 tracking-tight">
                            {project.title}
                        </h1>
                        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                            {project.description}
                        </p>
                    </div>

                    {/* Add all the remaining JSX from your original component here */}
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