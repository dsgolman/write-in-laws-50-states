import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Scale, ShieldAlert, FileText, Users } from "lucide-react"
import Link from "next/link"

export function HealthcareJustice() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#1a1a1a] to-[#252525]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 border border-red-700/30 rounded-full text-sm text-red-400 mb-4">
            <ShieldAlert className="h-4 w-4" />
            <span>Active Civil Rights Case</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0f0f0]">
            Fighting Healthcare Fraud
          </h2>
          
          <p className="text-xl text-[#b0b0b0] max-w-3xl mx-auto leading-relaxed">
            Standing up against systematic billing fraud and advocating for healthcare transparency, 
            patient rights, and accountability in the American medical system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-900/20 rounded-lg">
                  <Scale className="h-6 w-6 text-blue-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Legal Action
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    Federal civil rights case currently on appeal in the Fourth Circuit Court of Appeals, 
                    challenging fraudulent billing practices and seeking accountability for systematic healthcare fraud.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-900/20 rounded-lg">
                  <FileText className="h-6 w-6 text-green-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Regulatory Complaints
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    Filed formal complaints with Virginia Attorney General, HHS Office of Inspector General, 
                    and state Medicaid fraud units to investigate systematic billing irregularities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-900/20 rounded-lg">
                  <ShieldAlert className="h-6 w-6 text-purple-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Transparency Advocacy
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    Championing patient rights to access complete medical records and understand billing practices. 
                    Healthcare transparency is a civil rights issue affecting millions of Americans.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-900/20 rounded-lg">
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Systemic Reform
                  </h3>
                  <p className="text-[#b0b0b0] leading-relaxed">
                    This isn't just one case—it's about exposing and reforming billing practices that affect 
                    countless patients across America. Healthcare fraud is a systemic problem requiring systemic solutions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-[#f0f0f0] mb-4">
            The Issues We're Fighting
          </h3>
          <ul className="space-y-3 text-[#b0b0b0] mb-6">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span><strong className="text-[#e0e0e0]">Billing Transparency:</strong> Patients deserve to understand how they're being billed and by whom</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span><strong className="text-[#e0e0e0]">Medical Record Access:</strong> HIPAA rights must be honored promptly and completely</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span><strong className="text-[#e0e0e0]">Diagnosis Accuracy:</strong> Medical diagnoses should reflect actual patient conditions, not billing optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span><strong className="text-[#e0e0e0]">Corporate Accountability:</strong> Large healthcare corporations must be held to the same standards as individual providers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">•</span>
              <span><strong className="text-[#e0e0e0]">Patient Rights:</strong> Healthcare is a right, not a profit center for fraudulent billing schemes</span>
            </li>
          </ul>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/healthcare-justice">
              <Button size="lg" className="bg-red-700 hover:bg-red-600 text-white">
                Learn About the Case
              </Button>
            </Link>
            <a 
              href="https://substack.com/@talkwithserenity" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="border-[#c0c0c0] hover:bg-[#3a3a3a] text-[#e0e0e0]">
                Follow Updates
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#808080] italic">
            This case represents ongoing litigation. Information presented is based on filed court documents 
            and public regulatory complaints. Legal proceedings are active as of October 2025.
          </p>
        </div>
      </div>
    </section>
  )
}

