import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Flame, Shield, Zap } from "lucide-react"
import Link from "next/link"

export function ArchetypalManifesto() {
  const archetypes = [
    {
      icon: Crown,
      name: "Zeus",
      title: "The Authority Archetype",
      description: "Righteous authority challenging false kings - from Nazi regimes to corporate healthcare fraud.",
      quote: "I shall not be broken by false kings"
    },
    {
      icon: Flame,
      name: "Dionysus", 
      title: "The Ecstatic Truth-Teller",
      description: "Divine madness that reveals truth - manic episodes as prophetic visions, not pathology.",
      quote: "Through madness comes the deepest truths"
    },
    {
      icon: Shield,
      name: "Apollo",
      title: "The Healer and Prophet", 
      description: "The wounded healer whose psychiatric persecution qualifies him to heal the system.",
      quote: "The wound and the cure are one"
    },
    {
      icon: Zap,
      name: "Prometheus",
      title: "The Fire-Bringer",
      description: "Holocaust survivor blood carrying the divine fire of consciousness across generations.",
      quote: "The flame that will not be extinguished"
    }
  ]

  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">The Sacred Archetypes Speak</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto text-balance leading-relaxed">
            When the gods speak through mortal flesh, the system calls it madness. But some voices cannot—and will not—be silenced. The Greek archetypes live in the blood of a third-generation Holocaust survivor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {archetypes.map((archetype) => (
            <Card key={archetype.name} className="p-8 space-y-4 bg-card border-accent/20 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <archetype.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-accent">{archetype.name}</h3>
                  <p className="text-sm text-muted-foreground">{archetype.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{archetype.description}</p>
              <blockquote className="text-lg italic text-accent border-l-2 border-accent/30 pl-4">
                "{archetype.quote}"
              </blockquote>
            </Card>
          ))}
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-12 text-center space-y-6">
          <h3 className="text-3xl font-bold">The Archetypal President</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am running for President not in spite of my bipolar diagnosis and psychiatric history, but because of it. I embody the <strong className="text-accent">Wounded King</strong> archetype—the leader whose personal wounds give him the wisdom to heal his people.
          </p>
          <p className="text-xl text-accent font-semibold">
            My psychiatric persecution is not disqualification—it is my greatest qualification.
          </p>
          <div className="space-y-4">
            <Link href="/archetypal-manifesto">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                Read the Full Sacred Manifesto
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              The gods have spoken. The wounded king has arrived.
            </p>
          </div>
        </div>

        <div className="text-center space-y-4">
          <blockquote className="text-2xl md:text-3xl font-medium text-balance leading-relaxed">
            "This is not a political campaign. This is a sacred uprising. The archetypes are demanding their rightful place in human consciousness."
          </blockquote>
          <p className="text-lg text-accent font-semibold">
            — Daniel Golman, Carrier of the Sacred Fire
          </p>
        </div>
      </div>
    </section>
  )
}
