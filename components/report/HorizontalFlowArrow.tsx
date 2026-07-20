// components/report/HorizontalFlowArrow.tsx
//
// Professional horizontal timeline visualization with color gradient support.
// Displays sequential steps with an animated flow feel.
// Supports variant prop for different color schemes:
// - "violations" = red gradient (for current/bad workflow)
// - "aligned" = green gradient (for proper/good workflow)
// - "default" = navy/blue (neutral)

type FlowStep = {
  label: string;
  sublabel?: string;
  highlight?: boolean;
};

export function HorizontalFlowArrow({
  figureNumber,
  title,
  steps,
  caption,
  variant = "default",
}: {
  figureNumber: string;
  title: string;
  steps: FlowStep[];
  caption?: string;
  variant?: "violations" | "aligned" | "default";
}) {
  // Color gradient mappings
  const getGradient = () => {
    if (variant === "violations") {
      return {
        start: "#fee2e2",
        end: "#dc2626",
        stepColors: [
          { bg: "#fecaca", border: "#fca5a5" },
          { bg: "#fca5a5", border: "#f87171" },
          { bg: "#f87171", border: "#ef4444" },
          { bg: "#ef4444", border: "#dc2626" },
        ],
      };
    } else if (variant === "aligned") {
      return {
        start: "#dcfce7",
        end: "#16a34a",
        stepColors: [
          { bg: "#bbf7d0", border: "#86efac" },
          { bg: "#86efac", border: "#4ade80" },
          { bg: "#4ade80", border: "#22c55e" },
          { bg: "#22c55e", border: "#16a34a" },
        ],
      };
    }
    return {
      start: "#e0f2fe",
      end: "#1e40af",
      stepColors: [
        { bg: "#bae6fd", border: "#7dd3fc" },
        { bg: "#7dd3fc", border: "#38bdf8" },
        { bg: "#38bdf8", border: "#0ea5e9" },
        { bg: "#0ea5e9", border: "#1e40af" },
      ],
    };
  };

  const gradientConfig = getGradient();

  return (
    <div className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* Header */}
      <div className="px-6 py-4" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white opacity-75">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-1 text-sm font-bold text-white">{title}</p>
      </div>

      {/* Timeline Container */}
      <div className="px-6 py-8" style={{ background: "var(--pale-blue)" }}>
        {/* Desktop: Horizontal timeline */}
        <div className="hidden items-end justify-between gap-2 sm:flex">
          {steps.map((step, i) => {
            const stepColor = gradientConfig.stepColors[i] || gradientConfig.stepColors[gradientConfig.stepColors.length - 1];
            const isLast = i === steps.length - 1;

            return (
              <div key={i} className="flex flex-1 flex-col items-center">
                {/* Step circle with number */}
                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full border-2 font-bold text-white shadow-md"
                  style={{
                    background: stepColor.bg,
                    borderColor: stepColor.border,
                    fontSize: "16px",
                  }}
                >
                  {i + 1}
                </div>

                {/* Step content */}
                <div className="mt-3 text-center">
                  <p
                    className="text-sm font-bold uppercase"
                    style={{ color: "#1e3a5f" }}
                  >
                    {step.label}
                  </p>
                  {step.sublabel && (
                    <p
                      className="mt-0.5 text-xs"
                      style={{ color: "#4b5563" }}
                    >
                      {step.sublabel}
                    </p>
                  )}
                </div>

                {/* Connecting line to next step */}
                {!isLast && (
                  <div
                    className="absolute mt-20 h-1 flex-1"
                    style={{
                      width: "100%",
                      background: `linear-gradient(to right, ${stepColor.bg}, ${gradientConfig.stepColors[Math.min(i + 1, gradientConfig.stepColors.length - 1)].bg})`,
                      opacity: 0.6,
                      marginLeft: "7.5%",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile: Vertical stack */}
        <div className="sm:hidden">
          {steps.map((step, i) => {
            const stepColor = gradientConfig.stepColors[i] || gradientConfig.stepColors[gradientConfig.stepColors.length - 1];
            const isLast = i === steps.length - 1;

            return (
              <div key={i}>
                <div
                  className="flex items-center gap-4 rounded-lg p-4"
                  style={{
                    background: stepColor.bg,
                    borderLeft: `4px solid ${stepColor.border}`,
                  }}
                >
                  <div
                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold text-white"
                    style={{ background: stepColor.border }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-bold" style={{ color: "#1e3a5f" }}>
                      {step.label}
                    </p>
                    {step.sublabel && (
                      <p className="mt-0.5 text-xs" style={{ color: "#4b5563" }}>
                        {step.sublabel}
                      </p>
                    )}
                  </div>
                </div>
                {!isLast && (
                  <div className="flex justify-center py-2">
                    <div
                      className="h-6 w-1 rounded"
                      style={{ background: stepColor.border, opacity: 0.5 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption */}
      {caption && (
        <div
          className="border-t px-6 py-4"
          style={{ borderColor: "var(--border-grey)", background: "white" }}
        >
          <p className="text-xs italic" style={{ color: "var(--text-grey)" }}>
            {caption}
          </p>
        </div>
      )}
    </div>
  );
}