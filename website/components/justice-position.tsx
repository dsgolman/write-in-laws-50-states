import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Scale, Eye, X } from "lucide-react"

export function JusticePosition() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-red-950/20 to-background">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-balance">Justice, Not Vengeance</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance leading-relaxed">
            The execution of Anthony Boyd on October 23, 2025, represents everything wrong with our justice system.
          </p>
        </div>

        <Card className="border-red-800 bg-red-950/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-100">
              <AlertCircle className="h-6 w-6" />
              The Anthony Boyd Case
            </CardTitle>
            <CardDescription className="text-red-200">
              October 23, 2025 | Alabama State Prison
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-red-50">
            <p className="leading-relaxed">
              Anthony Boyd was executed by nitrogen gas for the 1993 kidnapping and murder of Gregory "New York" Huguley.
            </p>
            <div className="grid md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 bg-red-900/30 rounded-lg border border-red-800">
                <Eye className="h-6 w-6 text-red-300 mb-2" />
                <h4 className="font-semibold mb-2">No Physical Evidence</h4>
                <p className="text-sm text-red-200">Conviction based solely on eyewitness testimony</p>
              </div>
              <div className="p-4 bg-red-900/30 rounded-lg border border-red-800">
                <Scale className="h-6 w-6 text-red-300 mb-2" />
                <h4 className="font-semibold mb-2">Maintained Innocence</h4>
                <p className="text-sm text-red-200">Boyd consistently denied the crime to his execution</p>
              </div>
              <div className="p-4 bg-red-900/30 rounded-lg border border-red-800">
                <X className="h-6 w-6 text-red-300 mb-2" />
                <h4 className="font-semibold mb-2">Irreversible Injustice</h4>
                <p className="text-sm text-red-200">No second chance once the state kills</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 space-y-4 bg-background border-accent/20">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <Scale className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">The Evidence Problem</h3>
            <p className="text-muted-foreground leading-relaxed">
              Eyewitness testimony is notoriously unreliable. Studies show 70% of wrongful convictions involve mistaken eyewitness identification.
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-background border-accent/20">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <X className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">No Second Chances</h3>
            <p className="text-muted-foreground leading-relaxed">
              Since 1973, over 190 death row inmates have been exonerated. How many innocent people have been executed?
            </p>
          </Card>

          <Card className="p-8 space-y-4 bg-background border-accent/20">
            <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
              <AlertCircle className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">Victims Deserve Truth</h3>
            <p className="text-muted-foreground leading-relaxed">
              Executing potentially innocent people doesn't serve victims' families. It perpetuates cycles of violence and delays real closure.
            </p>
          </Card>
        </div>

        <div className="bg-accent/5 border border-accent/20 rounded-lg p-8 md:p-12">
          <blockquote className="text-2xl md:text-3xl font-medium text-center text-balance leading-relaxed">
            "Capital punishment is the premeditated and cold-blooded killing of a human being by the state in the name of justice. 
            I cannot and will not support a system that kills with uncertain evidence and refuses to correct its mistakes."
          </blockquote>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Position</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose max-w-none">
              <h4 className="text-xl font-semibold mb-3">Criminal Justice Reform Platform</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent">•</span>
                  <span><strong>Abolish capital punishment nationwide.</strong> Life without parole serves justice without irreversible risk.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent">•</span>
                  <span><strong>Raise the evidence standard.</strong> Death penalty cases require irrefutable evidence—DNA, video, or physical proof.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent">•</span>
                  <span><strong>End prosecutorial misconduct.</strong> Hold district attorneys accountable for withholding evidence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent">•</span>
                  <span><strong>Reform eyewitness procedures.</strong> Implement science-based identification processes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-accent">•</span>
                  <span><strong>Support victims differently.</strong> Fund counseling, medical care, and financial support instead of executions.</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

