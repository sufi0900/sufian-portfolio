// components/report/PatternDetectionDiagram.tsx
//
// REDESIGN — previous version was a flat list of items with a bar on the
// left and a box on the right, which communicated the data but not the
// concept.
//
// COMMUNICATION GOAL: Multiple independent signals (each a documented
// flaw) converge from different directions toward a single point — the
// Google spam detection system. The visual makes two things immediately
// clear: (1) each flaw is a separate, independent signal and (2) they
// ALL point to the same conclusion.
//
// DESIGN: SVG-based radial convergence. Six signal nodes are placed in an
// arc around a central "detection zone" target. Each node has a label and
// a chapter badge. Arrow lines radiate inward, all pointing at the red
// center circle. The center shows a warning icon and "Spam Pattern
// Detected". This is a proper infographic — the geometry carries the
// argument.

type Signal = {
  label: string;
  chapter: string;
};

export function PatternDetectionDiagram({
  figureNumber,
  title,
  signals,
}: {
  figureNumber: string;
  title: string;
  signals: Signal[];
}) {
  // SVG canvas
  const W = 860;
  const H = 480;
  const cx = W / 2;
  const cy = H / 2;

  // Center target radius
  const targetR = 68;

  // Signal node positions — arranged in a wide arc around the center
  // Six signals: three on the left arc, three on the right arc
  const nodePositions = [
    { x: 90,  y: 110 },  // top-left
    { x: 90,  y: H / 2 },  // mid-left
    { x: 90,  y: H - 110 },  // bottom-left
    { x: W - 90, y: 110 },  // top-right
    { x: W - 90, y: H / 2 },  // mid-right
    { x: W - 90, y: H - 110 },  // bottom-right
  ];

  // Shorten arrow: stop arrow at edge of target circle
  function arrowEnd(nx: number, ny: number) {
    const dx = cx - nx;
    const dy = cy - ny;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const t = (dist - targetR - 10) / dist;
    return { ax: nx + dx * t, ay: ny + dy * t };
  }

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* Header band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* SVG canvas */}
      <div style={{ background: "var(--pale-blue)", padding: "8px" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: `${W}px`,
            margin: "0 auto",
            paddingBottom: `${(H / W) * 100}%`,
          }}
        >
          <svg
            viewBox={`0 0 ${W} ${H}`}
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "block",
            }}
          >
            <defs>
              <radialGradient id="targetGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#c0392b" stopOpacity="1" />
                <stop offset="100%" stopColor="#7f1d1d" stopOpacity="1" />
              </radialGradient>
              <radialGradient id="targetGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ef4444" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
              </radialGradient>
              <marker
                id="arrowhead"
                markerWidth="8"
                markerHeight="6"
                refX="7"
                refY="3"
                orient="auto"
              >
                <path d="M0,0 L0,6 L8,3 z" fill="#c0392b" opacity="0.75" />
              </marker>
            </defs>

            {/* Glow behind target */}
            <circle cx={cx} cy={cy} r={targetR + 42} fill="url(#targetGlow)" />

            {/* Arrow lines from each signal node to the center */}
            {nodePositions.map((pos, i) => {
              if (i >= signals.length) return null;
              const { ax, ay } = arrowEnd(pos.x, pos.y);
              return (
                <line
                  key={i}
                  x1={pos.x}
                  y1={pos.y}
                  x2={ax}
                  y2={ay}
                  stroke="#c0392b"
                  strokeWidth="1.75"
                  strokeDasharray="6 4"
                  opacity="0.55"
                  markerEnd="url(#arrowhead)"
                />
              );
            })}

            {/* Target outer ring */}
            <circle
              cx={cx}
              cy={cy}
              r={targetR + 12}
              fill="none"
              stroke="#c0392b"
              strokeWidth="1.5"
              strokeDasharray="8 5"
              opacity="0.35"
            />

            {/* Target center */}
            <circle cx={cx} cy={cy} r={targetR} fill="url(#targetGrad)" />

            {/* Warning icon */}
            <text
              x={cx}
              y={cy - 14}
              textAnchor="middle"
              fontSize="22"
              fill="white"
            >
              ⚠
            </text>

            {/* Center label */}
            <text
              x={cx}
              y={cy + 6}
              textAnchor="middle"
              fontSize="14"
              fontWeight="800"
              fill="white"
              letterSpacing="0.5"
            >
              SPAM PATTERN
            </text>
            <text
              x={cx}
              y={cy + 21}
              textAnchor="middle"
              fontSize="14"
              fontWeight="700"
              fill="rgba(255,255,255,0.85)"
            >
              DETECTED
            </text>

            {/* Signal nodes */}
            {nodePositions.map((pos, i) => {
              if (i >= signals.length) return null;
              const sig = signals[i];
              const isLeft = pos.x < W / 2;

              // Card dimensions
              const cardW = 178;
              const cardH = 54;
              const cardX = isLeft ? pos.x - cardW / 2 : pos.x - cardW / 2;
              const cardY = pos.y - cardH / 2;

              return (
                <g key={i}>
                  {/* Card background */}
                  <rect
                    x={cardX}
                    y={cardY}
                    width={cardW}
                    height={cardH}
                    rx="8"
                    fill="white"
                    stroke="#e5e9ef"
                    strokeWidth="1.5"
                    style={{ filter: "drop-shadow(0 2px 6px rgba(10,22,40,0.08))" }}
                  />

                  {/* Chapter badge */}
                  <rect
                    x={cardX + 8}
                    y={cardY + 10}
                    width={34}
                    height={16}
                    rx="4"
                    fill="var(--light-blue)"
                  />
                  <text
                    x={cardX + 25}
                    y={cardY + 21}
                    textAnchor="middle"
                    fontSize="8"
                    fontWeight="800"
                    fill="#004DFD"
                  >
                    Ch {sig.chapter}
                  </text>

                  {/* Signal label — wrap long text into two lines */}
                  {((): string[] => {
                    const words = sig.label.split(" ");
                    const line1Words: string[] = [];
                    const line2Words: string[] = [];
                    let line1 = "";
                    for (const w of words) {
                      if ((line1 + " " + w).trim().length <= 22) {
                        line1Words.push(w);
                        line1 = line1Words.join(" ");
                      } else {
                        line2Words.push(w);
                      }
                    }
                    const l1 = line1Words.join(" ");
                    const l2 = line2Words.join(" ");
                    return [l1, l2];
                  })().map((line, li) =>
                    line ? (
                      <text
                        key={li}
                        x={cardX + 48}
                        y={cardY + 20 + li * 14}
                        fontSize="12"
                        fontWeight={li === 0 ? "700" : "500"}
                        fill={li === 0 ? "#0A1628" : "#64748b"}
                      >
                        {line}
                      </text>
                    ) : null
                  )}
                </g>
              );
            })}

            {/* Subtitle below target */}
            <text
              x={cx}
              y={cy + targetR + 28}
              textAnchor="middle"
              fontSize="14"
              fill="#64748b"
              fontStyle="italic"
            >
              Each signal is independent. Together they form a single fingerprint.
            </text>
          </svg>
        </div>
      </div>

      {/* Footnote band */}
      <div
        className="border-t px-6 py-3"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p
          className="text-center text-[13px] leading-relaxed"
          style={{ color: "var(--text-grey)" }}
        >
          Google&apos;s systems evaluate patterns across the full site network,
          not individual pages. Every signal above makes classification easier;
          together they make it near-automatic.
        </p>
      </div>
    </div>
  );
}