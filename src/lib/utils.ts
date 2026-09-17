import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatGradeRange(grades: string[]): string {
  if (!grades || grades.length === 0) return "All Grades";
  if (grades.length === 1) return grades[0];
  return `${grades[0]} – ${grades[grades.length - 1]}`;
}
