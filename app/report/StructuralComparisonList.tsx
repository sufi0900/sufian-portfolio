import React from "react";

export function StructuralComparisonList({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  const pitfalls = [
    "More writers produce an increased volume of content restricted by the exact same strict word ceilings, repetitive structures, and low-quality templates.",
    "Additional social media coordinators spread the baseline task load out without addressing or consolidating the structurally fragmented footprint of 261 disconnected channels.",
    "More SEO personnel monitor the identical flat keyword list without introducing internal linking strategies, technical auditing, or pillar cluster architectures.",
    "Monthly overhead increases continuously while structural performance boundaries remain entirely unchanged."
  ];

  const solutions = [
    "Systematically consolidate the expansive portfolio into high-yield, topically authoritative digital assets.",
    "Eradicate the flat list keyword mapping to implement deep pillar-page clustering and strategic search intent alignment.",
    "Transition the workflow entirely away from an automated content generation pipeline to an insight-driven production engine.",
    "Empower the existing internal team to operate a streamlined system built intentionally to acquire organic authority rather than raw output volume."
  ];

  return (
    <div
      className="avoid-break my-8 overflow-hidden rounded-xl border"
      style={{ borderColor: "var(--border-grey)", boxShadow: "0 4px 14px rgb(10 22 40 / 0.06)" }}
    >
      {/* Header Band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold uppercase tracking-wide text-white">
          {`Figure ${figureNumber} — ${title}`}
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x" style={{ divideColor: "var(--border-grey)", backgroundColor: "white" }}>
        {/* Left Hand: Flawed Headcount Scaling */}
        <div className="p-5 sm:p-6" style={{ background: "#fafbfc" }}>
          <h4 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-red-600">
            <span className="w-2 h-2 rounded-full bg-red-600 inline-block" />
            Adding Headcount to the Current Model
          </h4>
          <ul className="space-y-3">
            {pitfalls.map((item, i) => (
              <li key={i} className="text-xs flex items-start gap-2.5" style={{ color: "var(--navy)" }}>
                <span className="text-red-500 font-bold select-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Hand: Structural Framework Rebuilding */}
        <div className="p-5 sm:p-6">
          <h4 className="text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2 text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
            Addressing the Underlying Structure
          </h4>
          <ul className="space-y-3">
            {solutions.map((item, i) => (
              <li key={i} className="text-xs flex items-start gap-2.5" style={{ color: "var(--navy)" }}>
                <span className="text-emerald-600 font-bold select-none">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}