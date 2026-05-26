import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Partners } from "@/components/partners"
import { Alp } from "@/components/alp"
import { Edizione2026 } from "@/components/edizione2026"
import { ChiSiamo } from "@/components/chi-siamo"
import { Lorenzo } from "@/components/lorenzo"
import { Contatti } from "@/components/contatti"
import { Footer } from "@/components/footer"

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
        <Footer />
    </main>
  )
}
