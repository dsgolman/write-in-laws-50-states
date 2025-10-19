import { Hero } from "@/components/hero"
import { Manifesto } from "@/components/manifesto"
import { Platform } from "@/components/platform"
import { About } from "@/components/about"
import { CallToAction } from "@/components/call-to-action"
import { Footer } from "@/components/footer"
import { GlobalPeace } from "@/components/global-peace"
import { DeclarationOfIndependence } from "@/components/declaration-of-independence"
import { USConstitution } from "@/components/us-constitution"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Manifesto />
      <Platform />
      <GlobalPeace />
      <DeclarationOfIndependence />
      <USConstitution />
      <About />
      <CallToAction />
      <Footer />
    </main>
  )
}
