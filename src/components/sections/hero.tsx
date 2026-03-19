"use client";

import { motion, useScroll, useTransform, useMotionValueEvent, LayoutGroup } from "framer-motion";
import { Calendar, Users, DollarSign, Package } from "lucide-react";
import { SpiralGlobe } from "@/components/ui/spiral-globe";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [hasScrolled, setHasScrolled] = useState(false);

    const achievements = [
        {
            icon: Calendar,
            value: "4+",
            label: "Years Experience",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            icon: Users,
            value: "1M+",
            label: "Users Reached",
            color: "text-indigo-500",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20"
        },
        {
            icon: Package,
            value: "3.2M",
            label: "Daily Shipments",
            color: "text-purple-600",
            bgColor: "bg-purple-600/10",
            borderColor: "border-purple-600/20"
        },
        {
            icon: DollarSign,
            value: "$2B",
            label: "Revenue Impact",
            color: "text-indigo-600",
            bgColor: "bg-indigo-600/10",
            borderColor: "border-indigo-600/20"
        }
    ];

    const skills = [
        { name: "UX RESEARCH", color: "bg-blue-400" },
        { name: "PROTOTYPING", color: "bg-purple-400" },
        { name: "USABILITY TESTING", color: "bg-indigo-400" },
        { name: "DESIGN STRATEGY", color: "bg-cyan-400" },
        { name: "DESIGN SYSTEMS", color: "bg-violet-400" },
        { name: "ACCESSIBILITY", color: "bg-pink-400" },
        { name: "FIGMA", color: "bg-blue-500" },
        { name: "GENAI ADVOCATE", color: "bg-orange-400" },
        { name: "AI TOOLS", color: "bg-yellow-400" },
        { name: "HUMAN-CENTERED DESIGN", color: "bg-emerald-400" },
    ];

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    });

    const revealProgress = useTransform(scrollYProgress, [0, 0.35], [0, 1]);

    useMotionValueEvent(revealProgress, "change", (latest) => {
        setHasScrolled(latest > 0.05);
    });

    const expandableMaxHeight = useTransform(revealProgress, [0.05, 0.85], ["0px", "700px"]);

    const bioOpacity = useTransform(revealProgress, [0.1, 0.3], [0, 1]);
    const bioY = useTransform(revealProgress, [0.1, 0.3], [20, 0]);
    const bioBlur = useTransform(revealProgress, [0.1, 0.3], [8, 0]);

    const statsOpacity = useTransform(revealProgress, [0.3, 0.55], [0, 1]);
    const statsY = useTransform(revealProgress, [0.3, 0.55], [20, 0]);
    const statsBlur = useTransform(revealProgress, [0.3, 0.55], [8, 0]);

    const skillsCardOpacity = useTransform(revealProgress, [0.5, 0.75], [0, 1]);
    const skillsCardY = useTransform(revealProgress, [0.5, 0.75], [20, 0]);

    const globeOpacity = useTransform(revealProgress, [0.4, 0.7], [0, 1]);
    const globeScale = useTransform(revealProgress, [0.4, 0.7], [0.5, 1]);

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
        <section ref={sectionRef} className="min-h-[200vh] relative">
            <div className="sticky top-0 min-h-screen flex items-center justify-center px-4 pt-24 md:pt-32 pb-12 relative overflow-hidden">
                
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={nameTagVariants}
                    className="max-w-4xl w-full p-6 md:p-10 rounded-3xl md:rounded-[2.5rem] border border-white/10 dark:border-white/[0.05] shadow-2xl bg-white/[0.01] dark:bg-black/[0.02] backdrop-blur-xl relative overflow-hidden z-10"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-none rounded-[inherit]" />
                    <div
                        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.01] pointer-events-none mix-blend-overlay rounded-[inherit]"
                        style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                            backgroundRepeat: "repeat",
                        }}
                    />

                    <div className="relative z-10">
                        <LayoutGroup id="hero-main">
                        <div className="flex flex-col">
                            {/* Stabilized Layout Container - Fixed Jumpiness by separating alignment and layout */}
                            <motion.div
                                layout
                                transition={{ 
                                    layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
                                }}
                                className={cn(
                                    "flex gap-6 md:gap-10",
                                    hasScrolled
                                        ? "flex-col md:flex-row md:items-start text-left"
                                        : "flex-col items-center text-center"
                                )}
                            >
                                <motion.div layout transition={{ layout: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }}>
                                    <motion.div
                                        variants={itemVariants}
                                        animate={{ y: [-3, 3, -3] }}
                                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                        className={cn(
                                            "rounded-3xl flex items-center justify-center relative shrink-0 bg-white/5 border border-white/10 p-2",
                                            hasScrolled ? "w-16 h-16 md:w-20 md:h-20" : "w-24 h-24 md:w-32 md:h-32"
                                        )}
                                    >
                                        <motion.img
                                            layout
                                            src="/images/brand/logo.png"
                                            alt="Logo"
                                            className="w-full h-full object-contain brightness-110 dark:brightness-100"
                                        />
                                    </motion.div>
                                </motion.div>

                                <motion.div
                                    layout
                                    variants={itemVariants}
                                    className={cn(
                                        "flex flex-col",
                                        hasScrolled ? "gap-1 items-start" : "gap-3 items-center"
                                    )}
                                >
                                    <motion.h1 
                                        layout
                                        className="text-3xl md:text-5xl font-extralight tracking-tight text-neutral-900 dark:text-white leading-none font-outfit"
                                    >
                                        Ramya Rajasekaran
                                    </motion.h1>
                                    <motion.p 
                                        layout
                                        className="text-base md:text-lg leading-tight font-light font-outfit text-purple-600 dark:text-purple-400 tracking-[0.1em]"
                                    >
                                        UX design specialist
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        </div>
                        </LayoutGroup>

                        <motion.div style={{ maxHeight: expandableMaxHeight, overflow: "hidden" }}>
                            <div className="flex flex-col gap-6 md:gap-8 pt-6 md:pt-8 pb-4">
                                <motion.div
                                    style={{ opacity: bioOpacity, y: bioY, filter: useTransform(bioBlur, (v) => `blur(${v}px)`) }}
                                    className="max-w-3xl text-left"
                                >
                                    <p className="text-base md:text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed font-light">
                                        UX Designer with experience leading end-to-end process across <span className="font-medium">aviation, e-commerce, supply chain, B2B, B2C</span>. I design award-winning solutions and have published research on GenAI Accessibility, at IEEE and Industry case study at IndiaHCI.
                                    </p>
                                </motion.div>

                                <motion.div
                                    style={{ opacity: statsOpacity, y: statsY, filter: useTransform(statsBlur, (v) => `blur(${v}px)`) }}
                                    className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
                                >
                                    {achievements.map((achievement) => (
                                        <motion.div
                                            key={achievement.label}
                                            whileHover={{ y: -5 }}
                                            className="p-4 rounded-2xl bg-white/5 dark:bg-white/[0.02] border border-white/10 dark:border-white/[0.05] flex flex-col items-start gap-1 transition-colors hover:bg-white/[0.08] dark:hover:bg-white/[0.05]"
                                        >
                                            <div className="space-y-0.5 font-outfit">
                                                <p className="text-xl font-bold text-neutral-900 dark:text-white drop-shadow-md leading-none">{achievement.value}</p>
                                                <p className="text-[10px] uppercase tracking-widest font-bold text-neutral-500 dark:text-purple-300/80 drop-shadow-sm">{achievement.label}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Skills Section */}
                                <motion.div
                                    style={{ opacity: skillsCardOpacity, y: skillsCardY }}
                                    className="pt-4 border-t border-white/10 dark:border-white/5"
                                >
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, idx) => (
                                            <motion.div
                                                key={skill.name}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: hasScrolled ? 1 : 0, scale: hasScrolled ? 1 : 0.9 }}
                                                transition={{ delay: 0.1 + idx * 0.05 }}
                                                className="flex items-center gap-2 px-3 py-1.5 bg-neutral-900/20 dark:bg-white/10 border border-white/10 rounded-full"
                                            >
                                                <div className={cn("w-1.5 h-1.5 rounded-full", skill.color)} />
                                                <span className="text-[10px] font-bold tracking-widest text-white uppercase">
                                                    {skill.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
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
                    <span className="text-[11px] font-outfit uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500 font-medium">
                        Scroll to explore
                    </span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-8 rounded-full border-2 border-neutral-300 dark:border-neutral-600 flex items-start justify-center pt-1.5"
                    >
                        <motion.div
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1 h-1.5 rounded-full bg-purple-500"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
