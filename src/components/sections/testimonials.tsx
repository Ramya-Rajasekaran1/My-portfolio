"use client";

import { motion } from "framer-motion";
import { testimonials, type Testimonial } from "@/data/testimonials";
import { useState } from "react";

const repeatedTestimonials = [...testimonials, ...testimonials];

export function Testimonials() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24 bg-[var(--background)] relative border-t border-black/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-zinc-400 block mb-4">Peer Validation</span>
                    <h2 className="font-serif text-3xl md:text-4xl leading-[1.1] text-zinc-800 mb-6">
                        Collaborator Insights.
                    </h2>
                </motion.div>
            </div>

            <div
                className="flex gap-16 md:gap-24 overflow-hidden relative group py-8"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Scrolling Marquee */}
                <motion.div
                    className="flex gap-16 md:gap-24 whitespace-nowrap"
                    initial={{ x: 0 }}
                    animate={{ x: isHovered ? "-2%" : "-50%" }}
                    transition={{
                        duration: 80,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {repeatedTestimonials.map((item, idx) => (
                        <motion.div
                            key={`${item.id}-${idx}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <QuoteBlock item={item} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Left/Right Overlays for seamless fade */}
                <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />
            </div>

        </section>
    );
}

function QuoteBlock({ item }: { item: Testimonial }) {
    return (
        <div className="w-[300px] md:w-[480px] flex-shrink-0 flex flex-col items-center text-center">
            <p className="text-xl md:text-2xl text-zinc-600 font-serif font-light leading-relaxed whitespace-normal italic mb-8">
                &ldquo;{item.text}&rdquo;
            </p>
            <div className="flex flex-col items-center gap-1">
                <h4 className="text-base font-sans tracking-wide text-zinc-800">{item.name}</h4>
                <div className="font-sans text-[10px] tracking-[0.1em] text-zinc-400 uppercase">
                    {item.role} <span className="mx-2 text-zinc-200">|</span> <span className="text-zinc-600">{item.company}</span>
                </div>
            </div>
        </div>
    );
}
