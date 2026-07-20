// components/report/PhaseRoadmapTimeline.tsx
//
// Dedicated implementation-roadmap visual for Chapter 15. A vertical
// milestone road: a thick central rail with numbered phase badges,
// cards alternating left/right (stacking on mobile), each carrying the
// phase name, objective, and key outputs. A start flag and a finish
// marker bound the road, so the whole transition reads as one journey.

type Phase = {
  name: string;
  objective: string;
  outputs: string[];
};

export function PhaseRoadmapTimeline({
  figureNumber,
  title,
  phases,
}: {
  figureNumber: string;
  title: string;
  phases: Phase[];
}) {
  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* Header band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* Canvas */}
      <div className="px-5 py-6 sm:px-7" style={{ background: "var(--pale-blue)" }}>
        <div className="relative mx-auto max-w-xl">
          {/* Start flag */}
          <div className="mb-3 flex justify-center">
            <span
              className="rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white"
              style={{ background: "var(--red-flag)" }}
            >
              Start: Current Model
            </span>
          </div>

          <div className="relative pl-12">
            {/* The road: thick rail with dashed center line */}
            <div
              className="absolute bottom-2 left-[13px] top-1 w-[14px] rounded-full"
              style={{ background: "var(--navy)" }}
            />
            <div
              className="absolute bottom-4 left-[19px] top-3 w-[2px]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(to bottom, white 0 8px, transparent 8px 16px)",
              }}
            />

            {phases.map((phase, i) => {
              const isLast = i === phases.length - 1;
              return (
                <div key={i} className={isLast ? "relative" : "relative pb-6"}>
                  {/* Milestone badge on the road */}
                  <div
                    className="absolute -left-12 top-1 flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      background: "var(--lionxe-blue)",
                      color: "white",
                      border: "3px solid white",
                      boxShadow: "0 4px 12px rgb(26 107 255 / 0.4)",
                    }}
                  >
                    {i + 1}
                  </div>

                  {/* Phase card */}
                  <div
                    className="overflow-hidden rounded-xl bg-white"
                    style={{ border: "1.5px solid var(--border-grey)" }}
                  >
                    <div
                      className="flex items-center justify-between px-4 py-2"
                      style={{ background: "var(--light-blue)" }}
                    >
                      <p className="text-xs font-bold" style={{ color: "var(--navy)" }}>
                        {`Phase ${i + 1}: ${phase.name}`}
                      </p>
                    </div>
                    <div className="px-4 py-2.5">
                      <p
                        className="text-[11px] font-semibold leading-4"
                        style={{ color: "var(--navy)" }}
                      >
                        {phase.objective}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {phase.outputs.map((o, oi) => (
                          <span
                            key={oi}
                            className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
                            style={{
                              background: "var(--pale-blue)",
                              color: "var(--lionxe-blue)",
                            }}
                          >
                            {o}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Finish marker */}
          <div className="mt-3 flex justify-center">
            <span
              className="rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white"
              style={{ background: "#14532d" }}
            >
              Destination: Single Authority Brand
            </span>
          </div>
        </div>
      </div>

      {/* Footnote band */}
      <div
        className="border-t px-6 py-3"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p
          className="text-center text-[10px] leading-relaxed"
          style={{ color: "var(--text-grey)" }}
        >
          Phases run in dependency order. Each phase builds on the outputs of
          the one before it; durations are set at implementation planning.
        </p>
      </div>
    </div>
  );
}