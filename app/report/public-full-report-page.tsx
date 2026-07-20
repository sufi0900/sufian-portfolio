// app/portfolio/report/full-report/page.tsx
//
// PUBLIC UNIFIED REPORT — all 16 anonymized chapters in a single
// scrollable page. Users can read inline or download as PDF.

export const dynamic = "force-dynamic";
import "@/styles/report.css";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";
import Link from "next/link";


// 
import PublicChapter1Page from "@/app/report/public-chapter-1-page";
import PublicChapter2Page from "@/app/report/public-chapter-2-page";
import PublicChapter3Page from "@/app/report/public-chapter-3-page";
import PublicChapter4Page from "@/app/report/public-chapter-4-page";
import PublicChapter5Page from "@/app/report/public-chapter-5-page";
import PublicChapter6Page from "@/app/report/public-chapter-6-page";
import PublicChapter7Page from "@/app/report/public-chapter-7-page";
import PublicChapter8Page from "@/app/report/public-chapter-8-page";
import PublicChapter9Page from "@/app/report/public-chapter-9-page";
import PublicChapter10Page from "@/app/report/public-chapter-10-page";
import PublicChapter11Page from "@/app/report/public-chapter-11-page";
import PublicChapter12Page from "@/app/report/public-chapter-12-page";
import PublicChapter13Page from "@/app/report/public-chapter-13-page";
import PublicChapter14Page from "@/app/report/public-chapter-14-page";
import PublicChapter15Page from "@/app/report/public-chapter-15-page";
import PublicChapter16Page from "@/app/report/public-chapter-16-page";


export default function PublicFullReportPage() {
  return (
    <div>
      {/* Sticky top bar */}
      <div
        className="no-print sticky top-0 z-50 flex items-center justify-between px-6 py-3"
        style={{
          background: "var(--navy)",
          borderBottom: "2px solid var(--lionxe-blue)",
        }}
      >
        <Link
          href="/portfolio/report"
          className="text-xs font-bold text-white no-underline opacity-70 hover:opacity-100"
          style={{ textDecoration: "none" }}
        >
          &larr; Back to Report Index
        </Link>
        <p className="text-xs font-bold text-white opacity-50">
          Enterprise Digital Infrastructure Audit &bull; 16 Chapters
        </p>
        <DownloadPdfButton
          slug="portfolio-full-report"
          label="Download PDF"
        />
      </div>

      {/* Case study header */}
      <div className="print-break report-shell">
        <div className="py-8 text-center">
          <p
            className="text-xs font-bold uppercase tracking-[0.14em]"
            style={{ color: "var(--lionxe-blue)" }}
          >
            Portfolio Case Study
          </p>
          <h1
            className="mt-3 text-3xl font-bold tracking-tight"
            style={{ color: "var(--navy)" }}
          >
            Enterprise Digital Infrastructure Audit
          </h1>
          <p
            className="mx-auto mt-4 max-w-lg text-sm leading-6"
            style={{ color: "var(--text-grey)" }}
          >
            A 16-chapter independent assessment of a US-based multi-location
            cleaning and restoration company. Conducted by Sufian Mustafa
            using the LIONXE Digital Quality Standard.
          </p>
          <div className="mx-auto mt-6 grid max-w-md grid-cols-4 gap-2">
            {[
              { v: "87", l: "Sites" },
              { v: "226K", l: "URLs" },
              { v: "261", l: "Accounts" },
              { v: "0/4", l: "Gates Passed" },
            ].map((m, i) => (
              <div
                key={i}
                className="rounded-lg py-2"
                style={{ background: "var(--pale-blue)" }}
              >
                <p
                  className="text-base font-bold"
                  style={{ color: "var(--navy)" }}
                >
                  {m.v}
                </p>
                <p
                  className="text-[9px] uppercase tracking-wider"
                  style={{ color: "var(--text-light)" }}
                >
                  {m.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All 16 chapters */}
      <div id="chapter-1" className="print-break"><PublicChapter1Page /></div>
      <div id="chapter-2" className="print-break"><PublicChapter2Page /></div>
      <div id="chapter-3" className="print-break"><PublicChapter3Page /></div>
      <div id="chapter-4" className="print-break"><PublicChapter4Page /></div>
      <div id="chapter-5" className="print-break"><PublicChapter5Page /></div>
      <div id="chapter-6" className="print-break"><PublicChapter6Page /></div>
      <div id="chapter-7" className="print-break"><PublicChapter7Page /></div>
      <div id="chapter-8" className="print-break"><PublicChapter8Page /></div>
      <div id="chapter-9" className="print-break"><PublicChapter9Page /></div>
      <div id="chapter-10" className="print-break"><PublicChapter10Page /></div>
      <div id="chapter-11" className="print-break"><PublicChapter11Page /></div>
      <div id="chapter-12" className="print-break"><PublicChapter12Page /></div>
      <div id="chapter-13" className="print-break"><PublicChapter13Page /></div>
      <div id="chapter-14" className="print-break"><PublicChapter14Page /></div>
      <div id="chapter-15" className="print-break"><PublicChapter15Page /></div>
      <div id="chapter-16" className="print-break"><PublicChapter16Page /></div>

      {/* Footer attribution */}
      <div className="report-shell py-12 text-center">
        <div
          className="mb-3 mx-auto h-[2px] w-16"
          style={{ background: "var(--lionxe-blue)" }}
        />
        <p
          className="text-xs font-bold"
          style={{ color: "var(--navy)" }}
        >
          Sufian Mustafa
        </p>
        <p
          className="text-[11px]"
          style={{ color: "var(--text-grey)" }}
        >
          Digital Growth &amp; AI Search Systems Architect
        </p>
        <p
          className="mt-1 text-[10px]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Audited through the LIONXE Digital Quality Standard &bull;
          doitwithai.tools
        </p>
      </div>
    </div>
  );
}
