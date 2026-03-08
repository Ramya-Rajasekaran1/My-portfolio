"use client";

import { motion } from "framer-motion";
import { Database, Layout, Code2, Minus, X, Layers, Zap, Star } from "lucide-react";

const skillCategories = [
    {
        title: "RESEARCH INSIGHTS",
        icon: <Database className="w-5 h-5" />,
        skills: [
            { name: "User Interviews", proficiency: 95 },
            { name: "Usability Testing", proficiency: 90 },
            { name: "Persona Dev", proficiency: 85 },
            { name: "Journey Mapping", proficiency: 88 }
        ]
    },
    {
        title: "UX ARCHITECTURE",
        icon: <Layout className="w-5 h-5" />,
        skills: [
            { name: "UI Design", proficiency: 94 },
            { name: "Wireframing", proficiency: 92 },
            { name: "Prototyping", proficiency: 90 },
            { name: "Design Systems", proficiency: 87 }
        ]
    },
    {
        title: "CREATIVE ENGINE",
        icon: <Code2 className="w-5 h-5" />,
        skills: [
            { name: "Figma Mastery", proficiency: 98 },
            { name: "Strategic Thinking", proficiency: 85 },
            { name: "Product Engineering", proficiency: 80 },
            { name: "GenAI Product Design", proficiency: 92 }
        ]
    }
];

export function Skills() {
    return (
        <section className="py-40 bg-white relative border-t-8 border-black overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-24">
                    {/* Header: Designer Inventory */}
                    <div className="lg:w-1/3 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="space-y-8"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[var(--posthog-orange)] border-4 border-black shadow-[6px_6px_0_#000]">
                                    <Star className="w-6 h-6 text-black" />
                                </div>
                                <span className="tech-label tracking-[0.4em]">RESOURCE ARCHIVE</span>
                            </div>
                            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-black">
                                Designer<br />Inventory
                            </h2>
                            <p className="text-zinc-600 font-bold text-lg max-w-sm uppercase tracking-tighter leading-tight italic">
                                Auditing strategic design competencies and structural research frameworks for global scale delivery.
                            </p>
                        </motion.div>

                        {/* Designer Insight Log */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-zinc-50 border-4 border-black font-black text-[12px] space-y-6 relative overflow-hidden group shadow-[15px_15px_0_rgba(0,0,0,0.05)] transition-all hover:bg-white hover:shadow-[25px_25px_0_var(--posthog-orange)]"
                        >
                            <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Zap className="w-20 h-20" />
                            </div>
                            <div className="flex items-center gap-4 text-zinc-400">
                                <Layers className="w-5 h-5" />
                                <span className="tracking-[0.4em]">AUDIT SUMMARY</span>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-3 h-3 bg-black rounded-full" />
                                <span className="text-black font-black uppercase tracking-tight">Research Analysis: OPTIMIZED</span>
                            </div>
                            <div className="flex gap-5 items-center">
                                <div className="w-3 h-3 bg-zinc-300 rounded-full" />
                                <span className="text-black font-black uppercase tracking-tight">Structural Integrity: VERIFIED</span>
                            </div>
                            <div className="flex gap-5 items-center">
                                <motion.div
                                    animate={{ scale: [1, 1.3, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="w-3 h-3 bg-[var(--posthog-orange)] rounded-full shadow-[0_0_12px_var(--posthog-orange)]"
                                />
                                <span className="text-[var(--posthog-orange)] font-black uppercase tracking-tight">Active Design Loop</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Inventory Grid: 3D Visualization */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-20">
                        {skillCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: idx * 0.2 }}
                                className="group relative"
                            >
                                {/* 3D Perspective Container */}
                                <div className="relative p-12 bg-white border-4 border-black hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 shadow-[20px_20px_0_#000] hover:shadow-[30px_30px_0_#000]">
                                    {/* 3D "Side" elements */}
                                    <div className="absolute -top-4 left-0 w-full h-4 bg-zinc-200 border-x-4 border-t-4 border-black origin-bottom skew-x-[45deg]" />
                                    <div className="absolute top-0 -right-4 w-4 h-full bg-zinc-100 border-y-4 border-r-4 border-black origin-left -skew-y-[45deg]" />

                                    <div className="flex items-center justify-between mb-8 border-b-4 border-black pb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="p-2 bg-black text-white">{cat.icon}</div>
                                            <span className="font-black tracking-[0.3em] text-[11px] text-black">{cat.title}</span>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        {cat.skills.map((skill, sIdx) => (
                                            <div key={sIdx} className="space-y-4">
                                                <div className="flex justify-between items-end">
                                                    <span className="text-[11px] font-black uppercase tracking-[0.3em] text-zinc-500">{skill.name}</span>
                                                    <span className="text-[12px] font-black text-black">{skill.proficiency}%</span>
                                                </div>
                                                <div className="h-6 bg-zinc-50 border-4 border-black relative overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.proficiency}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 2, delay: sIdx * 0.1, ease: [0.23, 1, 0.32, 1] }}
                                                        className="h-full bg-black flex items-center justify-end px-2"
                                                    >
                                                        <div className="w-1 h-3 bg-white/30" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Interactive Detail Overlay on Hover */}
                                    <div className="mt-12 pt-6 border-t-4 border-black border-dashed flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                                        <div className="flex gap-2">
                                            <div className="w-2 h-2 bg-black rounded-full" />
                                            <div className="w-2 h-2 bg-black rounded-full" />
                                            <div className="w-2 h-2 bg-zinc-200 rounded-full" />
                                        </div>
                                        <span className="font-black text-[9px] tracking-[0.4em] text-black uppercase">Studio Verified</span>
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
