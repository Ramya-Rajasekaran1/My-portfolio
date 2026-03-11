"use client";

import { motion } from "framer-motion";

const certifications = [
    {
        title: "Accessibility for Web Design",
        company: "LinkedIn",
        date: "Nov 2025",
        id: "001",
        status: "Verified"
    },
    {
        title: "UI/UX Design for AI Products",
        company: "Stanford Online",
        date: "Sep 2025",
        id: "002",
        status: "Verified"
    },
    {
        title: "Design Thinking in the Age of AI",
        company: "LinkedIn",
        date: "Jun 2025",
        id: "003",
        status: "Verified"
    },
    {
        title: "GenAI for UX Designers",
        company: "Coursera",
        date: "Jun 2025",
        id: "004",
        status: "Verified"
    },
    {
        title: "User-Centered Design Advocate",
        company: "Boeing",
        date: "Nov 2024",
        id: "005",
        status: "Trusted"
    },
    {
        title: "Foundations of UX Design",
        company: "Google",
        date: "Jan 2023",
        id: "006",
        status: "Verified"
    }
];

export function Certifications() {
    return (
        <section className="py-32 bg-[var(--background)] px-6 md:px-12 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Header Statement */}
                    <div className="lg:col-span-4 flex flex-col justify-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="sticky top-32"
                        >
                            <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-zinc-400 block mb-6">Continuous Learning</span>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-5xl leading-[1.1] text-zinc-800 mb-8">
                                Certifications & Licenses.
                            </h2>
                            <p className="text-zinc-500 font-light text-lg leading-relaxed mix-blend-multiply">
                                An ongoing commitment to mastering emerging tools, accessibility standards, and human-centered strategy.
                            </p>
                        </motion.div>
                    </div>

                    {/* Certifications List */}
                    <div className="lg:col-span-8">
                        <div className="flex flex-col border-t border-black/10">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={cert.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-black/10 hover:border-black/30 transition-colors items-baseline"
                                >
                                    {/* Number / Status */}
                                    <div className="md:col-span-3 flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                                        <span className="font-sans text-xs tracking-[0.2em] text-zinc-300 group-hover:text-[var(--posthog-orange)] transition-colors">
                                            {cert.id}
                                        </span>
                                    </div>

                                    {/* Main Area: Title & Company */}
                                    <div className="md:col-span-6 flex flex-col gap-2">
                                        <h3 className="font-serif text-2xl text-zinc-800 group-hover:text-black transition-colors">
                                            {cert.title}
                                        </h3>
                                        <span className="font-sans text-sm text-zinc-500">
                                            {cert.company}
                                        </span>
                                    </div>

                                    {/* Date */}
                                    <div className="md:col-span-3 flex justify-start md:justify-end">
                                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400">
                                            {cert.date}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
