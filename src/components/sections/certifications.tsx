"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";

interface Certification {
    title: string;
    company: string;
    date: string;
    color: string;
}

const certifications: Certification[] = [
    {
        title: "User-Centered Design Advocate",
        company: "Boeing",
        date: "Nov 2024",
        color: "bg-gradient-to-br from-[#0033a0] to-[#001f61]"
    },
    {
        title: "GenAI for UX Designers",
        company: "Coursera",
        date: "Jun 2025",
        color: "bg-gradient-to-br from-[#0056d2] to-[#003d94]"
    },
    {
        title: "XGAL0001 - UI/UX Design for AI Products",
        company: "Stanford Online",
        date: "Sep 2025",
        color: "bg-gradient-to-br from-[#8c1515] to-[#5d0e0e]"
    },
    {
        title: "Foundations of UX Design",
        company: "Google",
        date: "Jan 2023",
        color: "bg-gradient-to-br from-[#4285F4] to-[#1a73e8]"
    },
    {
        title: "Enterprise Design Thinking Practitioner",
        company: "IBM",
        date: "Jun 2020",
        color: "bg-gradient-to-br from-[#052FAD] to-[#001D6C]"
    },
    {
        title: "Accessibility for Web Design",
        company: "LinkedIn",
        date: "Nov 2025",
        color: "bg-gradient-to-br from-[#0077b5] to-[#005c8c]"
    },
    {
        title: "Design Thinking in the Age of AI",
        company: "LinkedIn",
        date: "Jun 2025",
        color: "bg-gradient-to-br from-[#0a66c2] to-[#004182]"
    }
];

export function Certifications() {
    return (
        <section className="pt-6 md:pt-24 pb-24 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Header Content */}
                    <div className="lg:col-span-3 space-y-4 md:space-y-8 md:sticky md:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blush/30 border border-blush/40 text-blush-text dark:text-blush text-[12px] font-black uppercase tracking-widest mb-8 md:mb-6">
                                <Award className="w-3 h-3" />
                                Professional Growth
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extralight mb-4 md:mb-6 tracking-tight text-neutral-900 dark:text-white leading-tight md:leading-[0.9]">
                                Continuous <br />Learning
                            </h2>
                            <p className="text-neutral-600 dark:text-white/80 text-base font-sans leading-relaxed max-w-xs font-light">
                                I believe in the power of continuous learning to stay ahead in the rapidly evolving design landscape, especially at the intersection of UX and AI.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bento Grid - Reduced height using a slimmer aspect ratio */}
                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {certifications.map((cert, index) => {
                                return (
                                    <motion.div
                                        key={cert.title}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.05,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        whileHover={{ y: -5 }}
                                        className={`group relative aspect-[1.1/1] md:aspect-[1.8/1] rounded-xl p-3 md:p-4 shadow-sm border border-neutral-200 dark:border-white/5 ${cert.color} overflow-hidden flex flex-col justify-center`}
                                    >
                                        <div className="flex flex-col gap-3 relative z-10">
                                            <h3 className="text-sm md:text-[15px] font-black text-white leading-tight tracking-tight drop-shadow-md line-clamp-2">
                                                {cert.title}
                                            </h3>
                                            <div className="flex justify-between items-end">
                                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/90 drop-shadow-md">
                                                    {cert.company}
                                                </p>
                                                <p className="text-[9px] font-extrabold text-white/40 tracking-wider">
                                                    {cert.date}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Brand Glows - Scaled down for smaller height */}
                                        <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full blur-[25px] pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />

                                        {/* Mild Noise Effect */}
                                        <div
                                            className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                                backgroundRepeat: "repeat",
                                            }}
                                        />
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
