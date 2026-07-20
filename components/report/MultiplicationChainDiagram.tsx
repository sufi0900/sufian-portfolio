// components/report/MultiplicationChainDiagram.tsx
//
// Redesigned from the first version, which was too literal a conversion of
// the Markdown's bracket text into boxes-and-arrows. This version uses
// growing visual weight to do the explaining: each card gets larger and the
// final total is styled as the headline result (navy fill, white text,
// stronger shadow), since 226,200 is the number the chapter is building
// toward, not just one more step in the chain.
//
// figureNumber/title are REQUIRED (no default). The bug this project just
// hit (a chart showing "Figure 1.1" inside Chapter 3) came from a hardcoded
// default baked into a shared component. Making the caller specify the
// number every time removes that failure mode entirely.

function ChainCard({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center rounded-xl px-5 ${
        highlight ? "py-7" : "py-6"
      } text-center`}
      style={{
        background: highlight ? "var(--navy)" : "white",
        border: highlight ? "none" : "1px solid var(--border-grey)",
        boxShadow: highlight
          ? "0 10px 24px rgb(10 22 40 / 0.28)"
          : "0 2px 6px rgb(10 22 40 / 0.06)",
      }}
    >
      <span
        className={highlight ? "text-3xl font-bold" : "text-2xl font-bold"}
        style={{ color: highlight ? "white" : "var(--navy)" }}
      >
        {value}
      </span>
      <span
        className="mt-1.5 text-xs font-medium"
        style={{ color: highlight ? "var(--light-blue)" : "var(--text-light)" }}
      >
        {label}
      </span>
    </div>
  );
}

function ChainConnector({ multiplier }: { multiplier: string }) {
  return (
    <div className="flex flex-shrink-0 items-center justify-center py-1 sm:px-3">
      <span
        className="whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold"
        style={{ background: "var(--light-blue)", color: "var(--lionxe-blue)" }}
      >
        {multiplier}
      </span>
    </div>
  );
}

export function MultiplicationChainDiagram({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-7 rounded-xl border p-6"
      style={{ borderColor: "var(--border-grey)", background: "var(--pale-blue)" }}
    >
      <p
        className="mb-5 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>
      <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-0">
        <ChainCard value="25" label="Base pages per site" />
        {/* Literal × character, typed directly. Not the \u00d7 escape
            sequence, which doesn't decode inside a bare JSX attribute
            string (only inside {} expressions) and was the cause of the
            literal "\u00d7" text bug in the previous version. */}
        <ChainConnector multiplier="× 104 areas" />
        <ChainCard value="2,600" label="URLs per site" />
        <ChainConnector multiplier="× 87 sites" />
        <ChainCard
          value="226,200"
          label="Total URLs across the documented network"
          highlight
        />
      </div>
    </div>
  );
}
