// components/report/ShrinkingClickWindowChart.tsx
import React from "react";

const ROWS = [
  {
    label: "Earlier Baseline",
    segs: [
      { name: "Zero-Click", value: 35, color: "var(--border-grey)" },
      { name: "AI Overview Capture", value: 10, color: "#8ba4c4" },
      { name: "Organic Click", value: 55, color: "var(--lionxe-blue)" },
    ],
  },
  {
    label: "2026",
    segs: [
      { name: "Zero-Click", value: 60, color: "var(--border-grey)" },
      { name: "AI Overview Capture", value: 25, color: "#8ba4c4" },
      { name: "Organic Click", value: 15, color: "var(--lionxe-blue)" },
    ],
  },
];

export function ShrinkingClickWindowChart({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  const barW = 480;

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)" }}
    >
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      <div className="flex justify-center px-4 py-6 sm:px-6" style={{ background: "var(--pale-blue)" }}>
        <div style={{ width: "100%", maxWidth: "600px", aspectRatio: "600 / 180", position: "relative" }}>
          <svg
            viewBox="0 0 600 180"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            {ROWS.map((row, ri) => {
              const y = 20 + ri * 70;
              let x = 60;
              return (
                <g key={ri}>
                  <text x="0" y={y + 15} fontSize="12" fontWeight="700" fill="var(--navy)">
                    {row.label}
                  </text>
                  {row.segs.map((s, si) => {
                    const w = (s.value / 100) * barW;
                    const seg = (
                      <g key={si}>
                        <rect x={x} y={y} width={w} height="26" fill={s.color} stroke="white" strokeWidth="1" />
                        {s.value >= 12 && (
                          <text
                            x={x + w / 2}
                            y={y + 17}
                            textAnchor="middle"
                            fontSize="10"
                            fontWeight="700"
                            fill={si === 2 ? "white" : "var(--navy)"}
                          >
                            {s.value}%
                          </text>
                        )}
                      </g>
                    );
                    x += w;
                    return seg;
                  })}
                </g>
              );
            })}

            <rect x="60" y="150" width="10" height="10" fill="var(--border-grey)" />
            <text x="76" y="159" fontSize="10" fill="var(--text-grey)">Zero-Click</text>
            <rect x="180" y="150" width="10" height="10" fill="#8ba4c4" />
            <text x="196" y="159" fontSize="10" fill="var(--text-grey)">AI Overview Capture</text>
            <rect x="360" y="150" width="10" height="10" fill="var(--lionxe-blue)" />
            <text x="376" y="159" fontSize="10" fill="var(--text-grey)">Organic Click</text>
          </svg>
        </div>
      </div>

      <div className="border-t px-6 py-3" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-xs" style={{ color: "var(--text-grey)" }}>
          The window for earning a traditional organic click has narrowed sharply as zero-click and AI Overview results expand.
        </p>
      </div>
    </div>
  );
}