"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X, Accessibility } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isAccessibilityPanelOpen, setIsAccessibilityPanelOpen] = React.useState(false);
    const pathname = usePathname();
    const menuRef = React.useRef<HTMLDivElement>(null);
    const menuButtonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        const handleAccessOpen = () => setIsAccessibilityPanelOpen(true);
        const handleAccessClose = () => setIsAccessibilityPanelOpen(false);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("accessibility-panel-opened", handleAccessOpen);
        window.addEventListener("accessibility-panel-closed", handleAccessClose);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("accessibility-panel-opened", handleAccessOpen);
            window.removeEventListener("accessibility-panel-closed", handleAccessClose);
        };
    }, []);

    React.useEffect(() => {
        if (!isMobileMenuOpen) return;

        const menu = menuRef.current;
        if (!menu) return;

        const focusableElements = menu.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKey = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return;

            if (e.shiftKey) {
                if (document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                }
            } else {
                if (document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        };

        document.addEventListener('keydown', handleTabKey);
        firstElement?.focus();

        return () => document.removeEventListener('keydown', handleTabKey);
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: "About", href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/about/` },
        { name: "Work", href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/` },
        { name: "Explorations", href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/explorations/` },
        { name: "Contact", href: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/contact/` },
    ];

    const ScribbleUnderline = () => (
        <svg
            className="absolute -bottom-1 left-0 w-full h-2 overflow-visible pointer-events-none"
            viewBox="0 0 100 20"
            preserveAspectRatio="none"
        >
            <motion.path
                d="M5,12 C25,12 35,4 50,12 C65,20 80,12 95,12"
                stroke="currentColor"
                strokeWidth="4"
                fill="transparent"
                strokeLinecap="round"
                className="text-blush dark:text-blush"
                variants={{
                    initial: { pathLength: 0, opacity: 0 },
                    hover: { pathLength: 1, opacity: 1 },
                }}
                transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            />
        </svg>
    );
    const isProjectPage = pathname?.startsWith("/work/") && pathname !== "/work" && pathname !== "/work/";
    const isExplorationDetailPage = pathname?.startsWith("/explorations/") && pathname !== "/explorations" && pathname !== "/explorations/";
    if (isProjectPage || isExplorationDetailPage) return null;

    return (
        <header
            id="navbar"
            className={cn(
                "fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 pointer-events-auto",
                isScrolled ? "py-2" : "py-4"
            )}
        >
            <div className="container mx-auto px-4 flex justify-center pointer-events-none">
                <div className={cn(
                    "flex items-center justify-between rounded-full transition-all duration-500 w-full relative z-[3001] pointer-events-auto",
                    isScrolled ? "glass py-2 px-6 max-w-lg shadow-2xl" : "bg-transparent p-4 max-w-5xl"
                )}>
                    <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/`} 
                        className="text-xl font-serif font-bold tracking-tight z-[10000] dark:text-ivory relative pointer-events-auto"
                    >
                        Ramya<span className="text-blush">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <nav aria-label="Main navigation" className={cn(
                        "hidden md:flex items-center transition-all duration-500 z-[10000] relative pointer-events-auto",
                        isScrolled ? "gap-6" : "gap-10"
                    )}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium tracking-wide transition-all duration-300 px-2 py-1 z-[10000] cursor-pointer relative pointer-events-auto",
                                    pathname?.startsWith(link.href) ? "text-blush" : "text-neutral-600 dark:text-parchment hover:text-blush"
                                )}
                            >
                                {link.name}
                                {pathname?.startsWith(link.href) && (
                                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blush rounded-full" />
                                )}
                            </a>
                        ))}

                        <button
                            onClick={() => window.dispatchEvent(new Event("toggle-accessibility"))}
                            className="p-2 rounded-full hover:bg-white/10 transition-colors dark:text-ivory z-[10000] relative pointer-events-auto"
                            aria-label="Open accessibility settings"
                        >
                            <Accessibility className="w-5 h-5" />
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 dark:text-ivory z-[10000] relative pointer-events-auto"
                        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[10000] bg-white/95 dark:bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-8">
                             {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-4xl font-serif font-bold text-neutral-900 dark:text-ivory hover:text-blush transition-colors z-[10000] cursor-pointer relative pointer-events-auto"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
