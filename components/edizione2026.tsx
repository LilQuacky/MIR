"use client"

import { useEffect, useRef, useState } from "react"
import OptionsSelector from "./options-selector"
import navigazioneImg from "@/public/mir/2026/mir2026.png"
import mir2026_2 from "@/public/mir/2026/mir2026-2.png"
import mir2026_3 from "@/public/mir/2026/mir2026-3.png"

function Galleria({ isVisible }: { isVisible: boolean }) {
  return (
    <div
      className={`mt-16 max-w-5xl mx-auto transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `600ms` }}
    >
      <OptionsSelector images={[navigazioneImg.src, mir2026_2.src, mir2026_3.src]} />
    </div>
  )
}

const services = [
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
  },
  {
    title: "L'itinerario a tappe",
    description: (
      <div className="grid md:grid-cols-2 gap-6 mt-4">
        <div>
          <p className="text-sm font-medium mb-3">
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
          <p className="text-sm font-medium mb-3">
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
  },
  {
    title: "Gli obiettivi",
    description: (
      <ul className="text-sm space-y-3 list-disc pl-4 marker:text-pink-highlight">
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

  return (
    <section ref={sectionRef} id="edizione-2026" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
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
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group bg-background p-10 lg:p-14 transition-all duration-1000 hover:bg-card ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="text-pink-text mb-6 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{service.title}</h3>
              <div className="text-muted-foreground leading-relaxed">{service.description}</div>
            </div>
          ))}
        </div>

        <Galleria isVisible={isVisible} />
      </div>
    </section>
  )
}
