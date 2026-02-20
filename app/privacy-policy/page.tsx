"use client";

import ThankNavbar from "@/components/thanknavbar";

export default function PrivacyPolicy() {
  return (
    <>
    <ThankNavbar />

    <div className="bg-white text-gray-800 px-4 py-12 mt-20 max-[470px]:mt-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 border-b border-[#8cc63f]/20 pb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#111] mb-3">
            Privacy Policy
          </h1>
          <div className="flex items-center text-[#8cc63f]">
            <span>Last updated: </span>
            <span className="ml-2 font-medium">
              {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
        </div>

        {/* Introduction */}
        <section className="mb-10 bg-[#f4f8ee] p-6 rounded-lg border border-[#8cc63f]/20">
          <p className="text-[#333] leading-relaxed">
            At <span className="font-bold text-[#8cc63f]">Ather Medavakkam</span>, we are committed to protecting your privacy and personal information. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website or use our services.
          </p>
        </section>

        {/* Information We Collect */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              1
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              Information We Collect
            </h2>
          </div>
          <p className="text-[#333] mb-4 leading-relaxed">
            We may collect the following types of information:
          </p>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#8cc63f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-[#333]">
                <strong className="text-[#8cc63f]">Personal Information:</strong> Name, email address, phone number, and other contact details you provide when booking test rides or contacting us.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#8cc63f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-[#333]">
                <strong className="text-[#8cc63f]">Vehicle Preferences:</strong> Model interest (Ather 450 / Rizta), preferred test ride timing, and other preferences you share.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#8cc63f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-[#333]">
                <strong className="text-[#8cc63f]">Usage Data:</strong> Information about how you use our website, including IP address, browser type, pages visited, and time spent on our site.
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-2 h-2 bg-[#8cc63f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-[#333]">
                <strong className="text-[#8cc63f]">Communication Data:</strong> Records of your communications with us, including emails, messages, and phone calls.
              </span>
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              2
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              How We Use Your Information
            </h2>
          </div>
          <p className="text-[#333] mb-4 leading-relaxed">
            We use your information for the following purposes:
          </p>
          <ul className="space-y-2">
            {[
              "To schedule and manage your test ride appointments",
              "To provide information about Ather models and offers",
              "To communicate with you about test rides and deliveries",
              "To improve our website and showroom services",
              "To comply with legal obligations",
              "To send important updates about Ather products and service"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#f4f8ee] border border-[#8cc63f]/20 text-[#8cc63f] flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-[#333]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Data Protection */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              3
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              Data Protection
            </h2>
          </div>
          <div className="bg-[#f4f8ee] p-5 rounded-lg border border-[#8cc63f]/20">
            <p className="text-[#333] leading-relaxed">
              We implement appropriate security measures to protect your personal information from unauthorized access, 
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic 
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </section>

        {/* Data Sharing */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              4
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              Data Sharing
            </h2>
          </div>
          <p className="text-[#333] mb-4 leading-relaxed">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul className="space-y-2">
            {[
              "Ather Energy for vehicle delivery and service coordination",
              "Service providers who assist in our operations (with confidentiality agreements)",
              "Legal authorities when required by law or to protect our rights"
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-[#8cc63f]/20 mr-3 mt-1 flex-shrink-0"></div>
                <span className="text-[#333]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Your Rights */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              5
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              Your Rights
            </h2>
          </div>
          <p className="text-[#333] mb-4 leading-relaxed">
            You have the right to:
          </p>
          <div className="bg-[#f4f8ee] p-5 rounded-lg border border-[#8cc63f]/20">
            <ul className="space-y-3">
              {[
                "Access the personal information we hold about you",
                "Request correction of inaccurate or incomplete information",
                "Request deletion of your personal information",
                "Object to or restrict processing of your information",
                "Withdraw consent at any time"
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-[#8cc63f] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-[#333]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-[#333] mt-4 leading-relaxed italic">
            To exercise these rights, please contact us using the information below.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              6
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              Cookies
            </h2>
          </div>
          <div className="bg-[#f4f8ee] p-5 rounded-lg border border-[#8cc63f]/20">
            <p className="text-[#333] leading-relaxed">
              Our website uses cookies to improve your browsing experience. Cookies are small files stored on your device 
              that help us understand how you use our site. You can disable cookies through your browser settings, but 
              this may affect your ability to use some features of our website.
            </p>
          </div>
        </section>

        {/* Third-Party Links */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              7
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              Third-Party Links
            </h2>
          </div>
          <div className="bg-[#f4f8ee] p-5 rounded-lg border border-[#8cc63f]/20">
            <p className="text-[#333] leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or 
              content of these external sites. We encourage you to review their privacy policies.
            </p>
          </div>
        </section>

        {/* Policy Updates */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              8
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              Policy Updates
            </h2>
          </div>
          <div className="bg-[#f4f8ee] p-5 rounded-lg border border-[#8cc63f]/20">
            <p className="text-[#333] leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new 
              policy on this page and updating the "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-[#8cc63f] text-black flex items-center justify-center font-bold mr-4">
              9
            </div>
            <h2 className="text-2xl font-bold text-[#111]">
              Contact Us
            </h2>
          </div>
          <div className="bg-[#f4f8ee] p-6 rounded-lg border border-[#8cc63f]/20">
            <p className="text-[#333] mb-5 leading-relaxed">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#8cc63f]/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#8cc63f]"></div>
                </div>
                <div>
                  <p className="font-semibold text-[#111] mb-1">Address</p>
                  <p className="text-[#333]">Velachery Main Road, Near Jayachandra, Jayachandran Nagar, Medavakkam, Chennai – 600100</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#8cc63f]/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#8cc63f]"></div>
                </div>
                <div>
                  <p className="font-semibold text-[#111] mb-1">Phone</p>
                  <p className="text-[#333]">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#8cc63f]/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#8cc63f]"></div>
                </div>
                <div>
                  <p className="font-semibold text-[#111] mb-1">WhatsApp</p>
                  <p className="text-[#333]">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-[#8cc63f]/20 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#8cc63f]"></div>
                </div>
                <div>
                  <p className="font-semibold text-[#111] mb-1">Working Hours</p>
                  <p className="text-[#333]">9:00 AM – 8:00 PM, All Days</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#8cc63f]/20 pt-6">
          <p className="text-[#333] text-center">
            © {new Date().getFullYear()} Ather Medavakkam. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
        </>
  );
}