// components/report/LionxeScorecard.tsx
//
// A four-gate scorecard comparing two models (current vs proposed) against
// each LIONXE gate. Each row shows the gate, its governing law, the current
// model's status (fail + reason), and the proposed model's status (pass +
// reason). Uses LIONXE brand blue (#004DFD) for the gate badges and
// red/green indicators for fail/pass.

type ScorecardRow = {
  gateCode: string;
  gateName: string;
  law: string;
  currentStatus: string;
  currentReason: string;
  proposedStatus: string;
  proposedReason: string;
};

export function LionxeScorecard({
  figureNumber,
  title,
  rows,
}: {
  figureNumber: string;
  title: string;
  rows: ScorecardRow[];
}) {
  return (
    <div className="avoid-break my-7">
      <p
        className="mb-3 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div
        className="overflow-hidden rounded-xl border"
        style={{
          borderColor: "var(--border-grey)",
          boxShadow: "0 4px 14px rgb(10 22 40 / 0.10)",
        }}
      >
        {/* Header */}
        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr_1fr]">
          <div
            className="px-4 py-3"
            style={{ background: "var(--navy)", borderRight: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-xs font-bold tracking-wide text-white">GATE</p>
          </div>
          <div
            className="px-4 py-3"
            style={{ background: "#7f1d1d", borderRight: "1px solid rgba(255,255,255,0.1)" }}
          >
            <p className="text-xs font-bold tracking-wide text-white">
              CURRENT MODEL
            </p>
          </div>
          <div className="px-4 py-3" style={{ background: "#14532d" }}>
            <p className="text-xs font-bold tracking-wide text-white">
              PROPOSED ARCHITECTURE
            </p>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-1 sm:grid-cols-[200px_1fr_1fr]"
            style={{ borderTop: "1px solid var(--border-grey)" }}
          >
            {/* Gate info */}
            <div
              className="flex items-start gap-3 px-4 py-4"
              style={{
                background: "var(--pale-blue)",
                borderRight: "1px solid var(--border-grey)",
              }}
            >
              <span
                className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md text-xs font-bold text-white"
                style={{ background: "#004DFD" }}
              >
                {row.gateCode}
              </span>
              <div>
                <p className="text-xs font-bold" style={{ color: "var(--navy)" }}>
                  {row.gateName}
                </p>
                <p className="mt-0.5 text-[10px] italic" style={{ color: "var(--text-light)" }}>
                  {row.law}
                </p>
              </div>
            </div>

            {/* Current (fail) */}
            <div
              className="px-4 py-4"
              style={{
                background: "white",
                borderRight: "1px solid var(--border-grey)",
              }}
            >
              <span
                className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide text-white"
                style={{ background: "#EF4444" }}
              >
                {row.currentStatus}
              </span>
              <p className="mt-2 text-xs leading-5" style={{ color: "var(--text-grey)" }}>
                {row.currentReason}
              </p>
            </div>

            {/* Proposed (pass) */}
            <div className="px-4 py-4" style={{ background: "var(--pale-blue)" }}>
              <span
                className="inline-block rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide text-white"
                style={{ background: "#22C55E" }}
              >
                {row.proposedStatus}
              </span>
              <p className="mt-2 text-xs leading-5" style={{ color: "var(--navy)" }}>
                {row.proposedReason}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
