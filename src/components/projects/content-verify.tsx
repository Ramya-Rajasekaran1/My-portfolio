import React from "react";
import { type Project } from "@/lib/data";
import { ArrowLeft, AlertTriangle, Eye, BarChart3, Info, MousePointer2, ChevronRight, Target, Sparkles, Layers, ShieldCheck, History, Zap, Search, Lightbulb } from "lucide-react";
import Link from "next/link";
import { ImageLightbox } from "@/components/ui/image-lightbox";

export function ContentVerifyProject({ project }: { project: Project }) {
    const [lightboxImage, setLightboxImage] = React.useState<{ src: string; alt: string } | null>(null);
    const [selectedPainPoint, setSelectedPainPoint] = React.useState<string | null>('fatigue');
    const [showDesignLogic, setShowDesignLogic] = React.useState(true);
    const [showCategories, setShowCategories] = React.useState(false);
    const [focusedBox, setFocusedBox] = React.useState<string | null>(null);
    const [showMethodology, setShowMethodology] = React.useState(false);

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
                <div className="w-full aspect-video relative rounded-none md:rounded-lg overflow-hidden mb-12 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                    />
                </div>

                {/* Introduction / Objective */}
                <section className="max-w-4xl mx-auto mb-16 bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-800">
                    <div className="mb-10 flex items-center gap-4">
                        <span className="h-px w-8 bg-[#39FF14]"></span>
                        <h2 className="text-sm font-sans font-bold uppercase tracking-widest text-[#39FF14]">The Objective</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-8">
                            <div className="prose prose-xl prose-invert font-serif leading-relaxed">
                                <ul className="space-y-6 list-none p-0 m-0">
                                    {Array.isArray(objective?.content) && objective.content.map((bullet: string, i: number) => (
                                        <li key={i} className="flex gap-4 text-white antialiased">
                                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#39FF14] mt-3" />
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
                                    className="px-6 py-8 border-2 border-dashed border-neutral-700 rounded-xl bg-white/5 backdrop-blur-sm text-neutral-500 font-sans font-bold uppercase tracking-widest hover:border-[#39FF14] hover:text-[#39FF14] transition-all duration-300 group"
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
                                        className="px-6 py-4 border border-[#39FF14]/30 rounded-xl bg-[#39FF14]/5 backdrop-blur-sm shadow-sm hover:border-[#39FF14]/60 hover:bg-[#39FF14]/10 transition-all duration-500 group cursor-pointer animate-in zoom-in-95 fade-in duration-500"
                                        style={{ animationDelay: `${i * 100}ms` }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#39FF14]">{chip}</span>
                                            <Zap className="w-3 h-3 text-[#39FF14] opacity-40 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </section>

                {/* Stats Grid */}
                <section className="max-w-4xl mx-auto mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stats.map((stat) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={stat.id} className="flex flex-col gap-3 p-6 bg-neutral-900/5 dark:bg-neutral-100/5 backdrop-blur-sm border border-neutral-200 dark:border-neutral-800 rounded-lg hover:border-[#39FF14]/40 hover:shadow-[0_4px_16px_rgba(57,255,20,0.15)] transition-all duration-300 min-h-[200px] group">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-sans font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">{stat.label}</span>
                                        <IconComponent className="w-5 h-5 text-[#39FF14] drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]" strokeWidth={2.5} />
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
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4">The Logic of Intervention</h2>
                        <div className="flex items-center gap-2 text-[#39FF14] bg-[#39FF14]/5 px-4 py-1.5 rounded-full border border-[#39FF14]/20 animate-pulse">
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
                                        ? 'bg-neutral-900 border-[#39FF14] text-white shadow-[0_0_20px_rgba(57,255,20,0.1)]'
                                        : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white hover:border-neutral-400 dark:hover:border-neutral-600'
                                        }`}
                                >
                                    <span className={`text-xs font-sans font-bold uppercase tracking-widest relative z-10 block transition-colors ${selectedPainPoint === point.id ? 'text-[#39FF14]' : 'text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white'}`}>
                                        {point.title}
                                    </span>
                                    {selectedPainPoint === point.id && (
                                        <ChevronRight className="w-4 h-4 text-[#39FF14] animate-in slide-in-from-left-2" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Middle: Connection line */}
                        <div className="hidden lg:flex items-center justify-center lg:col-span-1 py-12">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="overflow-visible">
                                <path d="M0 20H38" stroke="#39FF14" strokeWidth="2" strokeDasharray="4 4" className="animate-[dash_2s_linear_infinite]" />
                                <path d="M32 14L38 20L32 26" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>

                        {/* Right: Flow Content */}
                        <div className="lg:col-span-8 relative min-h-[400px]">
                            {selectedPainPoint ? (
                                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 animate-in fade-in slide-in-from-left-8 duration-700">

                                    {/* Step 1: Root Cause */}
                                    <div
                                        onClick={() => setShowDesignLogic(!showDesignLogic)}
                                        className={`flex-1 w-full p-8 rounded-2xl border transition-all duration-500 cursor-pointer group relative ${showDesignLogic ? 'bg-neutral-900 border-[#39FF14]/50 scale-[1.02]' : 'bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 hover:shadow-xl'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-[10px] font-bold font-sans">01</div>
                                            <span className={`text-[10px] font-sans font-bold uppercase tracking-[0.2em] ${showDesignLogic ? 'text-[#39FF14]' : 'text-neutral-400'}`}>The Root Cause</span>
                                        </div>
                                        <p className={`text-lg md:text-xl font-serif italic leading-relaxed transition-colors ${showDesignLogic ? 'text-white' : 'text-neutral-800 dark:text-neutral-200'}`}>
                                            "{interactivePainPoints.find(p => p.id === selectedPainPoint)?.rootCause}"
                                        </p>
                                        {/* Row removed arrow */}
                                    </div>

                                    {/* SVG Connector for Desktop */}
                                    <div className={`hidden lg:block transition-all duration-700 shrink-0 ${showDesignLogic ? 'opacity-100 scale-100' : 'opacity-20 scale-95'}`}>
                                        <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="overflow-visible">
                                            <path d="M0 12H58" stroke="#39FF14" strokeWidth="2" strokeDasharray="4 4" className={showDesignLogic ? "animate-[dash_2s_linear_infinite]" : ""} />
                                            <path d="M52 6L58 12L52 18" stroke="#39FF14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>

                                    {/* Step 2: Design Direction - Placeholder State */}
                                    <div
                                        className={`flex-1 w-full p-10 rounded-2xl transition-all duration-700 relative overflow-hidden ${showDesignLogic
                                            ? 'bg-neutral-900 border-[#39FF14] shadow-[0_20px_60px_rgba(57,255,20,0.15)] opacity-100'
                                            : 'bg-neutral-100 dark:bg-neutral-900/40 border-dashed border-neutral-300 dark:border-neutral-800 opacity-60 scale-[0.98]'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3 mb-8">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold font-sans transition-colors ${showDesignLogic ? 'bg-[#39FF14]/10 text-[#39FF14]' : 'bg-neutral-200 dark:bg-neutral-800 text-neutral-400'}`}>02</div>
                                            <span className={`text-[10px] font-sans font-bold uppercase tracking-[0.3em] transition-colors ${showDesignLogic ? 'text-[#39FF14]' : 'text-neutral-500'}`}>Design Direction</span>
                                        </div>

                                        {showDesignLogic ? (
                                            <div className="animate-in fade-in slide-in-from-left-4 duration-500">
                                                <p className="text-xl md:text-2xl font-serif text-white antialiased leading-relaxed mb-8">
                                                    {interactivePainPoints.find(p => p.id === selectedPainPoint)?.designLogic}
                                                </p>
                                                <div className="inline-block px-4 py-1.5 rounded-full border border-[#39FF14]/30 text-[#39FF14] text-[10px] font-sans font-bold uppercase tracking-widest bg-[#39FF14]/5">
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
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#39FF14]/10 blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] -z-10" />

                    <div className="p-12 md:p-20 text-center relative">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-10 backdrop-blur-md">
                            <Target className="w-4 h-4 text-[#39FF14]" />
                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white">The North Star</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                            "A seamless, non-intrusive assistant that surfaces <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-blue-400">alternative perspectives</span> without disrupting reading flow."
                        </h2>

                        <div className="flex justify-center gap-8 mt-4">
                            <div className="flex flex-col items-center gap-2">
                                <Sparkles className="w-5 h-5 text-[#39FF14]/60" />
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
                                <div className="aspect-video relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 grayscale group-hover:grayscale-0 transition-all duration-700">
                                    <img src="/images/content-verify/wiki-criteria.png" alt="Wikipedia Logic" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-red-500/5" />
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
                                            <p className="text-sm font-serif text-neutral-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Content Verify Tool */}
                        <div className="flex flex-col bg-neutral-900 rounded-3xl border border-[#39FF14]/30 overflow-hidden shadow-[0_0_50px_rgba(57,255,20,0.05)] group">
                            <div className="p-8 border-b border-white/10 bg-white/5">
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold font-serif text-white">Content Verify</h3>
                                    <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-[10px] font-bold uppercase tracking-widest border border-[#39FF14]/20">New UX</span>
                                </div>
                                <div className="aspect-video relative rounded-xl overflow-hidden border border-white/10 group-hover:border-[#39FF14]/50 transition-colors duration-700">
                                    <img src="/images/content-verify/wiki-timeline.png" alt="Content Verify Logic" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            </div>
                            <div className="p-8 space-y-6 flex-1 shadow-[inset_0_0_100px_rgba(57,255,20,0.02)]">
                                {[
                                    { title: "Ambient Data", desc: "'Dwell-and-Reveal' pop-ups directly in the flow.", icon: Zap },
                                    { title: "Nuanced Tiers", desc: "Low, Medium, and High-risk flags with context.", icon: ShieldCheck },
                                    { title: "Progressive Disclosure", desc: "Subtle highlights + unobtrusive Top Bar.", icon: Layers },
                                    { title: "AI-Powered \"Gist\"", desc: "Instant summaries of supporting vs. opposing views.", icon: Sparkles }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1"><item.icon className="w-4 h-4 text-[#39FF14]" /></div>
                                        <div>
                                            <h4 className="text-sm font-sans font-bold uppercase tracking-wide mb-1 text-white">{item.title}</h4>
                                            <p className="text-sm font-serif text-neutral-400">{item.desc}</p>
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
                                <Search className="w-3.5 h-3.5 text-[#39FF14]" />
                                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-white">Secondary Research</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-8">
                                Uncovering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#39FF14] to-emerald-400">Invisible Layers</span> of Digital Information
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-stretch">
                            {/* Insight Box 1 */}
                            <div
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(focusedBox === 'insight1' ? null : 'insight1'); }}
                                className={`lg:col-span-6 p-8 rounded-[2rem] bg-neutral-900 border border-white/10 transition-all duration-500 cursor-pointer group flex flex-col justify-center gap-6 relative overflow-hidden ${focusedBox === 'insight1' ? 'scale-105 z-20 ring-2 ring-[#39FF14]/50 shadow-[0_0_50px_rgba(57,255,20,0.2)]' :
                                    (focusedBox ? 'blur-md opacity-20 scale-95' : 'hover:border-[#39FF14]/30 hover:bg-neutral-800/50')
                                    }`}
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#39FF14]/5 blur-[60px] -z-10" />
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-2xl bg-[#39FF14]/10 border border-[#39FF14]/20">
                                        <AlertTriangle className="w-6 h-6 text-[#39FF14]" />
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
                                className={`lg:col-span-12 rounded-[3rem] bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500 cursor-pointer relative group/img ${focusedBox === 'image' ? 'scale-[1.02] z-20 ring-2 ring-[#39FF14]/30 shadow-[0_40px_100px_rgba(0,0,0,0.6)]' :
                                    (focusedBox ? 'blur-md opacity-20 scale-[0.98]' : 'hover:border-white/20')
                                    }`}
                            >
                                <div className="relative aspect-[16/9] md:aspect-[21/9]">
                                    <img
                                        src="/images/content-verify/scouting-ui.jpg"
                                        alt="Scouting for UI interactions and Ideation"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                    <div className="absolute bottom-6 left-6 right-6 p-8 rounded-[2rem] bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col md:flex-row md:items-end justify-between gap-6 animate-in slide-in-from-bottom-4 duration-1000">
                                        <div className="max-w-xl">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2.5 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20">
                                                    <Lightbulb className="w-5 h-5 text-[#39FF14]" />
                                                </div>
                                                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#39FF14]">Ideation Board</span>
                                            </div>
                                            <h3 className="text-2xl font-serif font-bold text-white mb-2">Scouting for UI interactions & Ideation</h3>
                                            <p className="text-neutral-300 text-sm font-sans tracking-wide leading-relaxed">Synthesizing common UI patterns and identifying friction points in existing detection tools to build a more intuitive real-time verification experience.</p>
                                        </div>

                                        <button
                                            onClick={(e) => { e.stopPropagation(); setLightboxImage({ src: "/images/content-verify/scouting-ui.jpg", alt: "Scouting for UI interactions and Ideation" }); }}
                                            className="px-6 py-3 rounded-full bg-[#39FF14] text-black text-[10px] font-sans font-bold uppercase tracking-widest hover:bg-[#39FF14]/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(57,255,20,0.3)] shrink-0"
                                        >
                                            View Full Board
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Controversy Detection - Methodology Section */}
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
                                                            <span className="w-2 h-2 rounded-full bg-[#39FF14]" />
                                                            <h3 className="font-sans font-bold uppercase tracking-wider text-sm">{term}</h3>
                                                        </div>
                                                        <p className="font-serif text-neutral-600 dark:text-neutral-400 leading-relaxed pl-5 border-l border-neutral-200 dark:border-neutral-800 group-hover/item:border-[#39FF14] transition-colors">{def}</p>
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
                                UX Strategy & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Accessibility Audit</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
                            {/* UX Audit Box */}
                            <div
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(focusedBox === 'ux-audit' ? null : 'ux-audit'); }}
                                className={`lg:col-span-8 rounded-[2.5rem] bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500 cursor-pointer relative group/img ${focusedBox === 'ux-audit' ? 'scale-[1.02] z-20 ring-2 ring-blue-500/30 shadow-[0_40px_100px_rgba(0,0,0,0.6)]' :
                                    (focusedBox ? 'blur-md opacity-20 scale-[0.98]' : 'hover:border-white/20')
                                    }`}
                            >
                                <div className="relative aspect-[16/10]">
                                    <img
                                        src="/images/content-verify/ux-audit.png"
                                        alt="UX Audit"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    <div className="absolute bottom-10 left-10 right-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
                                                <Search className="w-4 h-4 text-blue-400" />
                                            </div>
                                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-blue-400">Heuristic Evaluation</span>
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-white mb-2">Detailed UX Audit</h3>
                                        <p className="text-neutral-400 text-sm font-sans tracking-wide leading-relaxed max-w-xl">
                                            Mapping the cognitive load of existing verification workflows to identify critical drop-off points.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Accessibility Box */}
                            <div
                                onClick={(e) => { e.stopPropagation(); setFocusedBox(focusedBox === 'accessibility' ? null : 'accessibility'); }}
                                className={`lg:col-span-4 rounded-[2.5rem] bg-neutral-900 border border-white/10 overflow-hidden transition-all duration-500 cursor-pointer relative group/img ${focusedBox === 'accessibility' ? 'scale-[1.02] z-20 ring-2 ring-[#39FF14]/30 shadow-[0_40px_100px_rgba(0,0,0,0.6)]' :
                                    (focusedBox ? 'blur-md opacity-20 scale-[0.98]' : 'hover:border-white/20')
                                    }`}
                            >
                                <div className="relative h-full flex flex-col">
                                    <div className="flex-1 min-h-[300px]">
                                        <img
                                            src="/images/content-verify/accessibility.png"
                                            alt="Accessibility Standards"
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover/img:scale-105"
                                        />
                                    </div>
                                    <div className="p-8 bg-neutral-900 border-t border-white/5">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20">
                                                <Layers className="w-4 h-4 text-[#39FF14]" />
                                            </div>
                                            <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#39FF14]">AA/AAA Compliance</span>
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-white mb-2">Accessibility Guardrails</h3>
                                        <p className="text-neutral-500 text-xs font-sans tracking-wide leading-relaxed">
                                            Ensuring high color contrast and semantic structure for screen readers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Task Interpretation + Persona - Two Columns */}
                <section className="max-w-5xl mx-auto mb-24 grid grid-cols-1 md:grid-cols-2 gap-16 px-4">
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
                    <section className="max-w-4xl mx-auto mb-32 p-8 md:p-12 bg-[#fffdf5] dark:bg-[#1a1a1a] shadow-sm border border-neutral-200 dark:border-neutral-800 transform -rotate-1 mx-4">
                        <h2 className="font-sans font-bold uppercase tracking-widest mb-8 text-neutral-400">Discovery Feedback</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {Array.isArray(feedback.content) && feedback.content.filter((l: string) => l.startsWith("-")).map((line: string, i: number) => (
                                <div key={i} className="font-serif text-lg leading-relaxed italic">
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
