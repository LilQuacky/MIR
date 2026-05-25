import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ALP } from "@/components/ALP"
import { NuovaEdizione } from "@/components/NuovaEdizione"
import { Edizioni } from "@/components/edizioni"
import { Lorenzo } from "@/components/lorenzo"
import { Contatti } from "@/components/contatti"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
        <Header />
        <Hero />
        <Edizioni />
        <NuovaEdizione />
        <ALP />
        <Lorenzo />
        <Contatti />
        <Footer />
    </main>
  )
}
