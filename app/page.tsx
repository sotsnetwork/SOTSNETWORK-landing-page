import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-150px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30">
            <DashboardPreview />
          </div>
        </main>
        <div className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-[400px]">
          <SocialProof />
        </div>
        <div id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-16">
          <BentoSection />
        </div>
        <div
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
        >
          <TestimonialGridSection />
        </div>
        <div
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
        >
          <PricingSection />
        </div>
        <div id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16">
          <FAQSection />
        </div>
        <div className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16">
          <FooterSection />
        </div>
      </div>
    </div>
  )
}
