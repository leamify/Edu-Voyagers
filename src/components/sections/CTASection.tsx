import React from "react";
import { ArrowRight, FileText } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { TopographicPattern } from "@/components/ui/TopographicPattern";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryBtnText?: string;
  primaryBtnHref?: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  className?: string;
}

export function CTASection({
  headline = "Where will your classroom go next?",
  subtext = "Tell us what your students need to learn. We'll help design the experience around it.",
  primaryBtnText = "Plan a Learning Journey",
  primaryBtnHref = "/plan-a-program",
  secondaryBtnText = "Download School Information Pack",
  secondaryBtnHref = "/for-schools#pilot",
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "relative bg-forest-dark text-sand-light py-20 lg:py-24 overflow-hidden border-t border-forest",
        className
      )}
    >
      <TopographicPattern variant="dark" opacity={0.05} />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-10">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold block">
            Begin Your Partnership
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {headline}
          </h2>

          <p className="text-base sm:text-lg text-sand-dark/90 max-w-2xl mx-auto leading-relaxed">
            {subtext}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href={primaryBtnHref}
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              {primaryBtnText}
            </Button>
            <Button
              href={secondaryBtnHref}
              variant="dark"
              size="lg"
              className="border-white/20 hover:border-white/40"
              icon={<FileText className="w-4 h-4 text-gold" />}
              iconPosition="left"
            >
              {secondaryBtnText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
