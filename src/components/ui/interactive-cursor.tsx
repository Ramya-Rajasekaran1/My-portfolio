"use client";

import * as React from "react";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

export function InteractiveCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Snappier but smooth spring for a designer-tool feel
    const springConfig = { damping: 30, stiffness: 250 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = React.useState(false);
    const [hoverLabel, setHoverLabel] = React.useState("");
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
            setCoords({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            const clickable = target.closest('a, button, [role="button"]') as HTMLElement;

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

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    return (
        <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
            {/* Main Crosshair Container */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                }}
                className="absolute"
            >
                {/* Horizontal Scale Line */}
                <motion.div
                    animate={{ width: isHovering ? 80 : 40 }}
                    className="h-[1.5px] bg-black absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(247,165,1,0.3)]"
                />
                {/* Vertical Scale Line */}
                <motion.div
                    animate={{ height: isHovering ? 80 : 40 }}
                    className="w-[1.5px] bg-black absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_15px_rgba(247,165,1,0.3)]"
                />

                {/* High Contrast Core */}
                <motion.div
                    animate={{
                        scale: isHovering ? 2 : 1,
                        rotate: isHovering ? 45 : 0,
                        backgroundColor: isHovering ? "var(--posthog-orange)" : "#000"
                    }}
                    className="w-2 h-2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_0_20px_var(--posthog-orange)]"
                />

                {/* Tracking Metrics */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    className="absolute top-10 left-10 flex flex-col gap-1.5"
                >
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black">X {coords.x}</span>
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black">Y {coords.y}</span>
                </motion.div>

                {/* Contextual Action Tooltip */}
                <AnimatePresence>
                    {isHovering && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: 20 }}
                            animate={{ opacity: 1, scale: 1, x: 50 }}
                            exit={{ opacity: 0, scale: 0.8, x: 20 }}
                            className="absolute -top-12 left-12 py-1.5 px-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-[8px_8px_0_var(--posthog-orange)] whitespace-nowrap"
                        >
                            {hoverLabel}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* Background Aesthetic Layer */}
            <motion.div
                style={{
                    x: springX,
                    y: springY,
                }}
                animate={{
                    rotate: 360,
                    scale: isHovering ? 1.5 : 1
                }}
                transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" } }}
                className="absolute w-20 h-20 border-2 border-dashed border-black/5 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 opacity-20"
            >
                <div className="w-1.5 h-1.5 bg-black/10 rounded-full" />
            </motion.div>
        </div>
    );
}
