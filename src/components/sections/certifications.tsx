"use client";

import { motion } from "framer-motion";
import { BadgeCheck, FileCheck, Download, Star, Zap, Layers } from "lucide-react";

const certifications = [
    {
        title: "Accessibility for Web Design",
        company: "LinkedIn",
        date: "Nov 2025",
        id: "CREDENTIAL 001",
        status: "VERIFIED"
    },
    {
        title: "UI/UX Design for AI Products",
        company: "Stanford Online",
        date: "Sep 2025",
        id: "CREDENTIAL 002",
        status: "VERIFIED"
    },
    {
        title: "Design Thinking in the Age of AI",
        company: "LinkedIn",
        date: "Jun 2025",
        id: "CREDENTIAL 003",
        status: "VERIFIED"
    },
    {
        title: "GenAI for UX Designers",
        company: "Coursera",
        date: "Jun 2025",
        id: "CREDENTIAL 004",
        status: "VERIFIED"
    },
    {
        title: "User-Centered Design Advocate",
        company: "Boeing",
        date: "Nov 2024",
        id: "CREDENTIAL 005",
        status: "TRUSTED"
    },
    {
        title: "Foundations of UX Design",
        company: "Google",
        date: "Jan 2023",
        id: "CREDENTIAL 006",
        status: "VERIFIED"
    }
];

export function Certifications() {
    return (
        <section className="py-40 bg-[var(--background)] px-6 relative overflow-hidden">
            {/* Background Aesthetic */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-black/[0.01] -skew-x-12 translate-x-1/4 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                    {/* Sidebar: Validation Info */}
                    <div className="lg:col-span-4 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="space-y-8 text-center lg:text-left"
                        >
                            <div className="flex items-center justify-center lg:justify-start gap-4">
                                <div className="p-3 bg-black text-white shadow-[6px_6px_0_var(--posthog-orange)]">
                                    <BadgeCheck className="w-8 h-8 text-[var(--posthog-orange)]" />
                                </div>
                                <span className="tech-label tracking-[0.4em]">VALIDATION UNIT</span>
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-black">
                                Professional<br />Licenses
                            </h2>
                            <p className="text-zinc-600 font-bold text-lg uppercase tracking-tighter leading-tight italic max-w-sm mx-auto lg:mx-0">
                                Validating professional credentials and technical design certifications for global product strategy.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="os-card bg-white p-10 border-4 border-black shadow-[15px_15px_0_rgba(0,0,0,0.1)] space-y-8 relative group hover:shadow-[20px_20px_0_var(--posthog-orange)] transition-all"
                        >
                            <div className="flex justify-between items-center group">
                                <div className="flex items-center gap-3">
                                    <Layers className="w-5 h-5 opacity-20" />
                                    <span className="tech-label opacity-40 group-hover:opacity-100 transition-opacity">UNIT INTEGRITY</span>
                                </div>
                                <span className="text-[10px] font-black uppercase text-green-600 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Active
                                </span>
                            </div>
                            <div className="h-4 bg-black/5 border-2 border-black overflow-hidden relative shadow-inner">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "92%" }}
                                    transition={{ duration: 2, ease: "circOut" }}
                                    className="h-full bg-black shadow-[5px_0_15px_rgba(0,0,0,0.2)]"
                                />
                            </div>
                            <div className="flex justify-between items-center tech-label opacity-30 text-[9px]">
                                <span>GLOBAL TRUST NETWORK</span>
                                <span>STABLE VER. 2024</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Cert Grid */}
                    <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-10">
                        {certifications.map((cert, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.23, 1, 0.32, 1] }}
                                className="os-card bg-white border-4 border-black hover:shadow-[20px_20px_0_var(--posthog-orange)] transition-all group overflow-hidden"
                            >
                                {/* Window Title */}
                                <div className="window-title border-b-4 border-black py-4 px-8 group-hover:bg-zinc-50/50 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <FileCheck className="w-4 h-4 text-black/30 group-hover:text-[var(--posthog-orange)] transition-colors" />
                                        <span className="font-black uppercase text-[10px] tracking-widest">{cert.id}</span>
                                    </div>
                                    <motion.div whileHover={{ rotate: 90, scale: 1.2 }}>
                                        <Download className="w-5 h-5 text-black/10 group-hover:text-black cursor-none transition-all" />
                                    </motion.div>
                                </div>

                                <div className="p-10 space-y-8">
                                    <div className="flex justify-between items-center">
                                        <div className="px-5 py-1.5 bg-black text-white text-[10px] font-black uppercase tracking-widest shadow-[6px_6px_0_var(--posthog-orange)]">
                                            {cert.status}
                                        </div>
                                        <span className="tech-label opacity-30 text-[10px]">{cert.date}</span>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="tech-label text-[var(--posthog-orange)] tracking-[0.3em]">{cert.company.toUpperCase()}</div>
                                        <h3 className="text-3xl font-black text-black uppercase tracking-tighter leading-[0.9] group-hover:underline underline-offset-8 decoration-[var(--posthog-orange)] decoration-8 transition-all">
                                            {cert.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
