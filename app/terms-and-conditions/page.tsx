import { MessageCircle } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHeader title="Terms and Conditions" description="Request our terms and conditions document" />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <h1 className="text-3xl font-bold mb-6 text-primary">Terms and Conditions</h1>
          <p className="mb-6">
            To receive a copy of our Terms and Conditions, please click the button below to request the document via
            WhatsApp.
          </p>
          <div className="max-w-md mx-auto">
            <a
              href="https://wa.me/27691146631?text=Hello%2C%20I%20would%20like%20to%20request%20a%20copy%20of%20your%20Terms%20and%20Conditions.%20Thank%20you."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full py-3 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Request via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

