import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Alp } from "@/components/alp"
import { Edizione2026 } from "@/components/edizione2026"
import { ChiSiamo } from "@/components/chi-siamo"
import { Lorenzo } from "@/components/lorenzo"
import { Contatti } from "@/components/contatti"
import { Footer } from "@/components/footer"
import { Ringraziamenti } from "@/components/ringraziamenti"

export const metadata: Metadata = {
    title: "Mediterraneo in Rosa | Raid Solidale in Gommone per le Donne",
    description: "Il raid in gommone dalle donne per le donne a favore di “Cuore Rosa”: il ventaglio di servizi gratuiti dedicati alle donne che affrontano una diagnosi oncologica, firmato Associazione Lorenzo Perrone.",
}

export default function Home() {
  return (
    <main className="min-h-screen">
        <Header />
        <Hero />
        <Partners />
        <ChiSiamo />
        <Edizione2026 />
        <Alp />
        <Lorenzo />
        <Contatti />
        <Ringraziamenti />
        <Footer />
    </main>
  )
}
