"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import { 
    Target, 
    Search, 
    Compass, 
    Sparkles, 
    Layers, 
    CheckCircle, 
    Rocket, 
    TrendingUp, 
    RotateCw 
} from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
    {
        num: "01",
        title: "Business Goals",
        desc: "Aligning product roadmap, user needs, and company KPIs into a strategic design vision that delivers measurable business outcomes.",
        tasks: ["KPI Definition", "Stakeholder Alignment", "Value Mapping"],
        icon: Target,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10",
        borderColor: "border-orange-500/20",
        glowColor: "rgba(249, 115, 22, 0.15)"
    },
    {
        num: "02",
        title: "User Research",
        desc: "Conducting qualitative user interviews, surveys, field observation, and user persona mapping to extract authentic pain points.",
        tasks: ["User Interviews", "Persona Creation", "Behavior Mapping"],
        icon: Search,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10",
        borderColor: "border-blue-500/20",
        glowColor: "rgba(59, 130, 246, 0.15)"
    },
    {
        num: "03",
        title: "Problem Framing",
        desc: "Defining core user journeys, framing ambiguous product logic into clear, addressable, and developer-friendly statements.",
        tasks: ["Journey Mapping", "Logic Definition", "Scope Framing"],
        icon: Compass,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10",
        borderColor: "border-purple-500/20",
        glowColor: "rgba(168, 85, 247, 0.15)"
    },
    {
        num: "04",
        title: "AI + Human Ideation",
        desc: "Leveraging structured AI prompting along with human intuition and paper sketching to brainstorm rapid design variations.",
        tasks: ["AI Prompting", "Rapid Sketching", "Concept Validation"],
        icon: Sparkles,
        color: "text-emerald-500",
        bgColor: "bg-emerald-500/10",
        borderColor: "border-emerald-500/20",
        glowColor: "rgba(16, 185, 129, 0.15)"
    },
    {
        num: "05",
        title: "Design & Prototype",
        desc: "Creating high-fidelity, grid-perfect UI components and interactive Figma prototypes mapped to a modular design system.",
        tasks: ["UI Design System", "High-Fi Mockups", "Figma Prototyping"],
        icon: Layers,
        color: "text-indigo-500",
        bgColor: "bg-indigo-500/10",
        borderColor: "border-indigo-500/20",
        glowColor: "rgba(99, 102, 241, 0.15)"
    },
    {
        num: "06",
        title: "Validate & Refine",
        desc: "Running usability tests, analyzing completion rates, and iterating to guarantee zero friction points before code handoff.",
        tasks: ["Usability Testing", "Telemetry Audit", "Layout Iteration"],
        icon: CheckCircle,
        color: "text-pink-500",
        bgColor: "bg-pink-500/10",
        borderColor: "border-pink-500/20",
        glowColor: "rgba(236, 72, 153, 0.15)"
    },
    {
        num: "07",
        title: "Build & Launch",
        desc: "Conducting spec audits with developers, checking WCAG compliance levels, and releasing clean production bundles.",
        tasks: ["Developer Handoff", "WCAG Accessibility Check", "Launch Support"],
        icon: Rocket,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10",
        borderColor: "border-amber-500/20",
        glowColor: "rgba(245, 158, 11, 0.15)"
    },
    {
        num: "08",
        title: "Measure & Optimize",
        desc: "Tracking behavioral events, heatmaps, and post-launch analytics to run systematic A/B optimizations.",
        tasks: ["A/B Testing", "Behavior Analytics", "Continuous Optimization"],
        icon: TrendingUp,
        color: "text-rose-500",
        bgColor: "bg-rose-500/10",
        borderColor: "border-rose-500/20",
        glowColor: "rgba(244, 63, 94, 0.15)"
    }
];

export function ProcessFlow() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIdx, setActiveIdx] = useState(0);

    // Scroll progress configurations over the entire height of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Spring smooth scroll progression for 60fps performance
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    const lastScrollY = useRef(0);

    // Clean up scrollSnapType on unmount
    useEffect(() => {
        return () => {
            document.documentElement.style.scrollSnapType = "";
        };
    }, []);

    // Update active step index and manage dynamic scroll snap based on scroll depth & direction
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const direction = currentScrollY > lastScrollY.current ? "down" : "up";
            lastScrollY.current = currentScrollY;

            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                const totalHeight = containerRef.current.offsetHeight;
                const stickyHeight = window.innerHeight;

                const scrolledAmount = -rect.top;
                const maxScroll = totalHeight - stickyHeight;
                const progress = maxScroll > 0 ? Math.min(Math.max(scrolledAmount / maxScroll, 0), 1) : 0;

                const step = Math.min(
                    Math.floor(progress * STEPS.length),
                    STEPS.length - 1
                );
                setActiveIdx(step);

                // Disable snapping:
                // 1. If scrolling up at step 0
                // 2. If scrolling down at step N-1
                // 3. If progress is out of the cards zone (progress < 0.05 or progress > 0.95)
                const isAtStartAndScrollingUp = step === 0 && direction === "up";
                const isAtEndAndScrollingDown = step === STEPS.length - 1 && direction === "down";
                const isOutOfRange = progress <= 0.05 || progress >= 0.95;

                if (isAtStartAndScrollingUp || isAtEndAndScrollingDown || isOutOfRange) {
                    document.documentElement.style.scrollSnapType = "";
                } else {
                    document.documentElement.style.scrollSnapType = "y mandatory";
                }
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const N = STEPS.length;
    const startPad = 0.12;
    const endPad = 0.82;
    const scrollRange = endPad - startPad;

    const handleDotClick = (idx: number) => {
        if (!containerRef.current) return;
        const containerTop = containerRef.current.getBoundingClientRect().top + window.scrollY;
        const scrollableRange = containerRef.current.offsetHeight - window.innerHeight;
        const center = startPad + (idx / (N - 1)) * scrollRange;
        const targetY = containerTop + center * scrollableRange;
        window.scrollTo({
            top: targetY,
            behavior: "smooth"
        });
    };

    return (
        /* The container determines the total scroll length. 8 steps = 1000vh for comfortable and slow vertical storytelling. */
        <div ref={containerRef} className="relative h-[1000vh] bg-canvas border-b border-neutral-200/50 dark:border-white/5 z-20">
            {/* Snap anchors positioned at the exact centers of card animation states */}
            <div className="absolute inset-0 pointer-events-none">
                {STEPS.map((_, idx) => {
                    const progress = startPad + (idx / (N - 1)) * scrollRange;
                    return (
                        <div 
                            key={idx} 
                            style={{ 
                                position: "absolute",
                                top: `${progress * 100}%`,
                                height: "1px",
                                width: "100%",
                                scrollSnapAlign: "start",
                                scrollSnapStop: "always"
                            }} 
                        />
                    );
                })}
            </div>
            {/* Sticky screen container */}
            <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-12 md:py-16 overflow-hidden">
                
                {/* Header Section */}
                <div className="container mx-auto px-6 max-w-4xl shrink-0">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
                        <div>
                            <span className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-[0.08em] text-blush mb-2">
                                <span className="w-4 h-[3px] bg-blush rounded-[2px]" />
                                Methodology
                            </span>
                            <h2 className="text-3xl md:text-5xl font-extralight tracking-tight text-neutral-900 dark:text-white font-outfit">
                                The Design Process
                            </h2>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-neutral-400 font-outfit">
                            <span>Scroll to advance flow</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-blush animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Vertical Storytelling Card Viewport */}
                <div className="relative flex-1 w-full flex items-center justify-center px-6">
                    <div className="relative w-full max-w-4xl h-[420px] md:h-[360px] flex items-center justify-center">
                        {STEPS.map((step, idx) => (
                            <ProcessStepCard
                                key={step.title}
                                step={step}
                                idx={idx}
                                N={N}
                                startPad={startPad}
                                scrollRange={scrollRange}
                                smoothProgress={smoothProgress}
                            />
                        ))}

                         {/* Left Column: Vertical Status Bar Indicator (Visual Cue only, pointer-events-none) */}
                         <div className="absolute left-[-24px] md:left-[-64px] top-1/2 -translate-y-1/2 flex flex-col items-center h-[280px] z-20 pointer-events-none">
                             {/* The vertical track line */}
                             <div className="absolute top-0 bottom-0 w-[2px] bg-neutral-200 dark:bg-neutral-850 rounded-full" />
                             
                             {/* Active progress fill line */}
                             <motion.div 
                                 className="absolute top-0 w-[2px] bg-blush rounded-full"
                                 animate={{
                                     height: `${(activeIdx / (STEPS.length - 1)) * 100}%`
                                 }}
                                 transition={{ duration: 0.35, ease: "easeInOut" }}
                             />
                             
                             {/* Nodes along the line */}
                             <div className="h-full flex flex-col justify-between items-center relative w-6">
                                 {STEPS.map((_, idx) => {
                                     const isPassed = idx <= activeIdx;
                                     const isActive = idx === activeIdx;
                                     
                                     return (
                                         <div
                                             key={idx}
                                             className="relative flex items-center justify-center"
                                         >
                                             {/* Node Dot */}
                                             <motion.div 
                                                 className={cn(
                                                     "w-2 h-2 rounded-full border-2 z-10 transition-all duration-300",
                                                     isPassed 
                                                         ? "bg-white dark:bg-black" 
                                                         : "bg-neutral-350 dark:bg-neutral-800 border-transparent"
                                                 )}
                                                 style={{
                                                     borderColor: isPassed 
                                                         ? (isActive ? "var(--blush)" : "rgba(128,128,128,0.5)") 
                                                         : "transparent",
                                                     boxShadow: isActive ? "0 0 10px var(--blush)" : "none"
                                                 }}
                                                 animate={{
                                                     scale: isActive ? 1.4 : 1
                                                 }}
                                             />
                                         </div>
                                     );
                                 })}
                             </div>
                         </div>

                         {/* Right Column: Interactive Dots Navigation (restored) */}
                         <div className="absolute right-[-24px] md:right-[-48px] top-1/2 -translate-y-1/2 flex flex-col gap-3.5 z-30">
                             {STEPS.map((_, idx) => (
                                 <motion.button
                                     key={idx}
                                     onClick={() => handleDotClick(idx)}
                                     className="w-3 rounded-full bg-neutral-300 dark:bg-neutral-800 hover:bg-neutral-400 dark:hover:bg-neutral-700 transition-colors focus:outline-none cursor-pointer"
                                     animate={{
                                         height: idx === activeIdx ? 28 : 12
                                     }}
                                     style={{
                                         backgroundColor: idx === activeIdx ? "var(--blush)" : undefined
                                     }}
                                     transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                     title={`Go to Phase ${idx + 1}`}
                                 />
                             ))}
                         </div>
                    </div>
                </div>

                {/* Footer Section (loop context only) */}
                <div className="container mx-auto px-6 max-w-4xl shrink-0 mt-6 flex flex-col items-center gap-4">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-blush/5 dark:bg-blush/[0.02] border border-blush/20 dark:border-blush/10 shadow-sm">
                        <RotateCw className="w-4 h-4 text-blush animate-[spin_8s_linear_infinite]" />
                        <span className="text-[11px] font-bold font-outfit text-neutral-700 dark:text-neutral-300 uppercase tracking-wide">
                            Continuous Learning Loop feeds post-launch data back to Phase 01
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface ProcessStepCardProps {
    step: typeof STEPS[number];
    idx: number;
    N: number;
    startPad: number;
    scrollRange: number;
    smoothProgress: MotionValue<number>;
}

function ProcessStepCard({
    step,
    idx,
    N,
    startPad,
    scrollRange,
    smoothProgress,
}: ProcessStepCardProps) {
    const IconComponent = step.icon;

    // Calculate overlapping scroll ranges for each card
    const center = startPad + (idx / (N - 1)) * scrollRange;
    const halfWidth = (scrollRange / (N - 1)) * 0.6; // 0.6 multiplier creates the overlap handoff

    // Plateau/Snapping boundaries (t1 to t2 is the resting snap state)
    const t0 = center - halfWidth;
    const t1 = center - halfWidth * 0.4;
    const t2 = center + halfWidth * 0.4;
    const t3 = center + halfWidth;

    // Coordinate boundary overwrites
    const inputRange = [t0, t1, t2, t3];
    const yCoords = [60, 0, 0, -60];
    const opacityCoords = [0, 1, 1, 0];
    const scaleCoords = [0.95, 1, 1, 0.95];

    if (idx === 0) {
        inputRange[0] = 0;
        inputRange[1] = 0;
    }
    if (idx === N - 1) {
        inputRange[2] = 1;
        inputRange[3] = 1;
    }

    // Transforms driven by scroll progress
    const y = useTransform(smoothProgress, inputRange, yCoords);
    const opacity = useTransform(smoothProgress, inputRange, opacityCoords);
    const scale = useTransform(smoothProgress, inputRange, scaleCoords);

    const colorMap: Record<string, string> = {
        "text-orange-500": "#f97316",
        "text-blue-500": "#3b82f6",
        "text-purple-500": "#a855f7",
        "text-emerald-500": "#10b981",
        "text-indigo-500": "#6366f1",
        "text-pink-500": "#ec4899",
        "text-amber-500": "#f59e0b",
        "text-rose-500": "#f43f5e"
    };
    const borderGradientColor = colorMap[step.color] || "#ff9e00";

    return (
        <motion.div
            style={{ y, opacity, scale, zIndex: idx }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
        >
            {/* Glassmorphic storytelling card with dropshadow */}
            <div 
                className="bg-white/80 dark:bg-black/75 backdrop-blur-xl rounded-[24px] p-8 md:p-12 flex flex-col justify-between w-full h-full relative overflow-hidden group shadow-[0_30px_70px_rgba(0,0,0,0.03)] dark:shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
                style={{
                    boxShadow: `0 20px 50px -10px ${step.glowColor || "rgba(0,0,0,0.05)"}`
                }}
            >
                {/* Moving Gradient Border Overlay */}
                <div className="absolute inset-0 rounded-[24px] pointer-events-none p-[1.5px] overflow-hidden z-0">
                    <motion.div 
                        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%]"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        style={{
                            background: `conic-gradient(from 0deg, transparent 45%, ${borderGradientColor} 55%, transparent 100%)`
                        }}
                    />
                    {/* Mask to let only border show */}
                    <div className="absolute inset-[1.5px] rounded-[22.5px] bg-white dark:bg-canvas z-0" />
                </div>

                <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-10 h-full relative z-10">
                    {/* Left Column: Icon and Step Metadata */}
                    <div className="flex flex-row md:flex-col justify-between md:justify-start items-center md:items-start gap-4 shrink-0 w-full md:w-auto">
                        <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border", step.bgColor, step.borderColor)}>
                            <IconComponent className={cn("w-7 h-7", step.color)} />
                        </div>
                        <div className="md:mt-4">
                            <span className="text-[10px] font-bold text-neutral-400 tracking-[0.2em] font-outfit uppercase">
                                Phase {step.num} of 0{N}
                            </span>
                            <div className="text-xs font-bold text-blush font-outfit mt-0.5">
                                Active Stage
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Large Heading & Supporting Description */}
                    <div className="flex-1 flex flex-col justify-start h-full">
                        <div>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black font-outfit text-neutral-900 dark:text-white leading-tight tracking-tight mb-3">
                                {step.title}
                            </h3>
                            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 font-serif leading-relaxed">
                                {step.desc}
                            </p>
                        </div>

                        {/* Horizontal Task Chips */}
                        <div className="flex flex-wrap gap-2.5 mt-4 shrink-0">
                            {step.tasks.map((task) => (
                                <span 
                                    key={task}
                                    className="px-3 py-1.5 rounded-xl bg-neutral-50 dark:bg-neutral-900/60 text-[10px] font-bold tracking-wider text-neutral-500 dark:text-neutral-400 uppercase font-outfit border border-neutral-200/20 dark:border-white/5"
                                >
                                    {task}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Background gradient overlay */}
                <div 
                    className="absolute -right-20 -bottom-20 w-44 h-44 rounded-full opacity-10 blur-3xl pointer-events-none group-hover:opacity-20 transition-opacity"
                    style={{ backgroundColor: step.color.replace("text-", "") }}
                />
            </div>
        </motion.div>
    );
}
