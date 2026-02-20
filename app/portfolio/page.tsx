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

        <div className="max-w-5xl mx-auto space-y-12 mb-12">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <section
                key={project.name}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <div className="p-4 md:p-6 border-b border-border">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
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
                  <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Open in new tab
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className="relative w-full bg-muted/30 rounded-b-xl overflow-hidden">
                  <iframe
                    src={project.url}
                    title={`Live preview: ${project.name}`}
                    className="w-full border-0 h-[70vh] min-h-[500px] max-h-[720px]"
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                    loading="lazy"
                  />
                </div>
              </section>
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
              href="https://calendly.com/sotsnetwork/30min"
              target="_blank"
              rel="noopener noreferrer"
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
