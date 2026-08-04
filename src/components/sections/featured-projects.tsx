"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HoverGradientChip } from "@/components/ui/hover-gradient-chip";

const featuredItems = [
    {
        tag: "CIVIC TECH • SF GOVT",
        title: "SafeHome SF",
        description: "Redesigning earthquake & tsunami preparedness for the communities of San Francisco. From design chaos to a trusted, accessible civic product.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/safehome/safehome_cover_new.jpg`,
        slug: "safehome-sf",
        externalLink: "https://pitch.com/v/safehome-emwcbe",
        metrics: [
            { label: "Active Growth", value: "+76.5%" },
            { label: "Engagement", value: "6.5m" },
            { label: "Initial Trust", value: "51%" }
        ],
        alt: "SafeHome SF Project"
    },
    {
        tag: "SUPPLY CHAIN • DATA VIZ",
        title: "Tracking Quality Dashboard",
        description: "A complete overhaul of supply chain visibility reporting, transforming complex data into actionable performance metrics for global shippers.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/tracking-quality-dashboard/cover_v4.jpg`,
        slug: "tracking-quality-dashboard",
        metrics: [
            { label: "Visibility Gain", value: "45%" },
            { label: "Audit Accuracy", value: "98%" },
            { label: "Decision Speed", value: "3x" }
        ],
        alt: "Tracking Quality Dashboard"
    },
    {
        tag: "FEATURED RESEARCH",
        title: "Designing for Inclusivity in the Age of Generative AI",
        description: "A futurist UX investigation that benchmarks how inclusive modern generative AI tools are and sketches a blueprint for accessibility-forward experiences. Published at IEEE and IndiaHCI.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/work/gen_ai_cover.jpg`,
        slug: "gen-ai-inclusivity",
        metrics: [
            { label: "Participants", value: "76" },
            { label: "AI Platforms", value: "3" },
            { label: "Best Completion", value: "92%" }
        ],
        alt: "Gen AI Research"
    }
];

export function FeaturedProjects() {
    const targetRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const [maxScroll, setMaxScroll] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (trackRef.current) {
                const trackWidth = trackRef.current.scrollWidth;
                const viewportWidth = window.innerWidth;
                setMaxScroll(Math.max(0, trackWidth - viewportWidth));
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const { scrollYProgress } = useScroll({
        target: targetRef
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

    if (isMobile) {
        return (
            <section id="work" className="py-16 bg-canvas relative z-20">
                <div className="container mx-auto px-6">
                    {/* Integrated skills and stats at top */}
                    <div className="mb-16">
                        <div className="flex flex-col gap-8">
                            <div className="flex flex-col gap-4">
                                <span className="text-xs font-bold uppercase tracking-[0.08em] text-blush flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-blush" />
                                    Core Competencies
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        "UX Research", "Prototyping", "Usability Testing", "Design Strategy",
                                        "Design Systems", "Accessibility", "Figma", "AI Inclusivity Advocate",
                                        "AI Tools", "Human-Centered Design"
                                    ].map((skill) => (
                                        <HoverGradientChip key={skill} text={skill} paddingClass="px-3 py-1.5" />
                                    ))}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="clay-card p-4">
                                    <p className="text-2xl font-black text-blush font-outfit">6+</p>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Years Experience</p>
                                </div>
                                <div className="clay-card p-4">
                                    <p className="text-2xl font-black text-blush font-outfit font-sans">5 Million +</p>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Users Reached</p>
                                </div>
                                <div className="clay-card p-4">
                                    <p className="text-2xl font-black text-blush font-outfit">70K+</p>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Products Ecomm Redesign</p>
                                </div>
                                <div className="clay-card p-4">
                                    <p className="text-2xl font-black text-blush font-outfit">3.2 Million</p>
                                    <p className="text-[9px] font-bold uppercase tracking-widest text-neutral-500">Tracking Platform Redesign</p>
                                </div>
                            </div>

                            {/* Small Capybara Mascot */}
                            <div className="flex justify-center mt-4">
                                <div className="relative w-[140px] h-[140px] shrink-0 animate-float-3d">
                                    <div className="w-full h-full rounded-[24px] p-2 bg-white dark:bg-black shadow-md border border-neutral-200/20 dark:border-neutral-800 flex items-center justify-center overflow-hidden">
                                        <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/claymorphic_capybara.png`} alt="Capybara Mascot" className="w-full h-full object-cover rounded-[16px]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tool Exploration carousel */}
                        <div className="mt-12 relative">
                            <span className="text-xs font-bold uppercase tracking-[0.08em] text-blush flex items-center gap-2 mb-4">
                                <span className="w-1.5 h-1.5 rounded-full bg-blush" />
                                Tool Exploration
                            </span>
                            <div className="relative w-full overflow-hidden">
                                <div className="marquee-container">
                                    {[
                                        { name: "Figma", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/figma-new.png` },
                                        { name: "Cursor", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/cursor_code_editor-logo_brandlogos.net_r1yfy.png` },
                                        { name: "Gemini", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/gemini-logo.png` },
                                        { name: "ChatGPT", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/chatgpt-new.png` },
                                        { name: "Claude", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/claude logo.jpeg` },
                                        { name: "Uizard", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/uizard-new.png` },
                                        { name: "Antigravity", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/antigravity-new.png` },
                                        // Duplicate
                                        { name: "Figma", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/figma-new.png` },
                                        { name: "Cursor", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/cursor_code_editor-logo_brandlogos.net_r1yfy.png` },
                                        { name: "Gemini", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/gemini-logo.png` },
                                        { name: "ChatGPT", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/chatgpt-new.png` },
                                        { name: "Claude", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/claude logo.jpeg` },
                                        { name: "Uizard", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/uizard-new.png` },
                                        { name: "Antigravity", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/antigravity-new.png` },
                                    ].map((tool, i) => (
                                        <div key={i} className="min-w-[120px] h-[80px] flex flex-col items-center justify-center gap-1">
                                            <div className="w-10 h-10 flex items-center justify-center">
                                                <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                                            </div>
                                            <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-widest">{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Selected Work Title */}
                    <div className="mb-12 pt-12 border-t border-neutral-200/50 dark:border-white/5">
                        <span className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-[0.08em] text-blush mb-4">
                            <span className="w-4 h-[3px] bg-blush rounded-[2px]" />
                            Portfolio
                        </span>
                        <h2 className="text-3xl font-extralight tracking-tight text-neutral-900 dark:text-white mb-4 font-outfit">
                            Selected Work
                        </h2>
                        <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed font-normal">
                            A curation of projects defining new standards in design strategy, accessibility, and high-stakes data visualization.
                        </p>
                    </div>

                    {/* Horizontal scroll list for mobile (un-locked to avoid cutting off contents) */}
                    <div className="flex overflow-x-auto gap-6 pb-8 px-1 no-scrollbar snap-x snap-mandatory">
                        {featuredItems.map((item) => (
                            <div
                                key={item.slug}
                                className="snap-align-start shrink-0 w-[85vw] sm:w-[480px] clay-card p-6 flex flex-col justify-between"
                            >
                                <div className="flex flex-col gap-5">
                                    <a
                                        href={item.externalLink || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/${item.slug}/`}
                                        target={item.externalLink ? "_blank" : undefined}
                                        rel={item.externalLink ? "noopener noreferrer" : undefined}
                                        className="block relative aspect-[16/10] rounded-[16px] overflow-hidden bg-white dark:bg-black border border-neutral-200/20 dark:border-neutral-800 shadow-sm"
                                    >
                                        <img
                                            src={item.image}
                                            alt={item.alt}
                                            className="w-full h-full object-left object-cover"
                                        />
                                    </a>

                                    <div className="space-y-3">
                                        <span className="text-[10px] font-bold font-outfit tracking-wider text-blush uppercase block">
                                            {item.tag}
                                        </span>
                                        <a
                                            href={item.externalLink || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/${item.slug}/`}
                                            target={item.externalLink ? "_blank" : undefined}
                                            rel={item.externalLink ? "noopener noreferrer" : undefined}
                                            className="hover:text-blush transition-colors block"
                                        >
                                            <h3 className="text-xl font-outfit font-black text-neutral-900 dark:text-white leading-tight">
                                                {item.title}
                                            </h3>
                                        </a>
                                        <p className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm leading-relaxed font-normal">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-6 pt-5 border-t border-neutral-200/50 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                    <div className="grid grid-cols-3 gap-4">
                                        {item.metrics.map((m) => (
                                            <div key={m.label} className="space-y-0.5">
                                                <p className="text-lg font-outfit font-black text-blush leading-none">{m.value}</p>
                                                <p className="text-[8px] font-bold font-outfit uppercase tracking-widest text-neutral-500">{m.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <a
                                        href={item.externalLink || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/${item.slug}/`}
                                        target={item.externalLink ? "_blank" : undefined}
                                        rel={item.externalLink ? "noopener noreferrer" : undefined}
                                        className="btn-ghost-3d py-2 px-4 text-[10px] shrink-0 w-full sm:w-auto text-center"
                                    >
                                        Explore case study
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/`}
                            className="btn-orange-3d px-8 py-4 text-xs relative cursor-pointer"
                        >
                            Explore Research Library
                            <ArrowRight className="w-4 h-4 ml-2 inline" />
                        </a>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Normal scroll section: Explore Library, Competencies, Stats Grid, Mascot and Tool Exploration */}
            <section className="py-24 bg-canvas border-b border-neutral-200/50 dark:border-white/5 relative z-20">
                <div className="container mx-auto px-6 max-w-7xl">
                    {/* Stats, Competencies, Mascot and Tool Exploration Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                            {/* Left Column: Competencies & Stats Grid (lg:col-span-8) */}
                            <div className="lg:col-span-8 flex flex-col gap-10">
                                {/* Core Competencies (Moved ABOVE stats) */}
                                <div className="flex flex-col gap-4">
                                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-blush flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blush" />
                                        Core Competencies
                                    </span>
                                    <div className="flex flex-wrap gap-2.5">
                                        {[
                                            "UX Research",
                                            "Prototyping",
                                            "Usability Testing",
                                            "Design Strategy",
                                            "Design Systems",
                                            "Accessibility",
                                            "Figma",
                                            "AI Inclusivity Advocate",
                                            "AI Tools",
                                            "Human-Centered Design"
                                        ].map((skill) => (
                                            <HoverGradientChip key={skill} text={skill} />
                                        ))}
                                    </div>
                                </div>

                                {/* Stats Grid (Moved BELOW competencies) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                    {/* Stat 1 */}
                                    <div className="clay-card p-6">
                                        <p className="text-3xl md:text-4xl font-black text-blush font-outfit">6+</p>
                                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">Years Experience</p>
                                    </div>
                                    {/* Stat 2 */}
                                    <div className="clay-card p-6">
                                        <p className="text-3xl md:text-4xl font-black text-blush font-outfit font-sans">5 Million +</p>
                                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">Users Reached</p>
                                    </div>
                                    {/* Stat 3 */}
                                    <div className="clay-card p-6">
                                        <p className="text-3xl md:text-4xl font-black text-blush font-outfit">70K+</p>
                                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">Products Ecomm Redesign</p>
                                    </div>
                                    {/* Stat 4 */}
                                    <div className="clay-card p-6">
                                        <p className="text-3xl md:text-4xl font-black text-blush font-outfit">3.2 Million</p>
                                        <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mt-1">Tracking Platform Redesign</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column: Small Capybara Mascot (lg:col-span-4) */}
                            <div className="lg:col-span-4 flex items-center justify-center">
                                <div className="relative w-[180px] h-[180px] shrink-0 animate-float-3d">
                                    <div className="w-full h-full rounded-[24px] p-3 bg-white dark:bg-black shadow-[0_20px_40px_-10px_rgba(15,23,42,0.1),inset_-3px_-3px_6px_rgba(15,23,42,0.02),inset_3px_3px_6px_rgba(255,255,255,1)] dark:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.8),inset_3px_3px_6px_rgba(255,255,255,0.03)] border border-neutral-200/20 dark:border-neutral-800 flex items-center justify-center overflow-hidden">
                                        <img
                                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/claymorphic_capybara.png`}
                                            alt="Small Capybara Mascot"
                                            className="w-full h-full object-cover rounded-[16px]"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tool Exploration carousel */}
                        <div className="mt-20 relative">
                            <span className="text-xs font-bold uppercase tracking-[0.08em] text-blush flex items-center gap-2 mb-6">
                                <span className="w-1.5 h-1.5 rounded-full bg-blush" />
                                Tool Exploration
                            </span>

                            <div className="relative w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
                                <style dangerouslySetInnerHTML={{
                                    __html: `
                                    @keyframes marquee {
                                        0% { transform: translateX(0); }
                                        100% { transform: translateX(-1400px); }
                                    }
                                    .marquee-container {
                                        display: flex;
                                        gap: 1rem;
                                        width: max-content;
                                        padding: 1rem 0;
                                        animation: marquee 35s linear infinite;
                                    }
                                    .marquee-container:active {
                                        animation-play-state: paused;
                                    }
                                `}} />
                                <div className="marquee-container">
                                    {[
                                        { name: "Figma", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/figma-new.png` },
                                        { name: "Cursor", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/cursor_code_editor-logo_brandlogos.net_r1yfy.png` },
                                        { name: "Gemini", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/gemini-logo.png` },
                                        { name: "ChatGPT", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/chatgpt-new.png` },
                                        { name: "Claude", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/claude logo.jpeg` },
                                        { name: "Uizard", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/uizard-new.png` },
                                        { name: "Antigravity", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/antigravity-new.png` },
                                        // Duplicate for seamless loop
                                        { name: "Figma", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/figma-new.png` },
                                        { name: "Cursor", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/cursor_code_editor-logo_brandlogos.net_r1yfy.png` },
                                        { name: "Gemini", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/gemini-logo.png` },
                                        { name: "ChatGPT", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/chatgpt-new.png` },
                                        { name: "Claude", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/claude logo.jpeg` },
                                        { name: "Uizard", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/uizard-new.png` },
                                        { name: "Antigravity", logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/antigravity-new.png` },
                                    ].map((tool, i) => (
                                        <div key={i} className="min-w-[160px] h-[100px] bg-transparent flex flex-col items-center justify-center gap-2 group transition-all duration-300">
                                            <div className="w-16 h-16 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                                <img src={tool.logo} alt={tool.name} loading="lazy" className="w-full h-full object-contain" />
                                            </div>
                                            <span className="text-[9px] font-bold text-neutral-500 uppercase tracking-widest">{tool.name}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-transparent z-10" />
                                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-50 dark:from-neutral-950 to-transparent z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Horizontal scroll track wrapper */}
            <section id="work" ref={targetRef} className="relative h-[250vh] bg-canvas z-20">
                <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
                    <div className="container mx-auto px-6 max-w-7xl">
                        <div className="mb-12">
                            <span className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-[0.08em] text-blush mb-4">
                                <span className="w-4 h-[3px] bg-blush rounded-[2px]" />
                                Portfolio
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-neutral-900 dark:text-white mb-4 font-outfit">
                                Selected Work
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl text-base md:text-lg leading-relaxed font-normal">
                                A curation of projects defining new standards in design strategy, accessibility, and high-stakes data visualization.
                            </p>
                        </div>
                    </div>

                    {/* Horizontal Scroll Track */}
                    <div className="relative w-full overflow-hidden">
                        <motion.div ref={trackRef} style={{ x }} className="flex gap-8 px-6 md:px-24 w-max">
                            {featuredItems.map((item) => (
                                <div
                                    key={item.slug}
                                    className="shrink-0 w-[85vw] sm:w-[500px] md:w-[600px] clay-card p-8 md:p-10 flex flex-col justify-between"
                                >
                                    <div className="flex flex-col gap-6">
                                        {/* Image */}
                                        <a
                                            href={item.externalLink || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/${item.slug}/`}
                                            target={item.externalLink ? "_blank" : undefined}
                                            rel={item.externalLink ? "noopener noreferrer" : undefined}
                                            className="block relative aspect-[16/10] rounded-[16px] overflow-hidden bg-white dark:bg-black border border-neutral-200/20 dark:border-neutral-800 shadow-sm group/img cursor-pointer pointer-events-auto"
                                        >
                                            <img
                                                src={item.image}
                                                alt={item.alt}
                                                className={`w-full h-full ${item.slug === "tracking-quality-dashboard" ? "object-contain" : "object-left object-cover"} transition-transform duration-700 group-hover/img:scale-105`}
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                        </a>

                                        {/* Content */}
                                        <div className="space-y-4">
                                            <span className="text-[10px] md:text-xs font-bold font-outfit tracking-wider text-blush uppercase block">
                                                {item.tag}
                                            </span>
                                            <a
                                                href={item.externalLink || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/${item.slug}/`}
                                                target={item.externalLink ? "_blank" : undefined}
                                                rel={item.externalLink ? "noopener noreferrer" : undefined}
                                                className="hover:text-blush transition-colors block cursor-pointer pointer-events-auto"
                                            >
                                                <h3 className="text-2xl md:text-3xl font-outfit font-black text-neutral-900 dark:text-white leading-tight">
                                                    {item.title}
                                                </h3>
                                            </a>
                                            <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed font-normal">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Metrics & Explore Link */}
                                    <div className="mt-8 pt-6 border-t border-neutral-200/50 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                                        <div className="grid grid-cols-3 gap-6">
                                            {item.metrics.map((m) => (
                                                <div key={m.label} className="space-y-1">
                                                    <p className="text-xl md:text-2xl font-outfit font-black text-blush leading-none">{m.value}</p>
                                                    <p className="text-[9px] font-bold font-outfit uppercase tracking-widest text-neutral-500 dark:text-neutral-400">{m.label}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <a
                                            href={item.externalLink || `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/${item.slug}/`}
                                            target={item.externalLink ? "_blank" : undefined}
                                            rel={item.externalLink ? "noopener noreferrer" : undefined}
                                            className="btn-ghost-3d py-2.5 px-5 text-[11px] shrink-0 w-full sm:w-auto text-center"
                                        >
                                            Explore case study
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Explore Research Library (centered at bottom) */}
            <section className="py-12 bg-canvas relative z-20">
                <div className="text-center">
                    <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/`}
                        className="btn-orange-3d px-10 py-5 text-sm z-[10000] relative cursor-pointer pointer-events-auto"
                    >
                        Explore Research Library
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform ml-2" />
                    </a>
                </div>
            </section>
        </>
    );
}
