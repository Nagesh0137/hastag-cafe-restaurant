"use client"

import { useState } from "react"
import Image from "next/image"
import { Coffee, Sandwich, Utensils, Wine, IceCream, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const menuCategories = [
  { id: "breakfast", label: "Breakfast", icon: Coffee },
  { id: "lunch", label: "Lunch", icon: Sandwich },
  { id: "dinner", label: "Dinner", icon: Utensils },
  { id: "beverages", label: "Beverages", icon: Wine },
  { id: "desserts", label: "Desserts", icon: IceCream },
]

const menuItems = {
  breakfast: [
    {
      name: "Avocado Toast Deluxe",
      description: "Sourdough bread with smashed avocado, cherry tomatoes, microgreens, feta cheese, and a poached egg",
      price: "₹280",
      image:
        "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Chef's Special",
    },
    {
      name: "Classic Pancakes Stack",
      description: "Fluffy buttermilk pancakes served with maple syrup, fresh berries, and whipped cream",
      price: "₹240",
      image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Superfood Breakfast Bowl",
      description: "Greek yogurt with house-made granola, seasonal fruits, chia seeds, flaxseeds, and local honey",
      price: "₹260",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Healthy Choice",
    },
  ],
  lunch: [
    {
      name: "Grilled Chicken Caesar Salad",
      description: "Fresh romaine lettuce with grilled chicken, parmesan cheese, croutons, and caesar dressing",
      price: "₹380",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Healthy",
    },
    {
      name: "Wood-Fired Margherita Pizza",
      description: "Fresh tomato sauce, mozzarella cheese, basil leaves on wood-fired thin crust",
      price: "₹420",
      image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Creamy Chicken Carbonara",
      description: "Fettuccine pasta with grilled chicken, bacon, parmesan in rich cream sauce",
      price: "₹450",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Popular",
    },
  ],
  dinner: [
    {
      name: "Mutton Biryani Deluxe",
      description: "Aromatic basmati rice with tender mutton, saffron, and traditional spices",
      price: "₹580",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Chef's Special",
    },
    {
      name: "Herb-Crusted Salmon",
      description: "Fresh Atlantic salmon with herb crust, asparagus, and lemon butter sauce",
      price: "₹720",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Butter Chicken",
      description: "Creamy tomato-based curry with tender chicken pieces and aromatic spices",
      price: "₹420",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Popular",
    },
  ],
  beverages: [
    {
      name: "Artisan Cappuccino",
      description: "Rich espresso with steamed milk foam and cocoa powder dusting",
      price: "₹180",
      image:
        "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Popular",
    },
    {
      name: "Fresh Orange Juice",
      description: "Freshly squeezed orange juice packed with vitamin C and natural goodness",
      price: "₹120",
      image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Mango Smoothie",
      description: "Creamy mango smoothie with yogurt, honey, and fresh mint",
      price: "₹150",
      image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Healthy",
    },
  ],
  desserts: [
    {
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: "₹320",
      image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Chef's Special",
    },
    {
      name: "New York Cheesecake",
      description: "Classic creamy cheesecake with berry compote and graham cracker crust",
      price: "₹280",
      image:
        "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      name: "Kulfi Trio",
      description: "Traditional Indian ice cream in three flavors: pistachio, mango, and cardamom",
      price: "₹200",
      image:
        "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      badge: "Popular",
    },
  ],
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("breakfast")

  const handleQuickOrder = (itemName: string, price: string) => {
    // In a real app, this would add to cart or trigger ordering flow
    alert(`${itemName} (${price}) added to cart! Call us at +91 7666862678 to place your order.`)
  }

  return (
    <section id="menu" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Our Menu</h2>
          <p className="text-xl text-gray-600">Explore our carefully crafted selection of dishes</p>
        </div>

        {/* Menu Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-slate-900 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems[activeCategory as keyof typeof menuItems]?.map((item, index) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              <div className="relative">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {item.badge && (
                  <Badge className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-slate-900 font-semibold">
                    {item.badge}
                  </Badge>
                )}
              </div>

              <div className="p-6">
                <h5 className="text-xl font-bold text-slate-800 mb-3 font-serif">{item.name}</h5>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{item.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-600 font-serif">{item.price}</span>
                  <Button
                    onClick={() => handleQuickOrder(item.name, item.price)}
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Quick Order
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
