// app/work/page.jsx — Server Component (SEO + Schema Layer)
import React from "react";
import Script from "next/script";
import WorkClient from "./WorkClient";

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
  title: "Work — Sufian Mustafa | Systems, Platforms, Research",
  description:
    "Three proof-of-execution case studies: DoItWithAI.tools (live AI SEO platform), LIONXE™ (proprietary quality framework), and a 15-chapter enterprise audit of 87 sites.",
  keywords: [
    "Sufian Mustafa Work",
    "Case Studies",
    "DoItWithAI Tools",
    "LIONXE Framework",
    "Enterprise Digital Audit",
    "Growth Systems Architect",
    "Technical SEO",
    "Next.js Platform",
    "AI SEO Platform",
    "Portfolio Projects",
    "87 Site Audit",
    "Content Architecture",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  formatDetection: { email: false, address: false, telephone: false },

  openGraph: {
    title: "Work — Sufian Mustafa | Systems, Platforms, Research",
    description:
      "Proof of execution: a live AI SEO platform, a proprietary quality framework, and a 15-chapter enterprise audit.",
    url: `${getBaseUrl()}/work`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: generateOGImageURL({
          title: "The Work",
          subtitle: "DoItWithAI.tools · LIONXE™ · Enterprise Audit",
          category: "Case Studies",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Sufian Mustafa — work and case studies",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Work — Sufian Mustafa | Systems, Platforms, Research",
    description:
      "Three case studies proving execution: a live platform, a proprietary framework, and a 15-chapter enterprise audit.",
    images: [
      generateOGImageURL({
        title: "The Work",
        subtitle: "DoItWithAI.tools · LIONXE™ · Enterprise Audit",
        category: "Case Studies",
        theme: "gold",
      }),
    ],
    creator: "@sufianmustafa",
  },

  alternates: { canonical: `${getBaseUrl()}/work` },

  robots: {
    index: true, follow: true, nocache: false,
    googleBot: { index: true, follow: true, noimageindex: false, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function WorkPage() {
  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sufian Mustafa — Proof of Execution",
    description: "Three case studies demonstrating Growth Systems Architecture in practice.",
    numberOfItems: 3,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: [
      {
        "@type": "ListItem", position: 1,
        item: {
          "@type": "CreativeWork",
          name: "DoItWithAI.tools",
          url: "https://doitwithai.tools",
          author: { "@type": "Person", name: "Sufian Mustafa" },
          description: "A solo-built AI SEO platform with 8,000+ word articles, 7+ schema types, pillar-cluster architecture, and AI-augmented content workflows. Live and compounding.",
          genre: "Web Platform",
          dateCreated: "2025",
        },
      },
      {
        "@type": "ListItem", position: 2,
        item: {
          "@type": "CreativeWork",
          name: "LIONXE™ Framework",
          url: "https://lionxeframework.com",
          author: { "@type": "Person", name: "Sufian Mustafa" },
          description: "A proprietary four-gate quality standard with governing laws, sequential evaluation, and a scoring engine. Applied at enterprise scale.",
          genre: "Quality Framework",
          dateCreated: "2025",
        },
      },
      {
        "@type": "ListItem", position: 3,
        item: {
          "@type": "CreativeWork",
          name: "Enterprise Research Report",
          author: { "@type": "Person", name: "Sufian Mustafa" },
          description: "A 15-chapter strategic audit of an 87-website network (226,200+ URLs) covering content quality, automated pipelines, architecture, social media, team capacity, and compliance.",
          genre: "Enterprise Audit",
          dateCreated: "2026",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
      { "@type": "ListItem", position: 2, name: "Work", item: `${getBaseUrl()}/work` },
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Work — Sufian Mustafa",
    url: `${getBaseUrl()}/work`,
    description: "Three proof-of-execution case studies demonstrating Growth Systems Architecture in practice.",
    isPartOf: { "@type": "WebSite", name: "Sufian Mustafa", url: getBaseUrl() },
    about: { "@type": "Person", name: "Sufian Mustafa", jobTitle: "Growth Systems Architect" },
    speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", ".work-lede"] },
  };

  return (
    <>
      <Script id="schema-work-list" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }} strategy="afterInteractive" />
      <Script id="schema-work-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} strategy="afterInteractive" />
      <Script id="schema-work-webpage" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} strategy="afterInteractive" />
      <WorkClient />
    </>
  );
}