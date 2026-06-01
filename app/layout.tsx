import type React from "react"
import type { Metadata, Viewport } from "next"
import localFont from "next/font/local"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const neueMontreal = localFont({
  src: [
    {
      path: "../public/fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/NeueMontreal-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-neue-montreal",
})

export const metadata: Metadata = {
  title: "Mediterraneo in Rosa | Raid Solidale in Gommone per le Donne",
  description: "Scopri Mediterraneo in Rosa, il raid in gommone dalle donne per le donne. Progetto a sostegno dell'Associazione Lorenzo Perrone per aiutare le donne con diagnosi oncologica.",
  openGraph: {
    title: "Mediterraneo in Rosa",
    description: "Il raid in gommone dalle donne per le donne a sostegno dell'Associazione Lorenzo Perrone.",
    type: "website",
    locale: "it_IT",
    siteName: "Mediterraneo in Rosa",
  },
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Mediterraneo in Rosa",
    "alternateName": "MIR",
    "description": "Il raid in gommone dalle donne per le donne, a favore di Cuore Rosa e Associazione Lorenzo Perrone per donne con diagnosi oncologica.",
    "url": "https://www.mediterraneoinrosa.it",
    "logo": "https://www.mediterraneoinrosa.it/logos/MIR%20logo.png"
  };

  return (
    <html lang="en">
      <body className={`${neueMontreal.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
