// components/report/InlineLink.tsx
//
// Real <a> tag, clickable by construction, same lionxe-blue underline style
// as CitationCard's source link. Chapter 3 has many inline citation links
// inside body paragraphs (the Markdown's [text](url) links), and future
// chapters will too, so this is a shared component rather than repeating
// the same inline style on every link.

export function InlineLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline"
      style={{ color: "var(--lionxe-blue)" }}
    >
      {children}
    </a>
  );
}
