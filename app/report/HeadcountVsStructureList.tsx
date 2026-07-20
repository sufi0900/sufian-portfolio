// app/report/chapter-10/HeadcountVsStructureList.tsx
//
// Page-local component replacing the ContrastCards usage in this chapter.
// Each point is a standalone fact, not a linear paragraph, so a two-column
// bullet list reads better than paragraph-styled cards.

import React from "react";

const ROWS = [
  {
    left: "More writers produce more content under the same word ceiling, template, and keyword rules.",
    right: "The pillar-cluster architecture replaces the flat keyword list at its root.",
  },
  {
    left: "More coordinators manage the same fragmented account structure.",
    right: "Consolidated accounts replace the fragmented footprint entirely.",
  },
  {
    left: "More SEO staff monitor the same flat keyword sheet.",
    right: "An insight-led workflow replaces the automated, no-research pipeline.",
  },
  {
    left: "Monthly cost rises with every hire made inside the current model.",
    right: "The same team operates a system built to produce outcomes, not volume.",
  },
];

export function HeadcountVsStructureList({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)" }}
    >
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ background: "white" }}>
        <div className="px-5 py-3" style={{ background: "#7f1d1d" }}>
          <p className="text-xs font-bold uppercase tracking-wide text-white">Adding Headcount to the Current Model</p>
        </div>
        <div className="px-5 py-3" style={{ background: "#14532d" }}>
          <p className="text-xs font-bold uppercase tracking-wide text-white">Addressing the Underlying Structure</p>
        </div>

        {ROWS.map((row, i) => (
          <React.Fragment key={i}>
            <div
              className="flex gap-2 px-5 py-3 text-xs leading-5"
              style={{ background: i % 2 === 0 ? "var(--pale-blue)" : "white", color: "var(--text-grey)", borderRight: "1px solid var(--border-grey)" }}
            >
              <span style={{ color: "var(--red-flag)" }}>&#8226;</span>
              <span>{row.left}</span>
            </div>
            <div
              className="flex gap-2 px-5 py-3 text-xs leading-5"
              style={{ background: i % 2 === 0 ? "var(--pale-blue)" : "white", color: "var(--navy)" }}
            >
              <span style={{ color: "#15803d" }}>&#8226;</span>
              <span>{row.right}</span>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="border-t px-6 py-3" style={{ borderColor: "var(--border-grey)", background: "white" }}>
        <p className="text-center text-xs" style={{ color: "var(--text-grey)" }}>
          Each point stands independently. Headcount changes the volume produced within the current model, not the model itself.
        </p>
      </div>
    </div>
  );
}