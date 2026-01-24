
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb"; 
import { SkillNames } from "./constants"; 

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const PROJECT_SKILLS = {
  // Technical Skills
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },

  // CX Platforms & Tools
  zendesk: {
    title: "Zendesk",
    bg: "#03363d",
    fg: "white",
    icon: <span className="text-white font-bold">ZD</span>,
  },
  crisp: {
    title: "Crisp",
    bg: "#22c55e",
    fg: "white",
    icon: <span className="text-white font-bold">CR</span>,
  },
  n8n: {
    title: "n8n",
    bg: "#ea580c",
    fg: "white",
    icon: <span className="text-white font-bold">n8n</span>,
  },
  aiAgents: {
    title: "AI Agents",
    bg: "#6366f1",
    fg: "white",
    icon: <span className="text-white font-bold">AI</span>,
  },
  googleWorkspace: {
    title: "Google Workspace",
    bg: "#4285f4",
    fg: "white",
    icon: <span className="text-white font-bold">GW</span>,
  },
  msOffice: {
    title: "MS Office",
    bg: "#d83b01",
    fg: "white",
    icon: <span className="text-white font-bold">MS</span>,
  },
  slack: {
    title: "Slack",
    bg: "#4a154b",
    fg: "white",
    icon: <span className="text-white font-bold">SL</span>,
  },
  clickup: {
    title: "ClickUp",
    bg: "#7b68ee",
    fg: "white",
    icon: <span className="text-white font-bold">CU</span>,
  },
  zoom: {
    title: "Zoom",
    bg: "#2d8cff",
    fg: "white",
    icon: <span className="text-white font-bold">ZO</span>,
  },
  canva: {
    title: "Canva",
    bg: "#00C4CC",
    fg: "white",
    icon: <span className="text-white font-bold">CA</span>,
  },

  // CX Concepts
  csatNps: {
    title: "CSAT & NPS",
    bg: "#059669",
    fg: "white",
    icon: <span className="text-white font-bold">CN</span>,
  },
  slaManagement: {
    title: "SLA Management",
    bg: "#dc2626",
    fg: "white",
    icon: <span className="text-white font-bold">SL</span>,
  },
  processAutomation: {
    title: "Process Automation",
    bg: "#7c3aed",
    fg: "white",
    icon: <span className="text-white font-bold">PA</span>,
  },
  teamLeadership: {
    title: "Team Leadership",
    bg: "#0f172a",
    fg: "white",
    icon: <span className="text-white font-bold">TL</span>,
  },
  crossFunctional: {
    title: "Cross-functional",
    bg: "#6b21a8",
    fg: "white",
    icon: <span className="text-white font-bold">CF</span>,
  },
  clientOnboarding: {
    title: "Client Onboarding",
    bg: "#4f46e5",
    fg: "white",
    icon: <span className="text-white font-bold">CO</span>,
  },
  customerSatisfaction: {
    title: "Customer Satisfaction",
    bg: "#15803d",
    fg: "white",
    icon: <span className="text-white font-bold">CS</span>,
  },
  issueResolution: {
  title: "Issue Resolution",
  bg: "#334155",
  fg: "white",
  icon: <span className="text-white font-bold">IR</span>,
},
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "priyo-pay-cx",
    category: "Fintech CX Leadership",
    title: "Priyo Pay - CX Operations Transformation",
    src: "/assets/projects-screenshots/priyo-pay/landing.png",
    screenshots: ["dashboard.png", "automation.png", "metrics.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.zendesk,
        PROJECT_SKILLS.crisp,
        PROJECT_SKILLS.n8n,
        PROJECT_SKILLS.aiAgents,
      ],
      backend: [
        PROJECT_SKILLS.csatNps,
        PROJECT_SKILLS.slaManagement,
        PROJECT_SKILLS.processAutomation,
        PROJECT_SKILLS.teamLeadership,
      ],
    },
    live: "https://pay.priyo.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Leading CX Operations for Cross-Border Payment Platform
          </TypographyP>
          <TypographyP className="font-mono">
            Transformed customer experience operations for thousands of freelancers 
            and businesses handling international payments through strategic automation 
            and data-driven CX frameworks.
          </TypographyP>
          <ProjectsLinks live={this.live} />
          
          <TypographyH3 className="my-4 mt-8">AI-Powered Automation</TypographyH3>
          <p className="font-mono mb-2">
            Implemented RAG-based AI Agent + n8n automations reducing manual handling 
            by 50-70% and improving ticket resolution time from 24 hours to under 1 hour.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/priyo-pay/automation-1.png`,
              `${BASE_PATH}/priyo-pay/automation-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">KPI Framework & Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Built comprehensive KPI framework tracking CSAT, SLA compliance, backlog 
            management, and churn risk with real-time dashboards and performance insights.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/priyo-pay/dashboard-1.png`,
              `${BASE_PATH}/priyo-pay/metrics-1.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Multi-Platform Support</TypographyH3>
          <p className="font-mono mb-2">
            Managed Zendesk + Crisp for ticket handling and live chat with quality 
            standards boosting trust and reducing escalations by 40%.
          </p>
          <SlideShow images={[`${BASE_PATH}/priyo-pay/support-platforms.png`]} />

          <TypographyH3 className="my-4 mt-8">Compliance & Risk Management</TypographyH3>
          <p className="font-mono mb-2">
            Coordinated with Product, Risk, and Compliance teams on KYC/AML cases 
            maintaining 95%+ SLA and resolution compliance.
          </p>
          <SlideShow images={[`${BASE_PATH}/priyo-pay/compliance.png`]} />
        </div>
      );
    },
  },
  {
    id: "lc-ecommerce-operations",
    category: "E-commerce Operations",
    title: "LC Ecommerce - Client Experience Management",
    src: "/assets/projects-screenshots/lc-ecommerce/landing.png",
    screenshots: ["onboarding.png", "analytics.png", "crm.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.googleWorkspace,
        PROJECT_SKILLS.msOffice,
        PROJECT_SKILLS.canva,
      ],
      backend: [
        PROJECT_SKILLS.clientOnboarding,
        PROJECT_SKILLS.crossFunctional,
        PROJECT_SKILLS.customerSatisfaction,
      ],
    },
    live: "https://lc-ecommerce.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            End-to-End Client & Seller Experience Management
          </TypographyP>
          <TypographyP className="font-mono">
            Managed comprehensive client onboarding, relationship management, and 
            account optimization for e-commerce platform achieving significant 
            retention and revenue growth.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">Client Onboarding Excellence</TypographyH3>
          <p className="font-mono mb-2">
            Designed and implemented streamlined onboarding processes ensuring 
            100% compliance while reducing setup time by 35%.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/lc-ecommerce/onboarding-1.png`,
              `${BASE_PATH}/lc-ecommerce/onboarding-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Performance Optimization</TypographyH3>
          <p className="font-mono mb-2">
            Data-driven performance improvements increased task efficiency by 35% 
            while maintaining ≥30% profit margins.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/lc-ecommerce/analytics-1.png`,
              `${BASE_PATH}/lc-ecommerce/analytics-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Relationship Management</TypographyH3>
          <p className="font-mono mb-2">
            Primary point of contact resolving inquiries and driving long-term partnerships 
            resulting in 20-25% uplift in retention and repeat business.
          </p>
          <SlideShow images={[`${BASE_PATH}/lc-ecommerce/crm-dashboard.png`]} />

          <TypographyH3 className="my-4 mt-8">Cross-functional Coordination</TypographyH3>
          <p className="font-mono mb-2">
            Monitored KPIs and delivered actionable performance reports across 
            departments ensuring seamless operations.
          </p>
          <SlideShow images={[`${BASE_PATH}/lc-ecommerce/reports.png`]} />
        </div>
      );
    },
  },
  {
    id: "ostad-cx-transformation",
    category: "EdTech CX Leadership",
    title: "Ostad Ltd. - Learner Experience Transformation",
    src: "/assets/projects-screenshots/ostad/landing.png",
    screenshots: ["engagement.png", "framework.png", "team.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.zendesk,
        PROJECT_SKILLS.slack,
        PROJECT_SKILLS.clickup,
      ],
      backend: [
        PROJECT_SKILLS.teamLeadership,
        PROJECT_SKILLS.csatNps,
        PROJECT_SKILLS.processAutomation,
      ],
    },
    live: "https://ostad.app/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Transforming Learner Experience at Scale
          </TypographyP>
          <TypographyP className="font-mono">
            Led 10-member CX team supporting 5,000+ learners across 25+ batches, 
            revolutionizing engagement through structured frameworks and data-driven insights.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">3C Engagement Framework</TypographyH3>
          <p className="font-mono mb-2">
            Introduced proprietary 3C Engagement Framework boosting CSAT, NPS, and 
            retention rates while reducing response time to under 1 hour.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ostad/framework-1.png`,
              `${BASE_PATH}/ostad/framework-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Team Leadership & Coaching</TypographyH3>
          <p className="font-mono mb-2">
            Led and coached CX team achieving 85% course completion rate and 
            significantly improved learner satisfaction metrics.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/ostad/team-1.png`,
              `${BASE_PATH}/ostad/team-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Instructor Coordination</TypographyH3>
          <p className="font-mono mb-2">
            Coordinated 30+ instructors and daily operations for seamless live course 
            delivery handling 50+ daily student inquiries.
          </p>
          <SlideShow images={[`${BASE_PATH}/ostad/coordination.png`]} />

          <TypographyH3 className="my-4 mt-8">Multi-channel Support</TypographyH3>
          <p className="font-mono mb-2">
            Managed support across web portal and social media channels with 
            structured feedback loops and continuous improvement processes.
          </p>
          <SlideShow images={[`${BASE_PATH}/ostad/support-channels.png`]} />
        </div>
      );
    },
  },
  {
    id: "cm-work-solutions-ecommerce",
    category: "E-commerce Client Experience",
    title: "CM Work Solutions - Amazon & Walmart CX",
    src: "/assets/projects-screenshots/cm-work/landing.png",
    screenshots: ["accounts.png", "support.png", "performance.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.canva,
        PROJECT_SKILLS.googleWorkspace,
        PROJECT_SKILLS.msOffice,
      ],
      backend: [
        PROJECT_SKILLS.clientOnboarding,
        PROJECT_SKILLS.issueResolution,
        PROJECT_SKILLS.customerSatisfaction,
      ],
    },
    live: "https://cmworksolutions.com/",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            E-commerce Account Management Excellence
          </TypographyP>
          <TypographyP className="font-mono">
            Managed Amazon & Walmart seller accounts delivering exceptional client 
            experience through strategic sourcing, fulfillment optimization, and 
            data-backed performance improvements.
          </TypographyP>
          <TypographyP className="font-mono">
            Achieved 95% retention rate, 25% sales uplift, and 20% revenue growth 
            through systematic CX improvements.
          </TypographyP>
          <ProjectsLinks live={this.live} />

          <TypographyH3 className="my-4 mt-8">Account Onboarding Excellence</TypographyH3>
          <p className="font-mono mb-2">
            Onboarded 100+ accounts with 100% compliance while reducing errors 
            by 30% through standardized processes.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/cm-work/onboarding-1.png`,
              `${BASE_PATH}/cm-work/onboarding-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Client Support & Communication</TypographyH3>
          <p className="font-mono mb-2">
            Delivered prompt support to buyers and clients achieving 95% retention 
            rate and 30% increase in repeat engagements.
          </p>
          <SlideShow images={[`${BASE_PATH}/cm-work/support-dashboard.png`]} />

          <TypographyH3 className="my-4 mt-8">Performance Analytics</TypographyH3>
          <p className="font-mono mb-2">
            Provided data-backed reports and strategies improving KPIs by 18% 
            through continuous optimization and client feedback integration.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/cm-work/analytics-1.png`,
              `${BASE_PATH}/cm-work/analytics-2.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Visual Communication</TypographyH3>
          <p className="font-mono mb-2">
            Created compelling visual reports and client communication materials 
            using Canva enhancing clarity and engagement.
          </p>
          <SlideShow images={[`${BASE_PATH}/cm-work/visuals.png`]} />
        </div>
      );
    },
  },
];

export default projects;