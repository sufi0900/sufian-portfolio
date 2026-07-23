// ─────────────────────────────────────────────────────────────────────────────
// components/pillar/pillarServerFactory.tsx
// A factory function that generates the server component for any pillar.
// Each pillar's page.tsx is a 3-line file that calls this factory.
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next";
import PillarPageClient from "./PillarPageClient";
import type { PillarData } from "./pillarData";

function getBaseUrl() {
  if (process.env.NODE_ENV === "production") return "https://lionxe.com";
  return process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";
}

function generateOGImageURL(params: Record<string, string>) {
  return `${getBaseUrl()}/api/og?${new URLSearchParams(params).toString()}`;
}

function jsonLd(obj: Record<string, unknown>) {
  return { __html: JSON.stringify(obj).replace(/</g, "\\u003c") };
}

const BASE_URL_FN = getBaseUrl;
const PERSON_ID = "https://sufianmustafa.com/#sufian-mustafa";

// ─────────────────────────────────────────────────────────────────────────────
// METADATA GENERATOR
// ─────────────────────────────────────────────────────────────────────────────

export function generatePillarMetadata(pillar: PillarData): Metadata {
  const BASE_URL = BASE_URL_FN();
  const pageUrl = `${BASE_URL}/${pillar.seo.slug}`;
  const ogImage = generateOGImageURL({
    title: `${pillar.code} — ${pillar.name}`,
    subtitle: pillar.tagline,
    badge: `Gate ${pillar.gateNumber}`,
    law: pillar.governingLaw,
  });

  return {
    metadataBase: new URL(BASE_URL),
    title: pillar.seo.title,
    description: pillar.seo.description,
    keywords: pillar.seo.keywords,
    authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
    creator: "Sufian Mustafa",
    publisher: "LIONXE",
    alternates: { canonical: `/${pillar.seo.slug}` },
    openGraph: {
      type: "article",
      url: pageUrl,
      siteName: "LIONXE™",
      title: pillar.seo.title,
      description: pillar.seo.description,
      locale: "en_US",
      images: [{ url: ogImage, width: 1200, height: 630, alt: `LIONXE™ ${pillar.code} — ${pillar.name}` }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@lionxe",
      creator: "@sufianmustafa",
      title: `${pillar.code} — ${pillar.name} | LIONXE™`,
      description: pillar.seo.description,
      images: [ogImage],
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large" as const, "max-snippet": -1, "max-video-preview": -1 },
    },
    other: {
      "content-type": "framework-pillar",
      "ai-content-declaration": "human-created, ai-assisted",
      "brand-name": "LIONXE",
      "brand-founder": "Sufian Mustafa",
      "pillar-code": pillar.code,
      "pillar-name": pillar.name,
      "governing-law": pillar.governingLaw,
      "gate-number": String(pillar.gateNumber),
      "rubric-version": "LIONXE Audit Rubric v1.0",
    },
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT GENERATOR
// ─────────────────────────────────────────────────────────────────────────────

export function PillarPageServer({ pillar }: { pillar: PillarData }) {
  const BASE_URL = BASE_URL_FN();
  const pageUrl = `${BASE_URL}/${pillar.seo.slug}`;

  const articleSchema = jsonLd({
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}/#article`,
    headline: `${pillar.code} — ${pillar.name}: ${pillar.tagline}`,
    alternativeHeadline: `Gate ${pillar.gateNumber} of the LIONXE™ Framework — Governed by ${pillar.governingLaw}`,
    description: pillar.seo.description,
    author: { "@id": PERSON_ID },
    publisher: { "@id": `${BASE_URL}/#organization` },
    datePublished: "2026-07-01",
    dateModified: new Date().toISOString().split("T")[0],
    mainEntityOfPage: pageUrl,
    articleSection: "Framework Pillars",
    keywords: pillar.seo.keywords.join(", "),
    isPartOf: { "@type": "CreativeWork", "@id": `${BASE_URL}/#framework`, name: "LIONXE™ Framework" },
  });

  const definedTerms = jsonLd({
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${pageUrl}/#terms`,
    name: `LIONXE™ Pillar ${pillar.code} — Criteria`,
    description: `The four scoring domains of the ${pillar.name} pillar.`,
    creator: { "@id": PERSON_ID },
    hasDefinedTerm: pillar.criteria.map((c) => ({
      "@type": "DefinedTerm",
      termCode: c.id,
      name: c.name,
      description: c.statement,
    })),
  });

  const breadcrumb = jsonLd({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: `Pillar ${pillar.code}`, item: pageUrl },
    ],
  });

  const faq = jsonLd({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${pageUrl}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: `What is the ${pillar.name} pillar in the LIONXE™ framework?`,
        acceptedAnswer: { "@type": "Answer", text: pillar.definition[0] },
      },
      {
        "@type": "Question",
        name: `What is the ${pillar.governingLaw}?`,
        acceptedAnswer: { "@type": "Answer", text: pillar.governingLawExplanation },
      },
      {
        "@type": "Question",
        name: `What are the four criteria of the ${pillar.code} pillar?`,
        acceptedAnswer: { "@type": "Answer", text: pillar.criteria.map((c) => `${c.id} — ${c.name}: ${c.statement}`).join(" ") },
      },
    ],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={articleSchema} />
      <script type="application/ld+json" dangerouslySetInnerHTML={definedTerms} />
      <script type="application/ld+json" dangerouslySetInnerHTML={breadcrumb} />
      <script type="application/ld+json" dangerouslySetInnerHTML={faq} />
      <PillarPageClient pillar={pillar} />
    </>
  );
}