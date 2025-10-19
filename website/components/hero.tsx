import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />

      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-sm text-accent mb-4">
          Presidential Campaign 2028
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
          Don't Vote.
          <br />
          <span className="text-accent">Write-In.</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
          The two-party system is broken. We will not fix it. We will replace it. Join the movement for a new paradigm
          of American leadership.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="/manifesto">
            <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
              Read the Manifesto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/pure-beachhead">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-accent/30 hover:bg-accent/10 hover:text-accent-foreground bg-transparent"
            >
              Pure Beachhead Strategy
            </Button>
          </Link>
          <Link href="/state-guide">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-accent/30 hover:bg-accent/10 hover:text-accent-foreground bg-transparent"
            >
              50-State Guide
            </Button>
          </Link>
        </div>

        <div className="pt-8">
          <p className="text-sm text-muted-foreground mb-4">
            Stay updated with our campaign progress and strategic insights
          </p>
          <Link 
            href="https://substack.com/@talkwithserenity" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button 
              variant="ghost" 
              className="text-accent hover:text-accent-foreground hover:bg-accent/10"
            >
              Subscribe to Newsletter →
            </Button>
          </Link>
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
