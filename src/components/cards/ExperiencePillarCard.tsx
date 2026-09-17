import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

export interface ExperiencePillarProps {
  number: string;
  verb: string;
  theme: string;
  description: string;
  image: string;
  href: string;
  className?: string;
}

export function ExperiencePillarCard({
  number,
  verb,
  theme,
  description,
  image,
  href,
  className,
}: ExperiencePillarProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative block overflow-hidden rounded-xs border border-sand-border bg-canvas-card transition-all duration-300 hover:border-forest hover:shadow-lg focus:outline-hidden",
        className
      )}
    >
      {/* Image container */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-sand-dark">
        <Image
          src={image}
          alt={`${verb} - ${theme}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-forest-dark/90 via-forest-dark/30 to-transparent transition-opacity duration-300 group-hover:opacity-85" />

        {/* Index Tag */}
        <span className="absolute top-4 left-4 font-mono text-xs font-bold text-sand-light tracking-widest bg-forest-dark/60 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-white/10">
          {number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 space-y-2">
        <div className="flex items-baseline justify-between">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-terracotta">
            {verb}
          </span>
          <ArrowRight className="w-4 h-4 text-forest-light transition-transform duration-300 group-hover:translate-x-1 group-hover:text-forest" />
        </div>
        <h3 className="text-xl font-bold text-forest-dark group-hover:text-forest transition-colors">
          {theme}
        </h3>
        <p className="text-sm text-charcoal-muted leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
}
