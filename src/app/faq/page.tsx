"use client";

import React, { useState, useMemo } from "react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { faqsData, FAQItem } from "@/data/faqs";
import { Search, ChevronDown, HelpCircle, Phone, Mail } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";

const CATEGORIES = ["All", "Programs", "Safety", "Schools", "Parents", "Travel", "Learning"] as const;

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First item open by default

  const filteredFaqs = useMemo(() => {
    return faqsData.filter((item) => {
      if (selectedCategory !== "All" && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQ = item.question.toLowerCase().includes(query);
        const matchesA = item.answer.toLowerCase().includes(query);
        if (!matchesQ && !matchesA) return false;
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const toggleAccordion = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header Hero */}
      <section className="relative py-16 lg:py-24 bg-forest-dark text-sand-light overflow-hidden">
        <TopographicPattern variant="dark" opacity={0.06} />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10 space-y-6">
          <Breadcrumbs
            items={[{ label: "Frequently Asked Questions" }]}
            className="text-sand-dark/70"
          />

          <div className="max-w-5xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold block">
              Knowledge & Support
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              FREQUENTLY ASKED QUESTIONS.
            </h1>
            <p className="text-base sm:text-lg text-sand-dark/90 leading-relaxed font-normal">
              Find transparent answers regarding our safety architecture, curriculum integration, supervision ratios, and school partnership workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 lg:py-24 max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 space-y-10">
        {/* Search & Category Filter Console */}
        <div className="bg-canvas-card border border-sand-border p-6 rounded-xs space-y-6 shadow-xs">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light" />
            <input
              type="text"
              placeholder="Search frequently asked questions (e.g. safety ratio, food hygiene, CBSE mapping)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-sand-border/80">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-xs transition-colors font-medium border ${
                  selectedCategory === cat
                    ? "bg-forest text-sand-light border-forest shadow-xs font-semibold"
                    : "bg-canvas text-charcoal hover:bg-sand-light border-sand-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndices.includes(idx);
              return (
                <div
                  key={idx}
                  className="bg-canvas-card border border-sand-border rounded-xs overflow-hidden transition-colors hover:border-forest/40"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 focus:outline-hidden"
                    aria-expanded={isOpen}
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-terracotta">
                        {faq.category}
                      </span>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-forest-dark leading-snug">
                        {faq.question}
                      </h3>
                    </div>
                    <div
                      className={`w-6 h-6 rounded-xs bg-sand-light flex items-center justify-center text-forest shrink-0 transition-transform duration-200 mt-1 ${
                        isOpen ? "rotate-180 bg-forest text-sand-light" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-charcoal-muted leading-relaxed border-t border-sand-border/50 animate-in fade-in">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="bg-canvas-card border border-sand-border p-10 text-center space-y-3 rounded-xs">
              <HelpCircle className="w-8 h-8 text-charcoal-light mx-auto" />
              <h4 className="font-heading font-bold text-lg text-forest-dark">
                No matching questions found
              </h4>
              <p className="text-xs text-charcoal-muted">
                Try a different keyword or contact our education advisory team directly.
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset Search
              </Button>
            </div>
          )}
        </div>

        {/* Support Callout */}
        <div className="p-6 bg-sand-light/60 rounded-xs border border-sand-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading font-bold text-base text-forest-dark">
              Have a specific question not answered here?
            </h4>
            <p className="text-xs text-charcoal-muted">
              Our education and operations directors are available for school consultations.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="sm">
            Contact Support
          </Button>
        </div>
      </section>

      {/* Bottom CTA */}
      <CTASection
        headline="Ready to design your school's learning experience?"
        subtext="Let's tailor an itinerary that matches your students' academic syllabus."
        primaryBtnText="Plan a Journey"
        primaryBtnHref="/plan-a-program"
      />
    </div>
  );
}
