// components/report/NumberedList.tsx

export function NumberedList({ items }: { items: string[] }) {
  return (
    <div className="mb-6 mt-3 flex flex-col gap-3">
      {items.map((item, index) => (
        <div key={index} className="flex items-start gap-3">
          <div
            className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-sm text-[10px] font-bold text-white"
            style={{ background: "var(--lionxe-blue, #004DFD)" }}
          >
            {index + 1}
          </div>
          <span
            className="text-[13px] leading-relaxed"
            style={{ color: "var(--text-grey)" }}
          >
            {item}
          </span>
        </div>
      ))}
    </div>
  );
}