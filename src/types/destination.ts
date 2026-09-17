import { ProgramTheme } from "./experience";

export type DestinationCategory =
  | "Himalayas"
  | "Western Ghats & Forests"
  | "Heritage Cities"
  | "Rural Communities"
  | "Astronomy Locations"
  | "Science & Innovation Centres"
  | "Coastal Ecosystems"
  | "National Parks";

export interface Destination {
  id: string;
  slug: string;
  name: string;
  state: string;
  category: DestinationCategory;
  tagline: string;
  description: string;
  image: string;
  learningThemes: ProgramTheme[];
  suitableGrades: string;
  typicalDuration: string;
  terrainType: string;
  experienceTypes: string[];
  keyHighlights: string[];
  programCount: number;
}
