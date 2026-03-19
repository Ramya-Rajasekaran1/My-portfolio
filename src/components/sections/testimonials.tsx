"use client";

import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const CATEGORIES = [
    { id: "leadership", label: "Leadership" },
    { id: "impact", label: "Impact" },
    { id: "collaboration", label: "Collaboration" },
    { id: "all", label: "All" },
];

export function Testimonials() {
    const [activeCategory, setActiveCategory] = useState("leadership");
    const [isHovered, setIsHovered] = useState(false);
    const [expandedCount, setExpandedCount] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [trackWidth, setTrackWidth] = useState(0);

    const filteredTestimonials = testimonials.filter(t => {
        if (activeCategory === "all") return true;
        const id = t.id;
        if (activeCategory === "leadership") return ["3", "11", "13", "15", "4"].includes(id);
        if (activeCategory === "impact") return ["14", "12", "10", "5"].includes(id);
        if (activeCategory === "collaboration") return ["1", "2", "6", "7", "8"].includes(id);
        return true;
    });

    // Seamless loop items
    const repeatedTestimonials = [...filteredTestimonials, ...filteredTestimonials, ...filteredTestimonials];

    const scrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: -400, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-neutral-50/50 dark:bg-neutral-900/50">
            <div className="container mx-auto px-4 mb-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-extralight mb-6 tracking-tight text-neutral-900 dark:text-white leading-none">
                            Kind Words <span className="font-serif italic font-light">& Impact</span>
                        </h2>
                        <p className="text-neutral-600 dark:text-white/80 max-w-xl text-base md:text-lg font-light leading-relaxed">
                            Feedback from colleagues and mentors across aviation, tech, and the global design community.
                        </p>
                    </motion.div>

                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={scrollLeft}
                            className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all active:scale-95 z-30"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={scrollRight}
                            className="p-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all active:scale-95 z-30"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mt-12 relative z-10">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "px-6 py-2.5 rounded-full text-xs font-bold font-outfit transition-all duration-300 border h-fit capitalize",
                                activeCategory === cat.id
                                    ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/30"
                                    : "bg-white dark:bg-neutral-900 border-neutral-300 dark:border-neutral-800 text-neutral-900 dark:text-white hover:border-purple-500/50"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative w-full group">
                <style jsx global>{`
                    .mask-fade-edges {
                        mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    }
                    @keyframes marquee-scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-33.333%); }
                    }
                    .animate-marquee-fluid {
                        animation: marquee-scroll 60s linear infinite;
                    }
                    .animate-marquee-fluid.paused {
                        animation-play-state: paused;
                    }
                    .testimonial-text strong {
                        font-weight: 800 !important;
                        text-decoration: none;
                        color: #000000; 
                    }
                    .dark .testimonial-text strong {
                        color: #ffffff;
                    }
                `}</style>

                <div 
                    ref={containerRef}
                    className="overflow-x-auto scrollbar-hide mask-fade-edges px-[10vw] py-8"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div 
                        className={cn(
                            "flex gap-8 w-max animate-marquee-fluid",
                            (isHovered || expandedCount > 0) && "paused"
                        )}
                    >
                        {repeatedTestimonials.map((item, idx) => (
                            <TestimonialCard
                                key={`${item.id}-${idx}`}
                                item={item}
                                onToggle={(isExpanded) => setExpandedCount(prev => isExpanded ? prev + 1 : prev - 1)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex md:hidden justify-center gap-6 mt-16 relative z-10">
                <button
                    onClick={scrollLeft}
                    className="p-5 rounded-full bg-purple-600 text-white shadow-xl active:scale-95"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={scrollRight}
                    className="p-5 rounded-full bg-purple-600 text-white shadow-xl active:scale-95"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </section>
    );
}

function TestimonialCard({ item, onToggle }: { item: Testimonial, onToggle: (isExpanded: boolean) => void }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isTruncated, setIsTruncated] = useState(false);
    const textRef = useRef<HTMLParagraphElement>(null);

    useLayoutEffect(() => {
        if (textRef.current) {
            const isOverflowing = textRef.current.scrollHeight > textRef.current.offsetHeight;
            setIsTruncated(isOverflowing);
        }
    }, [item.text]);

    const handleReadMore = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        onToggle(newState);
    };

    return (
        <div
            className={cn(
                "relative flex-shrink-0 p-8 md:p-10 rounded-[2rem] bg-white dark:bg-neutral-900 border backdrop-blur-md transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl",
                "w-[340px] md:w-[480px]",
                isExpanded ? "border-purple-500/40 h-auto" : "border-neutral-100 dark:border-white/5 hover:border-purple-500/30 min-h-[520px]"
            )}
        >
            <div className="mb-8 flex flex-col gap-3">
                <h4 className="text-xl md:text-2xl font-extrabold text-neutral-900 dark:text-white leading-tight font-outfit tracking-tight">
                    {item.role}
                </h4>
                <div className="text-lg font-bold text-neutral-600 dark:text-neutral-400 font-outfit tracking-tight">
                    {item.name}
                </div>
                <div className="text-lg md:text-xl font-serif font-normal text-purple-600 dark:text-purple-400">
                    {item.company}
                </div>
            </div>

            <div className="flex-grow flex flex-col gap-6">
                <p 
                    ref={textRef}
                    dangerouslySetInnerHTML={{ __html: `&ldquo;${item.text}&rdquo;` }}
                    className={cn(
                        "testimonial-text text-lg md:text-xl leading-relaxed text-neutral-700 dark:text-neutral-300 font-light italic transition-all duration-500",
                        !isExpanded && "line-clamp-[10]"
                    )}
                />

                {(isTruncated || isExpanded) && (
                    <button
                        onClick={handleReadMore}
                        className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 self-start font-outfit uppercase tracking-[0.3em] mt-4"
                    >
                        {isExpanded ? "Read less" : "Read more"}
                    </button>
                )}
            </div>
            
            <Quote className="absolute top-10 right-10 w-8 h-8 text-neutral-100 dark:text-white/5 group-hover:text-purple-500/20 transition-colors pointer-events-none" />
        </div>
    );
}
