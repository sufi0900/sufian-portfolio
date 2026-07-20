// components/report/BulletList.tsx

export function BulletList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="avoid-break mb-5 space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          {/* This dot can never drift out of alignment with multi-line text
              the way it did in the Python pipeline, because flexbox aligns
              it to the flex item, not to a manually-calculated y-coordinate. */}
          <span
            className="mt-[9px] h-[6px] w-[6px] flex-shrink-0 rounded-full"
            style={{ background: "var(--lionxe-blue)" }}
          />
          <span
            className="text-[15px] leading-7"
            style={{ color: "var(--text-black)" }}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}
