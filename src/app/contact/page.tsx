import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Compass, ArrowRight } from "@/components/ui/Icons";

export const metadata = constructMetadata({
  title: "Contact & School Consultation | EduVoyagers",
  description:
    "Get in touch with EduVoyagers education advisors, schedule a school presentation, or enquire about custom K-12 experiential journeys.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Hero */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[{ label: "Contact Us" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Direct Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              CONNECT WITH OUR TEAM.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              Whether you are a school principal seeking a tailored syllabus dossier, an activity coordinator planning a pilot, or an educator with pedagogical questions—we are here to assist.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: School Inquiries */}
          <div className="bg-canvas-card border border-sand-border rounded-xs p-8 space-y-4">
            <div className="w-10 h-10 rounded-xs bg-forest text-sand-light flex items-center justify-center">
              <Compass className="w-5 h-5 text-gold" />
            </div>
            <h3 className="font-heading font-bold text-xl text-forest-dark">
              School & Program Planning
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              For curriculum mapping, cohort planning, quotes, and pilot micro-trips for schools.
            </p>
            <div className="pt-2 text-xs space-y-2 text-charcoal">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest shrink-0" />
                <span className="font-medium">learning@eduvoyagers.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-forest shrink-0" />
                <span className="font-medium">+91 98765 43210</span>
              </div>
            </div>
            <div className="pt-4 border-t border-sand-border/80">
              <Button href="/plan-a-program" variant="primary" size="sm" className="w-full justify-center">
                Submit Program Form
              </Button>
            </div>
          </div>

          {/* Card 2: Parent & Operations Desk */}
          <div className="bg-canvas-card border border-sand-border rounded-xs p-8 space-y-4">
            <div className="w-10 h-10 rounded-xs bg-sand-dark text-forest flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-forest" />
            </div>
            <h3 className="font-heading font-bold text-xl text-forest-dark">
              Parent & Safety Desk
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              For ongoing journey status, medical queries, consent documentation, and kit lists.
            </p>
            <div className="pt-2 text-xs space-y-2 text-charcoal">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-forest shrink-0" />
                <span className="font-medium">safety@eduvoyagers.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-forest shrink-0" />
                <span className="font-medium">24/7 Operations Desk on Active Trips</span>
              </div>
            </div>
            <div className="pt-4 border-t border-sand-border/80">
              <Button href="/safety" variant="outline" size="sm" className="w-full justify-center">
                Review Safety Pillars
              </Button>
            </div>
          </div>

          {/* Card 3: Regional Field Hubs */}
          <div className="bg-canvas-card border border-sand-border rounded-xs p-8 space-y-4">
            <div className="w-10 h-10 rounded-xs bg-forest-subtle text-forest flex items-center justify-center">
              <MapPin className="w-5 h-5 text-forest" />
            </div>
            <h3 className="font-heading font-bold text-xl text-forest-dark">
              Regional Operations Hubs
            </h3>
            <p className="text-xs text-charcoal-muted leading-relaxed">
              Field facilitation teams operating across North, South, West, and Central India.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-charcoal-muted">
              <div><strong>North Hub:</strong> Dehradun & Delhi NCR</div>
              <div><strong>South Hub:</strong> Bengaluru & Western Ghats</div>
              <div><strong>West Hub:</strong> Jaipur & Mumbai</div>
            </div>
            <div className="pt-4 border-t border-sand-border/80">
              <Button href="/destinations" variant="secondary" size="sm" className="w-full justify-center">
                View All Destinations
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
