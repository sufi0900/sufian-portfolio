// app/about/page.jsx — Server Component (SEO + Schema Layer of sufianmustafa.com/about for refrence)
// The client-side interactive book lives in ./AboutBookClient.jsx
import React from "react";
import Script from "next/script";
import AboutBookClient from "./AboutBookClient";

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
    "About Sufian Mustafa: From First HTML Tag to Systems Architect",
  description:
    "The journey of Sufian Mustafa: From a first HTML tag in Notepad to building DoItWithAI.tools, elite enterprise audits, & the LIONXE quality framework.",
  keywords: [
    "Sufian Mustafa",
    "Growth Systems Architect",
    "About",
    "Journey",
    "LIONXE Framework",
    "DoItWithAI Tools",
    "Technical SEO",
    "AI-Augmented Web Engineering",
    "MCS Computer Science",
    "Next.js Developer",
    "Enterprise Digital Audit",
    "Content Architecture",
    "Dubai Tech",
    "GCC Digital",
    "Think Higher Consultants",
    "WAYWE Gaming",
    "Sanity CMS",
    "AI SEO",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  formatDetection: { email: false, address: false, telephone: false },

  openGraph: {
    title:
      "About Sufian Mustafa — From First HTML Tag to Growth Systems Architecture",
    description:
      "The complete professional journey: academic foundation, manual web development, AI as catalyst, an 18-month isolation grind, a live AI SEO platform, enterprise-grade research, and the LIONXE™ framework.",
    url: `${getBaseUrl()}/about`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "profile",
    images: [
      {
        url: generateOGImageURL({
          title: "About Sufian Mustafa",
          subtitle: "BCS → MCS → Web Dev → AI → SEO → Platform → LIONXE™",
          category: "The Journey",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Sufian Mustafa — professional journey from academic foundation to Growth Systems Architecture",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "About Sufian Mustafa — From First HTML Tag to Growth Systems Architecture",
    description:
      "How a first HTML tag in Notepad became a live AI SEO platform, a proprietary quality framework, and a 15-chapter enterprise audit.",
    images: [
      generateOGImageURL({
        title: "About Sufian Mustafa",
        subtitle: "BCS → MCS → Web Dev → AI → SEO → Platform → LIONXE™",
        category: "The Journey",
        theme: "gold",
      }),
    ],
    creator: "@sufianmustafa",
  },

  alternates: {
    canonical: `${getBaseUrl()}/about`,
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

export default function AboutPage() {
  /* ── Schema 1: ProfilePage + Person ── */
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${getBaseUrl()}/about`,
    name: "About Sufian Mustafa — Growth Systems Architect",
    description:
      "The professional journey, mindset, and execution record of Sufian Mustafa — from academic foundations in computer science through platform building, enterprise auditing, and framework creation.",
    mainEntity: {
      "@type": "Person",
      name: "Sufian Mustafa",
      jobTitle: "Growth Systems Architect",
      url: "https://sufianmustafa.com",
      description:
        "A systems-focused builder combining technical SEO, AI-augmented web engineering, structured content systems, and the LIONXE™ evaluation framework to build digital authority that compounds.",
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
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Master's Degree",
          educationalLevel: "Postgraduate",
          name: "Master of Computer Science (MSc)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "Bachelor's Degree",
          educationalLevel: "Undergraduate",
          name: "Bachelor of Computer Science (BCS)",
        },
      ],
      knowsAbout: [
        "Growth Systems Architecture",
        "Technical SEO",
        "AI Search Visibility",
        "AI-Augmented Web Engineering",
        "Content Architecture",
        "LIONXE™ Framework",
        "Enterprise Digital Auditing",
        "Next.js",
        "React",
        "Sanity CMS",
        "Prompt Engineering",
      ],
      hasOccupation: [
        {
          "@type": "Occupation",
          name: "Growth Systems Architect",
          description:
            "Designing interconnected digital ecosystems that combine engineering, AI, technical SEO, research, and long-term strategy.",
        },
      ],
      worksFor: {
        "@type": "Organization",
        name: "WAYWE Gaming",
        description:
          "Carpet cleaning sector SEO for UK/US markets — service pages, local SEO, compliance-aware content, and multi-location architecture.",
      },
      founder: {
        "@type": "Organization",
        name: "Do It With AI Tools",
        url: "https://doitwithai.tools",
        description:
          "A solo-built AI SEO platform with 8,000+ word articles, 7+ schema types, and pillar-cluster content architecture.",
      },
    },
  };

  /* ── Schema 2: The journey as an ItemList (timeline for AI bots) ── */
  const journeySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sufian Mustafa — Professional Journey",
    description:
      "The chronological journey from academic foundation to Growth Systems Architecture, told through the milestones that permanently changed how Sufian thinks, builds, and architects digital systems.",
    numberOfItems: 12,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "BCS Computer Science", description: "Academic foundation in logic, mathematics, and structured problem-solving." },
      { "@type": "ListItem", position: 2, name: "MCS Computer Science", description: "The turning point — first HTML tag in Notepad during a Web Fundamentals class at AWKUM." },
      { "@type": "ListItem", position: 3, name: "Manual Web Development", description: "Hand-coded HTML, CSS, JavaScript, then React, MERN stack, and Next.js + Sanity CMS." },
      { "@type": "ListItem", position: 4, name: "AI as Catalyst", description: "AI entered after the manual foundation — multiplying execution speed without replacing architectural understanding." },
      { "@type": "ListItem", position: 5, name: "Content Writing & SEO", description: "Discovered that search engines are systems. Technical SEO, schema, keyword architecture, and content depth." },
      { "@type": "ListItem", position: 6, name: "18-Month Isolation Grind", description: "Intense focused building — the most defining stretch. Skills, platforms, and professional identity forged under pressure." },
      { "@type": "ListItem", position: 7, name: "Do It With AI Tools", description: "A solo-built AI SEO platform — Next.js 14, Sanity CMS, 8K+ word articles, 7+ schema types." },
      { "@type": "ListItem", position: 8, name: "Think Higher Consultants", description: "First professional role — Australian immigration/education niche, corporate pressure, reporting discipline." },
      { "@type": "ListItem", position: 9, name: "WAYWE Gaming", description: "Enterprise-level SEO for UK/US carpet cleaning sector — the 87-site network research and 15-chapter audit." },
      { "@type": "ListItem", position: 10, name: "LIONXE™ Framework", description: "A proprietary four-gate quality standard with governing laws, sequential evaluation, and a scoring engine." },
      { "@type": "ListItem", position: 11, name: "sufianmustafa.com", description: "The authority hub — personal portfolio connecting the three-platform ecosystem." },
      { "@type": "ListItem", position: 12, name: "Gulf Vision", description: "Strategic positioning for enterprise-scale digital environments in Dubai, UAE, Saudi Arabia, and the wider GCC." },
    ],
  };

  /* ── Schema 3: BreadcrumbList ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
      { "@type": "ListItem", position: 2, name: "About", item: `${getBaseUrl()}/about` },
    ],
  };

  /* ── Schema 4: WebPage ── */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Sufian Mustafa",
    url: `${getBaseUrl()}/about`,
    description:
      "The complete professional journey from academic foundations through platform building, enterprise auditing, and framework creation — told as an interactive book.",
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
      cssSelector: [".bk-cover-title", ".bk-cover-tag", ".bk-ch-title"],
    },
  };

  /* ── Schema 5: CreativeWork (the LIONXE™ framework as an authored work) ── */
  const lionxeSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "LIONXE™ Framework",
    url: "https://lionxeframework.com",
    author: {
      "@type": "Person",
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
    },
    description:
      "A proprietary four-gate digital quality and auditing standard — Logic & Longevity, Internal Optimization, Non-Negotiable Integrity, Exceptional Execution — with governing laws, sequential evaluation logic, and a scoring engine.",
    genre: "Quality Framework",
    inLanguage: "en",
  };

  return (
    <>
      <Script
        id="schema-about-profile"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-about-journey"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(journeySchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-about-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-about-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-about-lionxe"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lionxeSchema) }}
        strategy="afterInteractive"
      />

      <AboutBookClient />
    </>
  );
}