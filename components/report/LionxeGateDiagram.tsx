// components/report/LionxeGateDiagram.tsx
//
// Displays the four LIONXE gates as a sequential pipeline. Each gate shows
// its letter code, pillar name, governing law name, and a one-line summary.
// The sequential design (each gate must pass before the next is evaluated)
// is communicated through connector arrows and numbering.
//
// This component is presentation-only: it introduces the four gates. The
// pass/fail assessment is handled separately through DataTable and prose
// in the chapter body, not baked into this component.

type Gate = {
  code: string;
  name: string;
  law: string;
  summary: string;
};

const GATES: Gate[] = [
  {
    code: "L",
    name: "Logic & Longevity",
    law: "The Post-Flood Collapse Rule",
    summary:
      "Reject anything anchored to a temporary or volatile foundation. A spike that cannot survive a change in conditions has no real value.",
  },
  {
    code: "IO",
    name: "Internal Optimization",
    law: "The Weakest Link Axiom",
    summary:
      "Total value is capped by the worst-executed internal layer. One badly executed component drags down everything built around it.",
  },
  {
    code: "N",
    name: "Non-Negotiable Integrity",
    law: "The Cost-Indifferent Mandate",
    summary:
      "Integrity must be maintained even when it costs revenue or growth. Cutting an ethical corner for short-term gain is an automatic failure.",
  },
  {
    code: "XE",
    name: "eXceptional Distinction",
    law: "The Commodity Threshold Law",
    summary:
      "If a generic, interchangeable alternative could fully replace it, its distinction score is zero. Competence is not the same as distinction.",
  },
];

export function LionxeGateDiagram({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-7 rounded-xl border p-6"
      style={{
        borderColor: "var(--border-grey)",
        background: "white",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      <p
        className="mb-2 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>
      <p
        className="mb-5 text-xs"
        style={{ color: "var(--text-light)" }}
      >
        Each gate must be passed before the next is evaluated. Failure at any
        single gate constitutes a structural failure of the entire assessment.
      </p>

      <div className="flex flex-col gap-3 sm:gap-0">
        {GATES.map((gate, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-stretch">
            {/* Gate card */}
            <div
              className="flex flex-1 gap-4 rounded-xl p-4"
              style={{
                background: "var(--pale-blue)",
                border: "1.5px solid var(--border-grey)",
              }}
            >
              {/* Gate badge */}
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: "var(--text-light)" }}
                >
                  Gate
                </span>
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-lg text-lg font-bold text-white"
                  style={{
                    background: "#004DFD",
                    boxShadow: "0 4px 12px rgb(0 77 253 / 0.25)",
                  }}
                >
                  {gate.code}
                </span>
              </div>

              {/* Gate content */}
              <div className="flex-1">
                <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                  {gate.name}
                </p>
                <p
                  className="mt-0.5 text-xs font-semibold italic"
                  style={{ color: "#004DFD" }}
                >
                  {gate.law}
                </p>
                <p className="mt-1.5 text-xs leading-5" style={{ color: "var(--text-grey)" }}>
                  {gate.summary}
                </p>
              </div>
            </div>

            {/* Arrow connector (not after the last gate) */}
            {i < GATES.length - 1 && (
              <div className="flex items-center justify-center py-1 sm:px-3">
                <span
                  className="text-lg"
                  style={{ color: "var(--border-grey)" }}
                >
                  &#8595;
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
