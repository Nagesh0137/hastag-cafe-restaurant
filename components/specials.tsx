"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const specials = [
  {
    id: "starter",
    title: "Truffle Arancini",
    subtitle: "Crispy risotto balls infused with black truffle and mozzarella, served with roasted garlic aioli",
    description:
      "Our chef's twist on the classic Italian arancini, these golden fried risotto balls are elevated with the earthy aroma of black truffle. The creamy mozzarella center pairs perfectly with our house-made roasted garlic aioli.",
    ingredients: "Arborio rice, black truffle, mozzarella, breadcrumbs, eggs, garlic, olive oil, lemon",
    price: "₹320",
    image:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "main",
    title: "Herb-Crusted Salmon",
    subtitle: "Fresh salmon with herb crust, served with asparagus and lemon beurre blanc",
    description:
      "This signature dish features locally-sourced salmon coated in a fragrant herb crust, pan-seared to perfection. Accompanied by seasonal asparagus and our delicate lemon beurre blanc sauce.",
    ingredients: "Fresh salmon, parsley, dill, breadcrumbs, asparagus, butter, white wine, lemon",
    price: "₹580",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "dessert",
    title: "Chocolate Soufflé",
    subtitle: "Warm chocolate soufflé with vanilla bean ice cream and raspberry coulis",
    description:
      "Our legendary chocolate soufflé, baked to order, with a molten center. Served with homemade vanilla bean ice cream and a tangy raspberry coulis to balance the richness.",
    ingredients: "Dark chocolate, eggs, sugar, butter, vanilla bean, cream, raspberries",
    price: "₹350",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
  },
]

const categories = [
  { id: "starter", label: "Starter" },
  { id: "main", label: "Main Course" },
  { id: "dessert", label: "Dessert" },
]

export default function Specials() {
  const [activeSpecial, setActiveSpecial] = useState("starter")
  const currentSpecial = specials.find((special) => special.id === activeSpecial)

  return (
    <section id="specials" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Today's Specials</h2>
          <p className="text-xl text-gray-600">Chef's curated selection of the day</p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-4 bg-gray-100 p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveSpecial(category.id)}
                className={`px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
                  activeSpecial === category.id
                    ? "bg-slate-900 text-white shadow-lg"
                    : "text-gray-600 hover:text-slate-900"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Special Content */}
        {currentSpecial && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-4xl font-bold text-slate-800 mb-4 font-serif">{currentSpecial.title}</h3>
              <p className="text-xl text-gray-600 italic mb-6">{currentSpecial.subtitle}</p>
              <p className="text-gray-700 mb-6 leading-relaxed">{currentSpecial.description}</p>
              <div className="mb-8">
                <h6 className="font-semibold text-slate-800 mb-2">Ingredients:</h6>
                <p className="text-gray-600 text-sm">{currentSpecial.ingredients}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-red-600 font-serif">{currentSpecial.price}</span>
                <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold">
                  Order Now
                </Button>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <Image
                  src={currentSpecial.image || "/placeholder.svg"}
                  alt={currentSpecial.title}
                  width={600}
                  height={400}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
