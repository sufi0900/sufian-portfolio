"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  GraduationCap, Code2, Boxes, PenTool, Sparkles, Moon, Rocket,
  Briefcase, Search, Layers, Plane, Lock, ArrowRight, MousePointer2,
} from "lucide-react";
import "./successjourney.css";

const ACCENT = "#E3B341";

const PHASE_COLOR = {
  Foundation: "#8A7340", Craft: "#C9952C", Creation: "#E3B341",
  Profession: "#D4943A", Vision: "#F2CC6B",
};

/* achieved milestones the climber ascends (BCS … LIONXE) */
const MILESTONES = [
  { phase: "Foundation", icon: GraduationCap, short: "BCS", when: "Academic foundation", title: "Systems Thinking Began", tagline: "Not just a degree — a way of seeing.", body: "Strong academic foundation in logic, mathematics, and structured problem-solving. The instinct to look beneath the surface and understand how things actually work — that became the lens for everything after.", impact: "Permanently changed: started seeing everything as a system, not an isolated output." },
  { phase: "Foundation", icon: Code2, short: "MCS", when: "The turning point", title: "Code Became Visible", tagline: "The first <html> tag in Notepad.", body: "In a Web Fundamentals class during my Master's, I wrote my first HTML in Notepad, opened the file in a browser, and watched code become something I could see and interact with. That was the moment web development captured me completely.", impact: "Permanently changed: discovered that software could become something people experience." },
  { phase: "Craft", icon: Boxes, short: "Web Dev", when: "The manual years", title: "Built Everything by Hand", tagline: "No AI, no shortcuts — Notepad and debugging.", body: "HTML, CSS, JavaScript, responsive design — all hand-coded. Then React and component thinking, MERN stack and full-stack data flow, followed by Next.js and Sanity CMS when architecture and SEO demanded it.", impact: "Permanently changed: stopped thinking in pages. Started thinking in reusable systems." },
  { phase: "Craft", icon: Sparkles, short: "AI", when: "The catalyst", title: "AI Changed the Speed", tagline: "The accelerator, earned after the foundation.", body: "AI entered only after the manual foundation existed — so it multiplied execution instead of replacing understanding. Prompt engineering, AI-assisted development, AI content workflows. Through AI, the path to SEO, schema, AI search, structured content, and digital growth opened up.", impact: "Permanently changed: AI became the catalyst that unlocked every discipline that followed." },
  { phase: "Craft", icon: PenTool, short: "SEO", when: "Systems, not keywords", title: "Search Engines Are Systems", tagline: "Realized SEO is architecture, not tricks.", body: "Content writing led to SEO — GA4, keyword research, schema, technical SEO, crawl architecture, E-E-A-T. But the breakthrough was realizing search engines are systems that reward structural quality, not keyword stuffing. That insight aligned perfectly with how I already thought.", impact: "Permanently changed: search became a system I could engineer, not a game to play." },
  { phase: "Creation", icon: Moon, short: "Isolation", when: "~18 months", title: "The Deep Grind", tagline: "Heads-down, building through everything.", body: "Roughly 18 months of intense, focused building — through heat, power cuts, noise, and a tight budget. Cut all distractions. Built skills, platforms, confidence, and the professional identity that exists today. Not a gap — the most defining stretch of the journey.", impact: "Permanently changed: transformed from a learner into a builder with a live ecosystem." },
  { phase: "Creation", icon: Rocket, short: "DoItWithAI", when: "doitwithai.tools", title: "Do It With AI Tools", tagline: "A solo-built AI SEO platform — live.", body: "The isolation grind produced a real platform: Next.js 14, Sanity CMS, 8K+ word articles, 7+ schema types, pillar-cluster architecture, AI-augmented content workflows, and a strict quality standard. Proof that every skill ships in production.", impact: "Permanently changed: became a platform founder, not just a developer." },
  { phase: "Profession", icon: Briefcase, short: "Think Higher", when: "First professional role", title: "Think Higher Consultants", tagline: "Where personal work became commercial value.", body: "Australian immigration and education niche. First taste of corporate pressure — real deadlines, reporting, client expectations, feedback loops, and the confidence that comes from converting self-taught skills into market value.", impact: "Permanently changed: validated that the self-built portfolio could survive professional scrutiny." },
  { phase: "Profession", icon: Search, short: "WAYWE", when: "Enterprise-level work", title: "WAYWE Gaming — Enterprise SEO", tagline: "Where research became architecture.", body: "Carpet-cleaning-sector SEO for UK and US markets: service pages, local SEO, multi-location strategy, compliance-aware content, competitive analysis, and the 87-website network research that became the 15-chapter enterprise audit. (The 'Gaming' is the company name, not the work.)", impact: "Permanently changed: proved the ability to diagnose and document enterprise-scale digital systems." },
  { phase: "Vision", icon: Layers, short: "LIONXE™", when: "The creation", title: "The LIONXE™ Framework", tagline: "Everything before this led here.", body: "Diagnosing real-world failures across 87 sites pushed something to crystallize: LIONXE™ — a four-gate quality standard with governing laws, sequential evaluation, and a scoring engine. Not just a digital framework — a decision framework. How I evaluate systems, approach work, and think.", impact: "Permanently changed: created original methodology. The difference between a practitioner and an architect." },
];

const GOAL = { phase: "Vision", icon: Plane, short: "The Gulf", title: "The Gulf Vision", tagline: "The next chapter is deliberate.", body: "Everything before this point was preparation. The next chapter is about applying years of disciplined learning, a proprietary framework, and a live ecosystem within larger organisations, stronger engineering cultures, and international standards across the UAE, Saudi Arabia, and the wider GCC. Not starting over — scaling up." };
const FUTURE_COUNT = 3;

const IDX_TOP = MILESTONES.length - 1;
const RUN = 172;
const RISE = 116;
const HOP = RISE * 0.62;
const CHAR_H = 100;
const HEADROOM_BUFFER = 56;
const BASE_DROP = RISE * 1.5;
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const smooth = (t) => t * t * (3 - 2 * t);

export default function SuccessJourney() {
  const [active, setActive] = useState(0);
  const [celebrate, setCelebrate] = useState(false);
  const scrollyRef = useRef(null);
  const stageRef = useRef(null);
  const worldRef = useRef(null);
  const charRef = useRef(null);
  const shadowRef = useRef(null);
  const lastActive = useRef(0);
  const lastCelebrate = useRef(false);
  const rmRef = useRef(false);

  useEffect(() => {
    rmRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const update = useCallback(() => {
    const scrolly = scrollyRef.current, stage = stageRef.current, world = worldRef.current, char = charRef.current, shadow = shadowRef.current;
    if (!scrolly || !stage || !world || !char || !shadow) return;
 const sRect = stage.getBoundingClientRect();
    const stageW = sRect.width, stageH = sRect.height;
    
    // Breakpoints for strict device tiers
    const mobile = stageW < 760;
    const tablet = stageW >= 760 && stageW <= 1024;
    
    // Dynamic system scaling optimized per device tier
    const scale = clamp(stageW / 1240, mobile ? 0.5 : tablet ? 0.65 : 0.78, 1.1);

    // Structural headroom calculation
    const neededHeadroom = (CHAR_H + HOP) * scale + HEADROOM_BUFFER;
    
    // Shift camera X/Y coordinates based on device split zones
    const anchorX = stageW * (mobile ? 0.5 : tablet ? 0.45 : 0.4);
    
    // Pushes the staircase into the upper half on mobile to clear room for the bottom text sheet
    const anchorY = mobile 
      ? Math.max(neededHeadroom, stageH * 0.38)
      : Math.max(neededHeadroom, stageH * (tablet ? 0.55 : 0.62));

    const cRect = scrolly.getBoundingClientRect();
    const total = cRect.height - window.innerHeight;
    const scrolled = clamp(-cRect.top, 0, total);
    const progress = total > 0 ? scrolled / total : 0;

    const f = progress * IDX_TOP;
    let i = Math.floor(f);
    let t = f - i;
    if (i >= IDX_TOP) { i = IDX_TOP; t = 0; }

    const e = smooth(t);
    const baseX = (i + e) * RUN + RUN / 2;
    const baseY = -(i + e) * RISE;

    const air = rmRef.current ? 0 : Math.sin(Math.PI * t);
    const hopPx = HOP * air;
    const charY = baseY - hopPx;

    const camX = anchorX - baseX * scale;
    const camY = anchorY - baseY * scale;
    world.style.transform = `translate(${camX}px, ${camY}px) scale(${scale})`;

    char.style.left = `${baseX}px`;
    char.style.top = `${charY}px`;
    char.style.setProperty("--air", air.toFixed(3));

    shadow.style.left = `${baseX}px`;
    shadow.style.top = `${baseY}px`;
    shadow.style.setProperty("--air", air.toFixed(3));

    const a = clamp(Math.round(f), 0, IDX_TOP);
    if (a !== lastActive.current) { lastActive.current = a; setActive(a); }

    const atSummit = progress >= 0.995;
    if (atSummit !== lastCelebrate.current) { lastCelebrate.current = atSummit; setCelebrate(atSummit); }
  }, []);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [update]);

  // Handle precise click-to-jump calculation
  const handleStepClick = (stepIndex) => {
    const scrolly = scrollyRef.current;
    if (!scrolly) return;

    // 1. Find the absolute document offset of the scroll container
    const rect = scrolly.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const absoluteTop = rect.top + scrollTop;

    // 2. Determine the total scroll range
    const total = rect.height - window.innerHeight;

    // 3. Constrain index and map progress ratio
    const stepIdx = Math.min(stepIndex, IDX_TOP);
    const targetProgress = stepIdx / IDX_TOP;
    const targetScrollInside = targetProgress * total;

    // 4. Smoothly scroll the whole window
    window.scrollTo({
      top: absoluteTop + targetScrollInside,
      behavior: "smooth"
    });
  };

  const steps = [];
  MILESTONES.forEach((m, i) => steps.push({ kind: "achieved", i, m }));
  steps.push({ kind: "goal", i: MILESTONES.length, m: GOAL });
  for (let k = 0; k < FUTURE_COUNT; k++) steps.push({ kind: "future", i: MILESTONES.length + 1 + k });

  const cur = MILESTONES[active];
  const CurIcon = cur.icon;

  return (
    <section className="sj-root" style={{ "--accent": ACCENT }} aria-label="Success journey — the climb">
      {/* ambient */}
      <div className="sj-ambient" aria-hidden><span className="sj-glow sj-glow--1" /><span className="sj-glow sj-glow--2" /><span className="sj-stars" /></div>

      {/* scrollytelling */}
<div className="sj-scrolly" ref={scrollyRef} style={{ height: `${IDX_TOP * 56 + 110}vh` }}>        <div className="sj-stage" ref={stageRef}>
          
          {/* Header floats inside the staircase viewport, above BCS */}
         {/* Page heading + navigation hint — floats in the empty space above BCS */}
<div className="sj-page-header">
          <span className="sj-header-eyebrow">
            <Rocket size={13} aria-hidden /> The Climb
          </span>
          <h1 className="sj-header-title">Success Journey</h1>
          <p className="sj-header-desc">
            Every step is a milestone. Scroll to climb the professional architecture — or click any step to jump directly to that milestone chapter.
          </p>
          <div className="sj-header-nav">
            <MousePointer2 size={13} aria-hidden /> <span>Scroll to explore the framework timeline</span>
          </div>
        </div>
          <div className="sj-world" ref={worldRef}>
            {steps.map((s) => {
              const left = s.i * RUN;
              const top = -s.i * RISE;
              const height = BASE_DROP + s.i * RISE;
              const pc = s.kind === "achieved" ? PHASE_COLOR[s.m.phase] : s.kind === "goal" ? PHASE_COLOR.Vision : "#475569";
              const reached = s.kind === "achieved" && s.i <= active;
              const isCurrent = s.kind === "achieved" && s.i === active;
              const cls = ["sj-step", `sj-step--${s.kind}`, reached ? "sj-step--reached" : "", isCurrent ? "sj-step--current" : ""].join(" ");
              return (
                <div 
                  key={s.i} 
                  className={cls} 
                  style={{ 
                    left: `${left}px`, 
                    top: `${top}px`, 
                    width: `${RUN}px`, 
                    height: `${height}px`, 
                    "--pc": s.kind === "future" ? "#475569" : pc,
                    cursor: s.kind !== "future" ? "pointer" : "default"
                  }}
                  onClick={() => s.kind !== "future" && handleStepClick(s.i)}
                  onKeyDown={(e) => {
                    if (s.kind !== "future" && (e.key === "Enter" || e.key === " ")) {
                      e.preventDefault();
                      handleStepClick(s.i);
                    }
                  }}
                  role={s.kind !== "future" ? "button" : undefined}
                  tabIndex={s.kind !== "future" ? 0 : undefined}
                >
                  <div className="sj-tread" />
                  {s.kind === "achieved" && (
                    <div className="sj-step-tag">
                      <span className="sj-step-num">{String(s.i + 1).padStart(2, "0")}</span>
                      <span className="sj-step-name">{s.m.short}</span>
                    </div>
                  )}
                  {s.kind === "goal" && (
                    <div className="sj-step-tag sj-step-tag--goal">
                      <span className="sj-goal-badge"><Lock size={12} aria-hidden /></span>
                      <span className="sj-step-name">{s.m.short}</span>
                      <span className="sj-goal-flag" aria-hidden><Plane size={14} /></span>
                    </div>
                  )}
                  {s.kind === "future" && <div className="sj-step-tag sj-step-tag--future"><span>Future</span></div>}
                </div>
              );
            })}

            {/* THE CLIMBER */}
           {/* THE CLIMBER */}
            <div className={`sj-char ${celebrate ? "sj-char--celebrate" : ""}`} ref={charRef} aria-hidden>
              <div className="sj-char-glow" />
              <svg width="56" height="100" viewBox="0 0 56 100" className="sj-char-svg">
                <g className="sj-char-feet">
                  <ellipse className="sj-cfoot" cx="20" cy="95" rx="9" ry="4.5" />
                  <ellipse className="sj-cfoot" cx="36" cy="95" rx="9" ry="4.5" />
                </g>
                <g className="sj-char-legs">
                  <path className="sj-cleg" d="M24 60 L20 92" />
                  <path className="sj-cleg" d="M32 60 L36 92" />
                </g>
                <g className="sj-upper">
                  <g className="sj-char-body">
                    <g className="sj-breathing-group">
                      <g className="sj-arm sj-arm--l">
                        <path className="sj-carm" d="M14 30 Q10 38 8 44" />
                        <path className="sj-carm sj-cforearm" d="M8 44 Q6 50 7 56" />
                      </g>
                      <g className="sj-arm sj-arm--r">
                        <path className="sj-carm" d="M42 30 Q46 38 48 44" />
                        <path className="sj-carm sj-cforearm" d="M48 44 Q50 50 49 56" />
                      </g>
                      <g className="sj-torso">
                        <path className="sj-ctorso" d="M14 29 Q28 24 42 29 L40 60 Q28 65 16 60 Z" />
                        <text className="sj-cmark" x="28" y="47" textAnchor="middle">SM</text>
                      </g>
                      <g className="sj-char-head">
                        <circle className="sj-cp" cx="28" cy="14" r="11.5" />
                        <g className="sj-eyes">
                          <circle className="sj-eye" cx="24" cy="14" r="1.4" />
                          <circle className="sj-eye" cx="32" cy="14" r="1.4" />
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            {/* Ground shadow */}
            <div className="sj-shadow" ref={shadowRef} aria-hidden />
          </div>

          {/* Milestone panel */}
          <aside className="sj-panel" style={{ "--pc": PHASE_COLOR[cur.phase] }} aria-live="polite">
            {celebrate && (
              <div className="sj-panel-celebrate"><Sparkles size={14} aria-hidden /> Summit reached — the Gulf is next</div>
            )}
            <div className="sj-panel-top">
              <span className="sj-panel-icon"><CurIcon size={20} aria-hidden /></span>
              <div className="sj-panel-meta"><span className="sj-panel-phase">{cur.phase}</span><span className="sj-panel-when">{cur.when}</span></div>
              <span className="sj-panel-step">{String(active + 1).padStart(2, "0")}<i>/ {MILESTONES.length}</i></span>
            </div>
            <h2 className="sj-panel-title">{cur.title}</h2>
            <p className="sj-panel-tagline">{cur.tagline}</p>
            <p className="sj-panel-body">{cur.body}</p>
            {cur.impact && <p className="sj-panel-impact">{cur.impact}</p>}
            <div className="sj-panel-track" aria-hidden><span className="sj-panel-track-fill" style={{ width: `${(active / IDX_TOP) * 100}%` }} /></div>
            {active === IDX_TOP && (
              <div className="sj-panel-next"><span className="sj-panel-next-dot" /> Next summit in sight: <strong>The Gulf</strong></div>
            )}
          </aside>
        </div>
      </div>

      {/* destination / outro */}
      <div className="sj-outro">
        <div className="sj-outro-card">
          <span className="sj-outro-badge"><Plane size={18} aria-hidden /></span>
          <h2 className="sj-outro-title">The summit ahead: <span className="sj-gold">the Gulf</span></h2>
          <p className="sj-outro-sub">The climb so far was the preparation. The next step is golden and deliberately in sight — Dubai, the UAE, and the wider GCC — with more stairs still to build beyond it.</p>
          <Link href="/gulf-vision" className="sj-outro-link">See the Gulf Vision dossier <ArrowRight size={16} aria-hidden /></Link>
        </div>
      </div>
    </section>
  );
}