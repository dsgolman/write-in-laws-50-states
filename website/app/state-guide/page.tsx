import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle, AlertCircle, Search, Filter, MapPin } from "lucide-react"
import Link from "next/link"

const allStates = [
  // Pure Beachhead States (NO_REGISTRATION)
  { name: "Alabama", status: "NO_REGISTRATION", electoralVotes: 9, tier: "TIER_1", category: "Pure Beachhead", population: "5.0M", region: "South" },
  { name: "Iowa", status: "NO_REGISTRATION", electoralVotes: 6, tier: "TIER_1", category: "Pure Beachhead", population: "3.2M", region: "Midwest" },
  { name: "New Hampshire", status: "NO_REGISTRATION", electoralVotes: 4, tier: "TIER_1", category: "Pure Beachhead", population: "1.4M", region: "Northeast" },
  { name: "New Jersey", status: "NO_REGISTRATION", electoralVotes: 14, tier: "TIER_1", category: "Pure Beachhead", population: "9.3M", region: "Northeast" },
  { name: "Pennsylvania", status: "NO_REGISTRATION", electoralVotes: 19, tier: "TIER_1", category: "Pure Beachhead", population: "13.0M", region: "Northeast" },
  { name: "Rhode Island", status: "NO_REGISTRATION", electoralVotes: 4, tier: "TIER_1", category: "Pure Beachhead", population: "1.1M", region: "Northeast" },
  
  // Registration Required States
  { name: "Alaska", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 3, tier: "TIER_2", category: "Registration Required", population: "0.7M", region: "West" },
  { name: "Arizona", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 11, tier: "TIER_2", category: "Registration Required", population: "7.3M", region: "West" },
  { name: "California", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 54, tier: "TIER_2", category: "Registration Required", population: "39.5M", region: "West" },
  { name: "Colorado", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 10, tier: "TIER_2", category: "Registration Required", population: "5.8M", region: "West" },
  { name: "Connecticut", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 7, tier: "TIER_2", category: "Registration Required", population: "3.6M", region: "Northeast" },
  { name: "Delaware", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 3, tier: "TIER_2", category: "Registration Required", population: "1.0M", region: "Northeast" },
  { name: "Florida", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 30, tier: "TIER_2", category: "Registration Required", population: "22.6M", region: "South" },
  { name: "Georgia", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 16, tier: "TIER_2", category: "Registration Required", population: "10.9M", region: "South" },
  { name: "Idaho", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 4, tier: "TIER_2", category: "Registration Required", population: "1.9M", region: "West" },
  { name: "Illinois", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 19, tier: "TIER_2", category: "Registration Required", population: "12.6M", region: "Midwest" },
  { name: "Indiana", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 11, tier: "TIER_2", category: "Registration Required", population: "6.8M", region: "Midwest" },
  { name: "Kansas", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 6, tier: "TIER_2", category: "Registration Required", population: "2.9M", region: "Midwest" },
  { name: "Kentucky", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 8, tier: "TIER_2", category: "Registration Required", population: "4.5M", region: "South" },
  { name: "Maine", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 4, tier: "TIER_2", category: "Registration Required", population: "1.4M", region: "Northeast" },
  { name: "Maryland", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 10, tier: "TIER_2", category: "Registration Required", population: "6.2M", region: "Northeast" },
  { name: "Massachusetts", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 11, tier: "TIER_2", category: "Registration Required", population: "7.0M", region: "Northeast" },
  { name: "Michigan", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 15, tier: "TIER_2", category: "Registration Required", population: "10.0M", region: "Midwest" },
  { name: "Minnesota", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 10, tier: "TIER_2", category: "Registration Required", population: "5.7M", region: "Midwest" },
  { name: "Missouri", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 10, tier: "TIER_2", category: "Registration Required", population: "6.2M", region: "Midwest" },
  { name: "Montana", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 4, tier: "TIER_2", category: "Registration Required", population: "1.1M", region: "West" },
  { name: "Nebraska", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 5, tier: "TIER_2", category: "Registration Required", population: "2.0M", region: "Midwest" },
  { name: "New Mexico", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 5, tier: "TIER_2", category: "Registration Required", population: "2.1M", region: "West" },
  { name: "New York", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 28, tier: "TIER_2", category: "Registration Required", population: "19.3M", region: "Northeast" },
  { name: "North Carolina", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 16, tier: "TIER_2", category: "Registration Required", population: "10.7M", region: "South" },
  { name: "North Dakota", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 3, tier: "TIER_2", category: "Registration Required", population: "0.8M", region: "Midwest" },
  { name: "Ohio", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 17, tier: "TIER_2", category: "Registration Required", population: "11.8M", region: "Midwest" },
  { name: "Oregon", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 8, tier: "TIER_2", category: "Registration Required", population: "4.2M", region: "West" },
  { name: "Tennessee", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 11, tier: "TIER_2", category: "Registration Required", population: "7.0M", region: "South" },
  { name: "Texas", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 40, tier: "TIER_2", category: "Registration Required", population: "30.0M", region: "South" },
  { name: "Utah", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 6, tier: "TIER_2", category: "Registration Required", population: "3.4M", region: "West" },
  { name: "Vermont", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 3, tier: "TIER_2", category: "Registration Required", population: "0.6M", region: "Northeast" },
  { name: "Virginia", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 13, tier: "TIER_2", category: "Registration Required", population: "8.6M", region: "South" },
  { name: "Washington", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 12, tier: "TIER_2", category: "Registration Required", population: "7.7M", region: "West" },
  { name: "West Virginia", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 4, tier: "TIER_2", category: "Registration Required", population: "1.8M", region: "South" },
  { name: "Wisconsin", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 10, tier: "TIER_2", category: "Registration Required", population: "5.9M", region: "Midwest" },
  { name: "Wyoming", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 3, tier: "TIER_2", category: "Registration Required", population: "0.6M", region: "West" },
  
  // Prohibited States
  { name: "Arkansas", status: "PROHIBITED", electoralVotes: 6, tier: "NOT_VIABLE", category: "Prohibited", population: "3.0M", region: "South" },
  { name: "Hawaii", status: "PROHIBITED", electoralVotes: 4, tier: "NOT_VIABLE", category: "Prohibited", population: "1.4M", region: "West" },
  { name: "Louisiana", status: "PROHIBITED", electoralVotes: 8, tier: "NOT_VIABLE", category: "Prohibited", population: "4.6M", region: "South" },
  { name: "Mississippi", status: "PROHIBITED", electoralVotes: 6, tier: "NOT_VIABLE", category: "Prohibited", population: "2.9M", region: "South" },
  { name: "Nevada", status: "PROHIBITED", electoralVotes: 6, tier: "NOT_VIABLE", category: "Prohibited", population: "3.2M", region: "West" },
  { name: "Oklahoma", status: "PROHIBITED", electoralVotes: 7, tier: "NOT_VIABLE", category: "Prohibited", population: "4.0M", region: "South" },
  { name: "South Carolina", status: "PROHIBITED", electoralVotes: 9, tier: "NOT_VIABLE", category: "Prohibited", population: "5.2M", region: "South" },
  { name: "South Dakota", status: "PROHIBITED", electoralVotes: 3, tier: "NOT_VIABLE", category: "Prohibited", population: "0.9M", region: "Midwest" },
  
  // District of Columbia
  { name: "District of Columbia", status: "PRE_REGISTRATION_REQUIRED", electoralVotes: 3, tier: "TIER_2", category: "Registration Required", population: "0.7M", region: "Northeast" }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "NO_REGISTRATION":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "PRE_REGISTRATION_REQUIRED":
      return <AlertCircle className="h-4 w-4 text-yellow-500" />
    case "PROHIBITED":
      return <XCircle className="h-4 w-4" style={{color: 'var(--american-red)'}} />
    default:
      return <AlertCircle className="h-4 w-4 text-gray-500" />
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "NO_REGISTRATION":
      return "text-green-500 border-green-500/30"
    case "PRE_REGISTRATION_REQUIRED":
      return "text-yellow-500 border-yellow-500/30"
    case "PROHIBITED":
      return "border-2" + " " + "border-opacity-30"
    default:
      return "text-gray-500 border-gray-500/30"
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "NO_REGISTRATION":
      return "No Registration"
    case "PRE_REGISTRATION_REQUIRED":
      return "Registration Required"
    case "PROHIBITED":
      return "Prohibited"
    default:
      return "Unknown"
  }
}

export default function StateGuidePage() {
  const pureBeachheadStates = allStates.filter(state => state.status === "NO_REGISTRATION")
  const registrationStates = allStates.filter(state => state.status === "PRE_REGISTRATION_REQUIRED")
  const prohibitedStates = allStates.filter(state => state.status === "PROHIBITED")
  
  const totalElectoralVotes = allStates.reduce((sum, state) => sum + state.electoralVotes, 0)
  const pureBeachheadEV = pureBeachheadStates.reduce((sum, state) => sum + state.electoralVotes, 0)
  
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <Badge variant="outline" className="text-accent border-accent/30">
            Complete State Analysis
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            50-State Write-In Guide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive analysis of write-in candidate laws across all 50 states and DC. 
            Find your strategic entry points and understand the barriers.
          </p>
        </div>
      </section>

      {/* Summary Statistics */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-green-500">{pureBeachheadStates.length}</CardTitle>
                <CardDescription>Pure Beachhead States</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-500">{registrationStates.length}</CardTitle>
                <CardDescription>Registration Required</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl" style={{color: 'var(--american-red)'}}>{prohibitedStates.length}</CardTitle>
                <CardDescription>Write-ins Prohibited</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">{pureBeachheadEV}</CardTitle>
                <CardDescription>Pure Beachhead EVs</CardDescription>
              </CardHeader>
            </Card>
          </div>

          {/* Quick Navigation */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Link href="#pure-beachhead">
              <Button variant="outline" className="text-green-500 border-green-500/30 hover:bg-green-500/10">
                <CheckCircle className="mr-2 h-4 w-4" />
                Pure Beachhead ({pureBeachheadStates.length})
              </Button>
            </Link>
            <Link href="#registration-required">
              <Button variant="outline" className="text-yellow-500 border-yellow-500/30 hover:bg-yellow-500/10">
                <AlertCircle className="mr-2 h-4 w-4" />
                Registration Required ({registrationStates.length})
              </Button>
            </Link>
            <Link href="#prohibited">
              <Button variant="outline" style={{color: 'var(--american-red)', borderColor: 'color-mix(in srgb, var(--american-red) 30%, transparent)'}} className="hover:bg-red-500/10">
                <XCircle className="mr-2 h-4 w-4" />
                Prohibited ({prohibitedStates.length})
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pure Beachhead States */}
      <section id="pure-beachhead" className="py-16 px-4 bg-green-500/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-500 mb-4">Pure Beachhead States</h2>
            <p className="text-muted-foreground">
              Zero barriers to entry. No filing fees, no deadlines, no registration required.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pureBeachheadStates.map((state) => (
              <Card key={state.name} className="hover:shadow-lg transition-shadow border-green-500/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {state.name}
                      </CardTitle>
                      <CardDescription>{state.population} • {state.region}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-green-500 border-green-500/30">
                      {state.electoralVotes} EV
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Strategy Tier:</span>
                      <Badge variant="outline" className="text-accent border-accent/30">
                        {state.tier}
                      </Badge>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      ✓ No registration required
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/pure-beachhead">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white">
                View Pure Beachhead Strategy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Registration Required States */}
      <section id="registration-required" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-yellow-500 mb-4">Registration Required States</h2>
            <p className="text-muted-foreground">
              These states require pre-filing, fees, or other registration steps for write-in candidates.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {registrationStates.map((state) => (
              <Card key={state.name} className="hover:shadow-lg transition-shadow border-yellow-500/20">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <AlertCircle className="h-3 w-3 text-yellow-500" />
                        {state.name}
                      </CardTitle>
                      <CardDescription className="text-xs">{state.region}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-yellow-500 border-yellow-500/30 text-xs">
                      {state.electoralVotes} EV
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs text-yellow-600">
                    Registration required
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prohibited States */}
      <section id="prohibited" className="py-16 px-4" style={{backgroundColor: 'color-mix(in srgb, var(--american-red) 5%, transparent)'}}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4" style={{color: 'var(--american-red)'}}>Write-ins Prohibited</h2>
            <p className="text-muted-foreground">
              These states do not allow write-in votes for presidential elections.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {prohibitedStates.map((state) => (
              <Card key={state.name} className="hover:shadow-lg transition-shadow" style={{borderColor: 'color-mix(in srgb, var(--american-red) 20%, transparent)'}}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-sm flex items-center gap-2">
                        <XCircle className="h-3 w-3" style={{color: 'var(--american-red)'}} />
                        {state.name}
                      </CardTitle>
                      <CardDescription className="text-xs">{state.region}</CardDescription>
                    </div>
                    <Badge variant="outline" style={{color: 'var(--american-red)', borderColor: 'color-mix(in srgb, var(--american-red) 30%, transparent)'}} className="text-xs">
                      {state.electoralVotes} EV
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="text-xs" style={{color: 'var(--american-red)'}}>
                    Write-ins not allowed
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl font-bold">Start with the Pure Beachhead States</h2>
          <p className="text-xl text-muted-foreground">
            Focus your campaign on the 6 states with zero barriers. Build momentum, then expand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/pure-beachhead">
              <Button size="lg" className="text-lg px-8 py-6 bg-accent hover:bg-accent/90">
                View Beachhead Strategy
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