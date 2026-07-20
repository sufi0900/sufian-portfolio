// app/report/chapter-10/DepartmentMatrix.tsx
"use client";

import React from "react";

interface DepartmentPosition {
  name: string;
  skillGrowth: number;
  businessValue: number;
  status: "critical" | "concerning";
}

interface DepartmentMatrixProps {
  figureNumber: string;
  title: string;
  insight: string;
  departments: DepartmentPosition[];
}

export function DepartmentMatrix({
  figureNumber,
  title,
  insight,
  departments,
}: DepartmentMatrixProps) {
  const W = 840;
  const H = 540;
  const padLeft = 90;
  const padRight = 40;
  const padTop = 60;
  const padBottom = 70;

  const innerW = W - padLeft - padRight;
  const innerH = H - padTop - padBottom;

  // Mathematical baseline conversions mapping 0-100 directly to canvas coordinates
  const getX = (val: number) => padLeft + (val / 100) * innerW;
  const getY = (val: number) => padTop + innerH - (val / 100) * innerH;

  return (
    <div className="avoid-break my-10 overflow-hidden rounded-xl border border-slate-300 bg-white shadow-lg">
      {/* Title Bar */}
      <div className="bg-slate-900 px-6 py-3.5">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
          {figureNumber} — {title}
        </p>
      </div>

      {/* Canvas Layer */}
      <div className="bg-slate-50 p-6 flex justify-center border-b border-slate-200">
        <div style={{ width: "100%", maxWidth: `${W}px`, aspectRatio: `${W} / ${H}`, position: "relative" }}>
          <svg
            viewBox="0 0 840 540"
            width={W}
            height={H}
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            <defs>
              <filter id="markerShadow" x="-30%" y="-30%" width="160%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#0f172a" floodOpacity="0.15" />
              </filter>
              <marker id="matrixArrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#64748b" />
              </marker>
            </defs>

            {/* Matrix Heat-Zone Boxes */}
            {/* Top Half: Unoccupied/Wasted Zone */}
            <rect x={padLeft} y={padTop} width={innerW} height={innerH / 2} fill="#f1f5f9" opacity="0.4" />
            
            {/* Bottom Left: Critical Risk Shading */}
            <rect x={padLeft} y={padTop + innerH / 2} width={innerW / 2} height={innerH / 2} fill="#fee2e2" opacity="0.45" />
            
            {/* Bottom Right: Concerning Structural Value Shading */}
            <rect x={padLeft + innerW / 2} y={padTop + innerH / 2} width={innerW / 2} height={innerH / 2} fill="#fffdbb" opacity="0.35" />

            {/* Grid Boundary lines */}
            <rect x={padLeft} y={padTop} width={innerW} height={innerH} fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
            <line x1={padLeft} y1={padTop + innerH / 2} x2={padLeft + innerW} y2={padTop + innerH / 2} stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />
            <line x1={padLeft + innerW / 2} y1={padTop} x2={padLeft + innerW / 2} y2={padTop + innerH} stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 4" />

            {/* Scale Percent Indicators */}
            {[0, 25, 50, 75, 100].map((step) => {
              const tx = padLeft + (step / 100) * innerW;
              const ty = padTop + innerH - (step / 100) * innerH;
              return (
                <g key={step}>
                  <text x={padLeft - 12} y={ty + 4} fontSize="10.5" fontWeight="700" fill="#64748b" textAnchor="end">{step}%</text>
                  <text x={tx} y={padTop + innerH + 18} fontSize="10.5" fontWeight="700" fill="#64748b" textAnchor="middle">{step}%</text>
                </g>
              );
            })}

            {/* Empty Upper Hemisphere Structural Overlay Warnings */}
            <rect x={padLeft + 40} y={padTop + 45} width={innerW - 80} height="44" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="1" opacity="0.95" />
            <text x={padLeft + innerW / 2} y={padTop + 64} fontSize="12" fontWeight="800" fill="#475569" textAnchor="middle" letterSpacing="0.5">
              UNOCCUPIED STRATEGIC ARCHITECTURE
            </text>
            <text x={padLeft + innerW / 2} y={padTop + 78} fontSize="10" fontWeight="600" fill="#94a3b8" textAnchor="middle">
              No operating department currently delivers high-tier revenue or organic visibility.
            </text>

            {/* Axis Core Titles */}
            <text x={padLeft + innerW / 2} y={H - padBottom + 45} fontSize="12" fontWeight="800" fill="#1e293b" textAnchor="middle" letterSpacing="0.5">
              SKILL GROWTH &amp; CAPACITY BUILDING →
            </text>
            <text x={30} y={padTop + innerH / 2} fontSize="12" fontWeight="800" fill="#1e293b" textAnchor="middle" letterSpacing="0.5" transform={`rotate(-90, 30, ${padTop + innerH / 2})`}>
              BUSINESS VALUE &amp; CONVERSION ROI →
            </text>

            {/* Plot Department Anchors with Collision Logic Offsets */}
            {departments.map((dept) => {
              const cx = getX(dept.skillGrowth);
              const cy = getY(dept.businessValue);
              
              // Custom vector placements ensuring text blocks never overwrite nearby coordinates
              let textAnchor = "start";
              let labelOffsetX = 15;
              let labelOffsetY = 4;

              if (dept.name === "SEO") {
                textAnchor = "end";
                labelOffsetX = -15;
                labelOffsetY = -5;
              } else if (dept.name === "Content Writing") {
                labelOffsetY = 15;
              } else if (dept.name === "Development") {
                textAnchor = "start";
                labelOffsetX = 15;
                labelOffsetY = -10;
              }

              const fillTheme = dept.status === "critical" ? "#dc2626" : "#ea580c";

              return (
                <g key={dept.name} className="transition-all">
                  {/* Subtle trace line to base line */}
                  <line x1={cx} y1={padTop + innerH} x2={cx} y2={cy} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1={padLeft} y1={cy} x2={cx} y2={cy} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="2 2" />
                  
                  {/* Outer glow aura ring */}
                  <circle cx={cx} cy={cy} r="10" fill={fillTheme} opacity="0.18" />
                  {/* Core Data Point Indicator */}
                  <circle cx={cx} cy={cy} r="6" fill={fillTheme} stroke="#ffffff" strokeWidth="2" filter="url(#markerShadow)" />
                  
                  {/* Label Title block */}
                  <text x={cx + labelOffsetX} y={cy + labelOffsetY} fontSize="12" fontWeight="800" fill="#0f172a" textAnchor={textAnchor}>
                    {dept.name}
                  </text>
                  <text x={cx + labelOffsetX} y={cy + labelOffsetY + 13} fontSize="9.5" fontWeight="700" fill={fillTheme} textAnchor={textAnchor}>
                    {dept.status === "critical" ? "Zero ROI Loss" : "Low ROI Cap"}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Narrative Context block Footer */}
      <div className="bg-slate-100 px-6 py-4">
        <p className="text-xs sm:text-sm leading-relaxed text-slate-700 italic">
          <strong>Framework Breakdown:</strong> {insight}
        </p>
      </div>
    </div>
  );
}