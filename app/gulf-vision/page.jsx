// app/gulf-vision/page.jsx — Server Component (SEO + Schema Layer)
// The client-side interactive Gulf Vision page lives in ./GulfVisionClient.jsx
import React from "react";
import Script from "next/script";
import GulfVisionClient from "./GulfVisionClient";

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
    "Gulf Vision — Sufian Mustafa | Strategic Direction for Dubai, UAE & GCC",
  description:
    "How Growth Systems Architecture, technical SEO, AI-augmented engineering, and the LIONXE™ framework apply inside the Gulf's enterprise technology ecosystem. Education verified, documentation prepared, direction deliberate.",
  keywords: [
    "Sufian Mustafa",
    "Growth Systems Architect",
    "Dubai",
    "UAE",
    "GCC",
    "Gulf Region",
    "Saudi Arabia",
    "Technical SEO Dubai",
    "AI SEO UAE",
    "Next.js Developer Dubai",
    "LIONXE Framework",
    "DoItWithAI Tools",
    "Enterprise Digital Growth",
    "AI-Augmented Web Engineering",
    "Gulf Tech Jobs",
    "Pakistan to Dubai",
    "HEC Verified",
    "MOFA Attested",
    "Digital Transformation GCC",
    "Content Architecture",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  formatDetection: { email: false, address: false, telephone: false },

  openGraph: {
    title:
      "Gulf Vision — Sufian Mustafa | Growth Systems Architecture for the GCC",
    description:
      "A strategic direction page: how systems thinking, technical SEO, AI search visibility, and the LIONXE™ framework align with the Gulf's enterprise technology ecosystem.",
    url: `${getBaseUrl()}/gulf-vision`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "profile",
    images: [
      {
        url: generateOGImageURL({
          title: "Gulf Vision",
          subtitle: "Growth Systems Architecture → Dubai · UAE · GCC",
          category: "Strategic Direction",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Sufian Mustafa — Gulf Vision strategic direction for Dubai and GCC",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Gulf Vision — Sufian Mustafa | Growth Systems Architect for Dubai & GCC",
    description:
      "Where systems thinking meets the Gulf's enterprise ecosystem — technical SEO, AI-augmented engineering, and the LIONXE™ framework applied at scale.",
    images: [
      generateOGImageURL({
        title: "Gulf Vision",
        subtitle: "Growth Systems Architecture → Dubai · UAE · GCC",
        category: "Strategic Direction",
        theme: "gold",
      }),
    ],
    creator: "@sufianmustafa",
  },

  alternates: {
    canonical: `${getBaseUrl()}/gulf-vision`,
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

export default function GulfVisionPage() {
  /* ── Schema 1: WebPage (primary — strategic direction page) ── */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Gulf Vision — Sufian Mustafa",
    url: `${getBaseUrl()}/gulf-vision`,
    description:
      "How Growth Systems Architecture applies inside the Gulf's enterprise technology ecosystem — capability alignment, readiness details, and strategic direction for Dubai, UAE, Saudi Arabia, and the wider GCC.",
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
      cssSelector: [".gv-h1", ".gv-lede", ".gv-section-title"],
    },
    audience: {
      "@type": "Audience",
      audienceType: "Hiring managers, founders, and decision-makers in Dubai, UAE, Saudi Arabia, and the GCC",
      geographicArea: {
        "@type": "Place",
        name: "Gulf Cooperation Council (GCC)",
        containedInPlace: {
          "@type": "Place",
          name: "Middle East",
        },
      },
    },
  };

  /* ── Schema 2: Person (Gulf-focused — highlights regional relevance) ── */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sufian Mustafa",
    jobTitle: "Growth Systems Architect",
    url: "https://sufianmustafa.com",
    description:
      "A systems-focused builder targeting the Gulf enterprise technology ecosystem — combining technical SEO, AI-augmented web engineering, structured content systems, and the LIONXE™ evaluation framework.",
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
        recognizedBy: [
          { "@type": "Organization", name: "Higher Education Commission (HEC), Pakistan" },
          { "@type": "Organization", name: "Ministry of Foreign Affairs (MOFA), Pakistan" },
        ],
      },
    ],
    knowsAbout: [
      "Growth Systems Architecture",
      "Technical SEO Architecture",
      "AI Search Visibility (GEO/AEO)",
      "AI-Augmented Web Engineering",
      "Content Systems Engineering",
      "LIONXE™ Framework",
      "Enterprise Digital Auditing",
      "Next.js 14",
      "Sanity CMS",
      "Prompt Architecture",
    ],
    nationality: {
      "@type": "Country",
      name: "Pakistan",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressCountry: "PK",
    },
    seeks: {
      "@type": "Demand",
      description:
        "Enterprise-level digital growth, technical SEO architecture, and AI-augmented web engineering roles in Dubai, UAE, Saudi Arabia, and the wider GCC.",
      areaServed: [
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "Country", name: "Qatar" },
        { "@type": "Country", name: "Bahrain" },
        { "@type": "Country", name: "Kuwait" },
        { "@type": "Country", name: "Oman" },
      ],
    },
  };

  /* ── Schema 3: FAQPage (the common questions section — rich result eligible) ── */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is Sufian Mustafa targeting the Gulf region?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Gulf's technology ecosystem — AI adoption, digital transformation, enterprise web systems, English-first corporate environments — aligns well with the combined engineering and search architecture capability he has built. It is a natural fit for the next professional chapter.",
        },
      },
      {
        "@type": "Question",
        name: "What is the visa situation for Sufian Mustafa?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard employer-sponsored employment visa — the routine process for international hires in the UAE and GCC. Documentation is prepared and ready.",
        },
      },
      {
        "@type": "Question",
        name: "Are Sufian Mustafa's qualifications verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MSc Computer Science from AWKUM. Degree and transcripts verified by HEC (Higher Education Commission), attested by MOFA (Ministry of Foreign Affairs). All documentation is ready for employer verification.",
        },
      },
      {
        "@type": "Question",
        name: "How soon can Sufian Mustafa relocate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "On a short timeline. Passport is ready and he is available to travel for onboarding once an offer is confirmed.",
        },
      },
      {
        "@type": "Question",
        name: "What type of roles is Sufian Mustafa looking for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Roles where technical execution and strategic thinking intersect — digital growth, SEO architecture, content systems, platform engineering. Positions where the value is in connecting disciplines, not executing isolated tasks.",
        },
      },
      {
        "@type": "Question",
        name: "What is the LIONXE™ framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A proprietary four-gate quality standard created by Sufian Mustafa — Logic & Longevity, Internal Optimization, Non-Negotiable Integrity, Exceptional Execution — with governing laws, sequential evaluation, and a scoring engine. Applied at enterprise scale in a 15-chapter, 87-site digital audit.",
        },
      },
      {
        "@type": "Question",
        name: "What makes Sufian Mustafa different from other candidates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "He combines full-stack engineering, technical SEO architecture, AI workflows, content systems, and strategic thinking in one person — plus he owns a live platform (DoItWithAI.tools) and created the LIONXE™ quality framework. Most candidates bring one layer; he brings the system.",
        },
      },
    ],
  };

  /* ── Schema 4: BreadcrumbList ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
      { "@type": "ListItem", position: 2, name: "Gulf Vision", item: `${getBaseUrl()}/gulf-vision` },
    ],
  };

  /* ── Schema 5: Place (target market — helps geo-relevance signals) ── */
  const targetMarketSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Gulf Cooperation Council (GCC)",
    description:
      "The target market for Sufian Mustafa's professional direction — Dubai, Abu Dhabi, Saudi Arabia, Qatar, Bahrain, and the wider Gulf enterprise technology ecosystem.",
    containsPlace: [
      { "@type": "City", name: "Dubai", containedInPlace: { "@type": "Country", name: "United Arab Emirates" } },
      { "@type": "City", name: "Abu Dhabi", containedInPlace: { "@type": "Country", name: "United Arab Emirates" } },
      { "@type": "City", name: "Riyadh", containedInPlace: { "@type": "Country", name: "Saudi Arabia" } },
      { "@type": "City", name: "Jeddah", containedInPlace: { "@type": "Country", name: "Saudi Arabia" } },
      { "@type": "City", name: "Doha", containedInPlace: { "@type": "Country", name: "Qatar" } },
    ],
  };

  return (
    <>
      <Script
        id="schema-gv-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-gv-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-gv-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-gv-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-gv-market"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(targetMarketSchema) }}
        strategy="afterInteractive"
      />

      <GulfVisionClient />
    </>
  );
}