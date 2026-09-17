import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import {
  MapPin,
  Clock,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BookOpen,
  Award,
  Layers,
} from "@/components/ui/Icons";
import { programsData } from "@/data/programs";
import { experiencesData } from "@/data/experiences";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { GradeBadge, DurationBadge, ThemeBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ItineraryTimeline } from "@/components/itinerary/ItineraryTimeline";
import { CTASection } from "@/components/sections/CTASection";

interface ProgramPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(programsData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: ProgramPageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = programsData[slug];

  if (!program) {
    return constructMetadata({
      title: "Program Not Found",
      description: "The requested learning experience could not be found.",
    });
  }

  return constructMetadata({
    title: program.title,
    description: program.subtitle,
    pathname: `/programs/${program.slug}`,
    image: program.heroImage,
  });
}

export default async function ProgramDetailPage({ params }: ProgramPageProps) {
  const { slug } = await params;
  const program = programsData[slug];

  if (!program) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-canvas">
      {/* Top Banner & Breadcrumbs */}
      <div className="bg-canvas-subtle border-b border-sand-border py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Experiences", href: "/experiences" },
              { label: program.title },
            ]}
          />
        </div>
      </div>

      {/* Program Hero Section */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={program.heroImage}
            alt={program.title}
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50 contrast-110"
          />
          <div className="absolute inset-0 bg-linear-to-r from-forest-dark/95 via-forest-dark/80 to-forest-dark/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <GradeBadge grades={program.grades} className="bg-white/90" />
                <DurationBadge duration={program.duration} className="bg-white/90" />
                {program.themes.map((theme) => (
                  <ThemeBadge key={theme} theme={theme} className="bg-white/90" />
                ))}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                {program.title}
              </h1>

              <p className="text-lg sm:text-xl text-gold font-medium leading-relaxed">
                {program.tagline}
              </p>

              <p className="text-sm sm:text-base text-sand-dark/90 leading-relaxed max-w-2xl">
                {program.overview}
              </p>

              {/* Specs Strip */}
              <div className="pt-4 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-sand-dark/90">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold shrink-0" />
                  <span>{program.location}</span>
                </div>
                {program.elevationOrTerrain && (
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-gold shrink-0" />
                    <span>{program.elevationOrTerrain}</span>
                  </div>
                )}
                {program.bestSeason && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gold shrink-0" />
                    <span>Best: {program.bestSeason}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Action Card */}
            <div className="lg:col-span-4 bg-canvas-card text-charcoal p-6 sm:p-8 rounded-xs border border-sand-border shadow-xl space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-terracotta block mb-1">
                  School Journey Planning
                </span>
                <h3 className="font-heading font-bold text-xl text-forest-dark">
                  Request This Program
                </h3>
                <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                  We customize dates, learning depth, and group sizes for your school.
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-charcoal border-y border-sand-border/80 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-muted">Target Cohort:</span>
                  <span className="font-semibold text-forest-dark">{program.grades}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-muted">Duration:</span>
                  <span className="font-semibold text-forest-dark">{program.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-muted">Chaperone Ratio:</span>
                  <span className="font-semibold text-forest-dark">1:7 to 1:8 Max</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal-muted">Turnkey Logistics:</span>
                  <span className="font-semibold text-forest-dark">Full Support</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  href={`/plan-a-program?program=${encodeURIComponent(program.title)}&grade=${encodeURIComponent(program.grades)}`}
                  variant="primary"
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Enquire About This Program
                </Button>
                <p className="text-[11px] text-charcoal-light text-center">
                  No commitment required. Custom dossier in 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Deep Dive */}
          <div className="lg:col-span-8 space-y-16">
            {/* Why This Experience */}
            <section className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta block">
                Educational Rationale
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-forest-dark">
                Why This Experience Matters
              </h2>
              <div className="p-6 bg-sand-light/50 border-l-4 border-forest rounded-xs text-sm sm:text-base text-charcoal leading-relaxed space-y-2">
                <p>{program.whyThisExperience}</p>
              </div>
            </section>

            {/* Learning Objectives */}
            <section className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta block">
                  Pedagogical Goals
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-forest-dark">
                  Target Learning Objectives
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.learningObjectives.map((objective, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-canvas-card border border-sand-border rounded-xs flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-charcoal font-medium leading-relaxed">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Day-by-Day Journey Timeline */}
            <section className="space-y-8">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta block">
                  Field Itinerary
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-forest-dark">
                  Day-by-Day Learning Journey
                </h2>
                <p className="text-sm text-charcoal-muted">
                  Every day integrates physical exploration, structured inquiry, and evening metacognitive reflection.
                </p>
              </div>

              <ItineraryTimeline days={program.dayByDayItinerary} />
            </section>

            {/* Skills Developed */}
            <section className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta block">
                  Competencies
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-forest-dark">
                  Skills Developed
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.skillsDeveloped.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-canvas-card border border-sand-border rounded-xs space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-terracotta shrink-0" />
                      <h4 className="font-bold text-sm text-forest-dark">
                        {skill.title}
                      </h4>
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum Connections */}
            <section className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta block">
                  Syllabus Mapping
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-forest-dark">
                  Curriculum Alignment
                </h2>
                <p className="text-xs text-charcoal-muted italic">
                  Programs can be mapped against relevant curriculum objectives across major national and international educational boards.
                </p>
              </div>

              <div className="space-y-4">
                {program.curriculumConnections.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-canvas-card border border-sand-border rounded-xs space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-forest" />
                        <h4 className="font-bold text-sm text-forest-dark">
                          {item.subject}
                        </h4>
                      </div>
                      <span className="text-[11px] font-mono text-charcoal-light">
                        {item.frameworkAlignment}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {item.topics.map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 bg-forest-subtle text-forest rounded-xs font-medium"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Safety Considerations */}
            <section className="space-y-6">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-terracotta block">
                  Risk Assessment
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-forest-dark">
                  Safety Protocols For This Journey
                </h2>
              </div>

              <div className="p-6 bg-sand-light/50 border border-sand-border rounded-xs space-y-3">
                <ul className="space-y-2 text-xs sm:text-sm text-charcoal">
                  {program.safetyConsiderations.map((safety, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <ShieldCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{safety}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar with Takeaways */}
          <div className="lg:col-span-4 space-y-8">
            {/* Student Takeaways Box */}
            <div className="bg-canvas-card border border-sand-border p-6 rounded-xs space-y-4">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-gold" />
                <h3 className="font-heading font-bold text-lg text-forest-dark">
                  What Students Take Back
                </h3>
              </div>
              <ul className="space-y-2.5 text-xs text-charcoal">
                {program.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Images */}
            {program.galleryImages && program.galleryImages.length > 0 && (
              <div className="space-y-3">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider text-charcoal-light">
                  Field Environment
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {program.galleryImages.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-4/3 rounded-xs overflow-hidden border border-sand-border"
                    >
                      <Image
                        src={imgUrl}
                        alt={`${program.title} gallery ${idx + 1}`}
                        fill
                        sizes="200px"
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Consultation Prompt */}
            <div className="p-6 bg-forest-dark text-sand-light rounded-xs border border-white/10 space-y-4">
              <h4 className="font-heading font-bold text-base text-white">
                Have questions about this itinerary?
              </h4>
              <p className="text-xs text-sand-dark/80 leading-relaxed">
                Our education coordinators are available for a 15-minute alignment call with your school principal or trip coordinator.
              </p>
              <Button
                href={`/plan-a-program?program=${encodeURIComponent(program.title)}`}
                variant="gold"
                size="sm"
                className="w-full justify-center"
              >
                Plan This Experience
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <CTASection
        headline={`Plan the ${program.title} for your school`}
        subtext="Tell us your cohort size and preferred dates. We will tailor the learning dossier and logistics around your academic calendar."
        primaryBtnText="Request Program Dossier"
        primaryBtnHref={`/plan-a-program?program=${encodeURIComponent(program.title)}`}
      />
    </div>
  );
}
