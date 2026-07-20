// app/report/chapter-10/ResourceMatrixChart.tsx
import React from "react";

interface MatrixChartProps {
  figureNumber: string;
  title: string;
}

export function ResourceMatrixChart({ figureNumber, title }: MatrixChartProps) {
  // Hardcoded dimensions to prevent headless browser/PDF layout engine collapse
  const svgWidth = 860;
  const svgHeight = 480;

  return (
    <div
      className="avoid-break my-8 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
        background: "white"
      }}
    >
      {/* Header Band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      {/* Structural Aspect-Ratio Wrapper */}
      <div className="flex justify-center px-4 py-6 sm:px-6" style={{ background: "var(--pale-blue)" }}>
        <div style={{ width: "100%", maxWidth: `${svgWidth}px`, aspectRatio: `${svgWidth} / ${svgHeight}`, position: "relative" }}>
          <svg
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
            width={svgWidth}
            height={svgHeight}
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            {/* Table Grid Headers */}
            <rect x="0" y="0" width={svgWidth} height="40" rx="4" fill="var(--navy)" opacity="0.05" />
            <text x="15" y="24" fontSize="11" fontWeight="800" fill="var(--navy)" textAnchor="start">DEPARTMENT</text>
            <text x="210" y="24" fontSize="11" fontWeight="800" fill="var(--navy)" textAnchor="middle">SKILL GROWTH</text>
            <text x="385" y="24" fontSize="11" fontWeight="800" fill="var(--navy)" textAnchor="middle">DESIRED BENEFIT</text>
            <text x="580" y="24" fontSize="11" fontWeight="800" fill="var(--navy)" textAnchor="middle">THE GAP (WHAT CO. DESERVES)</text>
            <text x="775" y="24" fontSize="11" fontWeight="800" fill="var(--navy)" textAnchor="middle">BUDGET IMPACT</text>

            {/* Row 1: Design & Development */}
            <g transform="translate(0, 55)">
              <rect x="0" y="0" width={svgWidth} height="90" rx="6" fill="white" stroke="var(--border-grey)" strokeWidth="1" />
              <text x="15" y="32" fontSize="12" fontWeight="700" fill="var(--navy)">Design &</text>
              <text x="15" y="48" fontSize="12" fontWeight="700" fill="var(--navy)">Development</text>
              <text x="15" y="68" fontSize="10" fill="var(--text-grey)">(5 Baseline Staff)</text>
              
              {/* Skill Growth */}
              <rect x="150" y="15" width="120" height="24" rx="12" fill="#15803d" opacity="0.15" />
              <text x="210" y="31" fontSize="11" fontWeight="700" fill="#15803d" textAnchor="middle">Moderate Growth</text>
              <text x="210" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Expanding individual technical</text>
              <text x="210" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">skills via high output</text>

              {/* Desired Benefit */}
              <rect x="325" y="15" width="120" height="24" rx="12" fill="#15803d" opacity="0.15" />
              <text x="385" y="31" fontSize="11" fontWeight="700" fill="#15803d" textAnchor="middle">Target Met</text>
              <text x="385" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Continuous rollouts and</text>
              <text x="385" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">asset creation executed</text>

              {/* The Gap */}
              <rect x="495" y="15" width="170" height="24" rx="12" fill="var(--red-flag)" opacity="0.12" />
              <text x="580" y="31" fontSize="11" fontWeight="700" fill="var(--red-flag)" textAnchor="middle">Strategic Portfolio Gap</text>
              <text x="580" y="54" fontSize="10" fill="var(--navy)" textAnchor="middle">Fails to win high-authority brands;</text>
              <text x="580" y="68" fontSize="10" fill="var(--navy)" textAnchor="middle">restricted to minor scattered assets</text>

              {/* Budget Impact */}
              <rect x="715" y="15" width="120" height="24" rx="12" fill="#b7791f" opacity="0.15" />
              <text x="775" y="31" fontSize="11" fontWeight="700" fill="#b7791f" textAnchor="middle">Low Business ROI</text>
              <text x="775" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Spends capital without</text>
              <text x="775" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">generating market value</text>
            </g>

            {/* Row 2: Video Editors */}
            <g transform="translate(0, 160)">
              <rect x="0" y="0" width={svgWidth} height="90" rx="6" fill="white" stroke="var(--border-grey)" strokeWidth="1" />
              <text x="15" y="40" fontSize="12" fontWeight="700" fill="var(--navy)">Video Editors</text>
              <text x="15" y="58" fontSize="10" fill="var(--text-grey)">(2 Baseline Staff)</text>

              {/* Skill Growth */}
              <rect x="150" y="15" width="120" height="24" rx="12" fill="#b7791f" opacity="0.15" />
              <text x="210" y="31" fontSize="11" fontWeight="700" fill="#b7791f" textAnchor="middle">Mixed / Flat</text>
              <text x="210" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Basic editing tools active;</text>
              <text x="210" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">lacks narrative synthesis</text>

              {/* Desired Benefit */}
              <rect x="325" y="15" width="120" height="24" rx="12" fill="#15803d" opacity="0.15" />
              <text x="385" y="31" fontSize="11" fontWeight="700" fill="#15803d" textAnchor="middle">Target Met</text>
              <text x="385" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Maintains strict volume of</text>
              <text x="385" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">AI-assisted raw rendering</text>

              {/* The Gap */}
              <rect x="495" y="15" width="170" height="24" rx="12" fill="var(--red-flag)" opacity="0.12" />
              <text x="580" y="31" fontSize="11" fontWeight="700" fill="var(--red-flag)" textAnchor="middle">Conversion Failure</text>
              <text x="580" y="54" fontSize="10" fill="var(--navy)" textAnchor="middle">Social vanity metrics acquired;</text>
              <text x="580" y="68" fontSize="10" fill="var(--navy)" textAnchor="middle">meaningful revenue is negligible</text>

              {/* Budget Impact */}
              <rect x="715" y="15" width="120" height="24" rx="12" fill="#b7791f" opacity="0.15" />
              <text x="775" y="31" fontSize="11" fontWeight="700" fill="#b7791f" textAnchor="middle">Stagnant Return</text>
              <text x="775" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Production does not</text>
              <text x="775" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">translate into pipeline pipeline</text>
            </g>

            {/* Row 3: Social Media Team */}
            <g transform="translate(0, 265)">
              <rect x="0" y="0" width={svgWidth} height="90" rx="6" fill="white" stroke="var(--border-grey)" strokeWidth="1" />
              <text x="15" y="35" fontSize="12" fontWeight="700" fill="var(--navy)">Social Media</text>
              <text x="15" y="50" fontSize="12" fontWeight="700" fill="var(--navy)">Managers</text>
              <text x="15" y="68" fontSize="10" fill="var(--text-grey)">(3 Baseline Staff)</text>

              {/* Skill Growth */}
              <rect x="150" y="15" width="120" height="24" rx="12" fill="#b7791f" opacity="0.15" />
              <text x="210" y="31" fontSize="11" fontWeight="700" fill="#b7791f" textAnchor="middle">Narrow Development</text>
              <text x="210" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Trapped within scheduling</text>
              <text x="210" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">mechanics and raw uploads</text>

              {/* Desired Benefit */}
              <rect x="325" y="15" width="120" height="24" rx="12" fill="#15803d" opacity="0.15" />
              <text x="385" y="31" fontSize="11" fontWeight="700" fill="#15803d" textAnchor="middle">Target Met</text>
              <text x="385" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Sustains scheduling across</text>
              <text x="385" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">261 fragmented profiles</text>

              {/* The Gap */}
              <rect x="495" y="15" width="170" height="24" rx="12" fill="var(--red-flag)" opacity="0.12" />
              <text x="580" y="31" fontSize="11" fontWeight="700" fill="var(--red-flag)" textAnchor="middle">Brand Fragmentation</text>
              <text x="580" y="54" fontSize="10" fill="var(--navy)" textAnchor="middle">Minimal outreach leads generated;</text>
              <text x="580" y="68" fontSize="10" fill="var(--navy)" textAnchor="middle">far below standard capital return</text>

              {/* Budget Impact */}
              <rect x="715" y="15" width="120" height="24" rx="12" fill="#b7791f" opacity="0.15" />
              <text x="775" y="31" fontSize="11" fontWeight="700" fill="#b7791f" textAnchor="middle">Suboptimal Spend</text>
              <text x="775" y="54" fontSize="10" fill="var(--text-grey)" textAnchor="middle">Investment yields scattered</text>
              <text x="775" y="68" fontSize="10" fill="var(--text-grey)" textAnchor="middle">handles over true authority</text>
            </g>

            {/* Row 4: Content & SEO Teams */}
            <g transform="translate(0, 370)">
              <rect x="0" y="0" width={svgWidth} height="90" rx="6" fill="white" stroke="var(--border-grey)" strokeWidth="1" />
              <text x="15" y="32" fontSize="12" fontWeight="700" fill="var(--navy)">Content & SEO</text>
              <text x="15" y="48" fontSize="12" fontWeight="700" fill="var(--navy)">Departments</text>
              <text x="15" y="68" fontSize="10" fill="var(--text-grey)">(6 Baseline Staff)</text>

              {/* Skill Growth */}
              <rect x="150" y="15" width="120" height="24" rx="12" fill="var(--red-flag)" opacity="0.12" />
              <text x="210" y="31" fontSize="11" fontWeight="700" fill="var(--red-flag)" textAnchor="middle">Stagnant / Regressive</text>
              <text x="210" y="54" fontSize="10" fill="var(--navy)" textAnchor="middle">Interns and seniors limited to</text>
              <text x="210" y="68" fontSize="10" fill="var(--navy)" textAnchor="middle">spam frameworks and bots</text>

              {/* Desired Benefit */}
              <rect x="325" y="15" width="120" height="24" rx="12" fill="var(--red-flag)" opacity="0.12" />
              <text x="385" y="31" fontSize="11" fontWeight="700" fill="var(--red-flag)" textAnchor="middle">Target Failed</text>
              <text x="385" y="54" fontSize="10" fill="var(--navy)" textAnchor="middle">Zero competitive edge built;</text>
              <text x="385" y="68" fontSize="10" fill="var(--navy)" textAnchor="middle">no core strategies applied</text>

              {/* The Gap */}
              <rect x="495" y="15" width="170" height="24" rx="12" fill="var(--red-flag)" opacity="0.12" />
              <text x="580" y="31" fontSize="11" fontWeight="700" fill="var(--red-flag)" textAnchor="middle">Total Pipeline Failure</text>
              <text x="580" y="54" fontSize="10" fill="var(--navy)" textAnchor="middle">No organic positions or clean traffic;</text>
              <text x="580" y="68" fontSize="10" fill="var(--navy)" textAnchor="middle">operation defaults to bulk uploads</text>

              {/* Budget Impact */}
              <rect x="715" y="15" width="120" height="24" rx="12" fill="var(--red-flag)" opacity="0.12" />
              <text x="775" y="31" fontSize="11" fontWeight="700" fill="var(--red-flag)" textAnchor="middle">Complete Capital Loss</text>
              <text x="775" y="54" fontSize="10" fill="var(--navy)" textAnchor="middle">Budget completely wasted</text>
              <text x="775" y="68" fontSize="10" fill="var(--navy)" textAnchor="middle">on penalized mechanics</text>
            </g>
          </svg>
        </div>
      </div>

      {/* Context Footnote */}
      <div className="border-t px-6 py-3" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-xs" style={{ color: "var(--text-grey)" }}>
          Systems analysis reveals a critical mismatch: operational investments fulfill volume output requirements but systematically fail to yield digital authority or protect talent trajectories.
        </p>
      </div>
    </div>
  );
}