"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Calendar, Hash } from "lucide-react"
import { Button } from "@/components/ui/button"
import BookingModal from "./booking-modal"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#menu", label: "Menu" },
    { href: "#specials", label: "Specials" },
    { href: "#delivery", label: "Home Delivery" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2 bg-gradient-to-r from-slate-900/98 to-blue-900/98 shadow-2xl"
            : "py-5 bg-gradient-to-r from-slate-900/95 to-blue-900/95"
        } backdrop-blur-lg`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="#home" className="flex items-center space-x-2 text-white">
              <Hash className="h-8 w-8 text-orange-500" />
              <span className="text-2xl lg:text-3xl font-bold font-serif">The Hastag Cafe</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="relative text-white/90 hover:text-orange-500 font-semibold text-sm uppercase tracking-wider transition-all duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transition-all duration-300 group-hover:w-full rounded-full"></span>
                </button>
              ))}
              <Button
                onClick={() => setShowBookingModal(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Table
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/90 hover:text-orange-500 font-semibold text-left transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={() => {
                    setShowBookingModal(true)
                    setIsOpen(false)
                  }}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white w-fit"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Book Table
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </>
  )
}
