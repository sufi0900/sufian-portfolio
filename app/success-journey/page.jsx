// app/journey/page.jsx — Server Component (SEO + Schema Layer)
// The client-side interactive staircase lives in ./SuccessJourneyClient.jsx
import React from "react";
import Script from "next/script";
import SuccessJourneyClient from "./SuccessJourneyClient";

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
    "The Journey — Sufian Mustafa | From BCS to Growth Systems Architecture",
  description:
    "Every milestone that permanently changed how Sufian Mustafa thinks, builds, and architects digital systems — from a BCS foundation and first HTML tag, through an 18-month isolation grind, to building DoItWithAI.tools, delivering a 15-chapter enterprise audit, and creating the LIONXE™ framework.",
  keywords: [
    "Sufian Mustafa",
    "Growth Systems Architect",
    "Professional Journey",
    "Career Timeline",
    "LIONXE Framework",
    "DoItWithAI Tools",
    "BCS Computer Science",
    "MCS Computer Science",
    "AI-Augmented Web Engineering",
    "Technical SEO",
    "Enterprise Digital Audit",
    "Think Higher Consultants",
    "WAYWE Gaming",
    "Next.js Developer",
    "Dubai Tech Career",
    "GCC Digital",
    "Sanity CMS",
    "18-Month Grind",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  formatDetection: { email: false, address: false, telephone: false },

  openGraph: {
    title:
      "The Journey — Sufian Mustafa | BCS → LIONXE™ → Gulf Vision",
    description:
      "An interactive staircase through every defining milestone: academic foundation, manual coding discipline, AI as catalyst, technical SEO, platform founding, enterprise research, and the creation of the LIONXE™ framework.",
    url: `${getBaseUrl()}/journey`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "profile",
    images: [
      {
        url: generateOGImageURL({
          title: "The Journey",
          subtitle: "BCS → Web Dev → AI → SEO → Platform → Enterprise → LIONXE™",
          category: "Success Journey",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Sufian Mustafa — professional journey from BCS to Growth Systems Architecture",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "The Journey — Sufian Mustafa | From First HTML Tag to LIONXE™",
    description:
      "Every step that built a Growth Systems Architect — from academic foundations through an 18-month grind to a proprietary quality framework applied at enterprise scale.",
    images: [
      generateOGImageURL({
        title: "The Journey",
        subtitle: "BCS → Web Dev → AI → SEO → Platform → Enterprise → LIONXE™",
        category: "Success Journey",
        theme: "gold",
      }),
    ],
    creator: "@sufianmustafa",
  },

  alternates: {
    canonical: `${getBaseUrl()}/journey`,
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

export default function JourneyPage() {
  /* ── Schema 1: ItemList (the journey timeline — primary schema for this page) ── */
  const journeySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sufian Mustafa — The Journey That Built the System",
    description:
      "A chronological record of every milestone that permanently changed how Sufian Mustafa thinks, builds, and architects digital systems — from academic foundations to enterprise-scale execution.",
    numberOfItems: 11,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "BCS — Systems Thinking Began",
        description:
          "Academic foundation in logic, mathematics, and structured problem-solving. The instinct to look beneath the surface and understand how things actually work.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "MCS — Code Became Visible",
        description:
          "First HTML tag written in Notepad during a Web Fundamentals class at AWKUM. The moment web development captured the imagination completely.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Manual Web Development — Built Everything by Hand",
        description:
          "HTML, CSS, JavaScript, responsive design — all hand-coded. Then React and component thinking, MERN stack, followed by Next.js and Sanity CMS.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "AI Catalyst — AI Changed the Speed",
        description:
          "AI entered after the manual foundation — multiplying execution instead of replacing understanding. Prompt engineering, AI-assisted development, AI content workflows.",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Search Systems — SEO Is Architecture",
        description:
          "Realized search engines are systems that reward structural quality. Technical SEO, schema, keyword architecture, E-E-A-T, and content depth.",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "The Deep Grind — 18 Months of Intense Building",
        description:
          "Roughly 18 months of focused building through heat, power cuts, and a tight budget. Built skills, platforms, confidence, and the professional identity that exists today.",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Do It With AI Tools — Platform Founded",
        description:
          "A solo-built AI SEO platform: Next.js 14, Sanity CMS, 8,000+ word articles, 7+ schema types, pillar-cluster architecture, and AI-augmented content workflows.",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Think Higher Consultants — First Professional Role",
        description:
          "Australian immigration and education niche. First taste of corporate pressure — real deadlines, reporting, client expectations, and professional confidence building.",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "WAYWE Gaming — Enterprise-Level SEO Research",
        description:
          "Carpet cleaning sector SEO for UK/US markets: service pages, local SEO, multi-location strategy, compliance-aware content, and the 87-website network research that became the 15-chapter enterprise audit.",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "LIONXE™ Framework — The Standard",
        description:
          "A proprietary four-gate quality standard with governing laws, sequential evaluation, and a scoring engine. Everything before this led here — the difference between a practitioner and an architect.",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Gulf Vision — The Next Chapter",
        description:
          "Strategic positioning for enterprise-scale digital environments in Dubai, UAE, Saudi Arabia, and the wider GCC. Not starting over — scaling up.",
      },
    ],
  };

  /* ── Schema 2: Person (lightweight — full Person is on homepage) ── */
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
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Abdul Wali Khan University Mardan (AWKUM)",
      },
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Master's Degree",
        name: "Master of Computer Science (MSc)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "Bachelor's Degree",
        name: "Bachelor of Computer Science (BCS)",
      },
    ],
  };

  /* ── Schema 3: BreadcrumbList ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
      { "@type": "ListItem", position: 2, name: "The Journey", item: `${getBaseUrl()}/journey` },
    ],
  };

  /* ── Schema 4: WebPage ── */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "The Journey — Sufian Mustafa",
    url: `${getBaseUrl()}/journey`,
    description:
      "An interactive chronological staircase through every defining professional milestone — from BCS to the LIONXE™ framework and Gulf Vision.",
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
      cssSelector: [".sj-floating-title", ".sj-floating-desc"],
    },
  };

  return (
    <>
      <Script
        id="schema-journey-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journeySchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-journey-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-journey-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-journey-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />

      <SuccessJourneyClient />
    </>
  );
}