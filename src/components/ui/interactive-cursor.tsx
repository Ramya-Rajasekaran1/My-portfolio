"use client";

import * as React from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function InteractiveCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Snappier but smooth spring for a designer-tool feel
    const springConfig = { damping: 40, stiffness: 350 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = React.useState(false);
    const [hoverLabel, setHoverLabel] = React.useState("");
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            if (!isVisible) setIsVisible(true);
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setCoords({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            const clickable = target.closest('a, button, [role="button"], input, textarea') as HTMLElement;

            if (clickable) {
                setIsHovering(true);
                // Clean labels: No underscores, space allowed
                const label = (clickable.getAttribute('aria-label') || clickable.textContent?.trim().slice(0, 15) || "SELECT").replace(/_/g, ' ');
                setHoverLabel(label.toUpperCase());
            } else {
                setIsHovering(false);
                setHoverLabel("");
            }
        };

        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
            {/* Main Crosshair Container */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className="absolute"
            >
                {/* Horizontal Scale Line */}
                <motion.div
                    animate={{ width: isHovering ? 80 : 40 }}
                    className="h-[1.5px] bg-neutral-900 dark:bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-colors duration-300"
                />
                {/* Vertical Scale Line */}
                <motion.div
                    animate={{ height: isHovering ? 80 : 40 }}
                    className="w-[1.5px] bg-neutral-900 dark:bg-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-colors duration-300"
                />

                {/* High Contrast Core */}
                <motion.div
                    animate={{
                        scale: isHovering ? 2 : 1,
                        rotate: isHovering ? 45 : 0,
                        backgroundColor: isHovering ? "#8b5cf6" : "#000", // Using Purple highlight
                        borderColor: isHovering ? "transparent" : (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? "#fff" : "transparent")
                    }}
                    className="w-2.5 h-2.5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_20px_rgba(139,92,246,0.5)] border border-white/20"
                />

                {/* Tracking Metrics */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    className="absolute top-10 left-10 flex flex-col gap-1.5"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-900 dark:text-neutral-400">X {Math.round(coords.x)}</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-neutral-900 dark:text-neutral-400">Y {Math.round(coords.y)}</span>
                </motion.div>

                {/* Contextual Action Tooltip */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 50 }}
                            exit={{ opacity: 0, scale: 0.8, x: 20 }}
                            className="absolute -top-12 left-12 py-1.5 px-4 bg-neutral-900 dark:bg-white text-white dark:text-black text-[10px] font-black uppercase tracking-[0.3em] shadow-[8px_8px_0_#8b5cf6] whitespace-nowrap transition-colors duration-300"
                        >
                            {hoverLabel}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Background Aesthetic Spinning Layer */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                animate={{
                    rotate: 360,
                    scale: isHovering ? 1.5 : 1
                }}
                transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" } }}
                className="absolute w-20 h-20 border border-dashed border-neutral-900/10 dark:border-white/10 flex items-center justify-center opacity-40 transition-colors duration-300"
            >
                <div className="w-1 h-1 bg-neutral-900/20 dark:bg-white/20 rounded-full" />
            </motion.div>
        </div>
    );
}
