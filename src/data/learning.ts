import { CurriculumDomain, FrameworkStep, SkillPillar } from "@/types/learning";

export const learningFrameworkSteps: FrameworkStep[] = [
  {
    stepNumber: "01",
    title: "Classroom Concept",
    tagline: "Academic grounding before departure",
    description: "Every journey begins with core academic concepts introduced in regular school curricula—such as contour lines, photosynthesis, medieval trade, or optics.",
    studentAction: "Reviewing foundational hypotheses and pre-trip briefing packs in school.",
    classroomConnection: "Aligned with CBSE, ICSE, Cambridge & IB syllabus outcomes.",
    iconName: "BookOpen",
  },
  {
    stepNumber: "02",
    title: "Field Experience",
    tagline: "Encountering the concept in the real world",
    description: "Students step directly into the physical environment—standing on an actual alpine ridge, entering a 500-year-old stepwell, or observing a rainforest canopy.",
    studentAction: "Observing, orienting, and sensing physical scale and environmental context.",
    classroomConnection: "Translates abstract 2D textbook drawings into tangible 3D reality.",
    iconName: "Compass",
  },
  {
    stepNumber: "03",
    title: "Hands-on Activity",
    tagline: "Scientific inquiry through active doing",
    description: "Students take active charge: aligning prismatic compasses, sampling water pH, setting optical telescopes, or carving woodblocks with artisans.",
    studentAction: "Collecting real data, recording samples, and operating field tools.",
    classroomConnection: "Reinforces kinesthetic and empirical learning retention.",
    iconName: "Hammer",
  },
  {
    stepNumber: "04",
    title: "Reflection",
    tagline: "Structured debrief and peer articulation",
    description: "Facilitated daily campfire circles, field journal entries, and peer debates allow students to process what worked, what failed, and how they adapted.",
    studentAction: "Writing in field ledgers, sharing insights, and discussing team dynamics.",
    classroomConnection: "Builds metacognition, self-awareness, and emotional maturity.",
    iconName: "Sparkles",
  },
  {
    stepNumber: "05",
    title: "Learning Outcome",
    tagline: "Lifelong skills and academic mastery",
    description: "Students return with enhanced academic clarity, tangible artifacts (field journals, test portfolios, crafts), and measurable growth in resilience and teamwork.",
    studentAction: "Presenting synthesis portfolios to peers, teachers, and parents.",
    classroomConnection: "Elevates school performance and long-term character development.",
    iconName: "GraduationCap",
  },
];

export const curriculumCrosswalk: CurriculumDomain[] = [
  {
    domain: "Earth & Physical Geography",
    subject: "Geography / Social Science",
    fieldApplication: "High-Altitude Orienteering & Contour Navigation in Uttarakhand",
    toolsUsed: ["1:25,000 Survey Maps", "Prismatic Silva Compass", "Altimeters"],
    cognitiveOutcome: "Translating 2D topographic contour lines into 3D mental landscape terrain models.",
  },
  {
    domain: "Life Sciences & Ecosystems",
    subject: "Biology / Environmental Science",
    fieldApplication: "Canopy Transects & Stream Invertebrate Biomonitoring in Agumbe",
    toolsUsed: ["Botanical Hand Lenses", "Water Chemistry Testing Kits", "Quadrat Frames"],
    cognitiveOutcome: "Empirical verification of trophic cascades and bio-indicators of ecosystem health.",
  },
  {
    domain: "Applied Physics & Astronomy",
    subject: "Physics & General Science",
    fieldApplication: "Deep-Sky Telescope Calibration & Optical Spectroscopy in Ladakh",
    toolsUsed: ["Computerized Dobsonian Telescopes", "H-Alpha Solar Filters", "Diffraction Spectroscopes"],
    cognitiveOutcome: "Direct calculation of celestial coordinates, focal ratios, and stellar spectra.",
  },
  {
    domain: "History & Medieval Engineering",
    subject: "History & Architecture",
    fieldApplication: "Subterranean Stepwell Hydrology & Fortress Defense in Rajasthan",
    toolsUsed: ["Acoustic Decibel Meters", "Laser Distance Measurers", "Oral History Guides"],
    cognitiveOutcome: "Understanding how geography and resource scarcity drove medieval technological innovation.",
  },
  {
    domain: "Civic Systems & Agronomy",
    subject: "Economics & Social Studies",
    fieldApplication: "Participatory Rural Appraisal & Soil Microbiome Audits in Wardha",
    toolsUsed: ["Soil NPK Testing Kits", "Social Resource Mapping Grids", "PRA Interview Frameworks"],
    cognitiveOutcome: "Grasping decentralized grassroots governance and sustainable circular economies.",
  },
];

export const lifeSkillsPillars: SkillPillar[] = [
  {
    title: "Resilience & Adaptability",
    category: "Social-Emotional",
    description: "Thriving beyond comfort zones, managing unexpected weather, and viewing challenges as learning opportunities.",
    realWorldContext: "Tested daily on mountain trails and during outdoor camp setup.",
  },
  {
    title: "Collaborative Leadership",
    category: "Leadership",
    description: "Rotating team roles, listening to diverse peer voices, and building group consensus under time constraints.",
    realWorldContext: "Practiced during student-led navigation and group research challenges.",
  },
  {
    title: "Scientific Rigor & Inquiry",
    category: "Cognitive",
    description: "Formulating hypotheses, gathering uncorrupted field data, and drawing evidence-based conclusions.",
    realWorldContext: "Applied in stream bio-sampling, quadrat counts, and astronomical tracking.",
  },
  {
    title: "Environmental Stewardship",
    category: "Environmental",
    description: "Deep respect for fragile ecosystems and zero-waste Leave No Trace operating principles.",
    realWorldContext: "Practiced through campsite waste audits and natural habitat protection protocols.",
  },
  {
    title: "Empathetic Communication",
    category: "Social-Emotional",
    description: "Engaging respectfully with artisans, village elders, and fellow students from diverse backgrounds.",
    realWorldContext: "Cultivated through rural dialogues and oral history interviews.",
  },
  {
    title: "Critical Spatial Reasoning",
    category: "Cognitive",
    description: "Navigating unfamiliar physical environments using landmarks, maps, and spatial cues.",
    realWorldContext: "Developed during trail orienteering and archaeological grid analysis.",
  },
];
