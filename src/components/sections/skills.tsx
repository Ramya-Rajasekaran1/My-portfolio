"use client";

import { motion } from "framer-motion";
import { Database, Layout, Code2 } from "lucide-react";

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
            { name: "Product Strategy", proficiency: 80 },
            { name: "GenAI Product Design", proficiency: 92 }
        ]
    }
];

export function Skills() {
    return (
        <section className="py-40 bg-zinc-50 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row gap-24">
                    {/* Header */}
                    <div className="lg:w-1/3 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 block mb-4">Core Competencies</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-black leading-[1.1] tracking-tight">
                                Skills &<br />Expertise.
                            </h2>
                            <p className="text-zinc-500 font-sans text-lg mt-6 leading-relaxed max-w-sm">
                                Blending deep research methodologies with elegant visual design to create products that resonate on a human level.
                            </p>
                        </motion.div>
                    </div>

                    {/* Inventory Grid: Clean Editorial Format */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
                        {skillCategories.map((cat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.2, delay: idx * 0.15, ease: "easeOut" }}
                                className="space-y-8"
                            >
                                <div className="flex items-center gap-4 border-b border-black/10 pb-4">
                                    <div className="text-zinc-400">{cat.icon}</div>
                                    <span className="font-sans text-sm uppercase tracking-[0.1em] text-black font-medium">{cat.title}</span>
                                </div>

                                <div className="space-y-6">
                                    {cat.skills.map((skill, sIdx) => (
                                        <div key={sIdx} className="space-y-3">
                                            <div className="flex justify-between items-end">
                                                <span className="text-[13px] font-sans text-zinc-600">{skill.name}</span>
                                                <span className="text-[11px] font-sans text-zinc-400 tracking-wider">{skill.proficiency}%</span>
                                            </div>
                                            <div className="h-[2px] w-full bg-zinc-200 relative overflow-hidden rounded-full">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.proficiency}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: sIdx * 0.1, ease: "easeOut" }}
                                                    className="h-full bg-[#111]"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
