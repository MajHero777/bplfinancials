"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Image from "next/image"

const services = {
  BUSINESS: {
    title: "Business Services",
    items: [
      {
        name: "Business Consulting",
        description:
          "Expert guidance for business strategy, growth, and operational efficiency. Our consulting services help optimize your business processes and achieve your organizational goals.",
      },
      {
        name: "Share Certificates",
        description:
          "Professional assistance with share certificate issuance, transfers, and documentation. We ensure compliance with all relevant regulations and maintain accurate records.",
      },
      {
        name: "Beneficial Ownership",
        description:
          "Comprehensive services for managing and documenting beneficial ownership structures, ensuring transparency and compliance with regulatory requirements.",
      },
      {
        name: "Tax Clearance(PIN)",
        description:
          "Assistance in obtaining tax clearance certificates and PIN numbers. We help ensure your business remains compliant with tax authorities.",
      },
      {
        name: "FSP Registrations",
        description:
          "Complete support for Financial Service Provider registration processes, including documentation and compliance requirements.",
      },
    ],
  },
  LEGAL: {
    title: "Legal Services",
    items: [
      {
        name: "FSP Debarments",
        description:
          "Professional assistance with FSP debarment processes and appeals, ensuring proper representation and compliance with regulatory requirements.",
      },
      {
        name: "CCMA Representation",
        description:
          "Expert representation at CCMA proceedings, helping both employers and employees navigate labor disputes effectively.",
      },
      {
        name: "Labour Disputes",
        description:
          "Comprehensive support for various labor-related disputes, including mediation, negotiation, and legal representation.",
      },
      {
        name: "Rental contract disputes",
        description:
          "Professional assistance in resolving rental contract conflicts, protecting the rights of both landlords and tenants.",
      },
      {
        name: "Rental Housing Tribunal Representation",
        description:
          "Expert representation at Rental Housing Tribunal proceedings, ensuring your interests are properly defended.",
      },
    ],
  },
  FINANCIAL: {
    title: "Financial Services",
    items: [
      {
        name: "Unfairly Blacklisted",
        description:
          "Assistance in addressing and resolving unfair credit listings, helping you restore your credit status.",
      },
      {
        name: "Credit/debt disputes",
        description:
          "Professional support in resolving credit and debt-related conflicts, including negotiation with creditors and dispute resolution.",
      },
      {
        name: "Funeral/ Life Covers",
        description:
          "Comprehensive funeral and life insurance solutions, ensuring financial protection for you and your loved ones.",
      },
      {
        name: "Income Protector Covers",
        description:
          "Specialized insurance products designed to protect your income in case of disability or inability to work.",
      },
    ],
  },
  "DECEASED ESTATES": {
    title: "Deceased Estates Services",
    items: [
      {
        name: "Drafting of Wills",
        description:
          "Professional will drafting services ensuring your assets are distributed according to your wishes and legal requirements.",
      },
      {
        name: "Changes to existing Wills",
        description:
          "Expert assistance in modifying existing wills to reflect your current wishes while maintaining legal validity.",
      },
      {
        name: "Winding up of deceased estates",
        description:
          "Comprehensive support in managing and finalizing deceased estates, including asset distribution and legal compliance.",
      },
      {
        name: "Nomination of Executors",
        description: "Assistance in selecting and appointing appropriate executors for estate administration.",
      },
    ],
  },
}

export default function ServicesList() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-6 text-foreground">Our Services</h1>
            <p className="text-muted-foreground mb-8">
              At BPL Financials, we offer comprehensive financial solutions tailored to your needs. Our expert team is
              ready to help you achieve your financial goals.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/krakenimages-376KN_ISplE-unsplash.jpg-y5q1aGndIYN2zJTd1bw91lRVvwl2Py.jpeg"
              alt="Business Success Celebration"
              fill
              className="object-cover image-sharp"
            />
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {Object.entries(services).map(([category, { title, items }]) => (
              <AccordionItem key={category} value={category}>
                <AccordionTrigger className="text-xl font-semibold text-foreground">{title}</AccordionTrigger>
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full">
                    {items.map((service, index) => (
                      <AccordionItem key={index} value={`${category}-${index}`}>
                        <AccordionTrigger className="text-left text-foreground">{service.name}</AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">{service.description}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

