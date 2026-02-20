import React from "react";

const MissionSection = () => {
  const features = [
    "Connected dashboard experience",
    "Smooth, silent electric ride",
    "Easy city handling & comfort",
    "Low running cost vs petrol",
    "Regenerative braking support",
    "App-based controls & updates",
    "Built for everyday reliability",
  ];

  return (
    <section style={{
      width: "100%",
      /* Flow: picks up from video.tsx's #eef6e4 bottom → fades back to white */
      background: "linear-gradient(180deg, #eef6e4 0%, #f7faf0 28%, #ffffff 100%)",
      borderTop: "1px solid rgba(140,198,63,0.13)",
      paddingTop: 0,
      paddingBottom: "0px",
      overflow: "hidden",
    }}>

      <style>{`
        .btn-walkthrough {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 36px;
          background: #8cc63f;
          color: #000;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          font-family: inherit;
          clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
          transition: all 0.22s ease;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .btn-walkthrough::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .btn-walkthrough:hover { background:#7db535; transform:translateY(-2px); box-shadow:0 8px 28px rgba(140,198,63,0.38); }
        .btn-walkthrough:hover::after { transform:translateX(100%); }

        .feat-row {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 10px 0;
          border-bottom: 1px solid rgba(140,198,63,0.1);
          transition: background 0.18s ease;
        }
        .feat-row:last-child { border-bottom: none; }

        .feat-tick {
          flex-shrink: 0;
          width: 20px; height: 20px;
          background: rgba(140,198,63,0.12);
          border: 1.5px solid #8cc63f;
          display: flex; align-items: center; justify-content: center;
          margin-top: 1px;
          clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
        }

        /* ── MOBILE RESPONSIVE FIXES ── */
        @media (max-width: 992px) {
          .mission-grid {
            grid-template-columns: 1fr !important;
            gap: 60px !important;
          }

          .mission-content {
            order: 1 !important;
          }

          .mission-images {
            order: 0 !important;
            height: 480px !important;
          }

          .trust-badge {
            top: 24px !important;
            right: 24px !important;
          }

          .cta-container {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 16px !important;
          }

          .feature-grid {
            grid-template-columns: 1fr 1fr !important;
            column-gap: 24px !important;
          }
        }

        @media (max-width: 768px) {
          .section-container {
            padding: 0 24px !important;
          }

          .mission-grid {
            gap: 48px !important;
          }

          .mission-images {
            height: 420px !important;
          }

          .image-top {
            width: 70% !important;
            height: 320px !important;
            border-top-left-radius: 60px !important;
          }

          .image-bottom {
            width: 70% !important;
            height: 320px !important;
            border-bottom-right-radius: 60px !important;
            top: 120px !important;
          }

          .feature-grid {
            grid-template-columns: 1fr !important;
            // gap: 0 !important;
            margin-bottom: 32px !important;
          }

          .glow-blob {
            width: 180px !important;
            height: 180px !important;
            top: 40% !important;
            left: 40% !important;
          }

          .cta-container {
            width: 100% !important;
          }

          .btn-walkthrough {
            width: 100% !important;
            justify-content: center !important;
          }

          .trust-badge {
            top: 16px !important;
            right: 16px !important;
          }

          .badge-ring {
            width: 100px !important;
            height: 100px !important;
          }

          .badge-ring p:first-of-type {
            font-size: 26px !important;
          }
        }

        @media (max-width: 480px) {
          .section-container {
            padding: 0 16px !important;
          }

          .mission-images {
            height: 360px !important;
          }

          .image-top {
            width: 70% !important;
            height: 260px !important;
            border-top-left-radius: 40px !important;
          }

          .image-bottom {
            width: 70% !important;
            height: 260px !important;
            border-bottom-right-radius: 40px !important;
          }

          .badge-ring {
            width: 70px !important;
            height: 70px !important;
          }

          .badge-ring p:first-of-type {
            font-size: 22px !important;
          }

          .badge-ring p:last-of-type {
            font-size: 9px !important;
          }

          .badge-label {
            font-size: 9px !important;
            margin-top: 6px !important;
          }

          .glow-blob {
            width: 140px !important;
            height: 140px !important;
          }

          .feat-row {
            padding: 8px 0 !important;
          }

          .feat-row p {
            font-size: 13px !important;
          }

          h2 {
            font-size: 24px !important;
          }

          .description {
            font-size: 14px !important;
            margin-bottom: 28px !important;
          }

          .accent-line-top {
            margin-bottom: 24px !important;
          }

          .accent-line-bottom {
            margin-top: 32px !important;
          }
        }
      `}</style>

      {/* Top accent line — connects to video.tsx bottom accent line */}
      <div className="accent-line-top" style={{ height:"3px", background:"linear-gradient(90deg,transparent,#8cc63f 30%,#b5e16a 70%,transparent)", marginBottom:"72px" }} />

      <div className="section-container" style={{ maxWidth:"1400px", margin:"0 auto", padding:"0 48px" }}>
        <div className="mission-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }}>

          {/* ── LEFT IMAGE COMPOSITION ── */}
          <div className="mission-images" style={{ position:"relative", height:"520px" }}>

            {/* Top image */}
            <div className="image-top" style={{
              position:"absolute", top:0, left:0,
              width:"62%", height:"400px",
              overflow:"hidden",
              borderTopLeftRadius:"80px",
              boxShadow:"0 20px 56px rgba(0,0,0,0.13)",
            }}>
              <img src="/0222.png" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              {/* Green tint overlay */}
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(140,198,63,0.08) 0%,transparent 60%)" }} />
            </div>

            {/* Bottom image */}
            <div className="image-bottom" style={{
              position:"absolute", bottom:0, right:0,
              width:"62%", height:"400px",
              overflow:"hidden",
              borderBottomRightRadius:"80px",
              boxShadow:"0 20px 56px rgba(0,0,0,0.13)",
            }}>
              <img src="/07.png" alt="" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(315deg,rgba(140,198,63,0.08) 0%,transparent 60%)" }} />
            </div>

            {/* 85% badge — upgraded */}
            <div className="trust-badge" style={{
              position:"absolute", top:0, right:68,
              zIndex:10,
            }}>
              {/* Outer ring */}
              <div className="badge-ring" style={{
                width:90, height:90, borderRadius:"50%",
                border:"3px solid #8cc63f",
                background:"#fff",
                boxShadow:"0 8px 32px rgba(140,198,63,0.28), 0 2px 8px rgba(0,0,0,0.08)",
                display:"flex", flexDirection:"column",
                alignItems:"center", justifyContent:"center",
                position:"relative",
              }}>
                {/* Thin inner ring */}
                <div style={{
                  position:"absolute", inset:6, borderRadius:"50%",
                  border:"1px solid rgba(140,198,63,0.25)",
                }} />
                <p style={{ margin:0, fontSize:"30px", fontWeight:900, color:"#111", lineHeight:1 }}>85%</p>
                <p style={{ margin:"3px 0 0", fontSize:"11px", fontWeight:700, color:"#8cc63f", letterSpacing:"0.1em", textTransform:"uppercase" }}>Clients</p>
              </div>
              {/* Label below badge */}
              <div className="badge-label" style={{
                marginTop:8, textAlign:"center",
                fontSize:"10px", fontWeight:700,
                color:"#555", letterSpacing:"0.1em", textTransform:"uppercase",
              }}>Happy Riders</div>
            </div>

            {/* Glow behind images */}
            <div className="glow-blob" style={{ position:"absolute", top:"30%", left:"30%", width:"240px", height:"240px", borderRadius:"50%", background:"radial-gradient(circle,rgba(140,198,63,0.12) 0%,transparent 70%)", pointerEvents:"none" }} />
          </div>

          {/* ── RIGHT CONTENT ── */}
          <div className="mission-content">

            {/* Label */}
            <div style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"18px" }}>
              <div style={{ width:28, height:3, background:"#8cc63f", borderRadius:2 }} />
              <span style={{
                display:"inline-block", padding:"4px 14px",
                background:"rgba(140,198,63,0.1)", border:"1px solid rgba(140,198,63,0.3)",
                fontSize:"11px", fontWeight:800, letterSpacing:"0.16em",
                textTransform:"uppercase", color:"#3a7d0a",
                clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
              }}>
                Key Features
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize:"clamp(26px,3vw,44px)", fontWeight:900, color:"#111", lineHeight:1.1, margin:"0 0 16px" }}>
              Smart Features That Make<br />
              <span style={{ color:"#8cc63f" }}>Ather Different</span>
            </h2>

            {/* Description */}
            <p className="description" style={{ color:"#666", maxWidth:"480px", marginBottom:"36px", fontSize:"15px", lineHeight:1.75 }}>
              Thoughtfully designed features that elevate everyday riding with
              smarter control, smoother performance, and effortless convenience.
            </p>

            {/* Feature list — 2-column grid */}
            <div className="feature-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", columnGap:"32px", marginBottom:"44px" }}>
              {features.map(feat => (
                <div key={feat} className="feat-row">
                  <div className="feat-tick">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#8cc63f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p style={{ margin:0, fontSize:"14px", fontWeight:600, color:"#222", lineHeight:1.45 }}>{feat}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="cta-container" style={{ display:"flex", alignItems:"center", gap:"20px", flexWrap:"wrap" }}>
              <a href="#form">
              <button className="btn-walkthrough">
                Get Feature Walkthrough
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              </a>
              {/* Subtle trust line */}
              <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
                <div style={{ width:7, height:7, borderRadius:"50%", background:"#8cc63f" }} />
                <span style={{ fontSize:"13px", fontWeight:600, color:"#555" }}>No obligation · Free walkthrough</span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom accent line */}
      <div className="accent-line-bottom" style={{ height:"3px", background:"linear-gradient(90deg,transparent,#8cc63f 30%,#b5e16a 70%,transparent)", marginTop:"96px" }} />

    </section>
  );
};

export default MissionSection;