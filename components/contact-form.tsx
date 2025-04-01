"use client"
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground mb-8">
              We're here to help you with any questions you may have about our services. Feel free to reach out to us
              using WhatsApp or the contact information below.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="text-primary" />
                <span className="text-muted-foreground">0430125091</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" />
                <span className="text-muted-foreground">info@bplfinancials.co.za</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" />
                <span className="text-muted-foreground">1 Cavendish Rd, Vincent, East London, 5247</span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 mb-8">
              <div className="relative h-[200px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/scott-graham-5fNmWej4tAA-unsplash.jpg-srnPoMFk8GGVTbuAJnBhIxvSDKeWJE.jpeg"
                  alt="Financial Planning"
                  fill
                  className="object-cover image-sharp"
                />
              </div>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/krakenimages-Y5bvRlcCx8k-unsplash.jpg-dhNyQaQkXmVaVRHbrpekEyQ1es0pU8.jpeg"
                alt="Team Collaboration"
                fill
                className="object-cover image-sharp"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us Directly</h2>
              <p className="text-muted-foreground mb-8 text-center">
                For the fastest response, contact us directly via WhatsApp. Our team is ready to assist you with any
                inquiries.
              </p>
              <a
                href="https://wa.me/27691146631?text=Hello%2C%20I'm%20contacting%20you%20from%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contact via WhatsApp
              </a>
              <p className="text-xs text-muted-foreground text-center mt-4">
                Click the button above to open WhatsApp and send us a message
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

