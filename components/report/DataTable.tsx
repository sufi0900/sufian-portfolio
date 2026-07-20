// components/report/DataTable.tsx

export type DataTableRow = {
  cells: string[];
  /** Bold + light-blue background — calculated/cumulative row. */
  isTotal?: boolean;
  /** Bold + light-red background — violation, warning, or problem row. */
  isViolation?: boolean;
};

export function DataTable({
  headers,
  rows,
  flagText,
  align = [],
}: {
  headers: string[];
  rows: DataTableRow[];
  /** Highlight any cell whose text contains this substring bold + red. */
  flagText?: string;
  align?: ("left" | "right" | "center")[];
}) {
  const alignOf = (i: number) => align[i] ?? "left";

  return (
    <div
      className="avoid-break mb-6 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.10)",
      }}
    >
      <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "var(--navy)" }}>
            {headers.map((h, i) => (
              <th
                key={i}
                className="px-5 py-3.5 font-bold text-white"
                style={{
                  fontSize: "12.5px",
                  letterSpacing: "0.04em",
                  textAlign: alignOf(i),
                  borderBottom: "3px solid var(--lionxe-blue)",
                }}
              >
                {h.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isTotal = !!row.isTotal;
            const isViolation = !!row.isViolation;
            const rowBg = isViolation
              ? "#fef2f2"
              : isTotal
              ? "var(--light-blue)"
              : i % 2 === 0
              ? "var(--pale-blue)"
              : "white";
            return (
              <tr key={i} style={{ background: rowBg }}>
                {row.cells.map((cell, j) => {
                  const flagged = flagText ? cell.includes(flagText) : false;
                  const textColor =
                    flagged || isViolation
                      ? "var(--red-flag)"
                      : isTotal
                      ? "var(--navy)"
                      : "var(--text-grey)";
                  return (
                    <td
                      key={j}
                      className="border-t px-5 py-3.5"
                      style={{
                        borderColor: isViolation ? "#fecaca" : "#e5e9ef",
                        textAlign: alignOf(j),
                        color: textColor,
                        fontWeight: flagged || isTotal || isViolation ? 700 : 400,
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {cell}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}