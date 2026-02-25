import React, { useState, useEffect, useRef } from "react";
import { type Project } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Sparkles, Zap, Layers, ShieldCheck, BarChart3, Target, Lightbulb, MousePointer2 } from "lucide-react";

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
                const textClass = "text-neutral-100";

                const cleanLine = trimmed.replace(/^\* /, "").replace(/^\- /, "").replace(/^\> /, "");
                const isBullet = trimmed.startsWith("-") || trimmed.startsWith("*");
                const isQuote = trimmed.startsWith(">");

                if (isBullet) {
                    return (
                        <div key={index} className="flex gap-4 items-start group">
                            <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-[#7effa0] shadow-[0_0_8px_rgba(126,255,160,0.4)] transition-transform group-hover:scale-125" />
                            <p className={`text-lg leading-relaxed ${textClass}`}>{cleanLine.split(/(\[\[[^\]]+\]\])/g).map((part, i) => {
                                if (part.startsWith("[[") && part.endsWith("]]")) {
                                    return <strong key={i} className="text-[#7effa0] font-bold">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                            })}</p>
                        </div>
                    );
                }

                if (isQuote) {
                    return (
                        <blockquote key={index} className={`border-l-4 border-[#7effa0] pl-6 py-2 my-6 italic text-xl ${textClass} bg-[#7effa0]/5 rounded-r-lg`}>
                            {cleanLine}
                        </blockquote>
                    );
                }

                const parts = cleanLine.split(/(\[\[[^\]]+\]\]|\d+\.?\d*%|\d+s|\d+\.?\d*\smin)/g);
                return (
                    <p key={index} className={`text-lg leading-relaxed ${textClass}`}>
                        {parts.map((part, i) => {
                            if (part.startsWith("[[") && part.endsWith("]]")) {
                                return <strong key={i} className="text-[#7effa0] font-bold">{part.slice(2, -2)}</strong>;
                            }
                            // Auto-tag percentages or time metrics
                            if (/^\d+\.?\d*%$/.test(part) || /^\d+s$/.test(part) || /^\d+\.?\d*\smin$/.test(part)) {
                                return <span key={i} className="px-2 py-0.5 mx-1 inline-flex items-center rounded-md bg-[#7effa0]/20 border border-[#7effa0]/40 text-[#7effa0] text-[0.9em] font-mono font-black shadow-[0_0_10px_rgba(126,255,160,0.2)]">{part}</span>;
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
                        <blockquote key={index} className="border-l-4 border-[#7effa0] pl-6 py-3 my-6 italic text-xl text-neutral-100 bg-[#7effa0]/5 rounded-r-lg">
                            {cleanItem}
                        </blockquote>
                    );
                }

                const parts = cleanItem.split(/(\[\[[^\]]+\]\]|\d+\.?\d*%|\d+s|\d+\.?\d*\smin)/g);
                return (
                    <div key={index} className="flex gap-4 items-start">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2.5 bg-[#7effa0]" />
                        <p className="text-lg leading-relaxed text-neutral-100">
                            {parts.map((part, i) => {
                                if (part.startsWith("[[") && part.endsWith("]]")) {
                                    return <strong key={i} className="text-[#7effa0] font-bold">{part.slice(2, -2)}</strong>;
                                }
                                if (/^\d+\.?\d*%$/.test(part) || /^\d+s$/.test(part) || /^\d+\.?\d*\smin$/.test(part)) {
                                    return <span key={i} className="px-2 py-0.5 mx-1 inline-flex items-center rounded-md bg-[#7effa0]/20 border border-[#7effa0]/40 text-[#7effa0] text-[0.9em] font-mono font-black shadow-[0_0_10px_rgba(126,255,160,0.2)]">{part}</span>;
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

export function GenAiInclusivityProject({ project }: { project: Project }) {
    const [activeTask, setActiveTask] = useState('t1');
    const [activePlatform, setActivePlatform] = useState('chatgpt');
    const [selectedFinding, setSelectedFinding] = useState<number>(0);
    const [activeBlueprintRow, setActiveBlueprintRow] = useState<number | null>(null);
    const [hoveredBlueprintRow, setHoveredBlueprintRow] = useState<number | null>(null);
    const [isBehindScenesOpen, setIsBehindScenesOpen] = useState(false);
    const [activeComparisonTab, setActiveComparisonTab] = useState<'chatgpt' | 'gemini' | 'copilot'>('chatgpt');
    const matrixRef = useRef<HTMLDivElement>(null);
    const [showMatrixTags, setShowMatrixTags] = useState(false);

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

    const methodologyTitles = [
        "1. COMPARATIVE UX & ACCESSIBILITY AUDIT",
        "2. TASK-BASED PERFORMANCE STUDY",
        "3. LITERATURE & STANDARDS REVIEW",
        "4. FRAMEWORK SYNTHESIS"
    ];
    const methodology = methodologyTitles.map((title) => getSection(title)).filter(Boolean) as any[];

    const excludedTitles = [
        ...methodologyTitles,
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
        <main className="min-h-screen bg-[#080808] text-neutral-100 font-sans selection:bg-[#7effa0]/30">
            <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@300;400;500&family=Syne:wght@400;700;800&display=swap');
                
                header[class*="fixed"] {
                    display: none !important;
                }
                nav[class*="fixed"]:not([class*="z-50"]) {
                    display: none !important;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .galaxy-float {
                    animation: float 4s ease-in-out infinite;
                }
                
                /* Noise overlay */
                body::before {
                    content: '';
                    position: fixed;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E");
                    pointer-events: none;
                    z-index: 0;
                    opacity: 0.15;
                }

                /* Accessibility Widget Overrides */
                button.fixed.left-8.bottom-8 {
                    background-color: #7effa0 !important;
                    border-color: rgba(126, 255, 160, 0.3) !important;
                    color: #000 !important;
                }
                
                /* Selection color */
                ::selection {
                    background: rgba(126, 255, 160, 0.3) !important;
                }
                
                /* Custom Scrollbar for Mac Window */
                .mac-scrollbar::-webkit-scrollbar {
                    width: 12px;
                }
                .mac-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .mac-scrollbar::-webkit-scrollbar-thumb {
                    background: #3f3f4e;
                    border-radius: 6px;
                    border: 3px solid #0A0A0E;
                }
                .mac-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #6b6b85;
                }
            `}</style>

            <nav className="fixed inset-x-0 top-0 z-50 bg-[#080808]/90 backdrop-blur border-b border-neutral-900">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-sm font-sans font-medium text-neutral-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Work
                    </Link>
                    <span className="text-sm font-sans font-bold uppercase tracking-wider text-neutral-500">
                        Gen AI Inclusivity Case Study
                    </span>
                </div>
            </nav>

            <header className="relative min-h-[50vh] flex items-center overflow-hidden border-b border-neutral-900 bg-[#080810]">
                {/* Background Image Artifact Aligned Right */}
                <div
                    className="absolute inset-y-0 right-0 w-full md:w-3/4 opacity-60 md:opacity-100 bg-contain bg-right md:bg-right bg-no-repeat pointer-events-none"
                    style={{ backgroundImage: "url('/images/gen-ai/ai_cube_green.png')" }}
                />

                {/* Left Aligned Content */}
                <div className="container mx-auto px-4 relative z-10 py-20">
                    <div className="max-w-2xl text-left space-y-6">
                        <span className="inline-flex items-center gap-3 px-3 py-1 text-[0.6rem] font-mono font-bold uppercase tracking-[0.4em] border border-[#7effa0]/30 rounded-full text-[#7effa0] bg-[#7effa0]/5 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7effa0] animate-pulse" />
                            {project.category}
                        </span>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-['DM_Serif_Display'] leading-[1.1] text-white">
                            {project.title.split(' ').map((word, i) => (
                                <span key={i} className={i > 4 ? "text-[#7effa0] italic" : ""}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>

                        <p className="text-lg md:text-xl font-sans font-light leading-relaxed text-neutral-400 max-w-xl">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
            </header>

            <article className="container mx-auto px-4 py-10 space-y-16">
                {/* Custom Executive Snapshot */}
                <section className="space-y-8">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-[#7effa0]/50" />
                        <h2 className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.4em] text-[#7effa0] animate-pulse">Executive Snapshot</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
                        <div className="md:col-span-7 space-y-6">
                            <p className="text-xl md:text-2xl font-['DM_Serif_Display'] font-light leading-relaxed text-neutral-100">
                                Generative AI is rapidly becoming the <strong className="font-semibold text-white">primary interface to information, creation, and decision-making</strong>. Yet as these systems grow more powerful, their accessibility and usability lag behind—quietly excluding millions of users.
                            </p>
                            <div className="flex flex-wrap gap-3 pt-2">
                                {["Accessibility Research", "Comparative UX Audits", "Task-Performance Data"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1.5 rounded-full border border-neutral-800 text-[#7effa0] text-[0.55rem] font-mono font-bold uppercase tracking-[0.2em] bg-neutral-900/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-lg font-sans text-neutral-400">
                                Comprehensive investigation of leading Gen AI tools to answer one core question:
                            </p>
                        </div>

                        <div className="md:col-span-5 flex items-center">
                            <div className="bg-neutral-900/40 border border-neutral-800/60 p-8 rounded-2xl shadow-xl w-full">
                                <blockquote className="border-l-2 border-[#7effa0] pl-6 py-2">
                                    <p className="text-xl md:text-2xl font-['DM_Serif_Display'] italic font-light text-white leading-snug">
                                        "Can Generative AI truly be universal if it is not reliably usable by everyone?"
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interactive Research Metrics Dashboard */}
                <section className="space-y-12 py-16 border-y border-neutral-800/50 w-full">
                    <header className="w-full flex flex-col items-center text-center space-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-8 h-px bg-neutral-600" />
                            <span className="text-[0.65rem] font-mono uppercase tracking-[0.25em] text-neutral-500">UX Research · Comparative Study</span>
                            <span className="w-8 h-px bg-neutral-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-['DM_Serif_Display'] italic text-white leading-tight">
                            AI Assistant <br className="hidden md:block" />
                            <span className="text-[#7effa0]">Usability</span> Metrics
                        </h2>
                        <div className="flex flex-wrap justify-center gap-6 text-[0.72rem] font-mono text-neutral-500 uppercase tracking-wider">
                            <span>📊 N = 76 participants</span>
                            <span>🔬 2 tasks evaluated</span>
                            <span>🤖 3 platforms compared</span>
                        </div>

                        <div className="flex flex-wrap justify-center gap-8 pt-4 font-mono text-[0.7rem] uppercase tracking-widest text-[#7effa0]">
                            <div className="flex items-center gap-2">CHATGPT</div>
                            <span className="text-neutral-700">•</span>
                            <div className="flex items-center gap-2">COPILOT</div>
                            <span className="text-neutral-700">•</span>
                            <div className="flex items-center gap-2">GEMINI</div>
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
                            <div className="text-[0.6rem] font-mono text-neutral-500 uppercase tracking-widest">
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
                                    const dotColor = platform === 'chatgpt' ? '#7effa0' : platform === 'copilot' ? '#7eb8ff' : '#ffb87e';

                                    return (
                                        <button
                                            key={platform}
                                            onClick={() => setActivePlatform(platform)}
                                            className={`flex-1 md:flex-none text-left px-6 py-5 transition-all flex items-center gap-4 cursor-pointer hover:shadow-[0_4px_16px_rgba(0,0,0,0.5)] ${isActive ? 'bg-[#13131A] md:bg-neutral-900/40 border-b-2 md:border-b-0 md:border-r-2 border-[#7effa0]' : 'hover:bg-[#13131A]/50 text-neutral-500 hover:-translate-y-px md:hover:-translate-y-0 md:hover:translate-x-1'}`}
                                        >
                                            <div className={`w-2 h-2 rounded-full ${isActive ? 'animate-pulse' : ''}`} style={{ background: dotColor }} />
                                            <span className={`text-[0.65rem] font-mono uppercase tracking-widest ${isActive ? 'text-white font-bold' : ''}`}>
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
                                        className={`px-5 py-2.5 rounded-lg text-[0.65rem] font-mono uppercase tracking-widest shadow-sm transition-all cursor-pointer flex-1 md:flex-none text-center ${activeTask === 't1' ? 'bg-[#1A1C23] border border-[#7effa0] text-[#7effa0] shadow-[0_4px_12px_rgba(126,255,160,0.15)] scale-[1.02]' : 'bg-neutral-900/40 border border-neutral-800 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 hover:shadow-md'}`}
                                    >
                                        Task 1 · Dark Theme
                                    </button>
                                    <button
                                        onClick={() => setActiveTask('t2')}
                                        className={`px-5 py-2.5 rounded-lg text-[0.65rem] font-mono uppercase tracking-widest shadow-sm transition-all cursor-pointer flex-1 md:flex-none text-center ${activeTask === 't2' ? 'bg-[#1A1C23] border border-[#7effa0] text-[#7effa0] shadow-[0_4px_12px_rgba(126,255,160,0.15)] scale-[1.02]' : 'bg-neutral-900/40 border border-neutral-800 text-neutral-500 hover:text-neutral-300 hover:bg-neutral-800 hover:shadow-md'}`}
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
                                                <h3 className="text-lg font-['DM_Serif_Display'] text-white">Task Completion Rate</h3>
                                                <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 flex flex-col items-center text-center justify-center gap-2 min-h-[160px]">
                                                    <div className="text-5xl font-['DM_Serif_Display'] text-[#7effa0]">{activeTask === 't1' ? '98.7%' : '92.1%'}</div>
                                                    <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-800 pb-3 w-full">Users Completed Task</div>
                                                    <div className="text-[0.6rem] font-mono text-neutral-400 pt-1">
                                                        <strong className="text-white text-sm">{activeTask === 't1' ? '75' : '70'}</strong> / 76 users <span className="mx-2 text-neutral-700">•</span> Failed: {activeTask === 't1' ? '1.3%' : '7.9%'}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* NPS */}
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-['DM_Serif_Display'] text-white">Net Promoter Score</h3>
                                                <div className="bg-[#13131A] border-l-2 border-[#7effa0] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                                                    <div className="flex items-center gap-6 mb-4 pb-4 border-b border-neutral-800/50">
                                                        <div className="text-5xl font-['DM_Serif_Display'] text-[#7effa0]">−55</div>
                                                        <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500 leading-tight">Overall<br />NPS Score</div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-xl font-['DM_Serif_Display'] text-white">17.1%</div>
                                                            <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500">Promoters</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-['DM_Serif_Display'] text-white">72.4%</div>
                                                            <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500">Detractors</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Time */}
                                        <div className="space-y-4">
                                            <h3 className="text-lg font-['DM_Serif_Display'] text-white">Time to Complete</h3>
                                            <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 space-y-6 font-mono">
                                                <div className="flex justify-between items-center text-[0.6rem] uppercase tracking-widest text-neutral-400 pb-3 border-b border-neutral-800/50">
                                                    <span>Average Time</span>
                                                    <strong className="text-white text-sm">{activeTask === 't1' ? '2.15 min' : '2.15 min'}</strong>
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { label: 'Under 60s', val: activeTask === 't1' ? 40.8 : 31.6, color: '#7effa0' },
                                                        { label: '1 – 3 min', val: activeTask === 't1' ? 38.2 : 39.5, color: '#7effa080' },
                                                        { label: 'Over 3 min', val: activeTask === 't1' ? 19.7 : 21.1, color: '#7effa040' }
                                                    ].map((row, i) => (
                                                        <div key={i} className="space-y-1.5">
                                                            <div className="flex justify-between text-[0.6rem] uppercase tracking-wider">
                                                                <span className="text-neutral-500">{row.label}</span>
                                                                <span className="text-[#7effa0]">{row.val}%</span>
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
                                        <div className="bg-[#7effa0]/10 border border-[#7effa0]/20 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4 group hover:bg-[#7effa0]/15 transition-all">
                                            <div className="p-3 bg-[#7effa0]/20 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                                                <Lightbulb className="w-6 h-6 text-[#7effa0]" />
                                            </div>
                                            <div>
                                                <h4 className="text-[0.65rem] font-sans font-bold uppercase tracking-[0.2em] text-[#7effa0] mb-2">Key Takeaway</h4>
                                                <p className="text-base font-serif text-white leading-relaxed italic antialiased">
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
                                                <h3 className="text-lg font-['DM_Serif_Display'] text-white">Task Completion Rate</h3>
                                                <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 flex flex-col items-center text-center justify-center gap-2 min-h-[160px]">
                                                    <div className="text-5xl font-['DM_Serif_Display'] text-[#7eb8ff]">{activeTask === 't1' ? '84.2%' : '78.9%'}</div>
                                                    <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-800 pb-3 w-full">Users Completed Task</div>
                                                    <div className="text-[0.6rem] font-mono text-neutral-400 pt-1">
                                                        <strong className="text-white text-sm">{activeTask === 't1' ? '64' : '60'}</strong> / 76 users <span className="mx-2 text-neutral-700">•</span> Failed: {activeTask === 't1' ? '15.8%' : '21.1%'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-['DM_Serif_Display'] text-white">Net Promoter Score</h3>
                                                <div className="bg-[#13131A] border-l-2 border-[#7eb8ff] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                                                    <div className="flex items-center gap-6 mb-4 pb-4 border-b border-neutral-800/50">
                                                        <div className="text-5xl font-['DM_Serif_Display'] text-[#7eb8ff]">−65</div>
                                                        <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500 leading-tight">Overall<br />NPS Score</div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-xl font-['DM_Serif_Display'] text-white">10.5%</div>
                                                            <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500">Promoters</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-['DM_Serif_Display'] text-white">76.3%</div>
                                                            <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500">Detractors</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-['DM_Serif_Display'] text-white">Time to Complete</h3>
                                            <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 space-y-6 font-mono">
                                                <div className="flex justify-between items-center text-[0.6rem] uppercase tracking-widest text-neutral-400 pb-3 border-b border-neutral-800/50">
                                                    <span>Average Time</span>
                                                    <strong className="text-white text-sm">{activeTask === 't1' ? '2.40 min' : '2.19 min'}</strong>
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { label: 'Under 60s', val: activeTask === 't1' ? 18.4 : 21.1, color: '#7eb8ff' },
                                                        { label: '1 – 3 min', val: activeTask === 't1' ? 35.5 : 30.3, color: '#7eb8ff80' },
                                                        { label: 'Over 3 min', val: activeTask === 't1' ? 30.3 : 27.6, color: '#7eb8ff40' }
                                                    ].map((row, i) => (
                                                        <div key={i} className="space-y-1.5">
                                                            <div className="flex justify-between text-[0.6rem] uppercase tracking-wider">
                                                                <span className="text-neutral-500">{row.label}</span>
                                                                <span className="text-[#7eb8ff]">{row.val}%</span>
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
                                        <div className="bg-[#7eb8ff]/10 border border-[#7eb8ff]/20 rounded-xl p-6 mt-8 flex flex-col md:flex-row items-start md:items-center gap-4 group hover:bg-[#7eb8ff]/15 transition-all">
                                            <div className="p-3 bg-[#7eb8ff]/20 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                                                <Lightbulb className="w-6 h-6 text-[#7eb8ff]" />
                                            </div>
                                            <div>
                                                <h4 className="text-[0.65rem] font-sans font-bold uppercase tracking-[0.2em] text-[#7eb8ff] mb-2 leading-none">Key Takeaways</h4>
                                                <p className="text-[0.95rem] font-serif text-white leading-relaxed italic antialiased">
                                                    <strong>Needs Immediate UX Intervention:</strong> Longest journeys, highest "stuck" rates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activePlatform === 'gemini' && (
                                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                        {activeTask === 't2' && (
                                            <div className="bg-[#1A1310] border border-[#ffb87e]/30 px-6 py-4 rounded-xl text-[0.7rem] font-mono text-[#ffb87e] leading-relaxed">
                                                <strong className="text-white">Note:</strong> Gemini struggled significantly on Task 2 (Language Change) with only 72.4% success.
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-4">
                                                <h3 className="text-lg font-['DM_Serif_Display'] text-white">Task Completion Rate</h3>
                                                <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 flex flex-col items-center text-center justify-center gap-2 min-h-[160px]">
                                                    <div className="text-5xl font-['DM_Serif_Display'] text-[#ffb87e]">{activeTask === 't1' ? '81.6%' : '72.4%'}</div>
                                                    <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500 border-b border-neutral-800 pb-3 w-full">Users Completed Task</div>
                                                    <div className="text-[0.6rem] font-mono text-neutral-400 pt-1">
                                                        <strong className="text-white text-sm">{activeTask === 't1' ? '62' : '55'}</strong> / 76 users <span className="mx-2 text-neutral-700">•</span> Failed: {activeTask === 't1' ? '18.4%' : '27.6%'}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h3 className="text-lg font-['DM_Serif_Display'] text-white">Net Promoter Score</h3>
                                                <div className="bg-[#13131A] border-l-2 border-[#ffb87e] rounded-xl p-6 flex flex-col justify-center min-h-[160px]">
                                                    <div className="flex items-center gap-6 mb-4 pb-4 border-b border-neutral-800/50">
                                                        <div className="text-5xl font-['DM_Serif_Display'] text-[#ffb87e]">−60</div>
                                                        <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500 leading-tight">Overall<br />NPS Score</div>
                                                    </div>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div>
                                                            <div className="text-xl font-['DM_Serif_Display'] text-white">13.2%</div>
                                                            <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500">Promoters</div>
                                                        </div>
                                                        <div>
                                                            <div className="text-xl font-['DM_Serif_Display'] text-white">73.7%</div>
                                                            <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500">Detractors</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h3 className="text-lg font-['DM_Serif_Display'] text-white">Time to Complete</h3>
                                            <div className="bg-[#13131A] border border-neutral-800/50 rounded-xl p-6 space-y-6 font-mono">
                                                <div className="flex justify-between items-center text-[0.6rem] uppercase tracking-widest text-neutral-400 pb-3 border-b border-neutral-800/50">
                                                    <span>Average Time</span>
                                                    <strong className="text-white text-sm">{activeTask === 't1' ? '2.02 min' : '2.09 min'}</strong>
                                                </div>
                                                <div className="space-y-3">
                                                    {[
                                                        { label: 'Under 60s', val: activeTask === 't1' ? 18.4 : 14.5, color: '#ffb87e' },
                                                        { label: '1 – 3 min', val: activeTask === 't1' ? 34.2 : 31.6, color: '#ffb87e80' },
                                                        { label: 'Over 3 min', val: activeTask === 't1' ? 28.9 : 26.3, color: '#ffb87e40' }
                                                    ].map((row, i) => (
                                                        <div key={i} className="space-y-1.5">
                                                            <div className="flex justify-between text-[0.6rem] uppercase tracking-wider">
                                                                <span className="text-neutral-500">{row.label}</span>
                                                                <span className="text-[#ffb87e]">{row.val}%</span>
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
                                        <div className="bg-[#ffb87e]/10 border border-[#ffb87e]/20 rounded-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4 group hover:bg-[#ffb87e]/15 transition-all">
                                            <div className="p-3 bg-[#ffb87e]/20 rounded-full shrink-0 group-hover:scale-110 transition-transform">
                                                <Lightbulb className="w-6 h-6 text-[#ffb87e]" />
                                            </div>
                                            <div>
                                                <h4 className="text-[0.65rem] font-sans font-bold uppercase tracking-[0.2em] text-[#ffb87e] mb-2">Key Takeaway</h4>
                                                <p className="text-base font-serif text-white leading-relaxed italic antialiased">
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

                {/* Global Context & Pain Points */}
                <section className="bg-[#13151A] border border-neutral-800/50 rounded-[3rem] p-10 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.5)] relative overflow-hidden">
                    {/* Background glows */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#7effa0]/5 blur-[120px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
                        <div className="lg:col-span-7 space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-red-500/20 bg-red-500/10 text-red-500 text-[0.65rem] uppercase tracking-[0.3em] font-bold">
                                <ShieldCheck className="w-4 h-4" /> The Logic of Intervention
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-['DM_Serif_Display'] leading-tight text-white mb-6">
                                Entire populations are <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500 italic">locked out</span> of the future by default.
                            </h2>
                            <div className="text-neutral-400 text-lg md:text-xl font-sans font-light leading-relaxed space-y-6">
                                <p>Generative AI relies on non-deterministic content and prompts. Yet, accessibility standards haven't evolved at the same pace—failing to address <strong>ambiguity</strong>, <strong>generative variability</strong>, and <strong>discoverability</strong>.</p>
                                <p>If these systems are inaccessible, they aren't universal.</p>
                            </div>
                        </div>
                        <div className="lg:col-span-5 flex flex-col justify-center gap-10 pl-0 lg:pl-12 lg:border-l border-neutral-800/50">
                            <div className="space-y-3 group cursor-default">
                                <div className="text-5xl md:text-7xl font-['DM_Serif_Display'] text-white transition-colors group-hover:text-red-400">1.3 <span className="text-2xl md:text-3xl text-neutral-500 font-sans tracking-wide">Billion</span></div>
                                <div className="text-[0.7rem] font-sans uppercase tracking-[0.2em] text-neutral-400 leading-tight">People globally live with some form of disability</div>
                            </div>
                            <div className="space-y-3 group cursor-default">
                                <div className="text-5xl md:text-7xl font-['DM_Serif_Display'] text-white transition-colors group-hover:text-red-400">285 <span className="text-2xl md:text-3xl text-neutral-500 font-sans tracking-wide">Million</span></div>
                                <div className="text-[0.7rem] font-sans uppercase tracking-[0.2em] text-neutral-400 leading-tight">People are visually impaired worldwide</div>
                            </div>
                            <div className="space-y-3 group cursor-default">
                                <div className="text-5xl md:text-7xl font-['DM_Serif_Display'] text-white transition-colors group-hover:text-red-400">62 <span className="text-2xl md:text-3xl text-neutral-500 font-sans tracking-wide">Million</span></div>
                                <div className="text-[0.7rem] font-sans uppercase tracking-[0.2em] text-neutral-400 leading-tight">People in the U.S. live with motor or mobility impairments</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Goal - Floating Narrative (North Star style) */}
                <section className="max-w-5xl mx-auto mb-0 relative overflow-visible group py-16 mt-8">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#7effa0]/10 blur-[150px] -z-10 animate-pulse transition-all duration-1000 group-hover:bg-[#7effa0]/20" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] -z-10 animate-pulse transition-all duration-1000 group-hover:bg-blue-500/20" />

                    <div className="p-12 md:p-20 text-center relative rounded-[3rem] bg-white/5 backdrop-blur-xl shadow-[0_40px_100px_rgba(0,0,0,0.5)] transition-all duration-1000 galaxy-float">
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-10 shadow-lg relative overflow-hidden">
                            <Target className="w-5 h-5 text-[#7effa0]" />
                            <span className="text-[0.65rem] md:text-sm font-sans font-bold uppercase tracking-[0.3em] text-white">The North Star</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-['DM_Serif_Display'] font-bold text-white leading-[1.2] mb-12">
                            A forward-looking, Gen-AI specific <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7effa0] to-teal-400 italic">accessibility blueprint</span>.
                        </h2>

                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mt-8">
                            <div className="flex flex-col items-center gap-3">
                                <Sparkles className="w-6 h-6 text-[#7effa0]/60" />
                                <span className="text-[0.65rem] font-sans font-bold text-neutral-300 uppercase tracking-[0.2em]">Discoverability</span>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
                            <div className="flex flex-col items-center gap-3">
                                <Layers className="w-6 h-6 text-blue-400/60" />
                                <span className="text-[0.65rem] font-sans font-bold text-neutral-300 uppercase tracking-[0.2em]">Reliability</span>
                            </div>
                            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
                            <div className="flex flex-col items-center gap-3">
                                <MousePointer2 className="w-6 h-6 text-teal-400/60" />
                                <span className="text-[0.65rem] font-sans font-bold text-neutral-300 uppercase tracking-[0.2em]">User Control</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Research Questions */}
                <section className="space-y-10 border-t border-neutral-800/50 pt-16">
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
                        <div className="p-3 bg-blue-500/10 rounded-full mb-4 border border-blue-500/20">
                            <ShieldCheck className="w-6 h-6 text-blue-400" />
                        </div>
                        <p className="text-[0.65rem] font-sans font-bold uppercase tracking-[0.3em] text-[#7eb8ff] mb-2">Framing the Investigation</p>
                        <h3 className="text-4xl font-['DM_Serif_Display'] font-bold text-white leading-tight">Research Questions</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {(Array.isArray(questions?.content) ? questions.content : [questions?.content])?.map((q: string | undefined, i: number) => (
                            <div key={i} className="bg-[#13151A] border border-neutral-800/50 rounded-3xl p-8 md:p-10 flex flex-col gap-6 hover:-translate-y-2 hover:border-[#7effa0] hover:shadow-[0_10px_30px_rgba(126,255,160,0.1)] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group">
                                <span className="text-5xl font-['DM_Serif_Display'] text-white group-hover:text-[#7effa0] transition-colors">0{i + 1}</span>
                                <p className="text-lg md:text-xl font-serif text-neutral-300 leading-relaxed font-light italic">
                                    {(q || "").replace(/^\d+\.\s*/, '')}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Methodology Extracted */}

                {/* Comparative Feature Audit - NEW SECTION */}
                <section className="space-y-16 border-t border-neutral-800/50 pt-20">
                    <div className="flex items-center gap-4">
                        <span className="h-px w-12 bg-blue-500/50" />
                        <h2 className="text-[0.65rem] font-mono font-bold uppercase tracking-[0.4em] text-blue-400">Comparative Feature Audit</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-12">
                            <h3 className="text-4xl md:text-5xl font-['DM_Serif_Display'] text-white max-w-4xl leading-tight">
                                Mapping 49+ distinct features across the <span className="text-blue-400 italic">Gen AI interaction landscape.</span>
                            </h3>
                        </div>

                        {/* Stats Group */}
                        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                { num: "42+", label: "Features Catalogued", icon: <Layers className="w-5 h-5" /> },
                                { num: "3", label: "Platforms Studied", icon: <Target className="w-5 h-5" /> },
                                { num: "125+", label: "UI Annotations", icon: <MousePointer2 className="w-5 h-5" /> }
                            ].map((stat, i) => (
                                <div key={i} className="p-8 bg-neutral-900/40 border border-neutral-800/60 rounded-3xl group hover:border-blue-500/30 transition-all">
                                    <div className="text-blue-400 mb-4">{stat.icon}</div>
                                    <div className="text-4xl font-['DM_Serif_Display'] text-white mb-2">{stat.num}</div>
                                    <div className="text-[0.6rem] font-mono uppercase tracking-widest text-neutral-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                        <div className="lg:col-span-4 flex items-center">
                            <p className="text-lg font-sans text-neutral-400 leading-relaxed italic border-l-2 border-blue-500/30 pl-8">
                                "This research examines the UX decisions behind three dominant AI chat interfaces. By mapping their features, patterns emerge around what sets great AI UX apart."
                            </p>
                        </div>
                    </div>

                    {/* Research Artifacts */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 mb-8">
                            <h4 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-neutral-500">Research Artifacts</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                            <div className="md:col-span-8 group relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl">
                                <img src="/images/gen-ai/UX - AI Research.jpg" alt="Research Audit Board" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                    <span className="text-[0.65rem] font-mono text-neutral-400 uppercase tracking-widest">Feature mapping & UI annotation board — Gemini, ChatGPT, Copilot</span>
                                </div>
                            </div>
                            <div className="md:col-span-4 group relative overflow-hidden rounded-[2rem] border border-neutral-800 bg-neutral-900 shadow-2xl">
                                <img src="/images/gen-ai/UX - AI Research1.jpg" alt="Feature Taxonomy" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/90 to-transparent">
                                    <span className="text-[0.65rem] font-mono text-neutral-400 uppercase tracking-widest">Comprehensive taxonomy</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Feature Analysis */}
                    <div ref={matrixRef} className="bg-[#0A0B10] rounded-[3.5rem] p-8 md:p-12 border border-neutral-800/50 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent)] pointer-events-none" />

                        <div className="relative z-10 space-y-12">
                            <div className="text-center space-y-4 max-w-2xl mx-auto">
                                <h3 className="text-4xl font-['DM_Serif_Display'] text-white">Platform-by-platform Feature Matrix</h3>
                                <p className="text-neutral-500 font-mono text-[0.6rem] uppercase tracking-[0.2em] leading-relaxed">Evaluating toolsets and interaction nodes across the competitive landscape</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {/* Gemini Card */}
                                <div className="bg-[#13151A]/50 border border-neutral-800/50 rounded-[2.5rem] p-8 flex flex-col group hover:border-blue-500/30 transition-all duration-500">
                                    <div className="flex flex-col items-center text-center gap-4 mb-8 border-b border-neutral-800/50 pb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 p-4 shadow-xl shadow-blue-500/10">
                                            <div className="w-full h-full flex items-center justify-center text-white font-black text-xl font-['Syne']">Gm</div>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-2xl font-['DM_Serif_Display'] text-white">Google Gemini</h4>
                                            <span className="text-[0.6rem] font-mono text-blue-400 uppercase tracking-widest font-black">14 Features</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        {[
                                            "Drafts option & refresh", "Rating & Feedback Loop", "Audio Output", "Audio Input",
                                            "Activity history", "Prompts to kickstart", "Evaluation of results", "Seamless sharing",
                                            "Source shown", "Stop option", "Visual — Dark/light", "Extensions to apps",
                                            "Double check response", "Edit drafts"
                                        ].map((f, i) => (
                                            <span key={f}
                                                className={`px-4 py-2.5 rounded-xl bg-blue-500/5 border border-blue-500/10 text-[0.7rem] text-blue-300/80 hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-300 ${showMatrixTags ? 'animate-in fade-in slide-in-from-bottom-2' : 'opacity-0'}`}
                                                style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
                                            >
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* ChatGPT Card */}
                                <div className="bg-[#13151A]/50 border border-neutral-800/50 rounded-[2.5rem] p-8 flex flex-col group hover:border-purple-500/30 transition-all duration-500">
                                    <div className="flex flex-col items-center text-center gap-4 mb-8 border-b border-neutral-800/50 pb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-purple-400 p-4 shadow-xl shadow-purple-500/10">
                                            <div className="w-full h-full flex items-center justify-center text-white font-black text-xl font-['Syne']">GPT</div>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-2xl font-['DM_Serif_Display'] text-white">OpenAI ChatGPT</h4>
                                            <span className="text-[0.6rem] font-mono text-purple-400 uppercase tracking-widest font-black">21 Features</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        {[
                                            "Pause option", "Keyboard accessibility", "Link to Support", "Feedback Revise",
                                            "Starting Convos", "Conversation starters", "Color contrast issues", "Preferences",
                                            "Dark / Light", "Personalisation", "Disappearing chat", "Connectivity",
                                            "Analyse source"
                                        ].map((f, i) => {
                                            const isWarning = f.includes("issues");
                                            return (
                                                <span key={f}
                                                    className={`px-4 py-2.5 rounded-xl border text-[0.7rem] transition-all duration-300 ${showMatrixTags ? 'animate-in fade-in slide-in-from-bottom-2' : 'opacity-0'} ${isWarning ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-purple-500/5 border-purple-500/10 text-purple-300/80 hover:text-purple-300 hover:bg-purple-500/10'}`}
                                                    style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
                                                >
                                                    {f}
                                                </span>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Copilot Card */}
                                <div className="bg-[#13151A]/50 border border-neutral-800/50 rounded-[2.5rem] p-8 flex flex-col group hover:border-orange-500/30 transition-all duration-500">
                                    <div className="flex flex-col items-center text-center gap-4 mb-8 border-b border-neutral-800/50 pb-8">
                                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-orange-400 p-4 shadow-xl shadow-orange-500/10">
                                            <div className="w-full h-full flex items-center justify-center text-white font-black text-xl font-['Syne']">Co</div>
                                        </div>
                                        <div className="space-y-1">
                                            <h4 className="text-2xl font-['DM_Serif_Display'] text-white">Microsoft Copilot</h4>
                                            <span className="text-[0.6rem] font-mono text-orange-400 uppercase tracking-widest font-black">14 Features</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        {[
                                            "Stop / Pause action", "Image & Audio Input", "New chat button", "Language options",
                                            "Source links", "Advertisements", "Feedback upfront", "Personalisation",
                                            "Country customisation", "Voice features", "Chat Preference"
                                        ].map((f, i) => (
                                            <span key={f}
                                                className={`px-4 py-2.5 rounded-xl bg-orange-500/5 border border-orange-500/10 text-[0.7rem] text-orange-300/80 hover:text-orange-300 hover:bg-orange-500/10 transition-all duration-300 ${showMatrixTags ? 'animate-in fade-in slide-in-from-bottom-2' : 'opacity-0'}`}
                                                style={{ animationDelay: `${i * 50}ms`, animationFillMode: 'both' }}
                                            >
                                                {f}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Comparison Grid */}
                    <div className="space-y-12">
                        <div className="text-center">
                            <h3 className="text-4xl font-['DM_Serif_Display'] text-white">Comparative Matrix</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="border-b border-neutral-800">
                                        <th className="py-6 px-4 text-left text-xs font-mono uppercase tracking-widest text-neutral-500">UX Dimension</th>
                                        <th className="py-6 px-4 text-left text-xs font-mono uppercase tracking-widest text-[#1A73E8]">Gemini</th>
                                        <th className="py-6 px-4 text-left text-xs font-mono uppercase tracking-widest text-[#9B6FF0]">ChatGPT</th>
                                        <th className="py-6 px-4 text-left text-xs font-mono uppercase tracking-widest text-[#E8A020]">Copilot</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-sans">
                                    {[
                                        { cat: "Feedback mechanisms", g: "✦ Rating + loop", ch: "✦ Chips + revise", co: "◐ Upfront" },
                                        { cat: "Audio support", g: "✦ Input + Output", ch: "◐ Voice options", co: "✦ Voice features" },
                                        { cat: "Personalisation", g: "◐ Extensions", ch: "✦ Deep prefs", co: "✦ Lang + Country" },
                                        { cat: "Source transparency", g: "✦ Source shown", ch: "✦ Analyze + source", co: "✦ Links + preview" },
                                        { cat: "Accessibility", g: "◐ Limited info", ch: "◐ Contrast Fail", co: "— Not prominent" },
                                        { cat: "Dark/Light theme", g: "✦ Yes", ch: "✦ Yes", co: "— Limited" },
                                        { cat: "Error recovery", g: "◐ Stop option", ch: "— No back", co: "◐ Stop/Pause" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-neutral-800/30 hover:bg-white/5 transition-colors">
                                            <td className="py-5 px-4 font-bold text-neutral-300 uppercase tracking-tighter text-[0.7rem]">{row.cat}</td>
                                            <td className="py-5 px-4 text-neutral-400 italic">{row.g}</td>
                                            <td className="py-5 px-4 text-neutral-400 italic">{row.ch}</td>
                                            <td className="py-5 px-4 text-neutral-400 italic">{row.co}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Core Insights Grid */}
                    <div className="space-y-12 pt-16">
                        <div className="flex items-center gap-4">
                            <span className="h-px w-12 bg-purple-500/50" />
                            <h4 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-purple-400">Heuristic Insights</h4>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-neutral-800/20">
                            {[
                                { num: "01", title: "Feedback is fragmented across platforms", text: "Each platform handles user feedback differently — Gemini loops it into output quality, ChatGPT uses selectable chips, Copilot surfaces it upfront. No single model is dominant.", cat: "Feedback UX" },
                                { num: "02", title: "Accessibility remains an afterthought", text: "ChatGPT has keyboard shortcuts but fails colour contrast. Gemini and Copilot don't prominently feature accessibility. As AI becomes mainstream, this gap becomes a serious inclusion issue.", cat: "Inclusion" },
                                { num: "03", title: "Source transparency builds trust", text: "All three platforms surface sources — but the depth varies. Gemini's 'double check' and Copilot's link previews show different models for establishing credibility.", cat: "Trust" },
                                { num: "04", title: "Personalisation depth ≠ clarity", text: "ChatGPT has deep preference settings but users can't easily see what's been set after time passes. Copilot offers country-level customisation. More options don't always mean better UX.", cat: "Customisation" },
                                { num: "05", title: "Error recovery is largely absent", text: "ChatGPT has no clear 'go back' from errors. Gemini and Copilot offer stop/pause — but undo and recovery flows are underdeveloped across all three platforms.", cat: "Error Handling" },
                                { num: "06", title: "Audio is the emerging frontier", text: "Gemini leads with both audio input and output. Copilot has voice features. ChatGPT has voice options. Multi-modal interaction is fast becoming table stakes.", cat: "Modality" }
                            ].map((insight, i) => (
                                <div key={i} className="bg-neutral-900/60 p-10 border border-neutral-800/50 hover:bg-neutral-800/80 transition-all group">
                                    <div className="text-6xl font-['DM_Serif_Display'] italic text-white/5 mb-6 group-hover:text-purple-500/10 transition-colors">{insight.num}</div>
                                    <h5 className="text-xl font-bold text-white mb-4 leading-tight">{insight.title}</h5>
                                    <p className="text-neutral-400 text-sm leading-relaxed mb-6">{insight.text}</p>
                                    <span className="text-[0.6rem] font-mono font-black uppercase tracking-widest text-purple-400 border-b border-purple-500/20 pb-1">{insight.cat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Key Findings */}
                <section className="space-y-10 border-t border-neutral-800/50 pt-16 relative">
                    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
                        <div className="p-3 bg-[#7effa0]/10 rounded-full mb-4 border border-[#7effa0]/20">
                            <Sparkles className="w-6 h-6 text-[#7effa0]" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-['DM_Serif_Display'] text-white tracking-wide">Key findings</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start relative">
                        {/* Left Side: Finding Categories */}
                        <div className="lg:col-span-4 flex flex-col gap-4 relative z-10">
                            {findings.map((finding: any, idx: number) => (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedFinding(idx)}
                                    className={`w-full px-8 py-6 rounded-2xl border text-left transition-all duration-500 group relative flex flex-col gap-3 ${selectedFinding === idx
                                        ? 'bg-[#13151A] border-[#7effa0] shadow-[0_0_30px_rgba(126,255,160,0.15)] ring-1 ring-[#7effa0]/50'
                                        : 'bg-[#0A0B10] border-neutral-800/50 hover:bg-[#13151A] hover:border-neutral-700'
                                        }`}
                                >
                                    <div className="flex items-center gap-3 relative z-10">
                                        <span className={`text-[0.65rem] font-sans font-bold uppercase tracking-[0.2em] transition-colors ${selectedFinding === idx ? 'text-[#7effa0]' : 'text-neutral-500 group-hover:text-neutral-400'}`}>Finding 0{idx + 1}</span>
                                        {selectedFinding === idx && <div className="w-2 h-2 rounded-full bg-[#7effa0] animate-pulse" />}
                                    </div>
                                    <span className={`text-lg font-['DM_Serif_Display'] leading-tight transition-colors relative z-10 ${selectedFinding === idx ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-300'}`}>
                                        {finding.title.replace(/^\d\.\s/, '')}
                                    </span>

                                    {/* Horizontal connection line */}
                                    {selectedFinding === idx && (
                                        <div className="absolute right-[-4rem] top-1/2 w-16 border-t border-dotted border-[#7effa0]/40 hidden lg:block" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Middle: Connection line */}
                        <div className="hidden lg:flex items-center justify-center lg:col-span-1 py-12 h-full absolute left-[33.33%] w-[8.33%] z-0">
                            <div className="w-px h-full border-l-2 border-dotted border-[#7effa0]/20" />
                        </div>

                        {/* Right Side: Finding Content */}
                        <div className="lg:col-span-7 lg:col-start-6 relative min-h-[400px]">
                            {findings[selectedFinding] && (
                                <div className="p-10 md:p-12 rounded-[2.5rem] bg-[#13151A] border border-[#7effa0]/30 shadow-[0_20px_60px_rgba(126,255,160,0.05)] animate-in fade-in slide-in-from-right-8 duration-700 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#7effa0]/5 blur-[80px] rounded-full pointer-events-none transition-all duration-1000 group-hover:bg-[#7effa0]/10" />

                                    <div className="mb-8">
                                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-[#7effa0]/20 bg-[#7effa0]/10 text-[#7effa0] text-[0.65rem] uppercase tracking-[0.3em] font-bold mb-6">
                                            Insight 0{selectedFinding + 1}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-['DM_Serif_Display'] text-white leading-tight mb-8">
                                            {findings[selectedFinding].title.replace(/^\d\.\s/, '')}
                                        </h3>
                                        <div className="text-neutral-300 font-serif text-lg leading-relaxed space-y-6 relative z-10">
                                            {renderContentLines(findings[selectedFinding].content)}
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
                        <p className="text-neutral-500 text-[0.65rem] font-mono tracking-[0.35em] uppercase mb-4">UX Research · Accessibility · Flow Analysis</p>
                        <h2 className="text-4xl md:text-6xl font-['Syne'] font-extrabold text-white tracking-tight leading-none bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">Before & After</h2>
                        <p className="text-neutral-400 mt-6 max-w-2xl font-mono text-xs leading-relaxed tracking-wider">
                            These interactions capture <strong className="text-white font-medium italic">before and after flows</strong> of surfacing <strong className="text-white font-medium italic">Accessibility features</strong> in leading AI assistants — evaluating how design changes improve <strong className="text-white font-medium italic">discoverability</strong> and <strong className="text-white font-medium italic">ease of use</strong> for users who rely on assistive capabilities.
                        </p>
                    </div>

                    <div className="flex justify-center gap-8 mb-12 flex-wrap">
                        <div className="flex items-center gap-2 text-[0.65rem] font-mono uppercase tracking-widest text-neutral-500">
                            <div className="w-2 h-2 rounded-full bg-[#ff6b6b]" /> Before — current experience
                        </div>
                        <div className="flex items-center gap-2 text-[0.65rem] font-mono uppercase tracking-widest text-neutral-500">
                            <div className="w-2 h-2 rounded-full bg-[#6bffb8]" /> After — redesigned for accessibility
                        </div>
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
                                    className={`flex items-center gap-3 px-6 py-2.5 rounded-xl text-sm font-['Syne'] font-bold transition-all duration-300 ${activeComparisonTab === tab.id ? 'bg-neutral-800 text-white shadow-lg' : 'text-neutral-500 hover:text-neutral-300'}`}
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
                                logoText: 'text-white',
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
                                    <div className={`w-9 h-9 ${panel.bgColor} ${panel.logoText} rounded-lg flex items-center justify-center font-['Syne'] font-extrabold text-xs shrink-0 tracking-tight`}>
                                        {panel.logo}
                                    </div>
                                    <h3 className="text-2xl font-['Syne'] font-bold text-white">{panel.name}</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start relative">
                                    {/* Before Note */}
                                    <div className="lg:col-span-2 order-2 lg:order-1">
                                        <div className="sticky top-24 bg-[#ff6b6b]/10 border border-[#ff6b6b]/20 border-t-[3px] border-t-[#ff6b6b] rounded-xl p-6 transition-all hover:bg-[#ff6b6b]/15">
                                            <div className="flex items-center gap-2 text-[0.65rem] font-mono font-bold uppercase tracking-widest text-[#ff6b6b] mb-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b6b]" /> Before
                                            </div>
                                            <p className="text-[#e8c4c4] text-xs font-mono leading-relaxed italic">
                                                {panel.bNote}
                                            </p>
                                        </div>
                                    </div>

                                    {/* GIFs */}
                                    <div className="lg:col-span-4 order-1 lg:order-2">
                                        <div className="bg-[#13151A] border border-neutral-800 rounded-2xl overflow-hidden relative group transition-all hover:border-neutral-600 hover:-translate-y-1 shadow-2xl">
                                            <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-[#ff6b6b]/15 border border-[#ff6b6b]/30 rounded text-[9px] font-mono font-bold text-[#ff6b6b] uppercase tracking-widest backdrop-blur-sm">Before</div>
                                            <img src={panel.bGif} alt={`${panel.name} Before`} className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </div>

                                    <div className="lg:col-span-4 order-3 lg:order-3">
                                        <div className="bg-[#13151A] border border-neutral-800 rounded-2xl overflow-hidden relative group transition-all hover:border-neutral-600 hover:-translate-y-1 shadow-2xl">
                                            <div className="absolute top-3 left-3 z-10 px-2 py-1 bg-[#6bffb8]/15 border border-[#6bffb8]/30 rounded text-[9px] font-mono font-bold text-[#6bffb8] uppercase tracking-widest backdrop-blur-sm">After</div>
                                            <img src={panel.aGif} alt={`${panel.name} After`} className="w-full h-auto" />
                                        </div>
                                    </div>

                                    {/* After Note */}
                                    <div className="lg:col-span-2 order-4 lg:order-4">
                                        <div className="sticky top-24 bg-[#1a2a22] border border-[#6bffb8]/18 border-t-[3px] border-t-[#6bffb8] rounded-xl p-6 transition-all hover:bg-[#1a2a22]/80">
                                            <div className="flex items-center gap-2 text-[0.65rem] font-mono font-bold uppercase tracking-widest text-[#6bffb8] mb-4">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#6bffb8]" /> After
                                            </div>
                                            <p className="text-[#bce8d4] text-xs font-mono leading-relaxed italic">
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
                            <h2 className="text-4xl md:text-5xl font-['DM_Serif_Display'] text-white tracking-wide">Comparative UX Performance</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* ChatGPT */}
                            <div className="bg-[#13151A] rounded-[2rem] p-8 border border-neutral-800/50 hover:border-[#7effa0]/40 transition-all duration-300 group flex flex-col gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <div className="inline-flex items-center w-max px-3 py-1 rounded-full border border-[#7effa0]/20 bg-[#7effa0]/10 text-[#7effa0] text-[0.6rem] uppercase tracking-widest font-bold">Best Overall UX</div>
                                <h3 className="text-3xl font-['DM_Serif_Display'] text-white">ChatGPT</h3>
                                <p className="text-neutral-400 font-sans leading-relaxed">High reliability, fast discovery, consistent outcomes.</p>
                            </div>

                            {/* Gemini */}
                            <div className="bg-[#13151A] rounded-[2rem] p-8 border border-neutral-800/50 hover:border-blue-400/40 transition-all duration-300 group flex flex-col gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <div className="inline-flex items-center w-max px-3 py-1 rounded-full border border-blue-400/20 bg-blue-400/10 text-blue-400 text-[0.6rem] uppercase tracking-widest font-bold">Most Efficient</div>
                                <h3 className="text-3xl font-['DM_Serif_Display'] text-white">Gemini</h3>
                                <p className="text-neutral-400 font-sans leading-relaxed">Fastest for confident users, fragile for everyone else.</p>
                                <div className="mt-auto pt-4 text-[0.65rem] font-mono uppercase tracking-[0.2em] text-neutral-500">(When It Works)</div>
                            </div>

                            {/* Copilot */}
                            <div className="bg-[#13151A] rounded-[2rem] p-8 border border-neutral-800/20 bg-gradient-to-br from-[#13151A] to-indigo-500/5 hover:border-indigo-500/50 transition-all duration-300 group flex flex-col gap-6 shadow-[0_10px_30px_rgba(99,102,241,0.05)]">
                                <div className="inline-flex items-center w-max px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-400 text-[0.6rem] uppercase tracking-widest font-bold">Needs Intervention</div>
                                <h3 className="text-3xl font-['DM_Serif_Display'] text-white">Copilot</h3>
                                <p className="text-neutral-400 font-sans leading-relaxed">Longest journeys, highest “stuck” rates, unpredictable navigation.</p>
                            </div>
                        </div>
                    </section>
                )}

                {/* Data Analysis after Design Update */}
                <section className="space-y-12 border-t border-neutral-800/50 pt-16">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                        <div className="p-4 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                            <BarChart3 className="w-8 h-8 text-blue-400" />
                        </div>
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-['DM_Serif_Display'] text-white tracking-tight leading-tight">Data Analysis <span className="text-blue-400 italic">Post-Design</span></h2>
                        <p className="text-neutral-300 mt-6 text-xl md:text-2xl font-sans leading-relaxed max-w-2xl opacity-90">
                            A comparative review of accessibility gains. Highlighting the top-performing platforms across specific usability benchmarks.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-7xl mx-auto">
                        {/* Table Column */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="flex items-center gap-5 mb-4">
                                <div className="p-2.5 bg-blue-500/10 rounded-xl border border-blue-500/20">
                                    <BarChart3 className="w-6 h-6 text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-['DM_Serif_Display'] text-white tracking-wide">Task Efficiency Scoring</h3>
                            </div>

                            <div className="bg-[#13151A] border border-neutral-800/50 rounded-2xl overflow-hidden h-full flex flex-col">
                                <table className="w-full text-left border-collapse flex-1">
                                    <thead>
                                        <tr className="border-b border-neutral-800/50 bg-neutral-900/40">
                                            <th className="px-6 py-4 text-[0.75rem] font-mono uppercase tracking-[0.2em] text-neutral-400">App Platform</th>
                                            <th className="px-6 py-4 text-[0.75rem] font-mono uppercase tracking-[0.2em] text-neutral-400 text-center">Theme</th>
                                            <th className="px-6 py-4 text-[0.75rem] font-mono uppercase tracking-[0.2em] text-neutral-400 text-center">Language</th>
                                            <th className="px-6 py-4 text-[0.75rem] font-mono uppercase tracking-[0.2em] text-neutral-400 text-center">Keyboard</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-neutral-800/30">
                                        {[
                                            { app: "ChatGPT", color: "#7effa0", data: ["79.2%", "75.5%", "57.6%"] },
                                            { app: "Copilot", color: "#3b82f6", data: ["65.5%", "69.4%", "94.8%"] },
                                            { app: "Gemini", color: "#6366f1", data: ["54.9%", "90.3%", "93.6%"] }
                                        ].map((row, i) => (
                                            <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                                                <td className="px-6 py-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: row.color }} />
                                                        <span className="font-['DM_Serif_Display'] text-xl text-white tracking-wide">{row.app}</span>
                                                    </div>
                                                </td>
                                                {row.data.map((val, j) => {
                                                    const isTop = (j === 0 && i === 0) || (j === 1 && i === 2) || (j === 2 && i === 1);
                                                    return (
                                                        <td key={j} className="px-6 py-6 text-center">
                                                            <span className={`text-base font-mono font-bold ${isTop ? 'text-[#FFE500] scale-110 inline-block drop-shadow-[0_0_8px_rgba(255,229,0,0.3)]' : 'text-neutral-300'}`}>{val}</span>
                                                        </td>
                                                    );
                                                })}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Chart Column */}
                        <div className="lg:col-span-6 space-y-6">
                            <div className="flex items-center gap-4 mb-4">
                                <h3 className="text-sm font-mono uppercase tracking-[0.3em] font-black text-neutral-400">Impact Visualizer</h3>
                            </div>

                            <div className="bg-[#13151A] border border-neutral-800/50 rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group min-h-[450px]">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] rounded-full pointer-events-none" />

                                <div className="flex-1 relative mt-4">
                                    {/* Legend / Y-Axis Labels */}
                                    <div className="absolute left-0 top-0 h-[80%] flex flex-col justify-around text-xs font-mono text-neutral-400 uppercase tracking-widest pr-6 border-r border-neutral-800/50">
                                        <span>ChatGPT</span>
                                        <span>Copilot</span>
                                        <span>Gemini</span>
                                    </div>

                                    {/* Legend / X-Axis Labels */}
                                    <div className="absolute left-24 bottom-0 w-[80%] flex justify-around text-xs font-mono text-neutral-400 uppercase tracking-widest pt-6 border-t border-neutral-800/50">
                                        <span>Theme</span>
                                        <span>Language</span>
                                        <span>Keyboard</span>
                                    </div>

                                    {/* Bubble Plot Area */}
                                    <div className="absolute left-24 top-0 right-0 bottom-12 grid grid-cols-3 grid-rows-3 items-center justify-items-center">
                                        {[
                                            { val: 79.2, color: '#7effa0' }, { val: 75.5, color: '#7effa0' }, { val: 57.6, color: '#7effa0' },
                                            { val: 65.5, color: '#3b82f6' }, { val: 69.4, color: '#3b82f6' }, { val: 94.8, color: '#3b82f6' },
                                            { val: 54.9, color: '#6366f1' }, { val: 90.3, color: '#6366f1' }, { val: 93.6, color: '#6366f1' }
                                        ].map((bubble, idx) => (
                                            <div key={idx} className="relative group/bubble">
                                                <div
                                                    className="rounded-full transition-all duration-700 hover:scale-110 cursor-help flex items-center justify-center relative shadow-lg"
                                                    style={{
                                                        width: `${bubble.val * 0.9}px`,
                                                        height: `${bubble.val * 0.9}px`,
                                                        backgroundColor: bubble.color,
                                                        opacity: 0.4 + (bubble.val / 200),
                                                        boxShadow: `0 0 30px ${bubble.color}44`,
                                                        border: `2px solid ${bubble.color}aa`
                                                    }}
                                                >
                                                    <span className="text-[14px] md:text-[16px] font-mono font-black text-white drop-shadow-md">
                                                        {bubble.val}%
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-12 flex justify-center gap-10 border-t border-neutral-800/30 pt-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-[#7effa0]/40 border border-[#7effa0]/60" />
                                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold">ChatGPT</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-[#3b82f6]/40 border border-[#3b82f6]/60" />
                                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold">Copilot</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-[#6366f1]/40 border border-[#6366f1]/60" />
                                        <span className="text-xs font-mono text-neutral-400 uppercase tracking-widest font-bold">Gemini</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Accessibility Blueprint */}
                <section id="accessibility-blueprint" className="space-y-12 border-t border-neutral-800/50 pt-20">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                        <p className="text-[#00FF00] text-[0.65rem] font-mono tracking-[0.4em] uppercase mb-4 font-black">Case Study · Design Principles</p>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-['DM_Serif_Display'] text-white tracking-tight leading-none">The Accessibility Blueprint</h2>
                        <p className="text-neutral-200 mt-6 max-w-lg font-sans leading-relaxed">Designing the future of human-centered AI starts with these foundational principles.</p>
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
                                                <h3 className={`text-2xl font-['DM_Serif_Display'] leading-none transition-colors duration-300 ${isActive ? 'text-white' : 'text-neutral-100'}`}>
                                                    {p.title}
                                                </h3>
                                                {!isActive && (
                                                    <p className="text-sm text-neutral-300 font-sans mt-2 line-clamp-2 leading-relaxed">{p.details}</p>
                                                )}
                                            </div>
                                        </button>

                                        {/* Expanded Content */}
                                        <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isActive ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="px-8 pb-10 flex flex-col gap-6">
                                                <p className="text-white font-sans leading-relaxed">
                                                    {p.expanded}
                                                </p>

                                                <div className="flex flex-wrap gap-2">
                                                    {p.tags.map(tag => (
                                                        <span key={tag} className="px-3 py-1 rounded-md bg-white/10 border border-white/10 text-[0.65rem] font-mono uppercase tracking-widest text-[#7effa0] font-bold">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="pt-6 border-t border-white/5 space-y-3">
                                                    <div className="text-[0.65rem] font-mono tracking-[0.2em] uppercase text-[#7effa0] font-black">Implementation Breakdown</div>
                                                    <p className="text-neutral-100 text-sm font-sans italic leading-relaxed">
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

                {/* Combined Final Takeaway & Future Scope */}
                <section className="pt-24 pb-12">
                    <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#1A1C30] to-[#0A0B10] border border-[#7effa0]/30 rounded-[3.5rem] p-12 md:p-20 shadow-[0_40px_100px_rgba(0,0,0,0.6)] relative overflow-hidden group">
                        {/* Decorative background pattern */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#7effa0_1px,transparent_1px)] [background-size:20px_20px]" />
                        <div className="absolute -top-40 -right-40 w-[40rem] h-[40rem] bg-indigo-500/10 blur-[120px] rounded-full" />
                        <div className="absolute -bottom-40 -left-40 w-[40rem] h-[40rem] bg-[#7effa0]/10 blur-[120px] rounded-full" />

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                            {/* Left Side: Final Thoughts */}
                            <div className="lg:col-span-7 space-y-10">
                                <div className="w-20 h-20 rounded-2xl bg-[#7effa0]/10 border border-[#7effa0]/30 flex items-center justify-center mb-4">
                                    <Target className="w-10 h-10 text-[#7effa0]" />
                                </div>

                                <div className="space-y-4">
                                    <h2 className="text-sm font-mono font-black uppercase tracking-[0.6em] bg-gradient-to-r from-[#7effa0] to-blue-400 bg-clip-text text-transparent">
                                        The Final Takeaway
                                    </h2>
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-['DM_Serif_Display'] italic leading-tight text-white/95">
                                        {finalTakeaway ? arrayToList(finalTakeaway.content) : "Designing for inclusivity isn't an add-on; it's the foundation of trust in AI."}
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Future Scope Card */}
                            {futureScope && (
                                <div className="lg:col-span-5">
                                    <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-10 md:p-12 space-y-8 backdrop-blur-sm relative group/card overflow-hidden">
                                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-700" />

                                        <div className="space-y-6 relative z-10">
                                            <div className="inline-flex items-center gap-3 px-3 py-1 bg-[#7effa0]/10 border border-[#7effa0]/20 rounded-full text-[0.65rem] font-mono font-bold text-[#7effa0] uppercase tracking-widest">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#7effa0] shadow-[0_0_8px_#7effa0]" /> Expansion Path
                                            </div>
                                            <h3 className="text-3xl font-['DM_Serif_Display'] text-white">Future Scope</h3>
                                            <div className="text-neutral-300 text-lg font-sans leading-relaxed opacity-90">
                                                {renderContentLines(futureScope.content)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Behind the Scenes - relocated to end and downsized */}
                <section className="pb-32 pt-20">
                    <div className="max-w-xl mx-auto bg-neutral-900/40 border border-neutral-800/80 rounded-3xl p-8 text-center flex flex-col items-center gap-6">
                        <div className="p-3 bg-neutral-800/50 rounded-2xl border border-neutral-700/50">
                            <Layers className="w-5 h-5 text-neutral-400" />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-bold text-white tracking-wide font-sans">Behind the Scenes</h3>
                            <p className="text-neutral-400 text-xs font-sans max-w-sm leading-relaxed">
                                Research methodology, user testing criteria, and academic frameworks used for this project.
                            </p>
                        </div>
                        <button
                            onClick={() => setIsBehindScenesOpen(true)}
                            className="px-6 py-3 bg-neutral-800 hover:bg-neutral-700 text-white font-bold uppercase tracking-widest text-[0.6rem] rounded-xl transition-all duration-300"
                        >
                            Explore Methodology
                        </button>
                    </div>
                </section>
            </article>

            {/* MODALS */}

            {/* Methodology Modal */}
            <div className={`fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 transition-all duration-500 ${isBehindScenesOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-[#080808]/90 backdrop-blur-md" onClick={() => setIsBehindScenesOpen(false)} />
                <div className={`relative w-full max-w-4xl max-h-[85vh] overflow-y-auto mac-scrollbar bg-[#13151A] border border-neutral-700/50 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.6)] transition-all duration-500 delay-100 ${isBehindScenesOpen ? 'translate-y-0 scale-100' : 'translate-y-20 scale-95'}`}>
                    <div className="sticky top-0 bg-[#1A1C23] border-b border-neutral-800/50 p-6 flex items-center justify-between z-10 shadow-md">
                        <div className="flex items-center gap-3">
                            <Layers className="w-5 h-5 text-[#7effa0]" />
                            <h3 className="font-sans font-bold uppercase tracking-widest text-[#7effa0] text-sm md:text-base">Behind the Scenes</h3>
                        </div>
                        <button onClick={() => setIsBehindScenesOpen(false)} className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-neutral-700 transition-colors">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 1L13 13M1 13L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                        </button>
                    </div>

                    <div className="p-8 md:p-14 space-y-12">
                        <div className="text-center mb-10">
                            <h2 className="text-4xl md:text-5xl font-['DM_Serif_Display'] text-white">Methodology</h2>
                        </div>
                        <div className="grid grid-cols-1 gap-14">
                            {methodology?.map((step: any, idx: number) => (
                                <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-10">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#0A0B10] border border-[#7effa0]/20 flex items-center justify-center text-2xl font-['DM_Serif_Display'] text-[#7effa0] shadow-md">
                                        0{idx + 1}
                                    </div>
                                    <div className="space-y-4 pt-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide font-sans">{step.title.replace(/^\d\.\s/, '')}</h3>
                                        <div className="text-neutral-400 font-serif leading-relaxed text-lg pt-2">
                                            {renderContentLines(step.content)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
