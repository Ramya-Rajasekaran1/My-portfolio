"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { HoverGradientChip } from "@/components/ui/hover-gradient-chip";

export function SkillsAndStats() {
    const [activeIdx, setActiveIdx] = useState(0);
    const achievements = [
        {
            value: "6+",
            label: "Years Experience",
            color: "text-purple-600",
            bgColor: "bg-purple-500/10",
            borderColor: "border-purple-500/20"
        },
        {
            value: "5M",
            label: "Users Reached",
            color: "text-indigo-600",
            bgColor: "bg-indigo-500/10",
            borderColor: "border-indigo-500/20"
        },
        {
            value: "70K+",
            label: "Products Ecomm Redesign",
            color: "text-purple-700",
            bgColor: "bg-purple-600/10",
            borderColor: "border-purple-600/20"
        },
        {
            value: "3.2M",
            label: "Revamped daily shipment tracking platform",
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
        <section className="py-16 bg-canvas border-t border-b border-neutral-200/50 dark:border-white/5 relative overflow-hidden">
            {/* Ambient Background Sphere for section decoration */}
            <div className="absolute top-1/2 -right-16 w-32 h-32 css-sphere opacity-10 hidden md:block" style={{ animationDelay: "-3s" }} />

            <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-12 relative z-10">
                {/* Top: Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.label}
                            className="bg-neutral-100/60 dark:bg-neutral-900/60 backdrop-blur-md p-6 rounded-[24px] border-none shadow-sm flex flex-col items-start"
                        >
                            <div className="space-y-2 font-outfit w-full">
                                <p className="text-3xl md:text-4xl font-black text-blush leading-none">
                                    {achievement.value}
                                </p>
                                <p className="text-[11px] md:text-[12px] uppercase tracking-widest font-bold text-neutral-500 dark:text-neutral-400">
                                    {achievement.label}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Divider Line */}
                <div className="h-px bg-neutral-200/50 dark:bg-white/5 w-full" />

                {/* Bottom: Skills Grid */}
                <div className="flex flex-col gap-5">
                    <span className="text-xs font-bold uppercase tracking-[0.08em] text-blush flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blush" />
                        Core Competencies
                    </span>
                    <div 
                        onMouseLeave={() => setActiveIdx(0)}
                        className="flex flex-wrap justify-start gap-2.5 md:gap-3.5 w-full"
                    >
                        {skills.map((skill, idx) => (
                            <div 
                                key={skill.name}
                                onMouseEnter={() => setActiveIdx(idx)}
                            >
                                <HoverGradientChip 
                                    text={skill.name} 
                                    isHighlighted={idx === activeIdx}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
