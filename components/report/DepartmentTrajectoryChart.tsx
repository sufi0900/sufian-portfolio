// components/report/DepartmentTrajectoryChart.tsx
import React from "react";

const DEPTS = [
  { name: "Design", value: 88, tone: "growth" },
  { name: "Development", value: 85, tone: "growth" },
  { name: "Video Editing", value: 52, tone: "neutral" },
  { name: "Social Media", value: 40, tone: "neutral" },
  { name: "Content Writing", value: 22, tone: "constrained" },
  { name: "SEO", value: 18, tone: "constrained" },
];

const TONE_COLOR: Record<string, string> = {
  growth: "#15803d",
  neutral: "#b7791f",
  constrained: "var(--red-flag)",
};

export function DepartmentTrajectoryChart({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  const barMax = 420; // The maximum pixel width allocated for the 100% boundary
  
  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)" }}
    >
      {/* Header Band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      {/* Interactive Responsive Canvas */}
      <div className="flex justify-center px-4 py-6 sm:px-6" style={{ background: "var(--pale-blue)" }}>
        <div style={{ width: "100%", maxWidth: "600px", aspectRatio: "600 / 250", position: "relative" }}>
          <svg 
            viewBox="0 0 600 250" 
            xmlns="http://www.w3.org/2000/svg" 
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          > 
            {DEPTS.map((d, i) => {
              const y = 20 + i * 38;
              const w = (d.value / 100) * barMax;
              
              return (
                <g key={i}>
                  {/* Department Label */}
                  <text x="0" y={y + 14} fontSize="12" fontWeight="700" fill="var(--navy)">
                    {d.name}
                  </text>
                  
                  {/* Background Track */}
                  <rect x="150" y={y} width={barMax} height="18" rx="4" fill="white" stroke="var(--border-grey)" />
                  
                  {/* Filled Value Bar */}
                  <rect x="150" y={y} width={w} height="18" rx="4" fill={TONE_COLOR[d.tone]} />
                  
                  {/* Status Indicator Text */}
                  <text x={150 + w + 8} y={y + 14} fontSize="10" fontWeight="700" fill={TONE_COLOR[d.tone]}>
                    {d.tone === "growth" ? "Growing" : d.tone === "neutral" ? "Flat" : "Constrained"}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Context Footnote */}
      <div className="border-t px-6 py-3" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-xs" style={{ color: "var(--text-grey)" }}>
          The two departments most responsible for search performance, content writing and SEO, show the flattest professional growth.
        </p>
      </div>
    </div>
  );
}