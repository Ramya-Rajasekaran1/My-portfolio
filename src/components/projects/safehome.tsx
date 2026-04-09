"use client";
import React from "react";
import { type Project } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, Search, ZoomIn } from "lucide-react";



export function SafeHomeProject({ project }: { project: Project }) {
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
    { id: "disaster", label: "Disaster" },
    { id: "pain-points", label: "UX Issues" },
    { id: "built-from-zero", label: "Built from Zero" },
    { id: "role-impact", label: "Role & Impact" },
    { id: "findings", label: "Findings" },
    { id: "intervention", label: "Intervention" },
    { id: "transformation", label: "Transformation" },
    { id: "future-roadmap", label: "Roadmap" },
    { id: "constraints", label: "Constraints" },
    { id: "vision", label: "Vision" },
    { id: "reflection", label: "Reflection" },
  ];

  return (
    <main
      style={{
        fontFamily: "var(--font-sans), sans-serif",
        background: "var(--color-canvas, #000000)",
        color: "var(--color-ivory, #FFF8F0)",
        overflowX: "hidden",
        minHeight: "100vh",
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
            onMouseEnter={(e) => { e.currentTarget.style.background = "#60a5fa"; e.currentTarget.style.transform = "scale(1.4)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; e.currentTarget.style.transform = "scale(1)"; }}
            onClick={(e) => { e.currentTarget.style.background = "#f472b6"; }}
          >
            <span style={{ position: "absolute", left: 28, top: "50%", transform: "translateY(-50%)", whiteSpace: "nowrap", fontFamily: "ui-monospace, monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#FFF8F0", opacity: 0, transition: "opacity 0.25s", background: "rgba(0,0,0,0.6)", padding: "4px 10px", borderRadius: 4, backdropFilter: "blur(4px)" }} className="sh-nav-label">{s.label}</span>
          </a>
        ))}
      </div>
      <style jsx global>{`
        .sh-nav-label { pointer-events: none; }
        a:hover .sh-nav-label { opacity: 1 !important; }
        a:active { background: #f472b6 !important; }
      `}</style>

      <style jsx global>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Caveat:wght@400;600;700&display=swap');
                .sh-paper { background: #000000; }
                .sh-ink { background: #111111; }
                .sh-accent { background: #FFF8F0; }
                .sh-card-hover:hover { background: rgba(110,191,223,0.12) !important; }
                .sh-stat-hover:hover { border-color: #FFF8F0 !important; }
                .sh-metric-hover:hover { border-bottom-color: #FFF8F0 !important; }
                .sh-timeline-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.4); transform: translateY(-4px); }
                .sh-vision-card:hover { background: #1a1a1a !important; transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
                .sh-sticky:hover { transform: rotate(0deg) scale(1.03) !important; box-shadow: 6px 12px 32px rgba(0,0,0,0.6) !important; z-index: 10; }
                .sh-outcome-hover:hover { border-left-color: #FFF8F0 !important; background: rgba(110,191,223,0.1) !important; }
                /* Navbar visibility handled by layout now */
            `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/work" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "'Inter', sans-serif", color: "#d1d5db", textDecoration: "none" }}>
            <ArrowLeft size={16} /> Back to Work
          </Link>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db" }}>
            SafeHome · UX Case Study · 2025
          </span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh", paddingTop: 60 }}>

        {/* Left – dark */}
        <div style={{ background: "#0f0f0f", padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db" }}>UX Case Study 2025</span>
          <div>
            <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: "#d1d5db", marginBottom: 28 }}>Nonprofit Civic Tech Public Safety</div>
            <h1 style={{ 
              fontFamily: "var(--font-outfit), sans-serif", 
              fontSize: "clamp(52px,6vw,88px)", 
              fontWeight: 800, 
              letterSpacing: "-0.02em", 
              lineHeight: 1.1, 
              marginBottom: 20,
              background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              padding: "10px 40px 10px 0",
              overflow: "visible"
            }}>
              Safe<span style={{ fontStyle: "italic", fontWeight: 800 }}>Home</span>
            </h1>
            <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, color: "#FFF8F0", marginBottom: 12, maxWidth: 460 }}>
              Earthquake &amp; Disaster preparedness for San Francisco.
            </h2>
            <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7, maxWidth: 460, marginBottom: 48 }}>
              Redesigning for the communities of San Francisco.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Role", "UX lead · Design direction · UX Strategy."],
                ["Team", "Designers, Engineering, Data Science, Product, Partnership."],
                ["Duration", "3 work weeks (4hrs/week)"],
                ["Scope", "Redesign · UX Strategy · Usability study · Human centered approach."],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFF8F0", minWidth: 80, fontWeight: 300 }}>{label}</span>
                  <span style={{ fontSize: 14, color: "#FFF8F0", fontWeight: 500 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div />
        </div>

        {/* Right – Featured Image Mockup */}
        <div style={{ position: "relative", overflow: "hidden", borderLeft: "1px solid rgba(255,255,255,0.1)", background: "#000000" }}>
          <img
            src="/images/safehome/safehome_cover_new.jpg"
            alt="SafeHome Project Mockup"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "5% center", display: "block" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.4), transparent 30%)" }} />
          <div style={{ position: "absolute", top: 40, right: -20, fontFamily: "var(--font-outfit), sans-serif", fontSize: 160, fontWeight: 200, color: "rgba(255,255,255,0.05)", lineHeight: 0.9, whiteSpace: "pre", pointerEvents: "none" }}>{"SAFE\nHOME"}</div>
        </div>
      </section>

      {/* ── THE PROBLEM ── */}
      <section id="problem" style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>01 THE PROBLEM</span>
        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 40, color: "#FFF8F0" }}>A product with mission but <em style={{ fontStyle: "italic", color: "#FFF8F0", fontWeight: 400 }}>no direction</em></h2>

        <p style={{ fontSize: 20, lineHeight: 1.7, color: "#FFF8F0", maxWidth: 800, marginBottom: 60 }}>
          SafeHome had the right idea put credible seismic risk data in residents hands. But the experience itself was fractured, inconsistent, and hard to trust.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "#222" }}>
          {[
            {
              title: "No Design Direction",
              subtext: "The product lacked a clear UX vision, visual language, or design principles. Every screen felt like a separate decision made by a different person.",
            },
            {
              title: "No UX Process or Strategy",
              subtext: "No research framework, no design review, no feedback loops. Features were built and shipped without validation or usability testing.",
            },
            {
              title: "No Mobile Experience",
              subtext: "The platform was inaccessible on mobile a critical miss for a public safety product meant to reach all residents, including those with limited desktop access.",
            },
            {
              title: "Team Misalignment & Chaos",
              subtext: "Product, engineering, and design operated without shared goals or a common workflow. Scope changed frequently without design input or user validation.",
            },
          ].map(c => (
            <div key={c.title} className="sh-card-hover" style={{ background: "#000000", padding: "32px", transition: "all 0.2s", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 20, fontWeight: 300, color: "#FFF8F0", margin: 0 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0 }}>{c.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── RECENT DISASTER ── */}
      <section id="disaster" style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>02 RECENT DISASTER</span>
        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 200, lineHeight: 1.1, marginBottom: 32, color: "#FFF8F0" }}>California's risk is <em style={{ fontStyle: "italic", color: "#FFF8F0", fontWeight: 400 }}>not theoretical</em></h2>

        <div style={{ background: "rgba(239, 68, 68, 0.1)", borderLeft: "4px solid #ef4444", padding: "24px 32px", marginBottom: 48 }}>
          <p style={{ fontSize: 18, color: "#FFF8F0", lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
            Earthquakes in California are a constant, visceral reality. Magnitude 4.6 events near Berkeley and Boulder Creek serve as urgent reminders: the "Big One" isn't a if, but a when. Preparedness isn't a choice; it's a necessity for survival.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <div style={{ background: "#111", borderRadius: 12, padding: "12px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
            <img src="/images/safehome/Screenshot 2026-04-07 at 5.44.31 PM.png" alt="Magnitude 4.6 Boulder Creek" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
          </div>
          <div style={{ background: "#111", borderRadius: 12, padding: "12px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
            <img src="/images/safehome/IMG_6515.jpg" alt="Local Impact" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── UX PAIN POINTS ── */}
      <section id="pain-points" style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 60px 100px", paddingTop: "120px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20 }}>03 UX PAIN POINTS</span>
        
        {/* Full Width Image */}
        <div style={{ position: "relative", width: "100%", marginBottom: 60, borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.4)", background: "#1a1a1a" }}>
          <img src="/images/safehome/UX issues.jpg" alt="Legacy Portal Pain Points" style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 24, fontWeight: 300, marginBottom: 40, color: "#FFF8F0" }}>UX Issues</h3>

        {/* Square Boxes Below */}
        <div id="pain-points-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            {
              title: "CRITICAL INFORMATION HIDDEN",
              text: "The full-screen map trapped users on mobile without scroll indicators, hiding essential preparedness resources below the fold.",
            },
            {
              title: "CONFUSING TERMINOLOGY",
              text: "Technical terms like \"Liquefaction\" or \"Soft Story\" lacked plain-English explanations, leaving residents uncertain about their actual risk.",
            },
            {
              title: "LACK OF RESPONSIVENESS",
              text: "The original portal was completely unable to be used on mobile devices, violating the primary use case for emergency preparedness.",
            },
            {
              title: "ACCESSIBILITY FAILURES",
              text: "Poor color contrast and non-semantic structure made the tool inaccessible for users with visual impairments or screen readers.",
            },
          ].map((p) => (
            <div key={p.title} style={{ background: "#0f0f0f", border: "1px solid #272727", padding: "32px", borderRadius: 2, display: "flex", flexDirection: "column", gap: 20 }} className="sh-card-hover">
              <div style={{ height: 2, width: 40, background: "#ef4444" }} />
              <h3 style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, fontWeight: 700, color: "#FFF8F0", margin: 0, letterSpacing: "0.1em", lineHeight: 1.3 }}>{p.title}</h3>
              <p style={{ fontSize: 14, color: "#a1a1aa", lineHeight: 1.7, margin: 0 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── BUILT FROM ZERO STRIP ── */}
      <div id="built-from-zero" style={{ background: "#0f0f0f", padding: "80px 60px", borderBottom: "1px solid #272727", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 200, color: "#FFF8F0", lineHeight: 1.1, marginBottom: 24 }}>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>04 BUILT FROM ZERO</span>
              Built UX from zero in 3 work weeks with a volunteer team.
            </h2>
            <p style={{ color: "#d1d5db", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>Every framework, every process, every design decision was created in an environment constrained by free tools, limited collaboration time, shifting scope, and no existing UX foundation.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              {[
                { num: "0→1", label: "UX PROCESS BUILT" },
                { num: "3wk", label: "FULL REDESIGN TIMELINE" },
                { num: "4+", label: "CROSS FUNCTIONAL TEAMS ALIGNED" },
                { num: "100%", label: "UX METHODS INTRODUCED FRESH" },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 36, fontWeight: 200, color: "#FFF8F0", lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#d1d5db", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 300 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: "100%", minHeight: 400 }}>
            <img src="/images/safehome/map.png" alt="SafeHome Map" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }} />
          </div>
        </div>
      </div>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── MY ROLE ── */}
      {/* ── MY ROLE & IMPACT COMBINED ── */}
      <section id="role-impact" style={{ background: "#111", padding: "100px 60px", borderBottom: "1px solid #272727" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>05 ROLE & IMPACT</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 32, color: "#FFF8F0" }}>Leadership & <em style={{ color: "#FFF8F0", fontStyle: "italic" }}>Results</em></h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, alignItems: "start" }}>
            {/* LEFT: WHAT'S WORKING */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "#333", border: "1px solid #333" }}>
                <div style={{ gridColumn: "span 2", background: "rgba(74,222,128,0.05)", padding: "12px 20px", borderBottom: "1px solid rgba(74,222,128,0.2)" }}>
                  <h3 style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#4ade80", textTransform: "uppercase", letterSpacing: "0.25em", margin: 0 }}>What's Working</h3>
                </div>
                {[
                  { val: "+76.5%", title: "Active Growth", sub: "Page & User visit." },
                  { val: "6.5m", title: "Engagement", sub: "Avg session duration." },
                  { val: "+600%", title: "Visibility", sub: "0-1K usage." },
                  { val: "51%", title: "Initial Trust", sub: "Key section interaction." },
                ].map((w, i) => (
                  <div key={i} style={{ background: "#1a1a1a", padding: "20px 16px" }}>
                    <div style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 24, fontWeight: 200, color: "#4ade80", lineHeight: 1, marginBottom: 6 }}>{w.val}</div>
                    <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#FFF8F0", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>{w.title}</div>
                    <div style={{ fontSize: 12, color: "#a1a1aa", lineHeight: 1.3 }}>{w.sub}</div>
                  </div>
                ))}
              </div>
              {/* WORKING SUMMARY */}
              <div style={{ marginTop: 20 }}>
                <div style={{ background: "#1a1a1a", padding: "24px 28px", borderLeft: "3px solid #4ade80" }}>
                  <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.6, margin: 0 }}>Scaled reach 600% with 76% acquisition growth. Sustained 6.5-minute sessions with strong early conversion signals across key sections.</p>
                </div>
              </div>
            </div>

            {/* RIGHT: WHAT'S NOT WORKING */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "#333", border: "1px solid #333" }}>
                <div style={{ gridColumn: "span 2", background: "rgba(251,113,133,0.05)", padding: "12px 20px", borderBottom: "1px solid rgba(251,113,133,0.2)" }}>
                  <h3 style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#fb7185", textTransform: "uppercase", letterSpacing: "0.25em", margin: 0 }}>What's Not Working</h3>
                </div>
                {[
                  { val: "-85%", title: "Mobile Gap", sub: "Mobile usage dropoff." },
                  { val: "93.7%", title: "Abandonment", sub: "Last page clicks." },
                  { val: "64%", title: "Churn Rate", sub: "Unique user drop off, No stickiness." },
                  { val: "Low Vol.", title: "SEO Volume", sub: "Direction via Name search." },
                ].map((g, i) => (
                  <div key={i} style={{ background: "#1a1a1a", padding: "20px 16px" }}>
                    <div style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 24, fontWeight: 200, color: "#fb7185", lineHeight: 1, marginBottom: 6 }}>{g.val}</div>
                    <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#FFF8F0", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3, fontWeight: 700 }}>{g.title}</div>
                    <div style={{ fontSize: 12, color: "#a1a1aa", lineHeight: 1.3 }}>{g.sub}</div>
                  </div>
                ))}
              </div>
              {/* NOT WORKING SUMMARY */}
              <div style={{ marginTop: 20 }}>
                <div style={{ background: "#1a1a1a", padding: "24px 28px", borderLeft: "3px solid #fb7185" }}>
                  <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.6, margin: 0 }}>Severe mobile friction driving 85% usage dropoff. 93.7% abandonment at last page with 64% unique user churn and no stickiness despite visibility growth.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />
      <section id="findings" style={{ background: "#0c0c0c", padding: "100px 60px", borderBottom: "1px solid #272727" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", marginBottom: 60 }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>06 UX FINDINGS</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, color: "#FFF8F0" }}>UX <em style={{ fontStyle: "italic", color: "#FFF8F0" }}>Findings</em></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#111111", borderTop: "1px solid #272727", borderBottom: "1px solid #272727" }}>
        {[
          { num: "01", title: "Simplify to Act", text: <>Translate fragmented government earthquake data into <span style={{ color: "#FFF8F0", fontWeight: 300 }}>clear, prioritised action items</span> so residents know exactly what to do — not just what's at risk — for their specific home and neighbourhood.</> },
          { num: "02", title: "Mobile-Native Safety", text: <>Deliver tiered risk information in a <span style={{ color: "#FFF8F0", fontWeight: 300 }}>thumb-friendly, glanceable format</span> that works offline-capable on the phone residents already carry — no expert knowledge or desktop required.</> },
          { num: "03", title: "Stress-Ready Design", text: <>Design for the moment of crisis: guide renters, homeowners, elderly residents, and non-English speakers toward <span style={{ color: "#FFF8F0", fontWeight: 300 }}>immediate next steps</span> with accessible, low-cognitive-load interfaces.</> },
        ].map((o) => (
          <div key={o.num} className="sh-card-hover" style={{ padding: "44px 40px", borderRight: "1px solid #272727", transition: "background 0.2s", cursor: "default" }}>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFF8F0", marginBottom: 8, display: "block", fontWeight: 200 }}>FINDING {o.num}</span>
            <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 24, fontWeight: 300, marginBottom: 10, color: "#FFF8F0" }}>{o.title}</h3>
            <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7 }}>{o.text}</p>
          </div>
        ))}
        </div>
      </section>


      <div style={{ height: 1, background: "#272727" }} />

      {/* ── DESIGN DECISIONS ── */}
      <section id="intervention" style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 60px 100px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>07 UX INTERVENTION</span>
        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 32, color: "#FFF8F0" }}>UX INTERVENTION</h2>

        {/* ── CATEGORY HIERARCHY ── */}
        <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(28px,4vw,42px)", fontWeight: 300, color: "#FFF8F0", marginBottom: 48, lineHeight: 1.2 }}>
          <em style={{ color: "#FFF8F0", fontStyle: "italic" }}>Category Hierarchy</em>
        </h3>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#272727", marginBottom: 0 }}>
          {/* BEFORE */}
          <div style={{ background: "#0a0a0a", padding: "40px 36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", background: "rgba(251,113,133,0.12)", color: "#fb7185", padding: "6px 16px", borderRadius: 2, fontWeight: 700 }}>Before</span>
            </div>
            <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", marginBottom: 24 }}>
              <img src="/images/safehome/color-initiative.jpg" alt="Before — complicated govt data" style={{ width: "100%", height: "auto", display: "block" }} />
            </div>
            <p style={{ fontSize: 16, color: "#a1a1aa", lineHeight: 1.7, margin: 0 }}>
              These were the complicated line up of Govt data used in the website.
            </p>
          </div>

          {/* AFTER */}
          <div style={{ background: "#0f0f0f", padding: "40px 36px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase", background: "rgba(74,222,128,0.12)", color: "#4ade80", padding: "6px 16px", borderRadius: 2, fontWeight: 700 }}>After</span>
            </div>
            <p style={{ fontSize: 17, color: "#e5e7eb", lineHeight: 1.7, marginBottom: 32, flex: 0 }}>
              High / Medium / Low tiers with distinct color coding readable in seconds on mobile, WCAG compliant, and legally defensible.
            </p>

            {/* PROMINENT COLOR BADGES */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1, justifyContent: "center" }}>
              {[
                { bg: "#ef4444", text: "#FFF", label: "HIGH", desc: "Immediate risk — evacuate or shelter" },
                { bg: "#f59e0b", text: "#FFF", label: "MEDIUM", desc: "Elevated caution — review preparedness" },
                { bg: "#10b981", text: "#FFF", label: "LOW", desc: "Minimal risk — standard awareness" },
              ].map(({ bg, text, label, desc }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: 20 }}>
                  <div style={{ background: bg, color: text, padding: "14px 28px", fontFamily: "ui-monospace, monospace", fontSize: 16, fontWeight: 900, letterSpacing: "0.15em", textTransform: "uppercase", borderRadius: 4, minWidth: 140, textAlign: "center", boxShadow: `0 4px 20px ${bg}44` }}>{label}</div>
                  <span style={{ fontSize: 14, color: "#FFF", fontWeight: 700, lineHeight: 1.4 }}>{desc.replace(" — ", " ")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      <div style={{ height: 1, background: "#272727" }} />



      {/* ── 08 TRANSFORMATION ── */}
      <section id="transformation" style={{ background: "#000000", padding: "120px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)", backgroundSize: "40px 40px", zIndex: 0 }} />
        <div style={{ maxWidth: 1500, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>08 TRANSFORMATION</span>
            <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 60, color: "#FFF8F0" }}>From technical portal to <em style={{ color: "#FFF8F0", fontStyle: "italic" }}>human centred safety tool</em></h2>
          </div>

          {/* MOBILE INTERACTIONS IDEATION SECTION */}
          <div style={{ marginBottom: 120, maxWidth: 1200, margin: "0 auto 120px" }}>
            <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 32, fontWeight: 300, marginBottom: 40, color: "#FFF8F0" }}>Mobile Interactions Ideation</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 60, alignItems: "start" }}>
              <div style={{ position: "relative" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                  <div style={{ background: "#111", borderRadius: 12, padding: "12px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
                    <img src="/images/safehome/Gif 1.gif" alt="Mobile Interaction 1" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
                  </div>
                  <div style={{ background: "#111", borderRadius: 12, padding: "12px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
                    <img src="/images/safehome/Gif 2.gif" alt="Mobile Interaction 2" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
                  </div>
                </div>
                {/* HEATMAP */}
                <div style={{ marginTop: 60 }}>
                  <h4 style={{ fontFamily: "ui-monospace, monospace", fontSize: 18, color: "#FFF8F0", textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 32, fontWeight: 700, textAlign: "center" }}>HEAT MAP VISUALISATION ON INFORMATION HIERARCHY</h4>
                  
                  <div style={{ display: "grid", gridTemplateColumns: "140px 1fr 140px", gap: 40, alignItems: "center", maxWidth: 2000, margin: "0 auto" }}>
                    {/* Left Diagnostic */}
                    <div style={{ padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: 4, border: "1px solid rgba(255,140,59,0.3)", height: "fit-content" }}>
                      <h5 style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, color: "#FF8C3B", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10, fontWeight: 700 }}>Attention Focus</h5>
                      <p style={{ color: "#d1d5db", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                        The status tags like "At risk" effectively grab attention, validated by high gaze frequency in seismic risk zones.
                      </p>
                    </div>

                    {/* Image Center */}
                    <div style={{ background: "#111", borderRadius: 12, padding: "12px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
                      <img src="/images/safehome/heatmap-analysis.jpg" alt="Heatmap Analysis" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
                    </div>

                    {/* Right Diagnostic */}
                    <div style={{ padding: "16px", background: "rgba(255,255,255,0.02)", borderRadius: 4, border: "1px solid rgba(96,165,250,0.3)", height: "fit-content" }}>
                      <h5 style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 10, fontWeight: 700 }}>Clarity Score: 43</h5>
                      <p style={{ color: "#d1d5db", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                        Interface clutter results in a dispersed focal point, potentially delaying critical response times during emergencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ background: "rgba(110,191,223,0.05)", border: "1px solid rgba(110,191,223,0.2)", borderRadius: 12, padding: "32px" }}>
                  <h4 style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "#FFF8F0", textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 24, fontWeight: 700 }}>ITERATION</h4>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 24 }}>
                    <li style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.6 }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#FFF8F0", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Dropdown collapsible legend</div>
                      Initial approach: a collapsible panel to toggle hazard layers. Reduced map clutter but buried critical context behind an extra tap.
                    </li>
                    <li style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.6 }}>
                      <div style={{ fontSize: 18, fontWeight: 800, color: "#FFF8F0", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>Pull-up bar</div>
                      Final direction: a swipeable bottom sheet that keeps the map visible while surfacing risk details and action items in a thumb-friendly zone.
                    </li>
                  </ul>
                </div>
                <div className="sh-sticky" style={{ background: "#fef08a", padding: "24px", width: "100%", transform: "rotate(1deg)", boxShadow: "10px 10px 30px rgba(0,0,0,0.4)", zIndex: 20, position: "relative" }}>
                  <div style={{ width: 12, height: 12, background: "#FFF8F0", borderRadius: "50%", position: "absolute", top: -6, left: "20px" }} />
                  <p style={{ color: "#1a1a1a", fontSize: 14, fontWeight: 700, lineHeight: 1.5, margin: 0 }}>
                    Quick-access alerts and interactive hazard awareness designed for mobile agility during stressful situations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WEB SECTION */}
          <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 60px" }}>
            <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 32, fontWeight: 300, marginBottom: 60, color: "#FFF8F0" }}>Web Experience</h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
              {/* Iteration 1 */}
              <div>
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px 24px", borderRadius: 4, borderLeft: "4px solid #60a5fa", width: "fit-content", maxWidth: 500, marginBottom: 24 }}>
                  <p style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.6, margin: 0 }}>
                    <strong style={{ color: "#FFF8F0", display: "block", marginBottom: 6, textTransform: "uppercase", fontSize: 11, letterSpacing: "0.15em" }}>Iteration 01: Map-Centric Foundation</strong>
                    Initial focus on comprehensive map visualization with basic hazard layer toggles.
                  </p>
                </div>
                <div style={{ background: "#111", borderRadius: 12, padding: "20px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 80px rgba(0,0,0,0.5)" }}>
                  <img src="/images/safehome/Image1.jpg" alt="Web Iteration 1" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
                </div>
              </div>

              {/* Iteration 2 */}
              <div>
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "20px 24px", borderRadius: 4, borderLeft: "4px solid #f472b6", width: "fit-content", maxWidth: 500, marginBottom: 24 }}>
                  <p style={{ fontSize: 14, color: "#d1d5db", lineHeight: 1.6, margin: 0 }}>
                    <strong style={{ color: "#FFF8F0", display: "block", marginBottom: 6, textTransform: "uppercase", fontSize: 11, letterSpacing: "0.15em" }}>Iteration 02: Resource Integration</strong>
                    Detailed categories displace with action items and other resources on the right.
                  </p>
                </div>
                <div style={{ background: "#111", borderRadius: 12, padding: "20px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 40px 80px rgba(0,0,0,0.4)", width: "100%" }}>
                  <img src="/images/safehome/web-side-2.jpg" alt="Web Iteration 2" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
                </div>
              </div>
            </div>
          </div>

          {/* FUTURE HIERARCHY & DESIGN FLOW */}
          <section id="future-roadmap" style={{ padding: "100px 0", background: "transparent", overflow: "hidden", color: "#E8EDE9", maxWidth: 1200, margin: "0 auto" }}>
            <style dangerouslySetInnerHTML={{
              __html: `
              .flow-container {
                --bg: transparent;
                --surface: #141614;
                --pre:    #3B8BFF;
                --during: #FF8C3B;
                --post:   #FFF8F0;
                --entry:  #C8B8FF;
                --text:   #E8EDE9;
                --muted:  rgba(232,237,233,0.38);
                --border: rgba(255,255,255,0.07);
              }
              .flow-container .header {
                margin-bottom: 2.5rem;
                display:flex; align-items:center; justify-content:space-between;
                gap: 2rem;
              }
              .flow-container .header-label {
                font-size: 12px; letter-spacing:.3em; text-transform:uppercase;
                color:#FFFFFF; margin-bottom:.5rem; font-weight:400; font-family: ui-monospace, monospace;
              }
              .flow-container .header h2 {
                font-family: var(--font-outfit), sans-serif;
                font-size:clamp(1rem,1.8vw,1.3rem);
                font-weight:700; letter-spacing:.02em; color:#FFFFFF; margin: 0;
              }
              .flow-container .legend {
                display:flex; gap:1.6rem; flex-wrap:wrap; align-items:center;
              }
              .flow-container .legend-item {
                display:flex; align-items:center; gap:.6rem;
                font-size:.6rem; letter-spacing:.15em; text-transform:uppercase;
                color:#FFFFFF; font-weight:400; font-family: ui-monospace, monospace;
              }
              .flow-container .legend-circle {
                width:12px; height:12px; border-radius:50%; flex-shrink:0;
              }
              .flow-container .diagram-scroll {
                overflow: visible;
                padding-bottom: 1rem;
              }
              .flow-container .flow-svg {
                display:block;
                width: 100%;
                height: auto;
              }
            `}} />
            <div className="flow-container" style={{ width: "100%" }}>

              <div className="header">
                <div>
                  <div className="header-label">09 Future Hierarchy & Design Flow</div>
                  <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 0, color: "#FFF8F0" }}>Pre event, During event, After Event</h2>
                </div>
                <div className="legend">
                  <div className="legend-item">
                    <div className="legend-circle" style={{ background: "var(--entry)" }}></div>
                    <span>Entry</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-circle" style={{ background: "var(--pre)" }}></div>
                    <span>Pre-Event</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-circle" style={{ background: "var(--during)" }}></div>
                    <span>During Event</span>
                  </div>
                  <div className="legend-item">
                    <div className="legend-circle" style={{ background: "var(--post)" }}></div>
                    <span>After Event</span>
                  </div>
                </div>
              </div>

              <div style={{ background: "rgba(255,255,255,0.02)", borderRadius: 12, border: "1px solid rgba(255,255,255,0.05)", padding: "20px" }}>
                <svg className="flow-svg" viewBox="0 0 1600 560" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", minWidth: "auto" }}>
                  <defs>
                    <marker id="arr-entry" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.45)" />
                    </marker>
                    <marker id="arr-pre" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="rgba(59,139,255,0.6)" />
                    </marker>
                    <marker id="arr-during" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.5)" />
                    </marker>
                    <marker id="arr-post" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="rgba(59,204,122,0.6)" />
                    </marker>
                    <marker id="arr-branch" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                      <path d="M0,0 L0,6 L8,3 z" fill="rgba(255,255,255,0.2)" />
                    </marker>
                  </defs>

                  <rect x="700" y="20" width="880" height="155" rx="6" fill="rgba(59,139,255,0.18)" stroke="rgba(59,139,255,0.35)" strokeWidth="1" />
                  <rect x="700" y="195" width="880" height="155" rx="6" fill="rgba(255,140,59,0.18)" stroke="rgba(255,140,59,0.35)" strokeWidth="1" />
                  <rect x="700" y="370" width="880" height="155" rx="6" fill="rgba(59,204,122,0.18)" stroke="rgba(59,204,122,0.35)" strokeWidth="1" />

                  <circle cx="749" cy="40" r="5" fill="#3B8BFF" aria-hidden="true" />
                  <text x="760" y="45" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="700" fill="#FFFFFF" letterSpacing="2">PRE EVENT</text>

                  <circle cx="749" cy="215" r="5" fill="#FF8C3B" aria-hidden="true" />
                  <text x="760" y="220" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="700" fill="#FFFFFF" letterSpacing="2">DURING EVENT</text>

                  <circle cx="749" cy="390" r="5" fill="#FFF8F0" aria-hidden="true" />
                  <text x="760" y="395" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="700" fill="#FFFFFF" letterSpacing="2">AFTER EVENT</text>

                  <circle cx="36" cy="248" r="5" fill="#FFFFFF" aria-hidden="true" />
                  <text x="47" y="253" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="700" fill="#FFFFFF" letterSpacing="2">ENTRY</text>

                  <text x="28" y="278" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="400" fill="#FFFFFF">Enter</text>
                  <text x="28" y="295" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="400" fill="#FFFFFF">SafeHome</text>

                  <rect x="140" y="250" width="220" height="60" rx="30" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeDasharray="5,3" />
                  <text x="250" y="275" fontFamily="ui-monospace, monospace" fontSize="12" fill="#FFFFFF" textAnchor="middle" fontStyle="italic">Input address &amp;</text>
                  <text x="250" y="292" fontFamily="ui-monospace, monospace" fontSize="12" fill="#FFFFFF" textAnchor="middle" fontStyle="italic">Map interaction</text>

                  <line x1="360" y1="276" x2="418" y2="276" stroke="rgba(110,191,223,0.3)" strokeWidth="1.5" markerEnd="url(#arr-entry)" />

                  <rect x="420" y="238" width="180" height="76" rx="6" fill="#FFFFFF" stroke="rgba(255,255,255,0.4)" strokeWidth="2" />
                  <text x="510" y="266" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Personalised</text>
                  <text x="510" y="282" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Resource List</text>
                  <text x="510" y="302" fontFamily="ui-monospace, monospace" fontSize="12" fill="#000000" textAnchor="middle" fontWeight="700">Action Items</text>

                  <line x1="600" y1="276" x2="660" y2="276" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" markerEnd="url(#arr-branch)" />

                  <line x1="660" y1="97" x2="660" y2="447" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

                  <line x1="660" y1="97" x2="700" y2="97" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" markerEnd="url(#arr-pre)" />
                  <line x1="660" y1="272" x2="700" y2="272" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" markerEnd="url(#arr-during)" />
                  <line x1="660" y1="447" x2="700" y2="447" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" markerEnd="url(#arr-post)" />

                  <rect x="730" y="55" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="820" y="82" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">"Go Bag"</text>
                  <text x="820" y="97" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Checklist</text>
                  <text x="820" y="118" fontFamily="ui-monospace, monospace" fontSize="12" fill="#000000" textAnchor="middle" fontWeight="700">Design Opp</text>

                  <line x1="910" y1="97" x2="930" y2="97" stroke="rgba(59,139,255,0.45)" strokeWidth="1.5" markerEnd="url(#arr-pre)" />

                  <rect x="932" y="55" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="1022" y="89" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">State</text>
                  <text x="1022" y="105" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Resources</text>

                  <line x1="1112" y1="97" x2="1132" y2="97" stroke="rgba(59,139,255,0.45)" strokeWidth="1.5" markerEnd="url(#arr-pre)" />

                  <rect x="1134" y="55" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="1224" y="89" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Insurance</text>
                  <text x="1224" y="105" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Companies</text>

                  <line x1="1314" y1="97" x2="1334" y2="97" stroke="rgba(59,139,255,0.45)" strokeWidth="1.5" markerEnd="url(#arr-pre)" />

                  <rect x="1336" y="55" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(59,139,255,0.3)" strokeWidth="1.5" />
                  <text x="1426" y="89" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Elderly /</text>
                  <text x="1426" y="105" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Disabled</text>
                  <text x="1426" y="124" fontFamily="ui-monospace, monospace" fontSize="12" fill="#000000" textAnchor="middle" fontWeight="700">Alert signup</text>

                  <rect x="730" y="230" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="820" y="262" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Offline</text>
                  <text x="820" y="277" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Maps + Routes</text>
                  <text x="820" y="300" fontFamily="ui-monospace, monospace" fontSize="12" fill="#000000" textAnchor="middle" fontWeight="700">Critical Feature</text>

                  <line x1="910" y1="272" x2="930" y2="272" stroke="rgba(255,140,59,0.5)" strokeWidth="1.5" markerEnd="url(#arr-during)" />

                  <rect x="932" y="230" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="1022" y="262" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Live Updates</text>
                  <text x="1022" y="278" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Tsunami Alert</text>

                  <line x1="1112" y1="272" x2="1132" y2="272" stroke="rgba(255,140,59,0.5)" strokeWidth="1.5" markerEnd="url(#arr-during)" />

                  <rect x="1134" y="230" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="1224" y="262" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Community</text>
                  <text x="1224" y="278" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Volunteers</text>

                  <line x1="1314" y1="272" x2="1334" y2="272" stroke="rgba(255,140,59,0.5)" strokeWidth="1.5" markerEnd="url(#arr-during)" />

                  <rect x="1336" y="230" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,140,59,0.35)" strokeWidth="1.5" />
                  <text x="1426" y="262" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Push</text>
                  <text x="1426" y="278" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Alerts</text>
                  <text x="1426" y="300" fontFamily="ui-monospace, monospace" fontSize="12" fill="#000000" textAnchor="middle" fontWeight="700">Future Phase</text>

                  <rect x="730" y="405" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="820" y="439" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Shelter</text>
                  <text x="820" y="455" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Locations</text>

                  <line x1="910" y1="447" x2="930" y2="447" stroke="rgba(59,204,122,0.5)" strokeWidth="1.5" markerEnd="url(#arr-post)" />

                  <rect x="932" y="405" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="1022" y="439" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Hospitals &amp;</text>
                  <text x="1022" y="455" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Emergency</text>

                  <line x1="1112" y1="447" x2="1132" y2="447" stroke="rgba(59,204,122,0.5)" strokeWidth="1.5" markerEnd="url(#arr-post)" />

                  <rect x="1134" y="405" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                  <text x="1224" y="439" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Insurance</text>
                  <text x="1224" y="455" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Estimator</text>
                  <text x="1224" y="474" fontFamily="ui-monospace, monospace" fontSize="12" fill="#000000" textAnchor="middle" fontWeight="700">Design Opp</text>

                  <line x1="1314" y1="447" x2="1334" y2="447" stroke="rgba(59,204,122,0.5)" strokeWidth="1.5" markerEnd="url(#arr-post)" />

                  <rect x="1336" y="405" width="180" height="84" rx="5" fill="#FFFFFF" stroke="rgba(59,204,122,0.35)" strokeWidth="1.5" />
                  <text x="1426" y="439" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Elderly &amp;</text>
                  <text x="1426" y="455" fontFamily="var(--font-outfit), sans-serif" fontSize="13" fontWeight="700" fill="#000" textAnchor="middle">Disabled</text>
                  <text x="1426" y="474" fontFamily="ui-monospace, monospace" fontSize="12" fill="#000000" textAnchor="middle" fontWeight="700">Accessibility</text>
                </svg>
              </div>
            </div>
          </section>

          {/* REDESIGN SECTION */}
          <div style={{ maxWidth: 1400, margin: "100px auto 0", padding: "0 60px" }}>
            <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 32, fontWeight: 300, marginBottom: 60, color: "#FFF8F0" }}>Redesign</h3>
            
            <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
              <div style={{ background: "#111", borderRadius: 16, padding: "24px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}>
                <img src="/images/safehome/UX issues 1.jpg" alt="Redesign Study 1" style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }} />
              </div>
              <div style={{ background: "#111", borderRadius: 16, padding: "24px", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 40px 100px rgba(0,0,0,0.6)" }}>
                <img src="/images/safehome/UX issues 2.jpg" alt="Redesign Study 2" style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── CONSTRAINTS ── */}
      <section id="constraints" style={{ background: "#0f0f0f", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>10 CONSTRAINTS</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 20, color: "#FFF8F0" }}>The harder parts and <em style={{ color: "#FFF8F0", fontStyle: "italic" }}>what I did with them</em></h2>
          <p style={{ fontSize: 19, lineHeight: 1.75, color: "#d1d5db", maxWidth: 700, marginBottom: 52 }}>Good design under ideal conditions is not remarkable. What matters is what you build under real pressure.</p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 28 }}>
            {[
              { bg: "#fef08a", r: "-1.5deg", title: "Volunteer Team & Free Tools", text: "Limited hours, no paid tooling, constant need to be resourceful.", resp: "Built lightweight processes that earned their place" },
              { bg: "#bae6fd", r: "2deg", title: "Limited Collaboration Time", text: "The team was rarely available at the same time. Async was the only option.", resp: "Designed async first workshop formats & documentation" },
              { bg: "#bbf7d0", r: "-2.5deg", title: "Government Data Compliance", text: "Every visualisation & content decision carried institutional accountability.", resp: "Embedded data integrity into design reviews from day one" },
              { bg: "#fecdd3", r: "1deg", title: "Scope Change Without Validation", text: "Features proposed & expected to ship without research or testing.", resp: "Introduced validation gates; made the cost of skipping visible" },
              { bg: "#fef08a", r: "-2deg", title: "Navigating Pushback", text: "Resistance to UX process, research, and accessibility as a new lead.", resp: "Led with evidence; built allies; made impact visible via metrics" },
              { bg: "#bae6fd", r: "3deg", title: "Designing for Diverse Populations", text: "Elderly residents, non-English speakers, low-tech-literacy users underserved by default.", resp: "Inclusive design as a core constraint, not an afterthought" },
            ].map((s, i) => (
              <div key={i} className="sh-sticky" style={{ background: s.bg, padding: "28px 26px 24px", position: "relative", transform: `rotate(${s.r})`, boxShadow: "3px 6px 20px rgba(0,0,0,0.35)", transition: "transform 0.2s, box-shadow 0.2s" }}>
                <div style={{ width: 14, height: 14, background: "#FFF8F0", borderRadius: "50%", position: "absolute", top: -7, left: "50%", transform: "translateX(-50%)", boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }} />
                <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#272727", lineHeight: 1.65, fontWeight: 700 }}>{s.text}</p>
                <p style={{ marginTop: 12, fontSize: 13, color: "#444", fontStyle: "italic", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10, fontWeight: 300 }}>{s.resp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── VISION ── */}
      <section id="vision" style={{ padding: "100px 60px", background: "#000000" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>11 THE VISION</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 40, color: "#FFF8F0" }}>MVP is the foundation. <em style={{ color: "#FFF8F0", fontStyle: "italic" }}>Here's what's next.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: "#272727" }}>
            {[
              { phase: "Phase 2", color: "#FFF8F0", title: "Dedicated Mobile App", text: "An ultra simplified native app designed for high stress scenarios where every second and every tap matters most." },
              { phase: "Phase 2", color: "#FFF8F0", title: "Personalised Preparedness", text: "Checklists and action plans tied to a user property type, rental status, and risk zone not generic advice." },
              { phase: "Phase 3", color: "#FFF8F0", title: "Real-Time Alerts", text: "Push notifications and in app emergency guidance triggered by live seismic activity moving SafeHome from preparedness to active response." },
              { phase: "Phase 3", color: "#FFF8F0", title: "Community Networks", text: "Neighbourhood level resource sharing and community preparedness maps turning individual readiness into collective resilience." },
            ].map(v => (
              <div key={v.title} className="sh-vision-card" style={{ background: "#111111", padding: "36px 28px", borderTop: `3px solid ${v.color}`, transition: "all 0.2s" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db", marginBottom: 12, display: "block" }}>{v.phase}</span>
                <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 18, fontWeight: 300, marginBottom: 10, lineHeight: 1.2 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.7 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── REFLECTION ── */}
      <section id="reflection" style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>12 REFLECTION</span>
        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 52, color: "#FFF8F0" }}>What I learned leading through <em style={{ color: "#FFF8F0", fontStyle: "italic" }}>ambiguity</em></h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#272727" }}>
          {/* ON LEADERSHIP */}
          <div style={{ background: "linear-gradient(135deg, #0f0f0f 0%, #141414 100%)", padding: "56px 44px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 16, left: 24, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 140, fontWeight: 700, color: "rgba(255,248,240,0.04)", lineHeight: 1, pointerEvents: "none" }}>"</div>
            <h3 style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFF8F0", marginBottom: 28, fontWeight: 400, position: "relative" }}>On Leadership</h3>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 26, fontWeight: 400, color: "#FFF8F0", lineHeight: 1.35, margin: 0, position: "relative" }}>The most impactful thing I did was not designing a screen. It was creating clarity where there was none.</p>
          </div>

          {/* ON CONSTRAINTS AS CRAFT */}
          <div style={{ background: "linear-gradient(135deg, #111 0%, #161616 100%)", padding: "56px 44px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 16, left: 24, fontFamily: "var(--font-playfair), Georgia, serif", fontSize: 140, fontWeight: 700, color: "rgba(255,248,240,0.04)", lineHeight: 1, pointerEvents: "none" }}>"</div>
            <h3 style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#FFF8F0", marginBottom: 28, fontWeight: 400, position: "relative" }}>On Constraints as Craft</h3>
            <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 26, fontWeight: 400, color: "#FFF8F0", lineHeight: 1.35, margin: 0, position: "relative" }}>Pushing back on scope is not friction. It is care.</p>
          </div>
        </div>

        <div style={{ borderLeft: "4px solid #FFF8F0", padding: "24px 36px", marginTop: 56, background: "rgba(110,191,223,0.08)" }}>
          <p style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 20, fontWeight: 300, fontStyle: "italic", lineHeight: 1.5, margin: 0, background: "linear-gradient(135deg, #60a5fa, #34d399, #a78bfa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>"Volunteers built something that helps real people understand real danger. With intention, evidence, and care."</p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <div style={{ background: "#003A8C", padding: "80px 60px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 200, fontStyle: "italic", color: "#FFF8F0", lineHeight: 1.1, maxWidth: 800, margin: "0 auto 16px" }}>
          UX that serves the public by design.
        </h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", fontFamily: "ui-monospace, monospace", textTransform: "uppercase" }}>
          SafeHome · Civic Tech · Nonprofit · San Francisco · 2025
        </p>
      </div>
    </main>
  );
}
