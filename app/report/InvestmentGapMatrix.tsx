// app/report/chapter-10/InvestmentGapMatrix.tsx
//
// Four-column diagnostic matrix evaluating each department group across:
// Skill Growth | Company's Desired Benefit | The Gap | Budget Impact
//
// Pattern: chapter-specific component, imported directly by the page.

"use client";

type StatusLevel = "positive" | "mixed" | "negative" | "critical";

interface DepartmentRow {
  department: string;
  skillGrowth: { text: string; status: StatusLevel };
  desiredBenefit: { text: string; status: StatusLevel };
  gap: { text: string; status: StatusLevel };
  budgetImpact: { text: string; status: StatusLevel };
}

const STATUS_DOT: Record<StatusLevel, string> = {
  positive: "#22C55E",
  mixed:    "#F59E0B",
  negative: "#E97A2B",
  critical: "#c0392b",
};

const ROWS: DepartmentRow[] = [
  {
    department: "Design & Development",
    skillGrowth: {
      text: "Growing, but limited to volume work across scattered properties rather than premium authority brands",
      status: "mixed",
    },
    desiredBenefit: {
      text: "Continuous stream of websites and visual assets delivered on schedule",
      status: "positive",
    },
    gap: {
      text: "Ranking, authority visibility, and actual revenue remain absent despite high output",
      status: "negative",
    },
    budgetImpact: {
      text: "Investment produces assets that generate no measurable organic return",
      status: "negative",
    },
  },
  {
    department: "Video Editing",
    skillGrowth: {
      text: "Software proficiency maintained through high volume, but limited to synthetic production methods",
      status: "mixed",
    },
    desiredBenefit: {
      text: "Videos delivered to the social media pipeline on schedule",
      status: "positive",
    },
    gap: {
      text: "Revenue and conversions attributable to video content are negligible",
      status: "negative",
    },
    budgetImpact: {
      text: "Production cost does not translate into business growth",
      status: "negative",
    },
  },
  {
    department: "Social Media",
    skillGrowth: {
      text: "Platform mechanics and scheduling experience, no strategic community-building exposure",
      status: "mixed",
    },
    desiredBenefit: {
      text: "High volume of accounts managed with baseline engagement maintained",
      status: "mixed",
    },
    gap: {
      text: "Minimal outreach leads generated, far below expected return for 261 accounts",
      status: "negative",
    },
    budgetImpact: {
      text: "Budget allocation is disproportionate to the leads and conversions it produces",
      status: "negative",
    },
  },
  {
    department: "Content Writing & SEO",
    skillGrowth: {
      text: "Stagnant to declining. Skills exercised are tool operation and format compliance, not strategic capability",
      status: "critical",
    },
    desiredBenefit: {
      text: "Rankings, qualified traffic, and search-driven customer acquisition are not being achieved",
      status: "critical",
    },
    gap: {
      text: "Zero competitive advantage. No clean traffic, no authority, no conversion pipeline",
      status: "critical",
    },
    budgetImpact: {
      text: "Total loss. Neither skill development nor business outcomes justify the expenditure",
      status: "critical",
    },
  },
];

const COLUMNS = [
  "Skill Growth",
  "Desired Benefit",
  "The Gap",
  "Budget Impact",
];

function StatusIndicator({ status }: { status: StatusLevel }) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: STATUS_DOT[status],
        marginRight: 6,
        flexShrink: 0,
        marginTop: 2,
      }}
    />
  );
}

export function InvestmentGapMatrix({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div
      className="avoid-break my-7 overflow-hidden rounded-xl border"
      style={{
        borderColor: "var(--border-grey)",
        boxShadow: "0 4px 14px rgb(10 22 40 / 0.08)",
      }}
    >
      {/* ── Header ── */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* ── Matrix Body ── */}
      <div style={{ background: "var(--pale-blue)" }}>
        {ROWS.map((row, ri) => (
          <div
            key={row.department}
            className="border-t"
            style={{ borderColor: ri === 0 ? "transparent" : "#e0e4e8" }}
          >
            {/* Department label band */}
            <div
              className="px-5 py-2"
              style={{
                background:
                  row.department === "Content Writing & SEO"
                    ? "rgba(192, 57, 43, 0.06)"
                    : "rgba(10, 22, 40, 0.04)",
              }}
            >
              <p
                className="text-[12px] font-bold tracking-wide"
                style={{ color: "var(--navy)" }}
              >
                {row.department}
              </p>
            </div>

            {/* Four metric cells as a 2×2 grid */}
            <div
              className="grid grid-cols-2 gap-px px-4 pb-4 pt-2"
              style={{ background: "transparent" }}
            >
              {(
                [
                  { label: COLUMNS[0], ...row.skillGrowth },
                  { label: COLUMNS[1], ...row.desiredBenefit },
                  { label: COLUMNS[2], ...row.gap },
                  { label: COLUMNS[3], ...row.budgetImpact },
                ] as { label: string; text: string; status: StatusLevel }[]
              ).map((cell) => (
                <div
                  key={cell.label}
                  className="rounded-md px-3 py-2.5"
                  style={{ background: "white" }}
                >
                  <p
                    className="mb-1 text-[9px] font-bold uppercase tracking-wider"
                    style={{ color: "#6b7280" }}
                  >
                    {cell.label}
                  </p>
                  <div className="flex items-start">
                    <StatusIndicator status={cell.status} />
                    <p
                      className="text-[11px] leading-[16px]"
                      style={{ color: "var(--text-black)" }}
                    >
                      {cell.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Legend ── */}
      <div
        className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1 border-t px-5 py-2.5"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        {(
          [
            ["positive", "Meeting Expectations"],
            ["mixed", "Partially Met"],
            ["negative", "Below Expected Return"],
            ["critical", "Complete Shortfall"],
          ] as [StatusLevel, string][]
        ).map(([status, label]) => (
          <span key={status} className="flex items-center gap-1.5 text-[9px]" style={{ color: "#6b7280" }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: STATUS_DOT[status],
                display: "inline-block",
              }}
            />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}