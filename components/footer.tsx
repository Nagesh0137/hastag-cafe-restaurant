import Link from "next/link"
import { Hash, Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#menu", label: "Menu" },
    { href: "#specials", label: "Specials" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ]

  const services = ["Dine-In", "Home Delivery", "Takeaway", "Events", "Catering", "Private Dining"]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: MessageCircle, href: "https://wa.me/917666862678", label: "WhatsApp" },
  ]

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500"></div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center space-x-2 mb-6">
              <Hash className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold font-serif">The Hastag Cafe</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A premier dining destination in Ashti offering exceptional food, warm hospitality, and memorable
              experiences since 2015.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xl font-semibold mb-6 font-serif">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xl font-semibold mb-6 font-serif">Services</h5>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer hover:translate-x-1 inline-block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-xl font-semibold mb-6 font-serif">Newsletter</h5>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for updates on special offers, events, and new menu items.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-2 rounded-lg font-semibold transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-300">&copy; 2025 The Hastag Cafe And Restaurant. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
