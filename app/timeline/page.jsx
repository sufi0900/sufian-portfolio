// app/timeline/page.jsx — Server Component (SEO + Schema Layer)
// The client-side interactive railway timeline lives in ./TimelineClient.jsx
import React from "react";
import Script from "next/script";
import TimelineClient from "./TimelineClient";

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

export const metadata = {
  title:
    "Timeline — Sufian Mustafa | BCS to LIONXE™",
  description:
    "The professional timeline of Sufian Mustafa — from BCS through manual web development, AI, technical SEO, DoItWithAI.tools, enterprise auditing, and the LIONXE™ framework.",
  keywords: [
    "Sufian Mustafa",
    "Growth Systems Architect",
    "Professional Timeline",
    "Career History",
    "LIONXE Framework",
    "DoItWithAI Tools",
    "BCS MCS Computer Science",
    "AI-Augmented Web Engineering",
    "Technical SEO",
    "Enterprise Digital Audit",
    "Dubai GCC Career",
    "Next.js Developer",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  formatDetection: { email: false, address: false, telephone: false },

  openGraph: {
    title: "Timeline — Sufian Mustafa | BCS to LIONXE™",
    description:
      "A visual timeline of every defining professional milestone — from academic foundations to a proprietary quality framework.",
    url: `${getBaseUrl()}/timeline`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "profile",
    images: [
      {
        url: generateOGImageURL({
          title: "Professional Timeline",
          subtitle: "BCS → MCS → AI → SEO → Platform → LIONXE™",
          category: "Timeline",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Sufian Mustafa — professional timeline",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Timeline — Sufian Mustafa | BCS to LIONXE™",
    description:
      "Every milestone from BCS to the LIONXE™ framework — the path that built a Growth Systems Architect.",
    images: [
      generateOGImageURL({
        title: "Professional Timeline",
        subtitle: "BCS → MCS → AI → SEO → Platform → LIONXE™",
        category: "Timeline",
        theme: "gold",
      }),
    ],
    creator: "@sufianmustafa",
  },

  alternates: {
    canonical: `${getBaseUrl()}/timeline`,
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

export default function TimelinePage() {
  /* ── Schema 1: ItemList (the timeline as a ranked list) ── */
  const timelineSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sufian Mustafa — Professional Timeline",
    description:
      "Chronological milestones from academic foundations through platform building, enterprise auditing, and framework creation.",
    numberOfItems: 11,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BCS Computer Science", description: "Academic foundation in logic, mathematics, and systems thinking." },
      { "@type": "ListItem", position: 2, name: "MCS Computer Science (AWKUM)", description: "First HTML tag in Notepad. Web fundamentals and the turning point." },
      { "@type": "ListItem", position: 3, name: "Manual Web Development", description: "HTML, CSS, JavaScript, React, MERN, Next.js — hand-coded, no AI." },
      { "@type": "ListItem", position: 4, name: "AI as Catalyst", description: "AI-augmented development, prompt engineering, and AI content workflows." },
      { "@type": "ListItem", position: 5, name: "Technical SEO & Search Systems", description: "Crawl architecture, schema, keyword architecture, E-E-A-T, and content depth." },
      { "@type": "ListItem", position: 6, name: "18-Month Isolation Grind", description: "Intense focused building — skills, platforms, and professional identity forged under pressure." },
      { "@type": "ListItem", position: 7, name: "DoItWithAI.tools Founded", description: "Solo-built AI SEO platform — Next.js 14, Sanity CMS, 8K+ word articles, 7+ schema types." },
      { "@type": "ListItem", position: 8, name: "Think Higher Consultants", description: "First professional role — Australian immigration niche, corporate deadlines, reporting." },
      { "@type": "ListItem", position: 9, name: "WAYWE Gaming — Enterprise SEO", description: "UK/US carpet cleaning sector — local SEO, compliance, and the 87-site enterprise audit." },
      { "@type": "ListItem", position: 10, name: "LIONXE™ Framework Created", description: "Proprietary four-gate quality standard with governing laws and a scoring engine." },
      { "@type": "ListItem", position: 11, name: "Gulf Vision", description: "Strategic direction for enterprise digital environments in Dubai, UAE, and the GCC." },
    ],
  };

  /* ── Schema 2: Person (lightweight) ── */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sufian Mustafa",
    jobTitle: "Growth Systems Architect",
    url: "https://sufianmustafa.com",
    sameAs: [
      "https://doitwithai.tools",
      "https://lionxeframework.com",
      "https://www.linkedin.com/in/sufianmustafa",
    ],
  };

  /* ── Schema 3: BreadcrumbList ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
      { "@type": "ListItem", position: 2, name: "Timeline", item: `${getBaseUrl()}/timeline` },
    ],
  };

  /* ── Schema 4: WebPage ── */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Timeline — Sufian Mustafa",
    url: `${getBaseUrl()}/timeline`,
    description:
      "A visual timeline of every defining professional milestone from academic foundations to the LIONXE™ framework.",
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
      cssSelector: ["h1", ".tl-station-title"],
    },
  };

  return (
    <>
      <Script
        id="schema-tl-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(timelineSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-tl-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-tl-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-tl-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />

      <TimelineClient />
    </>
  );
}