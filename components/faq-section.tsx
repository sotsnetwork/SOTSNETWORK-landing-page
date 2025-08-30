"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What services does SOTS NETWORK provide?",
    answer:
      "SOTS NETWORK specializes in AI & Agentic Solutions for creators and businesses. We offer website and landing page development, MVP creation, AI workflow automation, and strategic consultation. Our services are designed to help businesses integrate AI into their existing workflows and Web3.0 projects.",
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

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about SOTS NETWORK and how we can transform your business with AI solutions
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
