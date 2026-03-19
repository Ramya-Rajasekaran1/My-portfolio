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
        <main className="min-h-screen pt-24 pb-12 flex flex-col justify-center items-center overflow-hidden transition-colors duration-300 bg-neutral-50 dark:bg-neutral-950">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-[40px] font-serif font-bold text-neutral-900 dark:text-white py-[4px] mb-[16px] tracking-tight">Get in Touch</h1>
                    <p className="text-lg md:text-xl text-neutral-800 dark:text-white/95 py-[4px] mb-[16px] font-sans leading-relaxed">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="pt-[4px]">
                        <GlassCard className="p-8 border-neutral-200 dark:border-white/10 max-w-lg mx-auto bg-white/50 dark:bg-black/20 backdrop-blur-xl">
                            <div className="flex flex-col items-center gap-6">
                                {/* Profile Photo - New Fountain Shot Fit */}
                                <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border-[4px] border-white dark:border-white/20 shadow-xl dark:shadow-[0_0_50px_rgba(255,255,255,0.05)] relative bg-neutral-100 dark:bg-neutral-900 group">
                                    <img 
                                        src="/images/brand/ramya-contact.jpg" 
                                        alt="Ramya Rajasekaran" 
                                        className="w-full h-full object-cover object-[center_5%] scale-[1.0] transition-transform duration-700 group-hover:scale-[1.1]" 
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-neutral-200 dark:ring-white/10 rounded-full" />
                                </div>

                                <div className="flex flex-col items-center gap-4 w-full">
                                    <div className="flex flex-col items-center gap-1">
                                        <h2 className="text-xs font-bold font-outfit uppercase tracking-[0.2em] text-neutral-500 dark:text-white/60">Email</h2>
                                        <CopyEmail email="crramya06@gmail.com" />
                                    </div>

                                    <div className="w-full h-px bg-neutral-200 dark:bg-neutral-800 my-1" />

                                    <div className="flex flex-col items-center gap-1">
                                        <h2 className="text-xs font-bold font-outfit uppercase tracking-[0.2em] text-neutral-500 dark:text-white/60">LinkedIn</h2>
                                        <a
                                            href="https://www.linkedin.com/in/ramyar06/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xl font-bold font-outfit text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                        >
                                            <svg className="w-6 h-6 text-[#0077b5] brightness-100 dark:brightness-125" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                            <span>Ramya Rajasekaran</span>
                                        </a>
                                    </div>
                                </div>

                                <p className="text-neutral-500 dark:text-white/60 font-medium text-sm mt-3 font-outfit tracking-wide">
                                    Let&apos;s catchup soon.
                                </p>
                            </div>
                        </GlassCard>
                    </div>
                </div>
            </div>
        </main>
    );
}
