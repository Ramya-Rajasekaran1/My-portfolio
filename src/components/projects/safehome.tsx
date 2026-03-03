"use client";
import React from "react";
import { type Project } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";


function IAFlowDiagram({ seq }: { seq: string }) {
  const [activePhase, setActivePhase] = React.useState<string>('pre');

  const renderCards = () => {
    switch (activePhase) {
      case 'pre': return (
        <>
          <div className="feature-card">
            <div className="card-icon">🎒</div>
            <div className="card-title">Go Bag Checklist</div>
            <div className="card-desc">Prioritised checklist personalised by household size</div>
            <span className="card-tag tag-design">Design Opp</span>
          </div>
          <div className="feature-card">
            <div className="card-icon">🏛</div>
            <div className="card-title">State Resources</div>
            <div className="card-desc">Plain language links to SF government preparedness programs</div>
          </div>
          <div className="feature-card">
            <div className="card-icon">🗺</div>
            <div className="card-title">Map Risk Scores</div>
            <div className="card-desc">High / Medium / Low tiers with location specific risk</div>
            <span className="card-tag tag-color">Color Initiative</span>
          </div>
          <div className="feature-card">
            <div className="card-icon">🏗</div>
            <div className="card-title">Building Comparison</div>
            <div className="card-desc">Retrofitting safety scores — compare buildings side by side</div>
            <span className="card-tag tag-design">Design Opp</span>
          </div>
          <div className="feature-card">
            <div className="card-icon">🛡</div>
            <div className="card-title">Insurance Info</div>
            <div className="card-desc">Earthquake &amp; disaster insurance companies to consider</div>
          </div>
          <div className="feature-card">
            <div className="card-icon">♿</div>
            <div className="card-title">Elderly &amp; Disabled</div>
            <div className="card-desc">Dedicated support resources and accessible guidance</div>
            <span className="card-tag tag-access">Accessibility Opp</span>
          </div>
          <div className="feature-card">
            <div className="card-icon">💬</div>
            <div className="card-title">Community Forums</div>
            <div className="card-desc">Neighbourhood discussions about local preparedness</div>
          </div>
        </>
      );
      case 'during': return (
        <>
          <div className="feature-card">
            <div className="card-icon">🗺</div>
            <div className="card-title">Offline Maps</div>
            <div className="card-desc">Pre-cached escape routes &amp; shelter locations — no signal needed</div>
            <span className="card-tag tag-critical">Critical Feature</span>
          </div>
          <div className="feature-card">
            <div className="card-icon">📡</div>
            <div className="card-title">Live Updates</div>
            <div className="card-desc">Magnitude readings, aftershock alerts, and real-time warnings</div>
          </div>
          <div className="feature-card">
            <div className="card-icon">🤝</div>
            <div className="card-title">Community Volunteers</div>
            <div className="card-desc">Locate volunteers and neighbourhood responders nearby</div>
          </div>
          <div className="feature-card">
            <div className="card-icon">🔔</div>
            <div className="card-title">Push Alerts</div>
            <div className="card-desc">Immediate app-level notifications on seismic activity</div>
            <span className="card-tag tag-future">Future Phase</span>
          </div>
        </>
      );
      case 'post': return (
        <>
          <div className="feature-card">
            <div className="card-icon">🏠</div>
            <div className="card-title">Shelter Locations</div>
            <div className="card-desc">Nearest open shelters mapped with accessibility info</div>
          </div>
          <div className="feature-card">
            <div className="card-icon">🏥</div>
            <div className="card-title">Hospitals &amp; Emergency</div>
            <div className="card-desc">Closest hospitals and emergency contacts updated post-event</div>
          </div>
          <div className="feature-card">
            <div className="card-icon">💰</div>
            <div className="card-title">Insurance Estimator</div>
            <div className="card-desc">Estimate property damage and connect with resources</div>
            <span className="card-tag tag-design">Design Opp</span>
          </div>
          <div className="feature-card">
            <div className="card-icon">♿</div>
            <div className="card-title">Elderly &amp; Disabled</div>
            <div className="card-desc">Post-event specific support and aid resources</div>
            <span className="card-tag tag-access">Accessibility</span>
          </div>
        </>
      );
    }
  };

  const [webImageIndex, setWebImageIndex] = React.useState(0);
  const webImages = [
    { src: "/images/safehome/web-side-1.jpg", alt: "Web Dashboard 1" },
    { src: "/images/safehome/web-side-2.jpg", alt: "Web Dashboard 2" }
  ];

  const cVar = activePhase === 'pre' ? 'var(--pre)' : activePhase === 'during' ? 'var(--during)' : 'var(--post)';

  return (
    <div className="flow-wrapper">
      <style dangerouslySetInnerHTML={{
        __html: `
        #ia-flow-container {
          --bg: #0C0E0D;
          --surface: #131513;
          --card: #181C19;
          --border: rgba(255,255,255,0.07);
          --pre: #3B8BFF;
          --during: #FF8C3B;
          --post: #3BCC7A;
          --text: #E8EDE9;
          --muted: rgba(232,237,233,0.38);
          --tag-design: #3B8BFF;
          --tag-critical: #FF8C3B;
          --tag-future: rgba(255,255,255,0.28);
          --tag-access: #3BCC7A;
          --tag-color: #B47FFF;
          font-family: 'Inter', sans-serif;
        }

        #ia-flow-container .header {
          margin-bottom: 3rem;
          display: flex;
          align-items: flex-start;
          flex-direction: column;
        }
        #ia-flow-container .header-label {
          font-family: ui-monospace, monospace;
          font-size: 16px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 1rem;
          font-weight: 900;
        }
        #ia-flow-container .header h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #fff;
          margin: 0;
        }
        #ia-flow-container .title-row {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        #ia-flow-container .flow-layout {
          display: grid;
          grid-template-columns: 460px 1fr;
          gap: 40px;
          align-items: start;
        }

        #ia-flow-container .left-col {
          position: relative;
        }

        #ia-flow-container .spine {
          position: absolute;
          left: 60px;
          top: 20px;
          bottom: 20px;
          width: 2px;
          background: linear-gradient(
            to bottom,
            var(--pre) 0%,
            var(--pre) 33%,
            var(--during) 33%,
            var(--during) 66%,
            var(--post) 66%,
            var(--post) 100%
          );
          opacity: 0.25;
          z-index: 0;
        }

        #ia-flow-container .phase-row {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        #ia-flow-container .node-row {
          display: flex;
          align-items: center;
          position: relative;
          z-index: 2;
          padding: 10px 0;
        }

        #ia-flow-container .spine-dot {
          width: 82px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 12px;
        }

        #ia-flow-container .spine-dot-ring {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 2px solid var(--c);
          background: var(--bg);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s;
        }

        #ia-flow-container .phase-row.open .spine-dot-ring,
        #ia-flow-container .phase-row:hover .spine-dot-ring {
          transform: scale(1.2);
          background: color-mix(in srgb, var(--c) 20%, var(--bg));
        }

        #ia-flow-container .spine-dot-fill {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--c);
          opacity: 0;
          transition: opacity 0.2s;
        }

        #ia-flow-container .phase-row.open .spine-dot-fill { opacity: 1; }

        #ia-flow-container .h-line {
          height: 2px;
          width: 28px;
          background: var(--c);
          opacity: 0.2;
          flex-shrink: 0;
          transition: opacity 0.25s, width 0.25s;
        }

        #ia-flow-container .h-arrowhead {
          width: 0; height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid var(--c);
          opacity: 0.2;
          flex-shrink: 0;
          transition: opacity 0.25s;
        }

        #ia-flow-container .phase-row.open .h-line,
        #ia-flow-container .phase-row:hover .h-line { opacity: 0.8; }
        #ia-flow-container .phase-row.open .h-arrowhead,
        #ia-flow-container .phase-row:hover .h-arrowhead { opacity: 0.8; }

        #ia-flow-container .phase-node {
          flex: 1;
          cursor: pointer;
          background: var(--surface);
          border: 1px solid var(--border);
          border-left: 3px solid var(--c);
          border-radius: 5px;
          padding: 1.2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: background 0.2s, border-color 0.2s, box-shadow 0.2s;
          user-select: none;
          margin-left: 6px;
        }

        #ia-flow-container .phase-node:hover { background: #181c18; }

        #ia-flow-container .phase-row.open .phase-node {
          background: #181c18;
          border-left-color: var(--c);
          box-shadow: 0 4px 12px color-mix(in srgb, var(--c) 20%, transparent);
        }

        #ia-flow-container .node-num {
          font-family: ui-monospace, monospace;
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          color: var(--muted);
          flex-shrink: 0;
        }
        
        #ia-flow-container .phase-row.open .node-num {
          color: var(--c);
        }

        #ia-flow-container .node-info { flex: 1; }

        #ia-flow-container .node-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.2rem;
          font-weight: 700;
          transition: color 0.2s;
          color: #fff;
        }
        #ia-flow-container .phase-row.open .node-title { color: var(--c); }

        #ia-flow-container .node-sub {
          font-size: 0.85rem;
          color: var(--muted);
          margin-top: 0.3rem;
        }

        #ia-flow-container .node-chevron {
          font-size: 1.5rem;
          color: var(--muted);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1), color 0.2s;
          flex-shrink: 0;
          line-height: 1;
        }
        #ia-flow-container .phase-row.open .node-chevron {
          color: var(--c);
        }

        #ia-flow-container .phase-connector {
          display: flex;
          align-items: center;
          height: 44px;
          padding-left: 61px;
          position: relative;
          z-index: 1;
        }

        #ia-flow-container .pc-line {
          position: absolute;
          left: 60px;
          top: 0; bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--from-c), var(--to-c));
          opacity: 0.3;
        }

        #ia-flow-container .pc-label {
          margin-left: 52px;
          font-size: 0.65rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--muted);
          opacity: 0.6;
        }

        #ia-flow-container .pc-arrow {
          position: absolute;
          left: 55px;
          bottom: -1px;
          width: 0; height: 0;
          border-left: 5px solid transparent;
          border-right: 5px solid transparent;
          border-top: 8px solid var(--to-c);
          opacity: 0.4;
        }

        /* Right column styles */
        #ia-flow-container .right-col {
          display: flex;
          flex-direction: column;
        }

        #ia-flow-container .cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          animation: fadeSlideIn 0.4s ease-out;
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }

        #ia-flow-container .feature-card {
          background: var(--card);
          padding: 1.5rem 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          transition: background 0.2s;
        }
        #ia-flow-container .feature-card:hover { background: #1f231f; }

        #ia-flow-container .card-icon { font-size: 1.5rem; margin-bottom: 0.1rem; }

        #ia-flow-container .card-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.2;
          color: #fff;
        }

        #ia-flow-container .card-desc {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
          flex: 1;
        }

        #ia-flow-container .card-tag {
          display: inline-block;
          font-family: ui-monospace, monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-weight: 600;
          margin-top: auto;
          padding-top: 0.8rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        #ia-flow-container .tag-design  { color: var(--tag-design); }
        #ia-flow-container .tag-critical{ color: var(--tag-critical); }
        #ia-flow-container .tag-future  { color: var(--tag-future); }
        #ia-flow-container .tag-access  { color: var(--tag-access); }
        #ia-flow-container .tag-color   { color: var(--tag-color); }

        #ia-flow-container .legend {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 2.5rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
          font-family: ui-monospace, monospace;
        }
        #ia-flow-container .legend-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--muted);
        }
        #ia-flow-container .legend-dot { width: 8px; height: 8px; border-radius: 1px; }

        @media (max-width: 900px) {
           #ia-flow-container .flow-layout {
              grid-template-columns: 1fr;
           }
        }
      `}} />

      <section style={{
        background: "#0a0a0a",
        width: "100%",
        padding: "100px 0",
        marginBottom: "60px",
        position: "relative",
      }}>
        {/* Full-width Grid Background */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          zIndex: 0,
        }} />
        <div style={{ maxWidth: 1500, margin: "0 auto", padding: "0 60px", position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 20, color: "#fff" }}>From technical portal to <em style={{ color: "#0070FF", fontStyle: "italic" }}>human centred safety tool</em></h2>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 60, fontWeight: 900 }}>TRANSFORMATION</span>
          </div>

          {/* MOBILE INTERACTIONS SECTION */}
          <div style={{ marginBottom: 120, maxWidth: 1200, margin: "0 auto 120px" }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 40, color: "#fff" }}>Mobile Interactions</h3>
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
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                <div style={{ background: "rgba(0,112,255,0.05)", border: "1px solid rgba(0,112,255,0.2)", borderRadius: 12, padding: "32px", height: "auto" }}>
                  <h4 style={{ fontFamily: "ui-monospace, monospace", fontSize: 14, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontWeight: 900 }}>Notes</h4>
                  <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7 }}>
                    Moving from undifferentiated map markers to a tiered risk system required a fundamental shift in how we processed and displayed backend data. This simplified UI makes safety information accessible even during high-stress moments.
                  </p>
                </div>
                {/* STICKY NOTE MOVED HERE */}
                <div className="sh-sticky" style={{
                  background: "#fef08a",
                  padding: "24px",
                  width: "100%",
                  transform: "rotate(1deg)",
                  boxShadow: "10px 10px 30px rgba(0,0,0,0.4)",
                  zIndex: 20,
                  position: "relative"
                }}>
                  <div style={{ width: 12, height: 12, background: "#0070FF", borderRadius: "50%", position: "absolute", top: -6, left: "20px" }} />
                  <p style={{ color: "#1a1a1a", fontSize: 14, fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
                    Quick-access alerts and interactive hazard awareness designed for mobile agility during stressful situations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* WEB SECTION */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 700, marginBottom: 40, color: "#fff" }}>Web Experience</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 32, alignItems: "start" }}>
              <div style={{ position: "relative", width: "100%" }}>
                <div style={{ background: "#111", borderRadius: 12, padding: "12px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)", position: "relative" }}>
                  <img
                    src={webImages[webImageIndex].src}
                    alt={webImages[webImageIndex].alt}
                    style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }}
                  />

                  {/* NEXT ARROW */}
                  <button
                    onClick={() => setWebImageIndex((prev) => (prev + 1) % webImages.length)}
                    style={{
                      position: "absolute",
                      right: 32,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "rgba(0,0,0,0.6)",
                      border: "1px solid rgba(255,255,255,0.2)",
                      color: "#0070FF",
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      backdropFilter: "blur(4px)",
                      zIndex: 10
                    }}
                  >
                    →
                  </button>

                  {/* PAGINATION DOTS */}
                  <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 12 }}>
                    {webImages.map((_, i) => (
                      <div
                        key={i}
                        style={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          background: i === webImageIndex ? "#FF8C3B" : "rgba(255,255,255,0.2)"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ background: "rgba(255,140,59,0.05)", border: "1px solid rgba(255,140,59,0.2)", borderRadius: 12, padding: "32px", width: "100%" }}>
                <h4 style={{ fontFamily: "ui-monospace, monospace", fontSize: 14, color: "#FF8C3B", textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 16, fontWeight: 900 }}>Strategy</h4>
                <p style={{ fontSize: 16, color: "#d1d5db", lineHeight: 1.7 }}>
                  The desktop experience focuses on deep exploration and preparation. We translated dense government documentation into a single-page dashboard with prioritized "todo-actions" and progressive disclosure.
                </p>
              </div>
            </div>
          </div>
        </div >
      </section >

      {/* ── BEFORE & AFTER ── */}
      < section style={{ background: "#111", padding: "100px 60px", borderBottom: "1px solid #272727" }
      }>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 20, fontWeight: 900 }}>08 BEFORE & AFTER</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 40, color: "#fff" }}>From technical data portal to <em style={{ color: "#0070FF", fontStyle: "italic" }}>human centred safety tool</em></h2>
          <p style={{ fontSize: 19, lineHeight: 1.75, color: "#d1d5db", maxWidth: 800, marginBottom: 60 }}>
            Two core experiences were redesigned from the ground up — the risk map and the resource navigation. Both went from overwhelming to immediately actionable.
          </p>

          <div style={{ marginBottom: 80 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, margin: "0 0 12px", color: "#fff" }}>1. The Map & Risk Visualisation</h3>
            <p style={{ fontSize: 15, color: "#888", marginBottom: 32 }}>Uniform markers → tiered risk with mobile search overlays</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#272727" }}>
              <div style={{ background: "#0a0a0a", padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 10, fontFamily: "ui-monospace, monospace", letterSpacing: "0.2em", background: "rgba(155,34,38,0.1)", color: "#e87c6f", padding: "4px 12px", borderRadius: 2 }}>BEFORE</span>
                  <span style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>Uniform markers · no visual hierarchy</span>
                </div>
                <div style={{ height: 300, background: "#111", borderRadius: 8, border: "1px dashed #333", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#444" }}>[ Legacy Portal Screenshot ]</span>
                </div>
                <p style={{ marginTop: 24, fontSize: 14, color: "#666", lineHeight: 1.6 }}>Dense, undifferentiated map markers gave residents no way to assess relative risk at a glance. Overlays were unreadable on mobile.</p>
              </div>
              <div style={{ background: "#0a0a0a", padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 10, fontFamily: "ui-monospace, monospace", letterSpacing: "0.2em", background: "rgba(26,107,47,0.1)", color: "#3BCC7A", padding: "4px 12px", borderRadius: 2 }}>AFTER</span>
                  <span style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>Color Initiative · High/Med/Low tiers</span>
                </div>
                <div style={{ height: 300, background: "#111", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <img src="/images/safehome/web-side-2.jpg" alt="After Map" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ marginTop: 24, fontSize: 14, color: "#d1d5db", lineHeight: 1.6 }}>Implemented the 3-tier Color Initiative with mobile-optimised search overlays. Residents can now identify severity in seconds.</p>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, margin: "0 0 12px", color: "#fff" }}>2. Resource Navigation</h3>
            <p style={{ fontSize: 15, color: "#888", marginBottom: 32 }}>Text-heavy government links → single-page preparedness dashboard</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#272727" }}>
              <div style={{ background: "#0a0a0a", padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 10, fontFamily: "ui-monospace, monospace", letterSpacing: "0.2em", background: "rgba(155,34,38,0.1)", color: "#e87c6f", padding: "4px 12px", borderRadius: 2 }}>BEFORE</span>
                  <span style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>Long lists · text-heavy links</span>
                </div>
                <div style={{ height: 300, background: "#111", borderRadius: 8, border: "1px dashed #333", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#444" }}>[ Text-heavy PDF list ]</span>
                </div>
                <p style={{ marginTop: 24, fontSize: 14, color: "#666", lineHeight: 1.6 }}>Overwhelming walls of government links left users paralysed. There was no guidance on what to do first or priority.</p>
              </div>
              <div style={{ background: "#0a0a0a", padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <span style={{ fontSize: 10, fontFamily: "ui-monospace, monospace", letterSpacing: "0.2em", background: "rgba(26,107,47,0.1)", color: "#3BCC7A", padding: "4px 12px", borderRadius: 2 }}>AFTER</span>
                  <span style={{ fontSize: 13, color: "#888", fontWeight: 500 }}>Single-page dashboard · todo-actions</span>
                </div>
                <div style={{ height: 300, background: "#111", borderRadius: 8, overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
                  <img src="/images/safehome/web-side-1.jpg" alt="After Resources" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <p style={{ marginTop: 24, fontSize: 14, color: "#d1d5db", lineHeight: 1.6 }}>A streamlined single-page dashboard with prioritised "todo-actions" and plain-language definitions.</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      <div className="flow-layout">
        {/* LEFT COLUMN: The Phases */}
        <div className="left-col">
          <div className="spine"></div>

          {/* 01 PRE EVENT */}
          <div className={`phase-row${activePhase === 'pre' ? ' open' : ''}`} style={{ "--c": "var(--pre)" } as any}>
            <div className="node-row" onClick={() => setActivePhase('pre')}>
              <div className="spine-dot"><div className="spine-dot-ring"><div className="spine-dot-fill"></div></div></div>
              <div className="h-line"></div>
              <div className="h-arrowhead"></div>
              <div className="phase-node">
                <span className="node-num">01</span>
                <div className="node-info">
                  <div className="node-title">Pre-Event Preparedness</div>
                  <div className="node-sub">Before disaster strikes — resources &amp; risk awareness</div>
                </div>
                <span className="node-chevron">›</span>
              </div>
            </div>
          </div>

          <div className="phase-connector" style={{ "--from-c": "var(--pre)", "--to-c": "var(--during)" } as any}>
            <div className="pc-line"></div>
            <div className="pc-arrow"></div>
            <span className="pc-label">event occurs</span>
          </div>

          {/* 02 DURING EVENT */}
          <div className={`phase-row${activePhase === 'during' ? ' open' : ''}`} style={{ "--c": "var(--during)" } as any}>
            <div className="node-row" onClick={() => setActivePhase('during')}>
              <div className="spine-dot"><div className="spine-dot-ring"><div className="spine-dot-fill"></div></div></div>
              <div className="h-line"></div>
              <div className="h-arrowhead"></div>
              <div className="phase-node">
                <span className="node-num">02</span>
                <div className="node-info">
                  <div className="node-title">During Event — Real-Time Safety</div>
                  <div className="node-sub">Live data &amp; offline-first tools when every second counts</div>
                </div>
                <span className="node-chevron">›</span>
              </div>
            </div>
          </div>

          <div className="phase-connector" style={{ "--from-c": "var(--during)", "--to-c": "var(--post)" } as any}>
            <div className="pc-line"></div>
            <div className="pc-arrow"></div>
            <span className="pc-label">immediate aftermath</span>
          </div>

          {/* 03 AFTER EVENT */}
          <div className={`phase-row${activePhase === 'post' ? ' open' : ''}`} style={{ "--c": "var(--post)" } as any}>
            <div className="node-row" onClick={() => setActivePhase('post')}>
              <div className="spine-dot"><div className="spine-dot-ring"><div className="spine-dot-fill"></div></div></div>
              <div className="h-line"></div>
              <div className="h-arrowhead"></div>
              <div className="phase-node">
                <span className="node-num">03</span>
                <div className="node-info">
                  <div className="node-title">After Event — Recovery</div>
                  <div className="node-sub">Reconnect, assess damage, access post-disaster support</div>
                </div>
                <span className="node-chevron">›</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: The Features */}
        <div className="right-col">
          <div className="cards-grid" key={activePhase} style={{ borderColor: cVar }}>
            {renderCards()}
          </div>
        </div>
      </div>

      <div className="legend">
        <div className="legend-item"><div className="legend-dot" style={{ background: "var(--tag-design)" }}></div>Design Opportunity</div>
        <div className="legend-item"><div className="legend-dot" style={{ background: "var(--tag-critical)" }}></div>Critical Feature</div>
        <div className="legend-item"><div className="legend-dot" style={{ background: "var(--tag-color)" }}></div>Color Initiative</div>
        <div className="legend-item"><div className="legend-dot" style={{ background: "var(--tag-access)" }}></div>Accessibility</div>
        <div className="legend-item"><div className="legend-dot" style={{ background: "rgba(255,255,255,0.25)" }}></div>Future Phase</div>
      </div>
    </div >
  );
}


export function SafeHomeProject({ project }: { project: Project }) {
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
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Caveat:wght@400;600;700&display=swap');
                .sh-paper { background: #0a0a0a; }
                .sh-ink { background: #111111; }
                .sh-accent { background: #0070FF; }
                .sh-card-hover:hover { background: rgba(0,112,255,0.12) !important; }
                .sh-stat-hover:hover { border-color: #0070FF !important; }
                .sh-metric-hover:hover { border-bottom-color: #0070FF !important; }
                .sh-timeline-card:hover { box-shadow: 0 8px 28px rgba(0,0,0,0.4); transform: translateY(-4px); }
                .sh-vision-card:hover { background: #1a1a1a !important; transform: translateY(-4px); box-shadow: 0 8px 24px rgba(0,0,0,0.4); }
                .sh-sticky:hover { transform: rotate(0deg) scale(1.03) !important; box-shadow: 6px 12px 32px rgba(0,0,0,0.6) !important; z-index: 10; }
                .sh-outcome-hover:hover { border-left-color: #0070FF !important; background: rgba(0,112,255,0.1) !important; }
                header[class*="fixed"], nav.site-nav { display: none !important; }
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
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100vh", paddingTop: 60 }}>
        {/* Left – dark */}
        <div style={{ background: "#0f0f0f", padding: "80px 60px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db" }}>UX Case Study 2025</span>
          <div>
            <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.25em", textTransform: "uppercase", color: "#d1d5db", marginBottom: 28 }}>Nonprofit Civic Tech Public Safety</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(52px,6vw,88px)", fontWeight: 900, lineHeight: 0.95, color: "#fff", marginBottom: 32 }}>
              Safe<span style={{ color: "#0070FF", fontStyle: "italic" }}>Home</span>
            </h1>
            <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7, maxWidth: 360, marginBottom: 48 }}>
              Redesigning earthquake &amp; tsunami preparedness for the communities of San Francisco. From design chaos to a trusted, accessible civic product.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                ["Role", "Full Redesign · Design direction · UX Strategy change to UX lead."],
                ["Team", "Designers, Engineering, Data Science, Product, Partnership."],
                ["Duration", " 3 work weeks "],
                ["Scope", "Redesign · UX Strategy · Usability study · Human centered approach."],
              ].map(([label, value]) => (
                <div key={label} style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                  <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#60a5fa", minWidth: 80, fontWeight: 700 }}>{label}</span>
                  <span style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div />
        </div>

        {/* Right – dark with blue gradient */}
        <div style={{ background: "linear-gradient(135deg, #002a5a 0%, #0f172a 50%, #0a0a0a 100%)", padding: "80px 80px 80px 100px", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", borderLeft: "1px solid rgba(0,112,255,0.2)" }}>
          <div style={{ position: "absolute", top: 40, right: -20, fontFamily: "'Playfair Display', serif", fontSize: 160, fontWeight: 900, color: "rgba(255,255,255,0.07)", lineHeight: 0.9, whiteSpace: "pre", pointerEvents: "none" }}>{"SAFE\nHOME"}</div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 700, fontStyle: "italic", color: "#fff", lineHeight: 1.2, marginBottom: 32 }}>
              "Knowing your risk is the first step to surviving it."
            </p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.85)", lineHeight: 1.8, maxWidth: 420, marginBottom: 48 }}>
              SafeHome is a <span style={{ color: "#3b79ffff", fontWeight: 700 }}>nonprofit platform</span> backed by <span style={{ color: "#FF8C3B", fontWeight: 700 }}>SF government data</span> that helps residents understand their <span style={{ color: "hsla(221, 100%, 62%, 1.00)", fontWeight: 700 }}>earthquake</span> and <span style={{ color: "#3b79ffff", fontWeight: 700 }}>tsunami</span> risk by location and take actionable steps to prepare. When I joined, the product had no UX foundation. I built one.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {["UX Strategy", "Civic Design", "Accessibility", "Design Systems", "User Research", "Cross-Functional"].map(t => (
                <span key={t} style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.15em", textTransform: "uppercase", padding: "6px 14px", border: "1px solid rgba(255,255,255,0.3)", color: "rgba(255,255,255,0.8)", borderRadius: 2 }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OBJECTIVES STRIP ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", background: "#111111", borderTop: "1px solid #272727", borderBottom: "1px solid #272727" }}>
        {[
          { num: "01", title: "Actionable Data", text: <>Decode fragmented government earthquake data into a <span style={{ color: "#60a5fa", fontWeight: 600 }}>mobile first experience</span> where residents quickly understand how risk applies to their specific home and neighbourhood.</> },
          { num: "02", title: "Mobile First Resilience", text: <>Translate dense geoscience terminology into tiered <span style={{ color: "#FF8C3B", fontWeight: 600 }}>actionable risk cues</span> that do not require an expert degree and work seamlessly on the phone residents already have.</> },
          { num: "03", title: "Inclusive Access", text: <>Close the action gap by guiding renters and homeowners toward <span style={{ color: "#3BCC7A", fontWeight: 600 }}>immediate preparedness steps</span> designed for elderly residents, non English speakers, and users with disabilities.</> },
        ].map((o) => (
          <div key={o.num} className="sh-card-hover" style={{ padding: "44px 40px", borderRight: "1px solid #272727", transition: "background 0.2s", cursor: "default" }}>
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: "#60a5fa", marginBottom: 8, display: "block", fontWeight: 900 }}>OBJECTIVE {o.num}</span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, marginBottom: 10, color: "#ffffff" }}>{o.title}</h3>
            <p style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.7 }}>{o.text}</p>
          </div>
        ))}
      </div>

      {/* MOVED: BUILT FROM ZERO STRIP moved under flow diagram */}

      {/* ── THE PROBLEM ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 20, fontWeight: 900 }}>01 THE PROBLEM</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 40, color: "#fff" }}>A product with mission but <em style={{ fontStyle: "italic", color: "#0070FF" }}>no direction</em></h2>

        <p style={{ fontSize: 20, lineHeight: 1.7, color: "#fff", maxWidth: 800, marginBottom: 60 }}>
          SafeHome had the right idea put credible seismic risk data in residents hands. But the experience itself was fractured, inconsistent, and hard to trust.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2, background: "#272727" }}>
          {[
            {
              title: "No Design Direction",
              subtext: "The product lacked a clear UX vision, visual language, or design principles. Every screen felt like a separate decision made by a different person.",
              svg: <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="28" width="44" height="32" rx="3" fill="white" stroke="#ddd" strokeWidth="1.5" transform="rotate(-8,30,44)" />
                <rect x="12" y="32" width="30" height="4" rx="1" fill="#e8c4c4" transform="rotate(-8,30,44)" />
                <rect x="12" y="39" width="22" height="3" rx="1" fill="#f0d8d8" transform="rotate(-8,30,44)" />
                <rect x="12" y="45" width="26" height="3" rx="1" fill="#f0d8d8" transform="rotate(-8,30,44)" />
                <rect x="60" y="14" width="44" height="32" rx="3" fill="white" stroke="#ddd" strokeWidth="1.5" transform="rotate(5,82,30)" />
                <rect x="64" y="18" width="20" height="4" rx="1" fill="#c4d4e8" transform="rotate(5,82,30)" />
                <rect x="64" y="25" width="32" height="3" rx="1" fill="#d8e4f0" transform="rotate(5,82,30)" />
                <rect x="64" y="31" width="28" height="3" rx="1" fill="#d8e4f0" transform="rotate(5,82,30)" />
                <rect x="110" y="22" width="44" height="32" rx="3" fill="white" stroke="#ddd" strokeWidth="1.5" transform="rotate(-4,132,38)" />
                <rect x="114" y="26" width="28" height="4" rx="1" fill="#e8d4c4" transform="rotate(-4,132,38)" />
                <rect x="114" y="33" width="18" height="3" rx="1" fill="#f0e4d8" transform="rotate(-4,132,38)" />
                <rect x="114" y="39" width="30" height="3" rx="1" fill="#f0e4d8" transform="rotate(-4,132,38)" />
                <path d="M52,44 C56,40 58,40 62,38" stroke="#c0392b" strokeWidth="1.8" fill="none" strokeDasharray="3,2" />
                <path d="M104,38 C108,36 112,35 116,34" stroke="#c0392b" strokeWidth="1.8" fill="none" strokeDasharray="3,2" />
                <text x="46" y="22" fontFamily="Georgia,serif" fontSize="18" fill="#c0392b" opacity="0.6">?</text>
                <text x="96" y="16" fontFamily="Georgia,serif" fontSize="16" fill="#c0392b" opacity="0.5">?</text>
                <circle cx="80" cy="82" r="18" fill="none" stroke="#ddd" strokeWidth="1.5" />
                <circle cx="80" cy="82" r="2" fill="#bbb" />
                <line x1="80" y1="82" x2="88" y2="70" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" />
                <line x1="80" y1="82" x2="72" y2="94" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="66" y1="68" x2="94" y2="96" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
                <line x1="94" y1="68" x2="66" y2="96" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" opacity="0.35" />
              </svg>
            },
            {
              title: "No UX Process or Strategy",
              subtext: "No research framework, no design review, no feedback loops. Features were built and shipped without validation or usability testing.",
              svg: <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
                <rect x="46" y="8" width="68" height="86" rx="4" fill="white" stroke="#ddd" strokeWidth="1.5" />
                <rect x="62" y="4" width="36" height="12" rx="3" fill="#e8e3da" stroke="#ddd" strokeWidth="1.5" />
                <circle cx="80" cy="10" r="3" fill="#ccc" />
                <rect x="58" y="28" width="8" height="8" rx="1.5" fill="none" stroke="#ddd" strokeWidth="1.5" />
                <line x1="60" y1="30" x2="64" y2="34" stroke="#c0392b" strokeWidth="1.5" />
                <line x1="64" y1="30" x2="60" y2="34" stroke="#c0392b" strokeWidth="1.5" />
                <rect x="70" y="30" width="36" height="4" rx="1" fill="#f0ebe3" />
                <rect x="58" y="44" width="8" height="8" rx="1.5" fill="none" stroke="#ddd" strokeWidth="1.5" />
                <line x1="60" y1="46" x2="64" y2="50" stroke="#c0392b" strokeWidth="1.5" />
                <line x1="64" y1="46" x2="60" y2="50" stroke="#c0392b" strokeWidth="1.5" />
                <rect x="70" y="46" width="28" height="4" rx="1" fill="#f0ebe3" />
                <rect x="58" y="60" width="8" height="8" rx="1.5" fill="none" stroke="#ddd" strokeWidth="1.5" />
                <line x1="60" y1="62" x2="64" y2="66" stroke="#c0392b" strokeWidth="1.5" />
                <line x1="64" y1="62" x2="60" y2="66" stroke="#c0392b" strokeWidth="1.5" />
                <rect x="70" y="62" width="32" height="4" rx="1" fill="#f0ebe3" />
                <rect x="58" y="76" width="8" height="8" rx="1.5" fill="none" stroke="#ddd" strokeWidth="1.5" />
                <line x1="60" y1="78" x2="64" y2="82" stroke="#c0392b" strokeWidth="1.5" />
                <line x1="64" y1="78" x2="60" y2="82" stroke="#c0392b" strokeWidth="1.5" />
                <rect x="70" y="78" width="24" height="4" rx="1" fill="#f0ebe3" />
                <path d="M22,55 C22,38 35,25 52,22" stroke="#ddd" strokeWidth="2" fill="none" strokeDasharray="4,3" />
                <path d="M22,55 C22,72 35,82 48,86" stroke="#ddd" strokeWidth="2" fill="none" strokeDasharray="4,3" />
                <text x="10" y="58" fontFamily="sans-serif" fontSize="9" fill="#bbb" textAnchor="middle">no</text>
                <text x="10" y="68" fontFamily="sans-serif" fontSize="9" fill="#bbb" textAnchor="middle">loop</text>
              </svg>
            },
            {
              title: "No Mobile Experience",
              subtext: "The platform was inaccessible on mobile — a critical miss for a public safety product meant to reach all residents, including those with limited desktop access.",
              svg: <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
                <rect x="14" y="16" width="80" height="56" rx="4" fill="white" stroke="#ddd" strokeWidth="1.5" />
                <rect x="14" y="16" width="80" height="10" rx="4" fill="#e8e3da" stroke="#ddd" strokeWidth="1.5" />
                <circle cx="20" cy="21" r="2" fill="#ffbdbd" />
                <circle cx="27" cy="21" r="2" fill="#ffd6a0" />
                <circle cx="34" cy="21" r="2" fill="#b8f0b8" />
                <rect x="20" y="32" width="68" height="5" rx="1" fill="#e0d8cc" />
                <rect x="20" y="40" width="50" height="4" rx="1" fill="#ece8e0" />
                <rect x="20" y="47" width="60" height="4" rx="1" fill="#ece8e0" />
                <rect x="20" y="54" width="44" height="4" rx="1" fill="#ece8e0" />
                <rect x="50" y="72" width="8" height="10" rx="1" fill="#ddd" />
                <rect x="42" y="82" width="24" height="4" rx="2" fill="#ddd" />
                <rect x="112" y="22" width="32" height="54" rx="5" fill="white" stroke="#ddd" strokeWidth="1.5" />
                <rect x="112" y="22" width="32" height="8" rx="5" fill="#e8e3da" stroke="#ddd" strokeWidth="1" />
                <circle cx="128" cy="26" r="2" fill="#ccc" />
                <rect x="116" y="35" width="24" height="4" rx="1" fill="#ece8e0" />
                <rect x="116" y="42" width="18" height="4" rx="1" fill="#ece8e0" />
                <line x1="113" y1="23" x2="143" y2="75" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="143" y1="23" x2="113" y2="75" stroke="#c0392b" strokeWidth="2.5" strokeLinecap="round" />
                <path d="M96,50 C102,50 106,50 112,50" stroke="#c0392b" strokeWidth="1.5" fill="none" strokeDasharray="3,2" />
                <text x="122" y="98" fontFamily="sans-serif" fontSize="9" fill="#c0392b" textAnchor="middle" fontWeight="700">0% mobile</text>
              </svg>
            },
            {
              title: "Team Misalignment & Chaos",
              subtext: "Product, engineering, and design operated without shared goals or a common workflow. Scope changed frequently without design input or user validation.",
              svg: <svg viewBox="0 0 160 110" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="8" width="52" height="38" rx="3" fill="white" stroke="#ddd" strokeWidth="1.5" transform="rotate(-10,34,27)" />
                <rect x="13" y="14" width="30" height="4" rx="1" fill="#e0d8cc" transform="rotate(-10,34,27)" />
                <rect x="13" y="21" width="22" height="3" rx="1" fill="#ece8e0" transform="rotate(-10,34,27)" />
                <rect x="13" y="27" width="26" height="3" rx="1" fill="#ece8e0" transform="rotate(-10,34,27)" />
                <text x="18" y="52" fontFamily="sans-serif" fontSize="8" fill="#bbb" transform="rotate(-10,34,52)">Design</text>
                <rect x="100" y="6" width="52" height="38" rx="3" fill="white" stroke="#ddd" strokeWidth="1.5" transform="rotate(9,126,25)" />
                <rect x="105" y="12" width="30" height="4" rx="1" fill="#e0d8cc" transform="rotate(9,126,25)" />
                <rect x="105" y="19" width="20" height="3" rx="1" fill="#ece8e0" transform="rotate(9,126,25)" />
                <rect x="105" y="25" width="28" height="3" rx="1" fill="#ece8e0" transform="rotate(9,126,25)" />
                <text x="108" y="52" fontFamily="sans-serif" fontSize="8" fill="#bbb" transform="rotate(9,126,52)">Eng</text>
                <rect x="6" y="62" width="52" height="38" rx="3" fill="white" stroke="#ddd" strokeWidth="1.5" transform="rotate(7,32,81)" />
                <rect x="11" y="68" width="30" height="4" rx="1" fill="#e0d8cc" transform="rotate(7,32,81)" />
                <rect x="11" y="75" width="24" height="3" rx="1" fill="#ece8e0" transform="rotate(7,32,81)" />
                <rect x="11" y="81" width="18" height="3" rx="1" fill="#ece8e0" transform="rotate(7,32,81)" />
                <text x="14" y="105" fontFamily="sans-serif" fontSize="8" fill="#bbb" transform="rotate(7,32,105)">Product</text>
                <rect x="102" y="62" width="52" height="38" rx="3" fill="white" stroke="#ddd" strokeWidth="1.5" transform="rotate(-8,128,81)" />
                <rect x="107" y="68" width="28" height="4" rx="1" fill="#e0d8cc" transform="rotate(-8,128,81)" />
                <rect x="107" y="75" width="20" height="3" rx="1" fill="#ece8e0" transform="rotate(-8,128,81)" />
                <rect x="107" y="81" width="24" height="3" rx="1" fill="#ece8e0" transform="rotate(-8,128,81)" />
                <text x="108" y="104" fontFamily="sans-serif" fontSize="8" fill="#bbb" transform="rotate(-8,128,104)">Data</text>
                <path d="M54,32 C68,34 72,40 74,46" stroke="#ddd" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
                <path d="M106,32 C95,36 90,40 87,46" stroke="#ddd" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
                <path d="M54,78 C67,72 72,67 74,63" stroke="#ddd" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
                <path d="M104,78 C94,72 90,67 87,63" stroke="#ddd" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />
                <circle cx="80" cy="55" r="11" fill="#fdf9f0" stroke="#ddd" strokeWidth="1.5" />
                <path d="M75,52 L78,55 L75,58" stroke="#c0392b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M85,52 L82,55 L85,58" stroke="#c0392b" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="78" y1="55" x2="82" y2="55" stroke="#c0392b" strokeWidth="2" strokeLinecap="round" strokeDasharray="1,2" />
              </svg>
            },
          ].map(c => (
            <div key={c.title} className="sh-card-hover" style={{ background: "#0a0a0a", padding: "48px 40px", transition: "background 0.2s", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
              <div style={{ marginBottom: 32, height: 120, width: "100%", maxWidth: 200, display: "flex", alignItems: "center", justifyContent: "center" }}>
                {c.svg}
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 12 }}>{c.title}</h3>
              <p style={{ fontSize: 14, color: "#888", lineHeight: 1.6, margin: 0 }}>{c.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />

      {/* ── MY ROLE ── */}
      {/* ── MY ROLE & IMPACT COMBINED ── */}
      <section style={{ background: "#111", padding: "100px 60px", borderBottom: "1px solid #272727" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 20, fontWeight: 900 }}>02 ROLE & IMPACT</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 32, color: "#fff" }}>Leadership & <em style={{ color: "#0070FF", fontStyle: "italic" }}>Results</em></h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
            <div>
              <p style={{ fontSize: 19, lineHeight: 1.75, color: "#e5e7eb", marginBottom: 40 }}>
                As UX Lead, I built the infrastructure from scratch, aligning a fractured volunteer team to deliver a premium civic product in record time.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#272727" }}>
                {[
                  { label: "STRATEGIC", title: "Breaking Deadlocks", desc: "Clarified ownership and prioritised user impact over technical silos." },
                  { label: "OPERATIONAL", title: "Velocity Overhaul", desc: "Introduced OKR systems that doubled feature delivery speed." },
                ].map(s => (
                  <div key={s.title} style={{ background: "#0a0a0a", padding: "28px 24px" }}>
                    <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#60a5fa", display: "block", marginBottom: 8, fontWeight: 700 }}>{s.label}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: "#999", lineHeight: 1.5 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "#333" }}>
              {[
                { num: "60%", label: "User Retention" },
                { num: "75%", label: "Mobile Traffic" },
                { num: "2×", label: "Project Velocity" },
                { num: "100%", label: "UX Adoption" },
              ].map(m => (
                <div key={m.label} style={{ background: "#1a1a1a", padding: "30px 20px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 900, color: "#0070FF", lineHeight: 1, marginBottom: 4 }}>{m.num}</div>
                  <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "#888", textTransform: "uppercase", letterSpacing: "0.1em" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ── DESIGN DECISIONS ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 60px 100px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 20, fontWeight: 900 }}>05 UX INTERVENTION</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 32, color: "#fff" }}>UX INTERVENTION</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 40, alignItems: "center", marginBottom: 80 }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 16, color: "#fff" }}>Visual Analysis</h3>
            <p style={{ fontSize: 16, color: "#d1d5db", lineHeight: 1.7, marginBottom: 24 }}>
              A key part of the redesign was a comprehensive visual analysis of disparate FEMA risk maps and existing natural hazard databases. We extracted the most critical data patterns, translating legacy government UI structures into clear, accessible mobile formats.
            </p>
            {/* Navigation Dots Removed as requested */}
          </div>
          <div style={{ position: "relative" }}>
            <img src="/images/safehome/visual-analysis.jpg" alt="Visual Analysis" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }} />
            <div style={{ position: "absolute", bottom: 20, right: 20, background: "rgba(0,0,0,0.8)", padding: "10px 18px", borderRadius: 4, backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 11, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em" }}>Ref 01: FEMA Overlay Patterns</span>
            </div>
          </div>
        </div>

        <div style={{ position: "relative", marginBottom: 60 }}>
          {/* FLOATING COMMENT BOX */}
          <div className="sh-sticky" style={{
            background: "#fef08a",
            padding: "24px",
            position: "absolute",
            left: "-140px",
            top: "0px",
            width: "300px",
            transform: "rotate(-2deg)",
            boxShadow: "10px 10px 30px rgba(0,0,0,0.4)",
            zIndex: 20
          }}>
            <div style={{ width: 12, height: 12, background: "#0070FF", borderRadius: "50%", position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)" }} />
            <p style={{ color: "#1a1a1a", fontSize: 15, fontWeight: 600, lineHeight: 1.5, margin: 0 }}>
              One of the sharpest design challenges was legal. Official terminology like Liquefaction carried strict regulatory meaning that we could not redefine.
            </p>
          </div>
        </div>

        <div style={{ background: "#0f0f0f", borderRadius: 2, padding: "48px 44px", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 40, alignItems: "center", border: "1px solid rgba(255,255,255,0.05)" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, color: "#fff", marginBottom: 14, lineHeight: 1.2 }}>
              The <em style={{ color: "#0070FF", fontStyle: "italic" }}>Color Initiative</em>
            </h3>
            <p style={{ fontSize: 17, color: "#0070FF", lineHeight: 1.6, marginBottom: 12, fontWeight: 500 }}>
              <strong>Before:</strong>
            </p>
            <p style={{ fontSize: 17, color: "#fff", lineHeight: 1.6, marginBottom: 12, fontWeight: 500 }}>
              uniform map markers and dense overlays with no visual hierarchy.
            </p>
            <p style={{ fontSize: 17, color: "#0070FF", lineHeight: 1.6, marginBottom: 24, fontWeight: 600 }}>
              <strong>After:</strong>
            </p>
            <p style={{ fontSize: 17, color: "#fff", lineHeight: 1.6, marginBottom: 12, fontWeight: 500 }}>
              High / Medium / Low tiers with distinct color coding readable in seconds on mobile, WCAG compliant, and legally defensible.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[["#FF0000", "High"], ["#FF8C3B", "Medium"], ["#3BCC7A", "Low"]].map(([bg, label]) => (
                <div key={label} style={{ background: bg, color: "#fff", padding: "8px 20px", fontFamily: "ui-monospace, monospace", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", borderRadius: 2 }}>{label}</div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <span style={{ position: "absolute", bottom: 20, right: 20, background: "rgba(0,0,0,0.7)", color: "#fff", padding: "4px 12px", fontSize: 10, fontFamily: "ui-monospace, monospace", textTransform: "uppercase", zIndex: 10 }}>Before</span>
            <img src="/images/safehome/color-initiative.jpg" alt="Color Initiative UI" style={{ width: "100%", height: "auto", display: "block", borderRadius: 8 }} />
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: "#272727" }} />
      {/* ── UX PAIN POINTS ── */}
      <section style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 60px 100px", paddingTop: "120px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "start" }}>
          <div style={{ width: "100%", height: 500, background: "#1a1a1a", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", overflow: "hidden", boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}>
            <img src="/images/safehome/pain-points.png" alt="Legacy Portal Pain Points" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 900, marginBottom: 24, color: "#fff" }}>UX Pain Points</h3>
            <ul style={{ display: "flex", flexDirection: "column", gap: 24, listStyle: "none", padding: 0 }}>
              <li style={{ fontSize: 17, color: "#d1d5db", lineHeight: 1.6, position: "relative", paddingLeft: 28 }}>
                <span style={{ position: "absolute", left: 0, top: 0, color: "#0070FF", fontSize: "24px" }}>•</span>
                <strong style={{ color: "#fff", display: "block", marginBottom: 4 }}>Critical Information Hidden:</strong> The full-screen map trapped users on mobile without scroll indicators, hiding essential preparedness resources below the fold.
              </li>
              <li style={{ fontSize: 17, color: "#d1d5db", lineHeight: 1.6, position: "relative", paddingLeft: 28 }}>
                <span style={{ position: "absolute", left: 0, top: 0, color: "#0070FF", fontSize: "24px" }}>•</span>
                <strong style={{ color: "#fff", display: "block", marginBottom: 4 }}>Confusing Terminology:</strong> Technical terms like "Liquefaction" or "Soft Story" lacked plain-English explanations, leaving residents uncertain about their actual risk.
              </li>
              <li style={{ fontSize: 17, color: "#d1d5db", lineHeight: 1.6, position: "relative", paddingLeft: 28 }}>
                <span style={{ position: "absolute", left: 0, top: 0, color: "#0070FF", fontSize: "24px" }}>•</span>
                <strong style={{ color: "#fff", display: "block", marginBottom: 4 }}>Lack of Responsiveness:</strong> The original portal was completely unable to be used on mobile devices, violating the primary use case for emergency preparedness.
              </li>
              <li style={{ fontSize: 17, color: "#d1d5db", lineHeight: 1.6, position: "relative", paddingLeft: 28 }}>
                <span style={{ position: "absolute", left: 0, top: 0, color: "#0070FF", fontSize: "24px" }}>•</span>
                <strong style={{ color: "#fff", display: "block", marginBottom: 4 }}>Accessibility Failures:</strong> Poor color contrast and non-semantic structure made the tool inaccessible for users with visual impairments or screen readers.
              </li>
            </ul>
          </div>
        </div>
      </section>




      {/* ── USER FLOW ── */}
      <section id="ia-flow-container" style={{ padding: "100px 60px", background: "var(--bg, #0C0E0D)", overflow: "hidden", color: "#E8EDE9" }}>
        <style dangerouslySetInnerHTML={{
          __html: `
          .flow-container {
            --bg: #0C0E0D;
            --surface: #141614;
            --pre:    #3B8BFF;
            --during: #FF8C3B;
            --post:   #3BCC7A;
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
            font-size:.6rem; letter-spacing:.3em; text-transform:uppercase;
            color:#FFFFFF; margin-bottom:.5rem; font-weight:400; font-family: ui-monospace, monospace;
          }
          .flow-container .header h2 {
            font-family: 'Playfair Display', serif;
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
        <div className="flow-container" style={{ maxWidth: 1500, margin: "0 auto" }}>

          <div className="header">
            <div>
              <div className="header-label">USER JOURNEY &amp; IA</div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 0, color: "#fff" }}>Earthquake Safety App</h2>
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

              <circle cx="749" cy="40" r="5" fill="#3B8BFF" />
              <text x="760" y="44" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="400" fill="#FFFFFF" letterSpacing="2">PRE EVENT</text>

              <circle cx="749" cy="215" r="5" fill="#FF8C3B" />
              <text x="760" y="219" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="400" fill="#FFFFFF" letterSpacing="2">DURING EVENT</text>

              <circle cx="749" cy="390" r="5" fill="#3BCC7A" />
              <text x="760" y="394" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="400" fill="#FFFFFF" letterSpacing="2">AFTER EVENT</text>

              <circle cx="36" cy="248" r="5" fill="#C8B8FF" />
              <text x="47" y="252" fontFamily="ui-monospace, monospace" fontSize="11" fontWeight="400" fill="#FFFFFF" letterSpacing="2">ENTRY</text>

              <text x="28" y="273" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="400" fill="rgba(232,237,233,0.8)">Enter</text>
              <text x="28" y="290" fontFamily="ui-monospace, monospace" fontSize="12" fontWeight="400" fill="rgba(232,237,233,0.8)">SafeHome</text>

              <rect x="140" y="250" width="220" height="52" rx="26" fill="rgba(200,184,255,0.07)" stroke="rgba(200,184,255,0.4)" strokeWidth="1.5" strokeDasharray="5,3" />
              <text x="250" y="272" fontFamily="ui-monospace, monospace" fontSize="11" fill="rgba(255,255,255,0.85)" textAnchor="middle" fontStyle="italic">Input address &amp;</text>
              <text x="250" y="288" fontFamily="ui-monospace, monospace" fontSize="11" fill="rgba(255,255,255,0.85)" textAnchor="middle" fontStyle="italic">Map interaction</text>

              <line x1="360" y1="276" x2="418" y2="276" stroke="rgba(200,184,255,0.4)" strokeWidth="1.5" markerEnd="url(#arr-entry)" />

              <rect x="420" y="238" width="180" height="76" rx="6" fill="#C8B8FF" stroke="rgba(200,184,255,0.5)" strokeWidth="2" />
              <text x="510" y="266" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Personalised</text>
              <text x="510" y="282" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Resource List</text>
              <text x="510" y="302" fontFamily="ui-monospace, monospace" fontSize="9" fill="rgba(0,0,0,0.6)" textAnchor="middle">Action Items</text>

              <line x1="600" y1="276" x2="660" y2="276" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" markerEnd="url(#arr-branch)" />

              <line x1="660" y1="97" x2="660" y2="447" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />

              <line x1="660" y1="97" x2="700" y2="97" stroke="rgba(59,139,255,0.4)" strokeWidth="1.5" markerEnd="url(#arr-pre)" />
              <line x1="660" y1="272" x2="700" y2="272" stroke="rgba(255,140,59,0.4)" strokeWidth="1.5" markerEnd="url(#arr-during)" />
              <line x1="660" y1="447" x2="700" y2="447" stroke="rgba(59,204,122,0.4)" strokeWidth="1.5" markerEnd="url(#arr-post)" />

              <rect x="730" y="55" width="180" height="84" rx="5" fill="#3B8BFF" stroke="rgba(59,139,255,0.4)" strokeWidth="1.5" />
              <text x="820" y="82" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">"Go Bag"</text>
              <text x="820" y="97" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Checklist</text>
              <text x="820" y="114" fontFamily="ui-monospace, monospace" fontSize="8" fill="rgba(0,0,0,0.6)" textAnchor="middle">Design Opp</text>

              <line x1="910" y1="97" x2="930" y2="97" stroke="rgba(59,139,255,0.45)" strokeWidth="1.5" markerEnd="url(#arr-pre)" />

              <rect x="932" y="55" width="180" height="84" rx="5" fill="#3B8BFF" stroke="rgba(59,139,255,0.4)" strokeWidth="1.5" />
              <text x="1022" y="89" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">State</text>
              <text x="1022" y="105" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Resources</text>

              <line x1="1112" y1="97" x2="1132" y2="97" stroke="rgba(59,139,255,0.45)" strokeWidth="1.5" markerEnd="url(#arr-pre)" />

              <rect x="1134" y="55" width="180" height="84" rx="5" fill="#3B8BFF" stroke="rgba(59,139,255,0.4)" strokeWidth="1.5" />
              <text x="1224" y="89" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Insurance</text>
              <text x="1224" y="105" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Companies</text>

              <line x1="1314" y1="97" x2="1334" y2="97" stroke="rgba(59,139,255,0.45)" strokeWidth="1.5" markerEnd="url(#arr-pre)" />

              <rect x="1336" y="60" width="180" height="74" rx="37" fill="#3B8BFF" stroke="rgba(59,139,255,0.3)" strokeWidth="1.5" />
              <text x="1426" y="92" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Elderly /</text>
              <text x="1426" y="108" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Disabled</text>

              <rect x="730" y="230" width="180" height="84" rx="5" fill="#FF8C3B" stroke="rgba(255,140,59,0.4)" strokeWidth="1.5" />
              <text x="820" y="262" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Offline</text>
              <text x="820" y="277" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Maps + Routes</text>
              <text x="820" y="297" fontFamily="ui-monospace, monospace" fontSize="8" fill="rgba(0,0,0,0.6)" textAnchor="middle">Critical Feature</text>

              <line x1="910" y1="272" x2="930" y2="272" stroke="rgba(255,140,59,0.5)" strokeWidth="1.5" markerEnd="url(#arr-during)" />

              <rect x="932" y="230" width="180" height="84" rx="5" fill="#FF8C3B" stroke="rgba(255,140,59,0.4)" strokeWidth="1.5" />
              <text x="1022" y="262" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Live Updates</text>
              <text x="1022" y="278" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Tsunami Alert</text>

              <line x1="1112" y1="272" x2="1132" y2="272" stroke="rgba(255,140,59,0.5)" strokeWidth="1.5" markerEnd="url(#arr-during)" />

              <rect x="1134" y="230" width="180" height="84" rx="5" fill="#FF8C3B" stroke="rgba(255,140,59,0.4)" strokeWidth="1.5" />
              <text x="1224" y="262" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Community</text>
              <text x="1224" y="278" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Volunteers</text>

              <line x1="1314" y1="272" x2="1334" y2="272" stroke="rgba(255,140,59,0.5)" strokeWidth="1.5" markerEnd="url(#arr-during)" />

              <rect x="1336" y="230" width="180" height="84" rx="5" fill="#FF8C3B" stroke="rgba(255,140,59,0.25)" strokeWidth="1.5" opacity="0.4" />
              <text x="1426" y="266" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Push</text>
              <text x="1426" y="282" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Alerts</text>
              <text x="1426" y="301" fontFamily="ui-monospace, monospace" fontSize="8" fill="rgba(0,0,0,0.6)" textAnchor="middle">Future Phase</text>

              <rect x="730" y="405" width="180" height="84" rx="5" fill="#3BCC7A" stroke="rgba(59,204,122,0.4)" strokeWidth="1.5" />
              <text x="820" y="439" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Shelter</text>
              <text x="820" y="455" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Locations</text>

              <line x1="910" y1="447" x2="930" y2="447" stroke="rgba(59,204,122,0.5)" strokeWidth="1.5" markerEnd="url(#arr-post)" />

              <rect x="932" y="405" width="180" height="84" rx="5" fill="#3BCC7A" stroke="rgba(59,204,122,0.4)" strokeWidth="1.5" />
              <text x="1022" y="439" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Hospitals &amp;</text>
              <text x="1022" y="455" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Emergency</text>

              <line x1="1112" y1="447" x2="1132" y2="447" stroke="rgba(59,204,122,0.5)" strokeWidth="1.5" markerEnd="url(#arr-post)" />

              <rect x="1134" y="405" width="180" height="84" rx="5" fill="#3BCC7A" stroke="rgba(59,204,122,0.4)" strokeWidth="1.5" />
              <text x="1224" y="439" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Insurance</text>
              <text x="1224" y="455" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Estimator</text>
              <text x="1224" y="474" fontFamily="ui-monospace, monospace" fontSize="8" fill="rgba(0,0,0,0.6)" textAnchor="middle">Design Opp</text>

              <line x1="1314" y1="447" x2="1334" y2="447" stroke="rgba(59,204,122,0.5)" strokeWidth="1.5" markerEnd="url(#arr-post)" />

              <rect x="1336" y="405" width="180" height="84" rx="5" fill="#3BCC7A" stroke="rgba(59,204,122,0.15)" strokeWidth="1.5" opacity="0.6" />
              <text x="1426" y="439" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Elderly &amp;</text>
              <text x="1426" y="455" fontFamily="'Playfair Display', serif" fontSize="13" fontWeight="900" fill="#000" textAnchor="middle">Disabled</text>
              <text x="1426" y="474" fontFamily="ui-monospace, monospace" fontSize="8" fill="rgba(0,0,0,0.6)" textAnchor="middle">Accessibility</text>
            </svg>
          </div>

          <div style={{ marginTop: "100px" }}>
            <IAFlowDiagram seq="" />
          </div>
        </div>
      </section>

      {/* ── BUILT FROM ZERO STRIP ── Moved here under flow diagram */}
      <div style={{ background: "#0f0f0f", padding: "80px 60px", borderBottom: "1px solid #272727", position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: 60, alignItems: "center" }}>
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 24 }}>
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
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 900, color: "#0070FF", lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
                  <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#d1d5db", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 700 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: "100%", minHeight: 400 }}>
            <img src="/images/safehome/map.png" alt="SafeHome Map" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", borderRadius: 8, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" }} />
          </div>
        </div>
      </div>




      {/* ── WORKSHOP & DESIGN SYSTEM ── */}
      <section style={{ padding: "100px 60px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1600, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 20, fontWeight: 900 }}>FOUNDATION</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 60, color: "#fff" }}>Creating a path <em style={{ color: "#0070FF", fontStyle: "italic" }}>forward</em></h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginBottom: 120 }}>
            <div style={{ background: "#111", borderRadius: 12, padding: "20px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
              <img src="/images/safehome/architecture-diagram.png" alt="Workshop findings" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 700, marginBottom: 24, color: "#fff" }}>Defining the Core Needs</h3>
              <p style={{ fontSize: 16, color: "#d1d5db", lineHeight: 1.7, marginBottom: 24 }}>
                Before moving into high-fidelity design, we needed to synthesize the chaos. We ran asynchronous workshops to identify what users truly needed during critical emergency moments versus nice-to-haves:
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: 16, listStyle: "none", padding: 0 }}>
                <li style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.6, position: "relative", paddingLeft: 24 }}>
                  <span style={{ position: "absolute", left: 0, top: 0, color: "#0070FF", fontSize: "18px" }}>•</span>
                  <strong style={{ color: "#0070FF", fontWeight: 900 }}>1. Risk Visibility (Awareness):</strong> Clear, building-level disaster risk information
                </li>
                <li style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.6, position: "relative", paddingLeft: 24 }}>
                  <span style={{ position: "absolute", left: 0, top: 0, color: "#0070FF", fontSize: "18px" }}>•</span>
                  <strong style={{ color: "#0070FF", fontWeight: 900 }}>2. Safety Evaluation (Comparison):</strong> Easy side-by-side apartment safety comparison
                </li>
                <li style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.6, position: "relative", paddingLeft: 24 }}>
                  <span style={{ position: "absolute", left: 0, top: 0, color: "#0070FF", fontSize: "18px" }}>•</span>
                  <strong style={{ color: "#0070FF", fontWeight: 900 }}>3. Action & Readiness (Preparation):</strong> Simple, actionable earthquake preparedness guidance
                </li>
                <li style={{ fontSize: 15, color: "#d1d5db", lineHeight: 1.6, position: "relative", paddingLeft: 24 }}>
                  <span style={{ position: "absolute", left: 0, top: 0, color: "#0070FF", fontSize: "18px" }}>•</span>
                  <strong style={{ color: "#0070FF", fontWeight: 900 }}>4. Local Support System (Community & Alerts):</strong> Real-time alerts, resources, and tenant rights clarity
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: "120px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 40, color: "#fff" }}>Headstart to design system</h2>
            <div style={{ position: "relative" }}>
              <div style={{ background: "#111", borderRadius: 12, padding: "40px", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}>
                <img src="/images/safehome/Group 137.jpg" alt="Design System Elements" style={{ width: "100%", height: "auto", borderRadius: 8, display: "block" }} />
              </div>

              {/* STICKY NOTE */}
              <div className="sh-sticky" style={{
                background: "#bae6fd",
                padding: "24px",
                position: "absolute",
                right: "-60px",
                top: "60px",
                width: "240px",
                transform: "rotate(3deg)",
                boxShadow: "10px 10px 30px rgba(0,0,0,0.4)",
                zIndex: 20
              }}>
                <div style={{ width: 12, height: 12, background: "#0070FF", borderRadius: "50%", position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)" }} />
                <p style={{ color: "#1a1a1a", fontSize: 14, fontWeight: 600, lineHeight: 1.5 }}>
                  Getting started with the foundational Design System. Ensuring accessibility and consistent UI elements across the volunteers' work.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── VISION ── */}
      <section style={{ padding: "100px 60px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 20, fontWeight: 900 }}>09 THE VISION</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 40, color: "#fff" }}>MVP is the foundation. <em style={{ color: "#0070FF", fontStyle: "italic" }}>Here's what's next.</em></h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 2, background: "#272727" }}>
            {[
              { phase: "Phase 2", color: "#0070FF", title: "Dedicated Mobile App", text: "An ultra simplified native app designed for high stress scenarios where every second and every tap matters most." },
              { phase: "Phase 2", color: "#b8860b", title: "Personalised Preparedness", text: "Checklists and action plans tied to a user property type, rental status, and risk zone not generic advice." },
              { phase: "Phase 3", color: "#ffffff", title: "Real-Time Alerts", text: "Push notifications and in app emergency guidance triggered by live seismic activity moving SafeHome from preparedness to active response." },
              { phase: "Phase 3", color: "#0070FF", title: "Community Networks", text: "Neighbourhood level resource sharing and community preparedness maps turning individual readiness into collective resilience." },
            ].map(v => (
              <div key={v.title} className="sh-vision-card" style={{ background: "#111111", padding: "36px 28px", borderTop: `3px solid ${v.color}`, transition: "all 0.2s" }}>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d1d5db", marginBottom: 12, display: "block" }}>{v.phase}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, marginBottom: 10, lineHeight: 1.2 }}>{v.title}</h3>
                <p style={{ fontSize: 13, color: "#d1d5db", lineHeight: 1.7 }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSTRAINTS ── */}
      <section style={{ background: "#0f0f0f", padding: "100px 60px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 20, fontWeight: 900 }}>10 CONSTRAINTS</span>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 20, color: "#fff" }}>The harder parts and <em style={{ color: "#0070FF", fontStyle: "italic" }}>what I did with them</em></h2>
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
                <div style={{ width: 14, height: 14, background: "#0070FF", borderRadius: "50%", position: "absolute", top: -7, left: "50%", transform: "translateX(-50%)", boxShadow: "0 2px 4px rgba(0,0,0,0.3)" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: "#1a1a1a", marginBottom: 10, lineHeight: 1.2 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "#272727", lineHeight: 1.65, fontWeight: 500 }}>{s.text}</p>
                <p style={{ marginTop: 12, fontSize: 13, color: "#444", fontStyle: "italic", borderTop: "1px solid rgba(0,0,0,0.1)", paddingTop: 10, fontWeight: 600 }}>{s.resp}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFLECTION ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 60px" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 16, letterSpacing: "0.4em", textTransform: "uppercase", color: "#60a5fa", display: "block", marginBottom: 20, fontWeight: 900 }}>11 REFLECTION</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,5vw,68px)", fontWeight: 900, lineHeight: 1.05, marginBottom: 52, color: "#fff" }}>What I learned leading through <em style={{ color: "#0070FF", fontStyle: "italic" }}>ambiguity</em></h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 16 }}>On Leadership</h3>
            <p style={{ fontSize: 15, color: "#e5e7eb", lineHeight: 1.8, marginBottom: 16 }}>Being promoted quickly taught me that UX leadership is not about seniority. It is about making clarity where there is none. The most impactful thing I did was not designing a screen. It was creating the conditions in which better design could happen.</p>
            <p style={{ fontSize: 15, color: "#e5e7eb", lineHeight: 1.8 }}>I learned to manage upward and across translating user needs into language that resonated with product, engineering, data science, and partnership teams simultaneously.</p>
          </div>
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 16 }}>On Constraints as Craft</h3>
            <p style={{ fontSize: 15, color: "#e5e7eb", lineHeight: 1.8, marginBottom: 16 }}>Working with a volunteer team, free tools, and shifting scope forced a creative rigor. Every process I introduced had to earn its place if it did not demonstrably make things better, it would not survive.</p>
            <p style={{ fontSize: 15, color: "#e5e7eb", lineHeight: 1.8 }}>I also learned that pushing back on scope or demanding validation is not friction. It is care. The hardest professional moments here were also the most formative.</p>
          </div>
        </div>

        <div style={{ borderLeft: "4px solid #0070FF", padding: "24px 36px", marginTop: 56, background: "rgba(0,112,255,0.15)", maxWidth: 700 }}>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontStyle: "italic", lineHeight: 1.5, color: "#ffffff" }}>"The best measure of this work isn't a single screen or metric it's that a team of volunteers built something that helps real people understand a real danger to their lives, and they did it with intention, evidence, and care."</p>
        </div>
      </section>

      {/* ── EXPANDABLE: WHAT I LED ── */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "60px" }}>
        <details style={{ background: "#111", borderRadius: 8, border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
          <summary style={{ padding: "30px 40px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", listStyle: "none" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 900, color: "#fff", margin: 0 }}>What I Led: 3-Week Redesign Sprint</h2>
            <span style={{ fontSize: 24, color: "#0070FF" }}>↓</span>
          </summary>
          <div style={{ padding: "0 40px 40px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
              {[
                { phase: "Week 1", title: "Audit & Research", desc: "Accessibility audit and resident interviews." },
                { phase: "Week 2", title: "Strategy & Systems", desc: "Cross-functional workshops and design system." },
                { phase: "Week 3", title: "Execution & Pilot", desc: "End-to-end redesign and usability testing." },
              ].map(p => (
                <div key={p.phase} style={{ background: "#1a1a1a", padding: "20px", borderRadius: 4 }}>
                  <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "#0070FF", marginBottom: 8, textTransform: "uppercase" }}>{p.phase}</div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 8 }}>{p.title}</div>
                  <div style={{ fontSize: 14, color: "#888", lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </details>
      </section>

      {/* ── FOOTER ── */}
      <div style={{ background: "#0070FF", padding: "80px 60px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, fontStyle: "italic", color: "#fff", lineHeight: 1.1, maxWidth: 800, margin: "0 auto 16px" }}>
          UX that serves the public by design.
        </h2>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", fontFamily: "ui-monospace, monospace", textTransform: "uppercase" }}>
          SafeHome · Civic Tech · Nonprofit · San Francisco · 2025
        </p>
      </div>
    </main>
  );
}
