// app/skills/AspenLeafCard.jsx
import React, { useMemo, useState, useEffect } from "react";
import { Zap, ChevronRight } from "lucide-react";
import { BRANCH_ICONS } from "./skillData";
import { makeAspenLeaf, getNodePositions, makeVeinPath } from "./treeMath";

export const AspenLeafCard = React.memo(function AspenLeafCard({ branch, index, onSelectBranch, onSelectSkill }) {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsRevealed(true), 50);
    return () => clearTimeout(t);
  }, []);

  const n = branch.skills.length;
  const LW = Math.max(680, 580 + n * 28);
  const LH = 380;
  const cx = LW / 2, cy = LH / 2;
  const seed = index + 1;
  const leafPath = useMemo(() => makeAspenLeaf(LW, LH, seed), [LW, LH, seed]);
  const nodePositions = useMemo(() => getNodePositions(n, LW, LH), [n, LW, LH]);
  const veinPaths = useMemo(() => nodePositions.map((np) => makeVeinPath(cx, cy, np.x, np.y)), [nodePositions, cx, cy]);
  
  const Icon = BRANCH_ICONS[branch.name] || Zap;
  const leafId = `leaf-clip-${index}`;
  const glowId = `leaf-glow-${index}`;

  const side = branch.side ?? 1;
  const rx = LW * 0.47;
  const innerVx = side < 0 ? cx + rx : cx - rx;
  const innerVy = cy;
  const petioleOut = side < 0 ? 56 : -56;
  const petiolePath = `M ${innerVx} ${innerVy} Q ${innerVx + petioleOut * 0.6} ${innerVy - 4} ${innerVx + petioleOut} ${innerVy - 2}`;

  const midribEndX = side < 0 ? cx + 52 : cx - 52;
  const midribPath = `M ${innerVx} ${innerVy} Q ${(innerVx + midribEndX) / 2} ${cy - 14} ${midribEndX} ${cy}`;

  return (
    <div className={`al-wrapper vt-reveal ${isRevealed ? "vt-in" : ""}`} style={{ "--limb": branch.color, "--lw": `${LW}px`, "--lh": `${LH}px` }}>
      <div className="al-leaf-container" style={{ width: LW, height: LH + 34 }}>
        <svg className="al-svg" width={LW} height={LH + 34} viewBox={`0 0 ${LW} ${LH + 34}`} aria-hidden style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "visible" }}>
          <defs>
            <clipPath id={leafId}><path d={leafPath} /></clipPath>
            <radialGradient id={glowId} cx="50%" cy="48%" r="55%">
              <stop offset="0%" stopColor={branch.color} stopOpacity="0.18" />
              <stop offset="60%" stopColor={branch.color} stopOpacity="0.07" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
          </defs>

          <path d={leafPath} fill={`url(#${glowId})`} stroke={branch.color} strokeWidth="2.2" strokeOpacity="0.75" style={{ filter: `drop-shadow(0 0 10px ${branch.color}55)` }} />
          <path className="al-strike-fill" d={leafPath} fill={branch.color} style={{ animationDelay: `${index * 0.03}s` }} />
          <path className="al-strike-edge" d={leafPath} fill="none" stroke="#eaf6ff" style={{ animationDelay: `${index * 0.03}s` }} />
          <path d={makeAspenLeaf(LW - 18, LH - 16, seed + 0.5)} transform="translate(9, 8)" fill="none" stroke={branch.color} strokeWidth="0.5" strokeOpacity="0.22" strokeDasharray="4 8" />

          <path d={petiolePath} fill="none" stroke="#2e2115" strokeWidth="9" strokeLinecap="round" style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" }} />
          <path d={midribPath} fill="none" stroke="#33251733" strokeWidth="7" strokeLinecap="round" />
          <path d={midribPath} fill="none" stroke="#7a5c40" strokeWidth="2.4" strokeOpacity="0.55" strokeLinecap="round" />
          <path d={midribPath} fill="none" stroke={branch.color} strokeWidth="2.2" strokeOpacity="0.9" strokeLinecap="round" strokeDasharray="4 18" className="al-vein-current" style={{ filter: `drop-shadow(0 0 3px ${branch.color})` }} />
          <path d={petiolePath} fill="none" stroke={branch.color} strokeWidth="2.4" strokeOpacity="0.9" strokeLinecap="round" strokeDasharray="3 14" className="al-vein-current" style={{ filter: `drop-shadow(0 0 3px ${branch.color})` }} />
          <circle cx={innerVx} cy={innerVy} r="9" fill={branch.color} fillOpacity="0.9" style={{ filter: `drop-shadow(0 0 8px ${branch.color})` }} />
          <circle cx={innerVx} cy={innerVy} r="4" fill="#eaf6ff" fillOpacity="0.85" />

          {veinPaths.map((vp, vi) => (
            <g key={vi}>
              <path d={vp} fill="none" stroke={branch.color} strokeWidth="1.1" strokeOpacity="0.28" strokeLinecap="round" />
              <path d={vp} fill="none" stroke={branch.color} strokeWidth="1.8" strokeOpacity="0.85" strokeLinecap="round" strokeDasharray="6 22" className="al-vein-current" style={{ animationDelay: `${vi * 0.38}s`, filter: `drop-shadow(0 0 3px ${branch.color})` }} />
              <path d={vp} fill="none" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.55" strokeLinecap="round" strokeDasharray="3 30" className="al-vein-spark" style={{ animationDelay: `${vi * 0.38 + 0.2}s` }} />
            </g>
          ))}

          <circle cx={cx} cy={cy} r={52} fill="rgba(0,0,0,0.6)" stroke={branch.color} strokeWidth="1.2" strokeOpacity="0.5" />
          <circle cx={cx} cy={cy} r={52} fill="none" stroke={branch.color} strokeWidth="1.8" strokeOpacity="0.9" strokeDasharray="3 9" className="al-center-ring" />

          {nodePositions.map((np, ni) => (
            <g key={ni}>
              <circle cx={np.x} cy={np.y} r={20} fill="none" stroke={branch.color} strokeWidth="1" strokeOpacity="0.5" className="al-node-pulse" style={{ animationDelay: `${ni * 0.45}s` }} />
              <circle cx={np.x} cy={np.y} r={13} fill="rgba(4,8,22,0.85)" stroke={branch.color} strokeWidth="1.4" strokeOpacity="0.75" />
              <circle cx={np.x} cy={np.y} r={4.5} fill={branch.skills[ni]?.tier === "core" ? "#eaf2ff" : branch.color} style={{ filter: `drop-shadow(0 0 6px ${branch.color})` }} />
            </g>
          ))}
        </svg>

        <button className="al-center-label" style={{ left: cx, top: cy }} onClick={(e) => { e.stopPropagation(); onSelectBranch(branch); }}>
          <span className="al-center-icon"><Icon size={15} aria-hidden /></span>
          {/* 🚀 FIXED: Main central domain capability wrapped securely in H3 */}
          <h3 className="al-center-name">{branch.name}</h3>
          <ChevronRight size={12} className="al-center-chevron" aria-hidden />
        </button>

        {nodePositions.map((np, ni) => {
          const skill = branch.skills[ni];
          if (!skill) return null;
          const isLeft = np.x < cx;
          return (
            <button key={skill.id} className={`al-node-label vt-filterable ${isLeft ? "al-node-label--left" : "al-node-label--right"} tier-${skill.tier}`} style={{ left: np.x, top: np.y, "--limb": branch.color }} onClick={(e) => { e.stopPropagation(); onSelectSkill({ ...skill, branch: branch.name }, branch.color); }} title={skill.name}>
              {/* 🚀 FIXED: Individual floating competencies explicitly converted to H4 markup */}
              <h4 className="al-node-text">{skill.name}</h4>
            </button>
          );
        })}
      </div>
      <p className="al-blurb">{branch.blurb}</p>
    </div>
  );
});

export default AspenLeafCard;