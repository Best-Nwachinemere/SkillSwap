"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Clock, DollarSign, Check } from "lucide-react"

export default function PostGigPage() {
  const [isConnected, setIsConnected] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleConnect = () => {
    setIsConnected(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Post Your Gig</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Share your skills with the world and start earning. Set your price, timeframe, and let the bidding begin.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {!isConnected ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="font-playfair">Connect Your Wallet</CardTitle>
              <CardDescription>You need to connect your wallet to post a gig on SkillSwap.</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                onClick={handleConnect}
                className="w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full"
              >
                Connect Wallet
              </Button>
            </CardContent>
          </Card>
        ) : isSubmitted ? (
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-green-500" />
              </div>
              <CardTitle className="font-playfair">Gig Posted Successfully!</CardTitle>
              <CardDescription>
                Your gig is now live and available for bidding. You'll be notified when someone places a bid.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full"
                onClick={() => (window.location.href = "/dashboard")}
              >
                Go to Dashboard
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="font-playfair">Create Your Gig</CardTitle>
              <CardDescription>
                Fill in the details below to create your gig. Be specific about what you offer.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className={`flex items-center justify-center w-8 h-8 rounded-full ${
                        currentStep >= step
                          ? "bg-gradient-to-r from-pink-400 to-purple-500 text-white"
                          : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                      }`}
                    >
                      {step}
                    </div>
                  ))}
                </div>
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                    style={{ width: `${((currentStep - 1) / 2) * 100}%` }}
                  ></div>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Gig Title</Label>
                      <Input id="title" placeholder="e.g., Professional Logo Design with 3 Revisions" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select required>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="design">Design</SelectItem>
                          <SelectItem value="development">Development</SelectItem>
                          <SelectItem value="marketing">Marketing</SelectItem>
                          <SelectItem value="writing">Writing</SelectItem>
                          <SelectItem value="video">Video & Animation</SelectItem>
                          <SelectItem value="music">Music & Audio</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your service in detail..."
                        className="min-h-32"
                        required
                      />
                    </div>

                    <div className="pt-4 flex justify-end">
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(2)}
                        className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="price">Starting Price ($)</Label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Input id="price" type="number" min="5" placeholder="50" className="pl-10" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Auction Duration</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <Select required>
                          <SelectTrigger id="duration" className="pl-10">
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 day</SelectItem>
                            <SelectItem value="3">3 days</SelectItem>
                            <SelectItem value="5">5 days</SelectItem>
                            <SelectItem value="7">7 days</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="delivery">Delivery Time</Label>
                      <Select required>
                        <SelectTrigger id="delivery">
                          <SelectValue placeholder="Select delivery time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 day</SelectItem>
                          <SelectItem value="2">2 days</SelectItem>
                          <SelectItem value="3">3 days</SelectItem>
                          <SelectItem value="5">5 days</SelectItem>
                          <SelectItem value="7">7 days</SelectItem>
                          <SelectItem value="14">14 days</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="rounded-full"
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full"
                      >
                        Continue
                      </Button>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Upload Images</Label>
                      <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                        <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                          Drag and drop images here, or click to browse
                        </p>
                        <Button variant="outline" className="rounded-full">
                          Browse Files
                        </Button>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        You can upload up to 5 images (PNG, JPG, WEBP). Max 5MB each.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tags">Tags (Optional)</Label>
                      <Input id="tags" placeholder="e.g., logo, branding, design (separate with commas)" />
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Add tags to help buyers find your gig. Separate with commas.
                      </p>
                    </div>

                    <div className="pt-4 flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setCurrentStep(2)}
                        className="rounded-full"
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full"
                      >
                        Post Gig
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
