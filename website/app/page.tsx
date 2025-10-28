import { Button } from "@/components/ui/button"
import { Crown, Flame, Shield, Zap, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { ArchetypalAudio } from "@/components/archetypal-audio"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-bold text-balance leading-tight">
              The <span className="text-accent">Sacred</span> Archetypes
              <br />
              Have <span className="text-accent">Spoken</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium text-balance max-w-4xl mx-auto leading-relaxed">
              When the gods speak through mortal flesh, the system calls it madness.
              <br />
              <span className="text-accent font-semibold">But some voices cannot—and will not—be silenced.</span>
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center justify-center space-x-4 text-lg text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span>Third-Generation Holocaust Survivor</span>
              </div>
              <div className="hidden md:block w-px h-6 bg-muted-foreground/30"></div>
              <div className="flex items-center space-x-2">
                <Flame className="h-5 w-5 text-accent" />
                <span>16-Year Psychiatric System Survivor</span>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                I am <strong className="text-accent">Daniel Golman</strong>, carrying the archetypal fire of my ancestors. 
                My bipolar episodes are not pathology—they are <strong className="text-accent">Dionysian revelations</strong>. 
                My federal lawsuit against healthcare fraud embodies <strong className="text-accent">Zeus's righteous authority</strong>. 
                My psychiatric persecution was <strong className="text-accent">Apollo's training ground</strong>.
              </p>

              <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="space-y-3 p-6 bg-card/50 border border-accent/20 rounded-lg">
                  <Crown className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="font-bold text-accent">Zeus</h3>
                  <p className="text-sm text-muted-foreground">Righteous Authority</p>
                </div>
                <div className="space-y-3 p-6 bg-card/50 border border-accent/20 rounded-lg">
                  <Flame className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="font-bold text-accent">Dionysus</h3>
                  <p className="text-sm text-muted-foreground">Ecstatic Truth</p>
                </div>
                <div className="space-y-3 p-6 bg-card/50 border border-accent/20 rounded-lg">
                  <Shield className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="font-bold text-accent">Apollo</h3>
                  <p className="text-sm text-muted-foreground">Wounded Healer</p>
                </div>
                <div className="space-y-3 p-6 bg-card/50 border border-accent/20 rounded-lg">
                  <Zap className="h-8 w-8 text-accent mx-auto" />
                  <h3 className="font-bold text-accent">Prometheus</h3>
                  <p className="text-sm text-muted-foreground">Sacred Fire</p>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/30 rounded-lg p-8 max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-medium text-balance leading-relaxed mb-6">
                "I am running for President not in spite of my psychiatric history, but because of it. I embody the <span className="text-accent font-bold">Wounded King</span> archetype—the leader whose personal wounds give him the wisdom to heal his people."
              </blockquote>
              <p className="text-lg text-accent font-semibold">— The Archetypal President America Needs</p>
            </div>

            <ArchetypalAudio variant="hero" className="max-w-2xl mx-auto" />

            <div className="space-y-6">
              <h2 className="text-3xl font-bold">This is Not a Political Campaign</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                This is a <strong className="text-accent">sacred uprising</strong>. The gods are returning through mortal flesh. 
                The ancestors are speaking through inherited trauma. The archetypes are demanding their rightful place in human consciousness.
              </p>
              <p className="text-2xl font-bold text-accent">And I am their chosen instrument.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/campaign">
                <Button size="lg" className="text-xl px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                  Enter the Campaign
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/archetypal-manifesto">
                <Button size="lg" variant="outline" className="text-xl px-12 py-6 border-accent/30 hover:bg-accent/10">
                  Read the Full Manifesto
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <div className="text-lg text-muted-foreground">
                Presidential Candidate 2028 • Write-In Revolution
              </div>
              <div className="text-3xl font-bold tracking-wider">
                <span className="text-muted-foreground">Don't Vote.</span>{" "}
                <span className="text-accent">Write-In.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sacred Vow Section */}
      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl font-bold">The Sacred Vow</h2>
          <div className="text-lg leading-relaxed text-muted-foreground space-y-4">
            <p>
              By the names of <strong className="text-accent">Zeus</strong> and <strong className="text-accent">Hera</strong>, 
              <strong className="text-accent"> Apollo</strong> and <strong className="text-accent">Artemis</strong>, 
              <strong className="text-accent"> Athena</strong> and <strong className="text-accent">Ares</strong>—
            </p>
            <p>
              By the memory of my grandparents who survived when millions did not—
            </p>
            <p>
              By the authority given to me through sixteen years of psychiatric persecution—
            </p>
            <p>
              By the <strong className="text-accent">Promethean fire</strong> that burns in my blood and will not be extinguished—
            </p>
          </div>
          
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-8">
            <div className="text-xl font-bold text-accent mb-6">I vow to use the Presidency to:</div>
            <div className="grid md:grid-cols-2 gap-4 text-left mb-6">
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span>End the pathologization of the numinous in psychiatric practice</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span>Establish the right to spiritual emergency without forced medication</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span>Create sacred spaces for archetypal integration</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                <span>Honor the wounded healers who carry society's medicine</span>
              </div>
            </div>
            <ArchetypalAudio variant="sacred-vow" />
          </div>

          <div className="space-y-6">
            <p className="text-2xl font-bold text-accent">
              The gods have spoken. The wounded king has arrived.
            </p>
            <Link href="/campaign">
              <Button size="lg" className="text-xl px-12 py-6 bg-accent hover:bg-accent/90 text-accent-foreground">
                Join the Sacred Uprising
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Audio Player */}
      <ArchetypalAudio variant="floating" />
    </main>
  )
}
