
"use client";
import React from "react";
import { type Project } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const bluePalette = {
    primary: "#3b82f6",
    secondary: "#60a5fa",
    muted: "rgba(59,130,246,0.05)",
    glow: "rgba(59,130,246,0.12)",
    shadow: "rgba(59,130,246,0.2)",
    text: "rgba(96,165,250,1)"
};

export function TQDashboardProject({ project }: { project: Project }) {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [activeFlowStep, setActiveFlowStep] = React.useState(0);
    const [hoveredLogicIdx, setHoveredLogicIdx] = React.useState<number | null>(null);
    const [showImpactAfter, setShowImpactAfter] = React.useState(false);
    const [showIndex, setShowIndex] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setShowIndex(window.scrollY > 800);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const sections = [
        { id: "hero", label: "Intro" },
        { id: "problem", label: "Problem" },
        { id: "discovery", label: "Discovery" },
        { id: "analysis", label: "Analysis" },
        { id: "objectives", label: "Objectives" },
        { id: "research", label: "Research" },
        { id: "synthesis", label: "Synthesis" },
        { id: "flow", label: "Flow" },
        { id: "ideation", label: "Ideation" },
        { id: "design", label: "Design" },
        { id: "impact", label: "Impact" },
        { id: "reflection", label: "Reflection" }
    ];

    const palette = bluePalette;

    return (
        <main
            style={{
                fontFamily: "var(--font-sans), sans-serif",
                background: "#0a0a0a",
                color: "var(--color-ivory, #FFF8F0)",
                overflowX: "hidden",
                minHeight: "100vh",
                position: "relative"
            }}
        >
            {/* ── STICKY INDEX ── */}
            <div style={{ position: "fixed", left: 40, top: "50%", transform: "translateY(-50%)", zIndex: 100, display: "flex", flexDirection: "column", gap: 14, opacity: showIndex ? 1 : 0, pointerEvents: showIndex ? "auto" : "none", transition: "all 0.4s ease" }} className="hidden lg:flex">
                {sections.map((s) => (
                    <a
                        key={s.id}
                        href={`#${s.id}`}
                        title={s.label}
                        style={{ width: 12, height: 12, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", cursor: "pointer", position: "relative" }}
                        onMouseEnter={(e) => { e.currentTarget.style.background = palette.primary; e.currentTarget.style.transform = "scale(1.4)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "scale(1)"; }}
                    >
                        <span style={{ position: "absolute", left: 28, top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap", fontFamily: "ui-monospace, monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFF8F0", opacity: 0, transition: "opacity 0.25s", background: "rgba(0,0,0,0.6)", padding: "4px 10px", borderRadius: 4, backdropFilter: "blur(4px)" }} className="tq-nav-label">{s.label}</span>
                    </a>
                ))}
            </div>

            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
        .tq-card-hover:hover { background: ${palette.muted} !important; transform: translateY(-4px); }
        .tq-img-hover:hover { opacity: 0.9; cursor: zoom-in; }
        
        .tq-nav-label { pointer-events: none; }
        a:hover .tq-nav-label { opacity: 1 !important; }

        @keyframes tq-float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
            100% { transform: translateY(0px); }
        }
        .tq-float {
            animation: tq-float 6s ease-in-out infinite;
        }
      `}</style>

            {/* ── NAV ── */}
            <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "var(--font-sans), sans-serif", color: "#d1d5db", textDecoration: "none" }}>
                        <ArrowLeft size={16} /> Back to Work
                    </Link>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db" }}>
                        Tracking Quality Dashboard - Supply chain visibility · UX Case Study · 2023
                    </span>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section id="hero" style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", minHeight: "85vh", paddingTop: 80, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                {/* Left: Ultra-Concentrated Info */}
                <div style={{ background: "#0a0a0a", padding: "40px 80px", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ maxWidth: 650 }}>
                        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: "#fff", display: "block", marginBottom: 24, fontWeight: 900 }}>UX CASE STUDY 2023</span>

                        <h1 style={{
                            fontFamily: "var(--font-outfit), sans-serif",
                            fontSize: "clamp(42px,5vw,72px)",
                            fontWeight: 900,
                            letterSpacing: "-0.04em",
                            lineHeight: 1.05,
                            marginBottom: 40,
                            background: "linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #6366f1 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            color: palette.primary, // Fallback
                            display: "block",
                            paddingBottom: "10px" // Prevents descender clipping
                        }}>
                            Tracking Quality<br />
                            Supply chain visibility Dashboard
                        </h1>

                        <p style={{ fontSize: 16, color: "#fff", lineHeight: 1.5, fontWeight: 300, marginBottom: 40, maxWidth: 540 }}>
                            This is a dashboard that gives visibility and specializes in tracking Flights, ships, Truckloads across the United States and globally. It enables users to monitor, analyze, and improves the reliability of real-time shipment visibility data.
                        </p>

                        {/* Metadata Strip */}
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 0.6fr", gap: "24px", paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                            {[
                                ["ROLE", "UX lead · UX Strategy . End-end UX process. UI Revamp. UX research"],
                                ["TEAM", "Engineering, Data Science, Product owner, Business analyst."],
                                ["DURATION", "4–5 Weeks"],
                            ].map(([label, value]) => (
                                <div key={label}>
                                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", display: "block", marginBottom: 6, fontWeight: 900 }}>{label}</span>
                                    <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", fontWeight: 500, letterSpacing: "0.01em", lineHeight: 1.4, display: "block" }}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Immersive Banner (Contained) */}
                <div style={{ background: "#050505", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{
                            width: "auto",
                            height: "auto",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain",
                            display: "block",
                            filter: "contrast(1.05) brightness(1.1)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                            borderRadius: "8px",
                            border: "1px solid rgba(255,255,255,0.08)"
                        }}
                    />
                    <div style={{ position: "absolute", top: 40, right: 20, fontFamily: "var(--font-outfit), sans-serif", fontSize: 120, fontWeight: 800, color: "rgba(255,255,255,0.03)", lineHeight: 0.9, whiteSpace: "pre", pointerEvents: "none", textAlign: "right", zIndex: 0 }}>{"TRACKING\nQUALITY"}</div>
                    <div style={{ position: "absolute", bottom: 40, right: 20, transform: "rotate(-90deg)", transformOrigin: "right bottom", fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.6em", textTransform: "uppercase", color: "rgba(255,255,255,0.1)", zIndex: 2 }}>
                        Dashboard Preview
                    </div>
                </div>
            </section>

            {/* ── 01 PROBLEM ── */}
            <section id="problem" style={{ background: "#111", padding: "80px 60px 80px 120px", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 24, fontWeight: 900 }}>01 PROBLEM</span>

                    <p style={{ fontSize: "clamp(18px, 2.2vw, 26px)", color: "#fff", lineHeight: 1.5, maxWidth: 950, fontWeight: 400, marginBottom: 32 }}>
                        The existing dashboard showed consistency percentages that looked low not because tracking was poor, but because the standards were unrealistically high. No one knew <span style={{ color: palette.primary, fontWeight: 600 }}>who was responsible</span> for the gap. I built the solution from <span style={{ color: palette.primary, fontWeight: 600 }}>discovery to delivery</span>.
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                        {["Low engagement", "Low Consistency %", "Manual Onboarding UX", "Complicated to intrepret", "No UX flow"].map(tag => (
                            <span key={tag} style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", padding: "10px 20px", background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.3)", color: "#fff", borderRadius: 4, fontWeight: 900 }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 02 DISCOVERY ── */}
            <section id="discovery" style={{ background: "#0a0a0a", borderBottom: "1px solid #272727", paddingLeft: 120 }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 60px 100px" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: 60, paddingTop: 60, alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.secondary, fontWeight: 900, display: "block" }}>02 DISCOVERY</span>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                                {[
                                    { title: "Complicated data dashboard", desc: "Fourkites internal definition standard is artificially high." },
                                    { title: "Usability Issues", desc: "No native solutions or workflows existed to help users." },
                                    { title: "Customer Churn", desc: "Lagging behind competitors on core quality metrics." },
                                    { title: "Business Attrition", desc: "Poor visibility directly correlates to lost sales." }
                                ].map(f => (
                                    <div key={f.title} style={{ background: "#111", padding: "28px", borderRadius: 16, border: "1px solid #1f1f1f", display: "flex", flexDirection: "column", gap: 14 }}>
                                        <div style={{ width: 10, height: 10, borderRadius: 2, background: palette.primary, boxShadow: `0 0 15px ${palette.shadow}` }} />
                                        <div>
                                            <h3 style={{ fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 6, fontFamily: "var(--font-outfit), sans-serif" }}>{f.title}</h3>
                                            <p style={{ fontSize: 15, color: "#888", lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img
                                src="/images/tracking-quality-dashboard/man-illustration.png"
                                alt="UX Discovery Persona"
                                style={{
                                    maxWidth: "75%",
                                    height: "auto",
                                    display: "block",
                                    filter: `drop-shadow(0 15px 30px ${palette.shadow})`
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>


            <section id="analysis" style={{ maxWidth: 1400, margin: "0 auto", padding: "100px 40px 100px 120px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.2em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 40, fontWeight: 900 }}>03 UX ANALYSIS</span>
                <div style={{ display: "grid", gridTemplateColumns: "1.2fr 4fr 1.2fr", gap: 40, alignItems: "start" }}>
                    {/* Left: Problem Statement */}
                    <div style={{ paddingRight: 20 }}>
                        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 32, fontWeight: 200, lineHeight: 1.1, color: "#fff", marginBottom: 24 }}>
                            Too much data.<br />
                            <em style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic", fontWeight: 400 }}>No one accountable.</em>
                        </h2>
                        <p style={{ fontSize: 14, color: "#ffffffff", lineHeight: 1.6, fontWeight: 300 }}>
                            The existing dashboard gave a single consistency %, heavily penalised by high internal standards. Shippers didn't know whose fault it was.
                        </p>
                    </div>

                    {/* Middle: Analysis Image (The focus) */}
                    <div
                        className="tq-img-hover"
                        style={{
                            borderRadius: 24,
                            overflow: "hidden",
                            border: "1px solid rgba(255,255,255,0.1)",
                            transition: "all 0.4s",
                            boxShadow: "0 40px 100px rgba(0,0,0,0.6)",
                            position: "relative"
                        }}
                        onClick={() => setSelectedImage("/images/tracking-quality-dashboard/heuristic-analysis.jpg")}
                    >
                        <div style={{ position: "absolute", top: 20, left: 20, zIndex: 10, background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)", padding: "4px 12px", borderRadius: 4, fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
                            UX ANALYSIS · 2K
                        </div>
                        <img
                            src="/images/tracking-quality-dashboard/heuristic-analysis.jpg"
                            alt="UX Issues Analysis"
                            style={{ width: "100%", height: "auto", display: "block", filter: "brightness(1.1) contrast(1.1)" }}
                        />
                    </div>

                    {/* Right: Audit Pointers */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {[
                            { num: "01", label: "Widget Analysis", desc: "Broken down by purpose." },
                            { num: "02", label: "Experience Journeys", desc: "Mapped user drop-offs." },
                            { num: "03", label: "Filter Behaviour", desc: "Audited friction points." },
                        ].map(i => (
                            <div key={i.num} style={{ background: "rgba(17,17,17,0.8)", backdropFilter: "blur(12px)", padding: "16px", borderRadius: 12, border: "1px solid rgba(59,130,246,0.12)", boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}>
                                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: palette.secondary, fontWeight: 900, display: "block", marginBottom: 4 }}>{i.num}</span>
                                <h4 style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 4, fontFamily: "var(--font-outfit), sans-serif" }}>{i.label}</h4>
                                <p style={{ fontSize: 12, color: "#fff", lineHeight: 1.4, margin: 0 }}>{i.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── 04 OBJECTIVES ── */}
            <section id="objectives">
                <div style={{ padding: "60px 0 0", maxWidth: 1100, margin: "0 auto" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.2em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 16, fontWeight: 900 }}>04 OBJECTIVES</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#111111", borderTop: "1px solid #272727", borderBottom: "1px solid #272727", marginTop: 40 }}>
                    {[
                        { num: "01", title: "Actionable Clarity", text: <>Replace raw% numbers with <span style={{ color: palette.secondary, fontWeight: 300 }}>ownership-based breakdowns</span> so shippers know if the issue is theirs, the carrier's, or the platform's.</> },
                        { num: "02", title: "Simpler Definitions", text: <>New tracking taxonomy: <span style={{ color: "#fb923c", fontWeight: 300 }}>All Loads = Tracked + Untracked</span>, Tracked = Basic + Super. One formula everyone understands.</> },
                        { num: "03", title: "Measurable Adoption", text: <>Track UX success with <span style={{ color: "#34d399", fontWeight: 300 }}>Pendo &amp; Sisense</span> highest dashboard adoption across all analytics features post-launch.</> },
                    ].map(o => (
                        <div key={o.num} className="tq-card-hover" style={{ padding: "44px 40px", borderRight: "1px solid #272727", transition: "background 0.2s", cursor: "default" }}>
                            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFF8F0", marginBottom: 8, display: "block", fontWeight: 200 }}>OBJECTIVE {o.num}</span>
                            <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 24, fontWeight: 300, marginBottom: 10, color: "#ffffff" }}>{o.title}</h3>
                            <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7 }}>{o.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div style={{ height: 1, background: "#272727", maxWidth: 1100, margin: "0 auto" }} />



            {/* ── USER & BUSINESS IMPACT ── */}
            <section style={{ background: "#0a0a0a", padding: "120px 60px 120px 120px", borderTop: "1px solid #272727", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1300, margin: "0 auto" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr 1fr", gap: 60, alignItems: "center" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", fontWeight: 900 }}>USER IMPACT</span>
                            <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.5, fontWeight: 340, margin: 0 }}>
                                It affects our <span style={{ color: "#fff", fontWeight: 700 }}>shippers and carriers</span> because there is <span style={{ color: palette.secondary, fontWeight: 600 }}>too much analysis data</span> to consume, but none of it is actionable or defines accountability.
                            </p>
                        </div>

                        <div style={{ position: "relative" }}>
                            <div style={{
                                position: "absolute",
                                inset: "-40px",
                                background: `radial-gradient(circle, ${palette.glow} 0%, transparent 70%)`,
                                zIndex: 0
                            }} />
                            <img
                                src="/images/tracking-quality-dashboard/jackie-chan-confused.jpg"
                                alt="User Confusion"
                                style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: 32,
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    boxShadow: "0 40px 80px rgba(0,0,0,0.7)",
                                    position: "relative",
                                    zIndex: 1,
                                    filter: "brightness(0.95) contrast(1.1)"
                                }}
                            />
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", fontWeight: 900 }}>BUSINESS IMPACT</span>
                            <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.5, fontWeight: 340, margin: 0 }}>
                                It appears consistency is low but in reality, we just have <span style={{ color: palette.primary, fontWeight: 600 }}>unrealistically high standards</span> that skew the perception of our tracking quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <div style={{ height: 1, background: "#272727", maxWidth: 1100, margin: "0 auto" }} />

            {/* ── QUALITATIVE FEEDBACK ── */}
            <section id="research" style={{ background: "#111", padding: "100px 60px 100px 120px", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 20, fontWeight: 900 }}>05 RESEARCH</span>

                    <div style={{ marginBottom: 60 }}>
                        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(36px,4vw,54px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 32, color: "#fff" }}>
                            Qualitative <em style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic", fontWeight: 400 }}>Feedback</em>
                        </h2>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 40, alignItems: "start" }}>
                            <p style={{ fontSize: 17, color: "#d1d5db", lineHeight: 1.75, margin: 0, maxWidth: 800 }}>
                                Cross-functional workshop + affinity mapping to categorize opportunities and pain points. We used a visual color-coding system to signal the priority and nature of each finding.
                            </p>

                            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 20 }}>
                                {[
                                    { emoji: "🟢", label: "Successes", color: "#22c55e", text: "The interface excels at providing high-level visibility through intuitive trend sections and helpful hover-over summaries." },
                                    { emoji: "🔴", label: "Friction", color: "#ef4444", text: "System performance lags and cumbersome filter interactions are creating significant 'drop-off' points and user frustration." },
                                    { emoji: "🟡", label: "Opportunities", color: "#eab308", text: "Users want to move from passive monitoring to proactive troubleshooting through predictive forecasting and root-cause 'health' indicators." },
                                ].map(item => (
                                    <div key={item.label} style={{ background: "rgba(0,0,0,0.3)", padding: "24px", borderRadius: 16, border: `1px solid ${item.color}22`, display: "flex", flexDirection: "column", gap: 12 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                            <span style={{ fontSize: 20 }}>{item.emoji}</span>
                                            <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em" }}>{item.label}</span>
                                        </div>
                                        <p style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div
                        className="tq-img-hover"
                        style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #222", boxShadow: "0 30px 60px rgba(0,0,0,0.4)" }}
                        onClick={() => setSelectedImage("/images/tracking-quality-dashboard/qualitative-feedback.jpg")}
                    >
                        <img
                            src="/images/tracking-quality-dashboard/qualitative-feedback.jpg"
                            alt="Qualitative Feedback Audit"
                            style={{ width: "100%", height: "auto", display: "block" }}
                        />
                    </div>
                </div>
            </section>

            <section id="synthesis" style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px 100px 120px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 20, fontWeight: 900 }}>06 SYNTHESIS</span>
                <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 24, color: "#fff" }}>
                    Working towards <em style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic", fontWeight: 400 }}>solutions</em>
                </h2>
                <p style={{ fontSize: 18, color: "#d1d5db", lineHeight: 1.7, maxWidth: 700, marginBottom: 56 }}>
                    Usage patterns from the most-used features, combined with qualitative research, shaped a new definition framework. Customer validation sessions confirmed the new widgets were interpretable.
                </p>

                {/* Equation (Now positioned below the paragraph) */}
                <div style={{ padding: "0 0 80px", textAlign: "left" }}>
                    <div style={{
                        background: "rgba(255,255,255,0.03)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        padding: "32px 40px",
                        borderRadius: 20,
                        display: "inline-block",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        position: "relative",
                        overflow: "hidden"
                    }}>
                        <div style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: 4,
                            height: "100%",
                            background: palette.secondary
                        }} />
                        <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "#fff", letterSpacing: "0.25em", marginBottom: 16, fontWeight: 900 }}>
                            The New Tracking Formula
                        </div>
                        <code style={{
                            fontFamily: "ui-monospace, monospace",
                            fontSize: "clamp(20px, 3.5vw, 32px)",
                            fontWeight: 800,
                            color: "#fff",
                            letterSpacing: "0.02em",
                            lineHeight: 1.3,
                            display: "block",
                            textShadow: "0 0 30px rgba(255,255,255,0.1)"
                        }}>
                            All Loads = <span style={{ color: palette.secondary }}>Tracked</span> + Untracked<br />
                            <span style={{ fontSize: "0.75em", color: palette.secondary }}>Tracked = Basic + Super Tracked</span>
                        </code>
                    </div>
                </div>

                {/* Multi-images (Visual Exploration) */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 80 }}>
                    {/* First image - Full Width span */}
                    <div
                        className="tq-img-hover"
                        style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s", gridColumn: "1 / -1", marginBottom: 40 }}
                        onClick={() => setSelectedImage("/images/tracking-quality-dashboard/truck-load-pings.jpg")}
                    >
                        <img src="/images/tracking-quality-dashboard/truck-load-pings.jpg" alt="Solution exploration 1" style={{ width: "100%", height: "auto", display: "block" }} />
                    </div>

                    {/* New Pointers Section */}
                    <div style={{ gridColumn: "1 / -1", marginBottom: 40 }}>
                        <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 28, fontWeight: 300, color: "#fff", marginBottom: 20 }}>Refining the Visual Logic</h3>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24 }}>
                            {[
                                { title: "Data Density", desc: "Reducing visual noise while maintaining depth." },
                                { title: "Hierarchical Flow", desc: "Guiding the user from summary to root-cause." },
                                { title: "Actionable Insights", desc: "Converting static data into troubleshooting steps." },
                            ].map(p => (
                                <div key={p.title} style={{ background: "rgba(255,255,255,0.03)", padding: "20px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.06)" }}>
                                    <h4 style={{ fontSize: 14, fontWeight: 700, color: palette.secondary, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.title}</h4>
                                    <p style={{ fontSize: 13, color: "#fff", lineHeight: 1.5, margin: 0, fontWeight: 300 }}>{p.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Secondary images - Side by Side */}
                    {[
                        "/images/tracking-quality-dashboard/pie-waterfall-charts.jpg",
                        "/images/tracking-quality-dashboard/horizontal-treemap.jpg",
                    ].map((src, i) => (
                        <div
                            key={i}
                            className="tq-img-hover"
                            style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s" }}
                            onClick={() => setSelectedImage(src)}
                        >
                            <img src={src} alt={`Solution exploration ${i + 2}`} style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                    ))}
                </div>
            </section>

            <div style={{ height: 1, background: "#272727", maxWidth: 1100, margin: "0 auto" }} />

            {/* ── ANALYSIS FLOW SECTION ── */}
            <section id="flow" style={{ background: "#0a0a0a", padding: "100px 60px 100px 120px", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1200, margin: "0 auto" }}>
                    {/* Header Text - Now at the Top */}
                    <div style={{ marginBottom: 60, maxWidth: 800 }}>
                        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.25em", textTransform: "uppercase", color: palette.secondary, fontWeight: 900, display: "block", marginBottom: 16 }}>07 ANALYSIS FLOW</span>
                        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 42, fontWeight: 200, lineHeight: 1.1, color: "#fff", marginBottom: 24 }}>
                            Mapping the <em style={{ fontStyle: "italic", color: palette.primary }}>Synthesis</em>
                        </h2>
                        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, fontWeight: 300 }}>
                            Bridging raw quantitative data with qualitative insights to create a logical progression for the tracking dashboard.
                        </p>
                    </div>

                    {/* Interactive Journey Flow Chart */}
                    <div style={{ background: "#050505", borderRadius: 32, padding: "40px", border: "1px solid #1f1f1f", boxShadow: "0 40px 100px rgba(0,0,0,0.5)", position: "relative", marginBottom: 80 }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 2 }}>
                            {[
                                { step: "Overview", desc: "Start point" },
                                { step: "Tracking % Trends", desc: "Detection" },
                                { step: "Tracking Issues", desc: "Isolation" },
                                { step: "Who?", desc: "Ownership" },
                                { step: "Which carrier?", desc: "Deep-dive" },
                                { step: "What issue?", desc: "Root cause" },
                                { step: "Recommendations", desc: "Action plan" },
                                { step: "Predictive Outcome", desc: "End goal" }
                            ].map((item, idx) => (
                                <React.Fragment key={idx}>
                                    <div
                                        onMouseEnter={() => setActiveFlowStep(idx)}
                                        style={{
                                            flex: "0 0 110px",
                                            minHeight: 90,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            textAlign: "center",
                                            cursor: "pointer",
                                            transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                            background: activeFlowStep === idx ? `linear-gradient(135deg, ${palette.primary} 0%, ${palette.secondary} 100%)` : "rgba(255,255,255,0.02)",
                                            borderRadius: 12,
                                            border: activeFlowStep === idx ? `1px solid ${palette.secondary}` : "1px solid rgba(255,255,255,0.08)",
                                            padding: "12px",
                                            boxShadow: activeFlowStep === idx ? `0 20px 40px ${palette.shadow}` : "none",
                                            transform: activeFlowStep === idx ? "translateY(-8px)" : "none",
                                            zIndex: 5
                                        }}
                                    >
                                        <div style={{ fontSize: 10, color: "#fff", opacity: activeFlowStep === idx ? 1 : 0.4, marginBottom: 6, fontWeight: 900, fontFamily: "ui-monospace, monospace" }}>STEP 0{idx + 1}</div>
                                        <span style={{
                                            fontSize: 11,
                                            fontWeight: 800,
                                            color: "#fff",
                                            lineHeight: 1.25,
                                            textTransform: "uppercase",
                                            letterSpacing: "0.03em",
                                            wordWrap: "break-word",
                                            maxWidth: "100%"
                                        }}>
                                            {item.step}
                                        </span>
                                    </div>
                                    {idx < 7 && (
                                        <div style={{
                                            flex: 1,
                                            display: "flex",
                                            alignItems: "center",
                                            padding: "0 12px",
                                            position: "relative"
                                        }}>
                                            <div style={{
                                                width: "100%",
                                                height: 1,
                                                background: palette.primary,
                                                position: "relative"
                                            }}>
                                                <div style={{
                                                    position: "absolute",
                                                    right: -4,
                                                    top: -3,
                                                    width: 8,
                                                    height: 8,
                                                    borderRight: `2px solid ${palette.primary}`,
                                                    borderTop: `2px solid ${palette.primary}`,
                                                    transform: "rotate(45deg)"
                                                }} />
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>



                    {/* Image & Sticky Container - Below Text */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: 40, alignItems: "center" }}>
                        <div
                            className="tq-img-hover"
                            style={{
                                borderRadius: 16,
                                overflow: "hidden",
                                border: "1px solid #222",
                                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                                position: "relative"
                            }}
                            onClick={() => setSelectedImage("/images/tracking-quality-dashboard/affinity-flow.png")}
                        >
                            <img
                                src="/images/tracking-quality-dashboard/affinity-flow.png"
                                alt="Affinity flow analysis"
                                style={{ width: "100%", height: "auto", display: "block" }}
                            />
                        </div>

                        {/* Sticky Note - Outside the Image */}
                        <div style={{
                            background: "#fdf4ff",
                            padding: "24px",
                            borderRadius: "2px",
                            boxShadow: "15px 15px 35px rgba(0,0,0,0.4)",
                            transform: "rotate(3deg)",
                            borderBottom: "4px solid #fecdd3",
                            position: "relative"
                        }}>
                            <div style={{
                                position: "absolute",
                                top: "-10px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: "50px",
                                height: "14px",
                                background: "rgba(255,255,255,0.5)",
                                boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
                            }}></div>
                            <div style={{
                                fontFamily: "ui-monospace, monospace",
                                fontSize: "10px",
                                color: "#e11d48",
                                letterSpacing: "0.15em",
                                marginBottom: "12px",
                                fontWeight: 900
                            }}>KEY INSIGHT</div>
                            <p style={{
                                fontFamily: "var(--font-outfit), sans-serif",
                                fontSize: "15px",
                                color: "#1e293b",
                                lineHeight: "1.5",
                                margin: 0,
                                fontWeight: 600
                            }}>
                                Customers prioritize "Accountability" over just "Data Density". The flow must reflect who owns the gap.
                            </p>
                        </div>
                    </div>

                </div>
            </section>




            {/* ── IDEATION TO SOLUTIONS ── */}
            <section id="ideation" style={{ background: "#111", padding: "100px 60px 100px 120px", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 20, fontWeight: 900 }}>08 IDEATION</span>
                    <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 24, color: "#fff" }}>
                        Ideation to <em style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic", fontWeight: 400 }}>solutions</em>
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                        <div>
                            {/* Resolution Logic Path - MOVED TO TOP */}
                            <div style={{ marginBottom: 48, paddingBottom: 32, borderBottom: "1px solid #222" }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    {[
                                        { label: "Owner of the issue" },
                                        { label: "What Issue" },
                                        { label: "Why Reason" },
                                        { label: "Recommended actions" }
                                    ].map((step, idx) => (
                                        <React.Fragment key={idx}>
                                            <div
                                                onMouseEnter={() => setHoveredLogicIdx(idx)}
                                                onMouseLeave={() => setHoveredLogicIdx(null)}
                                                style={{
                                                    background: hoveredLogicIdx === idx ? palette.primary : "rgba(255,255,255,0.05)",
                                                    padding: "14px 12px",
                                                    borderRadius: "8px",
                                                    border: `1px solid ${palette.primary}`,
                                                    textAlign: "center",
                                                    flex: 1,
                                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                                    cursor: "pointer",
                                                    transform: hoveredLogicIdx === idx ? "translateY(-4px)" : "none",
                                                    boxShadow: hoveredLogicIdx === idx ? `0 10px 20px ${palette.shadow}` : "none"
                                                }}
                                            >
                                                <span style={{
                                                    fontSize: 10,
                                                    fontWeight: 900,
                                                    color: hoveredLogicIdx === idx ? "#fff" : palette.secondary,
                                                    textTransform: "uppercase",
                                                    letterSpacing: "0.06em",
                                                    transition: "color 0.2s"
                                                }}>
                                                    {step.label}
                                                </span>
                                            </div>

                                            {idx < 3 && (
                                                <div style={{ padding: "0 12px", color: palette.secondary, fontSize: 20, fontWeight: 900 }}>→</div>
                                            )}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>

                            <p style={{ fontSize: 17, color: "#ffffffff", lineHeight: 1.75, marginBottom: 32 }}>
                                The core value of the new dashboard: give concise info on <strong style={{ color: palette.primary, fontWeight: 800 }}>who is accountable</strong>, the <strong style={{ color: palette.primary, fontWeight: 800 }}>trend in quality issues</strong>, the <strong style={{ color: palette.primary, fontWeight: 800 }}>root causes</strong>, and recommended actions not available before.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {[
                                    { owner: "Shipper", color: "#a855f7", desc: "Issues owned by the shipper and how they affect their tracking quality." },
                                    { owner: "Company", color: "#fb923c", desc: "Platform-level causes and FourKites' accountability in the resolution." },
                                    { owner: "Carrier", color: "#34d399", desc: "Carrier-specific issues with recommended actions to resolve them." },
                                ].map(o => (
                                    <div key={o.owner} style={{ background: "#0a0a0a", borderRadius: 12, padding: "20px 24px", border: "1px solid #1f1f1f", display: "flex", gap: 16, alignItems: "flex-start" }}>
                                        <div style={{ minWidth: 80, fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: o.color, fontWeight: 900, paddingTop: 2 }}>{o.owner}</div>
                                        <p style={{ fontSize: 14, color: "#ffffffff", lineHeight: 1.55, margin: 0 }}>{o.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div
                            className="tq-img-hover"
                            style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s" }}
                            onClick={() => setSelectedImage("/images/tracking-quality-dashboard/ideation-to-solution.jpg")}
                        >
                            <img src="/images/tracking-quality-dashboard/ideation-to-solution.jpg" alt="Ideation" style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DASHBOARD DESIGN ── */}
            <section id="design" style={{ maxWidth: 1400, margin: "0 auto", padding: "100px 60px 100px 120px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 20, fontWeight: 900 }}>09 DESIGN</span>
                <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 40, color: "#fff" }}>
                    Dashboard <em style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic", fontWeight: 400 }}>Design</em>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, background: "#272727", marginBottom: 56, maxWidth: 1100, margin: "0 auto 72px auto" }}>
                    {[
                        { label: "Straight Access", desc: "Straightforward access to the most necessary information no scroll, no noise." },
                        { label: "Minimal UI", desc: "Negated additional widgets from the old dashboard. Less is more." },
                        { label: "Coherent Journey", desc: "Information arranged in a sequence that mirrors the shipper's mental model." },
                        { label: "Prominent CTAs", desc: "Action items and data-export CTAs given more prominence than in v1." },
                    ].map(r => (
                        <div key={r.label} className="tq-card-hover" style={{ background: "#0a0a0a", padding: "32px 28px", transition: "background 0.2s" }}>
                            <h4 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 20, fontWeight: 1000, color: "#fff", marginBottom: 10 }}>{r.label}</h4>
                            <p style={{ fontSize: 16, color: "#fffbfbff", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                        </div>
                    ))}
                </div>

                <div
                    className="tq-img-hover"
                    style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s" }}
                    onClick={() => setSelectedImage("/images/tracking-quality-dashboard/TQ note.jpg")}
                >
                    <img src="/images/tracking-quality-dashboard/TQ note.jpg" alt="Annotated Dashboard Design" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>


            </section>


            <section id="impact" style={{ background: "#050505", padding: "60px 60px 120px 120px", borderBottom: "1px solid #1a1a1a" }}>
                <div style={{ maxWidth: 1400, margin: "0 auto" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80 }}>
                        <div style={{ textAlign: "left" }}>
                            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 20, fontWeight: 900 }}>10 IMPACT</span>
                            <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,72px)", fontWeight: 200, lineHeight: 1.05, color: "#fff", margin: 0 }}>
                                UX research <em style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic", fontWeight: 400 }}>paid off</em>
                            </h2>
                            <p style={{ fontFamily: "var(--font-sans), sans-serif", fontSize: 18, color: palette.secondary, marginTop: 12, fontWeight: 300 }}>
                                Improvement over time
                            </p>
                        </div>

                        {/* Interactive Toggle */}
                        <div style={{ background: "#111", padding: 8, borderRadius: 100, display: "flex", gap: 8, border: "1px solid #222" }}>
                            <button
                                onClick={() => setShowImpactAfter(false)}
                                style={{
                                    padding: "12px 32px",
                                    borderRadius: 100,
                                    background: !showImpactAfter ? palette.primary : "transparent",
                                    color: "#fff",
                                    fontSize: 13,
                                    fontWeight: 900,
                                    fontFamily: "ui-monospace, monospace",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                    boxShadow: !showImpactAfter ? `0 10px 20px ${palette.shadow}` : "none"
                                }}
                            >
                                2022
                            </button>
                            <button
                                onClick={() => setShowImpactAfter(true)}
                                style={{
                                    padding: "12px 32px",
                                    borderRadius: 100,
                                    background: showImpactAfter ? palette.primary : "transparent",
                                    color: "#fff",
                                    fontSize: 13,
                                    fontWeight: 900,
                                    fontFamily: "ui-monospace, monospace",
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                                    boxShadow: showImpactAfter ? `0 10px 20px ${palette.shadow}` : "none"
                                }}
                            >
                                2026
                            </button>
                        </div>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "start" }}>
                        {/* LEFT: IMAGES */}
                        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                            {[
                                { src: "/images/tracking-quality-dashboard/quantitative-chart-1.png", label: "Measurement Growth" },
                                { src: "/images/tracking-quality-dashboard/quantitative-chart-2.png", label: "Distribution Accuracy" },
                            ].map((img, i) => (
                                <div key={i}>
                                    <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, letterSpacing: "0.2em", color: palette.secondary, textTransform: "uppercase", marginBottom: 16, fontWeight: 900 }}>
                                        {img.label}
                                    </div>
                                    <div
                                        className="tq-img-hover"
                                        style={{ borderRadius: 24, overflow: "hidden", border: "1px solid #222", boxShadow: "0 40px 80px rgba(0,0,0,0.6)", transition: "all 0.4s ease" }}
                                        onClick={() => setSelectedImage(img.src)}
                                    >
                                        <img
                                            src={img.src}
                                            alt={img.label}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                display: "block",
                                                transition: "all 0.5s ease"
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT: METRICS (BENTO GRID) */}
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "#222", border: "1px solid #222", borderRadius: 24, overflow: "hidden" }}>
                            {[
                                {
                                    title: "ADOPTION",
                                    label: "Client Growth",
                                    before: "400", beforeSub: "Shippers",
                                    after: "1,600+", afterSub: "Brands",
                                    growth: "4x", accent: palette.primary,
                                    progress: 85
                                },
                                {
                                    title: "ENGAGEMENT",
                                    label: "Network Scale",
                                    before: "200k", beforeSub: "Carriers",
                                    after: "1.1M+", afterSub: "Connected",
                                    growth: "5.5x", accent: palette.secondary,
                                    progress: 95
                                },
                                {
                                    title: "USABILITY",
                                    label: "Cycle Time",
                                    before: "4w", beforeSub: "Manual",
                                    after: "10m", afterSub: "Auto",
                                    growth: "Instant", accent: "#34d399",
                                    progress: 100
                                },
                                {
                                    title: "QUALITY",
                                    label: "Consistency",
                                    before: "75%", beforeSub: "Base",
                                    after: "90%", afterSub: "Super",
                                    growth: "+15%", accent: "#fb923c",
                                    progress: 90
                                },
                                {
                                    title: "DENSITY",
                                    label: "Refresh Rate",
                                    before: "8h", beforeSub: "Stale",
                                    after: "15m", afterSub: "Update",
                                    growth: "32x", accent: "#a855f7",
                                    progress: 100
                                },
                                {
                                    title: "VOLUME",
                                    label: "Daily Pings",
                                    before: "Static", beforeSub: "Reactive",
                                    after: "3.2M", afterSub: "Predictive",
                                    growth: "Scale", accent: palette.primary,
                                    progress: 100
                                },
                            ].map((m, i) => (
                                <div key={i} style={{ background: "#0c0c0c", padding: "28px 24px", transition: "all 0.3s ease" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                                        <div>
                                            <h3 style={{ fontFamily: "ui-monospace, monospace", fontSize: 9, letterSpacing: "0.2em", color: palette.secondary, marginBottom: 2, fontWeight: 900 }}>{m.title}</h3>
                                            <div style={{ fontSize: 13, color: "#fff", fontWeight: 700, fontFamily: "var(--font-outfit), sans-serif" }}>{m.label}</div>
                                        </div>
                                        <div style={{ padding: "4px 8px", background: showImpactAfter ? `${m.accent}20` : "rgba(255,255,255,0.05)", borderRadius: 100, fontSize: 9, color: showImpactAfter ? m.accent : "#fff", fontWeight: 900, border: `1px solid ${showImpactAfter ? m.accent + "44" : "rgba(255,255,255,0.1)"}`, fontFamily: "ui-monospace, monospace" }}>
                                            {showImpactAfter ? m.growth : "V1"}
                                        </div>
                                    </div>

                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
                                        <div style={{ transition: "all 0.5s ease", transform: showImpactAfter ? "scale(0.85)" : "scale(1)" }}>
                                            <div style={{ fontSize: 20, color: "#fff", fontWeight: 900 }}>{m.before}</div>
                                            <div style={{ fontSize: 8, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.beforeSub}</div>
                                        </div>
                                        <div style={{ color: palette.secondary, fontSize: 16, fontWeight: 900, opacity: 0.2 }}>→</div>
                                        <div style={{ textAlign: "right", transition: "all 0.5s ease", transform: showImpactAfter ? "scale(1.1)" : "scale(1)" }}>
                                            <div style={{ fontSize: 26, color: "#fff", fontWeight: 900 }}>{m.after}</div>
                                            <div style={{ fontSize: 8, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700 }}>{m.afterSub}</div>
                                        </div>
                                    </div>


                                    <div style={{ height: 3, background: "#111", borderRadius: 2, position: "relative", overflow: "hidden" }}>
                                        <div style={{
                                            position: "absolute", left: 0, top: 0, height: "100%",
                                            width: showImpactAfter ? `${m.progress}%` : "10%",
                                            background: !showImpactAfter ? "#444" : m.accent,
                                            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
                                        }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>





            {/* ── KEY LEARNINGS ── */}
            <section id="reflection" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 60px 100px 120px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, letterSpacing: "0.4em", textTransform: "uppercase", color: palette.secondary, display: "block", marginBottom: 20, fontWeight: 900 }}>11 REFLECTION</span>
                <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 60, color: "#fff" }}>
                    Key <em style={{ background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontStyle: "italic", fontWeight: 400 }}>learnings</em>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24, marginBottom: 80 }}>
                    {[
                        { num: "01", text: "There is a lot of ambiguity in a challenging project, but the right process will naturally help with a better solution." },
                        { num: "02", text: "Accounting and collaborating with varied stakeholders' perspectives gives a holistic picture." },
                        { num: "03", text: "Change management takes time and is key for user engagement when a new revamp is launched." },
                        { num: "04", text: "Given the opportunity next time, I will propose to build this in a framework that supports advanced interactions." },
                    ].map(l => (
                        <div key={l.num} style={{ background: "#0c0c0c", border: "1px solid #1f1f1f", padding: "40px", borderRadius: 24, display: "flex", gap: 24, alignItems: "flex-start", transition: "all 0.3s ease" }} className="tq-card-hover">
                            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 18, color: palette.secondary, fontWeight: 900, minWidth: 28 }}>{l.num}</span>
                            <p style={{ fontSize: 18, color: "#fff", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>{l.text}</p>
                        </div>
                    ))}
                </div>

                {/* Successful UX Process Pop Section */}
                <div
                    className="tq-float"
                    style={{ textAlign: "center", padding: "80px 40px", background: "linear-gradient(180deg, #0c0c0c 0%, #050505 100%)", border: "1px solid #1f1f1f", borderRadius: 40, boxShadow: `0 40px 80px rgba(0,0,0,0.4)` }}
                >
                    <div style={{ display: "inline-block", padding: "12px 24px", background: `${palette.primary}15`, borderRadius: 100, border: `1px solid ${palette.primary}33`, color: palette.secondary, fontSize: 12, fontWeight: 900, letterSpacing: "0.2em", marginBottom: 32, fontFamily: "ui-monospace, monospace" }}>
                        FINAL TAKEAWAY
                    </div>
                    <div style={{ maxWidth: 850, margin: "0 auto" }}>
                        <h3 style={{ 
                            fontFamily: "var(--font-outfit), sans-serif", 
                            fontSize: "clamp(32px,4vw,52px)", 
                            fontWeight: 900, 
                            lineHeight: 1.1, 
                            letterSpacing: "-0.03em",
                            background: "linear-gradient(135deg, #fde047 0%, #22d3ee 33%, #3b82f6 66%, #c084fc 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            margin: 0
                        }}>
                            A successful UX process that transformed complex data into an intuitive, high-velocity visibility engine.
                        </h3>
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div style={{ background: palette.primary, padding: "80px 60px", textAlign: "center" }}>
                <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(28px,4vw,56px)", fontWeight: 300, fontStyle: "italic", color: "#fff", lineHeight: 1.1, maxWidth: 700, margin: "0 auto 16px" }}>
                    Data that drives decisions, not debates.
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", letterSpacing: "0.2em", fontFamily: "ui-monospace, monospace", textTransform: "uppercase", fontWeight: 200 }}>
                    Tracking quality Dashboard - Supply chain visibility · FourKites · Supply Chain · 2023
                </p>
        </div>

            {/* ── LIGHTBOX ── */ }
    {
        selectedImage && (
            <div
                onClick={() => setSelectedImage(null)}
                style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.95)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "zoom-out", padding: "40px", backdropFilter: "blur(20px)" }}
            >
                <img
                    src={selectedImage}
                    alt="Expanded view"
                    style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "16px", boxShadow: "0 60px 120px rgba(0,0,0,0.8)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <div style={{ position: "absolute", top: 40, right: 40, color: "#fff", fontSize: 20, fontWeight: 900, fontFamily: "ui-monospace, monospace", cursor: "pointer", background: "rgba(255,255,255,0.1)", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", backdropFilter: "blur(4px)" }}>✕</div>
            </div>
        )
    }
        </main >
    );
}
