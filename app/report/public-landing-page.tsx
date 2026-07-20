// app/portfolio/report/page.tsx
//
// PUBLIC PORTFOLIO LANDING PAGE — introduces the case study and links
// to all 16 chapters. This is what visitors see first.

import "@/styles/report.css";
import Link from "next/link";

const CHAPTERS = [
  { num: 1, title: "Enterprise Profile and the Vision for Nationwide Digital Growth" },
  { num: 2, title: "Research Methodology and Data Integrity" },
  { num: 3, title: "The Infrastructure of the Documented Network" },
  { num: 4, title: "Content Quality and the Shift to Intent-Based Search" },
  { num: 5, title: "AI-Assisted Content and the Detection Misconception" },
  { num: 6, title: "Content Structure and Template Uniformity" },
  { num: 7, title: "AI Symbols, Prohibited Phrases, and the Fear-Driven Workflow" },
  { num: 8, title: "Site Architecture and Keyword Strategy" },
  { num: 9, title: "Video and Social Media Strategy" },
  { num: 10, title: "Resource Allocation and Departmental Capacity" },
  { num: 11, title: "The Strategic Landscape and the Turning Point" },
  { num: 12, title: "The LIONXE Standard: The Lens Behind This Audit" },
  { num: 13, title: "The Unified Digital Architecture: The Single Authority Brand" },
  { num: 14, title: "Two Paths Forward" },
  { num: 15, title: "Implementation Roadmap" },
  { num: 16, title: "Closing Synthesis" },
];

const PARTS = [
  { label: "Part I — Foundation and Context", range: [1, 2] },
  { label: "Part II — Diagnostic: Factor-by-Factor Analysis", range: [3, 10] },
  { label: "Part III — Strategic Synthesis and Transformation", range: [11, 16] },
];

export default function PortfolioReportLanding() {
  return (
    <main className="report-shell">
      {/* Header */}
      <div className="mb-12 mt-4">
        <div
          className="mb-3 h-[3px] w-16"
          style={{ background: "var(--lionxe-blue)" }}
        />
        <p
          className="mb-2 text-xs font-bold uppercase tracking-[0.14em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Portfolio Case Study
        </p>
        <h1
          className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl"
          style={{ color: "var(--navy)" }}
        >
          Enterprise Digital Infrastructure Audit
        </h1>
        <p
          className="mt-4 max-w-xl text-[15px] leading-7"
          style={{ color: "var(--text-grey)" }}
        >
          A 16-chapter independent assessment of a US-based multi-location
          cleaning and restoration company&apos;s digital ecosystem: 87
          websites, approximately 2,000 domains, 261 social media accounts,
          and the team operating them. Conducted over three months using
          professional-grade SEO research tools. The company&apos;s identity
          is anonymized; the analysis, methodology, and findings are presented
          in full.
        </p>
      </div>

      {/* Author attribution */}
      <div
        className="mb-12 flex items-center gap-4 rounded-xl px-6 py-4"
        style={{
          background: "var(--pale-blue)",
          border: "1px solid var(--border-grey)",
        }}
      >
        <div>
          <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>
            Sufian Mustafa
          </p>
          <p className="text-xs" style={{ color: "var(--text-grey)" }}>
            Digital Growth &amp; AI Search Systems Architect
          </p>
          <p className="text-xs" style={{ color: "var(--lionxe-blue)" }}>
            Creator of the LIONXE Framework &bull; doitwithai.tools
          </p>
        </div>
      </div>

      {/* Key metrics strip */}
      <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { label: "Websites Audited", value: "87" },
          { label: "Total URLs", value: "226,200" },
          { label: "Social Accounts", value: "261" },
          { label: "Chapters", value: "16" },
        ].map((m, i) => (
          <div
            key={i}
            className="rounded-xl px-4 py-3 text-center"
            style={{ background: "var(--navy)" }}
          >
            <p className="text-lg font-bold text-white">{m.value}</p>
            <p
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Chapter navigation */}
      <h2
        className="mb-6 text-xl font-bold"
        style={{ color: "var(--navy)" }}
      >
        Report Chapters
      </h2>

      {PARTS.map((part, pi) => (
        <div key={pi} className="mb-8">
          <p
            className="mb-3 text-xs font-bold uppercase tracking-[0.1em]"
            style={{ color: "var(--lionxe-blue)" }}
          >
            {part.label}
          </p>
          <div className="space-y-1">
            {CHAPTERS.filter(
              (ch) => ch.num >= part.range[0] && ch.num <= part.range[1]
            ).map((ch) => (
              <Link
                key={ch.num}
                href={`/portfolio/report/chapter-${ch.num}`}
                className="flex items-baseline gap-3 rounded-lg border-b px-2 py-3 no-underline transition-colors hover:bg-gray-50"
                style={{
                  borderColor: "#f0f2f5",
                  textDecoration: "none",
                }}
              >
                <span
                  className="flex-shrink-0 text-sm font-bold"
                  style={{ color: "var(--navy)", minWidth: "40px" }}
                >
                  Ch {ch.num}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-grey)" }}
                >
                  {ch.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      ))}

      {/* Full report link */}
      <div className="mt-12 text-center">
        <Link
          href="/portfolio/report/full-report"
          className="inline-block rounded-xl px-8 py-3 text-sm font-bold text-white no-underline transition-opacity hover:opacity-90"
          style={{
            background: "var(--navy)",
            textDecoration: "none",
          }}
        >
          View Complete Report (All 16 Chapters)
        </Link>
      </div>

      {/* LIONXE attribution */}
      <div className="mt-12 text-center">
        <p
          className="text-[10px] uppercase tracking-wider"
          style={{ color: "var(--text-light)" }}
        >
          Audited through the LIONXE Digital Quality Standard
        </p>
      </div>
    </main>
  );
}
