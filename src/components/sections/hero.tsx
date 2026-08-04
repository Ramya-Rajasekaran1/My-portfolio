"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { AnimatedBlueprintLines } from "@/components/ui/animated-blueprint-lines";

export function Hero() {
    const sectionRef = useRef<HTMLDivElement>(null);

    // Scroll progress listener for the parent container
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    // Spring smooth scroll progression for 60fps performance
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 80,
        damping: 25,
        restDelta: 0.001
    });

    // 1. Title/Header transformations
    const titleY = useTransform(smoothProgress, [0, 0.45], [0, -120]);
    const titleScale = useTransform(smoothProgress, [0, 0.45], [1, 0.85]);
    const titleOpacity = useTransform(smoothProgress, [0, 0.35], [1, 0]);
    const titleBlurValue = useTransform(smoothProgress, [0, 0.32], [0, 12]);
    const titleBlur = useTransform(titleBlurValue, (v) => `blur(${v}px)`);

    // 2. centerpiece Profile Card transformations (slides up, scales in, unblurs)
    const cardY = useTransform(smoothProgress, [0.15, 0.55], [240, 0]);
    const cardScale = useTransform(smoothProgress, [0.15, 0.55], [0.8, 1]);
    const cardOpacity = useTransform(smoothProgress, [0.15, 0.45], [0, 1]);
    const cardBlurValue = useTransform(smoothProgress, [0.15, 0.45], [12, 0]);
    const cardBlur = useTransform(cardBlurValue, (v) => `blur(${v}px)`);

    // 3. Snapping Geometric Alignment Lines (extends on scroll as card enters)
    const lineScaleX = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);
    const lineScaleY = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);

    // 4. Background grid scale & wash opacity transformations
    const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.3]);
    const bgOpacity = useTransform(smoothProgress, [0, 0.5], [0.8, 0.2]);

    // 5. Blueprint lines reveal opacity transformation
    const blueprintOpacity = useTransform(smoothProgress, [0.35, 0.55], [0, 1]);

    return (
        /* The container determines scroll length. Increased to 450vh to make the scroll transition much slower. */
        <section ref={sectionRef} className="relative h-[450vh] bg-canvas">
            {/* Sticky screen container */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">

                {/* Parallax Background Grid & Radial Glow Wash */}
                <motion.div
                    style={{ scale: bgScale, opacity: bgOpacity }}
                    className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] bg-center [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]"
                />
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_50%,var(--blush)_0%,transparent_50%)] opacity-[0.04] dark:opacity-[0.02] blur-3xl" />

                {/* Animated Background Blueprint Coordinates (fades in after card enters) */}
                <AnimatedBlueprintLines opacity={blueprintOpacity} />

                {/* Interactive Stage viewport container */}
                <div className="container mx-auto px-6 max-w-6xl flex items-center justify-center h-full relative">

                    {/* Layer 01: Center-Aligned Large Typography (Visual Intro) */}
                    <motion.div
                        style={{ y: titleY, scale: titleScale, opacity: titleOpacity, filter: titleBlur }}
                        className="flex flex-col items-center justify-center text-center pointer-events-none z-10"
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white dark:bg-black border border-neutral-200/50 dark:border-neutral-800 text-[10px] font-bold font-outfit uppercase tracking-[0.15em] text-blush mb-6 shadow-sm">
                            <div className="w-2.5 h-2.5 rounded-full bg-blush shadow-[0_0_8px_var(--sky-blue)] animate-pulse" />
                            Available for opportunities
                        </div>

                        {/* Large Headline */}
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.0] font-outfit uppercase">
                            Ramya <span className="text-blush italic font-light">Rajasekaran</span>
                        </h1>
                        <p className="text-[20px] md:text-[20px] font-bold font-outfit text-neutral-500 dark:text-neutral-400 tracking-[0.35em] uppercase mt-10 md:mt-14">
                            Senior Product Designer
                        </p>
                    </motion.div>

                    {/* Layer 02: Slide-in Profile card Showcase & CTAs (Revealed on Scroll - MUCH LARGER scale) */}
                    <motion.div
                        style={{ y: cardY, scale: cardScale, opacity: cardOpacity, filter: cardBlur }}
                        className="absolute inset-x-6 flex flex-col items-center justify-center z-20 pointer-events-none"
                    >
                        {/* Card container - expanded to max-w-5xl with generous padding */}
                        <div className="relative max-w-5xl w-full bg-white/75 dark:bg-black/65 border border-neutral-200/40 dark:border-white/5 backdrop-blur-2xl rounded-[32px] p-8 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.03)] dark:shadow-[0_40px_100px_rgba(0,0,0,0.65)] pointer-events-auto flex flex-col md:flex-row gap-10 md:gap-14 items-center">

                            {/* Geometric Snapping Coordinate Lines on both axes (thickened to 2px, with highly vibrant glowing moving lines) */}
                            {/* Top-Left Corner lines */}
                            <motion.div
                                style={{ scaleX: lineScaleX }}
                                className="absolute right-full top-0 w-[50vw] h-[2px] bg-neutral-400 dark:bg-neutral-700 origin-right pointer-events-none z-[-1] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-blush to-transparent"
                                />
                            </motion.div>
                            <motion.div
                                style={{ scaleY: lineScaleY }}
                                className="absolute bottom-full left-0 h-[50vh] w-[2px] bg-neutral-400 dark:bg-neutral-700 origin-bottom pointer-events-none z-[-1] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ y: ["100%", "-200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-x-0 h-48 bg-gradient-to-b from-transparent via-blush to-transparent"
                                />
                            </motion.div>

                            {/* Top-Right Corner lines */}
                            <motion.div
                                style={{ scaleX: lineScaleX }}
                                className="absolute left-full top-0 w-[50vw] h-[2px] bg-neutral-400 dark:bg-neutral-700 origin-left pointer-events-none z-[-1] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                    className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-blush to-transparent"
                                />
                            </motion.div>
                            <motion.div
                                style={{ scaleY: lineScaleY }}
                                className="absolute bottom-full right-0 h-[50vh] w-[2px] bg-neutral-400 dark:bg-neutral-700 origin-bottom pointer-events-none z-[-1] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ y: ["100%", "-200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 0.5 }}
                                    className="absolute inset-x-0 h-48 bg-gradient-to-b from-transparent via-blush to-transparent"
                                />
                            </motion.div>

                            {/* Bottom-Left Corner lines */}
                            <motion.div
                                style={{ scaleX: lineScaleX }}
                                className="absolute right-full bottom-0 w-[50vw] h-[2px] bg-neutral-400 dark:bg-neutral-700 origin-right pointer-events-none z-[-1] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                                    className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-blush to-transparent"
                                />
                            </motion.div>
                            <motion.div
                                style={{ scaleY: lineScaleY }}
                                className="absolute top-full left-0 h-[50vh] w-[2px] bg-neutral-400 dark:bg-neutral-700 origin-top pointer-events-none z-[-1] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ y: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1 }}
                                    className="absolute inset-x-0 h-48 bg-gradient-to-b from-transparent via-blush to-transparent"
                                />
                            </motion.div>

                            {/* Bottom-Right Corner lines */}
                            <motion.div
                                style={{ scaleX: lineScaleX }}
                                className="absolute left-full bottom-0 w-[50vw] h-[2px] bg-neutral-400 dark:bg-neutral-700 origin-left pointer-events-none z-[-1] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ x: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                                    className="absolute inset-y-0 w-48 bg-gradient-to-r from-transparent via-blush to-transparent"
                                />
                            </motion.div>
                            <motion.div
                                style={{ scaleY: lineScaleY }}
                                className="absolute top-full right-0 h-[50vh] w-[2px] bg-neutral-400 dark:bg-neutral-700 origin-top pointer-events-none z-[-1] overflow-hidden"
                            >
                                <motion.div
                                    animate={{ y: ["-100%", "200%"] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                                    className="absolute inset-x-0 h-48 bg-gradient-to-b from-transparent via-blush to-transparent"
                                />
                            </motion.div>

                            {/* Profile centerpiece avatar - Enlarged to w-[300px] h-[300px] */}
                            <div className="relative w-[200px] h-[200px] md:w-[300px] md:h-[300px] shrink-0">
                                <div className="w-full h-full rounded-[24px] p-2 bg-white dark:bg-black border border-neutral-200/20 dark:border-neutral-850 shadow-inner overflow-hidden flex items-center justify-center">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/profile.jpg`}
                                        alt="Ramya Rajasekaran"
                                        className="w-full h-full object-cover object-[20%_center] rounded-[18px]"
                                    />
                                </div>
                            </div>

                            {/* Details and Actions */}
                            <div className="flex-1 flex flex-col gap-5 text-center md:text-left items-center md:items-start">
                                <span className="text-[10px] font-bold font-outfit uppercase tracking-widest text-blush">
                                    UX Lead & Design Researcher
                                </span>
                                <h2 className="text-2xl md:text-3xl font-bold font-outfit text-neutral-900 dark:text-white leading-tight">
                                    Designing human-centered solutions for complex B2B and B2C systems.
                                </h2>
                                <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-serif">
                                    UX Lead with extensive experience leading end-to-end design lifecycle across <span className="font-semibold text-neutral-900 dark:text-white">aviation, e-commerce, supply chain, B2B, and B2C</span> systems. Published researcher on <span className="font-semibold text-neutral-900 dark:text-white">AI Inclusivity</span> at IEEE and speaker at IndiaHCI.
                                </p>

                                {/* Clean Regular Flat Buttons (No Drop Shadow) */}
                                <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
                                    <a
                                        href="#work"
                                        className="bg-blush hover:bg-blush/90 text-white font-bold font-outfit uppercase tracking-widest text-[11px] px-7 py-3.5 rounded-full shadow-none transition-all duration-300 pointer-events-auto"
                                    >
                                        View Case Studies
                                    </a>
                                    <a
                                        href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/contact/`}
                                        className="bg-transparent border border-neutral-300 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900 text-neutral-800 dark:text-neutral-200 font-bold font-outfit uppercase tracking-widest text-[11px] px-7 py-3.5 rounded-full shadow-none transition-all duration-300 pointer-events-auto"
                                    >
                                        Get In Touch
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
