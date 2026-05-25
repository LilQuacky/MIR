"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

export function Contatti() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formState)
  }

  return (
    <section ref={sectionRef} id="contatti" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <p
              className={`text-xs tracking-[0.3em] uppercase text-pink-text mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Contatti
            </p>
            <h2
              className={`font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Supporta il <span className="italic text-pink-text font-medium">Progetto</span>
            </h2>
            <p
              className={`text-muted-foreground leading-relaxed mb-12 max-w-md transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Hai domande sull'iniziativa o vuoi scoprire come contribuire a questa avventura di solidarietà e prevenzione? Scrivici, ti risponderemo al più presto.
            </p>

            {/* Contact Info */}
            <div
              className={`space-y-6 transition-all duration-1000 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Email</p>
                <a href="mailto:info@mediterraneoinrosa.it" className="text-foreground hover:text-pink-text font-medium transition-colors">
                  info@mediterraneoinrosa.it
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">Associazione Lorenzo Perrone ETS</p>
                <p className="text-foreground">Via Milano 94, Cologno Monzese</p>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-8 bg-background p-8 md:p-10 shadow-sm border border-border">
              <div>
                <label htmlFor="name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Nome e Cognome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-pink-text focus:outline-none transition-colors"
                  placeholder="Inserisci il tuo nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Indirizzo Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-pink-text focus:outline-none transition-colors"
                  placeholder="es. nome@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Messaggio
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-pink-text focus:outline-none transition-colors resize-none"
                  placeholder="Scrivi qui il tuo messaggio..."
                  required
                />
              </div>
              <button
                type="submit"
                className="group inline-flex items-center justify-center w-full gap-3 px-8 py-4 bg-pink-text text-white font-medium text-sm tracking-widest uppercase hover:bg-pink-highlight transition-all duration-500"
              >
                Invia Messaggio
                <svg
                  className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
