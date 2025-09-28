"use client"

import { useState } from "react"
import Link from "next/link"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link href="/" className="text-2xl font-bold tracking-wider">
            Zee Dyasi
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm tracking-wider hover:text-primary transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-sm tracking-wider hover:text-primary transition-colors">
              ABOUT
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setPortfolioOpen(true)}
              onMouseLeave={() => setPortfolioOpen(false)}
            >
              <Link href="/portfolio" className="text-sm tracking-wider hover:text-primary transition-colors">
                PORTFOLIO
              </Link>
              {portfolioOpen && (
                <div className="absolute top-full left-0 mt-2 bg-background border border-border shadow-lg min-w-[150px]">
                  <Link
                    href="/gallery"
                    className="block px-4 py-2 text-sm tracking-wider hover:text-primary hover:bg-muted transition-colors"
                  >
                    GALLERY
                  </Link>
                  <Link
                    href="/events"
                    className="block px-4 py-2 text-sm tracking-wider hover:text-primary hover:bg-muted transition-colors"
                  >
                    EVENTS
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-sm tracking-wider hover:text-primary transition-colors">
              CONTACT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-full h-0.5 bg-foreground transition-all duration-300 ${isOpen ? "rotate-45 translate-y-0.5" : ""}`}
              />
              <span
                className={`block w-full h-0.5 bg-foreground mt-1 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-full h-0.5 bg-foreground mt-1 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-sm tracking-wider hover:text-primary transition-colors">
                HOME
              </Link>
              <Link href="/about" className="text-sm tracking-wider hover:text-primary transition-colors">
                ABOUT
              </Link>
              <Link href="/portfolio" className="text-sm tracking-wider hover:text-primary transition-colors">
                PORTFOLIO
              </Link>
              <Link href="/gallery" className="text-sm tracking-wider hover:text-primary transition-colors pl-4">
                GALLERY
              </Link>
              <Link href="/events" className="text-sm tracking-wider hover:text-primary transition-colors pl-4">
                EVENTS
              </Link>
              <Link href="/contact" className="text-sm tracking-wider hover:text-primary transition-colors">
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
