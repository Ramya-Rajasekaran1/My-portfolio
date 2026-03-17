"use client";
import React from "react";
import { type Project } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function TQDashboardProject({ project }: { project: Project }) {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

    return (
        <main
            style={{
                fontFamily: "'Inter', sans-serif",
                background: "#0a0a0a",
                color: "#ffffff",
                overflowX: "hidden",
                minHeight: "100vh",
            }}
        >
            <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Inter:wght@400;500;600;700;900&display=swap');
        .tq-card-hover:hover { background: rgba(124,58,237,0.08) !important; }
        .tq-img-hover:hover { opacity: 0.9; cursor: zoom-in; }
        header[class*="fixed"], nav.site-nav { display: none !important; }
      `}</style>

            {/* ── NAV ── */}
            <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "'Inter', sans-serif", color: "#d1d5db", textDecoration: "none" }}>
                        <ArrowLeft size={16} /> Back to Work
                    </Link>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db" }}>
                        Tracking Quality · UX Case Study · 2023
                    </span>
                </div>
            </nav>

            {/* ── HERO ── */}
            <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh", paddingTop: 60 }}>
                {/* Left */}
                <div style={{ background: "#0f0f0f", padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db" }}>UX Case Study · 2023</span>
                    <div>
                        <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: "#d1d5db", marginBottom: 28 }}>Supply Chain · Data Visualization · Enterprise SaaS</div>
                        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(44px,5.5vw,80px)", fontWeight: 900, lineHeight: 0.95, color: "#fff", marginBottom: 32 }}>
                            Tracking<br /><em style={{ color: "#7c3aed", fontStyle: "italic" }}>Quality</em>
                        </h1>
                        <p style={{ fontSize: 16, color: "#d1d5db", lineHeight: 1.7, maxWidth: 360, marginBottom: 48 }}>
                            Redesigning a shipment tracking dashboard — from opaque consistency metrics nobody trusted to clear, accountable data that drives real carrier decisions.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                            {[
                                ["Role", "End-to-end UX · Research · Data Visualization"],
                                ["Company", "FourKites"],
                                ["Duration", "4–5 Weeks"],
                                ["Scope", "Dashboard Revamp · Research · Usability Testing"],
                            ].map(([label, value]) => (
                                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a78bfa", minWidth: 80, fontWeight: 700 }}>{label}</span>
                                    <span style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>{value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div />
                </div>

                {/* Right */}
                <div style={{ background: "linear-gradient(135deg, #1e0a3c 0%, #0f0f1a 50%, #0a0a0a 100%)", padding: "80px 80px 80px 100px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", borderLeft: "1px solid rgba(124,58,237,0.2)" }}>
                    <div style={{ position: "absolute", top: 40, right: -20, fontFamily: "'Playfair Display', serif", fontSize: 140, fontWeight: 900, color: "rgba(255,255,255,0.04)", lineHeight: 0.9, whiteSpace: "pre", pointerEvents: "none" }}>{"TQ\nDATA"}</div>
                    <div style={{ position: "relative", zIndex: 2 }}>
                        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px,3vw,40px)", fontWeight: 700, fontStyle: "italic", color: "#fff", lineHeight: 1.2, marginBottom: 32 }}>
                            "Data without accountability is just noise."
                        </p>
                        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, maxWidth: 420, marginBottom: 48 }}>
                            The existing dashboard showed <span style={{ color: "#a78bfa", fontWeight: 700 }}>consistency percentages</span> that looked low — not because tracking was poor, but because the <span style={{ color: "#fb923c", fontWeight: 700 }}>standards were unrealistically high</span>. No one knew who was responsible for the gap. I built the solution from discovery to delivery.
                        </p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                            {["UX Research", "Data Visualization", "Heuristic Analysis", "Affinity Mapping", "Usability Testing", "Dashboard Design"].map(t => (
                                <span key={t} style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", padding: "6px 14px", border: "1px solid rgba(167,139,250,0.4)", color: "rgba(255,255,255,0.8)", borderRadius: 2 }}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── OBJECTIVES STRIP ── */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#111111", borderTop: "1px solid #272727", borderBottom: "1px solid #272727" }}>
                {[
                    { num: "01", title: "Actionable Clarity", text: <>Replace raw% numbers with <span style={{ color: "#a78bfa", fontWeight: 600 }}>ownership-based breakdowns</span> — so shippers know if the issue is theirs, the carrier's, or the platform's.</> },
                    { num: "02", title: "Simpler Definitions", text: <>New tracking taxonomy: <span style={{ color: "#fb923c", fontWeight: 600 }}>All Loads = Tracked + Untracked</span>, Tracked = Basic + Super. One formula everyone understands.</> },
                    { num: "03", title: "Measurable Adoption", text: <>Track UX success with <span style={{ color: "#34d399", fontWeight: 600 }}>Pendo &amp; Sisense</span> — highest dashboard adoption across all analytics features post-launch.</> },
                ].map(o => (
                    <div key={o.num} className="tq-card-hover" style={{ padding: "44px 40px", borderRight: "1px solid #272727", transition: "background 0.2s", cursor: "default" }}>
                        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase", color: "#a78bfa", marginBottom: 8, display: "block", fontWeight: 900 }}>OBJECTIVE {o.num}</span>
                        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, marginBottom: 10, color: "#ffffff" }}>{o.title}</h3>
                        <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7 }}>{o.text}</p>
                    </div>
                ))}
            </div>

            {/* ── THE PROBLEM ── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.15em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>01 THE PROBLEM</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 40, color: "#fff" }}>
                    Too much data. <em style={{ fontStyle: "italic", color: "#7c3aed" }}>No one accountable.</em>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 60 }}>
                    <p style={{ fontSize: 19, lineHeight: 1.75, color: "#e5e7eb" }}>
                        The existing Tracking Quality dashboard gave shippers and carriers a single consistency %, heavily penalised by FourKites' own high internal standard. When that number looked bad, no one knew <em>why</em> — or whose fault it was. The data was plentiful; the insight was absent.
                    </p>
                    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                        {[
                            { label: "Too much noise", desc: "Analysis data that couldn't be actioned by any team." },
                            { label: "No accountability", desc: "Nobody knew if the issue was the shipper, carrier, or platform." },
                            { label: "Unrealistic standard", desc: "FourKites' own high bar made consistent% appear worse than it was." },
                            { label: "Competitor lag", desc: "Tracking quality % below industry benchmarks, risking churn." },
                        ].map(p => (
                            <div key={p.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                                <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#7c3aed", marginTop: 8, flexShrink: 0 }} />
                                <div>
                                    <div style={{ fontWeight: 700, color: "#fff", fontSize: 15, marginBottom: 2 }}>{p.label}</div>
                                    <div style={{ fontSize: 14, color: "#888", lineHeight: 1.5 }}>{p.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cover image */}
                {project.image && (
                    <div
                        className="tq-img-hover"
                        style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #222", boxShadow: "0 20px 60px rgba(0,0,0,0.5)", transition: "opacity 0.2s" }}
                        onClick={() => setSelectedImage(project.image)}
                    >
                        <img src={project.image} alt="Dashboard overview" style={{ width: "100%", height: "auto", display: "block" }} />
                    </div>
                )}
            </section>

            <div style={{ height: 1, background: "#272727", maxWidth: 1100, margin: "0 auto" }} />

            {/* ── USER & BUSINESS PROBLEM ── */}
            <section style={{ background: "#111", padding: "100px 60px", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>02 CONTEXT</span>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 60, color: "#fff" }}>
                        Who felt the <em style={{ color: "#7c3aed", fontStyle: "italic" }}>pain</em>
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                        {/* Target audiences */}
                        <div>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: "#fff", marginBottom: 20 }}>Target Audience</h3>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                {["Shippers", "Carriers", "3PLs (Third-Party Logistics)", "Customer Success Representatives"].map(a => (
                                    <div key={a} style={{ display: "flex", alignItems: "center", gap: 12, background: "#0a0a0a", padding: "14px 20px", borderRadius: 10, border: "1px solid #1f1f1f" }}>
                                        <div style={{ width: 8, height: 8, borderRadius: 2, background: "#7c3aed", flexShrink: 0 }} />
                                        <span style={{ fontSize: 15, color: "#e5e7eb", fontWeight: 500 }}>{a}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* User story */}
                        <div style={{ background: "#0a0a0a", borderRadius: 16, padding: "32px", border: "1px solid #1f1f1f" }}>
                            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#a78bfa", fontWeight: 900, display: "block", marginBottom: 16 }}>Sample User Story</span>
                            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontStyle: "italic", color: "#fff", lineHeight: 1.7, marginBottom: 20 }}>
                                "As a Shipper, I want to identify which carrier is accountable for low tracking quality — so I can take action and protect my business."
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                {[
                                    "Keep a tab on which carriers are better performing",
                                    "Find out which carriers are causing problems",
                                    "Identify problems within my own entity",
                                    "Understand what can improve tracking efficiency",
                                ].map(g => (
                                    <div key={g} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#a78bfa", marginTop: 7, flexShrink: 0 }} />
                                        <span style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.5 }}>{g}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── HEURISTIC ANALYSIS ── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>03 AUDIT</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24, color: "#fff" }}>
                    Heuristic <em style={{ color: "#7c3aed", fontStyle: "italic" }}>Analysis</em>
                </h2>
                <p style={{ fontSize: 18, color: "#d1d5db", lineHeight: 1.7, maxWidth: 700, marginBottom: 48 }}>
                    A section-by-section audit of the existing dashboard against Jakob Nielsen's 10 principles — surfacing UX and UI pain points aligned with real customer feedback and stakeholder discovery.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 2, background: "#272727", marginBottom: 48 }}>
                    {[
                        { num: "01", label: "Widget Analysis", desc: "Broke down each dashboard widget to understand its purpose vs. what users actually needed." },
                        { num: "02", label: "Experience Journeys", desc: "Mapped existing user flows to identify where drop-offs and confusion occurred." },
                        { num: "03", label: "Filter Behaviour", desc: "Specifically audited filter element interactions — a key source of friction for CSRs." },
                    ].map(i => (
                        <div key={i.num} className="tq-card-hover" style={{ background: "#0a0a0a", padding: "32px 28px", transition: "background 0.2s" }}>
                            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#a78bfa", fontWeight: 900, display: "block", marginBottom: 12 }}>{i.num}</span>
                            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{i.label}</h4>
                            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6 }}>{i.desc}</p>
                        </div>
                    ))}
                </div>

                <div
                    className="tq-img-hover"
                    style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s" }}
                    onClick={() => setSelectedImage("/images/tracking-quality-dashboard/heuristic-analysis.jpg")}
                >
                    <img src="/images/tracking-quality-dashboard/heuristic-analysis.jpg" alt="Heuristic Analysis" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
            </section>

            <div style={{ height: 1, background: "#272727", maxWidth: 1100, margin: "0 auto" }} />

            {/* ── QUALITATIVE FEEDBACK ── */}
            <section style={{ background: "#111", padding: "100px 60px", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>04 RESEARCH</span>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "start" }}>
                        <div>
                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(36px,4vw,54px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24, color: "#fff" }}>
                                Qualitative <em style={{ color: "#7c3aed", fontStyle: "italic" }}>Feedback</em>
                            </h2>
                            <p style={{ fontSize: 16, color: "#d1d5db", lineHeight: 1.75, marginBottom: 32 }}>
                                Cross-functional workshop + affinity mapping to categorize opportunities and pain points. Colour-coded to signal signal type:
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                {[
                                    { color: "#ef4444", label: "Red", desc: "Pain points — friction, confusion, dead ends" },
                                    { color: "#22c55e", label: "Green", desc: "Working well — preserve and amplify" },
                                    { color: "#eab308", label: "Yellow", desc: "Improvement areas — redesign opportunities" },
                                ].map(c => (
                                    <div key={c.label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                                        <div style={{ width: 14, height: 14, borderRadius: 3, background: c.color, flexShrink: 0, marginTop: 3 }} />
                                        <div>
                                            <span style={{ fontWeight: 700, color: "#fff", fontSize: 14 }}>{c.label}:</span>
                                            <span style={{ fontSize: 14, color: "#888", marginLeft: 6 }}>{c.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {[
                                "/images/tracking-quality-dashboard/qualitative-feedback.jpg",
                                "/images/tracking-quality-dashboard/affinity-flow.png"
                            ].map((src, i) => (
                                <div
                                    key={i}
                                    className="tq-img-hover"
                                    style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s" }}
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <img src={src} alt={`Research ${i + 1}`} style={{ width: "100%", height: "auto", display: "block" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WORKING TOWARDS SOLUTIONS ── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>05 SYNTHESIS</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24, color: "#fff" }}>
                    Working towards <em style={{ color: "#7c3aed", fontStyle: "italic" }}>solutions</em>
                </h2>
                <p style={{ fontSize: 18, color: "#d1d5db", lineHeight: 1.7, maxWidth: 700, marginBottom: 40 }}>
                    Usage patterns from the most-used features, combined with qualitative research, shaped a new definition framework. Customer validation sessions confirmed the new widgets were interpretable.
                </p>

                {/* Equation */}
                <div style={{ background: "#111", borderRadius: 16, padding: "28px 40px", border: "1px solid #1f1f1f", marginBottom: 48, textAlign: "center" }}>
                    <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "#888", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>The new tracking formula</div>
                    <code style={{ fontFamily: "ui-monospace, monospace", fontSize: 20, fontWeight: 700, color: "#a78bfa", letterSpacing: "0.05em" }}>
                        All Loads = Tracked + Untracked &nbsp;|&nbsp; Tracked = Basic + Super Tracked
                    </code>
                </div>

                {/* Method chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 56 }}>
                    {["Information Architecture", "Persona Use Cases", "Internal Stakeholder Testing", "User Stories", "Prototyping"].map(c => (
                        <span key={c} style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 16px", border: "1px solid rgba(167,139,250,0.35)", color: "#a78bfa", borderRadius: 4, fontWeight: 700 }}>{c}</span>
                    ))}
                </div>

                {/* Multi-images */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16 }}>
                    {[
                        "/images/tracking-quality-dashboard/truck-load-pings.jpg",
                        "/images/tracking-quality-dashboard/pie-waterfall-charts.jpg",
                        "/images/tracking-quality-dashboard/horizontal-treemap.jpg",
                    ].map((src, i) => (
                        <div
                            key={i}
                            className="tq-img-hover"
                            style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s" }}
                            onClick={() => setSelectedImage(src)}
                        >
                            <img src={src} alt={`Solution exploration ${i + 1}`} style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                    ))}
                </div>
            </section>

            <div style={{ height: 1, background: "#272727", maxWidth: 1100, margin: "0 auto" }} />

            {/* ── IDEATION TO SOLUTIONS ── */}
            <section style={{ background: "#111", padding: "100px 60px", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>06 IDEATION</span>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 24, color: "#fff" }}>
                        Ideation to <em style={{ color: "#7c3aed", fontStyle: "italic" }}>solutions</em>
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
                        <div>
                            <p style={{ fontSize: 17, color: "#d1d5db", lineHeight: 1.75, marginBottom: 32 }}>
                                The core value of the new dashboard: give concise info on <strong style={{ color: "#fff" }}>who is accountable</strong>, the <strong style={{ color: "#fff" }}>trend in quality issues</strong>, the <strong style={{ color: "#fff" }}>root causes</strong>, and recommended actions not available before.
                            </p>
                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                {[
                                    { owner: "Shipper", color: "#a78bfa", desc: "Issues owned by the shipper — and how they affect their tracking quality." },
                                    { owner: "Company", color: "#fb923c", desc: "Platform-level causes and FourKites' accountability in the resolution." },
                                    { owner: "Carrier", color: "#34d399", desc: "Carrier-specific issues with recommended actions to resolve them." },
                                ].map(o => (
                                    <div key={o.owner} style={{ background: "#0a0a0a", borderRadius: 12, padding: "20px 24px", border: "1px solid #1f1f1f", display: "flex", gap: 16, alignItems: "flex-start" }}>
                                        <div style={{ minWidth: 80, fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: o.color, fontWeight: 900, paddingTop: 2 }}>{o.owner}</div>
                                        <p style={{ fontSize: 14, color: "#888", lineHeight: 1.55, margin: 0 }}>{o.desc}</p>
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

            {/* ── FIDELITY SCREENS ── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>07 DESIGN</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 40, color: "#fff" }}>
                    Solutions to <em style={{ color: "#7c3aed", fontStyle: "italic" }}>fidelity</em>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 2, background: "#272727", marginBottom: 56 }}>
                    {[
                        { label: "Straight Access", desc: "Straightforward access to the most necessary information — no scroll, no noise." },
                        { label: "Minimal UI", desc: "Negated additional widgets from the old dashboard. Less is more." },
                        { label: "Coherent Journey", desc: "Information arranged in a sequence that mirrors the shipper's mental model." },
                        { label: "Prominent CTAs", desc: "Action items and data-export CTAs given more prominence than in v1." },
                    ].map(r => (
                        <div key={r.label} className="tq-card-hover" style={{ background: "#0a0a0a", padding: "32px 28px", transition: "background 0.2s" }}>
                            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: "#fff", marginBottom: 10 }}>{r.label}</h4>
                            <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0 }}>{r.desc}</p>
                        </div>
                    ))}
                </div>

                <div
                    className="tq-img-hover"
                    style={{ borderRadius: 16, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s" }}
                    onClick={() => setSelectedImage("/images/tracking-quality-dashboard/solutions-fidelity.jpg")}
                >
                    <img src="/images/tracking-quality-dashboard/solutions-fidelity.jpg" alt="Fidelity Screens" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
            </section>

            <div style={{ height: 1, background: "#272727", maxWidth: 1100, margin: "0 auto" }} />

            {/* ── IMPACT ── */}
            <section style={{ background: "#111", padding: "100px 60px", borderBottom: "1px solid #272727" }}>
                <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>08 IMPACT</span>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 60, color: "#fff" }}>
                        UX research <em style={{ color: "#7c3aed", fontStyle: "italic" }}>paid off</em>
                    </h2>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#272727" }}>
                            {[
                                { num: "#1", label: "Dashboard Adoption" },
                                { num: "↑", label: "Steady Engagement" },
                                { num: "✓", label: "Positive Usability" },
                                { num: "📤", label: "Top CTA: Export Data" },
                            ].map(m => (
                                <div key={m.label} style={{ background: "#1a1a1a", padding: "30px 20px", textAlign: "center" }}>
                                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 900, color: "#7c3aed", lineHeight: 1, marginBottom: 8 }}>{m.num}</div>
                                    <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.label}</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {[
                                "/images/tracking-quality-dashboard/quantitative-chart-1.png",
                                "/images/tracking-quality-dashboard/quantitative-chart-2.png",
                            ].map((src, i) => (
                                <div
                                    key={i}
                                    className="tq-img-hover"
                                    style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #222", transition: "opacity 0.2s" }}
                                    onClick={() => setSelectedImage(src)}
                                >
                                    <img src={src} alt={`Impact chart ${i + 1}`} style={{ width: "100%", height: "auto", display: "block" }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── KEY LEARNINGS ── */}
            <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#a78bfa", display: "block", marginBottom: 20, fontWeight: 900 }}>09 REFLECTION</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px,5vw,62px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 60, color: "#fff" }}>
                    Key <em style={{ color: "#7c3aed", fontStyle: "italic" }}>learnings</em>
                </h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                        {[
                            { num: "01", text: "There is a lot of ambiguity in a challenging project, but the right process will naturally help with a better solution." },
                            { num: "02", text: "Accounting and collaborating with varied stakeholders' perspectives gives a holistic picture." },
                            { num: "03", text: "Change management takes time and is key for user engagement when a new revamp is launched." },
                            { num: "04", text: "Given the opportunity next time, I will propose to build this in a framework that supports advanced interactions." },
                        ].map(l => (
                            <div key={l.num} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#7c3aed", fontWeight: 900, minWidth: 28, paddingTop: 3 }}>{l.num}</span>
                                <p style={{ fontSize: 16, color: "#d1d5db", lineHeight: 1.7, margin: 0 }}>{l.text}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                            src="/images/tracking-quality-dashboard/key-learning-character-v2.png"
                            alt="Key learnings"
                            style={{ maxWidth: "100%", height: "auto", display: "block", filter: "drop-shadow(0 20px 40px rgba(124,58,237,0.2))" }}
                        />
                    </div>
                </div>
            </section>

            {/* ── FOOTER ── */}
            <div style={{ background: "#7c3aed", padding: "80px 60px", textAlign: "center" }}>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,56px)", fontWeight: 900, fontStyle: "italic", color: "#fff", lineHeight: 1.1, maxWidth: 700, margin: "0 auto 16px" }}>
                    Data that drives decisions, not debates.
                </h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", fontFamily: "ui-monospace, monospace", textTransform: "uppercase" }}>
                    Tracking Quality Dashboard · FourKites · Supply Chain · 2023
                </p>
            </div>

            {/* ── LIGHTBOX ── */}
            {selectedImage && (
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
            )}
        </main>
    );
}
