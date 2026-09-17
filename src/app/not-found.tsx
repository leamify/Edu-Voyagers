import React from "react";
import Link from "next/link";
import { Compass, ArrowRight, Home } from "@/components/ui/Icons";
import { Button } from "@/components/ui/Button";
import { TopographicPattern } from "@/components/ui/TopographicPattern";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-canvas relative overflow-hidden px-4 py-20">
      <TopographicPattern opacity={0.08} />

      <div className="relative z-10 max-w-lg text-center space-y-6 bg-canvas-card border border-sand-border p-8 sm:p-12 rounded-xs shadow-md">
        <div className="w-16 h-16 rounded-xs bg-forest-subtle flex items-center justify-center text-forest mx-auto">
          <Compass className="w-8 h-8 text-forest" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-terracotta uppercase tracking-widest block">
            Error 404 — Landmark Not Found
          </span>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-forest-dark">
            Looks like you&apos;ve wandered off the learning path.
          </h1>
          <p className="text-sm text-charcoal-muted leading-relaxed">
            The page or expedition you are looking for does not exist or has been relocated to another field station.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            href="/experiences"
            variant="primary"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Back to Experiences
          </Button>
          <Button
            href="/"
            variant="outline"
            size="md"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
          >
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
