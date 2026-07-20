// components/report/ContrastCards.tsx
//
// Two cards side by side for a direct before/after contrast. Used in section
// 4.6 to show the same answer written first with the keyword-repetition
// pattern (left, red accent) and then as a plain natural answer (right, blue
// accent). Reusable for any "this pattern vs that pattern" illustration in
// later chapters.
//
// The accents reuse existing tokens: red-flag for the flagged side (the same
// red used for the projected-URL figure in Chapter 3) and lionxe-blue for the
// clean side, so the contrast reads consistently with the rest of the report.

export function ContrastCards({
  figureNumber,
  title,
  leftLabel,
  leftBody,
  rightLabel,
  rightBody,
}: {
  figureNumber: string;
  title: string;
  leftLabel: string;
  leftBody: string;
  rightLabel: string;
  rightBody: string;
}) {
  return (
    <div className="avoid-break my-7">
      <p
        className="mb-3 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Flagged / before */}
        <div
          className="overflow-hidden rounded-xl border"
          style={{ borderColor: "var(--border-grey)" }}
        >
          <div
            className="px-4 py-2.5 text-xs font-bold tracking-wide text-white"
            style={{ background: "var(--red-flag)" }}
          >
            {leftLabel}
          </div>
          <p
            className="px-4 py-4 text-sm italic leading-6"
            style={{ color: "var(--text-grey)" }}
          >
            {leftBody}
          </p>
        </div>

        {/* Clean / after */}
        <div
          className="overflow-hidden rounded-xl border"
          style={{ borderColor: "var(--border-grey)" }}
        >
          <div
            className="px-4 py-2.5 text-xs font-bold tracking-wide text-white"
            style={{ background: "var(--lionxe-blue)" }}
          >
            {rightLabel}
          </div>
          <p
            className="px-4 py-4 text-sm italic leading-6"
            style={{ color: "var(--navy)" }}
          >
            {rightBody}
          </p>
        </div>
      </div>
    </div>
  );
}