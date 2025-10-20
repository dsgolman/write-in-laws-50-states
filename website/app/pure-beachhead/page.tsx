import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, XCircle, AlertCircle, Users, Vote, Target } from "lucide-react"
import Link from "next/link"

const pureBeachheadStates = [
  {
    name: "New Hampshire",
    electoralVotes: 4,
    status: "NO_REGISTRATION",
    tier: "TIER_1",
    highlights: ["First in the Nation primary", "High visibility", "Zero barriers"],
    population: "1.4M",
    strategicValue: "Momentum Generator"
  },
  {
    name: "Iowa", 
    electoralVotes: 6,
    status: "NO_REGISTRATION",
    tier: "TIER_1", 
    highlights: ["First caucus state", "Grassroots tradition", "No sore loser laws"],
    population: "3.2M",
    strategicValue: "Early Momentum"
  },
  {
    name: "Rhode Island",
    electoralVotes: 4,
    status: "NO_REGISTRATION", 
    tier: "TIER_1",
    highlights: ["Same-day registration", "Hand recount option", "Small concentrated population"],
    population: "1.1M",
    strategicValue: "Proof of Concept"
  },
  {
    name: "Alabama",
    electoralVotes: 9,
    status: "NO_REGISTRATION",
    tier: "TIER_1",
    highlights: ["Strong independent tradition", "Evangelical base", "Populist movements"],
    population: "5.0M", 
    strategicValue: "Southern Beachhead"
  },
  {
    name: "Pennsylvania",
    electoralVotes: 19,
    status: "NO_REGISTRATION",
    tier: "TIER_1",
    highlights: ["Vote cumulation allowed", "No stickers rule", "Swing state"],
    population: "13.0M",
    strategicValue: "Major Prize"
  },
  {
    name: "New Jersey",
    electoralVotes: 14, 
    status: "NO_REGISTRATION",
    tier: "TIER_1",
    highlights: ["No filing requirements", "Dense population", "Media market access"],
    population: "9.3M",
    strategicValue: "Northeast Anchor"
  }
]

const prohibitedStates = [
  {
    name: "South Carolina",
    electoralVotes: 9,
    status: "PROHIBITED",
    reason: "Write-in votes not allowed for President/VP"
  }
]

const registrationRequired = [
  {
    name: "Wyoming", 
    electoralVotes: 3,
    status: "PRE_REGISTRATION_REQUIRED",
    requirement: "$200 filing fee + application"
  }
]

export default function PureBeachheadPage() {
  const totalElectoralVotes = pureBeachheadStates.reduce((sum, state) => sum + state.electoralVotes, 0)
  
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-accent border-accent/30">
            Strategic Analysis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Pure Beachhead States
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Zero-friction entry points for write-in presidential campaigns. No filing fees, no deadlines, no barriers.
          </p>
        </div>
      </section>

      {/* Electoral Math Summary */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl text-accent">{pureBeachheadStates.length}</CardTitle>
                <CardDescription>Pure Beachhead States</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl text-accent">{totalElectoralVotes}</CardTitle>
                <CardDescription>Total Electoral Votes</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl text-accent">270</CardTitle>
                <CardDescription>Needed to Win</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-3xl text-accent">{Math.round((totalElectoralVotes / 270) * 100)}%</CardTitle>
                <CardDescription>of Victory Threshold</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Strategy Overview */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-accent" />
                Strategic Framework
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Phase 1: Proof of Concept</h4>
                  <p className="text-sm text-muted-foreground">
                    Win smaller states (NH, RI, IA) to demonstrate viability and generate momentum.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Phase 2: Scaling</h4>
                  <p className="text-sm text-muted-foreground">
                    Leverage early wins to compete in larger states (PA, NJ, AL) with significant electoral votes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-accent">Phase 3: Coalition</h4>
                  <p className="text-sm text-muted-foreground">
                    Use 56 electoral votes as leverage for broader coalition building or House contingent election.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pure Beachhead States Grid */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">The Pure Beachhead States</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pureBeachheadStates.map((state) => (
              <Card key={state.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{state.name}</CardTitle>
                      <CardDescription>{state.population} population</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-accent border-accent/30">
                      {state.electoralVotes} EV
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">No Registration Required</span>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium text-accent">Strategic Value:</h5>
                    <p className="text-sm text-muted-foreground">{state.strategicValue}</p>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-medium">Key Advantages:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {state.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-1 h-1 bg-accent rounded-full" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Electoral Math Analysis */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Electoral Math Analysis</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Vote className="h-5 w-5 text-accent" />
                  Victory Scenarios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Scenario 1: Protest Vote Surge</h4>
                    <p className="text-sm text-muted-foreground">
                      Major scandal affects both parties. Write-in becomes "clean alternative." 
                      Need 35-45% in three-way race.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Scenario 2: Regional Momentum</h4>
                    <p className="text-sm text-muted-foreground">
                      Win NH primary season for visibility. Use momentum for IA and other early states. 
                      Media coverage creates national movement.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Scenario 3: Issue Coalition</h4>
                    <p className="text-sm text-muted-foreground">
                      Single compelling issue with cross-party appeal. 
                      30-40% vote share in fragmented field.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-accent" />
                  Success Factors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    "Name Recognition: Massive voter education campaign",
                    "Ground Game: Volunteers for name card distribution", 
                    "Media Strategy: Leverage outsider narrative",
                    "Coalition Building: Appeal to independents",
                    "Funding: Significant resources for outreach"
                  ].map((factor, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{factor}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* States with Barriers */}
      <section className="py-16 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">States with Barriers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-yellow-500">
                  <AlertCircle className="h-5 w-5" />
                  Registration Required
                </CardTitle>
              </CardHeader>
              <CardContent>
                {registrationRequired.map((state) => (
                  <div key={state.name} className="flex justify-between items-center p-3 bg-yellow-500/10 rounded-lg">
                    <div>
                      <h4 className="font-medium">{state.name}</h4>
                      <p className="text-sm text-muted-foreground">{state.requirement}</p>
                    </div>
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500/30">
                      {state.electoralVotes} EV
                    </Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2" style={{color: 'var(--american-red)'}}>
                <XCircle className="h-5 w-5" />
                Prohibited States
              </CardTitle>
              <CardDescription>States where write-in candidates are not permitted</CardDescription>
            </CardHeader>
            <CardContent>
              {prohibitedStates.map((state) => (
                <div key={state.name} className="flex justify-between items-center p-3 rounded-lg" style={{backgroundColor: 'color-mix(in srgb, var(--american-red) 10%, transparent)'}}>
                  <div>
                    <div className="font-medium">{state.name}</div>
                    <div className="text-sm text-muted-foreground">{state.reason}</div>
                  </div>
                  <Badge variant="outline" style={{color: 'var(--american-red)', borderColor: 'color-mix(in srgb, var(--american-red) 30%, transparent)'}}>
                    Prohibited
                  </Badge>
                </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Execute the Strategy?</h2>
          <p className="text-xl text-muted-foreground">
            The Pure Beachhead States provide a clear path forward. Zero barriers, maximum impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/state-guide">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                Explore State Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/manifesto">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Read Full Manifesto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}