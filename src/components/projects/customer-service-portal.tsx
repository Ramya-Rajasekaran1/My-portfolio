"use client";
import React, { useState, useEffect } from "react";
import { type Project } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Search, ZoomIn, ArrowRight, BarChart3, Users, Zap, AlertCircle, ShieldAlert, Sparkles, Layers, CheckCircle } from "lucide-react";

export function CustomerServicePortalProject({ project }: { project: Project }) {
  const [showIndex, setShowIndex] = useState(false);
  const [activeVariation, setActiveVariation] = useState<"v1" | "v2" | "v3">("v3");

  useEffect(() => {
    const handleScroll = () => {
      setShowIndex(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "hero", label: "Intro" },
    { id: "overview", label: "Overview" },
    { id: "metrics", label: "Usage Metrics" },
    { id: "findings", label: "UX Research" },
    { id: "solutions", label: "Solutions" },
    { id: "audit", label: "UI Audit" },
    { id: "variations", label: "Variations" },
  ];

  return (
    <main
      style={{
        fontFamily: "var(--font-sans), sans-serif",
        background: "#030712",
        color: "#f9fafb",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* ── STICKY INDEX ── */}
      <div 
        style={{ 
          position: "fixed", 
          left: 40, 
          top: "50%", 
          transform: "translateY(-50%)", 
          zIndex: 5000, 
          display: "flex", 
          flexDirection: "column", 
          gap: 14, 
          opacity: showIndex ? 1 : 0, 
          pointerEvents: showIndex ? "auto" : "none", 
          transition: "all 0.4s ease" 
        }} 
        className="hidden lg:flex"
      >
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth' });
            }}
            title={s.label}
            aria-label={`Scroll to ${s.label}`}
            style={{ 
              width: 12, 
              height: 12, 
              borderRadius: "50%", 
              background: "rgba(255,255,255,0.15)", 
              border: "1px solid rgba(255,255,255,0.1)", 
              transition: "all 0.3s ease", 
              cursor: "pointer", 
              position: "relative",
              outline: "none",
              padding: 0
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#60a5fa"; e.currentTarget.style.transform = "scale(1.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <span style={{ 
              position: "absolute", 
              left: 28, 
              top: "50%", 
              transform: "translateY(-50%)", 
              whiteSpace: "nowrap", 
              fontFamily: "ui-monospace, monospace", 
              fontSize: 10, 
              letterSpacing: "0.15em", 
              textTransform: "uppercase", 
              color: "#FFF8F0", 
              opacity: 0, 
              transition: "opacity 0.25s", 
              background: "rgba(0,0,0,0.8)", 
              padding: "4px 10px", 
              borderRadius: 4, 
              backdropFilter: "blur(4px)" 
            }} className="sh-nav-label">{s.label}</span>
          </button>
        ))}
      </div>
      <style jsx global>{`
        .sh-nav-label { pointer-events: none; }
        button:hover .sh-nav-label { opacity: 1 !important; }
        .interactive-card:hover { border-color: rgba(96, 165, 250, 0.4) !important; background: rgba(17, 24, 39, 0.6) !important; transform: translateY(-2px); }
        .variation-tab-active { background: #3b82f6 !important; color: white !important; }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 5000, background: "rgba(3, 7, 18, 0.85)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.06)", pointerEvents: "auto" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/work/" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "'Inter', sans-serif", color: "#9ca3af", textDecoration: "none", pointerEvents: "auto" }}>
            <ArrowLeft size={16} /> Back to Work
          </Link>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b7280" }}>
            CRM Revamp · Enterprise Case Study · 2024
          </span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ display: "grid", gridTemplateColumns: "1fr", minHeight: "90vh", paddingTop: 100 }} className="lg:grid-cols-2">
        {/* Left Info Column */}
        <div style={{ background: "#0b0f19", padding: "60px 40px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.25em", textTransform: "uppercase", color: "#60a5fa", marginBottom: 16, display: "block" }}>Enterprise UX Case Study</span>
          <div>
            <h1 style={{ 
              fontFamily: "var(--font-outfit), sans-serif", 
              fontSize: "clamp(36px, 5vw, 68px)", 
              fontWeight: 900, 
              letterSpacing: "-0.03em", 
              lineHeight: 1.1, 
              marginBottom: 24,
              background: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Customer Support Portal
            </h1>
            <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(20px, 2.5vw, 32px)", fontWeight: 400, lineHeight: 1.2, color: "#f3f4f6", marginBottom: 32 }}>
              Aviation CRM Design Revamp
            </h2>
            <p style={{ fontSize: 16, color: "#9ca3af", lineHeight: 1.7, marginBottom: 48, maxWidth: 540 }}>
              Diverting call escalations and eliminating status anxiety by transforming a legacy, passive dashboard into an intelligent action hub.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 32 }}>
              {[
                ["Role", "Lead UX Designer · Research · Architecture · Prototyping"],
                ["Team", "Product Managers, Tech Operations, Data Science, Engineers"],
                ["Timeline", "1 Month (2024)"],
                ["Scope", "Visual Audit · Metrics Analysis · UI Variations & Wireframing"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", gap: 16, alignItems: "baseline" }}>
                  <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#6b7280", minWidth: 90 }}>{label}</span>
                  <span style={{ fontSize: 14, color: "#e5e7eb", fontWeight: 500 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Cover Image Column */}
        <div style={{ position: "relative", overflow: "hidden", borderLeft: "1px solid rgba(255,255,255,0.05)", background: "#0b0f19", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/csp/cover.jpg`}
            alt="Customer Support Portal Desktop Mockup"
            style={{ width: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: 8, boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)" }}
          />
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section id="overview" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#030712" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Title / Description */}
            <div className="lg:col-span-7">
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 16 }}>01 PROJECT OVERVIEW</span>
              <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.15, color: "#f9fafb", marginBottom: 24 }}>
                Transforming Legacy Support into self-serve efficacy
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#9ca3af" }}>
                Global airlines depend on rapid maintenance and technical coordination to prevent flight delays and groundings (AOG - Aircraft on Ground situations). The Customer Support Portal (CSP) is the critical lifeline where operators log technical inquiries, order spare parts, and query account settings.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "#9ca3af", marginTop: 16 }}>
                However, the original interface was reactive and opaque. Users were trapped in manual status lookup loops and frequently bypassed the digital platform to call offline service desks directly—increasing operational friction and support load.
              </p>
            </div>

            {/* Target Audience Sidebar */}
            <div className="lg:col-span-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "32px" }}>
              <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 18, fontWeight: 700, color: "#f3f4f6", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
                <Users className="w-5 h-5 text-blue-400" /> Key Stakeholders
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { name: "Airline Operators", role: "Submit aircraft technical issues; require rapid status replies to reduce fleet grounding downtime." },
                  { name: "Customer Support Personnel", role: "Collaborate with engineering squads to resolve incoming issues, coordinate answers, and close tickets." },
                  { name: "Technical Operations Manager", role: "Oversee operational fleet metrics, coordinate hot list tickets, and verify SLAs are met." },
                  { name: "System Administrator", role: "Configure accounts, permissions, and data structures to ensure clean compliance." }
                ].map((s) => (
                  <div key={s.name} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", paddingBottom: 12 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#60a5fa", marginBottom: 4 }}>{s.name}</div>
                    <div style={{ fontSize: 12, color: "#9ca3af", lineHeight: 1.5 }}>{s.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section id="metrics" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0b0f19" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 16 }}>02 QUANTITATIVE METRICS</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.15, color: "#f9fafb", marginBottom: 48 }}>
            Usage Data Analysis (6-Month Scope)
          </h2>

          {/* Stat Box Summary Row */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 24, marginBottom: 60 }}>
            {[
              { num: "32,883", label: "Total Occurrences", desc: "Digital interactions across portal endpoints." },
              { num: "12,326", label: "Total Visits", desc: "Aggregated sessions over a 6-month duration." },
              { num: "10,773", label: "Unique Visitors", desc: "Aviation operators and internal managers." },
              { num: "75.2%", label: "Reactive Share", desc: "Views & call requests dominated portal usage." }
            ].map((st) => (
              <div key={st.label} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12, padding: "24px" }}>
                <div style={{ fontSize: 36, fontWeight: 800, color: "#60a5fa", fontFamily: "var(--font-outfit), sans-serif", marginBottom: 6 }}>{st.num}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#f3f4f6", marginBottom: 4 }}>{st.label}</div>
                <div style={{ fontSize: 11, color: "#9ca3af", lineHeight: 1.4 }}>{st.desc}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 32 }} className="lg:grid-cols-12">
            {/* Visual Analytics Info */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div style={{ background: "rgba(96, 165, 250, 0.1)", border: "1px solid rgba(96, 165, 250, 0.2)", borderRadius: 12, padding: "24px", marginBottom: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#60a5fa", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <BarChart3 className="w-5 h-5" /> Reactive Dominance
                </h3>
                <p style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.6, margin: 0 }}>
                  Page Views (58.6%) and Call Requests (16.6%) represented over <strong>75% of overall traffic</strong>. Users visited the site to check information rather than leveraging interactive digital tools.
                </p>
              </div>

              <div style={{ background: "rgba(239, 68, 68, 0.08)", border: "1px solid rgba(239, 68, 68, 0.15)", borderRadius: 12, padding: "24px" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#fca5a5", display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <AlertCircle className="w-5 h-5" /> High Repeat Friction
                </h3>
                <p style={{ fontSize: 13, color: "#fca5a5", lineHeight: 1.6, margin: 0 }}>
                  Specific actions like <strong>Publish (4.24x)</strong> and <strong>Open Ticket (3.96x)</strong> logged the highest repeat visits per user. This proved operators were manually refreshing active tickets multiple times to see if updates had occurred.
                </p>
              </div>
            </div>

            {/* Treemap Visualization Representation */}
            <div className="lg:col-span-7" style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 16, padding: "32px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f3f4f6", marginBottom: 24, textTransform: "uppercase", letterSpacing: "0.1em" }}>Occurrences Distribution (Where the traffic lands)</h3>
              
              {/* Treemap visual */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { name: "CSP - Main Page Views", share: 61, count: "20,068 hits", color: "bg-blue-600/80" },
                  { name: "CSP - Open Ticket Checks", share: 24, count: "7,880 hits", color: "bg-blue-700/80" },
                  { name: "CSP - Give us a call (Phone Help)", share: 7, count: "2,759 hits", color: "bg-orange-500/50" },
                  { name: "CSP - Popular Resources", share: 5, count: "1,480 hits", color: "bg-indigo-500/50" },
                  { name: "CSP - Publish Inquiries", share: 3, count: "695 hits", color: "bg-emerald-500/50" }
                ].map((item) => (
                  <div key={item.name} style={{ width: "100%" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                      <span style={{ color: "#e5e7eb", fontWeight: 500 }}>{item.name}</span>
                      <span style={{ color: "#9ca3af", fontFamily: "ui-monospace, monospace" }}>{item.count} ({item.share}%)</span>
                    </div>
                    <div className="w-full bg-neutral-900 rounded-full h-3 overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.share}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 28, background: "rgba(255,255,255,0.02)", padding: "12px 16px", borderRadius: 8 }}>
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <p style={{ fontSize: 11, color: "#9ca3af", margin: 0 }}>
                  Three out of every five hits on the portal lands exclusively on the static Main Page, proving an absence of progressive click-through.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UX FINDINGS ── */}
      <section id="findings" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#030712" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 16 }}>03 UX FINDINGS</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.15, color: "#f9fafb", marginBottom: 48 }}>
            Core UX Issues Discovered
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }} className="md:grid-cols-2">
            {[
              {
                id: "01",
                issue: "Reactive Portal Usage",
                desc: "High portal traffic was dominated by manual ticket checks rather than self-service exploration. Operators treated the system as a bulletin board instead of an execution tool."
              },
              {
                id: "02",
                issue: "Status Check Loop",
                desc: "Users refreshed ticket pages ~5x per visit. This behavior was driven by status anxiety—operators desperately needed updates on when an critical aviation part would arrive."
              },
              {
                id: "03",
                issue: "Offline Escalation Trigger",
                desc: "If users faced friction (such as a search failure), the immediate default action was to bypass digital support completely and call help desks. This caused high phone queuing times."
              },
              {
                id: "04",
                issue: "Hidden Self-Service Value",
                desc: "Useful resources (like CCID setting configurations and account data access links) solved issues quickly when found, but they were buried below the fold and overshadowed by ticket cards."
              }
            ].map((iss) => (
              <div 
                key={iss.id} 
                className="interactive-card"
                style={{ 
                  background: "rgba(255,255,255,0.01)", 
                  border: "1px solid rgba(255,255,255,0.05)", 
                  borderRadius: 16, 
                  padding: "36px",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 13, fontFamily: "ui-monospace, monospace", color: "#3b82f6", fontWeight: 700 }}>ISSUE {iss.id}</span>
                  <ShieldAlert className="w-5 h-5 text-blue-500/60" />
                </div>
                <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 20, fontWeight: 700, color: "#f3f4f6" }}>{iss.issue}</h3>
                <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.6, margin: 0 }}>{iss.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESIGN SOLUTIONS ── */}
      <section id="solutions" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0b0f19" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 16 }}>04 DESIGN STRATEGY</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.15, color: "#f9fafb", marginBottom: 48 }}>
            Core Revamp Initiatives
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {[
              {
                title: "1. Proactive Ticket Status",
                concept: "Display live ticket updates directly on the Main Page and implement context banners to stop constant manual refreshing.",
                impact: "Reduces status lookup cycles by providing clear timeline trackers on the entry path."
              },
              {
                title: "2. Smart Call Intercept",
                concept: "Add a quick troubleshooting wizard before showing the Support Hotline phone numbers to resolve simpler issues digitally.",
                impact: "Intercepts reactive calls, redirecting queries to relevant self-help resources instead of direct phone routing."
              },
              {
                title: "3. Personalized Landing Page",
                concept: "Reallocate entry real estate to dynamically surface relevant resources based on user login attributes and role tags.",
                impact: "Increases discoverability of setting profiles, product settings, and specific data access portals."
              }
            ].map((sol, index) => (
              <div 
                key={index} 
                style={{ 
                  background: "rgba(255,255,255,0.01)", 
                  border: "1px solid rgba(255,255,255,0.04)", 
                  borderRadius: 16, 
                  padding: "40px",
                  display: "grid",
                  gridTemplateColumns: "1fr",
                  gap: 24
                }}
                className="lg:grid-cols-12"
              >
                <div className="lg:col-span-5">
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#f3f4f6", fontFamily: "var(--font-outfit), sans-serif" }}>{sol.title}</h3>
                </div>
                <div className="lg:col-span-4">
                  <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 4 }}>Design Concept</span>
                  <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.6, margin: 0 }}>{sol.concept}</p>
                </div>
                <div className="lg:col-span-3">
                  <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#34d399", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: 4 }}>Expected Outcome</span>
                  <p style={{ fontSize: 13, color: "#a7f3d0", lineHeight: 1.5, margin: 0 }}>{sol.impact}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Design Philosophy Quote Block */}
          <div style={{ marginTop: 80, background: "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(29, 78, 216, 0.05) 100%)", border: "1px solid rgba(59, 130, 246, 0.15)", borderRadius: 20, padding: "48px 40px", textAlign: "center" }}>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 12 }}>DESIGN PHILOSOPHY FOR REVAMP</span>
            <p style={{ fontSize: 24, fontStyle: "italic", fontFamily: "var(--font-serif), Georgia, serif", color: "#f3f4f6", maxWidth: 800, margin: "0 auto 20px", lineHeight: 1.5 }}>
              "Diverting phone calls and eliminating status anxiety by turning a passive dashboard into an intelligent action hub."
            </p>
            <div style={{ display: "inline-block", width: 40, height: 2, background: "#3b82f6" }}></div>
          </div>
        </div>
      </section>

      {/* ── UI AUDIT & IMAGES ── */}
      <section id="audit" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#030712" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 16 }}>05 UI ANALYSIS & AUDIT</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.15, color: "#f9fafb", marginBottom: 24 }}>
            Visual Audit: Identifying Design Flaws
          </h2>
          <p style={{ fontSize: 16, color: "#9ca3af", lineHeight: 1.7, marginBottom: 60, maxWidth: 800 }}>
            Before jumping into prototypes, we mapped user flow issues directly to UI components on the legacy dashboard. By comparing these issues directly, we created a clear hierarchy of visual objectives.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }} className="lg:grid-cols-2">
            {/* Legacy Portal Flaws */}
            <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 20, padding: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <span style={{ background: "rgba(239,68,68,0.15)", color: "#f87171", padding: "6px 14px", fontSize: 11, fontFamily: "ui-monospace, monospace", textTransform: "uppercase", letterSpacing: "0.15em", borderRadius: 4, fontWeight: 700 }}>Legacy UI Pain Points</span>
              </div>
              
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 32 }}>
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/csp/CSP 1.jpg`} 
                  alt="Annotated UI flaws" 
                  style={{ width: "100%", height: "auto", display: "block" }} 
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { title: "Wasted Space & Overcrowding", desc: "Local Support box occupies a massive amount of vertical real estate, forcing resources below the fold." },
                  { title: "Poor Hierarchy & Concealment", desc: "Resource links are treated as plain text list elements that fail to pull attention." },
                  { title: "Confusing Accordion Controls", desc: "Action buttons look like static visual tabs, creating high interaction friction." }
                ].map((flaw) => (
                  <div key={flaw.title} style={{ display: "flex", gap: 16 }}>
                    <span style={{ color: "#ef4444", fontSize: 16, fontWeight: 700 }}>&bull;</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#f3f4f6", marginBottom: 4 }}>{flaw.title}</div>
                      <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.5 }}>{flaw.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Improvements Solutions */}
            <div style={{ background: "rgba(255,255,255,0.01)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 20, padding: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 32 }}>
                <span style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", padding: "6px 14px", fontSize: 11, fontFamily: "ui-monospace, monospace", textTransform: "uppercase", letterSpacing: "0.15em", borderRadius: 4, fontWeight: 700 }}>UI Solutions Applied</span>
              </div>
              
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 32 }}>
                <img 
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/csp/CSP-UI-Low Fi-2.jpg`} 
                  alt="Low Fidelity wireframe improvements" 
                  style={{ width: "100%", height: "auto", display: "block" }} 
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                {[
                  { title: "Compact Card Layouts", desc: "Reallocated Local Support space into small contextual badges, promoting resources upfront." },
                  { title: "Enhanced Unified Search Box", desc: "Positioned search centrally at the top hero block for instant CCID inputs." },
                  { title: "Progressive Interaction Accordions", desc: "Replaced accordions with clean horizontal tabs (AOG, Orders, MBF App) to structure data." }
                ].map((sol) => (
                  <div key={sol.title} style={{ display: "flex", gap: 16 }}>
                    <span style={{ color: "#34d399", fontSize: 16, fontWeight: 700 }}>&bull;</span>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: "#f3f4f6", marginBottom: 4 }}>{sol.title}</div>
                      <div style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.5 }}>{sol.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VARIATIONS TABBED INTERFACE ── */}
      <section id="variations" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0b0f19" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 16 }}>06 DESIGN VARIATIONS</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(28px, 3.5vw, 48px)", fontWeight: 700, lineHeight: 1.15, color: "#f9fafb", marginBottom: 24 }}>
            Evaluating UX Layout Alternatives
          </h2>
          <p style={{ fontSize: 16, color: "#9ca3af", lineHeight: 1.7, marginBottom: 48, maxWidth: 800 }}>
            To find the optimal design system structure, we mapped and tested three separate visual layouts, balancing visual weight, page folds, search efficiency, and call diversion metrics.
          </p>

          {/* Tab buttons */}
          <div style={{ display: "flex", gap: 12, borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: 24, marginBottom: 48, overflowX: "auto" }}>
            {[
              { id: "v1", label: "Variation 01: Top Banner" },
              { id: "v2", label: "Variation 02: Collapsed Actions" },
              { id: "v3", label: "Variation 03: Search Upfront (Winner)" }
            ].map((vbtn) => (
              <button
                key={vbtn.id}
                onClick={() => setActiveVariation(vbtn.id as any)}
                style={{ 
                  padding: "12px 24px", 
                  borderRadius: 8, 
                  fontSize: 13, 
                  fontFamily: "ui-monospace, monospace", 
                  fontWeight: 700, 
                  cursor: "pointer", 
                  border: "1px solid rgba(255,255,255,0.08)", 
                  background: activeVariation === vbtn.id ? "#3b82f6" : "rgba(255,255,255,0.02)", 
                  color: activeVariation === vbtn.id ? "white" : "#9ca3af", 
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                  outline: "none"
                }}
              >
                {vbtn.label}
              </button>
            ))}
          </div>

          {/* Interactive Tab Content */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }} className="lg:grid-cols-12">
            {/* Visual Screen Representation */}
            <div className="lg:col-span-7 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.2)", borderRadius: 16, padding: "20px", border: "1px solid rgba(255,255,255,0.05)" }}>
              {activeVariation === "v1" && (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/csp/MacBook Pro 14_ - 7.jpg`} 
                    alt="Variation 1 wireframe" 
                    style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} 
                  />
                  <span style={{ fontSize: 11, color: "#6b7280", marginTop: 12, display: "block" }}>Layout 1: Features a large visual top banner and central clickable actions.</span>
                </div>
              )}
              {activeVariation === "v2" && (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/csp/MacBook Pro 14_ - 8.jpg`} 
                    alt="Variation 2 wireframe" 
                    style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} 
                  />
                  <span style={{ fontSize: 11, color: "#6b7280", marginTop: 12, display: "block" }}>Layout 2: Removes the visual top banner to clear up vertical space, collapsing contact links.</span>
                </div>
              )}
              {activeVariation === "v3" && (
                <div style={{ width: "100%", textAlign: "center" }}>
                  <img 
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/csp/MacBook Pro 14_ - 9.jpg`} 
                    alt="Variation 3 wireframe" 
                    style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} 
                  />
                  <span style={{ fontSize: 11, color: "#6b7280", marginTop: 12, display: "block" }}>Layout 3: Pushes the search box directly inside the banner area for high accessibility.</span>
                </div>
              )}
            </div>

            {/* Analysis Info */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {activeVariation === "v1" && (
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: "#f3f4f6", fontFamily: "var(--font-outfit), sans-serif", marginBottom: 16 }}>Variation 01: Top Image Banner</h3>
                  <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.6, marginBottom: 28 }}>
                    Places a large visual image banner at the top of the interface, positioning quick actions in the middle rows. CCID Search is placed low on the layout.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ borderLeft: "3px solid #10b981", paddingLeft: 16 }}>
                      <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#10b981", display: "block", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>PROS</span>
                      <p style={{ fontSize: 13, color: "#e5e7eb", margin: 0, marginTop: 4 }}>High brand value; feels engaging at first glance; clean sections layout.</p>
                    </div>
                    <div style={{ borderLeft: "3px solid #ef4444", paddingLeft: 16 }}>
                      <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#ef4444", display: "block", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>CONS</span>
                      <p style={{ fontSize: 13, color: "#e5e7eb", margin: 0, marginTop: 4 }}>Poor vertical real estate efficiency; critical resources are pushed below the page fold.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeVariation === "v2" && (
                <div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: "#f3f4f6", fontFamily: "var(--font-outfit), sans-serif", marginBottom: 16 }}>Variation 02: Collapsed Action Blocks</h3>
                  <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.6, marginBottom: 28 }}>
                    Removes the visual top banner completely. Main actions are placed immediately below the title, while contact support details are collapsed inside accordions.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ borderLeft: "3px solid #10b981", paddingLeft: 16 }}>
                      <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#10b981", display: "block", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>PROS</span>
                      <p style={{ fontSize: 13, color: "#e5e7eb", margin: 0, marginTop: 4 }}>Excellent fold clearance on desktop; content discovery starts instantly without scrolling.</p>
                    </div>
                    <div style={{ borderLeft: "3px solid #ef4444", paddingLeft: 16 }}>
                      <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#ef4444", display: "block", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>CONS</span>
                      <p style={{ fontSize: 13, color: "#e5e7eb", margin: 0, marginTop: 4 }}>Sub-optimal search discoverability; CCID lookup feels like a secondary choice.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeVariation === "v3" && (
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                    <span style={{ background: "rgba(16,185,129,0.15)", color: "#10b981", padding: "4px 10px", fontSize: 10, fontFamily: "ui-monospace, monospace", fontWeight: 700, borderRadius: 4 }}>SELECTED WINNER</span>
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 700, color: "#f3f4f6", fontFamily: "var(--font-outfit), sans-serif", marginBottom: 16 }}>Variation 03: Search Upfront</h3>
                  <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.6, marginBottom: 28 }}>
                    Moves the search box directly inside the blue banner at the top. Support resources are placed in high-visibility boxes, and contact lines are sorted horizontally in tabs.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    <div style={{ borderLeft: "3px solid #10b981", paddingLeft: 16 }}>
                      <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#10b981", display: "block", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>PROS</span>
                      <p style={{ fontSize: 13, color: "#e5e7eb", margin: 0, marginTop: 4 }}><strong>Highest utility layout.</strong> Positioned CCID search at the absolute focal point; inline forms avoid redirects; tabbed contact diverting calls smoothly.</p>
                    </div>
                    <div style={{ borderLeft: "3px solid #f59e0b", paddingLeft: 16 }}>
                      <span style={{ fontSize: 11, fontFamily: "ui-monospace, monospace", color: "#f59e0b", display: "block", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>COMPROMISE</span>
                      <p style={{ fontSize: 13, color: "#e5e7eb", margin: 0, marginTop: 4 }}>Requires dynamic search loading patterns, but resolved completely via single-page tabs rendering.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Pro/Con Summary Table */}
          <div style={{ marginTop: 64, overflowX: "auto", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 12 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: 14 }}>
              <thead>
                <tr style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <th style={{ padding: "16px 24px", fontWeight: 700, color: "#e5e7eb" }}>Design Variation</th>
                  <th style={{ padding: "16px 24px", fontWeight: 700, color: "#e5e7eb" }}>Primary Pro</th>
                  <th style={{ padding: "16px 24px", fontWeight: 700, color: "#e5e7eb" }}>Primary Con</th>
                  <th style={{ padding: "16px 24px", fontWeight: 700, color: "#e5e7eb" }}>Call Diversion Potential</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "16px 24px", color: "#f3f4f6", fontWeight: 600 }}>Design 1: Top Image Banner</td>
                  <td style={{ padding: "16px 24px", color: "#a1a1aa" }}>High Visual Brand Value</td>
                  <td style={{ padding: "16px 24px", color: "#a1a1aa" }}>Poor Screen Real Estate Efficiency</td>
                  <td style={{ padding: "16px 24px", color: "#fca5a5" }}>Low (Resources Buried)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  <td style={{ padding: "16px 24px", color: "#f3f4f6", fontWeight: 600 }}>Design 2: Collapsed Actions</td>
                  <td style={{ padding: "16px 24px", color: "#a1a1aa" }}>Optimized Fold Clearance</td>
                  <td style={{ padding: "16px 24px", color: "#a1a1aa" }}>Sub-Optimal Search Discoverability</td>
                  <td style={{ padding: "16px 24px", color: "#fde047" }}>Medium (Search secondary)</td>
                </tr>
                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: "rgba(59, 130, 246, 0.02)" }}>
                  <td style={{ padding: "16px 24px", color: "#60a5fa", fontWeight: 700 }}>Design 3: Search Upfront (Winner)</td>
                  <td style={{ padding: "16px 24px", color: "#a7f3d0" }}>SPA Performance & Direct CCID Entry</td>
                  <td style={{ padding: "16px 24px", color: "#a1a1aa" }}>CTA De-Prioritization</td>
                  <td style={{ padding: "16px 24px", color: "#4ade80", fontWeight: 700 }}>High (Direct Intercept)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── BOTTOM NAV NAVIGATION ── */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#030712", padding: "80px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 20, fontWeight: 700, color: "#f3f4f6", marginBottom: 16 }}>Looking for another project?</h3>
          <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.6, marginBottom: 32 }}>Explore my other design investigations in Civic Tech, AI usability, and supply chain transparency.</p>
          <Link 
            href="/work/" 
            style={{ 
              display: "inline-flex", 
              alignItems: "center", 
              gap: 8, 
              padding: "14px 28px", 
              borderRadius: 30, 
              background: "#3b82f6", 
              color: "white", 
              fontWeight: 700, 
              fontSize: 14, 
              textDecoration: "none", 
              boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)", 
              transition: "transform 0.2s" 
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.03)"}
            onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            Explore My Work <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
