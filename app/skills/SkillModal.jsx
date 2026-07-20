// SkillModal.jsx
import React from "react";
import { X, ChevronRight } from "lucide-react";
import { SKILL_EVIDENCE, ACCENT } from "./skillData";

export default function SkillModal({ selected, setSelected, selectSkill }) {
  if (!selected) return null;

  return (
    <>
      <div className="vt-modal-backdrop" onClick={() => setSelected(null)} aria-hidden />
      <div className="vt-modal" role="dialog" aria-label="Skill detail" style={{ "--limb": selected.color || ACCENT }}>
        <button className="vt-modal-close" onClick={() => setSelected(null)} aria-label="Close"><X size={18} /></button>
        
        {selected.kind === "branch" ? (
          <>
            <h2 className="vt-modal-title">{selected.name}</h2>
            <p className="vt-modal-desc">{selected.blurb}</p>
            <div className="vt-modal-divider" />
            <h3 className="vt-modal-section">Skills on this branch</h3>
            <div className="vt-modal-skill-grid">
              {selected.skills.map((s) => (
                <button key={s.id} className="vt-modal-skill-chip" onClick={() => selectSkill({ ...s, branch: selected.name }, selected.color)}>
                  <span>{s.name}</span><ChevronRight size={13} aria-hidden />
                </button>
              ))}
            </div>
          </>
        ) : (() => {
          const evidence = SKILL_EVIDENCE[selected.id] || { overview: selected.detail };
          return (
            <div className="vt-modal-content-wrap">
              <h2 className="vt-modal-title" style={{ margin: 0 }}>{selected.name}</h2>

              {evidence.overview && (
                <div className="vt-modal-block">
                  <h3 className="vt-modal-subheading">Overview</h3>
                  <p className="vt-modal-body-text">{evidence.overview}</p>
                </div>
              )}

              {evidence.whyMatters && (
                <div className="vt-modal-block">
                  <h3 className="vt-modal-subheading">Why It Matters</h3>
                  <p className="vt-modal-body-text">{evidence.whyMatters}</p>
                </div>
              )}

              {evidence.howApplied && (
                <div className="vt-modal-block">
                  <h3 className="vt-modal-subheading">How I Apply It</h3>
                  <p className="vt-modal-body-text">{evidence.howApplied}</p>
                </div>
              )}

              {evidence.evidence && (
                <div className="vt-modal-evidence-box">
                  <h3 className="vt-modal-subheading">Real Evidence</h3>
                  <p className="vt-modal-evidence-text">
                    {Array.isArray(evidence.evidence) ? (
                      <span style={{ display: "block", textAlign: "left" }}>
                        {evidence.evidence.map((line, idx) => (
                          <span key={idx} style={{ display: "block", marginBottom: "4px" }}>• {line}</span>
                        ))}
                      </span>
                    ) : (
                      evidence.evidence
                    )}
                  </p>
                </div>
              )}

              {selected.tags && (
                <div className="vt-modal-block">
                  <h3 className="vt-modal-subheading">Strategic Keywords</h3>
                  <div className="vt-modal-tags">
                    {selected.tags.map((t) => <span key={t} className="vt-modal-tag">{t}</span>)}
                  </div>
                </div>
              )}

              {evidence.related && (
                <div className="vt-modal-block">
                  <h3 className="vt-modal-subheading">Related Systems</h3>
                  <div className="vt-modal-tags">
                    {evidence.related.map((t) => <span key={t} className="vt-modal-tag">{t}</span>)}
                  </div>
                </div>
              )}

              {evidence.tech && (
                <div className="vt-modal-block">
                  <h3 className="vt-modal-subheading">Technologies Used</h3>
                  <div className="vt-modal-tags" style={{ gap: "6px" }}>
                    {evidence.tech.map((t) => <span key={t} className="vt-modal-tag" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.12)", color: "#fff" }}>{t}</span>)}
                  </div>
                </div>
              )}

              {evidence.philosophy && (
                <div className="vt-modal-philosophy">
                  <p style={{ margin: 0 }}>"{evidence.philosophy}"</p>
                </div>
              )}
            </div>
          );
        })()}
      </div>
    </>
  );
}