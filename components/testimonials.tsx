"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah K.",
    role: "Regular Customer",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "The Hastag Cafe is hands down the best dining experience in Ashti. The avocado toast is to die for, and the coffee is always perfect. The ambiance is cozy yet sophisticated, perfect for both casual meetups and special occasions.",
  },
  {
    name: "Rahul P.",
    role: "Event Host",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "I hosted my daughter's birthday party here and the staff went above and beyond to make it special. The food was exceptional - fresh, flavorful, and beautifully presented. Everyone raved about the herb-crusted salmon!",
  },
  {
    name: "Priya M.",
    role: "Food Blogger",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 4,
    text: "As a food blogger, I've visited countless restaurants, but The Hastag Cafe stands out for its consistency and creativity. Their seasonal menu changes keep me coming back, and their commitment to local ingredients is commendable.",
  },
  {
    name: "Amit S.",
    role: "Local Guide",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5,
    text: "Absolutely love the vibe and the food here! The staff is friendly and the desserts are a must-try. Highly recommended for families and friends.",
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-5 h-5 ${i < rating ? "text-orange-500 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="text-xl text-gray-600">Hear from our valued guests about their experiences</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative">
            <div className="absolute top-0 left-8 text-6xl text-red-500/20 font-serif">"</div>

            <div className="text-center">
              <div className="flex justify-center mb-6">{renderStars(testimonials[currentIndex].rating)}</div>

              <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-8">
                {testimonials[currentIndex].text}
              </p>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  width={60}
                  height={60}
                  className="rounded-full border-3 border-orange-500"
                />
                <div className="text-left">
                  <h5 className="font-semibold text-slate-800 text-lg">{testimonials[currentIndex].name}</h5>
                  <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-full flex items-center justify-center hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
