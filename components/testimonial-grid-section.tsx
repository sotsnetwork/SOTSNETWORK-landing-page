"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "SOTS NETWORK transformed our online presence with a stunning website that perfectly captures our brand. The team's expertise in both design and development is exceptional.",
    avatar: "/avatars/sarah.jpg",
    initials: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, DataFlow Solutions",
    content: "Working with SOTS NETWORK was a game-changer for our business. They delivered an AI-powered workflow automation that saved us 20+ hours per week.",
    avatar: "/avatars/michael.jpg",
    initials: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content: "The landing page SOTS NETWORK created for us increased our conversion rate by 35%. Their attention to detail and user experience expertise is outstanding.",
    avatar: "/avatars/emily.jpg",
    initials: "ER",
  },
  {
    name: "David Thompson",
    role: "CTO, Innovation Labs",
    content: "SOTS NETWORK's MVP development service helped us validate our product idea in record time. Their technical skills and business understanding are top-notch.",
    avatar: "/avatars/david.jpg",
    initials: "DT",
  },
  {
    name: "Lisa Wang",
    role: "Product Manager, FutureTech",
    content: "The strategic consultation from SOTS NETWORK guided us through complex technology decisions. Their insights helped us choose the right tech stack for our needs.",
    avatar: "/avatars/lisa.jpg",
    initials: "LW",
  },
  {
    name: "Robert Kim",
    role: "Operations Manager, ScaleUp",
    content: "SOTS NETWORK's ongoing support and maintenance services keep our digital infrastructure running smoothly. Their reliability and responsiveness are exceptional.",
    avatar: "/avatars/robert.jpg",
    initials: "RK",
  },
]

export function TestimonialGridSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Don't just take our word for it. Here's what our clients have to say about working with SOTS NETWORK.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.name} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="mt-4 text-muted-foreground">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
