import React, { useState, useEffect } from "react";

const reviews = [
  {
    image: "/testtt2.png",
    text: `Test ride experience was smooth. Explained everything clearly and helped with EMI options.`,
    name: "Customer",
    role: "Medavakkam",
    avatar: "/8143259.png",
    rating: 5,
  },
  {
    image: "/testtt1.png",
    text: `Rizta feels perfect for family use. Delivery process was quick and stress-free.`,
    name: "Customer",
    role: "Velachery Main Road",
    avatar: "/8143259.png",
    rating: 5,
  },
  {
    image: "/testtt3.png",
    text: `Best part is the guidance after buying—service and support are responsive.`,
    name: "Customer",
    role: "Chennai",
    avatar: "/8143259.png",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  const [active, setActive]       = useState(0);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      if (w < 480)       setScreenSize("xs");
      else if (w < 640)  setScreenSize("sm");
      else if (w < 768)  setScreenSize("md");
      else if (w < 1024) setScreenSize("lg");
      else               setScreenSize("desktop");
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const isMobile  = ["xs", "sm", "md"].includes(screenSize);
  const isXs      = screenSize === "xs";
  const isSm      = screenSize === "sm";
  const isDesktop = screenSize === "desktop";

  const nextReview = () => setActive(p => (p + 1) % reviews.length);
  const prevReview = () => setActive(p => (p - 1 + reviews.length) % reviews.length);
  const current    = reviews[active];

  const imgSize = () => {
    if (isXs)             return { width: "75%",  maxWidth: "220px", height: "200px" };
    if (isSm)             return { width: "80%",  maxWidth: "260px", height: "230px" };
    if (isMobile)         return { width: "85%",  maxWidth: "280px", height: "250px" };
    if (screenSize === "lg") return { width: "250px", height: "320px" };
    return                       { width: "280px", height: "350px" };
  };

  const topRadiusImg = isMobile ? "20px" : "40px";
  const cardRadius   = isMobile ? "28px" : "50px";

  return (
    <section style={{
      width: "100%",
      /* Flow: picks up from dark service section → eases to white */
      background: "linear-gradient(180deg, #f4f8ee 0%, #ffffff 18%)",
      overflow: "hidden",
      paddingTop: isMobile ? "40px" : "72px",
      paddingBottom: isMobile ? "40px" : "80px",
      position: "relative",
    }}>

      <style>{`
        /* ── Nav arrow buttons (inside green card) ── */
        .nav-btn {
          width: 44px; height: 44px;
          border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.2s ease;
          font-size: 20px; font-weight: 700; line-height: 1;
        }
        .nav-btn-prev { background: #fff; color: #000; }
        .nav-btn-prev:hover { background: #f0f0f0; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,0,0,0.18); }
        .nav-btn-next { background: #111; color: #fff; }
        .nav-btn-next:hover { background: #1c2a10; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(0,0,0,0.3); }

        /* Mobile nav buttons — smaller */
        .nav-btn-sm { width: 36px; height: 36px; font-size: 17px; }

        /* ── Dot indicators ── */
        .dot-btn {
          height: 8px; border: none; cursor: pointer; padding: 0;
          background: #d1d5db; transition: all 0.25s ease;
          clip-path: polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%);
        }
        .dot-btn.active { background: #8cc63f; }

        /* ── MOBILE RESPONSIVE FIXES ── */
        @media (max-width: 768px) {
          .testimonial-container {
            padding: 0 20px !important;
          }

          .testimonial-heading {
            margin-bottom: 60px !important;
          }

          .testimonial-card {
            flex-direction: column !important;
            align-items: center !important;
            padding: 0 0 28px 0 !important;
            min-height: auto !important;
          }

          .testimonial-image-wrapper {
            margin-top: -40px !important;
            margin-bottom: 20px !important;
            border-top-left-radius: 20px !important;
            overflow: hidden !important;
            box-shadow: 0 8px 28px rgba(0,0,0,0.18) !important;
          }

          .testimonial-content {
            margin-left: 0 !important;
            padding: 0 20px !important;
            width: 100% !important;
          }

          .testimonial-quote {
            font-size: 14px !important;
            margin: 24px 0 18px 0 !important;
            padding-right: 16px !important;
          }

          .testimonial-stars {
            font-size: 15px !important;
            margin-bottom: 14px !important;
          }

          .testimonial-profile {
            margin-bottom: 20px !important;
          }

          .testimonial-nav-mobile {
            display: flex !important;
            flex-direction: row !important;
            justify-content: center !important;
            gap: 12px !important;
            padding-right: 16px !important;
          }

          .testimonial-nav-desktop {
            display: none !important;
          }

          .testimonial-dots {
            margin-top: 28px !important;
          }
        }

        @media (max-width: 480px) {
          .testimonial-container {
            padding: 0 16px !important;
          }

          .testimonial-heading h2 {
            font-size: 22px !important;
          }

          
          .testimonial-heading {
           padding-top: 20px !important;
          }


          .testimonial-image-wrapper {
            width: 75% !important;
            max-width: 220px !important;
            height: 200px !important;
            margin-top: -35px !important;
          }

          .testimonial-quote {
            font-size: 13px !important;
          }

          .testimonial-stars {
            font-size: 14px !important;
          }

          .testimonial-profile img {
            width: 36px !important;
            height: 36px !important;
          }

          .testimonial-profile p:first-of-type {
            font-size: 13px !important;
          }

          .testimonial-profile p:last-of-type {
            font-size: 11px !important;
          }

          .testimonial-nav-mobile button {
            width: 36px !important;
            height: 36px !important;
            font-size: 17px !important;
          }

          .testimonial-counter {
            font-size: 11px !important;
          }
        }

        @media (min-width: 769px) {
          .testimonial-nav-mobile {
            display: none !important;
          }
          
          .testimonial-nav-desktop {
            display: flex !important;
          }
        }
      `}</style>

      {/* Top accent line — connects from service section's bottom green line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg,transparent,#8cc63f 30%,#b5e16a 70%,transparent)",
      }} />

      <div className="testimonial-container" style={{ maxWidth: "1200px", margin: "0 auto", padding: isMobile ? "0 16px" : "0 48px", position: "relative" }}>

        {/* ── Section heading ── */}
        <div className="testimonial-heading" style={{ marginBottom: isMobile ? "64px" : "96px" }}>

          {/* Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
            <div style={{ width: 24, height: 3, background: "#8cc63f", borderRadius: 2 }} />
            <span style={{
              display: "inline-block", padding: "4px 14px",
              background: "rgba(140,198,63,0.1)", border: "1px solid rgba(140,198,63,0.3)",
              fontSize: "11px", fontWeight: 800, letterSpacing: "0.16em",
              textTransform: "uppercase", color: "#3a7d0a",
              clipPath: "polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
            }}>
              Testimonials
            </span>
          </div>

          <h2 style={{
            fontSize: isXs ? "22px" : isSm ? "24px" : isMobile ? "28px" : isDesktop ? "42px" : "34px",
            fontWeight: 900, margin: 0, lineHeight: 1.15, color: "#111",
          }}>
            Real Riders.{" "}
            <span style={{ color: "#8cc63f" }}>Real Feedback.</span>
          </h2>
        </div>

        {/* ── Green testimonial card ── */}
        <div className="testimonial-card" style={{
          position: "relative",
          background: "linear-gradient(125deg, #8cc63f 0%, #7db535 55%, #6aa828 100%)",
          width: "100%",
          borderTopLeftRadius: cardRadius,
          borderBottomRightRadius: cardRadius,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "center" : "stretch",
          minHeight: isMobile ? "auto" : screenSize === "lg" ? "320px" : "350px",
          padding: isMobile ? "0 0 28px 0" : "0",
          boxSizing: "border-box",
          boxShadow: "0 24px 64px rgba(140,198,63,0.28), 0 4px 16px rgba(0,0,0,0.08)",
          overflow: "visible",
        }}>

          {/* Decorative shimmer on card */}
          <div style={{
            position: "absolute", inset: 0,
            borderTopLeftRadius: cardRadius, borderBottomRightRadius: cardRadius,
            background: "linear-gradient(135deg, rgba(255,255,255,0.12) 0%, transparent 50%)",
            pointerEvents: "none", overflow: "hidden",
          }} />

          {/* ── Image card ── */}
          {isMobile ? (
            <div className="testimonial-image-wrapper" style={{
              ...imgSize(),
              background: "#fff",
              borderTopLeftRadius: topRadiusImg,
              overflow: "hidden",
              boxShadow: "0 8px 28px rgba(0,0,0,0.18)",
              marginTop: isXs ? "-40px" : isSm ? "-44px" : "-48px",
              marginBottom: "20px",
              flexShrink: 0,
            }}>
              <img src={current.image} alt="Client" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          ) : (
            <div style={{
              position: "absolute",
              left: screenSize === "lg" ? "30px" : "40px",
              top: screenSize === "lg" ? "-55px" : "-80px",
              ...imgSize(),
              background: "#fff",
              borderTopLeftRadius: topRadiusImg,
              overflow: "hidden",
              boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              flexShrink: 0,
            }}>
              <img src={current.image} alt="Client" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}

          {/* ── Text content ── */}
          <div className="testimonial-content" style={{
            color: "#fff",
            position: "relative",
            width: "100%",
            marginLeft: isMobile ? 0 : screenSize === "lg" ? "295px" : "340px",
            paddingRight: isMobile ? 0 : screenSize === "lg" ? "72px" : "96px",
            paddingLeft: isMobile ? "20px" : "0",
            paddingTop: isMobile ? "0" : "36px",
            paddingBottom: isMobile ? "0" : "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            boxSizing: "border-box",
          }}>

            {/* Quote mark */}
            <div style={{
              position: "absolute",
              top: isMobile ? "-24px" : "28px",
              left: isMobile ? "14px" : "0",
              fontSize: isMobile ? "72px" : "96px",
              fontFamily: "Georgia, serif",
              color: "rgba(255,255,255,0.18)",
              lineHeight: 1,
              userSelect: "none",
              pointerEvents: "none",
            }}>"</div>

            {/* Review text */}
            <p className="testimonial-quote" style={{
              fontSize: isXs ? "13px" : isMobile ? "14px" : screenSize === "lg" ? "15px" : "17px",
              lineHeight: 1.75,
              maxWidth: "520px",
              margin: `${isMobile ? "24px" : "0"} 0 18px 0`,
              paddingRight: isMobile ? "16px" : "0",
              fontStyle: "italic",
            }}>
              {current.text}
            </p>

            {/* Stars */}
            <div className="testimonial-stars" style={{ display: "flex", gap: "3px", marginBottom: "14px" }}>
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{
                  fontSize: isMobile ? "15px" : "18px",
                  color: i < current.rating ? "#fff" : "rgba(255,255,255,0.3)",
                }}>★</span>
              ))}
            </div>

            {/* Profile */}
            <div className="testimonial-profile" style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
              <img
                src={current.avatar}
                alt=""
                style={{
                  width: isXs ? "36px" : "44px",
                  height: isXs ? "36px" : "44px",
                  objectFit: "contain",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  flexShrink: 0,
                  border: "2px solid rgba(255,255,255,0.4)",
                }}
              />
              <div>
                <p style={{ fontWeight: 800, fontSize: isXs ? "13px" : "15px", margin: 0, letterSpacing: "0.02em" }}>
                  {current.name}
                </p>
                <p style={{ fontSize: isXs ? "11px" : "12px", opacity: 0.75, margin: 0, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                  {current.role}
                </p>
              </div>
            </div>

            {/* ── Nav buttons ── */}
            <div className={isMobile ? "testimonial-nav-mobile" : "testimonial-nav-desktop"} style={
              isMobile
                ? { display: "flex", flexDirection: "row", justifyContent: "center", gap: "12px", paddingRight: "16px" }
                : { position: "absolute", right: isDesktop ? 40 : 28, top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "10px" }
            }>
              <button
                onClick={prevReview}
                aria-label="Previous review"
                className={`nav-btn nav-btn-prev${isMobile ? " nav-btn-sm" : ""}`}
              >
                ‹
              </button>
              <button
                onClick={nextReview}
                aria-label="Next review"
                className={`nav-btn nav-btn-next${isMobile ? " nav-btn-sm" : ""}`}
              >
                ›
              </button>
            </div>

          </div>
        </div>

        {/* ── Dot indicators (all screens) ── */}
        <div className="testimonial-dots" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "28px" }}>
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`dot-btn${active === i ? " active" : ""}`}
              style={{ width: active === i ? "28px" : "10px" }}
            />
          ))}
        </div>

        {/* Review counter */}
        <p className="testimonial-counter" style={{ textAlign: "center", marginTop: "10px", fontSize: "12px", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em" }}>
          {active + 1} / {reviews.length}
        </p>

      </div>

      {/* Bottom accent line */}
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "3px",
        background: "linear-gradient(90deg,transparent,#8cc63f 30%,#b5e16a 70%,transparent)",
      }} />

    </section>
  );
};

export default TestimonialsSection;