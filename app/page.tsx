import Hero from "@/components/hero"
import About from "@/components/about"
import Menu from "@/components/menu"
import Specials from "@/components/specials"
import HomeDelivery from "@/components/home-delivery"
import Stats from "@/components/stats"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Menu />
      <Specials />
      <HomeDelivery />
      <Stats />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  )
}
