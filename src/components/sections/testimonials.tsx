"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

// Define Categories
const CATEGORIES = [
    { id: "all", label: "All Recommendations" },
    { id: "boeing", label: "Boeing" },
    { id: "tech", label: "Tech & SaaS" },
    { id: "academic", label: "Academic & Creative" },
];

export function Testimonials() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [isHovered, setIsHovered] = useState(false);
    const [expandedCount, setExpandedCount] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Reset scroll when category changes
    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollLeft = 0;
        }
    }, [activeCategory]);

    // Filter testimonials based on category
    const filteredTestimonials = testimonials.filter(t => {
        if (activeCategory === "all") return true;
        if (activeCategory === "boeing") {
            return t.company.toLowerCase().includes("boeing") || t.company.toLowerCase() === "ecommerce team";
        }
        if (activeCategory === "tech") {
            return ["amazon", "blubirch", "bi data projects", "fourkites"].some(c => t.company.toLowerCase().includes(c));
        }
        if (activeCategory === "academic") {
            return ["university", "rmit", "rrd"].some(c => t.company.toLowerCase().includes(c));
        }
        return true;
    });

    // Ensure we have enough items for a smooth loop by duplicating the list
    const repeatedTestimonials = [...filteredTestimonials, ...filteredTestimonials, ...filteredTestimonials, ...filteredTestimonials];

    const handleToggle = (isExpanded: boolean) => {
        setExpandedCount(prev => isExpanded ? prev + 1 : prev - 1);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-neutral-900/[0.05] dark:bg-grid-white/[0.05] bg-[size:32px_32px] [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />

            <div className="container mx-auto px-4 mb-16 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-tight">
                        Recommendation
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg font-sans">
                        Feedback from colleagues and clients I&apos;ve had the pleasure of working with.
                    </p>
                </motion.div>

                {/* Category Selector */}
                <div className="flex flex-wrap justify-center gap-2 mt-12 relative z-10">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-bold font-outfit tracking-widest transition-all duration-300 border",
                                activeCategory === cat.id
                                    ? "bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/30 ring-2 ring-purple-600/20"
                                    : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:border-purple-500/50"
                            )}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="relative w-full overflow-hidden mask-fade-edges">
                {/* CSS Scroll Animation */}
                <style jsx global>{`
                    @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .mask-fade-edges {
                        mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
                    }
                `}</style>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 py-4 overflow-x-auto scrollbar-hide scroll-smooth px-4"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div
                        className="flex gap-8 flex-nowrap items-start"
                        style={{
                            animation: "scroll-left 400s linear infinite",
                            animationPlayState: (isHovered || expandedCount > 0) ? "paused" : "running",
                            width: "fit-content"
                        }}
                    >
                        {/* Double the list for seamless loop */}
                        {[...repeatedTestimonials, ...repeatedTestimonials].map((item, idx) => (
                            <TestimonialCard
                                key={`${item.id}-${idx}`}
                                item={item}
                                onToggle={handleToggle}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-12 relative z-10">
                <button
                    onClick={scrollLeft}
                    className="group p-4 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-purple-500 transition-colors" />
                </button>
                <button
                    onClick={scrollRight}
                    className="group p-4 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-purple-500 transition-colors" />
                </button>
            </div>
        </section>
    );
}

function TestimonialCard({ item, onToggle }: { item: Testimonial, onToggle: (isExpanded: boolean) => void }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        const newState = !isExpanded;
        setIsExpanded(newState);
        onToggle(newState);
    };

    return (
        <motion.div
            className={cn(
                "relative group flex-shrink-0 p-8 rounded-2xl bg-white dark:bg-neutral-900/50 border backdrop-blur-md transition-all duration-500 flex flex-col shadow-sm hover:shadow-xl",
                "w-[280px] md:w-[340px]",
                isExpanded ? "border-purple-500/50 dark:border-purple-500/50 h-auto" : "border-neutral-200 dark:border-neutral-800 hover:border-purple-500/50 min-h-[400px]"
            )}
        >
            <div className="mb-6">
                <h4 className="font-bold text-base text-neutral-900 dark:text-neutral-100 leading-tight">{item.name}</h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans mt-1 uppercase tracking-widest">
                    {item.role}
                </p>
                <p className="text-xs text-purple-600 dark:text-purple-400 font-bold font-outfit mt-1">
                    {item.company}
                </p>
            </div>

            <div className="flex-grow flex flex-col gap-4">
                <p className={cn(
                    "text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-sans italic",
                    !isExpanded && "line-clamp-[10]"
                )}>
                    &ldquo;{item.text}&rdquo;
                </p>

                {item.text.length > 200 && (
                    <button
                        onClick={handleReadMore}
                        className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 self-start font-outfit uppercase tracking-widest mt-2"
                    >
                        {isExpanded ? "Read less" : "Read more"}
                    </button>
                )}
            </div>
        </motion.div>
    );
}
