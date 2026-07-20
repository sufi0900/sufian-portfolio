// app/report/chapter-10/CapitalEfficiencyQuadrant.tsx

const DEPARTMENTS = [
  { num: 1, name: "Design",          x: 500, y: 325, r: 14, color: "#f59e0b" },
  { num: 2, name: "Development",     x: 560, y: 285, r: 16, color: "#f59e0b" },
  { num: 3, name: "Video Editing",   x: 440, y: 355, r: 14, color: "#f59e0b" },
  { num: 4, name: "Social Media",    x: 260, y: 360, r: 16, color: "#dc2626" },
  { num: 5, name: "Content Writing", x: 160, y: 345, r: 14, color: "#dc2626" },
  { num: 6, name: "SEO",             x: 220, y: 300, r: 18, color: "#dc2626" },
];

export function CapitalEfficiencyQuadrant({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* ── Header ── */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      {/* ── Chart Canvas ── */}
      <div
        className="flex justify-center px-4 py-6"
        style={{ background: "var(--pale-blue)" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            aspectRatio: "700 / 460",
            position: "relative",
          }}
        >
          <svg
            viewBox="0 0 700 460"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Capital efficiency matrix: all departments plotted in the bottom half, indicating low business value across the portfolio."
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <marker
                id="axisArrow"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
              >
                <polygon points="0 0, 8 3, 0 6" fill="#6b7280" />
              </marker>
            </defs>

            {/* ── Quadrant background tints ── */}
            <rect x="80"  y="50"  width="270" height="170" fill="#eff6ff" opacity="0.6" />
            <rect x="350" y="50"  width="270" height="170" fill="#f0fdf4" opacity="0.6" />
            <rect x="80"  y="220" width="270" height="170" fill="#fef2f2" opacity="0.6" />
            <rect x="350" y="220" width="270" height="170" fill="#fffbeb" opacity="0.6" />

            {/* ── Crosshair dividers ── */}
            <line
              x1="350" y1="50" x2="350" y2="390"
              stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 4"
            />
            <line
              x1="80" y1="220" x2="620" y2="220"
              stroke="#d1d5db" strokeWidth="1.5" strokeDasharray="5 4"
            />

            {/* ── Axes with arrowheads ── */}
            <line
              x1="80" y1="390" x2="625" y2="390"
              stroke="#6b7280" strokeWidth="2" markerEnd="url(#axisArrow)"
            />
            <line
              x1="80" y1="390" x2="80" y2="45"
              stroke="#6b7280" strokeWidth="2" markerEnd="url(#axisArrow)"
            />

            {/* ── Axis labels ── */}
            <text
              x="350" y="418" fontSize="11" fontWeight="700"
              fill="#6b7280" textAnchor="middle" letterSpacing="1.5"
            >
              SKILL GROWTH
            </text>
            <text
              x="35" y="220" fontSize="11" fontWeight="700"
              fill="#6b7280" textAnchor="middle" letterSpacing="1.5"
              transform="rotate(-90, 35, 220)"
            >
              BUSINESS VALUE
            </text>

            {/* ── Quadrant labels ── */}
            <text x="95"  y="68"  fontSize="9" fontWeight="700" fill="#9ca3af" letterSpacing="1">
              UNDERUTILIZED
            </text>
            <text x="605" y="68"  fontSize="9" fontWeight="700" fill="#9ca3af" textAnchor="end" letterSpacing="1">
              STRATEGIC ASSETS
            </text>
            <text x="95"  y="380" fontSize="9" fontWeight="700" fill="#9ca3af" letterSpacing="1">
              TOTAL CAPITAL LOSS
            </text>
            <text x="605" y="380" fontSize="9" fontWeight="700" fill="#9ca3af" textAnchor="end" letterSpacing="1">
              MISDIRECTED INVESTMENT
            </text>

            {/* ── Empty top-half annotation ── */}
            <text
              x="350" y="135" fontSize="12" fontWeight="600"
              fill="#9ca3af" textAnchor="middle" fontStyle="italic"
            >
              No department currently operates here
            </text>

            {/* ── Department circles ── */}
            {DEPARTMENTS.map((d, i) => (
              <g key={i}>
                <circle
                  cx={d.x} cy={d.y} r={d.r}
                  fill={d.color} opacity="0.9"
                  stroke="white" strokeWidth="2.5"
                />
                <text
                  x={d.x} y={d.y + 4}
                  fontSize="10" fontWeight="700"
                  fill="white" textAnchor="middle"
                >
                  {d.num}
                </text>
              </g>
            ))}

            {/* ── Legend ── */}
            {DEPARTMENTS.map((d, i) => {
              const col = i % 3;
              const row = Math.floor(i / 3);
              const lx = 100 + col * 180;
              const ly = 415 + row * 22;
              return (
                <g key={`legend-${i}`}>
                  <circle cx={lx} cy={ly} r="5" fill={d.color} />
                  <text
                    x={lx + 12} y={ly + 4}
                    fontSize="10" fontWeight="600" fill="#374151"
                  >
                    {d.num}. {d.name}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* ── Footnote ── */}
      <div
        className="border-t px-6 py-3"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p className="text-center text-xs" style={{ color: "var(--text-grey)" }}>
          All six departments fall in the bottom half of the matrix. None
          currently translates budget allocation into meaningful business value.
          The top half — where strategic assets should sit — remains empty.
        </p>
      </div>
    </div>
  );
}