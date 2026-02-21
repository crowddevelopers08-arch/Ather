import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────
//  USING DIRECT IMAGE TAGS:
//  
//  Simply replace the placeholder URLs below with your actual
//  image paths from the public folder or external URLs
// ─────────────────────────────────────────────────────────────

const AtherBanner = ({
  // Replace these placeholder URLs with your actual image paths
  bike450Src   = "/05.png",      // ← put your Ather 450 image in public folder
  bikeRiztaSrc = "/03.png",    // ← put your Ather Rizta image in public folder
}) => {
  const [loaded, setLoaded]       = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [imageErrors, setImageErrors] = useState({});
  const [autoPlay, setAutoPlay]   = useState(true);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  // Advance bike when the scan line completes one full pass
  const handleScanComplete = () => {
    if (autoPlay) setActiveTab(prev => (prev + 1) % 2);
  };

  // Navbar shadow on scroll
  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bikes = [
    { name: "Ather 450",  tag: "PERFORMANCE",    tagline: "Built for speed, built for you",  src: bike450Src   },
    { name: "Ather Rizta", tag: "FAMILY COMFORT", tagline: "Smooth rides for everyone",       src: bikeRiztaSrc },
  ];

  const trust = [
    "Fast Delivery Guidance",
    "Easy Finance Support",
    "Genuine Ather Service",
    "Accessories Available",
  ];

  const anim = (name, delay) =>
    loaded ? { opacity: 0, animation: `${name} 0.8s ease ${delay}s forwards` } : { opacity: 0 };

  const handleImageError = (bikeName) => {
    setImageErrors(prev => ({ ...prev, [bikeName]: true }));
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#ffffff", minHeight: "100vh", overflow: "hidden", position: "relative" }}>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      {/* SVG Definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <svg id="ather-logo" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#ee5335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#ee5335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#ee5335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          
          <svg id="location-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z" stroke="#ee5335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="3" stroke="#ee5335" strokeWidth="2"/>
          </svg>

          <svg id="emissions-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3V12M12 12L15 9M12 12L9 9" stroke="#ee5335" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="15" r="6" stroke="#ee5335" strokeWidth="2"/>
          </svg>

          <svg id="connectivity-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 8C19.6569 8 21 9.34315 21 11C21 12.6569 19.6569 14 18 14" stroke="#ee5335" strokeWidth="2" strokeLinecap="round"/>
            <path d="M6 8C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14" stroke="#ee5335" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 20H16M12 14V20" stroke="#ee5335" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="11" r="2" stroke="#ee5335" strokeWidth="2"/>
          </svg>

          <svg id="charging-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2L5 12H10L8 22" stroke="#ee5335" strokeWidth="2" strokeLinecap="round"/>
            <path d="M15 2L11 12H16L14 22" stroke="#ee5335" strokeWidth="2" strokeLinecap="round"/>
            <rect x="7" y="12" width="10" height="2" fill="#ee5335"/>
          </svg>

          <svg id="check-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="8" fill="#ee5335"/>
            <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          <svg id="star-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15 9H22L16 14L19 21L12 16.5L5 21L8 14L2 9H9L12 2Z" fill="white"/>
          </svg>

          <svg id="tick-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 13L9 17L19 7" stroke="#ee5335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          <svg id="eco-leaf" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C12 22 12 15 7 10C2 5 12 2 12 2C12 2 22 5 17 10C12 15 12 22 12 22Z" stroke="#ee5335" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          <svg id="wifi-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20H12.01M2 8C4.5 5.5 8 4 12 4C16 4 19.5 5.5 22 8M5 12C7 10 9.5 9 12 9C14.5 9 17 10 19 12" stroke="#ee5335" strokeWidth="2" strokeLinecap="round"/>
          </svg>

          <svg id="bolt-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" stroke="#ee5335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </defs>
      </svg>

      {/* ── PREMIUM NAVBAR ── */}
<nav style={{
  position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
  background: navScrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
  backdropFilter: "blur(14px)",
  borderBottom: `1px solid ${navScrolled ? "rgba(238,83,53,0.25)" : "rgba(238,83,53,0.12)"}`,
  boxShadow: navScrolled ? "0 4px 28px rgba(0,0,0,0.08)" : "none",
  transition: "all 0.3s ease",
  animation: "slideDown 0.6s ease forwards",
}}>
  <div className="hero-nav-inner" style={{
    maxWidth: "1300px", margin: "0 auto", padding: "0 48px",
    height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between",
  }}>

    {/* Logo with anchor - using image */}
    <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
      <img 
        src="/Kuttukaran logo.jpg.jpeg" 
        alt="Ather Medavakkam" 
        style={{ 
          height: "50px", 
          width: "auto",
          objectFit: "contain"
        }} 
      />
    </a>

    {/* Nav Links with individual anchors */}
    <div className="hero-nav-links" style={{ display: "flex", alignItems: "center", gap: "36px" }}>
      {["Models", "Test Ride", "Service", "Reviews"].map(link => {
        // Convert link text to URL-friendly format
        const linkId = link.toLowerCase().replace(/\s+/g, '-');
        
        return (
          <a 
            key={link} 
            href={`#${linkId}`}
            style={{ textDecoration: "none" }}
          >
            <button className="nav-link">{link}</button>
          </a>
        );
      })}
    </div>

    {/* Right: Live indicator + CTA */}
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {/* Live store badge */}
      {/* <div className="hero-nav-badge" style={{ display: "flex", alignItems: "center", gap: "7px",
        background: "rgba(238,83,53,0.1)", border: "1px solid rgba(238,83,53,0.25)",
        padding: "5px 14px", borderRadius: "100px" }}>
        <div style={{
          width: "7px", height: "7px", borderRadius: "50%", background: "#ee5335",
          animation: "dotPulse 1.6s ease-in-out infinite",
        }} />
        <span style={{ fontSize: "12px", fontWeight: "700", color: "#ee5335", letterSpacing: "0.06em" }}>
          Store Open
        </span>
      </div> */}
      
      {/* Book Test Ride anchor */}
      <a href="#form" style={{ textDecoration: "none" }}>
        <button className="btn-nav">Book Test Ride</button>
      </a>
    </div>
  </div>
</nav>
      {/* ── BACKGROUND LAYERS ── */}
      <div style={{ position:"absolute", inset:0,
        backgroundImage:`linear-gradient(rgba(238,83,53,0.07) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(238,83,53,0.07) 1px, transparent 1px)`,
        backgroundSize:"60px 60px", zIndex:0 }} />
      <div style={{ position:"absolute", top:"-15%", right:"-8%", width:"600px", height:"600px",
        borderRadius:"50%", background:"radial-gradient(circle, rgba(238,83,53,0.18) 0%, transparent 70%)",
        zIndex:0, animation:"pulse 4s ease-in-out infinite" }} />
      <div style={{ position:"absolute", bottom:"-10%", left:"15%", width:"500px", height:"300px",
        borderRadius:"50%", background:"radial-gradient(circle, rgba(238,83,53,0.1) 0%, transparent 70%)", zIndex:0 }} />

      <style>{`
        @keyframes pulse    { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(1.08);opacity:0.6} }
        @keyframes slideUp  { from{transform:translateY(36px);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes slideIn  { from{transform:translateX(-36px);opacity:0} to{transform:translateX(0);opacity:1} }
        @keyframes fadeIn   { from{opacity:0} to{opacity:1} }
        @keyframes float    { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes scan     { 0%{top:0} 100%{top:100%} }
        @keyframes slideDown{ from{transform:translateY(-100%);opacity:0} to{transform:translateY(0);opacity:1} }
        @keyframes dotPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.6)} }

        .btn-primary {
          background:#ee5335; color:#fff; border:none; padding:16px 38px;
          font-family:'Outfit',sans-serif; font-weight:800; font-size:14px;
          letter-spacing:0.09em; text-transform:uppercase; cursor:pointer;
          clip-path:polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%);
          transition:all 0.2s ease;
        }
        .btn-primary:hover  { background:#cc4020; transform:translateY(-2px); box-shadow:0 8px 28px rgba(238,83,53,0.4); }

        .btn-secondary {
          background:transparent; color:#333; border:2px solid #ee5335; padding:14px 38px;
          font-family:'Outfit',sans-serif; font-weight:700; font-size:14px;
          letter-spacing:0.09em; text-transform:uppercase; cursor:pointer;
          clip-path:polygon(12px 0%,100% 0%,calc(100% - 12px) 100%,0% 100%);
          transition:all 0.2s ease;
        }
        .btn-secondary:hover { background:rgba(238,83,53,0.07); transform:translateY(-2px); }

        .tab { cursor:pointer; transition:all 0.25s ease; outline:none; }
        .tab:hover { background:rgba(238,83,53,0.07) !important; }

        .nav-link {
          color:#444; font-size:14px; font-weight:600; letter-spacing:0.04em;
          text-decoration:none; position:relative; padding:4px 0;
          background:none; border:none; cursor:pointer;
          font-family:'Outfit',sans-serif; transition:color 0.2s ease;
        }
        .nav-link::after {
          content:''; position:absolute; bottom:-2px; left:0; width:0; height:2px;
          background:#ee5335; transition:width 0.25s ease;
        }
        .nav-link:hover { color:#ee5335; }
        .nav-link:hover::after { width:100%; }

        .btn-nav {
          background:#ee5335; color:#fff; border:none; padding:9px 24px;
          font-family:'Outfit',sans-serif; font-weight:800; font-size:13px;
          letter-spacing:0.08em; text-transform:uppercase; cursor:pointer;
          clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
          transition:all 0.2s ease;
        }
        .btn-nav:hover { background:#cc4020; transform:translateY(-1px); box-shadow:0 6px 20px rgba(238,83,53,0.35); }

        .indicator-dot {
          width:8px; height:8px; border-radius:50%; border:2px solid #ee5335;
          cursor:pointer; transition:all 0.25s ease;
        }
        .indicator-dot.active { background:#ee5335; }

        .icon-svg { width:20px; height:20px; display:inline-block; }

        /* ── MOBILE RESPONSIVE ── */

        /* Tablet: 768px and below */
        @media (max-width: 768px) {
        #hero { padding-bottom: 0px !important; }
          .hero-nav-inner  { padding: 0 20px !important; }
          .hero-nav-links  { display: none !important; }
          .hero-nav-badge  { display: none !important; }
          .hero-inner-wrap { padding: 16px 20px 0 !important; min-height: unset !important; }
          .hero-grid       {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
            padding-top: 20px !important;
            padding-bottom: 24px !important;
          }
          .btn-primary, .btn-secondary { padding: 13px 26px !important; font-size: 13px !important; }
        }

        /* Small mobile: 480px and below */
        @media (max-width: 480px) {
          .hero-nav-inner  { padding: 0 14px !important; height: 58px !important; }
           .hero-inner-wrap { padding: 12px 14px 0 !important; padding-top: 58px !important; }
          .hero-heading    { font-size: 30px !important; }
          .hero-subtext    { font-size: 14px !important; }
          .hero-ctas       { gap: 10px !important; margin-bottom: 0px !important }
          .btn-primary     { padding: 12px 22px !important; font-size: 12px !important; width: 100%; justify-content: center; }
          .btn-secondary   { padding: 11px 20px !important; font-size: 12px !important; width: 100%; justify-content: center; }
          .hero-bike-img   { height: 190px !important; }
          .hero-stats-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-stats-grid > div:last-child { display: none !important; }
          .hero-address    { font-size: 11px !important; text-align: center !important; flex-wrap: wrap !important; }
          .btn-nav         { padding: 8px 16px !important; font-size: 11px !important; clip-path: polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%) !important; }
          .hero-eyebrow    { margin-bottom: 14px !important; }
          .hero-eyebrow span { font-size: 10px !important; }
          .hero-trust      { gap: 10px !important; }
          .hero-trust > div { font-size: 11px !important;
     }
        }

        /* Extra small: 360px and below */
        @media (max-width: 360px) {
          .hero-heading  { font-size: 26px !important; }
          .hero-bike-img { height: 160px !important; }
        }
      `}</style>

      {/* ── PAGE WRAPPER ── */}
      <div className="hero-inner-wrap" style={{ position:"relative", zIndex:1, maxWidth:"1300px", margin:"0 auto",
        padding:"0 48px", minHeight:"100vh", display:"flex", flexDirection:"column",
        paddingTop:"68px" }}>

        {/* ── HERO GRID (Navbar removed) ── */}
        <div className="hero-grid" style={{ flex:1, display:"grid", gridTemplateColumns:"1fr 1fr",
          gap:"48px", alignItems:"center", paddingTop:"22px", paddingBottom:"24px" }}>

          {/* ── LEFT: TEXT ── */}
          <div>
            {/* Eyebrow */}
            <div className="hero-eyebrow" style={{ display:"inline-flex", alignItems:"center", gap:"10px",
              marginBottom:"22px", ...anim("slideIn",0.2) }}>
              <div style={{ width:"36px", height:"2px", background:"#ee5335" }} />
              <span style={{ color:"#ee5335", fontSize:"12px", fontWeight:"700",
                letterSpacing:"0.22em", textTransform:"uppercase" }}>
                Chennai's Smarter EV Choice
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-heading" style={{ color:"#111", fontSize:"clamp(36px,4.2vw,62px)", fontWeight:"900",
              lineHeight:"1.0", margin:"0 0 10px 0", letterSpacing:"-0.025em", ...anim("slideUp",0.3) }}>
              Meet Your<br />
              <span style={{ color:"#ee5335" }}>Next Electric</span><br />
              Ride
            </h1>

            {/* Location pill with SVG */}
            <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", background:"rgba(238,83,53,0.1)",
              border:"1px solid rgba(238,83,53,0.3)", padding:"5px 16px", marginBottom:"20px",
              fontSize:"13px", color:"#444", fontWeight:"500", letterSpacing:"0.04em", ...anim("fadeIn",0.45) }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <use href="#location-icon" />
              </svg>
              <span>Ather in <span style={{ color:"#ee5335", fontWeight:"700" }}>Medavakkam</span></span>
            </div>

            {/* Sub-headline */}
            <p className="hero-subtext" style={{ color:"#555", fontSize:"16px", lineHeight:"1.65", margin:"0 0 32px 0",
              maxWidth:"420px", fontWeight:"400", ...anim("slideUp",0.5) }}>
              Test ride the <span style={{ color:"#ee5335", fontWeight:"600" }}>Ather 450</span> (performance) or{" "}
              <span style={{ color:"#ee5335", fontWeight:"600" }}>Ather Rizta</span> (family comfort) and switch
              to smarter, cleaner commuting — right here in Medavakkam.
            </p>

            {/* CTAs */}
            <div className="hero-ctas" style={{ display:"flex", gap:"16px", marginBottom:"40px",
              flexWrap:"wrap", ...anim("slideUp",0.62) }}>
                <a href="#form">
              <button className="btn-primary">Book a Test Ride</button>
              </a>
               <a href="#form">
              <button className="btn-secondary">Get Best On-Road Price</button>
              </a>
            </div>

            {/* Trust strip with SVG icons */}
            <div style={{ ...anim("fadeIn",0.78) }}>
              <div className="hero-trust" style={{ display:"flex", flexWrap:"wrap", gap:"18px",
                paddingTop:"22px", borderTop:"1px solid rgba(238,83,53,0.2)" }}>
                {trust.map((item, i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:"8px", whiteSpace:"nowrap" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <use href="#check-icon" />
                    </svg>
                    <span style={{ color:"#444", fontSize:"13px", fontWeight:"500" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: BIKE CARD ── */}
          <div style={{ ...anim("slideUp",0.35) }}>

            {/* Tabs */}
            <div style={{ display:"flex", marginBottom:"20px", borderBottom:"2px solid rgba(238,83,53,0.15)" }}>
              {bikes.map((bike, i) => (
                <button key={i} className="tab" onClick={() => { setActiveTab(i); setAutoPlay(false); }}
                  style={{
                    flex:1, border:"none",
                    borderBottom: activeTab === i ? "3px solid #ee5335" : "3px solid transparent",
                    background: activeTab === i ? "rgba(238,83,53,0.07)" : "transparent",
                    color: activeTab === i ? "#ee5335" : "#888",
                    padding:"12px 16px", marginBottom:"-2px",
                    fontFamily:"'Outfit',sans-serif",
                    fontWeight: activeTab === i ? "800" : "500",
                    fontSize:"13px", letterSpacing:"0.1em", textTransform:"uppercase",
                  }}>
                  {bike.name}
                  <span style={{ display:"block", fontSize:"10px", fontWeight:"400",
                    opacity:0.65, letterSpacing:"0.06em", marginTop:"2px" }}>
                    {bike.tag}
                  </span>
                </button>
              ))}
            </div>

            {/* Card */}
            <div style={{ position:"relative", background:"#ffffff",
              border:"1px solid rgba(238,83,53,0.25)", borderRadius:"4px",
              padding:"32px 28px 20px", overflow:"hidden",
              boxShadow:"0 4px 40px rgba(238,83,53,0.08)" }}>

              {/* Corner accents */}
              {[
                { top:8,    left:8,  borderTopWidth:2,    borderLeftWidth:2   },
                { top:8,    right:8, borderTopWidth:2,    borderRightWidth:2  },
                { bottom:8, left:8,  borderBottomWidth:2, borderLeftWidth:2   },
                { bottom:8, right:8, borderBottomWidth:2, borderRightWidth:2  },
              ].map((s, i) => (
                <div key={i} style={{ position:"absolute", width:"18px", height:"18px",
                  borderColor:"#ee5335", borderStyle:"solid", borderWidth:0, ...s }} />
              ))}

              {/* Scan line — switches bike on each completed pass */}
              <div
                onAnimationIteration={handleScanComplete}
                style={{ position:"absolute", left:0, right:0, height:"2px", zIndex:2,
                  background:"linear-gradient(90deg,transparent,rgba(238,83,53,0.5),transparent)",
                  animation:"scan 3s linear infinite", top:0 }}
              />

              {/* Tag badge with SVG */}
              <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", background:"#ee5335", color:"#fff",
                padding:"4px 14px", fontSize:"11px", fontWeight:"800", letterSpacing:"0.15em",
                textTransform:"uppercase", marginBottom:"16px",
                clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <use href="#star-icon" />
                </svg>
                {bikes[activeTab].tag}
              </div>

              {/* ── BIKE IMAGE USING DIRECT SRC TAG ── */}
              <div className="hero-bike-img" style={{ display:"flex", justifyContent:"center", alignItems:"center",
                height:"270px", position:"relative" }}>

                {/* Ground glow */}
                <div style={{ position:"absolute", bottom:"6px", left:"50%",
                  transform:"translateX(-50%)", width:"75%", height:"36px",
                  background:"radial-gradient(ellipse, rgba(238,83,53,0.3) 0%, transparent 70%)",
                  filter:"blur(10px)" }} />

                {/* DIRECT IMAGE TAG - NO IMPORT NEEDED */}
                {!imageErrors[bikes[activeTab].name] ? (
                  <img
                    key={activeTab}
                    src={bikes[activeTab].src}
                    alt={bikes[activeTab].name}
                    style={{
                      maxWidth:"100%",
                      maxHeight:"100%",
                      width: "auto",
                      height: "auto",
                      objectFit:"contain",
                      animation:"float 5s ease-in-out infinite, fadeIn 0.5s ease",
                      filter:"drop-shadow(0 16px 32px rgba(238,83,53,0.22))",
                      position:"relative",
                      zIndex:1,
                    }}
                    onError={() => handleImageError(bikes[activeTab].name)}
                  />
                ) : (
                  /* Fallback if image fails to load */
                  <div style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#f0fae6",
                    color: "#ee5335",
                    fontSize: "18px",
                    fontWeight: "bold",
                    borderRadius: "8px",
                  }}>
                    {bikes[activeTab].name} Image
                  </div>
                )}
              </div>

              {/* Bike name with SVG */}
              <div style={{ textAlign:"center", paddingTop:"14px" }}>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <use href="#tick-icon" />
                  </svg>
                  <span style={{ color:"#111", fontSize:"22px", fontWeight:"800", letterSpacing:"0.02em" }}>
                    {bikes[activeTab].name}
                  </span>
                </div>
                <div style={{ color:"#ee5335", fontSize:"13px", fontWeight:"500", marginTop:"4px" }}>
                  {bikes[activeTab].tagline}
                </div>
              </div>
            </div>

            {/* Auto-rotate indicator dots */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", marginTop:"14px" }}>
              {bikes.map((_, i) => (
                <button
                  key={i}
                  className={`indicator-dot${activeTab === i ? " active" : ""}`}
                  onClick={() => { setActiveTab(i); setAutoPlay(false); }}
                  style={{ background: activeTab === i ? "#ee5335" : "transparent" }}
                  aria-label={`View ${bikes[i].name}`}
                />
              ))}
              {/* Resume auto-play if paused */}
              {!autoPlay && (
                <button onClick={() => setAutoPlay(true)} style={{
                  background: "none", border: "1px solid rgba(238,83,53,0.4)",
                  borderRadius: "100px", padding: "2px 10px", fontSize: "10px",
                  fontWeight: "700", color: "#ee5335", cursor: "pointer",
                  fontFamily: "'Outfit',sans-serif", letterSpacing: "0.06em",
                }}>AUTO</button>
              )}
            </div>

            {/* Stats with SVG icons (replacing emojis) */}
            <div className="hero-stats-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px", marginTop:"12px" }}>
              {[
                { label:"Zero Emissions",     icon: "eco-leaf" },
                { label:"Smart Connectivity", icon: "wifi-icon" },
                { label:"Fast Charging",      icon: "bolt-icon" },
              ].map((s, i) => (
                <div key={i} style={{ background:"rgba(238,83,53,0.07)",
                  border:"1px solid rgba(238,83,53,0.18)", padding:"12px 10px",
                  textAlign:"center", borderRadius:"3px" }}>
                  <div style={{ marginBottom:"4px" }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <use href={`#${s.icon}`} />
                    </svg>
                  </div>
                  <div style={{ color:"#555", fontSize:"11px", fontWeight:"600", letterSpacing:"0.04em" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── ADDRESS FOOTER ── */}
        <div className="hero-address" style={{ borderTop:"1px solid rgba(238,83,53,0.2)", padding:"16px 0",
          display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <use href="#location-icon" />
          </svg>
          <span style={{ color:"#777", fontSize:"13px", fontWeight:"400", letterSpacing:"0.02em" }}>
            Velachery Main Road, Near Jayachandra, Jayachandran Nagar, Medavakkam, Chennai – 600100
          </span>
        </div>
      </div>
    </div>
  );
};

export default AtherBanner;