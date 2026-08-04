"use client";

import React from "react";
import { motion } from "framer-motion";

interface AnimatedBlueprintLinesProps {
    opacity: any; // Mapped to scroll progress
}

export function AnimatedBlueprintLines({ opacity }: AnimatedBlueprintLinesProps) {
    return (
        <motion.div 
            style={{ opacity }}
            className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden"
        >
            {/* Top-Left SVG Segment */}
            <svg 
                className="absolute top-0 left-0 w-[40vw] h-[40vh]" 
                viewBox="0 0 500 400" 
                fill="none" 
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="laserGrad-tl" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
                        <stop offset="40%" stopColor="#FF6B00" stopOpacity="1" />
                        <stop offset="70%" stopColor="#FFB347" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFD6A5" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow-tl" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* Background line (subtle light blue) */}
                <path 
                    d="M 30,30 H 260 V 220 H 480" 
                    stroke="#3b82f6" 
                    strokeWidth="1.5" 
                    className="opacity-45 dark:opacity-[0.15]" 
                />
                {/* Travelling glowing highlight path */}
                <motion.path 
                    d="M 30,30 H 260 V 220 H 480" 
                    stroke="url(#laserGrad-tl)" 
                    strokeWidth="1.5" 
                    filter="url(#glow-tl)"
                    strokeDasharray="140 700"
                    animate={{ strokeDashoffset: [0, -840] }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </svg>

            {/* Top-Right SVG Segment */}
            <svg 
                className="absolute top-0 right-0 w-[40vw] h-[40vh]" 
                viewBox="0 0 500 400" 
                fill="none" 
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="laserGrad-tr" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FF6B00" stopOpacity="0" />
                        <stop offset="40%" stopColor="#FFB347" stopOpacity="1" />
                        <stop offset="70%" stopColor="#FF6B00" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFD6A5" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow-tr" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* Background line (subtle light blue) */}
                <path 
                    d="M 470,30 H 240 V 220 H 20" 
                    stroke="#3b82f6" 
                    strokeWidth="1.5" 
                    className="opacity-45 dark:opacity-[0.15]" 
                />
                {/* Travelling glowing highlight path */}
                <motion.path 
                    d="M 470,30 H 240 V 220 H 20" 
                    stroke="url(#laserGrad-tr)" 
                    strokeWidth="1.5" 
                    filter="url(#glow-tr)"
                    strokeDasharray="140 700"
                    animate={{ strokeDashoffset: [0, -840] }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2 // staggered starting offset
                    }}
                />
            </svg>

            {/* Bottom-Left SVG Segment */}
            <svg 
                className="absolute bottom-0 left-0 w-[40vw] h-[40vh]" 
                viewBox="0 0 500 400" 
                fill="none" 
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="laserGrad-bl" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFD6A5" stopOpacity="0" />
                        <stop offset="40%" stopColor="#FF6B00" stopOpacity="1" />
                        <stop offset="70%" stopColor="#FFB347" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow-bl" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* Background line (subtle light blue) */}
                <path 
                    d="M 30,370 H 260 V 180 H 480" 
                    stroke="#3b82f6" 
                    strokeWidth="1.5" 
                    className="opacity-45 dark:opacity-[0.15]" 
                />
                {/* Travelling glowing highlight path */}
                <motion.path 
                    d="M 30,370 H 260 V 180 H 480" 
                    stroke="url(#laserGrad-bl)" 
                    strokeWidth="1.5" 
                    filter="url(#glow-bl)"
                    strokeDasharray="140 700"
                    animate={{ strokeDashoffset: [0, -840] }}
                    transition={{
                        duration: 16,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 4
                    }}
                />
            </svg>

            {/* Bottom-Right SVG Segment */}
            <svg 
                className="absolute bottom-0 right-0 w-[40vw] h-[40vh]" 
                viewBox="0 0 500 400" 
                fill="none" 
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="laserGrad-br" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="#FFB347" stopOpacity="0" />
                        <stop offset="40%" stopColor="#FFD6A5" stopOpacity="1" />
                        <stop offset="70%" stopColor="#FF6B00" stopOpacity="1" />
                        <stop offset="100%" stopColor="#FFB347" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow-br" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                {/* Background line (subtle light blue) */}
                <path 
                    d="M 470,370 H 240 V 180 H 20" 
                    stroke="#3b82f6" 
                    strokeWidth="1.5" 
                    className="opacity-45 dark:opacity-[0.15]" 
                />
                {/* Travelling glowing highlight path */}
                <motion.path 
                    d="M 470,370 H 240 V 180 H 20" 
                    stroke="url(#laserGrad-br)" 
                    strokeWidth="1.5" 
                    filter="url(#glow-br)"
                    strokeDasharray="140 700"
                    animate={{ strokeDashoffset: [0, -840] }}
                    transition={{
                        duration: 14,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.5
                    }}
                />
            </svg>
        </motion.div>
    );
}
