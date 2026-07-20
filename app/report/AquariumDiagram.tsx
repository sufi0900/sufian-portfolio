// app/report/chapter-13/AquariumDiagram.tsx
//
// COMMUNICATION GOAL: Partial fixes fail because the structure itself is
// the contaminant. We use a realistic fish tank SVG to show that cleaning
// one fish (or all fish) in dirty water fails. The water must be changed.

const PANELS = [
  {
    label: "Fix One Department",
    water: "dirty",
    fishState: "1 clean fish, 5 still contaminated",
    verdict: "Re-contaminated by the structure",
    pass: false,
  },
  {
    label: "Fix Every Department",
    water: "dirty",
    fishState: "All 6 fish cleaned",
    verdict: "Still re-contaminated: the water is the problem",
    pass: false,
  },
  {
    label: "Replace the Water",
    water: "clean",
    fishState: "Same 6 fish, new structure",
    verdict: "The only configuration that holds",
    pass: true,
  },
];

export function AquariumDiagram({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-7 rounded-xl border p-6 overflow-hidden"
      style={{
        borderColor: "var(--border-grey)",
        background: "white",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      <p
        className="mb-5 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {PANELS.map((panel, i) => (
          <div key={i} className="flex flex-col">
            <div className="mb-2 flex items-center gap-2">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{ background: panel.pass ? "#15803d" : "var(--text-light)" }}
              >
                {i + 1}
              </span>
              <p className="text-xs font-bold" style={{ color: "var(--navy)" }}>
                {panel.label}
              </p>
            </div>

            {/* Aquarium SVG Tank */}
            <div
              className="w-full"
              style={{ aspectRatio: "4 / 3", position: "relative" }}
            >
              <svg
                viewBox="0 0 200 150"
                xmlns="http://www.w3.org/2000/svg"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
              >
                {/* Tank Glass */}
                <rect x="10" y="10" width="180" height="130" rx="6" fill="white" stroke="#cbd5e1" strokeWidth="2" />
                
                {/* Water */}
                <path
                  d="M 12 40 Q 50 35 100 40 T 188 40 L 188 138 L 12 138 Z"
                  fill={panel.water === "dirty" ? "#78716c" : "#38bdf8"}
                  opacity={panel.water === "dirty" ? 0.4 : 0.6}
                />
                {/* Water Surface */}
                <path
                  d="M 12 40 Q 50 35 100 40 T 188 40"
                  fill="none"
                  stroke={panel.water === "dirty" ? "#57534e" : "#0ea5e9"}
                  strokeWidth="2"
                />

                {/* Bubbles (only in clean water) */}
                {panel.water === "clean" && (
                  <>
                    <circle cx="160" cy="120" r="3" fill="white" opacity="0.6" />
                    <circle cx="165" cy="100" r="2" fill="white" opacity="0.6" />
                    <circle cx="155" cy="80" r="4" fill="white" opacity="0.6" />
                    <circle cx="40" cy="110" r="2" fill="white" opacity="0.6" />
                  </>
                )}

                {/* Fish Array (3x2 grid) */}
                {[40, 90].map((cy) => 
                  [40, 100, 160].map((cx) => {
                    const isFirstFish = cx === 40 && cy === 40;
                    const isClean = panel.pass ? true : i === 0 ? isFirstFish : i === 1;
                    // Changed from yellow (#f59e0b) to emerald green (#10b981)
                    const color = isClean ? "#10b981" : "#6b7280";
                    
                    return (
                      <g key={`${cx}-${cy}`} transform={`translate(${cx}, ${cy})`}>
                        {/* Fish Body */}
                        <ellipse cx="0" cy="0" rx="12" ry="6" fill={color} />
                        {/* Fish Tail */}
                        <polygon points="-10,0 -18,-6 -18,6" fill={color} />
                        {/* Fish Eye */}
                        <circle cx="6" cy="-1" r="1.5" fill="white" />
                        <circle cx="6" cy="-1" r="0.5" fill="black" />
                      </g>
                    );
                  })
                )}
              </svg>
            </div>

            {/* Water Label */}
            <div className="mt-1 text-center">
              <span
                className="rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider text-white"
                style={{ background: panel.water === "dirty" ? "#78716c" : "#0284c7" }}
              >
                {panel.water === "dirty" ? "Contaminated structure" : "New structure"}
              </span>
            </div>

            {/* Verdict */}
            <div
              className="mt-2 rounded-lg px-2.5 py-2 text-center"
              style={{
                background: panel.pass ? "#f0fdf4" : "#FEF2F2",
                border: `1px solid ${panel.pass ? "#15803d" : "var(--red-flag)"}`,
              }}
            >
              <p className="text-[9px] leading-3" style={{ color: "var(--text-grey)" }}>
                {panel.fishState}
              </p>
              <p
                className="mt-1 text-[10px] font-bold"
                style={{ color: panel.pass ? "#15803d" : "var(--red-flag)" }}
              >
                {panel.verdict}
              </p>
            </div>
          </div>
        ))}
      </div>

      <p
        className="mt-4 text-center text-[10px] italic"
        style={{ color: "var(--text-light)" }}
      >
        The fish are the departments. The water is the structure. Improvement
        applied inside a contaminated structure does not survive contact with it.
      </p>
    </div>
  );
}