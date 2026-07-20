// app/report/chapter-10/GroupFrameworkChart.tsx
"use client";

import React from "react";

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
  { label: "Workflow", sub: "Execution Volume" },
  { label: "Skill Growth", sub: "Professional Dev" },
  { label: "Expectation Met", sub: "Desired Output" },
  { label: "ROI Delivered", sub: "Actual Business Return" },
  { label: "Budget Efficiency", sub: "Financial Value" },
] as const;

function getFillGradient(v: number, index: number) {
  if (v >= 70) return index === 0 ? "url(#emeraldGrad1)" : "url(#emeraldGrad2)";
  if (v >= 35) return index === 0 ? "url(#amberGrad1)" : "url(#amberGrad2)";
  return index === 0 ? "url(#roseGrad1)" : "url(#roseGrad2)";
}

function getLabelColor(v: number) {
  if (v >= 70) return "#047857";
  if (v >= 35) return "#b45309";
  return "#b91c1c";
}

export function GroupFrameworkChart({
  figureNumber,
  title,
  insight,
  departments,
}: GroupFrameworkChartProps) {
  const vbW = 840;
  const vbH = 460;
  const graphX = 240;
  const graphW = 540;

  return (
    <div className="avoid-break my-8 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-lg">
      {/* Header Band */}
      <div className="bg-slate-900 px-6 py-3.5 flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-200">
          {figureNumber} — {title}
        </span>
      </div>

      {/* Main Graph Body */}
      <div className="bg-slate-50 p-6 flex justify-center border-b border-slate-200">
        <div style={{ width: "100%", maxWidth: `${vbW}px`, aspectRatio: `${vbW} / ${vbH}`, position: "relative" }}>
          <svg
            viewBox="0 0 840 460"
            width={vbW}
            height={vbH}
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            <defs>
              {/* Primary Gradients for Dept 1 */}
              <linearGradient id="emeraldGrad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
              <linearGradient id="amberGrad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="roseGrad1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#f87171" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>

              {/* Secondary Layered Gradients for Dept 2 */}
              <linearGradient id="emeraldGrad2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6ee7b7" />
                <stop offset="100%" stopColor="#047857" />
              </linearGradient>
              <linearGradient id="amberGrad2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fcd34d" />
                <stop offset="100%" stopColor="#b45309" />
              </linearGradient>
              <linearGradient id="roseGrad2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#fca5a5" />
                <stop offset="100%" stopColor="#b91c1c" />
              </linearGradient>

              <filter id="premiumGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1e293b" floodOpacity="0.08" />
              </filter>
            </defs>

            {/* Background Grid Box */}
            <rect x={graphX} y="30" width={graphW} height="350" fill="#ffffff" rx="6" stroke="#e2e8f0" strokeWidth="1" />

            {/* Percentage Scale Back-Grid Lines */}
            {[25, 50, 75, 100].map((tick) => (
              <g key={tick}>
                <line
                  x1={graphX + (tick / 100) * graphW}
                  y1="30"
                  x2={graphX + (tick / 100) * graphW}
                  y2="380"
                  stroke="#e2e8f0"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
                <text x={graphX + (tick / 100) * graphW} y="398" fontSize="10" fontWeight="700" fill="#94a3b8" textAnchor="middle">
                  {tick}%
                </text>
              </g>
            ))}

            {/* Render Horizontal Data Comparisons */}
            {LENSES.map((lens, i) => {
              const rowY = 42 + i * 70;
              const val1 = departments[0].values[i];
              const val2 = departments[1].values[i];
              const barW1 = (val1 / 100) * graphW;
              const barW2 = (val2 / 100) * graphW;

              return (
                <g key={lens.label}>
                  {/* Category Section Metadata Labeling */}
                  <text x={graphX - 18} y={rowY + 16} fontSize="13" fontWeight="800" fill="#0f172a" textAnchor="end">
                    {lens.label}
                  </text>
                  <text x={graphX - 18} y={rowY + 30} fontSize="10.5" fontWeight="500" fill="#64748b" textAnchor="end">
                    {lens.sub}
                  </text>

                  {/* Alternate Track Containers */}
                  <rect x={graphX} y={rowY} width={graphW} height="15" fill="#f1f5f9" rx="3.5" />
                  <rect x={graphX} y={rowY + 19} width={graphW} height="15" fill="#f1f5f9" rx="3.5" />

                  {/* Department Bar 1 */}
                  <rect x={graphX} y={rowY} width={Math.max(barW1, 4)} height="15" fill={getFillGradient(val1, 0)} rx="3.5" filter="url(#premiumGlow)" />
                  <text x={graphX + barW1 + 8} y={rowY + 12} fontSize="11" fontWeight="800" fill={getLabelColor(val1)}>
                    {val1}%
                  </text>

                  {/* Department Bar 2 */}
                  <rect x={graphX} y={rowY + 19} width={Math.max(barW2, 4)} height="15" fill={getFillGradient(val2, 1)} rx="3.5" filter="url(#premiumGlow)" />
                  <text x={graphX + barW2 + 8} y={rowY + 31} fontSize="11" fontWeight="800" fill={getLabelColor(val2)}>
                    {val2}%
                  </text>
                </g>
              );
            })}

            {/* Ground Axis Anchor */}
            <line x1={graphX} y1="30" x2={graphX} y2="380" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />

            {/* Multi-layered Swatch Legend */}
            <g transform="translate(280, 424)">
              <rect x="0" y="0" width="15" height="15" rx="4" fill="url(#emeraldGrad1)" />
              <text x="22" y="12" fontSize="12" fontWeight="800" fill="#1e293b">
                {departments[0].name}
              </text>

              <rect x="220" y="0" width="15" height="15" rx="4" fill="url(#emeraldGrad2)" />
              <text x="242" y="12" fontSize="12" fontWeight="800" fill="#1e293b">
                {departments[1].name}
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Styled Footnote Insight Component */}
      <div className="bg-slate-100 px-6 py-4 border-t border-slate-200">
        <p className="text-xs sm:text-sm leading-relaxed text-slate-700 italic">
          <strong>Strategic Assessment:</strong> {insight}
        </p>
      </div>
    </div>
  );
}