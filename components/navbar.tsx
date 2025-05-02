"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonIcon, SunIcon, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-rose-400 bg-clip-text text-transparent">
              SkillSwap
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/auctions"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Explore
            </Link>
            <Link
              href="/post-gig"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Post a Gig
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>

            <Button className="hidden md:inline-flex bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full">
              Connect Wallet
            </Button>

            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <nav className="flex flex-col py-4 px-6 space-y-4">
            <Link
              href="/auctions"
              className="text-gray-700 dark:text-gray-200 py-2 hover:text-pink-500 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Explore
            </Link>
            <Link
              href="/post-gig"
              className="text-gray-700 dark:text-gray-200 py-2 hover:text-pink-500 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Post a Gig
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 dark:text-gray-200 py-2 hover:text-pink-500 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 dark:text-gray-200 py-2 hover:text-pink-500 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-200 py-2 hover:text-pink-500 dark:hover:text-pink-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button
              className="bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
