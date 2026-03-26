"use client";

import React from "react";
import { type Project } from "@/lib/data";
import { ArrowLeft, AlertTriangle, Eye, BarChart3, Info, MousePointer2, ChevronRight, Target, Sparkles, Layers, ShieldCheck, History, Zap, Search, Lightbulb, Lock } from "lucide-react";
import Link from "next/link";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export function ContentVerifyProject({ project }: { project: Project }) {
    const [lightboxImage, setLightboxImage] = React.useState<{ src: string; alt: string } | null>(null);
    const [selectedPainPoint, setSelectedPainPoint] = React.useState<string | null>('fatigue');
    const [showDesignLogic, setShowDesignLogic] = React.useState(true);
    const [showCategories, setShowCategories] = React.useState(true);
    const [focusedBox, setFocusedBox] = React.useState<string | null>(null);
    const [showMethodology, setShowMethodology] = React.useState(false);

    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [password, setPassword] = React.useState("");
    const [error, setError] = React.useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === "verifY_contenT12") {
            setIsAuthenticated(true);
            setError(false);
        } else {
            setError(true);
        }
    };

    // Helper to find sections by title
    const getSection = (title: string) => project.sections?.find((s: any) => s.title === title);

    const objective = getSection("PROJECT OBJECTIVE:");
    const existing = getSection("EXISTING MECHANISM VS OUR TOOL");
    const research = getSection("RESEARCH");
    const summary = getSection("CONTROVERSY DETECTION");
    const task = getSection("TASK INTERPRETATION");
    const personas = getSection("PERSONAS");
    const feedback = getSection("DISCOVERY FEEDBACK");

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

    const stats = [
        {
            id: 1,
            label: "Alert Fatigue",
            number: "30%",
            text: "of critical alerts are missed or ignored because they are buried in 'noise'.",
            source: "Osterman Research (2025)",
            icon: AlertTriangle
        },
        {
            id: 2,
            label: "Hidden Bias",
            number: "72%",
            text: "of adults view the spread of biased information as a major threat.",
            source: "Pew Research Center (2025)",
            icon: Eye
        },
        {
            id: 3,
            label: "Statistical Deception",
            number: "33%",
            text: "of users consistently click through to source links to verify numbers.",
            source: "Reuters Institute (2025)",
            icon: BarChart3
        },
        {
            id: 4,
            label: "Information Voids",
            number: "28%",
            text: "of users rarely verify AI summaries, meaning omitted viewpoints cease to exist.",
            source: "Time Magazine (2026)",
            icon: Info
        }
    ];

    if (!isAuthenticated) {
        return (
            <main
                style={{
                    fontFamily: "var(--font-sans), sans-serif",
                    background: "var(--color-canvas, #000000)",
                    color: "var(--color-ivory, #FFF8F0)",
                    minHeight: "100vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div style={{ maxWidth: 400, width: "100%", padding: 40, background: "#111", borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}>
                        <Lock size={48} color="#FFF8F0" />
                    </div>
                    <h1 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 32, fontWeight: 200, marginBottom: 16, color: "white" }}>Protected Case Study</h1>
                    <p style={{ color: "#888", marginBottom: 32, fontSize: 14 }}>Enter the password to view the Content Verify project.</p>

                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        <div style={{ textAlign: "left" }}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter password"
                                style={{
                                    width: "100%",
                                    padding: "16px",
                                    background: "#000",
                                    border: `1px solid ${error ? "#ff4444" : "rgba(255,255,255,0.2)"}`,
                                    borderRadius: 8,
                                    color: "#fff",
                                    outline: "none",
                                    fontSize: 16,
                                    boxSizing: "border-box"
                                }}
                            />
                            {error && <span style={{ color: "#ff4444", fontSize: 12, marginTop: 8, display: "block" }}>Incorrect password</span>}
                        </div>
                        <button
                            type="submit"
                            style={{
                                background: "#FFF8F0",
                                color: "#000",
                                padding: "16px",
                                borderRadius: 8,
                                border: "none",
                                fontWeight: 600,
                                cursor: "pointer",
                                fontSize: 16,
                                transition: "opacity 0.2s"
                            }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = "0.9"}
                            onMouseOut={(e) => e.currentTarget.style.opacity = "1"}
                        >
                            Unlock Case Study
                        </button>
                    </form>
                    <Link href="/work" style={{ display: "inline-block", marginTop: 24, fontSize: 14, color: "#888", textDecoration: "underline" }}>
                        Return to Work
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#FDFBF7] dark:bg-[#0a0a0a] text-neutral-900 dark:text-neutral-100 font-serif selection:bg-yellow-200 dark:selection:bg-yellow-900/30">
            {/* Styles for this page */}
            <style jsx global>{`
                header[class*="fixed"] {
                    display: none !important;
                }
                nav[class*="fixed"]:not([class*="z-50"]) {
                    display: none !important;
                }
                @keyframes dash {
                    to {
                        stroke-dashoffset: -8;
                    }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-25px); }
                }
                .animate-float {
                    animation: float 2s ease-in-out infinite;
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
            <header className="pt-24 pb-8 md:pt-32 md:pb-10 border-b border-neutral-200 dark:border-neutral-800">
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
            <article className="container mx-auto px-4 py-6 md:py-8">
                {/* Introduction / Objective */}
                <section className="max-w-4xl mx-auto mb-16 bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-800">
                    <div className="mb-10 flex items-center gap-4">
                        <span className="h-px w-8 bg-[#34BF4B]"></span>
                        <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-[#34BF4B]">The Objective</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <div className="prose prose-xl prose-invert font-serif leading-relaxed">
                                <ul className="space-y-6 list-none p-0 m-0">
                                    {Array.isArray(objective?.content) && objective.content.map((bullet: string, i: number) => (
                                        <li key={i} className="flex gap-4 text-white antialiased">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#34BF4B] mt-3" />
                                            <span className="text-lg md:text-xl leading-relaxed">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="lg:col-span-4 flex flex-col gap-3 justify-start">
                            {!showCategories ? (
                                <button
                                    onClick={() => setShowCategories(true)}
                                    className="px-6 py-8 border-2 border-dashed border-neutral-700 rounded-xl bg-white/5 backdrop-blur-sm text-neutral-500 font-sans font-bold uppercase tracking-widest hover:border-[#34BF4B] hover:text-[#34BF4B] transition-all duration-300 group"
                                >
                                    <div className="flex flex-col items-center gap-2">
                                        <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span>Show Categories</span>
                                    </div>
                                </button>
                            ) : (
                                (objective as any)?.chips?.map((chip: string, i: number) => (
                                    <div
                                        key={i}
                                        className="px-6 py-4 border border-[#34BF4B]/30 rounded-xl bg-[#34BF4B]/5 backdrop-blur-sm shadow-sm hover:border-[#34BF4B]/60 hover:bg-[#34BF4B]/10 transition-all duration-500 group cursor-pointer animate-in zoom-in-95 fade-in duration-500"
                                        style={{ animationDelay: `${i * 100}ms` }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#34BF4B]">{chip}</span>
                                            <Zap className="w-3 h-3 text-[#34BF4B] opacity-40 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>

                {/* Outcome-Based Usability Metrics */}
                <section className="max-w-6xl mx-auto mb-24 px-4">
                    <div className="flex flex-col items-center mb-16 px-4 text-center">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-[#34BF4B] mb-4">Results</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-center mb-6">Did our solution make any change?</h2>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-center text-neutral-300">Outcome-Based Usability Metrics</h3>
                        <p className="mt-4 text-neutral-400 font-sans tracking-wide">In-depth statistical analysis (Chi-Square method)</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Metric 1 */}
                        <div className="flex flex-col items-center text-center p-8 bg-neutral-900 rounded-[2rem] border border-[#BF34A8]/20 hover:border-[#BF34A8]/50 transition-colors group">
                            <div className="flex flex-col items-center justify-center text-4xl md:text-5xl font-bold font-serif text-[#BF34A8] mb-6 drop-shadow-[0_0_15px_rgba(191,52,168,0.3)] transition-all">
                                <div className="flex items-center justify-center gap-3">
                                    <span>Chi² = 4.6</span>
                                    <div className="relative group/tooltip cursor-help flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                                        <Info className="w-5 h-5 text-neutral-400 group-hover/tooltip:text-[#BF34A8] transition-colors" />
                                        {/* Tooltip Content */}
                                        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-5 rounded-[1.5rem] bg-neutral-800 text-white font-sans text-xs shadow-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 pointer-events-none border border-white/10 text-left cursor-default">
                                            <div className="font-bold mb-2 pb-2 border-b border-white/10 text-[#BF34A8] uppercase tracking-widest text-[10px]">What does this mean?</div>
                                            <p className="text-neutral-300 mt-3 mb-3 leading-relaxed font-normal normal-case">
                                                A score above <strong className="text-white">3.8 (the baseline)</strong> means the tool made a real difference, rather than just random chance.
                                            </p>
                                            <p className="text-neutral-300 leading-relaxed font-normal normal-case">
                                                <strong className="text-white">p &lt; 0.05</strong> means we are <strong className="text-white">95% confident</strong> these improvements are real.
                                            </p>
                                            <p className="text-[#BF34A8] leading-relaxed font-bold normal-case mt-3 pt-3 border-t border-white/10 text-center text-[10px] tracking-wider uppercase">
                                                ~20 Formal controlled tests
                                            </p>
                                            {/* Bottom triangle */}
                                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-800 border-b border-r border-white/10 rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                                <span className="block text-sm font-sans text-[#BF34A8]/60 mt-2 tracking-widest uppercase text-center w-full">p &lt; 0.05</span>
                            </div>
                            <h3 className="text-lg font-bold font-sans uppercase tracking-widest text-white mb-4">Bias Recognition</h3>
                            <p className="text-neutral-400 font-serif leading-relaxed italic text-sm">
                                Participants using the tool were significantly more likely to correctly identify biased or controversial statements compared to the baseline.
                            </p>
                        </div>

                        {/* Metric 2 */}
                        <div className="flex flex-col items-center text-center p-8 bg-neutral-900 rounded-[2rem] border border-[#34BF4B]/20 hover:border-[#34BF4B]/50 transition-colors group">
                            <div className="flex flex-col items-center justify-center text-4xl md:text-5xl font-bold font-serif text-[#34BF4B] mb-6 drop-shadow-[0_0_15px_rgba(52,191,75,0.3)] transition-all">
                                <div className="flex items-center justify-center gap-3">
                                    <span>Chi² = 16.4</span>
                                    <div className="relative group/tooltip cursor-help flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
                                        <Info className="w-5 h-5 text-neutral-400 group-hover/tooltip:text-[#34BF4B] transition-colors" />
                                        {/* Tooltip Content */}
                                        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 p-5 rounded-[1.5rem] bg-neutral-800 text-white font-sans text-xs shadow-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-300 pointer-events-none border border-white/10 text-left cursor-default">
                                            <div className="font-bold mb-2 pb-2 border-b border-white/10 text-[#34BF4B] uppercase tracking-widest text-[10px]">What does this mean?</div>
                                            <p className="text-neutral-300 mt-3 mb-3 leading-relaxed font-normal normal-case">
                                                A score above <strong className="text-white">6.6 (the high baseline)</strong> means the tool had an exceptionally strong impact compared to random chance.
                                            </p>
                                            <p className="text-neutral-300 leading-relaxed font-normal normal-case">
                                                <strong className="text-white">p &lt; 0.005</strong> means we are <strong className="text-white">99.5% confident</strong> these improvements are real.
                                            </p>
                                            <p className="text-[#34BF4B] leading-relaxed font-bold normal-case mt-3 pt-3 border-t border-white/10 text-center text-[10px] tracking-wider uppercase">
                                                ~20 Formal controlled tests
                                            </p>
                                            {/* Bottom triangle */}
                                            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-800 border-b border-r border-white/10 rotate-45"></div>
                                        </div>
                                    </div>
                                </div>
                                <span className="block text-sm font-sans text-[#34BF4B]/60 mt-2 tracking-widest uppercase text-center w-full">p &lt; 0.005</span>
                            </div>
                            <h3 className="text-lg font-bold font-sans uppercase tracking-widest text-white mb-4">User Engagement</h3>
                            <p className="text-neutral-400 font-serif leading-relaxed italic text-sm">
                                There was a substantial increase in interaction with contested content, meaning the highlights successfully drew focus to controversial areas.
                            </p>
                        </div>

                        {/* Metric 3 */}
                        <div className="flex flex-col items-center text-center p-8 bg-neutral-900 rounded-[2rem] border border-[#34BF4B]/20 hover:border-[#34BF4B]/50 transition-colors group">
                            <div className="text-4xl md:text-5xl font-bold font-serif text-[#34BF4B] mb-6 drop-shadow-[0_0_15px_rgba(52,191,75,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(52,191,75,0.6)] transition-all flex items-baseline justify-center gap-2">
                                19%<span className="text-2xl text-neutral-500 font-sans tracking-widest uppercase">to</span>50%
                            </div>
                            <span className="block text-sm font-sans text-[#34BF4B]/60 tracking-widest uppercase mb-6 drop-shadow-[0_0_15px_rgba(52,191,75,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(52,191,75,0.6)] transition-all">Shift</span>
                            <h3 className="text-lg font-bold font-sans uppercase tracking-widest text-white mb-4">Cognitive Impact</h3>
                            <p className="text-neutral-400 font-serif leading-relaxed italic text-sm">
                                Measured opinion shifts across different topics indicate that exposure to alternative viewpoints via the tool meaningfully altered reader perspectives.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Misinformation Meme Breakout */}
                {(project as any).misinfoMeme && (
                    <section className="max-w-4xl mx-auto mb-32">
                        <div className="w-full group cursor-pointer" onClick={() => setLightboxImage({ src: (project as any).misinfoMeme, alt: "Misinformation Meme" })}>
                            <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-black/5">
                                <img
                                    src={(project as any).misinfoMeme}
                                    alt="How do I trust anything I read?"
                                    className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <span className="text-xs font-sans font-bold uppercase tracking-widest text-white/70 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">The Core Problem</span>
                                </div>
                            </div>
                            <p className="mt-4 text-center text-sm font-serif italic text-neutral-400 dark:text-neutral-600">The "Friction of Uncertainty" in the AI era.</p>
                        </div>
                    </section>
                )}

                {/* Interactive Pain Points Section */}
                <section className="max-w-6xl mx-auto px-4 relative">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">The Logic of Intervention: Pain points</h2>
                        <div className="flex items-center gap-2 text-[#34BF4B] bg-[#34BF4B]/5 px-4 py-1.5 rounded-full border border-[#34BF4B]/20 animate-pulse">
                            <MousePointer2 className="w-3.5 h-3.5" />
                            <span className="text-[10px] font-sans font-bold uppercase tracking-widest">Select a friction point to trace the logic</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
                        {/* Left Side: Friction Points Sidebar */}
                        <div className="lg:col-span-3 flex flex-col gap-3 relative z-10">
                            {interactivePainPoints.map((point) => (
                                <button
                                    key={point.id}
                                    id={`pain-point-${point.id}`}
                                    onClick={() => {
                                        if (selectedPainPoint === point.id) {
                                            setSelectedPainPoint(null);
                                            setShowDesignLogic(false);
                                        } else {
                                            setSelectedPainPoint(point.id);
                                            setShowDesignLogic(false);
                                        }
                                    }}
                                    className={`w-full px-6 py-5 rounded-xl border text-left transition-all duration-500 group relative overflow-hidden flex items-center justify-between ${selectedPainPoint === point.id
                                        ? 'bg-neutral-900 border-[#34BF4B] text-white shadow-[0_0_20px_rgba(52,191,75,0.1)]'
                                        : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:border-neutral-400 dark:hover:border-neutral-600'
                                        }`}
                                >
                                    <span className={`text-xs font-sans font-bold uppercase tracking-widest relative z-10 block transition-colors ${selectedPainPoint === point.id ? 'text-[#34BF4B]' : 'text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white'}`}>
                                        {point.title}
                                    </span>
                                    {selectedPainPoint === point.id && (
                                        <ChevronRight className="w-4 h-4 text-[#34BF4B] animate-in slide-in-from-left-2" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Middle: Connection line */}
                        <div className="hidden lg:flex items-center justify-center lg:col-span-1 py-12">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="overflow-visible">
                                <path d="M0 20H38" stroke="#34BF4B" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinite]" />
                                <path d="M32 14L38 20L32 26" stroke="#34BF4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Right: Flow Content */}
                        <div className="lg:col-span-8 relative min-h-[400px]">
                            {selectedPainPoint ? (
                                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-in fade-in slide-in-from-left-8 duration-700">

                                    {/* Step 1: Root Cause */}
                                    <div
                                        onClick={() => setShowDesignLogic(!showDesignLogic)}
                                        className={`flex-1 w-full p-8 rounded-2xl border transition-all duration-500 cursor-pointer group relative ${showDesignLogic ? 'bg-neutral-900 border-[#34BF4B]/50 scale-[1.02]' : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:shadow-xl'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[10px] font-bold font-sans">01</div>
                                            <span className={`text-[10px] font-sans font-bold uppercase tracking-[0.2em] ${showDesignLogic ? 'text-[#34BF4B]' : 'text-neutral-400'}`}>The Root Cause</span>
                                        </div>
                                        <p className={`text-lg md:text-xl font-serif italic leading-relaxed transition-colors ${showDesignLogic ? 'text-white' : 'text-neutral-800 dark:text-neutral-200'}`}>
                                            "{interactivePainPoints.find(p => p.id === selectedPainPoint)?.rootCause}"
                                        </p>
                                        {/* Row removed arrow */}
                                    </div>

                                    {/* SVG Connector for Desktop */}
                                    <div className={`hidden lg:block transition-all duration-700 shrink-0 ${showDesignLogic ? 'opacity-100 scale-100' : 'opacity-20 scale-95'}`}>
                                        <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="overflow-visible">
                                            <path d="M0 12H58" stroke="#34BF4B" strokeWidth="2" strokeDasharray="4 4" className={showDesignLogic ? "animate-[dash_2s_linear_infinite]" : ""} />
                                            <path d="M52 6L58 12L52 18" stroke="#34BF4B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    {/* Step 2: Design Direction - Placeholder State */}
                                    <div
                                        className={`flex-1 w-full p-10 rounded-2xl transition-all duration-700 relative overflow-hidden ${showDesignLogic
                                            ? 'bg-neutral-900 border-[#34BF4B] shadow-[0_20px_60px_rgba(52,191,75,0.15)] opacity-100'
                                            : 'bg-neutral-100 dark:bg-neutral-900/40 border-dashed border-neutral-300 dark:border-neutral-800 opacity-60 scale-[0.98]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold font-sans transition-colors ${showDesignLogic ? 'bg-[#34BF4B]/10 text-[#34BF4B]' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400'}`}>02</div>
                                            <span className={`text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-colors ${showDesignLogic ? 'text-[#34BF4B]' : 'text-neutral-500'}`}>Design Direction</span>
                                        </div>

                                        {showDesignLogic ? (
                                            <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                                                <p className="text-xl md:text-2xl font-serif text-white antialiased leading-relaxed mb-8">
                                                    {interactivePainPoints.find(p => p.id === selectedPainPoint)?.designLogic}
                                                </p>
                                                <div className="inline-block px-4 py-1.5 rounded-full border border-[#34BF4B]/30 text-[#34BF4B] text-[10px] font-sans font-bold uppercase tracking-widest bg-[#34BF4B]/5">
                                                    Framework Logic Applied
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex flex-col gap-4 py-8">
                                                <div className="h-4 w-3/4 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                                                <div className="h-4 w-1/2 bg-neutral-200 dark:bg-neutral-800 rounded animate-pulse" />
                                                <p className="text-xs font-sans text-neutral-400 uppercase tracking-widest mt-4 italic">Click Step 01 to reveal solution</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-full flex items-center justify-center border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-3xl p-12 opacity-50 bg-neutral-50/50 dark:bg-neutral-900/20">
                                    <div className="text-center">
                                        <Info className="w-12 h-12 text-neutral-300 dark:text-neutral-700 mx-auto mb-4" />
                                        <p className="font-serif italic text-neutral-400">Select a friction point on the left to begin the trace.</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* The Goal Section - Floating Narrative */}
                <section className="max-w-4xl mx-auto mb-0 relative overflow-visible group pt-0 pb-16 animate-float -mt-12">
                    {/* Background removed as requested */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#34BF4B]/10 blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10" />

                    <div className="p-12 md:p-20 text-center relative">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
                            <Target className="w-5 h-5 text-[#34BF4B]" />
                            <span className="text-xs md:text-sm font-sans font-bold uppercase tracking-[0.3em] text-white">The North Star</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                            "A seamless, non-intrusive assistant that surfaces <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34BF4B] to-blue-400">alternative perspectives</span> without disrupting reading flow."
                        </h2>

                        <div className="flex justify-center gap-8 mt-4">
                            <div className="flex flex-col items-center gap-2">
                                <Sparkles className="w-5 h-5 text-[#34BF4B]/60" />
                                <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-widest">Ambient</span>
                            </div>
                            <div className="w-px h-12 bg-white/10" />
                            <div className="flex flex-col items-center gap-2">
                                <Layers className="w-5 h-5 text-blue-400/60" />
                                <span className="text-[10px] font-sans text-neutral-400 uppercase tracking-widest">Multi-layered</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Primary Research: Wikipedia Comparison */}
                <section className="max-w-6xl mx-auto mb-24 px-4 pt-4">
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-neutral-400 mb-4">Primary Research</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center">Breaking the "Talk" Page Barrier</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        {/* Wikipedia System */}
                        <div className="flex flex-col bg-white dark:bg-neutral-900/50 rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden hover:border-red-500/30 transition-colors group">
                            <div className="p-8 border-b border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold font-serif">Wikipedia's System</h3>
                                    <span className="px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-bold uppercase tracking-widest border border-red-500/20">Old UX</span>
                                </div>
                                <div className="space-y-4">
                                    <div className="aspect-[3/1] relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-700 cursor-pointer bg-neutral-50 dark:bg-neutral-900"
                                        onClick={() => setLightboxImage({ src: "/images/content-verify/wiki-timeline.png", alt: "Wikipedia Article Status Timeline" })}>
                                        <img src="/images/content-verify/wiki-timeline.png" alt="Wikipedia Timeline" className="w-full h-full object-contain" />
                                        <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply dark:mix-blend-overlay" />
                                    </div>
                                    <div className="aspect-[4/3] relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-700 cursor-pointer"
                                        onClick={() => setLightboxImage({ src: "/images/content-verify/wiki-criteria.jpg", alt: "Wikipedia Quality Criteria Table" })}>
                                        <img src="/images/content-verify/wiki-criteria.jpg" alt="Wikipedia Criteria" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-red-500/5 mix-blend-multiply dark:mix-blend-overlay" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 space-y-6 flex-1">
                                {[
                                    { title: "Technical Barrier", desc: "Must visit 'Talk' pages and deep history logs.", icon: History },
                                    { title: "Binary Alerts", desc: "Coarse labels like 'Disputed' or 'Not Disputed'.", icon: AlertTriangle },
                                    { title: "Static Warnings", desc: "Large, distracting banners that interrupt reading.", icon: Info },
                                    { title: "Manual Verification", desc: "Users must manually dig through citations.", icon: MousePointer2 }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1"><item.icon className="w-4 h-4 text-red-400" /></div>
                                        <div>
                                            <h4 className="text-sm font-sans font-bold uppercase tracking-wide mb-1 text-neutral-900 dark:text-neutral-100">{item.title}</h4>
                                            <p className="text-sm font-serif text-white">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Verify Tool */}
                        <div className="flex flex-col bg-neutral-900 rounded-3xl border border-[#34BF4B]/30 overflow-hidden shadow-[0_0_50px_rgba(52,191,75,0.05)] group">
                            <div className="p-8 border-b border-white/10 bg-white/5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold font-serif text-white">Content Verify</h3>
                                    <span className="px-3 py-1 rounded-full bg-[#34BF4B]/10 text-[#34BF4B] text-[10px] font-bold uppercase tracking-widest border border-[#34BF4B]/20">New UX</span>
                                </div>
                                <div className="relative rounded-xl overflow-hidden border border-white/10 group-hover:border-[#34BF4B]/50 transition-all duration-700 cursor-pointer bg-white"
                                    onClick={() => setLightboxImage({ src: "/images/content-verify/new-ux-alert.png", alt: "Context Alert UI View" })}>
                                    <img src="/images/content-verify/new-ux-alert.png" alt="Context Alert UI" className="w-full h-auto object-contain" />
                                </div>
                            </div>
                            <div className="p-8 space-y-6 flex-1 shadow-[inset_0_0_100px_rgba(52,191,75,0.02)]">
                                {[
                                    { title: "Ambient Data", desc: "'Dwell-and-Reveal' pop-ups directly in the flow.", icon: Zap },
                                    { title: "Nuanced Tiers", desc: "Low, Medium, and High-risk flags with context.", icon: ShieldCheck },
                                    { title: "Progressive Disclosure", desc: "Subtle highlights + unobtrusive Top Bar.", icon: Layers },
                                    { title: "AI-Powered \"Gist\"", desc: "Instant summaries of supporting vs. opposing views.", icon: Sparkles }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1"><item.icon className="w-4 h-4 text-[#34BF4B]" /></div>
                                        <div>
                                            <h4 className="text-sm font-sans font-bold uppercase tracking-wide mb-1 text-white">{item.title}</h4>
                                            <p className="text-sm font-serif text-white">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Secondary Research & Insights */}
                <section
                    className="max-w-6xl mx-auto mb-24 px-4 pt-12 relative"
                    onClick={() => focusedBox && setFocusedBox(null)}
                >
                    <div className="flex flex-col gap-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                                <Search className="w-3.5 h-3.5 text-[#34BF4B]" />
                                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white">Secondary Research</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                                Uncovering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34BF4B] to-emerald-400">UI and interactions</span>
                            </h2>
                        </div>

                        {/* Backdrop for click outside */}
                        {focusedBox && (
                            <div
                                className="fixed inset-0 z-10 cursor-pointer"
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(null); }}
                            />
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch relative">
                            {/* Insight Box 1 */}
                            <div
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(focusedBox === 'insight1' ? null : 'insight1'); }}
                                className={`lg:col-span-6 p-8 rounded-[2rem] bg-neutral-900 border border-white/10 transition-all duration-500 cursor-pointer group flex flex-col justify-center gap-6 relative overflow-hidden ${focusedBox === 'insight1' ? 'scale-105 z-20 ring-2 ring-[#34BF4B]/50 shadow-[0_0_50px_rgba(52,191,75,0.2)]' :
                                    (focusedBox ? 'blur-md opacity-20 scale-95' : 'hover:border-[#34BF4B]/30 hover:bg-neutral-800/50')
                                    }`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#34BF4B]/5 blur-[60px] -z-10" />
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-[#34BF4B]/10 border border-[#34BF4B]/20">
                                        <AlertTriangle className="w-6 h-6 text-[#34BF4B]" />
                                    </div>
                                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-500">Problem Space 01</span>
                                </div>
                                <p className="text-xl md:text-2xl font-serif text-neutral-200 leading-relaxed italic antialiased">
                                    "Existing bias detection tools are often slow, opaque, or academic-focused, lacking real-time assistance."
                                </p>
                            </div>

                            {/* Insight Box 2 */}
                            <div
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(focusedBox === 'insight2' ? null : 'insight2'); }}
                                className={`lg:col-span-6 p-8 rounded-[2rem] bg-neutral-900 border border-white/10 transition-all duration-500 cursor-pointer group flex flex-col justify-center gap-6 relative overflow-hidden ${focusedBox === 'insight2' ? 'scale-105 z-20 ring-2 ring-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.2)]' :
                                    (focusedBox ? 'blur-md opacity-20 scale-95' : 'hover:border-blue-500/30 hover:bg-neutral-800/50')
                                    }`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-[60px] -z-10" />
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                                        <Eye className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-neutral-500">Problem Space 02</span>
                                </div>
                                <p className="text-xl md:text-2xl font-serif text-neutral-200 leading-relaxed italic antialiased">
                                    "Users remain unaware of controversies, revisions, and editorial conflicts that shape seemingly factual information."
                                </p>
                            </div>

                            {/* Large Image Bento Box */}
                            <div
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(focusedBox === 'image' ? null : 'image'); }}
                                className={`lg:col-span-12 rounded-[3rem] bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500 cursor-pointer relative group/img 
                                    ${focusedBox === 'image' ? 'scale-[1.02] z-20 ring-2 ring-[#34BF4B]/30 shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row' :
                                        (focusedBox ? 'blur-md opacity-20 scale-[0.98] flex flex-col' : 'hover:border-white/20 flex flex-col')
                                    }`}
                            >
                                {/* Image Container */}
                                <div className={`relative transition-all duration-500 ${focusedBox === 'image' ? 'w-full lg:w-[60%] aspect-[16/9]' : 'w-full aspect-[16/9] md:aspect-[21/9]'}`}>
                                    <img
                                        src="/images/content-verify/scouting-ui.jpg"
                                        alt="Scouting for UI interactions and Ideation"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    {/* Overlay text that only shows when not expanded fully on some screens, or hide on lg when expanded */}
                                    <div className={`absolute bottom-6 left-6 right-6 p-8 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-500 ${focusedBox === 'image' ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                                        <div className="max-w-xl">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2.5 rounded-full bg-[#34BF4B]/10 border border-[#34BF4B]/20">
                                                    <Lightbulb className="w-5 h-5 text-[#34BF4B]" />
                                                </div>
                                                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#34BF4B]">Ideation Board</span>
                                            </div>
                                            <h3 className="text-2xl font-serif font-bold text-white mb-2">Scouting for UI interactions & Ideation</h3>
                                            <p className="text-neutral-300 text-sm font-sans tracking-wide leading-relaxed">Synthesizing common UI patterns and identifying friction points in existing detection tools to build a more intuitive real-time verification experience.</p>
                                        </div>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); setLightboxImage({ src: "/images/content-verify/scouting-ui.jpg", alt: "Scouting for UI interactions and Ideation" }); }}
                                            className="px-6 py-3 rounded-full bg-[#34BF4B] text-black text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-[#34BF4B]/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(52,191,75,0.3)] shrink-0"
                                        >
                                            View Full Board
                                        </button>
                                    </div>

                                    {/* Keep View Full Board button when expanded */}
                                    {focusedBox === 'image' && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setLightboxImage({ src: "/images/content-verify/scouting-ui.jpg", alt: "Scouting for UI interactions and Ideation" }); }}
                                            className="absolute bottom-6 right-6 px-6 py-3 rounded-full bg-[#34BF4B] text-black text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-[#34BF4B]/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(52,191,75,0.3)] shrink-0 z-10 animate-in fade-in duration-500"
                                        >
                                            Expand Image
                                        </button>
                                    )}
                                </div>

                                {/* Side Text Container (Only shown when focused) */}
                                {focusedBox === 'image' && (
                                    <div className="w-full lg:w-[40%] p-8 bg-black/50 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-700 relative">

                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2.5 rounded-full bg-[#34BF4B]/10 border border-[#34BF4B]/20">
                                                <Lightbulb className="w-5 h-5 text-[#34BF4B]" />
                                            </div>
                                            <h3 className="text-xl font-serif font-bold text-white">Scouting Insights</h3>
                                        </div>

                                        <ul className="space-y-6">
                                            <li className="flex gap-4 items-start group/item">
                                                <span className="text-[#34BF4B] mt-1 shrink-0 font-bold tracking-widest">01</span>
                                                <div>
                                                    <strong className="text-white font-sans text-sm block mb-1 uppercase tracking-wider">Grammarly</strong>
                                                    <span className="text-neutral-400 font-serif text-sm leading-relaxed block">Visual cues on the screen right corner for non-obstructive access. Clear categories for fixes.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4 items-start group/item">
                                                <span className="text-[#34BF4B] mt-1 shrink-0 font-bold tracking-widest">02</span>
                                                <div>
                                                    <strong className="text-white font-sans text-sm block mb-1 uppercase tracking-wider">Copyleaks</strong>
                                                    <span className="text-neutral-400 font-serif text-sm leading-relaxed block">Dig in for more analytics with numerical proof. Direct manipulation by clicking links inside.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4 items-start group/item">
                                                <span className="text-[#34BF4B] mt-1 shrink-0 font-bold tracking-widest">03</span>
                                                <div>
                                                    <strong className="text-white font-sans text-sm block mb-1 uppercase tracking-wider">Gamification</strong>
                                                    <span className="text-neutral-400 font-serif text-sm leading-relaxed block">Adding engaging scoring systems and highlighting disputed text to keep users active.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4 items-start group/item">
                                                <span className="text-[#34BF4B] mt-1 shrink-0 font-bold tracking-widest">04</span>
                                                <div>
                                                    <strong className="text-white font-sans text-sm block mb-1 uppercase tracking-wider">Intergrito</strong>
                                                    <span className="text-neutral-400 font-serif text-sm leading-relaxed block">Only shows one pop-up at a time. Compact tab design limiting screen overload.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>


                {/* Controversy Detection - Methodology Section 
                {summary && (
                    <section className="max-w-4xl mx-auto mb-20 px-4">
                        <div className="bg-neutral-50 dark:bg-neutral-900 overflow-hidden rounded-[2.5rem] border border-neutral-200 dark:border-neutral-800 shadow-sm relative group hover:shadow-xl transition-all duration-700">
                            <div className="absolute top-8 right-8 opacity-5">
                                <Zap className="w-32 h-32" />
                            </div>

                            <div className="p-8 md:p-14">
                                <div className="flex items-center gap-3 mb-10">
                                    <div className="w-10 h-10 rounded-full bg-black dark:bg-white flex items-center justify-center text-white dark:text-black">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-2xl font-sans font-bold uppercase tracking-widest">{summary.title}</h2>
                                </div>

                                <p className="text-xl font-serif text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed italic">
                                    "{summary.content?.[0]}"
                                </p>

                                {!showMethodology ? (
                                    <button
                                        onClick={() => setShowMethodology(true)}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black dark:bg-white text-white dark:text-black font-sans font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg group"
                                    >
                                        Dive into Methodology
                                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                ) : (
                                    <div className="animate-in fade-in slide-in-from-top-4 duration-700">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 mb-12">
                                            {Array.isArray(summary.content) && summary.content.filter((l: string) => l.startsWith("-")).map((line: string, i: number) => {
                                                const [term, def] = line.substring(1).split(":").map((s: string) => s.trim());
                                                return (
                                                    <div key={term} className="group/item">
                                                        <div className="flex items-center gap-3 mb-2">
                                                            <span className="w-2 h-2 rounded-full bg-[#34BF4B]" />
                                                            <h3 className="font-sans font-bold uppercase tracking-wider text-sm">{term}</h3>
                                                        </div>
                                                        <p className="font-serif text-neutral-600 dark:text-neutral-400 leading-relaxed pl-5 border-l border-neutral-200 dark:border-neutral-800 group-hover/item:border-[#34BF4B] transition-colors">{def}</p>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="pt-10 border-t border-neutral-200 dark:border-neutral-800">
                                            <div className="flex items-start gap-4">
                                                <Info className="w-5 h-5 text-neutral-400 mt-1 shrink-0" />
                                                <p className="font-serif text-sm text-neutral-500 italic leading-relaxed">
                                                    {summary.content?.[summary.content.length - 1]}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => setShowMethodology(false)}
                                            className="mt-10 px-6 py-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs font-sans font-bold uppercase tracking-widest text-neutral-500 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white transition-all"
                                        >
                                            Collapse Methodology
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                )}
                */}

                {/* UX Discovery & Audit - Bento Layout */}
                <section
                    className="max-w-6xl mx-auto mb-24 px-4 pt-12 relative"
                    onClick={() => focusedBox && setFocusedBox(null)}
                >
                    <div className="flex flex-col gap-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                                <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white">Project Discovery</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                                UX Strategy & <span className="text-[#34BF4B]">Accessibility Audit</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                            {/* UX Audit Box */}
                            <div
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(focusedBox === 'ux-audit' ? null : 'ux-audit'); }}
                                className={`rounded-[2.5rem] bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500 cursor-pointer relative group/img 
                                    ${focusedBox === 'ux-audit' ? 'lg:col-span-12 scale-[1.02] z-20 ring-2 ring-blue-500/30 shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row' :
                                        (focusedBox === 'accessibility' ? 'lg:col-span-4 blur-md opacity-20 scale-[0.98] flex flex-col hidden lg:flex' : 'lg:col-span-8 hover:border-white/20 flex flex-col')
                                    }`}
                            >
                                {/* Image Container */}
                                <div className={`relative transition-all duration-500 ${focusedBox === 'ux-audit' ? 'w-full lg:w-[60%] aspect-[16/10]' : 'w-full aspect-[16/10]'}`}>
                                    <img
                                        src="/images/content-verify/ux-audit.png"
                                        alt="UX Audit"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    <div className={`absolute bottom-6 left-6 right-6 p-8 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col transition-all duration-500 ${focusedBox === 'ux-audit' ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2.5 rounded-full bg-[#34BF4B]/10 border border-[#34BF4B]/40 backdrop-blur-md">
                                                <Search className="w-5 h-5 text-[#34BF4B]" />
                                            </div>
                                            <span className="bg-slate-500/40 border border-[#34BF4B]/50 px-4 py-2 rounded-full text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#34BF4B] shadow-[0_0_15px_rgba(52,191,75,0.2)]">
                                                Heuristic Analysis
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Detailed UX Audit</h3>
                                        <p className="text-neutral-300 text-sm font-sans tracking-wide leading-relaxed">
                                            Mapping the cognitive load of existing verification workflows to identify critical drop-off points.
                                        </p>
                                    </div>

                                    {/* Expand Image Button */}
                                    {focusedBox === 'ux-audit' && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setLightboxImage({ src: "/images/content-verify/ux-audit.png", alt: "UX Audit" }); }}
                                            className="absolute bottom-6 right-6 px-6 py-3 rounded-full bg-blue-500 text-white text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-blue-600 transition-all hover:scale-105 shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0 z-10 animate-in fade-in duration-500"
                                        >
                                            Expand Image
                                        </button>
                                    )}
                                </div>

                                {/* Side Text Container */}
                                {focusedBox === 'ux-audit' && (
                                    <div className="w-full lg:w-[40%] p-8 bg-black/50 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-700 relative">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2.5 rounded-full bg-blue-500/10 border border-blue-500/20">
                                                <Search className="w-5 h-5 text-blue-400" />
                                            </div>
                                            <h3 className="text-xl font-serif font-bold text-white">Heuristic Insights</h3>
                                        </div>

                                        <ul className="space-y-4">
                                            <li className="flex gap-4 items-start group/item">
                                                <span className="text-blue-400 mt-1 shrink-0 font-bold tracking-widest">01</span>
                                                <div>
                                                    <strong className="text-white font-sans text-sm block mb-1 uppercase tracking-wider">Navigational Friction</strong>
                                                    <span className="text-neutral-400 font-serif text-sm leading-relaxed block">Unreadable 10px fonts, forced scrolling to find referenced content, and unclickable cursors create unnecessary effort.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4 items-start group/item">
                                                <span className="text-blue-400 mt-1 shrink-0 font-bold tracking-widest">02</span>
                                                <div>
                                                    <strong className="text-white font-sans text-sm block mb-1 uppercase tracking-wider">Confusing Visual Cues</strong>
                                                    <span className="text-neutral-400 font-serif text-sm leading-relaxed block">Conflicting color schemes—such as green elements justifying red highlights—leave users lost and confused.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4 items-start group/item">
                                                <span className="text-blue-400 mt-1 shrink-0 font-bold tracking-widest">03</span>
                                                <div>
                                                    <strong className="text-white font-sans text-sm block mb-1 uppercase tracking-wider">Overwhelming Analysis</strong>
                                                    <span className="text-neutral-400 font-serif text-sm leading-relaxed block">Explanations are wordy and modals overlap. Reasoning desperately needs structured formatting, like for/against bullet points.</span>
                                                </div>
                                            </li>
                                            <li className="flex gap-4 items-start group/item">
                                                <span className="text-blue-400 mt-1 shrink-0 font-bold tracking-widest">04</span>
                                                <div>
                                                    <strong className="text-white font-sans text-sm block mb-1 uppercase tracking-wider">Poor Contextualization</strong>
                                                    <span className="text-neutral-400 font-serif text-sm leading-relaxed block">Entire pages are heavily marked controversial over minor details, and previews fail to correlate specifically to the text.</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>

                            {/* Accessibility Box */}
                            <div
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(focusedBox === 'accessibility' ? null : 'accessibility'); }}
                                className={`rounded-[2.5rem] bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500 cursor-pointer relative group/img 
                                    ${focusedBox === 'accessibility' ? 'lg:col-span-8 scale-[1.02] z-20 ring-2 ring-[#34BF4B]/30 shadow-[0_40px_100px_rgba(0,0,0,0.6)] flex flex-col lg:flex-row' :
                                        (focusedBox === 'ux-audit' ? 'lg:col-span-4 blur-md overflow-hidden opacity-0 scale-[0.98] hidden lg:flex flex-col' : 'lg:col-span-4 hover:border-white/20 flex flex-col')
                                    }`}
                            >
                                {/* Image Container */}
                                <div className={`relative transition-all duration-500 flex flex-col ${focusedBox === 'accessibility' ? 'w-full lg:w-[60%] min-h-[400px]' : 'w-full h-full'}`}>
                                    <div className="flex-1 relative min-h-[300px]">
                                        <img
                                            src="/images/content-verify/accessibility.png"
                                            alt="Accessibility Standards"
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105 absolute inset-0"
                                        />
                                    </div>

                                    <div className={`p-8 bg-neutral-900 border-t border-white/5 transition-all duration-500 ${focusedBox === 'accessibility' ? 'hidden' : 'block'}`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-full bg-[#34BF4B]/10 border border-[#34BF4B]/20">
                                                <Layers className="w-4 h-4 text-[#34BF4B]" />
                                            </div>
                                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#34BF4B]">AA/AAA Compliance</span>
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-white mb-2">Accessibility Guardrails</h3>
                                        <p className="text-neutral-500 text-xs font-sans tracking-wide leading-relaxed">
                                            Ensuring high color contrast and semantic structure for screen readers.
                                        </p>
                                    </div>

                                    {/* Expand Image Button */}
                                    {focusedBox === 'accessibility' && (
                                        <>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                                            <button
                                                onClick={(e) => { e.stopPropagation(); setLightboxImage({ src: "/images/content-verify/accessibility.png", alt: "Accessibility Standards" }); }}
                                                className="absolute bottom-6 right-6 px-6 py-3 rounded-full bg-[#34BF4B] text-black text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-[#34BF4B]/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(52,191,75,0.3)] shrink-0 z-10 animate-in fade-in duration-500"
                                            >
                                                Expand Image
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* Side Text Container */}
                                {focusedBox === 'accessibility' && (
                                    <div className="w-full lg:w-[40%] p-8 bg-black/50 backdrop-blur-md border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-center animate-in fade-in slide-in-from-right-8 duration-700 relative">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="p-2.5 rounded-full bg-[#34BF4B]/10 border border-[#34BF4B]/20">
                                                <Layers className="w-5 h-5 text-[#34BF4B]" />
                                            </div>
                                            <h3 className="text-xl font-serif font-bold text-white">Accessibility Focus</h3>
                                        </div>

                                        <div className="bg-[#34BF4B]/5 border border-[#34BF4B]/10 rounded-2xl p-6 relative overflow-hidden group">
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#34BF4B]/10 blur-[40px] -z-10 group-hover:bg-[#34BF4B]/20 transition-colors" />
                                            <p className="text-neutral-300 font-serif text-lg leading-relaxed italic pr-4">
                                                "Accessibility color contrast analysis across different texts in the UI."
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Grid - Metrics on Secondary Research */}
                <section className="max-w-4xl mx-auto mb-24 px-4">
                    <div className="flex flex-col items-center mb-12 flex-center text-center">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#34BF4B] mb-4">Alert Fatigue Metrics</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">Metrics on Secondary Research</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stats.map((stat) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={stat.id} className="flex flex-col gap-3 p-6 bg-neutral-900/5 dark:bg-neutral-100/5 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-[#34BF4B]/40 hover:shadow-[0_4px_16px_rgba(52,191,75,0.15)] transition-all duration-300 min-h-[200px] group">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-sans font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">{stat.label}</span>
                                        <IconComponent className="w-5 h-5 text-[#34BF4B] drop-shadow-[0_0_8px_rgba(52,191,75,0.5)]" strokeWidth={2.5} />
                                    </div>
                                    <span className="text-5xl md:text-6xl font-bold font-serif text-neutral-900 dark:text-neutral-100 block">{stat.number}</span>
                                    <p className="text-sm font-sans text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">
                                        {stat.text}
                                    </p>
                                    <span className="text-xs font-sans text-neutral-400 uppercase tracking-wider">{stat.source}</span>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* UI & UX Qualitative Feedback Analysis */}
                <section className="max-w-4xl mx-auto mb-24 px-4">
                    <div className="flex flex-col items-center mb-12 flex-center text-center">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#34BF4B] mb-4">Feedback Analysis</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">UI & UX Qualitative Feedback Analysis</h2>
                    </div>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex flex-col gap-3 p-6 bg-neutral-900/5 dark:bg-neutral-100/5 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-[#34BF4B]/40 hover:shadow-[0_4px_16px_rgba(52,191,75,0.15)] transition-all duration-300">
                            <h3 className="text-lg font-bold font-serif text-white flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#34BF4B]" />
                                Autonomy over Labels
                            </h3>
                            <p className="text-sm font-sans text-neutral-400 leading-relaxed ml-5">
                                Users preferred optional "Perspective Diversity" over forced truth-labels to maintain their own judgment.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-6 bg-neutral-900/5 dark:bg-neutral-100/5 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-[#34BF4B]/40 hover:shadow-[0_4px_16px_rgba(52,191,75,0.15)] transition-all duration-300">
                            <h3 className="text-lg font-bold font-serif text-white flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#34BF4B]" />
                                Minimalist Efficiency
                            </h3>
                            <p className="text-sm font-sans text-neutral-400 leading-relaxed ml-5">
                                High-visibility highlights saved reading time, but required a tiny icon interface to avoid distraction.
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 p-6 bg-neutral-900/5 dark:bg-neutral-100/5 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-[#34BF4B]/40 hover:shadow-[0_4px_16px_rgba(52,191,75,0.15)] transition-all duration-300">
                            <h3 className="text-lg font-bold font-serif text-white flex items-center gap-3">
                                <span className="w-2 h-2 rounded-full bg-[#34BF4B]" />
                                Precision over Volume
                            </h3>
                            <p className="text-sm font-sans text-neutral-400 leading-relaxed ml-5">
                                To prevent "flagging fatigue," users demanded fewer, high-quality flags backed by specific evidence.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Feedback GIF Preview */}
                <section className="max-w-4xl mx-auto mb-24 px-4">
                    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-[0_25px_45px_rgba(0,0,0,0.45)]">
                        <img
                            src="/images/content-verify/ScreenRecording2026-02-21at11.00.52AM-ezgif.com-video-to-gif-converter.gif"
                            alt="Content Verify UX highlights animation"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </section>

                {/* Task Interpretation Table */}
                <section className="max-w-4xl mx-auto mb-24 px-4 relative">
                    {/* Floating Cursor Comment (Desktop only) */}
                    <div className="hidden lg:flex absolute top-20 right-0 lg:-mr-12 xl:-mr-24 items-start gap-1 z-10 max-w-[280px] transition-transform duration-500 hover:-translate-y-4 hover:scale-105 hover:rotate-2 cursor-pointer group/comment drop-shadow-2xl">
                        <MousePointer2 className="w-6 h-6 text-[#34BF4B] fill-[#34BF4B] drop-shadow-[0_0_8px_rgba(52,191,75,0.6)] shrink-0 z-20 transition-transform duration-500 group-hover/comment:-rotate-12" />
                        <div className="bg-black/60 border border-[#34BF4B]/30 backdrop-blur-md rounded-2xl rounded-tl-none p-5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] mt-4 -ml-2 group-hover/comment:border-[#34BF4B]/60 group-hover/comment:bg-black/80 transition-all duration-500">
                            <p className="text-sm font-sans text-neutral-300 leading-relaxed font-medium">
                                "This was done as part of the usability study to determine scores on interaction and further used to calculate statistical data."
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center mb-12 flex-center text-center">
                        <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-[#34BF4B] mb-4">Task Interpretation</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">Interacting with Content Verify</h2>
                        <p className="text-neutral-400 font-sans tracking-wide max-w-xl">This is how scores were determined based on how users interacted with Content Verify.</p>
                    </div>

                    <div className="bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-xl">
                        <table className="w-full text-left font-serif">
                            <thead className="bg-[#34BF4B]/5 border-b border-white/10">
                                <tr>
                                    <th className="py-5 px-8 font-sans font-bold uppercase tracking-widest text-xs text-[#34BF4B] w-20 hidden md:table-cell">Task</th>
                                    <th className="py-5 px-6 md:px-8 font-sans font-bold uppercase tracking-widest text-xs text-[#34BF4B] w-[35%]">Interaction</th>
                                    <th className="py-5 px-0 w-24"></th>
                                    <th className="py-5 px-6 md:px-8 font-sans font-bold uppercase tracking-widest text-xs text-[#34BF4B]">Explanation</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {Array.isArray(task?.content) && task?.content.filter((l: string) => /^\d\./.test(l)).map((line: string, i: number) => {
                                    const parts = line.replace(/^\d\.\s*/, '').split('->');
                                    const desc = parts[0]?.trim();
                                    const expl = parts[1]?.trim();

                                    return (
                                        <tr key={i} className="hover:bg-white/5 transition-colors group">
                                            <td className="py-6 px-8 font-bold text-neutral-500 group-hover:text-[#34BF4B] transition-colors align-middle hidden md:table-cell">0{i + 1}</td>
                                            <td className="py-6 px-6 md:px-8 leading-relaxed text-white font-medium align-middle">{desc}</td>
                                            <td className="py-6 px-0 align-middle">
                                                {expl && (
                                                    <div className="flex items-center w-full justify-center opacity-60 group-hover:opacity-100 transition-opacity">
                                                        <div className="w-16 md:w-20 border-t-[3px] border-dotted border-white group-hover:border-[#34BF4B] transition-colors" />
                                                        <ChevronRight className="w-5 h-5 text-white group-hover:text-[#34BF4B] transition-colors -ml-2" />
                                                    </div>
                                                )}
                                            </td>
                                            <td className="py-6 px-6 md:px-8 leading-relaxed text-neutral-400 group-hover:text-neutral-200 transition-colors align-middle">{expl}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Discovery Feedback - Sticky Note Style 
                <section className="max-w-4xl mx-auto mb-24 p-8 md:p-12 bg-[#fffdf5] dark:bg-[#1a1a1a] shadow-sm border border-neutral-200 dark:border-neutral-800 transform -rotate-1 mx-4">
                    <h2 className="font-sans font-bold uppercase tracking-widest mb-8 text-neutral-400">UI Interaction Synthesis</h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif text-lg leading-relaxed text-neutral-800 dark:text-neutral-200">
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">•</span>
                            <span><strong>Grammarly:</strong> Floating visual cues natively embedded and non-obstructive popups with clear, categorized suggestions.</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">•</span>
                            <span><strong>Copyleaks:</strong> Direct manipulation interactions (clicking for drill-downs) paired with hard numerical stats to build transparency.</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">•</span>
                            <span><strong>Gamification:</strong> Inline text highlights and credibility scoring that make passive assessment an engaging experience.</span>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-red-500 font-bold">•</span>
                            <span><strong>Intergrito:</strong> Limiting overload by ensuring only one contextual drill-down popup appears at a time, anchored to a primary stat.</span>
                        </li>
                    </ul>
                </section>
                */}

                {/* Comparison of UX Enhancements */}
                <section className="max-w-5xl mx-auto mb-24 px-4">
                    <h3 className="font-sans font-bold uppercase tracking-widest mb-8 border-b border-neutral-200 dark:border-neutral-800 pb-4 text-neutral-400">Comparison of User Experience (UX) Enhancements</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-neutral-200 dark:border-neutral-800">
                                    <th className="py-4 font-serif font-bold text-lg text-white">Metric</th>
                                    <th className="py-4 font-serif font-bold text-lg text-white">Baseline (Without Tool)</th>
                                    <th className="py-4 font-serif font-bold text-lg text-[#34BF4B]">With Content Verify</th>
                                </tr>
                            </thead>
                            <tbody className="font-sans text-sm divide-y divide-neutral-200 dark:divide-neutral-800">
                                <tr>
                                    <td className="py-6 font-bold uppercase tracking-wide text-neutral-500">Information Literacy</td>
                                    <td className="py-6 pr-4 text-neutral-400">Users struggled to identify controversies in long articles.</td>
                                    <td className="py-6 text-white font-serif italic text-base">Significantly facilitated recognition and saved time.</td>
                                </tr>
                                <tr>
                                    <td className="py-6 font-bold uppercase tracking-wide text-neutral-500">Cognitive Load</td>
                                    <td className="py-6 pr-4 text-neutral-400">High effort required to evaluate complex topics.</td>
                                    <td className="py-6 text-white font-serif italic text-base">Reduced cognitive load through on-demand hover interactions.</td>
                                </tr>
                                <tr>
                                    <td className="py-6 font-bold uppercase tracking-wide text-neutral-500">User Autonomy</td>
                                    <td className="py-6 pr-4 text-neutral-400">Vulnerable to siloed thinking and manipulation.</td>
                                    <td className="py-6 text-white font-serif italic text-base">Preserved autonomy by offering "Perspective Diversity" rather than binary truth labels.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Summary for Portfolio */}
                <section className="max-w-4xl mx-auto mb-16 px-4">
                    <div className="p-8 md:p-12 bg-neutral-900 rounded-[2.5rem] border border-[#34BF4B]/20 shadow-[0_0_30px_rgba(52,191,75,0.05)] text-center relative overflow-hidden group hover:border-[#34BF4B]/50 hover:shadow-[0_0_50px_rgba(52,191,75,0.1)] transition-all">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#34BF4B]/10 blur-[50px] -z-10 group-hover:bg-[#34BF4B]/20 transition-colors" />
                        <h3 className="font-sans text-[10px] font-bold uppercase tracking-[0.3em] mb-6 text-[#34BF4B]">Summary for Portfolio</h3>
                        <p className="font-serif text-xl md:text-2xl leading-relaxed italic text-neutral-200">
                            "Content Verify transforms passive readers into critical thinkers. By achieving a 50% shift in user perspective and a statistically significant increase in bias recognition, the system proves that AI-driven interventions can reduce susceptibility to misinformation while maintaining a seamless, non-disruptive reading experience."
                        </p>
                    </div>
                </section>

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
