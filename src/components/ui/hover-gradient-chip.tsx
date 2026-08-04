import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HoverGradientChipProps {
    text: string;
    className?: string;
    paddingClass?: string;
}

export const HoverGradientChip: React.FC<HoverGradientChipProps> = ({ 
    text, 
    className,
    paddingClass = "px-4 py-2"
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({ x, y });
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative p-[1.5px] rounded-full overflow-hidden transition-all duration-300 cursor-default select-none",
                isHovered ? "" : "bg-neutral-300 dark:bg-neutral-800",
                className
            )}
            style={{
                background: isHovered
                    ? `radial-gradient(circle 50px at ${coords.x}px ${coords.y}px, #F97316 0%, #EC4899 45%, #3B82F6 100%)`
                    : undefined
            }}
        >
            <div className={cn("relative bg-canvas text-neutral-800 dark:text-neutral-200 rounded-full flex items-center justify-center w-full h-full", paddingClass)}>
                <span className="text-[10px] md:text-[11px] font-bold tracking-wider uppercase font-outfit">
                    {text}
                </span>
            </div>
        </div>
    );
};
