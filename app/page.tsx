import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { PricingSection } from "@/components/pricing-section"
import { FAQSection } from "@/components/faq-section"
import { FooterSection } from "@/components/footer-section"

export const metadata = {
  title: 'SOTS NETWORK - Professional Web Development & AI Solutions',
  description: 'Transform your business with AI & Web Solutions. Professional website development, MVP creation, and automation services for modern businesses.',
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative" itemScope itemType="https://schema.org/WebPage">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-150px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30">
            <DashboardPreview />
          </div>
        </main>
        <section className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-[400px]" aria-label="Trusted by businesses">
          <SocialProof />
        </section>
        <section id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" aria-label="Our Services">
          <BentoSection />
        </section>
        <section
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          aria-label="Client Testimonials"
        >
          <TestimonialGridSection />
        </section>
        <section
          id="pricing-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          aria-label="Pricing Plans"
        >
          <PricingSection />
        </section>
        <section id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" aria-label="Frequently Asked Questions">
          <FAQSection />
        </section>
        <FooterSection />
      </div>
    </div>
  )
}
