"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    const [announcement, setAnnouncement] = React.useState("");

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const handleThemeToggle = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        setAnnouncement(`${newTheme} mode activated`);
    };

    if (!mounted) {
        return <div className="w-9 h-9" />; // Avoid hydration mismatch
    }

    return (
        <>
            <button
                onClick={handleThemeToggle}
                className="relative p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 0 : 1,
                    opacity: theme === "dark" ? 0 : 1,
                    rotate: theme === "dark" ? 90 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="h-5 w-5 text-orange-500" />
            </motion.div>

            <motion.div
                initial={false}
                animate={{
                    scale: theme === "dark" ? 1 : 0,
                    opacity: theme === "dark" ? 1 : 0,
                    rotate: theme === "dark" ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="h-5 w-5 text-blue-400" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
            <div className="w-5 h-5" /> {/* Spacer for layout */}
        </button>
        <span role="status" aria-live="polite" className="sr-only">
            {announcement}
        </span>
        </>
    );
}
