import React from "react";
import { constructMetadata } from "@/lib/seo";
import { experiencesData } from "@/data/experiences";
import { ProgramFilter } from "@/components/forms/ProgramFilter";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { CTASection } from "@/components/sections/CTASection";

export const metadata = constructMetadata({
  title: "Learning Experiences & Field Expeditions",
  description:
    "Explore curriculum-aligned outdoor journeys, STEM research camps, forest ecology expeditions, and living heritage trails for K-12 students.",
  pathname: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Banner */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Breadcrumbs
            items={[{ label: "Experiences" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Field Learning Catalog
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              EXPERIENCES THAT MAKE LEARNING REAL.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              From local field experiences to multi-day outdoor learning journeys, every EduVoyagers program is designed around what students should discover, experience and take back to the classroom.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Catalog Section */}
      <section className="py-16 lg:py-20 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ProgramFilter initialExperiences={experiencesData} />
      </section>

      {/* Final CTA */}
      <CTASection
        headline="Need a custom curriculum journey?"
        subtext="Tell us what syllabus topics your students are studying this term. We will design the field experience around it."
        primaryBtnText="Design Custom Program"
        primaryBtnHref="/plan-a-program"
      />
    </div>
  );
}
