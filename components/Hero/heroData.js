// components/Hero/heroData.js
// Small data set needed by the parent Hero shell on every device.
// Keep this file lean — anything only used inside the tablet mockup
// belongs in tabletData.js instead, so it ships only in that lazy chunk.

import { Shield, SearchCheck, Lightbulb, Globe, Blocks, Cpu, Network } from "lucide-react";

export const NAV_LINKS = [
  { label: "About",       href: "/about" },
  { label: "LIONXE™",     href: "https://lionxeframework.com" },
  { label: "DoItWithAI",  href: "https://doitwithai.tools" },
  { label: "Insights",    href: "/insights" },
  { label: "Contact",     href: "/contact" },
];

/*  Content: 4 focused roles from Golden version.
    Design: each role keeps its own distinct color (previous version approach). */
export const ROLES = [
  {
    label: "LIONXE® Framework Creator",
    color: "#a78bfa",
    icon: Shield,
  },
  {
    label: "Growth Systems Architect",
    color: "#5271ff",
    icon: Network,
  },
  {
    label: "Search Visibility Strategist",
    color: "#22c55e",
    icon: SearchCheck,
  },
  {
    label: "AI-Augmented Web Systems Builder",
    color: "#f97316",
    icon: Cpu,
  },
  {
    label: "Digital Ecosystem Founder",
    color: "#f472b6",
    icon: Globe,
  },
  {
    label: "Structured Content Systems Designer",
    color: "#facc15",
    icon: Blocks,
  },
];
export const GOLD = "#E3B341";
export const ACCENT_THEMES = [
  { name: "Royal Gold",    value: "#E3B341", ink: "#2E2106" },
  { name: "LIONXE Blue",   value: "#4D7BFF", ink: "#FFFFFF" },
  { name: "Electric Cyan", value: "#00D9FF", ink: "#062730" },
  { name: "Royal Violet",  value: "#8B5CF6", ink: "#FFFFFF" },
  { name: "Emerald",       value: "#2FB07A", ink: "#06281B" },
];