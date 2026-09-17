import React from "react";
import { ShieldCheck, Compass, BookOpen, Clock } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function StatsStrip({ className }: { className?: string }) {
  const metrics = [
    {
      icon: ShieldCheck,
      value: "1:7",
      label: "Chaperone Ratio",
      subtext: "Strict small-group pod safety",
    },
    {
      icon: BookOpen,
      value: "100%",
      label: "Curriculum Mapped",
      subtext: "Aligned with CBSE, ICSE, IB & Cambridge",
    },
    {
      icon: Clock,
      value: "< 45 Min",
      label: "Hospital Escalation",
      subtext: "Pre-mapped emergency corridors",
    },
    {
      icon: Compass,
      value: "8+",
      label: "Indian Field Hubs",
      subtext: "Himalayas, Ghats, Deserts & Coasts",
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-2 lg:grid-cols-4 gap-6 p-6 sm:p-8 bg-sand-light/60 rounded-xs border border-sand-border",
        className
      )}
    >
      {metrics.map((metric, idx) => {
        const IconComponent = metric.icon;
        return (
          <div key={idx} className="space-y-1.5">
            <div className="flex items-center gap-2 text-forest">
              <IconComponent className="w-4 h-4 text-forest" />
              <span className="font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-forest-dark">
                {metric.value}
              </span>
            </div>
            <div className="font-semibold text-xs sm:text-sm text-charcoal">
              {metric.label}
            </div>
            <div className="text-[11px] sm:text-xs text-charcoal-muted">
              {metric.subtext}
            </div>
          </div>
        );
      })}
    </div>
  );
}
