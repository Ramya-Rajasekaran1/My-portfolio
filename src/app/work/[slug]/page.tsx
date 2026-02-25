"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { projects } from "@/lib/data";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { NetworkIntelligenceProject } from "@/components/projects/network-intelligence";
import { ContentVerifyProject } from "@/components/projects/content-verify";
import { GenAiInclusivityProject } from "@/components/projects/gen-ai-inclusivity";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectPage() {
    const params = useParams();
    const slug = params.slug as string;
    const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    if (slug === "network-intelligence") {
        return <NetworkIntelligenceProject project={project} />;
    }

    if (slug === "content-verify") {
        return <ContentVerifyProject project={project} />;
    }

    if (slug === "gen-ai-inclusivity") {
        return <GenAiInclusivityProject project={project} />;
    }

    return (
        <main className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4">
                <Link
                    href="/work"
                    className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Work
                </Link>

                <article className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <span className="text-sm font-medium uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-4 block">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                            {project.description}
                        </p>
                    </div>

                    <div className="aspect-video w-full relative rounded-2xl overflow-hidden mb-16 group">
                        {/* Blurred Background Layer */}
                        <div
                            className="absolute inset-0 bg-cover bg-center blur-3xl scale-110 opacity-50 dark:opacity-40 transition-transform duration-700"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />

                        {/* Main Image Layer */}
                        <div
                            className="relative w-full h-full bg-cover bg-center z-10 transition-transform duration-500 group-hover:scale-[1.02]"
                            style={{ backgroundImage: `url(${project.image})` }}
                        />
                    </div>

                    <div className="max-w-none space-y-3">
                        {/* Individual Glass Cards for Key Info */}
                        {project.sections && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
                                {project.sections
                                    .filter(s => ["WHAT:", "PROJECT OBJECTIVE:", "TARGET AUDIENCE", "TIMELINE"].includes(s.title))
                                    .map((section, index) => (
                                        <div key={index} className="glass rounded-2xl p-6 md:p-8 space-y-3 transition-all duration-300 hover:-translate-y-3 hover:translate-x-3 hover:shadow-2xl hover:backdrop-blur-3xl">
                                            <h3 className="text-sm font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                                                {section.title}
                                            </h3>
                                            <div className="text-base md:text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
                                                {Array.isArray(section.content) ? (
                                                    <div className="space-y-2">
                                                        {section.content.map((line, i) => (
                                                            <p key={i} className={line.startsWith("-") ? "pl-4" : ""}>
                                                                {line}
                                                            </p>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <p>{section.content}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        )}

                        {/* Other Sections */}
                        {project.sections
                            ?.filter(s => !["WHAT:", "PROJECT OBJECTIVE:", "TARGET AUDIENCE", "TIMELINE"].includes(s.title))
                            .map((section, index) => {
                                const isGlassCard = (section as any).glassCard;
                                const hasIllustration = (section as any).image && section.title === "SAMPLE USER STORY";
                                const sectionImage = (section as any).image;
                                const isSideBySide = (section as any).sideBySide;

                                const content = (
                                    <>
                                        {(section as any).showDivider && (
                                            <hr className="mb-[2px] mt-0 border-t border-neutral-300 dark:border-neutral-700" />
                                        )}
                                        <h3 className={`text-lg font-bold uppercase tracking-wider mb-3 ${isGlassCard ? 'text-purple-600 dark:text-purple-400' : 'text-neutral-900 dark:text-white'}`}>
                                            {section.title}
                                        </h3>
                                        {isSideBySide ? (
                                            <div className={`flex flex-col md:flex-row gap-6 items-start ${(section as any).imageLeft ? 'md:flex-row-reverse' : ''}`}>
                                                <div className={`flex-1 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300 ${(section as any).textCard ? 'glass rounded-2xl p-8' : ''}`}>
                                                    {(section as any).chips && (
                                                        <div className="flex flex-wrap gap-3 mb-6">
                                                            {(section as any).chips.map((chip: string, i: number) => (
                                                                <span key={i} className="px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-900/20">
                                                                    {chip}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}

                                                    {Array.isArray(section.content) && (
                                                        <div className="space-y-3">
                                                            {section.content.map((line, i) => {
                                                                const isSubtitle = line.trim().endsWith(":") || line.includes("What and why") || line.includes("UX research");
                                                                return line === "" ? <div key={i} className="h-2" /> : (
                                                                    <div key={i} className={`flex gap-3 ${line.startsWith("-") ? "pl-2" : ""}`}>
                                                                        {line.startsWith("-") && (
                                                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2.5" />
                                                                        )}
                                                                        <p className={`${line.startsWith("-") ? "flex-1" : ""} ${isSubtitle ? "font-bold text-purple-600 dark:text-purple-400 text-xl mb-2 mt-2" : ""}`}>
                                                                            {line.startsWith("-") ? line.substring(1).trim() : line}
                                                                        </p>
                                                                    </div>
                                                                );
                                                            })}
                                                        </div>
                                                    )}
                                                </div>
                                                {sectionImage && (
                                                    <div className={`w-full ${(section as any).imageRight ? 'md:w-3/12' : 'md:w-1/2'} flex-shrink-0 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer hover:opacity-90 transition-opacity shadow-lg`}
                                                        onClick={() => setLightboxImage({ src: sectionImage, alt: section.title })}>
                                                        <img
                                                            src={sectionImage}
                                                            alt={section.title}
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <div className={`text-lg leading-relaxed ${isGlassCard ? 'text-neutral-800 dark:text-neutral-200' : 'text-neutral-700 dark:text-neutral-300'}`}>
                                                {(section as any).chips && (
                                                    <div className="flex flex-wrap gap-3 mb-6">
                                                        {(section as any).chips.map((chip: string, i: number) => (
                                                            <span key={i} className="px-4 py-1.5 rounded-full border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-bold uppercase tracking-wider bg-purple-50 dark:bg-purple-900/20">
                                                                {chip}
                                                            </span>
                                                        ))}
                                                    </div>
                                                )}

                                                {Array.isArray(section.content) ? (
                                                    <div className="space-y-3 mb-6">
                                                        {section.content.map((line, i) => {
                                                            const isSubtitle = line.trim().endsWith(":") || line.includes("What and why") || line.includes("UX research");
                                                            return line === "" ? <div key={i} className="h-2" /> : (
                                                                <div key={i} className={`flex gap-3 ${line.startsWith("-") ? "pl-2" : ""}`}>
                                                                    {line.startsWith("-") && (
                                                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-600 dark:bg-purple-400 mt-2.5" />
                                                                    )}
                                                                    <p className={`${line.startsWith("-") ? "flex-1" : ""} ${isSubtitle ? "font-bold text-purple-600 dark:text-purple-400 text-xl mb-2 mt-2" : ""}`}>
                                                                        {line.startsWith("-") ? line.substring(1).trim() : line}
                                                                    </p>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                ) : (
                                                    <p className="mb-6">{section.content}</p>
                                                )}

                                                {(section as any).equation && (
                                                    <div className="mb-8 p-6 rounded-xl bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700 text-center">
                                                        <code className="text-sm md:text-base font-mono text-purple-700 dark:text-purple-300 font-semibold">
                                                            {(section as any).equation}
                                                        </code>
                                                    </div>
                                                )}

                                                {sectionImage && !hasIllustration && !isSideBySide && (
                                                    <div className="mt-4 mb-8 rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 cursor-pointer hover:opacity-90 transition-opacity"
                                                        onClick={() => setLightboxImage({ src: sectionImage, alt: section.title })}>
                                                        <img
                                                            src={sectionImage}
                                                            alt={section.title}
                                                            className="w-full h-auto"
                                                        />
                                                    </div>
                                                )}
                                                {(section as any).multiImage && (
                                                    <div className={`mt-4 mb-4 grid gap-6 items-start ${(section as any).verticalImages ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                                                        {(section as any).multiImage.map((img: string, idx: number) => {
                                                            const stickyNote = (section as any).stickyNote;
                                                            const hasStickyNote = stickyNote && stickyNote.targetIndex === idx;

                                                            return (
                                                                <React.Fragment key={idx}>
                                                                    {hasStickyNote ? (
                                                                        <div className={`flex flex-col md:flex-row gap-6 items-start ${stickyNote.position === 'left' ? 'md:flex-row-reverse' : ''}`}>
                                                                            <div
                                                                                className="flex-1 rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-sm hover:shadow-md"
                                                                                onClick={() => setLightboxImage({ src: img, alt: `${section.title} ${idx + 1}` })}
                                                                            >
                                                                                <img
                                                                                    src={img}
                                                                                    alt={`${section.title} ${idx + 1}`}
                                                                                    className="w-full h-auto"
                                                                                />
                                                                            </div>
                                                                            <div className="w-full md:w-5/12 flex-shrink-0">
                                                                                <img
                                                                                    src={stickyNote.image}
                                                                                    alt="Note"
                                                                                    className="w-full h-auto drop-shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ) : (
                                                                        <div
                                                                            className={`rounded-xl overflow-hidden cursor-pointer hover:opacity-90 transition-opacity shadow-sm hover:shadow-md ${(section as any).firstImageFullWidth && idx === 0 ? 'md:col-span-2' : ''}`}
                                                                            onClick={() => setLightboxImage({ src: img, alt: `${section.title} ${idx + 1}` })}
                                                                        >
                                                                            <img
                                                                                src={img}
                                                                                alt={`${section.title} ${idx + 1}`}
                                                                                className="w-full h-auto"
                                                                            />
                                                                        </div>
                                                                    )}
                                                                    {(section as any).middleText && idx === 0 && (
                                                                        <div className="py-2 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
                                                                            <p>{(section as any).middleText}</p>
                                                                        </div>
                                                                    )}
                                                                </React.Fragment>
                                                            );
                                                        })}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </>
                                );

                                return isGlassCard ? (
                                    <div key={index} className={`relative ${(section as any).topMargin ? 'pt-4' : ''}`}>
                                        <div className={`glass rounded-2xl p-8 md:p-10 flex-1 transition-all duration-300 hover:-translate-y-3 hover:translate-x-3 hover:shadow-2xl hover:backdrop-blur-3xl relative z-10 ${hasIllustration ? 'md:pr-40 lg:pr-48 pb-20 md:pb-24' : ''}`}>
                                            {content}
                                        </div>
                                        {hasIllustration && (
                                            <div className="hidden md:block absolute -right-12 lg:-right-16 -bottom-24 lg:-bottom-28 w-36 lg:w-44 z-20">
                                                <img
                                                    src={sectionImage}
                                                    alt="Illustration"
                                                    className="w-full h-auto drop-shadow-2xl"
                                                />
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <div key={index} className={`${(section as any).largeSpacing ? 'pt-32' : (section as any).topMargin ? 'pt-4' : ''} ${(section as any).bottomMargin ? 'pb-2' : ''}`}>
                                        {content}
                                    </div>
                                );
                            })}
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
