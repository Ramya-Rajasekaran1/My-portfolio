import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { Metadata } from "next";
import { FolderOpen, Compass, Activity, MousePointer2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Work | DESIGNER PROFILE",
    description: "System archival of selected UX research and product design files.",
};

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-32 pb-24 bg-[var(--background)]">
            <div className="container mx-auto px-6">
                <div className="max-w-6xl mb-24 space-y-10">
                    <div className="flex items-center gap-3">
                        <div className="p-1.5 bg-black text-white">
                            <FolderOpen className="w-4 h-4" />
                        </div>
                        <span className="tech-label">PRODUCT ARCHIVE</span>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 pb-10 border-b-4 border-black">
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                                Selected Work
                            </h1>
                            <p className="text-zinc-600 font-medium text-sm max-w-2xl uppercase tracking-tighter leading-relaxed">
                                A curated repository of technical design systems, inclusive architecture, and digital transformation logs spanning 4+ years of industry impact.
                            </p>
                        </div>
                        <div className="flex items-center gap-4 py-3 px-6 bg-white border-2 border-black shadow-[6px_6px_0_rgba(0,0,0,0.05)]">
                            <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                            <span className="tech-label text-black">DESIGN ARCHIVE</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>

                {/* Footer Artifact */}
                <div className="mt-32 p-10 bg-white os-border border-black flex flex-col md:flex-row justify-between items-center gap-8 shadow-[12px_12px_0_rgba(0,0,0,0.03)] group transition-all hover:shadow-[12px_12px_0_var(--posthog-orange)]">
                    <div className="flex items-center gap-6">
                        <div className="p-2 bg-black text-white group-hover:bg-[var(--posthog-orange)] transition-colors">
                            <Compass className="w-5 h-5" />
                        </div>
                        <div className="space-y-1">
                            <div className="tech-label text-zinc-400">RESEARCH RESULTS</div>
                            <div className="text-xl font-black text-black uppercase tracking-tighter">
                                {projects.length} Case Studies Indexed
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-10 border-t md:border-t-0 md:border-l-2 border-dashed border-black/10 pt-8 md:pt-0 md:pl-10">
                        <div className="flex flex-col gap-1 items-end">
                            <span className="tech-label opacity-40">STORAGE CLASS</span>
                            <span className="text-xs font-black uppercase text-black">High Availability</span>
                        </div>
                        <div className="p-3 bg-black text-[var(--posthog-orange)] animate-pulse">
                            <Activity className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
