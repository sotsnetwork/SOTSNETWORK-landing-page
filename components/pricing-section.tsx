"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const services = [
    {
      name: "Website & Landing Page",
      price: "Custom Quote",
      description: "Professional website and landing page development.",
      features: [
        "Custom website design",
        "Responsive landing pages",
        "Content management system",
        "Analytics integration",
        "Performance optimization",
        "Google Search Console",
        "IndexNow",
        "Open Graph tags",
        "Get ChatGPT to recommend your website",
        "Ongoing support",
      ],
      buttonText: "Get Quote",
      buttonClass:
        "bg-white text-black shadow-lg hover:bg-gray-100 font-bold text-lg py-3 border-2 border-gray-300",
      popular: true,
      neutralCard: true,
    },
    {
      name: "MVP",
      price: "Custom Quote",
      description: "Minimum Viable Product development for your business idea.",
      features: [
        "Product strategy & planning",
        "Core feature development",
        "User experience design",
        "Database architecture",
        "API development",
        "Testing & quality assurance",
        "Deployment & launch support",
      ],
      buttonText: "Get Quote",
      buttonClass:
        "bg-primary text-white shadow-lg hover:bg-primary/90 font-bold text-lg py-3 border-2 border-primary/50",
      highlighted: true,
    },
    {
      name: "Free Inquiries",
      price: "Free",
      description: "Get started with a consultation to understand your needs.",
      features: [
        "Initial consultation call",
        "Project requirements analysis",
        "Solution recommendations",
        "No commitment required",
        "Expert guidance",
      ],
      buttonText: "Get Started",
      buttonClass:
        "bg-white text-black shadow-lg hover:bg-gray-100 font-bold text-lg py-3 border-2 border-gray-300",
    },
  ]

  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center my-0 py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            One-Time Services
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-tight">
            Choose the service that fits your project needs. All services are custom-tailored with no fixed pricing.
          </p>
        </div>
      </div>
      <div className="w-full max-w-6xl mt-8 md:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                (service.popular && !service.neutralCard) || service.highlighted
                  ? "border-primary bg-primary/10 shadow-lg shadow-primary/20"
                  : "border-border bg-card/50 hover:border-primary/30"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">{service.name}</h3>
                <div className="text-3xl font-bold text-primary mb-2">{service.price}</div>
                <p className="text-white text-sm">{service.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-white">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${service.buttonClass}`}
                onClick={() => window.open('https://calendly.com/sotsnetwork/30min', '_blank')}
              >
                {service.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
