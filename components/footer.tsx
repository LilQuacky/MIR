export function Footer() {
  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-4">
            <p className="font-serif text-2xl tracking-wide text-black mb-4">Il Giro d’Italia</p>
            <p className="text-sm text-black leading-relaxed">
              Un’avventura tutta al femminile, un viaggio di coraggio, solidarietà e prevenzione.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Naviga</p>
            <nav className="flex flex-col gap-3">
              <a href="#chi-siamo" className="text-sm text-foreground hover:text-pink-text transition-colors">
                Chi Siamo
              </a>
              <a href="#edizione-2026" className="text-sm text-foreground hover:text-pink-text transition-colors">
                Edizione 2026
              </a>
              <a href="#l-associazione" className="text-sm text-foreground hover:text-pink-text transition-colors">
                ALP
              </a>
              <a href="#lorenzo" className="text-sm text-foreground hover:text-pink-text transition-colors">
                Lorenzo
              </a>
              <a href="#contatti" className="text-sm text-foreground hover:text-pink-text transition-colors">
                Contatti
              </a>
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">Social & Contatti</p>
            <nav className="flex flex-col gap-3">
              <a href="https://www.facebook.com/associazionelorenzoperrone/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-pink-text transition-colors">
                Facebook
              </a>
              <a href="https://www.instagram.com/associazionelorenzoperrone/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-pink-text transition-colors">
                Instagram
              </a>
              <a href="https://www.youtube.com/@associazionelorenzoperrone9620" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground hover:text-pink-text transition-colors">
                YouTube
              </a>
              <a href="tel:+390227307393" className="text-sm text-foreground hover:text-pink-text transition-colors mt-2">
                Chiama ALP
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="max-w-3xl mx-auto text-center mb-6">
            <p className="text-xs text-muted-foreground mt-6">
              &copy; {new Date().getFullYear()} Mediterraneo in Rosa. Tutti i diritti riservati.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
          </div>
        </div>
      </div>
    </footer>
  )
}
