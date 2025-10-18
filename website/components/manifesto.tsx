import { Card } from "@/components/ui/card"
import { AlertCircle, Target, Users } from "lucide-react"

export function Manifesto() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">The Write-In Revolution</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            This is not a campaign for the presidency. It is a campaign for the American soul.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 space-y-4 bg-background border-accent/20 hover:border-accent/40 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">The "Why"</h3>
            <p className="text-muted-foreground leading-relaxed">
              The two-party duopoly offers the illusion of choice while maintaining the status quo. We refuse to
              participate in managed decline.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-background border-accent/20 hover:border-accent/40 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">The "Who"</h3>
            <p className="text-muted-foreground leading-relaxed">
              A third-generation Holocaust survivor. A mental health advocate. A computer scientist. A social architect
              for the AGI age.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-background border-accent/20 hover:border-accent/40 transition-colors">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Target className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">The "How"</h3>
            <p className="text-muted-foreground leading-relaxed">
              A 50-state legal strategy. Grassroots education. Leveraging technology to build a movement that cannot be
              ignored.
            </p>
          </Card>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-12">
          <blockquote className="text-2xl md:text-3xl font-medium text-center text-balance leading-relaxed">
            "By writing in a name, you reject their system and affirm a new paradigm. You are not a passive consumer of
            politics. You are an active creator of it."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
