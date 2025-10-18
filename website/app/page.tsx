import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { Platform } from "@/components/platform"
import { About } from "@/components/about"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Manifesto />
      <Platform />
      <About />
      <CallToAction />
      <Footer />
    </main>
  )
}
