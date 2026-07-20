// app/report/chapter-10/Group3Chart.tsx
import React from "react";

export function Group3Chart({ figureNumber, title }: { figureNumber: string; title: string }) {
  const width = 760;
  const height = 340;
  return (
    <div className="avoid-break my-8 overflow-hidden rounded-xl border" style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)", background: "white" }}>
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>
      <div className="flex justify-center px-4 py-6 sm:px-6" style={{ background: "var(--pale-blue)" }}>
        <div style={{ width: "100%", maxWidth: `${width}px`, aspectRatio: `${width} / ${height}`, position: "relative" }}>
          <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            {/* Headers */}
            <text x="20" y="30" fontSize="11" fontWeight="800" fill="var(--navy)">EVALUATION LENS</text>
            <text x="280" y="30" fontSize="11" fontWeight="800" fill="var(--navy)">CONTENT WRITING TEAM</text>
            <text x="530" y="30" fontSize="11" fontWeight="800" fill="var(--navy)">SEO TEAM</text>
            <line x1="20" y1="42" x2={width - 20} y2="42" stroke="#cbd5e1" strokeWidth="1" />

            {/* Row 1: Workflow */}
            <g transform="translate(0, 50)">
              <text x="20" y="25" fontSize="12" fontWeight="700" fill="var(--navy)">1. Workflow</text>
              <rect x="250" y="6" width="220" height="28" rx="4" fill="#15803d" opacity="0.1" />
              <rect x="256" y="14" width="8" height="12" rx="1" fill="#15803d" />
              <text x="272" y="24" fontSize="11" fontWeight="700" fill="#15803d">Template Content Generation</text>
              
              <rect x="500" y="6" width="240" height="28" rx="4" fill="#15803d" opacity="0.1" />
              <rect x="506" y="14" width="8" height="12" rx="1" fill="#15803d" />
              <text x="522" y="24" fontSize="11" fontWeight="700" fill="#15803d">Bulk Uploading &amp; Monitoring</text>
              <line x1="20" y1="44" x2={width - 20} y2="44" stroke="#e2e8f0" strokeWidth="0.8" />
            </g>

            {/* Row 2: Skill Growth */}
            <g transform="translate(0, 105)">
              <text x="20" y="25" fontSize="12" fontWeight="700" fill="var(--navy)">2. Skill Growth</text>
              <rect x="250" y="6" width="220" height="28" rx="4" fill="#c0392b" opacity="0.1" />
              <rect x="256" y="14" width="8" height="12" rx="1" fill="#c0392b" />
              <text x="272" y="24" fontSize="11" fontWeight="700" fill="#c0392b">Stagnant (Tool Management)</text>
              
              <rect x="500" y="6" width="240" height="28" rx="4" fill="#c0392b" opacity="0.1" />
              <rect x="506" y="14" width="8" height="12" rx="1" fill="#c0392b" />
              <text x="522" y="24" fontSize="11" fontWeight="700" fill="#c0392b">Stagnant (Interns Raw Uploads)</text>
              <line x1="20" y1="44" x2={width - 20} y2="44" stroke="#e2e8f0" strokeWidth="0.8" />
            </g>

            {/* Row 3: Co. Expectation */}
            <g transform="translate(0, 160)">
              <text x="20" y="25" fontSize="12" fontWeight="700" fill="var(--navy)">3. Co. Expectation</text>
              <rect x="250" y="6" width="220" height="28" rx="4" fill="#15803d" opacity="0.1" />
              <rect x="256" y="14" width="8" height="12" rx="1" fill="#15803d" />
              <text x="272" y="24" fontSize="11" fontWeight="700" fill="#15803d">Target Met (High Page Vol)</text>
              
              <rect x="500" y="6" width="240" height="28" rx="4" fill="#15803d" opacity="0.1" />
              <rect x="506" y="14" width="8" height="12" rx="1" fill="#15803d" />
              <text x="522" y="24" fontSize="11" fontWeight="700" fill="#15803d">Target Met (Keyword Tracking)</text>
              <line x1="20" y1="44" x2={width - 20} y2="44" stroke="#e2e8f0" strokeWidth="0.8" />
            </g>

            {/* Row 4: The Gap */}
            <g transform="translate(0, 215)">
              <text x="20" y="25" fontSize="12" fontWeight="700" fill="var(--navy)">4. The Gap</text>
              <rect x="250" y="6" width="220" height="28" rx="4" fill="#c0392b" opacity="0.1" />
              <rect x="256" y="14" width="8" height="12" rx="1" fill="#c0392b" />
              <text x="272" y="24" fontSize="11" fontWeight="700" fill="#c0392b">Zero Organic Positions</text>
              
              <rect x="500" y="6" width="240" height="28" rx="4" fill="#c0392b" opacity="0.1" />
              <rect x="506" y="14" width="8" height="12" rx="1" fill="#c0392b" />
              <text x="522" y="24" fontSize="11" fontWeight="700" fill="#c0392b">Zero Strategic Visibility</text>
              <line x1="20" y1="44" x2={width - 20} y2="44" stroke="#e2e8f0" strokeWidth="0.8" />
            </g>

            {/* Row 5: Budget Impact */}
            <g transform="translate(0, 270)">
              <text x="20" y="25" fontSize="12" fontWeight="700" fill="var(--navy)">5. Budget Impact</text>
              <rect x="250" y="6" width="220" height="28" rx="4" fill="#c0392b" opacity="0.1" />
              <rect x="256" y="14" width="8" height="12" rx="1" fill="#c0392b" />
              <text x="272" y="24" fontSize="11" fontWeight="700" fill="#c0392b">Total Loss / No Returns</text>
              
              <rect x="500" y="6" width="240" height="28" rx="4" fill="#c0392b" opacity="0.1" />
              <rect x="506" y="14" width="8" height="12" rx="1" fill="#c0392b" />
              <text x="522" y="24" fontSize="11" fontWeight="700" fill="#c0392b">Total Loss / Broken System</text>
            </g>
          </svg>
        </div>
      </div>
      <div className="border-t px-6 py-3" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-xs text-[var(--text-grey)]">
          Content and SEO operate at total capital loss, as workflows enforce process violations that yield no clean organic search traffic.
        </p>
      </div>
    </div>
  );
}