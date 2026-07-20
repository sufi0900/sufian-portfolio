// components/report/SkillTrajectoryChart.tsx

export function SkillTrajectoryChart({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  const data = [
    { name: "Design", width: "85%", color: "#10B981", bg: "#ECFDF5", label: "Strong Growth", trend: "up" },
    { name: "Development", width: "85%", color: "#10B981", bg: "#ECFDF5", label: "Strong Growth", trend: "up" },
    { name: "Video Editing", width: "50%", color: "#94A3B8", bg: "#F1F5F9", label: "Mixed / Flat", trend: "flat" },
    { name: "Social Media", width: "45%", color: "#94A3B8", bg: "#F1F5F9", label: "Narrow / Flat", trend: "flat" },
    { name: "Content Writing", width: "25%", color: "var(--red-flag, #e11d48)", bg: "#FFF1F2", label: "Constrained", trend: "down" },
    { name: "SEO", width: "20%", color: "var(--red-flag, #e11d48)", bg: "#FFF1F2", label: "Constrained", trend: "down" },
  ];

  return (
    <div 
      className="avoid-break my-8 rounded-xl border bg-white p-6 shadow-sm" 
      style={{ borderColor: "var(--border-grey)" }}
    >
      <p 
        className="mb-6 text-xs font-bold uppercase tracking-wide" 
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      <div className="flex flex-col gap-4">
        {data.map((dept, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 group">
            {/* Department Name */}
            <div className="w-full sm:w-32 flex-shrink-0">
              <span className="text-[13px] font-bold" style={{ color: "var(--navy)" }}>
                {dept.name}
              </span>
            </div>

            {/* Trajectory Bar Area */}
            <div className="flex-1 flex items-center relative h-9 bg-gray-50 rounded-md overflow-hidden border" style={{ borderColor: "var(--border-grey)" }}>
              {/* Animated/Filled Bar */}
              <div
                className="h-full flex items-center px-3 transition-all duration-500 group-hover:brightness-95"
                style={{ 
                  width: dept.width, 
                  backgroundColor: dept.bg, 
                  borderRight: `3px solid ${dept.color}` 
                }}
              >
                {/* SVG Trend Arrows */}
                <div className="ml-auto">
                  {dept.trend === "up" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={dept.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17L17 7M17 7H10M17 7V14" />
                    </svg>
                  )}
                  {dept.trend === "flat" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={dept.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  )}
                  {dept.trend === "down" && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={dept.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 7l10 10M17 17V10M17 17H10" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Trajectory Label */}
            <div className="w-full sm:w-28 flex-shrink-0 text-left sm:text-right">
              <span className="text-[11px] font-bold uppercase tracking-wider" style={{ color: dept.color }}>
                {dept.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Observation Caption */}
      <div className="mt-6 border-t pt-4" style={{ borderColor: "var(--border-grey)" }}>
         <p className="text-[11px] leading-relaxed text-gray-500">
           <span className="font-bold text-gray-700">Observation:</span> The departments most directly responsible for core search visibility (Content & SEO) operate under structural limitations that actively restrict their professional growth, whereas secondary support departments experience strong upward trajectories.
         </p>
      </div>
    </div>
  );
}