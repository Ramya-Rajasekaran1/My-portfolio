import React from "react";
import { projects } from "@/lib/data";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import { NetworkIntelligenceProject } from "@/components/projects/network-intelligence";
import { ContentVerifyProject } from "@/components/projects/content-verify";
import { GenAiInclusivityProject } from "@/components/projects/gen-ai-inclusivity";
import { TQDashboardProject } from "@/components/projects/tq-dashboard";
import { SafeHomeProject } from "@/components/projects/safehome";
import { FilterRedesignProject } from "@/components/projects/filter-redesign";
import { CustomerServicePortalProject } from "@/components/projects/customer-service-portal";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ProjectPageClient } from "@/components/projects/project-page-client";

// Generate static params for all project slugs
export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    return {
        title: project?.title || "Project",
        description: project?.description || "",
    };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects.find(p => p.slug === slug);

    if (!project) {
        notFound();
    }

    if (slug === "network-intelligence") {
        return <NetworkIntelligenceProject project={project} />;
    }

    if (slug === "content-verify") {
        redirect("https://pitch.com/v/content-verify-87nes4");
    }

    if (slug === "gen-ai-inclusivity") {
        redirect("https://pitch.com/v/ai-usability-and-accessibility-ux-research-3c9p4k");
    }

    if (slug === "tracking-quality-dashboard") {
        redirect("https://pitch.com/v/tracking-quality-dashboard-gfpdq7");
    }

    if (slug === "safehome-sf") {
        return <SafeHomeProject project={project} />;
    }

    if (slug === "filter-revamp") {
        return <FilterRedesignProject />;
    }

    if (slug === "customer-service-portal") {
        redirect("https://pitch.com/v/customer-service-portal-udpuh9");
    }

    return <ProjectPageClient project={project} />;
}