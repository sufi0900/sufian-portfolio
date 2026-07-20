// components/report/ConsolidationBenefitsPanel.tsx
//
// Replaces the prose-based ContrastCards at Figure 13.1. The user's
// requirement: no comma-chained prose; itemized listing on both sides.
// Left panel lists the structural costs of the 87-site model, each with
// a cross marker. Right panel lists the compounding benefits of one
// authority domain, each with a check marker. Header band + canvas +
// footnote follows the report's standard figure wrapper.

const COSTS = [
  "Authority divided across 87 separate domains",
  "Every new site starts from zero trust and zero history",
  "Content effort duplicated instead of accumulated",
  "Backlinks scattered, none reaching critical mass",
  "Brand recognition impossible: 87 different names",
  "Crawl budget and indexing split across the network",
  "87 sites to host, secure, update, and maintain",
];

const BENEFITS = [
  "Every page's value flows to one domain",
  "Domain health and authority compound with each publication",
  "All backlinks strengthen a single property",
  "One brand name accumulates recognition and searches",
  "New pages inherit the domain's full established trust",
  "One property to host, secure, update, and maintain",
  "Location and service coverage preserved as structured paths",
];

export function ConsolidationBenefitsPanel({
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
      {/* Header band */}
      <div className="px-5 py-3" style={{ background: "var(--navy)" }}>
        <p className="text-[10px] font-bold uppercase tracking-widest text-white opacity-70">
          {`Figure ${figureNumber}`}
        </p>
        <p className="mt-0.5 text-xs font-bold text-white">{title}</p>
      </div>

      {/* Canvas */}
      <div className="px-5 py-6" style={{ background: "var(--pale-blue)" }}>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* LEFT: costs */}
          <div
            className="overflow-hidden rounded-xl bg-white"
            style={{ border: "1.5px solid var(--red-flag)" }}
          >
            <div className="px-4 py-2.5" style={{ background: "#7f1d1d" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                87 Separate Domains — The Structural Cost
              </p>
            </div>
            <div className="px-4 py-3">
              {COSTS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 py-1.5"
                  style={{
                    borderBottom:
                      i < COSTS.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                >
                  <span
                    className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                    style={{ background: "var(--red-flag)" }}
                  >
                    {"\u2715"}
                  </span>
                  <span
                    className="text-[11px] leading-4"
                    style={{ color: "var(--text-grey)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: benefits */}
          <div
            className="overflow-hidden rounded-xl bg-white"
            style={{ border: "1.5px solid #15803d" }}
          >
            <div className="px-4 py-2.5" style={{ background: "#14532d" }}>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white">
                One Authority Domain — The Compounding Benefit
              </p>
            </div>
            <div className="px-4 py-3">
              {BENEFITS.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2.5 py-1.5"
                  style={{
                    borderBottom:
                      i < BENEFITS.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                >
                  <span
                    className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white"
                    style={{ background: "#16a34a" }}
                  >
                    {"\u2713"}
                  </span>
                  <span
                    className="text-[11px] leading-4"
                    style={{ color: "var(--text-grey)" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footnote band */}
      <div
        className="border-t px-6 py-3"
        style={{ borderColor: "var(--border-grey)", background: "white" }}
      >
        <p
          className="text-center text-[10px] leading-relaxed"
          style={{ color: "var(--text-grey)" }}
        >
          Example paths under the consolidated model:
          companyname.com/locations/brooklyn, companyname.com/locations/manhattan,
          one structured path per service area.
        </p>
      </div>
    </div>
  );
}