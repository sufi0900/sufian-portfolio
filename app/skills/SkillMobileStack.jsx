// app/skills/SkillMobileStack.jsx
import React from "react";
import { Zap, GraduationCap } from "lucide-react";
import { CROWN, BRANCHES, ROOTS, BRANCH_ICONS, ACCENT } from "./skillData";

export default function SkillMobileStack({ selectSkill, selectBranch }) {
  return (
    <div className="vt-stack">
      {/* 👑 Apex Identity Section safely isolated into a two-row structural flow */}
      <div className="vt-stack-branch vt-stack-branch--apex" style={{ "--limb": ACCENT }}>
        <div className="vt-stack-head">
          <span className="vt-stack-icon"><Zap size={16} aria-hidden /></span>
          <span className="vt-stack-name" style={{ color: "var(--accent)" }}>★ Apex Identity</span>
        </div>
        <div className="vt-chip-wrap vt-chip-wrap--apex" style={{ marginTop: "10px" }}>
          {CROWN.map((c) => (
            <button key={c.id} className="vt-chip vt-chip--apex vt-filterable tier-core" style={{ "--limb": ACCENT }} onClick={() => selectSkill(c, ACCENT)}>
              <Zap size={11} aria-hidden />
              {/* 🚀 FIXED: Upgraded from H4 to H3 to establish a flawless mobile semantic layout */}
              <h3 className="vt-chip-text vt-stack-h3">{c.name}</h3>
            </button>
          ))}
        </div>
      </div>

      {/* Dynamic Skill Branches Matrix */}
      {BRANCHES.map((b) => {
        const Icon = BRANCH_ICONS[b.name] || Zap;
        return (
          <div key={b.name} className="vt-stack-branch" style={{ "--limb": b.color }}>
            <div className="vt-stack-head">
              <span className="vt-stack-icon"><Icon size={16} aria-hidden /></span>
              <h3 className="vt-stack-branch-title" style={{ margin: 0, padding: 0, display: "inline" }}>
                <button className="vt-stack-name vt-stack-name--btn" onClick={() => selectBranch(b)}>
                  {b.name}
                </button>
              </h3>
            </div>
            <p className="vt-stack-blurb">{b.blurb}</p>
            <div className="vt-chip-wrap">
              {b.skills.map((s) => (
                <button key={s.id} className={`vt-chip vt-filterable tier-${s.tier}`} style={{ "--limb": b.color }} onClick={() => selectSkill({ ...s, branch: b.name }, b.color)}>
                  <span className="vt-skill-dot" />
                  <h4 className="vt-chip-text">{s.name}</h4>
                </button>
              ))}
            </div>
          </div>
        );
      })}

      {/* Foundational Roots Base */}
      <div className="vt-stack-branch" style={{ "--limb": "#9A8B6E" }}>
        <div className="vt-stack-head">
          <span className="vt-stack-icon"><GraduationCap size={16} aria-hidden /></span>
          <span className="vt-stack-name">Foundations</span>
        </div>
        <div className="vt-chip-wrap">
          {ROOTS.map((r) => (
            <button key={r.id} className={`vt-chip vt-filterable tier-${r.tier}`} style={{ "--limb": "#9A8B6E" }} onClick={() => selectSkill({ ...r, branch: "Foundations" }, "#9A8B6E")}>
              <span className="vt-skill-dot" />
              <h4 className="vt-chip-text">{r.name}</h4>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}