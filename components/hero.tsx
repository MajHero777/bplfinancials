import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Protect What Matters Most</h1>
          <p className="text-xl mb-8">
            Find the perfect insurance coverage tailored to your needs with BPL Financials.
          </p>
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            Get Started
          </Button>
        </div>
      </div>
    </section>
  )
}

