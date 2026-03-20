import { ExternalLink, BookOpen } from "lucide-react";
import React from "react";

const articles = [
    {
        title: "Ride Sharing",
        description: "Case study of a ride‑sharing app that facilitates seniors to feel confident about moving from one place to another.",
        url: "https://crramya06.medium.com/ux-case-study-ride-sharing-app-642080cbc89d",
    },
    {
        title: "Behavioral Economics",
        description: "An intriguing study and understanding of UX through the lens of behavioural economics.",
        url: "https://crramya06.medium.com/behavioural-economics-e60a10d44ddc",
    },
];

export const PublicationsAndArticles: React.FC = () => {
    return (
        <section className="pt-32 pb-24 px-4 bg-[#0a0a0a]">
            <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Publications Section */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-extralight mb-3 text-white tracking-tight">
                            Publications
                        </h2>

                        <div className="relative group flex-1 pt-8">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                            <a
                                href="https://ieeexplore.ieee.org/document/11256372"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative flex flex-col h-full p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all group-hover:-translate-y-1"
                            >
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 shrink-0">
                                        <BookOpen className="w-8 h-8 text-purple-400" />
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-start justify-between gap-4">
                                            <h3 className="text-xl font-medium text-white group-hover:text-purple-400 transition-colors">
                                                Designing for Inclusivity in the Age of AI
                                            </h3>
                                            <ExternalLink className="w-5 h-5 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" />
                                        </div>

                                        <p className="text-white/80 leading-relaxed text-sm font-light mb-1">
                                            A research paper presented at IEEE and IndiaHCI exploring the impact of AI on inclusivity and universal design standards.
                                        </p>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            <span className="px-3 py-1 rounded-full border border-white/10 text-neutral-400 text-xs font-medium uppercase tracking-wider">IEEE Xplore</span>
                                            <span className="px-3 py-1 rounded-full border border-white/10 text-neutral-400 text-xs font-medium uppercase tracking-wider">Research Paper</span>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Articles Section */}
                    <div className="flex flex-col">
                        <h2 className="text-3xl md:text-4xl font-extralight mb-[12px] text-white tracking-tight">
                            Writing Articles
                        </h2>
                        <div className="grid gap-[12px] flex-1 pt-8">
                            {articles.map((article, idx) => (
                                <div key={idx} className="group relative">
                                    <a
                                        href={article.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block p-[12px] rounded-2xl bg-purple-900/10 border border-purple-500/10 backdrop-blur-md hover:bg-purple-900/20 transition-all group-hover:-translate-y-2 h-full"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-lg font-medium text-white group-hover:text-purple-400 transition-colors pr-8">{article.title}</h3>
                                            <ExternalLink className="w-4 h-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity absolute right-4 top-4" />
                                        </div>
                                        <p className="text-white/80 leading-relaxed text-sm font-light mb-1">{article.description}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
