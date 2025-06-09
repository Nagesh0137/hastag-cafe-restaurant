"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Message sent successfully! We'll get back to you soon.")
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "Shop No 01, Nagar, Beed Road, near Pokale Complex, Ashti, Maharashtra 414203",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 7666862678",
      link: "tel:+917666862678",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@hastagcafe.com",
      link: "mailto:info@hastagcafe.com",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact Us</h2>
          <p className="text-xl text-gray-600">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white p-8 rounded-2xl">
            <h4 className="text-2xl font-bold mb-8 font-serif">Get in Touch</h4>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                const content = info.link ? (
                  <a href={info.link} className="hover:text-orange-500 transition-colors">
                    {info.content}
                  </a>
                ) : (
                  info.content
                )

                return (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-1">{info.title}</h5>
                      <p className="text-gray-300">{content}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h5 className="font-semibold text-lg">Opening Hours</h5>
                </div>
              </div>
              <div className="ml-16">
                <p className="text-gray-300">Monday - Sunday: 8:00 AM - 11:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h4 className="text-2xl font-bold text-slate-800 mb-6 font-serif">Send Us a Message</h4>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white border-gray-300 focus:border-red-500 focus:ring-red-500"
                />
              </div>

              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="bg-white border-gray-300 focus:border-red-500 focus:ring-red-500"
              />

              <Textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="bg-white border-gray-300 focus:border-red-500 focus:ring-red-500"
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white py-3 rounded-full font-semibold text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-gray-200 h-96 rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.441676553849!2d76.2237223153677!3d18.45450907593583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc8d1c9b9b9b9b9%3A0x3bc8d1c9b9b9b9b9!2sThe%20Hastag%20Cafe%20And%20Restaurant!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
