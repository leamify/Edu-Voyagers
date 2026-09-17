import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DestinationCard } from "@/components/cards/DestinationCard";
import { CTASection } from "@/components/sections/CTASection";
import { destinationsData } from "@/data/destinations";
import { MapPin, Compass } from "@/components/ui/Icons";

export const metadata = constructMetadata({
  title: "Learning Destinations Across India",
  description:
    "Explore educational field hubs across India: the Himalayas, Western Ghats rainforests, Rajasthan heritage forts, Ladakh astronomy plateaus, and rural eco-farms.",
  pathname: "/destinations",
});

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Hero */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Breadcrumbs
            items={[{ label: "Destinations" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Pan-India Field Hubs
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              PLACES WITH SOMETHING TO TEACH.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              We select environments not for tourist leisure, but for their unique capacity to demonstrate geological phenomena, ecological biodiversity, living history, and civic systems.
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-12">
        <SectionHeading
          eyebrow="Active Field Hubs"
          title="Curated Learning Regions"
          subtitle="Explore our vetted field centers across India, each equipped with certified educators, pre-mapped safety corridors, and curriculum-aligned inquiry stations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinationsData.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Have a specific field region in mind?"
        subtext="Tell us which Indian landscape or state best matches your syllabus requirements. We will design the learning expedition."
        primaryBtnText="Design a Destination Journey"
        primaryBtnHref="/plan-a-program"
      />
    </div>
  );
}
