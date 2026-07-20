// app/contact/page.jsx — Server Component (SEO + Schema Layer)
// The client-side contact interface lives in ./ContactClient.jsx
import React from "react";
import Script from "next/script";
import ContactClient from "@/components/Contact";
// import ContactClient from "./ContactClient";

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
  title: "Contact — Sufian Mustafa | Growth Systems Architect",
  description:
    "Reach Sufian Mustafa for select engagements, advisory, and strategic consulting in technical SEO, AI search, web architecture, and digital growth systems.",
  keywords: [
    "Contact Sufian Mustafa",
    "Growth Systems Architect",
    "Technical SEO Consulting",
    "AI SEO Advisory",
    "LIONXE Framework",
    "Dubai Digital Consultant",
    "GCC Tech",
    "Web Architecture Consulting",
    "DoItWithAI Tools",
    "Digital Growth Strategy",
  ].join(", "),
  authors: [{ name: "Sufian Mustafa", url: "https://sufianmustafa.com" }],
  creator: "Sufian Mustafa",
  publisher: "Sufian Mustafa",
  formatDetection: { email: false, address: false, telephone: false },

  openGraph: {
    title: "Contact — Sufian Mustafa | Growth Systems Architect",
    description:
      "Select engagements, advisory, and strategic consulting — technical SEO, AI search, digital growth systems, and LIONXE™ framework evaluation.",
    url: `${getBaseUrl()}/contact`,
    siteName: "Sufian Mustafa",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: generateOGImageURL({
          title: "Get in Touch",
          subtitle: "Select Engagements · Advisory · Strategy",
          category: "Contact",
          theme: "gold",
        }),
        width: 1200,
        height: 630,
        alt: "Contact Sufian Mustafa — Growth Systems Architect",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact — Sufian Mustafa | Growth Systems Architect",
    description:
      "For select engagements, advisory, and strategic consulting in digital growth systems and technical SEO architecture.",
    images: [
      generateOGImageURL({
        title: "Get in Touch",
        subtitle: "Select Engagements · Advisory · Strategy",
        category: "Contact",
        theme: "gold",
      }),
    ],
    creator: "@sufianmustafa",
  },

  alternates: {
    canonical: `${getBaseUrl()}/contact`,
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

export default function ContactPage() {
  /* ── Schema 1: ContactPage (Person with contactPoint) ── */
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sufian Mustafa",
    jobTitle: "Growth Systems Architect",
    url: "https://sufianmustafa.com",
    email: "hello@sufianmustafa.com",
    description:
      "Growth Systems Architect combining technical SEO, AI-augmented web engineering, content systems, and the LIONXE™ framework.",
    sameAs: [
      "https://doitwithai.tools",
      "https://lionxeframework.com",
      "https://www.linkedin.com/in/sufianmustafa",
      "https://github.com/sufianmustafa",
      "https://dev.to/sufianmustafa",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressCountry: "PK",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Professional inquiries",
        email: "hello@sufianmustafa.com",
        url: `${getBaseUrl()}/contact`,
        availableLanguage: "English",
        description: "Select engagements, advisory, and strategic consulting.",
      },
      {
        "@type": "ContactPoint",
        contactType: "Platform inquiries",
        email: "contact@doitwithai.tools",
        url: "https://doitwithai.tools",
        availableLanguage: "English",
        description: "DoItWithAI.tools — AI SEO platform partnerships and content.",
      },
      {
        "@type": "ContactPoint",
        contactType: "Framework inquiries",
        email: "audit@lionxeframework.com",
        url: "https://lionxeframework.com",
        availableLanguage: "English",
        description: "LIONXE™ framework — audit licensing and enterprise evaluation.",
      },
    ],
  };

  /* ── Schema 2: Organization (ecosystem with 3 contact surfaces) ── */
  const ecosystemSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sufian Mustafa Digital Ecosystem",
    url: "https://sufianmustafa.com",
    email: "hello@sufianmustafa.com",
    founder: {
      "@type": "Person",
      name: "Sufian Mustafa",
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "Do It With AI Tools",
        url: "https://doitwithai.tools",
        email: "contact@doitwithai.tools",
        description: "AI SEO and AI tools platform.",
      },
      {
        "@type": "Organization",
        name: "LIONXE™ Framework",
        url: "https://lionxeframework.com",
        email: "audit@lionxeframework.com",
        description: "Proprietary four-gate quality and auditing standard.",
      },
    ],
  };

  /* ── Schema 3: BreadcrumbList ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: getBaseUrl() },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${getBaseUrl()}/contact` },
    ],
  };

  /* ── Schema 4: WebPage ── */
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Contact — Sufian Mustafa",
    url: `${getBaseUrl()}/contact`,
    description:
      "Reach Sufian Mustafa for select engagements, advisory, and strategic consulting across three connected platforms.",
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
      cssSelector: ["h1", ".contact-lede"],
    },
    potentialAction: {
      "@type": "CommunicateAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "mailto:hello@sufianmustafa.com",
        actionPlatform: "http://schema.org/DesktopWebPlatform",
      },
      description: "Email Sufian Mustafa for professional inquiries.",
    },
  };

  return (
    <>
      <Script
        id="schema-contact-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-contact-ecosystem"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ecosystemSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-contact-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="schema-contact-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
        strategy="afterInteractive"
      />

      <ContactClient />
    </>
  );
}