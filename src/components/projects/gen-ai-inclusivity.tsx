"use client";

import React, { useState, useEffect, useRef } from "react";
import { type Project } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Sparkles, Zap, Layers, Target, Lightbulb, MousePointer2, Check, X } from "lucide-react";

/**
 * Renders lines of text with support for:
 * - Markdown-style bolding (**bold**)
 * - Bullet points (- or *)
 * - Blockquotes (>)
 * - All content is forced to white/light for readability as per user request
 */
const renderContentLines = (
    lines: string | string[] | undefined,
    _deprecatedTextColor: "light" | "dark" = "light"
) => {
    if (!lines) return null;
    const contentArray = Array.isArray(lines) ? lines : [lines];

    return (
        <div className="space-y-4">
            {contentArray.map((line, index) => {
                if (!line) return <div key={index} className="h-2" />;
                const trimmed = line.trim();
                const textClass = "text-[#FFF8F0]";

                const cleanLine = trimmed.replace(/^\* /, "").replace(/^\- /, "").replace(/^\> /, "");
                const isBullet = trimmed.startsWith("-") || trimmed.startsWith("*");
                const isQuote = trimmed.startsWith(">");

                if (isBullet) {
                    return (
                        <div key={index} className="flex gap-4 items-start group">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-[#10B981] shadow-[0_0_8px_rgba(212,133,173,0.4)] transition-transform group-hover:scale-125" />
                            <p className={`text-lg font-sans font-extralight leading-relaxed ${textClass}`}>{cleanLine.split(/(\[\[[^\]]+\]\])/g).map((part, i) => {
                                if (part.startsWith("[[") && part.endsWith("]]")) {
                                    return <strong key={i} className="text-[#10B981] font-normal">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                            })}</p>
                        </div>
                    );
                }

                if (isQuote) {
                    return (
                        <blockquote key={index} className={`border-l-4 border-[#10B981] pl-6 py-2 my-6 text-xl font-sans font-extralight ${textClass} bg-[#10B981]/5 rounded-r-lg`}>
                            {cleanLine}
                        </blockquote>
                    );
                }

                const parts = cleanLine.split(/(\[\[[^\]]+\]\]|\d+\.?\d*%|\d+s|\d+\.?\d*\smin)/g);
                return (
                    <p key={index} className={`text-lg font-sans font-extralight leading-relaxed ${textClass}`}>
                        {parts.map((part, i) => {
                            if (part.startsWith("[[") && part.endsWith("]]")) {
                                return <strong key={i} className="text-[#10B981] font-normal">{part.slice(2, -2)}</strong>;
                            }
                            // Auto-tag percentages or time metrics
                            if (/^\d+\.?\d*%$/.test(part) || /^\d+s$/.test(part) || /^\d+\.?\d*\smin$/.test(part)) {
                                return <span key={i} className="px-2 py-0.5 mx-1 inline-flex items-center rounded-md bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-[0.9em] font-mono font-bold shadow-[0_0_10px_rgba(212,133,173,0.2)]">{part}</span>;
                            }
                            return part;
                        })}
                    </p>
                );
            })}
        </div>
    );
};

const arrayToList = (content?: string | string[]) => {
    if (!content) return null;
    const contentArray = Array.isArray(content) ? content : [content];
    return (
        <div className="space-y-4">
            {contentArray.map((item, index) => {
                const trimmed = item.trim();
                const isQuote = trimmed.startsWith(">");
                const cleanItem = trimmed.replace(/^\> /, "");

                if (isQuote) {
                    return (
                        <blockquote key={index} className="border-l-4 border-[#10B981] pl-6 py-3 my-6 text-xl font-sans font-extralight text-[#FFF8F0] bg-[#10B981]/5 rounded-r-lg">
                            {cleanItem}
                        </blockquote>
                    );
                }

                const parts = cleanItem.split(/(\[\[[^\]]+\]\]|\d+\.?\d*%|\d+s|\d+\.?\d*\smin)/g);
                return (
                    <div key={index} className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-[#10B981]" />
                        <p className="text-lg font-sans font-extralight leading-relaxed text-[#FFF8F0]">
                            {parts.map((part, i) => {
                                if (part.startsWith("[[") && part.endsWith("]]")) {
                                    return <strong key={i} className="text-[#10B981] font-normal">{part.slice(2, -2)}</strong>;
                                }
                                if (/^\d+\.?\d*%$/.test(part) || /^\d+s$/.test(part) || /^\d+\.?\d*\smin$/.test(part)) {
                                    return <span key={i} className="px-2 py-0.5 mx-1 inline-flex items-center rounded-md bg-[#10B981]/20 border border-[#10B981]/40 text-[#10B981] text-[0.9em] font-mono font-bold shadow-[0_0_10px_rgba(212,133,173,0.2)]">{part}</span>;
                                }
                                return part;
                            })}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

const RadarChart = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        // High DPI scaling
        const dpr = window.devicePixelRatio || 1;
        const size = 480;
        canvas.width = size * dpr;
        canvas.height = size * dpr;
        ctx.scale(dpr, dpr);

        const cx = size / 2;
        const cy = size / 2;
        const R = size * 0.35;
        const labels = ['Feedback', 'Audio', 'Personal', 'Trust', 'Access', 'Theming', 'Error', 'Control'];
        const N = labels.length;

        const datasets = [
            { label: 'Gemini', color: '#1A73E8', data: [1, 1, 0.5, 1, 0.5, 1, 0.5, 1] },
            { label: 'ChatGPT', color: '#10B981', data: [1, 0.5, 1, 1, 0.5, 1, 0, 0.5] },
            { label: 'Copilot', color: '#E8A020', data: [0.5, 1, 1, 1, 0, 0, 0.5, 1] },
        ];

        const angleOf = (i: number) => (Math.PI * 2 * i / N) - Math.PI / 2;
        const point = (i: number, r: number) => {
            const a = angleOf(i);
            return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
        };

        let progress = 0;
        const duration = 1500;
        let start: number | null = null;

        const frame = (now: number) => {
            if (!start) start = now;
            progress = Math.min((now - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            ctx.clearRect(0, 0, size, size);

            // Background Rings
            [0.25, 0.5, 0.75, 1].forEach(frac => {
                ctx.beginPath();
                for (let i = 0; i < N; i++) {
                    const p = point(i, R * frac);
                    i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
                }
                ctx.closePath();
                ctx.strokeStyle = 'rgba(255,255,255,0.03)';
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Spokes
            for (let i = 0; i < N; i++) {
                const p = point(i, R);
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(p.x, p.y);
                ctx.strokeStyle = 'rgba(255,255,255,0.05)';
                ctx.stroke();
            }

            // Labels
            ctx.font = '900 10px font-mono';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#ffffff';
            for (let i = 0; i < N; i++) {
                const p = point(i, R + 30);
                ctx.fillText(labels[i].toUpperCase(), p.x, p.y);
            }

            // Polygons
            datasets.forEach(ds => {
                ctx.beginPath();
                for (let i = 0; i < N; i++) {
                    const r = R * ds.data[i] * ease;
                    const p = point(i, r);
                    i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y);
                }
                ctx.closePath();
                ctx.fillStyle = ds.color + '11';
                ctx.fill();
                ctx.strokeStyle = ds.color;
                ctx.lineWidth = 2;
                ctx.setLineDash([]);
                ctx.stroke();

                // Points
                for (let i = 0; i < N; i++) {
                    const r = R * ds.data[i] * ease;
                    const p = point(i, r);
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
                    ctx.fillStyle = ds.color;
                    ctx.fill();
                    ctx.strokeStyle = '#080808';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });

            if (progress < 1) requestAnimationFrame(frame);
        };

        requestAnimationFrame(frame);
    }, []);

    return (
        <div className="relative w-full aspect-square max-w-[480px] mx-auto bg-neutral-900/20 rounded-[3rem] border border-neutral-800/50 p-6 backdrop-blur-sm shadow-inner group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(87,178,140,0.03),transparent)]" />
            <canvas ref={canvasRef} className="w-full h-full relative z-10" style={{ width: '100%', height: '100%' }} />

            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-neutral-900 border border-neutral-800 z-20 shadow-xl" />
        </div>
    );
};

export function GenAiInclusivityProject({ project }: { project: Project }) {
    const [activeTask, setActiveTask] = useState('t1');
    const [activePlatform, setActivePlatform] = useState('chatgpt');
    const [selectedFinding, setSelectedFinding] = useState<number>(0);
    const [activeBlueprintRow, setActiveBlueprintRow] = useState<number | null>(null);
    const [hoveredBlueprintRow, setHoveredBlueprintRow] = useState<number | null>(null);
    const [activeComparisonTab, setActiveComparisonTab] = useState<'chatgpt' | 'gemini' | 'copilot'>('chatgpt');
    const matrixRef = useRef<HTMLDivElement>(null);
    const [showMatrixTags, setShowMatrixTags] = useState(false);
    const [showAllGemini, setShowAllGemini] = useState(false);
    const [showAllChatGPT, setShowAllChatGPT] = useState(false);
    const [showAllCopilot, setShowAllCopilot] = useState(false);
    const [scopeIndex, setScopeIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setScopeIndex((prev) => (prev + 1) % 3);
        }, 3500);
        return () => clearInterval(timer);
    }, []);

    const scopeImages = [
        { name: "ChatGPT", src: "/images/gen-ai/Screenshot_2026-04-21_at_9.55.57_PM.png", tag: "System 01" },
        { name: "Copilot", src: "/images/gen-ai/Screenshot_2026-04-21_at_9.55.23_PM.png", tag: "System 02" },
        { name: "Gemini", src: "/images/gen-ai/Screenshot_2026-04-21_at_9.57.35_PM.png", tag: "System 03" }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setShowMatrixTags(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        if (matrixRef.current) observer.observe(matrixRef.current);
        return () => observer.disconnect();
    }, []);
    const getSection = (title: string) => project.sections?.find((section: any) => section.title === title);
    const snapshot = getSection("EXECUTIVE SNAPSHOT");
    const usabilityBenchmark = getSection("USABILITY BENCHMARK: SETTINGS DISCOVERABILITY");
    const context = getSection("WHY THIS MATTERS (THE GLOBAL CONTEXT)");
    const problem = getSection("PROBLEM STATEMENT");
    const goal = getSection("GOAL");
    const questions = getSection("RESEARCH QUESTIONS");
    const comparativeUX = getSection("COMPARATIVE UX PERFORMANCE");
    const blueprint = getSection("THE ACCESSIBILITY BLUEPRINT (DESIGNING THE FUTURE)");
    const successMetrics = getSection("MEASURING SUCCESS GOING FORWARD");
    const futureScope = getSection("FUTURE SCOPE");
    const finalTakeaway = getSection("FINAL TAKEAWAY");

    const methodologyData = [
        {
            title: "UX & ACCESSIBILITY AUDIT",
            content: "Evaluated leading Gen AI tools across keyboard accessibility, screen reader compatibility, and navigation clarity, focusing on prompt guidance and system feedback."
        },
        {
            title: "TASK PERFORMANCE STUDY",
            content: "Measured user behavior across settings like theme and language changes, tracking completion rates and time metrics for 'Quick finishers' vs 'Stuck' users."
        },
        {
            title: "LITERATURE & STANDARDS REVIEW",
            content: "Reviewed WCAG 2.x guidelines, conversational agent research, and previous accessibility studies focused on dynamic and generative AI systems."
        },
        {
            title: "FRAMEWORK SYNTHESIS",
            content: "Organized insights into a four-layer model: Foundational, Usability Enhancement, Disability-Specific, and Customization & Control."
        }
    ];

    const excludedTitles = [
        ...methodologyData.map(m => m.title),
        "EXECUTIVE SNAPSHOT",
        "USABILITY BENCHMARK: SETTINGS DISCOVERABILITY",
        "WHY THIS MATTERS (THE GLOBAL CONTEXT)",
        "PROBLEM STATEMENT",
        "GOAL",
        "RESEARCH QUESTIONS",
        "COMPARATIVE UX PERFORMANCE",
        "THE ACCESSIBILITY BLUEPRINT (DESIGNING THE FUTURE)",
        "MEASURING SUCCESS GOING FORWARD",
        "FUTURE SCOPE",
        "FINAL TAKEAWAY",
        "KEY FINDINGS — WHERE GEN AI BREAKS TODAY",
        "METHODOLOGY"
    ];

    const findings = project.sections
        ?.filter((section: any) => /^\d\. /.test(section.title) && !excludedTitles.includes(section.title))
        .filter(Boolean) || [];

    return (
        <main className="min-h-screen bg-[#080808] text-[#FFF8F0] font-sans selection:bg-[#10B981]/30">
            <style jsx global>{`
                .sh-nav-label { pointer-events: none; }
                a:hover .sh-nav-label { opacity: 1 !important; }
                a:active { background: #10B981 !important; }
                
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .galaxy-float {
                    animation: float 4s ease-in-out infinite;
                }
                
                /* Selection color */
                ::selection {
                    background: rgba(16, 185, 129, 0.3) !important;
                }
                
                /* Custom Scrollbar */
                .mac-scrollbar::-webkit-scrollbar {
                    width: 12px;
                }
                .mac-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .mac-scrollbar::-webkit-scrollbar-thumb {
                    background: #3f3f4e;
                    border-radius: 6px;
                    border: 3px solid #080808;
                }
                .mac-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b6b85;
                }

                @keyframes scan {
                    0% { transform: translateY(-100%); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(100vh); opacity: 0; }
                }
                .digital-scanner {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, transparent, rgba(16, 185, 129, 0.1), transparent);
                    height: 100px;
                    width: 100%;
                    z-index: 5;
                    pointer-events: none;
                    animation: scan 4s linear infinite;
                }
                .digital-grid {
                    background-size: 30px 30px;
                    background-image: 
                        linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
                }
            `}</style>

            <nav className="fixed inset-x-0 top-0 z-[5000] bg-[#080808]/90 backdrop-blur border-b border-white/10 pointer-events-auto">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-[1100px]">
                    <Link
                        href="/work/"
                        className="inline-flex items-center gap-2 text-[13px] font-sans text-neutral-300 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Work
                    </Link>
                    <span className="text-[13px] font-mono uppercase tracking-[0.2em] text-neutral-400">
                        Gen AI Inclusivity · Research · 2025
                    </span>
                </div>
            </nav>

            <header className="relative min-h-[50vh] flex items-center border-b border-neutral-900 bg-[#080810] z-[30]">
                {/* Background Image Artifact Aligned Right */}
                <div
                    className="absolute inset-x-0 inset-y-0 opacity-20 pointer-events-none"
                    style={{ 
                        background: "radial-gradient(circle at 80% 20%, #10B981 0%, transparent 40%), radial-gradient(circle at 20% 80%, #080810 0%, transparent 40%)" 
                    }}
                />

                {/* Left Aligned Content */}
                <div className="container mx-auto px-6 relative z-10 py-28">
                    <div className="max-w-3xl text-left space-y-10">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-outfit font-light tracking-tight uppercase text-[#10B981]">
                                {project.category} · Academic Research
                            </h2>
                        </div>

                        <h1 className="text-3xl md:text-4xl font-outfit font-extralight tracking-tight leading-tight text-white/90">
                            Designing for <span className="font-normal text-white">Inclusivity</span> in the Age of Generative AI
                        </h1>

                        <p className="text-lg md:text-xl font-sans font-extralight leading-relaxed text-neutral-300 max-w-2xl">
                            A futurist UX investigation that benchmarks how inclusive modern generative AI tools are and sketches a blueprint for accessibility-forward experiences.
                        </p>
                    </div>
                </div>

                {/* Technical HUD Academic Badge */}
                {/* ... existing badge ... */}

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
            </header>

            <article className="container mx-auto px-4 py-10 space-y-24">
                {/* Futurist Investigation Reveal - Fullwidth Immersive Scope */}
                <section className="w-screen relative left-1/2 -ml-[50vw] overflow-hidden bg-[#0A0A0E] border-y border-white/5 py-12">
                    <div className="flex flex-col">
                        <div className="p-12 text-center">
                            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981] text-[14px] font-mono font-bold uppercase tracking-[0.5em] shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                                Investigation Scope
                            </div>
                        </div>

                        <div className="relative aspect-video w-full max-h-[85vh] bg-[#000000] overflow-hidden group">
                            {scopeImages.map((img, i) => (
                                <div
                                    key={i}
                                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${i === scopeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.name}
                                        className="w-full h-full object-contain"
                                    />

                                    {/* Interface Overlay Label - Repositioned for fullwidth */}
                                    <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black/80 to-transparent z-20">
                                        <div className="container mx-auto px-6">
                                            <div className="inline-block px-5 py-2 rounded-md border border-[#10B981]/40 bg-black/60 backdrop-blur-xl text-[12px] font-mono text-[#10B981] font-bold tracking-[0.4em] uppercase shadow-2xl">
                                                {img.tag} · {img.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Carousel Indicators */}
                            <div className="absolute right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
                                {scopeImages.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setScopeIndex(i)}
                                        aria-label={`Switch to scope image ${i + 1}`}
                                        className={`w-1 transition-all duration-500 ${i === scopeIndex ? 'bg-[#10B981] h-12' : 'bg-white/20 h-6'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Custom UX objective (previously Executive Snapshot) */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white">01 UX objective</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        <div className="md:col-span-7 space-y-10">
                            <h2 className="text-[clamp(42px,5vw,68px)] font-outfit font-extralight leading-[1.05] text-white">
                                A future built on AI <span className="font-normal text-white">must be inclusive</span>
                            </h2>
                            <p className="text-xl md:text-2xl font-sans font-extralight leading-relaxed text-neutral-300">
                                Generative AI is rapidly becoming the <strong className="font-normal text-white underline decoration-[#10B981] underline-offset-4">primary interface to information, creation, and decision-making</strong>. Yet as these systems grow more powerful, their accessibility and usability lag behind—quietly excluding millions of users.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-4">
                                {["Accessibility Research", "Comparative UX Audits", "Task-Performance Data"].map((tag, i) => (
                                    <span key={i} className="px-5 py-2 rounded-full border border-white text-white text-[12px] font-sans font-bold uppercase tracking-[0.2em] bg-transparent">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                        </div>

                        <div className="md:col-span-5 pt-8">
                            <div className="relative">
                                {/* Comment Box Tail */}
                                <div className="absolute -left-3 top-12 w-6 h-6 bg-[#1a1a1a] rotate-45 border-l border-b border-white/10" />
                                <div className="relative bg-[#1a1a1a] border border-white/10 p-10 rounded-[2.5rem] shadow-2xl backdrop-blur-xl group hover:border-[#10B981]/50 transition-all duration-500">
                                    <blockquote className="space-y-6">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                                            <span className="text-[12px] font-mono uppercase tracking-[0.4em] text-[#10B981] font-bold">Research insight</span>
                                        </div>
                                        <p className="text-xl md:text-2xl font-sans font-extralight tracking-tight text-white leading-snug">
                                            "Can Generative AI truly be universal if it is not reliably usable by everyone?"
                                        </p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research Questions */}
                <section className="space-y-16 border-t border-white/5 pt-24">
                    <div className="space-y-6">
                        <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white block">02 RESEARCH QUESTIONS</span>
                        <h2 className="text-[clamp(42px,5vw,68px)] font-outfit font-extralight leading-[1.05] text-white">Framing the <span className="font-normal">Investigation</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {(Array.isArray(questions?.content) ? questions.content : [questions?.content])?.map((q: string | undefined, i: number) => (
                            <div key={i} className="bg-[#0f0f0f] border border-[#10B981]/40 rounded-2xl p-8 md:p-10 flex flex-col gap-6 hover:border-[#10B981]/60 hover:bg-[#10B981]/5 transition-all duration-300 group">
                                <span className="text-5xl font-outfit font-extralight text-[#10B981]">0{i + 1}</span>
                                <p className="text-lg md:text-xl font-sans text-[#FFF8F0] leading-relaxed font-extralight">
                                    {(q || "").replace(/^\d+\.\s*/, '')}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive Research Metrics Dashboard */}
                <section className="space-y-12 py-16 border-y border-neutral-800/50 w-full">
                    <header className="w-full flex flex-col items-center text-center space-y-10">
                        <div className="flex flex-col items-center gap-4">
                            <span className="text-[16px] font-mono font-bold uppercase tracking-[0.4em] text-white">03 UX RESEARCH · COMPARATIVE STUDY</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-sans font-extralight tracking-tight text-[#FFF8F0] leading-tight">
                            AI Assistant <span className="text-[#10B981]">Usability</span> Metrics
                        </h2>

                        <div className="w-full max-w-4xl bg-white/[0.04] border border-white/10 rounded-[2rem] p-10 shadow-2xl backdrop-blur-md">
                            <div className="flex flex-wrap justify-center gap-12 text-[0.85rem] font-mono text-white uppercase tracking-[0.3em] font-bold">
                                <span>N = 76 participants</span>
                                <span>2 tasks evaluated</span>
                                <span>3 platforms compared</span>
                            </div>
                        </div>
                    </header>

                    {/* Mac OS Window Layout */}
                    <div className="max-w-6xl mx-auto bg-[#13151A] border border-neutral-800 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.8)] relative">
                        {/* Mac Toolbar */}
                        <div className="flex items-center justify-between px-5 py-3 bg-[#1A1C23] border-b border-neutral-800/50 sticky top-0 z-20">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="text-[12px] font-mono text-[#A1979B] uppercase tracking-widest">
                                metrics_dashboard.exe
                            </div>
                            <div className="w-10"></div> {/* Spacer for centering */}
                        </div>

                        <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
                            {/* Platform Tabs (Sidebar on desktop) */}
                            <div className="w-full md:w-64 bg-[#13151A] border-b md:border-b-0 md:border-r border-neutral-800/50 flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible z-10 sticky top-0 md:static">
                                {['chatgpt', 'copilot', 'gemini'].map((platform) => {
                                    const isActive = activePlatform === platform;
                                    const label = platform === 'chatgpt' ? 'ChatGPT' : platform === 'copilot' ? 'Copilot' : 'Gemini';
                                    const dotColor = platform === 'chatgpt' ? '#10B981' : platform === 'copilot' ? '#914364' : '#C37B99';

                                    return (
                                        <button
                                            key={platform}
                                            onClick={() => setActivePlatform(platform)}
                                            className={`flex-1 md:flex-none text-left px-6 py-5 transition-all flex items-center gap-4 cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)] ${isActive ? 'bg-[#13131A] md:bg-neutral-900/40 border-b-2 md:border-b-0 md:border-r-2 border-[#10B981]' : 'hover:bg-[#13131A]/50 text-neutral-400 hover:-translate-y-px md:hover:-translate-y-0 md:hover:translate-x-1'}`}
                                        >
                                            <div className={`w-2 h-2 rounded-full ${isActive ? 'animate-pulse' : ''}`} style={{ background: dotColor }} />
                                            <span className={`text-[12px] font-mono uppercase tracking-[0.4em] ${isActive ? 'text-[#FFF8F0] font-normal' : ''}`}>
                                                {label}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Scrollable Content Area */}
                            <div className="flex-1 bg-[#0A0A0E] overflow-y-auto mac-scrollbar p-6 md:p-8 space-y-8">
                                {/* Task Toggle */}
                                <div className="flex gap-4 mb-8 pb-6 border-b border-neutral-800/50">
                                    <button
                                        onClick={() => setActiveTask('t1')}
                                        className={`px-5 py-2.5 rounded-lg text-[12px] font-mono uppercase tracking-[0.4em] shadow-sm transition-all cursor-pointer flex-1 md:flex-none text-center ${activeTask === 't1' ? 'bg-[#1A1C30] border border-[#10B981] text-[#10B981] shadow-[0_4px_12px_rgba(212,133,173,0.15)] scale-[1.02]' : 'bg-neutral-900/40 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:shadow-md'}`}
                                    >
                                        Task 1 · Dark Theme
                                    </button>
                                    <button
                                        onClick={() => setActiveTask('t2')}
                                        className={`px-5 py-2.5 rounded-lg text-[12px] font-mono uppercase tracking-[0.4em] shadow-sm transition-all cursor-pointer flex-1 md:flex-none text-center ${activeTask === 't2' ? 'bg-[#1A1C30] border border-[#10B981] text-[#10B981] shadow-[0_4px_12px_rgba(212,133,173,0.15)] scale-[1.02]' : 'bg-neutral-900/40 border border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-800 hover:shadow-md'}`}
                                    >
                                        Task 2 · Change Language
                                    </button>
                                </div>

                                {/* Dynamic Content base on activePlatform */}
                                {activePlatform === 'chatgpt' && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* Completion */}
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-sans font-extralight tracking-tight text-[#FFF8F0] pb-4">Task Completion Rate</h3>
                                                <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 flex flex-col items-center text-center justify-center gap-2 min-h-[160px]">
                                                    <div className="text-5xl font-sans font-extralight tracking-tight text-[#10B981]">{activeTask === 't1' ? '98.7%' : '92.1%'}</div>
                                                    <div className="text-[12px] font-mono uppercase tracking-[0.4em] text-neutral-400 border-b border-neutral-800 pb-3 w-full">Users Completed Task</div>
                                                    <div className="text-[12px] font-mono text-neutral-300 pt-1">
                                                        <strong className="text-white text-sm">{activeTask === 't1' ? '75' : '70'}</strong> / 76 users <span className="mx-2 text-neutral-700">•</span> Failed: {activeTask === 't1' ? '1.3%' : '7.9%'}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* NPS */}
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-sans font-extralight tracking-tight text-[#FFF8F0] pb-4">Net Promoter Score</h3>
                                                <div className="bg-[#13131A] border-l-2 border-[#10B981] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                                                    <div className="flex items-center gap-6 mb-4 pb-4 border-b border-neutral-800/50">
                                                        <div className="text-5xl font-sans font-extralight tracking-tight text-[#10B981]">−55</div>
                                                        <div className="text-[12px] font-mono uppercase tracking-[0.4em] text-neutral-400 leading-tight">Overall<br />NPS Score</div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-xl font-sans font-extralight tracking-tight text-[#FFF8F0]">17.1%</div>
                                                            <div className="text-[12px] font-mono uppercase tracking-[0.4em] text-neutral-400">Promoters</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-sans font-light tracking-tight text-[#F4E5E9]">72.4%</div>
                                                            <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B]">Detractors</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Time */}
                                        <div className="space-y-4">
                                            <h3 className="text-lg font-sans font-light tracking-tight text-[#F4E5E9] pb-4">Time to Complete</h3>
                                            <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 space-y-6 font-mono">
                                                <div className="flex justify-between items-center text-[12px] uppercase tracking-widest text-[#C4BFC1] pb-3 border-b border-neutral-800/50">
                                                    <span>Average Time</span>
                                                    <strong className="text-[#F4E5E9] text-sm">{activeTask === 't1' ? '2.15 min' : '2.15 min'}</strong>
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { label: 'Under 60s', val: activeTask === 't1' ? 40.8 : 31.6, color: '#10B981' },
                                                        { label: '1 – 3 min', val: activeTask === 't1' ? 38.2 : 39.5, color: '#10B98180' },
                                                        { label: 'Over 3 min', val: activeTask === 't1' ? 19.7 : 21.1, color: '#10B98140' }
                                                    ].map((row, i) => (
                                                        <div key={i} className="space-y-1.5">
                                                            <div className="flex justify-between text-[12px] uppercase tracking-wider">
                                                                <span className="text-[#A1979B]">{row.label}</span>
                                                                <span className="text-[#10B981]">{row.val}%</span>
                                                            </div>
                                                            <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                                                                <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${row.val}%`, background: row.color }} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Takeaways ChatGPT */}
                                        <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4 group hover:bg-[#10B981]/15 transition-all">
                                            <div className="p-3 bg-[#10B981]/20 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                                                <Lightbulb className="w-6 h-6 text-[#10B981]" />
                                            </div>
                                            <div>
                                                <h4 className="text-[12px] font-mono font-extralight uppercase tracking-[0.4em] text-[#10B981] mb-2">Key Takeaway</h4>
                                                <p className="text-base font-sans text-[#F4E5E9] leading-relaxed  antialiased">
                                                    <strong>Best Overall UX:</strong> High reliability, fast discovery, and consistent outcomes make this the most intuitive interface.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePlatform === 'copilot' && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-sans font-light tracking-tight text-[#F4E5E9] pb-4">Task Completion Rate</h3>
                                                <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 flex flex-col items-center text-center justify-center gap-2 min-h-[160px]">
                                                    <div className="text-5xl font-sans font-light tracking-tight text-[#914364]">{activeTask === 't1' ? '84.2%' : '78.9%'}</div>
                                                    <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B] border-b border-neutral-800 pb-3 w-full">Users Completed Task</div>
                                                    <div className="text-[12px] font-mono text-[#C4BFC1] pt-1">
                                                        <strong className="text-[#F4E5E9] text-sm">{activeTask === 't1' ? '64' : '60'}</strong> / 76 users <span className="mx-2 text-neutral-700">•</span> Failed: {activeTask === 't1' ? '15.8%' : '21.1%'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-sans font-light tracking-tight text-[#F4E5E9] pb-4">Net Promoter Score</h3>
                                                <div className="bg-[#13131A] border-l-2 border-[#914364] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                                                    <div className="flex items-center gap-6 mb-4 pb-4 border-b border-neutral-800/50">
                                                        <div className="text-5xl font-sans font-light tracking-tight text-[#914364]">−65</div>
                                                        <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B] leading-tight">Overall<br />NPS Score</div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-xl font-sans font-light tracking-tight text-[#F4E5E9]">10.5%</div>
                                                            <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B]">Promoters</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-sans font-light tracking-tight text-[#F4E5E9]">76.3%</div>
                                                            <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B]">Detractors</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-sans font-light tracking-tight text-[#F4E5E9] pb-4">Time to Complete</h3>
                                            <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 space-y-6 font-mono">
                                                <div className="flex justify-between items-center text-[12px] uppercase tracking-widest text-[#C4BFC1] pb-3 border-b border-neutral-800/50">
                                                    <span>Average Time</span>
                                                    <strong className="text-[#F4E5E9] text-sm">{activeTask === 't1' ? '2.40 min' : '2.19 min'}</strong>
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { label: 'Under 60s', val: activeTask === 't1' ? 18.4 : 21.1, color: '#914364' },
                                                        { label: '1 – 3 min', val: activeTask === 't1' ? 35.5 : 30.3, color: '#91436480' },
                                                        { label: 'Over 3 min', val: activeTask === 't1' ? 30.3 : 27.6, color: '#91436440' }
                                                    ].map((row, i) => (
                                                        <div key={i} className="space-y-1.5">
                                                            <div className="flex justify-between text-[12px] uppercase tracking-wider">
                                                                <span className="text-[#A1979B]">{row.label}</span>
                                                                <span className="text-[#914364]">{row.val}%</span>
                                                            </div>
                                                            <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                                                                <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${row.val}%`, background: row.color }} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Takeaways Copilot */}
                                        <div className="bg-[#914364]/10 border border-[#914364]/20 rounded-xl p-6 mt-8 flex flex-col md:flex-row items-start md:items-center gap-4 group hover:bg-[#914364]/15 transition-all">
                                            <div className="p-3 bg-[#914364]/20 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                                                <Lightbulb className="w-6 h-6 text-[#914364]" />
                                            </div>
                                            <div>
                                                <h4 className="text-[12px] font-sans font-light uppercase tracking-[0.2em] text-[#914364] mb-2 leading-none">Key Takeaways</h4>
                                                <p className="text-[0.95rem] font-sans text-[#F4E5E9] leading-relaxed  antialiased">
                                                    <strong>Needs Immediate UX Intervention:</strong> Longest journeys, highest "stuck" rates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePlatform === 'gemini' && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {activeTask === 't2' && (
                                            <div className="bg-[#1A1310] border border-[#C37B99]/30 px-6 py-4 rounded-xl text-[12px] font-mono text-[#C37B99] leading-relaxed">
                                                <strong className="text-[#F4E5E9]">Note:</strong> Gemini struggled significantly on Task 2 (Language Change) with only 72.4% success.
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-sans font-light tracking-tight text-[#F4E5E9] pb-4">Task Completion Rate</h3>
                                                <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 flex flex-col items-center text-center justify-center gap-2 min-h-[160px]">
                                                    <div className="text-5xl font-sans font-light tracking-tight text-[#C37B99]">{activeTask === 't1' ? '81.6%' : '72.4%'}</div>
                                                    <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B] border-b border-neutral-800 pb-3 w-full">Users Completed Task</div>
                                                    <div className="text-[12px] font-mono text-[#C4BFC1] pt-1">
                                                        <strong className="text-[#F4E5E9] text-sm">{activeTask === 't1' ? '62' : '55'}</strong> / 76 users <span className="mx-2 text-neutral-700">•</span> Failed: {activeTask === 't1' ? '18.4%' : '27.6%'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-sans font-light tracking-tight text-[#F4E5E9] pb-4">Net Promoter Score</h3>
                                                <div className="bg-[#13131A] border-l-2 border-[#C37B99] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                                                    <div className="flex items-center gap-6 mb-4 pb-4 border-b border-neutral-800/50">
                                                        <div className="text-5xl font-sans font-light tracking-tight text-[#C37B99]">−60</div>
                                                        <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B] leading-tight">Overall<br />NPS Score</div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-xl font-sans font-light tracking-tight text-[#F4E5E9]">13.2%</div>
                                                            <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B]">Promoters</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-sans font-light tracking-tight text-[#F4E5E9]">73.7%</div>
                                                            <div className="text-[12px] font-mono uppercase tracking-widest text-[#A1979B]">Detractors</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-sans font-light tracking-tight text-[#F4E5E9] pb-4">Time to Complete</h3>
                                            <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 space-y-6 font-mono">
                                                <div className="flex justify-between items-center text-[12px] uppercase tracking-widest text-[#C4BFC1] pb-3 border-b border-neutral-800/50">
                                                    <span>Average Time</span>
                                                    <strong className="text-[#F4E5E9] text-sm">{activeTask === 't1' ? '2.02 min' : '2.09 min'}</strong>
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { label: 'Under 60s', val: activeTask === 't1' ? 18.4 : 14.5, color: '#C37B99' },
                                                        { label: '1 – 3 min', val: activeTask === 't1' ? 34.2 : 31.6, color: '#C37B9980' },
                                                        { label: 'Over 3 min', val: activeTask === 't1' ? 28.9 : 26.3, color: '#C37B9940' }
                                                    ].map((row, i) => (
                                                        <div key={i} className="space-y-1.5">
                                                            <div className="flex justify-between text-[12px] uppercase tracking-wider">
                                                                <span className="text-[#A1979B]">{row.label}</span>
                                                                <span className="text-[#C37B99]">{row.val}%</span>
                                                            </div>
                                                            <div className="h-1.5 bg-neutral-900 rounded-full overflow-hidden">
                                                                <div className="h-full rounded-full transition-all duration-1000 ease-out" style={{ width: `${row.val}%`, background: row.color }} />
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Key Takeaways Gemini */}
                                        <div className="bg-[#C37B99]/10 border border-[#C37B99]/20 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4 group hover:bg-[#C37B99]/15 transition-all">
                                            <div className="p-3 bg-[#C37B99]/20 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                                                <Lightbulb className="w-6 h-6 text-[#C37B99]" />
                                            </div>
                                            <div>
                                                <h4 className="text-[12px] font-sans font-light uppercase tracking-[0.2em] text-[#C37B99] mb-2">Key Takeaway</h4>
                                                <p className="text-base font-sans text-[#F4E5E9] leading-relaxed  antialiased">
                                                    <strong>Most Efficient (When It Works):</strong> Fastest for confident users, but incredibly fragile for everyone else, leading to high abandonment.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-5xl mx-auto mb-0 relative overflow-visible group py-16 mt-8 galaxy-float">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#10B981]/10 blur-[150px] -z-10 animate-pulse transition-all duration-1000 group-hover:bg-[#10B981]/20" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] -z-10 animate-pulse transition-all duration-1000 group-hover:bg-blue-500/20" />

                    <div className="p-12 md:p-20 text-center relative rounded-[4rem] bg-white/[0.03] border border-white/10 backdrop-blur-3xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-all duration-1000">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-black/40 border border-[#10B981]/30 mb-10 shadow-lg">
                            <Target className="w-5 h-5 text-[#10B981]" />
                            <span className="text-[13px] font-mono font-bold uppercase tracking-[0.4em] text-[#10B981]">The North Star</span>
                        </div>

                        <div className="space-y-6 mb-12">
                            <p className="text-[clamp(32px,5vw,72px)] font-outfit font-extrabold tracking-tighter leading-[1.05] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-rose-500/90 to-emerald-500 uppercase">
                                A forward-looking, Gen-AI specific accessibility blueprint.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 pt-8">
                            <div className="flex flex-col items-center gap-4">
                                <Sparkles className="w-8 h-8 text-[#10B981]" />
                                <span className="text-[14px] font-mono font-bold text-white uppercase tracking-[0.4em]">Discoverability</span>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
                            <div className="flex flex-col items-center gap-4">
                                <Layers className="w-8 h-8 text-blue-400" />
                                <span className="text-[14px] font-mono font-bold text-white uppercase tracking-[0.4em]">Reliability</span>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
                            <div className="flex flex-col items-center gap-4">
                                <MousePointer2 className="w-8 h-8 text-teal-400" />
                                <span className="text-[14px] font-mono font-bold text-white uppercase tracking-[0.4em]">User Control</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Global Context & Pain Points */}
                <section className="py-10 md:py-16 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/5 blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                        <div className="lg:col-span-8 space-y-10">
                            <div className="flex items-center gap-4">
                                <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white">UX secondary research</span>
                            </div>

                            <h2 className="text-[clamp(38px,5vw,62px)] font-outfit font-extralight leading-[1.05] text-white mb-6">
                                Entire populations are <span className="font-normal text-red-500">locked out</span> of the future by default.
                            </h2>
                            <div className="text-neutral-200 text-lg md:text-xl font-sans font-extralight leading-relaxed space-y-6 max-w-3xl">
                                <p>Generative AI relies on non-deterministic content and prompts. Yet, accessibility standards haven't evolved at the same pace, failing to address <strong className="font-medium text-white">ambiguity</strong>, <strong className="font-medium text-white">generative variability</strong>, and <strong className="font-medium text-white">discoverability</strong>.</p>
                                <p>If these systems are inaccessible, they aren't universal. The research identified that <strong className="font-normal text-[#10B981]">accessibility is not a feature</strong>, but a fundamental technical requirement for the next era of computing.</p>
                            </div>
                        </div>
                        <div className="lg:col-span-4 flex flex-col justify-center gap-10 pl-0 lg:pl-12 lg:border-l border-white/10">
                            <div className="space-y-3 group cursor-default">
                                <div className="text-5xl md:text-7xl font-outfit font-extralight tracking-tight text-white transition-colors group-hover:text-red-500">1.3 <span className="text-2xl md:text-3xl text-neutral-500 font-mono tracking-wide font-extralight">Billion</span></div>
                                <div className="text-[13px] font-mono uppercase tracking-[0.2em] text-neutral-400 leading-tight">People globally live with some form of disability</div>
                            </div>
                            <div className="space-y-3 group cursor-default">
                                <div className="text-5xl md:text-7xl font-outfit font-extralight tracking-tight text-white transition-colors group-hover:text-red-500">285 <span className="text-2xl md:text-3xl text-neutral-500 font-mono tracking-wide font-extralight">Million</span></div>
                                <div className="text-[13px] font-mono uppercase tracking-[0.2em] text-neutral-400 leading-tight">People are visually impaired worldwide</div>
                            </div>
                            <div className="space-y-3 group cursor-default">
                                <div className="text-5xl md:text-7xl font-outfit font-extralight tracking-tight text-white transition-colors group-hover:text-red-500">62 <span className="text-2xl md:text-3xl text-neutral-500 font-mono tracking-wide font-extralight">Million</span></div>
                                <div className="text-[13px] font-mono uppercase tracking-[0.2em] text-neutral-400 leading-tight">People in the U.S. live with motor or mobility impairments</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Comparative Feature Audit - NEW SECTION */}
                <section className="space-y-16 border-t border-white/5 pt-8">
                    <div className="flex items-center gap-4">
                        <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white underline decoration-blue-500 underline-offset-8">04 COMPARATIVE FEATURE AUDIT</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-12">
                            <h2 className="text-[clamp(42px,5vw,68px)] font-outfit font-extralight leading-[1.05] text-white max-w-5xl">
                                Mapping 49+ distinct features across the <span className="font-normal text-blue-400">Gen AI interaction landscape</span>.
                            </h2>
                        </div>

                        {/* Stats Group */}
                        <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {[
                                { num: "42+", label: "Features Catalogued", icon: <Layers className="w-5 h-5 text-blue-400" /> },
                                { num: "3", label: "Platforms Studied", icon: <Target className="w-5 h-5 text-blue-400" /> },
                                { num: "125+", label: "UI Annotations", icon: <MousePointer2 className="w-5 h-5 text-blue-400" /> }
                            ].map((stat, i) => (
                                <div key={i} className="p-10 bg-[#0f0f0f] border border-white/5 rounded-2xl group hover:border-blue-500/20 transition-all">
                                    <div className="mb-6">{stat.icon}</div>
                                    <div className="text-5xl font-outfit font-extralight tracking-tight text-white mb-2">{stat.num}</div>
                                    <div className="text-[13px] font-mono uppercase tracking-widest text-neutral-400 font-extralight">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="lg:col-span-3 flex items-center">
                            <p className="text-lg font-sans text-neutral-400 leading-relaxed border-l border-white/10 pl-8 font-extralight">
                                "This research examines the UX decisions behind three dominant AI chat interfaces. By mapping their features, patterns emerge around what sets great AI UX apart."
                            </p>
                        </div>
                    </div>

                    {/* Research Artifacts */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <h4 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-[#A1979B]">Research Artifacts</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="md:col-span-8 group relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl">
                                <img src="/images/gen-ai/UX - AI Research.jpg" alt="Research Audit Board" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                                    <span className="text-[12px] font-mono text-[#F4E5E9] font-light uppercase tracking-widest">Feature mapping & UI annotation board — Gemini, ChatGPT, Copilot</span>
                                </div>
                            </div>
                            <div className="md:col-span-4 group relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl">
                                <img src="/images/gen-ai/UX - AI Research1.jpg" alt="Feature Taxonomy" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black to-transparent">
                                    <span className="text-[12px] font-mono text-[#F4E5E9] font-light uppercase tracking-widest">Comprehensive taxonomy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Analysis */}
                    <div ref={matrixRef} className="bg-white/5 rounded-[3rem] p-8 md:p-16 border border-white/10 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />

                        <div className="relative z-10 space-y-16">
                            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
                                <h2 className="text-[clamp(32px,4vw,52px)] font-outfit font-extralight tracking-tight text-white">Platform-by-platform <span className="font-normal">Feature Matrix</span></h2>
                                <p className="text-neutral-400 font-mono text-[13px] uppercase tracking-[0.3em] leading-relaxed font-extralight border-b border-white/10 pb-4">Systematic evaluation of 49+ distinct interaction nodes</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Gemini Card */}
                                <div className="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-10 flex flex-col group hover:border-blue-500/20 transition-all duration-500 h-fit">
                                    <div className="flex flex-col items-center text-center gap-6 mb-10 border-b border-white/5 pb-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white p-3 shadow-xl flex items-center justify-center overflow-hidden">
                                            <img src="/images/gen-ai/gemini_icon-logo_brandlogos.net_aacx5-512x512.png" alt="Gemini" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-outfit font-light tracking-tight text-white">Google Gemini</h3>
                                            <span className="text-[13px] font-mono text-blue-400 uppercase tracking-widest font-bold">14 Features</span>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        {[
                                            { cat: "Input & Output", items: ["Drafts option & refresh", "Audio Output", "Audio Input", "Stop option", "Visual Theme", "Edit drafts"] },
                                            { cat: "Intelligence Models", items: ["Prompts to kickstart", "Evaluation of results", "Source shown", "Double check response", "Rating & Feedback Loop"] },
                                            { cat: "Tooling/Privacy", items: ["Activity history", "Seamless sharing", "Extensions to apps"] }
                                        ].slice(0, showAllGemini ? undefined : 1).map((category, cIdx) => (
                                            <div key={category.cat} className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500">{category.cat}</span>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    {category.items.slice(0, showAllGemini ? undefined : 2).map((f, i) => (
                                                        <span key={f}
                                                            className={`px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[13px] text-neutral-300 font-sans font-light transition-all duration-300 ${showMatrixTags ? 'animate-in fade-in slide-in-from-bottom-2' : 'opacity-0'}`}
                                                            style={{ animationDelay: `${(cIdx * 3 + i) * 50}ms` }}
                                                        >
                                                            {f}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => setShowAllGemini(!showAllGemini)}
                                            className="w-full py-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono font-bold text-blue-400 uppercase tracking-[0.3em] hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2"
                                        >
                                            {showAllGemini ? 'Show Less' : 'View All 14'}
                                            <ArrowLeft className={`w-3 h-3 transition-transform duration-500 ${showAllGemini ? 'rotate-90' : '-rotate-90'}`} />
                                        </button>
                                    </div>
                                </div>

                                {/* ChatGPT Card */}
                                <div className="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-10 flex flex-col group hover:border-[#10B981]/20 transition-all duration-500 h-fit">
                                    <div className="flex flex-col items-center text-center gap-6 mb-10 border-b border-white/5 pb-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white p-2 shadow-xl flex items-center justify-center overflow-hidden">
                                            <img src="/images/gen-ai/ChatGPT-Logo.png" alt="ChatGPT" className="w-[85%] h-auto" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-outfit font-light tracking-tight text-white">OpenAI ChatGPT</h3>
                                            <span className="text-[13px] font-mono text-[#10B981] uppercase tracking-[0.4em] font-extralight">21 Features</span>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        {[
                                            { cat: "Input & Output", items: ["Pause option", "Keyboard accessibility", "Option to change voices", "Dark / Light", "Disappearing chat", "Customise UI"] },
                                            { cat: "Assistance & Loop", items: ["Link to Support", "Feedback", "Revise output", "Starting Convos", "Conversation starters", "Analyse source", "Feedback chips"] },
                                            { cat: "Preferences/Pain", items: ["Color contrast issues", "Preferences", "Personalisation", "Language", "Connectivity", "Long-term preferences", "Customise results", "Error handling"] }
                                        ].slice(0, showAllChatGPT ? undefined : 1).map((category, cIdx) => (
                                            <div key={category.cat} className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500">{category.cat}</span>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    {category.items.slice(0, showAllChatGPT ? undefined : 2).map((f, i) => {
                                                        const isWarning = f.includes("issues") || f.includes("Pain");
                                                        return (
                                                            <span key={f}
                                                                className={`px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[13px] text-neutral-300 font-sans font-light transition-all duration-300 ${showMatrixTags ? 'animate-in fade-in slide-in-from-bottom-2' : 'opacity-0'} ${isWarning ? 'bg-red-500/10 border-red-500/20 text-red-100' : ''}`}
                                                                style={{ animationDelay: `${(cIdx * 3 + i) * 50}ms` }}
                                                            >
                                                                {f}
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => setShowAllChatGPT(!showAllChatGPT)}
                                            className="w-full py-4 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20 text-[11px] font-mono font-extralight text-[#10B981] uppercase tracking-[0.4em] hover:bg-[#10B981]/20 transition-all flex items-center justify-center gap-2"
                                        >
                                            {showAllChatGPT ? 'Show Less' : 'View All 21'}
                                            <ArrowLeft className={`w-3 h-3 transition-transform duration-500 ${showAllChatGPT ? 'rotate-90' : '-rotate-90'}`} />
                                        </button>
                                    </div>
                                </div>

                                {/* Copilot Card */}
                                <div className="bg-[#0f0f0f] border border-white/5 rounded-[2rem] p-10 flex flex-col group hover:border-[#914364]/20 transition-all duration-500 h-fit">
                                    <div className="flex flex-col items-center text-center gap-6 mb-10 border-b border-white/5 pb-10">
                                        <div className="w-16 h-16 rounded-2xl bg-white p-3 shadow-xl flex items-center justify-center overflow-hidden">
                                            <img src="/images/gen-ai/copilot-color.png" alt="Copilot" className="w-full h-full object-contain" />
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-2xl font-outfit font-light tracking-tight text-white">Microsoft Copilot</h3>
                                            <span className="text-[13px] font-mono text-orange-400 uppercase tracking-widest font-bold">14 Features</span>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        {[
                                            { cat: "Interaction Models", items: ["Stop / Pause action", "Image & Audio Input", "New chat button", "Voice features", "Chat Preference"] },
                                            { cat: "Context & Feedback", items: ["Feedback upfront", "Source links", "Advertisements", "Relevant Learn more links"] },
                                            { cat: "Advanced Customisation", items: ["Personalisation", "Language options", "Country customisation"] }
                                        ].slice(0, showAllCopilot ? undefined : 1).map((category, cIdx) => (
                                            <div key={category.cat} className="space-y-4">
                                                <div className="flex items-center gap-3">
                                                    <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-neutral-500">{category.cat}</span>
                                                </div>
                                                <div className="flex flex-col gap-2">
                                                    {category.items.slice(0, showAllCopilot ? undefined : 2).map((f, i) => (
                                                        <span key={f}
                                                            className={`px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-[13px] text-neutral-300 font-sans font-light transition-all duration-300 ${showMatrixTags ? 'animate-in fade-in slide-in-from-bottom-2' : 'opacity-0'}`}
                                                            style={{ animationDelay: `${(cIdx * 3 + i) * 50}ms` }}
                                                        >
                                                            {f}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            onClick={() => setShowAllCopilot(!showAllCopilot)}
                                            className="w-full py-4 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[11px] font-mono font-bold text-orange-400 uppercase tracking-[0.3em] hover:bg-orange-500/20 transition-all flex items-center justify-center gap-2"
                                        >
                                            {showAllCopilot ? 'Show Less' : 'View All 14'}
                                            <ArrowLeft className={`w-3 h-3 transition-transform duration-500 ${showAllCopilot ? 'rotate-90' : '-rotate-90'}`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Performance Scorecard */}
                    <div className="space-y-16 py-16">
                        <div className="text-center space-y-6 max-w-3xl mx-auto">
                            <h3 className="text-[clamp(32px,5vw,52px)] font-outfit font-extralight tracking-tight text-white leading-[1.1]">UX Dimension <span className="font-normal">Scorecard</span></h3>
                            <p className="text-white font-sans text-[15px] leading-relaxed mb-4 font-extralight">Comparative Mapping of Interaction Quality and Feature Availability</p>
                            <div className="flex justify-center gap-10 pt-4">
                                <div className="flex items-center gap-3 text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-[0.2em]">
                                    <Check className="w-4 h-4 text-green-500" /> Strong
                                </div>
                                <div className="flex items-center gap-3 text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-[0.2em]">
                                    <div className="w-3 h-1 bg-amber-500 rounded-full" /> Partial
                                </div>
                                <div className="flex items-center gap-3 text-[11px] font-mono font-bold text-neutral-400 uppercase tracking-[0.2em]">
                                    <X className="w-4 h-4 text-red-500" /> Absent
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Radar Visualization */}
                            <div className="lg:col-span-5 animate-in fade-in slide-in-from-left-8 duration-1000">
                                <RadarChart />
                            </div>

                            {/* ScoreTable */}
                            <div className="lg:col-span-7 overflow-x-auto rounded-[2.5rem] border border-white/5 bg-[#0f0f0f] shadow-2xl animate-in fade-in slide-in-from-right-8 duration-1000">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-white/5">
                                            <th className="py-6 px-8 text-left text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-neutral-500 border-b border-white/5">Dimension</th>
                                            <th className="py-6 px-6 text-center text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white border-b border-white/5">Gemini</th>
                                            <th className="py-6 px-6 text-center text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white border-b border-white/5">ChatGPT</th>
                                            <th className="py-6 px-6 text-center text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-white border-b border-white/5">Copilot</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-sm">
                                        {[
                                            { cat: "Feedback Mechanisms", g: 1, ch: 1, co: 0.5 },
                                            { cat: "Audio Modalities", g: 1, ch: 0.5, co: 1 },
                                            { cat: "Personalisation Depth", g: 0.5, ch: 1, co: 1 },
                                            { cat: "Source Transparency", g: 1, ch: 1, co: 1 },
                                            { cat: "Accessibility Compliance", g: 0.5, ch: 0.5, co: 0 },
                                            { cat: "UI Theming", g: 1, ch: 1, co: 0 },
                                            { cat: "Error Recovery", g: 0.5, ch: 0, co: 0.5 },
                                            { cat: "Conversation Control", g: 1, ch: 0.5, co: 1 }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white/[0.04] transition-all border-b border-white/5 group">
                                                <td className="py-5 px-8 font-sans font-light text-neutral-300 text-[15px] group-hover:text-white transition-colors">{row.cat}</td>
                                                <td className="py-5 px-6">
                                                    <div className="flex justify-center transition-transform group-hover:scale-110 duration-500">
                                                        {row.g === 1 ? <Check className="w-6 h-6 text-green-400" /> : row.g === 0.5 ? <div className="w-4 h-1.5 bg-amber-400 rounded-full" /> : <X className="w-6 h-6 text-red-400" />}
                                                    </div>
                                                </td>
                                                <td className="py-5 px-6">
                                                    <div className="flex justify-center transition-transform group-hover:scale-110 duration-500">
                                                        {row.ch === 1 ? <Check className="w-6 h-6 text-green-400" /> : row.ch === 0.5 ? <div className="w-4 h-1.5 bg-amber-400 rounded-full" /> : <X className="w-6 h-6 text-red-400" />}
                                                    </div>
                                                </td>
                                                <td className="py-5 px-6">
                                                    <div className="flex justify-center transition-transform group-hover:scale-110 duration-500">
                                                        {row.co === 1 ? <Check className="w-6 h-6 text-green-400" /> : row.co === 0.5 ? <div className="w-4 h-1.5 bg-amber-400 rounded-full" /> : <X className="w-6 h-6 text-red-400" />}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Core Insights Grid */}
                    <div className="space-y-12 py-16">
                        <div className="flex items-center gap-4">
                            <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white">05 HEURISTIC INSIGHTS</span>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { num: "01", title: "Feedback is fragmented across platforms", text: "Each platform handles user feedback differently — Gemini loops it into output quality, ChatGPT uses selectable chips, Copilot surfaces it upfront. No single model is dominant.", cat: "Feedback UX" },
                                { num: "02", title: "Accessibility remains an afterthought", text: "ChatGPT has keyboard shortcuts but fails colour contrast. Gemini and Copilot don't prominently feature accessibility. As AI becomes mainstream, this gap becomes a serious inclusion issue.", cat: "Inclusion" },
                                { num: "03", title: "Source transparency builds trust", text: "All three platforms surface sources — but the depth varies. Gemini's 'double check' and Copilot's link previews show different models for establishing credibility.", cat: "Trust" },
                                { num: "04", title: "Personalisation depth ≠ clarity", text: "ChatGPT has deep preference settings but users can't easily see what's been set after time passes. Copilot offers country-level customisation. More options don't always mean better UX.", cat: "Customisation" },
                                { num: "05", title: "Error recovery is largely absent", text: "ChatGPT has no clear 'go back' from errors. Gemini and Copilot offer stop/pause — but undo and recovery flows are underdeveloped across all three platforms.", cat: "Error Handling" },
                                { num: "06", title: "Audio is the emerging frontier", text: "Gemini leads with both audio input and output. Copilot has voice features. ChatGPT has voice options. Multi-modal interaction is fast becoming table stakes.", cat: "Modality" }
                            ].map((insight, i) => (
                                <div key={i} className="bg-[#0f0f0f] p-10 border border-[#10B981]/20 rounded-2xl hover:border-[#10B981]/40 transition-all group relative overflow-hidden">
                                    <div className="text-6xl font-outfit font-extralight tracking-tight text-[#10B981]/40 mb-8 transition-colors group-hover:text-[#10B981]">{insight.num}</div>
                                    <h3 className="text-xl font-outfit font-extralight text-white mb-4 leading-tight group-hover:text-[#10B981] transition-colors">{insight.title}</h3>
                                    <p className="text-neutral-300 text-[15px] font-sans font-extralight leading-relaxed mb-8 group-hover:text-[#FFF8F0] transition-colors">{insight.text}</p>
                                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.4em] text-[#10B981] border-b border-[#10B981]/40 pb-1">{insight.cat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Findings - Digital Readout Implementation */}
                <section className="space-y-16 border-t border-neutral-800/50 pt-24 relative overflow-visible">

                    <div className="flex flex-col items-start gap-3 max-w-4xl mx-auto mb-16 px-4">
                        <span className="text-[12px] font-mono tracking-[0.4em] uppercase text-[#10B981] font-bold">Research Discovery</span>
                        <h2 className="text-4xl md:text-6xl font-outfit font-extralight text-[#FFF8F0] tracking-tight">Key findings</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch relative">
                        {/* Selector Column */}
                        <div className="lg:col-span-4 flex flex-col gap-2 relative z-10 px-4">
                            {findings.map((finding: any, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedFinding(idx)}
                                    className={`w-full px-8 py-6 rounded-2xl border text-left transition-all duration-700 group relative flex flex-col gap-2 overflow-hidden ${selectedFinding === idx
                                        ? 'bg-[#1a1c23] border-[#10B981] shadow-2xl scale-[1.02] z-20'
                                        : 'bg-transparent border-white/5 hover:bg-white/5'
                                        }`}
                                >
                                    {selectedFinding === idx && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-[#10B981]/5 to-transparent" />
                                    )}
                                    <div className="flex items-center gap-3 relative z-10">
                                        <span className={`text-[11px] font-mono font-bold uppercase tracking-[0.3em] transition-colors ${selectedFinding === idx ? 'text-[#10B981]' : 'text-neutral-500'}`}>Finding 0{idx + 1}</span>
                                        {selectedFinding === idx && <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />}
                                    </div>
                                    <span className={`text-lg font-sans font-extralight tracking-tight transition-colors relative z-10 ${selectedFinding === idx ? 'text-white font-normal' : 'text-neutral-400 group-hover:text-neutral-300'}`}>
                                        {finding.title.replace(/^\d\.\s/, '')}
                                    </span>
                                </button>
                            ))}
                        </div>

                        {/* Digital Content Readout */}
                        <div className="lg:col-span-8 relative min-h-[500px]">
                            {findings[selectedFinding] && (
                                <div className="h-full ml-0 lg:ml-8 rounded-[3rem] bg-[#0A0A0E] border border-white/10 shadow-3xl relative overflow-hidden flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700">
                                    <div className="digital-grid absolute inset-0 opacity-40" />
                                    <div className="digital-scanner" />

                                    {/* Header Telemetry */}
                                    <div className="px-10 py-6 border-b border-white/10 flex items-center justify-between bg-black/40 backdrop-blur-md relative z-10">
                                        <div className="flex items-center gap-6">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Impact Severity</span>
                                                <div className="flex gap-1">
                                                    {[1, 2, 3, 4, 5].map(i => (
                                                        <div key={i} className={`w-3 h-1 rounded-full ${i <= (5 - selectedFinding % 3) ? 'bg-[#10B981]' : 'bg-white/10'}`} />
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="w-px h-8 bg-white/10" />
                                            <div className="flex flex-col">
                                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-1">Status</span>
                                                <span className="text-[11px] font-mono text-[#10B981] font-bold uppercase">Verified Research</span>
                                            </div>
                                        </div>
                                        <div className="text-[12px] font-mono text-white/40 uppercase tracking-[0.4em]">Readout_v1.02</div>
                                    </div>

                                    {/* Content Area */}
                                    <div className="p-10 md:p-16 flex-1 relative z-10 overflow-y-auto mac-scrollbar">
                                        <div className="absolute top-0 right-0 p-8">
                                            <div className="w-24 h-24 border border-[#10B981]/10 rounded-full flex items-center justify-center">
                                                <div className="w-16 h-16 border border-[#10B981]/20 rounded-full animate-ping opacity-20" />
                                                <div className="absolute w-4 h-4 bg-[#10B981]/40 rounded-full blur-xl" />
                                            </div>
                                        </div>

                                        <div className="max-w-2xl">
                                            <h3 className="text-3xl md:text-5xl font-outfit font-extralight tracking-tight text-white leading-tight mb-10">
                                                {findings[selectedFinding]?.title?.replace(/^\d\.\s/, '')}
                                            </h3>
                                            <div className="text-neutral-300 font-sans font-extralight text-lg md:text-xl leading-relaxed">
                                                {renderContentLines(findings[selectedFinding]?.content)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer Data Bar */}
                                    <div className="px-10 py-4 bg-black/60 border-t border-white/5 flex items-center gap-8 relative z-10 overflow-x-auto whitespace-nowrap">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">N-76 Sample</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Cross-Platform Sync</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                                            <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">WCAG 2.2 Compliant Analysis</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Before & After Comparison Section */}
                <section className="space-y-12 border-t border-neutral-800/50 pt-20 overflow-hidden">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
                        <p className="text-neutral-400 text-[12px] font-mono tracking-[0.4em] uppercase mb-4">UX Research · Accessibility · Flow Analysis</p>
                        <h2 className="text-4xl md:text-5xl font-sans font-extralight tracking-tight text-[#FFF8F0] leading-tight">Before & After</h2>
                        <p className="text-lg md:text-xl font-sans font-extralight leading-relaxed text-neutral-300 max-w-2xl mt-6">
                            These interactions capture <strong className="text-white font-normal ">before and after flows</strong> of surfacing <strong className="text-[#10B981] font-normal ">Accessibility features</strong> in leading AI assistants — evaluating how design changes improve <strong className="text-white font-normal underline decoration-[#10B981]/30 underline-offset-4">discoverability</strong> and <strong className="text-white font-normal underline decoration-[#10B981]/30 underline-offset-4">ease of use</strong> for users who rely on assistive capabilities.
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 mb-12 flex-wrap">
                        <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.4em] text-neutral-400"><div className="w-2 h-2 rounded-full bg-[#ff6b6b]" /> BEFORE — CURRENT EXPERIENCE</div>
                        <div className="flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.4em] text-neutral-400"><div className="w-2 h-2 rounded-full bg-[#6bffb8]" /> AFTER — REDESIGNED FOR ACCESSIBILITY</div>
                    </div>

                    {/* Tabs */}
                    <div className="flex justify-center mb-16">
                        <div className="flex gap-1 bg-[#13151A] border border-neutral-800/50 p-1.5 rounded-2xl">
                            {[
                                { id: 'chatgpt', label: 'ChatGPT', color: '#10a37f' },
                                { id: 'gemini', label: 'Gemini', color: '#8ab4f8' },
                                { id: 'copilot', label: 'Copilot', color: '#0078d4' }
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveComparisonTab(tab.id as any)}
                                    className={`flex items-center gap-3 px-6 py-2.5 rounded-xl text-sm font-sans font-extralight tracking-tight transition-all duration-300 ${activeComparisonTab === tab.id ? 'bg-neutral-800 text-[#FFF8F0] shadow-lg' : 'text-neutral-400 hover:text-white'}`}
                                >
                                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: tab.color }} />
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Comparison Panels */}
                    <div className="max-w-7xl mx-auto px-4">
                        {[
                            {
                                id: 'chatgpt',
                                name: 'ChatGPT',
                                logo: 'GPT',
                                bgColor: 'bg-[#10a37f]',
                                logoText: 'text-black',
                                bGif: '/images/gen-ai/Chatgpt_flow_1.gif',
                                aGif: '/images/gen-ai/Chatgpt_flow_2.gif',
                                bNote: 'Multiple clicks required to find basic accessibility settings. Discoverability is hindered by deep nesting within General settings.',
                                aNote: 'Integrated accessibility entry points in the primary interaction flow. One-click access to voice and vision controls.'
                            },
                            {
                                id: 'gemini',
                                name: 'Gemini',
                                logo: 'Gm',
                                bgColor: 'bg-[#8ab4f8]',
                                logoText: 'text-black',
                                bGif: '/images/gen-ai/Gemini_Flow_1.gif',
                                aGif: '/images/gen-ai/Gemini_Flow_2_.gif',
                                bNote: 'Visual layout lacks clear contrast for critical UI elements, making it difficult for low-vision users to navigate.',
                                aNote: 'High-contrast themes and dynamic text scaling implemented directly into the core UI framework.'
                            },
                            {
                                id: 'copilot',
                                name: 'Copilot',
                                logo: 'Co',
                                bgColor: 'bg-[#0078d4]',
                                logoText: 'text-[#F4E5E9]',
                                bGif: '/images/gen-ai/Copilot_flow_1.gif',
                                aGif: '/images/gen-ai/Copilot_flow_2.gif',
                                bNote: 'Longest journey paths to toggle accessibility modes. System feedback for screen readers is inconsistent.',
                                aNote: 'Streamlined flow reducing navigation depth by 60%. Consistent ARIA landmarks and real-time audible status updates.'
                            }
                        ].map((panel) => (
                            <div
                                key={panel.id}
                                className={`animate-in fade-in slide-in-from-bottom-8 duration-700 ${activeComparisonTab === panel.id ? 'block' : 'hidden'}`}
                            >
                                <div className="flex items-center gap-4 mb-8 pb-4 border-b border-neutral-800/50">
                                    <div className={`w-9 h-9 ${panel.bgColor} ${panel.logoText} rounded-lg flex items-center justify-center font-outfit font-extrabold text-xs shrink-0 tracking-tight`}>
                                        {panel.logo}
                                    </div>
                                    <h3 className="text-2xl font-outfit font-extralight text-[#FFF8F0]">{panel.name}</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start relative">
                                    {/* Before Note */}
                                    <div className="lg:col-span-2 order-2 lg:order-1">
                                        <div className="sticky top-24 bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 border-t-[3px] border-t-[#ff6b6b] rounded-xl p-6 transition-all hover:bg-[#ff6b6b]/15">
                                            <div className="flex items-center gap-2 text-[12px] font-mono font-extralight uppercase tracking-[0.4em] text-[#ff6b6b] mb-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b]" /> Before
                                            </div>
                                            <p className="text-[#ff6b6b] text-xs font-mono font-extralight leading-relaxed ">
                                                {panel.bNote}
                                            </p>
                                        </div>
                                    </div>

                                    {/* GIFs */}
                                    <div className="lg:col-span-4 order-1 lg:order-2">
                                        <div className="bg-[#13151A] border border-neutral-800 rounded-2xl overflow-hidden relative group transition-all hover:border-neutral-600 hover:-translate-y-1 shadow-2xl">
                                            <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-[#ff6b6b]/15 border border-[#ff6b6b]/30 rounded text-[9px] font-mono font-light text-[#ff6b6b] uppercase tracking-widest backdrop-blur-sm">Before</div>
                                            <img src={panel.bGif} alt={`${panel.name} Before`} className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>

                                    <div className="lg:col-span-4 order-3 lg:order-3">
                                        <div className="bg-[#13151A] border border-neutral-800 rounded-2xl overflow-hidden relative group transition-all hover:border-neutral-600 hover:-translate-y-1 shadow-2xl">
                                            <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-[#6bffb8]/15 border border-[#6bffb8]/30 rounded text-[9px] font-mono font-light text-[#6bffb8] uppercase tracking-widest backdrop-blur-sm">After</div>
                                            <img src={panel.aGif} alt={`${panel.name} After`} className="w-full h-auto" />
                                        </div>
                                    </div>

                                    {/* After Note */}
                                    <div className="lg:col-span-2 order-4 lg:order-4">
                                        <div className="sticky top-24 bg-[#1a2a22] border border-[#6bffb8]/18 border-t-[3px] border-t-[#6bffb8] rounded-xl p-6 transition-all hover:bg-[#1a2a22]/80">
                                            <div className="flex items-center gap-2 text-[12px] font-mono font-extralight uppercase tracking-[0.4em] text-[#6bffb8] mb-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#6bffb8]" /> After
                                            </div>
                                            <p className="text-[#6bffb8] text-xs font-mono font-extralight leading-relaxed ">
                                                {panel.aNote}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Comparative UX Performance */}
                {comparativeUX && (
                    <section className="space-y-10 border-t border-neutral-800/50 pt-16">
                        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                            <div className="p-3 bg-purple-500/10 rounded-full mb-4 border border-purple-500/20">
                                <Zap className="w-6 h-6 text-purple-400" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-sans font-extralight tracking-tight text-[#FFF8F0] tracking-wide">Comparative UX Performance</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* ChatGPT */}
                            <div className="bg-[#13151A] rounded-[2rem] p-8 border border-neutral-800/50 hover:border-[#10B981]/40 transition-all duration-300 group flex flex-col gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <div className="inline-flex items-center w-max px-3 py-1 rounded-full border border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981] text-[12px] uppercase tracking-[0.4em] font-normal">Best Overall UX</div>
                                <h3 className="text-3xl font-outfit font-extralight tracking-tight text-[#FFF8F0]">ChatGPT</h3>
                                <p className="text-neutral-300 font-sans font-extralight leading-relaxed">High reliability, fast discovery, consistent outcomes.</p>
                            </div>

                            {/* Gemini */}
                            <div className="bg-[#13151A] rounded-[2rem] p-8 border border-neutral-800/50 hover:border-blue-400/40 transition-all duration-300 group flex flex-col gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <div className="inline-flex items-center w-max px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/10 text-blue-400 text-[12px] uppercase tracking-[0.4em] font-normal">Most Efficient</div>
                                <h3 className="text-3xl font-outfit font-extralight tracking-tight text-[#FFF8F0]">Gemini</h3>
                                <p className="text-neutral-300 font-sans font-extralight leading-relaxed">Fastest for confident users, fragile for everyone else.</p>
                                <div className="mt-auto pt-4 text-[12px] font-mono uppercase tracking-[0.4em] text-neutral-400">(When It Works)</div>
                            </div>

                            {/* Copilot */}
                            <div className="bg-[#13151A] rounded-[2rem] p-8 border border-neutral-800/20 bg-gradient-to-br from-[#13151A] to-indigo-500/5 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col gap-6 shadow-[0_10px_30px_rgba(99,102,241,0.05)]">
                                <div className="inline-flex items-center w-max px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-[11px] font-mono uppercase tracking-[0.4em] font-bold">Needs Intervention</div>
                                <h3 className="text-3xl font-outfit font-extralight tracking-tight text-white transition-colors group-hover:text-indigo-400">Copilot</h3>
                                <p className="text-neutral-300 font-sans font-extralight leading-relaxed">Longest journeys, highest “stuck” rates, unpredictable navigation.</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Data Analysis after Design Update */}
                <section className="space-y-16 border-t border-white/5 pt-24">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                        <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white underline decoration-blue-500 underline-offset-8 mb-8">06 DATA ANALYSIS POST-DESIGN</span>
                        <h2 className="text-[clamp(42px,5vw,68px)] font-outfit font-extralight leading-[1.05] text-white">Data Analysis <span className="font-normal text-blue-400">Post-Design</span></h2>
                        <p className="text-neutral-400 mt-8 text-xl md:text-2xl font-sans font-extralight leading-relaxed max-w-3xl">
                            A comparative review of accessibility gains. Highlighting the top-performing platforms across specific usability benchmarks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-7xl mx-auto">
                        {/* Table Column */}
                        <div className="lg:col-span-6 space-y-10">
                            <div className="flex items-center gap-5">
                                <h3 className="text-2xl font-outfit font-light tracking-tight text-white">Task Efficiency Scoring</h3>
                            </div>

                            <div className="bg-[#0f0f0f] border border-white/5 rounded-2xl overflow-hidden h-full flex flex-col shadow-2xl">
                                <table className="w-full text-left border-collapse flex-1">
                                    <thead>
                                        <tr className="border-b border-white/5 bg-white/5">
                                            <th className="px-8 py-5 text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-neutral-500">Platform</th>
                                            <th className="px-6 py-5 text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-neutral-500 text-center">Theme</th>
                                            <th className="px-6 py-5 text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-neutral-500 text-center">Language</th>
                                            <th className="px-6 py-5 text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-neutral-500 text-center">Keyboard</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {[
                                            { app: "ChatGPT", color: "#10B981", data: ["79.2%", "75.5%", "57.6%"] },
                                            { app: "Copilot", color: "#3b82f6", data: ["65.5%", "69.4%", "94.8%"] },
                                            { app: "Gemini", color: "#6366f1", data: ["54.9%", "90.3%", "93.6%"] }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white/[0.02] transition-colors group">
                                                <td className="px-8 py-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: row.color }} />
                                                        <span className="font-outfit font-extralight text-xl text-[#FFF8F0] group-hover:text-[#10B981] transition-colors">{row.app}</span>
                                                    </div>
                                                </td>
                                                {row.data.map((val, j) => {
                                                    const isTop = (j === 0 && i === 0) || (j === 1 && i === 2) || (j === 2 && i === 1);
                                                    return (
                                                        <td key={j} className="px-6 py-6 text-center">
                                                            <span className={`text-[15px] font-mono font-bold ${isTop ? 'text-[#FFE500] drop-shadow-[0_0_8px_rgba(255,229,0,0.3)]' : 'text-neutral-400'}`}>{val}</span>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="lg:col-span-6 space-y-10">
                            <div className="flex items-center gap-4">
                                <h3 className="text-[13px] font-mono uppercase tracking-[0.4em] font-extralight text-neutral-400 underline decoration-[#10B981]/30 underline-offset-4">07 IMPACT VISUALIZER</h3>
                            </div>

                            <div className="bg-[#0f0f0f] border border-white/5 rounded-[3rem] p-12 flex flex-col justify-between relative overflow-hidden group min-h-[500px] shadow-2xl">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.02] to-transparent pointer-events-none" />

                                <div className="flex-1 relative mt-12">
                                    {/* Legend / Y-Axis Labels */}
                                    <div className="absolute left-0 top-0 h-[85%] flex flex-col justify-around text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-widest pr-8 border-r border-white/5">
                                        <span>ChatGPT</span>
                                        <span>Copilot</span>
                                        <span>Gemini</span>
                                    </div>

                                    {/* Legend / X-Axis Labels */}
                                    <div className="absolute left-28 bottom-0 w-[75%] flex justify-around text-[11px] font-mono font-bold text-neutral-500 uppercase tracking-widest pt-8 border-t border-white/5">
                                        <span>Theme</span>
                                        <span>Language</span>
                                        <span>Keyboard</span>
                                    </div>

                                    {/* Bubble Plot Area */}
                                    <div className="absolute left-28 top-0 right-0 bottom-16 grid grid-cols-3 grid-rows-3 items-center justify-items-center">
                                        {[
                                            { val: 79.2, color: '#10B981' }, { val: 75.5, color: '#10B981' }, { val: 57.6, color: '#10B981' },
                                            { val: 65.5, color: '#3b82f6' }, { val: 69.4, color: '#3b82f6' }, { val: 94.8, color: '#3b82f6' },
                                            { val: 54.9, color: '#6366f1' }, { val: 90.3, color: '#6366f1' }, { val: 93.6, color: '#6366f1' }
                                        ].map((bubble, idx) => (
                                            <div key={idx} className="relative group/bubble">
                                                <div
                                                    className="rounded-full transition-all duration-700 hover:scale-[1.15] cursor-help flex items-center justify-center relative shadow-2xl"
                                                    style={{
                                                        width: `${bubble.val * 0.9}px`,
                                                        height: `${bubble.val * 0.9}px`,
                                                        backgroundColor: bubble.color,
                                                        opacity: 0.3 + (bubble.val / 200),
                                                        boxShadow: `0 0 30px ${bubble.color}33`,
                                                        border: `1.5px solid ${bubble.color}88`
                                                    }}
                                                >
                                                    <span className="text-[15px] font-mono font-bold text-white drop-shadow-lg">
                                                        {bubble.val}%
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accessibility Blueprint */}
                <section id="accessibility-blueprint" className="space-y-16 border-t border-white/5 pt-24">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                        <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white underline decoration-teal-500 underline-offset-8 mb-8">08 THE ACCESSIBILITY BLUEPRINT</span>
                        <h2 className="text-[clamp(42px,5vw,68px)] font-outfit font-extralight leading-[1.05] text-white">The <span className="font-normal text-teal-400">Accessibility Blueprint</span></h2>
                        <p className="text-neutral-400 mt-8 text-xl md:text-2xl font-sans font-extralight leading-relaxed max-w-2xl">
                            Designing the future of human-centered AI starts with these foundational principles.
                        </p>
                    </div>

                    <div className="w-full max-w-6xl mx-auto space-y-16">
                        {/* Interactive Grid (3 and 3) */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#13151A]/30 p-2 rounded-[2.5rem]">
                            {[
                                {
                                    id: "01",
                                    title: "Multimodal by Default",
                                    details: "Voice input/output, keyboard-only flows, gesture support, text-first fallback.",
                                    icon: "◈",
                                    color: "#4ade80",
                                    expanded: "Designing for multiple input/output modalities ensures no user is excluded based on how they interact with technology. This principle puts flexible communication at the core of every design decision.",
                                    tags: ["Voice", "Keyboard", "Gesture", "Fallback"],
                                },
                                {
                                    id: "02",
                                    title: "Conversational UX That Recovers Gracefully",
                                    details: "Starters, templates, clear 'Main Menu' & 'Reset', explicit fallback nodes.",
                                    icon: "◎",
                                    color: "#34d399",
                                    expanded: "When users get lost or confused, the system guides them back without friction. Clear escape hatches and reset paths reduce anxiety and build confidence in the interface.",
                                    tags: ["Starters", "Templates", "Recovery", "Fallback"],
                                },
                                {
                                    id: "03",
                                    title: "Accessible Chat Architecture",
                                    details: "Full keyboard access, skip links, ARIA landmarks, audible status updates.",
                                    icon: "⬡",
                                    color: "#2dd4bf",
                                    expanded: "Every chat interaction must be navigable without a mouse, discoverable by screen readers, and communicative through non-visual cues. ARIA landmarks create meaningful structure beneath the surface.",
                                    tags: ["ARIA", "Screen Reader", "Keyboard", "Skip Links"],
                                },
                                {
                                    id: "04",
                                    title: "Prompt Support, Not Prompt Dependency",
                                    details: "Suggested prompt chips, editable parameters, guided refinement.",
                                    icon: "◇",
                                    color: "#a3e635",
                                    expanded: "Users shouldn't need to become prompt engineers to get value. Offer scaffolding that teaches while it assists — chips that educate, parameters that explain, refinements that empower.",
                                    tags: ["Prompt Chips", "Parameters", "Guided", "Editable"],
                                },
                                {
                                    id: "05",
                                    title: "Inclusive Content & Output",
                                    details: "Semantic structure, high-contrast, alt text for images, captions/transcripts.",
                                    icon: "◉",
                                    color: "#facc15",
                                    expanded: "Output accessibility is just as important as input accessibility. Every generated artifact — text, image, audio — must carry the metadata and structure that makes it usable by everyone.",
                                    tags: ["High Contrast", "Alt Text", "Captions", "Semantic"],
                                },
                                {
                                    id: "06",
                                    title: "Ethical Transparency",
                                    details: "Surface confidence levels, explain system capabilities, avoid deceptive cues.",
                                    icon: "◫",
                                    color: "#fb923c",
                                    expanded: "Trust is built through honesty about what the system can and cannot do. Confidence indicators, capability explanations, and rejection of dark patterns make the AI a reliable partner.",
                                    tags: ["Confidence", "Capabilities", "Anti-Deception", "Trust"],
                                }
                            ].map((p, idx) => {
                                const isActive = activeBlueprintRow === idx;
                                const isHovered = hoveredBlueprintRow === idx;
                                return (
                                    <div
                                        key={p.id}
                                        className={`group relative border border-neutral-800/50 rounded-3xl overflow-hidden transition-all duration-500 ${isActive ? 'bg-white/[0.05] border-white/20' : 'bg-neutral-900/40 hover:bg-neutral-900/60 hover:border-neutral-700'}`}
                                        onMouseEnter={() => setHoveredBlueprintRow(idx)}
                                        onMouseLeave={() => setHoveredBlueprintRow(null)}
                                    >
                                        <button
                                            onClick={() => setActiveBlueprintRow(isActive ? null : idx)}
                                            className="w-full px-8 py-8 items-center text-left"
                                        >
                                            <div className="flex flex-col gap-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-mono text-xs font-black tracking-widest" style={{ color: p.color }}>0{idx + 1}</span>
                                                    <span className="text-xl" style={{ color: p.color }}>{p.icon}</span>
                                                </div>
                                                <h3 className={`text-2xl font-sans font-light tracking-tight leading-none transition-colors duration-300 ${isActive ? 'text-[#F4E5E9]' : 'text-[#E9E8E8]'}`}>
                                                    {p.title}
                                                </h3>
                                                {!isActive && (
                                                    <p className="text-sm text-[#e8c4d0] font-sans mt-2 line-clamp-2 leading-relaxed">{p.details}</p>
                                                )}
                                            </div>
                                        </button>

                                        {/* Expanded Content */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="px-8 pb-10 flex flex-col gap-6">
                                                <p className="text-[#FFF8F0] font-sans font-extralight leading-relaxed">
                                                    {p.expanded}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {p.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 rounded-md bg-white/10 border border-white/10 text-[12px] font-mono uppercase tracking-[0.4em] text-[#10B981] font-extralight">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="pt-6 border-t border-white/5 space-y-3">
                                                    <div className="text-[12px] font-mono tracking-[0.4em] uppercase text-[#10B981] font-bold">Implementation Breakdown</div>
                                                    <p className="text-neutral-300 text-sm font-sans font-extralight leading-relaxed">
                                                        {p.details}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </section>

                <section className="pt-24 pb-12">
                    <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#101118] to-black border border-white/10 rounded-[4rem] p-12 md:p-24 shadow-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-white/[0.02] pointer-events-none" />
                        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-indigo-500/5 blur-[120px] rounded-full" />
                        <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-[#10B981]/5 blur-[120px] rounded-full" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                            <div className="lg:col-span-12 space-y-12 mb-12 border-b border-white/5 pb-12">
                                <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white underline decoration-[#10B981] underline-offset-8">09 THE FINAL TAKEAWAY</span>
                            </div>

                            <div className="lg:col-span-10 space-y-12">
                                <h2 className="text-[clamp(32px,5vw,72px)] font-outfit font-extralight tracking-tight leading-[1.05] text-white">
                                    Designing for inclusivity isn't an <span className="font-normal text-[#10B981]">add-on</span>; it's the foundation of <span className="font-normal text-white">trust in AI</span>.
                                </h2>
                                <p className="text-xl md:text-2xl font-sans font-extralight leading-relaxed text-neutral-300 max-w-2xl">
                                    Accessibility is the core operating system of human-centered AI. It is the defining competitive advantage that separates a tool from a partner.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pb-40 pt-24 border-t border-white/5 bg-[#080808] overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#10B981]/5 blur-[150px] -z-10" />

                    <div className="container mx-auto max-w-7xl px-4">
                        <div className="flex flex-col items-center text-center space-y-8 mb-24">
                            <span className="text-[16px] font-mono font-extralight uppercase tracking-[0.4em] text-white underline decoration-teal-500 underline-offset-8">10 BEHIND THE SCENES</span>
                            <h2 className="text-[clamp(42px,5vw,68px)] font-outfit font-extralight leading-[1.05] text-white">The <span className="font-normal text-teal-400">Research Framework</span></h2>
                            <p className="text-neutral-500 font-mono text-[13px] uppercase tracking-[0.3em] max-w-md font-extralight">The Architectural Logic of the Investigation</p>
                        </div>

                        <div className="relative">
                            {/* Horizontal Progress Line Background */}
                            <div className="absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent hidden md:block" />

                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
                                {methodologyData.map((step, idx) => (
                                    <div key={idx} className="flex flex-col items-center md:items-start space-y-10 group relative h-full">
                                        {/* Marker Circle */}
                                        <div className="w-24 h-24 shrink-0 rounded-[2rem] bg-[#0A0B10] border border-[#10B981]/40 flex items-center justify-center text-3xl font-outfit font-extralight tracking-tight text-[#10B981] group-hover:border-[#10B981]/60 group-hover:shadow-[0_0_50px_rgba(16,185,129,0.2)] transition-all duration-700 relative overflow-hidden group-hover:-translate-y-2">
                                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.1),transparent)] opacity-0 group-hover:opacity-100 transition-opacity" />
                                            0{idx + 1}
                                        </div>

                                        <div className="space-y-6 text-center md:text-left h-full">
                                            <div className="space-y-2">
                                                <h3 className="text-[12px] font-mono font-extralight text-[#10B981] uppercase tracking-[0.4em]">Phase {(idx + 1).toString().padStart(2, '0')}</h3>
                                                <h4 className="text-[0.85rem] font-light text-[#F4E5E9] uppercase tracking-[0.1em] border-b border-[#10B981]/40 pb-4 min-h-[60px] flex items-end">
                                                    {step.title}
                                                </h4>
                                            </div>
                                            <div className="text-[#C4BFC1] text-[0.8rem] font-sans leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                                                {step.content}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    );
}
