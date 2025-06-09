"use client"

import { useEffect } from "react"
import { Utensils, Leaf, Wine, Heart } from "lucide-react"

const features = [
  {
    icon: Utensils,
    title: "Our Philosophy",
    description:
      "We believe in creating memorable dining experiences by combining fresh, locally-sourced ingredients with innovative culinary techniques. Our chefs pour their passion into every dish, ensuring each bite tells a story.",
  },
  {
    icon: Leaf,
    title: "Farm to Table",
    description:
      "We partner with local farmers and producers to bring you the freshest ingredients. Our seasonal menu changes reflect the best produce available, supporting our community while delivering exceptional flavors.",
  },
  {
    icon: Wine,
    title: "Culinary Excellence",
    description:
      "Our team of experienced chefs brings together diverse culinary backgrounds to create a menu that celebrates both traditional Maharashtrian cuisine and international flavors.",
  },
  {
    icon: Heart,
    title: "Community Focus",
    description:
      "More than just a restaurant, we're a gathering place for the Ashti community. We host cultural events, live music nights, and cooking workshops to bring people together.",
  },
]

export default function About() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll(".fade-in-up, .fade-in-left, .fade-in-right")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded in 2015, The Hastag Cafe has been serving the Ashti community with love and delicious food for
            nearly a decade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const animationClass = index % 2 === 0 ? "fade-in-right" : "fade-in-left"

            return (
              <div
                key={feature.title}
                className={`${animationClass} group`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-slate-800 mb-3 font-serif">{feature.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
