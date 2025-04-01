import { MessageCircle } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function POPIAPage() {
  return (
    <>
      <PageHeader
        title="Protection of Personal Information Act (POPIA)"
        description="Terms and Conditions regarding the processing of your personal information"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-6 text-primary">POPIA Terms and Conditions</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">1. INTRODUCTION</h2>
            <p className="text-muted-foreground mb-4">
              BPL Financials is committed to protecting your personal information and ensuring that your privacy is
              respected in accordance with the Protection of Personal Information Act (POPIA). These terms and
              conditions outline how we collect, process, store, and protect your personal data when you engage with our
              insurance services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">2. DEFINITIONS</h2>
            <ul className="list-none space-y-3 text-muted-foreground">
              <li>
                <p>
                  <span className="font-medium text-foreground">"POPIA"</span> refers to the Protection of Personal
                  Information Act, 4 of 2013.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-medium text-foreground">"Personal Information"</span> refers to any information
                  relating to an identifiable individual, including but not limited to names, identity numbers, contact
                  details, financial information, and health-related data.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-medium text-foreground">"Processing"</span> includes the collection, storage,
                  modification, dissemination, or destruction of personal information.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-medium text-foreground">"Data Subject"</span> refers to any individual whose
                  personal information is processed by BPL Financials.
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">3. COLLECTION OF PERSONAL INFORMATION</h2>
            <p className="text-muted-foreground mb-3">We collect personal information in the following ways:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>When you apply for or use our insurance products and services.</li>
              <li>When you visit our website or contact us via email or telephone.</li>
              <li>When required by law, regulatory authorities, or industry standards.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              4. PURPOSE OF PROCESSING PERSONAL INFORMATION
            </h2>
            <p className="text-muted-foreground mb-3">
              BPL Financials processes personal information for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To provide insurance products and related services.</li>
              <li>To assess and process insurance claims.</li>
              <li>To comply with legal and regulatory obligations.</li>
              <li>To communicate with clients regarding policies, updates, and changes.</li>
              <li>To prevent fraud and ensure security.</li>
              <li>For marketing purposes (where consent has been provided).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">5. CONSENT AND LEGAL BASIS FOR PROCESSING</h2>
            <p className="text-muted-foreground mb-3">
              By engaging with BPL Financials, you consent to the collection and processing of your personal information
              as outlined in this policy. Processing may also be justified on other legal grounds, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Compliance with legal and contractual obligations.</li>
              <li>Legitimate business interests where such interests do not override your privacy rights.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">6. SHARING OF PERSONAL INFORMATION</h2>
            <p className="text-muted-foreground mb-3">BPL Financials may share personal information with:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Insurance underwriters, brokers, and reinsurers for policy management.</li>
              <li>Third-party service providers who assist in claims processing, IT services, or customer support.</li>
              <li>Regulatory and legal authorities when required by law.</li>
              <li>Credit bureaus and fraud prevention agencies.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              7. SECURITY AND RETENTION OF PERSONAL INFORMATION
            </h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to safeguard personal information from
              unauthorized access, alteration, loss, or misuse. Personal information is retained only for as long as
              necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">8. RIGHTS OF DATA SUBJECTS</h2>
            <p className="text-muted-foreground mb-3">As a data subject, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access your personal information held by BPL Financials.</li>
              <li>Request correction, deletion, or restriction of your personal data.</li>
              <li>Object to processing for direct marketing purposes.</li>
              <li>Lodge a complaint with the Information Regulator if you believe your rights are being infringed.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">9. COOKIES AND DIGITAL DATA</h2>
            <p className="text-muted-foreground">
              Our website may use cookies and tracking technologies to enhance user experience. You can manage cookie
              preferences through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">10. CONTACT INFORMATION</h2>
            <p className="text-muted-foreground mb-3">
              For queries related to POPIA compliance, data access requests, or concerns about your personal
              information, please contact:
            </p>
            <div className="pl-6 text-muted-foreground">
              <p className="font-medium text-foreground">BPL Financials – Privacy Officer</p>
              <p>Email: info@bplfinancials.co.za</p>
              <p>Phone: 043 012 5091</p>
              <p>Address: 1 Cavendish Rd, Vincent, East London, 5247</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">11. CHANGES TO THIS POLICY</h2>
            <p className="text-muted-foreground">
              BPL Financials reserves the right to update or modify this policy as required. Any changes will be
              communicated through our official website or direct notifications.
            </p>
          </section>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <p className="text-muted-foreground italic mb-6">
              By engaging with BPL Financials, you acknowledge that you have read and understood these terms and
              conditions regarding the processing of your personal information under POPIA.
            </p>

            <a
              href="https://wa.me/27691146631?text=Hello%2C%20I%20have%20a%20question%20regarding%20your%20POPIA%20terms%20and%20conditions."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Contact Us via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

