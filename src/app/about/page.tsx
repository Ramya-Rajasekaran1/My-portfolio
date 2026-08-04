"use client";

import { GlassCard } from "@/components/ui/glass-card";
import * as React from "react";
import { ExternalLink, ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Certifications } from "@/components/sections/certifications";

const HandwrittenCaption = ({ text, className }: { text: string; className?: string }) => (
    <div className={cn(
        "absolute z-20 bg-white dark:bg-neutral-800 px-4 py-1.5 rounded-sm shadow-md border border-neutral-200 dark:border-white/10",
        "font-outfit font-black italic uppercase tracking-wider text-[11px] md:text-xs text-blush dark:text-orange-400 pointer-events-none whitespace-nowrap",
        className
    )}>
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-3 bg-white/40 dark:bg-black/20 backdrop-blur-sm rotate-2 border border-black/5" />
        {text}
    </div>
);

export default function AboutPage() {
    return (
        <main id="main-content" className="min-h-screen pt-32 md:pt-36 pb-16 transition-colors duration-300 bg-neutral-50 dark:bg-neutral-950 overflow-x-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Top Section with Graph Background - Redesigned in two columns */}
                    <div className="relative mb-16 rounded-[24px] overflow-hidden bg-white/30 dark:bg-neutral-900/20 backdrop-blur-sm border border-neutral-200/20 dark:border-white/5 shadow-md">
                        {/* Graph Box Background */}
                        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 dark:opacity-20" />

                        <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-8 items-center justify-between">
                            {/* Left Column: Text Content */}
                            <div className="flex-1 max-w-2xl">
                                <span className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-[0.08em] text-blush mb-3">
                                    <span className="w-4 h-[3px] bg-blush rounded-[2px]" />
                                    About Me
                                </span>
                                <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-extralight tracking-tight text-neutral-900 dark:text-white mb-6">
                                    Ramya Rajasekaran
                                </h1>

                                <div className="space-y-6 pt-2">
                                    <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed font-serif font-normal italic">
                                        I love Music both carnatic & Western. I am a big coffee lover and love Dogs and animals in general. I am keen on being physically fit and always curious to try new things: Pickleball, badminton, canyoneering, jetski, hikes, zumba.
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Illustration (Claymorphic Capybara Mascot) */}
                            <div className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] shrink-0 relative flex items-center justify-center">
                                <div className="w-full h-full rounded-[24px] p-4 bg-white dark:bg-black shadow-[0_30px_60px_-15px_rgba(15,23,42,0.12),inset_-6px_-6px_12px_rgba(15,23,42,0.04),inset_6px_6px_12px_rgba(255,255,255,1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),inset_-6px_-6px_12px_rgba(0,0,0,0.8),inset_6px_6px_12px_rgba(255,255,255,0.03)] border border-neutral-200/20 dark:border-neutral-800 flex items-center justify-center overflow-hidden animate-float-3d">
                                    <img
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/claymorphic_capybara.png`}
                                        alt="Ramya's Claymorphic Capybara Mascot"
                                        className="w-full h-full object-cover rounded-[16px]"
                                    />
                                </div>
                                <div className="absolute css-sphere w-8 h-8 -top-3 -right-3" style={{ animationDuration: "5s" }} />
                                <div className="absolute css-sphere w-6 h-6 -bottom-2 -left-2" style={{ animationDuration: "4s", animationDelay: "-2s" }} />
                            </div>
                        </div>
                    </div>

                    {/* Personal Bento Grid Section */}
                    <section className="mb-20">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
                            {/* 1. Waterfall - canyoneering */}
                            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group relative shadow-lg">
                                <img
                                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/Home/WhatsApp Image 2026-03-18 at 14.03.00.jpeg`}
                                    alt="Waterfall Adventure"
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                ></img>
                                <HandwrittenCaption text="canyoneering" className="top-6 right-8 rotate-3" />
                                <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>

                            {/* 2. Chicago Skydeck */}
                            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden group relative shadow-lg">
                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/new_photo_1.jpg`} alt="Chicago Skydeck" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Chicago Skydeck" className="top-6 left-6 -rotate-2 scale-90" />
                            </div>

                            {/* 3. Paris Las Vegas */}
                            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/5 group relative shadow-md">
                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/new_photo_2.jpg`} alt="Paris Las Vegas" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Paris Las Vegas" className="top-6 left-4 -rotate-3 scale-90" />
                            </div>

                            {/* 4. Music */}
                            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden group relative shadow-lg">
                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/music_ukulele.jpg`} alt="Playing Ukulele" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Music" className="top-6 left-6 rotate-2 scale-90" />
                            </div>

                            {/* 5. Bryce Canyon */}
                            <div className="col-span-1 row-span-2 rounded-3xl overflow-hidden border border-neutral-200 dark:border-white/5 group relative shadow-md">
                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/new_photo_3.jpg`} alt="Bryce Canyon" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Bryce Canyon" className="top-6 left-4 rotate-3 scale-90" />
                            </div>

                            {/* 6. Cockpit Visit */}
                            <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden group relative shadow-lg bg-neutral-100 dark:bg-neutral-900/50">
                                <img src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/about/cockpit_final.jpg`} alt="New Cockpit Visit" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <HandwrittenCaption text="Inside Cockpit" className="bottom-6 right-4 -rotate-1" />
                            </div>
                        </div>
                    </section>



                    {/* A Bit About Me Section */}
                    <section className="mb-24">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-4xl md:text-5xl font-outfit font-extralight tracking-tight text-neutral-900 dark:text-white text-center md:text-left">The Professional Story</h2>
                            <div className="h-px bg-neutral-200/50 dark:bg-white/5 flex-1 ml-6 hidden md:block" />
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
                                    bg: "bg-blush/5",
                                    accent: "#F97316"
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
                                        "clay-card group relative p-8 overflow-hidden rounded-[24px]",
                                        item.gridClass
                                    )}
                                >
                                    {/* Spotlight Glow Effect */}
                                    <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: item.accent }} />

                                    <div className="relative flex flex-col h-full z-10">
                                        <div className="mb-6 flex items-center justify-between">
                                            <div className="w-12 h-12 rounded-[12px] flex items-center justify-center text-xl shadow-inner border border-neutral-200/50 dark:border-white/5" style={{ background: `${item.accent}15`, color: item.accent }}>
                                                🔹
                                            </div>
                                            <span className="font-outfit font-black italic text-2xl text-neutral-350 dark:text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                                0{i + 1}
                                            </span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-outfit font-black text-neutral-900 dark:text-white mb-4 leading-tight tracking-tight">
                                            {item.title}
                                        </h3>
                                        <p className="text-[15px] text-neutral-600 dark:text-neutral-400 font-serif font-normal leading-relaxed mt-auto">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Subtle Gradient Overlay */}
                                    <div className={cn("absolute inset-0 -z-10 opacity-30 dark:opacity-10", item.bg)} />
                                </motion.div>
                            ))}
                        </div>
                    </section>



                    {/* Certifications Section */}
                    <Certifications />

                    {/* Background Grid Pattern for Experience */}
                    <div className="relative mb-20">
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
        <div className="clay-card p-6 md:p-10">
            <h2 className="text-4xl md:text-5xl font-outfit font-extralight border-b border-neutral-200/50 dark:border-white/5 pb-4 mb-8 tracking-tight text-neutral-900 dark:text-white">
                Experience
            </h2>

            <div className="space-y-4">
                {fullTimeJobs.map((job, idx) => {
                    const Content = (
                        <div key={idx} className={`flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 group py-4 transition-all duration-300 ${idx === 0 ? "pt-2" : ""}`}>
                            <div className="w-40 shrink-0">
                                <span className="text-[15px] font-bold font-outfit text-neutral-900 dark:text-white">
                                    {job.year}
                                </span>
                                <p className="text-[13px] font-bold text-blush mt-0.5 tracking-wider">{job.duration}</p>
                            </div>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-6">
                                    <div className="flex-1">
                                        <h3 className="text-lg md:text-xl font-outfit font-black text-neutral-900 dark:text-white group-hover:text-blush transition-colors duration-300 tracking-tight uppercase">
                                            {job.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1 mb-1">
                                            <p className="text-[14px] font-bold font-outfit text-neutral-700 dark:text-neutral-300">
                                                {job.company}
                                            </p>
                                            {job.location && (
                                                <>
                                                    <span className="text-blush text-sm">•</span>
                                                    <p className="text-[12px] font-normal text-neutral-500 dark:text-neutral-400 tracking-wider">{job.location}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 shrink-0 mt-1">
                                        {job.link && <ExternalLink className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-blush transition-colors" />}
                                    </div>
                                </div>
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

                <div className="pt-8 mt-4 border-t border-neutral-200/50 dark:border-white/5">
                    <button
                        onClick={() => setShowInternships(!showInternships)}
                        className="w-full flex flex-col md:flex-row md:items-center justify-between group transition-colors mb-6 gap-2"
                    >
                        <h3 className="text-2xl font-outfit font-black text-neutral-900 dark:text-white tracking-tight uppercase text-left w-full md:w-auto">
                            Internships
                        </h3>
                        <div className="flex items-center gap-3 text-blush font-bold underline decoration-2 underline-offset-4 decoration-blush/30 group-hover:decoration-blush transition-all self-start md:self-auto">
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
                                    <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 group py-4 transition-all duration-300">
                                        <div className="w-40 shrink-0">
                                            <span className="text-[14px] font-bold font-outfit text-neutral-900 dark:text-white uppercase tracking-wider">
                                                {job.year}
                                            </span>
                                            <p className="text-[12px] font-bold text-blush mt-0.5 tracking-wide">{job.duration}</p>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-start justify-between gap-6">
                                                <div className="flex-1">
                                                    <h4 className="text-base font-outfit font-black text-neutral-900 dark:text-white group-hover:text-blush transition-colors uppercase tracking-tight">
                                                        {job.title}
                                                    </h4>
                                                    <p className="text-[14px] font-bold font-outfit text-neutral-500 dark:text-neutral-400 mt-[2px]">
                                                        {job.company}
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-4 shrink-0 mt-1">
                                                    {job.link && job.link !== "#" && <ExternalLink className="w-4 h-4 text-neutral-400 dark:text-neutral-500 group-hover:text-blush transition-colors" />}
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
        </div>
    );
}
