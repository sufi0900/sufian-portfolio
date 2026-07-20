// app/report/chapter-10/SummaryMatrixChart.tsx
import React from "react";

export function SummaryMatrixChart() {
  const vbW = 860;
  const vbH = 500;

  // Plotting Logic: Cx = 80 + (Skill * 7.2) | Cy = 460 - (ROI * 4)
  const plots = [
    { name: "Content", x: 12, y: 5, fill: "#c0392b", cx: 166, cy: 440 },
    { name: "SEO", x: 18, y: 8, fill: "#c0392b", cx: 209, cy: 428 },
    { name: "Social Media", x: 30, y: 12, fill: "#c0392b", cx: 296, cy: 412 },
    { name: "Video", x: 45, y: 18, fill: "#c0392b", cx: 404, cy: 388 },
    { name: "Design", x: 65, y: 25, fill: "#c0392b", cx: 548, cy: 360 },
    { name: "Development", x: 72, y: 22, fill: "#c0392b", cx: 598, cy: 372 },
  ];

  return (
    <div className="avoid-break my-8 overflow-hidden rounded-xl border" style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)", background: "white" }}>
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">Figure 10.4 — Unified Value Matrix: ROI vs. Skill Stagnation</p>
      </div>
      <div className="flex justify-center p-6 bg-slate-50">
        <div style={{ width: "100%", maxWidth: `${vbW}px`, aspectRatio: `${vbW} / ${vbH}`, position: "relative" }}>
          <svg viewBox={`0 0 ${vbW} ${vbH}`} width={vbW} height={vbH} xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            
            {/* Base Grid */}
            <rect x="80" y="60" width="720" height="400" fill="white" stroke="#e2e8f0" />
            
            {/* Top Half (High Value Zone) - Empty Area Warning */}
            <rect x="80" y="60" width="720" height="200" fill="#f8fafc" stroke="#94a3b8" strokeDasharray="6 6" />
            <text x="440" y="160" textAnchor="middle" fill="#64748b" fontSize="16" fontWeight="700" letterSpacing="1">NO DEPARTMENT CURRENTLY OPERATES IN THE HIGH-VALUE QUADRANTS</text>
            
            {/* Midlines */}
            <line x1="80" y1="260" x2="800" y2="260" stroke="#cbd5e1" strokeWidth="2" />
            <line x1="440" y1="60" x2="440" y2="460" stroke="#cbd5e1" strokeWidth="2" />

            {/* Labels & Legends */}
            <text x="440" y="495" textAnchor="middle" fill="var(--navy)" fontSize="14" fontWeight="800">SKILL GROWTH & PROFESSIONAL DEVELOPMENT →</text>
            <text x="40" y="260" textAnchor="middle" fill="var(--navy)" fontSize="14" fontWeight="800" transform="rotate(-90, 40, 260)">BUSINESS VALUE & ACTUAL ROI →</text>

            <text x="90" y="450" fill="#94a3b8" fontSize="11" fontWeight="700">Stagnant / Low Value</text>
            <text x="790" y="450" fill="#94a3b8" fontSize="11" fontWeight="700" textAnchor="end">Growing / Low Value</text>
            <text x="790" y="80" fill="#94a3b8" fontSize="11" fontWeight="700" textAnchor="end">Growing / High Value</text>
            <text x="90" y="80" fill="#94a3b8" fontSize="11" fontWeight="700">Stagnant / High Value</text>

            {/* Department Plots */}
            {plots.map((p, i) => (
              <g key={i}>
                <circle cx={p.cx} cy={p.cy} r="8" fill={p.fill} stroke="white" strokeWidth="2" />
                <text x={p.cx} y={p.cy + 22} fontSize="12" fontWeight="700" textAnchor="middle" fill="var(--navy)">{p.name}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}