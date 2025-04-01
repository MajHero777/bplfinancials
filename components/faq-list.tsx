import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What types of insurance does BPL Financials offer?",
    answer:
      "BPL Financials offers a wide range of insurance products, including life insurance, funeral cover, income protection, and various business insurance solutions. We also provide financial planning services and assistance with wills and estates.",
  },
  {
    question: "How do I know which insurance policy is right for me?",
    answer:
      "Our expert advisors can help you determine the best insurance policy based on your individual needs, financial situation, and long-term goals. We offer personalized consultations to assess your requirements and recommend the most suitable coverage options.",
  },
  {
    question: "What is the process for filing a claim?",
    answer:
      "The claim filing process varies depending on the type of insurance and the specific circumstances. Generally, you should contact us as soon as possible after the event that led to the claim. Our team will guide you through the necessary steps and documentation required to process your claim efficiently.",
  },
  {
    question: "Can I modify my insurance policy after purchase?",
    answer:
      "Yes, in most cases, you can modify your insurance policy after purchase. This might include changing coverage amounts, adding or removing beneficiaries, or adjusting your premium payment schedule. Contact our customer service team to discuss your specific needs and options.",
  },
  {
    question: "What factors affect my insurance premiums?",
    answer:
      "Insurance premiums are influenced by various factors, including the type and amount of coverage, your age, health condition, occupation, lifestyle habits, and sometimes your credit history. For business insurance, factors like the nature of your business, number of employees, and annual revenue may also be considered.",
  },
  {
    question: "How often should I review my insurance coverage?",
    answer:
      "We recommend reviewing your insurance coverage annually or whenever you experience significant life changes such as marriage, birth of a child, purchase of a new home, or major career changes. Regular reviews ensure your coverage remains adequate for your current situation.",
  },
  {
    question: "What sets BPL Financials apart from other insurance providers?",
    answer:
      "BPL Financials stands out due to our personalized approach, comprehensive range of services, and partnerships with leading insurance companies. We focus on understanding each client's unique needs and providing tailored solutions, backed by excellent customer service and ongoing support.",
  },
]

export default function FAQList() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-foreground">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

