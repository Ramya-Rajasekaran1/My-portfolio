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
            className="fixed top-0 left-0 right-0 z-[60] os-glass border-b-2 border-black px-6 h-16 flex items-center justify-between font-bold text-[10px] uppercase tracking-[0.3em] text-black shadow-sm"
            initial={{ y: -64 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
        >
            {/* Left Section: Studio Identity */}
            <div className="flex items-center gap-10">
                <Link href="/" className="flex items-center gap-4 group transition-all">
                    <div className="p-2 bg-black text-white group-hover:bg-[var(--posthog-orange)] transition-colors">
                        <Compass className="w-5 h-5" />
                    </div>
                    <span className="font-black tracking-[0.5em]">STUDIO OS</span>
                </Link>

                <nav className="hidden lg:flex items-center gap-8 border-l-2 border-black/5 pl-10">
                    <Link href="/work" className={`hover:text-black transition-all hover:bg-[var(--posthog-orange)] px-4 py-1.5 ${pathname === '/work' ? 'bg-black text-white' : ''}`}>[ARCHIVE]</Link>
                    <Link href="/about" className={`hover:text-black transition-all hover:bg-[var(--posthog-orange)] px-4 py-1.5 ${pathname === '/about' ? 'bg-black text-white' : ''}`}>[PROFILE]</Link>
                    <Link href="/contact" className={`hover:text-black transition-all hover:bg-[var(--posthog-orange)] px-4 py-1.5 ${pathname === '/contact' ? 'bg-black text-white' : ''}`}>[SIGNAL]</Link>
                </nav>
            </div>

            {/* Middle Section: Search Overlay */}
            <div className="flex-1 max-w-sm px-12">
                <CommandPalette />
            </div>

            {/* Right Section: Global Stats */}
            <div className="flex items-center gap-12">
                <div className="hidden xl:flex items-center gap-6">
                    <div className="flex items-center gap-3 px-4 py-1.5 bg-black/5 os-border border-black/5 opacity-40">
                        <span className="text-[9px] font-black text-black">DESIGN SYSTEM</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-black shadow-[0_0_8px_rgba(0,0,0,0.2)]" />
                    </div>
                </div>

                <div className="flex items-center gap-4 border-l-2 border-black/5 pl-12">
                    <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[var(--posthog-orange)]" />
                        <span className="min-w-[90px] font-black text-black text-sm tracking-widest">{time || "00:00:00"}</span>
                    </div>
                </div>
            </div>
        </motion.header>
    );
}
