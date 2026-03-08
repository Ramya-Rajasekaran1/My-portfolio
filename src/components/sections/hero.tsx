"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Cpu, Activity, Minus, Square, X, Compass, MousePointer2, Layers, Zap, Star, Globe } from "lucide-react";
import Image from "next/image";

export function Hero() {
    const [isBooted, setIsBooted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsBooted(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 40, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 80,
                damping: 12
            }
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center pt-24 px-6 pb-12 relative overflow-hidden bg-[var(--background)]">
            <div className="absolute inset-0 bg-[radial-gradient(#d1d1d1_1.5px,transparent_0)] [background-size:60px_60px] opacity-40 pointer-events-none" />

            <AnimatePresence mode="wait">
                {!isBooted ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-16 text-center z-50 px-6"
                    >
                        <div className="relative">
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 90, 180, 270, 360],
                                }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="p-10 bg-black text-white shadow-[30px_30px_0_var(--posthog-orange)] relative z-10"
                            >
                                <Compass className="w-20 h-20" />
                            </motion.div>
                            <motion.div
                                animate={{ opacity: [0, 0.5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -inset-8 border-4 border-black/10 origin-center"
                                style={{ borderRadius: "50%" }}
                            />
                        </div>

                        <div className="space-y-10 max-w-lg w-full">
                            <div className="space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="flex justify-between items-center text-[10px] font-black uppercase tracking-[0.5em] text-black/40"
                                >
                                    <span>Studio Engine</span>
                                    <span>V4.0.2</span>
                                </motion.div>
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black leading-none"
                                >
                                    Studio<br />Initialization
                                </motion.h2>
                            </div>

                            <div className="space-y-4">
                                <div className="w-full h-4 bg-black/5 os-border border-black overflow-hidden relative shadow-inner">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 3, ease: [0.65, 0, 0.35, 1] }}
                                        className="h-full bg-black shadow-[20px_0_40px_rgba(0,0,0,0.3)]"
                                    />
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "100%" }}
                                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    />
                                </div>
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-black">
                                    <motion.span
                                        animate={{ opacity: [0.4, 1, 0.4] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                    >
                                        Loading Core Assets...
                                    </motion.span>
                                    <motion.span>
                                        {Math.floor(Math.random() * 100)}%
                                    </motion.span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="desktop"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10"
                    >
                        {/* Main Profile Window */}
                        <motion.div variants={itemVariants} className="lg:col-span-8 flex flex-col gap-12">
                            <Window title="Profile Identity" icon={<Star className="w-4 h-4" />}>
                                <div className="space-y-12">
                                    <div className="flex flex-col md:flex-row gap-12 items-start">
                                        <motion.div
                                            whileHover={{ rotate: -3, scale: 1.1 }}
                                            className="relative w-48 h-48 bg-black p-4 shadow-[15px_15px_0_var(--posthog-orange)] group overflow-hidden"
                                        >
                                            <Image
                                                src="/images/brand/logo.png"
                                                alt="Ramya"
                                                width={192}
                                                height={192}
                                                className="w-full h-full object-contain brightness-0 invert"
                                            />
                                        </motion.div>
                                        <div className="space-y-6">
                                            <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase leading-[0.8] text-black">
                                                Ramya<br />Rajasekaran
                                            </h1>
                                            <div className="flex flex-wrap gap-4 pt-2">
                                                <div className="px-5 py-2 bg-black text-white text-[11px] font-black uppercase tracking-widest shadow-[6px_6px_0_#ccc]">
                                                    Lead UX Architect
                                                </div>
                                                <div className="px-5 py-2 border-2 border-black text-black text-[11px] font-black uppercase tracking-widest bg-white">
                                                    UX Research Specialist
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <motion.div
                                        whileHover={{ x: 10 }}
                                        className="p-10 bg-white os-border border-black shadow-[12px_12px_0_rgba(0,0,0,0.02)] relative overflow-hidden group hover:shadow-[12px_12px_0_var(--posthog-orange)] transition-all"
                                    >
                                        <p className="text-2xl md:text-4xl text-zinc-900 leading-[1] font-bold uppercase tracking-tighter">
                                            Synthesizing intuitive design solutions for <span className="text-black font-black underline decoration-[var(--posthog-orange)] decoration-8 underline-offset-8">Global Scale</span> products across high stakes domains.
                                        </p>
                                    </motion.div>

                                    <div className="flex flex-wrap gap-5">
                                        {["User Experience", "Product Strategy", "Design Systems", "Usability Audit"].map((skill) => (
                                            <motion.div
                                                key={skill}
                                                whileHover={{ y: -8, backgroundColor: "var(--posthog-orange)", boxShadow: "0 20px 0 #000" }}
                                                className="px-8 py-4 bg-white os-border border-black text-[14px] font-black uppercase tracking-widest transition-all cursor-none"
                                            >
                                                {skill}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </Window>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <motion.div variants={itemVariants}>
                                    <Window title="Design Impact" icon={<Zap className="w-4 h-4" />}>
                                        <div className="space-y-10">
                                            <div className="space-y-5">
                                                <div className="flex justify-between items-end">
                                                    <span className="tech-label">PEER RECOGNITION</span>
                                                    <span className="text-4xl font-black tracking-tighter text-[var(--posthog-orange)]">98%</span>
                                                </div>
                                                <div className="h-4 bg-black/5 os-border border-black shadow-inner">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "98%" }}
                                                        transition={{ duration: 2, ease: "circOut" }}
                                                        className="h-full bg-black shadow-[10px_0_20px_rgba(0,0,0,0.2)]"
                                                    />
                                                </div>
                                            </div>
                                            <div className="text-5xl font-black tracking-tighter uppercase leading-none text-black">Portfolio Excellence</div>
                                        </div>
                                    </Window>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Window title="Global Presence" icon={<Globe className="w-4 h-4" />}>
                                        <div className="flex flex-col items-center justify-center py-12 gap-8">
                                            <motion.div
                                                animate={{ scale: [1, 1.1, 1], y: [0, -10, 0] }}
                                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                                className="text-8xl font-black text-black tracking-tighter uppercase leading-none"
                                            >
                                                1.0M+
                                            </motion.div>
                                            <div className="tech-label tracking-[0.4em]">End User Distribution</div>
                                            <div className="w-full h-2 bg-black shadow-[0_10px_20px_rgba(0,0,0,0.1)]" />
                                        </div>
                                    </Window>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* Sidebar */}
                        <motion.div variants={itemVariants} className="lg:col-span-4 space-y-12">
                            <Window title="Portfolio Core">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-center bg-black text-white p-5 os-border border-black shadow-[10px_10px_0_rgba(0,0,0,0.1)]">
                                        <span className="tech-label text-zinc-400">STATUS</span>
                                        <span className="font-black">CORE OPEN</span>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="p-8 bg-[var(--posthog-orange)] border-4 border-black text-black font-black uppercase text-sm tracking-[0.2em] text-center shadow-[10px_10px_0_#000]"
                                    >
                                        Case Study Available
                                    </motion.div>
                                    <div className="flex flex-col gap-4 p-8 bg-white os-border border-black/5 h-60 overflow-hidden opacity-50 select-none">
                                        {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                            <div key={i} className="flex gap-5 text-[11px] font-bold uppercase tracking-widest items-center">
                                                <div className="w-2 h-2 bg-black rounded-full" />
                                                <span>Archival File {i} Verified</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </Window>

                            <motion.div
                                whileHover={{ scale: 1.05, x: 10, y: -10 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[var(--posthog-orange)] text-black p-12 os-border border-black shadow-[20px_20px_0px_#000] cursor-none group transition-all"
                            >
                                <div className="flex items-center justify-between mb-10">
                                    <div className="p-3 bg-black text-white shadow-[6px_6px_0_white]">
                                        <MousePointer2 className="w-8 h-8 group-hover:rotate-45 transition-transform duration-500" />
                                    </div>
                                    <span className="tech-label text-black/40 tracking-[0.3em]">Collaborate</span>
                                </div>
                                <h3 className="text-4xl font-black leading-[0.9] uppercase tracking-tighter">
                                    Build something insane together
                                </h3>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

function Window({ title, children, icon }: { title: string; children: React.ReactNode; icon?: React.ReactNode }) {
    return (
        <div className="os-card bg-white os-glass group transition-all duration-1000 hover:shadow-[30px_30px_0px_rgba(0,0,0,0.03)] border-4 border-black">
            <div className="window-title border-b-4 border-black py-3 px-6">
                <div className="flex items-center gap-5">
                    {icon}
                    <span className="font-black text-[12px] uppercase tracking-[0.4em]">{title}</span>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 border-2 border-white/20" />
                    <X className="w-5 h-5 text-white/40 hover:text-[var(--posthog-orange)] cursor-none transition-all hover:rotate-90" />
                </div>
            </div>
            <div className="p-12">
                {children}
            </div>
        </div>
    );
}
