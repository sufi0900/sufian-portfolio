// components/report/LayeredInsight.tsx

export function LayeredInsight({
  figureNumber,
  title,
  topLabel,
  topContent,
  bottomLabel,
  bottomContent,
}: {
  figureNumber: string;
  title: string;
  topLabel: string;
  topContent: string;
  bottomLabel: string;
  bottomContent: string;
}) {
  return (
    <div className="avoid-break my-10">
      <p
        className="mb-4 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="relative flex flex-col space-y-0.5">
        {/* Surface Layer (Top) */}
        <div 
          className="relative z-10 rounded-t-xl border border-b-0 p-6"
          style={{ 
            borderColor: "var(--border-grey)",
            background: "rgba(239, 68, 68, 0.03)" // Very faint red tint
          }}
        >
          <div className="mb-2 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ background: "var(--red-flag)" }} />
            <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
              {topLabel}
            </span>
          </div>
          <p className="text-sm italic leading-relaxed text-gray-700">
            {topContent}
          </p>
        </div>

        {/* Connector/Transition */}
        <div className="relative z-0 h-6 w-full flex items-center justify-center">
          <div className="h-full w-0.5 bg-gray-200" />
        </div>

        {/* Substance Layer (Bottom/Core) */}
        <div 
          className="relative z-10 rounded-b-xl border p-6 shadow-sm"
          style={{ 
            borderColor: "var(--lionxe-blue)",
            background: "white"
          }}
        >
          <div className="mb-2 flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ background: "var(--lionxe-blue)" }} />
            <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--lionxe-blue)" }}>
              {bottomLabel}
            </span>
          </div>
          <p className="text-sm font-medium leading-relaxed" style={{ color: "var(--navy)" }}>
            {bottomContent}
          </p>
        </div>
      </div>
    </div>
  );
}