"use client";
import React, { useEffect, useState } from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

// Icons for CX & Tech Stack
import { 
  SiZendesk, SiSalesforce, SiSlack, SiJira, SiNotion, 
  SiAirtable, SiClickup, SiHubspot, SiShopify, SiStripe,
  SiOpenai, SiTypescript, SiReact, SiNodedotjs, SiTailwindcss,
  SiNextdotjs, SiDocker, SiFigma, SiCanva, SiZapier, SiDiscord
} from "react-icons/si";

import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa6";
import { config } from "@/data/config";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: config.email,
    href: `mailto:${config.email}`,
    icon: <FaEnvelope size={20} />,
  },
  {
    name: "LinkedIn",
    content: "/in/meetmdsagorkhan",
    href: config.social.linkedin,
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "GitHub",
    content: "/meetmdsagorkhan",
    href: config.social.github,
    icon: <FaGithub size={20} />,
  },
];

// Curated list of tools for a "CX Architect"
const TOOLS = [
  { name: "Zendesk", icon: <SiZendesk size="40px" color="#03363d" /> },
  { name: "n8n", icon: <SiZapier size="40px" color="#ea580c" /> }, // Using Zapier icon as n8n proxy or use SVG if available
  { name: "Salesforce", icon: <SiSalesforce size="40px" color="#00a1e0" /> },
  { name: "OpenAI", icon: <SiOpenai size="40px" color="#10a37f" /> },
  { name: "Slack", icon: <SiSlack size="40px" color="#4a154b" /> },
  { name: "Jira", icon: <SiJira size="40px" color="#0052cc" /> },
  { name: "Notion", icon: <SiNotion size="40px" color="#000000" /> },
  { name: "ClickUp", icon: <SiClickup size="40px" color="#7b68ee" /> },
  { name: "HubSpot", icon: <SiHubspot size="40px" color="#ff7a59" /> },
  { name: "Airtable", icon: <SiAirtable size="40px" color="#f82b60" /> },
  { name: "Shopify", icon: <SiShopify size="40px" color="#95bf47" /> },
  { name: "Stripe", icon: <SiStripe size="40px" color="#635bff" /> },
  { name: "Figma", icon: <SiFigma size="40px" color="#f24e1e" /> },
  { name: "Canva", icon: <SiCanva size="40px" color="#00c4cc" /> },
  { name: "Discord", icon: <SiDiscord size="40px" color="#5865f2" /> },
  // Technical Skills (Kept because you built this site!)
  { name: "Next.js", icon: <SiNextdotjs size="40px" color="#000" /> },
  { name: "React", icon: <SiReact size="40px" color="#61dafb" /> },
  { name: "TypeScript", icon: <SiTypescript size="40px" color="#3178c6" /> },
  { name: "Node.js", icon: <SiNodedotjs size="40px" color="#339933" /> },
  { name: "Tailwind", icon: <SiTailwindcss size="40px" color="#06b6d4" /> },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);
  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[200px] text-zinc-300 pt-20 pb-20">
      <div className="flex flex-col lg:flex-row gap-5">
        <aside className="w-full md:basis-1/4">
          <div
            className="p-4 md:p-8 lg:p-10 rounded-2xl border-[.5px] border-zinc-600"
            style={{
              backdropFilter: "blur(2px)",
            }}
          >
            <div className="flex flex-row lg:flex-col items-center">
              <div className="flex justify-center items-center lg:w-full lg:aspect-square bg-zinc-800 rounded-xl lg:mb-5">
                <img
                  className="rounded-full p-2 lg:p-0 w-[100px] md:w-[150px] lg:w-full aspect-square object-cover"
                  alt={config.author}
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-3 lg:items-center ml-10 md:ml-20 lg:ml-0">
                <p className="text-center text-xl font-bold">{config.author}</p>
                <div className="text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full text-center">
                  Customer Experience Leader
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <hr className="my-10 border-zinc-600" />
              <ul className="flex flex-col gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-12 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border-[.5px] rounded-md transition-colors"
                      href={link.href}
                      target={link.name !== "Email" ? "_blank" : "_self"}
                      rel="noreferrer"
                    >
                      <div className="w-6 flex justify-center">{link.icon}</div>
                      <div className="flex flex-col">
                        <div className="text-sm font-medium">{link.name}</div>
                        <div className="text-[10px] text-zinc-500 truncate max-w-[120px]">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
        <main className="basis-3/4 w-full">
          <div
            className="p-6 md:p-10 border-[.5px] rounded-md border-zinc-600"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <h1 className="text-3xl mb-8 font-bold text-zinc-100">About Me</h1>
            <p className="mb-6 text-zinc-300 leading-relaxed">
              Hello! I&apos;m {config.author}, a <strong>Customer Experience Leader</strong> dedicated to architecting and scaling high-velocity CX operations. 
              Currently leading Customer Experience at Priyo Pay, I specialize in bridging the gap between complex technical requirements and human-centered support.
            </p>
            <p className="mb-10 text-zinc-300 leading-relaxed">
              My expertise lies in orchestrating end-to-end onboarding, optimizing CSAT & SLA compliance, and implementing intelligent automation using tools like <strong>n8n</strong> and <strong>AI Agents</strong>.
              Unlike traditional support roles, I leverage a developer&apos;s mindset to build scalable, data-driven systems that transform customer feedback into long-term retention strategies.
            </p>
            
            <h1 className="text-3xl mb-8 font-bold text-zinc-100">My Stack</h1>
            <div className="mb-5">
              {!toolsLoaded ? (
                <p className="h-[100px] flex items-center justify-center text-zinc-500">Loading tools...</p>
              ) : (
                <Splide
                  options={{
                    type: "loop",
                    interval: 2000,
                    autoplay: true,
                    pagination: false,
                    speed: 2000,
                    perPage: 5,
                    breakpoints: {
                      640: { perPage: 3 },
                      480: { perPage: 2 },
                    },
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Tech Stack"
                >
                  {TOOLS.map((tool) => (
                    <SplideSlide key={tool.name}>
                      <div
                        className="w-full aspect-square flex flex-col items-center justify-center gap-2 p-4 border-[.5px] border-zinc-700 bg-zinc-800/50 rounded-lg hover:border-zinc-500 transition-colors"
                        title={tool.name}
                      >
                        {tool.icon}
                        <span className="text-xs text-zinc-400">{tool.name}</span>
                      </div>
                    </SplideSlide>
                  ))}
                </Splide>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;