import React from "react";
import { type Project } from "@/lib/data";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export function ContentVerifyProject({ project }: { project: Project }) {
    const [lightboxImage, setLightboxImage] = React.useState<{ src: string; alt: string } | null>(null);

    // Helper to find sections by title
    const getSection = (title: string) => project.sections?.find(s => s.title === title);

    const objective = getSection("OBJECTIVE");
    const painPoints = getSection("PAIN POINTS");
    const existing = getSection("EXISTING MECHANISM VS OUR TOOL");
    const research = getSection("RESEARCH");
    const summary = getSection("SUMMARY GENERATION CRITERIA");
    const task = getSection("TASK INTERPRETATION");
    const personas = getSection("PERSONAS");
    const feedback = getSection("DISCOVERY FEEDBACK");
    const cryPath = getSection("CRY PATH PATTERN");
    const impact = getSection("IMPACT & RESULTS"); // Assuming this exists or using Summary
    const reflection = getSection("REFLECTION & FUTURE WORK");

    const stats = [
        {
            id: 1,
            label: "Alert Fatigue",
            number: "30%",
            text: "of critical alerts are missed or ignored because they are buried in 'noise'.",
            source: "Osterman Research (2025)"
        },
        {
            id: 2,
            label: "Hidden Bias",
            number: "72%",
            text: "of adults view the spread of biased information as a major threat.",
            source: "Pew Research Center (2025)"
        },
        {
            id: 3,
            label: "Statistical Deception",
            number: "33%",
            text: "of users consistently click through to source links to verify numbers.",
            source: "Reuters Institute (2025)"
        },
        {
            id: 4,
            label: "Information Voids",
            number: "28%",
            text: "of users rarely verify AI summaries, meaning omitted viewpoints cease to exist.",
            source: "Time Magazine (2026)"
        }
    ];

    return (
        <main className="min-h-screen bg-[#FDFBF7] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 font-serif selection:bg-yellow-200 dark:selection:bg-yellow-900/30">
            {/* Hide global navbar for this page */}
            <style jsx global>{`
                body > div > nav:first-of-type {
                    display: none !important;
                }
            `}</style>

            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FDFBF7]/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-sm font-sans font-medium text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Work
                    </Link>
                    <span className="text-sm font-sans font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-600">
                        ContentVerify Case Study
                    </span>
                </div>
            </nav>

            {/* Hero Section - Editorial Style */}
            <header className="pt-24 pb-12 md:pt-32 md:pb-16 border-b border-neutral-200 dark:border-neutral-800">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <span className="inline-block py-1 px-3 border border-neutral-900 dark:border-neutral-100 rounded-full text-xs font-sans font-bold uppercase tracking-widest mb-6">
                        {project.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-3xl font-serif text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl mx-auto italic">
                        "{project.description}"
                    </p>
                </div>
            </header>

            {/* Main Content Area - Single Column Reading Flow */}
            <article className="container mx-auto px-4 py-8 md:py-12">

                {/* Large visual breakout */}
                <div className="w-full aspect-video relative rounded-none md:rounded-lg overflow-hidden mb-24 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                    <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
                </div>

                {/* Introduction / Objective */}
                <section className="max-w-2xl mx-auto mb-24">
                    <div className="mb-4 flex items-center gap-4">
                        <span className="h-px w-8 bg-neutral-900 dark:bg-neutral-100"></span>
                        <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">The Objective</h2>
                    </div>

                    <div className="prose prose-lg dark:prose-invert font-serif leading-loose">
                        <p className="text-xl md:text-2xl text-neutral-800 dark:text-neutral-200 mb-6 antialiased">
                            The prime objective of this tool is to help users recognize when what they are reading is influenced by bias or incomplete reporting.
                        </p>
                    </div>

                    {/* Stats Grid - "The Numbers" */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col gap-3 p-8 bg-neutral-900/5 dark:bg-neutral-100/5 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:bg-neutral-900/10 dark:hover:bg-neutral-100/10 transition-all duration-300">
                                <span className="text-xs font-sans font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-500">{stat.label}</span>
                                <span className="text-5xl md:text-6xl font-bold font-serif text-neutral-900 dark:text-neutral-100 block my-0">{stat.number}</span>
                                <p className="text-sm font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {stat.text}
                                </p>
                                <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-wider mt-0">{stat.source}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pain Points as 'Pull Quotes' */}
                {painPoints && (
                    <section className="max-w-4xl mx-auto mb-24">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16 italic">The Friction Points</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {Array.isArray(painPoints.content) && painPoints.content.filter((line: string) => line.startsWith("-")).map((point: string, index: number) => {
                                const [title, desc] = point.substring(1).split("->").map((s: string) => s.trim());
                                return (
                                    <div key={index} className="flex flex-col border-l-2 border-neutral-900 dark:border-neutral-100 pl-6 py-2">
                                        <h3 className="text-lg font-sans font-bold uppercase tracking-wide mb-2 text-neutral-900 dark:text-neutral-100">{title}</h3>
                                        <p className="font-serif text-lg text-neutral-600 dark:text-neutral-400 italic">"{desc || title}"</p>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                )}

                {/* Research - Full Width Breakout */}
                {research && (
                    <section className="w-full bg-neutral-100 dark:bg-neutral-900 py-24 mb-24 -mx-4 px-4 md:-mx-0 md:rounded-3xl">
                        <div className="max-w-2xl mx-auto">
                            <div className="mb-8 flex items-center gap-4 justify-center">
                                <span className="h-px w-8 bg-neutral-900 dark:bg-neutral-100"></span>
                                <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-100">Research & Insights</h2>
                                <span className="h-px w-8 bg-neutral-900 dark:bg-neutral-100"></span>
                            </div>
                            <div className="prose prose-lg dark:prose-invert font-serif text-center">
                                {Array.isArray(research.content) && research.content.map((line: string, i: number) => (
                                    <p key={i}>{line}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Existing vs New - Side by Side Editorial */}
                {existing && (
                    <section className="max-w-5xl mx-auto mb-24 flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1">
                            <h2 className="text-3xl font-serif font-bold mb-6">Existing vs. Our Tool</h2>
                            <div className="prose prose-lg dark:prose-invert font-serif">
                                {Array.isArray(existing.content) && existing.content.map((line: string, i: number) => (
                                    <p key={i}>{line.startsWith("-") ? line.substring(1) : line}</p>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1">
                            {/* Simple minimalist graphic placeholder or actual image */}
                            <div className="w-full aspect-square bg-neutral-100 dark:bg-neutral-900 rounded-full flex items-center justify-center p-12 border border-neutral-200 dark:border-neutral-800 cursor-pointer"
                                onClick={() => (existing as any).image && setLightboxImage({ src: (existing as any).image, alt: existing.title })}>
                                <div className="text-center">
                                    <span className="block text-xs font-sans font-bold uppercase tracking-widest mb-4 text-neutral-400">Visualization</span>
                                    <span className="font-serif italic text-neutral-500">Click to view analysis pipeline</span>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Criteria - High Tech/Minimalist List */}
                {summary && (
                    <section className="max-w-3xl mx-auto mb-24">
                        <div className="border-t-4 border-black dark:border-white pt-8">
                            <h2 className="text-4xl font-serif font-bold mb-12">Generative Criteria</h2>
                            <div className="space-y-8">
                                {Array.isArray(summary.content) && summary.content.filter((l: string) => l.startsWith("-")).map((line: string, i: number) => {
                                    const [term, def] = line.substring(1).split(":").map((s: string) => s.trim());
                                    return (
                                        <div key={i} className="flex flex-col md:flex-row md:items-baseline gap-4">
                                            <span className="font-sans font-bold uppercase tracking-wider text-sm w-32 shrink-0">{term}</span>
                                            <span className="font-serif text-lg text-neutral-600 dark:text-neutral-400">{def}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </section>
                )}

                {/* Task Interpretation + Persona - Two Columns */}
                <section className="max-w-5xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div>
                        <h3 className="font-sans font-bold uppercase tracking-widest mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">Task Interpretation</h3>
                        <div className="space-y-6">
                            {Array.isArray(task?.content) && task?.content.filter((l: string) => /^\d\./.test(l)).map((line: string, i: number) => (
                                <div key={i} className="flex gap-4">
                                    <span className="font-serif font-bold text-2xl text-neutral-300">0{i + 1}</span>
                                    <p className="font-serif text-lg pt-1">{line.replace(/^\d\.\s*/, '')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="font-sans font-bold uppercase tracking-widest mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4">Personas</h3>
                        <div className="space-y-4">
                            {Array.isArray(personas?.content) && personas?.content.filter((l: string) => l.startsWith("-")).map((line: string, i: number) => (
                                <p key={i} className="font-serif text-lg bg-neutral-50 dark:bg-neutral-900 p-4 rounded-lg">
                                    {line.substring(1).trim()}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Discovery Feedback - Sticky Note Style */}
                {feedback && (
                    <section className="max-w-4xl mx-auto mb-24 p-8 md:p-12 bg-[#fffdf5] dark:bg-[#1a1a1a] shadow-sm border border-neutral-200 dark:border-neutral-800 transform -rotate-1">
                        <h2 className="font-sans font-bold uppercase tracking-widest mb-8 text-neutral-400">Discovery Feedback</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Array.isArray(feedback.content) && feedback.content.filter((l: string) => l.startsWith("-")).map((line: string, i: number) => (
                                <div key={i} className="font-serif text-lg leading-relaxed">
                                    "{line.substring(1).trim()}"
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </article>

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
