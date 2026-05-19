"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, LayoutGroup, useSpring } from "framer-motion";
import { Calendar, Users, ShoppingCart, Package } from "lucide-react";
import { SpiralGlobe } from "@/components/ui/spiral-globe";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    const achievements = [
        {
            icon: Calendar,
            value: "5+",
            label: "Years Experience",
            color: "text-purple-600",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            icon: Users,
            value: "1M+",
            label: "Users Reached",
            color: "text-indigo-600",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20"
        },
        {
            icon: ShoppingCart,
            value: "70K+",
            label: "Ecomm Redesign",
            color: "text-purple-700",
            bgColor: "bg-purple-600/10",
            borderColor: "border-purple-600/20"
        },
        {
            icon: Package,
            value: "3.2M",
            label: "Tracking Platform Redesign",
            color: "text-indigo-700",
            bgColor: "bg-indigo-600/10",
            borderColor: "border-indigo-600/20"
        }
    ];

    const skills = [
        { name: "Ux Research", color: "bg-blue-400" },
        { name: "Prototyping", color: "bg-purple-400" },
        { name: "Usability Testing", color: "bg-indigo-400" },
        { name: "Design Strategy", color: "bg-cyan-400" },
        { name: "Design Systems", color: "bg-violet-400" },
        { name: "Accessibility", color: "bg-pink-400" },
        { name: "Figma", color: "bg-blue-500" },
        { name: "AI Inclusivity Advocate", color: "bg-orange-400" },
        { name: "Ai Tools", color: "bg-yellow-400" },
        { name: "Human-Centered Design", color: "bg-emerald-400" },
    ];

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    // Smooth out the raw scroll progress to prevent "snapping" from jumpy scroll inputs
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const revealProgress = useTransform(smoothProgress, [0, 0.65], [0, 1]);

    useMotionValueEvent(revealProgress, "change", (latest) => {
        // Higher threshold so the layout shift feels intentional, not like a hair-trigger "snap"
        if (latest > 0.15 && !hasScrolled) setHasScrolled(true);
        if (latest < 0.1 && hasScrolled) setHasScrolled(false);
    });

    const expandableMaxHeight = useTransform(revealProgress, [0.15, 0.9], ["0px", "1000px"]);

    const bioOpacity = useTransform(revealProgress, [0.1, 0.3], [0, 1]);
    const bioY = useTransform(revealProgress, [0.1, 0.3], [20, 0]);
    const bioBlur = useTransform(revealProgress, [0.1, 0.3], [8, 0]);
    const imageScale = useTransform(revealProgress, [0.1, 0.3], [0.95, 1]);

    const statsOpacity = useTransform(revealProgress, [0.3, 0.55], [0, 1]);
    const statsY = useTransform(revealProgress, [0.3, 0.55], [20, 0]);
    const statsBlur = useTransform(revealProgress, [0.3, 0.55], [8, 0]);

    const skillsCardOpacity = useTransform(revealProgress, [0.5, 0.75], [0, 1]);
    const skillsCardY = useTransform(revealProgress, [0.5, 0.75], [20, 0]);

    const globeOpacity = useTransform(revealProgress, [0, 1], [1, 1]);
    const globeScale = useTransform(revealProgress, [0, 1], [1, 1]);

    const scrollIndicatorOpacity = useTransform(revealProgress, [0, 0.1], [1, 0]);

    const nameTagVariants = {
        hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 15, opacity: 0, filter: "blur(4px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section ref={sectionRef} className="min-h-[220vh] relative">
            <div className="sticky top-0 min-h-screen flex items-center justify-center px-4 pt-20 md:pt-32 pb-12 relative overflow-hidden">

                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={nameTagVariants}
                    className="max-w-6xl w-full p-4 md:py-8 md:px-10 rounded-3xl md:rounded-[2.5rem] border border-white/10 dark:border-white/[0.05] shadow-2xl bg-white/5 dark:bg-black/[0.1] backdrop-blur-2xl relative overflow-hidden z-10"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent pointer-events-none rounded-[inherit]" />

                    <div className="relative z-10 w-full">
                        {/* Desktop Absolute Image */}
                        <motion.div 
                            style={{ opacity: bioOpacity, scale: imageScale }}
                            className="hidden md:flex absolute top-8 left-8 w-[26rem] h-[340px]"
                        >
                            <div className="w-full h-full relative rounded-2xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm">
                                <img 
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/profile.jpg`}
                                    alt="Ramya Rajasekaran"
                                    className="w-full h-full object-cover object-[20%_center] absolute inset-0"
                                />
                            </div>
                        </motion.div>

                        <LayoutGroup>
                            <div className="flex flex-col">
                                <motion.div
                                    layout
                                    transition={{
                                        layout: { type: "spring", stiffness: 80, damping: 20, mass: 1.2 },
                                    }}
                                    className={cn(
                                        "flex gap-4 md:gap-6",
                                        hasScrolled
                                            ? "flex-col md:flex-row md:items-start md:pl-[30rem] text-left"
                                            : "flex-col items-center text-center"
                                    )}
                                >
                                    <motion.div layout>
                                        <motion.div
                                            variants={itemVariants}
                                            layout
                                            className={cn(
                                                "rounded-2xl md:rounded-3xl flex items-center justify-center relative shrink-0 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 p-2 shadow-sm",
                                                hasScrolled ? "w-12 h-12 md:w-20 md:h-20" : "w-20 h-20 md:w-32 md:h-32"
                                            )}
                                        >
                                            <img
                                                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/logo.png`}
                                                alt="Logo"
                                                className="w-full h-full object-contain brightness-110 dark:brightness-100 block"
                                            />
                                        </motion.div>
                                        </motion.div>

                                    <motion.div
                                        layout
                                        variants={itemVariants}
                                        className={cn(
                                            "flex flex-col",
                                            hasScrolled ? "gap-0.5 items-start" : "gap-2 items-center"
                                        )}
                                    >
                                        <motion.h1
                                            layout
                                            className="text-2xl md:text-5xl font-extralight tracking-tight text-neutral-900 dark:text-ivory leading-none font-outfit"
                                        >
                                            Ramya Rajasekaran
                                        </motion.h1>
                                        <motion.p
                                            layout
                                            className="text-[13px] md:text-lg leading-tight font-bold font-outfit text-blush-text dark:text-blush tracking-[0.1em]"
                                        >
                                            UX design specialist
                                        </motion.p>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </LayoutGroup>

                        <motion.div style={{ maxHeight: expandableMaxHeight, overflow: "hidden" }}>
                            {/* Mobile Image */}
                            <motion.div 
                                style={{ opacity: bioOpacity }}
                                className="flex md:hidden w-full flex-col h-72 pt-4"
                            >
                                <div className="w-full flex-1 relative rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm">
                                    <img 
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/profile.jpg`}
                                        alt="Ramya Rajasekaran"
                                        className="w-full h-full object-cover object-[20%_center] absolute inset-0"
                                    />
                                </div>
                            </motion.div>

                            <div className="flex flex-col gap-4 md:gap-6 pt-4 md:pt-6 pb-2 md:pl-[30rem] md:min-h-[240px]">
                                <motion.div
                                    style={{ opacity: bioOpacity, y: bioY, filter: useTransform(bioBlur, (v) => `blur(${v}px)`) }}
                                    className="w-full text-left"
                                >
                                    <p className="text-[14px] md:text-lg text-neutral-900 dark:text-white leading-relaxed font-light">
                                        UX Designer with experience leading end-to-end process across <span className="font-medium dark:text-white">aviation, e-commerce, supply chain, B2B, B2C</span>. I design award-winning solutions and have published research on <span className="font-medium dark:text-white">Designing for Inclusivity in the Age of AI</span>, at IEEE and Industry case study at IndiaHCI.
                                    </p>
                                </motion.div>

                                <motion.div
                                    style={{ opacity: statsOpacity, y: statsY, filter: useTransform(statsBlur, (v) => `blur(${v}px)`) }}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 w-full"
                                >
                                    {achievements.map((achievement) => (
                                        <motion.div
                                            key={achievement.label}
                                            whileHover={{ y: -5 }}
                                            className="group p-3 md:p-4 rounded-xl md:rounded-2xl bg-blue-955/20 dark:bg-blue-955/40 border border-blue-950/10 dark:border-white/[0.05] flex flex-col items-start transition-colors hover:bg-blush/40 dark:hover:bg-blue-950/60 backdrop-blur-sm"
                                        >
                                            <div className="space-y-2 md:space-y-3 font-outfit w-full">
                                                {/* Stat Values: Navy in Light Mode */}
                                                <p className="text-xl md:text-2xl font-black text-blue-950 dark:text-ivory leading-none">{achievement.value}</p>
                                                <p className="text-[12px] md:text-[14px] capitalize tracking-widest font-black text-blue-950/70 dark:text-blush">{achievement.label}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Skills Section */}
                            <motion.div
                                style={{ opacity: skillsCardOpacity, y: skillsCardY }}
                                className="pt-4 md:pt-6 border-t border-neutral-200 dark:border-white/10 mt-4 w-full"
                            >
                                <div className="flex flex-wrap justify-start gap-1.5 md:gap-2.5 w-full">
                                    {skills.map((skill, idx) => (
                                        <motion.div
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: hasScrolled ? 1 : 0, scale: hasScrolled ? 1 : 0.9 }}
                                            transition={{ delay: 0.1 + idx * 0.05 }}
                                            className="flex items-center gap-1.5 md:gap-2 px-2 md:px-3 py-1 md:py-1.5 bg-white dark:bg-white/10 border border-neutral-200 dark:border-white/10 rounded-full shadow-sm"
                                        >
                                            <div className={cn("w-1 md:w-1.5 h-1 md:h-1.5 rounded-full", skill.color)} />
                                            <span className="text-[10px] md:text-[11px] font-black tracking-widest text-black dark:text-ivory uppercase">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        style={{ opacity: globeOpacity, scale: globeScale }}
                        className="absolute bottom-[-10%] right-[-10%] md:bottom-[-20%] md:right-[-15%] pointer-events-none translate-x-1/4 translate-y-1/4 scale-75 md:scale-110 opacity-25 dark:opacity-20"
                    >
                        <SpiralGlobe />
                    </motion.div>
                </motion.div>

                <motion.div
                    style={{ opacity: scrollIndicatorOpacity }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-[11px] font-outfit uppercase tracking-[0.2em] text-neutral-900 dark:text-neutral-500 font-medium">
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 rounded-full border-2 border-neutral-900 dark:border-neutral-600 flex items-start justify-center pt-1.5"
                    >
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-1.5 rounded-full bg-neutral-900 dark:bg-purple-500"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
