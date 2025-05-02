import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, SlidersHorizontal } from "lucide-react"
import AuctionCard from "@/components/auction-card"
import { auctions } from "@/lib/data"

export default function AuctionsPage() {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Live Auctions</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for skills or services..."
                className="pl-10 rounded-full border-gray-300 dark:border-gray-700"
              />
            </div>
            <Button variant="outline" className="rounded-full">
              <SlidersHorizontal className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-gray-100 dark:bg-gray-800 p-1 rounded-full">
            <TabsTrigger value="all" className="rounded-full">
              All Categories
            </TabsTrigger>
            <TabsTrigger value="design" className="rounded-full">
              Design
            </TabsTrigger>
            <TabsTrigger value="development" className="rounded-full">
              Development
            </TabsTrigger>
            <TabsTrigger value="marketing" className="rounded-full">
              Marketing
            </TabsTrigger>
            <TabsTrigger value="writing" className="rounded-full">
              Writing
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {auctions.map((auction) => (
                <AuctionCard key={auction.id} auction={auction} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="design" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {auctions
                .filter((auction) => auction.category === "Design")
                .map((auction) => (
                  <AuctionCard key={auction.id} auction={auction} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="development" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {auctions
                .filter((auction) => auction.category === "Development")
                .map((auction) => (
                  <AuctionCard key={auction.id} auction={auction} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="marketing" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {auctions
                .filter((auction) => auction.category === "Marketing")
                .map((auction) => (
                  <AuctionCard key={auction.id} auction={auction} />
                ))}
            </div>
          </TabsContent>

          <TabsContent value="writing" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {auctions
                .filter((auction) => auction.category === "Writing")
                .map((auction) => (
                  <AuctionCard key={auction.id} auction={auction} />
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
