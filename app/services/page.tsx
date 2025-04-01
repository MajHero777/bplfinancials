import ServicesList from "@/components/services-list"
import PageHeader from "@/components/page-header"

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Our Services" description="Comprehensive financial solutions tailored to your needs" />
      <ServicesList />
    </>
  )
}

