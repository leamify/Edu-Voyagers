import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Compass, CheckCircle2, Sparkles, BookOpen } from "@/components/ui/Icons";
import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { ExperiencePillarCard } from "@/components/cards/ExperiencePillarCard";
import { LearningJourneyModel } from "@/components/sections/LearningJourneyModel";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { SafetyCard } from "@/components/cards/SafetyCard";
import { LearningOutcomeCard } from "@/components/cards/LearningOutcomeCard";
import { RoleCard } from "@/components/cards/RoleCard";
import { CTASection } from "@/components/sections/CTASection";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Button } from "@/components/ui/Button";
import { experiencesData } from "@/data/experiences";
import { safetyPillarsData } from "@/data/safety";
import { stakeholderRoles, pilotProgramModels } from "@/data/schools";

export default function HomePage() {
  const featuredExperiences = experiencesData.filter((exp) => exp.featured);

  return (
    <div className="flex flex-col min-h-screen">
      {/* SECTION 1 — HERO */}
      <Hero />

      {/* SECTION 2 — THE WORLD IS THE CLASSROOM */}
      <section className="py-20 lg:py-28 bg-canvas relative overflow-hidden">
        <TopographicPattern opacity={0.06} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 sm:aspect-16/10 rounded-xs overflow-hidden border border-sand-border shadow-md">
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
                  alt="Students analyzing topographic maps outdoors"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-forest-dark/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-forest-dark/80 backdrop-blur-xs rounded-xs border border-white/10 text-sand-light text-xs sm:text-sm">
                  <p className="font-serif italic text-sand-dark">
                    “A mountain teaches resilience. A forest teaches ecology. A community teaches empathy. A compass teaches decision-making.”
                  </p>
                </div>
              </div>
            </div>

            {/* Right Editorial Copy */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow="Core Philosophy"
                title="The world is the classroom."
                className="mb-6"
              />

              <div className="space-y-4 text-base sm:text-lg text-charcoal leading-relaxed">
                <p className="font-medium text-forest-dark">
                  At EduVoyagers, we believe some of the most powerful lessons cannot be taught between four walls.
                </p>

                <div className="p-5 bg-sand-light/60 rounded-xs border-l-3 border-forest space-y-2 text-sm text-charcoal-muted">
                  <p className="font-semibold text-charcoal">
                    We design experiences where travel becomes structured learning:
                  </p>
                  <ul className="space-y-1.5 list-none">
                    <li className="flex items-center gap-2">
                      <span className="text-forest font-bold">▪</span>
                      <span>A mountain teaches <strong>resilience</strong> and spatial reasoning.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-forest font-bold">▪</span>
                      <span>A forest teaches <strong>ecology</strong> and empirical observation.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-forest font-bold">▪</span>
                      <span>A community teaches <strong>empathy</strong> and civic systems.</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-forest font-bold">▪</span>
                      <span>A compass teaches <strong>decision-making</strong> and team trust.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-sm sm:text-base text-charcoal-muted">
                  Every program is mapped against syllabus frameworks (CBSE, ICSE, Cambridge, IB) to ensure that time spent in the field directly elevates classroom comprehension.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  href="/learning-framework"
                  variant="outline"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Explore Our Learning Framework
                </Button>
              </div>
            </div>
          </div>

          {/* Operational Metrics Strip */}
          <div className="mt-16">
            <StatsStrip />
          </div>
        </div>
      </section>

      {/* SECTION 3 — FOUR EXPERIENCE PILLARS */}
      <section className="py-20 lg:py-28 bg-canvas-subtle border-y border-sand-border relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="Curriculum Strands"
              title="Four ways we make learning experiential."
              subtitle="Structured pathways turning natural environments, historic monuments, and communities into active learning laboratories."
              className="mb-0"
            />
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 text-sm font-bold text-forest hover:text-forest-light tracking-wide uppercase group shrink-0"
            >
              <span>View All 8+ Programs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ExperiencePillarCard
              number="01"
              verb="EXPLORE"
              theme="Nature & Environment"
              description="Forest ecology, canopy biodiversity, stream bio-monitoring, and watershed conservation."
              image="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80"
              href="/experiences?theme=Nature"
            />
            <ExperiencePillarCard
              number="02"
              verb="DISCOVER"
              theme="Culture & Heritage"
              description="Medieval hydrology, architectural acoustics, living craft guilds, and oral history archives."
              image="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80"
              href="/experiences?theme=Culture"
            />
            <ExperiencePillarCard
              number="03"
              verb="CHALLENGE"
              theme="Adventure & Leadership"
              description="High-altitude orienteering, mountain campcraft, small-group leadership, and resilience."
              image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              href="/experiences?theme=Adventure"
            />
            <ExperiencePillarCard
              number="04"
              verb="INVESTIGATE"
              theme="STEM & Field Learning"
              description="High-altitude astronomy, optical spectrometry, renewable energy grids, and robotics field labs."
              image="https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80"
              href="/experiences?theme=STEM"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — LEARNING MODEL */}
      <section className="py-20 lg:py-28 bg-forest-dark text-sand-light relative overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 space-y-12">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Pedagogical Architecture"
              title="Not just a trip. A structured learning journey."
              subtitle="Our 5-stage experiential methodology ensures every field journey delivers measurable academic comprehension and lifelong character growth."
              theme="dark"
            />
          </div>

          <LearningJourneyModel />

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 text-xs text-sand-dark/80">
            <span className="italic">
              Classroom Concept → Real-World Experience → Hands-on Activity → Reflection → Learning Outcome
            </span>
            <Link
              href="/learning-framework"
              className="text-gold hover:text-white font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>Learn More About the Framework</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 5 — SIGNATURE EXPERIENCES */}
      <section className="py-20 lg:py-28 bg-canvas relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Signature Expeditions"
              title="Signature Learning Journeys"
              subtitle="Curriculum-aligned multi-day journeys designed for school cohorts across India."
              className="mb-0"
            />
            <Button
              href="/experiences"
              variant="primary"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore All Experiences
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredExperiences.slice(0, 4).map((experience) => (
              <ProgramCard key={experience.id} experience={experience} />
            ))}
          </div>

          <div className="p-8 bg-sand-light/50 border border-sand-border rounded-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-heading font-bold text-lg text-forest-dark">
                Looking for a customized syllabus journey for your school?
              </h4>
              <p className="text-sm text-charcoal-muted">
                Our pedagogical team designs custom micro-trips and multi-day expeditions matched to your specific academic term topics.
              </p>
            </div>
            <Button
              href="/plan-a-program"
              variant="secondary"
              size="md"
              className="shrink-0"
            >
              Request Custom Design
            </Button>
          </div>
        </div>
      </section>

      {/* SECTION 6 — SAFETY */}
      <section className="py-20 lg:py-28 bg-canvas-subtle border-y border-sand-border relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Responsibility & Care"
              title="Adventure with responsibility."
              subtitle="A structured four-pillar operational framework built specifically for the safeguarding, well-being, and medical readiness of school students."
              className="mb-0"
            />
            <Button
              href="/safety"
              variant="outline"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Our Safety Framework
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safetyPillarsData.map((pillar) => (
              <SafetyCard key={pillar.id} pillar={pillar} />
            ))}
          </div>

          <div className="p-5 bg-canvas-card border border-sand-border rounded-xs flex items-center gap-4 text-xs text-charcoal-muted">
            <ShieldCheck className="w-5 h-5 text-forest shrink-0" />
            <p>
              <strong className="text-charcoal font-semibold">Operational Standards Note:</strong> All safety procedures, chaperone ratios (1:7), and hospital escalation routes are verified per journey checklist. EduVoyagers maintains strict POCSO-aware operating standards and complete background verification for all staff.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 — STUDENT OUTCOMES */}
      <section className="py-20 lg:py-28 bg-canvas relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          <SectionHeading
            eyebrow="Lifelong Takeaways"
            title="What students take home."
            subtitle="Beyond grades and syllabus topics, experiential journeys build foundational life capabilities."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <LearningOutcomeCard
              title="Independence"
              description="Managing personal gear, navigating unfamiliar terrain, and developing self-reliance outside comfort zones."
              iconName="Independence"
            />
            <LearningOutcomeCard
              title="Collaboration"
              description="Working in small peer pods, rotating leadership roles, and resolving challenges through consensus."
              iconName="Collaboration"
            />
            <LearningOutcomeCard
              title="Environmental Awareness"
              description="Firsthand understanding of fragile ecosystems, resource scarcity, and Leave No Trace ethics."
              iconName="Environmental Awareness"
            />
            <LearningOutcomeCard
              title="Communication"
              description="Articulating observations in field journals, presenting group findings, and active listening."
              iconName="Communication"
            />
            <LearningOutcomeCard
              title="Problem Solving"
              description="Applying critical thinking, compass geometry, and water testing to solve real-world problems."
              iconName="Problem Solving"
            />
            <LearningOutcomeCard
              title="Empathy"
              description="Interacting with rural farming communities, artisans, and peers with mutual dignity and respect."
              iconName="Empathy"
            />
          </div>
        </div>
      </section>

      {/* SECTION 8 — FOR SCHOOLS */}
      <section className="py-20 lg:py-28 bg-canvas-subtle border-t border-sand-border relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
          <SectionHeading
            eyebrow="Institutional Partnership"
            title="Designed for schools. Meaningful for students."
            subtitle="Tailored to meet the exact priorities of school leadership, educators, trip coordinators, and parents."
          />

          {/* Stakeholder 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholderRoles.map((role) => (
              <RoleCard key={role.id} stakeholder={role} />
            ))}
          </div>

          {/* Pilot Program Banner */}
          <div className="p-8 bg-forest-dark text-sand-light rounded-xs border border-white/10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block mb-1">
                  Low-Friction Partnership
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  Start with an EduVoyagers Pilot Program
                </h3>
              </div>
              <Button
                href="/for-schools#pilot"
                variant="gold"
                size="md"
              >
                Plan a Pilot Program
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {pilotProgramModels.map((model, idx) => (
                <div key={idx} className="space-y-2 bg-forest/40 p-4 rounded-xs border border-white/10">
                  <span className="text-xs font-mono font-bold text-gold">
                    {model.level}
                  </span>
                  <h4 className="font-bold text-sand-light">{model.title}</h4>
                  <p className="text-xs text-sand-dark/80">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — FINAL CTA */}
      <CTASection
        headline="Where will your classroom go next?"
        subtext="Tell us what your students need to learn. We'll help design the experience around it."
        primaryBtnText="Plan a Learning Journey"
        primaryBtnHref="/plan-a-program"
        secondaryBtnText="Explore All Experiences"
        secondaryBtnHref="/experiences"
      />
    </div>
  );
}
