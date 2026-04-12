"use client";

import { GlassCard } from "@/components/ui/glass-card";
import * as React from "react";
import { ExternalLink, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const HandwrittenCaption = ({ text, className }: { text: string; className?: string }) => (
    <div className={cn(
        "absolute z-20 bg-white dark:bg-neutral-800 px-4 py-1.5 rounded-sm shadow-md border border-neutral-200 dark:border-white/10",
        "font-[var(--font-caveat)] text-xl md:text-2xl text-neutral-900 dark:text-neutral-50 pointer-events-none whitespace-nowrap",
        className
    )}>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/40 dark:bg-black/20 backdrop-blur-sm rotate-2 border border-black/5" />
        {text}
    </div>
);

export default function AboutPage() {
    return (
        <main id="main-content" className="min-h-screen pt-20 pb-16 transition-colors duration-300 bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Top Section with Graph Background - No Border */}
                    <div className="relative mb-16 rounded-[32px] overflow-hidden bg-white/30 dark:bg-neutral-900/20 backdrop-blur-sm">
                        {/* Graph Box Background */}
                        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20" />

                        <div className="p-8 md:p-12">
                            {/* Text Content - Full Width for Intro */}
                            <div className="max-w-3xl pr-12">
                                <div className="relative">
                                    <h1 className="text-[40px] font-serif font-bold tracking-tight bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent mb-6">
                                        Ramya Rajasekaran
                                    </h1>

                                    <div className="space-y-6 max-w-2xl pt-2">
                                        <p className="text-[20px] text-neutral-800 dark:text-neutral-200 leading-relaxed font-sans font-normal italic">
                                            I love Music both carnatic & Western. I am a big coffee lover and love Dogs and animals in general. I am keen on being physically fit and always curious to try new things: Pickleball, badminton, canyoneering, jetski, hikes, zumba.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Personal Bento Grid Section */}
                    <section className="mb-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                            {/* 1. Waterfall - canyoneering */}
                            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group relative shadow-lg">
                                <img
                                    src="/images/Home/WhatsApp Image 2026-03-18 at 14.03.00.jpeg"
                                    alt="Waterfall Adventure"
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <HandwrittenCaption text="canyoneering" className="top-6 right-8 rotate-3" />
                                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* 2. Music - Vertical */}
                            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden group relative shadow-lg">
                                <img src="/images/about/music_ukulele.jpg" alt="Playing Ukulele" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Music" className="top-6 left-6 -rotate-2 scale-90" />
                            </div>

                            {/* 3. Canyon Hike (Narrows) - Vertical tag on top */}
                            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/5 group relative shadow-md">
                                <img src="/images/about/canyon-hike.jpg" alt="Canyon Hike" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Narrows hike" className="top-6 left-4 -rotate-3 scale-90" />
                            </div>

                            {/* 4. Beta NYSE - NO TAG */}
                            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/5 group relative shadow-md">
                                <img src="/images/about/beta-nyse.jpg" alt="BETA NYSE" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>

                            {/* 5. Aviation - Chinook */}
                            <div className="col-span-1 row-span-1 rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/5 group relative shadow-md">
                                <img src="/images/about/aviation-museum.jpg" alt="Chinook Helicopter" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Aviation" className="top-4 right-4 rotate-1 scale-75" />
                            </div>

                            {/* 6. Cockpit Visit - Last Wide */}
                            <div className="col-span-2 row-span-1 rounded-3xl overflow-hidden group relative shadow-lg bg-neutral-100 dark:bg-neutral-900/50">
                                <img src="/images/about/cockpit_final.jpg" alt="New Cockpit Visit" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Inside Cockpit" className="bottom-6 right-4 -rotate-1" />
                            </div>
                        </div>
                    </section>

                    {/* A Bit About Me Section */}
                    <section className="mb-24">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-[32px] font-serif font-light tracking-tight text-neutral-900 dark:text-white uppercase text-center md:text-left">The Professional Story</h2>
                            <div className="h-px bg-neutral-200 dark:bg-white/10 flex-1 ml-6 hidden md:block" />
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(180px,auto)]">
                            {[
                                {
                                    title: "Led Multi-Billion Dollar Platform Design at Boeing",
                                    desc: "Redesigned MyBoeingFleet (150+ apps) to streamline UAT logic. Standardized design and accessibility for a $2B+ e-commerce ecosystem.",
                                    gridClass: "md:col-span-3 lg:col-span-7",
                                    bg: "bg-blue-600/5",
                                    accent: "#3b82f6"
                                },
                                {
                                    title: "Scaled Global Supply Chain Tools at Fourkites",
                                    desc: "Owned UX for 3+ supply chain apps used globally by 1.6K+ enterprise clients. Built a unified design system, reducing UX bugs by 90%.",
                                    gridClass: "md:col-span-3 lg:col-span-5",
                                    bg: "bg-emerald-600/5",
                                    accent: "#10b981"
                                },
                                {
                                    title: "Shaped Design for Diverse Domains",
                                    desc: "Delivered responsive solutions across aviation, logistics, AI, and e-commerce. Led web revamps driving an 85% increase in mobile engagement.",
                                    gridClass: "md:col-span-3 lg:col-span-4",
                                    bg: "bg-amber-600/5",
                                    accent: "#f59e0b"
                                },
                                {
                                    title: "Thought Leader in AI+UX",
                                    desc: "Presented award-winning AI accessibility research at IEEE and IndiaHCI. Recognized by Gartner & Boeing as an impactful UX strategist.",
                                    gridClass: "md:col-span-3 lg:col-span-4",
                                    bg: "bg-purple-600/5",
                                    accent: "#a855f7"
                                },
                                {
                                    title: "Certified in HCD",
                                    desc: "Certified by Stanford, Google, and IBM in AI Design Thinking. Proficient in Figma, accessibility, and rapid enterprise prototyping.",
                                    gridClass: "md:col-span-6 lg:col-span-4",
                                    bg: "bg-rose-600/5",
                                    accent: "#e11d48"
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    className={cn(
                                        "group relative rounded-[32px] p-8 overflow-hidden border border-neutral-200 dark:border-white/5",
                                        "backdrop-blur-xl bg-white/40 dark:bg-neutral-900/40",
                                        "hover:border-blush/30 dark:hover:border-blush/20 transition-all duration-500",
                                        item.gridClass
                                    )}
                                >
                                    {/* Spotlight Glow Effect */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: item.accent }} />
                                    
                                    <div className="relative flex flex-col h-full">
                                        <div className="mb-6 flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner border border-white/20 dark:border-white/5" style={{ background: `${item.accent}15`, color: item.accent }}>
                                                🔹
                                            </div>
                                            <span className="font-[var(--font-caveat)] text-2xl text-neutral-300 dark:text-neutral-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                0{i + 1}
                                            </span>
                                        </div>
                                        
                                        <h3 className="text-xl md:text-2xl font-serif font-bold text-neutral-900 dark:text-white mb-4 leading-tight tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[16px] text-neutral-600 dark:text-neutral-400 font-sans font-light leading-relaxed mt-auto">
                                            {item.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Subtle Gradient Overlay */}
                                    <div className={cn("absolute inset-0 -z-10 opacity-30 dark:opacity-10", item.bg)} />
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Tool Exploration - Auto Moving Carousel with Real Logos */}
                    <section className="mb-16">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-[32px] font-serif font-light tracking-tight text-neutral-900 dark:text-white uppercase text-center md:text-left">Tool Exploration</h2>
                            <div className="h-px bg-neutral-200 dark:bg-white/10 flex-1 ml-6 hidden md:block" />
                        </div>

                        <div className="relative w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
                            <style dangerouslySetInnerHTML={{ __html: `
                                @keyframes marquee {
                                    0% { transform: translateX(0); }
                                    100% { transform: translateX(-1400px); }
                                }
                                .marquee-container {
                                    display: flex;
                                    gap: 1rem;
                                    width: max-content;
                                    padding: 1rem 0;
                                    animation: marquee 35s linear infinite;
                                }
                                .marquee-container:active {
                                    animation-play-state: paused;
                                }
                                .no-scrollbar::-webkit-scrollbar {
                                    display: none;
                                }
                                .no-scrollbar {
                                    -ms-overflow-style: none;
                                    scrollbar-width: none;
                                }
                            `}} />
                            <div className="marquee-container">
                                {[
                                    { name: "Figma", logo: "/images/about/figma-new.png" },
                                    { name: "Cursor", logo: "/images/about/cursor_code_editor-logo_brandlogos.net_r1yfy.png" },
                                    { name: "Gemini", logo: "/images/about/gemini-logo.jpg" },
                                    { name: "ChatGPT", logo: "/images/about/chatgpt-new.png" },
                                    { name: "Claude", logo: "/images/about/claude logo.jpeg" },
                                    { name: "Uizard", logo: "/images/about/uizard-new.png" },
                                    { name: "Antigravity", logo: "/images/about/antigravity-new.png" },
                                    // Duplicate for seamless loop
                                    { name: "Figma", logo: "/images/about/figma-new.png" },
                                    { name: "Cursor", logo: "/images/about/cursor_code_editor-logo_brandlogos.net_r1yfy.png" },
                                    { name: "Gemini", logo: "/images/about/gemini-logo.jpg" },
                                    { name: "ChatGPT", logo: "/images/about/chatgpt-new.png" },
                                    { name: "Claude", logo: "/images/about/claude logo.jpeg" },
                                    { name: "Uizard", logo: "/images/about/uizard-new.png" },
                                    { name: "Antigravity", logo: "/images/about/antigravity-new.png" },
                                ].map((tool, i) => (
                                    <div key={i} className="min-w-[160px] h-[120px] bg-transparent flex flex-col items-center justify-center gap-3 group transition-all duration-300">
                                        <div className="w-20 h-20 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110">
                                            <img src={tool.logo} alt={tool.name} loading="lazy" className="w-full h-full object-contain" />
                                        </div>
                                        <span className="text-[10px] font-bold text-neutral-500 dark:text-neutral-400 uppercase tracking-widest">{tool.name}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-50 dark:from-neutral-950 to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-50 dark:from-neutral-950 to-transparent z-10" />
                        </div>
                    </section>

                    {/* Background Grid Pattern for Experience */}
                    <div className="relative">
                        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 dark:opacity-20 translate-y-[-50px]" />
                        <ExperienceSection />
                    </div>
                </div>
            </div>
        </main>
    );
}

function ExperienceSection() {
    const [showInternships, setShowInternships] = React.useState(true);

    const fullTimeJobs = [
        {
            year: "Jun 2025 - Present",
            duration: "10 Mos",
            title: "UX Lead",
            company: "Safe Home Project | SF Civic Tech",
            location: "San Francisco Bay Area",
            desc: "",
            link: "https://www.sfcivictech.org"
        },
        {
            year: "Feb 2023 - Jan 2025",
            duration: "2 Yrs",
            title: "Associate User Experience Designer",
            company: "Boeing",
            location: "Bengaluru, India",
            desc: "",
            link: "https://services.boeing.com"
        },
        {
            year: "May 2021 - Nov 2022",
            duration: "1 Yr 7 Mos",
            title: "UX Designer",
            company: "FourKites, Inc.",
            location: "Chennai, Tamil Nadu, India",
            desc: "",
            link: "https://www.fourkites.com"
        },
        {
            year: "Oct 2020 - Apr 2021",
            duration: "7 Mos",
            title: "Creative UI/UX Designer",
            company: "Doodleblue Innovations",
            location: "Chennai, Tamil Nadu, India",
            desc: "",
            link: "https://www.doodleblue.com"
        }
    ];

    const internships = [
        {
            year: "Jul 2020 - Oct 2020",
            duration: "4 Mos",
            title: "UI/UX Internship",
            company: "Doodleblue Innovations",
            location: "Tamil Nadu, India",
            link: "https://www.doodleblue.com"
        },
        {
            year: "Dec 2019 - Apr 2020",
            duration: "5 Mos",
            title: "UI/UX",
            company: "Blubirch",
            location: "India",
            link: "https://www.blubirch.com"
        },
        {
            year: "Nov 2018 - Dec 2018",
            duration: "2 Mos",
            title: "3D Modelling and Animation",
            company: "Beebox Studios Private Limited",
            location: "Greater Chennai Area",
            link: "https://www.beebox3d.com"
        },
        {
            year: "May 2018 - Jul 2018",
            duration: "3 Mos",
            title: "Design Internship",
            company: "Indian Institute of Technology, Madras",
            location: "Greater Chennai Area",
            link: "https://www.iitm.ac.in"
        }
    ];

    return (
        <GlassCard className="p-6 md:p-10 border-neutral-200 dark:border-white/10 bg-gradient-to-br from-white via-white/90 to-white/70 dark:bg-none dark:bg-blue-950/40 backdrop-blur-3xl shadow-xl">
            <h2 className="text-[32px] font-serif font-light border-b border-neutral-200 dark:border-neutral-800 pb-2 mb-8 tracking-tight text-neutral-900 dark:text-white uppercase">
                Experience
            </h2>

            <div className="space-y-4">
                {fullTimeJobs.map((job, idx) => {
                    const Content = (
                        <div key={idx} className={`flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 group py-2 transition-all duration-300 ${idx === 0 ? "pt-2" : ""}`}>
                            <div className="w-40 shrink-0">
                                <span className="text-[15px] font-bold font-outfit text-neutral-900 dark:text-ivory">
                                    {job.year}
                                </span>
                                <p className="text-[13px] font-black text-blush-text dark:text-blush mt-0.5 tracking-wider">{job.duration}</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-sans font-bold text-neutral-900 dark:text-ivory group-hover:text-blush-text dark:group-hover:text-blush transition-colors duration-300 tracking-tight">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 mb-1">
                                            <p className="text-[15px] font-bold font-outfit text-neutral-900 dark:text-white">
                                                {job.company}
                                            </p>
                                            {job.location && (
                                                <>
                                                    <span className="text-purple-500 text-sm">•</span>
                                                    <p className="text-[12px] font-normal text-neutral-900 dark:text-white tracking-wider">{job.location}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 shrink-0 mt-1">
                                        {job.link && <ExternalLink className="w-5 h-5 text-neutral-400 dark:text-neutral-500 group-hover:text-purple-500 transition-colors" />}
                                    </div>
                                </div>

                                {job.desc && (
                                    <p className="text-base text-neutral-900 dark:text-white max-w-2xl font-sans italic font-normal leading-relaxed mt-1">
                                        {job.desc}
                                    </p>
                                )}
                            </div>
                        </div>
                    );

                    return job.link ? (
                        <a
                            key={idx}
                            href={job.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block no-underline border-b border-neutral-100 dark:border-white/5 last:border-0 hover:bg-neutral-50 dark:hover:bg-white/[0.02] rounded-xl px-2 -mx-2 transition-colors"
                        >
                            {Content}
                        </a>
                    ) : (
                        <div key={idx} className="border-b border-neutral-100 dark:border-white/5 last:border-0 px-2 -mx-2">
                            {Content}
                        </div>
                    );
                })}

                <div className="pt-8 mt-4 border-t-2 border-neutral-900 dark:border-white">
                    <button
                        onClick={() => setShowInternships(!showInternships)}
                        className="w-full flex flex-col md:flex-row md:items-center justify-between group transition-colors mb-6 gap-2"
                    >
                        <h3 className="text-[32px] font-serif font-light text-neutral-900 dark:text-white tracking-tight uppercase text-left w-full md:w-auto">
                            Internships
                        </h3>
                        <div className="flex items-center gap-3 text-blush-text dark:text-blush font-bold underline decoration-2 underline-offset-4 decoration-blush-text/30 dark:decoration-blush/30 group-hover:decoration-blush-text dark:group-hover:decoration-blush transition-all self-start md:self-auto">
                            <span className="text-sm uppercase tracking-widest">{showInternships ? "Collapse" : "Expand"} ({internships.length})</span>
                            <div className="p-1 rounded-full bg-blush/10 transition-transform duration-300">
                                {showInternships ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                            </div>
                        </div>
                    </button>

                    {showInternships && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                            {internships.map((job, idx) => {
                                const Content = (
                                    <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 group py-1 transition-all duration-300">
                                        <div className="w-40 shrink-0">
                                            <span className="text-[14px] font-bold font-outfit text-neutral-900 dark:text-ivory uppercase tracking-wider">
                                                {job.year}
                                            </span>
                                            <p className="text-[12px] font-black text-blush-text/90 dark:text-blush/80 mt-0.5 tracking-wide">{job.duration}</p>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-6">
                                                <div className="flex-1">
                                                    <h4 className="text-lg font-sans font-bold text-neutral-900 dark:text-ivory group-hover:text-blush-text dark:group-hover:text-blush transition-colors uppercase tracking-tight">
                                                        {job.title}
                                                    </h4>
                                                    <p className="text-[14px] font-bold font-outfit text-neutral-600 dark:text-parchment mt-[2px]">
                                                        {job.company}
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-4 shrink-0 mt-1">
                                                    {job.link && job.link !== "#" && <ExternalLink className="w-5 h-5 text-neutral-400 dark:text-neutral-500 group-hover:text-purple-500 transition-colors" />}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );

                                return (job.link && job.link !== "#") ? (
                                    <a
                                        key={idx}
                                        href={job.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block no-underline border-b border-neutral-100 dark:border-white/5 last:border-0 hover:bg-neutral-50 dark:hover:bg-white/[0.02] rounded-xl px-2 -mx-2 transition-colors"
                                    >
                                        {Content}
                                    </a>
                                ) : (
                                    <div key={idx} className="border-b border-neutral-100 dark:border-white/5 last:border-0 px-2 -mx-2">
                                        {Content}
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </GlassCard>
    );
}
