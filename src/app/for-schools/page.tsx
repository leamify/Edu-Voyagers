import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RoleCard } from "@/components/cards/RoleCard";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { stakeholderRoles, pilotProgramModels } from "@/data/schools";
import { CheckCircle2, ArrowRight, ShieldCheck, Compass, Sparkles, Building2 } from "@/components/ui/Icons";

export const metadata = constructMetadata({
  title: "For Schools & Principals | Educational Journeys",
  description:
    "Partner with EduVoyagers for curriculum-aligned experiential learning, turnkey logistics, and student safety frameworks. Start with a low-friction 1-day pilot.",
  pathname: "/for-schools",
});

export default function ForSchoolsPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Hero */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Breadcrumbs
            items={[{ label: "For Schools" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Institutional Partnership
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              BUILT FOR SCHOOLS. DESIGNED FOR LEARNING.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              We eliminate the administrative strain of school trip coordination by delivering curriculum-aligned, safety-audited, and professionally facilitated journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Stakeholder Deep Dives */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
        <SectionHeading
          eyebrow="Stakeholder Value"
          title="Meeting Every Stakeholder's Standard"
          subtitle="How our operational and pedagogical model addresses the distinct priorities of school management, educators, coordinators, and families."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {stakeholderRoles.map((role) => (
            <RoleCard key={role.id} stakeholder={role} />
          ))}
        </div>
      </section>

      {/* Pilot Program Models */}
      <section id="pilot" className="py-20 lg:py-28 bg-canvas-subtle border-y border-sand-border relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Low-Friction Onboarding"
              title="Start with a Pilot Program"
              subtitle="Experience our facilitators, safety protocols, and student engagement before committing to multi-day residential journeys."
              className="mb-0"
            />
            <Button
              href="/plan-a-program?program=Pilot%20Program"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Plan a Pilot Program
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilotProgramModels.map((model, idx) => (
              <div
                key={idx}
                className="bg-canvas-card border border-sand-border rounded-xs p-6 md:p-8 flex flex-col justify-between space-y-6 hover:border-forest/40 transition-all hover:shadow-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-terracotta">
                      {model.level}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-sm bg-sand-light text-forest border border-sand-border">
                      {model.duration}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-xl text-forest-dark">
                    {model.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {model.description}
                  </p>

                  <div className="pt-3 border-t border-sand-border/70 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-light block">
                      Program Inclusions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-charcoal">
                      {model.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-sand-border/70">
                  <Button
                    href={`/plan-a-program?program=${encodeURIComponent(model.title)}`}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center"
                  >
                    Select {model.title}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* School Partnership Journey Steps */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
        <SectionHeading
          eyebrow="Partnership Roadmap"
          title="How We Partner with Your Institution"
          subtitle="A predictable, seamless 4-phase collaboration model from initial syllabus alignment to post-journey portfolios."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-3">
            <span className="font-mono text-xs font-bold text-gold bg-forest px-2 py-1 rounded-xs">
              PHASE 01
            </span>
            <h4 className="font-heading font-bold text-base text-forest-dark">
              Academic Alignment
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              We review your curriculum requirements, term dates, and target grade cohort to draft a custom learning dossier.
            </p>
          </div>

          <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-3">
            <span className="font-mono text-xs font-bold text-gold bg-forest px-2 py-1 rounded-xs">
              PHASE 02
            </span>
            <h4 className="font-heading font-bold text-base text-forest-dark">
              Parent & Faculty Briefing
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              We provide turnkey presentation decks, digital consent workflows, packing lists, and safety orientation webinars.
            </p>
          </div>

          <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-3">
            <span className="font-mono text-xs font-bold text-gold bg-forest px-2 py-1 rounded-xs">
              PHASE 03
            </span>
            <h4 className="font-heading font-bold text-base text-forest-dark">
              Expedition Execution
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Our Journey Manager, First Responders, and educators lead small student pods with scheduled daily parent broadcasts.
            </p>
          </div>

          <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-3">
            <span className="font-mono text-xs font-bold text-gold bg-forest px-2 py-1 rounded-xs">
              PHASE 04
            </span>
            <h4 className="font-heading font-bold text-base text-forest-dark">
              Synthesis & Portfolios
            </h4>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Students present their field ledgers in school assemblies and receive verified skill accomplishment certificates.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Ready to introduce experiential learning at your school?"
        subtext="Schedule an introductory call with our curriculum directors or request a pilot program dossier."
        primaryBtnText="Plan a School Program"
        primaryBtnHref="/plan-a-program"
      />
    </div>
  );
}
