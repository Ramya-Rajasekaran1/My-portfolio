"use client";

import * as React from "react";
import { Command } from "cmdk";
import { Search, FileText, Monitor, Mail, User, Command as CommandIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export function CommandPalette() {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:text-white transition-colors text-xs font-mono os-border"
            >
                <Search className="w-3 h-3" />
                <span>Search...</span>
                <kbd className="hidden sm:inline-flex h-4 items-center gap-1 rounded border border-zinc-700 bg-zinc-800 px-1.5 font-mono text-[10px] font-medium text-zinc-400">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </button>

            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] p-4 bg-black/60 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-[640px] bg-black border-2 border-zinc-800 shadow-2xl overflow-hidden"
                        >
                            <Command className="flex flex-col h-full font-mono">
                                <div className="flex items-center border-b-2 border-zinc-800 px-4">
                                    <Search className="w-4 h-4 text-zinc-500 mr-2" />
                                    <Command.Input
                                        placeholder="Search files, projects, commands..."
                                        className="w-full h-12 bg-transparent outline-none text-white text-sm"
                                    />
                                    <div className="text-[10px] text-zinc-500 bg-zinc-900 px-2 py-1 os-border">
                                        ESC to close
                                    </div>
                                </div>

                                <Command.List className="max-h-[300px] overflow-y-auto p-2">
                                    <Command.Empty className="py-6 text-center text-sm text-zinc-500">
                                        No results found.
                                    </Command.Empty>

                                    <Command.Group heading="Navigation" className="text-[10px] text-zinc-500 uppercase tracking-widest px-2 py-3">
                                        <Command.Item
                                            onSelect={() => runCommand(() => router.push("/"))}
                                            className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-300 hover:bg-zinc-900 cursor-pointer transition-colors"
                                        >
                                            <Monitor className="w-4 h-4" />
                                            <span>Home / Desktop</span>
                                        </Command.Item>
                                        <Command.Item
                                            onSelect={() => runCommand(() => router.push("/work"))}
                                            className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-300 hover:bg-zinc-900 cursor-pointer transition-colors"
                                        >
                                            <FileText className="w-4 h-4" />
                                            <span>Projects / Files</span>
                                        </Command.Item>
                                        <Command.Item
                                            onSelect={() => runCommand(() => router.push("/about"))}
                                            className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-300 hover:bg-zinc-900 cursor-pointer transition-colors"
                                        >
                                            <User className="w-4 h-4" />
                                            <span>About / Profile</span>
                                        </Command.Item>
                                    </Command.Group>

                                    <Command.Group heading="Contact" className="text-[10px] text-zinc-500 uppercase tracking-widest px-2 py-3">
                                        <Command.Item
                                            onSelect={() => runCommand(() => router.push("/contact"))}
                                            className="flex items-center gap-3 px-2 py-2 text-sm text-zinc-300 hover:bg-zinc-900 cursor-pointer transition-colors"
                                        >
                                            <Mail className="w-4 h-4" />
                                            <span>Get in Touch</span>
                                        </Command.Item>
                                    </Command.Group>
                                </Command.List>

                                <div className="bg-zinc-900 px-4 py-2 flex items-center justify-between border-t border-zinc-800">
                                    <div className="flex items-center gap-4 text-[10px] text-zinc-500 italic">
                                        <span>TIP: Use arrow keys to navigate</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <PostHogIcon className="w-4 h-4 opacity-50" />
                                        <span className="text-[10px] font-mono text-zinc-600">v1.0.0</span>
                                    </div>
                                </div>
                            </Command>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}

function PostHogIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
            <path d="M12 2L4 6v12l8 4 8-4V6l-8-4zm0 2.5L18 8l-6 3.5L6 8l6-3.5zM6 16.5v-7l5 3v7l-5-3zm7 3v-7l5-3v7l-5-3z" />
        </svg>
    );
}
