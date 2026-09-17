export type GradeCategory = "Grades 1–4" | "Grades 5–6" | "Grades 7–9" | "Grades 10–12";
export type ProgramTheme = "Nature" | "STEM" | "Culture" | "Adventure" | "Leadership" | "Community";
export type ProgramDuration = "Half Day" | "1 Day" | "2–3 Days" | "4+ Days";

export interface Experience {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  grades: string;
  gradeCategory: GradeCategory;
  duration: string;
  durationCategory: ProgramDuration;
  themes: ProgramTheme[];
  location: string;
  region: string;
  featured?: boolean;
  learningOutcomes: string[];
  curriculumTags: string[];
}
