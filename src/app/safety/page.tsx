import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SafetyCard } from "@/components/cards/SafetyCard";
import { CTASection } from "@/components/sections/CTASection";
import { safetyPillarsData, safetyChecklistItems } from "@/data/safety";
import { ShieldCheck, HeartPulse, Compass, Users, CheckCircle2, AlertTriangle, PhoneCall, FileText } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export const metadata = constructMetadata({
  title: "Safety Architecture & Risk Management",
  description:
    "Learn about EduVoyagers' four-pillar safety architecture, high supervision chaperone ratios, POCSO-aware child protection guidelines, and emergency medical readiness.",
  pathname: "/safety",
});

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[{ label: "Safety Framework" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Operational Safeguards
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              ADVENTURE WITH RESPONSIBILITY.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              When taking young students into natural, historical, and scientific field environments, safety is not an afterthought—it is the bedrock upon which genuine curiosity and confidence are built.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Matrix Strip */}
      <section className="bg-canvas-subtle border-b border-sand-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {safetyChecklistItems.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-light block">
                  {item.label}
                </span>
                <span className="font-heading font-extrabold text-xl sm:text-2xl text-forest-dark">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Safety Pillars Section */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          eyebrow="Core Framework"
          title="Our Four Safety Pillars"
          subtitle="Every EduVoyagers field expedition operates strictly within these four interlocking operational standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {safetyPillarsData.map((pillar) => (
            <SafetyCard key={pillar.id} pillar={pillar} />
          ))}
        </div>
      </section>

      {/* Visual Emergency Escalation & Protocol Matrix */}
      <section className="py-20 lg:py-24 bg-canvas-subtle border-y border-sand-border relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Response Protocol"
            title="Emergency Escalation Architecture"
            subtitle="Clear, rehearsed operational tiers ensure swift response to any medical, environmental, or logistical situation."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Level 1 */}
            <div className="bg-canvas-card border border-sand-border p-6 rounded-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-sand-border">
                <span className="text-xs font-mono font-bold text-forest">
                  TIER 01: ON-FIELD FIRST RESPONSE
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-xs bg-emerald-50 text-emerald-800 font-semibold">
                  Immediate
                </span>
              </div>
              <h4 className="font-bold text-base text-forest-dark">
                Wilderness First Responder
              </h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Minor cuts, altitude symptoms, hydration imbalance, or sprains managed on-site using comprehensive medical kits by trained educators.
              </p>
            </div>

            {/* Level 2 */}
            <div className="bg-canvas-card border border-sand-border p-6 rounded-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-sand-border">
                <span className="text-xs font-mono font-bold text-terracotta">
                  TIER 02: CLINICAL ESCALATION
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-xs bg-amber-50 text-amber-800 font-semibold">
                  &lt; 45 Minutes
                </span>
              </div>
              <h4 className="font-bold text-base text-forest-dark">
                District Hospital Transfer
              </h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Pre-mapped 24/7 dedicated transport corridor to verified district healthcare facilities with accompanying faculty chaperone.
              </p>
            </div>

            {/* Level 3 */}
            <div className="bg-canvas-card border border-sand-border p-6 rounded-xs space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-sand-border">
                <span className="text-xs font-mono font-bold text-forest-dark">
                  TIER 03: CENTRAL OPERATIONS
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-xs bg-stone-100 text-stone-800 font-semibold">
                  Continuous
                </span>
              </div>
              <h4 className="font-bold text-base text-forest-dark">
                School Leadership & Parent Desk
              </h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Direct, transparent communication with school management and parents overseen by the central EduVoyagers Incident Coordinator.
              </p>
            </div>
          </div>

          <div className="p-6 bg-sand-light/50 border border-sand-border rounded-xs space-y-3">
            <h4 className="font-heading font-bold text-sm text-forest-dark flex items-center gap-2">
              <FileText className="w-4 h-4 text-forest" />
              <span>Safety Transparency Statement</span>
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              EduVoyagers presents these safeguarding standards as operational frameworks implemented across our field teams. We do not make unsubstantiated claims of third-party certifications or guarantees. All partner institutions receive documented emergency contacts, chaperone assignments, and risk assessments prior to journey confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Safety Consultation Action */}
      <CTASection
        headline="Review Our Safety Architecture for Your School"
        subtext="Request a safety briefing with our operations directors before planning your school's field program."
        primaryBtnText="Request Safety Briefing"
        primaryBtnHref="/plan-a-program"
        secondaryBtnText="Explore Experiences"
        secondaryBtnHref="/experiences"
      />
    </div>
  );
}
