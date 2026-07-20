// app/report/chapter-10/CapacityLoadChart.tsx
"use client";

import React from "react";

const STRAIN_PALETTE: Record<string, { fill: string; label: string }> = {
  low:      { fill: "#22C55E", label: "Low" },
  moderate: { fill: "#3B82F6", label: "Moderate" },
  high:     { fill: "#F59E0B", label: "High" },
  critical: { fill: "#c0392b", label: "Critical" },
};

const DEPARTMENTS = [
  {
    name: "Design",
    team: "2",
    load: 30,
    strain: "low",
    note: "Consistent output, manageable scope",
  },
  {
    name: "Development",
    team: "3",
    load: 48,
    strain: "moderate",
    note: "29 sites per developer",
  },
  {
    name: "Video Editing",
    team: "2",
    load: 55,
    strain: "moderate",
    note: "Volume over depth",
  },
  {
    name: "Social Media",
    team: "3",
    load: 78,
    strain: "high",
    note: "87 accounts per person",
  },
  {
    name: "Content Writing",
    team: "2",
    load: 92,
    strain: "critical",
    note: "Pipeline-constrained",
  },
  {
    name: "SEO",
    team: "4†",
    load: 96,
    strain: "critical",
    note: "43.5 sites per experienced member",
  },
];

export function CapacityLoadChart({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  // Layout constants (SVG viewBox units)
  const vbW = 660;
  const nameCol = 0;
  const teamCol = 135;
  const barX = 195;
  const barMaxW = 310;
  const rowH = 52;
  const topPad = 42;
  
  // The calculated height is 402 (42 + 6*52 + 48). 
  // We hardcode it in the viewBox to prevent Next.js SSR collapsing.
  const vbH = 402;

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
        className="flex justify-center px-4 py-5 sm:px-6"
        style={{ background: "var(--pale-blue)" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "660px",
            aspectRatio: "660 / 402", // Strict reservation so it doesn't collapse
            position: "relative",
          }}
        >
          <svg
            viewBox="0 0 660 402"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={title}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            {/* Column headers */}
            <text x={nameCol} y={22} fontSize="9" fontWeight="700" fill="#6b7280" letterSpacing="0.08em">
              DEPARTMENT
            </text>
            <text x={teamCol} y={22} fontSize="9" fontWeight="700" fill="#6b7280" letterSpacing="0.08em" textAnchor="middle">
              TEAM
            </text>
            <text x={barX} y={22} fontSize="9" fontWeight="700" fill="#6b7280" letterSpacing="0.08em">
              CAPACITY LOAD
            </text>

            {/* Separator line */}
            <line x1={0} y1={30} x2={vbW} y2={30} stroke="#d0d0d0" strokeWidth="0.5" />

            {DEPARTMENTS.map((d, i) => {
              const y = topPad + i * rowH;
              const barW = (d.load / 100) * barMaxW;
              const palette = STRAIN_PALETTE[d.strain];
              const midY = y + rowH / 2;

              return (
                <g key={d.name}>
                  {/* Alternating row background */}
                  {i % 2 === 0 && (
                    <rect
                      x={-8}
                      y={y}
                      width={vbW + 16}
                      height={rowH}
                      fill="white"
                      opacity="0.45"
                      rx="4"
                    />
                  )}

                  {/* Department name */}
                  <text
                    x={nameCol}
                    y={midY - 4}
                    fontSize="12.5"
                    fontWeight="700"
                    fill="var(--navy)"
                  >
                    {d.name}
                  </text>

                  {/* Team size badge */}
                  <rect
                    x={teamCol - 18}
                    y={midY - 14}
                    width={36}
                    height={22}
                    rx="5"
                    fill="white"
                    stroke="#d0d0d0"
                    strokeWidth="0.8"
                  />
                  <text
                    x={teamCol}
                    y={midY + 1}
                    fontSize="11"
                    fontWeight="600"
                    fill="var(--navy)"
                    textAnchor="middle"
                  >
                    {d.team}
                  </text>

                  {/* Background track */}
                  <rect
                    x={barX}
                    y={midY - 9}
                    width={barMaxW}
                    height={18}
                    rx="4"
                    fill="white"
                    stroke="#e0e4e8"
                    strokeWidth="0.6"
                  />

                  {/* Filled bar */}
                  <rect
                    x={barX}
                    y={midY - 9}
                    width={barW}
                    height={18}
                    rx="4"
                    fill={palette.fill}
                    opacity="0.85"
                  />

                  {/* Annotation text */}
                  <text
                    x={barX + barW + 8}
                    y={midY + 4}
                    fontSize="9.5"
                    fontWeight="600"
                    fill={palette.fill}
                  >
                    {d.note}
                  </text>
                </g>
              );
            })}

            {/* ── Legend ── */}
            {(() => {
              const legendY = topPad + DEPARTMENTS.length * rowH + 18;
              const items = Object.values(STRAIN_PALETTE);
              const spacing = 105;
              const startX = vbW / 2 - (items.length * spacing) / 2 + 10;

              return items.map((item, i) => (
                <g key={item.label}>
                  <rect
                    x={startX + i * spacing}
                    y={legendY - 5}
                    width={10}
                    height={10}
                    rx="2"
                    fill={item.fill}
                    opacity="0.85"
                  />
                  <text
                    x={startX + i * spacing + 15}
                    y={legendY + 4}
                    fontSize="9"
                    fill="#6b7280"
                  >
                    {item.label}
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
        <p
          className="text-center text-xs leading-relaxed"
          style={{ color: "var(--text-grey)" }}
        >
          Capacity load reflects the ratio of operational scope to available
          team members. The SEO team size of 4 includes 2 interns (†) whose
          effective contribution is constrained by the current workflow, reducing
          experienced capacity to 2 members across 87 sites.
        </p>
      </div>
    </div>
  );
}