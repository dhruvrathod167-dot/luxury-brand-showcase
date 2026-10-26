'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-serif font-bold mb-4">Luxe</h3>
            <p className="text-sm opacity-75">
              Timeless elegance and contemporary design for the discerning customer.
            </p>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collections" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                  All Collections
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                  Spring/Summer
                </Link>
              </li>
              <li>
                <Link href="/collections" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                  Fall/Winter
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm opacity-75 hover:opacity-100 transition-opacity">
                  Shipping & Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 rounded"
                title="Email"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 rounded"
                title="Share"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C9.589 12.433 10 11.244 10 9.999c0-2.21-1.791-4-4-4S2 7.79 2 9.999c0 1.243.411 2.433 1.316 3.342m16.368-5.368l-2-2m2 2l-2 2m2-2l2-2m-2 2l2 2M9 5a4 4 0 018 0" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 hover:bg-accent hover:text-accent-foreground transition-colors duration-300 rounded"
                title="Like"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground border-opacity-20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs opacity-75">
            &copy; {currentYear} Luxe Atelier. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs mt-4 md:mt-0">
            <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
              Privacy Policy
            </a>
            <a href="#" className="opacity-75 hover:opacity-100 transition-opacity">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
