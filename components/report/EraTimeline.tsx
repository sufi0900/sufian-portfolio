// components/report/EraTimeline.tsx
//
// Redesigned for uniform alignment. The previous version used flex-1 cards
// that grew unevenly based on content length, making the three stages look
// misaligned. This version uses a CSS grid with equal columns so every card
// is the same width and height regardless of content, and pins the label,
// title, and description at consistent vertical positions within each card.
// The connecting track is now a continuous bar behind the numbered nodes
// rather than per-gap segments, which reads cleaner.

type Era = {
  period: string;
  name: string;
  condition: string;
  current?: boolean;
};

const ERAS: Era[] = [
  {
    period: "Early period",
    name: "Keyword Matching",
    condition:
      "Few competing sites. Ranking achievable largely through keyword presence on the page.",
  },
  {
    period: "Middle period",
    name: "Quality Assessment",
    condition:
      "Competition rises. Engines add layers of quality evaluation; genuine usefulness becomes decisive.",
  },
  {
    period: "2026",
    name: "AI Era",
    condition:
      "Content at unprecedented scale. Depth, originality, and first-hand experience separate ranking pages.",
    current: true,
  },
];

function EraCard({ era, index }: { era: Era; index: number }) {
  const highlight = !!era.current;
  return (
    <div className="flex flex-col items-center text-center">
      {/* Numbered node */}
      <div
        className="z-10 flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold"
        style={{
          background: highlight ? "var(--navy)" : "white",
          color: highlight ? "white" : "var(--navy)",
          border: highlight ? "2px solid var(--navy)" : "2px solid var(--border-grey)",
          boxShadow: highlight
            ? "0 4px 12px rgb(10 22 40 / 0.25)"
            : "0 2px 6px rgb(10 22 40 / 0.08)",
        }}
      >
        {index + 1}
      </div>

      {/* Card body — full height to match siblings via grid stretch */}
      <div
        className="mt-3 flex w-full flex-1 flex-col rounded-xl p-5"
        style={{
          background: highlight ? "var(--navy)" : "white",
          border: highlight ? "none" : "1.5px solid var(--border-grey)",
          boxShadow: highlight
            ? "0 8px 20px rgb(10 22 40 / 0.22)"
            : "0 2px 8px rgb(10 22 40 / 0.06)",
        }}
      >
        <p
          className="text-[11px] font-bold uppercase tracking-wider"
          style={{ color: highlight ? "var(--light-blue)" : "var(--text-light)" }}
        >
          {era.period}
        </p>
        <p
          className="mt-1 text-base font-bold"
          style={{ color: highlight ? "white" : "var(--navy)" }}
        >
          {era.name}
        </p>
        <p
          className="mt-2.5 text-xs leading-5"
          style={{ color: highlight ? "rgba(255,255,255,0.8)" : "var(--text-grey)" }}
        >
          {era.condition}
        </p>
      </div>
    </div>
  );
}

export function EraTimeline({
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
        boxShadow: "0 2px 8px rgb(10 22 40 / 0.05)",
      }}
    >
      <p
        className="mb-5 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      {/* Connecting track behind the nodes */}
      <div className="relative">
        {/* Horizontal line — positioned behind the numbered circles */}
        <div
          className="absolute left-0 right-0 hidden sm:block"
          style={{
            top: "20px",
            height: "2px",
            background: "var(--border-grey)",
            marginLeft: "calc(100% / 6)",
            marginRight: "calc(100% / 6)",
          }}
        />

        {/* Equal-width grid ensures uniform card sizing */}
        <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {ERAS.map((era, i) => (
            <EraCard key={i} era={era} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}