"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

export function GenAIFeatured() {
    return (
        <section className="py-24 md:py-32 px-4 bg-neutral-50 dark:bg-neutral-950/50 overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/work/gen_ai_cover.jpg"
                                alt="Designing for Inclusivity in the Age of Generative AI - Research Dashboard"
                                className="w-full h-auto"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                        
                        {/* Floating Badge */}
                        <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-white dark:bg-neutral-900 rounded-2xl px-5 py-4 shadow-xl border border-neutral-200 dark:border-neutral-800">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-[#7effa0]/10">
                                    <BookOpen className="w-5 h-5 text-[#7effa0]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">Published at</p>
                                    <p className="text-sm font-bold text-neutral-900 dark:text-white">IEEE Xplore</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="order-1 lg:order-2"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7effa0]/10 border border-[#7effa0]/20 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#7effa0] animate-pulse" />
                            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#7effa0]">Featured Research</span>
                        </div>

                        <div className="flex items-end justify-between gap-4 mb-6">
                            <div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 dark:text-white leading-tight">
                                    Designing for <span className="text-[#7effa0] italic">Inclusivity</span> in the Age of Generative AI
                                </h2>
                            </div>
                            <Link
                                href="/work/gen-ai-inclusivity"
                                className="hidden lg:inline-flex shrink-0 items-center justify-center gap-3 px-5 py-2.5 bg-[#7effa0] hover:bg-[#6ee890] text-black font-bold text-xs uppercase tracking-widest rounded-full transition-all group mb-2"
                            >
                                Explore case study
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>

                        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                            A futurist UX investigation that benchmarks how inclusive modern generative AI tools are and sketches a blueprint for accessibility-forward experiences. Published at IEEE and IndiaHCI.
                        </p>

                        {/* Key Metrics */}
                        <div className="grid grid-cols-3 gap-4 mb-8">
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-800">
                                <p className="text-2xl font-bold text-[#7effa0]">76</p>
                                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Participants</p>
                            </div>
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-800">
                                <p className="text-2xl font-bold text-[#7effa0]">3</p>
                                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">AI Platforms</p>
                            </div>
                            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 border border-neutral-200 dark:border-neutral-800">
                                <p className="text-2xl font-bold text-[#7effa0]">92%</p>
                                <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Best Completion</p>
                            </div>
                        </div>

                        <div className="lg:hidden">
                            <Link
                                href="/work/gen-ai-inclusivity"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-[#7effa0] hover:bg-[#6ee890] text-black font-bold text-sm uppercase tracking-widest rounded-full transition-all group"
                            >
                                Explore case study
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
