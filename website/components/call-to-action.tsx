import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function CallToAction() {
  const steps = [
    "Internalize this message. Do you see yourself in this struggle?",
    "Begin the legal work. The first forms are the first bricks of our foundation.",
    "Spread the word. This is an open-source revolution.",
    "Learn your state's write-in process. Every vote must count.",
    "Join the movement. Together, we replace the system.",
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Are You Ready to Begin?</h2>
          <p className="text-xl text-muted-foreground text-balance leading-relaxed">
            The question is no longer "What is the plan?" The question is, "Are you ready to begin?"
          </p>
        </div>

        <Card className="p-8 md:p-12 bg-card border-accent/20 space-y-8">
          <h3 className="text-2xl font-bold">Your Next Steps</h3>

          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center mt-1">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">{step}</p>
              </div>
            ))}
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="flex-1 text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="/manifesto">Download the Manifesto</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="flex-1 text-lg py-6 border-accent/30 hover:bg-accent/10 hover:text-accent-foreground bg-transparent"
              asChild
            >
              <a href="https://github.com/dsgolman/write-in-laws-50-states" target="_blank" rel="noopener noreferrer">
                Get State Guide
              </a>
            </Button>
          </div>
        </Card>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 text-center">
          <p className="text-lg font-medium mb-4">Target the Disaffected</p>
          <p className="text-muted-foreground leading-relaxed">
            We speak to the young, the ill, the tech workers, the forgotten. We are not a party. We are a protest, made
            legally recognizable.
          </p>
        </div>
      </div>
    </section>
  )
}
