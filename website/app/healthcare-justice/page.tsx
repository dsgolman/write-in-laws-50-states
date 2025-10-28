import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Scale, FileText, Clock, CheckCircle2, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fighting Healthcare Fraud | Healthcare Justice Case",
  description:
    "Active civil rights litigation challenging systematic billing fraud and advocating for healthcare transparency and patient rights. Fourth Circuit appeal pending.",
}

export default function HealthcareJusticePage() {
  return (
    <main className="min-h-screen bg-[#1e1e1e]">
      {/* Header */}
      <section className="py-8 px-4 border-b border-[#3a3a3a]">
        <div className="max-w-6xl mx-auto">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-[#b0b0b0] hover:text-[#e0e0e0]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-16 px-4 bg-gradient-to-b from-[#1e1e1e] to-[#252525]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-900/20 border border-red-700/30 rounded-full text-sm text-red-400 mb-4">
            <Scale className="h-4 w-4" />
            <span>Active Civil Rights Litigation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-[#f0f0f0]">
            Fighting Healthcare Fraud
          </h1>
          
          <p className="text-xl text-[#b0b0b0] leading-relaxed">
            A civil rights case challenging systematic billing fraud, advocating for healthcare transparency, 
            and defending patient rights in America's broken medical system.
          </p>
        </div>
      </section>

      {/* Case Overview */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold text-[#f0f0f0] mb-6">The Case</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#b0b0b0] leading-relaxed mb-4">
                In March 2021, I was hospitalized under a Virginia Temporary Detention Order. What should have been 
                a straightforward medical experience revealed something far more troubling when I exercised my HIPAA 
                rights in August 2025 and received my complete medical records.
              </p>
              <p className="text-[#b0b0b0] leading-relaxed mb-4">
                The records revealed significant discrepancies between documented medical facts and billing practices—discrepancies 
                that raise serious questions about billing accuracy, diagnosis coding, and patient rights in American healthcare.
              </p>
            </div>
          </div>

          {/* Key Issues */}
          <div>
            <h2 className="text-3xl font-bold text-[#f0f0f0] mb-6">Issues Being Challenged</h2>
            <div className="space-y-4">
              <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Billing Transparency
                  </h3>
                  <p className="text-[#b0b0b0]">
                    Medical records showed unusual insurance billing configurations that raise questions about 
                    how patients are billed and whether billing practices comply with federal healthcare regulations.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Diagnosis Documentation
                  </h3>
                  <p className="text-[#b0b0b0]">
                    Clinical notes throughout hospitalization documented one set of medical findings, while billing 
                    codes reflected different conditions—raising questions about the accuracy of diagnosis coding practices.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-[#2a2a2a] border-[#3a3a3a]">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-[#f0f0f0] mb-2">
                    Patient Rights & Access
                  </h3>
                  <p className="text-[#b0b0b0]">
                    These discrepancies were only discoverable after obtaining complete medical records—highlighting 
                    the critical importance of HIPAA rights and patient access to comprehensive medical documentation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Legal Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-[#f0f0f0] mb-6">Legal Action Timeline</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center">
                    <FileText className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#808080] mb-1">August 11-18, 2025</div>
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">Medical Records Obtained</h3>
                  <p className="text-[#b0b0b0]">
                    Submitted HIPAA authorization and received complete medical records revealing billing discrepancies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-900/20 flex items-center justify-center">
                    <Scale className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#808080] mb-1">September 2, 2025</div>
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">Federal Lawsuit Filed</h3>
                  <p className="text-[#b0b0b0]">
                    Filed civil rights complaint in U.S. District Court for the Eastern District of Virginia within 
                    15 days of discovering the discrepancies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-900/20 flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-orange-400" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#808080] mb-1">October 2025</div>
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">Regulatory Complaints Filed</h3>
                  <p className="text-[#b0b0b0]">
                    Filed formal complaints with Virginia Attorney General's Consumer Protection Division, 
                    HHS Office of Inspector General, and Virginia Medicaid Fraud Control Unit.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-green-900/20 flex items-center justify-center">
                    <Clock className="h-6 w-6 text-green-400" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-[#808080] mb-1">October 24, 2025</div>
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">Appeal Filed</h3>
                  <p className="text-[#b0b0b0]">
                    Filed notice of appeal to the Fourth Circuit Court of Appeals. Case is currently active in federal appellate court.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-yellow-900/20 flex items-center justify-center border-2 border-yellow-600">
                    <CheckCircle2 className="h-6 w-6 text-yellow-400" />
                  </div>
                </div>
                <div>
                  <div className="text-sm text-yellow-400 mb-1 font-semibold">Current Status - October 2025</div>
                  <h3 className="text-lg font-semibold text-[#f0f0f0] mb-2">Active Litigation</h3>
                  <p className="text-[#b0b0b0]">
                    Federal appeal pending in Fourth Circuit. Multiple regulatory investigations underway. 
                    Continuing advocacy for healthcare transparency and patient rights reform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Why This Matters */}
          <div>
            <h2 className="text-3xl font-bold text-[#f0f0f0] mb-6">Why This Matters</h2>
            <Card className="bg-gradient-to-br from-[#2a2a2a] to-[#252525] border-[#3a3a3a]">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <p className="text-[#b0b0b0] leading-relaxed">
                    This case isn't just about one patient or one hospital. It's about systematic issues in American 
                    healthcare that affect millions:
                  </p>
                  <ul className="space-y-3 text-[#b0b0b0]">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-[#e0e0e0]">Patients can't challenge what they can't see.</strong> Without access to complete medical records and billing documentation, fraudulent practices remain hidden.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-[#e0e0e0]">Healthcare transparency is a civil rights issue.</strong> Patients have the right to understand how they're being diagnosed, treated, and billed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-[#e0e0e0]">Corporate accountability matters.</strong> Large healthcare corporations should be held to the same ethical and legal standards as individual providers.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400 mt-1">•</span>
                      <span><strong className="text-[#e0e0e0]">Systematic fraud requires systematic solutions.</strong> Individual lawsuits aren't enough—we need regulatory enforcement and policy reform.</span>
                    </li>
                  </ul>
                  <p className="text-[#b0b0b0] leading-relaxed pt-4">
                    This fight is part of the broader mission: holding powerful institutions accountable, 
                    demanding transparency, and advocating for everyday Americans who can't fight back alone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Connection to Movement */}
          <div>
            <h2 className="text-3xl font-bold text-[#f0f0f0] mb-6">Connection to Our Movement</h2>
            <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-lg p-8">
              <p className="text-[#b0b0b0] leading-relaxed mb-4">
                This healthcare fraud case embodies the core principles of the Write-In Revolution:
              </p>
              <ul className="space-y-3 text-[#b0b0b0] mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span><strong className="text-[#e0e0e0]">Challenging corrupt systems</strong> that prioritize profit over people</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span><strong className="text-[#e0e0e0]">Demanding transparency</strong> from powerful institutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span><strong className="text-[#e0e0e0]">Fighting for civil rights</strong> and equal treatment under the law</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">→</span>
                  <span><strong className="text-[#e0e0e0]">Advocating for systematic reform</strong> rather than accepting the status quo</span>
                </li>
              </ul>
              <p className="text-[#b0b0b0] leading-relaxed">
                Real leadership means standing up to corporate fraud, even when it's difficult. It means fighting 
                for systemic change, not just accepting broken systems. That's the kind of leadership America needs in 2028.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center py-8">
            <h2 className="text-3xl font-bold text-[#f0f0f0] mb-4">Follow the Case</h2>
            <p className="text-[#b0b0b0] mb-6">
              Stay updated on legal developments, court filings, and the broader fight for healthcare justice.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://substack.com/@talkwithserenity" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-[#505050] hover:bg-[#404040] text-white">
                  Subscribe for Updates
                </Button>
              </a>
              <Link href="/">
                <Button size="lg" variant="outline" className="border-[#c0c0c0] hover:bg-[#3a3a3a] text-[#e0e0e0]">
                  Back to Campaign
                </Button>
              </Link>
            </div>
          </div>

          {/* Legal Disclaimer */}
          <div className="border-t border-[#3a3a3a] pt-8">
            <div className="bg-[#252525] border border-[#3a3a3a] rounded-lg p-6">
              <p className="text-xs text-[#808080] leading-relaxed">
                <strong className="text-[#a0a0a0]">Legal Disclaimer:</strong> This page describes active litigation 
                currently pending in the Fourth Circuit Court of Appeals and regulatory complaints filed with multiple 
                government agencies. Information presented is based on filed court documents, obtained medical records, 
                and public regulatory filings. No final determinations have been made by any court or regulatory body. 
                The allegations described represent claims in ongoing legal proceedings. This is not legal advice. 
                Last updated: October 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

