"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, DollarSign, CheckCircle, AlertCircle, Package } from "lucide-react"
import { auctions } from "@/lib/data"

export default function DashboardPage() {
  const [isConnected, setIsConnected] = useState(false)

  const handleConnect = () => {
    setIsConnected(true)
  }

  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">My Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Manage your bids, gigs, and deliveries all in one place.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {!isConnected ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="font-playfair">Connect Your Wallet</CardTitle>
              <CardDescription>You need to connect your wallet to view your dashboard on SkillSwap.</CardDescription>
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
        ) : (
          <Tabs defaultValue="bids" className="w-full">
            <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full mb-8">
              <TabsTrigger value="bids" className="rounded-full">
                My Bids
              </TabsTrigger>
              <TabsTrigger value="gigs" className="rounded-full">
                My Posted Gigs
              </TabsTrigger>
              <TabsTrigger value="deliveries" className="rounded-full">
                Deliveries
              </TabsTrigger>
            </TabsList>

            <TabsContent value="bids" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {auctions.slice(0, 3).map((auction) => (
                  <Card key={auction.id} className="overflow-hidden">
                    <div className="relative h-40">
                      <img
                        src={auction.image || `/placeholder.svg?height=160&width=400&text=${auction.title}`}
                        alt={auction.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-green-500 text-white hover:bg-green-600">
                        Active Bid
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-playfair font-semibold text-lg mb-2 line-clamp-1">{auction.title}</h3>

                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={
                              auction.seller.avatar ||
                              `/placeholder.svg?height=24&width=24&text=${auction.seller.name.charAt(0)}`
                            }
                            alt={auction.seller.name}
                            className="w-6 h-6 rounded-full"
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400">{auction.seller.name}</span>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span>2d left</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Your Bid</p>
                          <p className="font-semibold">${(auction.currentBid - 10).toFixed(2)}</p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Current Highest</p>
                          <p className="font-semibold">${auction.currentBid.toFixed(2)}</p>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button className="w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white">
                          Increase Bid
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="gigs" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {auctions.slice(3, 5).map((auction) => (
                  <Card key={auction.id} className="overflow-hidden">
                    <div className="relative h-40">
                      <img
                        src={auction.image || `/placeholder.svg?height=160&width=400&text=${auction.title}`}
                        alt={auction.title}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-3 left-3 bg-purple-500 text-white hover:bg-purple-600">
                        {auction.bids} Bids
                      </Badge>
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-playfair font-semibold text-lg mb-2 line-clamp-1">{auction.title}</h3>

                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <Clock className="h-4 w-4" />
                          <span>3d left</span>
                        </div>

                        <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                          <DollarSign className="h-4 w-4" />
                          <span>Starting: ${(auction.currentBid - 30).toFixed(2)}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400">Current Highest</p>
                          <p className="font-semibold">${auction.currentBid.toFixed(2)}</p>
                        </div>

                        <Badge variant="outline" className="text-green-500 border-green-500">
                          Active
                        </Badge>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" className="w-1/2 rounded-full">
                          Edit
                        </Button>
                        <Button className="w-1/2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white">
                          View Bids
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="overflow-hidden border-dashed border-2 flex flex-col items-center justify-center p-8 h-full">
                  <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center mb-4">
                    <Package className="h-8 w-8 text-pink-500 dark:text-pink-400" />
                  </div>
                  <h3 className="font-playfair font-semibold text-lg mb-2 text-center">Post a New Gig</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-center mb-4">
                    Share your skills and start earning
                  </p>
                  <Button className="rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white">
                    Create Gig
                  </Button>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="deliveries" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="overflow-hidden">
                  <div className="relative h-40">
                    <img
                      src="/placeholder.svg?height=160&width=400&text=Logo+Design"
                      alt="Logo Design"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-green-500 text-white hover:bg-green-600">
                      Completed
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-playfair font-semibold text-lg mb-2 line-clamp-1">Professional Logo Design</h3>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=24&width=24&text=EJ"
                          alt="Emma Johnson"
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Emma Johnson</span>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-green-500">
                        <CheckCircle className="h-4 w-4" />
                        <span>Delivered</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Final Price</p>
                        <p className="font-semibold">$85.00</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Delivered On</p>
                        <p className="text-sm">May 1, 2025</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="w-1/2 rounded-full">
                        Download
                      </Button>
                      <Button className="w-1/2 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white">
                        Leave Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="relative h-40">
                    <img
                      src="/placeholder.svg?height=160&width=400&text=Web+Dev"
                      alt="Web Development"
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 left-3 bg-yellow-500 text-white hover:bg-yellow-600">
                      In Progress
                    </Badge>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-playfair font-semibold text-lg mb-2 line-clamp-1">Website Development</h3>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center gap-2">
                        <img
                          src="/placeholder.svg?height=24&width=24&text=AC"
                          alt="Alex Chen"
                          className="w-6 h-6 rounded-full"
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">Alex Chen</span>
                      </div>

                      <div className="flex items-center gap-1 text-sm text-yellow-500">
                        <AlertCircle className="h-4 w-4" />
                        <span>In Progress</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Final Price</p>
                        <p className="font-semibold">$250.00</p>
                      </div>

                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Due Date</p>
                        <p className="text-sm">May 10, 2025</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button className="w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white">
                        Message Seller
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </div>
  )
}
