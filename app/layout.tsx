import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import BackToTopButton from "@/components/back-to-top-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BPL Financials - Your Trusted Insurance Partner",
  description: "Find the best insurance policies tailored to your needs with BPL Financials.",
  icons: {
    icon: [
      {
        url: "/images/bpl-logo.png",
        href: "/images/bpl-logo.png",
      },
    ],
    shortcut: {
      url: "/images/bpl-logo.png",
    },
    apple: {
      url: "/images/bpl-logo.png",
      sizes: "180x180",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/bpl-logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow bg-background">{children}</main>
          <Footer />
        </div>
        <BackToTopButton />
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'