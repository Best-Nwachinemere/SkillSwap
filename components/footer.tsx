import Link from "next/link"
import { Github, Linkedin, Twitter, FileText } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-playfair font-bold bg-gradient-to-r from-pink-400 via-purple-500 to-rose-400 bg-clip-text text-transparent">
                SkillSwap
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Bid on Skills. Win Time.</p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://twitter.com" className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://medium.com" className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400">
                <FileText className="h-5 w-5" />
                <span className="sr-only">Medium</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/auctions"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  Live Auctions
                </Link>
              </li>
              <li>
                <Link
                  href="/post-gig"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  Post a Gig
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  My Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  Smart Contract
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Stay updated with the latest gigs and features.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white rounded-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>© 2025 Best Nwachinemere. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
