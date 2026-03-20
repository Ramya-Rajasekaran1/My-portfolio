import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Work | Ramya Rajsekaran",
    description: "A selection of my recent work in UX Research, Product Design, and UI Design.",
};

export default function WorkPage() {
    return (
        <main id="main-content" className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-6 tracking-tight">Selected Work</h1>
                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl font-sans">
                        A curated collection of projects where I&apos;ve helped businesses solve problems and create meaningful experiences for their users.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-[90px]">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </main>
    );
}
