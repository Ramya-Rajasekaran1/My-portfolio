export const contentVerifyProject = {
    id: 6,
    title: "ContentVerify",
    category: "Content Integrity",
    description: "Ensuring content authenticity and verification in the digital age. (Content coming soon)",
    image: "https://images.unsplash.com/photo-1555421689-491722925294?q=80&w=2070&auto=format&fit=crop",
    slug: "content-verify",
    sections: [
        {
            title: "EXECUTIVE SUMMARY",
            content: [
                "In an era of digital echo chambers, readers are often unaware of the biases inherent in the content they consume. Content Verify is a Chrome browser extension that uses LLMs to identify controversial statements in real-time and provide immediate access to supporting and opposing viewpoints.",
                "",
                "The Result: A 50% increase in user engagement with controversial content and a statistically significant improvement in bias recognition."
            ]
        },
        {
            title: "THE PROJECT",
            content: [
                "Role: UX Researcher & Tech Lead",
                "Timeline: 3 Months",
                "Tools: Figma, React, OpenAI API, Python"
            ],
            chips: ["UX RESEARCH", "PROTOTYPING", "AI INTEGRATION", "USER TESTING"]
        },
        {
            title: "THE CHALLENGE",
            content: [
                "The Problem: The Illusion of Binary Truth",
                "Most digital tools focus on 'Fact-Checking'—a binary approach that labels information as 'True' or 'False'. However, many topics possess multiple valid perspectives that are often silenced by algorithmic bias or framing effects.",
                "",
                "The Goal",
                "To create a lightweight, non-disruptive interface that promotes critical thinking and awareness of alternative viewpoints without imposing editorial judgments."
            ],
            glassCard: true
        },
        {
            title: "RESEARCH & INSIGHTS",
            content: [
                "Observational Analysis: The Wikipedia Conflict",
                "The project began by analyzing Wikipedia edit histories. We observed that 'facts' were frequently contested by editors, yet these controversies were hidden from the average reader.",
                "",
                "Key UX Insights:",
                "- Cognitive Overload: Readers find it difficult to manually identify controversial content in long-form articles.",
                "- The 'Nudge' Requirement: Explicit bias warnings often make readers defensive; a 'lightweight' intervention is more effective for mindset shifts."
            ],
            showDivider: true
        },
        {
            title: "THE SOLUTION",
            content: [
                "We designed a three-component architecture that integrates directly into the user’s reading flow.",
                "The Pipeline:",
                "1. Extraction: Cleaning DOM elements to normalize text.",
                "2. AI Analysis: GPT-3.5-turbo evaluates sentences against 5 criteria: Significance, Consensus, Balance, Framing, and Verifiability.",
                "3. Severity Layer: Flagging content as Low, Medium, or High controversy."
            ],
            image: "/images/content-verify/pipeline.png",
            showDivider: true
        },
        {
            title: "INTERFACE DESIGN",
            content: [
                "We focused on 'On-Demand Context' to ensure the tool didn't distract from the primary reading task.",
                "- Sentence-Level Highlighting: Color-coded highlights (yellow to red) based on controversy severity.",
                "- Contextual Tooltips: Hovering over a sentence reveals a pop-up with 'Supporting Points' and 'Opposing Points'.",
                "- The Floating Dashboard: A movable icon that displays the total number of flags on a page."
            ],
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop", // Placeholder for Interface Screenshot
            showDivider: true,
            sideBySide: true,
            imageRight: true
        },
        {
            title: "TESTING & ITERATION",
            content: [
                "We conducted two pilot studies followed by a formal controlled experiment with 18 participants.",
                "",
                "Iteration 1: Visibility vs. Distraction",
                "- Feedback: Users felt a full dashboard was too intrusive.",
                "- Pivot: We reduced the dashboard to a simple floating icon with a counter, which increased user retention.",
                "",
                "Iteration 2: Semantic Clarity",
                "- Feedback: Scientific experts noted that qualifiers like 'most of' significantly changed the 'risk' of a statement.",
                "- Pivot: Refined the AI prompt to prioritize linguistic framing and 'verifiability'."
            ],
            glassCard: true
        },
        {
            title: "IMPACT & RESULTS",
            content: [
                "The formal study proved that Content Verify successfully shifted user behavior without resorting to censorship.",
                "",
                "Key Metrics:",
                "- Bias Recognition: Improved by a statistically significant margin.",
                "- User Engagement: Interaction with controversial content increased substantially (Chi-square = 16.4).",
                "- Opinion Shifts: Between 19% and 50% of participants changed their perspective on topics like AI ethics and public health after seeing the 'opposing' evidence."
            ],
            image: "/images/content-verify/impact.jpg",
            showDivider: true,
            sideBySide: true,
            imageLeft: true
        },
        {
            title: "REFLECTION & FUTURE WORK",
            content: [
                "Content Verify demonstrates that AI can be used to scale critical thinking rather than just automate answers.",
                "",
                "Next Steps:",
                "- Architecture: Comparing local vs. cloud-based processing to optimize privacy.",
                "- Accessibility: Developing summarization algorithms for users with reading disabilities.",
                "- Domain Expansion: Adapting the tool for educational environments to help students evaluate source credibility."
            ],
            showDivider: true
        }
    ]
};
