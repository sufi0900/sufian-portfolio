// app/page.jsx — Server Component (SEO + Schema Layer)
// The client-side interactive hero lives in ./HeroClient.jsx (or ./index.jsx)
import React from "react";
import Script from "next/script";
import HeroClient from "@/components/Hero/index"; // Client-side interactive hero component

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
    "Sufian Mustafa | Growth Systems Architect and LIONXE™ Creator ",
  description:
    "Discover how Sufian Mustafa combines systems thinking, AI-augmented engineering, & search visibility to build Do It With AI Tools & the LIONXE™ framework",
  keywords: [
    "Sufian Mustafa",
    "Growth Systems Architect",
    "Technical SEO",
    "AI SEO",
    "AI-Augmented Web Engineering",
    "LIONXE Framework",
    "DoItWithAI Tools",
    "Next.js Developer",
    "Content Architecture",
    "GEO Optimization",
    "AEO Strategy",
    "Schema Markup",
    "Enterprise Digital Auditing",
    "Sanity CMS",
    "Dubai Tech",
    "GCC Digital",
    "Systems Thinking",
    "Digital Authority",
    "Pillar Cluster Architecture",
    "Core Web Vitals",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(getBaseUrl()),

  openGraph: {
    title:
      "Sufian Mustafa — Growth Systems Architect | LIONXE™ Creator",
    description:
      "Architects digital growth systems that compound. Technical SEO, AI-augmented web engineering, structured content, and a proprietary quality framework — proven through a live AI SEO platform and a 15-chapter enterprise audit.",
    url: getBaseUrl(),
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: generateOGImageURL({
          title: "Sufian Mustafa",
          subtitle: "Growth Systems Architect · LIONXE™ Creator · DoItWithAI Founder",
          category: "Portfolio",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Sufian Mustafa — Growth Systems Architect",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Sufian Mustafa — Growth Systems Architect",
    description:
      "Combines technical SEO, AI-augmented web engineering, content architecture, and the LIONXE™ framework into digital growth systems that compound.",
    images: [
      generateOGImageURL({
        title: "Sufian Mustafa",
        subtitle: "Growth Systems Architect · LIONXE™ Creator · DoItWithAI Founder",
        category: "Portfolio",
        theme: "gold",
      }),
    ],
    creator: "@sufianmustafa",
  },

  alternates: {
    canonical: getBaseUrl(),
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

  verification: {
    // Uncomment and add your codes when ready:
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function HomePage() {
  /* ── Schema 1: WebSite (sitelinks search box eligibility + site identity) ── */
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sufian Mustafa",
    alternateName: "Sufian Mustafa Portfolio",
    url: getBaseUrl(),
    description:
      "The professional authority hub of Sufian Mustafa — Growth Systems Architect, LIONXE™ creator, and founder of DoItWithAI.tools.",
    publisher: {
      "@type": "Person",
      name: "Sufian Mustafa",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${getBaseUrl()}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  /* ── Schema 2: Person (the primary entity — most important for AI bots) ── */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sufian Mustafa",
    givenName: "Sufian",
    familyName: "Mustafa",
    jobTitle: "Growth Systems Architect",
    url: "https://sufianmustafa.com",
    description:
      "A systems-focused builder combining technical SEO, AI-augmented web engineering, structured content systems, and the LIONXE™ evaluation framework to build digital authority that compounds.",
    image: generateOGImageURL({
      title: "Sufian Mustafa",
      subtitle: "Growth Systems Architect",
      theme: "gold",
    }),
    sameAs: [
      "https://doitwithai.tools",
      "https://lionxeframework.com",
      "https://www.linkedin.com/in/sufianmustafa",
      "https://github.com/sufianmustafa",
      "https://dev.to/sufianmustafa",
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
    hasOccupation: {
      "@type": "Occupation",
      name: "Growth Systems Architect",
      description:
        "Designing interconnected digital ecosystems that combine engineering, AI, technical SEO, structured content, research, and long-term business strategy into integrated growth systems.",
      skills: [
        "Growth Systems Architecture",
        "Technical SEO Architecture",
        "AI Search Visibility (GEO/AEO)",
        "AI-Augmented Web Engineering",
        "Content Systems Engineering",
        "Enterprise Digital Auditing",
        "LIONXE™ Framework Design",
        "Prompt Architecture",
        "Information Architecture",
        "Performance Engineering",
      ],
    },
    knowsAbout: [
      {
        "@type": "Thing",
        name: "Growth Systems Architecture",
        description:
          "Designing complete digital ecosystems where engineering, AI, SEO, research, content, and business strategy compound together.",
      },
      {
        "@type": "Thing",
        name: "Technical SEO",
        description:
          "Crawl architecture, indexation control, Core Web Vitals, schema markup (7+ JSON-LD types), and structural search optimization.",
      },
      {
        "@type": "Thing",
        name: "AI Search Visibility",
        description:
          "GEO optimization for AI-generated answers and AEO strategy for featured snippets across ChatGPT, Perplexity, and Google AI Overviews.",
      },
      {
        "@type": "Thing",
        name: "AI-Augmented Web Engineering",
        description:
          "Building production web platforms using Next.js 14, React, Sanity CMS, and Tailwind CSS with AI-assisted development on a manual coding foundation.",
      },
      {
        "@type": "Thing",
        name: "LIONXE™ Framework",
        description:
          "A proprietary four-gate quality standard — Logic & Longevity, Internal Optimization, Non-Negotiable Integrity, Exceptional Execution — with governing laws and a scoring engine.",
      },
      {
        "@type": "Thing",
        name: "Enterprise Digital Auditing",
        description:
          "Full-system diagnostic demonstrated through a 15-chapter audit of an 87-website network covering 226,200+ URLs.",
      },
      {
        "@type": "Thing",
        name: "Content Systems Engineering",
        description:
          "Pillar-cluster architecture, E-E-A-T signal engineering, 8,000+ word depth standards, and topical authority design.",
      },
      {
        "@type": "Thing",
        name: "Prompt Architecture",
        description:
          "Designing layered, reusable prompt systems and AI workflows that produce consistent, humanized output at scale.",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "WAYWE Gaming",
    },
    founder: [
      {
        "@type": "Organization",
        name: "Do It With AI Tools",
        url: "https://doitwithai.tools",
        description:
          "A solo-built AI SEO platform with 8,000+ word articles, 7+ schema types, and pillar-cluster content architecture.",
        foundingDate: "2025",
      },
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
  };

  /* ── Schema 3: Organization (the three-platform ecosystem) ── */
  const ecosystemSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sufian Mustafa Digital Ecosystem",
    url: "https://sufianmustafa.com",
    description:
      "A three-platform digital ecosystem: sufianmustafa.com (authority hub), DoItWithAI.tools (live AI SEO platform), and the LIONXE™ framework (proprietary quality standard).",
    founder: {
      "@type": "Person",
      name: "Sufian Mustafa",
      url: "https://sufianmustafa.com",
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "Do It With AI Tools",
        url: "https://doitwithai.tools",
        description: "AI SEO and AI tools platform.",
      },
      {
        "@type": "Organization",
        name: "LIONXE™ Framework",
        url: "https://lionxeframework.com",
        description: "Proprietary four-gate quality and auditing standard.",
      },
    ],
  };

  /* ── Schema 4: CreativeWork (LIONXE™) ── */
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
      "A proprietary four-gate digital quality standard — Logic & Longevity, Internal Optimization, Non-Negotiable Integrity, Exceptional Execution — with governing laws, sequential evaluation logic, and a scoring engine. Applied at enterprise scale in a 15-chapter, 87-site audit.",
    genre: "Quality Framework / Audit Methodology",
    inLanguage: "en",
    dateCreated: "2025",
  };

  /* ── Schema 5: BreadcrumbList ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: getBaseUrl(),
      },
    ],
  };

  /* ── Schema 6: WebPage with SpeakableSpecification ── */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Sufian Mustafa — Growth Systems Architect",
    url: getBaseUrl(),
    description:
      "The professional authority hub of Sufian Mustafa — Growth Systems Architect, LIONXE™ creator, and founder of DoItWithAI.tools.",
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
      cssSelector: ["h1", ".hero-fade-in p"],
    },
    mainEntity: {
      "@type": "Person",
      name: "Sufian Mustafa",
    },
  };

  return (
    <>
      <Script
        id="schema-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-ecosystem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecosystemSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-lionxe"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lionxeSchema) }}
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

    

    </>
  );
}