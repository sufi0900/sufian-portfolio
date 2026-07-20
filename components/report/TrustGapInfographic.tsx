// components/report/TrustGapInfographic.tsx

const socialIcons: Array<{
  platform: "fb" | "ig" | "yt";
  x: number;
  y: number;
  size: number;
  opacity: number;
}> = [
  // Inner Orbit
  { platform: "fb", x: 200, y: 160, size: 36, opacity: 0.9 },
  { platform: "ig", x: 380, y: 130, size: 32, opacity: 0.8 },
  { platform: "yt", x: 280, y: 290, size: 40, opacity: 0.85 },
  // Middle Orbit
  { platform: "ig", x: 130, y: 250, size: 28, opacity: 0.6 },
  { platform: "yt", x: 170, y: 90, size: 30, opacity: 0.7 },
  { platform: "fb", x: 440, y: 220, size: 34, opacity: 0.75 },
  { platform: "fb", x: 390, y: 320, size: 26, opacity: 0.5 },
  { platform: "yt", x: 260, y: 60, size: 24, opacity: 0.4 },
  // Outer Orbit / Scattered Noise
  { platform: "fb", x: 80, y: 140, size: 24, opacity: 0.35 },
  { platform: "ig", x: 90, y: 340, size: 30, opacity: 0.45 },
  { platform: "yt", x: 500, y: 100, size: 28, opacity: 0.5 },
  { platform: "fb", x: 530, y: 290, size: 32, opacity: 0.4 },
  { platform: "ig", x: 460, y: 360, size: 24, opacity: 0.3 },
  { platform: "yt", x: 200, y: 370, size: 28, opacity: 0.5 },
  { platform: "ig", x: 320, y: 40, size: 26, opacity: 0.45 },
];

function SocialIcon({ platform, x, y, size, opacity }: (typeof socialIcons)[number]) {
  const h = size / 2;
  const r = size * 0.22;
  switch (platform) {
    case "fb":
      return (
        <g transform={`translate(${x},${y})`} opacity={opacity}>
          <rect x={-h} y={-h} width={size} height={size} rx={r} fill="#1877F2" />
          <text x="0" y={size * 0.2} textAnchor="middle" fill="white" fontSize={size * 0.58} fontWeight="bold" fontFamily="Arial,Helvetica,sans-serif">f</text>
        </g>
      );
    case "ig":
      return (
        <g transform={`translate(${x},${y})`} opacity={opacity}>
          <rect x={-h} y={-h} width={size} height={size} rx={r} fill="url(#ig-grad)" />
          <rect x={-size * 0.26} y={-size * 0.26} width={size * 0.52} height={size * 0.52} rx={size * 0.1} stroke="white" strokeWidth={size * 0.055} fill="none" />
          <circle cx="0" cy="0" r={size * 0.14} stroke="white" strokeWidth={size * 0.055} fill="none" />
          <circle cx={size * 0.17} cy={-size * 0.17} r={size * 0.055} fill="white" />
        </g>
      );
    case "yt":
      return (
        <g transform={`translate(${x},${y})`} opacity={opacity}>
          <rect x={-h} y={-h * 0.72} width={size} height={size * 0.72} rx={r} fill="#FF0000" />
          <polygon points={`${-size * 0.1},${-size * 0.2} ${-size * 0.1},${size * 0.2} ${size * 0.16},0`} fill="white" />
        </g>
      );
  }
}

export function TrustGapInfographic() {
  return (
    <div
      className="avoid-break my-8 overflow-hidden rounded-xl border bg-white"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.06)",
      }}
    >
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-xs font-bold tracking-wide text-white uppercase">
          FIGURE 9.2 &mdash; THE TRUST GAP: A CUSTOMER&apos;S PERSPECTIVE
        </p>
      </div>

      <div className="flex justify-center px-4 py-8 sm:px-6 relative" style={{ background: "var(--pale-blue)" }}>
        <div style={{ width: "100%", maxWidth: "600px", aspectRatio: "3 / 2", position: "relative" }}>
          <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            
            <defs>
              <linearGradient id="ig-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F58529" />
                <stop offset="50%" stopColor="#DD2A7B" />
                <stop offset="100%" stopColor="#8134AF" />
              </linearGradient>
              <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--lionxe-blue, #004DFD)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--lionxe-blue, #004DFD)" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Glow & Orbital Rings (representing the vortex of 261 accounts) */}
            <circle cx="300" cy="200" r="180" fill="url(#glow)" />
            <circle cx="300" cy="200" r="80" stroke="var(--lionxe-blue, #004DFD)" strokeWidth="1" strokeDasharray="4 6" fill="none" opacity="0.4" />
            <circle cx="300" cy="200" r="140" stroke="var(--lionxe-blue, #004DFD)" strokeWidth="1" strokeDasharray="2 8" fill="none" opacity="0.3" />
            <circle cx="300" cy="200" r="220" stroke="var(--lionxe-blue, #004DFD)" strokeWidth="1" strokeDasharray="1 10" fill="none" opacity="0.15" />

            {/* Scattered social icons */}
            {socialIcons.map((icon, i) => (
              <SocialIcon key={i} {...icon} />
            ))}

            {/* Faded "Brand?" labels scattered in the noise */}
            <text x="160" y="200" fill="var(--lionxe-blue, #004DFD)" fontSize="14" fontWeight="bold" opacity="0.2" fontStyle="italic" transform="rotate(-15 160 200)">Which Brand?</text>
            <text x="440" y="160" fill="var(--lionxe-blue, #004DFD)" fontSize="12" fontWeight="bold" opacity="0.2" fontStyle="italic" transform="rotate(10 440 160)">Real Brand?</text>
            <text x="300" y="340" textAnchor="middle" fill="var(--lionxe-blue, #004DFD)" fontSize="16" fontWeight="bold" opacity="0.15" fontStyle="italic">Who is the real brand?</text>

            {/* Person Silhouette (Sleeker Design) */}
            <g transform="translate(0, 15)">
              <circle cx="300" cy="165" r="22" fill="var(--navy)" />
              <path d="M265,225 C265,200 275,192 300,192 C325,192 335,200 335,225 L335,240 C335,245 330,250 325,250 L275,250 C270,250 265,245 265,240 Z" fill="var(--navy)" />
            </g>

            {/* Confusion / Question Marks */}
            <text x="335" y="145" fill="var(--red-flag, #e11d48)" fontSize="28" fontWeight="bold" fontFamily="Georgia,serif" opacity="0.9">?</text>
            <text x="260" y="135" fill="var(--red-flag, #e11d48)" fontSize="20" fontWeight="bold" fontFamily="Georgia,serif" opacity="0.7">?</text>
            
            {/* Searching Magnifying Glass */}
            <g transform="translate(345, 235) rotate(-35)">
              <circle cx="0" cy="0" r="12" stroke="var(--lionxe-blue, #004DFD)" strokeWidth="3" fill="none" opacity="0.9" />
              <line x1="9" y1="9" x2="20" y2="20" stroke="var(--lionxe-blue, #004DFD)" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
            </g>

          </svg>
        </div>
      </div>
      
      {/* Bottom caption bar */}
      <div className="border-t px-6 py-3 bg-white" style={{ borderColor: "var(--border-grey)" }}>
        <p className="text-center text-[12px] font-medium" style={{ color: "var(--text-grey)" }}>
          Lost in the Noise: 261 fragmented accounts across three platforms create confusion, ensuring no single recognizable identity emerges.
        </p>
      </div>
    </div>
  );
}