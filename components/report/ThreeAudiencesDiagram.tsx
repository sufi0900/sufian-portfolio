// app/report/chapter-4/ThreeAudiencesDiagram.tsx

export function ThreeAudiencesDiagram({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  const audiences = [
    {
      num: "1",
      name: "Google Crawler",
      role: "Indexing & Ranking",
      evaluates: "Technical structure, spam markers, keyword manipulation patterns.",
      fails: "Content is de-indexed or filtered out of search results.",
      accent: "#4285F4", // Google Blue
      // Google Icon placed on a white badge for maximum color clarity
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-100">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
        </div>
      ),
    },
    {
      num: "2",
      name: "AI Citation Engine",
      role: "Synthesis & Retrieval",
      evaluates: "Information density, data originality, unique subject-matter insight.",
      fails: "Omitted from AI answers; engine relies on baseline training data.",
      accent: "#0f172a", // Dark Navy
      // Upgraded to a professional AI Robot/Microchip icon
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm border border-slate-800" style={{ background: "#0f172a" }}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="8" width="16" height="12" rx="2" />
            <line x1="12" y1="4" x2="12" y2="8" />
            <circle cx="12" cy="3" r="1.5" fill="white" stroke="none" />
            <circle cx="9" cy="14" r="1.5" fill="white" stroke="none" />
            <circle cx="15" cy="14" r="1.5" fill="white" stroke="none" />
            <path d="M9 18 h6" />
          </svg>
        </div>
      ),
    },
    {
      num: "3",
      name: "Human Reader",
      role: "Commercial Conversion",
      evaluates: "Clarity, actionable value, immediate trust and credibility.",
      fails: "Immediate bounce, sending negative behavioral signals up-funnel.",
      accent: "#7c3aed", // Purple 600
      icon: (
        <div className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm border border-violet-800" style={{ background: "#7c3aed" }}>
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <div
      className="avoid-break my-7 rounded-xl border p-6 pb-8 overflow-hidden"
      style={{
        borderColor: "var(--border-grey)",
        background: "white",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      <p
        className="mb-6 text-xs font-bold uppercase tracking-wide"
        style={{ color: "var(--text-light)" }}
      >
        {`Figure ${figureNumber} — ${title}`}
      </p>

      {/* ── INPUT SOURCE ── */}
      <div className="flex flex-col items-center">
        <div
          className="rounded-xl px-8 py-4 text-center shadow-lg"
          style={{ background: "var(--navy)" }}
        >
          <p className="text-[10px] font-bold uppercase tracking-widest" style={{ color: "var(--light-blue)" }}>
            Input Source
          </p>
          <p className="mt-1 text-sm font-bold text-white">
            Single Piece of Content
          </p>
        </div>

        {/* ── CUSTOM BRANCHING NETWORK ── */}
        <div className="relative w-full max-w-3xl h-12">
          {/* Central Trunk */}
          <div className="absolute left-1/2 top-0 w-[2px] h-1/2 bg-slate-300 -translate-x-1/2"></div>
          {/* Horizontal Bar */}
          <div className="absolute top-1/2 left-[16.66%] right-[16.66%] h-[2px] bg-slate-300"></div>
          
          {/* Left Drop */}
          <div className="absolute top-1/2 left-[16.66%] w-[2px] h-1/2 bg-slate-300 -translate-x-1/2"></div>
          {/* Center Drop */}
          <div className="absolute top-1/2 left-1/2 w-[2px] h-1/2 bg-slate-300 -translate-x-1/2"></div>
          {/* Right Drop */}
          <div className="absolute top-1/2 right-[16.66%] w-[2px] h-1/2 bg-slate-300 translate-x-1/2"></div>
          
          {/* Arrowheads */}
          <div className="absolute bottom-0 left-[16.66%] -translate-x-1/2 translate-y-[2px]">
            <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid #4285F4' }}></div>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2px]">
            <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid #0f172a' }}></div>
          </div>
          <div className="absolute bottom-0 right-[16.66%] translate-x-1/2 translate-y-[2px]">
            <div style={{ width: 0, height: 0, borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '8px solid #7c3aed' }}></div>
          </div>
        </div>

        {/* ── SUBSTANTIAL PARENT CARD (Navy Container) ── */}
        <div className="w-full max-w-3xl p-6 rounded-2xl shadow-xl" style={{ background: "var(--navy)" }}>
          
          {/* Parent Card Header */}
          <p className="text-center text-[11px] font-bold uppercase tracking-widest mb-5" style={{ color: "var(--light-blue)" }}>
            The Three Evaluation Audiences
          </p>

          {/* Inner Cards Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 items-stretch">
            {audiences.map((aud, i) => (
              <div 
                key={i} 
                className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-200 shadow-md"
              >
                {/* Tinted Header */}
                <div 
                  className="p-4 flex items-center gap-3 border-b border-slate-100"
                  style={{ background: '#f8fafc' }}
                >
                  {aud.icon}
                  <div>
                    <p className="text-sm font-bold" style={{ color: aud.accent }}>{aud.name}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{aud.role}</p>
                  </div>
                </div>

                {/* Clean Body */}
                <div className="p-4 flex-grow flex flex-col gap-4 bg-white">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#334155' }}>Evaluates</p>
                    <p className="text-[12px] leading-relaxed text-slate-600 font-medium">
                      {aud.evaluates}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-3 border-t border-slate-100">
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#334155' }}>If Generic</p>
                    <p className="text-[12px] leading-relaxed font-semibold" style={{ color: 'var(--red-flag)' }}>
                      {aud.fails}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── FEEDBACK LOOP ANNOTATION ── */}
        <div 
          className="mt-6 flex items-center gap-2 rounded-full px-4 py-2 border"
          style={{ background: '#f8fafc', borderColor: '#e2e8f0' }}
        >
          <span className="text-sm" style={{ color: "#7c3aed" }}>&#8634;</span>
          <p className="text-[10px] font-semibold text-slate-600">
            Audience 3&apos;s bounce rate feeds directly back as behavioral signals to Audiences 1 &amp; 2
          </p>
        </div>
      </div>
    </div>
  );
}