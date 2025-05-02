import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Star, Shield, Zap } from "lucide-react"
import AuctionCard from "@/components/auction-card"
import NewsletterSignup from "@/components/newsletter-signup"
import { auctions } from "@/lib/data"

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-20 md:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 bg-clip-text text-transparent">
              Bid on Skills. Win Time.
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              A modern marketplace for short-term freelance services where talent meets opportunity.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full"
                asChild
              >
                <Link href="/auctions">Explore Auctions</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-pink-400 text-pink-500 hover:bg-pink-50 dark:border-pink-500 dark:text-pink-400 dark:hover:bg-gray-800"
                asChild
              >
                <Link href="/post-gig">Post Your Skill</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-pink-200 dark:bg-pink-900 opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-80 h-80 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/3 w-72 h-72 rounded-full bg-rose-200 dark:bg-rose-900 opacity-20 blur-3xl"></div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              SkillSwap makes it easy to connect with talented professionals and get your projects done.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center transition-transform hover:scale-105 shadow-sm hover:shadow-md">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-pink-500 dark:text-pink-400" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Browse & Bid</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Explore available gigs and place your bid on services that match your budget.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center transition-transform hover:scale-105 shadow-sm hover:shadow-md">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="h-8 w-8 text-purple-500 dark:text-purple-400" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Win & Connect</h3>
              <p className="text-gray-600 dark:text-gray-400">
                When your bid wins, connect with the talent and discuss project details.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 text-center transition-transform hover:scale-105 shadow-sm hover:shadow-md">
              <div className="w-16 h-16 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-rose-500 dark:text-rose-400" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Receive & Review</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Get your work delivered securely and leave feedback to build the community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Live Auctions Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Live Auctions</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Discover talented professionals offering their services right now.
              </p>
            </div>
            <Link
              href="/auctions"
              className="hidden md:flex items-center text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 font-medium"
            >
              View all auctions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {auctions.slice(0, 6).map((auction) => (
              <AuctionCard key={auction.id} auction={auction} />
            ))}
          </div>

          <div className="mt-10 text-center md:hidden">
            <Button
              variant="outline"
              className="rounded-full border-pink-400 text-pink-500 hover:bg-pink-50 dark:border-pink-500 dark:text-pink-400 dark:hover:bg-gray-700"
              asChild
            >
              <Link href="/auctions">
                View all auctions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Sellers Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Featured Sellers</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Meet our top-rated professionals with exceptional skills and reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 text-center transition-all hover:shadow-md"
              >
                <div className="w-20 h-20 mx-auto mb-4 relative">
                  <img
                    src={`/placeholder.svg?height=80&width=80&text=Seller ${i}`}
                    alt={`Featured Seller ${i}`}
                    className="rounded-full object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white dark:border-gray-800"></div>
                </div>
                <h3 className="font-playfair text-lg font-semibold mb-1">Seller Name</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">UI/UX Designer</p>
                <div className="flex items-center justify-center text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">5.0</span>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-pink-400 text-pink-500 hover:bg-pink-50 dark:border-pink-500 dark:text-pink-400 dark:hover:bg-gray-700 w-full"
                >
                  View Profile
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Why Choose SkillSwap</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We're revolutionizing how freelance services are bought and sold.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center shrink-0">
                <Shield className="h-6 w-6 text-pink-500 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Secure Transactions</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  All payments are held in escrow until you're satisfied with the delivered work.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center shrink-0">
                <Zap className="h-6 w-6 text-purple-500 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Fast Delivery</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our platform is designed for quick turnarounds on short-term projects.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/30 rounded-full flex items-center justify-center shrink-0">
                <Star className="h-6 w-6 text-rose-500 dark:text-rose-400" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Vetted Professionals</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We verify all sellers to ensure you're working with qualified experts.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-pink-500 dark:text-pink-400" />
              </div>
              <div>
                <h3 className="font-playfair text-xl font-semibold mb-2">Transparent Bidding</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our auction system ensures fair pricing and competitive offers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSignup />
    </div>
  )
}
