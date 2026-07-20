// app/report/chapter-10/GroupBarChart.tsx
"use client";

interface Department {
  name: string;
  color: string; 
  scores: number[];
}

interface GroupBarChartProps {
  figureNumber?: string;
  title?: string;
  departments: Department[];
}

const LENSES = [
  "Workflow Health",
  "Skill Growth",
  "Output Delivery",
  "Business Return",
  "Budget Efficiency",
];

const TICKS = [0, 25, 50, 75, 100];

const getStrengthColor = (score: number) => {
  if (score >= 75) return "#22C55E"; 
  if (score >= 40) return "#F59E0B"; 
  return "#c0392b";                  
};

const STRENGTH_LEGEND = [
  { label: "High / Optimal (≥ 75%)", fill: "#22C55E" },
  { label: "Moderate / Partial (40% - 74%)", fill: "#F59E0B" },
  { label: "Critical / Constraint (< 40%)", fill: "#c0392b" },
];

export function GroupBarChart({
  figureNumber = "10.1",
  title = "Departmental Performance Matrix",
  departments = [],
}: GroupBarChartProps) {
  const vbW = 660;
  const vbH = 420;
  
  const marginLeft = 135;
  const marginRight = 55; // Reset to clean compact layout space
  const marginTop = 25;
  const marginBottom = 45;
  
  const chartW = vbW - marginLeft - marginRight; 
  const chartH = vbH - marginTop - marginBottom; 
  
  const groupH = chartH / LENSES.length; 
  const barH = 14;                       
  const barGap = 4;                      

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* ── Header Band ── */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* ── SVG Canvas ── */}
      <div
        className="px-4 py-5 sm:px-6"
        style={{ background: "var(--pale-blue)" }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "660px",
            margin: "0 auto",
            paddingBottom: "63.64%", 
          }}
        >
          <svg
            viewBox={`0 0 ${vbW} ${vbH}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={title}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            {/* Grid Lines */}
            {TICKS.map((tick) => {
              const x = marginLeft + (tick / 100) * chartW;
              return (
                <g key={`grid-${tick}`}>
                  <line
                    x1={x}
                    y1={marginTop}
                    x2={x}
                    y2={marginTop + chartH}
                    stroke="#cbd5e1"
                    strokeWidth="0.8"
                    strokeDasharray={tick === 0 || tick === 100 ? "none" : "4 4"}
                  />
                  <text
                    x={x}
                    y={marginTop + chartH + 16}
                    fontSize="10"
                    fontWeight="600"
                    fill="#64748b"
                    textAnchor="middle"
                  >
                    {tick}%
                  </text>
                </g>
              );
            })}

            {/* Lens Rows */}
            {LENSES.map((lens, i) => {
              const groupY = marginTop + i * groupH;
              const labelY = groupY + groupH / 2;

              const totalBarsH = departments.length * barH + (departments.length - 1) * barGap;
              const startBarY = groupY + (groupH - totalBarsH) / 2;

              return (
                <g key={`lens-row-${i}`}>
                  <text
                    x={marginLeft - 14}
                    y={labelY + 3}
                    fontSize="11"
                    fontWeight="700"
                    fill="#334155"
                    textAnchor="end"
                  >
                    {lens}
                  </text>

                  {/* Render Percentage Bars */}
                  {departments.map((dept, j) => {
                    const score = dept.scores[i] ?? 0;
                    const barW = Math.max((score / 100) * chartW, 2); 
                    const currentBarY = startBarY + j * (barH + barGap);
                    const barColor = getStrengthColor(score);

                    return (
                      <g key={`bar-${dept.name}-${lens}`}>
                        <rect
                          x={marginLeft}
                          y={currentBarY}
                          width={barW}
                          height={barH}
                          fill={barColor}
                          rx="2.5"
                        />
                        {/* Rendered as clean percentage to avoid headcount confusion */}
                        <text
                          x={marginLeft + barW + 6}
                          y={currentBarY + barH / 2 + 3.5}
                          fontSize="9"
                          fontWeight="700"
                          fill="#475569"
                        >
                          {score}%
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ── Legend Footer ── */}
      <div
        className="flex flex-wrap justify-center gap-x-8 gap-y-2 border-t px-6 py-3.5"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        {STRENGTH_LEGEND.map((item) => (
          <div key={`legend-${item.label}`} className="flex items-center gap-2">
            <div
              style={{
                width: "12px",
                height: "12px",
                backgroundColor: item.fill,
                borderRadius: "3px",
              }}
            />
            <span className="text-xs font-semibold text-[#0A1628]">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}