import React from "react";
import { ItineraryDay } from "@/types/program";
import { CheckCircle2, Sparkles, Compass } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export function ItineraryTimeline({
  days,
  className,
}: {
  days: ItineraryDay[];
  className?: string;
}) {
  return (
    <div className={cn("relative space-y-8", className)}>
      {/* Central line for desktop */}
      <div
        className="absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 bg-sand-border -z-0"
        aria-hidden="true"
      />

      {days.map((day) => (
        <div key={day.dayNumber} className="relative z-10 flex items-start gap-4 sm:gap-6">
          {/* Day Circle */}
          <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xs bg-forest text-sand-light border-2 border-canvas flex flex-col items-center justify-center font-heading shadow-xs">
            <span className="text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold text-gold">
              DAY
            </span>
            <span className="text-base sm:text-xl font-bold leading-none">
              {String(day.dayNumber).padStart(2, "0")}
            </span>
          </div>

          {/* Day Card */}
          <div className="flex-1 bg-canvas-card border border-sand-border rounded-xs p-5 sm:p-7 space-y-4 hover:border-forest/40 transition-colors">
            <div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-terracotta block mb-1">
                {day.theme}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-forest-dark">
                {day.title}
              </h4>
            </div>

            {/* Activities */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-light flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-forest" />
                <span>Field Activities:</span>
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-charcoal">
                {day.activities.map((activity, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-forest font-bold shrink-0 mt-0.5">▪</span>
                    <span className="leading-relaxed">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learning Focus */}
            {day.learningFocus && day.learningFocus.length > 0 && (
              <div className="pt-3 border-t border-sand-border/60 space-y-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-charcoal-light flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-forest" />
                  <span>Curriculum & Skill Focus:</span>
                </span>
                <ul className="space-y-1 text-xs text-forest-dark font-medium">
                  {day.learningFocus.map((focus, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-gold font-bold">✓</span>
                      <span>{focus}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Reflection Prompt */}
            {day.reflectionPrompt && (
              <div className="p-3 bg-sand-light/50 rounded-xs border border-sand-border/80 text-xs text-charcoal-muted flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-terracotta shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-charcoal">Evening Journal Reflection: </span>
                  <span className="italic">“{day.reflectionPrompt}”</span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
