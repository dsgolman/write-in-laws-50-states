import { Card } from "@/components/ui/card"
import { Brain, Heart, Shield, Zap } from "lucide-react"

export function Platform() {
  const pillars = [
    {
      icon: Brain,
      title: "AGI for Human Dignity",
      description:
        'Harness artificial general intelligence to raise a "common sense" floor of dignity for every human being. Technology should serve humanity, not replace it.',
    },
    {
      icon: Heart,
      title: "Mental Health Revolution",
      description:
        "As a 16-year mental health patient, I know the system is broken. We will build a society that cares for the mind as much as the body.",
    },
    {
      icon: Shield,
      title: "Never Again",
      description:
        "As a third-generation Holocaust survivor, I carry the moral imperative to build a world where human dignity is non-negotiable.",
    },
    {
      icon: Zap,
      title: "Systems Thinking",
      description:
        "A computer scientist who has built systems at the highest levels. I understand how to architect solutions that scale for 330 million Americans.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">A Platform for the Future</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            Using the power of AGI to raise a common sense floor of dignity for every human being.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => (
            <Card key={index} className="p-8 space-y-4 bg-card border-border hover:border-accent/40 transition-colors">
              <div className="h-14 w-14 rounded-lg bg-accent/10 flex items-center justify-center">
                <pillar.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
