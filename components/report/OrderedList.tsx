// components/report/OrderedList.tsx

export function OrderedList({ items }: { items: React.ReactNode[] }) {
  return (
    <ol className="avoid-break mb-5 space-y-2.5 pl-0 list-none">
      {items.map((item, i) => (
        <li key={i} className="flex gap-1.5">
          <span
            className="flex-shrink-0 font-bold"
            style={{
              color: "var(--lionxe-blue)",
              fontSize: "15px",
              lineHeight: "1.75",
              minWidth: "20px",
            }}
          >
            {i + 1}.
          </span>
          <span
            className="text-[15px] leading-7"
            style={{ color: "var(--text-black)" }}
          >
            {item}
          </span>
        </li>
      ))}
    </ol>
  );
}