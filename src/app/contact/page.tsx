import { Metadata } from "next";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Reach Out | Ramya Rajasekaran",
    description: "Launch a collaborative inquiry with Ramya Rajasekaran.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-40 pb-40 flex flex-col justify-center items-center bg-[var(--background)] px-6 selection:bg-zinc-200 antialiased">
            <div className="max-w-4xl w-full mx-auto space-y-32 text-center">
                {/* Header */}
                <div className="space-y-8">
                    <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 block">Collaborative Inquiry</span>
                    <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-black tracking-tight leading-none">
                        Let's Talk.
                    </h1>
                    <p className="font-sans text-xl md:text-2xl text-zinc-600 max-w-2xl mx-auto leading-relaxed font-light mt-8">
                        Open for high-impact collaboration, user research, and strategic design opportunities.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 relative z-10 max-w-3xl mx-auto">
                    {/* Email Section */}
                    <div className="flex flex-col items-center group">
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6 block">Email</span>
                        <a
                            href="mailto:crramya06@gmail.com"
                            className="p-8 w-full border border-black/10 hover:border-black/30 transition-colors bg-white hover:bg-zinc-50 flex items-center justify-center gap-4 text-black font-sans text-lg tracking-wide group"
                        >
                            <span>crramya06@gmail.com</span>
                            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors group-hover:translate-x-1" />
                        </a>
                    </div>

                    {/* LinkedIn Section */}
                    <div className="flex flex-col items-center group">
                        <span className="font-sans text-xs uppercase tracking-[0.2em] text-zinc-400 mb-6 block">Social</span>
                        <a
                            href="https://www.linkedin.com/in/ramyar06/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-8 w-full border border-black/10 hover:border-black/30 transition-colors bg-white hover:bg-zinc-50 flex items-center justify-center gap-4 text-black font-sans text-lg tracking-wide group"
                        >
                            <span>LinkedIn Profile</span>
                            <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-black transition-colors group-hover:translate-x-1" />
                        </a>
                    </div>
                </div>

                {/* Footer simple divider */}
                <div className="pt-32 flex justify-center opacity-30">
                    <div className="w-12 h-[1px] bg-black"></div>
                </div>
            </div>
        </main>
    );
}
