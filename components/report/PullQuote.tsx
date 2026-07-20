// components/report/PullQuote.tsx

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="avoid-break relative my-6 rounded-md p-6 pl-12 text-[15px] italic leading-7 text-white"
      style={{ background: "var(--navy)" }}
    >
      <span
        className="absolute left-4 top-2 text-4xl font-bold not-italic"
        style={{ color: "var(--lionxe-blue)" }}
      >
        &ldquo;
      </span>
      {children}
    </blockquote>
  );
}
