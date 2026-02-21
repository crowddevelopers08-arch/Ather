import React from "react";

const WhyChooseEvox = () => {
  return (
    <section style={{
      width: "100%",
      background: "#ffffff",
      borderTop: "1px solid rgba(238,83,53,0.13)",
      overflow: "hidden",
      paddingBottom: "0px",
    }}>

      <style>{`
        @keyframes spin-slow { from { transform:rotate(0deg); } to { transform:rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }

        /* ── Buttons ── */
        .btn-expert {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 15px 36px;
          background: #ee5335;
          color: #ffffff;
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
        .btn-expert::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .btn-expert:hover { 
          background: #000000; 
          transform: translateY(-2px); 
          box-shadow: 0 8px 28px rgba(238,83,53,0.38); 
          color: #ffffff;
        }
        .btn-expert:hover::after { transform: translateX(100%); }

        .btn-directions {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: transparent;
          color: #ffffff;
          font-weight: 700;
          font-size: 13px;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          border: 2px solid rgba(238,83,53,0.7);
          cursor: pointer;
          font-family: inherit;
          clip-path: polygon(14px 0%, 100% 0%, calc(100% - 14px) 100%, 0% 100%);
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .btn-directions:hover {
          background: rgba(238,83,53,0.15);
          border-color: #ee5335;
          transform: translateY(-2px);
          color: #ffffff;
        }

        /* ── Feature headings ── */
        .feat-head { 
          font-size: clamp(16px,1.4vw,20px); 
          font-weight:800; 
          color:#000000; 
          line-height:1.25; 
          margin:0 0 10px; 
        }
        .feat-body { 
          font-size: clamp(13px,1vw,15px); 
          color:#555555; 
          line-height:1.65; 
          margin:0; 
        }

        /* ── Live badge ── */
        @keyframes dot-beat { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.6)} }
        .live-dot { animation: dot-beat 1.6s ease-in-out infinite; }

        /* ── MOBILE RESPONSIVE FIXES ── */
        @media (max-width: 768px) {
          .vid-wrap      { padding: 0 20px !important; }
          .vid-heading   { margin-bottom: 40px !important; }
          .vid-three-col {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .vid-center-col { order: -1; margin-bottom: 36px; }
          .vid-spin-ring  { width: 270px !important; height: 270px !important; }
          .vid-circle-img { width: 240px !important; height: 240px !important; }
          .vid-left-col   { gap: 24px !important; }
          .vid-left-col > div {
            text-align: left !important;
            padding-right: 0 !important;
            border-right: none !important;
            padding-left: 20px !important;
            border-left: 2px solid rgba(238,83,53,0.2) !important;
          }
          .vid-right-col  { gap: 24px !important; margin-top: 28px; }
          .vid-cta-card   {
            padding: 32px 24px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            margin-top: 48px !important;
          }
          .vid-cta-btns   { flex-direction: column !important; align-items: stretch !important; width: 100%; }
          .btn-expert, .btn-directions { width: 100% !important; justify-content: center !important; }

          /* Fix container padding */
          .section-container {
            padding: 0 24px !important;
          }

          /* Fix three-column layout */
          .three-col-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }

          /* Center column adjustments */
          .center-col {
            order: -1 !important;
            margin: 20px 0 !important;
          }

          /* Fix feature cards alignment */
          .left-features > div,
          .right-features > div {
            text-align: left !important;
            padding-left: 20px !important;
            padding-right: 0 !important;
            border-left: 2px solid rgba(238,83,53,0.2) !important;
            border-right: none !important;
          }

          /* Adjust circle size */
          .spin-ring {
            width: 280px !important;
            height: 280px !important;
          }

          .circle-image {
            width: 240px !important;
            height: 240px !important;
          }

          /* CTA card adjustments */
          .cta-card {
            margin-top: 36px !important;
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 32px 24px !important;
            gap: 24px !important;
          }

          .cta-buttons {
            width: 100% !important;
            flex-direction: column !important;
            gap: 12px !important;
          }

          .cta-buttons button {
            width: 100% !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .section-container {
            padding: 0 16px !important;
          }
          .whynewb {
            margin-top: 40px !important;
          }
          .whybottom {
            margin-bottom : 32px !important;
          }

          .spin-ring {
            width: 240px !important;
            height: 240px !important;
          }

          .circle-image {
            width: 200px !important;
            height: 200px !important;
          }

          .feat-head {
            font-size: 15px !important;
          }

          .feat-body {
            font-size: 13px !important;
          }

          .cta-card {
            padding: 24px 16px !important;
          }

          .cta-title {
            font-size: 20px !important;
          }
        }
      `}</style>

      {/* Top accent line */}
      <div className="whybottom" style={{ 
        height: "3px", 
        background: "#ee5335", 
        marginBottom: "64px" 
      }} />

      <div className="section-container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>

        {/* ── Heading ── */}
        <div className="vid-heading" style={{ textAlign: "center", marginBottom: "64px" }}>
          <span style={{
            display: "inline-block", 
            padding: "4px 16px",
            background: "#ee5335", 
            color: "#ffffff",
            fontSize: "11px", 
            fontWeight: 800, 
            letterSpacing: "0.16em", 
            textTransform: "uppercase",
            clipPath: "polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%)",
            marginBottom: "16px",
          }}>
            Why Medavakkam
          </span>
          <h2 style={{ 
            fontSize: "clamp(26px,3.5vw,48px)", 
            fontWeight: 900, 
            color: "#000000", 
            lineHeight: 1.1, 
            margin: "0 0 14px" 
          }}>
            Why Buy From Our{" "}
            <span style={{ color: "#ee5335" }}>Medavakkam Showroom?</span>
          </h2>
          <p style={{ 
            color: "#555555", 
            maxWidth: "520px", 
            margin: "0 auto", 
            fontSize: "clamp(14px,1.1vw,16px)", 
            lineHeight: 1.7 
          }}>
            A Smooth Buying Experience. No Confusion. No Pushiness.
          </p>
        </div>

        {/* ── 3-column layout ── */}
        <div className="three-col-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr auto 1fr", 
          gap: "48px", 
          alignItems: "center" 
        }}>

          {/* LEFT features */}
          <div className="left-features" style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "40px" 
          }}>
            {[
              { label: "Test Ride", rest: " Support", body: "Quick booking + guided demo to help you experience the bike before you buy." },
              { label: "Finance", rest: " Help", body: "EMI / down payment guidance with flexible options tailored to your budget." },
              { label: "Delivery", rest: " Updates", body: "Clear timelines & documentation help for a hassle-free handover." },
            ].map(({ label, rest, body }) => (
              <div key={label} style={{ 
                textAlign: "right", 
                paddingRight: "24px", 
                borderRight: "2px solid #ee5335"
              }}>
                <h4 className="feat-head">
                  <span style={{ color: "#ee5335" }}>{label}</span>{rest}
                </h4>
                <p className="feat-body">{body}</p>
              </div>
            ))}
          </div>

          {/* CENTER circle */}
          <div className="center-col" style={{ 
            position: "relative", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            flexShrink: 0 
          }}>
            {/* Spinning dashed ring */}
            <div className="animate-spin-slow spin-ring" style={{
              position: "absolute",
              width: "370px", 
              height: "370px",
              borderRadius: "50%",
              border: "2px dashed #ee5335",
            }} />
            {/* Cardinal dots */}
            {[[-50,0],[0,-50],[50,0],[0,50]].map(([x,y],i) => (
              <span key={i} style={{
                position: "absolute",
                left: `calc(50% + ${x}%)`, 
                top: `calc(50% + ${y}%)`,
                transform: "translate(-50%,-50%)",
                width: 14, 
                height: 14, 
                borderRadius: "50%",
                background: "#ee5335",
                boxShadow: "0 0 0 4px rgba(238,83,53,0.2)",
              }} />
            ))}
            {/* Glow blobs */}
            <div style={{ 
              position: "absolute", 
              top: -32, 
              right: -32, 
              width: 80, 
              height: 80, 
              borderRadius: "50%", 
              background: "rgba(238,83,53,0.12)", 
              filter: "blur(24px)" 
            }} />
            <div style={{ 
              position: "absolute", 
              bottom: -32, 
              left: -32, 
              width: 96, 
              height: 96, 
              borderRadius: "50%", 
              background: "rgba(238,83,53,0.12)", 
              filter: "blur(28px)" 
            }} />
            {/* Image container */}
            <div className="circle-image" style={{
              width: 330, 
              height: 330, 
              borderRadius: "50%",
              background: "#ffffff",
              boxShadow: "0 24px 64px rgba(0,0,0,0.10), 0 0 0 1px #ee5335",
              display: "flex", 
              alignItems: "center", 
              justifyContent: "center",
              overflow: "hidden", 
              position: "relative",
              transition: "transform 0.4s ease",
            }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            >
              <div style={{ 
                position: "absolute", 
                inset: 0, 
                background: "linear-gradient(135deg, rgba(238,83,53,0.08) 0%, transparent 60%)" 
              }} />
              <img 
                src="/athernew.png" 
                alt="Medavakkam Showroom"
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover", 
                  borderRadius: "50%", 
                  padding: 12 
                }} 
              />
            </div>
          </div>

          {/* RIGHT features */}
          <div className="right-features" style={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: "40px" 
          }}>
            {[
              { label: "On-Road Price ", rest: "Clarity", body: "Transparent break-up & offers with no hidden charges or surprises." },
              { label: "Exchange ", rest: "Assistance", body: "Evaluate & support process for your current vehicle with fair valuation." },
              { label: "After-Sales ", rest: "Support", body: "Service scheduling & reminders to keep your bike in perfect condition." },
            ].map(({ label, rest, body }) => (
              <div key={label} style={{ 
                textAlign: "left", 
                paddingLeft: "24px", 
                borderLeft: "2px solid #ee5335"
              }}>
                <h4 className="feat-head">
                  {label}<span style={{ color: "#ee5335" }}>{rest}</span>
                </h4>
                <p className="feat-body">{body}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ── CTA CARD ── */}
        <div className="cta-card" style={{
          marginTop: "72px",
          background: "#000000",
          borderRadius: "4px",
          padding: "48px 56px",
          display: "flex", 
          alignItems: "center", 
          justifyContent: "space-between", 
          flexWrap: "wrap", 
          gap: "32px",
          position: "relative", 
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(0,0,0,0.22)",
          border: "1px solid #ee5335",
        }}>
          {/* Decorative corner glow */}
          <div style={{ 
            position: "absolute", 
            top: -60, 
            right: -60, 
            width: 220, 
            height: 220, 
            borderRadius: "50%", 
            background: "rgba(238,83,53,0.15)", 
            filter: "blur(48px)", 
            pointerEvents: "none" 
          }} />
          <div style={{ 
            position: "absolute", 
            bottom: -40, 
            left: -40, 
            width: 160, 
            height: 160, 
            borderRadius: "50%", 
            background: "rgba(238,83,53,0.12)", 
            filter: "blur(36px)", 
            pointerEvents: "none" 
          }} />
          {/* Thin top accent */}
          <div style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            right: 0, 
            height: "2px", 
            background: "#ee5335"
          }} />

          {/* Left text */}
          <div style={{ position: "relative", zIndex: 1 }}>
            <p style={{ 
              margin: "0 0 6px", 
              fontSize: "11px", 
              fontWeight: 700, 
              letterSpacing: "0.18em", 
              textTransform: "uppercase", 
              color: "rgba(255,255,255,0.5)" 
            }}>
              Visit Us or Book a Consultation
            </p>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "14px", 
              flexWrap: "wrap" 
            }}>
              <h3 className="cta-title" style={{ 
                margin: 0, 
                fontSize: "clamp(22px,2.5vw,36px)", 
                fontWeight: 900, 
                color: "#ffffff", 
                lineHeight: 1.1 
              }}>
                Medavakkam, Chennai
              </h3>
              {/* Live badge */}
              <div style={{
                display: "flex", 
                alignItems: "center", 
                gap: "7px",
                background: "rgba(238,83,53,0.15)", 
                border: "1px solid #ee5335",
                padding: "5px 14px", 
                borderRadius: "100px",
              }}>
                <div className="live-dot" style={{ 
                  width: 7, 
                  height: 7, 
                  borderRadius: "50%", 
                  background: "#ee5335" 
                }} />
                <span style={{ 
                  fontSize: "12px", 
                  fontWeight: 800, 
                  color: "#ee5335", 
                  letterSpacing: "0.07em" 
                }}>Open Today</span>
              </div>
            </div>
          </div>

          {/* Right buttons */}
          <div className="cta-buttons" style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: "16px", 
            flexWrap: "wrap", 
            position: "relative", 
            zIndex: 1 
          }}>
            <button className="btn-directions">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
              </svg>
              Get Directions
            </button>
            <a href="#form" style={{ textDecoration: "none" }}>
              <button className="btn-expert">
                Talk to Our Ather Expert
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </a>
          </div>
        </div>

      </div>

      {/* Bottom accent line */}
      <div className="whynewb" style={{ 
        height: "3px", 
        background: "#ee5335", 
        marginTop: "80px" 
      }} />

    </section>
  );
};

export default WhyChooseEvox;