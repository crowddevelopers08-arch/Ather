import React from "react";

const leftItems = [
  {
    icon: "/13208889.png",
    title: "Periodic service guidance",
    body: "Regular reminders and expert advice to keep your scooter in top condition.",
  },
  {
    icon: "/17278025.png",
    title: "Maintenance & check-up scheduling",
    body: "Easy booking for routine check-ups and maintenance appointments.",
  },
  {
    icon: "/4404874.png",
    title: "Genuine parts & service support",
    body: "Authentic spare parts and professional service for lasting performance.",
  },
];

const rightItems = [
  {
    icon: "/17310154.png",
    title: "Accessories & add-ons assistance",
    body: "Help with choosing and installing the perfect accessories for your ride.",
  },
  {
    icon: "/17402944.png",
    title: "Battery / performance check support",
    body: "Regular battery health monitoring and performance optimization.",
  },
  {
    icon: "/12100239.png",
    title: "General queries & ride tips",
    body: "Always here to answer your questions and share helpful riding advice.",
  },
];

const EScooterAdvantages = () => {
  return (
    <section style={{ width: "100%", position: "relative", overflow: "hidden" }}>

      <style>{`
        /* Parallax bg */
        .service-bg {
          position: absolute;
          inset: 0;
          background-image: url('/serviceback.png');
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
          filter: brightness(0.32);
        }

        /* Dark overlay */
        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(0,0,0,0.72) 0%,
            rgba(10,20,5,0.78) 50%,
            rgba(0,0,0,0.82) 100%
          );
        }

        /* Top fade — smooths transition from results-section's white bottom */
        .service-top-fade {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 80px;
          background: linear-gradient(180deg, rgba(238,246,228,0.18) 0%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }

        /* ── Feature icon box ── */
        .icon-box {
          width: 52px; height: 52px;
          background: #8cc63f;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          position: relative;
        }
        .icon-box::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 60%);
        }
        .icon-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(140,198,63,0.4);
        }

        /* ── Primary CTA button ── */
        .btn-service {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 16px 44px;
          background: #8cc63f;
          color: #000;
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          font-family: inherit;
          clip-path: polygon(16px 0%, 100% 0%, calc(100% - 16px) 100%, 0% 100%);
          transition: all 0.22s ease;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }
        .btn-service::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .btn-service:hover { background: #7db535; transform: translateY(-2px); box-shadow: 0 10px 32px rgba(140,198,63,0.45); }
        .btn-service:hover::after { transform: translateX(100%); }

        /* ── Ghost CTA button ── */
        .btn-service-ghost {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 36px;
          background: transparent;
          color: #fff;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border: 2px solid rgba(140,198,63,0.6);
          cursor: pointer;
          font-family: inherit;
          clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .btn-service-ghost:hover {
          background: rgba(140,198,63,0.12);
          border-color: #8cc63f;
          transform: translateY(-2px);
        }

        /* ── MOBILE RESPONSIVE FIXES ── */
        @media (max-width: 992px) {
          .service-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }

          .service-center-col {
            order: -1 !important;
            margin: 20px 0 !important;
          }

          .service-feature-item {
            max-width: 100% !important;
          }

          .service-cta-buttons {
            flex-direction: column !important;
            align-items: stretch !important;
            width: 100% !important;
            padding: 0 20px !important;
          }

          .service-cta-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }

          .service-center-image {
            max-width: 280px !important;
            height: 280px !important;
          }

          .service-glow-ring {
            inset: -15px !important;
          }
        }

        @media (max-width: 768px) {
          .service-container {
            padding: 0 24px !important;
          }

          .service-section-padding {
            padding: 60px 0 70px !important;
          }

          .service-label {
            margin-bottom: 12px !important;
          }

          .service-heading {
            font-size: clamp(22px, 5vw, 32px) !important;
            margin-bottom: 10px !important;
          }

          .service-subtitle {
            margin-bottom: 48px !important;
          }

          .service-grid {
            gap: 32px !important;
          }

          .service-features-col {
            gap: 28px !important;
          }

          .service-feature-item {
            gap: 14px !important;
          }

          .icon-box {
            width: 48px !important;
            height: 48px !important;
          }

          .icon-box img {
            width: 22px !important;
            height: 22px !important;
          }

          .service-feature-title {
            font-size: 15px !important;
            margin-bottom: 4px !important;
          }

          .service-feature-body {
            font-size: 12px !important;
            max-width: 100% !important;
          }

          .service-center-image {
            max-width: 260px !important;
            height: 260px !important;
          }

          .service-cta-buttons {
            margin-top: 48px !important;
            gap: 16px !important;
          }

          .btn-service,
          .btn-service-ghost {
            padding: 14px 32px !important;
            font-size: 12px !important;
          }
        }

        @media (max-width: 480px) {
          .service-container {
            padding: 0 16px !important;
          }

          .service-section-padding {
            padding: 48px 0 60px !important;
          }

          .service-heading {
            font-size: 20px !important;
          }

          .service-subtitle {
            font-size: 13px !important;
            margin-bottom: 36px !important;
          }

          .service-grid {
            gap: 24px !important;
          }

          .service-features-col {
            gap: 20px !important;
          }

          .service-feature-item {
            gap: 12px !important;
          }

          .icon-box {
            width: 42px !important;
            height: 42px !important;
          }

          .icon-box img {
            width: 20px !important;
            height: 20px !important;
          }

          .service-feature-title {
            font-size: 14px !important;
          }

          .service-feature-body {
            font-size: 11px !important;
            line-height: 1.5 !important;
          }

          .service-center-image {
            max-width: 220px !important;
            height: 220px !important;
          }

          .service-cta-buttons {
            margin-top: 36px !important;
            padding: 0 10px !important;
          }

          .btn-service,
          .btn-service-ghost {
            padding: 12px 24px !important;
            font-size: 11px !important;
            gap: 8px !important;
          }

          .btn-service svg,
          .btn-service-ghost svg {
            width: 12px !important;
            height: 12px !important;
          }
        }
      `}</style>

      {/* Parallax background + overlays */}
      <div className="service-bg" />
      <div className="service-overlay" />
      <div className="service-top-fade" />

      {/* Top green accent line — picks up from results-section bottom line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px", zIndex: 5,
        background: "linear-gradient(90deg,transparent,#8cc63f 30%,#b5e16a 70%,transparent)",
      }} />

      {/* Content */}
      <div className="service-section-padding" style={{ position: "relative", zIndex: 10, width: "100%", padding: "80px 0 88px" }}>
        <div className="service-container" style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 48px" }}>

          {/* ── Label ── */}
          <div className="service-label" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
            <div style={{ width: 28, height: 2, background: "#8cc63f", borderRadius: 2 }} />
            <span style={{
              display: "inline-block", padding: "4px 16px",
              background: "rgba(140,198,63,0.15)", border: "1px solid rgba(140,198,63,0.35)",
              fontSize: "11px", fontWeight: 800, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#8cc63f",
              clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
            }}>
              Service &amp; Support
            </span>
            <div style={{ width: 28, height: 2, background: "#8cc63f", borderRadius: 2 }} />
          </div>

          {/* ── Heading ── */}
          <h2 className="service-heading" style={{
            fontSize: "clamp(24px,3vw,44px)", fontWeight: 900, textAlign: "center",
            color: "#fff", lineHeight: 1.15, margin: "0 0 14px",
          }}>
            We Don't Stop at Delivery —{" "}
            <span style={{ color: "#8cc63f" }}>We Support You After Purchase Too</span>
          </h2>

          {/* ── Trust line ── */}
          <p className="service-subtitle" style={{
            textAlign: "center", color: "rgba(255,255,255,0.6)",
            fontSize: "clamp(14px,1.1vw,17px)", fontStyle: "italic",
            marginBottom: "64px",
          }}>
            You ride.{" "}
            <span style={{ color: "#8cc63f", fontWeight: 700, fontStyle: "normal" }}>
              We handle the support.
            </span>
          </p>

          {/* ── 3-column grid ── */}
          <div className="service-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: "48px", alignItems: "start" }}>

            {/* LEFT */}
            <div className="service-features-col" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {leftItems.map(({ icon, title, body }) => (
                <div key={title} className="service-feature-item" style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                  <div className="icon-box">
                    <img src={icon} alt="" style={{ width: 26, height: 26, filter: "brightness(0) invert(0)" }} />
                  </div>
                  <div>
                    <h4 className="service-feature-title" style={{ margin: "0 0 6px", fontSize: "clamp(14px,1.1vw,17px)", fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
                      {title}
                    </h4>
                    <p className="service-feature-body" style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, maxWidth: 260 }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CENTER image */}
            <div className="service-center-col" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexShrink: 0 }}>
              {/* Glow ring */}
              <div style={{ position: "relative" }}>
                <div className="service-glow-ring" style={{
                  position: "absolute", inset: -20, borderRadius: "20px",
                  background: "radial-gradient(circle, rgba(140,198,63,0.18) 0%, transparent 70%)",
                  filter: "blur(16px)",
                  pointerEvents: "none",
                }} />
                {/* Green border frame */}
                <div style={{
                  position: "absolute", inset: -4,
                  border: "1.5px solid rgba(140,198,63,0.35)",
                  borderRadius: "20px",
                  pointerEvents: "none",
                }} />
                <img
                  src="/08.png"
                  alt="E-scooter service support"
                  className="service-center-image"
                  style={{
                    width: "300px", maxWidth: 400, height: 340,
                    borderRadius: "16px",
                    objectFit: "cover",
                    display: "block",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                    transition: "transform 0.4s ease",
                    position: "relative",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            </div>

            {/* RIGHT */}
            <div className="service-features-col" style={{ display: "flex", flexDirection: "column", gap: "36px" }}>
              {rightItems.map(({ icon, title, body }) => (
                <div key={title} className="service-feature-item" style={{ display: "flex", alignItems: "flex-start", gap: "18px" }}>
                  <div className="icon-box">
                    <img src={icon} alt="" style={{ width: 26, height: 26, filter: "brightness(0) invert(0)" }} />
                  </div>
                  <div>
                    <h4 className="service-feature-title" style={{ margin: "0 0 6px", fontSize: "clamp(14px,1.1vw,17px)", fontWeight: 800, color: "#fff", lineHeight: 1.3 }}>
                      {title}
                    </h4>
                    <p className="service-feature-body" style={{ margin: 0, fontSize: "13px", color: "rgba(255,255,255,0.55)", lineHeight: 1.65, maxWidth: 260 }}>
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* ── CTA buttons ── */}
          <div className="service-cta-buttons" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "20px", flexWrap: "wrap", marginTop: "64px" }}>
            <a href="tel: +">
            <button className="btn-service-ghost">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.8 19.8 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
              </svg>
              Call Showroom
            </button>
            </a>
            <a href="#form">
            <button className="btn-service">
              Book Service / Support
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom green accent line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", zIndex: 5,
        background: "linear-gradient(90deg,transparent,#8cc63f 30%,#b5e16a 70%,transparent)",
      }} />

    </section>
  );
};

export default EScooterAdvantages;