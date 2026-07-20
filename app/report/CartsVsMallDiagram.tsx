// app/report/chapter-13/CartsVsMallDiagram.tsx
"use client";

const SHOPS = [
  "Locations", 
  "Core Services", 
  "Topical Blog", 
  "Case Studies", 
  "Pricing Engine", 
  "Brand Core"
];

export function CartsVsMallDiagram({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-7 rounded-xl border p-6 overflow-hidden"
      style={{
        borderColor: "var(--border-grey)",
        background: "white",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      <p
        className="mb-5 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      {/* 5-column grid: Left gets 2 cols (40%), Right gets 3 cols (60%) */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-5 items-stretch">
        
        {/* LEFT PANEL: 87 Scattered Carts (Fragile, Fragmented Model) */}
        <div
          className="rounded-xl bg-white p-5 flex flex-col h-full sm:col-span-2"
          style={{ border: "1.5px solid var(--red-flag)" }}
        >
          <p
            className="mb-1 text-center text-sm font-black uppercase tracking-wider"
            style={{ color: "var(--red-flag)" }}
          >
            Current: 87 Scattered Carts
          </p>
          <p
            className="mb-4 text-center text-[11px] px-2 leading-relaxed"
            style={{ color: "var(--text-grey)" }}
          >
            Standalone domain channels dividing total brand equity.
          </p>

          {/* Flex-grow ensures this grid stretches to match the right side's height */}
          <div className="grid grid-cols-3 gap-3 bg-zinc-50 p-3 rounded-lg border border-zinc-100 dark:bg-zinc-900/40 dark:border-zinc-800 flex-grow">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center p-1 bg-white border border-zinc-200 rounded shadow-sm h-full dark:bg-zinc-950 dark:border-zinc-800"
                style={{ opacity: 0.7 + (i % 3) * 0.1 }}
              >
                <svg viewBox="0 0 40 40" width="32" height="32" className="block">
                  {/* Canopy */}
                  <polygon points="5,15 20,5 35,15" fill="#dc2626" />
                  {/* Cart Body */}
                  <rect x="10" y="15" width="20" height="12" fill="#fca5a5" stroke="#dc2626" strokeWidth="1" />
                  {/* Wheels */}
                  <circle cx="14" cy="30" r="2.5" fill="#475569" />
                  <circle cx="26" cy="30" r="2.5" fill="#475569" />
                </svg>
              </div>
            ))}
          </div>
          
          <p
            className="mt-4 text-center text-[10px] font-semibold italic"
            style={{ color: "var(--text-light)" }}
          >
            + 75 additional isolated nodes
          </p>
        </div>

        {/* RIGHT PANEL: Flagship Single-Domain Mall Architecture (Light Green Theme) */}
        <div
          className="rounded-xl p-5 flex flex-col h-full sm:col-span-3 bg-emerald-50/30"
          style={{ border: "1.5px solid #15803d" }}
        >
          <p
            className="mb-1 text-center text-sm font-black uppercase tracking-wider"
            style={{ color: "#15803d" }}
          >
            Proposed: One Shopping Mall
          </p>
          <p
            className="mb-4 text-center text-[11px] px-2 leading-relaxed"
            style={{ color: "var(--text-grey)" }}
          >
            Centralized platform compounding multi-department traction.
          </p>

          {/* Mall Structure Container */}
          <div className="flex flex-col items-center w-full flex-grow">
            
            {/* Mall Roof / Triangle perfectly connected to 0% and 100% corners */}
            <div className="w-full relative flex items-end justify-center" style={{ height: "55px" }}>
              <div 
                className="absolute inset-0" 
                style={{ 
                  background: "#15803d", 
                  clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)" 
                }}
              ></div>
              <p 
                className="relative pb-1.5 text-[11px] font-black uppercase tracking-wider text-white z-10"
              >
                One Authority Domain
              </p>
            </div>

            {/* Main Building Body - Connected to matching borders */}
            <div 
              className="w-full flex flex-col flex-grow p-4 bg-white/90"
              style={{ border: "2px solid #15803d", borderTop: "none" }}
            >
              {/* Internal Shops Grid (3x2) */}
              <div className="grid grid-cols-3 gap-4 flex-grow">
                {SHOPS.map((shop, i) => (
                  <div key={i} className="flex flex-col items-center justify-end">
                    {/* Upward Authority Flow Arrow */}
                    <svg className="w-5 h-5 mb-1 text-emerald-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                    
                    {/* Department Shop Box */}
                    <div 
                      className="w-full border rounded-md flex flex-col overflow-hidden shadow-sm"
                      style={{ borderColor: "#16a34a", background: "#ffffff" }}
                    >
                      {/* Premium Accent Awning */}
                      <div className="h-2 w-full bg-emerald-100 border-b border-emerald-600"></div>
                      
                      {/* Department Label */}
                      <div className="flex items-center justify-center flex-grow py-3 px-1">
                        <p className="text-xs font-black text-center" style={{ color: "var(--navy)" }}>
                          {shop}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p
            className="mt-4 text-center text-[10px] font-semibold italic"
            style={{ color: "#15803d" }}
          >
            All organic equity aggregates into one property
          </p>
        </div>

      </div>
    </div>
  );
}