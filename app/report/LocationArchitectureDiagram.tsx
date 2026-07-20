// app/report/chapter-13/LocationArchitectureDiagram.tsx
//
// COMMUNICATION GOAL: Answer the CEO's core concern. Using HTML for layout 
// guarantees crisp text legibility, perfect padding, and flawless alignment 
// across both PDF and web views.

const LOCATIONS = ["Brooklyn", "Manhattan", "Bronx", "Westchester", "New-York"];

export function LocationArchitectureDiagram({
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* LEFT: 87 isolated sites */}
        <div
          className="rounded-xl p-5"
          style={{ background: "#fef2f2", border: "1.5px solid var(--red-flag)" }}
        >
          <p
            className="mb-4 text-center text-sm font-bold uppercase tracking-wider"
            style={{ color: "var(--red-flag)" }}
          >
            Current: One Site Per Location
          </p>

          {/* Strict 3x2 Grid for perfect alignment */}
          <div className="grid grid-cols-3 gap-3">
            {LOCATIONS.map((loc, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-2 bg-white rounded-lg"
                style={{ border: "1px dashed #fca5a5" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                </svg>
                <p className="mt-1.5 text-[11px] font-bold text-center" style={{ color: "var(--text-grey)" }}>
                  {loc.toLowerCase()}.com
                </p>
                <p className="text-[9px] italic text-center" style={{ color: "var(--text-light)" }}>
                  duplicated
                </p>
              </div>
            ))}
            
            {/* 6th cell to complete the 3x2 grid cleanly */}
            <div
              className="flex flex-col items-center justify-center p-2 bg-white/50 rounded-lg"
              style={{ border: "1px dashed #fca5a5" }}
            >
              <p className="text-[11px] font-bold text-center" style={{ color: "var(--text-light)" }}>
                + 82 more
              </p>
            </div>
          </div>

          <p className="mt-4 text-center text-[12px] italic font-medium" style={{ color: "var(--red-flag)" }}>
            Each site starts from zero. Authority divided 87 ways.
          </p>
        </div>

        {/* RIGHT: One domain, location branches */}
        <div
          className="rounded-xl p-5"
          style={{ background: "#f0fdf4", border: "1.5px solid #15803d" }}
        >
          <p
            className="mb-4 text-center text-sm font-bold uppercase tracking-wider"
            style={{ color: "#15803d" }}
          >
            Proposed: One Domain, All Locations
          </p>

          <div className="flex flex-col items-center">
            {/* Domain Trunk with explicit padding */}
            <div
              className="px-6 py-2.5 rounded-lg text-white text-sm font-bold shadow-md"
              style={{ background: "var(--navy)" }}
            >
              companyname.com
            </div>

            {/* Vertical Line */}
            <div className="w-0.5 h-4" style={{ background: "var(--navy)" }}></div>

            {/* Branch Hub */}
            <div
              className="px-4 py-1.5 rounded text-xs font-bold"
              style={{ background: "var(--light-blue)", color: "var(--navy)", border: "1px solid var(--navy)" }}
            >
              /locations/
            </div>

            {/* Vertical Line to horizontal branch */}
            <div className="w-0.5 h-4" style={{ background: "#15803d" }}></div>

            {/* Staggered Location Layout Container */}
            <div className="relative w-full max-w-md mt-0" style={{ height: "150px" }}>
              {/* Horizontal Branch Line */}
              <div 
                className="absolute top-0 h-0.5" 
                style={{ background: "#15803d", left: "10%", right: "10%" }}
              ></div>

              {/* Location Leaves - Staggered Zigzag */}
              {LOCATIONS.map((loc, i) => {
                // Calculate horizontal position: 10%, 30%, 50%, 70%, 90%
                const xPercent = 10 + (i * 20);
                // Stagger vertically: items 1, 3, 5 at top; items 2, 4 dropped down
                // We achieve this by extending the drop line height, keeping the pin connected to the top bar
                const isLower = i % 2 !== 0;
                const dropLineHeight = isLower ? "50px" : "16px";
                
                return (
                  <div 
                    key={i} 
                    className="absolute flex flex-col items-center" 
                    style={{ 
                      left: `${xPercent}%`, 
                      top: "0px", // Always start at the top branch line
                      transform: "translateX(-50%)" 
                    }}
                  >
                    {/* Drop line - extends further for staggered items to create space while remaining connected */}
                    <div className="w-0.5" style={{ background: "#15803d", height: dropLineHeight }}></div>
                    
                    {/* Map Pin Icon */}
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#dc2626" stroke="white" strokeWidth="1.5">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>

                    {/* City Box */}
                    <div 
                      className="mt-2 px-2 py-1 border rounded text-center shadow-sm"
                      style={{ borderColor: "#15803d", background: "white" }}
                    >
                      <p className="text-[11px] font-bold whitespace-nowrap" style={{ color: "var(--navy)" }}>
                        /{loc.toLowerCase()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="mt-1 text-center text-[12px] italic font-medium" style={{ color: "#15803d" }}>
            Every location page inherits the full domain&apos;s authority.
          </p>
        </div>
      </div>

      {/* Bottom evidence strip */}
      <div
        className="mt-5 rounded-lg px-4 py-2.5 text-center"
        style={{ background: "var(--light-blue)" }}
      >
        <p className="text-[11px] font-semibold" style={{ color: "var(--navy)" }}>
          The structure used by Apple (apple.com/retail), national banks, and the
          dominant US cleaning brands: Stanley Steemer, ServiceMaster Clean, COIT
        </p>
      </div>
    </div>
  );
}