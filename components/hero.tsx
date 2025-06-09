"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Calendar, Utensils } from "lucide-react"
import { Button } from "@/components/ui/button"
import BookingModal from "./booking-modal"

export default function Hero() {
  const [showBookingModal, setShowBookingModal] = useState(false)

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-up")
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("animate")
      }, index * 200)
    })
  }, [])

  const scrollToMenu = () => {
    const element = document.querySelector("#menu")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: `linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(29, 53, 87, 0.4)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80') no-repeat center center/cover`,
        }}
      >
        {/* Floating Elements */}
        <div className="absolute bottom-24 right-24 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            alt="Burger"
            width={120}
            height={120}
            className="rounded-full border-4 border-orange-500 floating shadow-2xl"
          />
        </div>

        <div className="absolute top-36 left-24 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
            alt="Coffee"
            width={100}
            height={100}
            className="rounded-full border-4 border-orange-500 floating shadow-2xl"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 fade-in-up gradient-text">
              Experience Culinary Excellence at The Hastag Cafe
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-3xl fade-in-up font-light leading-relaxed">
              Discover a world of flavors crafted with passion and the finest ingredients in the heart of Ashti. Our
              restaurant offers an unforgettable dining experience with a perfect blend of traditional recipes and
              modern culinary techniques.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 fade-in-up">
              <Button
                onClick={() => setShowBookingModal(true)}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl pulse"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Table
              </Button>

              <Button
                onClick={scrollToMenu}
                variant="outline"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-slate-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 glass-effect"
              >
                <Utensils className="w-5 h-5 mr-2" />
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={showBookingModal} onClose={() => setShowBookingModal(false)} />
    </>
  )
}
