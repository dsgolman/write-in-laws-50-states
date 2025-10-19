import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Globe, DollarSign, Shield, Lightbulb } from "lucide-react"
import Link from "next/link"

const policyAreas = [
  {
    icon: <Target className="h-6 w-6" />,
    title: "Electoral Reform",
    description: "Fundamental changes to how we elect leaders",
    policies: [
      "Expand ranked choice voting (like Arlington's pioneering model)",
      "Open primaries in all states", 
      "Campaign finance reform with transparency requirements",
      "Eliminate gerrymandering through independent redistricting",
      "National write-in standardization and ballot access reform"
    ]
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Education & Student Success",
    description: "Ensuring every student achieves their full potential",
    policies: [
      "Close achievement gaps through targeted support and resources",
      "Expand mental health services and school counseling staff",
      "Strengthen dual-language immersion and English learner programs",
      "Increase teacher compensation and reduce administrative burden",
      "Implement evidence-based inclusive education practices"
    ]
  },
  {
    icon: <DollarSign className="h-6 w-6" />,
    title: "Housing & Economic Justice",
    description: "Building an economy and housing market that works for everyone",
    policies: [
      "Expand affordable housing through zoning reform and public investment",
      "Implement eviction prevention and tenant protection programs",
      "Support mixed-income development and community land trusts",
      "Progressive taxation to fund essential services",
      "Worker ownership incentives and living wage policies"
    ]
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Public Safety & Mental Health",
    description: "Community-centered approaches to safety and wellbeing",
    policies: [
      "Expand behavioral health services and crisis intervention",
      "Implement restorative justice practices in schools and communities",
      "Increase funding for mental health professionals and social workers",
      "Community policing with accountability and transparency",
      "Drug treatment and harm reduction over criminalization"
    ]
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Climate & Environment",
    description: "Urgent action on the climate crisis with environmental justice",
    policies: [
      "Accelerate renewable energy transition and green infrastructure",
      "Environmental justice priorities for frontline communities",
      "Sustainable transportation including expanded transit and bike infrastructure",
      "Carbon fee and dividend with progressive rebates",
      "Green building standards and energy efficiency programs"
    ]
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Innovation & Technology",
    description: "Harnessing technology for public good and digital equity",
    policies: [
      "Universal broadband access as a public utility",
      "AI ethics and algorithmic accountability in government",
      "Digital privacy rights and data protection",
      "Open source government software and transparency platforms",
      "Tech worker protections and platform accountability"
    ]
  }
]

export default function PolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-accent border-accent/30">
            Policy Platform 2028
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            A New Vision for Arlington & America
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond left vs. right. Beyond the two-party system. These are the policies 
            that will rebuild American democracy from the ground up, starting with Arlington's local needs.
          </p>
        </div>
      </section>

      {/* Policy Areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policyAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {area.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                      <CardDescription>{area.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.policies.map((policy, policyIndex) => (
                      <li key={policyIndex} className="flex items-start gap-2 text-sm">
                        <ArrowRight className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span>{policy}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 px-4 bg-card/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent">Evidence-Based</h3>
              <p className="text-sm text-muted-foreground">
                Every policy backed by research, data, and proven results from around the world.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent">People-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Decisions made through genuine democratic participation, not corporate influence.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-accent">Future-Focused</h3>
              <p className="text-sm text-muted-foreground">
                Long-term thinking that prioritizes sustainability and generational equity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Ready to Build This Future?</h2>
          <p className="text-xl text-muted-foreground">
            These policies won't implement themselves. Join the movement to make them reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pure-beachhead">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                See the Strategy
              </Button>
            </Link>
            <Link href="/manifesto">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Read the Manifesto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}