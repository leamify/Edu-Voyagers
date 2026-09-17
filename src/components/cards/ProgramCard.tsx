import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, CheckCircle2 } from "@/components/ui/Icons";
import { Experience } from "@/types/experience";
import { GradeBadge, DurationBadge, ThemeBadge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface ProgramCardProps {
  experience: Experience;
  className?: string;
  variant?: "default" | "compact" | "horizontal";
}

export function ProgramCard({
  experience,
  className,
  variant = "default",
}: ProgramCardProps) {
  const isHorizontal = variant === "horizontal";

  return (
    <article
      className={cn(
        "group bg-canvas-card border border-sand-border rounded-xs overflow-hidden flex flex-col transition-all duration-300 hover:border-forest/40 hover:shadow-md hover:-translate-y-1",
        isHorizontal && "md:flex-row",
        className
      )}
    >
      {/* Image Container */}
      <div
        className={cn(
          "relative overflow-hidden bg-sand-dark aspect-16/10",
          isHorizontal ? "md:w-2/5 md:aspect-auto" : "w-full"
        )}
      >
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <GradeBadge grades={experience.grades} className="bg-white/90 backdrop-blur-xs" />
          <DurationBadge duration={experience.duration} className="bg-white/90 backdrop-blur-xs" />
        </div>

        {/* Location Tag */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs font-medium text-white/95 z-10 drop-shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
          <span>{experience.location}</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Themes */}
          <div className="flex flex-wrap gap-1.5">
            {experience.themes.map((theme) => (
              <ThemeBadge key={theme} theme={theme} />
            ))}
          </div>

          {/* Title & Description */}
          <h3 className="text-xl font-bold text-forest-dark group-hover:text-forest transition-colors leading-snug">
            <Link
              href={`/programs/${experience.slug}`}
              className="focus:outline-hidden"
            >
              {experience.title}
            </Link>
          </h3>
          <p className="text-sm text-charcoal-muted line-clamp-2 leading-relaxed">
            {experience.description}
          </p>

          {/* Key Learning Highlights */}
          {experience.learningOutcomes && experience.learningOutcomes.length > 0 && (
            <div className="pt-2 border-t border-sand-border/60 space-y-1.5">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-charcoal-light block">
                Key Learning Outcomes:
              </span>
              <ul className="space-y-1 text-xs text-charcoal">
                {experience.learningOutcomes.slice(0, 2).map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-forest shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-sand-border/60 flex items-center justify-between">
          <span className="text-xs font-medium text-charcoal-light">
            Curriculum Aligned
          </span>
          <Link
            href={`/programs/${experience.slug}`}
            className="inline-flex items-center text-xs font-bold text-forest hover:text-forest-light tracking-wide uppercase group/link gap-1.5"
          >
            <span>Explore Details</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}
