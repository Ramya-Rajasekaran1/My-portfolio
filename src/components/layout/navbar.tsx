"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Compass } from "lucide-react";
import { CommandPalette } from "./command-palette";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();
    const [time, setTime] = React.useState<string>("");

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <motion.header
            className="fixed top-0 left-0 right-0 z-[60] os-glass border-b border-black/5 px-8 h-20 flex items-center justify-between font-sans text-[11px] uppercase tracking-[0.1em] text-zinc-600 shadow-sm"
            initial={{ y: -64 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
            {/* Left Section: Studio Identity */}
            <div className="flex items-center gap-10">
                <Link href="/" className="flex items-center gap-4 group transition-all">
                    <div className="w-2 h-2 rounded-full bg-zinc-300 group-hover:bg-[var(--posthog-orange)] group-hover:scale-150 transition-all duration-500" />
                    <span className="font-serif text-lg tracking-normal text-black capitalize">Ramya Rajasekaran</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-10 border-l border-black/5 pl-10">
                    <Link href="/work" className={`hover:text-black transition-all pb-1 border-b ${pathname === '/work' ? 'border-black text-black' : 'border-transparent'}`}>Archive</Link>
                    <Link href="/about" className={`hover:text-black transition-all pb-1 border-b ${pathname === '/about' ? 'border-black text-black' : 'border-transparent'}`}>Profile</Link>
                    <Link href="/contact" className={`hover:text-black transition-all pb-1 border-b ${pathname === '/contact' ? 'border-black text-black' : 'border-transparent'}`}>Reach out</Link>
                </nav>
            </div>

            {/* Middle Section: Search Overlay */}
            <div className="flex-1 max-w-sm px-12">
                <CommandPalette />
            </div>

            {/* Right Section: Global Stats */}
            <div className="flex items-center gap-12">
                <div className="hidden xl:flex items-center gap-6">
                    <div className="flex items-center gap-3 px-4 py-1.5">
                        <span className="text-[10px] text-zinc-400">DESIGN & RESEARCH</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-300 pointer-events-none" />
                    </div>
                </div>

                <div className="flex items-center gap-4 border-l border-black/5 pl-12">
                    <div className="flex items-center gap-3 text-zinc-400">
                        <Clock className="w-3.5 h-3.5" />
                        <span className="min-w-[70px] font-sans text-xs tracking-wider">{time || "00:00"}</span>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
