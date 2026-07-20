// components/report/ChapterOpener.tsx

export function ChapterOpener({
  chapterNumber,
  title,
  overview,
}: {
  chapterNumber: number;
  title: string;
  overview: React.ReactNode;
}) {
  return (
    <div className="mb-10">
      <span
        className="inline-block rounded px-3 py-1.5 text-xs font-bold tracking-wide text-white"
        style={{ background: "var(--lionxe-blue)" }}
      >
        CHAPTER {chapterNumber}
      </span>

      <h1
        className="mt-6 text-3xl font-bold leading-tight"
        style={{ color: "var(--text-black)" }}
      >
        {title}
      </h1>

      <div
        className="mt-3 h-[2px] w-16"
        style={{ background: "var(--text-black)" }}
      />

      <div
        className="avoid-break mt-6 rounded-sm border-l-[3px] p-4 text-sm leading-relaxed"
        style={{
          background: "var(--pale-blue)",
          borderColor: "var(--lionxe-blue)",
          color: "var(--text-grey)",
        }}
      >
        <span className="font-bold" style={{ color: "var(--text-black)" }}>
          Chapter Overview:
        </span>{" "}
        {overview}
      </div>
    </div>
  );
}
