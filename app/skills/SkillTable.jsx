// app/skills/SkillTable.jsx
import React from "react";
import { CROWN, BRANCHES, ROOTS, ACCENT } from "./skillData";

export default function SkillTable({ selectSkill }) {
  return (
    <div className="mt-container">
      <div className="mt-table-wrapper">
        <table className="mt-table">
          <thead>
            <tr>
              <th scope="col" style={{ width: "40%" }}>Competency Asset</th>
              <th scope="col" style={{ width: "60%" }}>Strategic Keywords / Focus Hub</th>
            </tr>
          </thead>
          <tbody>
            {/* 👑 CATEGORY 1: APEX IDENTITY */}
            <tr className="mt-group-row">
              <td colSpan={2}>
                <h3 className="mt-group-header" style={{ color: ACCENT }}>
                  Apex Identity
                </h3>
              </td>
            </tr>
            {CROWN.map((skill) => (
              <tr 
                key={skill.id} 
                className={`mt-row vt-filterable tier-${skill.tier}`} 
                style={{ "--row-color": ACCENT }} 
                onClick={() => selectSkill(skill, ACCENT)}
              >
                <td className="mt-cell-name">
                  <div className="mt-name-container" style={{ paddingLeft: "16px" }}>
                    <span className="mt-branch-indicator" style={{ backgroundColor: ACCENT, marginRight: "12px", display: "inline-block" }} />
                    <h4 className="mt-name-text">{skill.name}</h4>
                  </div>
                </td>
                <td className="mt-cell-tags">
                  <div className="mt-tag-cloud">
                    {skill.tags?.map((t) => (
                      <span key={t} className="mt-tag-pill">{t}</span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}

            {/* 🌿 CATEGORY 2: STRATEGIC BRANCHES */}
            {BRANCHES.map((branch) => (
              <React.Fragment key={branch.name}>
                <tr className="mt-group-row">
                  <td colSpan={2}>
                    <h3 className="mt-group-header" style={{ color: branch.color }}>
                      {branch.name}
                    </h3>
                  </td>
                </tr>
                {branch.skills.map((skill) => (
                  <tr 
                    key={skill.id} 
                    className={`mt-row vt-filterable tier-${skill.tier}`} 
                    style={{ "--row-color": branch.color }} 
                    onClick={() => selectSkill(skill, branch.color)}
                  >
                    <td className="mt-cell-name">
                      <div className="mt-name-container" style={{ paddingLeft: "16px" }}>
                        <span className="mt-branch-indicator" style={{ backgroundColor: branch.color, marginRight: "12px", display: "inline-block" }} />
                        <h4 className="mt-name-text">{skill.name}</h4>
                      </div>
                    </td>
                    <td className="mt-cell-tags">
                      <div className="mt-tag-cloud">
                        {skill.tags?.map((t) => (
                          <span key={t} className="mt-tag-pill">{t}</span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}

            {/* ⚓ CATEGORY 3: FOUNDATIONS */}
            <tr className="mt-group-row">
              <td colSpan={2}>
                <h3 className="mt-group-header" style={{ color: "#9A8B6E" }}>
                  Foundations
                </h3>
              </td>
            </tr>
            {ROOTS.map((skill) => (
              <tr 
                key={skill.id} 
                className={`mt-row vt-filterable tier-${skill.tier}`} 
                style={{ "--row-color": "#9A8B6E" }} 
                onClick={() => selectSkill(skill, "#9A8B6E")}
              >
                <td className="mt-cell-name">
                  <div className="mt-name-container" style={{ paddingLeft: "16px" }}>
                    <span className="mt-branch-indicator" style={{ backgroundColor: "#9A8B6E", marginRight: "12px", display: "inline-block" }} />
                    <h4 className="mt-name-text">{skill.name}</h4>
                  </div>
                </td>
                <td className="mt-cell-tags">
                  <div className="mt-tag-cloud">
                    {skill.tags?.map((t) => (
                      <span key={t} className="mt-tag-pill">{t}</span>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}