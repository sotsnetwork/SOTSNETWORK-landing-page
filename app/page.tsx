import { HeroSection } from "@/components/hero-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { SocialProof } from "@/components/social-proof"
import { BentoSection } from "@/components/bento-section"
import { LargeTestimonial } from "@/components/large-testimonial"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialGridSection } from "@/components/testimonial-grid-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { FooterSection } from "@/components/footer-section"
import { AnimatedSection } from "@/components/animated-section"
import { ClientOnly } from "@/components/client-only"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          <HeroSection />
          {/* Dashboard Preview Wrapper */}
          <div className="absolute bottom-[-150px] md:bottom-[-400px] left-1/2 transform -translate-x-1/2 z-30">
            <ClientOnly>
              <AnimatedSection>
                <DashboardPreview />
              </AnimatedSection>
            </ClientOnly>
          </div>
        </main>
        <ClientOnly>
          <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[411px] md:mt-[400px]" delay={0.1}>
            <SocialProof />
          </AnimatedSection>
        </ClientOnly>
        <ClientOnly>
          <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
            <BentoSection />
          </AnimatedSection>
        </ClientOnly>
        <ClientOnly>
          <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
            <LargeTestimonial />
          </AnimatedSection>
        </ClientOnly>
        <ClientOnly>
          <AnimatedSection
            id="pricing-section"
            className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
            delay={0.2}
          >
            <PricingSection />
          </AnimatedSection>
        </ClientOnly>
        <ClientOnly>
          <AnimatedSection
            id="testimonials-section"
            className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
            delay={0.2}
          >
            <TestimonialGridSection />
          </AnimatedSection>
        </ClientOnly>
        <ClientOnly>
          <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
            <FAQSection />
          </AnimatedSection>
        </ClientOnly>
        <ClientOnly>
          <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
            <CTASection />
          </AnimatedSection>
        </ClientOnly>
        <ClientOnly>
          <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
            <FooterSection />
          </AnimatedSection>
        </ClientOnly>
      </div>
    </div>
  )
}
