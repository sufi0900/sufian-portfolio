// app/report/chapter-10/SkillBenefitMatrix.tsx
//
// Page-local component: four-column matrix comparing Skill Growth, the
// Company's Desired Benefit, What the Company Deserves (the gap), and
// Budget Impact, department by department. Distinct from the DataTable
// above it (which only shows skill trajectory) and from any prior chart,
// since this introduces three additional evaluative dimensions.

import React from "react";

type Row = {
  dept: string;
  skillGrowth: "Growing" | "Flat" | "Stagnant";
  companyBenefit: string;
  deservedGap: string;
  budgetImpact: "Recovering" | "Underperforming" | "Total Loss";
};

const ROWS: Row[] = [
  {
    dept: "Design & Development",
    skillGrowth: "Growing",
    companyBenefit: "More websites shipped",
    deservedGap: "No portfolio-grade authority brand, no flagship client",
    budgetImpact: "Underperforming",
  },
  {
    dept: "Video Editing",
    skillGrowth: "Flat",
    companyBenefit: "Volume of videos delivered",
    deservedGap: "Engagement without conversion or revenue",
    budgetImpact: "Underperforming",
  },
  {
    dept: "Social Media",
    skillGrowth: "Flat",
    companyBenefit: "Accounts kept active",
    deservedGap: "Minimal outreach, far below invested spend",
    budgetImpact: "Underperforming",
  },
  {
    dept: "Content Writing",
    skillGrowth: "Stagnant",
    companyBenefit: "Pages published on schedule",
    deservedGap: "No rankings, no qualified traffic",
    budgetImpact: "Total Loss",
  },
  {
    dept: "SEO",
    skillGrowth: "Stagnant",
    companyBenefit: "Keyword sheet rows completed",
    deservedGap: "No authority, no backlinks, no competitive position",
    budgetImpact: "Total Loss",
  },
];

const TONE: Record<Row["skillGrowth"], string> = {
  Growing: "#15803d",
  Flat: "#b7791f",
  Stagnant: "var(--red-flag)",
};

const BUDGET_TONE: Record<Row["budgetImpact"], string> = {
  Recovering: "#15803d",
  Underperforming: "#b7791f",
  "Total Loss": "var(--red-flag)",
};

export function SkillBenefitMatrix({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)" }}
    >
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      <div className="overflow-x-auto" style={{ background: "white" }}>
        <table className="w-full text-xs" style={{ borderCollapse: "collapse", minWidth: "640px" }}>
          <thead>
            <tr style={{ background: "var(--pale-blue)" }}>
              <th className="px-3 py-3 text-left font-bold" style={{ color: "var(--navy)", borderBottom: "2px solid var(--border-grey)" }}>
                Department
              </th>
              <th className="px-3 py-3 text-left font-bold" style={{ color: "var(--navy)", borderBottom: "2px solid var(--border-grey)" }}>
                Skill Growth
              </th>
              <th className="px-3 py-3 text-left font-bold" style={{ color: "var(--navy)", borderBottom: "2px solid var(--border-grey)" }}>
                Company&apos;s Desired Benefit
              </th>
              <th className="px-3 py-3 text-left font-bold" style={{ color: "var(--navy)", borderBottom: "2px solid var(--border-grey)" }}>
                What the Company Deserves (The Gap)
              </th>
              <th className="px-3 py-3 text-left font-bold" style={{ color: "var(--navy)", borderBottom: "2px solid var(--border-grey)" }}>
                Budget Impact
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "white" : "var(--pale-blue)" }}>
                <td className="px-3 py-3 font-semibold" style={{ color: "var(--navy)", borderBottom: "1px solid #e5e9ef" }}>
                  {r.dept}
                </td>
                <td className="px-3 py-3" style={{ borderBottom: "1px solid #e5e9ef" }}>
                  <span
                    className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                    style={{ background: TONE[r.skillGrowth] }}
                  >
                    {r.skillGrowth}
                  </span>
                </td>
                <td className="px-3 py-3" style={{ color: "var(--text-grey)", borderBottom: "1px solid #e5e9ef" }}>
                  {r.companyBenefit}
                </td>
                <td className="px-3 py-3" style={{ color: "var(--text-grey)", borderBottom: "1px solid #e5e9ef" }}>
                  {r.deservedGap}
                </td>
                <td className="px-3 py-3" style={{ borderBottom: "1px solid #e5e9ef" }}>
                  <span
                    className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                    style={{ background: BUDGET_TONE[r.budgetImpact] }}
                  >
                    {r.budgetImpact}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t px-6 py-3" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-xs" style={{ color: "var(--text-grey)" }}>
          Every department meets its own operational target. None delivers the outcome the underlying budget was intended to produce.
        </p>
      </div>
    </div>
  );
}