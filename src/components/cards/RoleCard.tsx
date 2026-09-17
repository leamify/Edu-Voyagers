import React from "react";
import { ArrowRight, CheckCircle } from "@/components/ui/Icons";
import { StakeholderRole } from "@/data/schools";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function RoleCard({
  stakeholder,
  className,
}: {
  stakeholder: StakeholderRole;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "bg-canvas-card border border-sand-border rounded-xs p-6 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-forest/40 hover:shadow-md",
        className
      )}
    >
      <div className="space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta block mb-1">
            {stakeholder.role}
          </span>
          <h3 className="text-2xl font-bold text-forest-dark">
            {stakeholder.title}
          </h3>
        </div>

        <p className="text-sm text-charcoal-muted leading-relaxed">
          {stakeholder.tagline}
        </p>

        <div className="pt-2 space-y-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal-light mb-2">
              Key Priorities:
            </h4>
            <ul className="space-y-1.5 text-xs text-charcoal">
              {stakeholder.keyConcerns.map((concern, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-terracotta font-bold">▪</span>
                  <span>{concern}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">
              How EduVoyagers Delivers:
            </h4>
            <ul className="space-y-1.5 text-xs text-charcoal">
              {stakeholder.howWeDeliver.map((deliverable, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-sand-border/60">
        <Button
          href="/plan-a-program"
          variant="outline"
          size="sm"
          className="w-full justify-center"
          icon={<ArrowRight className="w-3.5 h-3.5" />}
        >
          {stakeholder.ctaLabel}
        </Button>
      </div>
    </div>
  );
}
