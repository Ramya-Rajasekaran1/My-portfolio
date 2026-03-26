import React from "react";
import { projects } from "@/lib/data";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { NetworkIntelligenceProject } from "@/components/projects/network-intelligence";
import { ContentVerifyProject } from "@/components/projects/content-verify";
import { GenAiInclusivityProject } from "@/components/projects/gen-ai-inclusivity";
import { TQDashboardProject } from "@/components/projects/tq-dashboard";
import { SafeHomeProject } from "@/components/projects/safehome";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectPageClient } from "@/components/projects/project-page-client";

// Generate static params for all project slugs
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
    const project = projects.find(p => p.slug === params.slug);

    return {
        title: project?.title || "Project",
        description: project?.description || "",
    };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    if (slug === "network-intelligence") {
        return <NetworkIntelligenceProject project={project} />;
    }

    if (slug === "content-verify") {
        return <ContentVerifyProject project={project} />;
    }

    if (slug === "gen-ai-inclusivity") {
        return <GenAiInclusivityProject project={project} />;
    }

    if (slug === "tracking-quality-dashboard") {
        return <TQDashboardProject project={project} />;
    }

    if (slug === "safehome-sf") {
        return <SafeHomeProject project={project} />;
    }

    return <ProjectPageClient project={project} />;
}