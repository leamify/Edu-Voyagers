export interface StakeholderRole {
  id: string;
  role: string;
  title: string;
  tagline: string;
  keyConcerns: string[];
  howWeDeliver: string[];
  ctaLabel: string;
}

export const stakeholderRoles: StakeholderRole[] = [
  {
    id: "principals",
    role: "Principals & Management",
    title: "Institutional Reputation & Child Safeguarding",
    tagline: "Total operational accountability, zero compromise on safety, and clear pedagogical value.",
    keyConcerns: [
      "Mitigating institutional liability and physical risk for students",
      "Ensuring real academic depth that justifies out-of-classroom instructional time",
      "Seamless operational execution without placing administrative burden on school staff",
    ],
    howWeDeliver: [
      "Rigorous safety protocols, background-verified staff, and documented emergency protocols",
      "Curriculum-mapped programs aligned directly with CBSE, ICSE, Cambridge, or IB syllabus outcomes",
      "Turnkey management including verified transport, sanitized lodging, and expert field educators",
    ],
    ctaLabel: "Request Principal's Dossier",
  },
  {
    id: "teachers",
    role: "Teachers & Subject Heads",
    title: "Curriculum Integration & Active Field Classrooms",
    tagline: "Turn theoretical syllabus concepts into indelible, hands-on scientific and historical discoveries.",
    keyConcerns: [
      "Aligning field activities directly with textbook learning milestones",
      "Active engagement where every student participates rather than passive sightseeing",
      "Assistance with student management so teachers can focus on pedagogical mentoring",
    ],
    howWeDeliver: [
      "Customized pre-trip lesson plans, student field ledgers, and post-trip assessment rubrics",
      "Small-group inquiry pods led by specialized naturalists, historians, and STEM educators",
      "High adult-to-student chaperone ratios allowing teachers to observe and mentor freely",
    ],
    ctaLabel: "Explore Curriculum Mapping",
  },
  {
    id: "coordinators",
    role: "Activity & Trip Coordinators",
    title: "Seamless Planning & Logistics Execution",
    tagline: "From parent consent forms to dietary management, we eliminate the operational headache.",
    keyConcerns: [
      "Complex logistical coordination across transport, accommodation, and vendor audits",
      "Managing parent queries, consent workflows, and medical disclosures",
      "Real-time visibility into itinerary adherence and student well-being",
    ],
    howWeDeliver: [
      "Dedicated EduVoyagers Journey Manager assigned as your single point of contact from day one",
      "Digital parent orientation kits, medical disclosure templates, and packing checklists",
      "Live updates, verified GPS-tracked fleet, and transparent scheduling",
    ],
    ctaLabel: "Schedule Coordinator Briefing",
  },
  {
    id: "parents",
    role: "Parents & Guardians",
    title: "Safety Transparency & Student Transformation",
    tagline: "Watch your child return home more confident, independent, empathetic, and inspired.",
    keyConcerns: [
      "Is my child safe, supervised, and cared for at all times?",
      "Will dietary, hygiene, and medical requirements be strictly respected?",
      "How will this journey benefit my child's personal growth and worldview?",
    ],
    howWeDeliver: [
      "POCSO-aware safeguarding, female chaperones, and strict 1:7 to 1:8 supervision ratios",
      "Filtered RO/mineral water, nutritious balanced meals, and vetted secure accommodations",
      "Measurable character outcomes: independence, grit, environmental ethics, and peer collaboration",
    ],
    ctaLabel: "Read Parent Safety Guide",
  },
];

export const pilotProgramModels = [
  {
    level: "Option 01",
    title: "1-Day Local Micro-Field Trip",
    duration: "Single Day (7–8 Hours)",
    description: "An easy, low-risk way to experience EduVoyagers pedagogy in local biodiversity reserves, urban innovation hubs, or historical monuments without overnight travel.",
    features: ["Local transportation & meals included", "Junior Field Notebook provided", "Ideal for Grades 3–8 to test student responsiveness"],
  },
  {
    level: "Option 02",
    title: "In-School Experiential Workshop",
    duration: "Half-Day / Full-Day on Campus",
    description: "We bring mobile optical telescopes, stream water test labs, or topography simulation kits directly into your school campus or sports grounds.",
    features: ["Zero off-campus travel logistics", "Engages entire grade cohorts simultaneously", "Direct teacher participation"],
  },
  {
    level: "Option 03",
    title: "Multi-Day Residential Expedition",
    duration: "3 to 5 Days",
    description: "Our signature immersive expeditions in the Himalayas, Western Ghats, Ladakh, or Rajasthan for transformative experiential learning.",
    features: ["Complete turnkey logistics", "Full day-by-day curriculum integration", "Dedicated Journey Manager & First Responders"],
  },
];
