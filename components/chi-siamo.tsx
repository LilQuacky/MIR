"use client"

import { useEffect, useRef, useState } from "react"
import OptionsSelector from "./options-selector"
import mir2022 from "@/public/mir/2022/mir2022.png"
import mir2022_2 from "@/public/mir/2022/navigazione.png"
import mir2022_3 from "@/public/mir/2022/macchina.png"
import mir2024 from "@/public/mir/2024/mir2024.png"
import mir2024_2 from "@/public/mir/2024/mir2024-2.png"
import mir2024_3 from "@/public/mir/2024/mir2024-3.png"
import mir2024_4 from "@/public/mir/2024/Patrizia Maiorca2.png"
import donne1 from "@/public/donne_allo-specchio/Donne allo specchio.png"
import donne2 from "@/public/donne_allo-specchio/Donne allo specchio 2.png"

type CarouselImage = {
  src: string
  caption?: string
}

type Subsection = {
  title: string
  description: React.ReactNode
  images?: CarouselImage[]
}

type Step = {
  number: string
  title: string
  subsections: Subsection[]
}

const steps: Step[] = [
  {
    number: "2022",
    title: "La Prima Edizione",
    subsections: [
      {
        title: "L'Inizio dell'Avventura",
        description: (
          <>
            Settembre: parte la prima edizione. Da Amantea a Genova, con arrivo durante il <span className="font-bold italic text-pink-highlight">Salone Nautico Internazionale</span>, a bordo di un Prince 22.
          </>
        ),
        images: [
          { src: mir2022.src, caption: "L'equipaggio della prima edizione" },
          { src: mir2022_2.src, caption: "Navigazione" },
          { src: mir2022_3.src, caption: "Iniziativa Cuore Rosa" },
        ]
      },
      {
        title: "Il Risultato Solidale",
        description: (
          <>
            <span className="font-bold italic text-pink-highlight">15.000 € raccolti e donati</span> all&apos;Associazione Lorenzo Perrone ETS per continuare a erogare servizi gratuiti da donna a donna. Il progetto riceve un&apos;accoglienza mediatica e solidale importante.
          </>
        ),
      }
    ]
  },
  {
    number: "2024",
    title: "Una Seconda Edizione",
    subsections: [
      {
        title: "Una Sfida Più Ambiziosa",
        description: (
          <>
            Settembre: il raid al femminile torna con una nuova edizione più ambiziosa. Da Catania a Genova, a bordo di un Prince 24 exclusive con arrivo ancora una volta durante il <span className="font-bold italic text-pink-highlight">Salone Nautico Internazionale</span>. Patrizia Maiorca è la madrina dell&apos;avventura al femminile e presidia la partenza a Catania. Il raid porta a bordo donne che hanno affrontato una malattia oncologica, per diffondere il fondamentale messaggio di <span className="font-bold italic text-pink-highlight">prevenzione</span>, oltre a coraggio e vicinanza alle donne che si trovano in quella stessa tempesta.
          </>
        ),
        images: [
          { src: mir2024_4.src, caption: "Patrizia Maiorca, madrina del raid" },
          { src: mir2024.src, caption: "L'equipaggio della seconda edizione" },
          { src: mir2024_2.src, caption: "L'equipaggio della seconda edizione" },
          { src: mir2024_3.src, caption: "L'equipaggio della seconda edizione" },
        ]
      },
      {
        title: "Impatto e Solidarietà",
        description: (
          <>
            Al Teatro del Mare del Salone Nautico Internazionale di Genova viene presentata e celebrata l&apos;avventura al femminile. L&apos;impatto mediatico e solidale dentro e fuori dal mondo nautico è sorprendente. <span className="font-bold italic text-pink-highlight">46.500 € raccolti e donati</span>. L&apos;ALP organizza grazie ai fondi ricevuti dal raid “Donne allo specchio”, due corsi di make-up gratuiti dedicati a donne che hanno affrontato un tumore, oltre a portare avanti tutti gli altri servizi.
          </> 
        ),
        images: [
          { src: donne1.src, caption: "Il progetto Donne allo Specchio" },
          { src: donne2.src, caption: "Il progetto Donne allo Specchio" },
        ]
      }
    ]
  }
]

export function ChiSiamo() {
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

  return (
    <section ref={sectionRef} id="chi-siamo" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p
                className={`text-xs tracking-[0.3em] uppercase text-pink-text mb-6 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                >
                  Chi Siamo
                </p>
              <h2
                className={`font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Un&apos; <span className="italic"> idea</span> che prende 
                <span className="italic"> forma</span>
              </h2>
              <p
                className={`text-muted-foreground leading-relaxed transition-all duration-1000 delay-300 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Nella primavera del 2022 Nuova Jolly Marine, in particolare Antonio Aiello inizia a pensare a un <span className="font-bold italic text-pink-highlight">raid tutto al femminile</span>. Dopo un confronto con la figlia Sara l&apos;idea prende una direzione precisa: un raid benefico. Il collegamento con l&apos;Associazione Lorenzo Perrone, amici da anni, è naturale. L&apos;avventura al femminile si pone l&apos;obiettivo di sostenere <span className="font-bold italic text-pink-highlight">Cuore Rosa</span>, servizi gratuiti da donna a donna, dedicati alle malate di tumore.
              </p>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`group py-10 lg:py-14 border-t border-border last:border-b transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 150}ms` }}
                >
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-pink-text transition-colors duration-500 shrink-0">
                      {step.number}
                    </span>
                    <div className="space-y-8">
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground">{step.title}</h3>
                      <div className="space-y-6">
                        {step.subsections.map((sub, idx) => (
                          <div key={idx} className="space-y-6">
                            <div className="space-y-2">
                              <h4 className="font-medium text-lg text-foreground">{sub.title}</h4>
                              <p className="text-muted-foreground leading-relaxed max-w-xl">{sub.description}</p>
                            </div>
                            {sub.images && (
                              <div
                                className={`mt-6 transition-all duration-1000 ${
                                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                                }`}
                                style={{ transitionDelay: `${500 + index * 150}ms` }}
                              >
                                <OptionsSelector images={sub.images} />
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
