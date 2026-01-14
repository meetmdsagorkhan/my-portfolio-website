// thoda zada ts ho gya idhar
export enum SkillNames {
  CUSTOMER_EXPERIENCE = "customer_experience",
  CX_OPERATIONS = "cx_operations",
  CLIENT_SUCCESS = "client_success",
  CUSTOMER_SUPPORT = "customer_support",
  CLIENT_ONBOARDING = "client_onboarding",
  CUSTOMER_JOURNEY = "customer_journey",
  RETENTION_STRATEGY = "retention_strategy",
  CSAT = "csat",
  NPS = "nps",
  SLA_MANAGEMENT = "sla_management",
  TICKET_MANAGEMENT = "ticket_management",
  ISSUE_RESOLUTION = "issue_resolution",
  ZENDESK = "zendesk",
  CRISP = "crisp",
  N8N = "n8n",
  AI_AGENTS = "ai_agents",
  CRM_SYSTEMS = "crm_systems",
  PROCESS_OPTIMIZATION = "process_optimization",
  CX_AUTOMATION = "cx_automation",
  SOP_DOCUMENTATION = "sop_documentation",
  KNOWLEDGE_BASE = "knowledge_base",
  PERFORMANCE_TRACKING = "performance_tracking",
  KPI_FRAMEWORK = "kpi_framework",
  CROSS_FUNCTIONAL_COLLABORATION = "cross_functional_collaboration",
  TEAM_LEADERSHIP = "team_leadership",
  COACHING = "coaching",
  CONFLICT_RESOLUTION = "conflict_resolution",
  FINTECH_CX = "fintech_cx",
  EDTECH_CX = "edtech_cx",
  ECOMMERCE_OPERATIONS = "ecommerce_operations",
  KYC_AML_SUPPORT = "kyc_aml_support",
  GOOGLE_WORKSPACE = "google_workspace",
  MS_OFFICE = "ms_office",
  SLACK = "slack",
  CLICKUP = "clickup",
  ZOOM = "zoom",
  CSAT_NPS = "csat_nps",
  PROCESS_AUTOMATION = "process_automation",
  CUSTOMER_RELATIONSHIP_MANAGEMENT = "customer_relationship_management",
  CROSS_FUNCTIONAL_COORDINATION = "cross_functional_coordination",
  LEARNER_ENGAGEMENT = "learner_engagement",
  CANVA = "canva",
  CUSTOMER_SATISFACTION = "customer_satisfaction",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
   [SkillNames.CUSTOMER_EXPERIENCE]: {
    id: 1,
    name: "customer_experience",
    label: "Customer Experience",
    shortDescription: "Designing and improving end-to-end customer journeys that build trust and satisfaction.",
    color: "#2563eb",
    icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
  },

  [SkillNames.CX_OPERATIONS]: {
    id: 2,
    name: "cx_operations",
    label: "CX Operations",
    shortDescription: "Scaling CX processes, workflows, and standards for high-volume operations.",
    color: "#1e40af",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
  },

  [SkillNames.CLIENT_SUCCESS]: {
    id: 3,
    name: "client_success",
    label: "Client Success",
    shortDescription: "Driving long-term client value through proactive support and relationship management.",
    color: "#0f766e",
    icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
  },

  [SkillNames.CUSTOMER_SUPPORT]: {
    id: 4,
    name: "customer_support",
    label: "Customer Support",
    shortDescription: "Delivering timely, accurate, and human-centered customer assistance.",
    color: "#0369a1",
    icon: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
  },

  [SkillNames.CLIENT_ONBOARDING]: {
    id: 5,
    name: "client_onboarding",
    label: "Client Onboarding",
    shortDescription: "Ensuring smooth, compliant, and frictionless onboarding experiences.",
    color: "#4f46e5",
    icon: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png",
  },

  [SkillNames.CUSTOMER_JOURNEY]: {
    id: 6,
    name: "customer_journey",
    label: "Customer Journey Mapping",
    shortDescription: "Mapping touchpoints to identify gaps, risks, and experience improvements.",
    color: "#7c3aed",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },

  [SkillNames.RETENTION_STRATEGY]: {
    id: 7,
    name: "retention_strategy",
    label: "Retention Strategy",
    shortDescription: "Reducing churn through structured follow-ups and experience improvements.",
    color: "#15803d",
    icon: "https://cdn-icons-png.flaticon.com/512/1041/1041876.png",
  },

  [SkillNames.CSAT]: {
    id: 8,
    name: "csat",
    label: "CSAT Management",
    shortDescription: "Monitoring and improving customer satisfaction through measurable actions.",
    color: "#ca8a04",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828640.png",
  },

  [SkillNames.NPS]: {
    id: 9,
    name: "nps",
    label: "NPS Management",
    shortDescription: "Using feedback loops to turn customer insights into service improvements.",
    color: "#a21caf",
    icon: "https://cdn-icons-png.flaticon.com/512/942/942759.png",
  },

  [SkillNames.SLA_MANAGEMENT]: {
    id: 10,
    name: "sla_management",
    label: "SLA Management",
    shortDescription: "Maintaining high SLA compliance across teams and workflows.",
    color: "#dc2626",
    icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
  },

  [SkillNames.TICKET_MANAGEMENT]: {
    id: 11,
    name: "ticket_management",
    label: "Ticket Management",
    shortDescription: "Handling high ticket volumes with structured prioritization and accuracy.",
    color: "#0284c7",
    icon: "https://cdn-icons-png.flaticon.com/512/2529/2529521.png",
  },

  [SkillNames.ISSUE_RESOLUTION]: {
    id: 12,
    name: "issue_resolution",
    label: "Issue Resolution",
    shortDescription: "Resolving complex customer issues with speed, clarity, and accountability.",
    color: "#334155",
    icon: "https://cdn-icons-png.flaticon.com/512/1159/1159633.png",
  },

  [SkillNames.ZENDESK]: {
    id: 13,
    name: "zendesk",
    label: "Zendesk",
    shortDescription: "Primary support platform for ticketing, SLAs, and CX reporting.",
    color: "#03363d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/zendesk/zendesk-original.svg",
  },

  [SkillNames.CRISP]: {
    id: 14,
    name: "crisp",
    label: "Crisp",
    shortDescription: "Live chat support for real-time customer engagement.",
    color: "#22c55e",
    icon: "https://avatars.githubusercontent.com/u/22401140?s=200&v=4",
  },

  [SkillNames.N8N]: {
    id: 15,
    name: "n8n",
    label: "n8n Automation",
    shortDescription: "Building automation workflows to reduce manual CX workload.",
    color: "#ea580c",
    icon: "https://avatars.githubusercontent.com/u/45487711?s=200&v=4",
  },

  [SkillNames.AI_AGENTS]: {
    id: 16,
    name: "ai_agents",
    label: "AI Agents",
    shortDescription: "Deploying AI-driven support automation and ticket triage.",
    color: "#6366f1",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
  },

  [SkillNames.TEAM_LEADERSHIP]: {
    id: 17,
    name: "team_leadership",
    label: "Team Leadership",
    shortDescription: "Leading, coaching, and scaling CX teams for consistent performance.",
    color: "#0f172a",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135710.png",
  },

  [SkillNames.CROSS_FUNCTIONAL_COLLABORATION]: {
    id: 18,
    name: "cross_functional_collaboration",
    label: "Cross-functional Collaboration",
    shortDescription: "Working closely with Product, Risk, and Compliance teams.",
    color: "#475569",
    icon: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
  },

  [SkillNames.KYC_AML_SUPPORT]: {
    id: 19,
    name: "kyc_aml_support",
    label: "KYC & AML Support",
    shortDescription: "Handling sensitive compliance cases with speed and accuracy.",
    color: "#7f1d1d",
    icon: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png",
  },
  
  [SkillNames.CSAT_NPS]: {
  id: 25,
  name: "csat_nps",
  label: "CSAT & NPS",
  shortDescription: "Measuring and improving customer satisfaction (CSAT) and Net Promoter Score (NPS) through feedback loops.",
  color: "#059669",  // Green for positive feedback/satisfaction
  icon: "https://cdn-icons-png.flaticon.com/512/1828/1828961.png",  // Smiley/feedback icon (common for satisfaction metrics)
},

[SkillNames.PROCESS_AUTOMATION]: {
  id: 26,
  name: "process_automation",
  label: "Process Automation",
  shortDescription: "Automating workflows, support processes, and repetitive tasks using tools like n8n and AI agents.",
  color: "#7c3aed",  // Purple for tech/automation innovation
  icon: "https://uxwing.com/wp-content/themes/uxwing/download/technology/rpa-robotic-process-automation-icon.png",  // Robotic process automation icon
},

[SkillNames.CUSTOMER_RELATIONSHIP_MANAGEMENT]: {
  id: 28,
  name: "customer_relationship_management",
  label: "CRM",
  shortDescription: "Building long-term client relationships, retention strategies, and personalized engagement.",
  color: "#4338ca",  // Indigo for trust & relationships
  icon: "https://cdn-icons-png.flaticon.com/512/1041/1041919.png",  // Handshake/CRM-style relationship icon
},

[SkillNames.CROSS_FUNCTIONAL_COORDINATION]: {
  id: 30,
  name: "cross_functional_coordination",
  label: "Cross-functional Coordination",
  shortDescription: "Collaborating across teams (Product, Risk, Compliance, Instructors) for seamless operations.",
  color: "#6b21a8",  // Purple for teamwork & integration
  icon: "https://cdn-icons-png.flaticon.com/512/876/876225.png",  // Network/collaboration icon
},

[SkillNames.LEARNER_ENGAGEMENT]: {
  id: 35,
  name: "learner_engagement",
  label: "Learner Engagement",
  shortDescription: "Enhancing student interaction, satisfaction, and course completion through active support and frameworks.",
  color: "#0ea5e9",  // Bright blue for education & engagement
  icon: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",  // Group/engagement icon (adaptable for learners)
},

[SkillNames.CANVA]: {
  id: 36,
  name: "canva",
  label: "Canva",
  shortDescription: "Graphic design tool for creating visuals, reports, and client communication materials.",
  color: "#00C4CC",  // Canva official turquoise/teal primary color
  icon: "https://1000logos.net/wp-content/uploads/2022/06/Canva-Logo.png",  // Official Canva logo PNG
},

[SkillNames.CUSTOMER_SATISFACTION]: {
  id: 32,
  name: "customer_satisfaction",
  label: "Customer Satisfaction",
  shortDescription: "Delivering high-quality, timely support to achieve positive feedback, loyalty, and reduced churn.",
  color: "#15803d",  // Green for satisfaction & success
  icon: "https://cdn-icons-png.flaticon.com/512/1828/1828961.png",  // Classic smiley/positive feedback icon
},
  

};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  location: string;
  website: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "July 2025",
    endDate: "Present",
    title: "Team Lead - Customer Experience",
    company: "Priyo Pay",
    location: "Dhaka, Bangladesh",
    website: "https://pay.priyo.com/",
    description: [
      "Leading CX for cross-border payment platform serving thousands of freelancers & businesses.",
      "Implemented RAG-based AI Agent + n8n automations → reduced manual handling ~50 to 70%, ticket resolution from 24h to <1h.",
      "Built KPI framework (CSAT, SLA, backlog, churn risk), SOPs, knowledge base & self-service improvements.",
      "Managed Zendesk + Crisp for ticket handling, live chat & quality standards to boost trust & reduce escalations.",
      "Coordinated with Product/Risk/Compliance on KYC/AML cases; maintained 95%+ SLA & resolution compliance.",
    ],
    skills: [
      SkillNames.ZENDESK,
      SkillNames.CRISP,
      SkillNames.N8N,
      SkillNames.CUSTOMER_EXPERIENCE,     // from CX & CRM Skills
      SkillNames.TEAM_LEADERSHIP,         // implied from leadership role
      SkillNames.SLA_MANAGEMENT,          // from achievements
      SkillNames.CSAT_NPS,                // from skills & achievements
      SkillNames.PROCESS_AUTOMATION,
    ],
  },
  {
    id: 2,
    startDate: "August 2022",
    endDate: "Present",
    title: "Operations Manager - Client Experience",
    company: "LC Ecommerce",
    location: "USA (Remote)",
    website: "https://lc-ecommerce.com/",
    description: [
      "End-to-end client & seller onboarding, relationship management and account optimization.",
      "Primary point of contact — resolving inquiries and driving long-term partnerships.",
      "Data-driven performance improvements → increased task efficiency by 35%.",
      "Maintained ≥30% profit margins, 20 to 25% uplift in retention, revenue & repeat business.",
      "Monitored KPIs and delivered actionable performance reports.",
    ],
    skills: [
      SkillNames.GOOGLE_WORKSPACE,        // reporting & daily ops
      SkillNames.MS_OFFICE,               // reporting & coordination
      SkillNames.CLIENT_ONBOARDING,
      SkillNames.CUSTOMER_RELATIONSHIP_MANAGEMENT,
      SkillNames.PERFORMANCE_TRACKING,
      SkillNames.CROSS_FUNCTIONAL_COORDINATION,
    ],
  },
  {
    id: 3,
    startDate: "July 2023",
    endDate: "June 2025",
    title: "Team Lead - Customer Experience",
    company: "Ostad Ltd.",
    location: "Dhaka, Bangladesh",
    website: "https://ostad.app/",
    description: [
      "Led 10-member CX team supporting 5,000+ learners across 25+ batches.",
      "Reduced response time to <1 hour; improved course completion to 85%.",
      "Introduced 3C Engagement Framework + structured feedback → boosted CSAT, NPS & retention.",
      "Coordinated 30+ instructors and daily operations for seamless live course delivery.",
      "Handled 50+ daily student inquiries across web portal & social media.",
    ],
    skills: [
      SkillNames.ZENDESK,                 // ticketing & support (implied from role)
      SkillNames.SLACK,                   // team coordination (common in such roles)
      SkillNames.CLICKUP,                 // task & workflow management
      SkillNames.CUSTOMER_EXPERIENCE,
      SkillNames.TEAM_LEADERSHIP,
      SkillNames.CSAT_NPS,
      SkillNames.LEARNER_ENGAGEMENT,      // from description
    ],
  },
  {
    id: 4,
    startDate: "September 2020",
    endDate: "December 2021",
    title: "Executive - eCommerce, Client Experience",
    company: "CM Work Solutions",
    location: "Remote (USA/CA/UK clients)",
    website: "https://cmworksolutions.com/",
    description: [
      "Managed Amazon & Walmart seller accounts — sourcing, fulfillment, optimization.",
      "Delivered prompt support to buyers & clients → 95% retention rate.",
      "Achieved 25% sales uplift, 20% revenue growth, 30% more repeat engagements.",
      "Onboarded 100+ accounts with 100% compliance; reduced errors by 30%.",
      "Provided data-backed reports & strategies to improve KPIs by 18%.",
    ],
    skills: [
      SkillNames.CANVA,                   // visuals & client comms
      SkillNames.GOOGLE_WORKSPACE,
      SkillNames.MS_OFFICE,
      SkillNames.CLIENT_ONBOARDING,
      SkillNames.ISSUE_RESOLUTION,
      SkillNames.CUSTOMER_SATISFACTION,
    ],
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

