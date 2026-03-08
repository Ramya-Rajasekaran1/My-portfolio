"use client";

import { motion } from "framer-motion";
import { MessageSquare, Activity, Minus, X, Quote, Star, Zap } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { useState } from "react";

const repeatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-40 bg-[var(--background)] relative border-t-8 border-black overflow-hidden">
            <div className="container mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-end gap-12 pb-12 border-b-8 border-black"
                >
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="p-2 bg-black text-white shadow-[6px_6px_0_var(--posthog-orange)]">
                                <Activity className="w-8 h-8 group-hover:rotate-180 transition-transform" />
                            </div>
                            <span className="tech-label tracking-[0.4em]">PEER VALIDATION</span>
                        </div>
                        <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                            Collaborator<br />Insights
                        </h2>
                        <p className="text-zinc-600 font-bold text-xl max-w-xl uppercase tracking-tighter leading-tight italic">
                            Analyzing professional verification logs and strategic industry recognition streams.
                        </p>
                    </div>
                </motion.div>
            </div>

            <div
                className="flex gap-10 overflow-hidden relative group py-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Scrolling Marquee */}
                <motion.div
                    className="flex gap-10 whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: isHovered ? 0 : "-50%" }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {repeatedTestimonials.map((item, idx) => (
                        <motion.div
                            key={`${item.id}-${idx}`}
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: (idx % testimonials.length) * 0.1 }}
                        >
                            <LogWindow item={item} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Left/Right Glass Overlays */}
                <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[var(--background)] via-[var(--background)]/90 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[var(--background)] via-[var(--background)]/90 to-transparent z-10 pointer-events-none" />
            </div>

            {/* Designer's Connection Prompt */}
            <div className="container mx-auto px-6 mt-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                    whileHover={{ x: 20, backgroundColor: "var(--posthog-orange)" }}
                    className="p-10 bg-white border-4 border-black shadow-[20px_20px_0px_rgba(0,0,0,0.05)] cursor-none group transition-all"
                >
                    <div className="flex items-center justify-between font-black text-sm uppercase tracking-[0.4em]">
                        <div className="flex items-center gap-6">
                            <div className="w-4 h-4 bg-black rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)]" />
                            <span className="text-black">CONNECT FOR STRATEGIC PARTNERSHIP</span>
                        </div>
                        <div className="flex items-center gap-4 opacity-30 group-hover:opacity-100 transition-opacity">
                            <Zap className="w-6 h-6 animate-pulse" />
                            <span>READY FOR COLLABORATION</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

function LogWindow({ item }: { item: Testimonial }) {
    return (
        <div className="w-[580px] os-card bg-white border-4 border-black flex-shrink-0 flex flex-col hover:shadow-[30px_30px_0px_rgba(247,165,1,0.1)] transition-all duration-700 group">
            {/* Window Title Bar */}
            <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                <div className="flex items-center gap-5">
                    <MessageSquare className="w-5 h-5 text-[var(--posthog-orange)]" />
                    <span className="font-black tracking-[0.3em] text-[11px]">INSIGHT ID {item.id}</span>
                </div>
                <div className="flex items-center gap-4 opacity-20">
                    <Minus className="w-4 h-4" />
                    <X className="w-5 h-5 group-hover:text-[var(--posthog-orange)] group-hover:opacity-100 transition-all cursor-none" />
                </div>
            </div>

            {/* Window Content */}
            <div className="p-12 space-y-10 flex-grow flex flex-col justify-between">
                <div className="relative">
                    <div className="absolute -top-6 -left-6 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                        <Quote className="w-20 h-20" />
                    </div>
                    <div className="flex items-center gap-3 mb-8">
                        <Star className="w-5 h-5 text-[var(--posthog-orange)] animate-spin-slow" />
                        <span className="tech-label text-black/40 tracking-[0.4em]">VERIFIED SOURCE</span>
                    </div>
                    <p className="text-3xl text-zinc-900 font-black leading-[1.1] whitespace-normal uppercase tracking-tighter italic group-hover:text-black transition-colors">
                        &ldquo;{item.text}&rdquo;
                    </p>
                </div>

                <div className="flex items-center gap-8 pt-10 mt-auto border-t-4 border-black/5">
                    <div className="w-20 h-20 bg-black text-white border-4 border-black flex items-center justify-center font-black text-4xl group-hover:bg-[var(--posthog-orange)] group-hover:text-black transition-all shadow-[10px_10px_0_rgba(0,0,0,0.1)]">
                        {item.name.charAt(0)}
                    </div>
                    <div className="space-y-3">
                        <h4 className="text-3xl font-black uppercase tracking-tighter text-black leading-none">{item.name}</h4>
                        <div className="flex items-center gap-3 tech-label tracking-[0.2em] opacity-40">
                            {item.role} @ <span className="text-black font-black underline decoration-[var(--posthog-orange)] decoration-4">{item.company}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
