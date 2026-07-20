"use client";

import React from "react";
import {
  Globe2, Search, Cpu, Sparkles, Layers, TrendingUp,
  FileCheck2, BadgeCheck, Languages, ShieldCheck, MapPin,
  ArrowRight, Plane, Zap,
} from "lucide-react";
import { REGION_PATHS, CITY_PX } from "./regionMapData";
import "./gulfvision.css";

const WHY = [
  { icon: TrendingUp, title: "Enterprise-scale environment", body: "The Gulf's investment in digital transformation, AI adoption, and enterprise technology creates an environment where systems-level capability — not isolated task execution — has the most impact." },
  { icon: Globe2, title: "English-first professional culture", body: "An internationally competitive market where technical decisions, strategic proposals, and team communication happen primarily in English — the language I work in by preference." },
  { icon: Layers, title: "Alignment with how I work", body: "The region values governance, structured thinking, and long-term standards — principles that align naturally with the LIONXE™ framework and the way I approach digital systems." },
  { icon: Sparkles, title: "Professional growth", body: "A deliberate next chapter: stronger exposure, sharper execution under enterprise expectations, and the kind of technical environment that pushes me to operate at a higher level." },
];

const VALUE = [
  { icon: Layers, title: "Growth Systems Architecture", items: ["Combining engineering, AI, SEO, research, and strategy into one system", "Five-layer model: Engineering → Search → Content → Trust → Business", "Three connected platforms demonstrating the approach", "LIONXE™ as the quality and evaluation standard"] },
  { icon: Search, title: "Technical SEO & AI Search", items: ["Crawl architecture, schema (7+ types), Core Web Vitals", "GEO optimization — content for AI-generated answers", "Keyword architecture and topical authority planning", "On-page SEO, internal linking, site taxonomy"] },
  { icon: Cpu, title: "AI-Augmented Web Engineering", items: ["Next.js 14 · React · Node.js · Sanity CMS", "AI-assisted development on a manual coding foundation", "Performance: caching, edge delivery, structured content", "Platform building — not isolated page development"] },
  { icon: Sparkles, title: "Research & Strategic Analysis", items: ["Enterprise digital auditing (87 sites, 226K+ URLs)", "Root-cause diagnostics and competitive intelligence", "Strategic documentation with phased implementation", "Business analysis and operational recommendations"] },
];

const READINESS = [
  { icon: FileCheck2, label: "Education", status: "Verified", tone: "good", detail: "MSc Computer Science (AWKUM). Degree and transcripts verified by HEC and attested by MOFA." },
  { icon: BadgeCheck, label: "Passport", status: "Ready", tone: "good", detail: "Valid Pakistani passport, ready to travel on confirmation." },
  { icon: FileCheck2, label: "Work authorization", status: "Sponsorship-ready", tone: "good", detail: "Eligible for standard employer-sponsored employment visa — the routine process for international hires in the UAE and GCC." },
  { icon: Languages, label: "English", status: "Professional working proficiency", tone: "good", detail: "Comfortable with technical documentation, team communication, and professional collaboration in English." },
  { icon: ShieldCheck, label: "Background", status: "Clean", tone: "good", detail: "No criminal record. Ready to provide Police Character Certificate and professional references as part of any standard screening process." },
  { icon: MapPin, label: "Availability", status: "Short timeline", tone: "good", detail: "Based in Rawalpindi, Pakistan. Available to relocate once an offer is confirmed." },
];

const FAQS = [
  { q: "Why the Gulf region?", a: "The Gulf's technology ecosystem — AI adoption, digital transformation, enterprise web systems, English-first corporate environments — aligns well with the combined engineering and search architecture capability I've built. It's a natural fit for the next professional chapter." },
  { q: "What is the visa situation?", a: "Standard employer-sponsored employment visa — the routine process for international hires in the UAE and GCC. Documentation is prepared and ready." },
  { q: "Are your qualifications verified and attestable?", a: "Yes. MSc Computer Science from AWKUM. Degree and transcripts verified by HEC (Higher Education Commission), attested by MOFA (Ministry of Foreign Affairs), and authenticated by the UAE Embassy. All documentation is ready for employer verification." },
  { q: "How soon can you relocate?", a: "On a short timeline. Passport is ready, relocation funds are secured, and I am available to travel for onboarding and settle quickly once an offer is confirmed." },
  { q: "How strong is your English?", a: "Professional working proficiency. I operate entirely in English across technical documentation, team meetings, client communication, and cross-functional collaboration. English is my preferred working language." },
  { q: "Will you clear background and security checks?", a: "Yes, without reservation. Clean personal and professional record. Ready to provide a Police Character Certificate, professional references, and complete any background, security, or compliance screening required." },
  { q: "What type of work are you looking for?", a: "Roles where technical execution and strategic thinking intersect — digital growth, SEO architecture, content systems, platform engineering. Positions where the value is in connecting disciplines, not executing isolated tasks." },
  { q: "Are you open to Saudi Arabia and the wider GCC?", a: "Yes. Dubai and the UAE are a primary focus, but I am open across Saudi Arabia, Qatar, Bahrain, and the broader Gulf for the right opportunity." },
  { q: "What makes you different from other candidates?", a: "I combine full-stack engineering, technical SEO architecture, AI workflows, content systems, and strategic thinking in one person — plus I own and operate a live platform (DoItWithAI.tools) and created the LIONXE™ quality framework. Most candidates bring one layer. I bring the system." },
  { q: "What is the LIONXE™ framework?", a: "A proprietary four-gate quality standard I created — Logic & Longevity, Internal Optimization, Non-Negotiable Integrity, Exceptional Execution — with governing laws, sequential evaluation, and a scoring engine. Applied at enterprise scale in a 15-chapter, 87-site digital audit. No equivalent exists." },
];

function GulfMap() {
  const pk = CITY_PX.islamabad;
  const db = CITY_PX.dubai;
  const route = `M${pk.x},${pk.y} C${pk.x - 80},${pk.y + 60} ${db.x + 60},${db.y - 40} ${db.x},${db.y}`;
  return (
    <svg className="gv-map" viewBox="0 0 1000 560" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="gv-route-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#5271ff" />
          <stop offset="100%" stopColor="#e6b566" />
        </linearGradient>
      </defs>
      <g className="gv-grid">
        {[0,100,200,300,400,500,600,700,800,900,1000].map(x=><line key={`v${x}`} x1={x} y1={0} x2={x} y2={560}/>)}
        {[0,80,160,240,320,400,480,560].map(y=><line key={`h${y}`} x1={0} y1={y} x2={1000} y2={y}/>)}
      </g>
      {REGION_PATHS.map(c=><path key={c.name} d={c.d} className={`gv-country${c.name==="Pakistan"?" gv-country--pk":c.name==="United Arab Emirates"?" gv-country--uae":""}`}/>)}
      <text x={pk.x} y={pk.y-22} className="gv-label">PAKISTAN</text>
      <text x={db.x+30} y={db.y-18} className="gv-label--dest">DUBAI ✦</text>
      <text x={280} y={165} className="gv-label--dim">IRAN</text>
      <text x={200} y={345} className="gv-label--dim">SAUDI ARABIA</text>
      <text x={280} y={285} className="gv-label--sea">Persian Gulf</text>
      <path d={route} fill="none" className="gv-route-base"/>
      <path d={route} fill="none" className="gv-route-draw" pathLength="1"/>
      <path d={route} fill="none" className="gv-route-flow" pathLength="1"/>
      <circle cx={pk.x} cy={pk.y} r={5} className="gv-dot--origin"/>
      <circle cx={pk.x} cy={pk.y} r={14} className="gv-ping"/>
      <circle cx={pk.x} cy={pk.y} r={14} className="gv-ping gv-ping--2"/>
      <circle cx={db.x} cy={db.y} r={6} className="gv-dot--dest"/>
      <circle cx={db.x} cy={db.y} r={16} className="gv-ping gv-ping--gold"/>
      
      {/* Mathematically oriented & offset arrowhead sitting just before the destination */}
      <g transform={`translate(${db.x}, ${db.y}) rotate(146.3) translate(-18, 0)`}>
        <polygon points="0,0 -12,-5 -9,0 -12,5" className="gv-arrowhead"/>
      </g>
    </svg>
  );
}

export default function GulfVision() {
  return (
    <div className="gv-root">
      <section className="gv-hero">
        <div className="gv-hero-bg"/><div className="gv-stars"/><div className="gv-horizon"/>
        <GulfMap/>
        <div className="gv-map-veil"/>
        <div className="gv-hero-inner">
          <div className="gv-eyebrow-row">
            <div className="gv-eyebrow"><Plane size={13} aria-hidden/> Gulf Vision Dossier</div>
            {/* <div className="gv-eyebrow gv-eyebrow--academic"><FileCheck2 size={13} aria-hidden/> MSc Computer Science (Verified)</div> */}
          </div>
          <h1 className="gv-h1">Positioning for<br/><span className="gv-h1-accent">the Gulf enterprise market.</span></h1>
          <p className="gv-lede">Where systems thinking, AI-augmented engineering, technical SEO, and the LIONXE™ framework meet the Gulf's enterprise technology ecosystem.</p>
          <div className="gv-chips">
            <span className="gv-chip gv-chip--academic"><BadgeCheck size={13}/> MSc Computer Science</span>
            <span className="gv-chip"><Zap size={13}/> Growth Systems Architect</span>
            <span className="gv-chip"><Search size={13}/> Technical SEO</span>
            <span className="gv-chip"><Cpu size={13}/> Next.js · React · Node</span>
            <span className="gv-chip"><Layers size={13}/> LIONXE™ Creator</span>
          </div>
          <div className="gv-cta-row">
            <a href="/contact" className="gv-cta gv-cta--primary">Explore the ecosystem <ArrowRight size={15}/></a>
            <a href="#readiness" className="gv-cta gv-cta--ghost">Readiness check ↓</a>
          </div>
        </div>
      </section>

      <div className="gv-container">
        <section className="gv-section" id="why">
          <div className="gv-section-eyebrow">The Direction</div>
          <h2 className="gv-section-title">Why Dubai & the GCC</h2>
          <p className="gv-section-lede">This is not a random relocation. It is a strategic career expansion — moving into the ecosystem that best matches the scale, standards, and ambition of the work.</p>
          <div className="gv-vision-grid">
            {WHY.map(w=>{const Icon=w.icon;return(<div key={w.title} className="gv-vision-card"><div className="gv-vision-icon"><Icon size={20}/></div><h3 className="gv-vision-card-title">{w.title}</h3><p className="gv-vision-card-body">{w.body}</p></div>);})}
          </div>
        </section>

        <section className="gv-section" id="value">
          <div className="gv-section-eyebrow">The Value</div>
          <h2 className="gv-section-title">The capability in practice</h2>
          <div className="gv-value-grid">
            {VALUE.map(v=>{const Icon=v.icon;return(<div key={v.title} className="gv-value-card"><div className="gv-value-icon"><Icon size={20}/></div><h3 className="gv-value-title">{v.title}</h3><ul className="gv-value-list">{v.items.map(i=><li key={i}>{i}</li>)}</ul></div>);})}
          </div>
        </section>

        <section className="gv-section" id="readiness">
          <div className="gv-section-eyebrow">The Readiness</div>
          <h2 className="gv-section-title">Relocation & compliance readiness</h2>
          <p className="gv-section-lede">Practical details that are typically relevant when evaluating international candidates.</p>
          <div className="gv-ready-list">
            {READINESS.map(r=>{const Icon=r.icon;return(<div key={r.label} className="gv-ready-item"><div className="gv-ready-icon"><Icon size={18}/></div><div className="gv-ready-text"><div className="gv-ready-top"><h3 className="gv-ready-label">{r.label}</h3><span className={`gv-ready-badge gv-ready-badge--${r.tone}`}>{r.status}</span></div><p className="gv-ready-detail">{r.detail}</p></div></div>);})}
          </div>
        </section>

        <section className="gv-section" id="faq">
          <div className="gv-section-eyebrow">Questions</div>
          <h2 className="gv-section-title">Common questions</h2>
          <div className="gv-faq">
            {FAQS.map((f,i)=>(<div key={i} className="gv-faq-item gv-faq-item--open"><div className="gv-faq-q"><span>{f.q}</span></div><div className="gv-faq-a-wrap" style={{maxHeight:"none"}}><p className="gv-faq-a">{f.a}</p></div></div>))}
          </div>
        </section>

        <section className="gv-section" style={{textAlign:"center",paddingBottom:"80px"}}>
          <h2 className="gv-section-title">A deliberate direction.</h2>
          <p className="gv-section-lede" style={{maxWidth:"560px",margin:"0 auto"}}>The Gulf direction is backed by a live ecosystem, a proprietary framework, enterprise-grade research, and the kind of preparation that reflects how seriously I approach the next stage of my career.</p>
          <div className="gv-cta-row" style={{justifyContent:"center",marginTop:"28px"}}>
            <a href="/contact" className="gv-cta gv-cta--primary">Explore the ecosystem <ArrowRight size={15}/></a>
            <a href="/" className="gv-cta gv-cta--ghost">Back to portfolio</a>
          </div>
        </section>
      </div>
    </div>
  );
}