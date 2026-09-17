"use client";

import React, { useState, useMemo } from "react";
import { Search, RotateCcw, SlidersHorizontal } from "@/components/ui/Icons";
import { Experience, GradeCategory, ProgramDuration, ProgramTheme } from "@/types/experience";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { Button } from "@/components/ui/Button";

interface ProgramFilterProps {
  initialExperiences: Experience[];
}

const GRADE_OPTIONS: (GradeCategory | "All")[] = [
  "All",
  "Grades 1–4",
  "Grades 5–6",
  "Grades 7–9",
  "Grades 10–12",
];

const THEME_OPTIONS: (ProgramTheme | "All")[] = [
  "All",
  "Nature",
  "STEM",
  "Culture",
  "Adventure",
  "Leadership",
  "Community",
];

const DURATION_OPTIONS: (ProgramDuration | "All")[] = [
  "All",
  "Half Day",
  "1 Day",
  "2–3 Days",
  "4+ Days",
];

export function ProgramFilter({ initialExperiences }: ProgramFilterProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGrade, setSelectedGrade] = useState<GradeCategory | "All">("All");
  const [selectedTheme, setSelectedTheme] = useState<ProgramTheme | "All">("All");
  const [selectedDuration, setSelectedDuration] = useState<ProgramDuration | "All">("All");

  const filteredExperiences = useMemo(() => {
    return initialExperiences.filter((exp) => {
      // Search text match
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = exp.title.toLowerCase().includes(query);
        const matchesDesc = exp.description.toLowerCase().includes(query);
        const matchesLocation = exp.location.toLowerCase().includes(query);
        const matchesThemes = exp.themes.some((t) => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesLocation && !matchesThemes) {
          return false;
        }
      }

      // Grade match
      if (selectedGrade !== "All" && exp.gradeCategory !== selectedGrade) {
        return false;
      }

      // Theme match
      if (selectedTheme !== "All" && !exp.themes.includes(selectedTheme as ProgramTheme)) {
        return false;
      }

      // Duration match
      if (selectedDuration !== "All" && exp.durationCategory !== selectedDuration) {
        return false;
      }

      return true;
    });
  }, [initialExperiences, searchQuery, selectedGrade, selectedTheme, selectedDuration]);

  const hasActiveFilters =
    searchQuery.trim() !== "" ||
    selectedGrade !== "All" ||
    selectedTheme !== "All" ||
    selectedDuration !== "All";

  const handleReset = () => {
    setSearchQuery("");
    setSelectedGrade("All");
    setSelectedTheme("All");
    setSelectedDuration("All");
  };

  return (
    <div className="space-y-10">
      {/* Filter Control Console */}
      <div className="bg-canvas-card border border-sand-border p-6 md:p-8 rounded-xs space-y-6 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-sand-border/80">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-5 h-5 text-forest" />
            <h3 className="font-heading font-bold text-lg text-forest-dark">
              Filter Learning Journeys
            </h3>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-sand-light text-forest border border-sand-border">
              {filteredExperiences.length} of {initialExperiences.length} programs
            </span>
          </div>

          {hasActiveFilters && (
            <button
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-terracotta hover:text-terracotta-hover transition-colors focus:outline-hidden self-start md:self-auto"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-charcoal-light" />
          <input
            type="text"
            placeholder="Search by topic, location, skill or theme (e.g., Himalayas, Ecology, Physics)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-canvas border border-sand-border rounded-xs text-sm text-charcoal placeholder:text-charcoal-light focus:outline-hidden focus:border-forest focus:ring-1 focus:ring-forest transition-all"
          />
        </div>

        {/* Filter Pills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Grade Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-light block">
              Grade Level
            </label>
            <div className="flex flex-wrap gap-1.5">
              {GRADE_OPTIONS.map((grade) => (
                <button
                  key={grade}
                  type="button"
                  onClick={() => setSelectedGrade(grade)}
                  className={`text-xs px-2.5 py-1.5 rounded-xs transition-colors font-medium border ${
                    selectedGrade === grade
                      ? "bg-forest text-sand-light border-forest shadow-xs font-semibold"
                      : "bg-canvas text-charcoal hover:bg-sand-light border-sand-border"
                  }`}
                >
                  {grade}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-light block">
              Learning Theme
            </label>
            <div className="flex flex-wrap gap-1.5">
              {THEME_OPTIONS.map((theme) => (
                <button
                  key={theme}
                  type="button"
                  onClick={() => setSelectedTheme(theme)}
                  className={`text-xs px-2.5 py-1.5 rounded-xs transition-colors font-medium border ${
                    selectedTheme === theme
                      ? "bg-forest text-sand-light border-forest shadow-xs font-semibold"
                      : "bg-canvas text-charcoal hover:bg-sand-light border-sand-border"
                  }`}
                >
                  {theme}
                </button>
              ))}
            </div>
          </div>

          {/* Duration Filter */}
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-wider text-charcoal-light block">
              Duration
            </label>
            <div className="flex flex-wrap gap-1.5">
              {DURATION_OPTIONS.map((duration) => (
                <button
                  key={duration}
                  type="button"
                  onClick={() => setSelectedDuration(duration)}
                  className={`text-xs px-2.5 py-1.5 rounded-xs transition-colors font-medium border ${
                    selectedDuration === duration
                      ? "bg-forest text-sand-light border-forest shadow-xs font-semibold"
                      : "bg-canvas text-charcoal hover:bg-sand-light border-sand-border"
                  }`}
                >
                  {duration}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Program Results Grid */}
      {filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredExperiences.map((experience) => (
            <ProgramCard key={experience.id} experience={experience} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-canvas-card border border-sand-border rounded-xs p-12 text-center space-y-4 max-w-xl mx-auto">
          <div className="w-12 h-12 rounded-full bg-sand-light flex items-center justify-center text-forest mx-auto">
            <Search className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-xl text-forest-dark">
            No learning journeys match these filters
          </h3>
          <p className="text-sm text-charcoal-muted max-w-md mx-auto">
            Try adjusting your grade level, theme or search query, or request a custom-designed curriculum journey for your school.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button variant="secondary" size="sm" onClick={handleReset}>
              Reset Filters
            </Button>
            <Button variant="primary" size="sm" href="/plan-a-program">
              Design Custom Program
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
