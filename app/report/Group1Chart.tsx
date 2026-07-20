interface DepartmentMetric {
  name: string;
  values: number[];
}

interface GroupFrameworkChartProps {
  figureNumber: string;
  title: string;
  insight: string;
  departments: [DepartmentMetric, DepartmentMetric];
}

const LENSES = [
  { label: "Workflow", sub: "Execution volume" },
  { label: "Skill Growth", sub: "Professional development" },
  { label: "Expectation Met", sub: "Desired output" },
  { label: "ROI Delivered", sub: "Actual business return" },
  { label: "Budget Efficiency", sub: "Financial utilization" },
] as const;

function perfColor(v: number): string {
  if (v >= 70) return "#16a34a";
  if (v >= 35) return "#d97706";
  if (v >= 15) return "#dc2626";
  return "#b91c1c";
}

function perfLabel(v: number): string {
  if (v >= 70) return "High";
  if (v >= 35) return "Moderate";
  if (v >= 15) return "Low";
  return "Critical";
}

export function GroupFrameworkChart({
  figureNumber,
  title,
  insight,
  departments,
}: GroupFrameworkChartProps) {
  const W = 740;
  const H = 470;
  const CX = 195;
  const CW = 430;
  const CY = 88;
  const RH = 60;
  const BH = 18;
  const BG = 8;
  const PPU = CW / 100;

  const deptIndicators = ["#2563eb", "#0e7490"];

  return (
    <div style={{ margin: "2rem 0", overflowX: "auto" }}>
      <div
        style={{
          minWidth: 560,
          maxWidth: 740,
          margin: "0 auto",
          background: "#fafbfc",
          border: "1px solid #e2e8f0",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: "12px 20px",
            borderBottom: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "baseline",
            gap: 12,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#64748b",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            {figureNumber}
          </span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#1e293b" }}>
            {title}
          </span>
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          height="auto"
          role="img"
          aria-label={`Five-point framework comparison: ${departments[0].name} versus ${departments[1].name}`}
          style={{
            fontFamily:
              "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          <title>{title}</title>
          <desc>
            Comparative bar chart showing {departments[0].name} and{" "}
            {departments[1].name} across five framework lenses: Workflow, Skill
            Growth, Expectation Met, ROI Delivered, and Budget Efficiency.
          </desc>

          {/* Performance zone backgrounds */}
          <rect
            x={CX}
            y={CY - 4}
            width={35 * PPU}
            height={5 * RH + 8}
            fill="#fef2f2"
            opacity={0.45}
          />
          <rect
            x={CX + 35 * PPU}
            y={CY - 4}
            width={35 * PPU}
            height={5 * RH + 8}
            fill="#fffbeb"
            opacity={0.45}
          />
          <rect
            x={CX + 70 * PPU}
            y={CY - 4}
            width={30 * PPU}
            height={5 * RH + 8}
            fill="#f0fdf4"
            opacity={0.45}
          />

          {/* Grid lines */}
          {[25, 50, 75].map((tick) => (
            <line
              key={tick}
              x1={CX + tick * PPU}
              y1={CY - 4}
              x2={CX + tick * PPU}
              y2={CY + 5 * RH + 4}
              stroke="#e2e8f0"
              strokeWidth={1}
              strokeDasharray="4,3"
            />
          ))}

          {/* Rows */}
          {LENSES.map((lens, i) => {
            const rowY = CY + i * RH;
            return (
              <g key={i}>
                {/* Lens label */}
                <text
                  x={CX - 14}
                  y={rowY + RH / 2 - 2}
                  textAnchor="end"
                  fontSize={12.5}
                  fill="#1e293b"
                  fontWeight={600}
                >
                  {lens.label}
                </text>
                <text
                  x={CX - 14}
                  y={rowY + RH / 2 + 12}
                  textAnchor="end"
                  fontSize={9.5}
                  fill="#94a3b8"
                >
                  {lens.sub}
                </text>

                {/* Row divider */}
                {i < 4 && (
                  <line
                    x1={CX}
                    y1={rowY + RH}
                    x2={CX + CW}
                    y2={rowY + RH}
                    stroke="#f1f5f9"
                    strokeWidth={1}
                  />
                )}

                {/* Department bars */}
                {departments.map((dept, d) => {
                  const value = dept.values[i];
                  const barY = rowY + 8 + d * (BH + BG);
                  const barW = value * PPU;
                  const color = perfColor(value);
                  const label = perfLabel(value);

                  return (
                    <g key={d}>
                      <title>{`${dept.name} — ${lens.label}: ${value} (${label})`}</title>

                      {/* Department indicator stripe */}
                      <rect
                        x={CX - 6}
                        y={barY}
                        width={3}
                        height={BH}
                        fill={deptIndicators[d]}
                        rx={1.5}
                      />

                      {/* Bar fill */}
                      <rect
                        x={CX}
                        y={barY}
                        width={Math.max(barW, 2)}
                        height={BH}
                        fill={color}
                        opacity={d === 0 ? 1 : 0.35}
                        rx={3}
                      />

                      {/* Border for dept 2 */}
                      {d === 1 && (
                        <rect
                          x={CX}
                          y={barY}
                          width={Math.max(barW, 2)}
                          height={BH}
                          fill="none"
                          stroke={color}
                          strokeWidth={1.5}
                          rx={3}
                        />
                      )}

                      {/* Value label */}
                      <text
                        x={CX + Math.max(barW, 2) + 7}
                        y={barY + BH / 2 + 4}
                        textAnchor="start"
                        fontSize={11}
                        fill="#1e293b"
                        fontWeight={600}
                      >
                        {value}
                      </text>

                      {/* Performance label */}
                      <text
                        x={CX + Math.max(barW, 2) + 27}
                        y={barY + BH / 2 + 4}
                        textAnchor="start"
                        fontSize={9.5}
                        fill="#64748b"
                      >
                        {label}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}

          {/* Scale line */}
          <line
            x1={CX}
            y1={CY + 5 * RH + 4}
            x2={CX + CW}
            y2={CY + 5 * RH + 4}
            stroke="#cbd5e1"
            strokeWidth={1.5}
          />

          {/* Scale tick labels */}
          {[0, 25, 50, 75, 100].map((tick) => (
            <text
              key={tick}
              x={CX + tick * PPU}
              y={CY + 5 * RH + 20}
              textAnchor="middle"
              fontSize={10}
              fill="#64748b"
            >
              {tick}
            </text>
          ))}

          {/* Zone labels */}
          <text
            x={CX + 17.5 * PPU}
            y={H - 12}
            textAnchor="middle"
            fontSize={9}
            fill="#dc2626"
            fontWeight={700}
            letterSpacing="0.5"
          >
            CRITICAL · LOW
          </text>
          <text
            x={CX + 52.5 * PPU}
            y={H - 12}
            textAnchor="middle"
            fontSize={9}
            fill="#d97706"
            fontWeight={700}
            letterSpacing="0.5"
          >
            MODERATE
          </text>
          <text
            x={CX + 85 * PPU}
            y={H - 12}
            textAnchor="middle"
            fontSize={9}
            fill="#16a34a"
            fontWeight={700}
            letterSpacing="0.5"
          >
            HIGH
          </text>

          {/* Legend */}
          <g transform={`translate(${W / 2 - 110}, 28)`}>
            {departments.map((dept, d) => (
              <g key={d} transform={`translate(${d * 130}, 0)`}>
                <rect
                  x={0}
                  y={0}
                  width={14}
                  height={11}
                  fill={deptIndicators[d]}
                  opacity={d === 0 ? 1 : 0.35}
                  rx={2}
                />
                {d === 1 && (
                  <rect
                    x={0}
                    y={0}
                    width={14}
                    height={11}
                    fill="none"
                    stroke={deptIndicators[d]}
                    strokeWidth={1.5}
                    rx={2}
                  />
                )}
                <text
                  x={20}
                  y={9.5}
                  fontSize={12}
                  fill="#1e293b"
                  fontWeight={500}
                >
                  {dept.name}
                </text>
              </g>
            ))}
          </g>
        </svg>

        {/* Insight */}
        <div
          style={{
            padding: "10px 20px",
            borderTop: "1px solid #e2e8f0",
            fontSize: 13,
            color: "#475569",
            fontStyle: "italic",
            lineHeight: 1.5,
          }}
        >
          {insight}
        </div>
      </div>
    </div>
  );
}