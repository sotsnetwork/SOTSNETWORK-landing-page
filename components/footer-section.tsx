"use client"

import { Twitter, Github, Linkedin } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-stretch justify-center">
          <div className="text-center text-foreground text-xl font-semibold leading-4">SOTS NETWORK</div>
        </div>
        <p className="text-foreground/90 text-sm font-medium leading-[18px] text-left">AI & Web Solutions</p>
        <div className="flex justify-start items-start gap-3">
          <a href="#" aria-label="Twitter" className="w-4 h-4 flex items-center justify-center">
            <Twitter className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="GitHub" className="w-4 h-4 flex items-center justify-center">
            <Github className="w-full h-full text-muted-foreground" />
          </a>
          <a href="#" aria-label="LinkedIn" className="w-4 h-4 flex items-center justify-center">
            <Linkedin className="w-full h-full text-muted-foreground" />
          </a>
        </div>
      </div>
      {/* Right Section: Product, Company, Resources */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 p-4 md:p-8 w-full md:w-auto">
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-foreground text-sm font-semibold leading-6">Product</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <a href="#features-section" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#pricing-section" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#testimonials-section" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              Testimonials
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-foreground text-sm font-semibold leading-6">Company</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <a href="#" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              Blog
            </a>
            <a href="#" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              Careers
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-3">
          <h3 className="text-foreground text-sm font-semibold leading-6">Resources</h3>
          <div className="flex flex-col justify-start items-start gap-2">
            <a href="#" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              Documentation
            </a>
            <a href="#" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              Help Center
            </a>
            <a href="#" className="text-muted-foreground text-sm font-normal leading-6 hover:text-foreground transition-colors">
              Community
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

