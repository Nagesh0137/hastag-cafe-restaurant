"use client"

import { useEffect, useState } from "react"

const stats = [
  { number: 3, label: "Chefs" },
  { number: 120, label: "Menu Items" },
  { number: 2, label: "Years Experience" },
  { number: 5000, label: "Happy Customers" },
]

export default function Stats() {
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCounters()
        }
      },
      { threshold: 0.5 },
    )

    const statsSection = document.getElementById("stats-section")
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.number / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.number) {
          current = stat.number
          clearInterval(timer)
        }
        setCounters((prev) => {
          const newCounters = [...prev]
          newCounters[index] = Math.floor(current)
          return newCounters
        })
      }, 20)
    })
  }

  return (
    <section
      id="stats-section"
      className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Ccircle cx=%2220%22 cy=%2220%22 r=%222%22 fill=%22rgba(255,255,255,0.1)%22/%3E%3Ccircle cx=%2280%22 cy=%2240%22 r=%221.5%22 fill=%22rgba(255,255,255,0.1)%22/%3E%3Ccircle cx=%2240%22 cy=%2280%22 r=%221%22 fill=%22rgba(255,255,255,0.1)%22/%3E%3C/svg%3E')] opacity-30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 font-serif">
                {counters[index]}
                {stat.label === "Happy Customers" && "+"}
              </div>
              <h5 className="text-white font-semibold text-lg">{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
