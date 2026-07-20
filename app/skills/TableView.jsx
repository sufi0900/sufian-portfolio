import React from 'react';

export default function TableView({ tabularSkills, selectSkill, TIER }) {
  return (
    <div key="view-table" className="mt-container">
      <div className="mt-table-wrapper">
        <table className="mt-table">
          <thead>
            <tr>
              <th scope="col">Capability Domain</th>
              <th scope="col">Competency Asset</th>
              <th scope="col">Mastery Benchmark</th>
              <th scope="col">Strategic Keywords / Focus Hub</th>
            </tr>
          </thead>
          <tbody>
            {tabularSkills.map((skill) => (
              <tr 
                key={skill.id} 
                className={`mt-row vt-filterable tier-${skill.tier}`}
                style={{ "--row-color": skill.color }}
                onClick={() => selectSkill(skill, skill.color)}
              >
                <td className="mt-cell-branch">
                  <span className="mt-branch-indicator" style={{ backgroundColor: skill.color }} />
                  {skill.branchName}
                </td>
                <td className="mt-cell-name">
                  <div className="mt-name-container">
                    <span className="mt-name-text">{skill.name}</span>
                  </div>
                </td>
                <td className="mt-cell-tier">
                  <div className="mt-tier-badge" style={{ "--badge-color": skill.color }}>
                    {TIER[skill.tier]?.label}
                  </div>
                  <div className="mt-tier-bars" aria-hidden>
                    {[1, 2, 3, 4].map((i) => (
                      <span 
                        key={i} 
                        className={`mt-bar ${i <= TIER[skill.tier]?.rank ? "mt-bar--active" : ""}`}
                        style={{ "--bar-color": skill.color }}
                      />
                    ))}
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