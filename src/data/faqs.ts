export interface FAQItem {
  question: string;
  answer: string;
  category: "Programs" | "Safety" | "Schools" | "Parents" | "Travel" | "Learning";
}

export const faqsData: FAQItem[] = [
  {
    category: "Programs",
    question: "How is EduVoyagers different from a standard school tour or travel agency?",
    answer: "EduVoyagers is an experiential education company, not a travel booking agency. Every program is designed around clear learning objectives mapped to school curricula (CBSE, ICSE, Cambridge, IB). Our journeys are led by subject matter educators, field naturalists, and outdoor instructors who facilitate structured inquiry, hands-on scientific data collection, and reflective debriefs—turning travel into an active classroom.",
  },
  {
    category: "Programs",
    question: "Can journeys be customized to match our school's specific curriculum topics?",
    answer: "Yes, absolutely. We work closely with school academic coordinators and subject heads to tailor learning objectives, field exercises, and student journals to align precisely with your ongoing academic term topics (e.g. Physical Geography, Medieval History, Ecology, or Physics).",
  },
  {
    category: "Programs",
    question: "What is the recommended cohort size for an EduVoyagers journey?",
    answer: "We typically operate cohort groups ranging from 25 to 60 students per batch, subdivided into smaller inquiry pods of 7 to 8 students per dedicated educator/chaperone to ensure maximum participation, safety, and personal mentoring.",
  },
  {
    category: "Safety",
    question: "What is the chaperone and adult-to-student supervision ratio?",
    answer: "We maintain a strict ratio of 1 adult (combining EduVoyagers field educators, certified outdoor facilitators, and visiting school faculty) for every 7 to 8 students. Furthermore, female chaperones are dedicated to all female student cohorts with separate, secure accommodation zones.",
  },
  {
    category: "Safety",
    question: "How are medical emergencies handled on remote trails or field stations?",
    answer: "Every journey team is accompanied by Wilderness First Aid (WFA) trained staff equipped with comprehensive trauma and allergic reaction medical kits. Before any program commences, emergency evacuation corridors are mapped with dedicated 24/7 transport and pre-vetted multi-specialty district hospitals within a 45-minute radius.",
  },
  {
    category: "Safety",
    question: "How are staff and vendor backgrounds verified?",
    answer: "All EduVoyagers staff, outdoor instructors, and regular vendor partners undergo 100% background checks, identity verification, and mandatory POCSO-aware child safeguarding training before interacting with students.",
  },
  {
    category: "Schools",
    question: "How can a school get started with a pilot program?",
    answer: "Schools can start with a low-friction 1-day local micro-field trip or an in-school experiential workshop before committing to a multi-day residential journey. This allows management and teachers to observe student engagement and operational rigor firsthand.",
  },
  {
    category: "Schools",
    question: "What administrative support do you provide to school coordinators?",
    answer: "We provide complete turnkey support: digital parent briefing decks, custom consent forms, packing checklists, dietary and medical collection sheets, GPS-tracked transportation, and a dedicated Journey Manager as your single point of contact.",
  },
  {
    category: "Schools",
    question: "Do you provide student assessment rubrics or field portfolios?",
    answer: "Yes. Every student receives a custom printed EduVoyagers Field Ledger prior to departure. Upon completion, students present their synthesis portfolios and receive certificates documenting the skills, curriculum topics, and competencies mastered.",
  },
  {
    category: "Parents",
    question: "How will I receive updates about my child during the journey?",
    answer: "We maintain a dedicated, scheduled broadcast channel (via school-approved WhatsApp or SMS) where parents receive daily morning status check-ins, evening activity summaries, and curated photo updates, while preserving student immersion in the program.",
  },
  {
    category: "Parents",
    question: "What hygiene and dietary protocols are maintained for food and drinking water?",
    answer: "We maintain strict food safety standards. Filtered RO/UV drinking water is provided at all times across transit and campsites. All meals are fresh, hygienic, nutritionally balanced, and tailored to accommodate documented student food allergies and vegetarian/special dietary needs.",
  },
  {
    category: "Parents",
    question: "Are mobile phones allowed for students during expeditions?",
    answer: "To ensure deep engagement with nature, peer collaboration, and safety awareness, we recommend a device-free or restricted-device policy during instructional hours. Emergency contact is always available 24/7 through the school teacher chaperones and EduVoyagers central operations desk.",
  },
  {
    category: "Learning",
    question: "How does the 5-step learning model work?",
    answer: "Our model progresses from: 1) Classroom Concept (academic grounding) → 2) Field Experience (encountering real environments) → 3) Hands-on Activity (measuring, testing, doing) → 4) Reflection (processing in journal circles) → 5) Learning Outcome (applying takeaways to exams, projects, and life).",
  },
  {
    category: "Travel",
    question: "What quality of transport and vehicles are used?",
    answer: "All transport consists of commercial-licensed, air-conditioned coaches equipped with verified seatbelts, speed governors, GPS tracking, and experienced commercial drivers who undergo safety and speed-compliance briefings.",
  },
];
