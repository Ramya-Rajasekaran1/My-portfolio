"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailProps {
    email: string;
    className?: string;
}

export function CopyEmail({ email, className }: CopyEmailProps) {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    return (
        <div className={cn("flex items-center gap-3", className)}>
            <a
                href={`mailto:${email}`}
                className="text-xl md:text-2xl font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
                {email}
            </a>
            <button
                onClick={handleCopy}
                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors text-neutral-500 hover:text-purple-600 dark:text-neutral-400 dark:hover:text-purple-400"
                aria-label="Copy email to clipboard"
                title="Copy email"
            >
                {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                ) : (
                    <Copy className="w-5 h-5" />
                )}
            </button>
        </div>
    );
}
