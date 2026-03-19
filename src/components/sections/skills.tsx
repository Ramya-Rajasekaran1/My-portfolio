"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";

const skills = [
    // Research skills
    { name: "User Interviews", category: "Research", size: "large", proficiency: 95 },
    { name: "Usability Testing", category: "Research", size: "large", proficiency: 90 },
    { name: "Persona Development", category: "Research", size: "medium", proficiency: 85 },
    { name: "Journey Mapping", category: "Research", size: "medium", proficiency: 88 },
    { name: "Competitive Analysis", category: "Research", size: "small", proficiency: 80 },

    // Design skills
    { name: "UI Design", category: "Design", size: "large", proficiency: 95 },
    { name: "Wireframing", category: "Design", size: "large", proficiency: 92 },
    { name: "Prototyping", category: "Design", size: "medium", proficiency: 90 },
    { name: "Design Systems", category: "Design", size: "medium", proficiency: 87 },
    { name: "Interaction Design", category: "Design", size: "small", proficiency: 85 },

    // Tools
    { name: "Figma", category: "Tools", size: "large", proficiency: 95 },
    { name: "Adobe XD", category: "Tools", size: "medium", proficiency: 85 },
    { name: "Sketch", category: "Tools", size: "medium", proficiency: 80 },
    { name: "Principle", category: "Tools", size: "small", proficiency: 75 },
    { name: "Webflow", category: "Tools", size: "small", proficiency: 78 },
];

const sizeClasses = {
    large: "w-32 h-32 md:w-40 md:h-40 text-base md:text-lg",
    medium: "w-24 h-24 md:w-32 md:h-32 text-sm md:text-base",
    small: "w-20 h-20 md:w-24 md:h-24 text-xs md:text-sm",
};

const categoryColors = {
    Research: "from-sky-500/20 to-sky-600/30 border-sky-400/40 hover:border-sky-400/70",
    Design: "from-purple-500/20 to-purple-600/30 border-purple-400/40 hover:border-purple-400/70",
    Tools: "from-blue-500/20 to-blue-600/30 border-blue-400/40 hover:border-blue-400/70",
};

export function Skills() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effects for 3D shapes
    const shape1Y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const shape2Y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const shape3Y = useTransform(scrollYProgress, [0, 1], [80, -80]);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden">
            {/* 3D Floating Geometric Shapes Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Shape 1 - Cube */}
                <motion.div
                    style={{ y: shape1Y }}
                    className="absolute top-20 left-[10%] w-32 h-32 opacity-10 dark:opacity-5"
                    animate={{
                        rotateX: [0, 360],
                        rotateY: [0, 360],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg transform-gpu"
                        style={{
                            transform: "perspective(1000px) rotateX(45deg) rotateY(45deg)",
                            boxShadow: "0 0 60px rgba(168, 85, 247, 0.4)"
                        }}
                    />
                </motion.div>

                {/* Shape 2 - Sphere */}
                <motion.div
                    style={{ y: shape2Y }}
                    className="absolute top-1/3 right-[15%] w-40 h-40 opacity-10 dark:opacity-5"
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full"
                        style={{
                            boxShadow: "0 0 80px rgba(99, 102, 241, 0.4)"
                        }}
                    />
                </motion.div>

                {/* Shape 3 - Pyramid */}
                <motion.div
                    style={{ y: shape3Y }}
                    className="absolute bottom-20 left-[20%] w-36 h-36 opacity-10 dark:opacity-5"
                    animate={{
                        rotateZ: [0, 360],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <div className="w-full h-full bg-gradient-to-br from-sky-500 to-blue-500 transform-gpu"
                        style={{
                            clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                            boxShadow: "0 0 60px rgba(14, 165, 233, 0.4)"
                        }}
                    />
                </motion.div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Expertise & Skills</h2>
                        <p className="text-white/80 font-light text-base md:text-lg">
                            Hover over the bubbles to explore my skillset and proficiency levels.
                        </p>
                    </motion.div>

                    {/* Interactive Skill Bubbles */}
                    <div className="relative min-h-[600px] flex items-center justify-center">
                        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 max-w-5xl">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * 0.05,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 15
                                    }}
                                    whileHover={{
                                        scale: 1.15,
                                        zIndex: 50,
                                        transition: { duration: 0.2 }
                                    }}
                                    onHoverStart={() => setHoveredSkill(skill.name)}
                                    onHoverEnd={() => setHoveredSkill(null)}
                                    className={`
                                        ${sizeClasses[skill.size as keyof typeof sizeClasses]}
                                        rounded-full
                                        bg-gradient-to-br ${categoryColors[skill.category as keyof typeof categoryColors]}
                                        backdrop-blur-sm
                                        border-2
                                        flex items-center justify-center
                                        cursor-pointer
                                        transition-all duration-300
                                        relative
                                        group
                                        shadow-lg hover:shadow-2xl
                                    `}
                                    style={{
                                        animation: `float ${3 + (index % 3)}s ease-in-out infinite`,
                                        animationDelay: `${index * 0.1}s`
                                    }}
                                >
                                    <div className="text-center px-3 font-semibold text-neutral-800 dark:text-white">
                                        {skill.name}
                                    </div>

                                    {/* Tooltip on hover */}
                                    {hoveredSkill === skill.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 
                                                bg-white dark:bg-neutral-900 
                                                px-4 py-2 rounded-lg shadow-xl
                                                border border-neutral-200 dark:border-neutral-700
                                                whitespace-nowrap z-50"
                                        >
                                            <div className="text-xs font-bold text-sky-600 dark:text-sky-400 mb-1">
                                                {skill.category}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className="text-sm text-neutral-600 dark:text-neutral-400">
                                                    Proficiency:
                                                </div>
                                                <div className="flex items-center gap-1">
                                                    <div className="w-16 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${skill.proficiency}%` }}
                                                            transition={{ duration: 0.5, delay: 0.1 }}
                                                            className="h-full bg-gradient-to-r from-purple-500 to-sky-500"
                                                        />
                                                    </div>
                                                    <span className="text-xs font-bold text-neutral-700 dark:text-neutral-300">
                                                        {skill.proficiency}%
                                                    </span>
                                                </div>
                                            </div>
                                            {/* Arrow */}
                                            <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 
                                                w-2 h-2 bg-white dark:bg-neutral-900 
                                                border-l border-t border-neutral-200 dark:border-neutral-700
                                                rotate-45"
                                            />
                                        </motion.div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Legend */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 flex flex-wrap justify-center gap-6 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-sky-500/40 to-sky-600/50 border-2 border-sky-400/60" />
                            <span className="text-neutral-600 dark:text-neutral-400">Research</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500/40 to-purple-600/50 border-2 border-purple-400/60" />
                            <span className="text-neutral-600 dark:text-neutral-400">Design</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-4 h-4 rounded-full bg-gradient-to-br from-blue-500/40 to-blue-600/50 border-2 border-blue-400/60" />
                            <span className="text-neutral-600 dark:text-neutral-400">Tools</span>
                        </div>
                    </motion.div>
                </div>
            </div>


        </section>
    );
}
