import React from "react";
import { cn } from "@/lib/utils";
import { ProgramTheme } from "@/types/experience";

export function GradeBadge({
  grades,
  className,
}: {
  grades: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-sm bg-forest-subtle text-forest border border-forest/15 tracking-wide",
        className
      )}
    >
      {grades}
    </span>
  );
}

export function DurationBadge({
  duration,
  className,
}: {
  duration: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-medium px-2.5 py-1 rounded-sm bg-sand-light text-charcoal border border-sand-border",
        className
      )}
    >
      {duration}
    </span>
  );
}

export function ThemeBadge({
  theme,
  className,
}: {
  theme: ProgramTheme | string;
  className?: string;
}) {
  const themeStyles: Record<string, string> = {
    Nature: "bg-emerald-50 text-emerald-800 border-emerald-200",
    STEM: "bg-sky-50 text-sky-900 border-sky-200",
    Culture: "bg-amber-50 text-amber-900 border-amber-200",
    Adventure: "bg-orange-50 text-orange-900 border-orange-200",
    Leadership: "bg-stone-100 text-stone-800 border-stone-300",
    Community: "bg-rose-50 text-rose-900 border-rose-200",
  };

  const style =
    themeStyles[theme] || "bg-canvas-subtle text-charcoal border-sand-border";

  return (
    <span
      className={cn(
        "inline-flex items-center text-[11px] font-medium uppercase tracking-wider px-2 py-0.5 rounded-xs border",
        style,
        className
      )}
    >
      {theme}
    </span>
  );
}
