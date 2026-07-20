// components/report/KeywordIntentDiagram.tsx
//
// COMMUNICATION GOAL: Show that multiple keyword phrases all resolve to
// one shared user intent through visual convergence. Keywords fan inward
// from left and right into a large, distinctly bordered central bullseye.

import React from "react";

type KeywordEntry = {
  keyword: string;
  isPrimary?: boolean;
};

export function KeywordIntentDiagram({
  figureNumber,
  title,
  keywords,
  sharedIntent,
}: {
  figureNumber: string;
  title: string;
  keywords: KeywordEntry[];
  sharedIntent: string;
}) {
  // Split keywords: first half on the left, second half on the right
  const half = Math.ceil(keywords.length / 2);
  const leftKeywords = keywords.slice(0, half);
  const rightKeywords = keywords.slice(half);

  // ── Layout constants ──
  const svgW = 950;
  const svgH = 550;
  const centerX = 475;
  const centerY = 255;
  
  // Significantly enlarged bullseye system to safely contain large text
  const bullOuter = 165;
  const bullMid2 = 140;
  const bullMid1 = 115;
  const bullCore = 95; 
  const bullDot = 14;

  const leftX = 145;
  const rightX = 805;
  const pillW = 260;
  const pillH = 56;
  const pillR = 12;
  const ySlots = [90, 255, 420];

  // Helper: point on bullseye perimeter facing the source keyword
  const getBullseyePoint = (fromX: number, fromY: number) => {
    const dx = centerX - fromX;
    const dy = centerY - fromY;
    const angle = Math.atan2(dy, dx);
    return {
      x: centerX - Math.cos(angle) * (bullOuter + 4),
      y: centerY - Math.sin(angle) * (bullOuter + 4),
    };
  };

  // Smart split: Finds the exact middle point by CHARACTER LENGTH 
  // to ensure neither line overflows the horizontal bounds of the circle.
  const words = sharedIntent.split(" ");
  let bestMid = Math.ceil(words.length / 2);
  if (words.length > 2) {
    let minDiff = Infinity;
    for (let i = 1; i < words.length; i++) {
      const len1 = words.slice(0, i).join(" ").length;
      const len2 = words.slice(i).join(" ").length;
      const diff = Math.abs(len1 - len2);
      if (diff < minDiff) {
        minDiff = diff;
        bestMid = i;
      }
    }
  }
  const intentLine1 = words.slice(0, bestMid).join(" ");
  const intentLine2 = words.slice(bestMid).join(" ");

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* ── Header ── */}
      <div className="px-6 py-4" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white opacity-75">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-1 text-sm font-bold text-white">{title}</p>
      </div>

      {/* ── SVG Visualization ── */}
      <div
        className="flex justify-center px-4 py-8 sm:px-6"
        style={{ background: "var(--pale-blue)" }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "750px",
            aspectRatio: `${svgW} / ${svgH}`,
            position: "relative",
          }}
        >
          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            xmlns="http://www.w3.org/2000/svg"
            width={svgW}
            height={svgH}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              {/* Deep 3D sphere gradient to contrast purely with white text */}
              <radialGradient id="kwBullGradV3" cx="50%" cy="45%" r="55%">
                <stop offset="0%" stopColor="#1a3050" />
                <stop offset="50%" stopColor="#112640" />
                <stop offset="100%" stopColor="#0A1628" />
              </radialGradient>

              <filter
                id="kwGlowV3"
                x="-50%"
                y="-50%"
                width="200%"
                height="200%"
              >
                <feGaussianBlur stdDeviation="10" result="b" />
                <feComposite in="SourceGraphic" in2="b" operator="over" />
              </filter>

              <filter
                id="kwPillShV3"
                x="-15%"
                y="-15%"
                width="130%"
                height="150%"
              >
                <feDropShadow
                  dx="0"
                  dy="3"
                  stdDeviation="5"
                  floodOpacity="0.12"
                />
              </filter>

              <filter
                id="kwPillShDarkV3"
                x="-15%"
                y="-15%"
                width="130%"
                height="150%"
              >
                <feDropShadow
                  dx="0"
                  dy="4"
                  stdDeviation="6"
                  floodOpacity="0.30"
                />
              </filter>
            </defs>

            {/* ════════ BULLSEYE TARGET (Substantial LIONXE Borders) ════════ */}
            <circle
              cx={centerX}
              cy={centerY}
              r={bullOuter}
              fill="none"
              stroke="#004DFD"
              strokeWidth="2.5"
              opacity="0.25"
            />
            <circle
              cx={centerX}
              cy={centerY}
              r={bullMid2}
              fill="none"
              stroke="#004DFD"
              strokeWidth="2.5"
              opacity="0.4"
            />
            <circle
              cx={centerX}
              cy={centerY}
              r={bullMid1}
              fill="none"
              stroke="#004DFD"
              strokeWidth="3"
              opacity="0.6"
            />
            
            {/* Inner Core - Massive expansion to contain text securely */}
            <circle
              cx={centerX}
              cy={centerY}
              r={bullCore}
              fill="url(#kwBullGradV3)"
              stroke="#004DFD"
              strokeWidth="3.5"
              filter="url(#kwGlowV3)"
            />

            {/* ════════ SHARED INTENT TEXT (Perfectly Contained) ════════ */}
            <text
              x={centerX}
              y={centerY - 11}
              textAnchor="middle"
              fontSize="16"
              fontWeight="900"
              fill="#ffffff"
              letterSpacing="0.4"
            >
              {intentLine1}
            </text>
            <text
              x={centerX}
              y={centerY + 13}
              textAnchor="middle"
              fontSize="16"
              fontWeight="900"
              fill="#ffffff"
              letterSpacing="0.4"
            >
              {intentLine2}
            </text>

            {/* ════════ LEFT SIDE KEYWORDS ════════ */}
            {leftKeywords.map((kw, i) => {
              const y = ySlots[i];
              const pillRight = leftX + pillW / 2;
              const bp = getBullseyePoint(leftX, y);
              const isP = !!kw.isPrimary;

              return (
                <g key={`lk${i}`}>
                  <line
                    x1={pillRight + 4}
                    y1={y}
                    x2={bp.x}
                    y2={bp.y}
                    stroke={isP ? "#0A1628" : "#004DFD"}
                    strokeWidth={isP ? 3 : 2}
                    opacity={isP ? 0.85 : 0.35}
                    strokeDasharray={isP ? "none" : "8,5"}
                  />
                  <circle
                    cx={bp.x}
                    cy={bp.y}
                    r={isP ? 5.5 : 4}
                    fill={isP ? "#0A1628" : "#004DFD"}
                    opacity={isP ? 0.9 : 0.5}
                  />

                  <rect
                    x={leftX - pillW / 2}
                    y={y - pillH / 2}
                    width={pillW}
                    height={pillH}
                    rx={pillR}
                    fill={isP ? "#0A1628" : "#ffffff"}
                    stroke={isP ? "#004DFD" : "#cbd5e1"}
                    strokeWidth={isP ? 2.5 : 1.5}
                    filter={isP ? "url(#kwPillShDarkV3)" : "url(#kwPillShV3)"}
                  />

                  {isP && (
                    <rect
                      x={leftX - pillW / 2}
                      y={y - pillH / 2}
                      width="5"
                      height={pillH}
                      rx="2.5"
                      fill="#004DFD"
                    />
                  )}

                  {isP && (
                    <g>
                      <rect
                        x={leftX + pillW / 2 - 64}
                        y={y - pillH / 2 - 14}
                        width="64"
                        height="20"
                        rx="10"
                        fill="#fbbf24"
                        stroke="#b58a06"
                        strokeWidth="0.8"
                      />
                      <text
                        x={leftX + pillW / 2 - 32}
                        y={y - pillH / 2 - 0.5}
                        textAnchor="middle"
                        fontSize="9.5"
                        fontWeight="900"
                        fill="#0A1628"
                        letterSpacing="0.8"
                      >
                        PRIMARY
                      </text>
                    </g>
                  )}

                  <text
                    x={leftX + (isP ? 3 : 0)}
                    y={y + 5.5}
                    textAnchor="middle"
                    fontSize={isP ? "13.5" : "12.5"}
                    fontWeight={isP ? "900" : "700"}
                    fill={isP ? "#ffffff" : "#0f172a"}
                    letterSpacing="0.15"
                  >
                    {kw.keyword}
                  </text>
                </g>
              );
            })}

            {/* ════════ RIGHT SIDE KEYWORDS ════════ */}
            {rightKeywords.map((kw, i) => {
              const y = ySlots[i];
              const pillLeft = rightX - pillW / 2;
              const bp = getBullseyePoint(rightX, y);

              return (
                <g key={`rk${i}`}>
                  <line
                    x1={pillLeft - 4}
                    y1={y}
                    x2={bp.x}
                    y2={bp.y}
                    stroke="#004DFD"
                    strokeWidth="2"
                    opacity="0.35"
                    strokeDasharray="8,5"
                  />
                  <circle
                    cx={bp.x}
                    cy={bp.y}
                    r="4"
                    fill="#004DFD"
                    opacity="0.5"
                  />

                  <rect
                    x={rightX - pillW / 2}
                    y={y - pillH / 2}
                    width={pillW}
                    height={pillH}
                    rx={pillR}
                    fill="#ffffff"
                    stroke="#cbd5e1"
                    strokeWidth="1.5"
                    filter="url(#kwPillShV3)"
                  />

                  <text
                    x={rightX}
                    y={y + 5.5}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="#0f172a"
                    letterSpacing="0.15"
                  >
                    {kw.keyword}
                  </text>
                </g>
              );
            })}

            {/* ════════ BOTTOM ANNOTATION ════════ */}
            <text
              x={centerX}
              y={525}
              textAnchor="middle"
              fontSize="15"
          fontWeight="700"
              fill="#1e293b"
              letterSpacing="0.4"
            >
              All keyword variations converge to one search intent
            </text>
          </svg>
        </div>
      </div>

      {/* ── Explanation ── */}
      <div
        className="border-t px-6 py-4"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--text-grey)" }}
        >
          Whether searchers use the primary phrase or any of the secondary
          variations, search systems resolve all queries to the same underlying
          user intent. Targeting each keyword separately treats redundant
          variations as distinct opportunities, fragmenting authority that should
          concentrate on the shared intent at the center.
        </p>
      </div>
    </div>
  );
}