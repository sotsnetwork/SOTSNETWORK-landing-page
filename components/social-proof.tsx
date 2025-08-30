import Image from "next/image"

export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Trusted by businesses worldwide
      </div>
      
      {/* SOTS NETWORK Logo - Prominently displayed */}
      <div className="flex justify-center items-center mb-8">
        <Image
          src="/real logo.svg"
          alt="SOTS NETWORK Logo"
          width={120}
          height={132}
          className="h-16 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
      
      {/* Startup Logos Grid */}
      <div className="self-stretch grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {Array.from({ length: 8 }).map((_, i) => (
          <Image
            key={i}
            src={`/logos/logo0${i + 1}.svg`}
            alt={`Company Logo ${i + 1}`}
            width={400}
            height={120}
            className="w-full max-w-[400px] h-auto object-contain grayscale opacity-70"
          />
        ))}
      </div>
    </section>
  )
}
