"use client";

import { motion } from "framer-motion";
import { ExternalLink, Globe } from "lucide-react";
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
                            transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                            className="space-y-4"
                        >
                            <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400">Published Work</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-black tracking-tight leading-tight">
                                Research Archive.
                            </h2>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                            className="group relative"
                        >
                            <a
                                href="https://ieeexplore.ieee.org/document/11256372"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block space-y-8"
                            >
                                <div className="space-y-4">
                                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400">IEEE Xplore • India HCI</span>
                                    <h3 className="font-serif text-4xl text-black leading-tight group-hover:text-zinc-600 transition-colors">
                                        GenAI Accessibility & Usability Research
                                    </h3>
                                    <p className="font-sans text-lg text-zinc-600 leading-relaxed max-w-md">
                                        A research paper exploring the impact of Generative AI on accessibility and usability standards in modern digital products.
                                    </p>
                                </div>

                                <div className="flex items-center gap-6 pt-6 border-t border-black/10">
                                    <span className="font-sans text-xs uppercase tracking-widest text-zinc-500">Peer Reviewed</span>
                                    <motion.div whileHover={{ scale: 1.1 }}>
                                        <ExternalLink className="w-5 h-5 text-zinc-400 group-hover:text-black transition-colors" />
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
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                            className="space-y-4"
                        >
                            <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400">Written Thoughts</span>
                            <h2 className="font-serif text-5xl md:text-6xl text-black tracking-tight leading-tight">
                                Design Briefs.
                            </h2>
                        </motion.div>

                        <div className="space-y-16">
                            {articles.map((article, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.2, delay: 0.3 + idx * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                                    className="group"
                                >
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block space-y-4"
                                    >
                                        <div className="flex justify-between items-start">
                                            <h3 className="font-serif text-3xl text-black leading-tight group-hover:text-zinc-600 transition-colors">
                                                {article.title}
                                            </h3>
                                            <motion.div whileHover={{ scale: 1.1 }}>
                                                <Globe className="w-5 h-5 text-zinc-300 group-hover:text-black transition-colors mt-2" />
                                            </motion.div>
                                        </div>
                                        <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-sm">
                                            {article.description}
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
