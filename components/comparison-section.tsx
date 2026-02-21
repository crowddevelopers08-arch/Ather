import React from "react";

const IntroSmartz = () => {
  return (
    <>
      <style>{`
        .cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: #ee5335;
          color: white;
          font-weight: 800;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          font-family: inherit;
          clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
          transition: all 0.22s ease;
          position: relative;
          overflow: hidden;
        }
        .cta-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.18) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .cta-btn-primary:hover {
          background: #cc4020;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(238,83,53,0.38);
        }
        .cta-btn-primary:hover::after { transform: translateX(100%); }

        .cta-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 13px 30px;
          background: transparent;
          color: #111;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border: 2px solid #ee5335;
          cursor: pointer;
          font-family: inherit;
          clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
          transition: all 0.22s ease;
        }
        .cta-btn-ghost:hover {
          background: rgba(238,83,53,0.1);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(238,83,53,0.2);
        }

        .feature-icon-ring {
          width: 64px; height: 64px;
          border: 1.5px solid rgba(238,83,53,0.5);
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(8px);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }
        .feature-icon-ring:hover {
          border-color: #ee5335;
          background: rgba(238,83,53,0.08);
          box-shadow: 0 0 0 6px rgba(238,83,53,0.08);
        }

        .badge-tag {
          display: inline-block;
          padding: 4px 14px;
          background: #ee5335;
          color: white;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          margin-bottom: 12px;
        }

        /* ── MOBILE RESPONSIVE FIXES ── */
        @media (max-width: 768px) {
          .section-container {
            padding: 0 24px !important;
          }

          .intro-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .intro-content {
            order: 1 !important;
          }

          .intro-image {
            order: 0 !important;
            justify-content: center !important;
          }

          .intro-image img {
            max-width: 80% !important;
            margin: 0 auto !important;
          }

          .mobile-img-show {
            display: block !important;
          }

          .desktop-img-hide {
            display: none !important;
          }

          .feature-grid {
            max-width: 100% !important;
            gap: 20px !important;
          }

          .cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
          }

          .cta-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }

          .glow-blob {
            width: 300px !important;
            height: 300px !important;
          }

          /* Adjust top/bottom spacing */
          section {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
          }

          .accent-line-top {
            margin-bottom: 32px !important;
          }

          .accent-line-bottom {
            margin-top: 32px !important;
          }
        }

        @media (max-width: 480px) {
          .section-container {
            padding: 0 16px !important;
          }

          .feature-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .feature-item {
            flex-direction: row !important;
            align-items: center !important;
            gap: 16px !important;
          }

          .feature-item p {
            font-size: 13px !important;
          }

          .feature-icon-ring {
            width: 56px !important;
            height: 56px !important;
          }

          .feature-icon-ring img {
            width: 26px !important;
            height: 26px !important;
          }

          h1 {
            font-size: 28px !important;
          }

          h2 {
            font-size: 18px !important;
            margin-bottom: 24px !important;
          }

          .badge-tag {
            font-size: 10px !important;
            padding: 3px 12px !important;
            margin-top: 20px !important;
          }

          .glow-blob {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>

      {/* ═══════════════════ ATHER 450 ═══════════════════ */}
      {/* Flow: white hero → warm left-to-right green tint */}
      <section style={{
        width: "100%",
        background: "linear-gradient(135deg, #ffffff 0%, #f2f8e8 45%, #e8f2d8 100%)",
        borderTop: "1px solid rgba(238,83,53,0.15)",
        borderBottom: "1px solid rgba(238,83,53,0.12)",
        paddingTop: "0px",
        paddingBottom: "72px",
      }}>
        {/* Subtle top accent line */}
        <div className="accent-line-top" style={{ height: "3px", background: "linear-gradient(90deg, transparent, #ee5335 30%, #ee5335 70%, transparent)", marginBottom: "56px" }} />

        <div className="section-container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 48px" }}>
          <div className="intro-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

            {/* LEFT CONTENT */}
            <div className="intro-content">
              <span className="badge-tag">Performance</span>

              <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, color: "#111", lineHeight: 1.1, margin: "0 0 8px" }}>
                Choose Your Ather
              </h1>
              <h2 style={{ fontSize: "clamp(18px,2.2vw,28px)", fontWeight: 600, color: "#ee5335", margin: "0 0 40px" }}>
                Ather 450 — Built for Pure Performance
              </h2>

              {/* Mobile image */}
              <div className="mobile-img-show" style={{ display: "none" }}>
                <img src="/4500.png" alt="Ather 450" style={{ width: "80%", maxWidth: "320px", objectFit: "contain", margin: "0 auto 32px", display: "block" }} />
              </div>

              {/* Feature grid */}
              <div className="feature-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 40px", maxWidth: "480px", marginBottom: "44px" }}>
                {[
                  { icon: "/soprts.png", label: "Sporty performance-focused ride" },
                  { icon: "/dash.png",   label: "Smart dashboard + connected features" },
                  { icon: "/brake.png",  label: "Confident braking & handling" },
                  { icon: "/city.png",   label: "Perfect for office routes & city riding" },
                ].map(({ icon, label }) => (
                  <div key={label} className="feature-item" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div className="feature-icon-ring">
                      <img src={icon} alt="" style={{ width: 30, height: 30 }} />
                    </div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: "14px", color: "#222", lineHeight: 1.4 }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="cta-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <a href="#form">
                <button className="cta-btn-primary">
                  Test Ride Ather 450
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                </a>
                <a href="#more">
                <button className="cta-btn-ghost">
                  Know More
                </button>
                </a>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="intro-image desktop-img-hide" style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}>
              {/* Soft glow blob */}
              <div className="glow-blob" style={{
                position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)",
                width: "420px", height: "420px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(238,83,53,0.13) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              <img src="/4500.png" alt="Ather 450" style={{ width: "90%", maxWidth: "520px", objectFit: "contain", position: "relative", zIndex: 1 }} />
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════ ATHER RIZTA ═══════════════════ */}
      {/* Flow: flipped gradient — dark green tint on left fading to white on right */}
      <section style={{
        width: "100%",
        background: "linear-gradient(135deg, #e4f0d4 0%, #f0f8e6 40%, #ffffff 100%)",
        borderBottom: "1px solid rgba(238,83,53,0.15)",
        paddingTop: "72px",
        paddingBottom: "0px",
      }}>
        <div className="section-container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 48px" }}>
          <div className="intro-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>

            {/* LEFT IMAGE */}
            <div className="intro-image desktop-img-hide" style={{ display: "flex", justifyContent: "flex-start", alignItems: "center", position: "relative" }}>
              <div className="glow-blob" style={{
                position: "absolute", left: "5%", top: "50%", transform: "translateY(-50%)",
                width: "420px", height: "420px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(238,83,53,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              <img src="/rixtanew.png" alt="Ather Rizta" style={{ width: "90%", maxWidth: "520px", objectFit: "contain", position: "relative", zIndex: 1 }} />
            </div>

            {/* RIGHT CONTENT */}
            <div className="intro-content">
              <span className="badge-tag">Family Comfort</span>

              <h1 style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 900, color: "#111", lineHeight: 1.1, margin: "0 0 8px" }}>
                Ather Rizta
              </h1>
              <h2 style={{ fontSize: "clamp(18px,2.2vw,28px)", fontWeight: 600, color: "#ee5335", margin: "0 0 40px" }}>
                Made for Your Family
              </h2>

              {/* Mobile image */}
              <div className="mobile-img-show" style={{ display: "none" }}>
                <img src="/rixtanew.png" alt="Ather Rizta" style={{ width: "80%", maxWidth: "320px", objectFit: "contain", margin: "0 auto 32px", display: "block" }} />
              </div>

              {/* Feature grid */}
              <div className="feature-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px 40px", maxWidth: "480px", marginBottom: "44px" }}>
                {[
                  { icon: "/family.png",  label: "Family-first comfort & seating" },
                  { icon: "/easy.png",    label: "Easy ride posture & stability" },
                  { icon: "/storage.png", label: "Storage-friendly practical design" },
                  { icon: "/smooth.png",  label: "Smooth city riding experience" },
                ].map(({ icon, label }) => (
                  <div key={label} className="feature-item" style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <div className="feature-icon-ring">
                      <img src={icon} alt="" style={{ width: 30, height: 30 }} />
                    </div>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: "14px", color: "#222", lineHeight: 1.4 }}>{label}</p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="cta-buttons" style={{ display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center" }}>
                <a href="#form">
                <button className="cta-btn-primary">
                  Explore Rizta
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                </a>
                <a href="#more">
                <button className="cta-btn-ghost">
                  Know More
                </button>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom accent line — mirrors the top of section 1, completing the green flow */}
          <div className="accent-line-bottom" style={{ height: "3px", background: "linear-gradient(90deg, transparent, #ee5335 30%, #ee5335 70%, transparent)", marginTop: "56px" }} />
        </div>
      </section>
    </>
  );
};

export default IntroSmartz;