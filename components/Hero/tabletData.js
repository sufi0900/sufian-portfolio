// components/Hero/tabletData.js
// Content for the interactive tablet mockup only. This file is imported
// exclusively from TabletMockup.jsx, so it — and all these arrays of
// FAQ/gallery/timeline/manifesto copy — ship only in that lazy chunk,
// never in the initial bundle mobile visitors download.

import {
  Activity, BarChart2, BookOpen, BrainCircuit, Code2, Cpu, FileText,
  Github, Globe, HelpCircle, ImageIcon, Info, Layers, Lightbulb,
  Linkedin, Mail, Palette, PenTool, SearchCheck, Settings, Shield,
  Smartphone, Sparkles, Target, Terminal, TrendingUp, Twitter, Users,
  Youtube,
} from "lucide-react";
import { GOLD } from "./heroData";

export const WALLPAPERS = [
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

export const QUOTES = [
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

export const BUILDING_STATUS = [
  "Scaling DoItWithAI.tools authority content",
  "Refining LIONXE™ pillar documentation",
  "sufianmustafa.com portfolio system",
  "Engineering GEO-aligned content clusters",
];

export const SHOWCASE_SLIDES = [
  { eyebrow: "Live Platform",       title: "DoItWithAI.tools",  body: "An AI SEO authority hub for the AI-search era — every article engineered to compound in search value over years.", color: "#00D9FF", icon: Globe       },
  { eyebrow: "Proprietary Framework",title: "LIONXE™ Standard", body: "A four-pillar architectural audit that certifies only what is built to survive decades.",                          color: "#4D7BFF", icon: Shield      },
  { eyebrow: "Discipline",           title: "Deep Research",     body: "Full-system audits that expose the root cause others overlook — then re-architect it.",                          color: GOLD,      icon: BrainCircuit },
];

/* ═══════════════════════════════════════════════════════════════════════
   CATEGORIES — 15 apps  (new: Skills + Gulf Vision from Golden)
   Design fix: each icon restored to its own distinct color.
   ═══════════════════════════════════════════════════════════════════════ */
export const PHONE_CATEGORIES = [
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

export const SYSTEM_INFO_DATA = {
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

export const LIONXE_DATA = {
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

export const LIONXE_DOCTRINE = [
  { text: "Temporary wins and shallow shortcuts are recipes for structural collapse.", pillar: "L",  color: "#4D7BFF" },
  { text: "80% optimized is 100% vulnerable. Complete the work.",                     pillar: "IO", color: "#4D7BFF" },
  { text: "The weakest internal layer permanently caps the value of the whole.",       pillar: "IO", color: "#4D7BFF" },
  { text: "Integrity that costs you nothing was never integrity.",                     pillar: "N",  color: "#4D7BFF" },
  { text: "1% deception equals 0% integrity score — no partial honesty.",             pillar: "N",  color: "#4D7BFF" },
  { text: "If a competitor can replicate your work in a week, it was never an asset.",pillar: "XE", color: "#4D7BFF" },
  { text: "Surface-level wins are just delayed failures with a good opening act.",     pillar: "L",  color: "#4D7BFF" },
  { text: "Authority is built in layers, not in spikes.",                              pillar: "XE", color: "#4D7BFF" },
];

export const DOITWITHAI_DATA = {
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

export const SUFIAN_DATA = {
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

export const FAQ_DATA = [
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

export const CONTACT_DATA = [
  { label: "Strategic Advisory",   value: "Inquire about engagement",  icon: Target, href: "/contact" },
  { label: "LIONXE™ Licensing",   value: "Enterprise audit inquiry",   icon: Shield, href: "/contact" },
  { label: "Email",                value: "hello@sufianmustafa.com",    icon: Mail,   href: "mailto:hello@sufianmustafa.com" },
  { label: "DoItWithAI.tools",     value: "Visit the platform",         icon: Globe,  href: "https://doitwithai.tools" },
];

export const SOCIAL_DATA = [
  { label: "LinkedIn", handle: "/in/sufianmustafa",   icon: Linkedin, color: "#0a66c2", href: "#" },
  { label: "GitHub",   handle: "/sufianmustafa",      icon: Github,   color: "#6e7681", href: "#" },
  { label: "X",        handle: "@sufianmustafa",      icon: Twitter,  color: "#EDE9DC", href: "#" },
  { label: "YouTube",  handle: "Do It With AI",       icon: Youtube,  color: "#ff0000", href: "#" },
  { label: "Email",    handle: "hello@sufianmustafa", icon: Mail,     color: GOLD,      href: "mailto:hello@sufianmustafa.com" },
];

export const GALLERY_DATA = [
  { title: "DoItWithAI.tools Platform",      subtitle: "Live AI SEO authority hub",      src: "/gallery/doitwithai-01.jpg", alt: "DoItWithAI.tools platform preview",     status: "Live & Compounding",  statusColor: "#00D9FF" },
  { title: "LIONXE™ Framework v1.0",        subtitle: "Proprietary audit standard",      src: "/do.png",                   alt: "LIONXE framework visual preview",        status: "Active & Documented", statusColor: "#4D7BFF" },
  { title: "Organizational Research Report", subtitle: "Deep research & strategy",        src: "/gallery/research-01.jpg",  alt: "Research workspace preview",             status: "Delivered",           statusColor: GOLD      },
  { title: "sufianmustafa.com",             subtitle: "Authority layer — personal hub",   src: "/ss.png",                   alt: "Sufian Mustafa portfolio gallery image",  status: "Building",            statusColor: GOLD      },
  { title: "LIONXE™ Audit Simulator",      subtitle: "Interactive framework demo",        src: "/gallery/content-system-01.jpg",alt: "Audit simulator preview",            status: "Interactive Demo",    statusColor: "#4D7BFF" },
];

export const TIMELINE_DATA = [
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

export const MANIFESTO_DATA = [
  { code: "L",  color: "#4D7BFF", title: "The Post-Flood Collapse Rule",  body: "Immediate spikes mean nothing if they lead to future obsolescence. If the lifespan projection trends toward zero after a brief surge, the project is a structural failure." },
  { code: "IO", color: "#4D7BFF", title: "The Weakest Link Axiom",        body: "The overall value of any framework is permanently capped by its worst-executed internal layer. Substandard work cannot be hidden behind a few highly optimized features." },
  { code: "N",  color: "#4D7BFF", title: "The Cost-Indifferent Mandate",  body: "True integrity only exists when you stick to it even when it costs you. If compliance requires sacrificing immediate revenue, the sacrifice must be made without hesitation." },
  { code: "XE", color: "#4D7BFF", title: "The Commodity Threshold Law",   body: "If an asset can be easily replaced by a generic alternative, its distinction score is zero. We do not reward basic competence — only exceptional execution that breaks the mold." },
];

export const PILLAR_DEFAULTS = [
  { code: "L",  name: "Logic & Longevity",          color: "#4D7BFF", status: "pass" },
  { code: "IO", name: "Internal Optimization",      color: "#4D7BFF", status: "pass" },
  { code: "N",  name: "Non-Negotiable Integrity",   color: "#4D7BFF", status: "pass" },
  { code: "XE", name: "Exceptional Distinction",    color: "#4D7BFF", status: "pass" },
];

export const PILLAR_LAWS = {
  L:  ["Assets must prove compounding value over their projected lifecycle","Short-sighted foundations are an automatic failure","Upstream rejection: stop the audit if longevity fails"],
  IO: ["95% optimized = total failure — no fractional excellence","Weakest-link axiom: one broken layer collapses all","Zero operational friction across every component"],
  N:  ["1% deception = 0% integrity score — no partial honesty","Cost-indifferent mandate: ethics even at revenue sacrifice","Absolute kill-switch: overrides all previous pillar scores"],
  XE: ["Eliminates conformity — commands elite market positioning","Flawless execution that cannot be replicated or diluted","Category authority that stands unmistakably apart"],
};

export const PILLAR_FIX = {
  L:  "Rebuild the foundational logic. The asset has no long-term trajectory.",
  IO: "Complete every internal layer before proceeding. Fractional excellence is not excellence.",
  N:  "An integrity failure overrides all previous passes. The entire audit is void. Eliminate deceptive elements completely.",
  XE: "The asset lacks distinction. Identify the unique angle that makes it irreplaceable.",
};

export const PILLAR_FAILURE_DETAIL = {
  L:  "A longevity failure means the asset was designed for a sprint, not a marathon. Upstream rejection applies — the audit stops here. No further pillar evaluation is meaningful.",
  IO: "One incomplete layer invalidates the whole. The weakest-link axiom is non-negotiable: fix every broken component before resubmission.",
  N:  "An integrity failure overrides all previous passing scores. The entire audit result is void. Ethical clarity is not negotiable — not even at revenue sacrifice.",
  XE: "A distinction score of zero means the asset is indistinguishable from its competition. Being good is not enough. The market only certifies the unreplicable.",
};

export const ANALYTICS_DATA = {
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

export const TERMINAL_BOOT = [
  "Initializing LIONXE_Matrix... [OK]",
  "Loading content_systems... 8,341 words [OK]",
  "Authority index: compounding [OK]",
  "Loading Authority Protocol v2.1... [OK]",
  "Connecting to search index... [OK]",
  "System ready. sufianmustafa.com v1.0",
  "Type a command to begin.",
];

export const ECOSYSTEM_STATUS = [
  { label: "DoItWithAI.tools",  value: "LIVE",                state: "live"   },
  { label: "LIONXE™ Framework", value: "ACTIVE",              state: "live"   },
  { label: "Avg article depth", value: "8K+ words",           state: "info"   },
  { label: "Publishing since",  value: "2025",                state: "info"   },
  { label: "Brand identity",    value: "Royal Gold · Locked", state: "locked" },
];