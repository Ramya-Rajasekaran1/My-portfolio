"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Work", href: "/work" },
        { name: "Contact", href: "/contact" },
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

    return (
        <>
            <motion.header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 flex justify-center">
                    <div className={cn(
                        "flex items-center justify-between rounded-full transition-all duration-500 w-full",
                        isScrolled ? "glass py-2 px-4 mt-4 max-w-lg backdrop-blur-3xl" : "bg-transparent p-4 mt-6 max-w-5xl"
                    )}>
                        {/* Logo */}
                        <Link href="/" className="text-xl font-serif font-bold tracking-tight z-50 dark:text-ivory">
                            Ramya<span className="text-blush">.</span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav aria-label="Main navigation" className={cn(
                            "hidden md:flex items-center transition-all duration-500",
                            isScrolled ? "gap-4" : "gap-8"
                        )}>
                            {navLinks.map((link) => (
                                <motion.div
                                    key={link.name}
                                    initial="initial"
                                    whileHover="hover"
                                    className="relative flex items-center"
                                >
                                    <Link
                                        href={link.href}
                                        className="text-xs font-bold font-outfit text-neutral-600 dark:text-parchment hover:text-black dark:hover:text-ivory transition-colors uppercase tracking-widest px-1 py-1"
                                    >
                                        {link.name}
                                    </Link>
                                    <ScribbleUnderline />
                                </motion.div>
                            ))}
                        </nav>

                        {/* Actions */}
                        <div className="hidden md:flex items-center gap-4">
                            <button
                                className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-card-hover transition-colors"
                                aria-label="Search"
                            >
                                <Search className="w-5 h-5 text-neutral-600 dark:text-parchment" />
                            </button>
                            <ThemeToggle />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 z-50"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                            aria-expanded={isMobileMenuOpen}
                            aria-controls="mobile-menu"
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.header >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {
                    isMobileMenuOpen && (
                        <motion.div
                            id="mobile-menu"
                            role="navigation"
                            aria-label="Mobile navigation"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="fixed inset-0 z-40 bg-white/95 dark:bg-black/95 backdrop-blur-xl pt-24 px-6 md:hidden"
                        >
                            <nav className="flex flex-col gap-6 text-2xl font-black font-outfit uppercase tracking-tighter">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="block py-2 border-b border-neutral-100 dark:border-neutral-800"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex items-center gap-4 mt-4">
                                    <ThemeToggle />
                                    <span className="text-sm font-sans text-neutral-500">Switch Theme</span>
                                </div>
                            </nav>
                        </motion.div>
                    )
                }
            </AnimatePresence >
        </>
    );
}
