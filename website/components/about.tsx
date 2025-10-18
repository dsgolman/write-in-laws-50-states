import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section className="py-24 px-4 bg-card">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">The Archetype of a New Leader</h2>
        </div>

        <Card className="p-8 md:p-12 bg-background border-accent/20 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">The Heir to Trauma</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A third-generation Holocaust survivor, carrying the moral imperative to build a world where human dignity
              is non-negotiable. History has taught us what happens when we remain silent.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">The Veteran of the Interior</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A 16-year mental health patient, representing the millions who struggle in silence and demanding a society
              that cares for the mind as much as the body.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">The Master of Technology</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A computer scientist who has built systems at the highest levels, possessing the expertise to guide the
              age of AGI for the benefit of all, not the few.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-accent">The Social Architect</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A person with 10,000 hours of social mastery, capable of translating this complex vision into a movement
              that touches hearts, minds, and souls.
            </p>
          </div>
        </Card>

        <div className="text-center pt-8">
          <p className="text-xl text-muted-foreground italic text-balance">
            "We live in the shadow of the Pentagon. We know this system. And we are here to redirect it from within."
          </p>
        </div>
      </div>
    </section>
  )
}
