import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { explorations } from "@/data/explorations";

export const metadata: Metadata = {
    title: "Work | Ramya Rajasekaran",
    description: "A selection of my recent work in UX Research, Product Design, and UI Design.",
};

export default function WorkPage() {
    const mainProjects = projects.filter((project) => project.slug !== "patagonia");
    const sprintProjects = projects.filter((project) => project.slug === "patagonia");
    const labExplorations = explorations.filter((exploration) => exploration.slug !== "robot-turntable");
    const robotExploration = explorations.find((exploration) => exploration.slug === "robot-turntable");

    return (
        <main className="min-h-screen pt-32 pb-24 relative z-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Selected Work</h1>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans">
                        A curated collection of projects where I&apos;ve helped businesses solve problems and create meaningful experiences for their users.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[90px]">
                    {mainProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* New Section for AI-Prototyping Sprints / Hackathons */}
                {sprintProjects.length > 0 && (
                    <div className="mt-28 pt-20 border-t border-neutral-200 dark:border-white/10">
                        <div className="max-w-4xl mb-12">
                            <span className="text-xs font-bold font-outfit uppercase tracking-widest text-[#F79CBa] mb-2 block">
                                Sprints &amp; Hackathons
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 tracking-tight">
                                AI-Prototyping Sprints
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans">
                                Time-boxed concepts and interactive prototypes designed and built rapidly in collaboration with AI tools.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {sprintProjects.map((project) => (
                                <div 
                                    key={project.id}
                                    className="bg-[#161122] rounded-3xl border border-white/5 overflow-hidden p-6 md:p-10 transition-all duration-300 hover:border-[#F79CBa]/20 group"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                                        {/* Image wrapper */}
                                        <div className="lg:col-span-7 rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-900 border border-white/5 relative">
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                                style={{ backgroundImage: `url(${project.image})` }}
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                        </div>

                                        {/* Text Info */}
                                        <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                                            <div>
                                                <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#F0E68C] bg-[rgba(212,175,55,0.1)] border border-[rgba(212,175,55,0.25)] rounded-full px-3 py-1 mb-4">
                                                    🥈 2nd Place &nbsp;·&nbsp; REV Hackathon 2025
                                                </div>
                                                <span className="block text-xs font-bold font-outfit uppercase tracking-wider text-[#F79CBa] mb-2">
                                                    {project.category}
                                                </span>
                                                <h3 className="font-serif text-3xl font-bold text-white leading-tight mb-4 group-hover:text-[#F79CBa] transition-colors">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm md:text-base text-[#CFC5BA] leading-relaxed">
                                                    {project.description}
                                                </p>
                                            </div>

                                            <div>
                                                <Link 
                                                    href={`/work/${project.slug}/`}
                                                    className="inline-flex items-center gap-2 bg-[#F79CBa] hover:bg-[#FFC4D4] text-[#4A152B] font-bold px-6 py-3 rounded-full transition-all duration-300 hover:translate-x-1"
                                                >
                                                    View Case Study
                                                    <ArrowRight className="w-4 h-4" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Embedded Section for AI Cal Robot Live Demo */}
                {robotExploration && (
                    <div className="mt-28 pt-20 border-t border-neutral-200 dark:border-white/10">
                        <div className="max-w-4xl mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div>
                                <span className="text-xs font-bold font-outfit uppercase tracking-widest text-[#F79CBa] mb-2 block">
                                    Cal AI Labs
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 tracking-tight">
                                    AI Cal Robot Live Sandbox
                                </h2>
                                <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans">
                                    Interact with the CAL-3 Tripod calibrator robot directly below. Scroll inside to rotate, click/drag to inspect, and view live GPU sharpening filter responses.
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <Link 
                                    href={`/explorations/${robotExploration.slug}/`}
                                    className="inline-flex items-center gap-2 bg-[#F79CBa] hover:bg-[#FFC4D4] text-[#4A152B] font-bold px-6 py-3 rounded-full text-sm transition-all duration-300 hover:translate-x-1 whitespace-nowrap"
                                >
                                    Fullscreen Mode
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <a 
                                    href="https://calrobot.netlify.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-6 py-3 rounded-full text-sm transition-all duration-300 whitespace-nowrap"
                                >
                                    Open External
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        <div className="bg-[#161122] rounded-3xl border border-white/5 overflow-hidden p-3 md:p-6 transition-all duration-300 hover:border-[#F79CBa]/20 group">
                            {/* Embedded Simulator Iframe */}
                            <div className="w-full rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[21/9] bg-[#07090e] border border-white/5 relative min-h-[500px] md:min-h-[600px] shadow-2xl">
                                <iframe
                                    src="https://calrobot.netlify.app"
                                    title="AI Cal Robot Live Sandbox"
                                    className="w-full h-full border-none absolute inset-0 bg-[#07090e]"
                                    allow="autoplay; fullscreen; xr-spatial-tracking"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {/* Section for other AI Cal Lab Explorations */}
                {labExplorations.length > 0 && (
                    <div className="mt-28 pt-20 border-t border-neutral-200 dark:border-white/10">
                        <div className="max-w-4xl mb-12">
                            <span className="text-xs font-bold font-outfit uppercase tracking-widest text-[#F79CBa] mb-2 block">
                                Explorations
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 tracking-tight">
                                Creative Tech Explorations
                            </h2>
                            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans">
                                Interactive scroll-driven visualizers, creative experiments, and visual prototypes.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {labExplorations.map((exploration) => (
                                <div 
                                    key={exploration.slug}
                                    className="bg-[#161122] rounded-3xl border border-white/5 overflow-hidden p-6 transition-all duration-300 hover:border-[#F79CBa]/20 group"
                                >
                                    <div className="flex flex-col h-full justify-between space-y-6">
                                        <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-900 border border-white/5 relative">
                                            <div 
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                                                style={{ backgroundImage: `url(${exploration.coverImage})` }}
                                            />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
                                        </div>

                                        <div className="flex flex-col flex-grow justify-between space-y-4">
                                            <div>
                                                <span className="block text-xs font-bold font-outfit uppercase tracking-wider text-[#F79CBa] mb-2">
                                                    {exploration.subtitle}
                                                </span>
                                                <h3 className="font-serif text-2xl font-bold text-white leading-tight mb-2 group-hover:text-[#F79CBa] transition-colors">
                                                    {exploration.title}
                                                </h3>
                                                <p className="text-sm text-[#CFC5BA] leading-relaxed">
                                                    {exploration.description}
                                                </p>
                                            </div>

                                            <div className="flex flex-wrap gap-2 pt-2">
                                                {exploration.tags.map((tag) => (
                                                    <span 
                                                        key={tag}
                                                        className="text-[10px] font-mono uppercase tracking-wider text-[#CFC5BA]/85 bg-white/5 border border-white/10 rounded-full px-2.5 py-0.5"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <div className="pt-4 flex gap-3">
                                                <a 
                                                    href={`/demos/${exploration.slug}/index.html`}
                                                    className="inline-flex items-center gap-2 bg-[#F79CBa] hover:bg-[#FFC4D4] text-[#4A152B] font-bold px-5 py-2.5 rounded-full text-xs transition-all duration-300"
                                                >
                                                    Launch Experience
                                                    <ArrowRight className="w-3 h-3" />
                                                </a>
                                                <Link 
                                                    href={`/explorations/${exploration.slug}/`}
                                                    className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/80 hover:text-white px-5 py-2.5 rounded-full text-xs transition-all duration-300"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
