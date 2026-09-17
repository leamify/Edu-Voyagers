import React from "react";
import { constructMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/sections/CTASection";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Compass, ArrowRight } from "@/components/ui/Icons";

export const metadata = constructMetadata({
  title: "Contact Us | EduVoyagers",
  description:
    "Get in touch with EduVoyagers. Call, email or visit our Kolkata office. Schedule a school presentation or enquire about custom K-12 experiential journeys.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Hero */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Breadcrumbs
            items={[{ label: "Contact Us" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Get In Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              WE&apos;D LOVE TO HEAR FROM YOU.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              Whether you are a school principal planning a learning expedition, a parent with questions about safety and logistics, or an educator curious about our methodology — reach out anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 space-y-16">
        {/* Main Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <SectionHeading
              eyebrow="Direct Contact"
              title="Reach us directly."
              subtitle="We respond within 24 hours on working days."
              className="mb-0"
            />

            {/* Phone */}
            <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-forest text-sand-light flex items-center justify-center">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <h3 className="font-heading font-bold text-lg text-forest-dark">
                Call Us
              </h3>
              <a
                href="tel:+917004518406"
                className="text-xl font-bold text-forest hover:text-forest-light transition-colors block"
              >
                +91 70045 18406
              </a>
              <p className="text-xs text-charcoal-muted">
                Mon – Sat, 9:00 AM – 7:00 PM IST
              </p>
            </div>

            {/* Email */}
            <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-sand-dark text-forest flex items-center justify-center">
                <Mail className="w-5 h-5 text-forest" />
              </div>
              <h3 className="font-heading font-bold text-lg text-forest-dark">
                Email Us
              </h3>
              <a
                href="mailto:contact@eduvoyagers.com"
                className="text-base font-bold text-forest hover:text-forest-light transition-colors block break-all"
              >
                contact@eduvoyagers.com
              </a>
              <p className="text-xs text-charcoal-muted">
                For program inquiries, school partnerships, and general questions.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="p-6 bg-canvas-card border border-sand-border rounded-xs space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[#25D366] text-white flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
                  <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.502 1.128 6.748 3.046 9.388L1.054 31.37l6.18-1.962A15.913 15.913 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.326 22.602c-.39 1.098-1.928 2.01-3.164 2.276-.846.18-1.95.322-5.668-1.218-4.758-1.97-7.818-6.794-8.054-7.108-.226-.314-1.896-2.524-1.896-4.814 0-2.29 1.198-3.418 1.624-3.886.39-.43.926-.608 1.234-.608.314 0 .548.004.786.014.254.012.594-.096.928.708.352.844 1.194 2.91 1.3 3.122.106.212.178.462.036.744-.142.286-.212.462-.426.712-.212.248-.448.554-.638.744-.212.212-.434.442-.186.868.248.426 1.104 1.82 2.37 2.948 1.632 1.452 3.006 1.902 3.432 2.114.426.212.674.178.922-.106.248-.286 1.064-1.234 1.348-1.66.284-.426.568-.354.958-.212.39.142 2.474 1.168 2.9 1.38.426.212.71.32.816.496.106.178.106 1.024-.284 2.12z" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-lg text-forest-dark">
                WhatsApp
              </h3>
              <a
                href="https://wa.me/917004518406?text=Hello!%20I%27d%20like%20to%20know%20more%20about%20EduVoyagers%27%20programs."
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-bold text-forest hover:text-forest-light transition-colors block"
              >
                +91 70045 18406
              </a>
              <p className="text-xs text-charcoal-muted">
                Quick queries? Drop us a WhatsApp message anytime.
              </p>
            </div>
          </div>

          {/* Right: Office & Map */}
          <div className="lg:col-span-3 space-y-8">
            {/* Office Address Card */}
            <div className="p-8 bg-forest-dark text-sand-light rounded-xs border border-white/10 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
                  Our Office
                </span>
                <h3 className="font-heading font-bold text-2xl text-white">
                  EduVoyagers HQ, Kolkata
                </h3>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-base font-medium text-sand-light">
                    5th Floor, BG-12, Terminus Building
                  </p>
                  <p className="text-sm text-sand-dark/80">
                    Action Area I, Newtown, Kolkata, West Bengal
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-gold shrink-0" />
                  <div className="text-xs">
                    <p className="text-sand-light font-medium">Office Hours</p>
                    <p className="text-sand-dark/70">Mon – Sat, 9 AM – 7 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                  <div className="text-xs">
                    <p className="text-sand-light font-medium">Active Trip Desk</p>
                    <p className="text-sand-dark/70">24/7 Operations Support</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-xs overflow-hidden border border-sand-border shadow-sm h-[320px] lg:h-[360px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5!2d88.4593!3d22.5958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM1JzQ0LjkiTiA4OMKwMjcnMzMuNSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="EduVoyagers Office Location - Newtown, Kolkata"
              />
            </div>

            {/* Inquiry Categories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 bg-canvas-card border border-sand-border rounded-xs space-y-2">
                <div className="w-8 h-8 rounded-xs bg-forest text-sand-light flex items-center justify-center">
                  <Compass className="w-4 h-4 text-gold" />
                </div>
                <h4 className="font-heading font-bold text-sm text-forest-dark">
                  School & Program Planning
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  For curriculum mapping, cohort planning, pilot micro-trips, and custom program design.
                </p>
                <Button href="/plan-a-program" variant="primary" size="sm" className="w-full justify-center mt-2">
                  Submit Program Form
                </Button>
              </div>

              <div className="p-5 bg-canvas-card border border-sand-border rounded-xs space-y-2">
                <div className="w-8 h-8 rounded-xs bg-sand-dark text-forest flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-forest" />
                </div>
                <h4 className="font-heading font-bold text-sm text-forest-dark">
                  Parent & Safety Desk
                </h4>
                <p className="text-xs text-charcoal-muted leading-relaxed">
                  For journey status, medical queries, consent documentation, kit lists, and safety protocols.
                </p>
                <Button href="/safety" variant="outline" size="sm" className="w-full justify-center mt-2">
                  Review Safety Pillars
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        headline="Ready to plan your next learning journey?"
        subtext="Tell us what your students need to learn. We'll design the experience around it."
        primaryBtnText="Plan a Learning Journey"
        primaryBtnHref="/plan-a-program"
        secondaryBtnText="Explore All Experiences"
        secondaryBtnHref="/experiences"
      />
    </div>
  );
}
