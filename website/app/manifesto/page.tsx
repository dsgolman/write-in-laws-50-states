import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-accent/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">The Write-In Revolution: A Manifesto</h1>
            <p className="text-xl text-accent font-semibold">
              The System is Broken. We Will Not Fix It. We Will Replace It.
            </p>
          </div>

          <div className="space-y-8 text-foreground">
            <section>
              <p className="text-lg leading-relaxed text-muted-foreground">
                The two-party system is a duopoly that no longer serves the people. It offers the illusion of choice
                while maintaining the status quo. We are told to vote for the "lesser evil," to participate in our own
                managed decline. We refuse.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This is not a campaign for the presidency. It is a campaign for the American soul. We are not asking for
                your vote. We are asking for your declaration of independence.
              </p>
            </section>

            <section className="border-l-4 border-accent pl-6 py-2">
              <h2 className="text-3xl font-bold mb-4">I. The "Why": The Act of Defiance</h2>
              <p className="text-lg leading-relaxed mb-4">
                Our core message is simple: <span className="text-accent font-bold">"Don't Vote. Write-In."</span>
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This is not a call for apathy. It is a call for a higher form of participation. You are not choosing
                between two pre-selected candidates of the establishment. You are performing a specific, deliberate act
                of defiance. You are writing in the name of a new future.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                By writing in a name, you reject their system and affirm a new paradigm. You are not a passive consumer
                of politics. You are an active creator of it.
              </p>
            </section>

            <section className="border-l-4 border-accent pl-6 py-2">
              <h2 className="text-3xl font-bold mb-4">II. The "Who": The Archetype of a New Leader</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                The author of this manifesto is the embodiment of the future we seek:
              </p>
              <ul className="space-y-4 text-lg">
                <li className="leading-relaxed">
                  <strong className="text-accent">The Heir to Trauma:</strong>{" "}
                  <span className="text-muted-foreground">
                    A third-generation Holocaust survivor, carrying the moral imperative to build a world where human
                    dignity is non-negotiable.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <strong className="text-accent">The Veteran of the Interior:</strong>{" "}
                  <span className="text-muted-foreground">
                    A 16-year mental health patient, representing the millions who struggle in silence and demanding a
                    society that cares for the mind as much as the body.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <strong className="text-accent">The Master of Technology:</strong>{" "}
                  <span className="text-muted-foreground">
                    A computer scientist who has built systems at the highest levels, possessing the expertise to guide
                    the age of AGI for the benefit of all, not the few.
                  </span>
                </li>
                <li className="leading-relaxed">
                  <strong className="text-accent">The Social Architect:</strong>{" "}
                  <span className="text-muted-foreground">
                    A person with 10,000 hours of social mastery, capable of translating this complex vision into a
                    movement that touches hearts, minds, and souls.
                  </span>
                </li>
              </ul>
              <p className="text-lg leading-relaxed text-accent font-semibold mt-6">
                Our platform is the synthesis of this life: Using the power of AGI to raise a "common sense" floor of
                dignity for every human being.
              </p>
            </section>

            <section className="border-l-4 border-accent pl-6 py-2">
              <h2 className="text-3xl font-bold mb-4">III. The "How": The Revolutionary's Practical Guide</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                A revolution without a plan is a riot. We have a plan.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">1. The Legal Battlefield:</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="leading-relaxed">
                      <strong className="text-accent">Home State First:</strong>{" "}
                      <span className="text-muted-foreground">
                        We will master the process in Virginia, filing the "Declaration of Write-In Candidacy" and
                        recruiting our slate of electors. This is our beachhead.
                      </span>
                    </li>
                    <li className="leading-relaxed">
                      <strong className="text-accent">The 50-State War:</strong>{" "}
                      <span className="text-muted-foreground">
                        We will wage a simultaneous, meticulous campaign across the nation, categorizing states as
                        "Friendly," "Bureaucratic," or "Hostile," and fighting for every single valid write-in vote.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">2. The Movement:</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="leading-relaxed">
                      <strong className="text-accent">Education is Key:</strong>{" "}
                      <span className="text-muted-foreground">
                        We will provide a clear, state-by-state guide on how to execute this act of defiance. A
                        misspelled name is a lost voice; we will ensure every voice is heard correctly.
                      </span>
                    </li>
                    <li className="leading-relaxed">
                      <strong className="text-accent">Leverage the Locale:</strong>{" "}
                      <span className="text-muted-foreground">
                        "We live in the shadow of the Pentagon. We know this system. And we are here to redirect it from
                        within."
                      </span>
                    </li>
                    <li className="leading-relaxed">
                      <strong className="text-accent">Target the Disaffected:</strong>{" "}
                      <span className="text-muted-foreground">
                        We speak to the young, the ill, the tech workers, the forgotten. We are not a party. We are a
                        protest, made legally recognizable.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="bg-accent/5 border border-accent/20 rounded-lg p-8 my-8">
              <h2 className="text-3xl font-bold mb-4 text-center">A Call to Action</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                This manifesto is a living document. It is the starting point. The next steps are yours:
              </p>
              <ol className="space-y-3 text-lg list-decimal list-inside">
                <li className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Internalize This Message.</strong> Do you see yourself in this
                  struggle?
                </li>
                <li className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Begin the Legal Work.</strong> The first forms in Virginia are the
                  first bricks of our new foundation.
                </li>
                <li className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Spread the Word.</strong> This is not a secret strategy. It is an
                  open-source revolution. Share the "Why."
                </li>
              </ol>
              <p className="text-xl leading-relaxed text-accent font-bold mt-6 text-center">
                The question is no longer "What is the plan?" The question is, "Are you ready to begin?"
              </p>
            </section>
          </div>

          <div className="text-center mt-12">
            <Link href="/">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                Join the Movement
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  )
}
