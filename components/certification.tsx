import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaInstagram, FaYoutube, FaFacebookF } from "react-icons/fa";

const FooterAther = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const quickLinks = [
    { label: "Test Ride",  desc: "Book a slot today"       },
    { label: "Models",    desc: "450 & Rizta lineup"       },
    { label: "Service",   desc: "After-sales support"      },
    { label: "Contact",   desc: "Reach the showroom"       },
  ];

  const socials = [
    { icon: <FaInstagram />, label: "Instagram" },
    { icon: <FaYoutube />,   label: "YouTube"   },
    { icon: <FaFacebookF />, label: "Facebook"  },
    { icon: <FaWhatsapp />,  label: "WhatsApp"  },
  ];

  return (
    <footer style={{
      width: "100%",
      background: "#000000",
      borderTop: "1px solid #8cc63f",
      fontFamily: "'Outfit', sans-serif",
      position: "relative",
      overflow: "hidden",
    }}>

      <style>{`
        /* ── Quick-link rows ── */
        .footer-link-row {
          display: flex; align-items: center; gap: 14px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .footer-link-row:last-child { border-bottom: none; }
        .footer-link-row:hover .fl-label { color: #8cc63f; }
        .footer-link-row:hover .fl-arrow { transform: translateX(4px); color: #8cc63f; }

        /* ── Social icon buttons ── */
        .social-btn {
          width: 42px; height: 42px;
          background: rgba(255,255,255,0.05);
          border: 1px solid #8cc63f;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px; color: #ffffff;
          cursor: pointer;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.22s ease;
        }
        .social-btn:hover {
          background: #8cc63f;
          border-color: #8cc63f;
          color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(140,198,63,0.35);
        }

        /* ── Test Ride CTA ── */
        .btn-footer-cta {
          display: inline-flex; align-items: center; gap: 10px;
          padding: 13px 32px;
          background: #8cc63f; color: #000000;
          font-weight: 900; font-size: 12px;
          letter-spacing: 0.1em; text-transform: uppercase;
          border: none; cursor: pointer; font-family: inherit;
          clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
          transition: all 0.22s ease;
          position: relative; overflow: hidden;
          white-space: nowrap;
        }
        .btn-footer-cta::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
          transform: translateX(-100%); transition: transform 0.4s ease;
        }
        .btn-footer-cta:hover { background: #7db535; transform:translateY(-2px); box-shadow:0 8px 24px rgba(140,198,63,0.38); }
        .btn-footer-cta:hover::after { transform:translateX(100%); }

        @keyframes dot-beat { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.6)} }
        .live-dot { animation: dot-beat 1.6s ease-in-out infinite; }

        /* ── MOBILE RESPONSIVE FIXES ── */
        @media (max-width: 992px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }

          .footer-col-1 {
            grid-column: 1 / -1 !important;
          }
        }

        @media (max-width: 768px) {
          .footer-container {
            padding: 56px 24px 40px !important;
          }

          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }

          .footer-brand p {
            max-width: 100% !important;
          }

          .footer-social {
            margin-bottom: 16px !important;
          }

          .footer-live-card {
            padding: 20px !important;
          }

          .btn-footer-cta {
            width: 100% !important;
            justify-content: center !important;
          }

          .footer-bottom-bar {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 16px 24px !important;
            gap: 16px !important;
          }

          .footer-bottom-links {
            flex-wrap: wrap !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .footer-container {
            padding: 48px 16px 32px !important;
          }

          .footer-logo svg {
            width: 36px !important;
            height: 36px !important;
          }

          .footer-logo-text {
            font-size: 18px !important;
          }

          .footer-logo-sub {
            font-size: 9px !important;
          }

          .footer-brand p {
            font-size: 13px !important;
            margin-bottom: 20px !important;
          }

          .footer-address {
            gap: 8px !important;
            margin-bottom: 20px !important;
          }

          .footer-address p {
            font-size: 12px !important;
          }

          .footer-contact-item {
            gap: 8px !important;
          }

          .footer-contact-item span {
            font-size: 12px !important;
          }

          .footer-contact-item small {
            font-size: 10px !important;
            margin-left: 4px !important;
          }

          .social-btn {
            width: 38px !important;
            height: 38px !important;
            font-size: 14px !important;
          }

          .footer-section-label {
            margin-bottom: 20px !important;
          }

          .footer-section-label span {
            font-size: 10px !important;
          }

          .footer-link-row {
            padding: 10px 0 !important;
          }

          .footer-link-row p:first-of-type {
            font-size: 14px !important;
          }

          .footer-link-row p:last-of-type {
            font-size: 11px !important;
          }

          .footer-live-card p:first-of-type {
            font-size: 16px !important;
          }

          .footer-live-card p:nth-of-type(2) {
            font-size: 12px !important;
          }

          .footer-live-card p:last-of-type {
            font-size: 11px !important;
          }

          .btn-footer-cta {
            padding: 12px 20px !important;
            font-size: 11px !important;
          }

          .btn-footer-cta svg {
            width: 12px !important;
            height: 12px !important;
          }

          .footer-bottom-bar p {
            font-size: 10px !important;
          }

          .footer-bottom-links span {
            font-size: 10px !important;
          }
        }
      `}</style>

      {/* Top accent line */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "3px",
        background: "#8cc63f",
      }} />

      {/* Background glow blobs - removed gradients, using solid with opacity */}
      <div style={{ position:"absolute", top:-80, right:-80, width:320, height:320, borderRadius:"50%", background:"rgba(140,198,63,0.05)", pointerEvents:"none" }} />
      <div style={{ position:"absolute", bottom:-60, left:-60, width:260, height:260, borderRadius:"50%", background:"rgba(140,198,63,0.04)", pointerEvents:"none" }} />

      {/* ═══════════ MAIN FOOTER BODY ═══════════ */}
      <div className="footer-container" style={{
        maxWidth: "1300px", margin: "0 auto",
        padding: "72px 48px 56px",
        display: "grid",
        gridTemplateColumns: "1.6fr 1fr 1.3fr",
        gap: "64px",
        position: "relative", zIndex: 1,
      }}>

        {/* ── COL 1: Brand ── */}
        <div className="footer-col-1">
          {/* Logo mark */}
           <div style={{ display:"flex", alignItems:"center", gap:"12px", marginBottom:"24px" }}>
  <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "12px" }}>
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
</div>


          <p className="footer-brand" style={{ fontSize:"14px", color:"rgba(255,255,255,0.45)", lineHeight:1.8, marginBottom:"28px", maxWidth:300 }}>
            Your authorised Ather experience centre in Medavakkam — helping Chennai ride smarter, cleaner, and farther.
          </p>

          {/* Address block */}
          <div className="footer-address" style={{ display:"flex", gap:"12px", marginBottom:"28px" }}>
            <FaMapMarkerAlt style={{ color:"#8cc63f", fontSize:15, flexShrink:0, marginTop:3 }} />
            <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.5)", lineHeight:1.75, margin:0 }}>
              Velachery Main Road, Near Jayachandra,<br/>
              Jayachandran Nagar, Medavakkam,<br/>
              Chennai – 600100
            </p>
          </div>

          {/* Phone & WA */}
          <div className="footer-contact" style={{ display:"flex", flexDirection:"column", gap:"8px", marginBottom:"32px" }}>
            {[
              { icon:<FaPhoneAlt/>, text:"+91 98765 43210", sub:"Call us · 9 AM – 8 PM" },
              { icon:<FaWhatsapp/>, text:"+91 98765 43210", sub:"WhatsApp · Instant reply" },
            ].map(({ icon, text, sub }) => (
              <div key={sub} className="footer-contact-item" style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <span style={{ color:"#8cc63f", fontSize:13 }}>{icon}</span>
                <div>
                  <span style={{ fontSize:"14px", fontWeight:700, color:"#ffffff" }}>{text}</span>
                  <span style={{ fontSize:"11px", color:"rgba(255,255,255,0.35)", marginLeft:8 }}>{sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Social row */}
          <div className="footer-social" style={{ display:"flex", gap:"10px" }}>
            {socials.map(({ icon, label }) => (
              <button key={label} className="social-btn" aria-label={label} title={label}>
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* ── COL 2: Quick Links ── */}
        <div>
          {/* Section label */}
          <div className="footer-section-label" style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"28px" }}>
            <div style={{ width:20, height:2, background:"#8cc63f", borderRadius:2 }} />
            <span style={{
              fontSize:"11px", fontWeight:800, letterSpacing:"0.16em",
              textTransform:"uppercase", color:"#8cc63f",
            }}>Quick Links</span>
          </div>

          <div>
            {quickLinks.map(({ label, desc }) => (
              <div
                key={label}
                className="footer-link-row"
                onMouseEnter={() => setHoveredLink(label)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                {/* Angular tick */}
                <div style={{
                  width:18, height:18, flexShrink:0,
                  background: hoveredLink === label ? "#8cc63f" : "rgba(140,198,63,0.15)",
                  border: "1px solid #8cc63f",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  clipPath:"polygon(4px 0%,100% 0%,calc(100% - 4px) 100%,0% 100%)",
                  transition:"background 0.2s ease",
                }}>
                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke={hoveredLink === label ? "#000000" : "#8cc63f"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div style={{ flex:1 }}>
                  <p className="fl-label" style={{ margin:0, fontSize:"15px", fontWeight:700, color:"rgba(255,255,255,0.85)", transition:"color 0.2s ease" }}>{label}</p>
                  <p style={{ margin:0, fontSize:"12px", color:"rgba(255,255,255,0.3)" }}>{desc}</p>
                </div>
                <svg className="fl-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" style={{ flexShrink:0, transition:"all 0.2s ease" }}>
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* ── COL 3: Live status + CTA ── */}
        <div>
          <div className="footer-section-label" style={{ display:"flex", alignItems:"center", gap:"10px", marginBottom:"28px" }}>
            <div style={{ width:20, height:2, background:"#8cc63f", borderRadius:2 }} />
            <span style={{
              fontSize:"11px", fontWeight:800, letterSpacing:"0.16em",
              textTransform:"uppercase", color:"#8cc63f",
            }}>Visit Us</span>
          </div>

          {/* Live status card */}
          <div className="footer-live-card" style={{
            background:"rgba(140,198,63,0.06)",
            border:"1px solid #8cc63f",
            borderRadius:4,
            padding:"24px 20px",
            marginBottom:"24px",
            position:"relative", overflow:"hidden",
          }}>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg,rgba(140,198,63,0.05) 0%,transparent 60%)", pointerEvents:"none" }} />
            <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"10px" }}>
              <div className="live-dot" style={{ width:8, height:8, borderRadius:"50%", background:"#8cc63f" }} />
              <span style={{ fontSize:"12px", fontWeight:800, color:"#8cc63f", letterSpacing:"0.08em", textTransform:"uppercase" }}>Open Now</span>
            </div>
            <p style={{ margin:"0 0 4px", fontSize:"18px", fontWeight:900, color:"#ffffff" }}>Mon – Sun</p>
            <p style={{ margin:"0 0 16px", fontSize:"14px", color:"rgba(255,255,255,0.5)" }}>9:00 AM – 8:00 PM</p>
            <div style={{ height:1, background:"rgba(140,198,63,0.15)", marginBottom:16 }} />
            <p style={{ margin:0, fontSize:"12px", color:"rgba(255,255,255,0.4)", lineHeight:1.65 }}>
              Walk in or call ahead to book your slot. Our Ather experts are ready to guide you.
            </p>
          </div>

          {/* CTA button */}
          <a href="#form">
          <button className="btn-footer-cta" style={{ width:"100%", justifyContent:"center" }}>
            Book Test Ride
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          </a>
        </div>

      </div>

      {/* ═══════════ BOTTOM BAR ═══════════ */}
<div className="footer-bottom-bar" style={{
  borderTop: "1px solid #8cc63f",
  padding: "18px 48px",
  maxWidth: "1300px", margin: "0 auto",
  display: "flex", alignItems: "center", justifyContent: "space-between",
  flexWrap: "wrap", gap: "12px",
  position: "relative", zIndex: 1,
}}>
  <p style={{ margin:0, fontSize:"12px", color:"rgba(255,255,255,0.28)", letterSpacing:"0.04em" }}>
    © 2026 Ather Medavakkam. All rights reserved.
  </p>

  {/* Privacy Policy Link */}
  <div style={{ display:"flex", alignItems:"center", gap:"8px" }}>
    <span style={{
      fontSize:"12px", color:"rgba(255,255,255,0.3)", cursor:"pointer",
      transition:"color 0.18s ease", letterSpacing:"0.04em",
    }}
      onMouseEnter={e => (e.currentTarget.style.color="#8cc63f")}
      onMouseLeave={e => (e.currentTarget.style.color="rgba(255,255,255,0.3)")}
    >Privacy Policy</span>
  </div>

  {/* Green accent dashes */}
  <div style={{ display:"flex", alignItems:"center", gap:4 }}>
    <div style={{ width:16, height:2, background:"#8cc63f", borderRadius:2 }} />
    <div style={{ width:8, height:2, background:"#8cc63f", opacity:0.5, borderRadius:2 }} />
  </div>
</div>

    </footer>
  );
};

export default FooterAther;