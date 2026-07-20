// components/report/CitationCard.tsx
//
// Full-card redesign. The previous version had a left accent bar that
// felt disconnected from the right and bottom edges — the card didn't
// read as a complete enclosed shape. This version wraps the entire card
// in a uniform rounded border with a consistent shadow on all four sides,
// and uses the left accent as an inset detail inside the card rather than
// as the card's own left edge, so no corner feels unfinished.

export function CitationCard({
  quote,
  sourceLabel,
  sourceUrl,
}: {
  quote: string;
  sourceLabel: string;
  sourceUrl: string;
}) {
  const displayUrl = sourceUrl.replace(/^https?:\/\//, "");

  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl"
      style={{
        border: "1.5px solid var(--border-grey)",
        boxShadow:
          "0 4px 12px rgb(10 22 40 / 0.08), 0 1px 3px rgb(10 22 40 / 0.06)",
      }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between gap-3 px-5 py-3"
        style={{ background: "var(--navy)" }}
      >
        <span className="flex items-center gap-2 text-xs font-bold tracking-wide text-white">
          <span aria-hidden="true" style={{ fontSize: "15px", lineHeight: 1 }}>
            &ldquo;
          </span>
          DIRECT QUOTATION FROM SOURCE DOCUMENTATION
        </span>
        <span
          className="inline-flex flex-shrink-0 items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide"
          style={{ background: "var(--light-blue)", color: "var(--navy)" }}
        >
          ✓ VERIFIED
        </span>
      </div>

      {/* Quote body — inner accent strip + content in a single enclosed area */}
      <div className="flex" style={{ background: "white" }}>
        {/* Thin inner accent strip */}
        <div
          className="flex-shrink-0"
          style={{ width: "4px", background: "var(--lionxe-blue)" }}
        />

        <div className="flex-1 px-6 py-6">
          <div className="relative pl-6">
            <span
              className="absolute left-0 top-0 text-3xl font-bold leading-none"
              style={{ color: "var(--light-blue)" }}
            >
              &ldquo;
            </span>
            <p
              className="text-[15px] italic leading-relaxed"
              style={{ color: "var(--navy)" }}
            >
              {quote}
            </p>
          </div>

          {/* Source footer */}
          <div
            className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t pt-3"
            style={{ borderColor: "var(--border-grey)" }}
          >
            <p className="text-xs font-bold" style={{ color: "var(--text-grey)" }}>
              {sourceLabel}
            </p>
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold no-underline"
              style={{ background: "var(--pale-blue)", color: "var(--lionxe-blue)" }}
            >
              {displayUrl} ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}