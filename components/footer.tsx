import Image from "next/image"
import Link from "next/link"

const partners = [
  {
    name: "AVBOB",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Avbob-logo-D628DB5758-seeklogo.com-pXRViQvK7P1fCmNZAzkJEwEgJ59icp.png",
    description: "FUNERAL COVER",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-1",
  },
  {
    name: "1Life",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1%20life.jpg-j2LYaT38bPNcMlkw3NA21slqSo21RG.jpeg",
    description: "FUNERAL COVER",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-1",
  },
  {
    name: "Metropolitan",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/metropolitan-pgTlRnwRZHOJG2taWWVPKmqa3xFkn4.png",
    description: "FUNERAL AND LIFE COVER",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-0.5",
    className: "scale-110",
  },
  {
    name: "Liberty",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Liberty_logo_and_Tag_Line_Horizontal-mmX0GcVE4W8E9WMc1z7gh4bsL3VsYj.jpeg",
    description: "LIFE COVER AND INVESTMENTS",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-1",
  },
  {
    name: "Capital Legacy",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capital-small-800x533.jpg-IXyM9hqu0Z3IsGlyHcSjeRNVaD7vNU.jpeg",
    description: "WILLS AND ESTATES",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-0.5",
  },
  {
    name: "Dis-Chem Life",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dischem-5A6XcKfW18Zzmm8oMPaPpRsaunrQOB.png",
    description: "LIFE COVER",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-0",
  },
  {
    name: "Old Mutual",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/old%20mutual-uXnhdzoP58s0A38D9u5M04v44C1eoi.png",
    description: "FUNERAL COVER",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-0.5",
    className: "scale-110",
  },
  {
    name: "Sanlam",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sanlam-Launch-New-Brand-Positioning.jpg-eBtXGeU5x9fgFWVT1l7w3lSoLnIPVx.jpeg",
    description: "FUNERAL COVER",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-0.5",
    className: "scale-110",
  },
  {
    name: "Hollard",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Hollard-tq7zRGr9Ry9NwF8gzTpEG96IXqVfdb.png",
    description: "FUNERAL COVER AND LIFE COVER",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-1",
    className: "scale-110",
  },
  {
    name: "INSETA",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/inseta-TmI99jqqp6mtjEWIBfpFj0k5VK5Fho.png",
    description: "INSURANCE SECTOR EDUCATION AND TRAINING AUTHORITY",
    customStyle: true,
    bgColor: "rgb(255, 255, 255)",
    padding: "p-1",
  },
]

export default function Footer() {
  return (
    <footer className="bg-card text-foreground">
      <div className="container mx-auto px-4">
        {/* Partners Section */}
        <div className="py-8">
          <h2 className="text-2xl font-bold text-center mb-2">Meet Our Partners</h2>
          <p className="text-center mb-6 text-sm text-muted-foreground">
            Offering Funeral, Life and Income Protection Insurance
          </p>
          <div className="relative overflow-hidden">
            <div className="animate-scroll">
              {/* First set of partners */}
              {partners.map((partner, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 mx-2 md:mx-4">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary flex items-center justify-center overflow-hidden shadow-sm ${
                      partner.customStyle ? partner.padding : "bg-background p-2"
                    }`}
                    style={{
                      backgroundColor: partner.customStyle ? partner.bgColor : undefined,
                    }}
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={100}
                      height={100}
                      className={`object-contain w-full h-full ${partner.className || ""}`}
                    />
                  </div>
                </div>
              ))}
              {/* Duplicate set of partners to create seamless loop */}
              {partners.map((partner, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 mx-2 md:mx-4">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-primary flex items-center justify-center overflow-hidden shadow-sm ${
                      partner.customStyle ? partner.padding : "bg-background p-2"
                    }`}
                    style={{
                      backgroundColor: partner.customStyle ? partner.bgColor : undefined,
                    }}
                  >
                    <Image
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      width={100}
                      height={100}
                      className={`object-contain w-full h-full ${partner.className || ""}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="border-t border-primary/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image
                src="/images/bpl-logo.png"
                alt="BPL Financial Logo"
                width={150}
                height={50}
                className="object-contain"
              />
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center space-x-4">
                <li>
                  <Link href="/privacy-policy" className="hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/popia" className="hover:text-primary">
                    POPIA
                  </Link>
                </li>
                <li>
                  <Link href="/paia" className="hover:text-primary">
                    PAIA
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">Contact us: 043 012 5091 / info@bplfinancials.co.za </p>
            <p className="text-sm text-muted-foreground mb-2">1 Cavendish Rd, Vincent, East London, 5247</p>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BPL Financials FSP 54177. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

