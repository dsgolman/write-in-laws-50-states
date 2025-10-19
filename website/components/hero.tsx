import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[#1e1e1e]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1e1e] via-[#232323] to-[#282828]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 bg-[#444444] border border-[#555555] rounded-full text-sm text-[#e0e0e0] mb-4">
          Presidential Campaign 2028
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance text-[#f0f0f0]">
          Don't Vote.
          <br />
          <span className="text-[#b0b0b0]">Write-In.</span>
        </h1>

        <p className="text-xl md:text-2xl text-[#c0c0c0] max-w-3xl mx-auto text-balance leading-relaxed">
          The two-party system is broken. We will not fix it. We will replace it. Join the movement for a new paradigm
          of American leadership.
        </p>
        
        <div className="w-full max-w-3xl mx-auto mt-6">
          <iframe 
            data-testid="embed-iframe" 
            style={{borderRadius: "12px"}} 
            src="https://open.spotify.com/embed/track/7m4ip73AuozuLttPfh3KDN?utm_source=generator" 
            width="100%" 
            height="152" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy">
          </iframe>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="/manifesto">
            <Button size="lg" className="text-lg px-8 py-6 bg-[#505050] hover:bg-[#404040] text-white">
              Read the Manifesto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/pure-beachhead">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-[#c0c0c0] hover:bg-[#e0e0e0] text-[#505050] bg-transparent"
            >
              Pure Beachhead Strategy
            </Button>
          </Link>
          <Link href="/state-guide">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-[#c0c0c0] hover:bg-[#e0e0e0] text-[#505050] bg-transparent"
            >
              50-State Guide
            </Button>
          </Link>
        </div>

        <div className="pt-8">
          <p className="text-sm text-[#707070] mb-4">
            Stay updated with our campaign progress and strategic insights
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="https://substack.com/@talkwithserenity" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="ghost" 
                className="text-[#505050] hover:text-[#303030] hover:bg-[#e0e0e0]"
              >
                Subscribe to Newsletter →
              </Button>
            </Link>
            <Link 
              href="https://experiencing-mania-ebook.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="ghost" 
                className="text-[#505050] hover:text-[#303030] hover:bg-[#e0e0e0]"
              >
                Mental Health Experience →
              </Button>
            </Link>
            <Link 
              href="https://www.talkwithserenity.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button 
                variant="ghost" 
                className="text-[#505050] hover:text-[#303030] hover:bg-[#e0e0e0]"
              >
                24/7 Mental Health App →
              </Button>
            </Link>
          </div>
        </div>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-accent">50</div>
            <div className="text-sm text-muted-foreground">States. One Mission.</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-accent">2028</div>
            <div className="text-sm text-muted-foreground">The Year of Change</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-accent">∞</div>
            <div className="text-sm text-muted-foreground">Possibilities Ahead</div>
          </div>
        </div>
      </div>
    </section>
  )
}
