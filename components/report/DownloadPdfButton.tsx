// components/report/DownloadPdfButton.tsx

export function DownloadPdfButton({
  slug,
  label,
}: {
  slug: string;
  label: string;
}) {
  return (
    <a
      href={`/api/export-pdf?chapter=${slug}&label=${encodeURIComponent(label)}`}
      className="mb-8 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold text-white no-underline print:hidden"
      style={{ background: "var(--lionxe-blue)" }}
    >
      ⬇ Download PDF
    </a>
  );
}
