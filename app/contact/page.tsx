"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Twitter, FileText, Mail, MapPin, Phone, Check } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-pink-500 dark:text-pink-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">For general inquiries:</p>
                  <a href="mailto:hello@skillswap.com" className="text-pink-500 dark:text-pink-400 hover:underline">
                    hello@skillswap.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-1">Monday to Friday, 9am to 5pm EST:</p>
                  <a href="tel:+1234567890" className="text-pink-500 dark:text-pink-400 hover:underline">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-rose-500 dark:text-rose-400" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Innovation Street
                    <br />
                    Tech Hub, Suite 456
                    <br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="font-playfair text-2xl font-bold mb-6">Connect With Us</h2>

              <div className="flex space-x-4">
                <Link
                  href="https://github.com"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-100 hover:text-pink-500 dark:hover:bg-pink-900/30 dark:hover:text-pink-400 transition-colors"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
                <Link
                  href="https://twitter.com"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-100 hover:text-pink-500 dark:hover:bg-pink-900/30 dark:hover:text-pink-400 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-100 hover:text-pink-500 dark:hover:bg-pink-900/30 dark:hover:text-pink-400 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link
                  href="https://medium.com"
                  className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-pink-100 hover:text-pink-500 dark:hover:bg-pink-900/30 dark:hover:text-pink-400 transition-colors"
                >
                  <FileText className="h-5 w-5" />
                  <span className="sr-only">Medium</span>
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="font-playfair text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Thank you for reaching out. We'll respond to your inquiry shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline" className="rounded-full">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Your name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Your email" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message..." className="min-h-32" required />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full"
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
