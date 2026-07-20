// components/report/PathComparison.tsx
//
// A two-column comparison of two strategic paths, each with a header, a
// "best if your goal is" framing line, and a list of outcomes. Unlike
// ContrastCards (which is for short side-by-side text), this handles a
// structured list of comparison points across multiple dimensions, with
// one column styled as the current path and the other as the proposed path.
//
// Designed for the "current model vs proposed model" outcome comparison.
// Neutral framing: neither column is labeled good or bad; each states what
// it optimizes for.

type ComparisonRow = {
  dimension: string;
  current: string;
  proposed: string;
};

export function PathComparison({
  figureNumber,
  title,
  currentGoal,
  proposedGoal,
  rows,
}: {
  figureNumber: string;
  title: string;
  currentGoal: string;
  proposedGoal: string;
  rows: ComparisonRow[];
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
        {/* Header row with goal framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div
            className="px-5 py-4"
            style={{
              background: "var(--pale-blue)",
              borderRight: "1px solid var(--border-grey)",
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-wide"
              style={{ color: "var(--text-grey)" }}
            >
              Continuing the Current Model
            </p>
            <p className="mt-1.5 text-xs leading-5" style={{ color: "var(--text-light)" }}>
              {currentGoal}
            </p>
          </div>
          <div className="px-5 py-4" style={{ background: "var(--navy)" }}>
            <p
              className="text-xs font-bold uppercase tracking-wide"
              style={{ color: "var(--light-blue)" }}
            >
              Adopting the Proposed Architecture
            </p>
            <p
              className="mt-1.5 text-xs leading-5"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              {proposedGoal}
            </p>
          </div>
        </div>

        {/* Comparison rows */}
        {rows.map((row, i) => (
          <div key={i}>
            {/* Dimension label */}
            <div
              className="px-5 py-2 text-[11px] font-bold uppercase tracking-wider"
              style={{
                background: "white",
                color: "var(--lionxe-blue)",
                borderTop: "1px solid var(--border-grey)",
              }}
            >
              {row.dimension}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div
                className="px-5 py-3 text-xs leading-5"
                style={{
                  background: "white",
                  color: "var(--text-grey)",
                  borderRight: "1px solid var(--border-grey)",
                }}
              >
                {row.current}
              </div>
              <div
                className="px-5 py-3 text-xs leading-5"
                style={{ background: "var(--pale-blue)", color: "var(--navy)" }}
              >
                {row.proposed}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
