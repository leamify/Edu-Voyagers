import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { Button } from "@/components/ui/Button";
import { Compass, Sparkles, Target, Eye, ShieldCheck, HeartHandshake } from "@/components/ui/Icons";

export const metadata = constructMetadata({
  title: "About EduVoyagers | Our Story, Philosophy & Vision",
  description:
    "EduVoyagers is an experiential education company on a mission to transform real-world places into vibrant classrooms for K-12 students.",
  pathname: "/about",
});

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Hero */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Breadcrumbs
            items={[{ label: "About Us" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-4xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Our Educational Purpose
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              WE BELIEVE THE BEST LESSONS ARE SOMETIMES FOUND OUTSIDE THE CLASSROOM.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              EduVoyagers was founded on a simple, enduring premise: authentic understanding is born from sensory encounter, physical challenge, scientific inquiry, and structured reflection.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Strip */}
      <section className="py-16 lg:py-20 bg-canvas-card border-b border-sand-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 bg-forest-subtle/50 rounded-xs border border-forest/15 space-y-4">
              <div className="w-10 h-10 rounded-xs bg-forest text-sand-light flex items-center justify-center">
                <Target className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-forest-dark">
                Our Mission
              </h3>
              <p className="text-sm sm:text-base text-charcoal leading-relaxed font-medium">
                Make meaningful experiential learning accessible through thoughtfully designed, safety-first educational journeys that bridge classroom concepts with real-world phenomenon.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 bg-sand-light/60 rounded-xs border border-sand-border space-y-4">
              <div className="w-10 h-10 rounded-xs bg-sand-dark text-forest flex items-center justify-center">
                <Eye className="w-5 h-5 text-forest" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-forest-dark">
                Our Vision
              </h3>
              <p className="text-sm sm:text-base text-charcoal leading-relaxed font-medium">
                A generation of inquisitive, resilient students who learn by exploring, doing, reflecting, and connecting empathetically with human communities and the natural world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story & Philosophy */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <SectionHeading
              eyebrow="Our Story"
              title="Not a travel company. An education enterprise."
              className="mb-0"
            />
            <div className="space-y-4 text-sm sm:text-base text-charcoal-muted leading-relaxed">
              <p>
                For decades, Indian school excursions fell into two predictable categories: generic tourist sightseeing where children sat on buses viewing monuments through tinted glass, or high-intensity adventure camps with little academic connection.
              </p>
              <p>
                EduVoyagers was created to bridge this divide. We brought together experienced educators, outdoor leaders, curriculum specialists, and field naturalists to build an experiential learning platform where every mountain ridge, stepwell, and village becomes an active learning laboratory.
              </p>
              <p className="font-medium text-forest-dark">
                We believe that when a child measures the pH of a mountain stream or calculates local solar time on a 300-year-old stone sundial, science and history cease to be abstract examination questions—they become unforgettable memories.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 rounded-xs overflow-hidden border border-sand-border shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
                alt="Students interacting during a field learning journey"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our 4 Guiding Commitments */}
        <div className="space-y-8 pt-12 border-t border-sand-border">
          <SectionHeading
            eyebrow="Our Commitments"
            title="What We Stand For"
            subtitle="The operational and pedagogical principles that guide every decision we make."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-2.5">
              <Compass className="w-5 h-5 text-forest" />
              <h4 className="font-bold text-base text-forest-dark">Curriculum Rigor</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Field exercises are rigorously mapped to national and international syllabi so learning in the outdoors reinforces classroom success.
              </p>
            </div>

            <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-2.5">
              <ShieldCheck className="w-5 h-5 text-forest" />
              <h4 className="font-bold text-base text-forest-dark">Safeguarding First</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Zero tolerance on safety. 1:7 supervision ratios, 100% verified staff, and pre-mapped emergency escalation routes.
              </p>
            </div>

            <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-2.5">
              <Sparkles className="w-5 h-5 text-forest" />
              <h4 className="font-bold text-base text-forest-dark">Active Kinesthetic Doing</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Students operate field tools, take scientific samples, pitch tents, and document reflections—no passive observation.
              </p>
            </div>

            <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-2.5">
              <HeartHandshake className="w-5 h-5 text-forest" />
              <h4 className="font-bold text-base text-forest-dark">Ethical Immersion</h4>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                We practice Leave No Trace conservation and engage with rural artisan communities with deep mutual respect.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Join us in taking learning beyond the classroom"
        subtext="Let's design a transformative educational journey for your school cohort."
        primaryBtnText="Plan a School Program"
        primaryBtnHref="/plan-a-program"
      />
    </div>
  );
}
