// app/report/chapter-10/UnifiedAssessmentMatrix.tsx
"use client";

type Level = "strong" | "partial" | "weak" | "critical";

interface DeptRow {
  department: string;
  levels: [Level, Level, Level, Level, Level];
}

const LEVEL_COLORS: Record<Level, string> = {
  strong: "#22C55E", // Green
  partial: "#F59E0B", // Amber
  weak: "#E97A2B", // Orange
  critical: "#c0392b", // Red
};

const LEVEL_LABELS: Record<Level, string> = {
  strong: "Strong",
  partial: "Partial",
  weak: "Weak",
  critical: "Critical",
};

const COLUMNS = [
  "Workflow",
  "Skill Growth",
  "Output Delivery",
  "Business Return",
  "Budget Efficiency",
];

const DEPARTMENTS: DeptRow[] = [
  { department: "Design", levels: ["strong", "strong", "strong", "strong", "partial"] },
  { department: "Development", levels: ["strong", "strong", "strong", "partial", "partial"] },
  { department: "Video Editing", levels: ["partial", "weak", "partial", "weak", "weak"] },
  { department: "Social Media", levels: ["weak", "weak", "weak", "weak", "critical"] },
  { department: "Content Writing", levels: ["critical", "critical", "critical", "critical", "critical"] },
  { department: "SEO", levels: ["critical", "critical", "critical", "critical", "critical"] },
];

export function UnifiedAssessmentMatrix({
  figureNumber = "10.4",
  title = "Cross-Department Assessment: All Teams Across Five Lenses",
}: {
  figureNumber?: string;
  title?: string;
}) {
  const vbW = 860;
  const vbH = 480;
  const topPad = 60;
  const rowH = 48;
  const colW = 120;
  const startX = 200;

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

      {/* ── SVG Canvas (Padding-Bottom Hack applied) ── */}
      <div
        className="px-4 py-5 sm:px-6"
        style={{ background: "var(--pale-blue)" }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "860px",
            margin: "0 auto",
            // 480 (height) / 860 (width) = 0.5581... -> 55.81%
            // This physically locks the height of the container in Puppeteer
            paddingBottom: "55.81%",
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
            {/* Column Headers */}
            {COLUMNS.map((col, i) => (
              <text
                key={col}
                x={startX + i * colW + colW / 2}
                y={topPad - 15}
                fontSize="10"
                fontWeight="700"
                fill="#6b7280"
                textAnchor="middle"
                letterSpacing="0.05em"
              >
                {col.toUpperCase()}
              </text>
            ))}

            {/* Matrix Grid */}
            {DEPARTMENTS.map((row, rowIndex) => {
              const y = topPad + rowIndex * rowH;
              return (
                <g key={row.department}>
                  {/* Department Name */}
                  <text
                    x={startX - 20}
                    y={y + rowH / 2 + 4}
                    fontSize="12.5"
                    fontWeight="700"
                    fill="#0A1628"
                    textAnchor="end"
                  >
                    {row.department}
                  </text>

                  {/* Heatmap Cells */}
                  {row.levels.map((level, colIndex) => {
                    const x = startX + colIndex * colW;
                    return (
                      <g key={`${row.department}-${colIndex}`}>
                        <rect
                          x={x + 4}
                          y={y + 4}
                          width={colW - 8}
                          height={rowH - 8}
                          rx="4"
                          fill={LEVEL_COLORS[level]}
                          opacity="0.9"
                        />
                        <text
                          x={x + colW / 2}
                          y={y + rowH / 2 + 3}
                          fontSize="10"
                          fontWeight="700"
                          fill="white"
                          textAnchor="middle"
                        >
                          {LEVEL_LABELS[level]}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Separation Line indicating Value Drop-off */}
            <line
              x1={20}
              y1={topPad + 4 * rowH}
              x2={vbW - 20}
              y2={topPad + 4 * rowH}
              stroke="#0A1628"
              strokeWidth="1.5"
              strokeDasharray="6 4"
              opacity="0.4"
            />

            {/* Legend */}
            {(() => {
              const legendY = vbH - 25;
              const items = [
                ["strong", "Strong Alignment"],
                ["partial", "Partial Return"],
                ["weak", "Below Expected Return"],
                ["critical", "Complete Shortfall"],
              ] as const;
              const spacing = 160;
              const startL = vbW / 2 - (items.length * spacing) / 2 + 20;

              return items.map(([level, label], i) => (
                <g key={level}>
                  <circle cx={startL + i * spacing} cy={legendY} r="5" fill={LEVEL_COLORS[level as Level]} />
                  <text
                    x={startL + i * spacing + 12}
                    y={legendY + 4}
                    fontSize="10"
                    fontWeight="600"
                    fill="#475569"
                  >
                    {label}
                  </text>
                </g>
              ));
            })()}
          </svg>
        </div>
      </div>

      {/* ── Footnote ── */}
      <div
        className="border-t px-6 py-3"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p className="text-center text-[10px] leading-relaxed" style={{ color: "var(--text-grey)" }}>
          The dashed line separates departments where partial value is still being delivered from departments where the current model produces a complete shortfall across all five evaluation criteria.
        </p>
      </div>
    </div>
  );
}