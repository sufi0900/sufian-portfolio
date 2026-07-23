"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CheckCircle2, XCircle, AlertTriangle, Lightbulb,
  ArrowRight, ArrowLeft, Gauge, ListChecks, Sparkles,
} from "lucide-react";
import type { PillarData } from "./pillarData";

// ─────────────────────────────────────────────────────────────────────────────
// UNIFIED PILLAR PAGE — one component, four content sets.
// Each server page imports its pillar slice from pillarData.ts and passes it.
// ─────────────────────────────────────────────────────────────────────────────

const BRAND = "#004DFD";
const BRAND_LT = "#5B8CFF";

export default function PillarPageClient({ pillar }: { pillar: PillarData }) {
  const Icon = pillar.icon;
  const caseRef = useRef<HTMLElement>(null);
  const isCaseInView = useInView(caseRef, { once: true, margin: "-100px" });

  return (
    <main className="relative bg-white dark:bg-[#050B1F]">

      {/* ═══ SECTION 1: HERO ═══ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white px-4 py-24 dark:from-[#0A0F1E] dark:to-[#050B1F] sm:px-6 lg:px-8 lg:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto max-w-5xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-black uppercase tracking-widest"
            style={{ borderColor: `${BRAND}40`, background: `${BRAND}0F`, color: BRAND_LT }}>
            <Icon className="h-5 w-5" />
            LIONXE™ — Gate {pillar.gateNumber} of 4
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl">
            <span className="block" style={{ color: BRAND }}>{pillar.letter}</span>
            {pillar.tagline}
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 text-xl font-semibold text-slate-600 dark:text-slate-300 sm:text-2xl">
            {pillar.subtitle}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto max-w-4xl space-y-5">
            {pillar.definition.map((para, i) => (
              <p key={i} className="text-lg leading-8 text-slate-700 dark:text-slate-300">{para}</p>
            ))}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                <Gauge className="h-4 w-4" style={{ color: BRAND }} />
                Scored 0–100 points (4 criteria × 25)
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
                <AlertTriangle className="h-4 w-4 text-orange-500" />
                Pillar below 15 = blocking issue
              </div>
              <div className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50/80 px-5 py-3 text-sm font-semibold text-red-700 dark:border-red-500/20 dark:bg-red-500/[0.06] dark:text-red-400">
                <XCircle className="h-4 w-4" />
                Any criterion at 0 = blocking issue
              </div>
            </div>

            <div className="mt-10 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-400">
              <Lightbulb className="h-5 w-5" style={{ color: BRAND }} />
              <span>Created by <strong className="font-bold text-slate-900 dark:text-white">Sufian Mustafa</strong> — Digital Growth & AI Search Systems Architect</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 2: WHY IT MATTERS ═══ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#070D1B] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Why This Gate Exists
            </h2>
          </div>
          <div className="space-y-5 text-base leading-7 text-slate-600 dark:text-slate-400">
            {pillar.whyItMatters.map((para, i) => <p key={i}>{para}</p>)}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: GOVERNING LAW ═══ */}
      <section className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em]" style={{ color: BRAND }}>
              Governing Law
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              {pillar.governingLaw}
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-slate-600 dark:text-slate-400">
              {pillar.governingLawExplanation}
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-white/10 dark:bg-white/[0.04]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: `${BRAND}15` }}>
                <Icon className="h-6 w-6" style={{ color: BRAND }} />
              </div>
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Assessment Altitude</p>
                <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">{pillar.altitude}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 4: THE FOUR CRITERIA ═══ */}
      <section className="relative px-4 py-20 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em]" style={{ color: BRAND }}>
              The Rubric
            </p>
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">
              Four Scoring Domains
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
              Each domain is scored 0–25. Together they produce the pillar total of 0–100.
              Every factor below has exactly one home — no overlap, no double-counting.
            </p>
          </div>

          <div className="space-y-8">
            {pillar.criteria.map((crit, i) => (
              <motion.div key={crit.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04]">
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-white shadow-lg" style={{ background: BRAND }}>
                    {crit.id}
                  </div>
                  <div>
                    <h3 className="mb-1 text-2xl font-bold text-slate-900 dark:text-white">{crit.name}</h3>
                    <p className="text-sm font-medium leading-6 text-slate-600 dark:text-slate-400">{crit.statement}</p>
                  </div>
                </div>

                <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {crit.factors.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: BRAND }} />
                      <span className="text-sm leading-6 text-slate-700 dark:text-slate-300">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-slate-100 bg-slate-50/50 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-500">
                    <strong className="font-semibold text-slate-600 dark:text-slate-400">Not in this domain: </strong>
                    {crit.boundary}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: CASE APPRAISALS ═══ */}
      <section ref={caseRef} className="relative px-4 py-20 bg-slate-50 dark:bg-[#0A0F1E] sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-slate-900 dark:text-white sm:text-5xl">Case Appraisals</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">What passing and failing this gate looks like in practice</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={isCaseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-red-200 bg-red-50/50 p-8 dark:border-red-500/20 dark:bg-red-500/[0.04]">
              <div className="mb-4 flex items-center gap-3">
                <XCircle className="h-8 w-8 text-red-500" />
                <h3 className="text-2xl font-bold text-red-700 dark:text-red-400">{pillar.failingExample.title}</h3>
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-red-600 dark:text-red-500">Automatic Failure</p>
              <p className="leading-7 text-slate-700 dark:text-slate-400">{pillar.failingExample.description}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={isCaseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-8 dark:border-emerald-500/20 dark:bg-emerald-500/[0.04]">
              <div className="mb-4 flex items-center gap-3">
                <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                <h3 className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{pillar.passingExample.title}</h3>
              </div>
              <p className="mb-3 text-sm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-500">LIONXE™ Pass</p>
              <p className="leading-7 text-slate-700 dark:text-slate-400">{pillar.passingExample.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 6: SELF-AUDIT ═══ */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-32" style={{ background: `linear-gradient(135deg, ${BRAND}, #0066FF)` }}>
        <div className="mx-auto max-w-4xl text-center text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <Sparkles className="mx-auto mb-6 h-12 w-12" />
            <h2 className="mb-6 text-4xl font-extrabold sm:text-5xl">The Self-Auditing Protocol</h2>
            <p className="mb-12 text-lg text-blue-100">Test this gate yourself — before submitting for formal evaluation</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12 space-y-6 text-left">
            {pillar.selfAuditQuestions.map((q, i) => (
              <div key={i} className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-lg font-bold">{i + 1}</div>
                  <p className="leading-7">{q}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl border border-white/30 bg-white/10 p-8 backdrop-blur-md">
            <div className="rounded-xl border border-white/20 bg-white/[0.08] p-5">
              <p className="text-sm leading-6 text-blue-100">
                <strong className="font-bold text-white">Universal Application: </strong>
                {pillar.universalNote}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SECTION 7: NAVIGATION ═══ */}
      <section className="relative px-4 py-16 bg-white dark:bg-[#050B1F] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-4 sm:flex-row">
            {pillar.prevPillar && (
              <a href={pillar.prevPillar.href}
                className="flex flex-1 items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.03]">
                <ArrowLeft className="h-5 w-5" style={{ color: BRAND }} />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Previous Pillar</p>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white">{pillar.prevPillar.code} — {pillar.prevPillar.name}</p>
                </div>
              </a>
            )}
            {pillar.nextPillar && (
              <a href={pillar.nextPillar.href}
                className="flex flex-1 items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.03]">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-500">Next Pillar</p>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white">{pillar.nextPillar.code} — {pillar.nextPillar.name}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{pillar.nextPillar.teaser}</p>
                </div>
                <ArrowRight className="h-5 w-5 shrink-0" style={{ color: BRAND }} />
              </a>
            )}
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/rubric" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5"
              style={{ background: BRAND, color: "#FFFFFF" }}>
              <ListChecks className="h-4 w-4" /> View Full Rubric
            </a>
            <a href="/audits" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300">
              See Published Audits <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}