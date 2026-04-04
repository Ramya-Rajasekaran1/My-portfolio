"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const featuredItems = [
    {
        tag: "CIVIC TECH • SF GOVT",
        title: "SafeHome SF",
        description: "Redesigning earthquake & tsunami preparedness for the communities of San Francisco. From design chaos to a trusted, accessible civic product.",
        image: "/images/safehome/safehome_cover_new.jpg",
        slug: "safehome-sf",
        metrics: [
            { label: "Active Growth", value: "+76.5%" },
            { label: "Engagement", value: "6.5m" },
            { label: "Initial Trust", value: "51%" }
        ],
        alt: "SafeHome SF Project"
    },
    {
        tag: "FEATURED RESEARCH",
        title: "Designing for Inclusivity in the Age of Generative AI",
        description: "A futurist UX investigation that benchmarks how inclusive modern generative AI tools are and sketches a blueprint for accessibility-forward experiences. Published at IEEE and IndiaHCI.",
        image: "/images/work/gen_ai_cover.jpg",
        slug: "gen-ai-inclusivity",
        metrics: [
            { label: "Participants", value: "76" },
            { label: "AI Platforms", value: "3" },
            { label: "Best Completion", value: "92%" }
        ],
        alt: "Gen AI Research"
    },
    {
        tag: "SUPPLY CHAIN • DATA VIZ",
        title: "Tracking Quality Dashboard",
        description: "A complete overhaul of supply chain visibility reporting, transforming complex data into actionable performance metrics for global shippers.",
        image: "/images/tracking-quality-dashboard/cover_v4.jpg",
        slug: "tracking-quality-dashboard",
        metrics: [
            { label: "Visibility Gain", value: "45%" },
            { label: "Audit Accuracy", value: "98%" },
            { label: "Decision Speed", value: "3x" }
        ],
        alt: "Tracking Quality Dashboard"
    }
];

export function FeaturedProjects() {
    return (
        <section className="py-24 md:py-40 bg-[#0C0A14]">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-24">
                    <h2 className="text-4xl md:text-6xl font-extralight tracking-tight text-white mb-6 font-outfit">Selected Work</h2>
                    <p className="text-white/60 max-w-2xl text-lg font-light leading-relaxed">
                        A curation of projects defining new standards in design strategy, accessibility, and high-stakes data visualization.
                    </p>
                </div>

                <div className="flex flex-col gap-32 md:gap-48">
                    {featuredItems.map((item, index) => (
                        <motion.div
                            key={item.slug}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                                {/* Image Column */}
                                <div className="order-2 lg:order-1 relative">
                                    <Link href={`/work/${item.slug}`} className="block relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-blush/30 transition-colors shadow-2xl">
                                        <img 
                                            src={item.image} 
                                            alt={item.alt}
                                            className="w-full h-full object-left object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </div>

                                {/* Text Column */}
                                <div className="order-1 lg:order-2">
                                    <div className="flex flex-col gap-8">
                                        <div className="space-y-4">
                                            <span className="text-xs md:text-sm font-mono tracking-[0.4em] text-blush font-bold uppercase block">
                                                {item.tag}
                                            </span>
                                            <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6">
                                                <h3 className="text-3xl md:text-5xl font-outfit font-extralight text-white leading-tight">
                                                    {item.title}
                                                </h3>
                                                <Link
                                                    href={`/work/${item.slug}`}
                                                    className="group hidden xl:inline-flex shrink-0 items-center gap-2 px-5 py-2.5 border border-white/30 rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] text-white hover:bg-white hover:text-black transition-all duration-200 mb-2"
                                                >
                                                    Explore case study
                                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                                </Link>
                                            </div>
                                        </div>

                                        <p className="text-white/60 text-lg leading-relaxed font-light max-w-xl">
                                            {item.description}
                                        </p>

                                        {/* Metrics Grid */}
                                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
                                            {item.metrics.map((m) => (
                                                <div key={m.label} className="space-y-1">
                                                    <p className="text-2xl md:text-3xl font-outfit font-bold text-white">{m.value}</p>
                                                    <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-white/40">{m.label}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-6 xl:hidden">
                                            <Link
                                                href={`/work/${item.slug}`}
                                                className="group inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black rounded-full text-xs font-mono font-bold uppercase tracking-[0.2em] hover:bg-blush transition-all duration-200"
                                            >
                                                Explore case study
                                                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-40 text-center">
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-black uppercase tracking-widest text-sm rounded-full hover:bg-blush transition-colors group"
                    >
                        Explore Research Library
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
