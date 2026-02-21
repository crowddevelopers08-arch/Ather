"use client"

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    model: "",
    datetime: "",
    landmark: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.mobile,
          treatment: formData.model, // Map model to treatment field
          preferredDateTime: formData.datetime,
          concern: formData.landmark, // Store landmark as concern/note
          source: window.location.href,
          formName: "Test Ride Booking Form",
          consent: true,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Show success toast
        toast.success(data.message || "Test ride booked successfully!");
        
        // Store lead ID in session storage for thank you page if needed
        if (data.data?.id) {
          sessionStorage.setItem('lastBookingId', data.data.id);
        }
        
        // Redirect to thank you page after a short delay
        setTimeout(() => {
          router.push('/thank-you');
        }, 500);
      } else {
        toast.error(data.error || "Failed to book test ride");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ width: "100%", fontFamily: "'Outfit', sans-serif" }}>
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#333',
            color: '#fff',
          },
          success: {
            style: {
              background: '#8cc63f',
              color: '#000',
            },
          },
          error: {
            style: {
              background: '#ff4444',
              color: '#fff',
            },
          },
        }}
      />

      <style>{`
        /* ── Form inputs ── */
        .ride-input {
          width: 100%;
          padding: 14px 20px;
          background: #fff;
          border: 1.5px solid rgba(140,198,63,0.25);
          outline: none;
          font-size: 15px;
          font-family: inherit;
          color: #111;
          border-radius: 6px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.06);
          transition: all 0.22s ease;
          box-sizing: border-box;
          appearance: none;
        }
        .ride-input::placeholder { color: #aaa; }
        .ride-input:hover {
          border-color: rgba(140,198,63,0.5);
          box-shadow: 0 4px 16px rgba(140,198,63,0.12);
        }
        .ride-input:focus {
          border-color: #8cc63f;
          box-shadow: 0 0 0 3px rgba(140,198,63,0.15), 0 4px 16px rgba(140,198,63,0.1);
        }
        .ride-input:disabled {
          background: #f5f5f5;
          cursor: not-allowed;
        }

        .ride-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #555;
          margin-bottom: 8px;
          display: block;
        }

        /* ── Primary CTA button ── */
        .btn-confirm {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 17px 56px;
          background: #8cc63f;
          color: #000;
          font-weight: 900;
          font-size: 14px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          font-family: inherit;
          clip-path: polygon(18px 0%, 100% 0%, calc(100% - 18px) 100%, 0% 100%);
          transition: all 0.22s ease;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
          text-decoration: none;
        }
        .btn-confirm:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          transform: none !important;
        }
        .btn-confirm::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 0.4s ease;
        }
        .btn-confirm:hover:not(:disabled) { background: #7db535; transform: translateY(-2px); box-shadow: 0 10px 32px rgba(140,198,63,0.42); }
        .btn-confirm:hover:not(:disabled)::after { transform: translateX(100%); }

        /* ── Contact icon boxes ── */
        .contact-icon-box {
          width: 64px; height: 64px;
          background: #8cc63f;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
          clip-path: polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%);
          font-size: 24px; color: #000;
          transition: all 0.25s ease;
          position: relative;
        }
        .contact-icon-box::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%);
        }
        .contact-card {
          text-align: center;
          max-width: 240px;
          cursor: pointer;
          transition: transform 0.3s ease;
          text-decoration: none;
          display: block;
        }
        .contact-card:hover { transform: translateY(-4px); }
        .contact-card:hover .contact-icon-box {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(140,198,63,0.4);
        }

        /* ── Select arrow ── */
        .ride-select {
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238cc63f' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          background-size: 18px;
          padding-right: 44px;
          cursor: pointer;
        }

        @keyframes dot-beat { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.6)} }
        .live-dot { animation: dot-beat 1.6s ease-in-out infinite; }

        /* ── Success message animation ── */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .success-message {
          animation: fadeInUp 0.5s ease-out;
        }

        /* ── MOBILE RESPONSIVE FIXES ── */
        @media (max-width: 768px) {
          .contact-form-container {
            padding: 60px 16px 60px !important;
          }

          .contact-form-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }

          .contact-form-field {
            grid-column: 1 / -1 !important;
          }

          .btn-confirm {
            width: 100% !important;
            padding: 17px 24px !important;
            white-space: normal !important;
            font-size: 13px !important;
          }

          .contact-showroom-section {
            flex-direction: column !important;
            gap: 40px !important;
            padding: 48px 16px !important;
          }

          .contact-card {
            max-width: 100% !important;
            width: 100% !important;
          }

          .contact-divider {
            display: none !important;
          }

          .contact-footer {
            flex-direction: column !important;
            gap: 8px !important;
            padding: 20px 16px !important;
          }
        }

        @media (max-width: 480px) {
          .contact-form-container {
            padding: 48px 12px 48px !important;
          }

          .contact-form-badge span {
            font-size: 10px !important;
            padding: 3px 12px !important;
          }

          .contact-form-heading {
            font-size: 24px !important;
          }

          .contact-form-subtitle {
            font-size: 13px !important;
            margin-bottom: 32px !important;
          }

          .ride-input {
            padding: 12px 16px !important;
            font-size: 14px !important;
          }

          .ride-label {
            font-size: 11px !important;
            margin-bottom: 6px !important;
          }

          .btn-confirm {
            padding: 15px 20px !important;
            font-size: 12px !important;
            gap: 8px !important;
          }

          .btn-confirm svg {
            width: 14px !important;
            height: 14px !important;
          }

          .contact-agreement {
            font-size: 11px !important;
          }

          .contact-card h4 {
            font-size: 10px !important;
            margin-bottom: 8px !important;
          }

          .contact-card p {
            font-size: 12px !important;
          }

          .contact-card .contact-phone {
            font-size: 14px !important;
          }

          .contact-card .contact-hours {
            font-size: 10px !important;
          }

          .contact-icon-box {
            width: 56px !important;
            height: 56px !important;
            font-size: 20px !important;
            margin-bottom: 12px !important;
          }

          .contact-footer p {
            font-size: 10px !important;
          }
        }
      `}</style>

      {/* ══════════════ TOP FORM SECTION ══════════════ */}
      <div className="contact-form-container" style={{
        background: "linear-gradient(180deg, #f4f8ee 0%, #ffffff 16%, #ffffff 100%)",
        borderTop: "1px solid rgba(140,198,63,0.13)",
        padding: "80px 16px 80px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Top accent line */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "3px",
          background: "linear-gradient(90deg,transparent,#8cc63f 30%,#b5e16a 70%,transparent)",
        }} />

        {/* Subtle corner blobs */}
        <div style={{ position:"absolute", top:-40, left:-40, width:200, height:200, borderRadius:"50%", background:"rgba(140,198,63,0.05)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-40, right:-40, width:240, height:240, borderRadius:"50%", background:"rgba(140,198,63,0.05)", pointerEvents:"none" }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: 720, margin: "0 auto" }}>

          {/* Badge */}
          <div className="contact-form-badge" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"10px", marginBottom:"16px" }}>
            <div style={{ width:24, height:3, background:"#8cc63f", borderRadius:2 }} />
            <span style={{
              display:"inline-block", padding:"4px 16px",
              background:"rgba(140,198,63,0.1)", border:"1px solid rgba(140,198,63,0.3)",
              fontSize:"11px", fontWeight:800, letterSpacing:"0.16em",
              textTransform:"uppercase", color:"#3a7d0a",
              clipPath:"polygon(8px 0%,100% 0%,calc(100% - 8px) 100%,0% 100%)",
            }}>Book a Test Ride</span>
            <div style={{ width:24, height:3, background:"#8cc63f", borderRadius:2 }} />
          </div>

          {/* Heading */}
          <h1 className="contact-form-heading" style={{ fontSize:"clamp(26px,3.5vw,44px)", fontWeight:900, margin:"0 0 14px", color:"#111", lineHeight:1.1 }}>
            Book Your Test Ride in{" "}
            <span style={{ color:"#8cc63f" }}>Medavakkam</span>
          </h1>

          <p className="contact-form-subtitle" style={{ fontSize:"clamp(14px,1.1vw,17px)", color:"#666", marginBottom:"48px", lineHeight:1.75, maxWidth:560, margin:"0 auto 48px" }}>
            Fill the form and our team will call you to confirm the test ride slot
            and share the best available offer.
          </p>

          {/* ── Form ── */}
          <form onSubmit={handleSubmit}>
            <div className="contact-form-grid" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"20px", marginBottom:"28px", textAlign:"left" }}>

              <div className="contact-form-field">
                <label className="ride-label" htmlFor="fullName">Full Name</label>
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name" 
                  className="ride-input" 
                  required 
                  disabled={isSubmitting}
                />
              </div>

              <div className="contact-form-field">
                <label className="ride-label" htmlFor="mobile">Mobile Number</label>
                <input 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  value={formData.mobile}
                  onChange={handleChange}
                  placeholder="Enter mobile number" 
                  className="ride-input" 
                  required 
                  disabled={isSubmitting}
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                />
              </div>

              <div className="contact-form-field">
                <label className="ride-label" htmlFor="model">Model Interested In</label>
                <select 
                  id="model" 
                  name="model" 
                  value={formData.model}
                  onChange={handleChange}
                  className="ride-input ride-select" 
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select Model</option>
                  <option value="ather-450">Ather 450</option>
                  <option value="ather-rizta">Ather Rizta</option>
                </select>
              </div>

              <div className="contact-form-field">
                <label className="ride-label" htmlFor="datetime">Preferred Date & Time</label>
                <input 
                  type="datetime-local" 
                  id="datetime" 
                  name="datetime" 
                  value={formData.datetime}
                  onChange={handleChange}
                  className="ride-input" 
                  required 
                  disabled={isSubmitting}
                  min={new Date().toISOString().slice(0, 16)}
                />
              </div>

              {/* Full-width landmark field */}
              <div style={{ gridColumn: "1 / -1" }}>
                <label className="ride-label" htmlFor="landmark">Location / Landmark <span style={{ fontWeight:400, textTransform:"none", letterSpacing:0, color:"#aaa" }}>(optional)</span></label>
                <input 
                  type="text" 
                  id="landmark" 
                  name="landmark" 
                  value={formData.landmark}
                  onChange={handleChange}
                  placeholder="Enter nearby landmark" 
                  className="ride-input" 
                  disabled={isSubmitting}
                />
              </div>

            </div>

            {/* ── Submit button ── */}
            <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:"14px" }}>
              <button 
                type="submit" 
                className="btn-confirm"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" fill="none" strokeDasharray="32" strokeDashoffset="8" />
                    </svg>
                    Booking...
                  </>
                ) : (
                  <>
                    Confirm My Test Ride
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="contact-agreement" style={{ fontSize:"12px", color:"#aaa", maxWidth:480, lineHeight:1.7 }}>
                By submitting, you agree to receive calls/WhatsApp updates regarding
                test rides, pricing & delivery.
              </p>
            </div>
          </form>

        </div>
      </div>

      {/* ══════════════ BOTTOM SHOWROOM SECTION ══════════════ */}
      <div className="contact-showroom-section" style={{
        background: "linear-gradient(125deg, #111111 0%, #1c2a10 50%, #0f1f06 100%)",
        padding: "64px 16px",
        display: "flex",
        justifyContent: "center",
        gap: "clamp(40px, 8vw, 120px)",
        flexWrap: "wrap",
        position: "relative",
        overflow: "hidden",
      }}>

        {/* Top accent line */}
        <div style={{ position:"absolute", top:0, left:0, right:0, height:"3px",
          background:"linear-gradient(90deg,transparent,#8cc63f 30%,#b5e16a 70%,transparent)" }} />

        {/* Corner glow blobs */}
        <div style={{ position:"absolute", top:-60, right:-60, width:220, height:220, borderRadius:"50%", background:"rgba(140,198,63,0.08)", filter:"blur(48px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-40, left:-40, width:180, height:180, borderRadius:"50%", background:"rgba(140,198,63,0.06)", filter:"blur(36px)", pointerEvents:"none" }} />

        {/* ── Location (non-clickable) ── */}
        <div className="contact-card" style={{ cursor: "default" }}>
          <div className="contact-icon-box"><FaMapMarkerAlt /></div>
          <h4 style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.16em", textTransform:"uppercase", color:"#8cc63f", margin:"0 0 10px" }}>
            Showroom Location
          </h4>
          <p style={{ fontSize:"13px", color:"rgba(255,255,255,0.65)", lineHeight:1.75, margin:0 }}>
            Velachery Main Road, Near Jayachandra,<br/>
            Jayachandran Nagar, Medavakkam,<br/>
            Chennai – 600100
          </p>
        </div>

        {/* Thin vertical dividers */}
        <div className="contact-divider" style={{ width:1, background:"rgba(140,198,63,0.18)", alignSelf:"stretch", display:"block" }} />

        {/* ── Phone (clickable) ── */}
        <a href="tel:+919876543210" className="contact-card" style={{ maxWidth:200 }}>
          <div className="contact-icon-box"><FaPhoneAlt /></div>
          <h4 style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.16em", textTransform:"uppercase", color:"#8cc63f", margin:"0 0 10px" }}>
            Call Us
          </h4>
          <p className="contact-phone" style={{ fontSize:"15px", fontWeight:800, color:"#fff", margin:"0 0 4px" }}>+91 98765 43210</p>
          <p className="contact-hours" style={{ fontSize:"12px", color:"rgba(255,255,255,0.45)", margin:0, letterSpacing:"0.06em" }}>9 AM – 8 PM, All Days</p>
        </a>

        <div className="contact-divider" style={{ width:1, background:"rgba(140,198,63,0.18)", alignSelf:"stretch", display:"block" }} />

        {/* ── WhatsApp (clickable) ── */}
        <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="contact-card" style={{ maxWidth:200 }}>
          <div className="contact-icon-box"><FaWhatsapp /></div>
          <h4 style={{ fontSize:"11px", fontWeight:800, letterSpacing:"0.16em", textTransform:"uppercase", color:"#8cc63f", margin:"0 0 10px" }}>
            WhatsApp
          </h4>
          <p className="contact-phone" style={{ fontSize:"15px", fontWeight:800, color:"#fff", margin:"0 0 4px" }}>+91 98765 43210</p>
          <p className="contact-hours" style={{ fontSize:"12px", color:"rgba(255,255,255,0.45)", margin:0, letterSpacing:"0.06em" }}>Instant Support</p>
        </a>

      </div>

    </div>
  );
};

export default ContactUs;