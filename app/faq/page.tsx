import FAQList from "@/components/faq-list"
import PageHeader from "@/components/page-header"

export default function FAQPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about our services"
      />
      <FAQList />
    </>
  )
}

