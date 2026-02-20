"use client";
import ThankNavbar from '@/components/thanknavbar';
import Link from 'next/link';
import Script from 'next/script';

export default function ThankYou() {
  return (
    <>
      <ThankNavbar />
      
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {'send_to': 'AW-16722442662/tQCWCN_li7kbEKbz8KU-'});
          `
        }}
      />
      
      <div className="min-h-screen bg-white text-gray-800 pt-16">
        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Success Icon */}
          <div className="text-center mb-10">
            <div className="w-20 h-20 rounded-full bg-[#f4f8ee] border-4 border-[#8cc63f]/30 flex items-center justify-center mx-auto mb-6">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-10 w-10 text-[#8cc63f]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-[#111] mb-4">
              Thank You for Choosing Ather Medavakkam!
            </h1>
            
            <p className="text-lg text-[#333] mb-8">
              Our team will contact you shortly to confirm your test ride slot and share the best available offer.
            </p>
          </div>

          {/* Contact Info Box */}
          <div className="bg-[#f4f8ee] rounded-xl p-6 md:p-8 border border-[#8cc63f]/20 mb-10">
            <h2 className="text-xl font-bold text-[#111] mb-4">
              For immediate assistance:
            </h2>
            <div className="space-y-4">
              <div>
                <a 
                  href="tel:+91 98765 43210" 
                  className="text-2xl md:text-3xl font-bold text-[#8cc63f] hover:text-[#7db535] transition-colors block"
                >
                  +91 98765 43210
                </a>
                <p className="text-[#333] text-sm mt-1">
                  Call or WhatsApp for quick responses
                </p>
              </div>
              
              <div>
                <p className="font-medium text-[#111]">Email</p>
                <p className="text-[#333]">info@athermedavakkam.in</p>
              </div>
              
              <div>
                <p className="font-medium text-[#111]">Showroom Address</p>
                <p className="text-[#333] text-sm">
                  Velachery Main Road, Near Jayachandra,<br />
                  Jayachandran Nagar, Medavakkam,<br />
                  Chennai – 600100
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-[#111] mb-6 text-center">
              What's Next?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium text-[#111]">Confirmation Call</p>
                  <p className="text-[#333] text-sm">We'll call to confirm your test ride slot within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium text-[#111]">Test Ride Experience</p>
                  <p className="text-[#333] text-sm">Guided demo of your chosen Ather model (450 or Rizta)</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium text-[#111]">On-Road Price & Offers</p>
                  <p className="text-[#333] text-sm">Transparent pricing with available exchange & finance options</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4 mt-1 flex-shrink-0">
                  4
                </div>
                <div>
                  <p className="font-medium text-[#111]">Hassle-Free Delivery</p>
                  <p className="text-[#333] text-sm">Clear timelines and documentation support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link 
              href="/" 
              className="bg-[#8cc63f] hover:bg-[#7db535] text-black font-semibold py-3 px-8 rounded-lg transition-colors text-center shadow-sm"
            >
              Return to Homepage
            </Link>
            <a 
              href="tel:+91-98765-43210" 
              className="border-2 border-[#8cc63f] text-[#8cc63f] hover:bg-[#f4f8ee] font-semibold py-3 px-8 rounded-lg transition-colors text-center"
            >
              Call Showroom
            </a>
          </div>

          {/* Showroom Hours */}
          <div className="text-center border-t border-[#8cc63f]/20 pt-6">
            <p className="text-[#333]">
              <strong>Showroom Hours:</strong> Mon-Sun: 9:00 AM – 8:00 PM | Open All Days
            </p>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="w-2 h-2 rounded-full bg-[#8cc63f] animate-pulse"></div>
              <span className="text-[#8cc63f] font-medium text-sm">Store Open Now</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-[#8cc63f]/20 py-6 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#111] font-medium">
              © 2026 Ather Medavakkam | Authorised Ather Experience Centre
            </p>
            <p className="text-[#333] text-sm mt-2">
              Test Ride • Finance • Exchange • Service • Accessories
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}