import Image from "next/image"

export function SocialProof() {
  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Trusted by fast-growing startups
      </div>
      <div className="self-stretch flex justify-center items-center">
        <Image
          src="/logos/cursor-logo.svg"
          alt="Cursor Logo"
          width={120}
          height={40}
          className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>
    </section>
  )
}
