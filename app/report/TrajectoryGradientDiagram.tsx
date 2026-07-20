// app/report/chapter-14/TrajectoryGradientDiagram.tsx
"use client";

type StageSpec = {
  label: string;
  current: string;
  proposed: string;
};

const STAGES: StageSpec[] = [
  {
    label: "Stage 1",
    current: "Scattered accounts, repetitive tasks, thin production continues",
    proposed: "Consolidated foundation built, single direction set",
  },
  {
    label: "Stage 2",
    current: "Pattern deepens: same templates, same violations, zero rankings",
    proposed: "Daily skill growth, first quality content compounds",
  },
  {
    label: "Stage 3",
    current: "Detection surface grows with every new site brought live",
    proposed: "First rankings arrive, authority signals accumulate",
  },
  {
    label: "Stage 4",
    current: "Violations compound, spam-report and algorithmic exposure rises",
    proposed: "Compounding authority, AI citations, growing traffic",
  },
  {
    label: "Stage 5",
    current: "Manual action exposure: network-level deindexing risk",
    proposed: "Industry leadership: the authority competitors cite",
  },
];

// True corporate red progression (avoids pinkish tones and remains light enough for dark text)
const RED_BACKGROUNDS = ["#fff5f5", "#ffe3e3", "#ffc5c5", "#ffa6a6", "#ff8787"];
const RED_BORDERS = ["#ffe3e3", "#ffc5c5", "#ffa6a6", "#ef4444", "#dc2626"];
const UNIFORM_RED_TEXT = "#7f1d1d"; // Locked deep dark red for flawless legibility across all stages

// Corporate emerald green progression (remains clear and high-contrast, never blackish)
const GREEN_BACKGROUNDS = ["#f0fdf4", "#dcfce7", "#bbf7d0", "#86efac", "#6ee7b7"];
const GREEN_BORDERS = ["#dcfce7", "#bbf7d0", "#86efac", "#10b981", "#059669"];
const UNIFORM_GREEN_TEXT = "#044e36"; // Locked deep dark green for flawless legibility across all stages

export function TrajectoryGradientDiagram({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-8 rounded-xl border p-6 bg-white"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      <p className="mb-6 text-xs font-bold uppercase tracking-wide text-zinc-400">
        {`Figure ${figureNumber} — ${title}`}
      </p>

      {/* Symmetrical Parallel Timeline Grid Track */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch relative">
        
        {/* LEFT PATHway: Symmetrical Genuine Red Warning Chain */}
        <div className="flex flex-col items-center">
          <div className="w-full rounded-md px-3 py-2 text-center text-[10px] font-black uppercase tracking-wider text-white bg-red-700 shadow-sm mb-4">
            Continuing Current Model (Risk Progression)
          </div>

          <div className="w-full flex flex-col gap-0 items-center">
            {STAGES.map((stage, idx) => (
              <div key={idx} className="w-full flex flex-col items-center">
                
                {/* Connecting Sequence Timeline Arrow */}
                {idx > 0 && (
                  <div className="flex flex-col items-center my-1.5 shrink-0 opacity-70">
                    <div className="h-3 w-0.5 bg-red-300"></div>
                    <svg className="w-3.5 h-3.5 text-red-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}

                {/* Highly Visible Card Frame */}
                <div 
                  className="w-full rounded-xl p-4 border shadow-sm flex flex-col justify-center min-h-[76px]"
                  style={{
                    background: RED_BACKGROUNDS[idx],
                    borderColor: RED_BORDERS[idx],
                    borderWidth: "1.5px"
                  }}
                >
                  <span 
                    className="text-[10px] font-black uppercase tracking-widest block mb-1 opacity-75"
                    style={{ color: UNIFORM_RED_TEXT }}
                  >
                    {stage.label}
                  </span>
                  <p 
                    className="text-xs font-bold leading-relaxed"
                    style={{ color: UNIFORM_RED_TEXT }}
                  >
                    {stage.current}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PATHway: Symmetrical Emerald Green Compounding Chain */}
        <div className="flex flex-col items-center">
          <div className="w-full rounded-md px-3 py-2 text-center text-[10px] font-black uppercase tracking-wider text-white bg-emerald-700 shadow-sm mb-4">
            Proposed Architecture (Authority Progression)
          </div>

          <div className="w-full flex flex-col gap-0 items-center">
            {STAGES.map((stage, idx) => (
              <div key={idx} className="w-full flex flex-col items-center">
                
                {/* Connecting Sequence Timeline Arrow */}
                {idx > 0 && (
                  <div className="flex flex-col items-center my-1.5 shrink-0 opacity-70">
                    <div className="h-3 w-0.5 bg-emerald-300"></div>
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}

                {/* Highly Visible Card Frame */}
                <div 
                  className="w-full rounded-xl p-4 border shadow-sm flex flex-col justify-center min-h-[76px]"
                  style={{
                    background: GREEN_BACKGROUNDS[idx],
                    borderColor: GREEN_BORDERS[idx],
                    borderWidth: "1.5px"
                  }}
                >
                  <span 
                    className="text-[10px] font-black uppercase tracking-widest block mb-1 opacity-75"
                    style={{ color: UNIFORM_GREEN_TEXT }}
                  >
                    {stage.label}
                  </span>
                  <p 
                    className="text-xs font-bold leading-relaxed"
                    style={{ color: UNIFORM_GREEN_TEXT }}
                  >
                    {stage.proposed}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      <p className="mt-5 text-center text-[10px] font-medium italic text-zinc-400">
        The stages are sequential vectors. The strategic gap widens with every operational hour invested in either path.
      </p>
    </div>
  );
}