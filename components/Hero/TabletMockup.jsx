// components/Hero/TabletMockup.jsx
"use client";

// The full interactive tablet/device mockup. This is the heaviest, least
// essential part of the hero visually — it's a decorative interactive demo,
// not primary content — so it lives in its own file and gets loaded via
// next/dynamic({ ssr: false }) from index.jsx, and only mounted at all when
// isDesktop is true. On mobile this file's code is never downloaded, never
// parsed, and this component never mounts — a real unmount, not a CSS hide.
//
// It manages its own visibility (via IntersectionObserver on its own root),
// so its internal timers and CSS animations pause the moment it scrolls
// out of view and resume when it's back, independent of the rest of the page.

import React, { useState, useEffect, useRef, useCallback, useMemo, useImperativeHandle } from "react";
import {
  AlertTriangle, ArrowUpRight, BatteryFull, Check, CheckCircle2,
  ChevronLeft, ChevronRight, Copy, ExternalLink, Home, ImageIcon,
  Lightbulb, Quote as QuoteIcon, ServerCog, Settings, Shuffle,
  TrendingUp, Wifi, XCircle,
} from "lucide-react";
import { GOLD, ACCENT_THEMES } from "./heroData";
import {
  WALLPAPERS, QUOTES, BUILDING_STATUS, SHOWCASE_SLIDES, PHONE_CATEGORIES,
  SYSTEM_INFO_DATA, LIONXE_DATA, LIONXE_DOCTRINE, DOITWITHAI_DATA,
  SUFIAN_DATA, FAQ_DATA, SOCIAL_DATA, GALLERY_DATA,
  TIMELINE_DATA, MANIFESTO_DATA, PILLAR_DEFAULTS, PILLAR_LAWS, PILLAR_FIX,
  PILLAR_FAILURE_DETAIL, ANALYTICS_DATA, TERMINAL_BOOT, ECOSYSTEM_STATUS,
} from "./tabletData";
import { ClockWidget, StatusClock } from "./ClockWidgets";

const TabletMockup = React.forwardRef(function TabletMockup({ accent, onAccentChange }, ref) {
  const rootRef      = useRef(null);
  const termBodyRef  = useRef(null);
  const quoteTimerRef= useRef(null);

  const [activeCategory,  setActiveCategory]  = useState(null);
  const [phoneView,       setPhoneView]       = useState("home");
  const [activeSubcat,    setActiveSubcat]    = useState(null);
  const [pillarStates,    setPillarStates]    = useState(PILLAR_DEFAULTS.map((p) => ({ ...p })));
  const [auditProject,    setAuditProject]    = useState("");
  const [auditCopied,     setAuditCopied]     = useState(false);
  const [activeExpertise, setActiveExpertise] = useState(null);
  const [activeFaq,       setActiveFaq]       = useState(null);
  const [switchAnim,      setSwitchAnim]      = useState(false);
  const [wallpaper,       setWallpaper]       = useState(0);
  const [slide,           setSlide]           = useState(0);
  const [quoteIndex,      setQuoteIndex]      = useState(0);
  const [gallerySlide,    setGallerySlide]    = useState(0);
  const [buildingIndex,   setBuildingIndex]   = useState(0);

  const [islandState,   setIslandState]   = useState("idle");
  const [islandMessage, setIslandMessage] = useState("");

  const [termLines,  setTermLines]  = useState([]);
  const [termBooted, setTermBooted] = useState(false);

  const [analyticsTab, setAnalyticsTab] = useState("doitwithai");

  /* PERF: the tablet fully owns its own visibility instead of trusting a
     prop from the parent. The moment it scrolls off-screen every interval
     below stops firing, and a "tablet-offscreen" class pauses its CSS
     animations (border glow spin, glare sweep) too. Both resume instantly
     when it scrolls back into view. */
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ── Dynamic Island ── */
  const triggerIsland = useCallback((state, message = "", duration = 2200) => {
    setIslandState(state);
    setIslandMessage(message);
    const t = setTimeout(() => setIslandState("idle"), duration);
    return () => clearTimeout(t);
  }, []);

  /* Lets the parent (e.g. its own accent-swatch row in the left column)
     flash this tablet's dynamic island too, even though accent state
     itself now lives in the parent. */
  useImperativeHandle(ref, () => ({ triggerIsland }), [triggerIsland]);

  /* ── Gallery auto-slide ── */
  useEffect(() => {
    if (!isVisible || activeCategory !== "gallery") return;
    const timer = setInterval(() => {
      setGallerySlide((c) => (c + 1) % GALLERY_DATA.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [activeCategory, isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const t = setInterval(() => setBuildingIndex((i) => (i + 1) % BUILDING_STATUS.length), 3500);
    return () => clearInterval(t);
  }, [isVisible]);

  const startQuoteTimer = useCallback(() => {
    if (quoteTimerRef.current) clearInterval(quoteTimerRef.current);
    if (!isVisible) return;
    quoteTimerRef.current = setInterval(() => setQuoteIndex((i) => (i + 1) % QUOTES.length), 5000);
  }, [isVisible]);

  useEffect(() => {
    startQuoteTimer();
    return () => { if (quoteTimerRef.current) clearInterval(quoteTimerRef.current); };
  }, [startQuoteTimer]);

  const shuffleQuote = useCallback(() => {
    setQuoteIndex((i) => {
      let next = i;
      while (next === i) next = Math.floor(Math.random() * QUOTES.length);
      return next;
    });
    triggerIsland("quote", "", 1200);
    startQuoteTimer();
  }, [startQuoteTimer, triggerIsland]);

  useEffect(() => {
    if (!isVisible || activeCategory) return;
    const t = setInterval(() => setSlide((s) => (s + 1) % SHOWCASE_SLIDES.length), 3600);
    return () => clearInterval(t);
  }, [activeCategory, isVisible]);

  useEffect(() => {
    if (activeCategory !== "terminal" || termBooted) return;
    if (typeof window !== "undefined" && window.sessionStorage?.getItem("sm-term-booted")) {
      setTermLines(TERMINAL_BOOT.map((text) => ({ type: "boot", text })));
      setTermBooted(true);
      return;
    }
    let i = 0;
    setTermLines([]);
    const t = setInterval(() => {
      setTermLines((prev) => [...prev, { type: "boot", text: TERMINAL_BOOT[i] }]);
      i++;
      if (i >= TERMINAL_BOOT.length) { clearInterval(t); setTermBooted(true); try { window.sessionStorage?.setItem("sm-term-booted", "1"); } catch (e) {} }
    }, 380);
    return () => clearInterval(t);
  }, [activeCategory, termBooted]);

  useEffect(() => {
    if (termBodyRef.current) termBodyRef.current.scrollTop = termBodyRef.current.scrollHeight;
  }, [termLines]);

  const activeWallpaper = WALLPAPERS[wallpaper];

  const navigatePhone = useCallback((category, view = "home", subcat = null) => {
    setSwitchAnim(true);
    setTimeout(() => {
      setActiveCategory(category);
      setPhoneView(view);
      setActiveSubcat(subcat);
      setActiveExpertise(null);
      setActiveFaq(null);
      if (category !== "terminal") setTermBooted(false);
      setSwitchAnim(false);
    }, 170);
  }, []);

  const dockKey = (e, fn) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fn(); } };

  const togglePillar = useCallback((idx) => {
    setPillarStates((prev) => {
      const next = prev.map((p, i) => i === idx ? { ...p, status: p.status === "pass" ? "fail" : p.status === "fail" ? "pending" : "pass" } : p);
      const firstFail = next.findIndex((p) => p.status === "fail");
      const hasPending = next.some((p) => p.status === "pending");
      setTimeout(() => {
        if (!hasPending && firstFail === -1) triggerIsland("certified", "LIONXE Certified", 2200);
        else if (firstFail >= 0) triggerIsland("rejected", `Rejected · ${next[firstFail].code}`, 2200);
      }, 50);
      return next;
    });
  }, [triggerIsland]);

  const auditResult = useMemo(() => {
    const firstFail  = pillarStates.findIndex((p) => p.status === "fail");
    const hasPending = pillarStates.some((p) => p.status === "pending");
    if (hasPending)      return { verdict: "Under Review",                        color: "#D98E2B", icon: AlertTriangle, fixIdx: -1        };
    if (firstFail === -1)return { verdict: "LIONXE Certified",                    color: "#2FB07A", icon: CheckCircle2,  fixIdx: -1        };
    return                      { verdict: `Rejected at ${pillarStates[firstFail].code}`, color: "#D45A5A", icon: XCircle, fixIdx: firstFail };
  }, [pillarStates]);

  const copyAudit = useCallback(() => {
    const proj = auditProject.trim() ? ` — ${auditProject.trim()}` : "";
    const txt  = `LIONXE Audit Result: ${auditResult.verdict}${proj}. Powered by the LIONXE™ framework.`;
    navigator.clipboard?.writeText(txt);
    setAuditCopied(true);
    setTimeout(() => setAuditCopied(false), 1800);
  }, [auditProject, auditResult]);

  const runTermCommand = useCallback((cmd) => {
    const push = (lines) => setTermLines((prev) => [...prev, { type: "cmd", text: `$ ${cmd}` }, ...lines.map((l) => ({ type: "out", text: l }))]);
    if (cmd === "/clear") { setTermLines([{ type: "out", text: "Screen cleared. System ready." }]); return; }
    if (cmd === "/help")  push(["Available commands:","  /about   — print bio","  /audit   — run a LIONXE scan","  /work    — list platforms","  /help    — list commands","  /clear   — wipe screen"]);
    else if (cmd === "/about") push(["Sufian Mustafa — Growth Systems Architect","LIONXE™ creator · Technical SEO · AI-augmented web systems","MSc Computer Science · Rawalpindi, PK","Builds digital authority engineered to outlast algorithms."]);
    else if (cmd === "/audit") push(["Running LIONXE scan...","  [L]  Logic & Longevity ....... PASS","  [IO] Internal Optimization ... PASS","  [N]  Non-Negotiable Integrity  PASS","  [XE] Exceptional Distinction . PASS","Verdict: LIONXE Certified ✓"]);
    else if (cmd === "/work")  push(["Active platforms:","  doitwithai.tools     — AI SEO authority hub [LIVE]","  lionxeframework.com  — Framework doctrine [ACTIVE]","  sufianmustafa.com    — Authority layer [BUILDING]"]);
    else push([`command not found: ${cmd}`, "type /help for options"]);
  }, []);

  const changeAccent = useCallback((value, name) => {
    onAccentChange(value);
    triggerIsland("accent", name, 1600);
  }, [onAccentChange, triggerIsland]);

  const renderPhoneContent = () => {
    if (!activeCategory) return renderTabletHome();
    switch (activeCategory) {
      case "lionxe":
        if (phoneView === "audit")                    return renderAuditSimulator();
        if (phoneView === "subcat" && activeSubcat)   return renderLionxeSubcat();
        return renderLionxeMain();
      case "doitwithai":
        if (phoneView === "subcat" && activeSubcat)   return renderDoitSubcat();
        return renderDoitMain();
      case "sufian":
        if (activeExpertise !== null)                 return renderExpertiseDetail();
        return renderSufianMain();
      case "terminal":   return renderTerminal();
      case "system":     return renderSystemInfo();
      case "analytics":  return renderAnalytics();
      case "timeline":   return renderTimeline();
      case "manifesto":  return renderManifesto();
      case "faq":        return renderFaq();
      case "contact":    return renderContact();
      case "social":     return renderSocial();
      case "gallery":    return renderGallery();
      case "skills":     return renderSkills();
      case "gulfvision": return renderGulfVision();
      case "settings":   return renderSettings();
      default:           return renderTabletHome();
    }
  };

  /* ─── HOME ─── */
  const renderTabletHome = () => {
    const Slide     = SHOWCASE_SLIDES[slide];
    const SlideIcon = Slide.icon;
    const q         = QUOTES[quoteIndex];
    return (
      <div className="phone-view-inner">
        <ClockWidget />

        <div className="tab-building-widget">
          <span className="tab-building-dot" />
          <span className="tab-building-label">Currently building</span>
          <span key={buildingIndex} className="tab-building-text">{BUILDING_STATUS[buildingIndex]}</span>
        </div>

        <div className="tab-slider" style={{ "--slide-color": Slide.color }}>
          <div key={slide} className="tab-slide">
            <div className="tab-slide-icon"><SlideIcon size={18} aria-hidden /></div>
            <div className="tab-slide-eyebrow">{Slide.eyebrow}</div>
            <div className="tab-slide-title">{Slide.title}</div>
            <p className="tab-slide-body">{Slide.body}</p>
          </div>
          <div className="tab-slide-dots">
            {SHOWCASE_SLIDES.map((_, i) => (
              <button key={i} className={`tab-slide-dot ${i === slide ? "tab-slide-dot--active" : ""}`} onClick={() => setSlide(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>

        <div className="tab-quote">
          <QuoteIcon size={13} aria-hidden className="tab-quote-mark" />
          <button className="tab-quote-shuffle" onClick={shuffleQuote} aria-label="Show another quote"><Shuffle size={12} aria-hidden /></button>
          <p key={quoteIndex} className="tab-quote-text">{q.text}</p>
          <span className="tab-quote-tag">{q.tag}</span>
        </div>

        <div className="tab-section-label">Explore the ecosystem</div>
        <div className="tab-app-grid">
          {PHONE_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button key={cat.id} className="tab-app-btn" style={{ "--cat-color": cat.color }} onClick={() => navigatePhone(cat.id)} aria-label={`Open ${cat.label}`}>
                <div className="tab-app-icon"><Icon size={20} aria-hidden /></div>
                <span className="tab-app-label">{cat.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  /* ─── LIONXE MAIN ─── */
  const renderLionxeMain = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#4D7BFF" }}>
        <div className="phone-header-badge">LIONXE™ · {LIONXE_DATA.header.badge}</div>
        <h3 className="phone-header-title">{LIONXE_DATA.header.title}</h3>
        <p className="phone-header-sub">{LIONXE_DATA.header.subtitle}</p>
      </div>
      <p className="phone-overview-text">{LIONXE_DATA.overview}</p>
      <div className="phone-section-label">Quick Access</div>
      <div className="phone-subcat-list">
        {LIONXE_DATA.subcategories.map((sc) => {
          const Icon = sc.icon;
          return (
            <button key={sc.id} className="phone-subcat-item"
              onClick={() => sc.id === "audit" ? navigatePhone("lionxe", "audit") : navigatePhone("lionxe", "subcat", sc.id)}
              aria-label={sc.label}>
              <Icon size={15} aria-hidden /><span>{sc.label}</span><ChevronRight size={13} aria-hidden className="phone-subcat-arrow" />
            </button>
          );
        })}
      </div>
      <div className="phone-section-label">4 Pillars</div>
      <div className="phone-pillars-grid">
        {LIONXE_DATA.pillars.map((p) => (
          <button key={p.code} className="phone-pillar-chip" style={{ "--pillar-color": p.color }}
            onClick={() => navigatePhone("lionxe", "subcat", `pillar-${p.code}`)} aria-label={`Pillar ${p.code}: ${p.name}`}>
            <span className="phone-pillar-code">{p.code}</span><span className="phone-pillar-name">{p.name}</span>
          </button>
        ))}
      </div>
    </div>
  );

  /* ─── LIONXE SUBCAT ─── */
  const renderLionxeSubcat = () => {
    /* Pillar detail */
    if (activeSubcat?.startsWith("pillar-")) {
      const code   = activeSubcat.replace("pillar-", "");
      const pillar = LIONXE_DATA.pillars.find((p) => p.code === code);
      if (!pillar) return null;
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <div className="phone-pillar-detail-header" style={{ "--pillar-color": pillar.color }}>
            <span className="phone-pillar-detail-code">{pillar.code}</span>
            <h3 className="phone-pillar-detail-name">{pillar.name}</h3>
          </div>
          <p className="phone-overview-text" style={{ marginTop: "0.75rem" }}>{pillar.desc}</p>
          <div className="phone-pillar-law-list">
            {PILLAR_LAWS[pillar.code].map((law, i) => (
              <div key={i} className="phone-law-item"><span className="phone-law-num">{i + 1}</span><span>{law}</span></div>
            ))}
          </div>
        </div>
      );
    }

    /* FIX: "4 Pillars" tab was empty — now shows all four pillars with laws */
    if (activeSubcat === "pillars") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">4 Pillars</h3>
          <p className="phone-overview-text">Four sequential gates. Failure at any single gate voids the entire audit — no partial certification.</p>
          {LIONXE_DATA.pillars.map((p) => (
            <div key={p.code} style={{ borderRadius: "13px", padding: "13px", background: `color-mix(in srgb, ${p.color} 8%, rgba(255,255,255,0.03))`, border: `1px solid color-mix(in srgb, ${p.color} 25%, transparent)`, borderLeft: `3px solid ${p.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "7px" }}>
                <span style={{ fontSize: "16px", fontWeight: 900, color: p.color }}>{p.code}</span>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#fff" }}>{p.name}</span>
              </div>
              <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.58)", margin: "0 0 8px" }}>{p.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {PILLAR_LAWS[p.code].map((law, i) => (
                  <div key={i} style={{ fontSize: "11.5px", color: "rgba(255,255,255,0.5)", display: "flex", gap: "6px" }}>
                    <span style={{ color: p.color, fontWeight: 800, flexShrink: 0 }}>{i + 1}.</span>
                    <span>{law}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );
    }

    /* Doctrine */
    if (activeSubcat === "doctrine") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">Framework Doctrine</h3>
          <p className="phone-overview-text" style={{ marginBottom: "4px" }}>The governing axioms that define the LIONXE™ standard. Each law is tied to a pillar — and no pillar is optional.</p>
          <div className="doctrine-list">
            {LIONXE_DOCTRINE.map((d, i) => (
              <div key={i} className="doctrine-item" style={{ "--doctrine-color": d.color }}>
                <div className="doctrine-pillar-tag" style={{ color: d.color, background: `color-mix(in srgb, ${d.color} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${d.color} 28%, transparent)` }}>{d.pillar}</div>
                <p className="doctrine-text">"{d.text}"</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    const content = {
      about:   { title: "About LIONXE™",  body: "LIONXE™ (lee-ohn-zay) is a proprietary auditing framework engineered by Sufian Mustafa. It functions as a precise architectural matrix where each letter dictates a non-negotiable law of execution — designed to eliminate the volatile, short-sighted strategies that collapse under market shifts." },
      history: { title: "The Origin",     body: "LIONXE™ began with a single diagnostic question: why do high-performing digital assets eventually collapse under algorithm shifts? After dissecting that failure pattern — surface metrics, platform dependence, generic execution — Sufian reverse-engineered a permanent architecture from the diagnosis. The result is a four-pillar standard that certifies only what is built to compound, not spike." },
    };
    const c = content[activeSubcat];
    if (!c) return null;
    return (
      <div className="phone-view-inner">
        <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
        <h3 className="phone-subview-title">{c.title}</h3>
        <p className="phone-overview-text">{c.body}</p>
      </div>
    );
  };

  /* ─── AUDIT SIMULATOR ─── */
  const renderAuditSimulator = () => {
    const ResultIcon = auditResult.icon;
    const failPillar = auditResult.fixIdx >= 0 ? pillarStates[auditResult.fixIdx] : null;
    return (
      <div className="phone-view-inner">
        <button className="phone-back-btn" onClick={() => navigatePhone("lionxe")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
        <div className="phone-audit-header">
          <h3 className="phone-subview-title">Audit Simulator</h3>
          <p className="phone-audit-hint">Tap each pillar to toggle Pass / Fail / Review</p>
        </div>
        <textarea className="phone-audit-input" placeholder="Describe your project or asset (optional)…" value={auditProject} onChange={(e) => setAuditProject(e.target.value)} rows={2} aria-label="Project description" />
        <div className="phone-audit-pillars">
          {pillarStates.map((p, idx) => (
            <button key={p.code} className={`phone-audit-pillar phone-audit-pillar--${p.status}`} style={{ "--pillar-color": p.color }} onClick={() => togglePillar(idx)} aria-label={`${p.code} pillar — ${p.status}. Tap to change`}>
              <div className="phone-audit-pillar-left"><span className="phone-audit-code">{p.code}</span><span className="phone-audit-pname">{p.name}</span></div>
              <div className={`phone-audit-badge phone-audit-badge--${p.status}`}>
                {p.status === "pass" ? <CheckCircle2 size={13} aria-hidden /> : p.status === "fail" ? <XCircle size={13} aria-hidden /> : <AlertTriangle size={13} aria-hidden />}
                <span>{p.status === "pass" ? "Pass" : p.status === "fail" ? "Fail" : "Review"}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="phone-audit-flow">
          {pillarStates.map((p, idx) => {
            const isLast   = idx === pillarStates.length - 1;
            const nextFail = p.status === "fail";
            return (
              <React.Fragment key={p.code}>
                <div className={`phone-flow-node phone-flow-node--${p.status}`} style={{ "--pillar-color": p.color }}>{p.code}</div>
                {!isLast && <div className={`phone-flow-arrow ${nextFail ? "phone-flow-arrow--broken" : ""}`}>{nextFail ? "✗" : "→"}</div>}
              </React.Fragment>
            );
          })}
        </div>
        <div className="phone-audit-result" style={{ "--result-color": auditResult.color }}><ResultIcon size={17} aria-hidden /><span>{auditResult.verdict}</span></div>
        {auditResult.fixIdx >= 0 && failPillar && (
          <div className="audit-failure-analysis" style={{ "--fa-color": failPillar.color }}>
            <div className="audit-fa-head"><XCircle size={13} aria-hidden /> Failure Analysis · {failPillar.code}</div>
            <p className="audit-fa-body">{PILLAR_FAILURE_DETAIL[failPillar.code]}</p>
            <p className="audit-fa-fix"><strong>Required action:</strong> {PILLAR_FIX[failPillar.code]}</p>
          </div>
        )}
        <div className="phone-audit-actions">
          <button className="phone-reset-btn" onClick={() => { setPillarStates(PILLAR_DEFAULTS.map((p) => ({ ...p }))); setAuditProject(""); }} aria-label="Reset pillars">Reset</button>
          <button className="phone-copy-btn"  onClick={copyAudit} aria-label="Copy result">{auditCopied ? <><Check size={13} aria-hidden /> Copied</> : <><Copy size={13} aria-hidden /> Copy result</>}</button>
        </div>
      </div>
    );
  };

  /* ─── DOITWITHAI MAIN ─── */
  const renderDoitMain = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#00D9FF" }}>
        <div className="phone-header-badge">Live Platform · {DOITWITHAI_DATA.header.badge}</div>
        <h3 className="phone-header-title">{DOITWITHAI_DATA.header.title}</h3>
        <p className="phone-header-sub">{DOITWITHAI_DATA.header.subtitle}</p>
      </div>
      <p className="phone-overview-text">{DOITWITHAI_DATA.overview}</p>
      <div className="phone-stats-grid">
        {DOITWITHAI_DATA.stats.map((s) => (<div key={s.label} className="phone-stat-chip"><span className="phone-stat-val">{s.value}</span><span className="phone-stat-lbl">{s.label}</span></div>))}
      </div>
      <div className="phone-section-label">Explore</div>
      <div className="phone-subcat-list">
        {DOITWITHAI_DATA.subcategories.map((sc) => {
          const Icon = sc.icon;
          return (<button key={sc.id} className="phone-subcat-item" onClick={() => navigatePhone("doitwithai", "subcat", sc.id)} aria-label={sc.label}><Icon size={15} aria-hidden /><span>{sc.label}</span><ChevronRight size={13} aria-hidden className="phone-subcat-arrow" /></button>);
        })}
      </div>
      <a className="tab-visit-btn" href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Visit live site <ExternalLink size={13} aria-hidden /></a>
    </div>
  );

  /* ─── DOITWITHAI SUBCAT ─── */
  const renderDoitSubcat = () => {
    if (activeSubcat === "content") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("doitwithai")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">Content Strategy</h3>
          <p className="phone-overview-text">Every article is engineered to compound — published only when it will gain value over time, never to chase a trend (LIONXE™ Longevity pillar).</p>
          <div className="phone-section-label">Content Tiers</div>
          <div className="phone-stack-list">
            <div className="phone-stack-row"><span className="phone-stack-key">Pillar Pages</span><span className="phone-stack-val">8,000+ words</span></div>
            <div className="phone-stack-row"><span className="phone-stack-key">Cluster Articles</span><span className="phone-stack-val">3–5K words</span></div>
            <div className="phone-stack-row"><span className="phone-stack-key">Quick-win Posts</span><span className="phone-stack-val">1.2–2K words</span></div>
          </div>
          <div className="phone-section-label">Quality Standards</div>
          <div className="phone-tag-wrap">
            {["Zero AI detection","12–15 keyword integrations","H2 SEO architecture","Structured FAQ closing","US-standard legal review","1 primary + 4–6 secondary keywords"].map((t) => (<span key={t} className="phone-tag" style={{ "--tag-color": "#00D9FF" }}>{t}</span>))}
          </div>
        </div>
      );
    }
    if (activeSubcat === "why") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("doitwithai")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">Why It Exists</h3>
          <div className="doit-mission-card">
            <div className="doit-mission-icon"><Lightbulb size={20} aria-hidden /></div>
            <p className="doit-mission-body">DoItWithAI.tools was built to answer one question no existing platform was answering: Can you build a search-authoritative platform using AI-native workflows without sacrificing depth, quality, or long-term credibility? Every article is the answer.</p>
          </div>
          <div className="phone-section-label">The Problem It Solves</div>
          <div className="phone-stack-list">
            <div className="phone-stack-row"><span className="phone-stack-key">Before</span><span className="phone-stack-val" style={{ color: "#D45A5A" }}>AI content = thin content</span></div>
            <div className="phone-stack-row"><span className="phone-stack-key">After</span><span className="phone-stack-val" style={{ color: "#2FB07A" }}>AI-native = authority-first</span></div>
            <div className="phone-stack-row"><span className="phone-stack-key">Goal</span><span className="phone-stack-val">Permanent visibility</span></div>
          </div>
        </div>
      );
    }
    if (activeSubcat === "philosophy") {
      return (
        <div className="phone-view-inner">
          <button className="phone-back-btn" onClick={() => navigatePhone("doitwithai")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
          <h3 className="phone-subview-title">Content Philosophy</h3>
          <p className="phone-overview-text">Every article begins with a question that has no satisfying answer online. The goal is not keyword density — it is architectural depth.</p>
          <div className="philosophy-card">
            <p>"The reader should finish the article knowing more than anyone else on that subject, including the people who rank above it currently."</p>
            <span>Sufian Mustafa · Content Architecture Doctrine</span>
          </div>
          <div className="phone-section-label">Non-Negotiables</div>
          <div className="phone-pillar-law-list">
            {["Start with the gap — identify what's missing everywhere else.","Depth over density — structured knowledge beats keyword stuffing.","Compound value — every article gets more valuable as the platform grows.","Authority signals — E-E-A-T embedded from the first paragraph."].map((l, i) => (
              <div key={i} className="phone-law-item"><span className="phone-law-num">{i + 1}</span><span>{l}</span></div>
            ))}
          </div>
        </div>
      );
    }
    const content = {
      what:  { title: "What is DoItWithAI.tools?", body: "A live AI SEO authority platform where every article is engineered for long-term search compounding — not clicks, not trends, but permanent visibility. Every article is both an educational resource and a real-world SEO experiment that proves AI-native workflows can produce genuine authority content." },
      stack: { title: "Tech Stack", items: [{ label: "Frontend", value: "Next.js 14 (App Router)" },{ label: "CMS", value: "Sanity Studio" },{ label: "Styling", value: "Tailwind CSS + MUI" },{ label: "Caching", value: "Redis + React Query" },{ label: "Schema", value: "JSON-LD, OpenGraph" },{ label: "Deploy", value: "Vercel (Edge)" }] },
      seo:   { title: "SEO Architecture", body: "Built on the LIONXE™ framework. Pillar pages, cluster articles, semantic keyword grouping, structured data (7+ schema types), Core Web Vitals optimization, GEO/AEO signals for AI-generated answers, and EEAT maximization through deep author authority." },
    };
    const c = content[activeSubcat];
    if (!c) return null;
    return (
      <div className="phone-view-inner">
        <button className="phone-back-btn" onClick={() => navigatePhone("doitwithai")} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
        <h3 className="phone-subview-title">{c.title}</h3>
        {c.body  && <p className="phone-overview-text">{c.body}</p>}
        {c.items && <div className="phone-stack-list">{c.items.map((item) => (<div key={item.label} className="phone-stack-row"><span className="phone-stack-key">{item.label}</span><span className="phone-stack-val">{item.value}</span></div>))}</div>}
      </div>
    );
  };

  /* ─── SUFIAN MAIN ─── */
  const renderSufianMain = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">{SUFIAN_DATA.header.badge}</div>
        <h3 className="phone-header-title">{SUFIAN_DATA.header.title}</h3>
        <p className="phone-header-sub">{SUFIAN_DATA.header.subtitle}</p>
      </div>
      <p className="phone-overview-text">{SUFIAN_DATA.overview}</p>
      <div className="phone-section-label">Core Expertise</div>
      <div className="phone-expertise-list">
        {SUFIAN_DATA.expertise.map((exp, idx) => {
          const Icon = exp.icon;
          return (<button key={exp.label} className="phone-expertise-item" style={{ "--exp-color": exp.color }} onClick={() => setActiveExpertise(idx)} aria-label={`${exp.label} — tap for details`}><Icon size={15} aria-hidden /><span>{exp.label}</span><ChevronRight size={13} aria-hidden className="phone-subcat-arrow" /></button>);
        })}
      </div>
      <div className="phone-section-label">Methodology</div>
      <div className="sufian-method-grid">
        {SUFIAN_DATA.methodology.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.title} className="sufian-method-card" style={{ "--method-color": m.color }}>
              <div className="sufian-method-icon"><Icon size={14} aria-hidden /></div>
              <div className="sufian-method-title">{m.title}</div>
              <p className="sufian-method-body">{m.body}</p>
            </div>
          );
        })}
      </div>
      <div className="phone-section-label">Engagement Scope</div>
      <div className="phone-tag-wrap">
        {SUFIAN_DATA.availableFor.map((t) => (<span key={t} className="phone-tag" style={{ "--tag-color": GOLD }}>{t}</span>))}
      </div>
      <a className="tab-visit-btn" href="/about">Full profile <ArrowUpRight size={13} aria-hidden /></a>
    </div>
  );

  /* ─── EXPERTISE DETAIL ─── */
  const renderExpertiseDetail = () => {
    const exp  = SUFIAN_DATA.expertise[activeExpertise];
    if (!exp) return null;
    const Icon = exp.icon;
    return (
      <div className="phone-view-inner">
        <button className="phone-back-btn" onClick={() => setActiveExpertise(null)} aria-label="Back"><ChevronLeft size={15} aria-hidden /> Back</button>
        <div className="phone-exp-detail-header" style={{ "--exp-color": exp.color }}><Icon size={22} aria-hidden /><h3 className="phone-subview-title" style={{ marginTop: 0 }}>{exp.label}</h3></div>
        <p className="phone-overview-text">{exp.detail}</p>
        <div className="phone-tag-wrap">{exp.tags.map((t) => (<span key={t} className="phone-tag" style={{ "--tag-color": exp.color }}>{t}</span>))}</div>
      </div>
    );
  };

  /* ─── TERMINAL ─── */
  const renderTerminal = () => (
    <div className="phone-view-inner term-inner">
      <div className="term-window">
        <div className="term-titlebar"><span className="term-dot term-dot--r" /><span className="term-dot term-dot--y" /><span className="term-dot term-dot--g" /><span className="term-title">sufian@lionxe: ~</span></div>
        <div className="term-body" ref={termBodyRef}>
          {termLines.map((l, i) => (<div key={i} className={`term-line term-line--${l.type}`}>{l.text}</div>))}
          {termBooted && <div className="term-line term-prompt">$ <span className="term-cursor">▋</span></div>}
        </div>
      </div>
      <div className="term-cmd-row">
        {["/audit","/about","/work","/help","/clear"].map((cmd) => (<button key={cmd} className="term-cmd-btn" onClick={() => runTermCommand(cmd)} disabled={!termBooted} aria-label={`Run ${cmd}`}>{cmd}</button>))}
      </div>
    </div>
  );

  /* ─── ANALYTICS ─── */
  const renderAnalytics = () => {
    const data = ANALYTICS_DATA[analyticsTab];
    return (
      <div className="phone-view-inner">
        <div className="phone-header" style={{ "--hdr-color": GOLD }}>
          <div className="phone-header-badge">The system · {dateStr}</div>
          <h3 className="phone-header-title">Ecosystem</h3>
          <p className="phone-header-sub">The three-platform system at a glance</p>
        </div>
        <div className="an-tabs">
          {Object.keys(ANALYTICS_DATA).map((k) => (<button key={k} className={`an-tab ${analyticsTab === k ? "an-tab--active" : ""}`} onClick={() => setAnalyticsTab(k)}>{ANALYTICS_DATA[k].name}</button>))}
        </div>
        <div className="an-charts">
          {data.metrics.map((m) => (
            <div key={m.label} className="an-chart" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "12.5px", fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>{m.label}</span>
              <strong style={{ fontSize: "14px", fontWeight: 800, color: "#fff" }}>{m.value}</strong>
            </div>
          ))}
        </div>
        <div className="an-authority-note">
          <TrendingUp size={12} aria-hidden />
          <span>Verified metrics from the live ecosystem — no simulated data.</span>
        </div>
      </div>
    );
  };

  /* ─── TIMELINE ─── */
  const renderTimeline = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">Built over time</div>
        <h3 className="phone-header-title">Timeline</h3>
        <p className="phone-header-sub">Career & ecosystem milestones</p>
      </div>
      <div className="tl-list">
        {TIMELINE_DATA.map((m, i) => (
          <div key={i} className={`tl-item ${m.recent ? "tl-item--recent" : ""}`} style={{ "--tl-color": m.color }}>
            <div className="tl-marker"><span className="tl-dot" /></div>
            <div className="tl-content"><span className="tl-year">{m.year}</span><p className="tl-text">{m.text}</p></div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ─── MANIFESTO ─── */
  const renderManifesto = () => (
    <div className="phone-view-inner mf-inner" onScroll={(e) => { const el = e.currentTarget; const bar = el.querySelector(".mf-progress-fill"); if (bar) bar.style.width = `${(el.scrollTop / (el.scrollHeight - el.clientHeight || 1)) * 100}%`; }}>
      <div className="mf-progress"><div className="mf-progress-fill" /></div>
      <div className="phone-header" style={{ "--hdr-color": "#4D7BFF" }}>
        <div className="phone-header-badge">LIONXE™ Doctrine</div>
        <h3 className="phone-header-title">Manifesto</h3>
        <p className="phone-header-sub">Four governing laws</p>
      </div>
      {MANIFESTO_DATA.map((m) => (
        <div key={m.code} className="mf-entry" style={{ "--mf-color": m.color }}>
          <div className="mf-entry-head"><span className="mf-badge">{m.code}</span><span className="mf-entry-title">{m.title}</span></div>
          <p className="mf-entry-body">"{m.body}"</p>
        </div>
      ))}
      <a className="tab-visit-btn" href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer">Read full doctrine <ExternalLink size={13} aria-hidden /></a>
    </div>
  );

  /* ─── FAQ ─── */
  const renderFaq = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">Quick Answers</div>
        <h3 className="phone-header-title">FAQ</h3>
        <p className="phone-header-sub">The questions people ask most</p>
      </div>
      <div className="tab-faq-list">
        {FAQ_DATA.map((item, idx) => (
          <div key={idx} className={`tab-faq-item ${activeFaq === idx ? "tab-faq-item--open" : ""}`}>
            <button className="tab-faq-q" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)} aria-expanded={activeFaq === idx}><span>{item.q}</span><ChevronRight size={14} aria-hidden className="tab-faq-chevron" /></button>
            <div className="tab-faq-a-wrap"><p className="tab-faq-a">{item.a}</p></div>
          </div>
        ))}
      </div>
    </div>
  );

  /* ─── CONTACT ─── */
  const renderContact = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">The ecosystem</div>
        <h3 className="phone-header-title">Get in Touch</h3>
        <p className="phone-header-sub">Three platforms, one point of contact</p>
      </div>
      {[
        { name: "sufianmustafa.com",  role: "Authority hub · Advisory · Strategy",           email: "hello@sufianmustafa.com",    color: GOLD      },
        { name: "DoItWithAI.tools",   role: "AI SEO platform · Content · Partnerships",      email: "contact@doitwithai.tools",   color: "#5271FF" },
        { name: "LIONXE™ Framework", role: "Audit licensing · Enterprise evaluation",        email: "audit@lionxeframework.com",  color: "#4D7BFF" },
      ].map((p) => (
        <div key={p.name} style={{ marginBottom: "12px", padding: "14px", borderRadius: "14px", background: "rgba(255,255,255,0.04)", border: `1px solid color-mix(in srgb, ${p.color} 25%, transparent)` }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "6px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: p.color, boxShadow: `0 0 8px color-mix(in srgb, ${p.color} 50%, transparent)`, flexShrink: 0 }} />
            <strong style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.9)" }}>{p.name}</strong>
          </div>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "8px" }}>{p.role}</p>
          <a href={`mailto:${p.email}`} style={{ fontSize: "12.5px", fontWeight: 700, color: p.color, textDecoration: "none" }}>{p.email} →</a>
        </div>
      ))}
      <div style={{ marginTop: "8px", padding: "12px", borderRadius: "12px", background: `rgba(227,179,65,0.08)`, textAlign: "center" }}>
        <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>For select engagements, advisory, and speaking</span>
      </div>
    </div>
  );

  /* ─── SOCIAL ─── */
  const renderSocial = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#34d399" }}>
        <div className="phone-header-badge">Follow the work</div>
        <h3 className="phone-header-title">Social</h3>
        <p className="phone-header-sub">Insights, builds, and breakdowns</p>
      </div>
      <div className="tab-app-grid">
        {SOCIAL_DATA.map((s) => {
          const Icon = s.icon;
          return (
            <a key={s.label} className="tab-app-btn" style={{ "--cat-color": s.color }} href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" aria-label={s.label}>
              <div className="tab-app-icon"><Icon size={20} aria-hidden /></div>
              <span className="tab-app-label">{s.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );

  /* ─── GALLERY ─── */
  const renderGallery = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#f472b6" }}>
        <div className="phone-header-badge">Portfolio Gallery · {GALLERY_DATA.length} Projects</div>
        <h3 className="phone-header-title">Visual Archive</h3>
        <p className="phone-header-sub">Live platforms, frameworks, and delivered work</p>
      </div>
      <div className="photo-gallery-shell">
        <div className="photo-gallery-frame">
          {GALLERY_DATA.map((photo, index) => (
            <figure key={photo.src} className={`photo-gallery-slide ${index === gallerySlide ? "photo-gallery-slide--active" : ""}`}>
              <img src={photo.src} alt={photo.alt} className="photo-gallery-image" loading={index === 0 ? "eager" : "lazy"} />
              <figcaption className="photo-gallery-caption">
                <div className="gallery-caption-top">
                  <span>{photo.subtitle}</span>
                  <span className="gallery-status-pill" style={{ color: photo.statusColor, background: `color-mix(in srgb, ${photo.statusColor} 14%, transparent)`, border: `1px solid color-mix(in srgb, ${photo.statusColor} 26%, transparent)` }}>{photo.status}</span>
                </div>
                <strong>{photo.title}</strong>
              </figcaption>
            </figure>
          ))}
          <button type="button" className="photo-gallery-nav photo-gallery-nav--left" onClick={() => setGallerySlide((c) => c === 0 ? GALLERY_DATA.length - 1 : c - 1)} aria-label="Previous"><ChevronLeft size={16} aria-hidden /></button>
          <button type="button" className="photo-gallery-nav photo-gallery-nav--right" onClick={() => setGallerySlide((c) => (c + 1) % GALLERY_DATA.length)} aria-label="Next"><ChevronRight size={16} aria-hidden /></button>
        </div>
        <div className="photo-gallery-progress">
          {GALLERY_DATA.map((photo, index) => (
            <button key={photo.src} type="button" onClick={() => setGallerySlide(index)} className={`photo-gallery-dot ${index === gallerySlide ? "photo-gallery-dot--active" : ""}`} aria-label={`Show ${photo.title}`} />
          ))}
        </div>
      </div>
      <div className="phone-section-label">Gallery Notes</div>
      <div className="photo-gallery-info">
        <ImageIcon size={15} aria-hidden />
        <p>Add or replace images inside the <span>/public/gallery</span> folder, then update the gallery data array with the new image path.</p>
      </div>
    </div>
  );

  /* ─── SYSTEM INFO ─── */
  const renderSystemInfo = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#38bdf8" }}>
        <div className="phone-header-badge">{SYSTEM_INFO_DATA.header.badge}</div>
        <h3 className="phone-header-title">{SYSTEM_INFO_DATA.header.title}</h3>
        <p className="phone-header-sub">{SYSTEM_INFO_DATA.header.subtitle}</p>
      </div>
      <p className="phone-overview-text">{SYSTEM_INFO_DATA.overview}</p>
      <div className="system-device-card">
        <div className="system-device-icon"><ServerCog size={22} aria-hidden /></div>
        <div><div className="system-device-name">SufianOS Interface</div><div className="system-device-meta">Hero UI · Interactive tablet shell · v1.0</div></div>
      </div>
      <div className="phone-section-label">Technology Stack</div>
      <div className="system-spec-list">
        {SYSTEM_INFO_DATA.specs.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="system-spec-card" style={{ "--spec-color": item.color }}>
              <div className="system-spec-icon"><Icon size={16} aria-hidden /></div>
              <div className="system-spec-content">
                <div className="system-spec-top"><span>{item.label}</span><strong>{item.value}</strong></div>
                <p>{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="phone-section-label">Architecture Notes</div>
      <div className="system-architecture-list">
        {SYSTEM_INFO_DATA.architecture.map((item, index) => (
          <div key={item} className="system-architecture-item">
            <span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );

  /* ─── SKILLS (new from Golden) ─── */
  const renderSkills = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">Core Capabilities</div>
        <h3 className="phone-header-title">Skills</h3>
        <p className="phone-header-sub">The integrated skill stack</p>
      </div>
      {[
        { tier: "Core Mastery", items: ["Technical SEO Architecture","AI SEO Strategy (GEO / AEO)","Content Architecture & 8K+ Depth","LIONXE™ Framework Design","Next.js + Sanity CMS Platforms"] },
        { tier: "Expert",       items: ["Deep Research & Enterprise Auditing","Prompt Architecture & AI Workflows","Keyword Research & Topical Authority","AI-Augmented Web Engineering"] },
        { tier: "Proficient",   items: ["Social Media Strategy","Affiliate & Monetization Design","Visual Design & AI Image Gen"] },
      ].map((group) => (
        <div key={group.tier} style={{ marginBottom: "16px" }}>
          <h4 className="phone-section-label" style={{ color: "var(--accent)" }}>{group.tier}</h4>
          {group.items.map((s) => (
            <div key={s} style={{ padding: "10px 14px", marginBottom: "6px", borderRadius: "10px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.82)" }}>{s}</div>
          ))}
        </div>
      ))}
      <a href="/skills" style={{ display: "block", textAlign: "center", padding: "12px", borderRadius: "12px", background: `rgba(227,179,65,0.12)`, color: GOLD, fontWeight: 700, fontSize: "13px", textDecoration: "none", marginTop: "8px" }}>View Full Skill Tree →</a>
    </div>
  );

  /* ─── GULF VISION (new from Golden) ─── */
  const renderGulfVision = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": GOLD }}>
        <div className="phone-header-badge">Strategic Direction</div>
        <h3 className="phone-header-title">Gulf Vision</h3>
        <p className="phone-header-sub">Enterprise positioning for Dubai, UAE & GCC</p>
      </div>
      <div style={{ margin: "0 0 16px", padding: "16px", borderRadius: "14px", background: `linear-gradient(145deg, rgba(227,179,65,0.08), rgba(77,123,255,0.04))`, border: `1px solid rgba(227,179,65,0.15)` }}>
        <span style={{ fontSize: "10px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: "rgba(255,255,255,0.4)" }}>The Five-Layer System</span>
        <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "10px" }}>
          {["Engineering","Search","Content","Trust","Business"].map((layer, i) => (
            <div key={layer} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: `${100 - i * 10}%`, height: "28px", borderRadius: "8px", background: `linear-gradient(90deg, color-mix(in srgb, var(--accent) ${55 - i * 8}%, transparent), transparent)`, display: "flex", alignItems: "center", paddingLeft: "12px" }}>
                <span style={{ fontSize: "11px", fontWeight: 800, color: "rgba(255,255,255,0.75)" }}>{layer}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p style={{ fontSize: "13px", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", marginBottom: "14px" }}>Positioning for enterprise environments where technical SEO, AI search visibility, digital architecture, and authority engineering operate at scale.</p>
      {[
        { label: "Target Markets", value: "Dubai · Abu Dhabi · Saudi Arabia · GCC",              icon: "🌍" },
        { label: "Positioning",    value: "Growth Systems Architect — not a task-level hire",     icon: "◆"  },
        { label: "Value Fit",      value: "Enterprise digital growth, AI adoption, search architecture", icon: "→" },
        { label: "Applied Framework",value:"LIONXE™ — audit-grade quality standard, enterprise-proven",icon: "◇"},
      ].map((item) => (
        <div key={item.label} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "11px 12px", marginBottom: "7px", borderRadius: "11px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <span style={{ fontSize: "14px", lineHeight: 1 }}>{item.icon}</span>
          <div>
            <span style={{ fontSize: "10.5px", fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{item.label}</span>
            <div style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.82)", marginTop: "3px" }}>{item.value}</div>
          </div>
        </div>
      ))}
    </div>
  );

  /* ─── SETTINGS ─── */
  const renderSettings = () => (
    <div className="phone-view-inner">
      <div className="phone-header" style={{ "--hdr-color": "#94a3b8" }}>
        <div className="phone-header-badge">Control Center</div>
        <h3 className="phone-header-title">Settings</h3>
        <p className="phone-header-sub">Wallpaper, accent theme &amp; system status</p>
      </div>
      <div className="phone-section-label">Wallpaper</div>
      <div className="settings-wallpaper-grid">
        {WALLPAPERS.map((w, i) => (
          <button key={w.id} className={`settings-wall-swatch ${wallpaper === i ? "settings-wall-swatch--active" : ""}`}
            onClick={() => { setWallpaper(i); triggerIsland("wallpaper", w.name, 1800); }}
            aria-label={`Wallpaper: ${w.name}`} style={{ "--swatch-accent": w.accent }}>
            <div className="settings-wall-preview" style={{ background: w.gradient }} />
            <span className="settings-wall-name">{w.name}</span>
            {wallpaper === i && <Check size={11} className="settings-wall-check" aria-hidden />}
          </button>
        ))}
      </div>
      <div className="phone-section-label">System Status</div>
      <p className="settings-hint">Live state of the ecosystem this interface runs on. The identity is locked — by design.</p>
      <div className="settings-status-grid">
        {ECOSYSTEM_STATUS.map((s) => (
          <div key={s.label} className="settings-status-row">
            <span className={`settings-status-dot settings-status-dot--${s.state}`} aria-hidden />
            <span className="settings-status-label">{s.label}</span>
            <strong className="settings-status-value">{s.value}</strong>
          </div>
        ))}
      </div>
      <div className="phone-section-label">Accent Theme</div>
      <p className="settings-hint">Royal Gold is the signature. Try a secondary accent — it resets to gold on your next visit.</p>
      <div className="settings-accent-grid">
        {ACCENT_THEMES.map((theme) => (
          <button key={theme.value} className={`settings-accent-btn ${accent === theme.value ? "settings-accent-btn--active" : ""}`}
            onClick={() => changeAccent(theme.value, theme.name)} aria-label={`Set accent to ${theme.name}`} style={{ "--th-color": theme.value }}>
            <span className="settings-accent-dot" style={{ background: theme.value }} />
            <span className="settings-accent-name">{theme.name}</span>
            {accent === theme.value && <Check size={12} aria-hidden style={{ color: theme.value, marginLeft: "auto" }} />}
          </button>
        ))}
      </div>
      <div className="phone-section-label">Interface Info</div>
      <div className="settings-info-grid">
        <div className="settings-info-row"><span>Version</span><strong>v1.0</strong></div>
        <div className="settings-info-row"><span>Apps</span><strong>{PHONE_CATEGORIES.length}</strong></div>
        <div className="settings-info-row"><span>Framework</span><strong>LIONXE™</strong></div>
        <div className="settings-info-row"><span>Built with</span><strong>Next.js 14</strong></div>
      </div>
    </div>
  );

  const islandColor = {
    certified: "#2FB07A",
    rejected:  "#D45A5A",
    quote:     GOLD,
    wallpaper: WALLPAPERS[wallpaper].accent,
    accent:    accent,
    idle:      "rgba(255,255,255,0.15)",
  }[islandState] || "rgba(255,255,255,0.15)";

  /* ═════════════════════════════════════════════════════════════════════
     RENDER
     ═════════════════════════════════════════════════════════════════════ */

  return (
          <div ref={rootRef} className={`tablet-shell ${!isVisible ? "tablet-offscreen" : ""}`} role="region" aria-label="Interactive portfolio explorer">
            <div className="tablet-frame">
              <div className="tablet-glare" aria-hidden />
              <div className="tablet-cam" aria-hidden>
                <div className={`dynamic-island dynamic-island--${islandState}`} style={{ "--island-color": islandColor }} aria-live="polite" aria-atomic="true">
                  <span className="dynamic-island-dot" />
                  {islandState !== "idle" && islandMessage && (<span className="dynamic-island-text">{islandMessage}</span>)}
                </div>
              </div>
              <div className="tablet-status" aria-hidden>
                <StatusClock />
                <span className="tablet-status-host">sufianmustafa.com</span>
                <span className="tablet-status-icons"><Wifi size={12} /> <BatteryFull size={13} /></span>
              </div>
              <div className="tablet-screen">
                <div className="tablet-wallpaper" style={{ background: WALLPAPERS[wallpaper].gradient }} aria-hidden />
                <div className={`phone-content ${switchAnim ? "phone-content--switching" : ""}`}>{renderPhoneContent()}</div>
                <div className="tablet-screen-fade" aria-hidden />
                <div className="tablet-dock" role="tablist" aria-label="Sections">
                  <button className={`tablet-dock-btn ${!activeCategory ? "tablet-dock-btn--active" : ""}`} style={{ "--tab-color": "var(--accent)" }} onClick={() => navigatePhone(null)} onKeyDown={(e) => dockKey(e, () => navigatePhone(null))} role="tab" aria-selected={!activeCategory} aria-label="Home"><Home size={17} aria-hidden /></button>
                  {PHONE_CATEGORIES.slice(0, 5).map((cat) => {
                    const Icon = cat.icon;
                    return (<button key={cat.id} className={`tablet-dock-btn ${activeCategory === cat.id ? "tablet-dock-btn--active" : ""}`} style={{ "--tab-color": cat.color }} onClick={() => navigatePhone(cat.id)} onKeyDown={(e) => dockKey(e, () => navigatePhone(cat.id))} role="tab" aria-selected={activeCategory === cat.id} aria-label={cat.label}><Icon size={17} aria-hidden /></button>);
                  })}
                  <button className={`tablet-dock-btn ${activeCategory === "settings" ? "tablet-dock-btn--active" : "tablet-dock-btn--wall"}`} style={{ "--tab-color": "#94a3b8" }} onClick={() => navigatePhone("settings")} aria-label="Open settings"><Settings size={17} aria-hidden /></button>
                </div>
              </div>
            </div>
            <button className="tablet-home-bar" onClick={() => navigatePhone(null)} aria-label="Go to home screen" />
          </div>
  );
});

export default TabletMockup;