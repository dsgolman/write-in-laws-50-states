import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BookOpen, Headphones, Film, Heart, Brain, Users } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experiencing Mania in America | Mental Health Journey",
  description:
    "An immersive journey through the bipolar mind. A personal narrative that sheds light on the complexities of mania and emotional struggles in America's mental healthcare system.",
}

export default function ExperiencingManiaPage() {
  return (
    <main className="min-h-screen bg-[#1e1e1e]">
      {/* Header */}
      <section className="py-8 px-4 border-b border-[#3a3a3a]">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-[#b0b0b0] hover:text-[#e0e0e0]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1e1e1e] via-[#252525] to-[#1e1e1e]">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/20 border border-purple-700/30 rounded-full text-sm text-purple-400 mb-4">
            <Brain className="h-4 w-4" />
            <span>Personal Narrative</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#f0f0f0] leading-tight">
            Experiencing Mania<br />
            <span className="text-[#b0b0b0]">in America</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#c0c0c0] max-w-3xl mx-auto leading-relaxed">
            Dive into an immersive journey through the bipolar mind. A personal narrative that sheds 
            light on the complexities of mania and emotional struggles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Link href="/experiencing-mania/read">
              <Button size="lg" className="text-lg px-8 py-6 bg-purple-700 hover:bg-purple-600 text-white">
                <BookOpen className="mr-2 h-5 w-5" />
                Read Now
              </Button>
            </Link>
            <a 
              href="https://experiencing-mania-ebook.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-purple-500/50 hover:bg-purple-900/20 text-purple-300"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Listen Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 px-4 bg-[#252525]">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-red-900/20 to-purple-900/20 border-red-700/30">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-red-900/30 rounded-full">
                  <Film className="h-12 w-12 text-red-400" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-4">
                Coming Soon to Netflix
              </h2>
              <p className="text-lg text-[#c0c0c0] mb-6 max-w-2xl mx-auto">
                Experience the gripping story of "Experiencing Mania in America" as a limited series.
              </p>
              <a 
                href="https://experiencing-mania-ebook.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-red-500/50 hover:bg-red-900/20 text-red-300">
                  Learn More
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why This Story Matters */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0] mb-4">
              Why This Story Matters
            </h2>
            <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto">
              Mental health is deeply personal—and profoundly political. This is the intersection.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-blue-900/20 rounded-lg">
                    <Heart className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f0f0f0]">
                    Lived Experience
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    Real stories from someone who has navigated the complexities of bipolar disorder 
                    and America's mental healthcare system firsthand.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-purple-900/20 rounded-lg">
                    <Brain className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f0f0f0]">
                    Breaking Stigma
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    Honest, raw accounts that challenge the stigma around mental illness and 
                    demonstrate that mental health struggles don't define your potential.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-3 bg-green-900/20 rounded-lg">
                    <Users className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#f0f0f0]">
                    Systemic Issues
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    The story exposes the failures in our mental healthcare system—from billing fraud 
                    to inadequate treatment—that affect millions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connection to Healthcare Justice */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#1e1e1e] to-[#252525]">
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-6 text-center">
              From Personal Experience to Public Advocacy
            </h2>
            <div className="space-y-6 text-[#b0b0b0] leading-relaxed">
              <p>
                My experience with mania led me through America's mental healthcare system—a system I discovered 
                was deeply flawed, not just in treatment, but in its most basic operations: honesty and transparency.
              </p>
              <p>
                When I requested my medical records years after hospitalization, I uncovered systematic billing 
                discrepancies that revealed a larger pattern of potential fraud. What began as a personal story 
                became a civil rights case.
              </p>
              <p>
                This isn't just about one patient or one hospital. It's about a system that prioritizes profit 
                over patients, where billing codes matter more than accurate diagnoses, and where the vulnerable 
                are exploited at their most difficult moments.
              </p>
              <p className="text-[#e0e0e0] font-semibold pt-4">
                That's why I'm running for President. Not in spite of my mental health journey—but because of it. 
                Because I've seen the system from the inside, and I know it needs to change.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/healthcare-justice">
                <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white">
                  Read About the Case
                </Button>
              </Link>
              <a 
                href="https://www.talkwithserenity.com" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-[#c0c0c0] hover:bg-[#3a3a3a] text-[#e0e0e0]">
                  24/7 Mental Health Support
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#f0f0f0] mb-8">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <a 
              href="https://www.talkwithserenity.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-[#2a2a2a] border-[#3a3a3a] hover:border-[#4a4a4a] transition-colors h-full">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Talk With Serenity
                  </h3>
                  <p className="text-[#b0b0b0]">
                    24/7 AI-powered mental health support app. Get help anytime, anywhere.
                  </p>
                </CardContent>
              </Card>
            </a>

            <a 
              href="https://substack.com/@talkwithserenity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-[#2a2a2a] border-[#3a3a3a] hover:border-[#4a4a4a] transition-colors h-full">
                <CardContent className="pt-6 pb-6">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Newsletter
                  </h3>
                  <p className="text-[#b0b0b0]">
                    Follow updates on mental health advocacy, healthcare reform, and the campaign.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#252525] to-[#1e1e1e]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#f0f0f0] mb-4">
            Ready to Experience the Story?
          </h2>
          <p className="text-xl text-[#b0b0b0] mb-8">
            Read or listen to the full narrative on the original platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/experiencing-mania/read">
              <Button size="lg" className="text-lg px-8 py-6 bg-purple-700 hover:bg-purple-600 text-white">
                <BookOpen className="mr-2 h-5 w-5" />
                Read the Book
              </Button>
            </Link>
            <Link href="/">
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-[#c0c0c0] hover:bg-[#3a3a3a] text-[#e0e0e0]"
              >
                Back to Campaign
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

