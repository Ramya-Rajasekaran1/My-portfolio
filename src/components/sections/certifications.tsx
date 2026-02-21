"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
    {
        title: "Accessibility for Web Design",
        company: "LinkedIn",
        date: "Nov 2025",
        skills: ["IT Accessibility", "Accessibility Techniques"],
        color: "bg-gradient-to-br from-[#0077b5] to-[#005c8c]",
        textColor: "text-white",
        logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        )
    },
    {
        title: "XGAL0001 - UI/UX Design for AI Products",
        company: "Stanford Online",
        date: "Sep 2025",
        skills: ["LLM", "Prototyping", "+5 More"],
        color: "bg-gradient-to-br from-[#8c1515] to-[#5d0e0e]",
        textColor: "text-white",
        logo: (
            <div className="w-12 h-12 flex items-center justify-center text-white font-serif font-bold text-3xl leading-none">S</div>
        )
    },
    {
        title: "Design Thinking in the Age of AI",
        company: "LinkedIn",
        date: "Jun 2025",
        skills: ["AI Design Thinking", "Design Thinking"],
        color: "bg-gradient-to-br from-[#0a66c2] to-[#004182]",
        textColor: "text-white",
        logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        )
    },
    {
        title: "GenAI for UX Designers",
        company: "Coursera",
        date: "Jun 2025",
        skills: ["Gen AI", "AI UX"],
        color: "bg-gradient-to-br from-[#0056d2] to-[#003d94]",
        textColor: "text-white",
        logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-4 12c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" />
            </svg>
        )
    },
    {
        title: "User-Centered Design Advocate",
        company: "Boeing",
        date: "Nov 2024",
        skills: ["User Advocacy", "Product Design"],
        color: "bg-gradient-to-br from-[#0033a0] to-[#001f61]",
        textColor: "text-white",
        logo: (
            <svg viewBox="0 0 400 100" className="w-[80px] h-auto fill-white">
                <path d="M47.7,46.1c0,14.6-11.8,26.4-26.4,26.4S-5.1,60.7-5.1,46.1s11.8-26.4,26.4-26.4S47.7,31.5,47.7,46.1z M40.2,46.1 c0-10.5-8.5-19-19-19s-19,8.5-19,19s8.5,19,19,19S40.2,56.6,40.2,46.1z" transform="translate(10, 0) scale(0.8)" />
                <path d="M78.6,40.1l-24.3,6.5c-4.4,1.2-8.5,2.4-12.7,3.6c-4.2,1.2-8.4,2.4-12.6,3.6l24.4-14.8c4.4-2.7,8.8-5.4,13.2-8s8.8-5.3,13.2-8 l-1.2,17.1z" transform="translate(10, 0) scale(0.8)" />
            </svg>
        )
    },
    {
        title: "Foundations of UX Design",
        company: "Google",
        date: "Jan 2023",
        skills: ["HCI", "UX Research", "+1 More"],
        color: "bg-gradient-to-br from-[#4285F4] to-[#1a73e8]",
        textColor: "text-white",
        logo: (
            <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
        )
    },
    {
        title: "Enterprise Design Thinking Practitioner",
        company: "IBM",
        date: "Jun 2020",
        skills: ["UX Research", "Presentations", "+1 More"],
        color: "bg-gradient-to-br from-[#052FAD] to-[#001D6C]",
        textColor: "text-white",
        logo: (
            <svg viewBox="0 0 32 32" className="w-16 h-auto fill-white">
                <path d="M30 4H2v24h28V4zM26 22h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2zm0-4h-4v-2h4v2zm-6 8H6v-2h8v2zm0-4H6v-2h8v2zm0-4H6v-2h8v2z" />
            </svg>
        )
    }
];

export function Certifications() {
    return (
        <section className="py-24 relative overflow-hidden bg-neutral-50 dark:bg-neutral-950/30">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Header Content - Spans 4 columns on desktop */}
                    <div className="lg:col-span-5 xl:col-span-4 space-y-8 sticky top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest mb-6">
                                <Award className="w-3 h-3" />
                                Professional Growth
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight leading-[0.9]">
                                Continuous <br />Learning
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-400 text-lg font-serif italic leading-relaxed max-w-sm">
                                I believe in the power of continuous learning to stay ahead in the rapidly evolving design landscape, especially at the intersection of UX and AI.
                            </p>
                        </motion.div>
                    </div>

                    {/* Bento Grid - Spans 8 columns on desktop */}
                    <div className="lg:col-span-7 xl:col-span-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                            {certifications.map((cert, index) => {
                                return (
                                    <motion.div
                                        key={cert.title}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1,
                                            type: "spring",
                                            stiffness: 100
                                        }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className={`group relative aspect-[1.7/1] rounded-2xl p-6 shadow-sm border border-neutral-200 dark:border-white/5 ${cert.color} overflow-hidden flex flex-col justify-between`}
                                    >
                                        {/* Branding Header */}
                                        <div className="flex justify-between items-start relative z-10">
                                            <div className="drop-shadow-lg scale-90 origin-top-left transition-transform duration-500">
                                                {cert.logo}
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:bg-white/30 transition-all opacity-0 group-hover:opacity-100">
                                                <ExternalLink className="w-4 h-4 text-white" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-1 relative z-10">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50">
                                                {cert.company}
                                            </p>
                                            <h3 className="text-base font-black text-white leading-tight tracking-tight whitespace-normal break-words drop-shadow-md line-clamp-2">
                                                {cert.title}
                                            </h3>
                                            <p className="text-[11px] font-extrabold text-white/60 tracking-wider mt-1">
                                                {cert.date}
                                            </p>
                                        </div>

                                        {/* Mild Noise Effect */}
                                        <div
                                            className="absolute inset-0 opacity-[0.12] pointer-events-none mix-blend-overlay"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                                                backgroundRepeat: "repeat",
                                            }}
                                        />

                                        {/* Brand Glows */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] pointer-events-none group-hover:bg-white/10 transition-colors duration-700" />
                                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-black/10 rounded-full blur-[40px] pointer-events-none" />
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

