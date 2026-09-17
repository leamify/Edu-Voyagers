export interface SafetyPillar {
  id: string;
  title: string;
  shortDescription: string;
  keyProtocols: string[];
  operationalStandard: string;
  iconName: string;
}

export const safetyPillarsData: SafetyPillar[] = [
  {
    id: "child-protection",
    title: "Child Protection & Safeguarding",
    shortDescription: "A zero-tolerance, structured safeguarding framework ensuring physical, emotional, and psychological safety for all students.",
    keyProtocols: [
      "Rigorous 100% background and reference verification for all field staff, instructors, and drivers",
      "POCSO-aware operating procedures with mandatory safeguarding briefings for every team member",
      "Strict gender-segregated accommodation zones with dedicated female and male teacher chaperones",
      "Zero-isolated-contact rule: Staff never interact with individual students in private or enclosed spaces",
    ],
    operationalStandard: "Strict internal safeguarding code of conduct adhering to national child safety principles.",
    iconName: "ShieldCheck",
  },
  {
    id: "medical-preparedness",
    title: "Medical Preparedness & Response",
    shortDescription: "Comprehensive medical profiles, on-site first-aid readiness, and pre-mapped emergency escalation corridors.",
    keyProtocols: [
      "Pre-departure medical history documentation including allergies, dietary needs, and ongoing medications",
      "Every expedition team includes designated Wilderness First Aid (WFA) trained staff",
      "Comprehensive trauma, allergic reaction, and high-altitude medical kits on every vehicle and trail",
      "Pre-mapped emergency evacuation routes with designated district multi-specialty hospitals within 45 minutes",
    ],
    operationalStandard: "Standardized medical checklist and emergency escalation procedure verified before every journey.",
    iconName: "HeartPulse",
  },
  {
    id: "trip-safety",
    title: "Trip Safety & Risk Management",
    shortDescription: "Proactive environmental assessments, equipment auditing, and strict supervision ratios across all terrains.",
    keyProtocols: [
      "High supervision ratio: Typically 1 adult chaperone (educator/faculty) for every 7 to 8 students",
      "Dynamic risk assessment (DRA) conducted daily for weather, river levels, and trail stability",
      "Mandatory buddy system enforced at all times—zero unescorted wanderings allowed",
      "Commercial-grade audited transport: GPS-tracked vehicles, speed governors, and verified safety belts",
    ],
    operationalStandard: "Daily dynamic risk assessments logged by the lead field coordinator.",
    iconName: "Compass",
  },
  {
    id: "parent-communication",
    title: "Parent Communication & Transparency",
    shortDescription: "Clear pre-trip briefings, structured real-time updates, and an always-available 24/7 emergency coordination desk.",
    keyProtocols: [
      "Comprehensive parent orientation deck and detailed kit list shared 3 weeks prior to travel",
      "Dedicated school-specific WhatsApp/SMS broadcast for scheduled daily check-ins and photo logs",
      "24/7 dedicated central emergency coordination desk reachable throughout the program",
      "Post-journey debrief report and student field feedback shared with school leadership",
    ],
    operationalStandard: "Scheduled daily communication cadence without disrupting student focus and learning immersion.",
    iconName: "Users",
  },
];

export const safetyChecklistItems = [
  { label: "Faculty-to-Student Ratio", value: "1:7 to 1:8 Max" },
  { label: "Emergency Response Window", value: "< 45 Min to Care Hub" },
  { label: "Staff Background Verification", value: "100% Pre-Screened" },
  { label: "Central Coordination Desk", value: "24/7 Active Operations" },
];
