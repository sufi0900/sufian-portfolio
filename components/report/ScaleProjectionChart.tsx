// components/report/ScaleProjectionChart.tsx
"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Documented\n(87 sites)", urls: 226_200, fill: "#004dfd" },
  { name: "Projected\n(2,000 domains)", urls: 5_200_000, fill: "#c0392b" },
];

function formatNumber(n: number) {
  return n.toLocaleString("en-US");
}

// CHANGED: figureNumber/title are now REQUIRED props instead of a hardcoded
// "Figure 1.1" baked into the component. This component was originally
// built for the Chapter 1 demo page and reused as-is in Chapter 3, which is
// exactly how a chart inside Chapter 3 ended up labeled "Figure 1.1." Every
// chart/diagram in this design system now follows the same pattern: the
// page that places the figure is responsible for numbering it correctly.
export function ScaleProjectionChart({
  figureNumber,
  title,
}: {
  figureNumber: string;
  title: string;
}) {
  return (
    <div className="avoid-break my-6 rounded-md border p-5" style={{ borderColor: "var(--border-grey)" }}>
      <p className="mb-3 text-xs font-bold uppercase tracking-wide" style={{ color: "var(--text-light)" }}>
        {`Figure ${figureNumber} — ${title}`}
      </p>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e4e8" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#4a4a4a" }} />
          <YAxis
            tickFormatter={(v: number) => `${(v / 1_000_000).toFixed(1)}M`}
            tick={{ fontSize: 12, fill: "#4a4a4a" }}
          />
          <Tooltip
            formatter={(value: number) => [`${formatNumber(value)} URLs`, ""]}
            contentStyle={{ fontSize: 13, borderRadius: 6 }}
          />
          <Bar dataKey="urls" radius={[4, 4, 0, 0]}>
            {data.map((entry, i) => (
              <Cell key={i} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-2 text-xs" style={{ color: "var(--text-light)" }}>
        The projected figure assumes the same 2,600-URL-per-site construction pattern applied
        across the full ~2,000-domain portfolio. Presented as a projection, not a confirmed count.
      </p>
    </div>
  );
}
