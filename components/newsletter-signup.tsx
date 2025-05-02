"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your API
    setSubmitted(true)
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-r from-pink-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-sm">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for the latest gigs, features, and freelancing tips.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-green-600 dark:text-green-400">
              <Check className="h-5 w-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-full px-4 py-2 border-gray-300 dark:border-gray-700 focus:border-pink-400 focus:ring focus:ring-pink-200 dark:focus:ring-pink-800 dark:focus:ring-opacity-50"
              />
              <Button
                type="submit"
                className="rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
