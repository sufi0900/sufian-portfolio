// app/skills/page.jsx — Server Component (SEO + Schema Layer)
// The client-side interactive skill tree lives in ./SkillTreeClient.jsx
import React from "react";
import Script from "next/script";
import SkillTreeClient from "./SkillTreeClient";

/* ═══════════════════════════════════════════════════════════════════════
   ENVIRONMENT HELPERS
   ═══════════════════════════════════════════════════════════════════════ */
function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://sufianmustafa.com";
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
}

function generateOGImageURL(params) {
  const baseURL = `${getBaseUrl()}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

/* ═══════════════════════════════════════════════════════════════════════
   METADATA — Next.js App Router export
   ═══════════════════════════════════════════════════════════════════════ */
export const metadata = {
  title:
    "Skills & Expertise — Sufian Mustafa | Growth Systems Architect",
  description:

    "Explore Sufian Mustafa’s core skills across growth systems architecture, technical SEO, web engineering, content platforms, LIONXE audits, & more." ,
     keywords: [
   
      "Sufian Mustafa",
    "Growth Systems Architect",
    "Technical SEO",
    "AI SEO",
    "GEO Optimization",
    "AEO Strategy",
    "Next.js Developer",
    "AI-Augmented Web Engineering",
    "Content Architecture",
    "LIONXE Framework",
    "Schema Markup",
    "JSON-LD",
    "Enterprise Digital Auditing",
    "Sanity CMS",
    "Core Web Vitals",
    "Pillar Cluster Architecture",
    "Prompt Engineering",
    "Dubai Tech",
    "GCC Digital",
    "Full Stack Web Engineering",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  formatDetection: { email: false, address: false, telephone: false },

  openGraph: {
    title:
      "Skills & Expertise — Sufian Mustafa | Growth Systems Architect",
    description:
      "An interactive skill hierarchy spanning systems architecture, technical SEO, AI search visibility, AI-augmented web engineering, content systems, and the LIONXE™ quality framework.",
    url: `${getBaseUrl()}/skills`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "profile",
    images: [
      {
        url: generateOGImageURL({
          title: "Growth Systems Architect",
          subtitle: "Technical SEO · AI Search · Web Engineering · LIONXE™",
          category: "Skills & Expertise",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Sufian Mustafa — Growth Systems Architect skill hierarchy",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Skills & Expertise — Sufian Mustafa | Growth Systems Architect",
    description:
      "Interactive capability map: systems architecture at the apex, with technical SEO, AI search, web engineering, content systems, and the LIONXE™ framework branching below.",
    images: [
      generateOGImageURL({
        title: "Growth Systems Architect",
        subtitle: "Technical SEO · AI Search · Web Engineering · LIONXE™",
        category: "Skills & Expertise",
        theme: "gold",
      }),
    ],
    creator: "@sufianmustafa",
  },

  alternates: {
    canonical: `${getBaseUrl()}/skills`,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* ═══════════════════════════════════════════════════════════════════════
   PAGE COMPONENT — renders schema + client tree
   ═══════════════════════════════════════════════════════════════════════ */
export default function SkillsPage() {
  /* ── Schema 1: ProfilePage + Person (core identity) ── */
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${getBaseUrl()}/skills`,
    name: "Skills & Expertise — Sufian Mustafa",
    description:
      "A hierarchical capability map: Growth Systems Architecture at the apex, supported by technical SEO, AI search visibility, AI-augmented web engineering, content systems, the LIONXE™ framework, and enterprise digital auditing.",
    mainEntity: {
      "@type": "Person",
      name: "Sufian Mustafa",
      jobTitle: "Growth Systems Architect",
      url: "https://sufianmustafa.com",
      sameAs: [
        "https://doitwithai.tools",
        "https://lionxeframework.com",
        "https://www.linkedin.com/in/sufianmustafa",
        "https://github.com/sufianmustafa",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Abdul Wali Khan University Mardan (AWKUM)",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Master's Degree",
        educationalLevel: "Postgraduate",
        name: "Master of Computer Science (MSc)",
      },
      knowsAbout: [
        {
          "@type": "Thing",
          name: "Growth Systems Architecture",
          description:
            "Designing interconnected digital ecosystems that combine engineering, AI, technical SEO, research, content systems, and business strategy into integrated growth systems.",
        },
        {
          "@type": "Thing",
          name: "Technical SEO Architecture",
          description:
            "Crawl architecture, indexation control, Core Web Vitals optimization, schema markup (7+ JSON-LD types), and the structural SEO layer that determines content discoverability.",
        },
        {
          "@type": "Thing",
          name: "AI Search Visibility (GEO & AEO)",
          description:
            "Optimizing content to be surfaced and cited inside AI-generated answers from ChatGPT, Perplexity, and Google AI Overviews, alongside traditional featured snippet targeting.",
        },
        {
          "@type": "Thing",
          name: "AI-Augmented Web Engineering",
          description:
            "Building production web platforms using Next.js 14, React, Node.js, Sanity CMS, and Tailwind CSS with AI-assisted development workflows on a manual coding foundation.",
        },
        {
          "@type": "Thing",
          name: "Content Systems Engineering",
          description:
            "Designing content as compounding infrastructure: pillar-cluster topology, E-E-A-T signal engineering, 8,000+ word depth standards, and topical authority architecture.",
        },
        {
          "@type": "Thing",
          name: "LIONXE™ Framework",
          description:
            "A proprietary four-gate quality standard — Logic & Longevity, Internal Optimization, Non-Negotiable Integrity, Exceptional Execution — with governing laws, sequential evaluation, and a scoring engine.",
        },
        {
          "@type": "Thing",
          name: "Enterprise Digital Auditing",
          description:
            "Full-system diagnostic evaluation demonstrated through a 15-chapter audit of an 87-website network (226,200+ URLs) covering architecture, content quality, social media, team capacity, and compliance.",
        },
        {
          "@type": "Thing",
          name: "Prompt Architecture & AI Workflows",
          description:
            "Designing layered, reusable prompt systems and AI-augmented content workflows that produce consistent, humanized output at scale.",
        },
        {
          "@type": "Thing",
          name: "Information Architecture",
          description:
            "Structuring site taxonomy, URL strategy, internal linking, and content relationships for scalable topical authority and search engine efficiency.",
        },
        {
          "@type": "Thing",
          name: "Performance Engineering",
          description:
            "Core Web Vitals optimization, Redis server-side caching, React Query client-side state management, and Cloudflare edge delivery for sub-second response times.",
        },
      ],
      /* Ecosystem proof */
      founder: {
        "@type": "Organization",
        name: "Do It With AI Tools",
        url: "https://doitwithai.tools",
        description:
          "A solo-built AI SEO platform with 8,000+ word articles, 7+ schema types, and pillar-cluster content architecture.",
      },
    },
  };

  /* ── Schema 2: ItemList (the skill hierarchy itself — helps AI bots understand the ranking) ── */
  const skillListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sufian Mustafa — Skill Hierarchy",
    description:
      "Professional capabilities ranked by strategic importance, from identity-level systems architecture down to implementation technologies.",
    numberOfItems: 21,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Growth Systems Architecture", description: "The apex discipline — designing complete digital ecosystems where engineering, AI, SEO, research, and business strategy compound together." },
      { "@type": "ListItem", position: 2, name: "Systems Thinking & Strategy", description: "Designing interconnected digital ecosystems rather than isolated pages or features." },
      { "@type": "ListItem", position: 3, name: "AI Search & Technical SEO", description: "Engineering websites for discoverability across traditional search engines and AI answer platforms." },
      { "@type": "ListItem", position: 4, name: "Research & Strategic Analysis", description: "Enterprise-grade diagnosis — 87-site audits, root-cause diagnostics, and strategic documentation." },
      { "@type": "ListItem", position: 5, name: "AI-Augmented Web Engineering", description: "Building web platforms using AI-assisted workflows combined with architectural understanding." },
      { "@type": "ListItem", position: 6, name: "Digital Product Strategy", description: "Planning and developing complete digital platforms from concept through production." },
      { "@type": "ListItem", position: 7, name: "LIONXE™ Framework", description: "A proprietary four-gate quality standard with governing laws and a scoring engine." },
      { "@type": "ListItem", position: 8, name: "Technical SEO", description: "Crawl architecture, indexation, schema markup, and Core Web Vitals optimization." },
      { "@type": "ListItem", position: 9, name: "AI SEO & Search Visibility", description: "GEO optimization, AEO strategy, entity SEO, and keyword architecture." },
      { "@type": "ListItem", position: 10, name: "Information Architecture", description: "Pillar-cluster topology, content architecture, site taxonomy, and URL strategy." },
      { "@type": "ListItem", position: 11, name: "Structured Content Systems", description: "Long-form authority content, E-E-A-T engineering, content strategy, and compliance-aware writing." },
      { "@type": "ListItem", position: 12, name: "Full-Stack Web Engineering", description: "Next.js 14, React, Node.js, Sanity CMS, MongoDB, and Express." },
      { "@type": "ListItem", position: 13, name: "Performance & UX", description: "Redis caching, edge delivery, responsive design, and Core Web Vitals engineering." },
      { "@type": "ListItem", position: 14, name: "AI Workflows & Prompt Engineering", description: "Prompt architecture, AI-augmented development, and output quality control." },
      { "@type": "ListItem", position: 15, name: "Digital Growth Strategy", description: "Authority ecosystem design, metadata strategy, and traffic resilience." },
      { "@type": "ListItem", position: 16, name: "Schema & Structured Data", description: "7+ JSON-LD schema types for rich results and AI parsing." },
      { "@type": "ListItem", position: 17, name: "Enterprise Digital Auditing", description: "87-site, 226,200+ URL, 15-chapter enterprise diagnostic audit." },
      { "@type": "ListItem", position: 18, name: "Next.js 14 App Router", description: "Server-side rendering, incremental static regeneration, and edge deployment." },
      { "@type": "ListItem", position: 19, name: "Sanity CMS", description: "Structured headless content management with GROQ queries and portable text." },
      { "@type": "ListItem", position: 20, name: "Graphic Design & AI Visuals", description: "On-brand visual generation through AI tools and Canva." },
      { "@type": "ListItem", position: 21, name: "Multi-Platform Social Media", description: "Brand presence across 14+ platforms." },
    ],
  };

  /* ── Schema 3: BreadcrumbList ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
      { "@type": "ListItem", position: 2, name: "Skills & Expertise", item: `${getBaseUrl()}/skills` },
    ],
  };

  /* ── Schema 4: WebPage (additional signals) ── */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Skills & Expertise — Sufian Mustafa",
    url: `${getBaseUrl()}/skills`,
    description:
      "An interactive hierarchical map of professional capabilities spanning systems architecture, technical SEO, AI search visibility, web engineering, and the LIONXE™ quality framework.",
    isPartOf: {
      "@type": "WebSite",
      name: "Sufian Mustafa",
      url: getBaseUrl(),
    },
    about: {
      "@type": "Person",
      name: "Sufian Mustafa",
      jobTitle: "Growth Systems Architect",
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".vt-header h1", ".vt-header p", ".ot-crown-skill"],
    },
  };

  return (
    <>
      <Script
        id="schema-profile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-skill-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(skillListSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />

      <SkillTreeClient />
    </>
  );
}