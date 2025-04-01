import { MessageCircle } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function PAIAPage() {
  return (
    <>
      <PageHeader
        title="Promotion of Access to Information Act (PAIA)"
        description="Manual regarding access to information held by BPL Financials"
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-6 text-primary">PAIA Manual</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">1. INTRODUCTION</h2>
            <p className="text-muted-foreground mb-4">
              BPL Financials is committed to promoting transparency and ensuring that stakeholders can exercise their
              right to access information in accordance with the Promotion of Access to Information Act (PAIA). This
              manual provides guidance on how to request access to our records and outlines our obligations under PAIA.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">2. DEFINITIONS</h2>
            <ul className="list-none space-y-3 text-muted-foreground">
              <li>
                <p>
                  <span className="font-medium text-foreground">"PAIA"</span> refers to the Promotion of Access to
                  Information Act, 2 of 2000.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-medium text-foreground">"Requester"</span> refers to any person who requests
                  access to a record of BPL Financials.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-medium text-foreground">"Record"</span> refers to any recorded information in
                  possession or under the control of BPL Financials, regardless of its form.
                </p>
              </li>
              <li>
                <p>
                  <span className="font-medium text-foreground">"Information Officer"</span> refers to the person
                  responsible for ensuring compliance with PAIA at BPL Financials.
                </p>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">3. PURPOSE OF THIS MANUAL</h2>
            <p className="text-muted-foreground mb-3">This manual is intended to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide an overview of the types of records held by BPL Financials.</li>
              <li>Explain the procedures for requesting access to such records.</li>
              <li>Outline the rights of requesters and the responsibilities of BPL Financials.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">4. GUIDE TO PAIA</h2>
            <p className="text-muted-foreground">
              The Information Regulator provides a guide to PAIA, which explains how to exercise the right to access
              information. This guide can be accessed via the Information Regulator's website or by contacting their
              office directly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">5. TYPES OF RECORDS HELD</h2>
            <p className="text-muted-foreground mb-3">BPL Financials maintains records in the following categories:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <span className="font-medium">Company Records:</span> Registration documents, governance policies, and
                compliance records.
              </li>
              <li>
                <span className="font-medium">Financial Records:</span> Audited financial statements, tax returns, and
                invoices.
              </li>
              <li>
                <span className="font-medium">Client Records:</span> Insurance policies, claims records, and client
                correspondence.
              </li>
              <li>
                <span className="font-medium">Human Resources Records:</span> Employee contracts, payroll records, and
                training materials.
              </li>
              <li>
                <span className="font-medium">Legal Records:</span> Agreements, dispute resolution records, and
                regulatory filings.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              6. PROCEDURE FOR REQUESTING ACCESS TO RECORDS
            </h2>
            <p className="text-muted-foreground mb-3">To request access to a record, follow these steps:</p>
            <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
              <li>
                Complete the prescribed PAIA request form (available from the Information Regulator or our website).
              </li>
              <li>Submit the completed form to the Information Officer at BPL Financials.</li>
              <li>Pay the applicable request fee (if required).</li>
              <li>Await acknowledgment and processing of your request within the prescribed timeframe.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">7. GROUNDS FOR REFUSAL OF ACCESS</h2>
            <p className="text-muted-foreground mb-3">Access to certain records may be refused if:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>The information is classified as confidential or contains personal data of third parties.</li>
              <li>The disclosure would harm the commercial interests of BPL Financials.</li>
              <li>The request is deemed unreasonable or excessive.</li>
              <li>The information is legally privileged or protected by other legislation.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">8. FEES</h2>
            <p className="text-muted-foreground">
              A fee may be charged to process a request, depending on the complexity and nature of the information
              requested. The fee structure is available upon request or from the Information Regulator's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">9. REMEDIES FOR REQUESTERS</h2>
            <p className="text-muted-foreground mb-3">If access to a record is denied, the requester may:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Submit an internal appeal to the Information Officer.</li>
              <li>Lodge a complaint with the Information Regulator.</li>
              <li>Seek legal recourse through the courts.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">10. CONTACT DETAILS</h2>
            <p className="text-muted-foreground mb-3">For PAIA requests or further information, contact:</p>
            <div className="pl-6 text-muted-foreground">
              <p className="font-medium text-foreground">BPL Financials – Information Officer</p>
              <p>Email: info@bplfinancials.co.za</p>
              <p>Phone: 043 012 5091</p>
              <p>Address: 1 Cavendish Rd, Vincent, East London, 5247</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3 text-foreground">11. UPDATES TO THIS MANUAL</h2>
            <p className="text-muted-foreground">
              This manual is reviewed periodically and may be updated to reflect changes in legislation or company
              policies. Any updates will be made available on our website.
            </p>
          </section>

          <div className="mt-10 pt-6 border-t border-gray-200 text-center">
            <p className="text-muted-foreground italic mb-6">
              By engaging with BPL Financials, requesters acknowledge their rights and obligations under PAIA and agree
              to follow the prescribed procedures when requesting access to information.
            </p>

            <a
              href="https://wa.me/27691146631?text=Hello%2C%20I%20would%20like%20to%20request%20information%20under%20PAIA."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Request Information via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

