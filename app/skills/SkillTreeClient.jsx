"use client";

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";
import { Zap, Network, Table, Play, Pause, ChevronDown, Plus, Minus, RotateCcw, GraduationCap } from "lucide-react";
import "./skilltree.css";

// Static Data and Geometry logic imports
import { ACCENT, CROWN, BRANCHES, ROOTS, BG_BOLTS } from "./skillData";
import { makeAspenLeaf, buildLayout, clamp } from "./treeMath";

// Dynamic Code Splitting Strategy (Bulletproof Imports)
const SkillModal = dynamic(() => import("./SkillModal").then((mod) => mod.default || mod.SkillModal), { ssr: false });
const SkillTable = dynamic(() => import("./SkillTable").then((mod) => mod.default || mod.SkillTable), { ssr: false });
const SkillMobileStack = dynamic(() => import("./SkillMobileStack").then((mod) => mod.default || mod.SkillMobileStack), { ssr: false });
const AspenLeafCard = dynamic(() => import("./AspenLeafCard").then((mod) => mod.default || mod.AspenLeafCard), { ssr: false });

export default function SkillTreeClient() {
  const viewportRef = useRef(null);
  const canvasRef = useRef(null);

  const [W, setW] = useState(2400); 
  const [isMobile, setIsMobile] = useState(false);
  const [selected, setSelected] = useState(null);
  const [viewMode, setViewMode] = useState("tree");
  const [activeTier, setActiveTier] = useState(null);
  const [animPaused, setAnimPaused] = useState(false);
  
  const [revealTree, setRevealTree] = useState(false);

  const MIN_ZOOM = 0.13, MAX_ZOOM = 2.2;
  const cam = useRef({ x: 0, y: 0, zoom: 0.5 });
  const rafPending = useRef(false);
  const hudTimer = useRef(null);
  const L_totalH = useRef(3520);

  const [hudZoom, setHudZoom] = useState(0.5);
  const [isDragging, setIsDragging] = useState(false);
  const lastMouse = useRef({ x: 0, y: 0 });

  const vpSize = useCallback(() => {
    const vp = viewportRef.current;
    if (!vp) return { w: 1200, h: 740 };
    const r = vp.getBoundingClientRect();
    return { w: r.width, h: r.height };
  }, []);

  const clampPan = useCallback((x, y, zoom) => {
    const { w: vw, h: vh } = vpSize();
    const sw = W * zoom, sh = L_totalH.current * zoom;
    const over = 90;
    let minX, maxX, minY, maxY;
    if (sw <= vw) { const c = (vw - sw) / 2; minX = c - over; maxX = c + over; }
    else { minX = vw - sw - over; maxX = over; }
    if (sh <= vh) { const c = (vh - sh) / 2; minY = c - over; maxY = c + over; }
    else { minY = vh - sh - over; maxY = over; }
    return { x: clamp(x, minX, maxX), y: clamp(y, minY, maxY) };
  }, [W, vpSize]);

  const flushCamera = useCallback(() => {
    rafPending.current = false;
    const canvas = canvasRef.current;
    if (canvas) {
      const { x, y, zoom } = cam.current;
      canvas.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${zoom})`;
    }
    clearTimeout(hudTimer.current);
    hudTimer.current = setTimeout(() => setHudZoom(cam.current.zoom), 80);
  }, []);

  const scheduleFlush = useCallback(() => {
    if (rafPending.current) return;
    rafPending.current = true;
    requestAnimationFrame(flushCamera);
  }, [flushCamera]);

  useEffect(() => {
    const updateDimensions = () => {
      const screenW = window.innerWidth;
      setIsMobile(screenW < 980);
      setW(screenW < 980 ? screenW : 2400);
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const L = useMemo(() => buildLayout(W), [W]);

  useEffect(() => { L_totalH.current = L.totalH; }, [L]);

  const tabularSkills = useMemo(() => {
    const matrix = [];
    CROWN.forEach(s => matrix.push({ ...s, branchName: "Apex Identity", color: ACCENT }));
    BRANCHES.forEach(b => {
      b.skills.forEach(s => matrix.push({ ...s, branchName: b.name, color: b.color }));
    });
    ROOTS.forEach(s => matrix.push({ ...s, branchName: "Foundations", color: "#9A8B6E" }));
    return matrix;
  }, []);

  const frameTop = useCallback(() => {
    const { w: vw } = vpSize();
    const padX = 40, padTop = 10; 
    const zoom = clamp((vw - padX * 2) / W, MIN_ZOOM, MAX_ZOOM);
    const x = vw / 2 - (W / 2) * zoom;
    const y = padTop;
    cam.current = { ...clampPan(x, y, zoom), zoom };
    setHudZoom(zoom);
    scheduleFlush();
  }, [W, vpSize, clampPan, scheduleFlush]);

  const frameFit = useCallback(() => {
    const { w: vw, h: vh } = vpSize();
    const pad = 48;
    const zoom = clamp(Math.min((vw - pad * 2) / W, (vh - pad * 2) / L_totalH.current), MIN_ZOOM, MAX_ZOOM);
    const x = vw / 2 - (W / 2) * zoom;
    const y = vh / 2 - (L_totalH.current / 2) * zoom;
    cam.current = { ...clampPan(x, y, zoom), zoom };
    setHudZoom(zoom);
    scheduleFlush();
  }, [W, vpSize, clampPan, scheduleFlush]);

  useEffect(() => {
    if (viewMode === "tree" && !isMobile) {
      const t = setTimeout(frameTop, 60);
      const onResize = () => frameTop();
      window.addEventListener("resize", onResize);
      return () => { clearTimeout(t); window.removeEventListener("resize", onResize); };
    }
  }, [viewMode, isMobile, frameTop]);

  useEffect(() => {
    const vp = viewportRef.current;
    if (!vp || isMobile || viewMode !== "tree") return;

    const onWheel = (e) => {
      e.preventDefault();
      const rect = vp.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      if (!e.ctrlKey && Math.abs(e.deltaX) > 0 && Math.abs(e.deltaX) >= Math.abs(e.deltaY) * 0.4) {
        const next = clampPan(cam.current.x - e.deltaX, cam.current.y - e.deltaY, cam.current.zoom);
        cam.current.x = next.x; cam.current.y = next.y;
        scheduleFlush();
        return;
      }

      const rawDelta = e.deltaMode === 1 ? e.deltaY * 24 : e.deltaY;
      const factor = Math.pow(0.9985, rawDelta);
      const z0 = cam.current.zoom;
      const z1 = clamp(z0 * factor, MIN_ZOOM, MAX_ZOOM);
      if (z1 === z0) return;

      const px = (mx - cam.current.x) / z0;
      const py = (my - cam.current.y) / z0;
      const clamped = clampPan(mx - px * z1, my - py * z1, z1);
      cam.current = { x: clamped.x, y: clamped.y, zoom: z1 };
      scheduleFlush();
    };

    vp.addEventListener("wheel", onWheel, { passive: false });
    return () => vp.removeEventListener("wheel", onWheel);
  }, [isMobile, viewMode, scheduleFlush, clampPan]);

  const applyHudZoom = useCallback((dir) => {
    const { w: vw, h: vh } = vpSize();
    const mx = vw / 2, my = vh / 2;
    const z0 = cam.current.zoom;
    const z1 = clamp(z0 * (dir > 0 ? 1.2 : 1 / 1.2), MIN_ZOOM, MAX_ZOOM);
    const px = (mx - cam.current.x) / z0;
    const py = (my - cam.current.y) / z0;
    const clamped = clampPan(mx - px * z1, my - py * z1, z1);
    cam.current = { x: clamped.x, y: clamped.y, zoom: z1 };
    setHudZoom(z1);
    scheduleFlush();
  }, [vpSize, clampPan, scheduleFlush]);

  useEffect(() => {
    if (revealTree) return; // Prevent loop resets
    if (isMobile || viewMode !== "tree") return;
    const container = viewportRef.current;
    if (!container) return;
    const t = setTimeout(() => {
      setRevealTree(true);
      container.querySelectorAll(".vt-reveal").forEach((el) => el.classList.add("vt-in"));
    }, 80);
    return () => clearTimeout(t);
  }, [isMobile, viewMode, revealTree]);

  const handleMouseDown = (e) => {
    if (isMobile || viewMode !== "tree") return;
    if (e.target.closest("button") || e.target.closest("aside") || e.target.closest(".ot-hud")) return;
    setIsDragging(true);
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e) => {
    if (!isDragging || isMobile || viewMode !== "tree") return;
    e.preventDefault();
    const dx = e.clientX - lastMouse.current.x;
    const dy = e.clientY - lastMouse.current.y;
    const next = clampPan(cam.current.x + dx, cam.current.y + dy, cam.current.zoom);
    cam.current.x = next.x; cam.current.y = next.y;
    scheduleFlush();
    lastMouse.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  const selectSkill = useCallback((node, color) =>
    setSelected({ kind: "skill", ...node, color: color || node.color || ACCENT }), []);
  const selectBranch = useCallback((b) =>
    setSelected({ kind: "branch", name: b.name, blurb: b.blurb, color: b.color, tier: b.tier, skills: b.skills }), []);

  const renderTree = () => {
    return (
      <div key="view-tree" className={`ot-viewport ${isDragging ? "is-grabbing" : "is-grab"}`} ref={viewportRef} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUpOrLeave} onMouseLeave={handleMouseUpOrLeave}>
        <div ref={canvasRef} className="ot-canvas" style={{ width: W, height: L.totalH }}>
          <div className="ot-board-grid" />

          <svg className="ot-svg" width={W} height={L.totalH} viewBox={`0 0 ${W} ${L.totalH}`} aria-hidden>
            <defs>
              <linearGradient id="ot-trunk" x1="0" y1="1" x2="0" y2="0"><stop offset="0%" stopColor="#0a0705" /><stop offset="45%" stopColor="#1a130d" /><stop offset="100%" stopColor="#241a12" /></linearGradient>
              <linearGradient id="ot-trunk-x" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#000" stopOpacity="0.6" /><stop offset="34%" stopColor="#000" stopOpacity="0" /><stop offset="52%" stopColor="#5a4636" stopOpacity="0.42" /><stop offset="66%" stopColor="#000" stopOpacity="0" /><stop offset="90%" stopColor="#000" stopOpacity="0.5" /><stop offset="100%" stopColor="#E3B341" stopOpacity="0.18" /></linearGradient>
              <linearGradient id="ot-limb" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#4a3729" /><stop offset="42%" stopColor="#2a1e15" /><stop offset="100%" stopColor="#0d0907" /></linearGradient>
              <linearGradient id="ot-root" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#241a12" /><stop offset="100%" stopColor="#070504" /></linearGradient>
              <linearGradient id="ot-ground" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="transparent" /><stop offset="45%" stopColor="#070a14" stopOpacity="0.85" /><stop offset="100%" stopColor="#04060d" /></linearGradient>
            </defs>

            <rect x="0" y={L.baseY - 24} width={W} height={L.totalH - L.baseY + 48} fill="url(#ot-ground)" />

            {L.roots.map((r, i) => (
              <g key={i}>
                <path className="ot-root" d={r.path} />
                <path className="ot-root-hi" d={r.highlight} />
                <path className="ot-strike-root" d={r.path} fill="none" />
              </g>
            ))}

            <path className="ot-trunk" d={L.trunkPath} />
            <path className="ot-trunk-shade" d={L.trunkPath} />
            {L.barks.map((d, i) => <path key={i} className="ot-bark" d={d} />)}

            {L.trunkFlows.map((d, i) => <path key={`fl-${i}`} className={`ot-trunk-flow ot-trunk-flow--${i}`} d={d} />)}
            {L.trunkBolts.map((d, i) => <path key={`tb-${i}`} className={`ot-trunk-bolt ot-trunk-bolt--${i}`} d={d} />)}
            {L.trunkFlows.map((d, i) => <path key={`ts-${i}`} className="ot-strike-trunk" d={d} />)}

            {L.boughs.map((b, i) => (
              <g key={b.name} style={{ "--limb": b.color, "--bi": i }}>
                {b.twigs.map((tw, j) => (
                  <g key={j}>
                    <path className={`ot-twig ${j === 0 ? "ot-twig--main" : ""}`} d={tw} />
                    <path className={`ot-twig-hi ${j === 0 ? "ot-twig-hi--main" : ""}`} d={tw} />
                    <path className={`ot-twig-current ${j === 0 ? "ot-twig-current--main" : ""}`} style={{ "--limb": b.color, animationDelay: `${(i + j) * 0.3}s` }} d={tw} stroke={b.color} />
                  </g>
                ))}
                <circle className="ot-twig-bud" cx={b.connect.x} cy={b.connect.y} r="10" />
                <circle className="ot-twig-bud-ring" cx={b.connect.x} cy={b.connect.y} r="15" stroke={b.color} style={{ "--limb": b.color }} />
                <path className="ot-bough" d={b.path} />
                <path className="ot-bough-hi" d={b.highlight} />
                <path className="ot-bough-edge" d={b.path} />
                <path className="ot-bough-glow" style={{ "--limb": b.color, animationDelay: `${i * 0.4}s` }} d={b.path} fill="none" stroke={b.color} />
                <path className="ot-current" style={{ "--limb": b.color, animationDelay: `${i * 0.5}s` }} d={b.path} fill="none" stroke={b.color} strokeWidth="2.4" strokeDasharray="2 30" />
                <path className="ot-current" style={{ "--limb": b.color, animationDelay: `${i * 0.5}s` }} d={b.path} fill="none" stroke={b.color} strokeWidth="2.4" strokeDasharray="2 30" />
                <path className="ot-strike-bough" style={{ animationDelay: `${i * 0.03}s` }} d={b.path} fill="none" />
                <path className="ot-strike-bough" style={{ animationDelay: `${i * 0.03}s` }} d={b.mainTwig} fill="none" />
                <circle className="ot-junction" style={{ "--limb": b.color, animationDelay: `${i * 0.45}s` }} cx={b.attach.x} cy={b.attach.y} r="6" fill={b.color} />
              </g>
            ))}

            <path className="ot-strike-crown" d={L.crownBolt} fill="none" />
            <path className="ot-strike-crown ot-strike-crown--core" d={L.crownBolt} fill="none" />
            
            <g transform={`translate(${L.cx}, ${L.topY + 15})`} fill="none" stroke={ACCENT} strokeWidth="1.5" strokeOpacity="0.35">
              <path d={makeAspenLeaf(160, 100, 1)} transform="translate(-100, -80) rotate(-25)" style={{filter: `drop-shadow(0 0 5px ${ACCENT}55)`}} />
              <path d={makeAspenLeaf(140, 90, 2)} transform="translate(10, -90) rotate(15)" style={{filter: `drop-shadow(0 0 5px ${ACCENT}55)`}} />
              <path d={makeAspenLeaf(180, 110, 3)} transform="translate(-60, -110) rotate(-5)" strokeOpacity="0.5" strokeWidth="2" style={{filter: `drop-shadow(0 0 8px ${ACCENT}88)`}} />
              <path d={makeAspenLeaf(160, 100, 1)} transform="translate(-100, -80) rotate(-25)" fill={ACCENT} fillOpacity="0.05" />
              <path d={makeAspenLeaf(140, 90, 2)} transform="translate(10, -90) rotate(15)" fill={ACCENT} fillOpacity="0.05" />
              <path d={makeAspenLeaf(180, 110, 3)} transform="translate(-60, -110) rotate(-5)" fill={ACCENT} fillOpacity="0.1" />
            </g>
          </svg>

          <div className="ot-canopy-dynamic" style={{ left: L.cx, top: L.topY - 335 }}>
            <svg width={400} height={350} style={{ position: "absolute", inset: 0, zIndex: -1, overflow: "visible" }}>
              <defs>
                <radialGradient id="crown-glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor={ACCENT} stopOpacity="0.22" /><stop offset="70%" stopColor={ACCENT} stopOpacity="0.05" /><stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>
              </defs>
              <g transform="translate(0, 15)">
                <path d={makeAspenLeaf(400, 260, 42)} fill="url(#crown-glow)" stroke={ACCENT} strokeWidth="2.5" strokeOpacity="0.9" style={{filter: `drop-shadow(0 0 12px ${ACCENT}88)`}} />
                <path className="al-strike-fill" d={makeAspenLeaf(400, 260, 42)} fill={ACCENT} />
                <path className="al-strike-edge" d={makeAspenLeaf(400, 260, 42)} fill="none" stroke="#eaf6ff" />
                <path d={makeAspenLeaf(380, 240, 42.5)} transform="translate(10, 10)" fill="none" stroke={ACCENT} strokeWidth="1" strokeOpacity="0.4" strokeDasharray="4 8" />
                <circle cx={200} cy={130} r={75} fill="rgba(0,0,0,0.6)" stroke={ACCENT} strokeWidth="1.5" strokeOpacity="0.6" />
                <circle cx={200} cy={130} r={75} fill="none" stroke={ACCENT} strokeWidth="2" strokeOpacity="0.9" strokeDasharray="4 12" className="al-center-ring" />
                <path d="M 200 260 Q 200 300 200 320" fill="none" stroke={ACCENT} strokeWidth="6" strokeLinecap="round" strokeOpacity="0.8" style={{filter: `drop-shadow(0 0 5px ${ACCENT})`}} />
              </g>
            </svg>

            <div className={`vt-reveal ${revealTree ? "vt-in" : ""}`} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "-10px" }}>
              <span className="ot-apex-identity-label"><Zap size={14} aria-hidden /> Apex Identity</span>
              {CROWN.map((c) => (
                <button key={c.id} className="vt-filterable tier-core ot-apex-btn" onClick={() => selectSkill(c, ACCENT)}>
                  {/* 🚀 CRITICAL OVERRIDE: Wrapped inside native h3 structure */}
                  <h3 className="al-node-text" style={{ fontSize: "18px" }}>{c.name}</h3>
                </button>
              ))}
            </div>
          </div>

          {L.boughs.map((b, i) => {
            const LW = b.leafLW, LH = b.leafLH;
            const top = b.connect.y - LH / 2;
            const left = b.side < 0 ? b.connect.x - LW * 0.97 : b.connect.x - LW * 0.03;
            return (
              <div key={b.name} className={`ot-leaf-anchor ot-leaf-anchor--${b.side < 0 ? "left" : "right"}`} style={{ top, left }}>
                <AspenLeafCard branch={b} index={i} onSelectBranch={selectBranch} onSelectSkill={selectSkill} />
              </div>
            );
          })}

          <div className="ot-roots-label vt-reveal" style={{ top: L.baseY + 12, left: L.cx }}><GraduationCap size={14} aria-hidden /> Foundations</div>

          {ROOTS.map((r, i) => {
            const rootIndex = [1, 2, 4, 5][i] ?? i;
            const node = L.roots[rootIndex];
            if (!node) return null;
            const isLeft = node.dx < 0;
            return (
              <button key={r.id} className={`ot-root-pill vt-filterable ${isLeft ? "ot-root-pill--left" : "ot-root-pill--right"} tier-${r.tier} vt-reveal ${revealTree ? "vt-in" : ""}`} style={{ top: node.tip.y, left: node.tip.x, "--limb": "#9A8B6E" }} onClick={() => selectSkill({ ...r, branch: "Foundations" }, "#9A8B6E")} title={r.name}>
                <span className="ot-pill-dot" />
                {/* 🚀 CRITICAL OVERRIDE: Wrapped inside native h3 structure */}
                <h3 className="mt-name-text" style={{ fontSize: "14px", fontWeight: "700" }}>{r.name}</h3>
              </button>
            );
          })}
        </div>

        <div className="ot-hud">
          <button className="ot-hud-btn" onClick={() => applyHudZoom(-1)} title="Zoom out"><Minus size={15} /></button>
          <span className="ot-hud-label">{Math.round(hudZoom * 100)}%</span>
          <button className="ot-hud-btn" onClick={() => applyHudZoom(1)} title="Zoom in"><Plus size={15} /></button>
          <div className="ot-hud-divider" />
          <button className="ot-hud-btn ot-hud-btn--text" onClick={frameFit} title="Fit whole tree"><Network size={13} /> <span>Fit</span></button>
          <button className="ot-hud-btn ot-hud-btn--text" onClick={frameTop} title="Back to top"><RotateCcw size={13} /> <span>Top</span></button>
        </div>
      </div>
    );
  };

  return (
    <section className={`vt-root ${activeTier ? `vt-filtering vt-filter-${activeTier}` : ""} ${animPaused ? "vt-paused" : ""}`} style={{ "--accent": ACCENT }} aria-label="Skills">
      <div className="vt-sky" aria-hidden>
        <div className="vt-fog" />
        <svg className="vt-bolts" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          {BG_BOLTS.map((d, i) => <path key={i} className={`vt-bolt vt-bolt--${i}`} d={d} />)}
        </svg>
        <div className="vt-flash" /><div className="vt-flash vt-flash--ambient" />
      </div>

      <header className="vt-header">
        <div className="vt-eyebrow"><Zap size={13} aria-hidden /> The Skill Matrix</div>
        
        {/* 🚀 FIXED H1: Premium Inner-page style using clean em-dash context */}
        <h1 className="vt-title" style={{ fontSize: "clamp(32px, 4vw, 46px)", fontWeight: "900" }}>
      The Comprehensive Skill Matrix & Engineering Capabilities of Sufian Mustafa
        </h1>
        
        {/* 🚀 FIXED H2: Acts as the semantic structural description layer */}
        <h2 className="vt-sub" style={{ margin: "14px auto 0", fontSize: "16px", fontWeight: "400", opacity: 0.75, maxWidth: "720px" }}>
Roots in code, a trunk of strategy, branches of masterclass optimization engineering.

        </h2>
        
        {!isMobile && (
          <div className="vt-toggle-row">
            <button className={`vt-toggle-btn ${viewMode === "tree" ? "active" : ""}`} onClick={() => setViewMode("tree")}><Network size={14} /> <span>Interactive Tree Map</span></button>
            <button className={`vt-toggle-btn ${viewMode === "table" ? "active" : ""}`} onClick={() => setViewMode("table")}><Table size={14} /> <span>Structured Matrix View</span></button>
            <button className="vt-toggle-btn" onClick={() => setAnimPaused(v => !v)} aria-label={animPaused ? "Resume" : "Pause"}>{animPaused ? <Play size={16} /> : <Pause size={16} />}</button>
          </div>
        )}

        {viewMode === "tree" && !isMobile && (
          <div className="vt-scroll-hint" aria-hidden><span>Scroll to zoom · Drag to move · "Fit" for the full tree</span><ChevronDown size={16} className="vt-bounce" /></div>
        )}
      </header>

      <div className="vt-tree">
        <div className="vt-stage">
          {isMobile ? (
            <SkillMobileStack selectSkill={selectSkill} selectBranch={selectBranch} />
          ) : viewMode === "tree" ? (
            renderTree()
          ) : (
            <SkillTable tabularSkills={tabularSkills} selectSkill={selectSkill} />
          )}
        </div>
      </div>

      {selected && <SkillModal selected={selected} setSelected={setSelected} selectSkill={selectSkill} />}
    </section>
  );
}