export const trackingQualityDashboard = {
    id: 1,
    title: "Tracking Quality Dashboard",
    category: "Supply Chain Visibility",
    description: "A dashboard to measure the accuracy and quality of shipments tracked by the company, highlighting the value added to clients.",
    image: "/images/tracking-quality-dashboard/full.jpg",
    thumbnailImage: "/images/tracking-quality-dashboard/thumbnail.jpg",
    slug: "tracking-quality-dashboard",
    sections: [
        {
            title: "WHAT:",
            content: "A tracking quality dashboard is used to find the accuracy and quality of loads/ shipments tracked by the company. It is used to measure what value the company adds to the clients."
        },
        {
            title: "PROJECT OBJECTIVE:",
            content: "I worked on the end-end process, focused mainly on data-driven research and revamping the initiative of the dashboard. The aim was to transition to the new dashboard which has different definitions & calculations."
        },
        {
            title: "USER/BUSINESS PROBLEM",
            content: [
                "It affects our customers, (i.e.) shippers and carriers because:",
                "",
                "- There is too much analysis data to consume, but none of it is actionable",
                "",
                "- Doesn't say what/who is accountable for the issue",
                "",
                "- It affects our business because it seems like our consistency% regarding tracking is less, we just have high standards to determine the consistency"
            ],
            bottomMargin: true
        },
        {
            title: "TARGET AUDIENCE",
            content: "All Shippers and carriers, 3pl, Customer Success representatives"
        },
        {
            title: "TIMELINE",
            content: "4-5 Weeks"
        },
        {
            title: "IN-DEPTH ANALYSIS",
            content: "This breakdown helps in understanding existing dashboard sections and the revised proposal. We want to have a very simple definition/approach which is easy to understand and troubleshoot, and this increases consistency across the board.",
            image: "/images/tracking-quality-dashboard/in-depth-analysis-ideation.jpg",
            showDivider: true
        },
        {
            title: "SAMPLE USER STORY",
            content: "As a Shipper, I want to analyse and identify what aspects/who is accountable for low tracking consistency, so I can keep a tab on which carriers are better performing, I can find out which carriers are causing problems, I can identify problems with my entity, and I can find out what can improve tracking and efficiency.",
            glassCard: true,
            image: "/images/tracking-quality-dashboard/man-illustration.png"
        },
        {
            title: "PAIN POINTS",
            content: [
                "- Fourkites definition standard is unrealistically high",
                "- We have not provided any solution to help achieve this high standard",
                "- We are lagging behind competitors on tracking quality %",
                "- Business consequences like this can lead to customer churn, loss of sales"
            ],
            glassCard: true
        },
        {
            title: "HEURISTIC ANALYSIS",
            content: [
                "I did a detailed audit of the dashboard section-by-section to understand UX and UI pain points. Some issues are highlighted and aligned with customer-raised feedback and stakeholder discovery.",
                "",
                "- Analysis of each widget, feature section of the UI, understanding existing user experience and journeys",
                "",
                "- Heuristic analysis is done based on NN principles: Jakob Nielsen's 10 general principles for interaction design"
            ],
            image: "/images/tracking-quality-dashboard/heuristic-analysis.jpg",
            topMargin: true,
            showDivider: true
        },
        {
            title: "QUALITATIVE FEEDBACK",
            content: "Workshop to get feedback among cross-functional teams. Affinity Mapping to identify patterns and discreetly categorized opportunities, areas for improvements, and features that are working well with usability. Red portrays the pain points, Green suggests the features working well and Yellow are the areas of improvements.",
            multiImage: ["/images/tracking-quality-dashboard/qualitative-feedback.jpg", "/images/tracking-quality-dashboard/affinity-flow.png"],
            showDivider: true,
            verticalImages: true,
            middleText: "I focused the outcome of the workshop on curating this flow. With multiple stakeholders in the workshop, this gave a wide perspective. Once the above affinity mapping was communicated, it aligned the workshop members to come up with a proposal for a new flow, which was more intuitive and simpler with actionable data."
        },
        {
            title: "WORKING TOWARDS THE SOLUTIONS",
            content: "Along with the Qualitative feedback, the usage pattern on most used sections and features were collected. The next step was to work on individual data visualizations that convey the new definition. I conducted customer validation sessions to understand if these elements were easy to interpret. Making even individual widgets consumable and easy to interpret for users.",
            equation: "All Loads = Tracked + Untracked | Tracked = Basic + Super Tracked",
            chips: ["INFORMATION ARCHITECTURE", "PERSONA USE CASES", "INTERNAL STAKEHOLDER TESTING", "USER STORIES", "PROTOTYPING"],
            multiImage: ["/images/tracking-quality-dashboard/truck-load-pings.jpg", "/images/tracking-quality-dashboard/pie-waterfall-charts.jpg", "/images/tracking-quality-dashboard/horizontal-treemap.jpg"],
            topMargin: true,
            showDivider: true,
            firstImageFullWidth: true
        },
        {
            title: "IDEATIONS TO SOLUTIONS",
            content: [
                "The Discovery for the project revealed key insights to focus on. The crux of the value of the dashboard lied in giving concise information on which user is accountable for the issue, the trend analysis on quality issues, the causes of issues and recommended solution.",
                "",
                "- This solution and ideation breaks down between the Issue owner: Shipper, Company, and Carriers (Image representation of the former only)",
                "",
                "- Issues caused by this entity and how it affects the Tracking quality for them",
                "",
                "- Further understanding into why these are caused and how it's affecting end users",
                "",
                "- Fall recommended actions which were the unique selling point that were not available in the older version"
            ],
            image: "/images/tracking-quality-dashboard/ideation-to-solution.jpg",
            topMargin: true,
            showDivider: true,
            sideBySide: true,
            glassCard: true
        },
        {
            title: "SOLUTIONS TO FIDELITY SCREENS",
            content: [
                "What and why:",
                "- The reason behind this structure is to give straightforward access to necessary information",
                "- This proposal has a clean UI which is minimal and negated additional widgets and sections from the old dashboard",
                "- Arrangement of information in a coherent way that mimics the user's journey",
                "- Action items and CTA to further analyze are captured and given more prominence",
                "- Onboarding and walkthrough tour are implemented for all the users given that it's a revamp"
            ],
            image: "/images/tracking-quality-dashboard/solutions-fidelity.jpg",
            showDivider: true,
            glassCard: false,
            sideBySide: true,
            imageLeft: true,
            textCard: true
        },
        {
            title: "QUANTITATIVE DATA AND SUCCESS USABILITY METRICS",
            content: "After Implementation these data are captured using Usage analysis Tools (Pendo and Sisense). The dashboard has now the highest User adoption among all the other dashboards. The User engangement has been steady and User feedback has been positive with respect to usability and Tracking Quality improvements.",
            showDivider: true,
            multiImage: ["/images/tracking-quality-dashboard/quantitative-chart-1.png", "/images/tracking-quality-dashboard/quantitative-chart-2.png"],
            verticalImages: false
        },
        {
            title: "KEY LEARNINGS",
            content: [
                "- There is a lot of ambiguity in a challenging project, but the right process will naturally help with a better solution",
                "- Accounting and collaborating with varied stakeholders' perspectives gives a holistic picture",
                "- Change management takes time and is key for user engagement when a new revamp is launched",
                "- Given the opportunity next time, I will propose to build this in the framework that'll support advanced interactions"
            ],
            image: "/images/tracking-quality-dashboard/key-learning-character-v2.png",
            sideBySide: true,
            imageRight: true,
            showDivider: true,
            largeSpacing: true
        }
    ]
};
