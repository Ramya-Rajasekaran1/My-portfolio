export const contentVerifyProject = {
    id: 6,
    title: "ContentVerify",
    category: "AI / UX Design",
    description: "A Content Verification AI Tool that analyzes text in real-time to highlight controversial claims, surface potential bias, and link to opposing sources to promote critical thinking.",
    image: "/images/content-verify/cover.jpg",
    misinfoMeme: "/images/content-verify/misinfo-meme.png",
    slug: "content-verify",
    sections: [
        {
            title: "PROJECT OBJECTIVE:",
            content: [
                "Flag problematic sections of an article to help users recognize when they are being influenced by biased or incomplete reporting.",
                "It automates the exhausting process of fact-checking, providing immediate context that would otherwise require manual research and high cognitive effort.",
                "Ultimately, ensuring that readers are alerted to misinformation or missing perspectives before they form an uninformed opinion."
            ],
            chips: ["Neutralize Misinformation", "Bridge the Trust Gap", "Inform Sentiment"],
            glassCard: true
        },
        {
            title: "PAIN POINTS",
            content: [
                "We identified several key friction points in the current verification landscape:",
                "",
                "- User Interaction: Hard to use -> No intuitive logic selector",
                "- Alert Fatigue: All flags look the same urgency -> Color Endorsed Rules (Warning labels 'The Boy who cried')",
                "- Unclear Bias: Fact checkers only look for 'false' not 'Framing' -> Framing Detection (Identifying biased/loaded wording)",
                "- Statistical Deception: Numbers used without context -> Contextual Stats Sourcing (Flagging misleading percentages)",
                "- Information Voids: One-sided reporting passed off as objective -> Omission Flagging (Missing context/sources where necessary)"
            ],
            showDivider: true,
            bottomMargin: true
        },
        {
            title: "EXISTING MECHANISM VS OUR TOOL",
            content: [
                "Current mechanisms often rely on manual fact-checking or binary 'True/False' labels which can be reductive.",
                "Our tool offers a nuanced spectrum:",
                "- Real-time analysis within the reading flow",
                "- nuanced 'risk' assessment rather than binary judgment",
                "- Immediate linkage to opposing viewpoints"
            ],
            image: "/images/content-verify/pipeline.png",
            sideBySide: true,
            imageRight: true,
            showDivider: true,
            topMargin: true
        },
        {
            title: "RESEARCH",
            content: [
                "Primary Research: Conducted surveys, interviews, and focus groups to understand how users consume news online and their pain points with current verification tools.",
                "Secondary Research: Analyzed competitors and read academic papers on misinformation, bias detection, and cognitive psychology to inform the design."
            ],
            showDivider: true,
            topMargin: true
        },
        {
            title: "CONTROVERSY DETECTION",
            content: [
                "We defined five criteria to operationalize showing opposing views in text:",
                "",
                "- Significance: The statement makes a claim with implications for the real world.",
                "- Consensus: The issue lacks public agreement or is under debate.",
                "- Balance: Alternative points of view are missing or unevenly represented.",
                "- Framing: The language reflects rhetorical or moral bias.",
                "- Verifiability: The claim is disputable or difficult to confirm with credible sources.",
                "",
                "These criteria were iteratively refined for the prototype system during the initial testing to balance sensitivity and precision in dozens of articles on many topics and media outlets."
            ],
            glassCard: true,
            showDivider: true,
            topMargin: true
        },
        {
            title: "TASK INTERPRETATION",
            content: [
                "We mapped user behaviors to verification stages:",
                "",
                "1. See but didn't check -> Saw highlights exist but didn't hover/click",
                "2. Brought up but didn't read -> Hovered/Expanded highlight but didn't read",
                "3. Read hurriedly -> Read highlight text, overlays/link",
                "4. Opened and read -> Opened highlight link and read",
                "5. Focused on flow -> Paid attention to detail view more than flow"
            ],
            sideBySide: true,
            imageLeft: true,
            image: "/images/content-verify/impact.jpg", // Reusing generic image for now
            topMargin: true
        },
        {
            title: "PERSONAS",
            content: [
                "We designed for specific user archetypes:",
                "- Focus Enthusiast: Wants quick selection of high quality information.",
                "- Skeptic: Wants to verify credible sources and deep-dive.",
                "- Casual Reader: Needs quick nudges without disrupting flow.",
                "- Researcher: Requires comprehensive sourcing and data backing."
            ],
            showDivider: true,
            topMargin: true
        },
        {
            title: "DISCOVERY FEEDBACK",
            content: [
                "Key takeaways from early testing:",
                "- Context over Fact-Checking: Users want a distinction between 'Fact-checking' vs 'Context extraction'. They don't want to be told what is true/false, rather what is missing context.",
                "- Non-Intrusive: The tool should be non-intrusive (not blocking the text). 'Nudge' mechanics should be subtle.",
                "- Transparency: The tool itself must be transparent about its sources (citations).",
                "- Citations: Users want to see the source of the counter-argument immediately."
            ],
            glassCard: true,
            showDivider: true,
            topMargin: true
        },
        {
            title: "CRY PATH PATTERN",
            content: [
                "The 'F-Pattern' usually applies to reading web content. However for verification, we observed a 'Cry Path':",
                "Users tend to scan for highlights (flags), hover to check the context, and then decide whether to read the full debunk/context. This behavior informed our decision to use subtle highlighting that expands only on interaction, preserving the reading flow while making verification accessible."
            ],
            showDivider: true,
            largeSpacing: true
        }
    ]
};
