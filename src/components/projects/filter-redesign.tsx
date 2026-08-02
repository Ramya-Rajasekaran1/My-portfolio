"use client";
import React from "react";
import { ArrowLeft } from "lucide-react";

export function FilterRedesignProject() {
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
    { id: "pain-points", label: "Pain Points" },
    { id: "audit", label: "Comparative Audit" },
    { id: "iterations", label: "Design Iterations" },
    { id: "qualitative", label: "Qualitative Analysis" },
    { id: "quantitative", label: "Quantitative Data" },
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
      <div style={{ position: "fixed", left: 40, top: "50%", transform: "translateY(-50%)", zIndex: 5000, display: "flex", flexDirection: "column", gap: 14, opacity: showIndex ? 1 : 0, pointerEvents: showIndex ? "auto" : "none", transition: "all 0.4s ease" }} className="hidden lg:flex pointer-events-auto">
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
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)", 
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
              background: "rgba(0,0,0,0.6)", 
              padding: "4px 10px", 
              borderRadius: 4, 
              backdropFilter: "blur(4px)" 
            }} className="sh-nav-label">{s.label}</span>
          </button>
        ))}
      </div>
      <style jsx global>{`
        .sh-nav-label { pointer-events: none; }
        a:hover .sh-nav-label { opacity: 1 !important; }
        a:active { background: #f472b6 !important; }
      `}</style>

      <style jsx global>{`
                .sh-card-hover:hover { background: rgba(110,191,223,0.12) !important; }
                .sh-sticky:hover { transform: rotate(0deg) scale(1.03) !important; box-shadow: 6px 12px 32px rgba(0,0,0,0.6) !important; z-index: 10; }
            `}</style>

      {/* ── NAV ── */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 5000, background: "rgba(10,10,10,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.08)", pointerEvents: "auto" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <a href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/work/`} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "'Inter', sans-serif", color: "#d1d5db", textDecoration: "none", pointerEvents: "auto" }}>
            <ArrowLeft size={16} /> Back to Work
          </a>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db" }}>
            Unified Filters · UX Case Study · 2022
          </span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh", paddingTop: 60 }}>
        <div style={{ background: "#0f0f0f", padding: "80px 60px", display: "flex", flexDirection: "column", justifyItems: "center" }}>
          <div>
            <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: "#d1d5db", marginBottom: 28 }}>B2B SaaS Enterprise Platform</div>
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
              Unified<span style={{ fontStyle: "italic", fontWeight: 800 }}>Filters</span>
            </h1>
            <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(24px,3vw,36px)", fontWeight: 700, lineHeight: 1.2, color: "#FFF8F0", marginBottom: 12, maxWidth: 460 }}>
              Siloed UX To One Consolidated Filters For All Products.
            </h2>
            <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7, maxWidth: 460, marginBottom: 48 }}>
              I was accountable for this project and this was to improve Filtering experience for a suite of products. Operations associated. This feature had a lot of pain points and the most used feature. Especially for B2B Saas, the Filtering experience can be challenging to solve with the Increasing Number of Filters...
              <br /><br />
              <strong style={{ color: "#FFF8F0" }}>This effort focused on creating an uncomplicated flow and straightforward access for users.</strong>
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Role", "UX Designer"],
                ["Company", "FourKites"],
                ["Timeline", "2022 May - 2022 July"],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#FFF8F0", minWidth: 80, fontWeight: 300 }}>{label}</span>
                  <span style={{ fontSize: 14, color: "#FFF8F0", fontWeight: 500 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ position: "relative", overflow: "hidden", borderLeft: "1px solid rgba(255,255,255,0.1)", background: "#111", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* IMAGE PLACEHOLDER */}
          <div style={{ color: "#666", fontFamily: "ui-monospace, monospace", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center" }}>
            [Hero Dashboard Screenshot]<br/>
            <span style={{ fontSize: 12 }}>(Showing the unified dashboard interface)</span>
          </div>
          <div style={{ position: "absolute", top: 40, right: -20, fontFamily: "var(--font-outfit), sans-serif", fontSize: 160, fontWeight: 200, color: "rgba(255,255,255,0.05)", lineHeight: 0.9, whiteSpace: "pre", pointerEvents: "none" }}>{"UX\nREVAMP"}</div>
        </div>
      </section>

      {/* ── PAIN POINTS ── */}
      <section id="pain-points" style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 60px 100px", paddingTop: "120px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20 }}>01 UX PAIN POINTS</span>
        
        <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 200, lineHeight: 1.1, marginBottom: 10, color: "#FFF8F0" }}>Pain Points with the feature</h3>
        <p style={{ fontSize: 20, lineHeight: 1.7, color: "#FFF8F0", maxWidth: 800, marginBottom: 60 }}>
          Identified different filtering experience for different products in the same platform. These are some of the User pain points and insights from Customer call.
        </p>

        <div id="pain-points-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { title: "INTEROPERABILITY GAP", text: "Gap in interoperability and how filters function across different product suites." },
            { title: "OVERWHELMING OPTIONS", text: "Too many options to Filter down from (the obvious one)." },
            { title: "DISCONNECTED UX", text: "Disconnect between dynamic filters in the sidebar vs the All Filter pane that opens up." },
            { title: "FOCAL POINT ISSUES", text: "User’s Focal point is on Narrowing down and working with information once filters are set; need to close the side pane." },
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

      {/* ── COMPARATIVE AUDIT ── */}
      <section id="audit" style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>02 COMPARATIVE AUDIT</span>
        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 40, color: "#FFF8F0" }}>Legacy vs <em style={{ fontStyle: "italic", color: "#FFF8F0", fontWeight: 400 }}>Redesign</em></h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "2px", background: "#222" }}>
          {[
            { title: "TRAC : LEGACY", subtext: "All consolidated on the left. All elements arranged in the Left pane." },
            { title: "TRAC : BETA", subtext: "Redesigned version with Broad categorisation. Few Filters on the side panel and the All Filters in the modal overlay." },
            { title: "Ocean", subtext: "All the Filters arranged in the Full screen." },
            { title: "OIH", subtext: "Latest Order visibility filters. Categorisation and Grouping Filters." },
          ].map(c => (
            <div key={c.title} className="sh-card-hover" style={{ background: "#000000", padding: "32px", transition: "all 0.2s", display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: 20, fontWeight: 300, color: "#FFF8F0", margin: 0 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0 }}>{c.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── DESIGN ITERATIONS ── */}
      <section id="iterations" style={{ background: "#0f0f0f", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>03 DESIGN ITERATIONS</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 32, color: "#FFF8F0" }}>Designs Iterations for <em style={{ color: "#FFF8F0", fontStyle: "italic" }}>Continuous Improvement</em></h2>
          <p style={{ fontSize: 20, lineHeight: 1.7, color: "#FFF8F0", maxWidth: 800, marginBottom: 60 }}>
            Focused on discrete Categorisation and consolidating all elements on the Side pane for a connected experience with interoperability.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 60 }}>
             {[
                "Ability to Configure and prioritise Filters among all elements.",
                "Combined Saving and Sharing Filters based on user flow.",
                "Prominent viewing of Applied Filters with Collapse functionality.",
                "Ability to Collapse once setup is complete."
             ].map((feature, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    background: "#1a1a1a", 
                    padding: "24px 28px", 
                    border: "1px solid rgba(247, 156, 186, 0.2)" 
                  }}
                >
                    <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.6, margin: 0 }}>{feature}</p>
                </div>
             ))}
          </div>

          <div style={{ position: "relative", width: "100%", height: 600, background: "#111", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}>
            {/* IMAGE PLACEHOLDER */}
            <div style={{ color: "#666", fontFamily: "ui-monospace, monospace", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center" }}>
              [Design Iteration Collage]<br/>
              <span style={{ fontSize: 12 }}>(Showing various UI explorations)</span>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── QUALITATIVE ANALYSIS ── */}
      <section id="qualitative" style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>04 OTHER ASPECTS</span>
        <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 200, lineHeight: 1.05, marginBottom: 40, color: "#FFF8F0" }}>Forward. <em style={{ fontStyle: "italic", color: "#FFF8F0", fontWeight: 400 }}>Qualitative Analysis</em></h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginBottom: 60 }}>
          {["BEST PRACTICES", "CONS OF EXISTING", "MVP VERSION", "WHAT'S WORKING", "VISION"].map(cat => (
             <div key={cat} style={{ background: "rgba(255,255,255,0.05)", padding: "16px", borderRadius: 4, textAlign: "center", fontSize: 11, fontFamily: "ui-monospace, monospace", letterSpacing: "0.1em", color: "#d1d5db" }}>
                 {cat}
             </div>
          ))}
        </div>

        <div style={{ position: "relative", width: "100%", height: 500, background: "#111", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }}>
          {/* IMAGE PLACEHOLDER */}
          <div style={{ color: "#666", fontFamily: "ui-monospace, monospace", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center" }}>
            [Sticky Notes Board]<br/>
            <span style={{ fontSize: 12 }}>(Collage of research notes and competitive analysis)</span>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── QUANTITATIVE DATA ── */}
      <section id="quantitative" style={{ background: "#0c0c0c", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#FFF8F0", display: "block", marginBottom: 20, fontWeight: 200 }}>05 METRICS</span>
          <h2 style={{ fontFamily: "var(--font-outfit), sans-serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 200, lineHeight: 1.1, marginBottom: 32, color: "#FFF8F0" }}>Interpreting the <em style={{ color: "#FFF8F0", fontStyle: "italic" }}>usage data</em></h2>
          <p style={{ fontSize: 20, lineHeight: 1.7, color: "#FFF8F0", maxWidth: 800, marginBottom: 40 }}>
            Current Usage Pattern Breakdown with Quadrants (Data from Pendo and Sisense). Benchmarking of Past Data vs. Existing patterns.
          </p>

          <div style={{ display: "flex", gap: 20, marginBottom: 40 }}>
             <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "ui-monospace, monospace", textTransform: "uppercase", color: "#a1a1aa" }}>
                 <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} /> Filter control
             </span>
             <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "ui-monospace, monospace", textTransform: "uppercase", color: "#a1a1aa" }}>
                 <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} /> Filter Type
             </span>
             <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontFamily: "ui-monospace, monospace", textTransform: "uppercase", color: "#a1a1aa" }}>
                 <span style={{ width: 12, height: 12, borderRadius: "50%", background: "#a855f7" }} /> Sort options
             </span>
          </div>

          <div style={{ background: "rgba(110,191,223,0.05)", border: "1px solid rgba(110,191,223,0.2)", borderRadius: 12, padding: "32px", marginBottom: 60 }}>
              <h4 style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "#FFF8F0", textTransform: "uppercase", letterSpacing: "0.25em", marginBottom: 16, fontWeight: 700 }}>QUADRANT ANALYSIS</h4>
              <p style={{ fontSize: 16, color: "#d1d5db", lineHeight: 1.6, margin: 0 }}>
                  Primary sector includes the 2nd Quadrant (High Usage + High Users).
              </p>
          </div>

          <div style={{ position: "relative", width: "100%", height: 600, background: "#111", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}>
            {/* IMAGE PLACEHOLDER */}
            <div style={{ color: "#666", fontFamily: "ui-monospace, monospace", textTransform: "uppercase", letterSpacing: "0.2em", textAlign: "center" }}>
              [Usage Metrics Quadrant Chart]<br/>
              <span style={{ fontSize: 12 }}>(Sisense / Pendo Data)</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
