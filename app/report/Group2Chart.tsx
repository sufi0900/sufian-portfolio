// app/report/chapter-10/Group2Chart.tsx
import React from "react";

export function Group2Chart({ figureNumber, title }: { figureNumber: string; title: string }) {
  const categories = [
    { label: "1. Workflow (Volume)", d1: 85, d2: 95 },
    { label: "2. Skill Growth", d1: 50, d2: 30 },
    { label: "3. Expectation Met", d1: 90, d2: 95 },
    { label: "4. ROI / Value Gap", d1: 15, d2: 10 },
    { label: "5. Budget Efficiency", d1: 15, d2: 10 },
  ];

  const getColor = (val: number) => {
    if (val >= 80) return "#15803d"; 
    if (val >= 40) return "#b7791f"; 
    return "#dc2626"; 
  };

  return (
    <div className="avoid-break my-8 overflow-hidden rounded-xl border" style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)" }}>
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">{`Figure ${figureNumber} — ${title}`}</p>
      </div>
      <div className="flex justify-center px-4 py-6" style={{ background: "var(--pale-blue)" }}>
        <div style={{ width: "100%", maxWidth: "700px", position: "relative" }}>
          <svg viewBox="0 0 700 320" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block" }}>
            {/* Legend */}
            <rect x="200" y="10" width="12" height="12" rx="2" fill="var(--navy)" opacity="0.8" />
            <text x="220" y="20" fontSize="11" fontWeight="600" fill="var(--navy)">Video Editing</text>
            <rect x="310" y="10" width="12" height="12" rx="2" fill="var(--navy)" opacity="0.4" />
            <text x="330" y="20" fontSize="11" fontWeight="600" fill="var(--navy)">Social Media</text>

            <line x1="180" y1="40" x2="180" y2="300" stroke="var(--border-grey)" strokeWidth="1" />

            {categories.map((cat, i) => {
              const y = 60 + i * 50;
              const w1 = (cat.d1 / 100) * 450;
              const w2 = (cat.d2 / 100) * 450;
              return (
                <g key={i}>
                  <text x="165" y={y + 16} fontSize="12" fontWeight="700" fill="var(--navy)" textAnchor="end">{cat.label}</text>
                  
                  <rect x="180" y={y} width="450" height="14" rx="3" fill="#e2e8f0" />
                  <rect x="180" y={y} width={w1} height="14" rx="3" fill={getColor(cat.d1)} />
                  
                  <rect x="180" y={y + 18} width="450" height="14" rx="3" fill="#e2e8f0" />
                  <rect x="180" y={y + 18} width={w2} height="14" rx="3" fill={getColor(cat.d2)} opacity="0.75" />
                  
                  <text x={180 + w1 + 8} y={y + 11} fontSize="10" fontWeight="700" fill={getColor(cat.d1)}>{cat.d1 >= 80 ? 'High' : cat.d1 >= 40 ? 'Mixed' : 'Narrow/Low'}</text>
                  <text x={180 + w2 + 8} y={y + 29} fontSize="10" fontWeight="700" fill={getColor(cat.d2)} opacity="0.8">{cat.d2 >= 80 ? 'High' : cat.d2 >= 40 ? 'Mixed' : 'Narrow/Low'}</text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>
    </div>
  );
}