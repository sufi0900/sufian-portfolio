// components/report/WorkflowSteps.tsx

export function WorkflowSteps({
  figureNumber,
  title,
  steps,
}: {
  figureNumber: string;
  title: string;
  steps: { label: string; description: string }[];
}) {
  return (
    <div
      className="avoid-break my-7 rounded-xl border p-6 overflow-hidden"
      style={{
        borderColor: "var(--border-grey)",
        background: "white",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      <p
        className="mb-5 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="relative pl-12">
        {/* Vertical Track Line */}
        <div 
          className="absolute left-[19px] top-2 bottom-2 w-0.5" 
          style={{ background: "var(--border-grey)" }}
        ></div>

        {steps.map((step, i) => (
          <div key={i} className="relative mb-8 last:mb-0">
            {/* Node on the track */}
            <div 
              className="absolute -left-12 flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold text-white ring-4 ring-white"
              style={{ background: "var(--navy)", zIndex: 10 }}
            >
              {i + 1}
            </div>

            {/* Content Card */}
            <div 
              className="rounded-lg p-4 shadow-sm"
              style={{ 
                background: "var(--pale-blue)", 
                border: "1px solid var(--border-grey)" 
              }}
            >
              <h5 
                className="text-sm font-bold uppercase tracking-wider" 
                style={{ color: "var(--navy)" }}
              >
                {step.label}
              </h5>
              <p 
                className="mt-1 text-xs leading-relaxed" 
                style={{ color: "var(--text-grey)" }}
              >
                {step.description}
              </p>
            </div>
            
            {/* Downward Arrow Connector */}
            {i < steps.length - 1 && (
              <div className="flex justify-center mt-2 mb-2 -ml-12">
                <svg 
                  className="w-4 h-4 opacity-50" 
                  fill="none" 
                  stroke="var(--navy)" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}