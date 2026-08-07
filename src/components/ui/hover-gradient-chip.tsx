import React from "react";
import { cn } from "@/lib/utils";

interface HoverGradientChipProps {
    text: string;
    className?: string;
    paddingClass?: string;
    isHighlighted?: boolean;
}

export const HoverGradientChip: React.FC<HoverGradientChipProps> = ({ 
    text, 
    className,
    paddingClass = "px-4 py-2",
    isHighlighted = false
}) => {
    return (
        <div
            className={cn(
                "relative p-[1.5px] rounded-full overflow-hidden transition-all duration-300 cursor-default select-none",
                isHighlighted ? "" : "bg-neutral-300 dark:bg-neutral-800",
                className
            )}
            style={{
                background: isHighlighted
                    ? 'linear-gradient(135deg, #3B82F6 0%, #F97316 100%)'
                    : undefined
            }}
        >
            <div className={cn(
                "relative rounded-full flex items-center justify-center w-full h-full transition-all duration-300",
                isHighlighted ? "bg-transparent text-white" : "bg-canvas text-neutral-800 dark:text-neutral-200",
                paddingClass
            )}>
                <span className={cn(
                    "text-[10px] md:text-[11px] font-bold tracking-wider uppercase font-outfit transition-colors duration-300",
                    isHighlighted ? "text-white" : ""
                )}>
                    {text}
                </span>
            </div>
        </div>
    );
};
