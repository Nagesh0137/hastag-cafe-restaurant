"use client"

import Image from "next/image"
import { Clock, MapPin, Shield, IndianRupee, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  {
    icon: Clock,
    title: "30-45 Minutes Delivery",
    description: "Quick and reliable delivery service",
  },
  {
    icon: MapPin,
    title: "5km Delivery Radius",
    description: "We deliver within 5km of our restaurant",
  },
  {
    icon: Shield,
    title: "Safe & Hygienic",
    description: "Contactless delivery with safety protocols",
  },
  {
    icon: IndianRupee,
    title: "Free Delivery",
    description: "On orders above ₹500",
  },
]

export default function HomeDelivery() {
  return (
    <section id="delivery" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Home Delivery Service</h2>
          <p className="text-xl text-gray-600">Enjoy our delicious food from the comfort of your home</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-800 mb-6 font-serif">Fast & Fresh Delivery</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Experience the same exceptional quality and taste of The Hastag Cafe from the comfort of your home. Our
              professional delivery team ensures your food arrives hot, fresh, and perfectly packaged.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={feature.title}
                    className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h6 className="font-semibold text-slate-800 mb-1">{feature.title}</h6>
                      <p className="text-gray-600 text-sm">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold"
              >
                <a href="tel:+917666862678">
                  <Phone className="w-5 h-5 mr-2" />
                  Call to Order
                </a>
              </Button>
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold"
              >
                <a href="https://wa.me/917666862678" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Order
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Home Delivery"
              width={600}
              height={400}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-900 px-4 py-2 rounded-full font-semibold flex items-center space-x-2 floating">
              <div className="w-2 h-2 bg-slate-900 rounded-full animate-pulse"></div>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
