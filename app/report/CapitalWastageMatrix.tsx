import React from "react";

interface MatrixRow {
  department: string;
  skillGrowth: { text: string; status: "growth" | "neutral" | "constrained" };
  desiredBenefit: { text: string; status: "growth" | "neutral" | "constrained" };
  companyDeserves: { text: string; status: "growth" | "neutral" | "constrained" };
  budgetImpact: { text: string; status: "growth" | "neutral" | "constrained" };
}

const MATRIX_DATA: MatrixRow[] = [
  {
    department: "Design & Development",
    skillGrowth: { text: "Isolated Growth (High volume execution)", status: "growth" },
    desiredBenefit: { text: "Met (Continuous rollout of asset quantity)", status: "growth" },
    companyDeserves: { text: "Failing (No high-authority brand traction; 1-2 clients/mo)", status: "constrained" },
    budgetImpact: { text: "Wasted Potential (Fails to convert into enterprise equity)", status: "constrained" },
  },
  {
    department: "Video Editors",
    skillGrowth: { text: "Stable (Basic tool & asset processing efficiency)", status: "neutral" },
    desiredBenefit: { text: "Met (High volume delivered to social handles)", status: "growth" },
    companyDeserves: { text: "Negligible (Near-zero revenue or channel conversions)", status: "constrained" },
    budgetImpact: { text: "Negative ROI (Hours spent do not translate to business growth)", status: "constrained" },
  },
  {
    department: "Social Media Team",
    skillGrowth: { text: "Narrow (Confined to scheduling & basic mechanics)", status: "neutral" },
    desiredBenefit: { text: "Met (Superficial management of high asset footprint)", status: "growth" },
    companyDeserves: { text: "Insufficient (Minimal leads; far below investment potential)", status: "neutral" },
    budgetImpact: { text: "High Overhead (Capital spent tracking scattered vanity metrics)", status: "constrained" },
  },
  {
    department: "Content & SEO Teams",
    skillGrowth: { text: "Stagnant (Trained on bulk uploads & process violations)", status: "constrained" },
    desiredBenefit: { text: "Unmet (No competitive edge or structural search authority)", status: "constrained" },
    companyDeserves: { text: "Complete Loss (Zero sustainable organic rankings or clean traffic)", status: "constrained" },
    budgetImpact: { text: "Absolute Waste (Total financial drain across both pipelines)", status: "constrained" },
  },
];

const STATUS_STYLES = {
  growth: { bg: "#e6f4ea", text: "#137333", border: "#ceead6", dot: "#15803d" },
  neutral: { bg: "#fef7e0", text: "#b06000", border: "#feebc8", dot: "#b7791f" },
  constrained: { bg: "#fce8e6", text: "#c5221f", border: "#fad2cf", dot: "#d93025" },
};

export function CapitalWastageMatrix({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-8 overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.06)" }}
    >
      {/* Header Band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      {/* Responsive Grid Matrix Container */}
      <div className="p-4 sm:p-6" style={{ background: "var(--pale-blue)" }}>
        <div className="flex flex-col gap-6">
          {MATRIX_DATA.map((row, idx) => (
            <div 
              key={idx} 
              className="rounded-lg border bg-white p-4 shadow-sm transition-all"
              style={{ borderColor: "var(--border-grey)" }}
            >
              {/* Department Label Row */}
              <div className="mb-3 border-b pb-2 flex items-center justify-between" style={{ borderColor: "var(--border-grey)" }}>
                <h4 className="text-sm font-bold tracking-tight uppercase" style={{ color: "var(--navy)" }}>
                  {row.department}
                </h4>
              </div>

              {/* 4-Column Metric Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Metric 1 */}
                <div className="flex flex-col justify-between p-2.5 rounded border" style={{ borderColor: "rgba(0,0,0,0.04)", background: "#fafafa" }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-grey)" }}>Skill Growth</span>
                  <div 
                    className="text-xs p-2 rounded border font-medium flex items-start gap-1.5" 
                    style={{ backgroundColor: STATUS_STYLES[row.skillGrowth.status].bg, color: STATUS_STYLES[row.skillGrowth.status].text, borderColor: STATUS_STYLES[row.skillGrowth.status].border }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full mt-1 shrink-0" style={{ backgroundColor: STATUS_STYLES[row.skillGrowth.status].dot }} />
                    <span>{row.skillGrowth.text}</span>
                  </div>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col justify-between p-2.5 rounded border" style={{ borderColor: "rgba(0,0,0,0.04)", background: "#fafafa" }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-grey)" }}>Desired Benefit</span>
                  <div 
                    className="text-xs p-2 rounded border font-medium flex items-start gap-1.5" 
                    style={{ backgroundColor: STATUS_STYLES[row.desiredBenefit.status].bg, color: STATUS_STYLES[row.desiredBenefit.status].text, borderColor: STATUS_STYLES[row.desiredBenefit.status].border }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full mt-1 shrink-0" style={{ backgroundColor: STATUS_STYLES[row.desiredBenefit.status].dot }} />
                    <span>{row.desiredBenefit.text}</span>
                  </div>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col justify-between p-2.5 rounded border" style={{ borderColor: "rgba(0,0,0,0.04)", background: "#fafafa" }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-grey)" }}>What Company Deserves</span>
                  <div 
                    className="text-xs p-2 rounded border font-medium flex items-start gap-1.5" 
                    style={{ backgroundColor: STATUS_STYLES[row.companyDeserves.status].bg, color: STATUS_STYLES[row.companyDeserves.status].text, borderColor: STATUS_STYLES[row.companyDeserves.status].border }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full mt-1 shrink-0" style={{ backgroundColor: STATUS_STYLES[row.companyDeserves.status].dot }} />
                    <span>{row.companyDeserves.text}</span>
                  </div>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col justify-between p-2.5 rounded border" style={{ borderColor: "rgba(0,0,0,0.04)", background: "#fafafa" }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider mb-2" style={{ color: "var(--text-grey)" }}>Budget & Cost Impact</span>
                  <div 
                    className="text-xs p-2 rounded border font-medium flex items-start gap-1.5" 
                    style={{ backgroundColor: STATUS_STYLES[row.budgetImpact.status].bg, color: STATUS_STYLES[row.budgetImpact.status].text, borderColor: STATUS_STYLES[row.budgetImpact.status].border }}
                  >
                    <span className="inline-block w-2 h-2 rounded-full mt-1 shrink-0" style={{ backgroundColor: STATUS_STYLES[row.budgetImpact.status].dot }} />
                    <span>{row.budgetImpact.text}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Descriptive Footnote */}
      <div className="border-t px-6 py-3" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-xs" style={{ color: "var(--text-grey)" }}>
          Cross-departmental analysis detailing how operational expenditure fails to convert volume-based activities into strategic, bottom-line corporate equity.
        </p>
      </div>
    </div>
  );
}