import Link from "next/link"
import { Facebook, Heart, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-stone-800 text-stone-200">
      <div className="container py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-amber-500" fill="currentColor" />
              <span className="text-lg sm:text-xl font-bold">Malakand Rahat Ghar</span>
            </div>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-stone-400">
              Providing care, dignity, and support to the elderly in Malakand, KPK, Pakistan.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-stone-400 hover:text-amber-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-stone-400 hover:text-amber-500">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-stone-400 hover:text-amber-500">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#donate" className="text-stone-400 hover:text-amber-500">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-stone-400 hover:text-amber-500">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Contact Info</h3>
            <ul className="space-y-2 text-stone-400">
              <li>Malakand Rahat Ghar, Near District Hospital</li>
              <li>Malakand, KPK, Pakistan</li>
              <li>+92 345 1234567</li>
              <li>info@malakandrahathghar.org</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-stone-400 hover:text-amber-500">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-stone-400 hover:text-amber-500">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-stone-400 hover:text-amber-500">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-stone-400 hover:text-amber-500">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 border-t border-stone-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} Malakand Rahat Ghar. All rights reserved.</p>
          <p className="mt-2">
            Legal notice: All images used are copyright-free and used with attribution where necessary.
          </p>
        </div>
      </div>
    </footer>
  )
}
