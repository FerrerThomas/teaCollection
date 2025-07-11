import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" })

export const metadata: Metadata = {
  title: "Tea Collection ",
  description:
    "Descubre nuestra selección premium de tés en hierbas naturales. Calidad, sabor y bienestar en cada taza.",
    generator: 'Tomas Ferrer'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${lora.variable} font-sans antialiased`}>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  )
}
