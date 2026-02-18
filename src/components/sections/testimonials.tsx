"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

// Ensure we have enough items for a smooth loop by duplicating the list
const repeatedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export function Testimonials() {
    const [isHovered, setIsHovered] = useState(false);
    const [expandedCount, setExpandedCount] = useState(0);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleToggle = (isExpanded: boolean) => {
        setExpandedCount(prev => isExpanded ? prev + 1 : prev - 1);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -500, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 500, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-background">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-neutral-900/[0.05] dark:bg-grid-white/[0.05] bg-[size:32px_32px] [mask-image:radial-gradient(white,transparent_85%)] pointer-events-none" />

            <div className="container mx-auto px-4 mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Recommendation
                    </h2>
                    <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                        Feedback from colleagues and clients I've had the pleasure of working with.
                    </p>
                </motion.div>
            </div>

            <div className="relative w-full overflow-hidden mask-fade-edges">
                {/* Gradient masks for edges */}
                <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />

                {/* CSS Scroll Animation */}
                <style jsx global>{`
                    @keyframes scroll-left {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                `}</style>

                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 py-4 overflow-x-auto scrollbar-hide scroll-smooth"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <div
                        className="flex gap-6 flex-nowrap items-start"
                        style={{
                            animation: "scroll-left 500s linear infinite",
                            animationPlayState: (isHovered || expandedCount > 0) ? "paused" : "running",
                            width: "fit-content"
                        }}
                    >
                        {/* We double the list inside the div to create the seamless loop effect */}
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

            {/* Navigation Arrows - Below Carousel */}
            <div className="flex justify-center gap-4 mt-6 relative z-10">
                <button
                    onClick={scrollLeft}
                    className="group p-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-purple-400/50"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={3} />
                </button>
                <button
                    onClick={scrollRight}
                    className="group p-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-purple-400/50"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" strokeWidth={3} />
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
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className={`relative group w-[320px] md:w-[480px] flex-shrink-0 p-8 rounded-xl bg-purple-500/5 dark:bg-purple-500/5 hover:bg-purple-500/10 dark:hover:bg-purple-500/10 border backdrop-blur-md transition-colors duration-300 flex flex-col justify-between ${isExpanded ? "border-purple-500/50 dark:border-purple-500/50" : "border-transparent hover:border-purple-500/50 dark:hover:border-purple-500/50"}`}
        >
            <div className="flex justify-end mb-2">
                <Quote className="w-8 h-8 text-purple-500 fill-purple-500" />
            </div>

            <div className="flex flex-col gap-4 mb-4">
                <p className={`text-base leading-relaxed text-neutral-800 dark:text-neutral-200 font-medium ${isExpanded ? "" : "line-clamp-4"}`}>
                    "{item.text}"
                </p>

                <button
                    onClick={handleReadMore}
                    className="text-sm font-bold text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 self-start focus:outline-none"
                >
                    {isExpanded ? "Read less" : "Read more"}
                </button>
            </div>

            <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-lg font-bold text-purple-600 dark:text-purple-400 ring-2 ring-background shrink-0">
                    {item.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-sm text-neutral-900 dark:text-neutral-100">{item.name}</h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {item.role} @ <span className="text-purple-600 dark:text-purple-400 font-medium">{item.company}</span>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
