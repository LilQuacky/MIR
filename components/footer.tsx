import Image from 'next/image'
import type { ComponentType } from 'react'
import {
  ArrowUpRight,
  Facebook,
  Instagram,
  PhoneCall,
  Youtube,
} from 'lucide-react'

import logoAlp from '@/public/logos/Logo_ALP.png'
import mirLogo from '@/public/logos/MIR logo.png'

type IconComponent = ComponentType<{ className?: string }>

const alpSocials = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/associazionelorenzoperrone/',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/associazionelorenzoperrone/',
    icon: Instagram,
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@associazionelorenzoperrone9620',
    icon: Youtube,
  },
  {
    label: 'Chiama ALP',
    href: 'tel:+390227307393',
    icon: PhoneCall,
  },
]

const mirSocials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/raidmediterraneoinrosa/',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1J1qJvSwSd/?mibextid=wwXIfr',
    icon: Facebook,
  },
]

function SocialLink({
  href,
  label,
  icon: Icon,
  variant,
}: {
  href: string
  label: string
  icon: IconComponent
  variant: 'light' | 'dark'
}) {
  const baseClassName =
    variant === 'dark'
      ? 'border-rose-200/70 bg-card text-foreground hover:border-rose-300 hover:bg-card'
      : 'border-rose-200/70 bg-card text-foreground hover:border-rose-300 hover:bg-card'

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`group flex items-center justify-between rounded-2xl border px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${baseClassName}`}
    >
      <span className="flex items-center gap-3">
                <span className="flex size-6 items-center justify-center rounded-full bg-white text-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
          <Icon className="size-4" aria-hidden="true" />
        </span>
        <span>{label}</span>
      </span>
      <ArrowUpRight className="size-4 text-foreground/60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  )
}

function SocialCard({
  eyebrow,
  title,
  description,
  logo,
  logoAlt,
  socials,
  cardClassName,
  badgeClassName,
  variant,
}: {
  eyebrow: string
  title: string
  description: string
  logo: typeof logoAlp
  logoAlt: string
  socials: Array<{
    label: string
    href: string
    icon: IconComponent
  }>
  cardClassName: string
  badgeClassName: string
  variant: 'light' | 'dark'
}) {
  return (
    <section
      className={`relative overflow-hidden rounded-3xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${cardClassName}`}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/60" />
      <div className="absolute -right-10 -top-10 size-28 rounded-full bg-white/10 blur-3xl" />
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${badgeClassName}`}>
            {eyebrow}
          </p>
          <h3 className="mt-2 font-serif text-2xl text-inherit">{title}</h3>
          <p className={`mt-3 text-sm leading-relaxed ${variant === 'dark' ? 'text-white/82' : 'text-foreground/80'}`}>
            {description}
          </p>
        </div>

        <div className={`flex size-16 shrink-0 items-center justify-center rounded-2xl bg-white/80 p-2 shadow-sm ${variant === 'dark' ? 'border border-white/20' : 'border border-pink-100'}`}>
          <Image src={logo} alt={logoAlt} className="h-full w-full object-contain" />
        </div>
      </div>

      <div className="mt-5 grid gap-3">
        {socials.map((social) => (
          <SocialLink key={social.href} href={social.href} label={social.label} icon={social.icon} variant={variant} />
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-white py-16 px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-3 lg:items-start lg:justify-items-center lg:gap-12">
          <div className="flex w-full max-w-md flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-3 rounded-full border border-pink-200/70 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <div className="flex size-11 items-center justify-center rounded-full bg-pink-50">
                <Image src={mirLogo} alt="Mediterraneo in Rosa" className="h-8 w-8 object-contain" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-pink-300">Mediterraneo in Rosa</p>
                <p className="text-xs text-muted-foreground">Una storia di coraggio, rete e prevenzione</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-foreground/80">
              Un’avventura tutta al femminile, un viaggio di coraggio, solidarietà e prevenzione.
            </p>

            <div className="mt-6 grid w-full gap-3 text-sm text-foreground/75">
              <a href="#chi-siamo" className="flex items-center justify-between rounded-2xl border border-border bg-card/70 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-white hover:text-pink-500">
                <span>Chi siamo</span>
                <ArrowUpRight className="size-4" />
              </a>
              <a href="#edizione-2026" className="flex items-center justify-between rounded-2xl border border-border bg-card/70 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-white hover:text-pink-500">
                <span>Edizione 2026</span>
                <ArrowUpRight className="size-4" />
              </a>
              <a href="#l-associazione" className="flex items-center justify-between rounded-2xl border border-border bg-card/70 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-white hover:text-pink-500">
                <span>ALP</span>
                <ArrowUpRight className="size-4" />
              </a>
              <a href="#lorenzo" className="flex items-center justify-between rounded-2xl border border-border bg-card/70 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-white hover:text-pink-500">
                <span>Lorenzo</span>
                <ArrowUpRight className="size-4" />
              </a>
              <a href="#contatti" className="flex items-center justify-between rounded-2xl border border-border bg-card/70 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-pink-200 hover:bg-white hover:text-pink-500">
                <span>Contatti</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>

          <div className="flex w-full max-w-md justify-start">
            <SocialCard
              eyebrow="Associazione Lorenzo Perrone"
              title="Social ALP"
              description="Canali ufficiali dell’associazione Lorenzo Perrone."
              logo={logoAlp}
              logoAlt="Logo Associazione Lorenzo Perrone"
              socials={alpSocials}
              cardClassName="border-pink-200/70 bg-card"
              badgeClassName="text-pink-300"
              variant="light"
            />
          </div>

          <div className="flex w-full max-w-md flex-col items-start justify-between gap-6 text-left lg:items-start lg:text-left">
            <SocialCard
              eyebrow="Mediterraneo in Rosa"
              title="Social MIR"
              description="Le pagine ufficiali del progetto Mediterraneo in Rosa per seguire il viaggio"
              logo={mirLogo}
              logoAlt="Logo Mediterraneo in Rosa"
              socials={mirSocials}
              cardClassName="border-pink-200/70 bg-card"
              badgeClassName="text-pink-300"
              variant="light"
            />
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Mediterraneo in Rosa. Tutti i diritti riservati.
            </p>
            <p className="text-xs text-muted-foreground">
              Seguici sui canali social ufficiali per aggiornamenti, tappe e contenuti dal viaggio.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
