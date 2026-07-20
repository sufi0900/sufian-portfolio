// components/report/TemplateStepsDiagram.tsx
//
// COMMUNICATION GOAL: Show the rigid six-stage blog template as a locked
// sequential pipeline. Each stage is a fixed gate the content must pass
// through in order, regardless of topic. The visual metaphor is a vertical
// conveyor belt: content enters at the top and exits at the bottom having
// passed through six identical stations. The "Varies" column shows NO for
// every stage, reinforcing that nothing changes.

type TemplateStage = {
  name: string;
  contentType: string;
};

const STAGES: TemplateStage[] = [
  { name: "Introduction", contentType: "Generic topic overview" },
  { name: "Importance", contentType: "Explanation of why the topic matters" },
  { name: "Tools / Materials", contentType: "List of required items" },
  { name: "Steps", contentType: "Numbered procedural instructions" },
  { name: "CTA", contentType: "Promotional call to action" },
  { name: "FAQ", contentType: "Generic question-and-answer pairs" },
];

export function TemplateStepsDiagram({
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
        background: "var(--pale-blue)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      <p
        className="mb-5 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="flex flex-col items-center">
        {/* Entry label */}
        <div
          className="mb-2 rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: "var(--light-blue)", color: "var(--navy)" }}
        >
          Every blog enters here
        </div>

        {STAGES.map((stage, i) => (
          <div key={i} className="flex w-full max-w-md flex-col items-center">
            {/* Connector */}
            <div className="h-4 w-[2px]" style={{ background: "var(--border-grey)" }} />

            {/* Stage card */}
            <div
              className="flex w-full items-center gap-3 rounded-xl bg-white px-4 py-3"
              style={{ border: "1.5px solid var(--border-grey)" }}
            >
              {/* Step number */}
              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold text-white"
                style={{ background: "var(--navy)" }}
              >
                {i + 1}
              </span>

              {/* Stage info */}
              <div className="flex-1">
                <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                  {stage.name}
                </p>
                <p className="mt-0.5 text-[11px]" style={{ color: "var(--text-grey)" }}>
                  {stage.contentType}
                </p>
              </div>

              {/* Fixed badge */}
              <span
                className="flex-shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                style={{ background: "#FEF2F2", color: "var(--red-flag)" }}
              >
                Fixed
              </span>
            </div>
          </div>
        ))}

        {/* Connector to exit */}
        <div className="h-4 w-[2px]" style={{ background: "var(--border-grey)" }} />

        {/* Exit label */}
        <div
          className="rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest"
          style={{ background: "#FEF2F2", color: "var(--red-flag)" }}
        >
          Every blog exits identical
        </div>
      </div>
    </div>
  );
}
