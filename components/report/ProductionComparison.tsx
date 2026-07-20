// components/report/ProductionComparison.tsx
//
// COMMUNICATION GOAL: Make the gap between the company's production pace
// and the industry standard immediately visible through strict parallel
// comparison. Each row shows the SAME dimension with two different values
// side by side. The reader's eye scans horizontally across any row and
// sees the contrast without decoding.
//
// DESIGN APPROACH: Numbered rows (matching the report's numbered-list
// convention), two value columns with color-coded text (red for company,
// green for industry), identical dimension labels, no asymmetry. The
// structure enforces the comparison; the content fills it.

type ComparisonRow = {
  dimension: string;
  company: string;
  industry: string;
};

export function ProductionComparison({
  figureNumber,
  title,
  rows,
}: {
  figureNumber: string;
  title: string;
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
        {/* Column headers */}
        <div className="grid grid-cols-[36px_1.3fr_1fr_1fr]">
          <div className="py-3" style={{ background: "var(--navy)" }} />
          <div
            className="px-3 py-3"
            style={{ background: "var(--navy)", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-[10px] font-bold tracking-wider text-white">
              DIMENSION
            </p>
          </div>
          <div
            className="px-3 py-3"
            style={{ background: "#7f1d1d", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-[10px] font-bold tracking-wider text-white">
              COMPANY WORKFLOW
            </p>
          </div>
          <div
            className="px-3 py-3"
            style={{ background: "#14532d", borderLeft: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-[10px] font-bold tracking-wider text-white">
              INDUSTRY STANDARD
            </p>
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid grid-cols-[36px_1.3fr_1fr_1fr]"
            style={{
              borderTop: "1px solid #e5e9ef",
              background: i % 2 === 0 ? "var(--pale-blue)" : "white",
            }}
          >
            {/* Row number */}
            <div className="flex items-center justify-center py-2.5">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold"
                style={{ background: "var(--light-blue)", color: "var(--lionxe-blue)" }}
              >
                {i + 1}
              </span>
            </div>

            {/* Dimension label */}
            <div
              className="flex items-center px-3 py-2.5"
              style={{ borderLeft: "1px solid #e5e9ef" }}
            >
              <span className="text-[11px] font-semibold" style={{ color: "var(--navy)" }}>
                {row.dimension}
              </span>
            </div>

            {/* Company value */}
            <div
              className="flex items-center px-3 py-2.5"
              style={{ borderLeft: "1px solid #e5e9ef" }}
            >
              <span className="text-[11px]" style={{ color: "var(--red-flag)" }}>
                {row.company}
              </span>
            </div>

            {/* Industry value */}
            <div
              className="flex items-center px-3 py-2.5"
              style={{ borderLeft: "1px solid #e5e9ef" }}
            >
              <span className="text-[11px]" style={{ color: "#15803d" }}>
                {row.industry}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}