import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Compass } from "@/components/ui/Icons";
import { Destination } from "@/types/destination";
import { GradeBadge, DurationBadge, ThemeBadge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function DestinationCard({
  destination,
  className,
}: {
  destination: Destination;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group bg-canvas-card border border-sand-border rounded-xs overflow-hidden flex flex-col transition-all duration-300 hover:border-forest/40 hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-16/9 w-full overflow-hidden bg-sand-dark">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-forest-dark/80 via-transparent to-transparent opacity-70" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <GradeBadge grades={destination.suitableGrades} className="bg-white/90 backdrop-blur-xs" />
          <DurationBadge duration={destination.typicalDuration} className="bg-white/90 backdrop-blur-xs" />
        </div>

        <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs font-medium text-white z-10">
          <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
          <span>{destination.state}</span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-[11px] uppercase tracking-wider font-semibold text-terracotta">
              {destination.category}
            </span>
            <span className="text-xs text-charcoal-light flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-forest" />
              <span>{destination.programCount} Programs</span>
            </span>
          </div>

          <h3 className="text-xl font-bold text-forest-dark leading-snug">
            {destination.name}
          </h3>

          <p className="text-sm text-charcoal-muted line-clamp-2 leading-relaxed">
            {destination.tagline}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {destination.learningThemes.map((theme) => (
              <ThemeBadge key={theme} theme={theme} />
            ))}
          </div>

          {/* Highlights */}
          <div className="pt-3 border-t border-sand-border/60">
            <span className="text-[11px] font-semibold text-charcoal-light uppercase tracking-wider block mb-1.5">
              Field Focus:
            </span>
            <ul className="space-y-1 text-xs text-charcoal">
              {destination.keyHighlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-gold font-bold">▪</span>
                  <span className="line-clamp-1">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-sand-border/60 flex items-center justify-between">
          <Link
            href={`/plan-a-program?destination=${encodeURIComponent(destination.name)}`}
            className="text-xs font-bold text-forest hover:text-forest-light tracking-wide uppercase flex items-center gap-1.5 group/link"
          >
            <span>Design Trip Here</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
          </Link>
          <Link
            href="/experiences"
            className="text-xs text-charcoal-light hover:text-forest transition-colors"
          >
            View Itineraries
          </Link>
        </div>
      </div>
    </div>
  );
}
