import { GradeCategory, ProgramDuration, ProgramTheme } from "./experience";

export interface ItineraryDay {
  dayNumber: number;
  title: string;
  theme: string;
  activities: string[];
  learningFocus: string[];
  reflectionPrompt?: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  heroImage: string;
  galleryImages: string[];
  grades: string;
  gradeCategory: GradeCategory;
  duration: string;
  durationCategory: ProgramDuration;
  themes: ProgramTheme[];
  location: string;
  state: string;
  elevationOrTerrain?: string;
  bestSeason?: string;
  whyThisExperience: string;
  overview: string;
  learningObjectives: string[];
  dayByDayItinerary: ItineraryDay[];
  skillsDeveloped: {
    title: string;
    description: string;
  }[];
  curriculumConnections: {
    subject: string;
    topics: string[];
    frameworkAlignment: string; // e.g. "CBSE Class 7-9 Science/Geography, ICSE/IB Middle Years"
  }[];
  safetyConsiderations: string[];
  takeaways: string[];
}
