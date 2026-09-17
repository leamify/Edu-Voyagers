import React, { Suspense } from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { ShieldCheck, Clock, BookOpen, Users, Loader2 } from "@/components/ui/Icons";

export const metadata = constructMetadata({
  title: "Plan a School Learning Program | Custom Field Journeys",
  description:
    "Request a tailored experiential learning journey or school pilot program for your institution. Connect with EduVoyagers curriculum directors.",
  pathname: "/plan-a-program",
});

export default function PlanAProgramPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Hero */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Breadcrumbs
            items={[{ label: "Plan a Program" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Curriculum Co-Creation
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              LET&apos;S DESIGN YOUR NEXT LEARNING EXPERIENCE.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              Tell us what your students need to learn. We&apos;ll help design the experience around it.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Container */}
      <section className="py-16 lg:py-24 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="space-y-12">
          {/* Trust Value Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-sand-light/60 rounded-xs border border-sand-border text-xs text-charcoal">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-forest shrink-0" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-forest shrink-0" />
              <span>Syllabus mapped</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
              <span>POCSO-aware safety</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-forest shrink-0" />
              <span>1:7 supervision ratio</span>
            </div>
          </div>

          {/* Form with Suspense for useSearchParams */}
          <Suspense
            fallback={
              <div className="bg-canvas-card border border-sand-border p-12 text-center text-charcoal-muted">
                <Loader2 className="w-6 h-6 animate-spin mx-auto text-forest mb-2" />
                <p>Loading enquiry form...</p>
              </div>
            }
          >
            <EnquiryForm />
          </Suspense>
        </div>
      </section>
    </div>
  );
}
