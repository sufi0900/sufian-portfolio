// app/report/chapter-14/PathComparisonModel.tsx
"use client";

type ComparisonRow = {
  dimension: string;
  current: string;
  proposed: string;
};

export function PathComparisonModel({
  figureNumber,
  title,
  currentGoal,
  proposedGoal,
  rows,
}: {
  figureNumber: string;
  title: string;
  currentGoal: string;
  proposedGoal: string;
  rows: ComparisonRow[];
}) {
  return (
    <div className="avoid-break my-8 w-full">
      <p className="mb-3 text-xs font-bold uppercase tracking-wide text-zinc-400">
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="overflow-hidden rounded-xl border border-zinc-200 shadow-sm bg-white">
        
        {/* Core Header Track Block with Objective Goal Framing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-zinc-200">
          {/* Left Column Head: Warning Red Track */}
          <div className="px-5 py-4 bg-red-50 border-r border-zinc-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 block shrink-0" />
              <p className="text-xs font-black uppercase tracking-wider text-red-900">
                Continuing the Current Model
              </p>
            </div>
            <p className="mt-2 text-xs font-medium leading-relaxed text-red-800">
              {currentGoal}
            </p>
          </div>

          {/* Right Column Head: Progress Green Track */}
          <div className="px-5 py-4 bg-emerald-50">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 block shrink-0" />
              <p className="text-xs font-black uppercase tracking-wider text-emerald-900">
                Adopting the Proposed Architecture
              </p>
            </div>
            <p className="mt-2 text-xs font-medium leading-relaxed text-emerald-800">
              {proposedGoal}
            </p>
          </div>
        </div>

        {/* Dynamic Structural Symmetrical Data Rows */}
        {rows.map((row, i) => (
          <div key={i} className="border-b border-zinc-100 last:border-b-0 flex flex-col">
            
            {/* Centered Dimension Anchor Title Label */}
            <div className="px-5 py-1.5 bg-zinc-50 border-b border-zinc-100 text-[10px] font-black uppercase tracking-widest text-slate-500">
              {row.dimension}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 items-stretch flex-1">
              {/* Left Cell Block - Light Crimson Warning Focus */}
              <div className="px-5 py-3.5 text-xs leading-relaxed text-zinc-700 bg-red-50/20 border-r border-zinc-200 border-l-4 border-l-red-500">
                {row.current}
              </div>

              {/* Right Cell Block - Light Emerald Success Focus */}
              <div className="px-5 py-3.5 text-xs leading-relaxed text-zinc-700 bg-emerald-50/10 border-l-4 border-l-emerald-500">
                {row.proposed}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}