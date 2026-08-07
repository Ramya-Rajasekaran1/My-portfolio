import { Metadata } from "next";
import { Mail, Linkedin } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { CopyEmail } from "@/components/ui/copy-email";

export const metadata: Metadata = {
    title: "Contact | Ramya Rajasekaran",
    description: "Get in touch with Ramya Rajasekaran for collaborations or opportunities.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 pb-16 flex flex-col justify-center items-center overflow-hidden transition-colors duration-300 bg-canvas relative z-20">
            {/* Ambient Background Radial Grid */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(245,239,235,0.2)_0%,rgba(247,243,240,0.8)_100%)] dark:bg-none" />
            
            {/* Ambient background spheres */}
            <div className="absolute top-20 left-10 w-24 h-24 css-sphere hidden md:block" style={{ animationDelay: "-1.5s" }} />
            <div className="absolute bottom-20 right-10 w-28 h-28 css-sphere hidden md:block" style={{ animationDelay: "-3s" }} />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
                    <span className="inline-flex items-center gap-2 text-xs font-bold font-outfit uppercase tracking-[0.08em] text-blush mb-3 mx-auto">
                        <span className="w-4 h-[3px] bg-blush rounded-[2px]" />
                        Connect
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-extralight tracking-tight text-neutral-900 dark:text-white mb-4 text-center">
                        Get in Touch
                    </h1>
                    <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 mb-8 font-serif leading-relaxed italic max-w-lg mx-auto text-center">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="pt-2 w-full">
                        <div className="clay-card p-8 border border-neutral-200/20 dark:border-0 dark:!bg-black max-w-lg mx-auto">
                            <div className="flex flex-col items-center gap-6">
                                {/* Profile Photo - Clay Avatar Frame */}
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-[24px] p-3 bg-white dark:bg-black shadow-[0_10px_20px_-5px_rgba(15,23,42,0.08),inset_-3px_-3px_6px_rgba(15,23,42,0.02),inset_3px_3px_6px_rgba(255,255,255,1)] dark:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.8),inset_-3px_-3px_6px_rgba(0,0,0,0.8),inset_3px_3px_6px_rgba(255,255,255,0.03)] border border-neutral-200/20 dark:border-neutral-800 relative group shrink-0 flex items-center justify-center">
                                    <img 
                                        src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/brand/ramya-contact.jpg`} 
                                        alt="Ramya Rajasekaran" 
                                        className="w-full h-full object-cover object-[center_5%] rounded-[16px] scale-[1.0] transition-transform duration-700 group-hover:scale-[1.05]" 
                                    />
                                    <div className="absolute inset-2 ring-1 ring-inset ring-neutral-200/20 dark:ring-white/5 rounded-[16px]" />
                                </div>

                                <div className="flex flex-col items-center gap-5 w-full">
                                    <div className="flex flex-col items-center gap-1.5">
                                        <h2 className="text-xs font-bold font-outfit uppercase tracking-[0.15em] text-blush">Email</h2>
                                        <CopyEmail email="crramya06@gmail.com" />
                                    </div>

                                    <div className="w-full h-px bg-neutral-200/50 dark:bg-white/5 my-1" />

                                    <div className="flex flex-col items-center gap-1.5">
                                        <h2 className="text-xs font-bold font-outfit uppercase tracking-[0.15em] text-blush">LinkedIn</h2>
                                        <a
                                            href="https://www.linkedin.com/in/ramya-rajasekaran-9a3b1a13a/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-lg font-black font-outfit text-neutral-900 dark:text-white hover:text-blush transition-colors z-30 relative cursor-pointer"
                                        >
                                            <svg className="w-5 h-5 text-[#0077b5] brightness-100 dark:brightness-125" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            <span>Ramya Rajasekaran</span>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-neutral-500 dark:text-neutral-400 font-bold text-xs mt-3 font-outfit tracking-wider uppercase">
                                    Let&apos;s catch up soon.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
