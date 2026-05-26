"use client"

import { useEffect, useRef, useState } from "react"
import Image, { type StaticImageData } from "next/image"
import logo2026 from "@/public/mir/2026/Logo MIR venti26.png"
import boxPartenza from "@/public/mir/2026/box-partenza.png"
import boxTappe from "@/public/mir/2026/box-tappe.png"
import boxPrevenzione from "@/public/mir/2026/box-prevenzione.png"
import boxObiettivi from "@/public/mir/2026/box-obiettivi.png"

type Service = {
  title: string
  description: React.ReactNode
  icon: React.ReactNode
  image: StaticImageData
  imageAlt: string
}

const services: Service[] = [
  {
    title: "Un sogno che diventa Giro d'Italia",
    description: (
      <>
        Una nuova e ancor più ambiziosa avventura in rosa. Circa <span className="font-bold italic text-pink-highlight">1400 miglia nautiche</span> di coraggio, prevenzione e solidarietà. L’avventura inizia il 31 maggio 2026 da Pavia, con la partecipazione alla celebre gara di motonautica <span className="font-bold italic text-pink-highlight">Raid Pavia Venezia</span>, per poi proseguire lungo le coste adriatiche, ioniche e tirreniche, fino all'arrivo a Genova durante il <span className="font-bold italic text-pink-highlight">Salone Nautico Internazionale</span>, come ormai da tradizione.
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
      </svg>
    ),
    image: boxPartenza,
    imageAlt: "Box partenza 2026",
  },
  {
    title: "L'itinerario a tappe",
    description: (
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <p className="font-medium text-foreground">
            Parte I
          </p>
          <ul className="text-sm space-y-1.5 marker:text-pink-highlight list-inside">
            <li>Chioggia - Rimini <span className="font-medium text-pink-highlight">80 mn</span></li>
            <li>Rimini - Potenza Picena <span className="font-medium text-pink-highlight">70 mn</span></li>
            <li>Potenza Picena - Termoli <span className="font-medium text-pink-highlight">110 mn</span></li>
            <li>Termoli - M. di Savoia <span className="font-medium text-pink-highlight">85 mn</span></li>
            <li>M. di Savoia - Brindisi <span className="font-medium text-pink-highlight">87 mn</span></li>
            <li>Brindisi - Tricase Porto <span className="font-medium text-pink-highlight">70 mn</span></li>
            <li>Tricase Porto - Crotone <span className="font-medium text-pink-highlight">82 mn</span></li>
          </ul>
        </div>
        <div>
          <p  className="font-medium text-foreground">
            Parte II
          </p>
          <ul className="text-sm space-y-1.5 marker:text-pink-highlight list-inside">
            <li>Crotone - V. San Giovanni <span className="font-medium text-pink-highlight">125 mn</span></li>
            <li>V. San Giovanni - Amantea <span className="font-medium text-pink-highlight">110 mn</span></li>
            <li>Amantea - Napoli <span className="font-medium text-pink-highlight">110 mn</span></li>
            <li>Napoli - Latina <span className="font-medium text-pink-highlight">77 mn</span></li>
            <li>Latina - Ostia <span className="font-medium text-pink-highlight">13 mn</span></li>
            <li>Ostia - Piombino <span className="font-medium text-pink-highlight">163 mn</span></li>
            <li>Piombino - La Spezia <span className="font-medium text-pink-highlight">82 mn</span></li>
            <li>La Spezia - Varazze <span className="font-medium text-pink-highlight">63 mn</span></li>
          </ul>
        </div>
      </div>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: boxTappe,
    imageAlt: "Box tappe 2026",
  },
  {
    title: "L'impegno per la prevenzione",
    description: (
      <>
        Grande novità di questa edizione è l’impegno per fare concretamente <span className="font-bold italic text-pink-highlight">prevenzione</span>. Con l'Associazione Lorenzo Perrone sono stati organizzati visite senologiche e dermatologiche gratuite a Potenza Picena, Roma e Latina con il supporto del Comune di Potenza Picena, Elettromedia, Sapienza Università di Roma e Istituto Dermopatico dell’Immacolata.
      </>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: boxPrevenzione,
    imageAlt: "Box prevenzione 2026",
  },
  {
    title: "Gli obiettivi",
    description: (
      <ul className="space-y-3 list-disc pl-4 marker:text-pink-highlight">
        <li><span className="font-medium text-foreground">Raccogliere fondi</span> per sostenere i servizi e le attività gratuite dell'Associazione Lorenzo Perrone ETS;</li>
        <li><span className="font-medium text-foreground">Promuovere la tutela della salute</span> con momenti di prevenzione e sensibilizzazione;</li>
        <li><span className="font-medium text-foreground">Portare forza</span> a tutte le donne che affrontano un momento così difficile, con un messaggio di vicinanza;</li>
        <li><span className="font-medium text-foreground">Promuovere la solidarietà</span> e l'empowerment femminile attraverso lo sport e la nautica.</li>
      </ul>
    ),
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" />
      </svg>
    ),
    image: boxObiettivi,
    imageAlt: "Box obiettivi 2026",
  },
]

export function Edizione2026() {
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

  // vertical layout: no horizontal drag handlers needed

  return (
    <section ref={sectionRef} id="edizione-2026" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `120ms` }}
          >
            <Image
              src={logo2026}
              alt="Logo MIR 2026"
              className="h-auto w-[500px] md:w-[700px] lg:w-[800px]"
              priority
            />
          </div>
          <p
            className={`text-xs tracking-[0.3em] uppercase text-pink-text mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            L'Edizione 2026
          </p>
          <h2
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Il Giro d'Italia in Rosa
          </h2>
        </div>

        {/* Services Grid */}
        <div className="relative -mx-6 px-6 lg:-mx-12 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group w-full max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-border/60 bg-background shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-500 ease-out hover:-translate-y-1 hover:scale-[1.01] hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] p-6 lg:p-10 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 120}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-center font-serif text-2xl md:text-3xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  <div className="my-4 flex h-12 items-center justify-center text-pink-text">
                    {service.icon}
                  </div>
                  <div className="mb-6 w-full overflow-hidden rounded-2xl border border-border/50 bg-sand/30 shadow-sm">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-64 w-full object-cover md:h-72 lg:h-80"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="w-full max-w-prose text-left text-muted-foreground leading-relaxed font-sans text-base">
                    <div className="space-y-4">{service.description}</div>
                  </div>
                </div>
              </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  )
}
