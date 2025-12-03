"use client";

import * as React from "react";

export function InteractiveCursor() {
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);

    React.useEffect(() => {
        let rafId: number;

        const handleMouseMove = (e: MouseEvent) => {
            if (rafId) cancelAnimationFrame(rafId);

            rafId = requestAnimationFrame(() => {
                setMousePosition({ x: e.clientX, y: e.clientY });
                setIsVisible(true);

                // Check if hovering over clickable element
                const target = e.target as HTMLElement;
                const isClickable =
                    target.tagName === 'A' ||
                    target.tagName === 'BUTTON' ||
                    target.closest('a') !== null ||
                    target.closest('button') !== null ||
                    target.style.cursor === 'pointer' ||
                    window.getComputedStyle(target).cursor === 'pointer';

                setIsHovering(isClickable);
            });
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
            setIsHovering(false);
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseleave", handleMouseLeave);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <>
            {/* Neon Orange Glow Effect */}
            <div
                className="pointer-events-none fixed z-50 will-change-transform transition-transform duration-200"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.1 : 1})`,
                }}
            >
                <div className="w-20 h-20 bg-orange-500/40 dark:bg-orange-400/40 rounded-full blur-xl" />
            </div>

            {/* Center Pointer Dot */}
            <div
                className="pointer-events-none fixed z-[60] w-2 h-2 bg-orange-500 dark:bg-orange-400 rounded-full shadow-lg shadow-orange-500/80 will-change-transform transition-transform duration-200"
                style={{
                    left: `${mousePosition.x}px`,
                    top: `${mousePosition.y}px`,
                    transform: `translate(-50%, -50%) scale(${isHovering ? 1.3 : 1})`,
                }}
            />
        </>
    );
}
