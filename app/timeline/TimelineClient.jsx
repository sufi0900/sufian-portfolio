"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import {
  GraduationCap, Code2, Boxes, PenTool, Sparkles, Moon, Rocket,
  Briefcase, Search, Layers, Plane, ArrowRight, Train,
} from "lucide-react";
import "./timeline.css";

const PHASE_COLOR = {
  Foundation: "#8A7340",
  Craft:      "#C9952C",
  Creation:   "#E3B341",
  Profession: "#D4943A",
  Vision:     "#F2CC6B",
};

const STOPS = [
  { phase: "Foundation", icon: GraduationCap, when: "Academic foundation", title: "BCS — Computer Science", tagline: "Where the systems mind began.", body: "Strong performance in mathematics, logic, and structured problem-solving. The instinct to look beneath the surface became how I would later read websites — not as pages, but as systems.", tags: ["Logic", "Mathematics", "Systems Thinking"] },
  { phase: "Foundation", icon: Code2, when: "MCS — Web Fundamentals", title: "MCS — The First HTML Tag", tagline: "Code became visible.", body: "In a Web Fundamentals class during my Master's at AWKUM, I wrote my first HTML tags in Notepad, opened the file in a browser, and watched code turn into something real. That was the turning point.", tags: ["AWKUM", "HTML", "Notepad", "Web Fundamentals"] },
  { phase: "Craft", icon: Boxes, when: "The manual years", title: "Manual Web Development", tagline: "Built by hand, then by architecture.", body: "No AI, no shortcuts — HTML, CSS, JavaScript, Bootstrap, responsive design, everything from scratch. Then React component architecture, MERN full-stack, first portfolio built and deployed.", tags: ["HTML/CSS/JS", "React", "MERN", "Bootstrap"] },
  { phase: "Craft", icon: PenTool, when: "Words meet systems", title: "Content Writing & SEO", tagline: "Learning to be found.", body: "Taught myself content writing, then SEO — GA4, keyword research, schema, technical SEO — applied to my own portfolio first. Search became a system I could engineer, not just optimize.", tags: ["GA4", "Keyword Research", "Schema", "Technical SEO"] },
  { phase: "Craft", icon: Sparkles, when: "The accelerator", title: "AI Workflows & Prompt Architecture", tagline: "AI entered after the foundation was there.", body: "AI joined only after years of manual building — so it multiplied output instead of replacing understanding. Prompt engineering and AI-augmented development turned weeks into days.", tags: ["Prompt Engineering", "AI-Augmented Dev", "Workflows"] },
  { phase: "Creation", icon: Moon, when: "~18 months", title: "The Isolation Grind", tagline: "Heads-down, lights-off, building.", body: "Roughly 18 months away from all distractions — building through heat, power cuts, noise, and a tight budget. Not a gap year. The most focused, defining stretch of the entire journey.", tags: ["Discipline", "Focus", "Self-Teaching"] },
  { phase: "Creation", icon: Rocket, when: "doitwithai.tools", title: "Do It With AI Tools", tagline: "A solo, founder-led AI SEO platform.", body: "Out of that isolation came DoItWithAI.tools — Next.js 14, Sanity CMS, 8K+ word articles, 7+ schema types, pillar-cluster architecture, AI workflows, and strict quality standards at every step.", tags: ["Next.js 14", "Sanity CMS", "AI SEO", "8K+ Depth"] },
  { phase: "Profession", icon: Briefcase, when: "Jan–Mar 2026", title: "Think Higher Consultants", tagline: "The portfolio pays off.", body: "First professional market entry — Australian immigration/education niche. Corporate SEO pressure, reporting discipline, real deadlines, and the confidence that the self-built work holds up under scrutiny.", tags: ["Corporate SEO", "Reporting", "Market Entry"] },
  { phase: "Profession", icon: Search, when: "Apr–Jun 2026", title: "WAYWE Gaming", tagline: "Enterprise-level research at depth.", body: "Carpet cleaning sector SEO for UK/US markets: service pages, local SEO, compliance-aware content, and the 87-site network research that became the 15-chapter enterprise audit.", tags: ["Local SEO", "Compliance", "87-Site Audit", "Enterprise"] },
  { phase: "Vision", icon: Layers, when: "The creation", title: "The LIONXE™ Framework", tagline: "A proprietary quality standard.", body: "Diagnosing sprawling, real-world digital problems pushed me to formalize what I had learned: LIONXE™ — a four-gate sequential quality standard with governing laws, built to judge digital work that lasts.", tags: ["4 Gates", "Governing Laws", "Audit Engine", "Trademark"] },
];

const BEACON = { phase: "Vision", icon: Plane, when: "Next chapter", title: "The Gulf Vision", tagline: "The next summit — Dubai & the GCC.", body: "Enterprise-scale digital growth, AI adoption, and international standards across the UAE, Saudi Arabia, and the wider Gulf. Not yet reached — deliberately in sight.", tags: ["Dubai", "GCC", "Enterprise", "Vision"] };

export default function Timeline() {
  const trackRef = useRef(null);
  const fillRef = useRef(null);
  const cometRef = useRef(null);
  const [activePhase, setActivePhase] = useState(null);
  const itemRefs = useRef([]);

  const update = useCallback(() => {
    if (!trackRef.current || !fillRef.current || !cometRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    const trackH = rect.height;
    const scrolled = Math.max(0, -rect.top + window.innerHeight * 0.45);
    const pct = Math.min(1, Math.max(0, scrolled / trackH));

    fillRef.current.style.height = `${pct * 100}%`;
    cometRef.current.style.top = `${pct * trackH}px`;
    cometRef.current.style.opacity = pct > 0.01 && pct < 0.99 ? "1" : "0";

    trackRef.current.style.setProperty("--track-h", `${trackH}px`);

    // Reveal items + determine active phase
    let lastPhase = null;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vis = r.top < window.innerHeight * 0.72;
      el.classList.toggle("tl-in", vis);
      const isActive = r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.2;
      el.closest(".tl-item")?.classList.toggle("tl-item--active", isActive);
      if (isActive) lastPhase = STOPS[i]?.phase || BEACON.phase;
    });
    if (lastPhase !== activePhase) setActivePhase(lastPhase);
  }, [activePhase]);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, [update]);

  const scrollTo = (phase) => {
    const idx = STOPS.findIndex(s => s.phase === phase);
    if (idx >= 0 && itemRefs.current[idx]) {
      itemRefs.current[idx].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const phases = [...new Set(STOPS.map(s => s.phase))];

  return (
    <section className="tl-root" aria-label="Professional timeline">
      <div className="tl-ambient" aria-hidden><span className="tl-glow tl-glow--1" /><span className="tl-glow tl-glow--2" /></div>

      <header className="tl-header">
        <div className="tl-eyebrow"><Train size={13} aria-hidden /> The Journey</div>
        <h1 className="tl-title">From first HTML tag to<br /><span className="tl-title-accent">Growth Systems Architect</span></h1>
        <p className="tl-sub">Every station is a milestone. The track runs from an academic foundation through manual craft, an 18-month isolation grind, and live platform creation — all the way to the LIONXE™ framework.</p>
        <div className="tl-meta"><span>BCS → MCS → Manual Web → React → Next.js → AI → DoItWithAI → LIONXE™</span></div>
      </header>

      <nav className="tl-phasenav" aria-label="Journey phases">
        <div className="tl-phasenav-inner">
          {phases.map(p => (
            <button key={p} className={`tl-phase-btn ${activePhase === p ? "tl-phase-btn--active" : ""}`} style={{ "--pc": PHASE_COLOR[p] }} onClick={() => scrollTo(p)}>
              <span className="tl-phase-dot" />{p}
            </button>
          ))}
        </div>
      </nav>

      <div className="tl-track" ref={trackRef}>
        <div className="tl-rail">
          <div className="tl-rail-energy" />
          <div className="tl-rail-fill" ref={fillRef} />
          <div className="tl-comet" ref={cometRef} />
        </div>
        <div className="tl-cap tl-cap--start" />

        {STOPS.map((s, i) => {
          const Icon = s.icon;
          const side = i % 2 === 0 ? "left" : "right";
          return (
            <div key={i} className={`tl-item tl-item--${side}`} style={{ "--pc": PHASE_COLOR[s.phase] }}>
              {side === "left" && (
                <div className="tl-card tl-reveal" ref={el => itemRefs.current[i] = el}>
                  <div className="tl-windows" aria-hidden>{[0,1,2,3].map(w=><i key={w}/>)}</div>
                  <div className="tl-coupler" />
                  <div className="tl-card-top">
                    <div className="tl-card-icon"><Icon size={20} /></div>
                    <div className="tl-card-meta"><span className="tl-card-phase">{s.phase}</span><span className="tl-card-when">{s.when}</span></div>
                    <span className="tl-card-step">{String(i+1).padStart(2,"0")}</span>
                  </div>
                  <h2 className="tl-card-title">{s.title}</h2>
                  <p className="tl-card-tagline">{s.tagline}</p>
                  <p className="tl-card-body">{s.body}</p>
                  <div className="tl-card-tags">{s.tags.map(t=><span key={t} className="tl-tag">{t}</span>)}</div>
                  <div className="tl-wheels" aria-hidden><i/><i/></div>
                </div>
              )}
              <div className="tl-node"><span className="tl-node-core" /></div>
              {side === "right" && (
                <div className="tl-card tl-reveal" ref={el => itemRefs.current[i] = el}>
                  <div className="tl-windows" aria-hidden>{[0,1,2,3].map(w=><i key={w}/>)}</div>
                  <div className="tl-coupler" />
                  <div className="tl-card-top">
                    <div className="tl-card-icon"><Icon size={20} /></div>
                    <div className="tl-card-meta"><span className="tl-card-phase">{s.phase}</span><span className="tl-card-when">{s.when}</span></div>
                    <span className="tl-card-step">{String(i+1).padStart(2,"0")}</span>
                  </div>
                  <h2 className="tl-card-title">{s.title}</h2>
                  <p className="tl-card-tagline">{s.tagline}</p>
                  <p className="tl-card-body">{s.body}</p>
                  <div className="tl-card-tags">{s.tags.map(t=><span key={t} className="tl-tag">{t}</span>)}</div>
                  <div className="tl-wheels" aria-hidden><i/><i/></div>
                </div>
              )}
            </div>
          );
        })}

        {/* Gulf Vision beacon */}
        <div className="tl-item tl-item--left tl-item--beacon" style={{ "--pc": PHASE_COLOR.Vision }}>
          <div className="tl-card tl-reveal" ref={el => itemRefs.current[STOPS.length] = el}>
            <div className="tl-windows" aria-hidden>{[0,1,2,3].map(w=><i key={w}/>)}</div>
            <div className="tl-coupler" />
            <div className="tl-card-top">
              <div className="tl-card-icon"><Plane size={20} /></div>
              <div className="tl-card-meta"><span className="tl-card-phase">{BEACON.phase}</span><span className="tl-card-when">{BEACON.when}</span></div>
            </div>
            <h2 className="tl-card-title">{BEACON.title}</h2>
            <p className="tl-card-tagline">{BEACON.tagline}</p>
            <p className="tl-card-body">{BEACON.body}</p>
            <Link href="/gulf-vision" className="tl-beacon-link">See the Gulf Vision dossier <ArrowRight size={14} /></Link>
          </div>
          <div className="tl-node"><span className="tl-node-core" /></div>
        </div>

        <div className="tl-cap tl-cap--end" />
      </div>

      <div className="tl-end">
        <span className="tl-end-signal" />
        <p className="tl-end-text">Track continues — more stations ahead.</p>
      </div>
    </section>
  );
}