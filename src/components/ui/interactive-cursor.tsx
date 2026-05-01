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
        <div className="pointer-events-none z-[9999] hidden md:block">
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                    translateX: "-50%",
                    translateY: "-50%"
                }}
                className="fixed top-0 left-0"
            >
                {/* Simplified Dot Core */}
                <motion.div
                    animate={{
                        scale: isHovering ? 2.5 : 1,
                        backgroundColor: isHovering ? "#F79CBa" : "#F79CBa", // Always blush
                        opacity: isHovering ? 0.8 : 1
                    }}
                    className="w-2 h-2 rounded-full absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(247,156,186,0.5)]"
                />

                {/* Outer Ring for Hover */}
                <motion.div
                    animate={{
                        scale: isHovering ? 1.5 : 0,
                        opacity: isHovering ? 0.3 : 0
                    }}
                    className="w-8 h-8 rounded-full border border-[#F79CBa] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
                />

                {/* Contextual Action Tooltip */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 30 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-1/2 -translate-x-1/2 py-1 px-3 bg-neutral-900/80 dark:bg-white/90 text-white dark:text-black text-[9px] font-bold uppercase tracking-[0.2em] rounded-full backdrop-blur-sm whitespace-nowrap"
                        >
                            {hoverLabel}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
