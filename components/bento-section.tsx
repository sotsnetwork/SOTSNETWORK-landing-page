"use client"

import { BentoCard } from "./bento/bento-card"
import { BentoGrid } from "./bento/bento-grid"
import { cn } from "@/lib/utils"

export function BentoSection() {
  const cards = [
    {
      id: 1,
      className: "md:col-span-2",
      title: "Website & Landing Page Development",
      description: "Custom, responsive websites and landing pages built with modern technologies.",
      header: <BentoCard className="p-0" />,
      icon: "🌐",
    },
    {
      id: 2,
      className: "md:col-span-1",
      title: "AI Workflow Automation",
      description: "Streamline your business processes with intelligent automation solutions.",
      header: <BentoCard className="p-0" />,
      icon: "🤖",
    },
    {
      id: 3,
      className: "md:col-span-1",
      title: "MVP Development",
      description: "Rapid prototype development to validate your business ideas quickly.",
      header: <BentoCard className="p-0" />,
      icon: "🚀",
    },
    {
      id: 4,
      className: "md:col-span-2",
      title: "Strategic Consultation",
      description: "Expert guidance on technology decisions and digital transformation strategies.",
      header: <BentoCard className="p-0" />,
      icon: "💡",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            From custom websites to AI-powered solutions, we deliver professional results that drive business growth and digital transformation.
          </p>
        </div>
        <div className="mt-16">
          <BentoGrid className="mx-auto max-w-7xl">
            {cards.map((card, i) => (
              <BentoCard key={card.id} className={cn(card.className)}>
                <div className="flex h-full w-full flex-col justify-between p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{card.icon}</span>
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{card.description}</p>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  )
}
