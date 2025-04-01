"use client"

import { MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Only show the button after the component has mounted to avoid hydration issues
  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!isVisible) return null

  return (
    <a
      href="https://wa.me/27691146631"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-4 bottom-4 z-50 bg-green-600 text-white p-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap">
        Chat with us
      </span>
    </a>
  )
}

