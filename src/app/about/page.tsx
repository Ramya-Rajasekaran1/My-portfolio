"use client";

import { User, Activity, X, Star, Zap, Layers, Compass } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ClientSideAnimationWrapper } from "../../components/ui/animation-wrapper";

export default function AboutPage() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants: any = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 15
            }
        }
    };

    return (
        <main className="min-h-screen pt-40 pb-32 bg-[var(--background)] selection:bg-[var(--posthog-orange)]/30 overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    className="max-w-7xl mx-auto space-y-24"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Header: Studio Profile */}
                    <motion.div variants={itemVariants} className="os-card bg-white border-4 border-black shadow-[30px_30px_0px_#000] transition-all duration-700">
                        <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                            <div className="flex items-center gap-4">
                                <User className="w-5 h-5 text-[var(--posthog-orange)]" />
                                <span className="font-black uppercase tracking-[0.4em] text-[11px]">STUDIO PROFILE</span>
                            </div>
                            <div className="flex items-center gap-4 opacity-20">
                                <Star className="w-4 h-4 text-[var(--posthog-orange)] animate-spin-slow" />
                                <X className="w-6 h-6 hover:text-black cursor-none transition-all" />
                            </div>
                        </div>
                        <div className="p-12 md:p-20">
                            <div className="flex flex-col md:flex-row gap-20 items-start">
                                <div className="w-full md:w-1/3 aspect-square bg-black p-5 border-4 border-black shadow-[15px_15px_0_var(--posthog-orange)] group overflow-hidden relative">
                                    <Image
                                        src="/images/brand/logo.png"
                                        alt="Ramya"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-contain brightness-0 invert opacity-90 group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute top-6 right-6 z-10 text-[10px] font-black uppercase bg-[var(--posthog-orange)] text-black px-4 py-1.5 border-4 border-black shadow-[4px_4px_0_#000]">
                                        Designer Profile
                                    </div>
                                </div>
                                <div className="flex-1 space-y-12">
                                    <div className="space-y-6">
                                        <div className="tech-label text-[var(--posthog-orange)] tracking-[0.4em]">DESIGN IDENTITY</div>
                                        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-black">
                                            Ramya<br />Rajasekaran
                                        </h1>
                                        <p className="text-2xl font-black uppercase tracking-tight text-zinc-500 italic">
                                            Lead UX Architect // India
                                        </p>
                                    </div>
                                    <div className="space-y-8">
                                        <p className="text-2xl md:text-4xl text-zinc-900 leading-[1] font-bold uppercase tracking-tighter text-black">
                                            Synthesizing intuitive design solutions for global products across high stakes domains.
                                        </p>
                                        <div className="h-2 w-32 bg-black shadow-[0_10px_20px_rgba(0,0,0,0.1)]" />
                                        <p className="text-lg font-black text-zinc-500 uppercase tracking-tight italic">
                                            Specializing in enterprise scale digital transformations and customer centric architectures for high stakes platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Capabilities Archive */}
                        <motion.div variants={itemVariants} className="os-card bg-white lg:col-span-1 border-4 border-black shadow-[15px_15px_0_rgba(0,0,0,0.05)] hover:shadow-[20px_20px_0_#000] transition-all group">
                            <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                                <div className="flex items-center gap-4">
                                    <Activity className="w-5 h-5 text-[var(--posthog-orange)]" />
                                    <span className="font-black uppercase tracking-[0.3em] text-[11px]">CORE SPECS</span>
                                </div>
                            </div>
                            <div className="p-10 space-y-8">
                                {[
                                    { label: "EXPERIENCE", value: "4.5 YEARS" },
                                    { label: "LOCATION", value: "INDIA" },
                                    { label: "DOMAIN", value: "HCI UX STRATEGY" },
                                    { label: "RESEARCH", value: "PEAK EFFICIENCY" },
                                    { label: "STATUS", value: "READY TO BUILD" }
                                ].map((spec, i) => (
                                    <div key={i} className="flex justify-between items-end border-b-4 border-black/5 pb-6 group">
                                        <span className="tech-label text-zinc-400 group-hover:text-black transition-colors tracking-[0.2em]">{spec.label}</span>
                                        <span className="text-black font-black uppercase tracking-tighter text-lg">{spec.value}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Architecture Log */}
                        <motion.div variants={itemVariants} className="os-card bg-white lg:col-span-2 border-4 border-black shadow-[15px_15px_0_rgba(0,0,0,0.05)] hover:shadow-[25px_25px_0_#000] transition-all group">
                            <div className="window-title border-b-4 border-black py-4 px-8 bg-zinc-50/50">
                                <div className="flex items-center gap-4">
                                    <Layers className="w-5 h-5 text-[var(--posthog-orange)]" />
                                    <span className="font-black uppercase tracking-[0.3em] text-[11px]">STRATEGY CHRONICLE</span>
                                </div>
                                <Zap className="w-5 h-5 text-black/20 group-hover:text-[var(--posthog-orange)]" />
                            </div>
                            <div className="p-12 space-y-16">
                                {[
                                    {
                                        year: "2023 2024",
                                        title: "LEAD UX DESIGNER",
                                        company: "AVIATION SOLUTIONS",
                                        desc: "Architecting high stakes flight operations interfaces and scaling complex data dense research workflows."
                                    },
                                    {
                                        year: "2020 2022",
                                        title: "UX ANALYST",
                                        company: "E COMMERCE STRATEGY",
                                        desc: "Redefined core conversion journeys for global marketplaces. Optimized user flow efficiency by 35%."
                                    }
                                ].map((job, i) => (
                                    <div key={i} className="flex flex-col md:flex-row gap-10 items-start group">
                                        <div className="tech-label text-[var(--posthog-orange)] font-black pt-2 shrink-0 text-sm tracking-[0.3em]">{job.year}</div>
                                        <div className="space-y-5">
                                            <h3 className="text-4xl font-black text-black uppercase tracking-tighter leading-none group-hover:underline underline-offset-8 decoration-8 decoration-[var(--posthog-orange)]">
                                                {job.title}
                                            </h3>
                                            <div className="text-xs font-black uppercase text-zinc-400 tracking-[0.4em]">{job.company}</div>
                                            <p className="text-xl font-bold text-zinc-600 italic leading-tight uppercase tracking-tight pt-4">
                                                &ldquo;{job.desc}&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                ))}

                                <div className="pt-10 border-t-4 border-black/5 flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <Compass className="w-6 h-6 text-zinc-300 animate-spin-slow" />
                                        <span className="tech-label opacity-30 tracking-[0.4em]">LOG END VERIFIED</span>
                                    </div>
                                    <div className="w-32 h-2 bg-black/10" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
