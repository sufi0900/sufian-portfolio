// components/report/Headings.tsx
//
// section-heading / mini-heading classes are hook points for the
// pagination engine in report.css: they carry an invisible spacer that
// pushes a heading to the next page when too little room remains below
// it, so no heading is ever orphaned at the bottom of a page.

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="section-heading avoid-break mb-4 mt-10 text-xl font-bold"
      style={{ color: "var(--navy)" }}
    >
      {children}
    </h2>
  );
}

export function MiniHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mini-heading avoid-break mb-2 mt-6 text-sm font-bold"
      style={{ color: "var(--lionxe-blue)" }}
    >
      {children}
    </h3>
  );
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mb-4 text-[15px] leading-7"
      style={{ color: "var(--text-black)" }}
    >
      {children}
    </p>
  );
}