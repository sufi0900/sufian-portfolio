// components/Hero/index.jsx
"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
} from "react";
import dynamic from "next/dynamic";
import {
  ArrowUpRight,
  ChevronRight,
  ChevronRightCircle,
  Globe,
  Shield,
  Users,
  Mail,
   Menu,
  X,
} from "lucide-react";
import { NAV_LINKS, ROLES, ACCENT_THEMES } from "./heroData";
import ParticleField from "./ParticleField";
import "./hero.css";

/* PERF: the tablet mockup is the heaviest, least essential (purely
   decorative/interactive) part of this page. Loading it with next/dynamic
   and ssr:false puts it in its own JS chunk, separate from this file — and
   below, it's only ever rendered when isDesktop is true, so on mobile that
   chunk is never even requested. */
const TabletMockup = dynamic(() => import("./TabletMockup"), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  const sectionRef   = useRef(null);
  const rafRef       = useRef(null);
  const roleTrackRef = useRef(null);
  const lastInteractionRef = useRef(0);
  const mobileQueryRef = useRef(null);
  const tabletRef     = useRef(null);
const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [accent, setAccent] = useState(ACCENT_THEMES[0].value);
  const accentInk = useMemo(
    () => (ACCENT_THEMES.find((t) => t.value === accent) || ACCENT_THEMES[0]).ink,
    [accent]
  );

  const [roleIndex,    setRoleIndex]    = useState(0);
  const [roleVisible,  setRoleVisible]  = useState(true);
  const [roleDragging, setRoleDragging] = useState(false);
  const [mounted,      setMounted]      = useState(false);

  useEffect(() => { const t = setTimeout(() => setMounted(true), 80); return () => clearTimeout(t); }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Date.now() - lastInteractionRef.current < 4000) return;
      setRoleVisible(false);
      setTimeout(() => { setRoleIndex((i) => (i + 1) % ROLES.length); setRoleVisible(true); }, 320);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  /* PERF: real device-class detection, not just a CSS breakpoint — this is
     what lets the tablet mockup below go fully unmounted on mobile instead
     of merely hidden. */
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    setIsDesktop(mql.matches);
    const onChange = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  /* PERF: pauses the continuous CSS animations (rings, CTA shimmer) via the
     "hero-offscreen" class the instant the hero scrolls out of view, and
     resumes them the instant it's back — see hero.css. */
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(([entry]) => setIsHeroVisible(entry.isIntersecting), { threshold: 0.05 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* PERF: mobileQueryRef caches the media query instead of re-querying
     matchMedia on every single pointermove event. */
  useEffect(() => {
    mobileQueryRef.current = window.matchMedia("(max-width: 768px)");
  }, []);

  /* PERF: spotlight no longer goes through React state. Writing
     "--spotlight-x/y" straight onto the section DOM node via ref lets the
     browser update just that CSS custom property on every animation frame,
     instead of re-rendering (and re-diffing) the entire Hero tree on every
     mouse move — this was the main source of scroll/hover jank. */
  const handlePointerMove = useCallback((e) => {
    if (mobileQueryRef.current?.matches) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      section.style.setProperty("--spotlight-x", `${x}%`);
      section.style.setProperty("--spotlight-y", `${y}%`);
    });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => { el.removeEventListener("pointermove", handlePointerMove); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [handlePointerMove]);

  const setRoleFromClientX = useCallback((clientX) => {
    const track = roleTrackRef.current;
    if (!track) return;
    const rect = track.getBoundingClientRect();
    const pad = 10;
    const usable = rect.width - pad * 2;
    const ratio = Math.min(1, Math.max(0, (clientX - rect.left - pad) / usable));
    const idx = Math.min(ROLES.length - 1, Math.round(ratio * (ROLES.length - 1)));
    setRoleIndex(idx); setRoleVisible(true);
  }, []);

  const onRolePointerDown = useCallback((e) => { lastInteractionRef.current = Date.now(); setRoleDragging(true); setRoleFromClientX(e.clientX); e.currentTarget.setPointerCapture?.(e.pointerId); }, [setRoleFromClientX]);
  const onRolePointerMove = useCallback((e) => { if (!roleDragging) return; lastInteractionRef.current = Date.now(); setRoleFromClientX(e.clientX); }, [roleDragging, setRoleFromClientX]);
  const onRolePointerUp   = useCallback(() => setRoleDragging(false), []);

  const cssVars = useMemo(
    () => ({
      "--accent":      accent,
      "--accent-ink":  accentInk,
      "--spotlight-x": "50%",
      "--spotlight-y": "40%",
      "--role-color":  ROLES[roleIndex].color,
    }),
    [accent, accentInk, roleIndex]
  );

  const currentRole = ROLES[roleIndex];
  const RoleIcon    = currentRole.icon;
  const rolePos     = roleIndex / (ROLES.length - 1);

  /* Bridges the accent-swatch row below to the tablet's own dynamic
     island, purely a visual flourish — degrades gracefully (no-op) when
     the tablet isn't mounted, i.e. on mobile. */
  const changeAccent = useCallback((value, name) => {
    setAccent(value);
    tabletRef.current?.triggerIsland("accent", name, 1600);
  }, []);


  return (
    <section
      ref={sectionRef}
      style={cssVars}
      aria-label="Sufian Mustafa — Growth Systems Architect"
      className={`hero-root relative isolate min-h-[740px] flex-col overflow-hidden bg-[#f6f3ea] px-4 text-slate-950 dark:bg-[#040c1e] dark:text-white sm:px-6 lg:px-8 ${!isHeroVisible ? "hero-offscreen" : ""}`}
    >
      <ParticleField accent={accent} isDesktop={isDesktop} />

      {/* Grid lines */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(176,127,26,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(176,127,26,0.06)_1px,transparent_1px)] bg-[size:52px_52px] dark:bg-[linear-gradient(to_right,rgba(227,179,65,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(227,179,65,0.07)_1px,transparent_1px)]" />

      {/* Spotlight */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500" style={{ background: `radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), color-mix(in srgb, var(--accent) 18%, transparent), transparent 65%)` }} />

      {/* Glow blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-0 z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl" style={{ background: `radial-gradient(circle, color-mix(in srgb, var(--accent) 22%, transparent), transparent 68%)` }} />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-20 right-0 z-0 h-[350px] w-[350px] rounded-full blur-3xl" style={{ background: `radial-gradient(circle, rgba(227,179,65,0.10), transparent 70%)` }} />

      {/* FIX: Restored 3 animated rings (previous version design) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <svg viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute h-[900px] w-[900px] max-w-none opacity-40 dark:opacity-60">
          <circle cx="450" cy="450" r="380" stroke="var(--accent)" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="6 18" className="ring-spin-cw-slow" />
          <circle cx="450" cy="450" r="290" stroke="var(--accent)" strokeOpacity="0.18" strokeWidth="1" strokeDasharray="3 11" className="ring-spin-ccw" />
          <circle cx="450" cy="450" r="200" stroke="var(--accent)" strokeOpacity="0.10" strokeWidth="1" strokeDasharray="8 20" className="ring-spin-cw" />
          <polygon points="450,80 820,450 450,820 80,450" stroke="var(--accent)" strokeOpacity="0.08" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* HEADER */}
 {/* HEADER */}
<header className="relative z-20 mx-auto flex w-full max-w-7xl shrink-0 items-center justify-between py-4">
  <a href="/" className="group flex items-center gap-2.5" aria-label="Sufian Mustafa — Home">
    <span className="grid h-9 w-9 place-items-center rounded-xl shadow-lg" style={{ background: "var(--accent)", color: "var(--accent-ink)", boxShadow: "0 0 24px color-mix(in srgb, var(--accent) 50%, transparent)" }}><span className="text-[15px] font-black">SM</span></span>
    <span className="text-[15px] font-black tracking-tight text-slate-900 dark:text-white">Sufian {""} <span style={{ color: "var(--accent)" }}>Mustafa</span></span>
  </a>
  <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
    {NAV_LINKS.map((l) => (<a key={l.label} href={l.href} className="rounded-lg px-3.5 py-2 text-[13.5px] font-semibold text-slate-600 transition-colors hover:bg-slate-900/5 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white">{l.label}</a>))}
  </nav>
  <a href="/contact" className="hidden items-center gap-1.5 rounded-xl px-4 py-2 text-[13.5px] font-bold transition-all hover:-translate-y-0.5 md:inline-flex" style={{ background: "var(--accent)", color: "var(--accent-ink)", boxShadow: "0 8px 28px color-mix(in srgb, var(--accent) 38%, transparent)" }}>Select Engagements <ArrowUpRight size={15} aria-hidden /></a>

  {/* Mobile menu toggle — the nav and CTA above are md:flex only */}
  <button
    type="button"
    onClick={() => setMobileNavOpen((v) => !v)}
    className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-700 transition-colors hover:bg-slate-900/5 dark:border-white/15 dark:text-slate-200 dark:hover:bg-white/10 md:hidden"
    aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
    aria-expanded={mobileNavOpen}
    aria-controls="mobile-nav-panel"
  >
    {mobileNavOpen ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
  </button>
</header>

{/* MOBILE NAV PANEL */}
{mobileNavOpen && (
  <div
    id="mobile-nav-panel"
    className="relative z-20 mx-auto mb-2 flex w-full max-w-7xl flex-col gap-1 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-[#0a1224]/95 md:hidden"
  >
    {NAV_LINKS.map((l) => (
      <a
        key={l.label}
        href={l.href}
        onClick={() => setMobileNavOpen(false)}
        className="rounded-lg px-3.5 py-2.5 text-[14px] font-semibold text-slate-700 transition-colors hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10"
      >
        {l.label}
      </a>
    ))}

    <a
      href="/contact"
      onClick={() => setMobileNavOpen(false)}
      className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-2.5 text-[13.5px] font-bold"
      style={{ background: "var(--accent)", color: "var(--accent-ink)" }}
    >
      Select Engagements <ArrowUpRight size={15} aria-hidden />
    </a>
  </div>
)}

      {/* MAIN GRID */}
      <div className={`relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 overflow-hidden py-2 transition-all duration-700 ease-out lg:grid-cols-[1.05fr_0.95fr] ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>

        {/* LEFT COLUMN */}
        <div className="flex max-h-full flex-col justify-center overflow-y-auto py-2 lg:overflow-visible">

          {/* Badge */}
          <div className="hero-fade-in mb-5 inline-flex w-fit items-center gap-2.5 rounded-full border border-[var(--accent)]/30 bg-white/80 px-4 py-1.5 text-[12.5px] font-semibold text-slate-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.07] dark:text-blue-100" style={{ animationDelay: "0ms" }}>
            <span className="relative flex h-2.5 w-2.5 shrink-0"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--accent)]" /></span>
            LIONXE™ Creator · Founder, DoItWithAI.tools · Growth Systems Architect
          </div>

          {/* H1 */}
          <h1 className="hero-fade-in max-w-2xl text-balance font-black tracking-[-0.04em] text-slate-950 dark:text-white" style={{ fontSize: "clamp(2.3rem, 4.6vw, 3.7rem)", lineHeight: 1.05, animationDelay: "70ms" }}>
            Sufian Mustafa architects{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(120deg, color-mix(in srgb, var(--accent) 80%, #F2CC6B) 0%, var(--accent) 50%, color-mix(in srgb, var(--accent) 70%, #C9952C) 100%)` }}>growth systems</span>
              <span aria-hidden className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full blur-sm" style={{ background: `color-mix(in srgb, var(--accent) 40%, transparent)` }} />
            </span>{" "}
            that compound.
          </h1>

          {/* Title with pencil-underline effect */}
          <h2 className="hero-fade-in mt-3 relative inline-block text-[1.05rem] font-black uppercase tracking-[0.12em]" style={{ color: "var(--accent)", margin: 0, animationDelay: "100ms" }}>
            Growth Systems Architect
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden style={{ height: "6px" }}>
              <path d="M2 5.5C30 2.5 60 6 100 3.5C140 1 170 5.5 198 3" stroke="var(--accent)" strokeWidth="1.8" strokeLinecap="round" opacity="0.55" />
              <path d="M4 6.5C35 4 65 7 105 4.5C145 2 172 6 196 4.2" stroke="var(--accent)" strokeWidth="1.2" strokeLinecap="round" opacity="0.35" />
            </svg>
          </h2>

          {/* Description */}
          <p className="hero-fade-in mt-3 max-w-xl text-[1.05rem] leading-[1.7] text-slate-600 dark:text-slate-300" style={{ animationDelay: "150ms" }}>
A systems-focused architect combining search visibility, AI-augmented engineering, structured content, and the <strong className="font-bold" style={{ color: "var(--accent)" }}>LIONXE™</strong> framework to build scalable digital ecosystems engineered for long-term authority, trust, and sustainable growth.        

          </p>

          {/* ROLE SWITCHER */}
          <div className="hero-fade-in mt-6" style={{ animationDelay: "240ms" }}>
            <div className="mb-2.5 flex items-center gap-3">
              <span className="h-px w-8" style={{ background: "var(--accent)" }} />
              <span className="text-[11px] font-black uppercase tracking-[0.26em] text-slate-500 dark:text-slate-400">Expertise · drag to navigate</span>
            </div>
            <div className="role-card relative overflow-hidden rounded-[1.4rem] border p-[1px] shadow-2xl" style={{ borderColor: `color-mix(in srgb, var(--role-color) 35%, transparent)`, background: `linear-gradient(135deg, color-mix(in srgb, var(--role-color) 30%, transparent), transparent 60%)` }}>
              <div className="flex min-h-[72px] items-center gap-4 rounded-[calc(1.4rem-1px)] border border-slate-200/70 bg-white/85 px-5 py-3.5 backdrop-blur-2xl dark:border-white/10 dark:bg-[#060f28]/85">
                <div className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-white shadow-lg transition-all duration-500" style={{ background: "var(--role-color)", boxShadow: `0 0 36px ${currentRole.color}88` }}><RoleIcon className="h-5 w-5" aria-hidden /></div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10.5px] font-black uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Sufian Mustafa as</p>
                  <div className="relative mt-0.5 h-[34px] overflow-hidden">
                    <span key={roleIndex} className="block font-black tracking-[-0.03em] text-slate-950 dark:text-white" style={{ fontSize: "clamp(1.05rem, 2.2vw, 1.45rem)", transform: roleVisible ? "translateY(0)" : "translateY(14px)", opacity: roleVisible ? 1 : 0, filter: roleVisible ? "blur(0)" : "blur(6px)", transition: "all 0.32s cubic-bezier(0.2,0.9,0.3,1)" }}>{currentRole.label}</span>
                  </div>
                </div>
              </div>
            </div>
            <div ref={roleTrackRef}
              className={`role-track group relative mt-3 cursor-grab touch-none select-none ${roleDragging ? "cursor-grabbing" : ""}`}
              style={{ "--pos": rolePos }}
              onPointerDown={onRolePointerDown} onPointerMove={onRolePointerMove} onPointerUp={onRolePointerUp} onPointerCancel={onRolePointerUp}
              role="slider" aria-label="Role selector" aria-valuemin={0} aria-valuemax={ROLES.length - 1} aria-valuenow={roleIndex} aria-valuetext={currentRole.label} tabIndex={0}
              onKeyDown={(e) => { if (e.key === "ArrowRight") { lastInteractionRef.current = Date.now(); setRoleIndex((i) => Math.min(ROLES.length - 1, i + 1)); } if (e.key === "ArrowLeft") { lastInteractionRef.current = Date.now(); setRoleIndex((i) => Math.max(0, i - 1)); } }}>
              <div className="role-track-rail" />
              <div className="role-track-fill" style={{ background: "var(--role-color)" }} />
              <div className="role-track-thumb" aria-hidden="true" style={{ background: "var(--role-color)", boxShadow: `0 0 0 4px ${currentRole.color}33, 0 4px 14px ${currentRole.color}66` }}><RoleIcon size={12} aria-hidden /></div>
              <div className="role-track-nodes">
                {ROLES.map((r, i) => (<button key={i} className="role-track-node" onClick={() => { lastInteractionRef.current = Date.now(); setRoleIndex(i); setRoleVisible(true); }} aria-label={`Select ${r.label}`}><span className="role-track-node-dot" style={{ background: i <= roleIndex ? r.color : "color-mix(in srgb, var(--accent) 25%, transparent)" }} /></button>))}
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-fade-in mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap" style={{ animationDelay: "320ms" }}>
            <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta--lionxe group">
              <span className="hero-cta-bg" /><span className="hero-cta-icon"><Shield size={16} aria-hidden /></span>LIONXE™ Framework<ArrowUpRight size={15} className="hero-cta-arrow" aria-hidden />
            </a>
            <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer" className="hero-cta hero-cta--doit group">
              <span className="hero-cta-bg" /><span className="hero-cta-icon"><Globe size={16} aria-hidden /></span>DoItWithAI.tools<ArrowUpRight size={15} className="hero-cta-arrow" aria-hidden />
            </a>
            <a href="/about" className="hero-cta hero-cta--about group">
              <span className="hero-cta-bg" /><span className="hero-cta-icon"><Users size={16} aria-hidden /></span>About Sufian<ChevronRight size={15} className="hero-cta-arrow-r" aria-hidden />
            </a>
            <a href="/contact" className="hero-cta hero-cta--contact group">
              <span className="hero-cta-bg" /><span className="hero-cta-icon"><Mail size={16} aria-hidden /></span>Get in Touch<ChevronRightCircle size={15} className="hero-cta-arrow-r" aria-hidden />
            </a>
          </div>

          {/* Secondary expertise tags */}
          {/* <div className="hero-fade-in mt-4 flex flex-wrap gap-2" style={{ animationDelay: "340ms" }}>
            {["SEO Strategist","AI SEO Specialist","Content Architect","AI-Augmented Web Developer","Technical SEO Engineer","Digital Marketing Architect"].map((tag) => (
              <span key={tag} className="rounded-full px-3 py-1 text-[11px] font-bold" style={{ background: "color-mix(in srgb, var(--accent) 12%, transparent)", color: "var(--accent)", border: "1px solid color-mix(in srgb, var(--accent) 22%, transparent)" }}>{tag}</span>
            ))}
          </div> */}

          {/* Theme dots */}
          <div className="hero-fade-in mt-6 flex items-center gap-2.5" style={{ animationDelay: "400ms" }}>
            <span className="text-[10.5px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Theme</span>
            {ACCENT_THEMES.map((theme, i) => (
              <span key={theme.value} className="relative">
                <button onClick={() => changeAccent(theme.value, theme.name)} aria-label={`Set accent to ${theme.name}`} className="h-7 w-7 rounded-full border-2 p-0.5 transition-all duration-300 hover:scale-110" style={{ borderColor: accent === theme.value ? theme.value : "transparent", boxShadow: accent === theme.value ? `0 0 12px ${theme.value}80` : "none" }}>
                  <span className="block h-full w-full rounded-full" style={{ background: theme.value }} />
                </button>
                {i === 0 && <span className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 text-[7.5px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-500">Default</span>}
              </span>
            ))}
          </div>
        </div>


        {/* RIGHT — TABLET
            PERF: only mounted on desktop. On mobile this component (and
            its dynamically-imported chunk) is never rendered at all —
            not just CSS-hidden — so its JS is never downloaded, parsed,
            or executed on mobile devices. */}
        {isDesktop && (
          <div className="hero-fade-in bottom-16 relative hidden items-center justify-center lg:flex" style={{ animationDelay: "220ms" }}>
            <div aria-hidden className="absolute -inset-10 rounded-[3.5rem] blur-3xl opacity-50" style={{ background: `radial-gradient(circle at 50% 40%, color-mix(in srgb, var(--accent) 28%, transparent), transparent 65%)` }} />
            <TabletMockup ref={tabletRef} accent={accent} onAccentChange={setAccent} />
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer className="relative z-20 mx-auto flex w-full max-w-7xl shrink-0 flex-col items-center justify-between gap-2 border-t border-slate-200/60 py-3.5 text-[12.5px] text-slate-500 dark:border-white/10 dark:text-slate-400 sm:flex-row">
        <span>© {new Date().getFullYear()} Sufian Mustafa · Built to the LIONXE™ Standard.</span>
        <div className="flex items-center gap-5">
          <a href="/privacy" className="font-semibold transition-colors hover:text-slate-900 dark:hover:text-white">Privacy</a>
          <a href="/terms"   className="font-semibold transition-colors hover:text-slate-900 dark:hover:text-white">Terms</a>
          <span className="hidden items-center gap-1.5 sm:flex">Built with <span style={{ color: "var(--accent)" }}>Next.js</span></span>
        </div>
      </footer>
    </section>
  );
}