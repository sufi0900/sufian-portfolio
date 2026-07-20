// page.jsx
import React from 'react';
import Script from 'next/script';
import { NextSeo } from "next-seo";
import FAQComponent from './FAQClient';
import { faqsData } from './faqs';
import Head from 'next/head';

function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return 'https://sufianmustafa.com';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}

function generateOGImageURL(params) {
  const baseURL = `${getBaseUrl()}/api/og`;
  const searchParams = new URLSearchParams(params);
  return `${baseURL}?${searchParams.toString()}`;
}

export const metadata = {
  title: "Frequently Asked Questions | Sufian Mustafa - Growth Systems Architect",
  description: "Get transparent answers about Sufian Mustafa's full-stack capabilities, the LIONXE™ quality framework, professional background, and availability for roles in Dubai & the GCC.",
  author: "Sufian Mustafa",
  keywords: "Growth Systems Architect, Sufian Mustafa, LIONXE framework, Technical SEO Specialist, Next.js Web Systems, Dubai AI SEO Expert",
  openGraph: {
    title: "Frequently Asked Questions | Sufian Mustafa - Growth Systems Architect",
    description: "Clear and transparent answers to questions regarding engineering capabilities, technical search metrics, and team integration workflows.",
    images: [{
      url: generateOGImageURL({
        title: 'Sufian Mustafa Portfolio — Comprehensive Evaluation & Technical FAQ Core',
        category: 'FAQ',
        ctaText: 'View Answers',
        features: 'Systems Architecture,LIONXE Framework,Full-Stack Web,Technical SEO',
      }),
      width: 1200,
      height: 630,
      alt: 'Sufian Mustafa FAQ Page Index Blueprint',
    }],
    url: `${getBaseUrl()}/faq`,
    type: 'website',
    siteName: 'Sufian Mustafa Portfolio',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Frequently Asked Questions | Sufian Mustafa - Growth Systems Architect",
    description: "Clear, systems-level breakdown answering queries on development stack execution and strategic frameworks.",
    image: generateOGImageURL({
      title: 'Sufian Mustafa Portfolio — Comprehensive Evaluation & Technical FAQ Core',
      category: 'FAQ',
      ctaText: 'View Answers',
      features: 'Systems Architecture,LIONXE Framework,Full-Stack Web,Technical SEO',
    }),
  },
  robots: "index, follow",
  alternates: {
    canonical: `${getBaseUrl()}/faq`,
  },
};

function faqSchemaMarkup() {
  const mainEntity = faqsData.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }));

  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity
    }, null, 2)
  };
}

function breadcrumbSchema() {
  return {
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${getBaseUrl()}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "FAQ",
          "item": `${getBaseUrl()}/faq`
        }
      ]
    }, null, 2)
  };
}

export default function FAQPage() {
  return (
    <>
      <Head>
        <NextSeo
          title={metadata.title}
          description={metadata.description}
          canonical={metadata.alternates.canonical}
          openGraph={{
            title: metadata.openGraph.title,
            description: metadata.openGraph.description,
            url: metadata.openGraph.url,
            type: metadata.openGraph.type,
            siteName: metadata.openGraph.siteName,
            locale: metadata.openGraph.locale,
            images: metadata.openGraph.images,
          }}
          twitter={{
            card: metadata.twitter.card,
            title: metadata.twitter.title,
            description: metadata.twitter.description,
            image: metadata.twitter.image,
          }}
          additionalMetaTags={[
            { name: 'keywords', content: metadata.keywords },
            { name: 'author', content: metadata.author },
            { name: 'robots', content: metadata.robots },
          ]}
        />
      </Head>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={faqSchemaMarkup()}
        strategy="afterInteractive"
      />

      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={breadcrumbSchema()}
        strategy="afterInteractive"
      />

      {/* Renders the interactive layout */}
      <FAQComponent />
    </>
  );
}