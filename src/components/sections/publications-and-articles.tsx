"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen, FileText, Globe, Star, Zap } from "lucide-react";
import React from "react";

const articles = [
    {
        title: "Ride Sharing",
        description: "Case study of a ride‑sharing app that facilitates seniors to feel confident about moving from one place to another.",
        url: "https://crramya06.medium.com/ux-case-study-ride-sharing-app-642080cbc89d",
    },
    {
        title: "Behavioral Economics",
        description: "An intriguing study and understanding of UX through the lens of behavioural economics.",
        url: "https://crramya06.medium.com/behavioural-economics-e60a10d44ddc",
    },
];

export const PublicationsAndArticles: React.FC = () => {
    return (
        <section className="py-40 px-6 bg-[var(--background)] relative overflow-hidden">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                    {/* Publications Section */}
                    <div className="flex flex-col space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-5"
                        >
                            <div className="p-3 bg-black text-white shadow-[6px_6px_0_var(--posthog-orange)]">
                                <BookOpen className="w-8 h-8" />
                            </div>
                            <h2 className="text-5xl font-black uppercase tracking-tighter text-black">
                                Research Archive
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                            className="os-card bg-white border-4 border-black shadow-[25px_25px_0_rgba(0,0,0,0.05)] hover:shadow-[35px_35px_0_var(--posthog-orange)] transition-all duration-700 group overflow-hidden"
                        >
                            <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                                <span className="tech-label tracking-[0.3em] text-[11px]">Academic Insight 01</span>
                                <div className="flex gap-3">
                                    <Star className="w-4 h-4 text-[var(--posthog-orange)] animate-spin-slow" />
                                    <div className="w-2 h-2 rounded-full bg-black/10" />
                                </div>
                            </div>
                            <a
                                href="https://ieeexplore.ieee.org/document/11256372"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-12 space-y-12"
                            >
                                <div className="space-y-8">
                                    <div className="tech-label text-[var(--posthog-orange)] tracking-[0.4em]">IEEE XPLORE // INDIA HCI</div>
                                    <h3 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter leading-[0.85] group-hover:underline decoration-[10px] decoration-[var(--posthog-orange)] underline-offset-10">
                                        GenAI Accessibility & Usability Research
                                    </h3>
                                    <p className="text-zinc-800 font-bold text-2xl uppercase tracking-tighter leading-tight italic">
                                        &ldquo;A research paper exploring the impact of Generative AI on accessibility and usability standards in modern digital products.&rdquo;
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-10 border-t-4 border-black/5">
                                    <div className="flex gap-5">
                                        <div className="px-6 py-2 bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] shadow-[8px_8px_0_var(--posthog-orange)]">PUBLISHED</div>
                                        <div className="px-6 py-2 border-4 border-black text-[11px] font-black uppercase tracking-[0.2em] bg-white">PEER REVIEWED</div>
                                    </div>
                                    <motion.div whileHover={{ scale: 1.3, rotate: 45 }}>
                                        <ExternalLink className="w-10 h-10 text-black group-hover:text-[var(--posthog-orange)] transition-colors" />
                                    </motion.div>
                                </div>
                            </a>
                        </motion.div>
                    </div>

                    {/* Articles Section */}
                    <div className="flex flex-col space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="flex items-center gap-5"
                        >
                            <div className="p-3 bg-black text-white shadow-[6px_6px_0_var(--posthog-orange)]">
                                <FileText className="w-8 h-8" />
                            </div>
                            <h2 className="text-5xl font-black uppercase tracking-tighter text-black">
                                Design Briefings
                            </h2>
                        </motion.div>

                        <div className="grid gap-12">
                            {articles.map((article, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                    className="os-card bg-white border-4 border-black shadow-[15px_15px_0_rgba(0,0,0,0.03)] hover:shadow-[20px_20px_0_#000] transition-all group"
                                >
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-10 space-y-8"
                                    >
                                        <div className="flex justify-between items-start">
                                            <h3 className="text-3xl font-black text-black uppercase tracking-tighter pr-12 leading-none group-hover:text-[var(--posthog-orange)] transition-colors">
                                                {article.title}
                                            </h3>
                                            <motion.div whileHover={{ scale: 1.3 }}>
                                                <Globe className="w-8 h-8 text-zinc-300 group-hover:text-black transition-colors" />
                                            </motion.div>
                                        </div>
                                        <p className="text-zinc-700 font-bold text-lg leading-tight uppercase tracking-tight italic">
                                            &ldquo;{article.description}&rdquo;
                                        </p>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
