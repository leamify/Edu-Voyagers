export interface FrameworkStep {
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  studentAction: string;
  classroomConnection: string;
  iconName: string;
}

export interface CurriculumDomain {
  domain: string;
  subject: string;
  fieldApplication: string;
  toolsUsed: string[];
  cognitiveOutcome: string;
}

export interface SkillPillar {
  title: string;
  category: "Cognitive" | "Social-Emotional" | "Leadership" | "Environmental";
  description: string;
  realWorldContext: string;
}
