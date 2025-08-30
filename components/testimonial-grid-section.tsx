import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    quote:
      "Working with Chidera changed how our team approaches automation. He built an AI workflow that cut response time from hours to minutes. We appreciate his patience in explaining each step.",
    name: "Martin S.",
    company: "Operations Manager, Germany",
    type: "large-teal",
  },
  {
    quote:
      "I had no technical background and thought building a SaaS product was impossible. Chidera guided me through and I launched my first MVP. I'm grateful he believed I could do it.",
    name: "Sophia L.",
    company: "Startup Founder, USA",
    type: "small-dark",
  },
  {
    quote:
      "Chidera built our company website from scratch. He listened to what we needed and turned it into something our customers enjoy using. It feels like our brand finally has a home online.",
    name: "Elena R.",
    company: "Marketing Lead, Spain",
    type: "small-dark",
  },
  {
    quote:
      "We needed an AI solution to improve client engagement. Chidera delivered fast and stayed involved until everything ran smoothly. It has improved how we serve our customers every day.",
    name: "Brian C.",
    company: "Product Director, USA",
    type: "small-dark",
  },
  {
    quote:
      "My portfolio site was old and slow. Chidera rebuilt it into something modern and professional. I've since received more job offers and feel proud sharing my link.",
    name: "David K.",
    company: "Designer, UK",
    type: "small-dark",
  },
  {
    quote:
      "Chidera helped us turn an idea into a working MVP in weeks. His support gave us the confidence to pitch investors with something real.",
    name: "Laura P.",
    company: "Startup Founder, France",
    type: "small-dark",
  },
  {
    quote:
      "Our brand needed AI integration but we didn't know where to start. Chidera broke everything down and delivered a solution that saved us money and time. We're thankful for his clarity.",
    name: "James W.",
    company: "Business Owner, USA",
    type: "small-dark",
  },
]

const TestimonialCard = ({ quote, name, company, type, index }) => {
  const isLargeCard = type.startsWith("large")
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let nameClasses = ""
  let companyClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses = "text-primary-foreground text-base font-medium leading-6"
    nameClasses = "text-primary-foreground text-sm font-semibold leading-5"
    companyClasses = "text-primary-foreground/80 text-sm font-medium leading-5"
    cardHeight = "h-[280px]"
  } else if (type === "large-light") {
    cardClasses += " bg-white/10 backdrop-blur-sm border border-white/20"
    quoteClasses = "text-foreground text-base font-medium leading-6"
    nameClasses = "text-foreground text-sm font-semibold leading-5"
    companyClasses = "text-muted-foreground text-sm font-medium leading-5"
    cardHeight = "h-[280px]"
  } else {
    cardClasses += " bg-card/50 backdrop-blur-sm border border-border"
    quoteClasses = "text-foreground text-sm font-medium leading-5"
    nameClasses = "text-foreground text-sm font-semibold leading-5"
    companyClasses = "text-muted-foreground text-sm font-medium leading-5"
    cardHeight = "h-[200px]"
  }

  return (
    <motion.div 
      className={`${cardClasses} ${cardHeight} ${cardWidth}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
    >
      <div className="flex flex-col justify-between items-start gap-4 h-full">
        <p className={`${quoteClasses} flex-1`}>{quote}</p>
        <div className="flex flex-col justify-start items-start gap-1">
          <p className={nameClasses}>{name}</p>
          <p className={companyClasses}>{company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14 relative">
      {/* Animated background blur */}
      <motion.div 
        className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <motion.h2 
            className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.p 
            className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {"Hear from entrepreneurs, business owners, and professionals"} <br />{" "}
            {"who have transformed their ideas into reality with our help"}
          </motion.p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto relative z-10">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} index={0} />
          <TestimonialCard {...testimonials[1]} index={1} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} index={2} />
          <TestimonialCard {...testimonials[3]} index={3} />
          <TestimonialCard {...testimonials[4]} index={4} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} index={5} />
          <TestimonialCard {...testimonials[6]} index={6} />
        </div>
      </div>
    </section>
  )
}
