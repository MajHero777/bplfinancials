import { Car, Home, HeartPulse, Briefcase, Landmark, Umbrella, TrendingUp, PiggyBank } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  { icon: Car, title: "Auto Insurance", description: "Comprehensive coverage for your vehicles." },
  { icon: Home, title: "Home Insurance", description: "Protect your home and belongings." },
  { icon: HeartPulse, title: "Health Insurance", description: "Quality healthcare coverage for you and your family." },
  { icon: Briefcase, title: "Business Insurance", description: "Tailored solutions for your business needs." },
  { icon: Landmark, title: "Financial Planning", description: "Expert advice to achieve your financial goals." },
  {
    icon: Umbrella,
    title: "Life Insurance",
    description: "Secure your family's future with our life insurance plans.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advice",
    description: "Grow your wealth with our expert investment strategies.",
  },
  {
    icon: PiggyBank,
    title: "Retirement Planning",
    description: "Plan for a comfortable retirement with our specialized services.",
  },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-primary">Our Services</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          At BPL Financials, we offer a comprehensive range of financial services and insurance products tailored to meet
          your unique needs. Our expert team is dedicated to helping you protect your assets and achieve your financial
          goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-primary/20">
              <CardHeader>
                <service.icon className="h-10 w-10 text-secondary mb-4" />
                <CardTitle className="text-primary">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

