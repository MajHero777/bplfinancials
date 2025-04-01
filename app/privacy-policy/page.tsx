"use client"

import { useState } from "react"
import { MessageCircle } from "lucide-react"
import PageHeader from "@/components/page-header"

export default function PrivacyPolicyPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <PageHeader title="Privacy Policy" description="Request our privacy policy document" />

      <div className="container mx-auto px-4 py-8">
        {!showForm ? (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
            <p className="mb-6">
              Our Privacy Policy is not publicly available on this page. To receive a copy of our Privacy Policy, please
              click the button below to request the document via WhatsApp.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Request Privacy Policy
            </button>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h1 className="text-3xl font-bold mb-6 text-primary">Request Privacy Policy</h1>
            <p className="mb-6">
              To receive a copy of our Privacy Policy, please click the button below to send your request via WhatsApp.
            </p>
            <div className="max-w-md mx-auto">
              <a
                href="https://wa.me/27691146631?text=Hello%2C%20I%20would%20like%20to%20request%20a%20copy%20of%20your%20Privacy%20Policy.%20Thank%20you."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-3 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Request via WhatsApp
              </a>
            </div>
            <div className="mt-6 text-center">
              <button
                onClick={() => setShowForm(false)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

