import { trackingQualityDashboard } from '@/data/projects/tracking-quality-dashboard';
import { safehomeProject } from '@/data/projects/safehome';
import { filterRevampProject } from '@/data/projects/filter-revamp';
import { genAiInclusivityProject } from '@/data/projects/gen-ai-inclusivity';
import { networkIntelligenceProject } from '@/data/projects/network-intelligence';
import { contentVerifyProject } from '@/data/projects/content-verify';

export const projects = [
    trackingQualityDashboard,
    safehomeProject,
    filterRevampProject,
    genAiInclusivityProject,
    networkIntelligenceProject,
    contentVerifyProject
];


export type Project = typeof projects[number];
