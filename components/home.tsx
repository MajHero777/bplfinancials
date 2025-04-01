import { Shield, TrendingUp, Users, MessageCircle } from "lucide-react"
import Image from "next/image"
import PageHeader from "./page-header"

export default function Home() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Welcome to BPL Financials"
        description="Your trusted partner in financial planning and insurance solutions."
      />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              {/* First image - Professional Team Collaboration */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group-afro-americans-working-together.jpg-mgYYGOOwFqVBnP4QnAbRRgsyP3MRzp.jpeg"
                alt="Professional Team Collaboration"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="order-1 md:order-2 text-center md:text-left flex flex-col">
              <div className="mb-6">
                <a
                  href="https://wa.me/27691146631?text=Hello%2C%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 shadow-lg transform transition-transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Us on WhatsApp
                </a>
              </div>
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground">
                  At BPL Financials, we understand that financial security is a cornerstone of peace of mind. Our
                  comprehensive range of insurance and financial services are designed to protect what matters most to
                  you.
                </p>
                <p className="text-lg text-muted-foreground">
                  Whether you're looking for life insurance, funeral cover, income protection, or expert financial
                  planning, our team of dedicated professionals is here to guide you every step of the way.
                </p>
                <p className="text-lg text-muted-foreground">
                  Discover how we can help you build a secure financial future with tailored solutions that meet your
                  unique needs and goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose BPL Financials?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              {/* Second image - Professional Financial Consultation */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icons8-team-yTwXpLO5HAA-unsplash.jpg-di5lOzqjaNtcvS504iOzIWcCIw0rLt.jpeg"
                alt="Professional Financial Consultation"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid gap-8">
              <div className="text-left">
                <Shield className="w-12 h-12 text-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Comprehensive Protection</h3>
                <p className="text-muted-foreground">
                  We offer a wide range of insurance products to safeguard what matters most to you.
                </p>
              </div>
              <div className="text-left">
                <TrendingUp className="w-12 h-12 text-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Expert Financial Advice</h3>
                <p className="text-muted-foreground">
                  Our team of experienced advisors will help you make informed financial decisions.
                </p>
              </div>
              <div className="text-left">
                <Users className="w-12 h-12 text-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">Personalized Service</h3>
                <p className="text-muted-foreground">We tailor our solutions to meet your unique needs and goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">Our Digital Solutions</h2>
              <div className="grid gap-6">
                {["Insurance", "Financial Planning", "Investment Advice", "Retirement Planning"].map(
                  (service, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{service}</h3>
                      <p className="text-muted-foreground mb-4">Tailored solutions to protect and grow your assets.</p>
                      <a
                        href={`https://wa.me/27691146631?text=Hello%2C%20I'm%20interested%20in%20your%20${encodeURIComponent(service)}%20services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 inline-flex items-center"
                      >
                        <MessageCircle className="mr-1 w-4 h-4" /> Contact via WhatsApp
                      </a>
                    </div>
                  ),
                )}
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-lg">
              {/* Third image - Professional Financial Services */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/christina-wocintechchat-com-vLwH8bWoi_8-unsplash.jpg-90nxlQLpRTcXdxtcFMAoZb7eK7ec5y.jpeg"
                alt="Professional Financial Services"
                fill
                className="object-cover image-sharp"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

