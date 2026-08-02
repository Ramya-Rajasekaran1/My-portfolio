"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number], // ease-out-expo
            },
        },
    };

    return (
        <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 pt-28 pb-12 relative overflow-hidden bg-canvas">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-6xl w-full relative z-10"
            >
                <div className="relative z-10 w-full flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: Profile Picture */}
                    <div className="w-full lg:w-[22rem] h-[280px] lg:h-[340px] shrink-0 relative rounded-xl overflow-hidden border border-neutral-200 dark:border-white/10 shadow-sm">
                        <img 
                            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/profile.jpg`}
                            alt="Ramya Rajasekaran"
                            className="w-full h-full object-cover object-[20%_center] absolute inset-0"
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="flex flex-col items-start gap-1">
                            <h1 className="text-2xl md:text-5xl font-extralight tracking-tight text-neutral-900 dark:text-ivory leading-none font-outfit">
                                Ramya Rajasekaran
                            </h1>
                            <p className="text-[13px] md:text-lg leading-tight font-bold font-outfit text-blush tracking-[0.1em] uppercase">
                                Senior product designer
                            </p>
                        </div>

                        <div className="text-left">
                            <p className="text-[14px] md:text-lg text-neutral-900 dark:text-white leading-relaxed font-light">
                                UX Designer with experience leading end-to-end process across <span className="font-medium dark:text-white">aviation, e-commerce, supply chain, B2B, B2C</span>. I design award-winning solutions and have published research on <span className="font-medium dark:text-white">Designing for Inclusivity in the Age of AI</span>, at IEEE and Industry case study at IndiaHCI.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
