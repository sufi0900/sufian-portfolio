
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useState } from "react";
import {
  Globe2, Layers, Search, FileText, ArrowUpRight, Zap,
  CheckCircle2, Code2, Database, Shield, TrendingUp,
  BarChart2, BookOpen, ChevronRight,
} from "lucide-react";
import "./work.css";

/* ═══════════════════════════════════════════════════════════════════════
   CASE STUDY DATA
   ═══════════════════════════════════════════════════════════════════════ */

const CASES = [
  {
    id: "doitwithai",
    num: "01",
    badge: "Live Platform",
    title: "DoItWithAI.tools",
    subtitle: "AI SEO platform — solo-built, live, compounding.",
    color: "#5271FF",
    url: "https://doitwithai.tools",
    what: "A full AI SEO and AI tools platform — not a blog, but a structured digital asset with content architecture, schema systems, and a quality standard built into every article.",
    why: "To prove that every skill ships in production. Writing about SEO is one thing. Building a live platform that practices it — with 8,000+ word articles, 7+ schema types, and pillar-cluster topology — is evidence that can't be faked.",
    how: [
      "Architected on Next.js 14 App Router with server-side rendering and incremental static regeneration for SEO performance.",
      "Sanity CMS as the structured content backend — GROQ queries, portable text, real-time preview, and a content model designed to scale without architectural entropy.",
      "Tailwind CSS design system with consistent tokens across every page.",
      "7+ JSON-LD schema types deployed: Article, FAQ, Organization, Person, BreadcrumbList, HowTo, and custom schemas for AI search citation eligibility.",
      "AI-augmented content workflow: research → outline → AI-assisted draft → human editing → LIONXE™ quality check → publish.",
      "Pillar-cluster content architecture for topical authority across AI tools, AI SEO, and digital growth topics.",
    ],
    evidence: [
      { label: "Status", value: "Live and operational" },
      { label: "Avg article depth", value: "8,000+ words" },
      { label: "Schema types", value: "7+" },
      { label: "Architecture", value: "Pillar-cluster topology" },
      { label: "Content model", value: "Sanity CMS structured content" },
      { label: "Rendering", value: "SSR + ISR edge deployment" },
    ],
    stack: ["Next.js 14", "React", "Sanity CMS", "Tailwind CSS", "Vercel", "JSON-LD", "GROQ"],
    proves: "Full-stack founder-level execution — from architecture decisions through CMS, content systems, SEO, and deployment. Not a tutorial project; a live, compounding digital asset.",
  },
  {
    id: "lionxe",
    num: "02",
    badge: "Proprietary Framework",
    title: "LIONXE™ Framework",
    subtitle: "A quality standard — created, documented, enterprise-applied.",
    color: "#4D7BFF",
    url: "https://lionxeframework.com",
    what: "A proprietary four-gate digital quality and auditing standard with sequential evaluation logic, governing laws, and a scoring engine. Not a checklist — a system where failure at any gate voids the entire assessment.",
    why: "Existing audit tools check surface metrics — rankings, backlinks, speed scores. LIONXE™ was created because no standard evaluated whether a digital asset is structurally built to survive. It emerged from the pattern recognition that crystallized during the 87-site enterprise audit.",
    how: [
      "Four sequential gates: Logic & Longevity → Internal Optimization → Non-Negotiable Integrity → Exceptional Execution.",
      "Each gate governed by a law: Post-Flood Collapse Rule, Weakest Link Axiom, Cost-Indifferent Mandate, Commodity Threshold Law.",
      "Binary pass/fail at each gate — no partial credit, no compensating a weak foundation with strong execution.",
      "A quantitative scoring engine for structured, repeatable evaluation.",
      "Three operating modes: Audit Mode (evaluate existing assets), Architect Mode (design new ones), Lens Mode (evaluate any decision).",
      "Documented and published at lionxeframework.com.",
    ],
    evidence: [
      { label: "Gates", value: "4 sequential" },
      { label: "Governing laws", value: "4 defined" },
      { label: "Applied on", value: "87-site enterprise audit" },
      { label: "Modes", value: "Audit · Architect · Lens" },
      { label: "Status", value: "Trademark pending" },
      { label: "Documentation", value: "lionxeframework.com" },
    ],
    stack: ["Original methodology", "Audit scoring engine", "Sequential gate logic", "Next.js (site)"],
    proves: "Original systems thinking. Very few professionals create their own evaluation methodology. This is the difference between a practitioner who follows frameworks and an architect who builds them.",
  },
  {
    id: "research",
    num: "03",
    badge: "Enterprise Audit",
    title: "Enterprise Research Report",
    subtitle: "87 sites. 226,200+ URLs. 15 chapters. One diagnosis.",
    color: "#E3B341",
    url: null,
    what: "A 15-chapter strategic audit of a US-based carpet cleaning and restoration company's digital ecosystem — analyzing an 87-website network that had been duplicated across locations, generating 226,200+ indexed URLs through automated content swapping.",
    why: "The company was running 87 near-identical sites targeting overlapping keywords in the same market. The sites were competing against each other, cannibalizing traffic, and producing negative-sum results. The audit was commissioned to diagnose the root causes and propose a consolidation architecture.",
    how: [
      "Chapter 1–3: Company overview, digital footprint mapping, and the 87-site network discovery.",
      "Chapter 4–6: Content quality analysis, automated production pipeline diagnosis, and duplication pattern mapping.",
      "Chapter 7–8: Social media fragmentation audit (261 accounts across platforms) and team capacity analysis.",
      "Chapter 9–10: Competitive landscape mapping and search trajectory analysis.",
      "Chapter 11–12: Business model comparison (franchise vs. hub-and-spoke vs. single-brand) with five-phase transition plan.",
      "Chapter 13: LIONXE™ framework applied as the unifying diagnostic lens across all findings.",
      "Chapter 14–15: Consolidated recommendations, implementation roadmap, and 12-month execution timeline.",
    ],
    evidence: [
      { label: "Sites analyzed", value: "87" },
      { label: "URLs indexed", value: "226,200+" },
      { label: "Chapters", value: "15" },
      { label: "Social accounts", value: "261 audited" },
      { label: "Root causes identified", value: "14" },
      { label: "Transition phases", value: "5-phase plan" },
    ],
    stack: ["LIONXE™ Framework", "SEO auditing tools", "Competitive intelligence", "Strategic documentation", "AI-augmented research"],
    proves: "Enterprise-grade analytical capability — the kind of deliverable Big Four consultancies produce. Root-cause diagnosis, business model analysis, operational recommendations, and a phased implementation plan, executed by one person with AI-augmented research methodology.",
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export default function WorkClient() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="work-root">
      {/* ── Hero ── */}
      <header className="work-hero">
        <div className="work-eyebrow">
          <Zap size={13} /> Proof of Execution
        </div>
        <h1 className="work-h1">The work speaks.</h1>
        <p className="work-lede">
          Three systems. Each one built to solve a real problem, not to demonstrate a technology. 
          Together they prove that Growth Systems Architecture is not a title — it is a practice.
        </p>
      </header>

      {/* ── Case Studies ── */}
      <div className="work-cases">
        {CASES.map((c) => {
          const isOpen = expanded === c.id;
          return (
            <article
              key={c.id}
              className={`work-case ${isOpen ? "work-case--open" : ""}`}
              style={{ "--case-color": c.color }}
            >
              {/* Summary card — always visible */}
              <button
                className="work-case-header"
                onClick={() => setExpanded(isOpen ? null : c.id)}
                aria-expanded={isOpen}
              >
                <div className="work-case-num">{c.num}</div>
                <div className="work-case-meta">
                  <span className="work-case-badge">{c.badge}</span>
                  <h2 className="work-case-title">{c.title}</h2>
                  <p className="work-case-subtitle">{c.subtitle}</p>
                </div>
                <ChevronRight
                  size={20}
                  className={`work-case-arrow ${isOpen ? "work-case-arrow--open" : ""}`}
                />
              </button>

              {/* Expanded detail */}
              {isOpen && (
                <div className="work-case-body">
                  {/* What */}
                  <section className="work-section">
                    <h3 className="work-section-label">What it is</h3>
                    <p className="work-section-text">{c.what}</p>
                  </section>

                  {/* Why */}
                  <section className="work-section">
                    <h3 className="work-section-label">Why it was built</h3>
                    <p className="work-section-text">{c.why}</p>
                  </section>

                  {/* How */}
                  <section className="work-section">
                    <h3 className="work-section-label">How it works</h3>
                    <ul className="work-how-list">
                      {c.how.map((step, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} className="work-how-icon" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </section>

                  {/* Evidence */}
                  <section className="work-section">
                    <h3 className="work-section-label">Evidence</h3>
                    <div className="work-evidence-grid">
                      {c.evidence.map((e) => (
                        <div key={e.label} className="work-evidence-card">
                          <span className="work-evidence-label">{e.label}</span>
                          <strong className="work-evidence-value">{e.value}</strong>
                        </div>
                      ))}
                    </div>
                  </section>

                  {/* Stack */}
                  <section className="work-section">
                    <h3 className="work-section-label">Stack & tools</h3>
                    <div className="work-stack">
                      {c.stack.map((t) => (
                        <span key={t} className="work-stack-chip">{t}</span>
                      ))}
                    </div>
                  </section>

                  {/* What it proves */}
                  <section className="work-section work-proves">
                    <h3 className="work-section-label">What it proves</h3>
                    <p className="work-proves-text">{c.proves}</p>
                  </section>

                  {/* Link */}
                  {c.url && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-case-link"
                    >
                      Visit {c.title} <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>

      {/* ── Ecosystem summary ── */}
      <section className="work-ecosystem">
        <h2 className="work-ecosystem-title">Three platforms. One system.</h2>
        <p className="work-ecosystem-body">
          Each platform was built independently, but they reinforce each other: 
          DoItWithAI.tools proves the engineering and SEO capability. 
          The LIONXE™ framework provides the quality standard everything is measured against. 
          The enterprise audit proves the diagnostic methodology works at scale. 
          Together, they form the evidence that Growth Systems Architecture is not a theory — it ships.
        </p>
        <div className="work-ecosystem-links">
          <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer" className="work-eco-link" style={{ "--eco-color": "#5271FF" }}>
            <Globe2 size={16} /> DoItWithAI.tools <ArrowUpRight size={13} />
          </a>
          <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer" className="work-eco-link" style={{ "--eco-color": "#4D7BFF" }}>
            <Shield size={16} /> LIONXE™ <ArrowUpRight size={13} />
          </a>
          <a href="/contact" className="work-eco-link" style={{ "--eco-color": "#E3B341" }}>
            <FileText size={16} /> Request audit sample <ArrowUpRight size={13} />
          </a>
        </div>
      </section>
    </div>
  );
}