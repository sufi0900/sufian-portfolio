
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

// components/Hero/index.jsx

"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronRight,
  ChevronLeft,
  Globe,
  Layers,
  SearchCheck,
  BookOpen,
  Shield,
  Code2,
  Terminal,
  Cpu,
  TrendingUp,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Home,
  Info,
  Users,
  FileText,
  PenTool,
  Target,
  Lightbulb,
  Activity,
  HelpCircle,
  Mail,
  Image as ImageIcon,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Palette,
  Wifi,
  BatteryFull,
  Quote as QuoteIcon,
  ExternalLink,
  GraduationCap,
  BarChart2,
  Copy,
  Check,
  ChevronRightCircle,
  Smartphone,
  Sparkles,
  ServerCog,
  Settings,
  Shuffle,
} from "lucide-react";
import "./hero.css";

/* ═══════════════════════════════════════════════════════════════════════
   NAV + ROLES
   ═══════════════════════════════════════════════════════════════════════ */

const NAV_LINKS = [
  { label: "About",       href: "/about" },
  { label: "LIONXE™",     href: "https://lionxeframework.com" },
  { label: "DoItWithAI",  href: "https://doitwithai.tools" },
  { label: "Insights",    href: "/insights" },
  { label: "Contact",     href: "/contact" },
];

/*  Content: 4 focused roles from Golden version.
    Design: each role keeps its own distinct color (previous version approach). */
const ROLES = [
  { label: "LIONXE™ Framework Creator",  color: "#a78bfa", icon: Shield      },
  { label: "Technical SEO Architect",    color: "#5271ff", icon: SearchCheck  },
  { label: "Strategic Research Analyst", color: "#facc15", icon: Lightbulb   },
  { label: "Digital Ecosystem Founder",  color: "#f472b6", icon: Globe       },
];

const GOLD = "#E3B341";
const ACCENT_THEMES = [
  { name: "Royal Gold",    value: "#E3B341", ink: "#2E2106" },
  { name: "LIONXE Blue",   value: "#4D7BFF", ink: "#FFFFFF" },
  { name: "Electric Cyan", value: "#00D9FF", ink: "#062730" },
  { name: "Royal Violet",  value: "#8B5CF6", ink: "#FFFFFF" },
  { name: "Emerald",       value: "#2FB07A", ink: "#06281B" },
];

const ECOSYSTEM_STATUS = [
  { label: "DoItWithAI.tools",  value: "LIVE",                state: "live"   },
  { label: "LIONXE™ Framework", value: "ACTIVE",              state: "live"   },
  { label: "Avg article depth", value: "8K+ words",           state: "info"   },
  { label: "Publishing since",  value: "2025",                state: "info"   },
  { label: "Brand identity",    value: "Royal Gold · Locked", state: "locked" },
];

const STATS = [
  { value: "MSc",    label: "Computer Science",    icon: GraduationCap },
  { value: "3+",     label: "Years AI SEO",        icon: Cpu           },
  { value: "8K+",    label: "Avg Word Depth",      icon: BookOpen      },
  { value: "LIONXE™",label: "Proprietary Framework",icon: Shield       },
];

/* ═══════════════════════════════════════════════════════════════════════
   TABLET: wallpapers, quotes, slides, greeting
   ═══════════════════════════════════════════════════════════════════════ */
const WALLPAPERS = [
  {
    id: "royal-navy",
    name: "Royal Navy",
    accent: GOLD,
    gradient:
      "radial-gradient(circle at 22% 18%, rgba(227,179,65,0.30) 0%, transparent 36%), radial-gradient(circle at 82% 78%, rgba(201,149,44,0.16) 0%, transparent 40%), linear-gradient(145deg, #081020 0%, #0d1730 48%, #040810 100%)",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    accent: GOLD,
    gradient:
      "radial-gradient(circle at 50% 0%, rgba(227,179,65,0.12) 0%, transparent 42%), linear-gradient(160deg, #05070d 0%, #0a0d16 55%, #030408 100%)",
  },
];

const QUOTES = [
  { text: "Temporary wins and shallow shortcuts are recipes for structural collapse.", tag: "LIONXE™ Doctrine" },
  { text: "Authority is built in layers, not in spikes.", tag: "Content Strategy" },
  { text: "Fix the system, not the symptom.", tag: "Systems Thinking" },
  { text: "Don't chase the algorithm. Build what the algorithm is forced to reward.", tag: "AI SEO" },
  { text: "Depth is the only moat that compounds.", tag: "Brand Building" },
  { text: "The weakest internal layer permanently caps the value of the whole.", tag: "LIONXE™ · IO Pillar" },
  { text: "Surface-level wins are just delayed failures with a good opening act.", tag: "LIONXE™ · L Pillar" },
  { text: "If a competitor can replicate your work in a week, it was never an asset.", tag: "LIONXE™ · XE Pillar" },
  { text: "80% optimized is 100% vulnerable. Complete the work.", tag: "LIONXE™ · IO Pillar" },
  { text: "A slow-building asset that compounds beats a fast spike every decade.", tag: "Logic & Longevity" },
  { text: "Integrity that costs you nothing was never integrity.", tag: "LIONXE™ · N Pillar" },
  { text: "In the AI search era, you don't rank for answers — you become the answer.", tag: "AI SEO" },
  { text: "Traffic metrics are vanity. Authority metrics are the only ones worth engineering toward.", tag: "Systems Thinking" },
  { text: "A single system that compounds outperforms 100 isolated tactics.", tag: "LIONXE™ Doctrine" },
];

const BUILDING_STATUS = [
  "Scaling DoItWithAI.tools authority content",
  "Refining LIONXE™ pillar documentation",
  "sufianmustafa.com portfolio system",
  "Engineering GEO-aligned content clusters",
];

const SHOWCASE_SLIDES = [
  { eyebrow: "Live Platform",       title: "DoItWithAI.tools",  body: "An AI SEO authority hub for the AI-search era — every article engineered to compound in search value over years.", color: "#00D9FF", icon: Globe       },
  { eyebrow: "Proprietary Framework",title: "LIONXE™ Standard", body: "A four-pillar architectural audit that certifies only what is built to survive decades.",                          color: "#4D7BFF", icon: Shield      },
  { eyebrow: "Discipline",           title: "Deep Research",     body: "Full-system audits that expose the root cause others overlook — then re-architect it.",                          color: GOLD,      icon: BrainCircuit },
];

function getGreeting(h) {
  if (h >= 5  && h < 12) return "Good morning, strategist.";
  if (h >= 12 && h < 17) return "System online. Afternoon edition.";
  if (h >= 17 && h < 21) return "Good evening. Deep work hours.";
  return "Late session active. Focus mode: on.";
}

/* PERF: clock widgets tick on their own 1s interval, isolated in their own
   component. This keeps the once-a-second re-render scoped to a few small
   nodes instead of re-rendering the entire Hero tree every second. */
function ClockWidget() {
  const [clock, setClock] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="tab-clock-widget">
      <div className="tab-greeting">{getGreeting(clock.getHours())}</div>
      <div className="tab-clock-time">{clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</div>
      <div className="tab-clock-date">{clock.toLocaleDateString([], { weekday: "short", month: "short", day: "numeric" })}</div>
    </div>
  );
}

function StatusClock() {
  const [clock, setClock] = useState(() => new Date());
  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return <span className="tablet-status-time">{clock.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span>;
}

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORIES — 15 apps  (new: Skills + Gulf Vision from Golden)
   Design fix: each icon restored to its own distinct color.
   ═══════════════════════════════════════════════════════════════════════ */
const PHONE_CATEGORIES = [
  { id: "sufian",     label: "Sufian",     icon: Users,      color: "#5271ff" },
  { id: "lionxe",    label: "LIONXE™",    icon: Shield,     color: "#a78bfa" },
  { id: "doitwithai",label: "DoItWithAI", icon: Globe,      color: "#00D9FF" },
  { id: "terminal",  label: "Terminal",   icon: Terminal,   color: "#facc15" },
  { id: "analytics", label: "Ecosystem",  icon: BarChart2,  color: "#34d399" },
  { id: "timeline",  label: "Timeline",   icon: Activity,   color: "#fb923c" },
  { id: "manifesto", label: "Manifesto",  icon: BookOpen,   color: "#a78bfa" },
  { id: "gallery",   label: "Gallery",    icon: ImageIcon,  color: "#f472b6" },
  { id: "faq",       label: "FAQ",        icon: HelpCircle, color: "#facc15" },
  { id: "contact",   label: "Contact",    icon: Mail,       color: "#fb923c" },
  { id: "system",    label: "System Info",icon: Smartphone, color: "#38bdf8" },
  { id: "social",    label: "Social",     icon: Linkedin,   color: "#34d399" },
  { id: "skills",    label: "Skills",     icon: Layers,     color: "#34d399" },
  { id: "gulfvision",label: "Gulf Vision",icon: TrendingUp, color: "#fb923c" },
  { id: "settings",  label: "Settings",   icon: Settings,   color: "#94a3b8" },
];

/* ═══════════════════════════════════════════════════════════════════════
   DATA OBJECTS  (all content from Golden version)
   ═══════════════════════════════════════════════════════════════════════ */

const SYSTEM_INFO_DATA = {
  header: {
    title: "About This Interface",
    subtitle: "Interactive portfolio tablet built for SufianMustafa.com",
    badge: "Next.js · React · Tailwind · Custom UI",
  },
  overview:
    "This hero is designed as a self-contained interactive portfolio interface. Instead of using a static profile card, it turns the hero into a live operating-system style experience that demonstrates frontend architecture, animation logic, state management, and brand storytelling.",
  specs: [
    { label: "Framework",   value: "Next.js",                  detail: "Used for modern React architecture, routing, SEO-friendly rendering, and production deployment.",                                                                             icon: Code2,    color: GOLD     },
    { label: "UI Layer",    value: "React",                    detail: "Powers the interactive tablet apps, state changes, role switcher, terminal, audit simulator, and dynamic views.",                                                              icon: Cpu,      color: GOLD     },
    { label: "Styling",     value: "Tailwind CSS + Custom CSS",detail: "Combines utility-first layout with handcrafted animations, glass panels, gradients, spotlight effects, and responsive behavior.",                                              icon: Palette,  color: GOLD     },
    { label: "Icons",       value: "Lucide React",             detail: "Provides the clean icon system used across the navigation, tablet apps, CTA buttons, and feature cards.",                                                                      icon: Layers,   color: GOLD     },
    { label: "Interaction", value: "React State",              detail: "Controls category navigation, phone views, role rotation, wallpaper switching, analytics tabs, FAQ expansion, and audit states.",                                              icon: Activity, color: GOLD     },
    { label: "Animation",   value: "CSS + requestAnimationFrame",detail: "Uses CSS keyframes for interface motion and requestAnimationFrame for optimized mouse spotlight and canvas particles.",                                                      icon: Sparkles, color: GOLD     },
  ],
  architecture: [
    "Single hero component with modular data-driven renderers.",
    "Phone/tablet UI powered by category-based conditional rendering.",
    "Reusable content objects for apps, roles, slides, quotes, FAQ, gallery, and manifesto.",
    "Canvas particle layer separated from the DOM-heavy interface.",
    "Pointer spotlight optimized with requestAnimationFrame.",
    "Responsive layout designed for premium dark-mode presentation.",
  ],
};

const LIONXE_DATA = {
  header: { title: "LIONXE™ Framework", subtitle: "Multi-layer Architectural Audit Standard", badge: "Proprietary · Est. 2024" },
  overview: "An elite auditing system engineered to eliminate volatility and anchor digital assets in permanent, compounding value. Built on four non-negotiable pillars.",
  pillars: [
    { code: "L",  name: "Logic & Longevity",          desc: "Long-term structural integrity over short-term gains", color: "#4D7BFF" },
    { code: "IO", name: "Internal Optimization",      desc: "100% completion across every underlying layer",        color: "#4D7BFF" },
    { code: "N",  name: "Non-Negotiable Integrity",   desc: "Absolute ethical clarity and total transparency",      color: "#4D7BFF" },
    { code: "XE", name: "Exceptional Distinction",    desc: "Elite positioning that cannot be replicated",          color: "#4D7BFF" },
  ],
  subcategories: [
    { id: "about",   label: "About LIONXE",     icon: Info     },
    { id: "pillars", label: "4 Pillars",         icon: Layers   },
    { id: "doctrine",label: "Framework Doctrine",icon: BookOpen },
    { id: "audit",   label: "Audit Simulator",   icon: Activity },
    { id: "history", label: "Origin Story",      icon: BookOpen },
  ],
};

const LIONXE_DOCTRINE = [
  { text: "Temporary wins and shallow shortcuts are recipes for structural collapse.", pillar: "L",  color: "#4D7BFF" },
  { text: "80% optimized is 100% vulnerable. Complete the work.",                     pillar: "IO", color: "#4D7BFF" },
  { text: "The weakest internal layer permanently caps the value of the whole.",       pillar: "IO", color: "#4D7BFF" },
  { text: "Integrity that costs you nothing was never integrity.",                     pillar: "N",  color: "#4D7BFF" },
  { text: "1% deception equals 0% integrity score — no partial honesty.",             pillar: "N",  color: "#4D7BFF" },
  { text: "If a competitor can replicate your work in a week, it was never an asset.",pillar: "XE", color: "#4D7BFF" },
  { text: "Surface-level wins are just delayed failures with a good opening act.",     pillar: "L",  color: "#4D7BFF" },
  { text: "Authority is built in layers, not in spikes.",                              pillar: "XE", color: "#4D7BFF" },
];

const DOITWITHAI_DATA = {
  header: { title: "DoItWithAI.tools", subtitle: "AI SEO Authority · Built for the AI-Search Era", badge: "Live · Est. 2025" },
  overview: "A live AI SEO authority platform where every article is engineered for long-term search compounding — not clicks, not trends, but permanent visibility.",
  stats: [
    { label: "Avg Word Count", value: "8,000+" },
    { label: "Schema Types",   value: "7+"      },
    { label: "Stack",          value: "Next.js 14" },
    { label: "CMS",            value: "Sanity"  },
  ],
  subcategories: [
    { id: "what",       label: "What is it?",         icon: Info       },
    { id: "stack",      label: "Tech Stack",           icon: Code2      },
    { id: "content",    label: "Content Strategy",     icon: FileText   },
    { id: "seo",        label: "SEO Architecture",     icon: SearchCheck},
    { id: "why",        label: "Why It Exists",        icon: Lightbulb  },
    { id: "philosophy", label: "Content Philosophy",   icon: PenTool    },
  ],
};

const SUFIAN_DATA = {
  header: { title: "Sufian Mustafa", subtitle: "Growth Systems Architect · Digital Ecosystem Founder", badge: "Rawalpindi, PK · MSc Computer Science" },
  overview: "A systems-focused architect combining search visibility, AI-augmented engineering, structured content, and the LIONXE™ framework to build scalable digital ecosystems engineered for long-term authority, trust, and sustainable growth.",
  expertise: [
    { label: "AI SEO Strategy",    icon: SearchCheck, color: GOLD, detail: "GEO, AEO, technical SEO, and long-form content architecture — building search authority through AI-native workflows and structured data systems.",                                               tags: ["GEO Alignment", "AEO Indexing", "Semantic Clustering", "E-E-A-T Optimization"] },
    { label: "Content Architecture",icon: PenTool,    color: GOLD, detail: "8,000+ word deep-dive articles, semantic keyword clustering, content gap analysis, pillar-cluster models, and EEAT optimization. Rooted in a former content-lead background applied at scale.", tags: ["8K+ Word Count", "Pillar-Cluster Model", "Zero AI Detection", "Legal Compliance"] },
    { label: "Deep Research",       icon: BrainCircuit,color: GOLD,detail: "Comprehensive organizational audits, competitive analysis, multi-factor diagnostic reporting, and research synthesis for strategic decisions.",                                                  tags: ["Competitive Analysis", "Multi-factor Diagnostics", "Strategic Synthesis", "Research Reporting"] },
    { label: "Framework Design",    icon: Layers,      color: GOLD, detail: "Creator of LIONXE™ — a four-pillar auditing methodology for evaluating digital asset longevity, integrity, and market authority.",                                                             tags: ["LIONXE™ Creator", "4-Pillar Methodology", "Institutional Doctrine", "Multi-decade Strategy"] },
    { label: "Prompt Architecture", icon: Terminal,    color: GOLD, detail: "Designs reusable, layered prompt systems for content generation, research, and auditing — engineering AI workflows that produce consistent, on-brand, humanized output at scale.",               tags: ["Layered Prompts", "AI Model Training", "Workflow Systems", "Output Control"] },
    { label: "Platform Building",   icon: Globe,       color: GOLD, detail: "Founder of DoItWithAI.tools, built on Next.js 14 + Sanity CMS — designed for performance, SEO, and long-term compounding authority.",                                                           tags: ["Next.js 14", "Sanity CMS", "Core Web Vitals", "Schema Markup 7+"] },
    { label: "Digital Strategy",    icon: Target,      color: GOLD, detail: "Long-term digital asset strategy, keyword architecture, competitive positioning, business-model design, and authority-first content ecosystems.",                                                 tags: ["Keyword Architecture", "Authority Stacking", "Traffic Diversification", "Monetization Systems"] },
  ],
  methodology: [
    { title: "Diagnose First",      body: "Every engagement begins with a root-cause audit, not a strategy proposal.",                                icon: SearchCheck, color: GOLD },
    { title: "Systems Over Tactics",body: "A single system that compounds outperforms 100 isolated tactics.",                                         icon: Layers,      color: GOLD },
    { title: "Authority Over Traffic",body: "Traffic metrics are vanity. Authority metrics are the only ones worth engineering toward.",               icon: TrendingUp,  color: GOLD },
  ],
  availableFor: [
    "AI SEO Consultation",
    "Content Ecosystem Audits",
    "LIONXE™ Framework Reviews",
    "Semantic Architecture Projects",
  ],
};

const FAQ_DATA = [
  { q: "What does a Growth Systems Architect actually do?",                   a: "Designs the complete digital system — technical SEO architecture, content structure, AI search positioning, platform engineering, and quality auditing — so that every layer works together and compounds authority over time." },
  { q: "What is the LIONXE™ framework and why was it created?",              a: "LIONXE™ is a proprietary four-gate quality standard (Logic & Longevity → Internal Optimization → Non-Negotiable Integrity → Exceptional Execution). It was created because existing audit tools check surface metrics, not structural integrity. LIONXE™ evaluates whether a digital asset is built to survive — not just rank today." },
  { q: "How does this work differ from typical SEO or web development?",      a: "Most SEO work optimizes pages. Most development builds features. This work architects the system underneath both — the structure that determines whether a site compounds authority or slowly decays. The 87-site enterprise audit is a concrete example of that depth." },
  { q: "What are the three platforms in the ecosystem?",                      a: "DoItWithAI.tools (a live AI SEO platform with 8,000+ word articles, 7+ schema types, and a content architecture designed for AI search), the LIONXE™ framework (a proprietary audit standard with governing laws and a scoring engine), and sufianmustafa.com (this authority hub)." },
  { q: "What was the enterprise research report?",                            a: "A 15-chapter strategic audit of a US carpet cleaning company's 87-website network (226,200+ URLs). It covered site architecture, content quality, automated pipelines, social media fragmentation, team capacity, legal compliance, and proposed a complete hub-and-spoke consolidation plan." },
  { q: "What technical stack does this ecosystem run on?",                    a: "Next.js 14 (App Router, SSR, ISR), React, Tailwind CSS, Sanity CMS for structured content, Node.js backend, JSON-LD schema (7+ types), and Vercel edge deployment. AI-augmented development workflow on top of a manual coding foundation." },
  { q: "Is location a constraint for this type of work?",                     a: "No. The work is digital-first and remote by design. Strategic consulting, auditing, and architecture can be delivered anywhere — the deliverables are systems, frameworks, and structured documentation, not on-site presence." },
  { q: "How does the LIONXE™ audit differ from standard SEO audits?",        a: "Standard audits check rankings, backlinks, and speed scores. LIONXE™ evaluates vertically across four gates: foundational logic, internal optimization completeness, ethical integrity, and whether the asset achieves exceptional distinction. Failure at any gate voids the entire assessment." },
  { q: "What does a typical engagement look like?",                           a: "Every engagement is scoped around a diagnosis — not an open-ended retainer. The goal is to deliver a self-sustaining system: the architecture, the documentation, and the audit. The system should run without creating a dependency." },
  { q: "Where can the LIONXE™ framework be explored further?",               a: "The full doctrine, four pillars, governing laws, and audit methodology are documented at lionxeframework.com. Enterprise licensing and evaluation inquiries can be made through the contact page." },
];

const CONTACT_DATA = [
  { label: "Strategic Advisory",   value: "Inquire about engagement",  icon: Target, href: "/contact" },
  { label: "LIONXE™ Licensing",   value: "Enterprise audit inquiry",   icon: Shield, href: "/contact" },
  { label: "Email",                value: "hello@sufianmustafa.com",    icon: Mail,   href: "mailto:hello@sufianmustafa.com" },
  { label: "DoItWithAI.tools",     value: "Visit the platform",         icon: Globe,  href: "https://doitwithai.tools" },
];

const SOCIAL_DATA = [
  { label: "LinkedIn", handle: "/in/sufianmustafa",   icon: Linkedin, color: "#0a66c2", href: "#" },
  { label: "GitHub",   handle: "/sufianmustafa",      icon: Github,   color: "#6e7681", href: "#" },
  { label: "X",        handle: "@sufianmustafa",      icon: Twitter,  color: "#EDE9DC", href: "#" },
  { label: "YouTube",  handle: "Do It With AI",       icon: Youtube,  color: "#ff0000", href: "#" },
  { label: "Email",    handle: "hello@sufianmustafa", icon: Mail,     color: GOLD,      href: "mailto:hello@sufianmustafa.com" },
];

const GALLERY_DATA = [
  { title: "DoItWithAI.tools Platform",      subtitle: "Live AI SEO authority hub",      src: "/gallery/doitwithai-01.jpg", alt: "DoItWithAI.tools platform preview",     status: "Live & Compounding",  statusColor: "#00D9FF" },
  { title: "LIONXE™ Framework v1.0",        subtitle: "Proprietary audit standard",      src: "/do.png",                   alt: "LIONXE framework visual preview",        status: "Active & Documented", statusColor: "#4D7BFF" },
  { title: "Organizational Research Report", subtitle: "Deep research & strategy",        src: "/gallery/research-01.jpg",  alt: "Research workspace preview",             status: "Delivered",           statusColor: GOLD      },
  { title: "sufianmustafa.com",             subtitle: "Authority layer — personal hub",   src: "/ss.png",                   alt: "Sufian Mustafa portfolio gallery image",  status: "Building",            statusColor: GOLD      },
  { title: "LIONXE™ Audit Simulator",      subtitle: "Interactive framework demo",        src: "/gallery/content-system-01.jpg",alt: "Audit simulator preview",            status: "Interactive Demo",    statusColor: "#4D7BFF" },
];

const TIMELINE_DATA = [
  { year: "Academic",   text: "BCS in Computer Science — strong academic foundation in systems, logic, and structured problem-solving.",          color: GOLD    },
  { year: "Academic",   text: "MCS in Computer Science — web fundamentals class sparks the shift to web development.",                           color: GOLD    },
  { year: "Self-Taught",text: "HTML, CSS, JavaScript, React, MERN stack — manual web development foundation built without AI.",                   color: GOLD    },
  { year: "Architecture",text: "Shifted to Next.js + Sanity CMS for performance, SEO, and structured content.",                                  color: GOLD    },
  { year: "Grind",      text: "18-month isolation build phase — DoItWithAI.tools, AI workflows, SEO mastery, platform ownership.",               color: "#00D9FF"},
  { year: "Platform",   text: "doitwithai.tools reaches live operational status — a solo-built AI SEO authority hub.",                           color: "#00D9FF"},
  { year: "Corporate",  text: "Think Higher Consultants — first professional market entry and pressure-test.",                                    color: GOLD    },
  { year: "Enterprise", text: "WAYWE Gaming — 87-site network research, 15-chapter enterprise audit, local SEO architecture.",                   color: GOLD    },
  { year: "Framework",  text: "LIONXE™ — proprietary four-gate quality standard crystallized from the full journey.",                           color: "#4D7BFF",recent: true },
];

const MANIFESTO_DATA = [
  { code: "L",  color: "#4D7BFF", title: "The Post-Flood Collapse Rule",  body: "Immediate spikes mean nothing if they lead to future obsolescence. If the lifespan projection trends toward zero after a brief surge, the project is a structural failure." },
  { code: "IO", color: "#4D7BFF", title: "The Weakest Link Axiom",        body: "The overall value of any framework is permanently capped by its worst-executed internal layer. Substandard work cannot be hidden behind a few highly optimized features." },
  { code: "N",  color: "#4D7BFF", title: "The Cost-Indifferent Mandate",  body: "True integrity only exists when you stick to it even when it costs you. If compliance requires sacrificing immediate revenue, the sacrifice must be made without hesitation." },
  { code: "XE", color: "#4D7BFF", title: "The Commodity Threshold Law",   body: "If an asset can be easily replaced by a generic alternative, its distinction score is zero. We do not reward basic competence — only exceptional execution that breaks the mold." },
];

const PILLAR_DEFAULTS = [
  { code: "L",  name: "Logic & Longevity",          color: "#4D7BFF", status: "pass" },
  { code: "IO", name: "Internal Optimization",      color: "#4D7BFF", status: "pass" },
  { code: "N",  name: "Non-Negotiable Integrity",   color: "#4D7BFF", status: "pass" },
  { code: "XE", name: "Exceptional Distinction",    color: "#4D7BFF", status: "pass" },
];

const PILLAR_LAWS = {
  L:  ["Assets must prove compounding value over their projected lifecycle","Short-sighted foundations are an automatic failure","Upstream rejection: stop the audit if longevity fails"],
  IO: ["95% optimized = total failure — no fractional excellence","Weakest-link axiom: one broken layer collapses all","Zero operational friction across every component"],
  N:  ["1% deception = 0% integrity score — no partial honesty","Cost-indifferent mandate: ethics even at revenue sacrifice","Absolute kill-switch: overrides all previous pillar scores"],
  XE: ["Eliminates conformity — commands elite market positioning","Flawless execution that cannot be replicated or diluted","Category authority that stands unmistakably apart"],
};

const PILLAR_FIX = {
  L:  "Rebuild the foundational logic. The asset has no long-term trajectory.",
  IO: "Complete every internal layer before proceeding. Fractional excellence is not excellence.",
  N:  "An integrity failure overrides all previous passes. The entire audit is void. Eliminate deceptive elements completely.",
  XE: "The asset lacks distinction. Identify the unique angle that makes it irreplaceable.",
};

const PILLAR_FAILURE_DETAIL = {
  L:  "A longevity failure means the asset was designed for a sprint, not a marathon. Upstream rejection applies — the audit stops here. No further pillar evaluation is meaningful.",
  IO: "One incomplete layer invalidates the whole. The weakest-link axiom is non-negotiable: fix every broken component before resubmission.",
  N:  "An integrity failure overrides all previous passing scores. The entire audit result is void. Ethical clarity is not negotiable — not even at revenue sacrifice.",
  XE: "A distinction score of zero means the asset is indistinguishable from its competition. Being good is not enough. The market only certifies the unreplicable.",
};

const ANALYTICS_DATA = {
  doitwithai: { name: "DoItWithAI", metrics: [
    { label: "Status",       value: "Live"                       },
    { label: "Stack",        value: "Next.js 14 + Sanity CMS"   },
    { label: "Articles",     value: "8,000+ avg word depth"      },
    { label: "Schema Types", value: "7+ implemented"             },
    { label: "Architecture", value: "Pillar-cluster + E-E-A-T"  },
  ]},
  lionxe: { name: "LIONXE™", metrics: [
    { label: "Status",         value: "Active"                    },
    { label: "Standard",       value: "4 sequential gates"        },
    { label: "Governing Laws", value: "4 defined"                 },
    { label: "Applied",        value: "15-chapter enterprise audit"},
    { label: "Scope",          value: "Digital + business + personal"},
  ]},
  sufian: { name: "Portfolio", metrics: [
    { label: "Status",      value: "Building"                   },
    { label: "Ecosystem",   value: "3 interconnected platforms" },
    { label: "Stack",       value: "Next.js 14 + Tailwind"      },
    { label: "Positioning", value: "Growth Systems Architect"   },
    { label: "Target",      value: "Dubai · GCC · Enterprise"   },
  ]},
};

const TERMINAL_BOOT = [
  "Initializing LIONXE_Matrix... [OK]",
  "Loading content_systems... 8,341 words [OK]",
  "Authority index: compounding [OK]",
  "Loading Authority Protocol v2.1... [OK]",
  "Connecting to search index... [OK]",
  "System ready. sufianmustafa.com v1.0",
  "Type a command to begin.",
];

/* ═══════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function HeroSection() {
  const sectionRef   = useRef(null);
  const rafRef       = useRef(null);
  const canvasRef    = useRef(null);
  const roleTrackRef = useRef(null);
  const lastInteractionRef = useRef(0);
  const termBodyRef  = useRef(null);
  const quoteTimerRef= useRef(null);
const [showConstructionBar, setShowConstructionBar] = useState(true);
  const [accent, setAccent]   = useState(ACCENT_THEMES[0].value);
  const accentInk = useMemo(
    () => (ACCENT_THEMES.find((t) => t.value === accent) || ACCENT_THEMES[0]).ink,
    [accent]
  );

  const [roleIndex,    setRoleIndex]    = useState(0);
  const [roleVisible,  setRoleVisible]  = useState(true);
  const [roleDragging, setRoleDragging] = useState(false);
  const [mounted,      setMounted]      = useState(false);

  const [activeCategory,  setActiveCategory]  = useState(null);
  const [phoneView,       setPhoneView]       = useState("home");
  const [activeSubcat,    setActiveSubcat]    = useState(null);
  const [pillarStates,    setPillarStates]    = useState(PILLAR_DEFAULTS.map((p) => ({ ...p })));
  const [auditProject,    setAuditProject]    = useState("");
  const [auditCopied,     setAuditCopied]     = useState(false);
  const [activeExpertise, setActiveExpertise] = useState(null);
  const [activeFaq,       setActiveFaq]       = useState(null);
  const [switchAnim,      setSwitchAnim]      = useState(false);
  const [wallpaper,       setWallpaper]       = useState(0);
  const [slide,           setSlide]           = useState(0);
  const [quoteIndex,      setQuoteIndex]      = useState(0);
  const [gallerySlide,    setGallerySlide]    = useState(0);
  const [buildingIndex,   setBuildingIndex]   = useState(0);

  const [islandState,   setIslandState]   = useState("idle");
  const [islandMessage, setIslandMessage] = useState("");

  const [termLines,  setTermLines]  = useState([]);
  const [termBooted, setTermBooted] = useState(false);

  const [analyticsTab, setAnalyticsTab] = useState("doitwithai");

  const [particles] = useState(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i, x: Math.random() * 100, y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8, opacity: Math.random() * 0.45 + 0.1,
      speed: Math.random() * 0.012 + 0.004, drift: (Math.random() - 0.5) * 0.008,
    }))
  );

  /* ── Dynamic Island ── */
  const triggerIsland = useCallback((state, message = "", duration = 2200) => {
    setIslandState(state);
    setIslandMessage(message);
    const t = setTimeout(() => setIslandState("idle"), duration);
    return () => clearTimeout(t);
  }, []);

  /* ── Gallery auto-slide ── */
  useEffect(() => {
    if (activeCategory !== "gallery") return;
    const timer = setInterval(() => {
      setGallerySlide((c) => (c + 1) % GALLERY_DATA.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [activeCategory]);

  useEffect(() => {
    const t = setInterval(() => setBuildingIndex((i) => (i + 1) % BUILDING_STATUS.length), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteractionRef.current < 4000) return;
      setRoleVisible(false);
      setTimeout(() => { setRoleIndex((i) => (i + 1) % ROLES.length); setRoleVisible(true); }, 320);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const startQuoteTimer = useCallback(() => {
    if (quoteTimerRef.current) clearInterval(quoteTimerRef.current);
    quoteTimerRef.current = setInterval(() => setQuoteIndex((i) => (i + 1) % QUOTES.length), 5000);
  }, []);

  useEffect(() => {
    startQuoteTimer();
    return () => { if (quoteTimerRef.current) clearInterval(quoteTimerRef.current); };
  }, [startQuoteTimer]);

  const shuffleQuote = useCallback(() => {
    setQuoteIndex((i) => {
      let next = i;
      while (next === i) next = Math.floor(Math.random() * QUOTES.length);
      return next;
    });
    triggerIsland("quote", "", 1200);
    startQuoteTimer();
  }, [startQuoteTimer, triggerIsland]);

  useEffect(() => {
    if (activeCategory) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % SHOWCASE_SLIDES.length), 3600);
    return () => clearInterval(t);
  }, [activeCategory]);

  useEffect(() => {
    if (activeCategory !== "terminal" || termBooted) return;
    if (typeof window !== "undefined" && window.sessionStorage?.getItem("sm-term-booted")) {
      setTermLines(TERMINAL_BOOT.map((text) => ({ type: "boot", text })));
      setTermBooted(true);
      return;
    }
    let i = 0;
    setTermLines([]);
    const t = setInterval(() => {
      setTermLines((prev) => [...prev, { type: "boot", text: TERMINAL_BOOT[i] }]);
      i++;
      if (i >= TERMINAL_BOOT.length) { clearInterval(t); setTermBooted(true); try { window.sessionStorage?.setItem("sm-term-booted", "1"); } catch (e) {} }
    }, 380);
    return () => clearInterval(t);
  }, [activeCategory, termBooted]);

  useEffect(() => {
    if (termBodyRef.current) termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
  }, [termLines]);

  /* PERF: mobileQueryRef caches the media query instead of re-querying
     matchMedia on every single pointermove event. */
  const mobileQueryRef = useRef(null);
  useEffect(() => {
    mobileQueryRef.current = window.matchMedia("(max-width: 768px)");
  }, []);

  /* PERF: spotlight no longer goes through React state. Writing
     "--spotlight-x/y" straight onto the section DOM node via ref lets the
     browser update just that CSS custom property on every animation frame,
     instead of re-rendering (and re-diffing) the entire Hero tree on every
     mouse move — this was the main source of scroll/hover jank. */
  const handlePointerMove = useCallback((e) => {
    if (mobileQueryRef.current?.matches) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--spotlight-x", `${x}%`);
      section.style.setProperty("--spotlight-y", `${y}%`);
    });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => { el.removeEventListener("pointermove", handlePointerMove); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [handlePointerMove]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animId;
    const pState = particles.map((p) => ({
      ...p,
      fillStyle: `${accent}${Math.round(p.opacity * 255).toString(16).padStart(2, "0")}`,
    }));
    const render = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);
      pState.forEach((p) => {
        const px = (p.x / 100) * width, py = (p.y / 100) * height;
        ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.fillStyle;
        ctx.fill();
        p.y -= p.speed; p.x += p.drift;
        if (p.y < -2) p.y = 102; if (p.x < -2) p.x = 102; if (p.x > 102) p.x = -2;
      });
      animId = requestAnimationFrame(render);
    };
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    render();
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, [accent, particles]);

  const setRoleFromClientX = useCallback((clientX) => {
    const track = roleTrackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pad = 10;
    const usable = rect.width - pad * 2;
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left - pad) / usable));
    const idx = Math.min(ROLES.length - 1, Math.round(ratio * (ROLES.length - 1)));
    setRoleIndex(idx); setRoleVisible(true);
  }, []);

  const onRolePointerDown = useCallback((e) => { lastInteractionRef.current = Date.now(); setRoleDragging(true); setRoleFromClientX(e.clientX); e.currentTarget.setPointerCapture?.(e.pointerId); }, [setRoleFromClientX]);
  const onRolePointerMove = useCallback((e) => { if (!roleDragging) return; lastInteractionRef.current = Date.now(); setRoleFromClientX(e.clientX); }, [roleDragging, setRoleFromClientX]);
  const onRolePointerUp   = useCallback(() => setRoleDragging(false), []);

  const activeWallpaper = WALLPAPERS[wallpaper];

  /* FIX: --role-color uses each role's own distinct color, not the global accent */
  const cssVars = useMemo(
    () => ({
      "--accent":      accent,
      "--accent-ink":  accentInk,
      "--spotlight-x": "50%",
      "--spotlight-y": "40%",
      "--role-color":  ROLES[roleIndex].color,
      "--phone-bg":    activeWallpaper.gradient,
      "--phone-accent":activeWallpaper.accent,
    }),
    [accent, accentInk, roleIndex, activeWallpaper]
  );

  const currentRole = ROLES[roleIndex];
  const RoleIcon    = currentRole.icon;
  const rolePos     = roleIndex / (ROLES.length - 1);

  const navigatePhone = useCallback((category, view = "home", subcat = null) => {
    setSwitchAnim(true);
    setTimeout(() => {
      setActiveCategory(category);
      setPhoneView(view);
      setActiveSubcat(subcat);
      setActiveExpertise(null);
      setActiveFaq(null);
      if (category !== "terminal") setTermBooted(false);
      setSwitchAnim(false);
    }, 170);
  }, []);

  const dockKey = (e, fn) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } };

  const togglePillar = useCallback((idx) => {
    setPillarStates((prev) => {
      const next = prev.map((p, i) => i === idx ? { ...p, status: p.status === "pass" ? "fail" : p.status === "fail" ? "pending" : "pass" } : p);
      const firstFail = next.findIndex((p) => p.status === "fail");
      const hasPending = next.some((p) => p.status === "pending");
      setTimeout(() => {
        if (!hasPending && firstFail === -1) triggerIsland("certified", "LIONXE Certified", 2200);
        else if (firstFail >= 0) triggerIsland("rejected", `Rejected · ${next[firstFail].code}`, 2200);
      }, 50);
      return next;
    });
  }, [triggerIsland]);

  const auditResult = useMemo(() => {
    const firstFail  = pillarStates.findIndex((p) => p.status === "fail");
    const hasPending = pillarStates.some((p) => p.status === "pending");
    if (hasPending)      return { verdict: "Under Review",                        color: "#D98E2B", icon: AlertTriangle, fixIdx: -1        };
    if (firstFail === -1)return { verdict: "LIONXE Certified",                    color: "#2FB07A", icon: CheckCircle2,  fixIdx: -1        };
    return                      { verdict: `Rejected at ${pillarStates[firstFail].code}`, color: "#D45A5A", icon: XCircle, fixIdx: firstFail };
  }, [pillarStates]);

  const copyAudit = useCallback(() => {
    const proj = auditProject.trim() ? ` — ${auditProject.trim()}` : "";
    const txt  = `LIONXE Audit Result: ${auditResult.verdict}${proj}. Powered by the LIONXE™ framework.`;
    navigator.clipboard?.writeText(txt);
    setAuditCopied(true);
    setTimeout(() => setAuditCopied(false), 1800);
  }, [auditProject, auditResult]);

  const runTermCommand = useCallback((cmd) => {
    const push = (lines) => setTermLines((prev) => [...prev, { type: "cmd", text: `$ ${cmd}` }, ...lines.map((l) => ({ type: "out", text: l }))]);
    if (cmd === "/clear") { setTermLines([{ type: "out", text: "Screen cleared. System ready." }]); return; }
    if (cmd === "/help")  push(["Available commands:","  /about   — print bio","  /audit   — run a LIONXE scan","  /work    — list platforms","  /help    — list commands","  /clear   — wipe screen"]);
    else if (cmd === "/about") push(["Sufian Mustafa — Growth Systems Architect","LIONXE™ creator · Technical SEO · AI-augmented web systems","MSc Computer Science · Rawalpindi, PK","Builds digital authority engineered to outlast algorithms."]);
    else if (cmd === "/audit") push(["Running LIONXE scan...","  [L]  Logic & Longevity ....... PASS","  [IO] Internal Optimization ... PASS","  [N]  Non-Negotiable Integrity  PASS","  [XE] Exceptional Distinction . PASS","Verdict: LIONXE Certified ✓"]);
    else if (cmd === "/work")  push(["Active platforms:","  doitwithai.tools     — AI SEO authority hub [LIVE]","  lionxeframework.com  — Framework doctrine [ACTIVE]","  sufianmustafa.com    — Authority layer [BUILDING]"]);
    else push([`command not found: ${cmd}`, "type /help for options"]);
  }, []);

  const changeAccent = useCallback((value, name) => {
    setAccent(value);
    triggerIsland("accent", name, 1600);
  }, [triggerIsland]);


  /* ═════════════════════════════════════════════════════════════════════
     CONTENT RENDERERS
     ═════════════════════════════════════════════════════════════════════ */

  const renderPhoneContent = () => {
    if (!activeCategory) return renderTabletHome();
    switch (activeCategory) {
      case "lionxe":
        if (phoneView === "audit")                    return renderAuditSimulator();
        if (phoneView === "subcat" && activeSubcat)   return renderLionxeSubcat();
        return renderLionxeMain();
      case "doitwithai":
        if (phoneView === "subcat" && activeSubcat)   return renderDoitSubcat();
        return renderDoitMain();
      case "sufian":
        if (activeExpertise !== null)                 return renderExpertiseDetail();
        return renderSufianMain();
      case "terminal":   return renderTerminal();
      case "system":     return renderSystemInfo();
      case "analytics":  return renderAnalytics();
      case "timeline":   return renderTimeline();
      case "manifesto":  return renderManifesto();
      case "faq":        return renderFaq();
      case "contact":    return renderContact();
      case "social":     return renderSocial();
      case "gallery":    return renderGallery();
      case "skills":     return renderSkills();
      case "gulfvision": return renderGulfVision();
      case "settings":   return renderSettings();
      default:           return renderTabletHome();
    }
  };

  /* ─── HOME ─── */
  const renderTabletHome = () => {
    const Slide     = SHOWCASE_SLIDES[slide];
    const SlideIcon = Slide.icon;
    const q         = QUOTES[quoteIndex];
    return (
      <div className="phone-view-inner">
        <ClockWidget />

        <div className="tab-building-widget">
          <span className="tab-building-dot" />
          <span className="tab-building-label">Currently building</span>
          <span key={buildingIndex} className="tab-building-text">{BUILDING_STATUS[buildingIndex]}</span>
        </div>

        <div className="tab-slider" style={{ "--slide-color": Slide.color }}>
          <div key={slide} className="tab-slide">
            <div className="tab-slide-icon"><SlideIcon size={18} aria-hidden /></div>
            <div className="tab-slide-eyebrow">{Slide.eyebrow}</div>
            <div className="tab-slide-title">{Slide.title}</div>
            <p className="tab-slide-body">{Slide.body}</p>
          </div>
          <div className="tab-slide-dots">
            {SHOWCASE_SLIDES.map((_, i) => (
              <button key={i} className={`tab-slide-dot ${i === slide ? "tab-slide-dot--active" : ""}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="tab-quote">
          <QuoteIcon size={13} aria-hidden className="tab-quote-mark" />
          <button className="tab-quote-shuffle" onClick={shuffleQuote} aria-label="Show another quote"><Shuffle size={12} aria-hidden /></button>
          <p key={quoteIndex} className="tab-quote-text">{q.text}</p>
          <span className="tab-quote-tag">{q.tag}</span>
        </div>

        <div className="tab-section-label">Explore the ecosystem</div>
        <div className="tab-app-grid">
          {PHONE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button key={cat.id} className="tab-app-btn" style={{ "--cat-color": cat.color }} onClick={() => navigatePhone(cat.id)} aria-label={`Open ${cat.label}`}>
                <div className="tab-app-icon"><Icon size={20} aria-hidden /></div>
                <span className="tab-app-label">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  /* ─── LIONXE MAIN ─── */
  const renderLionxeMain = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#4D7BFF" }}>
        <div className="phone-header-badge">LIONXE™ · {LIONXE_DATA.header.badge}</div>
        <h3 className="phone-header-title">{LIONXE_DATA.header.title}</h3>
        <p className="phone-header-sub">{LIONXE_DATA.header.subtitle}</p>
      </div>
      <p className="phone-overview-text">{LIONXE_DATA.overview}</p>
      <div className="phone-section-label">Quick Access</div>
      <div className="phone-subcat-list">
        {LIONXE_DATA.subcategories.map((sc) => {
          const Icon = sc.icon;
          return (
            <button key={sc.id} className="phone-subcat-item"
              onClick={() => sc.id === "audit" ? navigatePhone("lionxe", "audit") : navigatePhone("lionxe", "subcat", sc.id)}
              aria-label={sc.label}>
              <Icon size={15} aria-hidden /><span>{sc.label}</span><ChevronRight size={13} aria-hidden className="phone-subcat-arrow" />
            </button>
          );
        })}
      </div>
      <div className="phone-section-label">4 Pillars</div>
      <div className="phone-pillars-grid">
        {LIONXE_DATA.pillars.map((p) => (
          <button key={p.code} className="phone-pillar-chip" style={{ "--pillar-color": p.color }}
            onClick={() => navigatePhone("lionxe", "subcat", `pillar-${p.code}`)} aria-label={`Pillar ${p.code}: ${p.name}`}>
            <span className="phone-pillar-code">{p.code}</span><span className="phone-pillar-name">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  /* ─── LIONXE SUBCAT ─── */
  const renderLionxeSubcat = () => {
    /* Pillar detail */
    if (activeSubcat?.startsWith("pillar-")) {
      const code   = activeSubcat.replace("pillar-", "");
      const pillar = LIONXE_DATA.pillars.find((p) => p.code === code);
      if (!pillar) return null;
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <div className="phone-pillar-detail-header" style={{ "--pillar-color": pillar.color }}>
            <span className="phone-pillar-detail-code">{pillar.code}</span>
            <h3 className="phone-pillar-detail-name">{pillar.name}</h3>
          </div>
          <p className="phone-overview-text" style={{ marginTop: "0.75rem" }}>{pillar.desc}</p>
          <div className="phone-pillar-law-list">
            {PILLAR_LAWS[pillar.code].map((law, i) => (
              <div key={i} className="phone-law-item"><span className="phone-law-num">{i + 1}</span><span>{law}</span></div>
            ))}
          </div>
        </div>
      );
    }

    /* FIX: "4 Pillars" tab was empty — now shows all four pillars with laws */
    if (activeSubcat === "pillars") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">4 Pillars</h3>
          <p className="phone-overview-text">Four sequential gates. Failure at any single gate voids the entire audit — no partial certification.</p>
          {LIONXE_DATA.pillars.map((p) => (
            <div key={p.code} style={{ borderRadius: "13px", padding: "13px", background: `color-mix(in srgb, ${p.color} 8%, rgba(255,255,255,0.03))`, border: `1px solid color-mix(in srgb, ${p.color} 25%, transparent)`, borderLeft: `3px solid ${p.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "7px" }}>
                <span style={{ fontSize: "16px", fontWeight: 900, color: p.color }}>{p.code}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{p.name}</span>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.58)", margin: "0 0 8px" }}>{p.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {PILLAR_LAWS[p.code].map((law, i) => (
                  <div key={i} style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.5)", display: "flex", gap: "6px" }}>
                    <span style={{ color: p.color, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span>{law}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    /* Doctrine */
    if (activeSubcat === "doctrine") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">Framework Doctrine</h3>
          <p className="phone-overview-text" style={{ marginBottom: "4px" }}>The governing axioms that define the LIONXE™ standard. Each law is tied to a pillar — and no pillar is optional.</p>
          <div className="doctrine-list">
            {LIONXE_DOCTRINE.map((d, i) => (
              <div key={i} className="doctrine-item" style={{ "--doctrine-color": d.color }}>
                <div className="doctrine-pillar-tag" style={{ color: d.color, background: `color-mix(in srgb, ${d.color} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${d.color} 28%, transparent)` }}>{d.pillar}</div>
                <p className="doctrine-text">"{d.text}"</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    const content = {
      about:   { title: "About LIONXE™",  body: "LIONXE™ (lee-ohn-zay) is a proprietary auditing framework engineered by Sufian Mustafa. It functions as a precise architectural matrix where each letter dictates a non-negotiable law of execution — designed to eliminate the volatile, short-sighted strategies that collapse under market shifts." },
      history: { title: "The Origin",     body: "LIONXE™ began with a single diagnostic question: why do high-performing digital assets eventually collapse under algorithm shifts? After dissecting that failure pattern — surface metrics, platform dependence, generic execution — Sufian reverse-engineered a permanent architecture from the diagnosis. The result is a four-pillar standard that certifies only what is built to compound, not spike." },
    };
    const c = content[activeSubcat];
    if (!c) return null;
    return (
      <div className="phone-view-inner">
        <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
        <h3 className="phone-subview-title">{c.title}</h3>
        <p className="phone-overview-text">{c.body}</p>
      </div>
    );
  };

  /* ─── AUDIT SIMULATOR ─── */
  const renderAuditSimulator = () => {
    const ResultIcon = auditResult.icon;
    const failPillar = auditResult.fixIdx >= 0 ? pillarStates[auditResult.fixIdx] : null;
    return (
      <div className="phone-view-inner">
        <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
        <div className="phone-audit-header">
          <h3 className="phone-subview-title">Audit Simulator</h3>
          <p className="phone-audit-hint">Tap each pillar to toggle Pass / Fail / Review</p>
        </div>
        <textarea className="phone-audit-input" placeholder="Describe your project or asset (optional)…" value={auditProject} onChange={(e) => setAuditProject(e.target.value)} rows={2} aria-label="Project description" />
        <div className="phone-audit-pillars">
          {pillarStates.map((p, idx) => (
            <button key={p.code} className={`phone-audit-pillar phone-audit-pillar--${p.status}`} style={{ "--pillar-color": p.color }} onClick={() => togglePillar(idx)} aria-label={`${p.code} pillar — ${p.status}. Tap to change`}>
              <div className="phone-audit-pillar-left"><span className="phone-audit-code">{p.code}</span><span className="phone-audit-pname">{p.name}</span></div>
              <div className={`phone-audit-badge phone-audit-badge--${p.status}`}>
                {p.status === "pass" ? <CheckCircle2 size={13} aria-hidden /> : p.status === "fail" ? <XCircle size={13} aria-hidden /> : <AlertTriangle size={13} aria-hidden />}
                <span>{p.status === "pass" ? "Pass" : p.status === "fail" ? "Fail" : "Review"}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="phone-audit-flow">
          {pillarStates.map((p, idx) => {
            const isLast   = idx === pillarStates.length - 1;
            const nextFail = p.status === "fail";
            return (
              <React.Fragment key={p.code}>
                <div className={`phone-flow-node phone-flow-node--${p.status}`} style={{ "--pillar-color": p.color }}>{p.code}</div>
                {!isLast && <div className={`phone-flow-arrow ${nextFail ? "phone-flow-arrow--broken" : ""}`}>{nextFail ? "✗" : "→"}</div>}
              </React.Fragment>
            );
          })}
        </div>
        <div className="phone-audit-result" style={{ "--result-color": auditResult.color }}><ResultIcon size={17} aria-hidden /><span>{auditResult.verdict}</span></div>
        {auditResult.fixIdx >= 0 && failPillar && (
          <div className="audit-failure-analysis" style={{ "--fa-color": failPillar.color }}>
            <div className="audit-fa-head"><XCircle size={13} aria-hidden /> Failure Analysis · {failPillar.code}</div>
            <p className="audit-fa-body">{PILLAR_FAILURE_DETAIL[failPillar.code]}</p>
            <p className="audit-fa-fix"><strong>Required action:</strong> {PILLAR_FIX[failPillar.code]}</p>
          </div>
        )}
        <div className="phone-audit-actions">
          <button className="phone-reset-btn" onClick={() => { setPillarStates(PILLAR_DEFAULTS.map((p) => ({ ...p }))); setAuditProject(""); }} aria-label="Reset pillars">Reset</button>
          <button className="phone-copy-btn"  onClick={copyAudit} aria-label="Copy result">{auditCopied ? <><Check size={13} aria-hidden /> Copied</> : <><Copy size={13} aria-hidden /> Copy result</>}</button>
        </div>
      </div>
    );
  };

  /* ─── DOITWITHAI MAIN ─── */
  const renderDoitMain = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#00D9FF" }}>
        <div className="phone-header-badge">Live Platform · {DOITWITHAI_DATA.header.badge}</div>
        <h3 className="phone-header-title">{DOITWITHAI_DATA.header.title}</h3>
        <p className="phone-header-sub">{DOITWITHAI_DATA.header.subtitle}</p>
      </div>
      <p className="phone-overview-text">{DOITWITHAI_DATA.overview}</p>
      <div className="phone-stats-grid">
        {DOITWITHAI_DATA.stats.map((s) => (<div key={s.label} className="phone-stat-chip"><span className="phone-stat-val">{s.value}</span><span className="phone-stat-lbl">{s.label}</span></div>))}
      </div>
      <div className="phone-section-label">Explore</div>
      <div className="phone-subcat-list">
        {DOITWITHAI_DATA.subcategories.map((sc) => {
          const Icon = sc.icon;
          return (<button key={sc.id} className="phone-subcat-item" onClick={() => navigatePhone("doitwithai", "subcat", sc.id)} aria-label={sc.label}><Icon size={15} aria-hidden /><span>{sc.label}</span><ChevronRight size={13} aria-hidden className="phone-subcat-arrow" /></button>);
        })}
      </div>
      <a className="tab-visit-btn" href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Visit live site <ExternalLink size={13} aria-hidden /></a>
    </div>
  );

  /* ─── DOITWITHAI SUBCAT ─── */
  const renderDoitSubcat = () => {
    if (activeSubcat === "content") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("doitwithai")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">Content Strategy</h3>
          <p className="phone-overview-text">Every article is engineered to compound — published only when it will gain value over time, never to chase a trend (LIONXE™ Longevity pillar).</p>
          <div className="phone-section-label">Content Tiers</div>
          <div className="phone-stack-list">
            <div className="phone-stack-row"><span className="phone-stack-key">Pillar Pages</span><span className="phone-stack-val">8,000+ words</span></div>
            <div className="phone-stack-row"><span className="phone-stack-key">Cluster Articles</span><span className="phone-stack-val">3–5K words</span></div>
            <div className="phone-stack-row"><span className="phone-stack-key">Quick-win Posts</span><span className="phone-stack-val">1.2–2K words</span></div>
          </div>
          <div className="phone-section-label">Quality Standards</div>
          <div className="phone-tag-wrap">
            {["Zero AI detection","12–15 keyword integrations","H2 SEO architecture","Structured FAQ closing","US-standard legal review","1 primary + 4–6 secondary keywords"].map((t) => (<span key={t} className="phone-tag" style={{ "--tag-color": "#00D9FF" }}>{t}</span>))}
          </div>
        </div>
      );
    }
    if (activeSubcat === "why") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("doitwithai")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">Why It Exists</h3>
          <div className="doit-mission-card">
            <div className="doit-mission-icon"><Lightbulb size={20} aria-hidden /></div>
            <p className="doit-mission-body">DoItWithAI.tools was built to answer one question no existing platform was answering: Can you build a search-authoritative platform using AI-native workflows without sacrificing depth, quality, or long-term credibility? Every article is the answer.</p>
          </div>
          <div className="phone-section-label">The Problem It Solves</div>
          <div className="phone-stack-list">
            <div className="phone-stack-row"><span className="phone-stack-key">Before</span><span className="phone-stack-val" style={{ color: "#D45A5A" }}>AI content = thin content</span></div>
            <div className="phone-stack-row"><span className="phone-stack-key">After</span><span className="phone-stack-val" style={{ color: "#2FB07A" }}>AI-native = authority-first</span></div>
            <div className="phone-stack-row"><span className="phone-stack-key">Goal</span><span className="phone-stack-val">Permanent visibility</span></div>
          </div>
        </div>
      );
    }
    if (activeSubcat === "philosophy") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("doitwithai")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">Content Philosophy</h3>
          <p className="phone-overview-text">Every article begins with a question that has no satisfying answer online. The goal is not keyword density — it is architectural depth.</p>
          <div className="philosophy-card">
            <p>"The reader should finish the article knowing more than anyone else on that subject, including the people who rank above it currently."</p>
            <span>Sufian Mustafa · Content Architecture Doctrine</span>
          </div>
          <div className="phone-section-label">Non-Negotiables</div>
          <div className="phone-pillar-law-list">
            {["Start with the gap — identify what's missing everywhere else.","Depth over density — structured knowledge beats keyword stuffing.","Compound value — every article gets more valuable as the platform grows.","Authority signals — E-E-A-T embedded from the first paragraph."].map((l, i) => (
              <div key={i} className="phone-law-item"><span className="phone-law-num">{i + 1}</span><span>{l}</span></div>
            ))}
          </div>
        </div>
      );
    }
    const content = {
      what:  { title: "What is DoItWithAI.tools?", body: "A live AI SEO authority platform where every article is engineered for long-term search compounding — not clicks, not trends, but permanent visibility. Every article is both an educational resource and a real-world SEO experiment that proves AI-native workflows can produce genuine authority content." },
      stack: { title: "Tech Stack", items: [{ label: "Frontend", value: "Next.js 14 (App Router)" },{ label: "CMS", value: "Sanity Studio" },{ label: "Styling", value: "Tailwind CSS + MUI" },{ label: "Caching", value: "Redis + React Query" },{ label: "Schema", value: "JSON-LD, OpenGraph" },{ label: "Deploy", value: "Vercel (Edge)" }] },
      seo:   { title: "SEO Architecture", body: "Built on the LIONXE™ framework. Pillar pages, cluster articles, semantic keyword grouping, structured data (7+ schema types), Core Web Vitals optimization, GEO/AEO signals for AI-generated answers, and EEAT maximization through deep author authority." },
    };
    const c = content[activeSubcat];
    if (!c) return null;
    return (
      <div className="phone-view-inner">
        <button className="phone-back-btn" onClick={() => navigatePhone("doitwithai")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
        <h3 className="phone-subview-title">{c.title}</h3>
        {c.body  && <p className="phone-overview-text">{c.body}</p>}
        {c.items && <div className="phone-stack-list">{c.items.map((item) => (<div key={item.label} className="phone-stack-row"><span className="phone-stack-key">{item.label}</span><span className="phone-stack-val">{item.value}</span></div>))}</div>}
      </div>
    );
  };

  /* ─── SUFIAN MAIN ─── */
  const renderSufianMain = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">{SUFIAN_DATA.header.badge}</div>
        <h3 className="phone-header-title">{SUFIAN_DATA.header.title}</h3>
        <p className="phone-header-sub">{SUFIAN_DATA.header.subtitle}</p>
      </div>
      <p className="phone-overview-text">{SUFIAN_DATA.overview}</p>
      <div className="phone-section-label">Core Expertise</div>
      <div className="phone-expertise-list">
        {SUFIAN_DATA.expertise.map((exp, idx) => {
          const Icon = exp.icon;
          return (<button key={exp.label} className="phone-expertise-item" style={{ "--exp-color": exp.color }} onClick={() => setActiveExpertise(idx)} aria-label={`${exp.label} — tap for details`}><Icon size={15} aria-hidden /><span>{exp.label}</span><ChevronRight size={13} aria-hidden className="phone-subcat-arrow" /></button>);
        })}
      </div>
      <div className="phone-section-label">Methodology</div>
      <div className="sufian-method-grid">
        {SUFIAN_DATA.methodology.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} className="sufian-method-card" style={{ "--method-color": m.color }}>
              <div className="sufian-method-icon"><Icon size={14} aria-hidden /></div>
              <div className="sufian-method-title">{m.title}</div>
              <p className="sufian-method-body">{m.body}</p>
            </div>
          );
        })}
      </div>
      <div className="phone-section-label">Engagement Scope</div>
      <div className="phone-tag-wrap">
        {SUFIAN_DATA.availableFor.map((t) => (<span key={t} className="phone-tag" style={{ "--tag-color": GOLD }}>{t}</span>))}
      </div>
      <a className="tab-visit-btn" href="/about">Full profile <ArrowUpRight size={13} aria-hidden /></a>
    </div>
  );

  /* ─── EXPERTISE DETAIL ─── */
  const renderExpertiseDetail = () => {
    const exp  = SUFIAN_DATA.expertise[activeExpertise];
    if (!exp) return null;
    const Icon = exp.icon;
    return (
      <div className="phone-view-inner">
        <button className="phone-back-btn" onClick={() => setActiveExpertise(null)} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
        <div className="phone-exp-detail-header" style={{ "--exp-color": exp.color }}><Icon size={22} aria-hidden /><h3 className="phone-subview-title" style={{ marginTop: 0 }}>{exp.label}</h3></div>
        <p className="phone-overview-text">{exp.detail}</p>
        <div className="phone-tag-wrap">{exp.tags.map((t) => (<span key={t} className="phone-tag" style={{ "--tag-color": exp.color }}>{t}</span>))}</div>
      </div>
    );
  };

  /* ─── TERMINAL ─── */
  const renderTerminal = () => (
    <div className="phone-view-inner term-inner">
      <div className="term-window">
        <div className="term-titlebar"><span className="term-dot term-dot--r" /><span className="term-dot term-dot--y" /><span className="term-dot term-dot--g" /><span className="term-title">sufian@lionxe: ~</span></div>
        <div className="term-body" ref={termBodyRef}>
          {termLines.map((l, i) => (<div key={i} className={`term-line term-line--${l.type}`}>{l.text}</div>))}
          {termBooted && <div className="term-line term-prompt">$ <span className="term-cursor">▋</span></div>}
        </div>
      </div>
      <div className="term-cmd-row">
        {["/audit","/about","/work","/help","/clear"].map((cmd) => (<button key={cmd} className="term-cmd-btn" onClick={() => runTermCommand(cmd)} disabled={!termBooted} aria-label={`Run ${cmd}`}>{cmd}</button>))}
      </div>
    </div>
  );

  /* ─── ANALYTICS ─── */
  const renderAnalytics = () => {
    const data = ANALYTICS_DATA[analyticsTab];
    return (
      <div className="phone-view-inner">
        <div className="phone-header" style={{ "--hdr-color": GOLD }}>
          <div className="phone-header-badge">The system · {dateStr}</div>
          <h3 className="phone-header-title">Ecosystem</h3>
          <p className="phone-header-sub">The three-platform system at a glance</p>
        </div>
        <div className="an-tabs">
          {Object.keys(ANALYTICS_DATA).map((k) => (<button key={k} className={`an-tab ${analyticsTab === k ? "an-tab--active" : ""}`} onClick={() => setAnalyticsTab(k)}>{ANALYTICS_DATA[k].name}</button>))}
        </div>
        <div className="an-charts">
          {data.metrics.map((m) => (
            <div key={m.label} className="an-chart" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12.5px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>{m.label}</span>
              <strong style={{ fontSize: "14px", fontWeight: 800, color: "#fff" }}>{m.value}</strong>
            </div>
          ))}
        </div>
        <div className="an-authority-note">
          <TrendingUp size={12} aria-hidden />
          <span>Verified metrics from the live ecosystem — no simulated data.</span>
        </div>
      </div>
    );
  };

  /* ─── TIMELINE ─── */
  const renderTimeline = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">Built over time</div>
        <h3 className="phone-header-title">Timeline</h3>
        <p className="phone-header-sub">Career & ecosystem milestones</p>
      </div>
      <div className="tl-list">
        {TIMELINE_DATA.map((m, i) => (
          <div key={i} className={`tl-item ${m.recent ? "tl-item--recent" : ""}`} style={{ "--tl-color": m.color }}>
            <div className="tl-marker"><span className="tl-dot" /></div>
            <div className="tl-content"><span className="tl-year">{m.year}</span><p className="tl-text">{m.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ─── MANIFESTO ─── */
  const renderManifesto = () => (
    <div className="phone-view-inner mf-inner" onScroll={(e) => { const el = e.currentTarget; const bar = el.querySelector(".mf-progress-fill"); if (bar) bar.style.width = `${(el.scrollTop / (el.scrollHeight - el.clientHeight || 1)) * 100}%`; }}>
      <div className="mf-progress"><div className="mf-progress-fill" /></div>
      <div className="phone-header" style={{ "--hdr-color": "#4D7BFF" }}>
        <div className="phone-header-badge">LIONXE™ Doctrine</div>
        <h3 className="phone-header-title">Manifesto</h3>
        <p className="phone-header-sub">Four governing laws</p>
      </div>
      {MANIFESTO_DATA.map((m) => (
        <div key={m.code} className="mf-entry" style={{ "--mf-color": m.color }}>
          <div className="mf-entry-head"><span className="mf-badge">{m.code}</span><span className="mf-entry-title">{m.title}</span></div>
          <p className="mf-entry-body">"{m.body}"</p>
        </div>
      ))}
      <a className="tab-visit-btn" href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer">Read full doctrine <ExternalLink size={13} aria-hidden /></a>
    </div>
  );

  /* ─── FAQ ─── */
  const renderFaq = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">Quick Answers</div>
        <h3 className="phone-header-title">FAQ</h3>
        <p className="phone-header-sub">The questions people ask most</p>
      </div>
      <div className="tab-faq-list">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className={`tab-faq-item ${activeFaq === idx ? "tab-faq-item--open" : ""}`}>
            <button className="tab-faq-q" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} aria-expanded={activeFaq === idx}><span>{item.q}</span><ChevronRight size={14} aria-hidden className="tab-faq-chevron" /></button>
            <div className="tab-faq-a-wrap"><p className="tab-faq-a">{item.a}</p></div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ─── CONTACT ─── */
  const renderContact = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">The ecosystem</div>
        <h3 className="phone-header-title">Get in Touch</h3>
        <p className="phone-header-sub">Three platforms, one point of contact</p>
      </div>
      {[
        { name: "sufianmustafa.com",  role: "Authority hub · Advisory · Strategy",           email: "hello@sufianmustafa.com",    color: GOLD      },
        { name: "DoItWithAI.tools",   role: "AI SEO platform · Content · Partnerships",      email: "contact@doitwithai.tools",   color: "#5271FF" },
        { name: "LIONXE™ Framework", role: "Audit licensing · Enterprise evaluation",        email: "audit@lionxeframework.com",  color: "#4D7BFF" },
      ].map((p) => (
        <div key={p.name} style={{ marginBottom: "12px", padding: "14px", borderRadius: "14px", background: "rgba(255,255,255,0.04)", border: `1px solid color-mix(in srgb, ${p.color} 25%, transparent)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, boxShadow: `0 0 8px color-mix(in srgb, ${p.color} 50%, transparent)`, flexShrink: 0 }} />
            <strong style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.9)" }}>{p.name}</strong>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>{p.role}</p>
          <a href={`mailto:${p.email}`} style={{ fontSize: "12.5px", fontWeight: 700, color: p.color, textDecoration: "none" }}>{p.email} →</a>
        </div>
      ))}
      <div style={{ marginTop: "8px", padding: "12px", borderRadius: "12px", background: `rgba(227,179,65,0.08)`, textAlign: "center" }}>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>For select engagements, advisory, and speaking</span>
      </div>
    </div>
  );

  /* ─── SOCIAL ─── */
  const renderSocial = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#34d399" }}>
        <div className="phone-header-badge">Follow the work</div>
        <h3 className="phone-header-title">Social</h3>
        <p className="phone-header-sub">Insights, builds, and breakdowns</p>
      </div>
      <div className="tab-app-grid">
        {SOCIAL_DATA.map((s) => {
          const Icon = s.icon;
          return (
            <a key={s.label} className="tab-app-btn" style={{ "--cat-color": s.color }} href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={s.label}>
              <div className="tab-app-icon"><Icon size={20} aria-hidden /></div>
              <span className="tab-app-label">{s.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );

  /* ─── GALLERY ─── */
  const renderGallery = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#f472b6" }}>
        <div className="phone-header-badge">Portfolio Gallery · {GALLERY_DATA.length} Projects</div>
        <h3 className="phone-header-title">Visual Archive</h3>
        <p className="phone-header-sub">Live platforms, frameworks, and delivered work</p>
      </div>
      <div className="photo-gallery-shell">
        <div className="photo-gallery-frame">
          {GALLERY_DATA.map((photo, index) => (
            <figure key={photo.src} className={`photo-gallery-slide ${index === gallerySlide ? "photo-gallery-slide--active" : ""}`}>
              <img src={photo.src} alt={photo.alt} className="photo-gallery-image" loading={index === 0 ? "eager" : "lazy"} />
              <figcaption className="photo-gallery-caption">
                <div className="gallery-caption-top">
                  <span>{photo.subtitle}</span>
                  <span className="gallery-status-pill" style={{ color: photo.statusColor, background: `color-mix(in srgb, ${photo.statusColor} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${photo.statusColor} 26%, transparent)` }}>{photo.status}</span>
                </div>
                <strong>{photo.title}</strong>
              </figcaption>
            </figure>
          ))}
          <button type="button" className="photo-gallery-nav photo-gallery-nav--left" onClick={() => setGallerySlide((c) => c === 0 ? GALLERY_DATA.length - 1 : c - 1)} aria-label="Previous"><ChevronLeft size={16} aria-hidden /></button>
          <button type="button" className="photo-gallery-nav photo-gallery-nav--right" onClick={() => setGallerySlide((c) => (c + 1) % GALLERY_DATA.length)} aria-label="Next"><ChevronRight size={16} aria-hidden /></button>
        </div>
        <div className="photo-gallery-progress">
          {GALLERY_DATA.map((photo, index) => (
            <button key={photo.src} type="button" onClick={() => setGallerySlide(index)} className={`photo-gallery-dot ${index === gallerySlide ? "photo-gallery-dot--active" : ""}`} aria-label={`Show ${photo.title}`} />
          ))}
        </div>
      </div>
      <div className="phone-section-label">Gallery Notes</div>
      <div className="photo-gallery-info">
        <ImageIcon size={15} aria-hidden />
        <p>Add or replace images inside the <span>/public/gallery</span> folder, then update the gallery data array with the new image path.</p>
      </div>
    </div>
  );

  /* ─── SYSTEM INFO ─── */
  const renderSystemInfo = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#38bdf8" }}>
        <div className="phone-header-badge">{SYSTEM_INFO_DATA.header.badge}</div>
        <h3 className="phone-header-title">{SYSTEM_INFO_DATA.header.title}</h3>
        <p className="phone-header-sub">{SYSTEM_INFO_DATA.header.subtitle}</p>
      </div>
      <p className="phone-overview-text">{SYSTEM_INFO_DATA.overview}</p>
      <div className="system-device-card">
        <div className="system-device-icon"><ServerCog size={22} aria-hidden /></div>
        <div><div className="system-device-name">SufianOS Interface</div><div className="system-device-meta">Hero UI · Interactive tablet shell · v1.0</div></div>
      </div>
      <div className="phone-section-label">Technology Stack</div>
      <div className="system-spec-list">
        {SYSTEM_INFO_DATA.specs.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="system-spec-card" style={{ "--spec-color": item.color }}>
              <div className="system-spec-icon"><Icon size={16} aria-hidden /></div>
              <div className="system-spec-content">
                <div className="system-spec-top"><span>{item.label}</span><strong>{item.value}</strong></div>
                <p>{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="phone-section-label">Architecture Notes</div>
      <div className="system-architecture-list">
        {SYSTEM_INFO_DATA.architecture.map((item, index) => (
          <div key={item} className="system-architecture-item">
            <span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );

  /* ─── SKILLS (new from Golden) ─── */
  const renderSkills = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">Core Capabilities</div>
        <h3 className="phone-header-title">Skills</h3>
        <p className="phone-header-sub">The integrated skill stack</p>
      </div>
      {[
        { tier: "Core Mastery", items: ["Technical SEO Architecture","AI SEO Strategy (GEO / AEO)","Content Architecture & 8K+ Depth","LIONXE™ Framework Design","Next.js + Sanity CMS Platforms"] },
        { tier: "Expert",       items: ["Deep Research & Enterprise Auditing","Prompt Architecture & AI Workflows","Keyword Research & Topical Authority","AI-Augmented Web Engineering"] },
        { tier: "Proficient",   items: ["Social Media Strategy","Affiliate & Monetization Design","Visual Design & AI Image Gen"] },
      ].map((group) => (
        <div key={group.tier} style={{ marginBottom: "16px" }}>
          <h4 className="phone-section-label" style={{ color: "var(--accent)" }}>{group.tier}</h4>
          {group.items.map((s) => (
            <div key={s} style={{ padding: "10px 14px", marginBottom: "6px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.82)" }}>{s}</div>
          ))}
        </div>
      ))}
      <a href="/skills" style={{ display: "block", textAlign: "center", padding: "12px", borderRadius: "12px", background: `rgba(227,179,65,0.12)`, color: GOLD, fontWeight: 700, fontSize: "13px", textDecoration: "none", marginTop: "8px" }}>View Full Skill Tree →</a>
    </div>
  );

  /* ─── GULF VISION (new from Golden) ─── */
  const renderGulfVision = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">Strategic Direction</div>
        <h3 className="phone-header-title">Gulf Vision</h3>
        <p className="phone-header-sub">Enterprise positioning for Dubai, UAE & GCC</p>
      </div>
      <div style={{ margin: "0 0 16px", padding: "16px", borderRadius: "14px", background: `linear-gradient(145deg, rgba(227,179,65,0.08), rgba(77,123,255,0.04))`, border: `1px solid rgba(227,179,65,0.15)` }}>
        <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)" }}>The Five-Layer System</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "10px" }}>
          {["Engineering","Search","Content","Trust","Business"].map((layer, i) => (
            <div key={layer} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: `${100 - i * 10}%`, height: "28px", borderRadius: "8px", background: `linear-gradient(90deg, color-mix(in srgb, var(--accent) ${55 - i * 8}%, transparent), transparent)`, display: "flex", alignItems: "center", paddingLeft: "12px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.75)" }}>{layer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "14px" }}>Positioning for enterprise environments where technical SEO, AI search visibility, digital architecture, and authority engineering operate at scale.</p>
      {[
        { label: "Target Markets", value: "Dubai · Abu Dhabi · Saudi Arabia · GCC",              icon: "🌍" },
        { label: "Positioning",    value: "Growth Systems Architect — not a task-level hire",     icon: "◆"  },
        { label: "Value Fit",      value: "Enterprise digital growth, AI adoption, search architecture", icon: "→" },
        { label: "Applied Framework",value:"LIONXE™ — audit-grade quality standard, enterprise-proven",icon: "◇"},
      ].map((item) => (
        <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "11px 12px", marginBottom: "7px", borderRadius: "11px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize: "14px", lineHeight: 1 }}>{item.icon}</span>
          <div>
            <span style={{ fontSize: "10.5px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</span>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.82)", marginTop: "3px" }}>{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );

  /* ─── SETTINGS ─── */
  const renderSettings = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#94a3b8" }}>
        <div className="phone-header-badge">Control Center</div>
        <h3 className="phone-header-title">Settings</h3>
        <p className="phone-header-sub">Wallpaper, accent theme &amp; system status</p>
      </div>
      <div className="phone-section-label">Wallpaper</div>
      <div className="settings-wallpaper-grid">
        {WALLPAPERS.map((w, i) => (
          <button key={w.id} className={`settings-wall-swatch ${wallpaper === i ? "settings-wall-swatch--active" : ""}`}
            onClick={() => { setWallpaper(i); triggerIsland("wallpaper", w.name, 1800); }}
            aria-label={`Wallpaper: ${w.name}`} style={{ "--swatch-accent": w.accent }}>
            <div className="settings-wall-preview" style={{ background: w.gradient }} />
            <span className="settings-wall-name">{w.name}</span>
            {wallpaper === i && <Check size={11} className="settings-wall-check" aria-hidden />}
          </button>
        ))}
      </div>
      <div className="phone-section-label">System Status</div>
      <p className="settings-hint">Live state of the ecosystem this interface runs on. The identity is locked — by design.</p>
      <div className="settings-status-grid">
        {ECOSYSTEM_STATUS.map((s) => (
          <div key={s.label} className="settings-status-row">
            <span className={`settings-status-dot settings-status-dot--${s.state}`} aria-hidden />
            <span className="settings-status-label">{s.label}</span>
            <strong className="settings-status-value">{s.value}</strong>
          </div>
        ))}
      </div>
      <div className="phone-section-label">Accent Theme</div>
      <p className="settings-hint">Royal Gold is the signature. Try a secondary accent — it resets to gold on your next visit.</p>
      <div className="settings-accent-grid">
        {ACCENT_THEMES.map((theme) => (
          <button key={theme.value} className={`settings-accent-btn ${accent === theme.value ? "settings-accent-btn--active" : ""}`}
            onClick={() => changeAccent(theme.value, theme.name)} aria-label={`Set accent to ${theme.name}`} style={{ "--th-color": theme.value }}>
            <span className="settings-accent-dot" style={{ background: theme.value }} />
            <span className="settings-accent-name">{theme.name}</span>
            {accent === theme.value && <Check size={12} aria-hidden style={{ color: theme.value, marginLeft: "auto" }} />}
          </button>
        ))}
      </div>
      <div className="phone-section-label">Interface Info</div>
      <div className="settings-info-grid">
        <div className="settings-info-row"><span>Version</span><strong>v1.0</strong></div>
        <div className="settings-info-row"><span>Apps</span><strong>{PHONE_CATEGORIES.length}</strong></div>
        <div className="settings-info-row"><span>Framework</span><strong>LIONXE™</strong></div>
        <div className="settings-info-row"><span>Built with</span><strong>Next.js 14</strong></div>
      </div>
    </div>
  );

  /* ═════════════════════════════════════════════════════════════════════
     ISLAND COLOR
     ═════════════════════════════════════════════════════════════════════ */
  const islandColor = {
    certified: "#2FB07A",
    rejected:  "#D45A5A",
    quote:     GOLD,
    wallpaper: WALLPAPERS[wallpaper].accent,
    accent:    accent,
    idle:      "rgba(255,255,255,0.15)",
  }[islandState] || "rgba(255,255,255,0.15)";

  /* ═════════════════════════════════════════════════════════════════════
     RENDER
     ═════════════════════════════════════════════════════════════════════ */

  return (
    <section
      ref={sectionRef}
      style={cssVars}
      aria-label="Sufian Mustafa — Growth Systems Architect"
      className="hero-root relative isolate min-h-[740px] flex-col overflow-hidden bg-[#f6f3ea] px-4 text-slate-950 dark:bg-[#040c1e] dark:text-white sm:px-6 lg:px-8"
    >
      <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 dark:opacity-100" />

      {/* Grid lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(176,127,26,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(176,127,26,0.06)_1px,transparent_1px)] bg-[size:52px_52px] dark:bg-[linear-gradient(to_right,rgba(227,179,65,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(227,179,65,0.07)_1px,transparent_1px)]" />

      {/* Spotlight */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500" style={{ background: `radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), color-mix(in srgb, var(--accent) 18%, transparent), transparent 65%)` }} />

      {/* Glow blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent), transparent 68%)` }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 right-0 z-0 h-[350px] w-[350px] rounded-full blur-3xl" style={{ background: `radial-gradient(circle, rgba(227,179,65,0.10), transparent 70%)` }} />

      {/* FIX: Restored 3 animated rings (previous version design) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <svg viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-[900px] w-[900px] max-w-none opacity-40 dark:opacity-60">
          <circle cx="450" cy="450" r="380" stroke="var(--accent)" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="6 18" className="ring-spin-cw-slow" />
          <circle cx="450" cy="450" r="290" stroke="var(--accent)" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 11" className="ring-spin-ccw" />
          <circle cx="450" cy="450" r="200" stroke="var(--accent)" strokeOpacity="0.10" strokeWidth="1" strokeDasharray="8 20" className="ring-spin-cw" />
          <polygon points="450,80 820,450 450,820 80,450" stroke="var(--accent)" strokeOpacity="0.08" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* {showConstructionBar && (
        <div className="relative z-50 w-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-400 px-4 py-2.5 text-center text-[12.5px] font-bold flex items-center justify-between rounded-xl backdrop-blur-md mt-4 max-w-7xl mx-auto shadow-sm">
          <div className="flex-1 flex items-center justify-center gap-2">
            <AlertTriangle size={15} className="shrink-0 animate-pulse text-amber-500" />
            <span>Notice: The site is still under construction. System models and content metrics are being actively optimized for live launch.</span>
          </div>
          <button 
            onClick={() => setShowConstructionBar(false)}
            className="p-1 text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg transition-colors ml-2 focus:outline-none"
            aria-label="Dismiss notice"
          >
            <XCircle size={16} />
          </button>
        </div>
      )} */}

      {/* HEADER */}
      <header className="relative z-20 mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between py-4">
        <a href="/" className="group flex items-center gap-2.5" aria-label="Sufian Mustafa — Home">
          <span className="grid h-9 w-9 place-items-center rounded-xl shadow-lg" style={{ background: "var(--accent)", color: "var(--accent-ink)", boxShadow: "0 0 24px color-mix(in srgb, var(--accent) 50%, transparent)" }}><span className="text-[15px] font-black">S</span></span>
          <span className="text-[15px] font-black tracking-tight text-slate-900 dark:text-white">Sufian<span style={{ color: "var(--accent)" }}>Mustafa</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((l) => (<a key={l.label} href={l.href} className="rounded-lg px-3.5 py-2 text-[13.5px] font-semibold text-slate-600 transition-colors hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">{l.label}</a>))}
        </nav>
        <a href="/contact" className="hidden items-center gap-1.5 rounded-xl px-4 py-2 text-[13.5px] font-bold transition-all hover:-translate-y-0.5 md:inline-flex" style={{ background: "var(--accent)", color: "var(--accent-ink)", boxShadow: "0 8px 28px color-mix(in srgb, var(--accent) 38%, transparent)" }}>Select Engagements <ArrowUpRight size={15} aria-hidden /></a>
      </header>

      {/* MAIN GRID */}
      <div className={`relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 overflow-hidden py-2 transition-all duration-700 ease-out lg:grid-cols-[1.05fr_0.95fr] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* LEFT COLUMN */}
        <div className="flex max-h-full flex-col justify-center overflow-y-auto py-2 lg:overflow-visible">

          {/* Badge */}
          <div className="hero-fade-in mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-[var(--accent)]/30 bg-white/80 px-4 py-1.5 text-[12.5px] font-semibold text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.07] dark:text-blue-100" style={{ animationDelay: "0ms" }}>
            <span className="relative flex h-2.5 w-2.5 shrink-0"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" /></span>
            LIONXE™ Creator · Founder, DoItWithAI.tools · Growth Systems Architect
          </div>

          {/* H1 */}
          <h1 className="hero-fade-in max-w-2xl text-balance font-black tracking-[-0.04em] text-slate-950 dark:text-white" style={{ fontSize: "clamp(2.3rem, 4.6vw, 3.7rem)", lineHeight: 1.05, animationDelay: "70ms" }}>
            Sufian Mustafa architects{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(120deg, color-mix(in srgb, var(--accent) 80%, #F2CC6B) 0%, var(--accent) 50%, color-mix(in srgb, var(--accent) 70%, #C9952C) 100%)` }}>growth systems</span>
              <span aria-hidden className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full blur-sm" style={{ background: `color-mix(in srgb, var(--accent) 40%, transparent)` }} />
            </span>{" "}
            that compound.
          </h1>

          {/* Title with pencil-underline effect */}
          <h2 className="hero-fade-in mt-3 relative inline-block text-[1.05rem] font-black uppercase tracking-[0.12em]" style={{ color: "var(--accent)", margin: 0, animationDelay: "100ms" }}>
            Growth Systems Architect
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ height: "6px" }}>
              <path d="M2 5.5C30 2.5 60 6 100 3.5C140 1 170 5.5 198 3" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
              <path d="M4 6.5C35 4 65 7 105 4.5C145 2 172 6 196 4.2" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
            </svg>
          </h2>

          {/* Description */}
          <p className="hero-fade-in mt-3 max-w-xl text-[1.05rem] leading-[1.7] text-slate-600 dark:text-slate-300" style={{ animationDelay: "150ms" }}>
A systems-focused architect combining search visibility, AI-augmented engineering, structured content, and the <strong className="font-bold" style={{ color: "var(--accent)" }}>LIONXE™</strong> framework to build scalable digital ecosystems engineered for long-term authority, trust, and sustainable growth.        

          </p>

          {/* ROLE SWITCHER */}
          <div className="hero-fade-in mt-6" style={{ animationDelay: "240ms" }}>
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-px w-8" style={{ background: "var(--accent)" }} />
              <span className="text-[11px] font-black uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">Expertise · drag to navigate</span>
            </div>
            <div className="role-card relative overflow-hidden rounded-[1.4rem] border p-[1px] shadow-2xl" style={{ borderColor: `color-mix(in srgb, var(--role-color) 35%, transparent)`, background: `linear-gradient(135deg, color-mix(in srgb, var(--role-color) 30%, transparent), transparent 60%)` }}>
              <div className="flex min-h-[72px] items-center gap-4 rounded-[calc(1.4rem-1px)] border border-slate-200/70 bg-white/85 px-5 py-3.5 backdrop-blur-2xl dark:border-white/10 dark:bg-[#060f28]/85">
                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-lg transition-all duration-500" style={{ background: "var(--role-color)", boxShadow: `0 0 36px ${currentRole.color}88` }}><RoleIcon className="h-5 w-5" aria-hidden /></div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10.5px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Sufian Mustafa as</p>
                  <div className="relative mt-0.5 h-[34px] overflow-hidden">
                    <span key={roleIndex} className="block font-black tracking-[-0.03em] text-slate-950 dark:text-white" style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.45rem)", transform: roleVisible ? "translateY(0)" : "translateY(14px)", opacity: roleVisible ? 1 : 0, filter: roleVisible ? "blur(0)" : "blur(6px)", transition: "all 0.32s cubic-bezier(0.2,0.9,0.3,1)" }}>{currentRole.label}</span>
                  </div>
                </div>
              </div>
            </div>
            <div ref={roleTrackRef}
              className={`role-track group relative mt-3 cursor-grab touch-none select-none ${roleDragging ? "cursor-grabbing" : ""}`}
              style={{ "--pos": rolePos }}
              onPointerDown={onRolePointerDown} onPointerMove={onRolePointerMove} onPointerUp={onRolePointerUp} onPointerCancel={onRolePointerUp}
              role="slider" aria-label="Role selector" aria-valuemin={0} aria-valuemax={ROLES.length - 1} aria-valuenow={roleIndex} aria-valuetext={currentRole.label} tabIndex={0}
              onKeyDown={(e) => { if (e.key === "ArrowRight") { lastInteractionRef.current = Date.now(); setRoleIndex((i) => Math.min(ROLES.length - 1, i + 1)); } if (e.key === "ArrowLeft") { lastInteractionRef.current = Date.now(); setRoleIndex((i) => Math.max(0, i - 1)); } }}>
              <div className="role-track-rail" />
              <div className="role-track-fill" style={{ background: "var(--role-color)" }} />
              <div className="role-track-thumb" aria-hidden="true" style={{ background: "var(--role-color)", boxShadow: `0 0 0 4px ${currentRole.color}33, 0 4px 14px ${currentRole.color}66` }}><RoleIcon size={12} aria-hidden /></div>
              <div className="role-track-nodes">
                {ROLES.map((r, i) => (<button key={i} className="role-track-node" onClick={() => { lastInteractionRef.current = Date.now(); setRoleIndex(i); setRoleVisible(true); }} aria-label={`Select ${r.label}`}><span className="role-track-node-dot" style={{ background: i <= roleIndex ? r.color : "color-mix(in srgb, var(--accent) 25%, transparent)" }} /></button>))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-fade-in mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap" style={{ animationDelay: "320ms" }}>
            <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta--lionxe group">
              <span className="hero-cta-bg" /><span className="hero-cta-icon"><Shield size={16} aria-hidden /></span>LIONXE™ Framework<ArrowUpRight size={15} className="hero-cta-arrow" aria-hidden />
            </a>
            <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta--doit group">
              <span className="hero-cta-bg" /><span className="hero-cta-icon"><Globe size={16} aria-hidden /></span>DoItWithAI.tools<ArrowUpRight size={15} className="hero-cta-arrow" aria-hidden />
            </a>
            <a href="/about" className="hero-cta hero-cta--about group">
              <span className="hero-cta-bg" /><span className="hero-cta-icon"><Users size={16} aria-hidden /></span>About Sufian<ChevronRight size={15} className="hero-cta-arrow-r" aria-hidden />
            </a>
            <a href="/contact" className="hero-cta hero-cta--contact group">
              <span className="hero-cta-bg" /><span className="hero-cta-icon"><Mail size={16} aria-hidden /></span>Get in Touch<ChevronRightCircle size={15} className="hero-cta-arrow-r" aria-hidden />
            </a>
          </div>

          {/* Secondary expertise tags */}
          <div className="hero-fade-in mt-4 flex flex-wrap gap-2" style={{ animationDelay: "340ms" }}>
            {["SEO Strategist","AI SEO Specialist","Content Architect","AI-Augmented Web Developer","Technical SEO Engineer","Digital Marketing Architect"].map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-[11px] font-bold" style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)" }}>{tag}</span>
            ))}
          </div>

          {/* Theme dots */}
          <div className="hero-fade-in mt-6 flex items-center gap-2.5" style={{ animationDelay: "400ms" }}>
            <span className="text-[10.5px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Theme</span>
            {ACCENT_THEMES.map((theme, i) => (
              <span key={theme.value} className="relative">
                <button onClick={() => changeAccent(theme.value, theme.name)} aria-label={`Set accent to ${theme.name}`} className="h-7 w-7 rounded-full border-2 p-0.5 transition-all duration-300 hover:scale-110" style={{ borderColor: accent === theme.value ? theme.value : "transparent", boxShadow: accent === theme.value ? `0 0 12px ${theme.value}80` : "none" }}>
                  <span className="block h-full w-full rounded-full" style={{ background: theme.value }} />
                </button>
                {i === 0 && <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 text-[7.5px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">Default</span>}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT — TABLET */}
        <div className="hero-fade-in bottom-16 relative hidden items-center justify-center lg:flex" style={{ animationDelay: "220ms" }}>
          <div aria-hidden className="absolute -inset-10 rounded-[3.5rem] blur-3xl opacity-50" style={{ background: `radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 65%)` }} />
          <div className="tablet-shell" role="region" aria-label="Interactive portfolio explorer">
            <div className="tablet-frame">
              <div className="tablet-glare" aria-hidden />
              <div className="tablet-cam" aria-hidden>
                <div className={`dynamic-island dynamic-island--${islandState}`} style={{ "--island-color": islandColor }} aria-live="polite" aria-atomic="true">
                  <span className="dynamic-island-dot" />
                  {islandState !== "idle" && islandMessage && (<span className="dynamic-island-text">{islandMessage}</span>)}
                </div>
              </div>
              <div className="tablet-status" aria-hidden>
                <StatusClock />
                <span className="tablet-status-host">sufianmustafa.com</span>
                <span className="tablet-status-icons"><Wifi size={12} /> <BatteryFull size={13} /></span>
              </div>
              <div className="tablet-screen">
                <div className="tablet-wallpaper" style={{ background: WALLPAPERS[wallpaper].gradient }} aria-hidden />
                <div className={`phone-content ${switchAnim ? "phone-content--switching" : ""}`}>{renderPhoneContent()}</div>
                <div className="tablet-screen-fade" aria-hidden />
                <div className="tablet-dock" role="tablist" aria-label="Sections">
                  <button className={`tablet-dock-btn ${!activeCategory ? "tablet-dock-btn--active" : ""}`} style={{ "--tab-color": "var(--accent)" }} onClick={() => navigatePhone(null)} onKeyDown={(e) => dockKey(e, () => navigatePhone(null))} role="tab" aria-selected={!activeCategory} aria-label="Home"><Home size={17} aria-hidden /></button>
                  {PHONE_CATEGORIES.slice(0, 5).map((cat) => {
                    const Icon = cat.icon;
                    return (<button key={cat.id} className={`tablet-dock-btn ${activeCategory === cat.id ? "tablet-dock-btn--active" : ""}`} style={{ "--tab-color": cat.color }} onClick={() => navigatePhone(cat.id)} onKeyDown={(e) => dockKey(e, () => navigatePhone(cat.id))} role="tab" aria-selected={activeCategory === cat.id} aria-label={cat.label}><Icon size={17} aria-hidden /></button>);
                  })}
                  <button className={`tablet-dock-btn ${activeCategory === "settings" ? "tablet-dock-btn--active" : "tablet-dock-btn--wall"}`} style={{ "--tab-color": "#94a3b8" }} onClick={() => navigatePhone("settings")} aria-label="Open settings"><Settings size={17} aria-hidden /></button>
                </div>
              </div>
            </div>
            <button className="tablet-home-bar" onClick={() => navigatePhone(null)} aria-label="Go to home screen" />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative z-20 mx-auto flex w-full max-w-7xl shrink-0 flex-col items-center justify-between gap-2 border-t border-slate-200/60 py-3.5 text-[12.5px] text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
        <span>© {new Date().getFullYear()} Sufian Mustafa · Built to the LIONXE™ Standard.</span>
        <div className="flex items-center gap-5">
          <a href="/privacy" className="font-semibold transition-colors hover:text-slate-900 dark:hover:text-white">Privacy</a>
          <a href="/terms"   className="font-semibold transition-colors hover:text-slate-900 dark:hover:text-white">Terms</a>
          <span className="hidden items-center gap-1.5 sm:flex">Built with <span style={{ color: "var(--accent)" }}>Next.js</span></span>
        </div>
      </footer>
    </section>
  );
}