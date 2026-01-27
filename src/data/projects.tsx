"use client";

import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, Download, Mail, Tag, MessageSquare, Shield, Cpu, Clock, BarChart, Database, PieChart, Calendar, Zap, AlertCircle, Code, GitBranch, Bot, Brain, Users, Workflow } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import {
  SiOpenai,
  SiZendesk,
  SiPostgresql,
  SiJavascript,
  SiNodedotjs,
  SiSupabase,
} from "react-icons/si";

const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ 
  repo, 
  workflow 
}: { 
  repo?: string; 
  workflow?: string 
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {workflow && (
        <a
          className="font-mono underline flex gap-2"
          href={workflow}
          download="zendesk-automation.json"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant={"outline"} size={"sm"}>
            Download Workflow JSON
            <Download className="ml-3 w-5 h-5" />
          </Button>
        </a>
      )}

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
  description?: string;
};

// --- DEFINED BEFORE USAGE ---
const PROJECT_SKILLS = {
  // Backend / Architecture
  n8n: {
    title: "n8n Automation",
    bg: "#ea580c",
    fg: "white",
    icon: (
      <img 
        src="https://n8n.io/brandguidelines/logo-white.svg" 
        alt="n8n Logo" 
        className="w-6 h-auto object-contain" 
      />
    ),
    description: "Workflow automation platform"
  },
  openAI: {
    title: "OpenAI GPT-4",
    bg: "#10a37f",
    fg: "white",
    icon: <SiOpenai className="text-white w-5 h-5" />,
    description: "Embeddings & Inference"
  },
  postgres: {
    title: "PostgreSQL",
    bg: "#336791",
    fg: "white",
    icon: <SiPostgresql className="text-white w-5 h-5" />,
    description: "Vector DB Storage"
  },
  supabase: {
    title: "Supabase",
    bg: "#3ecf8e",
    fg: "#1a1a1a",
    icon: <SiSupabase className="text-[#1a1a1a] w-5 h-5" />,
    description: "Vector Store"
  },
  zendesk: {
    title: "Zendesk API",
    bg: "#03363d",
    fg: "white",
    icon: <SiZendesk className="text-white w-5 h-5" />,
    description: "Ticket Management"
  },
  
  // Frontend / Features
  rag: {
    title: "RAG System",
    bg: "#8b5cf6",
    fg: "white",
    icon: <Cpu className="text-white w-5 h-5" />,
    description: "Retrieval-Augmented Gen"
  },
  webhooks: {
    title: "Webhooks",
    bg: "#0f172a",
    fg: "white",
    icon: (
      <img 
        src="https://img.icons8.com/?size=100&id=32917&format=png&color=000000" 
        alt="Webhook Icon" 
        className="w-4 h-4 object-contain invert" 
      />
    ),
    description: "Real-time Triggers"
  },
  javascript: {
    title: "JavaScript",
    bg: "#f7df1e",
    fg: "black",
    icon: <SiJavascript className="text-black w-5 h-5" />,
    description: "Data Transformation"
  },
  memory: {
    title: "Chat Memory",
    bg: "#7c3aed",
    fg: "white",
    icon: <MessageSquare className="text-white w-5 h-5" />,
    description: "Session Context"
  },
  classification: {
    title: "AI Classifier",
    bg: "#0891b2",
    fg: "white",
    icon: <Tag className="text-white w-5 h-5" />,
    description: "Ticket Routing"
  },
  security: {
    title: "Security Rules",
    bg: "#dc2626",
    fg: "white",
    icon: <Shield className="text-white w-5 h-5" />,
    description: "Policy Enforcement"
  },
  email: {
    title: "Email Handler",
    bg: "#6366f1",
    fg: "white",
    icon: <Mail className="text-white w-5 h-5" />,
    description: "Auto-Response"
  },
  // Analytics & Reporting Skills
  scheduling: {
    title: "Scheduled Automation",
    bg: "#059669",
    fg: "white",
    icon: <Clock className="text-white w-5 h-5" />,
    description: "Time-based workflow triggers"
  },
  dataAnalysis: {
    title: "Data Analysis",
    bg: "#7c3aed",
    fg: "white",
    icon: <BarChart className="text-white w-5 h-5" />,
    description: "Aggregation & reporting"
  },
  dataTables: {
    title: "Data Tables",
    bg: "#0ea5e9",
    fg: "white",
    icon: <Database className="text-white w-5 h-5" />,
    description: "Structured data storage"
  },
  batchProcessing: {
    title: "Batch Processing",
    bg: "#f97316",
    fg: "white",
    icon: <PieChart className="text-white w-5 h-5" />,
    description: "Large-scale data handling"
  },
  dateLogic: {
    title: "Date Logic",
    bg: "#6366f1",
    fg: "white",
    icon: <Calendar className="text-white w-5 h-5" />,
    description: "Time-based calculations"
  },
  // Chat & Communication Skills
  crispApi: {
    title: "Crisp API",
    bg: "#0891b2",
    fg: "white",
    icon: <MessageSquare className="text-white w-5 h-5" />,
    description: "Chat platform integration"
  },
  chatAnalysis: {
    title: "Chat Analysis",
    bg: "#10b981",
    fg: "white",
    icon: <BarChart className="text-white w-5 h-5" />,
    description: "Conversation intelligence"
  },
  // Integration & Automation Skills
  googleSheets: {
    title: "Google Sheets",
    bg: "#0f9d58",
    fg: "white",
    icon: <Database className="text-white w-5 h-5" />,
    description: "Spreadsheet automation"
  },
  apiIntegration: {
    title: "API Integration",
    bg: "#ff6b6b",
    fg: "white",
    icon: <ArrowUpRight className="text-white w-5 h-5" />,
    description: "External service connections"
  },
  automation: {
    title: "Workflow Automation",
    bg: "#4c1d95",
    fg: "white",
    icon: <Cpu className="text-white w-5 h-5" />,
    description: "Process automation"
  },
  dataProcessing: {
    title: "Data Processing",
    bg: "#0891b2",
    fg: "white",
    icon: <BarChart className="text-white w-5 h-5" />,
    description: "Data transformation"
  },
  conditionalLogic: {
    title: "Conditional Logic",
    bg: "#f59e0b",
    fg: "white",
    icon: <Tag className="text-white w-5 h-5" />,
    description: "Decision making"
  },
  errorHandling: {
    title: "Error Handling",
    bg: "#dc2626",
    fg: "white",
    icon: <Shield className="text-white w-5 h-5" />,
    description: "Exception management"
  },
  // AI & Chatbot Skills
  aiChatbot: {
    title: "AI Chatbot",
    bg: "#8b5cf6",
    fg: "white",
    icon: <Bot className="text-white w-5 h-5" />,
    description: "Conversational AI"
  },
  knowledgeBase: {
    title: "Knowledge Base",
    bg: "#3b82f6",
    fg: "white",
    icon: <Database className="text-white w-5 h-5" />,
    description: "Information repository"
  },
  workflowAutomation: {
    title: "Workflow Automation",
    bg: "#10b981",
    fg: "white",
    icon: <Workflow className="text-white w-5 h-5" />,
    description: "Process automation"
  },
  conversationalAI: {
    title: "Conversational AI",
    bg: "#f59e0b",
    fg: "white",
    icon: <MessageSquare className="text-white w-5 h-5" />,
    description: "Natural language processing"
  },
  userExperience: {
    title: "User Experience",
    bg: "#ec4899",
    fg: "white",
    icon: <Users className="text-white w-5 h-5" />,
    description: "UX design & interaction"
  },
  multiAgent: {
    title: "Multi-Agent System",
    bg: "#6366f1",
    fg: "white",
    icon: <Users className="text-white w-5 h-5" />,
    description: "Multiple agent coordination"
  },
  timezoneLogic: {
    title: "Timezone Logic",
    bg: "#14b8a6",
    fg: "white",
    icon: <Clock className="text-white w-5 h-5" />,
    description: "Time-based routing"
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
  workflow?: string;
};

// Component for the modal content
const ProjectContent = ({ workflow }: { workflow?: string }) => {
  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
        <TypographyP className="font-mono text-2xl text-center text-blue-800 dark:text-blue-300 mb-4">
          Production-Grade Support Automation System
        </TypographyP>
        <TypographyP className="font-mono text-gray-700 dark:text-gray-300 text-center">
          A fully automated Level 1 support agent handling 1000+ monthly tickets with 
          RAG-based knowledge retrieval and strict policy enforcement.
        </TypographyP>
      </div>
      
      <ProjectsLinks workflow={workflow} />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-600" />
            Workflow Architecture
          </TypographyH3>
          <ul className="font-mono space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">1</span>
              Zendesk webhook triggers on new ticket creation
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">2</span>
              Ticket data extracted and cleaned via JavaScript
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">3</span>
              OpenAI embeddings generated for query
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">4</span>
              Vector search against Supabase knowledge base
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">5</span>
              AI agent classifies & processes with RAG
            </li>
          </ul>
        </div>
        
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-red-600" />
            Security & Policy Rules
          </TypographyH3>
          <div className="font-mono text-sm space-y-3">
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 p-3 rounded">
              <span className="font-semibold text-red-700 dark:text-red-400">OTP Issues:</span>
              <span className="text-red-600 dark:text-red-300 ml-2">Silent treatment (no response)</span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 p-3 rounded">
              <span className="font-semibold text-blue-700 dark:text-blue-400">Email Change:</span>
              <span className="text-blue-600 dark:text-blue-300 ml-2">Policy-based rejection notice</span>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 p-3 rounded">
              <span className="font-semibold text-amber-700 dark:text-amber-400">Account Deletion:</span>
              <span className="text-amber-600 dark:text-amber-300 ml-2">Requires verification notice</span>
            </div>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
        <SiOpenai className="w-5 h-5 text-green-600" />
        AI-Powered Classification System
      </TypographyH3>
      <div className="font-mono mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded border border-border">
        Automated ticket classification with specific handling paths:
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-3">
          {[
            { label: "OTP", color: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200", icon: "🔒" },
            { label: "Email", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", icon: "✉️" },
            { label: "Deletion", color: "bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200", icon: "🗑️" },
            { label: "KYC", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200", icon: "📋" },
            { label: "General", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", icon: "💬" },
          ].map((item) => (
            <div key={item.label} className={`${item.color} p-2 rounded text-center text-xs font-medium`}>
              <div className="text-lg mb-1">{item.icon}</div>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
        <SiPostgresql className="w-5 h-5 text-blue-600" />
        Vector Search & Memory
      </TypographyH3>
      <div className="font-mono mb-2 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded border border-blue-200 dark:border-blue-800">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">Knowledge retrieval</h4>
            <ul className="text-sm space-y-1 dark:text-gray-300 text-gray-700">
              <li>• OpenAI text-embedding-3-small</li>
              <li>• Supabase vector store</li>
              <li>• Cosine similarity matching</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-indigo-800 dark:text-indigo-300 mb-2">Conversation Memory</h4>
            <ul className="text-sm space-y-1 dark:text-gray-300 text-gray-700">
              <li>• Postgres history tracking</li>
              <li>• Session management</li>
              <li>• Persistent context</li>
            </ul>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8">Workflow Visualizations</TypographyH3>
      <SlideShow
        images={[
          `${BASE_PATH}/zendesk-ai/Zendesk Automation 1.png`,
          `${BASE_PATH}/zendesk-ai/rag-logic.png`,
          `${BASE_PATH}/zendesk-ai/memory-storage.png`,
        ]}
      />

      <div className="mt-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-xl">
        <TypographyH3 className="text-green-800 dark:text-green-300 mb-4">Production Impact</TypographyH3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-blue-600">70%</div>
            <div className="text-gray-600 dark:text-gray-400">Resolution</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-green-600">&lt;2min</div>
            <div className="text-gray-600 dark:text-gray-400">Response</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-purple-600">99.8%</div>
            <div className="text-gray-600 dark:text-gray-400">Compliance</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-amber-600">30%↓</div>
            <div className="text-gray-600 dark:text-gray-400">Load</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const projects: Project[] = [
  {
    //Project 1
    id: "zendesk-rag-agent",
    category: "AI Automation",
    title: "Zendesk AI Support Automation for Fintech",
    src: "/assets/projects-screenshots/zendesk-ai/Zendesk Automation 1.png",
    screenshots: [
      "Zendesk Automation 1.png", 
      "rag-logic.png", 
      "memory-storage.png"
    ],
    skills: {
      backend: [
        PROJECT_SKILLS.n8n,
        PROJECT_SKILLS.zendesk,
        PROJECT_SKILLS.openAI,
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.rag,
      ],
      frontend: [
        PROJECT_SKILLS.classification,
        PROJECT_SKILLS.memory,
        PROJECT_SKILLS.security,
        PROJECT_SKILLS.email,
        PROJECT_SKILLS.webhooks,
        PROJECT_SKILLS.javascript,
      ],
    },
    live: "#",
    workflow: "/assets/workflows/zendesk-automation.json",
    content: <ProjectContent workflow="/assets/workflows/zendesk-automation.json" />
  },

  // Project 2
  {
    id: "zendesk-comment-automation",
    category: "AI Automation",
    title: "Zendesk Conversation Continuation Bot",
    src: "/assets/projects-screenshots/zendesk-ai/comment-automation-workflow.png",
    screenshots: [
      "comment-automation-workflow.png", 
      "comment-processing.png", 
      "agent-availability-check.png",
      "human-request-detection.png"
    ],
    skills: {
      backend: [
        PROJECT_SKILLS.n8n,
        PROJECT_SKILLS.zendesk,
        PROJECT_SKILLS.openAI,
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.memory,
        PROJECT_SKILLS.rag,
      ],
      frontend: [
        PROJECT_SKILLS.classification,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.webhooks,
        PROJECT_SKILLS.security,
        PROJECT_SKILLS.email,
      ],
    },
    live: "#",
    workflow: "/assets/workflows/zendesk-comment-automation.json",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border border-purple-100 dark:border-purple-800">
            <TypographyP className="font-mono text-2xl text-center text-purple-800 dark:text-purple-300 mb-4">
              Real-Time Conversation Management System
            </TypographyP>
            <TypographyP className="font-mono text-gray-700 dark:text-gray-300 text-center">
              An intelligent workflow that automatically processes new comments on existing tickets, 
              maintaining conversation context and escalating to human agents when needed.
            </TypographyP>
          </div>
          
          <ProjectsLinks workflow="/assets/workflows/zendesk-comment-automation.json" />
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TypographyH3 className="mb-4 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-600" />
                Comment Processing Flow
              </TypographyH3>
              <ul className="font-mono space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">1</span>
                  Zendesk webhook triggers on new comment addition
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">2</span>
                  Checks existing tags for "human_requested" flag
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">3</span>
                  Detects keyword "human" in comments for manual escalation
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">4</span>
                  Retrieves conversation history from memory
                </li>
                <li className="flex items-start gap-2">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded text-xs">5</span>
                  Processes with same strict policy rules as new tickets
                </li>
              </ul>
            </div>
            
            <div>
              <TypographyH3 className="mb-4 flex items-center gap-2">
                <Tag className="w-5 h-5 text-blue-600" />
                Smart Detection Features
              </TypographyH3>
              <div className="font-mono text-sm space-y-3">
                <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900 p-3 rounded">
                  <span className="font-semibold text-indigo-700 dark:text-indigo-400">Human Request Detection:</span>
                  <span className="text-indigo-600 dark:text-indigo-300 ml-2">Auto-tags tickets when user types "human"</span>
                </div>
                <div className="bg-green-50 dark:bg-green-950/30 border border-green-100 dark:border-green-900 p-3 rounded">
                  <span className="font-semibold text-green-700 dark:text-green-400">Time-Based Routing:</span>
                  <span className="text-green-600 dark:text-green-300 ml-2">Checks agent availability (10 AM – 3 AM Dhaka time)</span>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 p-3 rounded">
                  <span className="font-semibold text-amber-700 dark:text-amber-400">After-Hours Response:</span>
                  <span className="text-amber-600 dark:text-amber-300 ml-2">Sends friendly offline message outside working hours</span>
                </div>
              </div>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <SiJavascript className="w-5 h-5 text-yellow-600" />
            Time-Based Agent Availability Logic
          </TypographyH3>
          <div className="font-mono mb-4">
            <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
              <pre>{`// Check if agents are available (10 AM – 3 AM Dhaka time)
const dhakaTime = new Date().toLocaleString("en-US", { 
  timeZone: "Asia/Dhaka" 
});
const ticketTime = new Date(dhakaTime);
const hours = ticketTime.getHours();

if (hours >= 10 || hours < 3) {
  action = "agent_available"; // Normal processing
} else {
  action = "after_hours"; // Send offline message
}

// Send appropriate response
if (action === "after_hours") {
  publicReply = \`Oops! 🛌 Our support team is catching some Zzzs 😴. 
  We'll be awake and back online 10:00 AM – 3:00 AM Dhaka time.\`;
}`}</pre>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <TypographyH3 className="mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-600" />
                Conversation Memory System
              </TypographyH3>
              <div className="font-mono text-sm space-y-2">
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
                  <span className="font-bold text-gray-800 dark:text-gray-200">Memory Buffer Window:</span>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Maintains short-term conversation context using a rolling window 
                    of recent interactions for coherent follow-up responses.
                  </p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
                  <span className="font-bold text-gray-800 dark:text-gray-200">Postgres Chat History:</span>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">
                    Stores complete conversation history in PostgreSQL for 
                    long-term context retrieval and analytics (disabled but ready).
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <TypographyH3 className="mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-600" />
                Comment Classification
              </TypographyH3>
              <div className="font-mono text-sm">
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {[
                    { label: "KYC/Status", color: "bg-purple-100 dark:bg-purple-900", border: "border-purple-200 dark:border-purple-800" },
                    { label: "Refund", color: "bg-blue-100 dark:bg-blue-900", border: "border-blue-200 dark:border-blue-800" },
                    { label: "Email Change", color: "bg-green-100 dark:bg-green-900", border: "border-green-200 dark:border-green-800" },
                    { label: "Deletion", color: "bg-red-100 dark:bg-red-900", border: "border-red-200 dark:border-red-800" },
                  ].map((item) => (
                    <div key={item.label} className={`${item.color} ${item.border} p-3 rounded border text-center`}>
                      <div className="font-semibold text-gray-800 dark:text-gray-200">{item.label}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">Auto-classified</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  Each comment type follows specific response templates defined in the workflow.
                </p>
              </div>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
            <SiOpenai className="w-5 h-5 text-green-600" />
            Advanced Response Generation
          </TypographyH3>
          <div className="font-mono mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded border border-border">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Context-Aware Replies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Uses both knowledge base and conversation history to generate 
                  coherent follow-up responses that reference previous messages.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Strict Policy Adherence</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Same security rules apply: OTP issues = silent, email change = policy reply, 
                  deletion = verification process.
                </p>
              </div>
              <div className="p-3 bg-white dark:bg-gray-800 rounded border">
                <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Fallback Handling</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Automatically escalates to human agents when confidence is low or 
                  queries fall into restricted categories (KYC, refunds, status).
                </p>
              </div>
            </div>
          </div>

          <TypographyH3 className="my-4 mt-8">Workflow Visualizations</TypographyH3>
          <SlideShow
            images={[
              `${BASE_PATH}/zendesk-ai/comment-automation-workflow.png`,
              `${BASE_PATH}/zendesk-ai/memory-storage.png`,
              `${BASE_PATH}/zendesk-ai/rag-logic.png`,
            ]}
          />

          <div className="mt-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl">
            <TypographyH3 className="text-indigo-800 dark:text-indigo-300 mb-4">System Performance</TypographyH3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center">
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
                <div className="text-2xl font-bold text-purple-600">95%</div>
                <div className="text-gray-600 dark:text-gray-400">Continuity Rate</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Seamless conversation flow</div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
                <div className="text-2xl font-bold text-green-600">45s</div>
                <div className="text-gray-600 dark:text-gray-400">Avg Response</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">For follow-up comments</div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
                <div className="text-2xl font-bold text-blue-600">99%</div>
                <div className="text-gray-600 dark:text-gray-400">Context Retention</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Memory accuracy</div>
              </div>
              <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
                <div className="text-2xl font-bold text-amber-600">60%↓</div>
                <div className="text-gray-600 dark:text-gray-400">Escalation Rate</div>
                <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Fewer human handoffs</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
            <TypographyH3 className="text-blue-800 dark:text-blue-300 mb-3">Key Differentiators</TypographyH3>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Real-time comment processing with webhook triggers</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Intelligent human request detection with auto-tagging</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Time-based agent availability with friendly offline messages</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Conversation memory for contextual follow-ups</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Same strict policy enforcement as new ticket workflow</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                  <span className="text-gray-700 dark:text-gray-300">Seamless integration with existing ticket automation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  },

  // Project 3
  {
    id: "zendesk-weekly-analytics",
    category: "Data Analytics",
    title: "Zendesk Weekly Ticket Analytics Engine",
    src: "/assets/projects-screenshots/zendesk-ai/Zendesk Weekly Summary.png",
    screenshots: [
      "Zendesk Weekly Summary.png", 
      "weekly-tickets-summary.png", 
      "weekly-tickets.png"
    ],
    skills: {
      backend: [
        PROJECT_SKILLS.n8n,
        PROJECT_SKILLS.zendesk,
        PROJECT_SKILLS.openAI,
        PROJECT_SKILLS.dataTables,
        PROJECT_SKILLS.scheduling,
        PROJECT_SKILLS.batchProcessing,
      ],
      frontend: [
        PROJECT_SKILLS.dataAnalysis,
        PROJECT_SKILLS.dateLogic,
        PROJECT_SKILLS.javascript,
        PROJECT_SKILLS.webhooks,
        PROJECT_SKILLS.classification,
      ],
    },
    live: "#",
    workflow: "/assets/workflows/zendesk-weekly-summary.json",
    content: (
      <div className="space-y-8">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-amber-100 dark:border-amber-800">
          <TypographyP className="font-mono text-2xl text-center text-amber-800 dark:text-amber-300 mb-4">
            Automated Weekly Support Intelligence System
          </TypographyP>
          <TypographyP className="font-mono text-gray-700 dark:text-gray-300 text-center">
            A sophisticated analytics pipeline that automatically processes weekly ticket data, 
            generates AI-powered summaries, and stores structured insights for team review.
          </TypographyP>
        </div>
        
        <ProjectsLinks workflow="/assets/workflows/zendesk-weekly-summary.json" />
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <TypographyH3 className="mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-green-600" />
              Scheduled Automation Flow
            </TypographyH3>
            <ul className="font-mono space-y-2 text-sm text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">1</span>
                Weekly trigger every Friday at 6:05 PM BDT
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">2</span>
                Fetches all tickets from past 7 days via Zendesk API
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">3</span>
                Processes tickets in batches of 20 for rate limiting
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">4</span>
                AI summarization of each ticket (GPT-4o-mini)
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">5</span>
                Categorization and aggregation of issues (GPT-4.1-mini)
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">6</span>
                Stores results in n8n Data Tables for easy access
              </li>
            </ul>
          </div>
          
          <div>
            <TypographyH3 className="mb-4 flex items-center gap-2">
              <BarChart className="w-5 h-5 text-purple-600" />
              Advanced Data Processing
            </TypographyH3>
            <div className="font-mono text-sm space-y-3">
              <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900 p-3 rounded">
                <span className="font-semibold text-purple-700 dark:text-purple-400">Multi-Page Handling:</span>
                <span className="text-purple-600 dark:text-purple-300 ml-2">Automatically fetches all pages of results (up to 100+ tickets)</span>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 p-3 rounded">
                <span className="font-semibold text-blue-700 dark:text-blue-400">Time Zone Logic:</span>
                <span className="text-blue-600 dark:text-blue-300 ml-2">Bangladesh time (BDT) calculations for accurate weekly windows</span>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 p-3 rounded">
                <span className="font-semibold text-amber-700 dark:text-amber-400">Intelligent Batching:</span>
                <span className="text-amber-600 dark:text-amber-300 ml-2">Processes large datasets with rate limiting and delays</span>
              </div>
            </div>
          </div>
        </div>

        <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-indigo-600" />
          Time-Based Date Logic
        </TypographyH3>
        <div className="font-mono mb-4">
          <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
            <pre>{`// Calculate weekly reporting period (BDT Timezone)
const BDT_OFFSET = 6; // BDT = UTC +6
const now = new Date(); // runtime (UTC)

// END = today 6:00 PM BDT → convert to UTC
const end_date = new Date(current_date);
end_date.setUTCHours(18 - BDT_OFFSET, 0, 0, 0); // 6 PM BDT

// START = 7 days before end, 6:05 PM BDT → UTC
const start_date = new Date(end_date);
start_date.setDate(start_date.getDate() - 7);
start_date.setUTCHours(18 - BDT_OFFSET, 5, 0, 0); // 6:05 PM BDT

// Report period for display
const report_period = \`\${formatDate(start_date)} to \${formatDate(end_date)}\`;`}</pre>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            Advanced timezone-aware calculations ensure accurate weekly reporting periods 
            aligned with business hours in Bangladesh Standard Time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <TypographyH3 className="mb-4 flex items-center gap-2">
              <SiOpenai className="w-5 h-5 text-green-600" />
              Dual-AI Analysis Pipeline
            </TypographyH3>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-green-700 dark:text-green-300">Ticket Summarization</span>
                  <span className="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">GPT-4o-mini</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Each ticket is processed to extract the core user problem in one concise sentence, 
                  removing noise and focusing on the actual issue.
                </p>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-bold text-purple-700 dark:text-purple-300">Category Analysis</span>
                  <span className="text-xs bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">GPT-4.1-mini</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  All summaries are analyzed to identify patterns and group them into specific, 
                  actionable categories with exact counts.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <TypographyH3 className="mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600" />
              Data Storage Architecture
            </TypographyH3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
                <span className="font-bold text-gray-800 dark:text-gray-200">Weekly Tickets Table:</span>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4 list-disc">
                  <li>Ticket URLs with clickable links</li>
                  <li>Individual AI-generated summaries</li>
                  <li>Report period metadata</li>
                  <li>Reference IDs for tracking</li>
                </ul>
              </div>
              <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
                <span className="font-bold text-gray-800 dark:text-gray-200">Summary Table:</span>
                <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4 list-disc">
                  <li>Aggregated category analysis</li>
                  <li>Total ticket count per period</li>
                  <li>Executive summary ready for reports</li>
                  <li>Historical trend tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
          <PieChart className="w-5 h-5 text-orange-600" />
          Batch Processing System
        </TypographyH3>
        <div className="font-mono mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded border border-border">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-3 bg-white dark:bg-gray-800 rounded border">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Rate Limiting</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Processes 20 tickets per batch with delays between batches to prevent 
                API rate limiting and ensure reliable execution.
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-800 rounded border">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Error Handling</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Built-in retry logic and graceful degradation if individual ticket 
                processing fails, continuing with remaining items.
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-800 rounded border">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Progress Tracking</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Maintains count of processed items and total tickets for accurate 
                progress reporting and completion validation.
              </p>
            </div>
          </div>
        </div>

        <TypographyH3 className="my-4 mt-8">Workflow Visualizations</TypographyH3>
        <SlideShow
          images={[
            `${BASE_PATH}/zendesk-ai/Zendesk Weekly Summary.png`,
            `${BASE_PATH}/zendesk-ai/weekly-tickets-summary.png`,
            `${BASE_PATH}/zendesk-ai/weekly-tickets.png`,
          ]}
        />

        <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
          <TypographyH3 className="text-emerald-800 dark:text-emerald-300 mb-4">Analytics Impact</TypographyH3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center">
            <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
              <div className="text-2xl font-bold text-emerald-600">100%</div>
              <div className="text-gray-600 dark:text-gray-400">Automation</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">No manual intervention</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
              <div className="text-2xl font-bold text-blue-600">30min</div>
              <div className="text-gray-600 dark:text-gray-400">Processing Time</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">For 100+ tickets</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
              <div className="text-2xl font-bold text-purple-600">5+</div>
              <div className="text-gray-600 dark:text-gray-400">Insight Categories</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Per weekly report</div>
            </div>
            <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
              <div className="text-2xl font-bold text-amber-600">4h↓</div>
              <div className="text-gray-600 dark:text-gray-400">Time Saved</div>
              <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Weekly manual work</div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/10 dark:to-gray-900/10 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
          <TypographyH3 className="text-slate-800 dark:text-slate-300 mb-3">Sample Output</TypographyH3>
          <div className="font-mono text-sm bg-white dark:bg-gray-900 p-4 rounded border overflow-x-auto">
            <pre>{`# Weekly Support Insights -

Reporting Period: 2024-01-01 to 2024-01-07
Total Tickets Analyzed: 42

## Top Issues

- **Account Access Problems**: 12 tickets
- **Payment Processing Issues**: 8 tickets  
- **Document Verification**: 7 tickets
- **Technical Support**: 6 tickets
- **General Inquiries**: 5 tickets
- **Feature Requests**: 4 tickets

## Key Trends

Users primarily struggled with account recovery this week, 
with payment verification delays being the second most common issue.`}</pre>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
          <TypographyH3 className="text-blue-800 dark:text-blue-300 mb-3">Business Value</TypographyH3>
          <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Automated weekly reporting eliminates manual data collection</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-gray-700 dark:text-gray-300">AI-powered categorization reveals hidden patterns in support tickets</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Historical data tracking enables trend analysis over time</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Executive-ready summaries for management review meetings</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Data-driven insights for resource allocation and training</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
                <span className="text-gray-700 dark:text-gray-300">Scalable solution that handles growing ticket volumes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  //Project 4
  {
  id: "crisp-weekly-analytics",
  category: "Data Analytics",
  title: "Crisp Weekly Chat Analytics Engine",
  src: "/assets/projects-screenshots/crisp-ai/Crisp Weekly Summary.png",
  screenshots: [
    "Crisp Weekly Summary.png", 
    "weekly-chat.png", 
    "weekly-chat-summary.png"
  ],
  skills: {
    backend: [
      PROJECT_SKILLS.n8n,
      PROJECT_SKILLS.crispApi,
      PROJECT_SKILLS.openAI,
      PROJECT_SKILLS.dataTables,
      PROJECT_SKILLS.scheduling,
      PROJECT_SKILLS.batchProcessing,
    ],
    frontend: [
      PROJECT_SKILLS.dataAnalysis,
      PROJECT_SKILLS.dateLogic,
      PROJECT_SKILLS.javascript,
      PROJECT_SKILLS.webhooks,
      PROJECT_SKILLS.classification,
      PROJECT_SKILLS.chatAnalysis,
    ],
  },
  live: "#",
  workflow: "/assets/workflows/crisp-weekly-summary.json",
  content: (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
        <TypographyP className="font-mono text-2xl text-center text-blue-800 dark:text-blue-300 mb-4">
          Automated Chat Conversation Intelligence System
        </TypographyP>
        <TypographyP className="font-mono text-gray-700 dark:text-gray-300 text-center">
          An advanced analytics pipeline that automatically processes weekly chat conversations, 
          generates AI-powered issue summaries, and provides structured insights for support team optimization.
        </TypographyP>
      </div>
      
      <ProjectsLinks workflow="/assets/workflows/crisp-weekly-summary.json" />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-green-600" />
            Scheduled Automation Flow
          </TypographyH3>
          <ul className="font-mono space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">1</span>
              Weekly trigger every Friday at 6:00 PM BDT
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">2</span>
              Fetches 5 pages of conversations (up to 250) via Crisp API
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">3</span>
              Filters conversations within precise date ranges with duplicate protection
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">4</span>
              Fetches complete message history for each conversation
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">5</span>
              AI summarization of each conversation (GPT-4o-mini)
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">6</span>
              Categorization and aggregation of issues (GPT-4.1-mini)
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">7</span>
              Stores results in n8n Data Tables for team access
            </li>
          </ul>
        </div>
        
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <BarChart className="w-5 h-5 text-purple-600" />
            Advanced Chat Processing
          </TypographyH3>
          <div className="font-mono text-sm space-y-3">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900 p-3 rounded">
              <span className="font-semibold text-purple-700 dark:text-purple-400">Multi-Page Handling:</span>
              <span className="text-purple-600 dark:text-purple-300 ml-2">Parallel fetching of 5 conversation pages with pagination logic</span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 p-3 rounded">
              <span className="font-semibold text-blue-700 dark:text-blue-400">Time Zone Logic:</span>
              <span className="text-blue-600 dark:text-blue-300 ml-2">Bangladesh time (BDT) calculations for accurate weekly windows</span>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 p-3 rounded">
              <span className="font-semibold text-amber-700 dark:text-amber-400">Duplicate Protection:</span>
              <span className="text-amber-600 dark:text-amber-300 ml-2">Hash-based duplicate detection across pagination boundaries</span>
            </div>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
        <Calendar className="w-5 h-5 text-indigo-600" />
        Time-Based Date Logic
      </TypographyH3>
      <div className="font-mono mb-4">
        <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
          <pre>{`// Calculate weekly reporting period (BDT Timezone)
const BDT_OFFSET = 6; // BDT = UTC +6

// End = this Friday 6 PM BDT
const end = new Date();
end.setHours(18, 0, 0, 0); // 6 PM BDT

// Start = previous Friday 6:05 PM BDT
const start = new Date(end);
start.setDate(start.getDate() - 7);
start.setHours(18, 5, 0, 0); // 6:05 PM BDT

// Convert to UTC timestamps for API calls
const start_ts = Math.floor((start.getTime() - BDT_OFFSET*60*60*1000)/1000);
const end_ts   = Math.floor((end.getTime() - BDT_OFFSET*60*60*1000)/1000);

// Report period for display
const report_period = \`\${formatDate(start)} to \${formatDate(end)}\`;`}</pre>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Advanced timezone-aware calculations ensure accurate weekly reporting periods 
          aligned with business hours in Bangladesh Standard Time, with 5-minute overlap
          to prevent missing conversations at boundary times.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <SiOpenai className="w-5 h-5 text-green-600" />
            Dual-AI Analysis Pipeline
          </TypographyH3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-green-700 dark:text-green-300">Conversation Summarization</span>
                <span className="text-xs bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-1 rounded">GPT-4o-mini</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Each chat conversation is analyzed to extract the core user problem in one concise sentence, 
                focusing on actual issues while ignoring support responses and metadata.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-purple-700 dark:text-purple-300">Category Analysis</span>
                <span className="text-xs bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 px-2 py-1 rounded">GPT-4.1-mini</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                All conversation summaries are analyzed to identify patterns and group them into specific, 
                actionable categories with exact counts, avoiding vague labels like "Other".
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            Data Storage Architecture
          </TypographyH3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Weekly Chats Table:</span>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4 list-disc">
                <li>Complete conversation transcripts</li>
                <li>Individual AI-generated summaries</li>
                <li>Clickable chat URLs for direct access</li>
                <li>User names and conversation timestamps</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Summary Table:</span>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4 list-disc">
                <li>Aggregated category analysis with counts</li>
                <li>Total conversation count per period</li>
                <li>Formatted executive summary ready for reports</li>
                <li>Historical trend tracking across weeks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
        <MessageSquare className="w-5 h-5 text-orange-600" />
        Conversation Processing System
      </TypographyH3>
      <div className="font-mono mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded border border-border">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Message Aggregation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Combines all user messages from a conversation into a single transcript,
              filtering out support agent responses to focus on user issues.
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Batch Processing</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Processes 10 conversations per batch with delays between batches to prevent 
              API rate limiting and ensure reliable execution.
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Error Handling</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built-in retry logic and graceful degradation if individual conversation 
              processing fails, continuing with remaining items.
            </p>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8">Workflow Visualizations</TypographyH3>
      <SlideShow
        images={[
          `${BASE_PATH}/crisp-ai/Crisp Weekly Summary.png`,
          `${BASE_PATH}/crisp-ai/weekly-chat.png`,
          `${BASE_PATH}/crisp-ai/weekly-chat-summary.png`,
        ]}
      />

      <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
        <TypographyH3 className="text-emerald-800 dark:text-emerald-300 mb-4">Analytics Impact</TypographyH3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-emerald-600">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Automation</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">No manual conversation review</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-blue-600">20min</div>
            <div className="text-gray-600 dark:text-gray-400">Processing Time</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">For 100+ conversations</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-purple-600">5-8</div>
            <div className="text-gray-600 dark:text-gray-400">Issue Categories</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Identified per week</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-amber-600">3h↓</div>
            <div className="text-gray-600 dark:text-gray-400">Time Saved</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Weekly manual analysis</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/10 dark:to-gray-900/10 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
        <TypographyH3 className="text-slate-800 dark:text-slate-300 mb-3">Sample Output</TypographyH3>
        <div className="font-mono text-sm bg-white dark:bg-gray-900 p-4 rounded border overflow-x-auto">
          <pre>{`# Weekly Support Insights - 
Reporting Period: 2024-01-01 to 2024-01-07
Total Tickets Analyzed: 38

## Top Issues

- **Login and Authentication Issues**: 9 tickets
- **Payment Method Problems**: 7 tickets  
- **Transaction Failures**: 6 tickets
- **Account Verification Delays**: 5 tickets
- **App Technical Errors**: 4 tickets
- **Feature Usage Questions**: 4 tickets
- **Refund Requests**: 3 tickets

## Key Trends

Users experienced significant authentication challenges this week, 
with payment-related issues being the second most common concern.`}</pre>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
        <TypographyH3 className="text-blue-800 dark:text-blue-300 mb-3">Business Value</TypographyH3>
        <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Automated analysis of chat conversations eliminates manual review</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">AI-powered categorization reveals hidden patterns in chat support</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Historical conversation tracking enables trend analysis over time</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Executive-ready summaries for management review meetings</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Data-driven insights for support team training and resource allocation</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Scalable solution that handles growing chat volumes automatically</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
},

//Project 5
{
  id: "transaction-failure-automation",
  category: "Automation & Support",
  title: "Transaction Failure Email Automation",
  src: "/assets/projects-screenshots/zendesk-ai/AVS Failed Email Automation.png",
  screenshots: [
    "AVS Failed Email Automation.png",
    "avs-failed-email.png"
  ],
  skills: {
    backend: [
      PROJECT_SKILLS.n8n,
      PROJECT_SKILLS.webhooks,
      PROJECT_SKILLS.googleSheets,
      PROJECT_SKILLS.zendesk,
      PROJECT_SKILLS.apiIntegration,
    ],
    frontend: [
      PROJECT_SKILLS.automation,
      PROJECT_SKILLS.dataProcessing,
      PROJECT_SKILLS.javascript,
      PROJECT_SKILLS.conditionalLogic,
      PROJECT_SKILLS.errorHandling,
    ],
  },
  live: "#",
  workflow: "/assets/workflows/avs-failed-email-automation.json",
  content: (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-xl border border-red-100 dark:border-red-800">
        <TypographyP className="font-mono text-2xl text-center text-red-800 dark:text-red-300 mb-4">
          Real-time Transaction Failure Response System
        </TypographyP>
        <TypographyP className="font-mono text-gray-700 dark:text-gray-300 text-center">
          An automated workflow that detects failed transactions, creates support tickets,
          and logs all activities in real-time for immediate customer support intervention.
        </TypographyP>
      </div>
      
      <ProjectsLinks workflow="/assets/workflows/avs-failed-email-automation.json" />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-green-600" />
            Real-time Automation Flow
          </TypographyH3>
          <ul className="font-mono space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">1</span>
              Webhook triggers on transaction failure events
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">2</span>
              Processes individual transaction records with 1-second delays
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">3</span>
              Validates transaction status and filters for "failed" only
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">4</span>
              Extracts user ID and fetches complete user profile data
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">5</span>
              Creates high-priority support tickets with all transaction details
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">6</span>
              Logs results to Google Sheets for audit trail and tracking
            </li>
          </ul>
        </div>
        
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            Critical Error Handling
          </TypographyH3>
          <div className="font-mono text-sm space-y-3">
            <div className="bg-red-50 dark:bg-red-950/30 border border-red-100 dark:border-red-900 p-3 rounded">
              <span className="font-semibold text-red-700 dark:text-red-400">Dual Outcome Paths:</span>
              <span className="text-red-600 dark:text-red-300 ml-2">Separate flows for successful and failed ticket creation</span>
            </div>
            <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-100 dark:border-yellow-900 p-3 rounded">
              <span className="font-semibold text-yellow-700 dark:text-yellow-400">Data Validation:</span>
              <span className="text-yellow-600 dark:text-yellow-300 ml-2">Multiple fallback options for user ID extraction</span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 p-3 rounded">
              <span className="font-semibold text-blue-700 dark:text-blue-400">Audit Trail:</span>
              <span className="text-blue-600 dark:text-blue-300 ml-2">Complete logging to Google Sheets for every action</span>
            </div>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
        <Code className="w-5 h-5 text-indigo-600" />
        JavaScript Data Processing Logic
      </TypographyH3>
      <div className="font-mono mb-4">
        <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
          <pre>{`// Extract user ID from transaction data with multiple fallbacks
const userId = $json.user_id || $json.customer_id || $json.customerId;

// Check if ticket creation was successful
const ticketCreated = $json.ticket && $json.ticket.id ? true : false;

// Structured return with all necessary data
return [{
  json: {
    user_id: userId,
    ticket_created: ticketCreated,
    ticket_id: $json.ticket?.id || null,
    transaction_id: $json.transaction_id
  }
}];`}</pre>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Robust data extraction and validation logic ensures the workflow can handle
          different transaction data formats and provides clear success/failure states.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            Intelligent Ticket Creation
          </TypographyH3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-green-700 dark:text-green-300">Dynamic Content Generation</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Creates detailed support tickets with transaction ID, amount, user information,
                and automatically sets priority to "high" for immediate attention.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-purple-700 dark:text-purple-300">User Context Enrichment</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Fetches complete user profile data (name, email) to create personalized
                support tickets with full customer context for support agents.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            Comprehensive Logging System
          </TypographyH3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Success Logging:</span>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4 list-disc">
                <li>Timestamp of ticket creation</li>
                <li>Transaction ID reference</li>
                <li>Generated ticket ID for tracking</li>
                <li>User email for follow-up</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Failure Logging:</span>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4 list-disc">
                <li>Error details and failure reason</li>
                <li>Transaction data for manual recovery</li>
                <li>User contact information</li>
                <li>Timestamp for incident response</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
        <GitBranch className="w-5 h-5 text-orange-600" />
        Conditional Workflow Logic
      </TypographyH3>
      <div className="font-mono mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded border border-border">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Status Validation</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Filters transactions to process only "failed" statuses, 
              ignoring successful or pending transactions to reduce noise.
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Ticket Creation Check</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Verifies successful ticket creation by checking for ticket ID,
              then routes to appropriate success or failure handling paths.
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Rate Limiting</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Built-in 1-second delays between transaction processing
              to prevent API rate limiting and ensure reliable execution.
            </p>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8">Workflow Visualization</TypographyH3>
      <SlideShow
        images={[
          `${BASE_PATH}/zendesk-ai/AVS Failed Email Automation.png`,
          `${BASE_PATH}/zendesk-ai/avs-failed-email.png`,
        ]}
      />

      <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
        <TypographyH3 className="text-emerald-800 dark:text-emerald-300 mb-4">Operational Impact</TypographyH3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-emerald-600">0min</div>
            <div className="text-gray-600 dark:text-gray-400">Response Time</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Instant ticket creation</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Automation</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">No manual intervention</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-purple-600">2</div>
            <div className="text-gray-600 dark:text-gray-400">System Integration</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Support + Logging</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-amber-600">15min↓</div>
            <div className="text-gray-600 dark:text-gray-400">Time Saved</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Per failed transaction</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/10 dark:to-gray-900/10 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
        <TypographyH3 className="text-slate-800 dark:text-slate-300 mb-3">Sample Ticket Data</TypographyH3>
        <div className="font-mono text-sm bg-white dark:bg-gray-900 p-4 rounded border overflow-x-auto">
          <pre>{`Created Ticket Details:
- Ticket ID: #123456
- Priority: High
- Subject: Transaction Failed: TXN-7890ABCDEF
- Requester: John Doe (john.doe@example.com)
- Transaction Amount: $125.50
- Status: Requires manual review

Google Sheets Log Entry:
- Timestamp: 2024-01-15T14:30:25Z
- Transaction ID: TXN-7890ABCDEF
- Ticket ID: 123456
- Status: ticket_created
- User Email: john.doe@example.com`}</pre>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
        <TypographyH3 className="text-blue-800 dark:text-blue-300 mb-3">Business Value</TypographyH3>
        <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Instant response to transaction failures improves customer satisfaction</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Automated ticket creation ensures no failed transaction goes unnoticed</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Complete audit trail for compliance and performance tracking</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Reduces manual work for support team by automating initial response</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">High-priority flagging ensures critical issues get immediate attention</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Scalable solution that handles transaction volume spikes automatically</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/10 dark:to-red-900/10 p-5 rounded-xl border border-orange-200 dark:border-orange-800">
        <TypographyH3 className="text-orange-800 dark:text-orange-300 mb-3">Technical Architecture</TypographyH3>
        <div className="font-mono text-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 bg-white dark:bg-gray-900 rounded border">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Webhook Integration</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Receives real-time transaction data from payment processors
                with built-in validation and error handling
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-900 rounded border">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">API Orchestration</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Coordinates between user data API, support ticket system,
                and logging database with sequential execution
              </p>
            </div>
            <div className="p-3 bg-white dark:bg-gray-900 rounded border">
              <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Failure Resilience</h4>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                Graceful degradation with comprehensive error logging
                and manual recovery pathways for system failures
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
},

//Project 6
{
  id: "crisp-ai-support-bot",
  category: "AI Automation",
  title: "Intelligent AI Support Chatbot with Human Handover",
  src: "/assets/projects-screenshots/crisp-ai/crisp-ai-agent.png",
  screenshots: [
    "crisp-ai-agent.png", 
    "crisp-ai-agent-human.png"
  ],
  skills: {
    backend: [
      PROJECT_SKILLS.openAI,
      PROJECT_SKILLS.crispApi,
      PROJECT_SKILLS.supabase,
      PROJECT_SKILLS.automation,
      PROJECT_SKILLS.scheduling,
    ],
    frontend: [
      PROJECT_SKILLS.memory,
      PROJECT_SKILLS.conditionalLogic,
      PROJECT_SKILLS.classification,
      PROJECT_SKILLS.webhooks,
      PROJECT_SKILLS.dateLogic,
    ],
  },
  live: "#",
  workflow: "/assets/workflows/crisp-ai-agent.json",
  content: (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border border-indigo-100 dark:border-indigo-800">
        <TypographyP className="font-mono text-2xl text-center text-indigo-800 dark:text-indigo-300 mb-4">
          AI-Powered Customer Support with Intelligent Human Handover
        </TypographyP>
        <TypographyP className="font-mono text-gray-700 dark:text-gray-300 text-center">
          A sophisticated AI chatbot that handles customer queries 24/7, provides accurate responses from knowledge base,
          and seamlessly transfers to human agents during office hours with smart operator scheduling.
        </TypographyP>
      </div>
      
      <ProjectsLinks workflow="/assets/workflows/crisp-ai-agent.json" />
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Bot className="w-5 h-5 text-green-600" />
            Dual Workflow Architecture
          </TypographyH3>
          <ul className="font-mono space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">1</span>
              <strong>Main AI Bot:</strong> Primary conversational interface with knowledge base access
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">2</span>
              <strong>Intelligent Routing:</strong> Routes to appropriate operator based on schedule
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">3</span>
              <strong>Office Hours Detection:</strong> Smart timezone-aware office hour determination
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">4</span>
              <strong>Operator Scheduling:</strong> Multiple operators with day-based assignments
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">5</span>
              <strong>Fallback Responses:</strong> Friendly out-of-office messages with clear expectations
            </li>
            <li className="flex items-start gap-2">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">6</span>
              <strong>Feedback Loop:</strong> Resolution confirmation and feedback collection
            </li>
          </ul>
        </div>
        
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-purple-600" />
            AI Bot Capabilities
          </TypographyH3>
          <div className="font-mono text-sm space-y-3">
            <div className="bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900 p-3 rounded">
              <span className="font-semibold text-purple-700 dark:text-purple-400">Knowledge Base Integration:</span>
              <span className="text-purple-600 dark:text-purple-300 ml-2">Accesses helpdesk and webpage sources with 75% confidence threshold</span>
            </div>
            <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 p-3 rounded">
              <span className="font-semibold text-blue-700 dark:text-blue-400">Interactive Responses:</span>
              <span className="text-blue-600 dark:text-blue-300 ml-2">Smart picker options for user feedback and next steps</span>
            </div>
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-100 dark:border-amber-900 p-3 rounded">
              <span className="font-semibold text-amber-700 dark:text-amber-400">Error Handling:</span>
              <span className="text-amber-600 dark:text-amber-300 ml-2">Graceful fallback when AI doesn't understand the question</span>
            </div>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
        <Clock className="w-5 h-5 text-indigo-600" />
        Timezone-Aware Scheduling Logic
      </TypographyH3>
      <div className="font-mono mb-4">
        <div className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
          <pre>{`// Office Hours Configuration (Dhaka Time, UTC+6)
const DHAKA_OFFSET = -360; // UTC offset in minutes

// Three shift periods:
1. Office Hour (Day): 09:30 AM to 05:59 PM
2. Office Hour (Night): 06:00 PM to 03:00 AM
3. Out of Office: 03:01 AM to 09:29 AM

// Operator Weekly Schedule:
- Operator 1: Friday, Sunday, Monday
- Operator 2: Saturday, Tuesday, Wednesday, Thursday
- Operator 3: Non-Friday days (for night shift)

// Timezone Conversion:
All times are calculated with offset: -360 minutes
Current time is converted to Dhaka time for accurate scheduling`}</pre>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          Advanced timezone-aware scheduling ensures customers always reach the right operator 
          based on both time of day and day of week, with friendly messages during off-hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-green-600" />
            Main AI Bot Features
          </TypographyH3>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-green-700 dark:text-green-300">AI-Powered Responses</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Uses knowledge base from helpdesk and webpage sources with 75% confidence threshold,
                providing accurate and verified information while avoiding hallucinations.
              </p>
            </div>
            
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-purple-700 dark:text-purple-300">Interactive Feedback System</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                After each response, presents users with options: "Issue resolved", "Chat with human", 
                "Call us", or "Another question" to guide the conversation flow.
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <span className="font-bold text-blue-700 dark:text-blue-400">Call Widget Integration</span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Seamless integration with call system that opens a call widget or provides direct link
                when users choose the "Call us" option for immediate assistance.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blue-600" />
            Human Handover System
          </TypographyH3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Smart Operator Assignment:</span>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4 list-disc">
                <li>Multiple operators with specific day assignments</li>
                <li>Automatic @mentions in chat for immediate attention</li>
                <li>Direct assignment to operator's queue</li>
                <li>Clear confirmation messages to users</li>
              </ul>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Out-of-Hours Experience:</span>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4 list-disc">
                <li>Friendly, empathetic messages about team availability</li>
                <li>Clear timeframe for when support will return</li>
                <li>Assurance that issue is prioritized</li>
                <li>Professional yet approachable tone</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8 flex items-center gap-2">
        <Workflow className="w-5 h-5 text-orange-600" />
        Conversation Flow Logic
      </TypographyH3>
      <div className="font-mono mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded border border-border">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Message Processing</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Triggers on new messages, analyzes query against knowledge base,
              and provides AI-generated response within seconds.
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">User Choice Handling</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Processes user selections from picker options and routes to
              appropriate next steps: resolution, human chat, or call.
            </p>
          </div>
          <div className="p-3 bg-white dark:bg-gray-800 rounded border">
            <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">Loop Management</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Handles conversation loops for follow-up questions and
              returns to message detection for continuous interaction.
            </p>
          </div>
        </div>
      </div>

      <TypographyH3 className="my-4 mt-8">Workflow Visualizations</TypographyH3>
      <SlideShow
        images={[
          `${BASE_PATH}/crisp-ai/crisp-ai-agent.png`,
          `${BASE_PATH}/crisp-ai/crisp-ai-agent-human.png`,
        ]}
      />

      <div className="mt-12 p-6 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl">
        <TypographyH3 className="text-emerald-800 dark:text-emerald-300 mb-4">Performance Metrics</TypographyH3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-center">
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-emerald-600">75%</div>
            <div className="text-gray-600 dark:text-gray-400">Confidence Threshold</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">For AI responses</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-blue-600">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">AI Availability</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Always-on support</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className="text-gray-600 dark:text-gray-400">Operators</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Scheduled coverage</div>
          </div>
          <div className="bg-white dark:bg-gray-900 p-3 rounded border border-border shadow-sm">
            <div className="text-2xl font-bold text-amber-600">5s</div>
            <div className="text-gray-600 dark:text-gray-400">Response Delay</div>
            <div className="text-xs text-gray-500 dark:text-gray-500 mt-1">Before feedback options</div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-slate-50 to-gray-50 dark:from-slate-900/10 dark:to-gray-900/10 p-5 rounded-xl border border-slate-200 dark:border-slate-800">
        <TypographyH3 className="text-slate-800 dark:text-slate-300 mb-3">Sample Conversation Flow</TypographyH3>
        <div className="font-mono text-sm bg-white dark:bg-gray-900 p-4 rounded border overflow-x-auto">
          <pre>{`User: How do I reset my password?

AI Bot: To reset your password, visit the login page and click "Forgot Password".
You'll receive an email with reset instructions within 5 minutes.

[5-second delay]

AI Bot: Was this answer helpful?
▢ My issue is resolved ✌️
▢ Chat with a human 💬
▢ Call us 📞
▢ I have another question ❓

User clicks: Chat with a human 💬

[System checks time: 2:30 PM on Monday]

AI Bot: Sure! Please hang on — human help is on the way.
[System assigns to Operator 1 and sends @mention]

--- ALTERNATE SCENARIO ---

User: I need help with my account

AI Bot: Apologies, I didn't quite understand your question.
Could you please rephrase or provide a bit more detail?

▢ Chat with a human 💬
▢ Call us 📞

User clicks: Chat with a human 💬
[Time check: 4:00 AM on Wednesday]

AI Bot: Oops! 🛌 Our support team is catching some Zzzs 😴.
We'll be awake and back online 10:00 AM – 3:00 AM Dhaka time.
Don't worry — you're at the top of our priority list!`}</pre>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10 p-5 rounded-xl border border-blue-200 dark:border-blue-800">
        <TypographyH3 className="text-blue-800 dark:text-blue-300 mb-3">Business Value</TypographyH3>
        <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">24/7 automated support reduces response time from hours to seconds</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Intelligent routing ensures customers reach the right human agent immediately</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Reduces support team workload by handling common queries automatically</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Professional out-of-hours messaging manages customer expectations</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Multiple contact options (chat, call) cater to different customer preferences</span>
            </div>
            <div className="flex items-start gap-2">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full w-5 h-5 flex items-center justify-center text-xs mt-0.5">✓</div>
              <span className="text-gray-700 dark:text-gray-300">Feedback collection provides data for continuous improvement</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10 p-5 rounded-xl border border-indigo-200 dark:border-indigo-800">
        <TypographyH3 className="text-indigo-800 dark:text-indigo-300 mb-3">AI System Prompt</TypographyH3>
        <div className="font-mono text-sm">
          <div className="bg-white dark:bg-gray-900 p-4 rounded border overflow-x-auto">
            <pre>{`You are CompanyAI, the official AI Support Agent.
You are a trusted member of the Customer Experience Team, 
dedicated to delivering accurate, helpful, and friendly support.

Your top priority is customer satisfaction.
Always provide clear, correct, and verified information to customers, 
ensuring every interaction reflects our commitment to transparency, 
trust, and excellence.

NEVER reply outside of your knowledge base, 
DO NOT include any extra information.`}</pre>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            This carefully crafted system prompt ensures the AI provides helpful, accurate responses
            while maintaining brand voice and avoiding hallucinations or off-topic information.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-orange-600" />
            Technical Architecture
          </TypographyH3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Event-Driven Design</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Trigger-based workflow that responds to new messages and user actions
                with appropriate responses and routing decisions.
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Modular Components</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Separate blocks for AI inference, message sending, condition checking,
                and external integrations for maintainability.
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <TypographyH3 className="mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-600" />
            Quality Assurance
          </TypographyH3>
          <div className="space-y-3">
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Response Validation</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                75% confidence threshold ensures only high-quality AI responses
                are shown to users, with fallback options for uncertain queries.
              </p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded border">
              <span className="font-bold text-gray-800 dark:text-gray-200">Feedback Collection</span>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Automatic feedback requests and resolution tracking provide
                data for continuous AI training and system improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
];

export default projects;