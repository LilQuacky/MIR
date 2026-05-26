"use client"

import { useEffect, useRef, useState } from "react"
import logoNJ from "@/public/logos/Logo Nuova Jolly Marine .png"
import logoHonda from "@/public/logos/Logo Honda .png"
import logoAlp from "@/public/logos/Logo_ALP.png"

export function Partners() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const partnersList = [
    {
      title: "Ideato da",
      desc: "Nuova Jolly Marine",
      focus: "Hanno ideato e lanciato questa avventura nautica al femminile, mettendoci letteralmente... la barca e il cuore.",
      url: "https://www.nuovajollymarine.com/",
      logo: logoNJ.src
    },
    {
      title: "In collaborazione con",
      desc: "Honda Marine",
      focus: "Fornisce prezioso supporto tecnico e logistico, spingendo la nostra imbarcazione fidata tra le onde.",
      url: "https://www.honda.it/marine.html",
      logo: logoHonda.src
    },
    {
      title: "A sostegno di",
      desc: "Associazione Lorenzo Perrone",
      focus: "Trasformiamo le miglia percorse in fondi concreti per la prevenzione e i servizi gratuiti per le donne.",
      url: "https://www.associazionelorenzoperrone.org/",
      logo: logoAlp.src
    }
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-card/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2
        className={`font-serif text-4xl md:text-5xl font-light text-center text-foreground mb-12 lg:mb-16 text-balance transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        Un&apos; <span className="italic"> iniziativa</span> resa possibile 
        <span className="italic"> grazie</span> a
      </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {partnersList.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center bg-background rounded-3xl p-8 lg:p-10 border border-border shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <p className="text-xs tracking-widest uppercase text-pink-text mb-8">
                {partner.title}
              </p>
              <div className="h-28 flex items-center justify-center mb-8">
                <img 
                  src={partner.logo} 
                  alt={partner.desc} 
                  className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                />
              </div>
              <h4 className="font-serif text-xl mb-4 text-center transition-colors duration-500 group-hover:text-pink-highlight">
                {partner.desc}
              </h4>
              <p className="text-sm text-center text-muted-foreground leading-relaxed">
                {partner.focus}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
