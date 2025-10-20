import React from 'react';
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Home, Wifi, DollarSign, GraduationCap, Utensils } from "lucide-react"

export function CommonSenseFloor() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-[#1e1e1e] to-[#2a2a2a] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#f0f0f0]">
              The Common Sense Floor
            </h2>
            <p className="text-xl md:text-2xl text-[#c0c0c0] max-w-4xl mx-auto leading-relaxed">
              Not Left/Right—<span className="text-[#4a9eff]">systems engineering</span>. 
              Raise the floor → unlock capacity.
            </p>
            <div className="mt-8 inline-block px-6 py-3 bg-[#4a9eff] text-white rounded-full font-semibold">
              "We raise the floor so Americans can stand up. That's not ideology—it's common sense."
            </div>
          </div>

          {/* Six Guarantees */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-[#f0f0f0]">Six Guarantees</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040] hover:border-[#4a9eff] transition-colors">
                <Heart className="h-8 w-8 text-[#4a9eff] mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-[#f0f0f0]">Health</h4>
                <p className="text-[#c0c0c0]">Basic medical & mental health care access.</p>
              </div>
              
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040] hover:border-[#4a9eff] transition-colors">
                <Utensils className="h-8 w-8 text-[#4a9eff] mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-[#f0f0f0]">Nutrition</h4>
                <p className="text-[#c0c0c0]">No hunger in a surplus nation.</p>
              </div>
              
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040] hover:border-[#4a9eff] transition-colors">
                <Home className="h-8 w-8 text-[#4a9eff] mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-[#f0f0f0]">Shelter</h4>
                <p className="text-[#c0c0c0]">A safe place to live (Housing-First for chronic homelessness).</p>
              </div>
              
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040] hover:border-[#4a9eff] transition-colors">
                <Wifi className="h-8 w-8 text-[#4a9eff] mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-[#f0f0f0]">Connectivity</h4>
                <p className="text-[#c0c0c0]">Affordable broadband as civic infrastructure.</p>
              </div>
              
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040] hover:border-[#4a9eff] transition-colors">
                <DollarSign className="h-8 w-8 text-[#4a9eff] mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-[#f0f0f0]">Economic Floor</h4>
                <p className="text-[#c0c0c0]">Unconditional cash floor (starter: $500/mo pilots → scale pragmatically).</p>
              </div>
              
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040] hover:border-[#4a9eff] transition-colors">
                <GraduationCap className="h-8 w-8 text-[#4a9eff] mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-[#f0f0f0]">Education & Reskilling</h4>
                <p className="text-[#c0c0c0]">Free K-12 + debt-free reskilling for an AI economy.</p>
              </div>
            </div>
          </div>

          {/* Funding Sketch */}
          <div className="mb-20 bg-[#2d2d2d] p-8 rounded-lg border border-[#404040]">
            <h3 className="text-2xl font-bold mb-6 text-[#f0f0f0]">Funding Sketch</h3>
            <div className="space-y-4 text-[#c0c0c0]">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4a9eff] rounded-full mt-2 flex-shrink-0"></div>
                <p><strong className="text-[#f0f0f0]">Consolidate wasteful administrative complexity</strong> (fragmented programs & overhead) into direct benefits where evidence shows better outcomes.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4a9eff] rounded-full mt-2 flex-shrink-0"></div>
                <p><strong className="text-[#f0f0f0]">Capture the "AI Dividend"</strong> (productivity gains) with pro-growth tax modernization and loophole closures; pair with fraud analytics.</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-[#4a9eff] rounded-full mt-2 flex-shrink-0"></div>
                <p><strong className="text-[#f0f0f0]">Pay-for pilots:</strong> time-boxed, RCT-style deployments with sunset clauses; scale what beats baseline.</p>
              </div>
            </div>
          </div>

          {/* Evidence-Based Responses */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-[#f0f0f0]">Evidence-Based Responses</h3>
            <div className="space-y-8">
              
              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040]">
                <h4 className="text-xl font-semibold mb-3 text-[#ff6b6b]">"Cash floors kill work & fuel dependency."</h4>
                <p className="text-[#c0c0c0] mb-3">
                  <strong className="text-[#4a9eff]">Your reply:</strong> The best evidence says modest cash improves stability and has little to no negative employment effect.
                </p>
                <ul className="text-sm text-[#a0a0a0] space-y-2 ml-4">
                  <li>• Finland UBI experiment: minimal employment change, higher wellbeing & lower bureaucracy</li>
                  <li>• Stockton SEED ($500/mo): improved financial & mental health; evidence of better employment prospects</li>
                </ul>
                <div className="mt-4 p-3 bg-[#1a1a1a] rounded border-l-4 border-[#4a9eff]">
                  <p className="text-[#f0f0f0] font-medium">"Poverty isn't a character flaw; it's a bandwidth tax. Small, unconditional cash restores the bandwidth people need to work."</p>
                </div>
              </div>

              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040]">
                <h4 className="text-xl font-semibold mb-3 text-[#ff6b6b]">"Housing First just gives away apartments."</h4>
                <p className="text-[#c0c0c0] mb-3">
                  <strong className="text-[#4a9eff]">Your reply:</strong> Housing First increases housing stability and often lowers public costs (ER, jail, shelters). That's why HUD, VA, and multiple RCTs support it.
                </p>
                <div className="mt-4 p-3 bg-[#1a1a1a] rounded border-l-4 border-[#4a9eff]">
                  <p className="text-[#f0f0f0] font-medium">"Treating homelessness without housing is like treating hypothermia without a blanket."</p>
                </div>
              </div>

              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040]">
                <h4 className="text-xl font-semibold mb-3 text-[#ff6b6b]">"Universal care/expansion is too expensive."</h4>
                <p className="text-[#c0c0c0] mb-3">
                  <strong className="text-[#4a9eff]">Your reply:</strong> Preventive coverage reduces uncompensated care, improves outcomes, and stabilizes finances.
                </p>
                <div className="mt-4 p-3 bg-[#1a1a1a] rounded border-l-4 border-[#4a9eff]">
                  <p className="text-[#f0f0f0] font-medium">"The most expensive care is the care we deny until it becomes an ER visit."</p>
                </div>
              </div>

              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040]">
                <h4 className="text-xl font-semibold mb-3 text-[#ff6b6b]">"Mental health ROI is soft."</h4>
                <p className="text-[#c0c0c0] mb-3">
                  <strong className="text-[#4a9eff]">Your reply:</strong> Mental health investment is high-ROI—globally and domestically recognized.
                </p>
                <ul className="text-sm text-[#a0a0a0] space-y-2 ml-4">
                  <li>• WHO/Lancet: Every $1 invested in depression/anxiety treatment returns ~$4 in health & productivity</li>
                </ul>
                <div className="mt-4 p-3 bg-[#1a1a1a] rounded border-l-4 border-[#4a9eff]">
                  <p className="text-[#f0f0f0] font-medium">"We insure our cars better than our minds. That's upside waiting to be unlocked."</p>
                </div>
              </div>

              <div className="bg-[#2d2d2d] p-6 rounded-lg border border-[#404040]">
                <h4 className="text-xl font-semibold mb-3 text-[#ff6b6b]">"UBI/CSF is inflationary."</h4>
                <p className="text-[#c0c0c0] mb-3">
                  <strong className="text-[#4a9eff]">Your reply:</strong> Targeted, modest floors + supply-side investments ≠ runaway inflation.
                </p>
                <div className="mt-4 p-3 bg-[#1a1a1a] rounded border-l-4 border-[#4a9eff]">
                  <p className="text-[#f0f0f0] font-medium">"If $500/month could break the U.S. economy, it was already broken."</p>
                </div>
              </div>

            </div>
          </div>

          {/* Three Proofs */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 text-[#f0f0f0]">Three Proofs</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-[#2d2d2d] rounded-lg border border-[#404040]">
                <div className="text-3xl font-bold text-[#4a9eff] mb-2">Evidence Wins</div>
                <p className="text-[#c0c0c0] text-sm">Finland/SEED/Housing First/Medicaid/WHO</p>
              </div>
              <div className="text-center p-6 bg-[#2d2d2d] rounded-lg border border-[#404040]">
                <div className="text-3xl font-bold text-[#4a9eff] mb-2">Efficiency Wins</div>
                <p className="text-[#c0c0c0] text-sm">Simple cash + modern verification beats bloated admin</p>
              </div>
              <div className="text-center p-6 bg-[#2d2d2d] rounded-lg border border-[#404040]">
                <div className="text-3xl font-bold text-[#4a9eff] mb-2">Growth Wins</div>
                <p className="text-[#c0c0c0] text-sm">Healthier, connected people → more work, learning, enterprise</p>
              </div>
            </div>
          </div>

          {/* Contrast Line */}
          <div className="text-center">
            <div className="inline-block px-8 py-4 bg-gradient-to-r from-[#4a9eff] to-[#6c5ce7] text-white rounded-lg font-bold text-xl">
              "Old politics argues about ladders. I build floors."
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default CommonSenseFloor;