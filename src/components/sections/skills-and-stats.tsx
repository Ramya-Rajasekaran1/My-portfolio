"use client";

import { cn } from "@/lib/utils";

export function SkillsAndStats() {
    const achievements = [
        {
            value: "5+",
            label: "Years Experience",
            color: "text-purple-600",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            value: "1M+",
            label: "Users Reached",
            color: "text-indigo-600",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20"
        },
        {
            value: "70K+",
            label: "Ecomm Redesign",
            color: "text-purple-700",
            bgColor: "bg-purple-600/10",
            borderColor: "border-purple-600/20"
        },
        {
            value: "3.2M",
            label: "Tracking Platform Redesign",
            color: "text-indigo-700",
            bgColor: "bg-indigo-600/10",
            borderColor: "border-indigo-600/20"
        }
    ];

    const skills = [
        { name: "Ux Research", color: "bg-blue-400" },
        { name: "Prototyping", color: "bg-purple-400" },
        { name: "Usability Testing", color: "bg-indigo-400" },
        { name: "Design Strategy", color: "bg-cyan-400" },
        { name: "Design Systems", color: "bg-violet-400" },
        { name: "Accessibility", color: "bg-pink-400" },
        { name: "Figma", color: "bg-blue-500" },
        { name: "AI Inclusivity Advocate", color: "bg-orange-400" },
        { name: "Ai Tools", color: "bg-yellow-400" },
        { name: "Human-Centered Design", color: "bg-emerald-400" },
    ];

    return (
        <section className="py-12 md:py-16 bg-canvas border-t border-b border-neutral-200 dark:border-white/10">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-10">
                {/* Top: Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.label}
                            className="group p-4 md:p-6 rounded-card bg-neutral-100 dark:bg-card/40 border border-neutral-200 dark:border-white/[0.05] flex flex-col items-start transition-colors hover:bg-blush/10 dark:hover:bg-blue-950/20"
                        >
                            <div className="space-y-2 font-outfit w-full">
                                <p className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-ivory leading-none">
                                    {achievement.value}
                                </p>
                                <p className="text-[11px] md:text-[12px] capitalize tracking-widest font-black text-neutral-500 dark:text-blush">
                                    {achievement.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider Line */}
                <div className="h-px bg-neutral-200 dark:bg-white/10 w-full" />

                {/* Bottom: Skills Grid */}
                <div className="flex flex-col gap-4">
                    <span className="text-[12px] font-black uppercase tracking-widest text-neutral-500 dark:text-blush">
                        Core Competencies
                    </span>
                    <div className="flex flex-wrap justify-start gap-2 md:gap-3 w-full">
                        {skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="flex items-center gap-2 px-3.5 py-2 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-pill shadow-sm"
                            >
                                <div className={cn("w-1.5 h-1.5 rounded-full", skill.color)} />
                                <span className="text-[10px] md:text-[11px] font-black tracking-widest text-neutral-900 dark:text-ivory uppercase">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
