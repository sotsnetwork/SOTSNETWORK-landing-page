import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowLeft, ExternalLink, ShoppingBag, Sparkles, GraduationCap, Users, Heart, UtensilsCrossed } from "lucide-react"

export const metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of web development, AI solutions, and automation projects.',
}

const projects = [
  {
    name: 'Slumba London',
    tag: 'E-commerce',
    description: 'Slumba London Ltd is a registered UK private limited company (No. 16802607), based in Belsize Park, London. E-commerce store for the Slumba London brand — retail sale via mail order and internet (SIC 47910).',
    url: 'https://slumba-london-shop.vercel.app/',
    icon: ShoppingBag,
  },
  {
    name: "Zara's Gloss",
    tag: 'Beauty & E-commerce',
    description: 'Beauty and cosmetics e-commerce store, selling lip gloss and related products under the Zara\'s Gloss brand.',
    url: 'https://zaras-gloss-shop.vercel.app/',
    icon: Sparkles,
  },
  {
    name: 'The RTWV Matchmaking',
    tag: 'Community & Dating',
    description: 'Landing page for a service that connects Christian singles to become couples — faith-based matchmaking.',
    url: 'https://rtwv-match-making.vercel.app/',
    icon: Heart,
  },
  {
    name: 'RTWV Academy Ltd',
    tag: 'Education & Counselling',
    description: 'Are you longing for restoration? RTWV Academy is here to walk with you in a safe, faith-filled space where we listen, pray, and begin rebuilding together. Counselling sessions, trainings, and courses for individuals.',
    url: 'https://rtwvacademy.vercel.app/',
    icon: GraduationCap,
  },
  {
    name: 'SeekCa',
    tag: 'Recruitment & Web App',
    description: 'Recruitment and talent-matching web application for organisations — search and manage candidates: plumbers, welders, electricians, caregivers, and other professional service providers.',
    url: 'https://seekca-organisation.vercel.app/',
    icon: Users,
  },
  {
    name: 'Tawakaltu Food Restaurant',
    tag: 'Restaurant & Food',
    description: 'Website for Tawakaltu Food Restaurant — showcasing the restaurant and its offerings.',
    url: 'https://tawakaltu-restaurant-asx4.vercel.app/',
    icon: UtensilsCrossed,
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div className="w-full max-w-[1320px] mx-auto px-5 pt-28 pb-16">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of our work in web development, e-commerce, and digital solutions for businesses and creators.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto mb-12">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <div
                key={project.name}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-foreground">
                        {project.name}
                      </h2>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {project.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {'url' in project ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Visit site
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    project.links?.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                      >
                        {link.label}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground mb-6">
            Have a project in mind? We build websites, landing pages, MVPs, and AI-powered workflows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#features-section"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View our services
            </Link>
            <a
              href="mailto:chidera@sotsnetwork.xyz"
              className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
