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
  variant?: "standard" | "stages"
}

type RoutePoint = {
  id: string
  order: number
  label: string
  segmentMiles: number
  cumulativeMiles: number
  top: string
  left: string
}

const routePoints: RoutePoint[] = [
  { id: "chioggia", order: 1, label: "Chioggia", segmentMiles: 0, cumulativeMiles: 0, top: "13.5%", left: "47.5%" },
  { id: "rimini", order: 2, label: "Rimini", segmentMiles: 80, cumulativeMiles: 80, top: "20%", left: "47.75%" },
  { id: "potenza-picena", order: 3, label: "Potenza Picena", segmentMiles: 70, cumulativeMiles: 150,  top: "27%", left: "53.75%" },
  { id: "termoli", order: 4, label: "Termoli", segmentMiles: 110, cumulativeMiles: 260, top: "41%", left: "58%" },
  { id: "m-di-savoia", order: 5, label: "Margherita di Savoia", segmentMiles: 85, cumulativeMiles: 345, top: "50%", left: "66%" },
  { id: "brindisi", order: 6, label: "Brindisi", segmentMiles: 87, cumulativeMiles: 432, top: "57%", left: "75%" },
  { id: "tricase-porto", order: 7, label: "Tricase Porto", segmentMiles: 70, cumulativeMiles: 502, top: "64%", left: "77.5%" },
  { id: "crotone", order: 8, label: "Crotone", segmentMiles: 82, cumulativeMiles: 584, top: "73%", left: "71.5%" },
  { id: "villa-san-giovanni", order: 9, label: "Villa San Giovanni", segmentMiles: 125, cumulativeMiles: 709, top: "85%", left: "64.5%" },
  { id: "amantea", order: 10, label: "Amantea", segmentMiles: 110, cumulativeMiles: 819, top: "75%", left: "66%" },
  { id: "napoli", order: 11, label: "Napoli", segmentMiles: 110, cumulativeMiles: 929, top: "56.5%", left: "56.5%" },
  { id: "latina", order: 12, label: "Latina", segmentMiles: 77, cumulativeMiles: 1006, top: "50.5%", left: "50%" },
  { id: "ostia", order: 13, label: "Ostia", segmentMiles: 13, cumulativeMiles: 1019, top: "40%", left: "41.5%" },
  { id: "piombino", order: 14, label: "Piombino", segmentMiles: 163, cumulativeMiles: 1182, top: "33%", left: "38%" },
  { id: "la-spezia", order: 15, label: "La Spezia", segmentMiles: 82, cumulativeMiles: 1264, top: "20%", left: "34.5%" },
  { id: "varazze", order: 16, label: "Varazze", segmentMiles: 63, cumulativeMiles: 1327, top: "17%", left: "29%" },
]

const routeGroups: Array<{ title: string; points: RoutePoint[] }> = [
  { title: "Parte I", points: routePoints.slice(0, 8) },
  { title: "Parte II", points: routePoints.slice(8) },
]

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
    description: <TappeInteractiveMap />,
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: boxTappe,
    imageAlt: "Box tappe 2026",
    variant: "stages",
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

function TappeInteractiveMap() {
  const [selectedPointId, setSelectedPointId] = useState(routePoints[0].id)

  const selectedPoint = routePoints.find((point) => point.id === selectedPointId) ?? routePoints[0]
  const toSvgPoint = (point: RoutePoint) => `${Number.parseFloat(point.left)} ${Number.parseFloat(point.top)}`
  const activeRoutePoints = routePoints.slice(0, selectedPoint.order)
  const visitedPoints = routePoints.filter((point) => point.order <= selectedPoint.order)
  const routePolylinePoints = routePoints.map(toSvgPoint).join(" ")
  const visitedPolylinePoints = activeRoutePoints.map(toSvgPoint).join(" ")
  const completedStages = selectedPoint.order
  const remainingStages = routePoints.length - selectedPoint.order
  const totalRouteMiles = routePoints[routePoints.length - 1]?.cumulativeMiles ?? 0
  const remainingMiles = totalRouteMiles - selectedPoint.cumulativeMiles

  return (
    <div className="mt-4 space-y-6 text-left">
      <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-sand/30 shadow-sm">
        <div className="relative aspect-[595/350] w-full">
          <Image
            src={boxTappe}
            alt="Mappa interattiva delle tappe 2026"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          <svg
            className="absolute inset-0 h-full w-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polyline
              id="route-track"
              points={routePolylinePoints}
              fill="none"
              stroke="rgba(236, 72, 153, 0.18)"
              strokeWidth="1.05"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {selectedPoint.order > 1 ? (
              <>
                <polyline
                  id="route-base"
                  points={visitedPolylinePoints}
                  fill="none"
                  stroke="rgba(236, 72, 153, 0.95)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ filter: "drop-shadow(0 0 1px rgba(236, 72, 153, 0.28))" }}
                />
                <polyline
                  points={visitedPolylinePoints}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.82)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={100}
                  strokeDasharray="14 86"
                  strokeDashoffset="100"
                  style={{
                    filter: "blur(0.08px) drop-shadow(0 0 5px rgba(236, 72, 153, 0.18))",
                    animation: "route-flow 2.6s linear infinite",
                  }}
                />
                <style jsx>{`
                  @keyframes route-flow {
                    from {
                      stroke-dashoffset: 100;
                    }
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                `}</style>
              </>
            ) : null}
          </svg>

          {routePoints.map((point) => {
            const isActive = point.id === selectedPointId
            const isVisited = point.order <= selectedPoint.order

            return (
              <button
                key={point.id}
                type="button"
                onClick={() => setSelectedPointId(point.id)}
                className={`group absolute z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-highlight/25 md:h-10 md:w-10 ${
                  isActive ? "scale-110" : "hover:scale-110"
                }`}
                style={{ top: point.top, left: point.left }}
                aria-label={`Seleziona ${point.label}, punto ${String(point.order).padStart(2, "0")}, tratto ${point.segmentMiles} miglia nautiche, totale ${point.cumulativeMiles} miglia nautiche`}
                aria-pressed={isActive}
              >
                <span
                  className={`absolute inset-0 rounded-full transition duration-200 ${
                    isActive
                      ? "bg-pink-highlight/20 ring-2 ring-pink-highlight/30 md:shadow-[0_0_0_8px_rgba(236,72,153,0.08)] shadow-none"
                      : isVisited
                        ? "bg-pink-highlight/12 ring-2 ring-pink-highlight/20 md:shadow-[0_0_0_6px_rgba(236,72,153,0.04)] shadow-none"
                        : "bg-white/20 ring-1 ring-white/35 md:shadow-[0_0_0_4px_rgba(255,255,255,0.06)] shadow-none group-hover:bg-pink-highlight/10"
                  }`}
                />
                <span
                  className={`relative z-10 block rounded-full border border-white/90 md:shadow-[0_0_0_1px_rgba(236,72,153,0.25)] transition-all duration-200 ${
                    isActive
                      ? "h-[10px] w-[10px] md:h-[18px] md:w-[18px] bg-pink-highlight md:shadow-[0_0_14px_rgba(236,72,153,0.55)]"
                      : isVisited
                        ? "h-2.5 w-2.5 md:h-3.5 md:w-3.5 bg-pink-highlight/95 md:shadow-[0_0_10px_rgba(236,72,153,0.35)]"
                        : "h-2 w-2 md:h-3 md:w-3 bg-pink-highlight/80 group-hover:bg-pink-highlight"
                  }`}
                />
              </button>
            )
          })}

          {/* navigation moved below map */}

        </div>
        </div>

        {/* Nav arrows placed between map and details */}
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              const currentIdx = routePoints.findIndex((p) => p.id === selectedPointId)
              if (currentIdx > 0) setSelectedPointId(routePoints[currentIdx - 1].id)
            }}
            aria-label="Tappa precedente"
            className="flex h-8 w-8 items-center justify-center rounded-full border bg-background/90 shadow-sm hover:bg-sand/20 md:h-10 md:w-10"
          >
            <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div />

          <button
            type="button"
            onClick={() => {
              const currentIdx = routePoints.findIndex((p) => p.id === selectedPointId)
              if (currentIdx < routePoints.length - 1) setSelectedPointId(routePoints[currentIdx + 1].id)
            }}
            aria-label="Tappa successiva"
            className="flex h-8 w-8 items-center justify-center rounded-full border bg-background/90 shadow-sm hover:bg-sand/20 md:h-10 md:w-10"
          >
            <svg className="h-4 w-4 text-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        <div className="rounded-2xl border border-border/60 bg-background p-4 shadow-[0_14px_30px_rgba(15,23,42,0.06)] md:p-6" aria-live="polite">
        <div className="flex flex-wrap items-end gap-3">
          <h4 className="font-serif text-2xl text-foreground md:text-3xl">{selectedPoint.label}</h4>
          <span className="rounded-full border border-pink-highlight/20 bg-pink-highlight/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-pink-text">
            #{String(selectedPoint.order).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-3 border-t border-border pt-6 md:gap-6 md:pt-8">
          <div>
            <p className="font-serif text-2xl md:text-4xl text-pink-text">{String(selectedPoint.order).padStart(2, "0")}</p>
            <p className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Numero tappa</p>
          </div>
          <div>
            <p className="font-serif text-2xl md:text-4xl text-pink-text">{remainingStages}</p>
            <p className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Tappe mancanti</p>
          </div>
          <div>
            <p className="font-serif text-2xl md:text-4xl text-pink-text">{selectedPoint.segmentMiles}</p>
            <p className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Mn ultimo tratto</p>
          </div>
          <div>
            <p className="font-serif text-2xl md:text-4xl text-pink-text">{selectedPoint.cumulativeMiles}</p>
            <p className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Mn totali percorse</p>
          </div>
          <div>
            <p className="font-serif text-2xl md:text-4xl text-pink-text">{remainingMiles}</p>
            <p className="mt-2 text-[10px] md:text-xs uppercase tracking-widest text-muted-foreground">Mn mancanti</p>
          </div>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {routeGroups.map((section) => (
          <div key={section.title} className="space-y-3">
            <p className="font-medium text-foreground">{section.title}</p>
            <div className="space-y-2">
              {section.points.map((point) => {
                const isActive = point.id === selectedPointId

                return (
                  <button
                    key={point.id}
                    type="button"
                    onClick={() => setSelectedPointId(point.id)}
                    className={`flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left transition duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-highlight/20 ${
                      isActive
                        ? "border-pink-highlight/40 bg-pink-highlight/8 shadow-[0_8px_22px_rgba(236,72,153,0.08)]"
                        : "border-border/60 bg-background hover:border-pink-highlight/25 hover:bg-sand/20"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${isActive ? "bg-pink-highlight text-white" : "bg-sand text-pink-text"}`}>
                      {String(point.order).padStart(2, "0")}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium text-foreground">{point.label}</span>
                      <span className="block text-sm text-muted-foreground">
                        Tratto {point.segmentMiles} mn · Totale {point.cumulativeMiles} mn
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

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

        <div className="space-y-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {services.filter((service) => service.variant !== "stages").map((service, index) => (
              <div
                key={service.title}
                className={`group w-full overflow-hidden rounded-[2rem] border border-border/60 bg-background shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition-transform duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)] p-5 lg:p-6 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${300 + index * 120}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-center font-serif text-2xl text-foreground mb-3">
                    {service.title}
                  </h3>
                  <div className="my-3 flex h-10 items-center justify-center text-pink-text">
                    {service.icon}
                  </div>
                  <div className="mb-4 w-full overflow-hidden rounded-2xl border border-border/50 bg-sand/30 shadow-sm">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      className="h-56 w-full object-cover md:h-60"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="w-full max-w-prose text-left text-muted-foreground leading-relaxed font-sans text-sm md:text-base">
                    <div className="space-y-4">{service.description}</div>
                  </div>
                </div>
              </div>
            ))}

          </div>

          <div className="rounded-[2rem] border border-border/60 bg-background/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:p-8">
            <div className="mb-6 flex flex-col gap-3 border-b border-border/60 pb-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-pink-text">Edizione 2026</p>
                <h3 className="mt-2 font-serif text-3xl text-foreground md:text-4xl">Itinerario a tappe</h3>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
                Tocca un punto della mappa per vedere il tratto, le miglia nautiche del segmento e il totale accumulato.
              </p>
            </div>

            <TappeInteractiveMap />
          </div>
        </div>
      </div>
    </section>
  )
}
