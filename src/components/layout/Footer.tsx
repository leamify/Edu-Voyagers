import React from "react";
import Link from "next/link";
import { Compass, ArrowUpRight, Mail, Phone, MapPin, Heart } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-forest-dark text-sand-light border-t border-forest relative overflow-hidden">
      {/* Topographic accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-topo-dark"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group focus:outline-hidden"
            >
              <div className="w-8 h-8 rounded-xs bg-gold flex items-center justify-center text-forest-dark">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-wider text-sand-light">
                EDUVOYAGERS
              </span>
            </Link>
            <p className="text-sm text-sand-dark/80 max-w-sm leading-relaxed">
              Experiential education company designing curriculum-aligned
              journeys, field experiences, outdoor learning, and leadership
              programs for K-12 students.
            </p>
            <div className="pt-2 text-xs text-sand-dark/70 space-y-2">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0" />
                <span>Pan-India Learning Hubs & Expeditions</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold shrink-0" />
                <span>learning@eduvoyagers.in</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold shrink-0" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-sand-dark/90">
              <li>
                <Link
                  href="/experiences"
                  className="hover:text-sand-light transition-colors flex items-center gap-1 group"
                >
                  <span>Experiences</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/learning-framework"
                  className="hover:text-sand-light transition-colors flex items-center gap-1 group"
                >
                  <span>Learning Framework</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/safety"
                  className="hover:text-sand-light transition-colors flex items-center gap-1 group"
                >
                  <span>Safety Architecture</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/for-schools"
                  className="hover:text-sand-light transition-colors flex items-center gap-1 group"
                >
                  <span>For Schools & Principals</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="hover:text-sand-light transition-colors flex items-center gap-1 group"
                >
                  <span>Destinations</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-sand-light transition-colors flex items-center gap-1 group"
                >
                  <span>About EduVoyagers</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-gold">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-sand-dark/90">
              <li>
                <Link
                  href="/for-schools#pilot"
                  className="hover:text-sand-light transition-colors"
                >
                  School Information Pack
                </Link>
              </li>
              <li>
                <Link
                  href="/for-schools#parents"
                  className="hover:text-sand-light transition-colors"
                >
                  Parent Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/safety#child-protection"
                  className="hover:text-sand-light transition-colors"
                >
                  Child Protection Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-sand-light transition-colors"
                >
                  FAQ Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-sand-light transition-colors"
                >
                  Contact & Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to Action Box */}
          <div className="lg:col-span-3 space-y-4 bg-forest/50 p-6 rounded-xs border border-white/10">
            <h4 className="font-heading font-semibold text-base text-sand-light">
              Plan Your School Program
            </h4>
            <p className="text-xs text-sand-dark/80 leading-relaxed">
              Connect with our curriculum directors to design an experiential
              journey tailored to your academic calendar.
            </p>
            <Button
              href="/plan-a-program"
              variant="gold"
              size="sm"
              className="w-full justify-center"
            >
              Plan a Journey
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sand-dark/60">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <p>© {new Date().getFullYear()} EduVoyagers. All rights reserved.</p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="italic text-sand-dark/80 font-medium">
              Explore. Experience. Reflect. Apply.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/faq"
              className="hover:text-sand-light transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/faq"
              className="hover:text-sand-light transition-colors"
            >
              Terms of Engagement
            </Link>
            <span className="text-sand-dark/40">Not a conventional travel agency.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
