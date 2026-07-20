// app/report/chapter-13/PillarClusterTreeDiagram.tsx
//
// Three-tier pillar-cluster architecture with research-based keywords.
// Pillar → 5 cluster topics → 2 sub-clusters each (10 total).
// Staggered layout prevents overlap. Color gradient (faint to dark) 
// visually maps the concentration of SEO authority from bottom to top.

import React from "react";

type Cluster = {
  label: string;
  children: [string, string];
};

const CLUSTERS: Cluster[] = [
  {
    label: "Rug Material\nCare Guides",
    children: [
      "How to Clean\na Wool Rug",
      "Silk & Antique\nRug Cleaning",
    ],
  },
  {
    label: "Stain & Odor\nRemoval",
    children: [
      "Pet Stain Removal\nfrom Area Rugs",
      "Wine & Food\nStain Treatment",
    ],
  },
  {
    label: "Professional vs.\nDIY Cleaning",
    children: [
      "Area Rug Cleaning\nCost Guide",
      "Steam vs. Dry\nCleaning Methods",
    ],
  },
  {
    label: "Rug Damage\nRestoration",
    children: [
      "Water-Damaged\nRug Recovery",
      "Color Bleeding\n& Dye Repair",
    ],
  },
  {
    label: "Maintenance\n& Protection",
    children: [
      "Rug Padding\nSelection Guide",
      "Seasonal Care\n& Storage",
    ],
  },
];

// Layout constants (Enlarged canvas for better text visibility)
const VB_W = 920;
const VB_H = 680;

const PILLAR_W = 280;
const PILLAR_H = 100;
const PILLAR_X = VB_W / 2 - PILLAR_W / 2;
const PILLAR_Y = 40;
const PILLAR_CX = PILLAR_X + PILLAR_W / 2;

const CLUSTER_W = 160;
const CLUSTER_H = 100;
const CLUSTER_Y = 250;

const CHILD_W = 130;
const CHILD_H = 80;

// Calculate X centers for clusters to space them evenly
const CLUSTER_CENTERS = CLUSTERS.map((_, i) => {
  const spacing = VB_W / CLUSTERS.length;
  return spacing * i + spacing / 2;
});

function MultiLineText({
  x,
  y,
  text,
  fontSize,
  fontWeight,
  fill,
  lineHeight = 16,
}: {
  x: number;
  y: number;
  text: string;
  fontSize: number;
  fontWeight: number;
  fill: string;
  lineHeight?: number;
}) {
  const lines = text.split("\n");
  const startY = y - ((lines.length - 1) * lineHeight) / 2;
  return (
    <>
      {lines.map((line, i) => (
        <text
          key={i}
          x={x}
          y={startY + i * lineHeight}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={fill}
        >
          {line}
        </text>
      ))}
    </>
  );
}

function AuthorityArrow({
  x1,
  y1,
  x2,
  y2,
  color,
  strokeW = 2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  strokeW?: number;
}) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const headLen = 10;
  const hx1 = x2 - headLen * Math.cos(angle - Math.PI / 7);
  const hy1 = y2 - headLen * Math.sin(angle - Math.PI / 7);
  const hx2 = x2 - headLen * Math.cos(angle + Math.PI / 7);
  const hy2 = y2 - headLen * Math.sin(angle + Math.PI / 7);
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={strokeW}
        opacity="0.8"
      />
      <polygon
        points={`${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`}
        fill={color}
        opacity="1"
      />
    </g>
  );
}

export function PillarClusterTreeDiagram({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  // Flatten children to easily calculate the zigzag positions
  const allChildren = CLUSTERS.flatMap((c, ci) =>
    c.children.map((child, chi) => ({ child, ci, chi }))
  );

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* Header */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* SVG Canvas */}
      <div
        className="flex justify-center px-4 py-6 sm:px-6"
        style={{ background: "var(--pale-blue)" }}
      >
        <div style={{ width: "100%", maxWidth: "920px", aspectRatio: "920 / 680", position: "relative" }}>
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={title}
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          >
            {/* ── TIER 3 → TIER 2 connectors (Light blue arrows - Low Strength) ── */}
            {allChildren.map(({ ci, chi }, idx) => {
              const clusterCX = CLUSTER_CENTERS[ci];
              const clusterBottom = CLUSTER_Y + CLUSTER_H;

              // Zigzag logic: even items go up, odd items go down
              const childY = idx % 2 === 0 ? 460 : 560;
              
              // New spacing formula to prevent left/right cutoffs
              const childCX = 80 + idx * 85;

              return (
                <AuthorityArrow
                  key={`t3-${idx}`}
                  x1={childCX}
                  y1={childY}
                  x2={clusterCX}
                  y2={clusterBottom}
                  color="#60a5fa" // Blue 400 - Low strength
                  strokeW={2.5}
                />
              );
            })}

            {/* ── TIER 2 → PILLAR connectors (Medium blue arrows - Medium Strength) ── */}
            {CLUSTER_CENTERS.map((cx, i) => (
              <AuthorityArrow
                key={`t2-${i}`}
                x1={cx}
                y1={CLUSTER_Y}
                x2={PILLAR_CX}
                y2={PILLAR_Y + PILLAR_H}
                color="#1d4ed8" // Blue 700 - Medium-High strength
                strokeW={3.5}
              />
            ))}

            {/* ── PILLAR NODE (Tier 1, Darkest Blue - Highest Strength) ── */}
            <rect
              x={PILLAR_X}
              y={PILLAR_Y}
              width={PILLAR_W}
              height={PILLAR_H}
              rx="12"
              fill="#1e3a8a" // Blue 900 - Highest strength
            />
            <text
              x={PILLAR_CX}
              y={PILLAR_Y + 30}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="#93c5fd"
              letterSpacing="0.1em"
            >
              PILLAR PAGE
            </text>
            <text
              x={PILLAR_CX}
              y={PILLAR_Y + 65}
              textAnchor="middle"
              fontSize="26"
              fontWeight="800"
              fill="white"
            >
              Area Rug Cleaning
            </text>

            {/* ── CLUSTER NODES (Tier 2, Solid Blue - Medium Strength) ── */}
            {CLUSTERS.map((c, i) => {
              const cx = CLUSTER_CENTERS[i] - CLUSTER_W / 2;
              return (
                <g key={`cluster-${i}`}>
                  <rect
                    x={cx}
                    y={CLUSTER_Y}
                    width={CLUSTER_W}
                    height={CLUSTER_H}
                    rx="10"
                    fill="#3b82f6" // Blue 500 - Medium strength
                  />
                  <MultiLineText
                    x={cx + CLUSTER_W / 2}
                    y={CLUSTER_Y + CLUSTER_H / 2}
                    text={c.label}
                    fontSize={15}
                    fontWeight={700}
                    fill="white"
                    lineHeight={18}
                  />
                </g>
              );
            })}

            {/* ── SUB-CLUSTER NODES (Tier 3, Pale Blue - Faint Strength) ── */}
            {allChildren.map((item, idx) => {
              const childCX = 80 + idx * 85;
              const childX = childCX - CHILD_W / 2;
              const childY = idx % 2 === 0 ? 460 : 560;

              return (
                <g key={`child-${idx}`}>
                  <rect
                    x={childX}
                    y={childY}
                    width={CHILD_W}
                    height={CHILD_H}
                    rx="8"
                    fill="#bfdbfe" // Blue 200 - Faint strength
                    stroke="#93c5fd"
                    strokeWidth="2"
                  />
                  <MultiLineText
                    x={childCX}
                    y={childY + CHILD_H / 2}
                    text={item.child}
                    fontSize={12}
                    fontWeight={600}
                    fill="#1e40af" // Blue 800 text for contrast
                    lineHeight={14}
                  />
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Footnote */}
      <div
        className="border-t px-6 py-3"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p
          className="text-center text-[11px] leading-relaxed font-medium"
          style={{ color: "var(--text-grey)" }}
        >
          Every sub-topic passes internal linking authority upward through its
          parent cluster into the pillar page. Content written at any tier
          strengthens the entire hierarchy, concentrating domain authority on the
          pillar&apos;s target query.
        </p>
      </div>
    </div>
  );
}