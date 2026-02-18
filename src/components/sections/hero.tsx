"use client";

import { motion } from "framer-motion";
import { Calendar, Users, DollarSign, Package, Briefcase } from "lucide-react";

export function Hero() {
    const skills = [
        "UX Research",
        "User Testing",
        "Wireframing",
        "Prototyping",
        "Design Systems",
        "Accessibility",
        "Figma",
        "GenAI"
    ];

    const achievements = [
        {
            icon: Calendar,
            value: "4+",
            label: "Years Experience",
        },
        {
            icon: Users,
            value: "1M+",
            label: "Users Reached",
        },
        {
            icon: Package,
            value: "3.2M",
            label: "Daily Shipments",
        },
        {
            icon: DollarSign,
            value: "$2B",
            label: "Revenue Impact",
        }
    ];

    const industries = [
        "Aviation",
        "E-commerce",
        "Supply Chain",
        "Service Platforms"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0, filter: "blur(4px)" },
        visible: {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                duration: 0.5,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center pt-32 px-4 pb-0 relative overflow-hidden">
            {/* Background Ambience */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 50, 0],
                    y: [0, 30, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-0 left-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-200/40 via-transparent to-transparent dark:from-purple-900/20"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                    x: [0, -40, 0],
                    y: [0, -50, 0]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute bottom-0 right-0 w-full h-full -z-10 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-200/40 via-transparent to-transparent dark:from-blue-900/20"
            />

            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-5xl w-full p-6 md:p-10 rounded-3xl border border-white/30 dark:border-white/10 shadow-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl"
            >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                    {/* Left Side - Name and Logo Placeholder */}
                    <div className="flex flex-col items-center md:items-start gap-5 md:w-1/3">
                        {/* Logo - Floating Element */}
                        <motion.div
                            variants={itemVariants}
                            animate={{
                                y: [-8, 8, -8],
                                rotate: [-1, 1, -1]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-32 h-32 rounded-2xl flex items-center justify-center relative group"
                        >
                            <img
                                src="/images/brand/logo.png"
                                alt="Ramya Rajasekaran Logo"
                                className="w-full h-full object-contain drop-shadow-2xl brightness-110 dark:brightness-100"
                            />
                        </motion.div>

                        {/* Name */}
                        <motion.div variants={itemVariants} className="text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
                                Ramya Rajasekaran
                            </h1>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                                UX Designer
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 space-y-5">
                        <div className="space-y-3">
                            <motion.p variants={itemVariants} className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                UX Designer with 4+ yrs of experience leading end-to-end UX Design across varied industries such as aviation, e-commerce, supply chain, service-based platforms reaching 1M+ users and as complex as 3.2M daily shipments, $2B revenue.
                            </motion.p>

                            <motion.p variants={itemVariants} className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                                I designed award-winning UX solutions and presented a paper on GenAI Accessibility & usability research at IEEE, IndiaHCI, and delivered talks at design communities of 10K+.
                            </motion.p>
                        </div>

                        {/* Achievement Metrics - Neutral Colors */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {achievements.map((achievement, index) => {
                                const Icon = achievement.icon;
                                return (
                                    <motion.div
                                        key={achievement.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        className="p-2.5 rounded-lg bg-neutral-100/80 dark:bg-neutral-800/50 backdrop-blur-sm border border-neutral-200/50 dark:border-neutral-700/50 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-0.5 group"
                                    >
                                        <Icon className="w-4 h-4 text-neutral-600 dark:text-neutral-400 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
                                        <p className="text-lg font-bold text-neutral-900 dark:text-white">{achievement.value}</p>
                                        <p className="text-[9px] font-medium text-neutral-600 dark:text-neutral-400 leading-tight">{achievement.label}</p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        {/* Industry Experience Tags */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-neutral-600 dark:text-neutral-400" strokeWidth={2} />
                                <h3 className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 tracking-wider uppercase">
                                    Industry Experience
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {industries.map((industry, index) => (
                                    <motion.span
                                        key={industry}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.9 + index * 0.08 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-2.5 py-1 text-xs bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900 rounded-md font-medium hover:bg-neutral-900 dark:hover:bg-neutral-100 transition-colors"
                                    >
                                        {industry}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Skill Chips */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <h3 className="text-xs font-semibold text-neutral-600 dark:text-neutral-400 tracking-wider uppercase">
                                Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill, index) => (
                                    <motion.span
                                        key={skill}
                                        variants={itemVariants}
                                        custom={index}
                                        className="px-2.5 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-md border border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
