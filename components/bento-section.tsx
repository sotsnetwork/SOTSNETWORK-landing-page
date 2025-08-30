"use client"

import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration"
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents"

const BentoCard = ({ title, description, Component, index }) => (
  <div 
    className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative"
  >
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "Custom Website Development",
      description: "Professional, responsive websites tailored to your brand and business needs.",
      Component: AiCodeReviews,
    },
    {
      title: "Landing Page Design",
      description: "High-converting landing pages that drive leads and sales for your business.",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "AI Integration Services",
      description: "Seamlessly integrate AI tools and automation into your existing workflows.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "MVP Development",
      description: "Rapid development of minimum viable products to validate your business ideas.",
      Component: MCPConnectivityIllustration,
    },
    {
      title: "Web3 & Blockchain Solutions",
      description: "Cutting-edge blockchain and Web3 development for the future of the internet.",
      Component: ParallelCodingAgents,
    },
    {
      title: "Ongoing Support & Maintenance",
      description: "Reliable technical support and maintenance to keep your digital assets running smoothly.",
      Component: EasyDeployment,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Our Core Services
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              From custom websites to AI-powered solutions, we deliver professional results that drive business growth and digital transformation.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card, index) => (
            <BentoCard key={card.title} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
