// components/report/GateTimelineDiagram.tsx
//
// COMMUNICATION GOAL: Show the four LIONXE gates as a sequential vertical
// timeline the model must descend through. Each gate node carries a
// PASS/FAIL verdict badge; a rail connects them top to bottom; a final
// verdict band states the overall outcome. Supports one column (Ch 12:
// current model failing every gate) or two parallel columns (Ch 14:
// fail rail in red beside pass rail in green).

type GateStep = {
  code: string;
  name: string;
  note: string;
};

type TimelineColumn = {
  header: string;
  tone: "fail" | "pass";
  gates: GateStep[];
  verdictLabel: string;
  verdictNote: string;
};

const TONE = {
  fail: {
    rail: "#dc2626",
    node: "#7f1d1d",
    badgeBg: "#FEF2F2",
    badgeText: "#dc2626",
    badge: "FAIL",
    icon: "\u2715",
    verdictBg: "#7f1d1d",
  },
  pass: {
    rail: "#16a34a",
    node: "#14532d",
    badgeBg: "#f0fdf4",
    badgeText: "#15803d",
    badge: "PASS",
    icon: "\u2713",
    verdictBg: "#14532d",
  },
};

function Column({ col }: { col: TimelineColumn }) {
  const t = TONE[col.tone];
  return (
    <div className="flex-1">
      {/* Column header */}
      <div
        className="mb-4 rounded-lg px-3 py-2 text-center"
        style={{ background: t.verdictBg }}
      >
        <p className="text-[10px] font-bold uppercase tracking-wider text-white">
          {col.header}
        </p>
      </div>

      {/* Timeline */}
      <div className="relative pl-9">
        {/* Vertical rail */}
        <div
          className="absolute bottom-3 left-[14px] top-1 w-[3px] rounded-full"
          style={{ background: t.rail, opacity: 0.35 }}
        />

        {col.gates.map((gate, i) => (
          <div key={i} className="relative pb-5">
            {/* Node on the rail */}
            <div
              className="absolute -left-9 top-0 flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-bold text-white"
              style={{
                background: t.node,
                boxShadow: `0 3px 10px ${t.rail}55`,
                border: "2.5px solid white",
              }}
            >
              {t.icon}
            </div>

            {/* Gate card */}
            <div
              className="rounded-xl bg-white px-3.5 py-2.5"
              style={{ border: `1.5px solid ${t.rail}44` }}
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-xs font-bold" style={{ color: "var(--navy)" }}>
                  Gate {gate.code}
                  <span
                    className="ml-1.5 font-semibold"
                    style={{ color: "var(--text-light)" }}
                  >
                    {gate.name}
                  </span>
                </p>
                <span
                  className="flex-shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold tracking-wider"
                  style={{ background: t.badgeBg, color: t.badgeText }}
                >
                  {t.badge}
                </span>
              </div>
              <p
                className="mt-1 text-[10px] leading-4"
                style={{ color: "var(--text-grey)" }}
              >
                {gate.note}
              </p>
            </div>
          </div>
        ))}

        {/* Final verdict band */}
        <div className="relative">
          <div
            className="absolute -left-9 top-1 flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white"
            style={{
              background: t.verdictBg,
              border: "2.5px solid white",
              boxShadow: `0 4px 12px ${t.rail}66`,
            }}
          >
            {col.tone === "fail" ? "0/4" : "4/4"}
          </div>
          <div
            className="rounded-xl px-4 py-3"
            style={{ background: t.verdictBg }}
          >
            <p className="text-xs font-bold uppercase tracking-wider text-white">
              {col.verdictLabel}
            </p>
            <p
              className="mt-0.5 text-[10px] leading-4 text-white"
              style={{ opacity: 0.85 }}
            >
              {col.verdictNote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GateTimelineDiagram({
  figureNumber,
  title,
  columns,
}: {
  figureNumber: string;
  title: string;
  columns: TimelineColumn[];
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
      <div
        className="px-5 py-6 sm:px-7"
        style={{ background: "var(--pale-blue)" }}
      >
        <div
          className={
            columns.length > 1
              ? "grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6"
              : "mx-auto max-w-md"
          }
        >
          {columns.map((col, i) => (
            <Column key={i} col={col} />
          ))}
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
          The gates are sequential. Failure at any single gate constitutes
          structural failure of the whole; certification requires passing all
          four.
        </p>
      </div>
    </div>
  );
}