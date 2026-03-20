import { trackingQualityDashboard } from '@/data/projects/tracking-quality-dashboard';
import { safehomeProject } from '@/data/projects/safehome';
import { filterRevampProject } from '@/data/projects/filter-revamp';
import { genAiInclusivityProject } from '@/data/projects/gen-ai-inclusivity';
import { networkIntelligenceProject } from '@/data/projects/network-intelligence';
import { contentVerifyProject } from '@/data/projects/content-verify';
import { genAiAccessibilityProject } from '@/data/projects/gen-ai-accessibility';

export const projects = [
    safehomeProject,
    genAiInclusivityProject,
    trackingQualityDashboard,
    filterRevampProject,
    networkIntelligenceProject,
    contentVerifyProject
];


export type Project = typeof projects[number];
