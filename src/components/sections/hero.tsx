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
            color: "text-blue-500",
            bgColor: "bg-blue-500/10",
            borderColor: "border-blue-500/20"
        },
        {
            icon: Users,
            value: "1M+",
            label: "Users Reached",
            color: "text-green-500",
            bgColor: "bg-green-500/10",
            borderColor: "border-green-500/20"
        },
        {
            icon: Package,
            value: "3.2M",
            label: "Daily Shipments",
            color: "text-orange-500",
            bgColor: "bg-orange-500/10",
            borderColor: "border-orange-500/20"
        },
        {
            icon: DollarSign,
            value: "$2B",
            label: "Revenue Impact",
            color: "text-purple-500",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        }
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
            {/* Background Ambience removed in favor of global InteractiveBackground */}


            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl w-full p-8 md:p-10 rounded-[2.5rem] border border-white/10 dark:border-white/[0.05] shadow-2xl bg-white/[0.01] dark:bg-black/[0.02] backdrop-blur-xl relative overflow-hidden group"
            >
                {/* Decorative inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent pointer-none" />

                {/* Mild Noise Effect */}
                <div
                    className="absolute inset-0 opacity-[0.05] dark:opacity-[0.03] pointer-events-none mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                    }}
                />

                <div className="relative z-10 flex flex-col gap-8">
                    {/* Header: Logo, Name, and Title */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-7">
                        {/* Logo Left Corner */}
                        <motion.div
                            variants={itemVariants}
                            animate={{
                                y: [-3, 3, -3],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center relative shrink-0"
                        >
                            <img
                                src="/images/brand/logo.png"
                                alt="Ramya Rajasekaran Logo"
                                className="w-full h-full object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.1)] brightness-110 dark:brightness-100"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="space-y-0.5">
                            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.25em] text-neutral-900 dark:text-white leading-none font-outfit">
                                Ramya Rajasekaran
                            </h1>
                            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-purple-600 dark:text-purple-400">
                                UX Designer
                            </p>
                        </motion.div>
                    </div>

                    {/* Bio Section - Left Aligned and Combined */}
                    <motion.div variants={itemVariants} className="max-w-3xl text-left">
                        <p className="text-[14px] text-neutral-800 dark:text-neutral-200 leading-relaxed font-medium">
                            <span className="font-bold tracking-tight">UX Designer with 4+ years of experience leading end-to-end UX Design across aviation, e-commerce, and supply chain, reaching <span className="text-purple-600 dark:text-purple-400">1M+ users</span>.</span>{" "}
                            I design award-winning solutions and conduct research on GenAI Accessibility, presenting at IEEE and IndiaHCI.
                        </p>
                    </motion.div>

                    {/* Stats/Achievements - Subtle and Left Aligned */}
                    <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                        {achievements.map((achievement, index) => {
                            const Icon = achievement.icon;
                            return (
                                <motion.div
                                    key={achievement.label}
                                    whileHover={{ y: -5 }}
                                    className="p-4 rounded-2xl bg-white/[0.03] dark:bg-white/[0.02] border border-white/10 dark:border-white/[0.05] flex flex-col items-start gap-2 transition-colors hover:bg-white/[0.08] dark:hover:bg-white/[0.05]"
                                >
                                    <Icon className={`w-5 h-5 ${achievement.color}`} strokeWidth={2} />
                                    <div className="space-y-0.5">
                                        <p className="text-xl font-bold text-white drop-shadow-md leading-none">{achievement.value}</p>
                                        <p className="text-[10px] uppercase tracking-widest font-black text-white/90 drop-shadow-sm">{achievement.label}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Skills - Modern Ghost Style */}
                    <div className="flex flex-wrap gap-2.5 mt-2">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                variants={itemVariants}
                                whileHover={{
                                    y: -2,
                                    backgroundColor: "rgba(147, 51, 234, 0.15)",
                                    borderColor: "rgba(147, 51, 234, 0.5)",
                                    transition: { duration: 0.2 }
                                }}
                                className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-neutral-800 dark:text-neutral-100 rounded-full border border-neutral-300 dark:border-white/20 bg-white/80 dark:bg-white/10 backdrop-blur-md transition-all duration-300 cursor-default group shadow-sm hover:shadow-md"
                            >
                                <span className="relative z-10 group-hover:text-purple-600 dark:group-hover:text-purple-300">
                                    {skill}
                                </span>
                            </motion.span>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
