// components/report/VerticalPipelineDiagram.tsx
//
// A vertical top-to-bottom process pipeline. Each stage shows a numbered
// node, a stage name, a description, and a "tools used" badge row.
// Vertical connector lines run between stages. Used for content-production
// pipelines and other sequential workflows that read cleaner top-to-bottom
// than a horizontal flow.
//
// This is a NEW component distinct from WorkflowSteps (which is horizontal
// and doesn't accommodate tool badges).

type PipelineStage = {
  name: string;
  description: string;
  tools?: string[];
  highlight?: boolean;
};

export function VerticalPipelineDiagram({
  figureNumber,
  title,
  stages,
}: {
  figureNumber: string;
  title: string;
  stages: PipelineStage[];
}) {
  return (
    <div
      className="avoid-break my-7 rounded-xl border p-6"
      style={{
        borderColor: "var(--border-grey)",
        background: "var(--pale-blue)",
        boxShadow: "0 2px 8px rgb(10 22 40 / 0.05)",
      }}
    >
      <p
        className="mb-5 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="relative">
        {stages.map((stage, i) => {
          const isLast = i === stages.length - 1;
          return (
            <div key={i} className="relative flex gap-4 pb-6">
              {/* Left column: node + connector */}
              <div className="relative flex flex-shrink-0 flex-col items-center">
                <span
                  className="z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
                  style={{
                    background: stage.highlight ? "var(--navy)" : "white",
                    color: stage.highlight ? "white" : "var(--navy)",
                    border: stage.highlight
                      ? "2px solid var(--navy)"
                      : "2px solid var(--border-grey)",
                    boxShadow: stage.highlight
                      ? "0 4px 12px rgb(10 22 40 / 0.25)"
                      : "0 2px 6px rgb(10 22 40 / 0.08)",
                  }}
                >
                  {i + 1}
                </span>
                {!isLast && (
                  <div
                    className="mt-2 w-[2px] flex-1"
                    style={{ background: "var(--lionxe-blue)", minHeight: "40px" }}
                  />
                )}
              </div>

              {/* Right column: stage content */}
              <div
                className="flex-1 rounded-xl p-4"
                style={{
                  background: "white",
                  border: "1.5px solid var(--border-grey)",
                  boxShadow: "0 2px 6px rgb(10 22 40 / 0.06)",
                }}
              >
                <p className="text-sm font-bold" style={{ color: "var(--navy)" }}>
                  {stage.name}
                </p>
                <p
                  className="mt-1.5 text-xs leading-5"
                  style={{ color: "var(--text-grey)" }}
                >
                  {stage.description}
                </p>
                {stage.tools && stage.tools.length > 0 && (
                  <div className="mt-3 flex flex-wrap items-center gap-1.5">
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "var(--text-light)" }}
                    >
                      Tools:
                    </span>
                    {stage.tools.map((tool, ti) => (
                      <span
                        key={ti}
                        className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{
                          background: "var(--pale-blue)",
                          color: "var(--lionxe-blue)",
                        }}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
