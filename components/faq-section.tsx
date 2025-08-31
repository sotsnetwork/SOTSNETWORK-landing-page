"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What services does SOTS NETWORK provide?",
    answer:
      "SOTS NETWORK specializes in AI & Web Solutions for creators and businesses. We offer website and landing page development, MVP creation, AI workflow automation, and strategic consultation. Our services are designed to help businesses integrate AI into their existing workflows and Web3.0 projects.",
  },
  {
    question: "How does your AI integration process work?",
    answer:
      "We start with a consultation to understand your current workflow and business needs. Then we design and implement AI solutions that integrate seamlessly with your existing tools and processes. We provide ongoing support until everything runs smoothly and you're comfortable with the new system.",
  },
  {
    question: "What's included in the Free Inquiries consultation?",
    answer:
      "Our free consultation includes an initial call to discuss your project requirements, analysis of your current workflow, solution recommendations, and expert guidance on the best approach for your business. There's no commitment required - it's our way of helping you understand how AI can benefit your specific situation.",
  },
  {
    question: "How long does it take to develop a website or MVP?",
    answer:
      "Timelines vary based on project complexity. A professional website typically takes 2-4 weeks, while an MVP can take 4-8 weeks depending on features. We work closely with you throughout the process and provide regular updates. For urgent projects, we can expedite development with additional resources.",
  },
  {
    question: "Do you provide ongoing support after project completion?",
    answer:
      "Yes, we offer ongoing support for all our projects. This includes technical maintenance, updates, troubleshooting, and guidance on scaling your solution. We believe in building long-term relationships with our clients and ensuring your investment continues to deliver value.",
  },
  {
    question: "Can you work with businesses that have no technical background?",
    answer:
      "Absolutely! Many of our most successful clients started with no technical knowledge. We specialize in explaining complex technical concepts in simple terms and guiding you through every step of the process. Our goal is to empower you with understanding, not just deliver a finished product.",
  },
]

const FAQItem = ({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) => {
  const handleClick = () => {
    console.log('FAQ item clicked, isOpen:', isOpen)
    onToggle()
  }

  return (
    <div
      className="w-full bg-card border border-border rounded-lg overflow-hidden cursor-pointer hover:bg-accent/50 transition-colors"
      onClick={handleClick}
    >
      <div className="w-full px-6 py-4 flex justify-between items-center">
        <div className="flex-1 text-foreground text-base font-medium pr-4">
          {question}
        </div>
        <div className="flex-shrink-0">
          <ChevronDown
            className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
      </div>
      
      {isOpen && (
        <div className="px-6 pb-4 border-t border-border">
          <div className="text-muted-foreground text-sm leading-relaxed pt-4">
            {answer}
          </div>
        </div>
      )}
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])
  
  const toggleItem = (index: number) => {
    console.log('Toggling item:', index, 'Current open items:', openItems)
    setOpenItems(prev => {
      const newState = prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
      console.log('New state:', newState)
      return newState
    })
  }
  
  return (
    <section className="w-full py-20 px-6 relative">
      {/* Background blur effect */}
      <div className="w-[300px] h-[500px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 origin-center rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      
      {/* Header section */}
      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-semibold text-foreground mb-4">
          FAQs
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to know about SOTS NETWORK and how we can transform your business with AI solutions
        </p>
      </div>
      
      {/* FAQ items */}
      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        {faqData.map((faq, index) => (
          <FAQItem 
            key={index} 
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.includes(index)} 
            onToggle={() => toggleItem(index)} 
          />
        ))}
      </div>
      
      {/* Newsletter Subscribe Section */}
      <div className="relative z-10 mt-16 text-center">
        <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold text-foreground mb-3">
            Stay Updated with SOTS NETWORK
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Get the latest insights on AI solutions, web development tips, and business automation strategies delivered to your inbox.
          </p>
          <div className="bg-white rounded-lg p-2 inline-block">
            <iframe 
              src="https://sotsnetwork.substack.com/embed" 
              width="480" 
              height="150" 
              style={{border:"1px solid #EEE", background:"white"}} 
              frameBorder="0" 
              scrolling="no"
              title="SOTS NETWORK Newsletter Subscription"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
