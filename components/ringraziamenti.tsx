"use client"

import { useEffect, useRef, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import patrocinioImg from "@/public/logos/Con il patrocinio di.png"
import partnerImg from "@/public/logos/Partner.png"
import sostenitoriImg from "@/public/logos/Sostenitori.png"

type PartnerImage = {
  src: StaticImageData | string
  alt: string
  label: string
}

type Props = {
  images?: PartnerImage[]
  className?: string
}

export function Ringraziamenti({
  images = [
    { src: patrocinioImg, alt: "Con il patrocinio di", label: "Con il patrocinio di" },
    { src: partnerImg, alt: "Partner", label: "Partner" },
    { src: sostenitoriImg, alt: "Sostenitori", label: "Sostenitori" },
  ],
  className = "",
}: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.12 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`py-16 px-6 lg:px-12 bg-transparent ${className}`}>
      <div className="max-w-7xl mx-auto text-center">
        <p
          className={`text-xs tracking-[0.3em] uppercase text-pink-text mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ringraziamenti
        </p>

        <h2
          className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Tutto questo non sarebbe possibile
          <br />
          <span className="italic font-medium text-pink-text">senza la nostra rete</span>
        </h2>

        <p
          className={`mx-auto max-w-2xl text-lg md:text-xl font-sans text-foreground leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          di partner e sostenitori, con il loro prezioso supporto. <span className="font-semibold text-pink-text">Grazie di cuore.</span>
        </p>

        <div className="mt-6 flex flex-col gap-6 items-center">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`w-full flex flex-col items-center max-w-5xl mx-auto transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${80 + idx * 100}ms` }}
            >
              <div className="text-xs uppercase tracking-[0.3em] text-pink-text mb-2">
                {img.label}
              </div>
              <div className="w-full flex items-center justify-center">
                <div className="w-full h-28 md:h-36 lg:h-44 flex items-center justify-center">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={2000}
                    height={600}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Ringraziamenti
