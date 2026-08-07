export const customerSupportPortalProject = {
    id: 9,
    title: "Customer Support Portal - Aviation CRM",
    category: "Enterprise UX & Strategy",
    description: "Enterprise UX design and research revamp transforming customer support and case management workflows for aviation operations.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/csp/cover.jpg`,
    slug: "customer-service-portal",
    externalLink: "https://pitch.com/v/customer-service-portal-udpuh9",
    imageFit: "cover" as const,
    backgroundColor: "#eff6ff",
    sections: [
        {
            title: "PROJECT OVERVIEW",
            content: "A comprehensive UX design and research revamp focused on the Enterprise Customer Support Portal for global aviation operations. The goal was to transform a legacy, passive dashboard into an intelligent action hub that reduces operational downtime, eliminates ticket-status anxiety, and diverts support phone calls through smart self-service mechanisms."
        },
        {
            title: "ROLE & TIMELINE",
            content: [
                "Role: Lead UX Designer | Enterprise UX (Research, Wireframing, Prototyping, Strategy)",
                "Timeline: 1 Month (2024)",
                "Team: Product Managers, Engineers, UX Head, Data Science"
            ]
        },
        {
            title: "TARGET AUDIENCE",
            content: [
                "Airline Operators: Resolve aircraft technical issues by creating and tracking service requests to minimize operational downtime.",
                "Customer Service Personnel: Manage customer cases, collaborate with engineering teams, and ensure timely issue resolution.",
                "Technical Operations Managers: Monitor fleet service performance, prioritize critical cases, and oversee support operations.",
                "System Administrators: Manage user access, permissions, and platform configurations for secure and efficient operations."
            ]
        },
        {
            title: "THE CHALLENGE",
            content: [
                "As customer support operations expanded across multiple products and services, users faced fragmented workflows, inconsistent experiences, and limited visibility into support requests. The platform needed a scalable UI that simplified enterprise workflows while improving efficiency for both customers and support teams.",
                "Key Legacy UX Pain Points:",
                "- Critical Information Hidden: Essential resources and ticket actions were buried below the fold.",
                "- Status Check Loop: Users refreshed open tickets ~5x per visit due to a lack of proactive updates.",
                "- High Cognitive Load: Confusing terminology and cluttered navigation slowed down daily workflows.",
                "- Offline Escalation Trigger: UI friction in self-service tools forced users to bypass digital support and call help hotlines immediately."
            ]
        },
        {
            title: "DESIGN STRATEGY & SOLUTIONS",
            content: [
                "1. Proactive Ticket Status: Display live ticket progress directly on the landing page with clear status tracking to stop constant manual refreshing.",
                "2. Smart Call Intercept: Integrate a brief interactive troubleshooting helper before showing escalation phone numbers to help users solve common issues digitally.",
                "3. Personalized Landing Page: Reallocate screen real estate to dynamically surface popular resources and contextual self-help guides based on user profiles.",
                "4. Inline Form Accordions: Enable users to complete quick actions (like adding attachments or submitting notes) directly within the dashboard context without page redirects."
            ],
            glassCard: true
        }
    ]
};
