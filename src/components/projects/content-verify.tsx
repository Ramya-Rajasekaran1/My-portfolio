"use client";

import React from "react";
import { type Project } from "@/lib/data";
import {
    ArrowLeft,
    ChevronRight, Target, Zap, Search, Monitor,
    Activity, Users, ClipboardCheck, ShieldCheck, Layers, MousePointer2, X
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export function ContentVerifyProject({ project }: { project: Project }) {
    const [lightboxImage, setLightboxImage] = React.useState<{ src: string; alt: string } | null>(null);
    const [selectedPainPoint, setSelectedPainPoint] = React.useState<string | null>('fatigue');
    const [showDesignLogic, setShowDesignLogic] = React.useState(true);

    // Helper to find sections by title
    const getSection = (title: string) => project.sections?.find((s) => s.title === title);

    const objective = getSection("PROJECT OBJECTIVE:");
    const task = getSection("TASK INTERPRETATION");
    const personas = getSection("PERSONAS");

    const interactivePainPoints = [
        {
            id: 'fatigue',
            title: 'Alert Fatigue',
            rootCause: 'AI flags trivial/common knowledge.',
            designLogic: 'Strict Exclusion Rules (ignoring trivia like "The Big Apple").'
        },
        {
            id: 'bias',
            title: 'Hidden Bias',
            rootCause: 'Fact-checkers only look for "Lies," not "Framing."',
            designLogic: 'Framing Detection (identifying blame/morality wording).'
        },
        {
            id: 'deception',
            title: 'Statistical Deception',
            rootCause: 'Numbers used without scale or context.',
            designLogic: 'Contextual Stats Scrutiny (flagging misleading percentages).'
        },
        {
            id: 'voids',
            title: 'Information Voids',
            rootCause: 'One-sided reporting sounds authoritative.',
            designLogic: 'Omission Flagging (alerting users when a side is missing).'
        }
    ];

    return (
        <main className="min-h-screen bg-[var(--background)] text-black font-sans selection:bg-[var(--posthog-orange)]/30 antialiased">
            {/* Custom Navigation */}
            <nav className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/5">
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-4 text-sm font-black text-zinc-500 hover:text-black transition-all uppercase tracking-[0.3em] group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
                        [BACK TO ARCHIVE]
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="p-2 bg-black text-black shadow-[4px_4px_0_var(--posthog-orange)]">
                            <Zap className="w-5 h-5 animate-spin-slow" />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.4em] text-black hidden md:block">
                            DESIGN AUDIT: {project.title.toUpperCase()}
                        </span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="pt-32 pb-16 px-6 border-b border-black/5 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] scale-150 rotate-12">
                    <Target className="w-96 h-96" />
                </div>
                <div className="max-w-5xl mx-auto space-y-8 relative z-10">
                    <div className="inline-block px-4 py-1.5 bg-[var(--posthog-orange)] border-2 border-black text-[10px] font-black uppercase tracking-[0.3em] text-black">
                        FILE CATEGORY: {project.category.toUpperCase()}
                    </div>
                    <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                        {project.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-zinc-600 leading-tight max-w-3xl font-medium uppercase tracking-tight italic">
                        &ldquo;{project.description}&rdquo;
                    </p>
                </div>
            </header>

            {/* Main Content Area */}
            <article className="container mx-auto px-6 py-20 space-y-32 pb-40">
                {/* Introduction / Objective */}
                <section className="max-w-6xl mx-auto">
                    <div className=" bg-white border border-black/5 shadow-[20px_20px_0px_#000]">
                        <div className="border-b border-black/5 flex items-center gap-4 py-4 px-6 bg-zinc-50/50 border-b border-black/5 py-4 px-8 bg-zinc-50/50">
                            <div className="flex items-center gap-3">
                                <Target className="w-5 h-5 text-[var(--posthog-orange)]" />
                                <span className="font-black uppercase tracking-[0.3em] text-[11px]">MISSION PARAMETERS</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-4 h-4 text-black/20" />
                                <X className="w-4 h-4 text-black/40 hover:text-red-500 cursor-pointer" />
                            </div>
                        </div>
                        <div className="p-10 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-16">
                            <div className="lg:col-span-8 space-y-8">
                                <span className="tech-label font-black tracking-[0.4em] mb-4 block">01 // PROJECT OBJECTIVE</span>
                                <ul className="space-y-8">
                                    {Array.isArray(objective?.content) && objective.content.map((bullet: string, i: number) => (
                                        <li key={i} className="flex gap-6 group">
                                            <div className="w-6 h-6 rounded-none bg-black text-black flex items-center justify-center text-[10px] font-bold shrink-0 mt-1 group-hover:bg-[var(--posthog-orange)] group-hover:text-black transition-colors">
                                                0{i + 1}
                                            </div>
                                            <span className="text-lg md:text-xl font-medium leading-snug text-zinc-800 uppercase tracking-tight">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="lg:col-span-4 flex flex-col gap-4 pt-12 lg:pt-0 border-t-2 lg:border-t-0 lg:border-l-2 border-dashed border-black/10 lg:pl-16">
                                <span className="tech-label font-black tracking-[0.4em]">CORE INTEGRATIONS</span>
                                {objective && (objective as { chips?: string[] }).chips?.map((chip: string, i: number) => (
                                    <div
                                        key={i}
                                        className="px-6 py-5 bg-white border-2 border-black group hover:bg-[var(--posthog-orange)] transition-all cursor-crosshair shadow-[4px_4px_0_rgba(0,0,0,0.05)] hover:shadow-[4px_4px_0_#000]"
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-black">{chip}</span>
                                            <Zap className="w-4 h-4 text-zinc-300 group-hover:text-black transition-colors" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Outcome-Based Usability Metrics */}
                <section className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <span className="tech-label font-black tracking-[0.4em]">VALIDATION OUTPUT: UX AUDIT</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black">USABILITY METRICS</h2>
                        <div className="h-1 w-20 bg-[var(--posthog-orange)] mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { label: "BIAS RECOGNITION", value: "Chi² = 4.6", p: "RESULT P < 0.05", desc: "Participants were significantly more likely to identify biased statements compared to baseline." },
                            { label: "USER ENGAGEMENT", value: "Chi² = 16.4", p: "RESULT P < 0.005", desc: "Substantial increase in interaction with contested content vs uncontrolled reading." },
                            { label: "COGNITIVE SHIFT", value: "19% > 50%", p: "SHIFT DELTA", desc: "Measured opinion shifts indicate exposure to alternatives via tool altered perspectives." }
                        ].map((metric, i) => (
                            <div key={i} className=" bg-white p-10 border-2 border-black group hover:shadow-[12px_12px_0_var(--posthog-orange)] transition-all">
                                <div className="space-y-8">
                                    <div className="space-y-2">
                                        <div className="text-5xl font-black text-black tracking-tighter group-hover:text-[var(--posthog-orange)] transition-colors">{metric.value}</div>
                                        <div className="text-[11px] text-zinc-400 uppercase font-black tracking-widest">{metric.p}</div>
                                    </div>
                                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-black border-y-2 border-black/10 py-4">{metric.label}</h3>
                                    <p className="text-sm text-zinc-500 font-medium uppercase leading-tight italic">{metric.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive Pain Points Section */}
                <section className="max-w-7xl mx-auto space-y-16 py-20 bg-zinc-50 os-border border-black/5">
                    <div className="flex flex-col items-center gap-6 px-6">
                        <h2 className="text-4xl md:text-8xl font-black uppercase tracking-tighter text-center">LOGIC INTERVENTION</h2>
                        <div className="flex items-center gap-4 bg-black text-black px-8 py-4 border-2 border-black shadow-[12px_12px_0_var(--posthog-orange)]">
                            <MousePointer2 className="w-5 h-5 text-[var(--posthog-orange)]" />
                            <span className="text-[12px] font-black uppercase tracking-[0.3em]">SELECT NODE TO ANALYZE LOGIC</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start px-6">
                        <div className="lg:col-span-4 flex flex-col gap-4">
                            {interactivePainPoints.map((point) => (
                                <button
                                    key={point.id}
                                    onClick={() => {
                                        setSelectedPainPoint(selectedPainPoint === point.id ? null : point.id);
                                        setShowDesignLogic(false);
                                    }}
                                    className={`w-full p-8 os-border border-2 text-left transition-all duration-300 group flex items-center justify-between ${selectedPainPoint === point.id
                                        ? 'bg-black border-black text-black shadow-[8px_8px_0_var(--posthog-orange)]'
                                        : 'bg-white border-black text-black hover:bg-zinc-50'
                                        }`}
                                >
                                    <span className={`text-lg font-black uppercase tracking-tighter flex items-center gap-4 ${selectedPainPoint === point.id ? 'text-[var(--posthog-orange)]' : ''}`}>
                                        <span className={`w-2 h-2 rounded-full ${selectedPainPoint === point.id ? 'bg-[var(--posthog-orange)] animate-ping' : 'bg-black'}`} />
                                        {point.title}
                                    </span>
                                    {selectedPainPoint === point.id && (
                                        <ChevronRight className="w-5 h-5 text-[var(--posthog-orange)]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="lg:col-span-8">
                            {selectedPainPoint ? (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className=" bg-white border border-black/5"
                                >
                                    <div className="border-b border-black/5 flex items-center gap-4 py-4 px-6 bg-zinc-50/50 border-b border-black/5 py-4 px-8 bg-zinc-50/50">
                                        <div className="flex items-center gap-3">
                                            <Activity className="w-5 h-5 text-[var(--posthog-orange)]" />
                                            <span className="font-black uppercase tracking-[0.3em] text-[11px]">LOGIC TRACE NODE {selectedPainPoint.toUpperCase()}</span>
                                        </div>
                                    </div>
                                    <div className="p-12 md:p-16 space-y-12">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                                            <div
                                                onClick={() => setShowDesignLogic(!showDesignLogic)}
                                                className={`p-10 bg-zinc-50 border-2 transition-all duration-300 cursor-pointer ${showDesignLogic ? 'border-black' : 'border-dashed border-black/20 hover:border-black/40'}`}
                                            >
                                                <div className="flex items-center gap-3 mb-8">
                                                    <div className="w-10 h-10 bg-black text-black flex items-center justify-center font-black text-xs">01</div>
                                                    <span className="tech-label font-black tracking-widest text-black">ROOT CAUSE ANALYSIS</span>
                                                </div>
                                                <p className="text-xl font-bold text-black uppercase leading-[1.1] tracking-tighter">
                                                    &ldquo;{interactivePainPoints.find(p => p.id === selectedPainPoint)?.rootCause}&rdquo;
                                                </p>
                                            </div>

                                            <div
                                                className={`p-10 transition-all duration-500 border-4 ${showDesignLogic
                                                    ? 'bg-black border-black text-black shadow-[12px_12px_0_var(--posthog-orange)]'
                                                    : 'bg-white border-dashed border-black/10 opacity-40'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3 mb-8">
                                                    <div className={`w-10 h-10 flex items-center justify-center font-black text-xs ${showDesignLogic ? 'bg-[var(--posthog-orange)] text-black' : 'bg-zinc-200 text-zinc-400'}`}>02</div>
                                                    <span className={`tech-label font-black tracking-widest ${showDesignLogic ? 'text-black' : 'text-zinc-400'}`}>DESIGN INTERVENTION</span>
                                                </div>
                                                {showDesignLogic ? (
                                                    <div className="space-y-6 animate-in fade-in duration-500">
                                                        <p className="text-2xl font-black text-black uppercase leading-[1.1] tracking-tighter italic">
                                                            {interactivePainPoints.find(p => p.id === selectedPainPoint)?.designLogic}
                                                        </p>
                                                        <div className="inline-block px-4 py-1.5 bg-[var(--posthog-orange)] text-black text-[10px] font-black uppercase tracking-[0.3em]">LOGIC APPLIED</div>
                                                    </div>
                                                ) : (
                                                    <div className="h-24 flex items-center justify-center">
                                                        <span className="tech-label font-black tracking-widest opacity-40">[AWAITING ROOT INTERACTION]</span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <div className="h-[400px] flex items-center justify-center border-4 border-dashed border-black/10 bg-white/50">
                                    <div className="text-center space-y-6">
                                        <Monitor className="w-16 h-16 text-zinc-200 mx-auto animate-pulse" />
                                        <p className="tech-label font-black tracking-[0.4em] text-zinc-300">SYSTEM IDLE: SELECT LOGIC NODE TO BEGIN</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Personas Section */}
                <section className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <span className="tech-label font-black tracking-[0.4em]">USER PROFILING: CORE PERSONAS</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter">TARGET PERSONAS</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {Array.isArray(personas?.content) && personas.content.map((pStr: string, i: number) => {
                            const [name, trait] = pStr.split(":").map(s => s.trim().replace(/^- /, ''));
                            return (
                                <div key={i} className=" bg-white border-2 border-black group hover:shadow-[16px_16px_0_#000] transition-all overflow-hidden">
                                    <div className="border-b border-black/5 flex items-center gap-4 py-4 px-6 bg-zinc-50/50 border-b border-black/5 py-4 px-8 bg-zinc-50/50">
                                        <div className="flex items-center gap-3">
                                            <Users className="w-5 h-5 text-black/30" />
                                            <span className="font-black uppercase tracking-[0.3em] text-[10px]">PROFILE ID: NODE 0{i + 1}</span>
                                        </div>
                                    </div>
                                    <div className="p-10 space-y-6">
                                        <h3 className="text-4xl font-black text-black uppercase tracking-tighter leading-none">{name}</h3>
                                        <div className="flex items-start gap-6 p-6 bg-zinc-50 border-2 border-dashed border-black/10 group-hover:border-black/30 group-hover:bg-white transition-all">
                                            <div className="mt-1.5"><Layers className="w-5 h-5 text-[var(--posthog-orange)]" /></div>
                                            <span className="text-lg md:text-xl font-medium text-zinc-700 leading-tight uppercase tracking-tight">{trait}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Task Interpretation Table */}
                <section className="max-w-6xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <span className="tech-label font-black tracking-[0.4em]">SYSTEM AUDIT: TASK FRAMEWORK</span>
                        <h2 className="text-5xl font-black uppercase tracking-tighter text-black">INTERACTION LOGS</h2>
                    </div>
                    <div className=" bg-white border border-black/5 overflow-hidden shadow-[20px_20px_0px_rgba(0,0,0,0.1)]">
                        <div className="border-b border-black/5 flex items-center gap-4 py-4 px-6 bg-zinc-50/50 border-b border-black/5 py-4 px-8 bg-black text-black">
                            <div className="flex items-center gap-3">
                                <ClipboardCheck className="w-5 h-5 text-[var(--posthog-orange)]" />
                                <span className="font-black uppercase tracking-[0.3em] text-[11px]">TASK FRAMEWORK REPORT</span>
                            </div>
                            <div className="text-[10px] font-black tracking-widest opacity-50 uppercase">TIMESTAMP: 2024 Q3</div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-black/5 bg-zinc-50">
                                        <th className="p-8 tech-label font-black tracking-widest text-zinc-400">ID</th>
                                        <th className="p-8 tech-label font-black tracking-widest text-black">TEST SCENARIO</th>
                                        <th className="p-8 tech-label font-black tracking-widest text-black text-right">AUDIT RESULT</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y-2 divide-black/5">
                                    {Array.isArray(task?.content) && task.content.filter((s: string) => s.includes("->")).map((step: string, i: number) => {
                                        const [t, r] = step.replace(/^\d\.\s*/, '').split("->").map(s => s.trim());
                                        return (
                                            <tr key={i} className="group hover:bg-[var(--posthog-orange)] transition-colors">
                                                <td className="p-8 text-sm font-black text-zinc-300 group-hover:text-black transition-colors">0{i + 1}</td>
                                                <td className="p-8 text-xl font-black text-black uppercase tracking-tighter leading-none group-hover:translate-x-4 transition-transform">{t}</td>
                                                <td className="p-8 text-sm font-black text-zinc-400 uppercase text-right tracking-widest group-hover:text-black">&ldquo;{r}&rdquo;</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Audit Section (Accessibility/UX) */}
                <section className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-6">
                        <span className="tech-label font-black tracking-[0.4em]">VISUAL BRIEF: HIFI DECONSTRUCTION</span>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black">ACCESSIBILITY & UX</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Heuristic Analysis", img: "/images/content-verify/ux-audit.png", desc: "Mapping cognitive load and navigational friction.", icon: <ShieldCheck className="w-5 h-5" /> },
                            { title: "Compliance Standard", img: "/images/content-verify/accessibility.png", desc: "WCAG 2.1 AA level accessibility audits.", icon: <Layers className="w-5 h-5" /> }
                        ].map((audit, i) => (
                            <div key={i} className=" bg-white border-2 border-black group hover:shadow-[20px_20px_0_#000] transition-all overflow-hidden flex flex-col">
                                <div className="border-b border-black/5 flex items-center gap-4 py-4 px-6 bg-zinc-50/50 border-b border-black/5 py-4 px-8 bg-zinc-50/50">
                                    <div className="flex items-center gap-4">
                                        <div className="text-[var(--posthog-orange)]">{audit.icon}</div>
                                        <span className="font-black uppercase tracking-[0.3em] text-[10px]">{audit.title.toUpperCase()} BRIEF</span>
                                    </div>
                                </div>
                                <div
                                    className="relative aspect-[16/10] border-b-2 border-black cursor-zoom-in group"
                                    onClick={() => setLightboxImage({ src: audit.img, alt: audit.title })}
                                >
                                    <Image
                                        src={audit.img}
                                        alt={audit.title}
                                        fill
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 contrast-125"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                    <div className="absolute bottom-6 right-6 p-3 bg-black text-black os-border border-black group-hover:bg-[var(--posthog-orange)] group-hover:text-black transition-colors opacity-0 group-hover:opacity-100">
                                        <Search className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="p-10 space-y-4">
                                    <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{audit.title}</h3>
                                    <p className="text-base font-bold text-zinc-400 uppercase tracking-tighter italic">&ldquo;{audit.desc}&rdquo;</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <ImageLightbox
                    src={lightboxImage?.src || ""}
                    alt={lightboxImage?.alt || ""}
                    onClose={() => setLightboxImage(null)}
                />
            </article>

            {/* Shutdown Divider */}
            <div className="container mx-auto px-6 py-40">
                <div className="h-1 bg-black w-full relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 bg-[var(--background)]">
                        <Activity className="w-6 h-6 text-black" />
                    </div>
                </div>
            </div>
        </main>
    );
}
