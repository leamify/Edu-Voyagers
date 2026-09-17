import React from "react";
import { learningFrameworkSteps } from "@/data/learning";
import { cn } from "@/lib/utils";
import { BookOpen, Compass, Hammer, Sparkles, GraduationCap, IconProps, ArrowRight } from "@/components/ui/Icons";

const iconMap: Record<string, React.FC<IconProps>> = {
  BookOpen,
  Compass,
  Hammer,
  Sparkles,
  GraduationCap,
};

export function LearningJourneyModel({ className }: { className?: string }) {
  return (
    <div className={cn("w-full", className)}>
      {/* Desktop Horizontal Stepper (hidden on mobile) */}
      <div className="hidden lg:grid grid-cols-5 gap-4 relative">
        {/* Connecting Track Line */}
        <div
          className="absolute top-12 left-8 right-8 h-0.5 bg-forest-light/30 -z-0"
          aria-hidden="true"
        />

        {learningFrameworkSteps.map((step, index) => {
          const IconComponent = iconMap[step.iconName] || Compass;
          const isLast = index === learningFrameworkSteps.length - 1;

          return (
            <div
              key={step.stepNumber}
              className="relative z-10 flex flex-col items-start bg-forest-dark p-6 rounded-xs border border-white/10 hover:border-gold/50 transition-all duration-300 group"
            >
              {/* Step Number Circle */}
              <div className="w-12 h-12 rounded-xs bg-forest border border-white/15 flex items-center justify-center text-sand-light font-mono text-sm font-bold mb-5 group-hover:bg-gold group-hover:text-forest-dark transition-colors duration-300 shadow-xs">
                {step.stepNumber}
              </div>

              {/* Title & Tagline */}
              <h4 className="text-lg font-bold text-sand-light mb-1 leading-snug group-hover:text-gold transition-colors">
                {step.title}
              </h4>
              <p className="text-xs text-sand-dark/80 font-medium mb-3">
                {step.tagline}
              </p>

              {/* Description */}
              <p className="text-xs text-sand-dark/70 leading-relaxed">
                {step.description}
              </p>

              {/* Arrow Indicator */}
              {!isLast && (
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-20 hidden xl:flex items-center justify-center w-6 h-6 rounded-full bg-forest-dark border border-gold/40 text-gold shadow-sm">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile & Tablet Vertical Flow (visible on sm/md) */}
      <div className="lg:hidden space-y-4">
        {learningFrameworkSteps.map((step, index) => {
          const isLast = index === learningFrameworkSteps.length - 1;

          return (
            <div
              key={step.stepNumber}
              className="relative flex items-start gap-4 p-5 bg-forest-dark rounded-xs border border-white/10"
            >
              {/* Left Stepper Indicator */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-xs bg-gold text-forest-dark flex items-center justify-center font-mono font-bold text-xs">
                  {step.stepNumber}
                </div>
                {!isLast && (
                  <div className="w-0.5 h-full min-h-[40px] bg-forest-light/40 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="space-y-1.5 flex-1">
                <h4 className="text-base font-bold text-sand-light">
                  {step.title}
                </h4>
                <p className="text-xs font-medium text-gold">
                  {step.tagline}
                </p>
                <p className="text-xs text-sand-dark/80 leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-2 text-[11px] text-sand-dark/60 italic">
                  {step.studentAction}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
