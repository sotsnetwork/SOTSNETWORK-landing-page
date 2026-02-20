import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: 'Portfolio',
  description: 'Explore our portfolio of web development, AI solutions, and automation projects.',
}

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
            A selection of our work in web development, AI integration, and digital solutions for businesses and creators.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-6 md:p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Our Work
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              We build websites, landing pages, MVPs, and AI-powered workflows for clients worldwide. 
              Contact us to discuss your project and see how we can help bring your ideas to life.
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
    </div>
  )
}
