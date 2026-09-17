import React from "react";
import { ShieldCheck, HeartPulse, Compass, Users, IconProps, CheckCircle2 } from "@/components/ui/Icons";
import { SafetyPillar } from "@/data/safety";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.FC<IconProps>> = {
  ShieldCheck,
  HeartPulse,
  Compass,
  Users,
};

export function SafetyCard({
  pillar,
  className,
}: {
  pillar: SafetyPillar;
  className?: string;
}) {
  const IconComponent = iconMap[pillar.iconName] || ShieldCheck;

  return (
    <div
      className={cn(
        "bg-canvas-card border border-sand-border rounded-xs p-6 md:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 hover:border-forest/40 hover:shadow-md",
        className
      )}
    >
      <div className="space-y-4">
        <div className="w-12 h-12 rounded-xs bg-forest-subtle flex items-center justify-center text-forest">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-bold text-forest-dark">{pillar.title}</h3>
        <p className="text-sm text-charcoal-muted leading-relaxed">
          {pillar.shortDescription}
        </p>

        <div className="pt-2 space-y-2">
          <span className="text-[11px] font-semibold text-charcoal-light uppercase tracking-wider block">
            Operational Protocols:
          </span>
          <ul className="space-y-2 text-xs text-charcoal">
            {pillar.keyProtocols.map((protocol, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                <span className="leading-snug">{protocol}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 border-t border-sand-border/60">
        <span className="text-[11px] text-charcoal-light block italic">
          Standard: {pillar.operationalStandard}
        </span>
      </div>
    </div>
  );
}
