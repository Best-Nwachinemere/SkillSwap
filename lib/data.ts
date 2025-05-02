export const auctions = [
  {
    id: "1",
    title: "Professional Logo Design with 3 Revisions",
    category: "Design",
    image: "/placeholder.svg?height=200&width=400&text=Logo+Design",
    seller: {
      name: "Emma Johnson",
      avatar: "/placeholder.svg?height=40&width=40&text=EJ",
      rating: 4.9,
    },
    currentBid: 85,
    bids: 12,
    endTime: new Date(Date.now() + 86400000 * 2), // 2 days from now
  },
  {
    id: "2",
    title: "Website Development with React & Next.js",
    category: "Development",
    image: "/placeholder.svg?height=200&width=400&text=Web+Dev",
    seller: {
      name: "Alex Chen",
      avatar: "/placeholder.svg?height=40&width=40&text=AC",
      rating: 5.0,
    },
    currentBid: 250,
    bids: 8,
    endTime: new Date(Date.now() + 86400000 * 1), // 1 day from now
  },
  {
    id: "3",
    title: "Social Media Content Creation (5 Posts)",
    category: "Marketing",
    image: "/placeholder.svg?height=200&width=400&text=Social+Media",
    seller: {
      name: "Sophia Martinez",
      avatar: "/placeholder.svg?height=40&width=40&text=SM",
      rating: 4.7,
    },
    currentBid: 120,
    bids: 5,
    endTime: new Date(Date.now() + 86400000 * 3), // 3 days from now
  },
  {
    id: "4",
    title: "Professional Copywriting for Landing Page",
    category: "Writing",
    image: "/placeholder.svg?height=200&width=400&text=Copywriting",
    seller: {
      name: "James Wilson",
      avatar: "/placeholder.svg?height=40&width=40&text=JW",
      rating: 4.8,
    },
    currentBid: 95,
    bids: 7,
    endTime: new Date(Date.now() + 3600000 * 12), // 12 hours from now
  },
  {
    id: "5",
    title: "Mobile App UI/UX Design",
    category: "Design",
    image: "/placeholder.svg?height=200&width=400&text=UI/UX",
    seller: {
      name: "Olivia Taylor",
      avatar: "/placeholder.svg?height=40&width=40&text=OT",
      rating: 4.9,
    },
    currentBid: 180,
    bids: 10,
    endTime: new Date(Date.now() + 86400000 * 4), // 4 days from now
  },
  {
    id: "6",
    title: "SEO Optimization for E-commerce Site",
    category: "Marketing",
    image: "/placeholder.svg?height=200&width=400&text=SEO",
    seller: {
      name: "Noah Brown",
      avatar: "/placeholder.svg?height=40&width=40&text=NB",
      rating: 4.6,
    },
    currentBid: 150,
    bids: 6,
    endTime: new Date(Date.now() + 86400000 * 2 + 3600000 * 5), // 2 days and 5 hours from now
  },
]
