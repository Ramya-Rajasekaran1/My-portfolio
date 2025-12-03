import { ExternalLink, BookOpen } from "lucide-react";
import React from "react";

export const Publications: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-[#0a0a0a]">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white uppercase tracking-widest">
                    Publications
                </h2>

                <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                    <a
                        href="https://ieeexplore.ieee.org/document/11256372"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative block p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group-hover:-translate-y-1"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="p-6 rounded-2xl bg-purple-500/10 border border-purple-500/20">
                                <BookOpen className="w-12 h-12 text-purple-400" />
                            </div>

                            <div className="flex-1 space-y-4">
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                                        GenAI Accessibility & Usability Research
                                    </h3>
                                    <ExternalLink className="w-6 h-6 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" />
                                </div>

                                <p className="text-lg text-neutral-300 leading-relaxed max-w-3xl">
                                    A research paper presented at IEEE and IndiaHCI exploring the impact of Generative AI on accessibility and usability standards.
                                </p>

                                <div className="flex flex-wrap gap-3 pt-2">
                                    <span className="px-4 py-1.5 rounded-full border border-white/10 text-neutral-400 text-sm font-medium uppercase tracking-wider">IEEE Xplore</span>
                                    <span className="px-4 py-1.5 rounded-full border border-white/10 text-neutral-400 text-sm font-medium uppercase tracking-wider">Research Paper</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};
