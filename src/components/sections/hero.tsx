"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center pt-32 px-6 relative bg-[var(--background)] overflow-hidden">
            {/* Soft Ambient Background Elements */}
            <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-zinc-200/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[var(--posthog-orange)]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto max-w-7xl relative z-10">
                <div className="flex flex-col gap-12 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="flex items-center gap-4"
                    >
                        <div className="w-12 h-[1px] bg-zinc-400" />
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-500">Portfolio 2024—2025</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                        className="font-serif text-6xl md:text-8xl lg:text-[110px] leading-[0.9] tracking-tight text-black"
                    >
                        Crafting intuitive <br className="hidden md:block" />
                        experiences for <br className="hidden md:block" />
                        <span className="italic text-zinc-400 font-serif">human</span> scale.
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="flex flex-col md:flex-row gap-12 mt-8 md:mt-20 items-start md:items-center"
                    >
                        <p className="font-sans text-lg md:text-xl text-zinc-500 max-w-md leading-relaxed">
                            Lead UX Architect specializing in turning complex, high-stakes domains into effortless digital products used by millions.
                        </p>

                        <div className="flex-1 w-full flex justify-start md:justify-end">
                            <motion.a
                                href="/work"
                                className="group flex items-center gap-6 px-8 py-4 border border-black/10 rounded-full hover:bg-[#111] hover:text-white transition-all duration-500"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <span className="font-sans text-sm font-medium uppercase tracking-widest">Explore Archive</span>
                                <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                                    <ArrowDownRight className="w-4 h-4 text-black group-hover:text-white transition-colors" />
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Editorial Image Accent */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                className="absolute right-[5%] top-[25%] hidden lg:block w-[350px] aspect-[3/4] z-0"
            >
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl mix-blend-multiply border border-black/5 opacity-40">
                    <Image
                        src="/images/brand/logo.png"
                        alt="Editorial Accent"
                        fill
                        className="object-cover object-center grayscale opacity-20"
                    />
                </div>
            </motion.div>
        </section>
    );
}
