"use client";

import React from "react";
import { motion } from "framer-motion";

export function PhilosophyQuote() {
    const quote = "Design is the bridge between complex systems and human intuition. Leadership is guiding teams to build with empathy, clarity, and inclusive intelligence.";
    
    // Split text into words to prevent wrapping cuts
    const words = quote.split(" ");

    // Container stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.015, // much faster cascade
                delayChildren: 0.05
            }
        }
    };

    // Word entrance animation variants
    const wordVariants = {
        hidden: { opacity: 0, y: 12 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25, // faster word fade-in
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    return (
        <section className="py-20 md:py-28 bg-canvas border-b border-neutral-200/50 dark:border-white/5 relative z-20 flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="flex flex-col items-center text-center">
                    
                    {/* Small tag */}
                    <span className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-[0.15em] text-blush mb-8">
                        <span className="w-4 h-[3px] bg-blush rounded-[2px]" />
                        Philosophy & Leadership
                    </span>

                    {/* Outer Scroll-Reveal Container - Unified scroll trigger */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-20px" }}
                        className="relative max-w-4xl"
                    >
                        {/* Inner Quote container with slow, hardware-accelerated floating animation */}
                        <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{
                                duration: 2.0, // faster floating
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{ willChange: "transform", backfaceVisibility: "hidden" }}
                        >
                            {/* Quote mark decoration */}
                            <span className="absolute -top-12 -left-6 text-7xl md:text-9xl font-serif italic text-neutral-100 dark:text-neutral-900/40 select-none pointer-events-none">
                                “
                            </span>

                            {/* Text Layer: Split Staggered word entrance */}
                            <motion.h3 
                                className="text-3xl md:text-4xl lg:text-5xl font-normal font-outfit tracking-tight leading-[1.25] text-neutral-900 dark:text-white select-text flex flex-wrap justify-center"
                            >
                                {words.map((word, wIdx) => (
                                    <motion.span 
                                        key={wIdx} 
                                        variants={wordVariants} 
                                        className="inline-block mr-3 mb-1.5 whitespace-nowrap"
                                        style={{ willChange: "transform, opacity", backfaceVisibility: "hidden" }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </motion.h3>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
