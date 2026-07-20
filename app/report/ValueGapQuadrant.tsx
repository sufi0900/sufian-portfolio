// app/report/chapter-10/ValueGapQuadrant.tsx
//
// Quadrant matrix plotting each department by two independent metrics:
//   X-axis – Skill Development (Constrained → Growing)
//   Y-axis – Business Impact  (Negligible → Strong)
//
// The visual story: every department clusters in the bottom half (low business
// impact).  Design and Development sit in the "growing but trapped" quadrant;
// Content and SEO sit in the "constrained and wasted" quadrant.  The target
// zone (top-right) is empty — the structural model prevents any department from
// reaching it.

import React from "react";

/* ── data ── */

interface Dept {
  name: string;
  /** 0-100 horizontal position (skill development) */
  skill: number;
  /** 0-100 vertical position (business impact) */
  impact: number;
  /** dot fill colour — grouped by trajectory category */
  fill: string;
}

const DEPARTMENTS: Dept[] = [
  { name: "Design",          skill: 74, impact: 11, fill: "#16a34a" },
  { name: "Development",     skill: 70, impact: 9,  fill: "#16a34a" },
  { name: "Video Editing",   skill: 40, impact: 7,  fill: "#d97706" },
  { name: "Social Media",    skill: 30, impact: 9,  fill: "#d97706" },
  { name: "Content Writing", skill: 17, impact: 3,  fill: "#dc2626" },
  { name: "SEO",             skill: 12, impact: 2,  fill: "#dc2626" },
];

/* ── chart constants ── */

const VW = 640;
const VH = 440;
const PAD = { top: 20, right: 30, bottom: 50, left: 120 };
const PLOT_W = VW - PAD.left - PAD.right;   // 490
const PLOT_H = VH - PAD.top - PAD.bottom;    // 370

const mapX = (v: number) => PAD.left + (v / 100) * PLOT_W;
const mapY = (v: number) => PAD.top + PLOT_H - (v / 100) * PLOT_H;

/* ── component ── */

interface Props {
  figureNumber: string;
  title: string;
}

export function ValueGapQuadrant({ figureNumber, title }: Props) {
  const cx = PAD.left + PLOT_W / 2;
  const cy = PAD.top + PLOT_H / 2;

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* ── header ── */}
      <div
        className="px-5 py-3"
        style={{ background: "var(--navy)" }}
      >
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      {/* ── chart ── */}
      <div
        className="flex justify-center px-4 py-6 sm:px-6"
        style={{ background: "var(--pale-blue)" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "640px",
            aspectRatio: `${VW} / ${VH}`,
            position: "relative",
          }}
        >
          <svg
            viewBox={`0 0 ${VW} ${VH}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            {/* ── quadrant fills ── */}
            <rect x={PAD.left} y={PAD.top} width={PLOT_W / 2} height={PLOT_H / 2} fill="#dcfce7" opacity="0.35" /> {/* top-left: unlikely */}
            <rect x={cx}        y={PAD.top} width={PLOT_W / 2} height={PLOT_H / 2} fill="#bbf7d0" opacity="0.30" /> {/* top-right: target */}
            <rect x={PAD.left} y={cy}        width={PLOT_W / 2} height={PLOT_H / 2} fill="#fee2e2" opacity="0.35" /> {/* bottom-left: constrained + wasted */}
            <rect x={cx}        y={cy}        width={PLOT_W / 2} height={PLOT_H / 2} fill="#fef9c3" opacity="0.35" /> {/* bottom-right: growing but trapped */}

            {/* ── quadrant labels ── */}
            <text x={cx - 8}  y={PAD.top + 22} textAnchor="end" fill="#6b7280" fontSize="8.5" fontFamily="system-ui, sans-serif" fontStyle="italic">Unlikely</text>
            <text x={cx + 8}  y={PAD.top + 22} textAnchor="start" fill="#15803d" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">Target Zone</text>
            <text x={cx - 8}  y={VH - PAD.bottom - 10} textAnchor="end" fill="#dc2626" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">Constrained</text>
            <text x={cx - 8}  y={VH - PAD.bottom - 1} textAnchor="end" fill="#dc2626" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">&amp; Wasted</text>
            <text x={cx + 8}  y={VH - PAD.bottom - 6} textAnchor="start" fill="#b45309" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">Growing</text>
            <text x={cx + 8}  y={VH - PAD.bottom + 3} textAnchor="start" fill="#b45309" fontSize="8.5" fontWeight="600" fontFamily="system-ui, sans-serif">but Trapped</text>

            {/* ── axes ── */}
            <line x1={PAD.left} y1={cy} x2={PAD.left + PLOT_W} y2={cy} stroke="#9ca3af" strokeWidth="0.7" strokeDasharray="6 4" />
            <line x1={cx} y1={PAD.top} x2={cx} y2={PAD.top + PLOT_H} stroke="#9ca3af" strokeWidth="0.7" strokeDasharray="6 4" />
            <line x1={PAD.left} y1={PAD.top + PLOT_H} x2={PAD.left + PLOT_W} y2={PAD.top + PLOT_H} stroke="#9ca3af" strokeWidth="0.8" />
            <line x1={PAD.left} y1={PAD.top} x2={PAD.left} y2={PAD.top + PLOT_H} stroke="#9ca3af" strokeWidth="0.8" />

            {/* ── axis labels ── */}
            <text x={cx} y={VH - 8} textAnchor="middle" fill="#374151" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">Skill Development</text>
            <text x={PAD.left - 14} y={cy + 4} textAnchor="middle" fill="#374151" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif" transform={`rotate(-90, ${PAD.left - 14}, ${cy})`}>Business Impact</text>

            {/* axis end labels */}
            <text x={PAD.left} y={VH - PAD.bottom + 16} textAnchor="middle" fill="#6b7280" fontSize="8.5" fontFamily="system-ui, sans-serif">Constrained</text>
            <text x={PAD.left + PLOT_W} y={VH - PAD.bottom + 16} textAnchor="middle" fill="#6b7280" fontSize="8.5" fontFamily="system-ui, sans-serif">Growing</text>
            <text x={PAD.left - 8} y={PAD.top + PLOT_H + 4} textAnchor="end" fill="#6b7280" fontSize="8.5" fontFamily="system-ui, sans-serif">Negligible</text>
            <text x={PAD.left - 8} y={PAD.top + 10} textAnchor="end" fill="#6b7280" fontSize="8.5" fontFamily="system-ui, sans-serif">Strong</text>

            {/* ── department dots + labels ── */}
            {DEPARTMENTS.map((d) => {
              const dx = mapX(d.skill);
              const dy = mapY(d.impact);

              /* offset labels to avoid overlap — tuned per dot */
              let lx = dx + 12;
              let ly = dy + 4;
              let anchor: string = "start";

              if (d.name === "Development")    { lx = dx + 12; ly = dy - 2; anchor = "start"; }
              if (d.name === "Design")         { lx = dx + 12; ly = dy - 8; anchor = "start"; }
              if (d.name === "Video Editing")  { lx = dx + 12; ly = dy - 8; anchor = "start"; }
              if (d.name === "Social Media")   { lx = dx + 12; ly = dy - 6; anchor = "start"; }
              if (d.name === "Content Writing") { lx = dx - 12; ly = dy - 6; anchor = "end"; }
              if (d.name === "SEO")            { lx = dx - 12; ly = dy + 14; anchor = "end"; }

              return (
                <g key={d.name}>
                  {/* leader line */}
                  <line x1={dx} y1={dy} x2={lx + (anchor === "end" ? 4 : -4)} y2={ly - 2} stroke={d.fill} strokeWidth="0.6" strokeOpacity="0.5" />
                  {/* dot shadow */}
                  <circle cx={dx + 1} cy={dy + 1} r="7" fill="black" fillOpacity="0.08" />
                  {/* dot */}
                  <circle cx={dx} cy={dy} r="7" fill={d.fill} stroke="white" strokeWidth="2" />
                  {/* label */}
                  <text x={lx} y={ly} textAnchor={anchor} fill="#1f2937" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">{d.name}</text>
                </g>
              );
            })}

            {/* ── legend ── */}
            <g transform={`translate(${PAD.left + PLOT_W - 155}, ${PAD.top + 12})`}>
              <rect x="-6" y="-10" width="160" height="52" rx="4" fill="white" fillOpacity="0.7" />
              <circle cx="6" cy="4" r="5" fill="#16a34a" />
              <text x="16" y="8" fill="#374151" fontSize="9" fontFamily="system-ui, sans-serif">Growing skills</text>
              <circle cx="6" cy="22" r="5" fill="#d97706" />
              <text x="16" y="26" fill="#374151" fontSize="9" fontFamily="system-ui, sans-serif">Flat / narrow skills</text>
              <circle cx="6" cy="40" r="5" fill="#dc2626" />
              <text x="16" y="44" fill="#374151" fontSize="9" fontFamily="system-ui, sans-serif">Constrained / stagnant</text>
            </g>
          </svg>
        </div>
      </div>

      {/* ── footer ── */}
      <div
        className="border-t px-6 py-3"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p className="text-center text-xs" style={{ color: "var(--text-grey)" }}>
          All six departments fall in the low business-impact zone. The target zone (top-right) is
          empty because the operational structure, not the team, determines whether skills translate
          into measurable business outcomes.
        </p>
      </div>
    </div>
  );
}