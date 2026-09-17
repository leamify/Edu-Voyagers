import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  };

  const isDark = theme === "dark";

  return (
    <div className={cn("max-w-3xl mb-12", alignmentClasses[align], className)}>
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          {align === "center" && (
            <span
              className={cn(
                "h-px w-6",
                isDark ? "bg-gold/60" : "bg-forest/40"
              )}
            />
          )}
          <span
            className={cn(
              "text-xs font-semibold uppercase tracking-[0.2em]",
              isDark ? "text-gold" : "text-terracotta"
            )}
          >
            {eyebrow}
          </span>
          {(align === "center" || align === "left") && (
            <span
              className={cn(
                "h-px w-6",
                isDark ? "bg-gold/60" : "bg-forest/40"
              )}
            />
          )}
        </div>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]",
          isDark ? "text-sand-light" : "text-forest-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed font-normal",
            isDark ? "text-sand-dark/90" : "text-charcoal-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
