import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ArchetypalManifestoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <Link href="/campaign">
          <Button variant="ghost" className="mb-8 hover:bg-accent/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Campaign
          </Button>
        </Link>

        <article className="prose prose-invert prose-lg max-w-none">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">
              The Greek Archetypes and the Persecution of the Numinous
            </h1>
            <p className="text-xl text-accent font-semibold">
              A Third-Generation Holocaust Survivor's Journey Through America's Psychiatric System
            </p>
            <p className="text-lg text-muted-foreground italic mt-4">
              "When the gods speak through mortal flesh, the system calls it madness. When the ancients stir in modern blood, medicine demands silence. But some voices cannot—and will not—be silenced."
            </p>
          </div>

          <div className="space-y-8 text-foreground">
            <section className="border-l-4 border-accent pl-6 py-2">
              <h2 className="text-3xl font-bold mb-4">I. The Inheritance of Divine Fire</h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                I am <strong className="text-accent">Daniel Golman</strong>, third-generation Holocaust survivor, and the blood of those who survived the ultimate attempt to extinguish the human soul flows through me. My grandparents carried more than trauma across the ocean—they carried the archetypal memory of <strong className="text-accent">Prometheus</strong>, the fire-bringer, the one who defied the gods to give humanity the light of consciousness.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                But in America, when that Promethean fire burns too brightly in the mind of a Holocaust descendant, the system does not see divine inheritance. It sees pathology.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                When the archetypal energies of my ancestors—their rage at injustice, their refusal to submit, their desperate clawing toward dignity—manifest in my bipolar episodes, modern psychiatry does not recognize <strong className="text-accent">Ares</strong> awakening to defend the sacred. It sees mania to be medicated.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When the wisdom of <strong className="text-accent">Athena</strong> speaks through my strategic mind, showing me the patterns of healthcare fraud and systemic corruption, they do not honor the owl-eyed goddess of justice. They prescribe antipsychotics.
              </p>
            </section>

            <section className="border-l-4 border-accent pl-6 py-2">
              <h2 className="text-3xl font-bold mb-4">II. The Sacred Archetypes Speaking Through Generational Trauma</h2>
              
              <div className="space-y-6">
                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-accent">Zeus: The Authority Archetype</h3>
                  <p className="text-lg italic mb-3 text-accent">"I shall not be broken by false kings"</p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    My grandfather fled the ultimate false authority—the Nazi regime that declared itself divine while committing the most profound blasphemy against human dignity. That Zeusian energy of righteous authority lives in me, demanding that I challenge the false gods of corporate healthcare and psychiatric control.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    When I filed federal litigation against healthcare fraud, I was not merely pursuing legal remedies. I was embodying <strong className="text-accent">Zeus</strong>, the true king who exposes pretender-kings. The psychiatric system labels this "grandiosity" because it cannot recognize authentic divine authority when it encounters it.
                  </p>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-accent">Dionysus: The Ecstatic Truth-Teller</h3>
                  <p className="text-lg italic mb-3 text-accent">"Through madness comes the deepest truths"</p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <strong className="text-accent">Dionysus</strong>, the god of ecstasy and divine madness, knew what Jung understood: that the most profound truths come through states the rational mind calls "insane." My manic episodes are not chemical malfunctions—they are <strong className="text-accent">Dionysian</strong> revelations, moments when the veil between the mundane and the sacred tears open.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    In these states, I see with perfect clarity the healthcare fraud that exploits the vulnerable. I feel the agony of every Holocaust victim in my DNA. I understand the systemic patterns that connect my family's historical persecution to my current persecution by the psychiatric establishment.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The system medicates Dionysus because it fears the truths he reveals.
                  </p>
                </div>

                <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-3 text-accent">Apollo: The Healer and Prophet</h3>
                  <p className="text-lg italic mb-3 text-accent">"The wound and the cure are one"</p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <strong className="text-accent">Apollo</strong>, god of healing and prophecy, teaches us that the wounded healer possesses the deepest medicine. As a 16-year mental health patient, I am not broken—I am <strong className="text-accent">Apollo's</strong> chosen instrument, wounded precisely so I can heal others.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    My experience inside the psychiatric system is not victimhood—it is <strong className="text-accent">Apollo's</strong> training ground. Every injection I received without consent, every diagnosis used to silence my voice, every billing fraud committed against my most vulnerable moments—these were not random traumas. They were prophetic visions of the system's corruption, given to me so I could expose it.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    The medical establishment pathologizes Apollo's gift of prophecy, calling it "delusions of reference" when I see the patterns they prefer to keep hidden.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-l-4 border-accent pl-6 py-2">
              <h2 className="text-3xl font-bold mb-4">III. The Modern Persecution: From Auschwitz to the Psych Ward</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3">The Pattern Recognition</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Jung understood what the psychiatric system refuses to acknowledge: that some individuals carry archetypal energies so powerfully that they threaten the established order. The same impulse that built concentration camps now builds psychiatric institutions—the need to contain and control those who embody inconvenient truths.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    My Holocaust survivor blood carries the memory of <strong className="text-accent">Cassandra</strong>—cursed to see the truth but never be believed. When I warned about healthcare fraud, I was labeled paranoid. When I demanded my complete medical records, I was called litigious. When I filed federal appeals, I became a "difficult patient."
                  </p>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <p className="text-lg leading-relaxed text-muted-foreground">
                      This is the same pattern:<br/>
                      • <strong>1940s:</strong> "The Jews are the problem"<br/>
                      • <strong>2020s:</strong> "The bipolar patient is the problem"<br/><br/>
                      Both deflect from systemic examination by pathologizing the messenger.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3">The Archetypal Suppression</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Modern psychiatry is terrified of archetypal energy because it cannot be controlled with medication. You cannot sedate <strong className="text-accent">Zeus</strong>. You cannot antipsychotic <strong className="text-accent">Athena</strong>. You cannot mood-stabilize <strong className="text-accent">Dionysus</strong>.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    What they can do is convince the carrier of these energies that they are sick, not sacred. That their visions are hallucinations, not revelations. That their rage at injustice is a symptom, not a calling.
                  </p>
                  <p className="text-lg leading-relaxed text-accent font-bold">
                    This is the ultimate blasphemy: convincing the gods' chosen instruments that their divine mission is mental illness.
                  </p>
                </div>
              </div>
            </section>

            <section className="border-l-4 border-accent pl-6 py-2">
              <h2 className="text-3xl font-bold mb-4">IV. The Presidential Mandate: Archetypal Leadership</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">The Wounded King Archetype</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    I am running for President of the United States not in spite of my psychiatric history, but because of it. I embody the <strong className="text-accent">Wounded King</strong> archetype—the leader whose personal wounds give him the wisdom to heal his people.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    My bipolar diagnosis is not a disqualification; it is my greatest qualification. <strong className="text-accent">Chiron</strong>, the wounded healer, could cure others precisely because he carried an unhealable wound. My psychiatric persecution gives me the authority to reform the system that creates such persecution.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-3 text-accent">The Sacred Marriage of Opposites</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                    Jung taught about the <strong className="text-accent">coniunctio</strong>—the sacred marriage of opposites that creates wholeness. My campaign represents this union:
                  </p>
                  <ul className="space-y-3 text-lg">
                    <li className="leading-relaxed text-muted-foreground">
                      • <strong className="text-accent">Apollo</strong> (healing) and <strong className="text-accent">Ares</strong> (warrior spirit)
                    </li>
                    <li className="leading-relaxed text-muted-foreground">
                      • <strong className="text-accent">Athena</strong> (strategic wisdom) and <strong className="text-accent">Dionysus</strong> (ecstatic truth)
                    </li>
                    <li className="leading-relaxed text-muted-foreground">
                      • <strong className="text-accent">Holocaust memory</strong> (never again) and <strong className="text-accent">American possibility</strong> (yet to be achieved)
                    </li>
                    <li className="leading-relaxed text-muted-foreground">
                      • <strong className="text-accent">Personal wound</strong> (psychiatric trauma) and <strong className="text-accent">collective healing</strong> (systemic reform)
                    </li>
                  </ul>
                  <p className="text-lg leading-relaxed text-accent font-semibold mt-4">
                    This is not contradiction—this is completion. This is what authentic leadership looks like in the age of the archetypal return.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-accent/5 border border-accent/20 rounded-lg p-8 my-8">
              <h2 className="text-3xl font-bold mb-4 text-center">VII. The Sacred Vow</h2>
              <div className="text-lg leading-relaxed text-muted-foreground space-y-4 mb-6">
                <p>
                  By the names of <strong className="text-accent">Zeus</strong> and <strong className="text-accent">Hera</strong>, <strong className="text-accent">Apollo</strong> and <strong className="text-accent">Artemis</strong>, <strong className="text-accent">Athena</strong> and <strong className="text-accent">Ares</strong>, <strong className="text-accent">Aphrodite</strong> and <strong className="text-accent">Hephaestus</strong>, <strong className="text-accent">Demeter</strong> and <strong className="text-accent">Dionysus</strong>, <strong className="text-accent">Hermes</strong> and <strong className="text-accent">Poseidon</strong>—
                </p>
                <p>
                  By the memory of my grandparents who survived when millions did not—
                </p>
                <p>
                  By the authority given to me through sixteen years of psychiatric persecution—
                </p>
                <p>
                  By the Promethean fire that burns in my blood and will not be extinguished—
                </p>
              </div>
              
              <div className="text-xl font-bold text-accent mb-4">I vow to use the Presidency of the United States to:</div>
              <ol className="space-y-3 text-lg list-decimal list-inside">
                <li className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">End the pathologization of the numinous</strong> in psychiatric practice
                </li>
                <li className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Establish the right to authentic spiritual emergency</strong> without forced medication
                </li>
                <li className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Create sacred spaces for archetypal integration</strong> within healthcare systems
                </li>
                <li className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Honor the wounded healers</strong> who carry society's deepest medicine
                </li>
                <li className="leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Build a bridge between ancient wisdom and modern healing</strong>
                </li>
              </ol>

              <div className="text-center mt-8 space-y-4">
                <p className="text-xl leading-relaxed text-accent font-bold">
                  This is not a political campaign. This is a sacred uprising.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  The gods are returning through mortal flesh.<br/>
                  The ancestors are speaking through inherited trauma.<br/>
                  The archetypes are demanding their rightful place in human consciousness.<br/>
                  <strong className="text-accent">And I am their chosen instrument.</strong>
                </p>
              </div>
            </section>

            <section className="text-center space-y-6">
              <h2 className="text-4xl font-bold mb-4">Don't Vote. Write-In. 2028.</h2>
              <p className="text-lg leading-relaxed text-muted-foreground max-w-3xl mx-auto">
                When you write in <strong className="text-accent">Daniel Golman</strong> for President in 2028, you are not casting a vote—you are performing a sacred act of recognition. You are acknowledging that leadership in the archetypal age requires leaders who have been initiated through suffering, who carry the wounds that qualify them to heal.
              </p>
              <p className="text-xl leading-relaxed text-accent font-bold">
                The gods have spoken. The ancestors have chosen. The wounded king has arrived.
              </p>
            </section>
          </div>

          <div className="text-center mt-12 space-y-4">
            <Link href="/campaign">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                Join the Sacred Uprising
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground">
              Daniel Golman • Presidential Candidate 2028 • Carrier of the Sacred Fire
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
