"use client";
import DentalScalingOffer from "@/components/hair-loss-stages";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import FAQ from "@/components/faq";
import StudentSuccess from "@/components/comparison-section";

import DentalCareSection from "@/components/logoslider";
import WhyChooseSection from "@/components/video";
import TestimonialsSection from "@/components/offer-highlight";
import DoctorSection from "@/components/results-section";
import RealPatientResultsSection from "@/components/certification";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <section id="hero">
          <HeroSection />
        </section>
            <section id="models">
          <StudentSuccess />
        </section>
        <section id="more">
          <WhyChooseSection />
        </section>

<section id="test-ride">
        <DoctorSection />
</section>
<section id="service">

        <DentalScalingOffer />

</section>

        <section id="reviews">
          <TestimonialsSection />
        </section>
        <section id="form"> 

    <DentalCareSection />

        </section>
            
        {/* <section id="faq">
          <FAQ />
        </section> */}

        {/* <Footer /> */}
        <RealPatientResultsSection />
      </main>
    </>
  );
}
