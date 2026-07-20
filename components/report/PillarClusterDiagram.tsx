// app/report/chapter-13/PillarClusterTreeDiagram.tsx
//
// Three-tier pillar-cluster architecture with research-based keywords.
// Pillar → 5 cluster topics → 2 sub-clusters each (10 total).
// Connectors carry upward arrows and gradient coloring to visualize
// authority ("SEO juice") flowing from sub-clusters through clusters
// into the pillar page. Deeper color = more concentrated authority.

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

// Layout constants
const VB_W = 780;
const VB_H = 430;
const PILLAR_W = 160;
const PILLAR_H = 54;
const CLUSTER_W = 120;
const CLUSTER_H = 46;
const CHILD_W = 100;
const CHILD_H = 42;
const PILLAR_X = VB_W / 2 - PILLAR_W / 2;
const PILLAR_Y = 30;
const CLUSTER_Y = 160;
const CHILD_Y = 295;
const CLUSTER_SPACING = VB_W / CLUSTERS.length;

function MultiLineText({
  x,
  y,
  text,
  fontSize,
  fontWeight,
  fill,
  lineHeight = 12,
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
  const headLen = 7;
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
        opacity="0.7"
      />
      <polygon
        points={`${x2},${y2} ${hx1},${hy1} ${hx2},${hy2}`}
        fill={color}
        opacity="0.85"
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
  const pillarCX = PILLAR_X + PILLAR_W / 2;
  const pillarBottom = PILLAR_Y + PILLAR_H;

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
        <div style={{ width: "100%", maxWidth: `${VB_W}px` }}>
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={title}
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <defs>
              {/* Glow filter for pillar node */}
              <filter id="pillarGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              {/* Gradient for authority flow labels */}
              <linearGradient id="flowGrad" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#9fb8ea" />
                <stop offset="100%" stopColor="var(--lionxe-blue)" />
              </linearGradient>
            </defs>

            {/* ── TIER 3 → TIER 2 connectors (light blue, authority entering) ── */}
            {CLUSTERS.map((c, ci) => {
              const clusterCX = CLUSTER_SPACING * ci + CLUSTER_SPACING / 2;
              const clusterTop = CLUSTER_Y;

              return c.children.map((_, chi) => {
                const childCX =
                  clusterCX + (chi === 0 ? -CHILD_W / 2 - 8 : CHILD_W / 2 + 8);
                return (
                  <AuthorityArrow
                    key={`t3-${ci}-${chi}`}
                    x1={childCX}
                    y1={CHILD_Y}
                    x2={clusterCX}
                    y2={clusterTop + CLUSTER_H}
                    color="#9fb8ea"
                    strokeW={1.5}
                  />
                );
              });
            })}

            {/* ── TIER 2 → PILLAR connectors (lionxe-blue, authority consolidating) ── */}
            {CLUSTERS.map((_, ci) => {
              const clusterCX = CLUSTER_SPACING * ci + CLUSTER_SPACING / 2;
              return (
                <AuthorityArrow
                  key={`t2-${ci}`}
                  x1={clusterCX}
                  y1={CLUSTER_Y}
                  x2={pillarCX}
                  y2={pillarBottom}
                  color="var(--lionxe-blue)"
                  strokeW={2}
                />
              );
            })}

            {/* ── PILLAR NODE (Tier 1, darkest — where authority pools) ── */}
            <rect
              x={PILLAR_X}
              y={PILLAR_Y}
              width={PILLAR_W}
              height={PILLAR_H}
              rx="10"
              fill="var(--navy)"
              filter="url(#pillarGlow)"
            />
            <text
              x={pillarCX}
              y={PILLAR_Y + 18}
              textAnchor="middle"
              fontSize="8"
              fontWeight="700"
              fill="var(--lionxe-blue)"
              letterSpacing="0.1em"
            >
              PILLAR PAGE
            </text>
            <text
              x={pillarCX}
              y={PILLAR_Y + 36}
              textAnchor="middle"
              fontSize="13"
              fontWeight="800"
              fill="white"
            >
              Area Rug Cleaning
            </text>

            {/* Authority label on right side */}
            <text
              x={PILLAR_X + PILLAR_W + 14}
              y={PILLAR_Y + PILLAR_H / 2 + 1}
              fontSize="8"
              fontWeight="600"
              fill="var(--lionxe-blue)"
              dominantBaseline="middle"
            >
              ← Authority concentrates here
            </text>

            {/* ── CLUSTER NODES (Tier 2) ── */}
            {CLUSTERS.map((c, ci) => {
              const cx = CLUSTER_SPACING * ci + CLUSTER_SPACING / 2 - CLUSTER_W / 2;
              return (
                <g key={`cluster-${ci}`}>
                  <rect
                    x={cx}
                    y={CLUSTER_Y}
                    width={CLUSTER_W}
                    height={CLUSTER_H}
                    rx="8"
                    fill="#2a4a8f"
                  />
                  <MultiLineText
                    x={cx + CLUSTER_W / 2}
                    y={CLUSTER_Y + CLUSTER_H / 2}
                    text={c.label}
                    fontSize={9.5}
                    fontWeight={700}
                    fill="white"
                    lineHeight={11}
                  />
                </g>
              );
            })}

            {/* ── SUB-CLUSTER NODES (Tier 3) ── */}
            {CLUSTERS.map((c, ci) => {
              const clusterCX = CLUSTER_SPACING * ci + CLUSTER_SPACING / 2;
              return c.children.map((child, chi) => {
                const childCX =
                  clusterCX +
                  (chi === 0 ? -CHILD_W / 2 - 8 : CHILD_W / 2 + 8);
                const childX = childCX - CHILD_W / 2;
                return (
                  <g key={`child-${ci}-${chi}`}>
                    <rect
                      x={childX}
                      y={CHILD_Y}
                      width={CHILD_W}
                      height={CHILD_H}
                      rx="6"
                      fill="white"
                      stroke="#b0c4de"
                      strokeWidth="1.2"
                    />
                    <MultiLineText
                      x={childCX}
                      y={CHILD_Y + CHILD_H / 2}
                      text={child}
                      fontSize={8}
                      fontWeight={600}
                      fill="#4a5568"
                      lineHeight={10}
                    />
                  </g>
                );
              });
            })}

            {/* ── AUTHORITY FLOW INDICATOR (vertical gradient bar) ── */}
            <rect x={18} y={PILLAR_Y + 10} width={6} height={CHILD_Y + CHILD_H - PILLAR_Y - 10} rx="3" fill="url(#flowGrad)" />
            <text x={14} y={CHILD_Y + CHILD_H + 16} textAnchor="middle" fontSize="7" fontWeight="600" fill="#9fb8ea">
              LOW
            </text>
            <text x={14} y={PILLAR_Y} textAnchor="middle" fontSize="7" fontWeight="600" fill="var(--lionxe-blue)">
              HIGH
            </text>
            <text
              x={14}
              y={(PILLAR_Y + CHILD_Y + CHILD_H) / 2}
              textAnchor="middle"
              fontSize="7"
              fontWeight="700"
              fill="#6b7280"
              transform={`rotate(-90, 14, ${(PILLAR_Y + CHILD_Y + CHILD_H) / 2})`}
            >
              AUTHORITY FLOW
            </text>

            {/* ── LEGEND ── */}
            <g>
              <text x={VB_W / 2 - 200} y={VB_H - 14} fontSize="8.5" fontWeight="700" fill="var(--navy)">
                Authority flow:
              </text>
              <line x1={VB_W / 2 - 128} y1={VB_H - 18} x2={VB_W / 2 - 96} y2={VB_H - 18} stroke="#9fb8ea" strokeWidth="2" />
              <polygon points={`${VB_W / 2 - 96},${VB_H - 18} ${VB_W / 2 - 103},${VB_H - 22} ${VB_W / 2 - 103},${VB_H - 14}`} fill="#9fb8ea" />
              <text x={VB_W / 2 - 90} y={VB_H - 14} fontSize="8" fill="#6b7280">
                Sub-topic to cluster
              </text>
              <line x1={VB_W / 2 + 30} y1={VB_H - 18} x2={VB_W / 2 + 62} y2={VB_H - 18} stroke="var(--lionxe-blue)" strokeWidth="2" />
              <polygon points={`${VB_W / 2 + 62},${VB_H - 18} ${VB_W / 2 + 55},${VB_H - 22} ${VB_W / 2 + 55},${VB_H - 14}`} fill="var(--lionxe-blue)" />
              <text x={VB_W / 2 + 68} y={VB_H - 14} fontSize="8" fill="#6b7280">
                Cluster to pillar
              </text>
            </g>
          </svg>
        </div>
      </div>

      {/* Footnote */}
      <div
        className="border-t px-6 py-3"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p
          className="text-center text-[10px] leading-relaxed"
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