"use client"

import { useEffect, useRef, useState } from "react"
import OptionsSelector from "./options-selector"
import alpImg from "@/public/alp/rosalba.png"
import alp2Img from "@/public/alp/spalle.png"
import alp3Img from "@/public/alp/Supporto Psicologico.png"
import alp4Img from "@/public/alp/Prevenzione.png"

export function Alp() {
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
    <section ref={sectionRef} id="l-associazione" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Vertical Carousel */}
          <div
            className={`order-2 lg:order-1 lg:col-span-7 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <OptionsSelector images={[
              { src: alp2Img.src, caption: "La Casa di Lorenzo”, Centro di Ascolto e Supporto Psicologico per i malati di tumore e i loro familiari"},
              { src: alpImg.src, caption: "Trasporto Sanitario" },
              { src: alp3Img.src, caption: "Supporto Psicologico" },
              { src: alp4Img.src, caption: "Campagne di Prevenzione"}
            ]} />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 lg:col-span-5 lg:pl-4">
            <p
              className={`text-xs tracking-[0.3em] uppercase text-pink-text mb-6 transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              L'Associazione
            </p>

            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Associazione
              <br />
              <span className="italic font-medium text-pink-text">Lorenzo Perrone</span>
            </h2>

            <div
              className={`space-y-6 text-muted-foreground leading-relaxed transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <p>
                Sostenere l’Associazione Lorenzo Perrone significa tenere in moto una macchina preziosa, che opera gratuitamente sul territorio Nord-Est di Milano, ma che <span className="font-semibold text-pink-highlight">collega tutta l’Italia</span> con una rete di supporto.
              </p>
              <p>
                Da <span className="font-semibold text-pink-highlight">diciassette anni</span> l’ALP promuove concretamente <span className="font-semibold text-pink-highlight">Prevenzione Oncologica</span> e <span className="font-semibold text-pink-highlight">Tutela della Salute</span> con campagne di sensibilizzazione, informazione e screening gratuiti sul territorio.
              </p>
              <p>
                Da <span className="font-semibold text-pink-highlight">undici anni</span> <em>La Casa di Lorenzo</em>, centro di ascolto e supporto psicologico di ALP, offre servizi gratuiti ai malati di tumore e ai loro familiari: Trasporto Sanitario, Supporto Psicologico, Sollievo Domiciliare, Ascolto e Consulenza in ambito previdenziale e fiscale.
              </p>
            </div>

            {/* Stats */}
            <div
              className={`grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border transition-all duration-1000 delay-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="font-serif text-3xl md:text-4xl text-pink-text">17</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Anni con ALP</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-pink-text">11</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Anni di Casa di Lorenzo</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-pink-text">100%</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Servizi Gratuiti</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
