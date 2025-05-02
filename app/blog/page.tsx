import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, User } from "lucide-react"

const blogPosts = [
  {
    id: "1",
    title: "How to Create a Winning Bid Strategy on SkillSwap",
    excerpt: "Learn the secrets to crafting bids that stand out and win projects consistently.",
    category: "Freelance Tips",
    author: "Emma Johnson",
    date: "May 1, 2025",
    image: "/placeholder.svg?height=200&width=400&text=Bid+Strategy",
  },
  {
    id: "2",
    title: "The Future of Freelancing in Web3",
    excerpt: "Explore how blockchain technology is transforming the freelance marketplace.",
    category: "Web3 Trends",
    author: "Alex Chen",
    date: "April 28, 2025",
    image: "/placeholder.svg?height=200&width=400&text=Web3+Freelancing",
  },
  {
    id: "3",
    title: "5 Skills That Are in High Demand Right Now",
    excerpt: "Discover which skills are commanding premium rates in today's market.",
    category: "Market Insights",
    author: "Sophia Martinez",
    date: "April 25, 2025",
    image: "/placeholder.svg?height=200&width=400&text=In-Demand+Skills",
  },
  {
    id: "4",
    title: "How to Price Your Services as a Freelancer",
    excerpt: "A comprehensive guide to setting rates that reflect your value.",
    category: "Freelance Tips",
    author: "James Wilson",
    date: "April 22, 2025",
    image: "/placeholder.svg?height=200&width=400&text=Pricing+Guide",
  },
  {
    id: "5",
    title: "Building Your Personal Brand as a Freelancer",
    excerpt: "Stand out in a crowded marketplace with these branding strategies.",
    category: "Marketing",
    author: "Olivia Taylor",
    date: "April 18, 2025",
    image: "/placeholder.svg?height=200&width=400&text=Personal+Branding",
  },
  {
    id: "6",
    title: "SkillSwap Platform Updates: New Features Coming Soon",
    excerpt: "Get a sneak peek at the exciting new features we're launching next month.",
    category: "Project Updates",
    author: "Noah Brown",
    date: "April 15, 2025",
    image: "/placeholder.svg?height=200&width=400&text=Platform+Updates",
  },
]

export default function BlogPage() {
  return (
    <div className="pt-16 pb-16">
      <div className="bg-gradient-to-r from-pink-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
            Insights, tips, and updates from the SkillSwap community.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-all hover:shadow-md">
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800 hover:bg-white/80">
                  {post.category}
                </Badge>
              </div>

              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <h3 className="font-playfair font-semibold text-xl mb-2 line-clamp-2">
                  <Link href={`/blog/${post.id}`} className="hover:text-pink-500 dark:hover:text-pink-400">
                    {post.title}
                  </Link>
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
              </CardContent>

              <CardFooter className="px-6 pb-6 pt-0">
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-pink-500 dark:text-pink-400 hover:text-pink-600 dark:hover:text-pink-300 hover:bg-transparent"
                  asChild
                >
                  <Link href={`/blog/${post.id}`}>
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
