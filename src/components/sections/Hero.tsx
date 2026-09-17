import React from "react";
import Image from "next/image";
import { ArrowRight, Compass, ShieldCheck, BookOpen, Users } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { TopographicPattern } from "@/components/ui/TopographicPattern";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center bg-forest-dark text-sand-light overflow-hidden">
      {/* Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=85"
          alt="Students learning in the outdoor Himalayas"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-102 filter brightness-[0.6] contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-forest-dark/95 via-forest-dark/75 to-forest-dark/40" />
        <div className="absolute inset-0 bg-linear-to-t from-forest-dark via-transparent to-forest-dark/40" />
      </div>

      {/* Topographic Lines Graphic */}
      <TopographicPattern variant="dark" opacity={0.06} className="z-1" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 py-20 lg:py-28">
        <div className="max-w-4xl space-y-6">
          {/* Eyebrow / Mission Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-white/10 border border-white/15 backdrop-blur-xs">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-sand-light">
              Experiential K–12 Education
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
            LEARNING BEYOND <br className="hidden sm:block" />
            <span className="text-sand-light">THE CLASSROOM.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl font-medium text-gold leading-snug">
            Experiences that turn places into classrooms.
          </p>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed max-w-3xl font-normal">
            EduVoyagers creates curriculum-aligned journeys, field experiences and outdoor learning programs that help students learn through exploration, challenge, collaboration and real-world discovery.
          </p>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Button
              href="/experiences"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Explore Experiences
            </Button>
            <Button
              href="/plan-a-program"
              variant="dark"
              size="lg"
              className="border-white/20 hover:border-white/40"
              icon={<Compass className="w-4 h-4 text-gold" />}
              iconPosition="left"
            >
              Plan a School Program
            </Button>
          </div>

          {/* Trust Indicators Strip */}
          <div className="pt-10 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-sand-dark/80">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">Curriculum Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">Child Safety Focused</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">Experiential Pedagogy</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-gold shrink-0" />
              <span className="font-medium">1:7 Chaperone Ratio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
