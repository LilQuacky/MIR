"use client"

import { useEffect, useRef, useState } from "react"
import lorenzoImg from "@/public/lorenzo.png"

export function Lorenzo() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="lorenzo" className="py-32 lg:py-40 px-6 lg:px-12 bg-pink-text">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Quote Mark */}
            <div
              className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
            >
              <svg className="w-16 h-16 mx-auto lg:mx-0 text-background/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote */}
            <blockquote
              className={`font-serif text-3xl md:text-4xl lg:text-5xl font-light text-background leading-relaxed mb-6 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              «Mi sembra un progetto molto nobile»
            </blockquote>

            {/* Attribution */}
            <div
              className={`mb-16 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p className="font-serif text-xl text-background">Lorenzo Perrone</p>
            </div>

            {/* Story */}
            <div
              className={`space-y-6 text-background/90 text-lg leading-relaxed text-justify md:text-left transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                <strong className="font-semibold text-background">Lorenzo, che amava la musica e la filosofia.</strong> Equilibrato. Saggio. Aveva sempre una risposta per tutto. 
                Amava le cose semplici, una birra con amici veri. Amava suonare il pianoforte e la chitarra, una Fender Stratocaster azzurra che aveva comprato con i suoi risparmi. «La mia bambina», la chiamava.
              </p>
              <p>
                Aveva scelto il liceo classico: la filosofia, il latino, il greco erano la sua strada. La malattia lo ha colto di sorpresa, quando guardava al futuro con grandi progetti.
              </p>
              <p>
                Negli ultimi giorni suo papà gli ha parlato del progetto di creare un&apos;associazione che potesse dare un senso a quello che gli stava succedendo, e che potesse in qualche modo alleviare ad altri lo stesso peso che avevano portato lui e la sua famiglia.
              </p>
              <p className="font-medium text-background">
                Il 2 settembre 2007 Lorenzo ci ha lasciati ma continua a vivere in ogni progetto, attività e servizio gratuito che l&apos;Associazione riesce a realizzare.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <img
              src={lorenzoImg.src}
              alt="Lorenzo Perrone"
              className="w-full h-auto object-contain rounded-md transform-gpu transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
