"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

interface Auction {
  id: string
  title: string
  category: string
  image: string
  seller: {
    name: string
    avatar: string
    rating: number
  }
  currentBid: number
  bids: number
  endTime: Date
}

interface AuctionCardProps {
  auction: Auction
  className?: string
}

export default function AuctionCard({ auction, className }: AuctionCardProps) {
  const [timeLeft, setTimeLeft] = useState<string>("")
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = auction.endTime.getTime() - new Date().getTime()

      if (difference <= 0) {
        setTimeLeft("Ended")
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))

      if (days > 0) {
        setTimeLeft(`${days}d ${hours}h`)
      } else if (hours > 0) {
        setTimeLeft(`${hours}h ${minutes}m`)
      } else {
        setTimeLeft(`${minutes}m`)
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [auction.endTime])

  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <div className="relative">
        <img
          src={auction.image || `/placeholder.svg?height=200&width=400&text=${auction.title}`}
          alt={auction.title}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white/80">{auction.category}</Badge>
        <button
          className={cn(
            "absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white/80 transition-colors",
            liked ? "text-pink-500" : "text-gray-600",
          )}
          onClick={() => setLiked(!liked)}
        >
          <Heart className={cn("h-4 w-4", liked && "fill-current")} />
        </button>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <img
            src={auction.seller.avatar || `/placeholder.svg?height=24&width=24&text=${auction.seller.name.charAt(0)}`}
            alt={auction.seller.name}
            className="w-6 h-6 rounded-full"
          />
          <span className="text-sm text-gray-600 dark:text-gray-400">{auction.seller.name}</span>
        </div>

        <h3 className="font-playfair font-semibold text-lg mb-2 line-clamp-2">
          <Link href={`/auctions/${auction.id}`} className="hover:text-pink-500 dark:hover:text-pink-400">
            {auction.title}
          </Link>
        </h3>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Current Bid</p>
            <p className="font-semibold text-lg">${auction.currentBid.toFixed(2)}</p>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
            <Clock className="h-4 w-4" />
            <span>{timeLeft}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button
          className="w-full rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white"
          asChild
        >
          <Link href={`/auctions/${auction.id}`}>Place Bid</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
