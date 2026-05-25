"use client"

import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl tracking-wide text-pink-text flex items-center">
            Mediterraneo in Rosa
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="#chi-siamo"
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors duration-500"
            >
              Chi Siamo
            </Link>
            <Link
              href="#edizione-2026"
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors duration-500"
            >
              Edizione 2026
            </Link>
            <Link
              href="#l-associazione"
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors duration-500"
            >
              ALP
            </Link>
            <Link
              href="#lorenzo"
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors duration-500"
            >
              Lorenzo
            </Link>
            <Link
              href="#contatti"
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors duration-500"
            >
              Contatti
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-px bg-foreground transition-transform duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${isMenuOpen ? "max-h-64 pb-8" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-6 pt-4">
            <Link
              href="#edizioni"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors"
            >
              Edizioni
            </Link>
            <Link
              href="#edizione-2026"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors"
            >
              Edizione 2026
            </Link>
            <Link
              href="#l-associazione"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors"
            >
              ALP
            </Link>
            <Link
              href="#lorenzo"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors"
            >
              Lorenzo
            </Link>
            <Link
              href="#contatti"
              onClick={() => setIsMenuOpen(false)}
              className="text-sm tracking-widest uppercase font-medium text-black hover:text-pink-text transition-colors"
            >
              Contatti
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
