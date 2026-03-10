"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-40 pb-32 bg-[var(--background)] selection:bg-zinc-200 overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="space-y-32">

                    {/* Header: Editorial Profile */}
                    <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                            className="w-full md:w-5/12 aspect-[3/4] relative overflow-hidden bg-zinc-100 rounded-[2px]"
                        >
                            <Image
                                src="/images/brand/logo.png"
                                alt="Ramya Rajasekaran"
                                fill
                                className="object-cover grayscale opacity-80 mix-blend-multiply"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.2, 0.65, 0.3, 0.9] }}
                            className="w-full md:w-7/12 space-y-10 pt-4"
                        >
                            <div className="space-y-4">
                                <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400">Design Identity</span>
                                <h1 className="font-serif text-6xl md:text-8xl text-black leading-[0.9] tracking-tight">
                                    Ramya <br />
                                    <span className="italic text-zinc-500">Rajasekaran</span>
                                </h1>
                            </div>

                            <div className="space-y-6">
                                <p className="font-sans text-xl md:text-2xl text-zinc-700 leading-relaxed font-medium">
                                    Synthesizing intuitive design solutions for global products across high-stakes domains.
                                </p>
                                <div className="w-16 h-[1px] bg-zinc-300" />
                                <p className="font-sans text-lg text-zinc-500 leading-relaxed">
                                    Specializing in enterprise-scale digital transformations and customer-centric architectures. I believe that good design is invisible—it simply works. It empowers users, clarifies complexity, and drives meaningful business impact.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">

                        {/* Capabilities Specs */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="md:col-span-4 space-y-8"
                        >
                            <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400">Core Specs</span>
                            <div className="space-y-4 pt-4 border-t border-black/10">
                                {[
                                    { label: "Experience", value: "4.5 Years" },
                                    { label: "Location", value: "India" },
                                    { label: "Domain", value: "HCI & UX Strategy" },
                                    { label: "Availability", value: "Open for Roles" }
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between items-end pb-4 border-b border-black/5 group">
                                        <span className="font-sans text-sm text-zinc-400 group-hover:text-black transition-colors">{spec.label}</span>
                                        <span className="font-serif text-lg text-zinc-800">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Strategy Chronicle */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="md:col-span-8 space-y-12"
                        >
                            <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400">Experience Chronicle</span>

                            <div className="space-y-16">
                                {[
                                    {
                                        year: "2023—2024",
                                        title: "Lead UX Designer",
                                        company: "Aviation Solutions",
                                        desc: "Architecting high-stakes flight operations interfaces and scaling complex data-dense research workflows."
                                    },
                                    {
                                        year: "2020—2022",
                                        title: "UX Analyst",
                                        company: "E-Commerce Strategy",
                                        desc: "Redefined core conversion journeys for global marketplaces. Optimized user flow efficiency by 35%."
                                    }
                                ].map((job, i) => (
                                    <div key={i} className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start group">
                                        <div className="font-sans text-xs text-zinc-400 tracking-widest pt-2 shrink-0">{job.year}</div>
                                        <div className="space-y-4">
                                            <h3 className="font-serif text-3xl md:text-4xl text-black leading-tight group-hover:text-zinc-600 transition-colors">
                                                {job.title}
                                            </h3>
                                            <div className="font-sans text-sm text-zinc-500 uppercase tracking-widest">{job.company}</div>
                                            <p className="font-sans text-base text-zinc-600 leading-relaxed max-w-lg pt-2">
                                                {job.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </main>
    );
}
