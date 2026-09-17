import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LearningJourneyModel } from "@/components/sections/LearningJourneyModel";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { curriculumCrosswalk, lifeSkillsPillars } from "@/data/learning";
import { BookOpen, Compass, ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck } from "@/components/ui/Icons";

export const metadata = constructMetadata({
  title: "Learning Framework & Experiential Methodology",
  description:
    "Discover how EduVoyagers connects classroom concepts to real-world discovery through our 5-stage experiential learning framework mapped to CBSE, ICSE, Cambridge and IB curricula.",
  pathname: "/learning-framework",
});

export default function LearningFrameworkPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Hero */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Breadcrumbs
            items={[{ label: "Learning Framework" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Pedagogical Methodology
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              EXPERIENCE IS A FORM OF LEARNING.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              We design journeys that move students from passive abstract textbook memorization into active scientific observation, physical challenge, deep reflection, and tangible academic mastery.
            </p>
          </div>
        </div>
      </section>

      {/* 5-Stage Central Framework */}
      <section className="py-20 lg:py-28 bg-canvas relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          <SectionHeading
            eyebrow="The 5-Stage Cycle"
            title="The EduVoyagers Experiential Learning Cycle"
            subtitle="A continuous learning loop ensuring that every outdoor and field moment is anchored in academic rigor and cognitive reflection."
          />

          <LearningJourneyModel />
        </div>
      </section>

      {/* Applied Example Breakdown */}
      <section className="py-20 lg:py-24 bg-canvas-subtle border-y border-sand-border relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          <SectionHeading
            eyebrow="Applied Curriculum Walkthrough"
            title="How Textbook Theory Becomes Applied Mastery"
            subtitle="Explore how specific curriculum domains are translated into hands-on field investigations across our learning destinations."
          />

          <div className="space-y-6">
            {curriculumCrosswalk.map((crosswalk, idx) => (
              <div
                key={idx}
                className="bg-canvas-card border border-sand-border rounded-xs p-6 md:p-8 space-y-4 transition-all hover:border-forest/40"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-sand-border/70">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-forest" />
                    <h3 className="font-heading font-bold text-lg text-forest-dark">
                      {crosswalk.domain}
                    </h3>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-sm bg-sand-light text-forest border border-sand-border self-start md:self-auto">
                    {crosswalk.subject}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-charcoal-light uppercase tracking-wider block">
                      Field Expedition:
                    </span>
                    <p className="font-medium text-forest-dark">
                      {crosswalk.fieldApplication}
                    </p>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-charcoal-light uppercase tracking-wider block">
                      Scientific & Field Tools:
                    </span>
                    <div className="flex flex-wrap gap-1 pt-0.5">
                      {crosswalk.toolsUsed.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2 py-0.5 bg-canvas-subtle border border-sand-border rounded-xs text-charcoal"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-terracotta uppercase tracking-wider block">
                      Cognitive Mastery:
                    </span>
                    <p className="text-charcoal-muted leading-relaxed">
                      {crosswalk.cognitiveOutcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 bg-sand-light/60 rounded-xs border border-sand-border text-xs text-charcoal-muted flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-forest shrink-0 mt-0.5" />
            <div>
              <strong className="text-charcoal font-semibold">Curriculum Framework Alignment Notice:</strong> EduVoyagers programs can be mapped against relevant curriculum objectives of the Central Board of Secondary Education (CBSE), Council for the Indian School Certificate Examinations (ICSE), Cambridge Assessment International Education (IGCSE), and the International Baccalaureate (IB Middle Years & Diploma Programmes). We do not imply official organizational endorsement.
            </div>
          </div>
        </div>
      </section>

      {/* Beyond Academics: Character & Life Capabilities */}
      <section className="py-20 lg:py-28 bg-canvas relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          <SectionHeading
            eyebrow="Holistic Growth"
            title="Learning Beyond Academics"
            subtitle="Cultivating foundational character, emotional maturity, and leadership capabilities that standard testing cannot measure."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeSkillsPillars.map((skill, idx) => (
              <div
                key={idx}
                className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[11px] font-semibold text-terracotta uppercase tracking-wider block">
                    {skill.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-forest-dark">
                    {skill.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-sand-border/60 text-[11px] text-charcoal-light italic">
                  Context: {skill.realWorldContext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion */}
      <CTASection
        headline="Build a tailored learning journey for your students"
        subtext="Collaborate with our curriculum design team to match field experiences directly to your school term syllabi."
        primaryBtnText="Build a Learning Journey"
        primaryBtnHref="/plan-a-program"
      />
    </div>
  );
}
