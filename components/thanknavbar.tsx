// components/Navbar.jsx
import { useState, useEffect } from "react";
import Link from "next/link";

const ThankNavbar = () => {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{`
        .nav-link {
          color:#444; font-size:14px; font-weight:600; letter-spacing:0.04em;
          text-decoration:none; position:relative; padding:4px 0;
          background:none; border:none; cursor:pointer;
          font-family:'Outfit', sans-serif; transition:color 0.2s ease;
        }
        .nav-link::after {
          content:''; position:absolute; bottom:-2px; left:0; width:0; height:2px;
          background:#ee5335; transition:width 0.25s ease;
        }
        .nav-link:hover { color:#ee5335; }
        .nav-link:hover::after { width:100%; }

        .btn-nav {
          background:#ee5335; color:#000; border:none; padding:9px 24px;
          font-family:'Outfit', sans-serif; font-weight:800; font-size:13px;
          letter-spacing:0.08em; text-transform:uppercase; cursor:pointer;
          clip-path:polygon(10px 0%,100% 0%,calc(100% - 10px) 100%,0% 100%);
          transition:all 0.2s ease;
        }
        .btn-nav:hover { background:#cc4020; transform:translateY(-1px); box-shadow:0 6px 20px rgba(238,83,53,0.35); }

        @keyframes dotPulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.6)} }
        @keyframes slideDown{ from{transform:translateY(-100%);opacity:0} to{transform:translateY(0);opacity:1} }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .nav-badge { display: none !important; }
        }
      `}</style>

      {/* Add Outfit font */}
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: navScrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(14px)",
        borderBottom: `1px solid ${navScrolled ? "rgba(238,83,53,0.25)" : "rgba(238,83,53,0.12)"}`,
        boxShadow: navScrolled ? "0 4px 28px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
        animation: "slideDown 0.6s ease forwards",
        fontFamily: "'Outfit', sans-serif",
      }}>
        <div style={{
          maxWidth: "1300px", margin: "0 auto", padding: "0 48px",
          height: "68px", display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

          {/* Logo */}
          <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
            <img 
              src="/Kuttukaran logo.jpg.jpeg" 
              alt="Ather Medavakkam" 
              style={{ 
                height: "50px", 
                width: "auto",
                objectFit: "contain"
              }} 
            />
          </Link>

          {/* Right: Live indicator + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {/* Live store badge */}
            <div className="nav-badge" style={{ 
              display: "flex", alignItems: "center", gap: "7px",
              background: "rgba(238,83,53,0.1)", border: "1px solid rgba(238,83,53,0.25)",
              padding: "5px 14px", borderRadius: "100px" 
            }}>
              <div style={{
                width: "7px", height: "7px", borderRadius: "50%", background: "#ee5335",
                animation: "dotPulse 1.6s ease-in-out infinite",
              }} />
              <span style={{ fontSize: "12px", fontWeight: "700", color: "#ee5335", letterSpacing: "0.06em", fontFamily: "'Outfit', sans-serif" }}>
                Store Open
              </span>
            </div>
            
            {/* Call Now button (replaced Book Test Ride) */}
            <a href="tel:+919240083602" style={{ textDecoration: "none" }}>
              <button className="btn-nav" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.8 19.8 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z"/>
                  </svg>
                  Call Now
                </span>
              </button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ThankNavbar;