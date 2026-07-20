// app/report/chapter-2/page.tsx
import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { OrderedList } from "@/components/report/OrderedList";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function PublicChapter2Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="portfolio-chapter-2"
        label="Chapter 2: Research Methodology"
      />

      <ChapterOpener
        chapterNumber={2}
        title="Research Methodology and Data Integrity"
        overview="This chapter documents how the audit was conducted, what evidence standards were applied, what data was and was not accessed, and the confidence level of the findings that follow."
      />

      {/* ═══════════════════════════════════════════════════════════
          2.1  PURPOSE OF THE AUDIT
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>2.1 Purpose of the Audit</SectionHeading>

      <Paragraph>
        This audit evaluates the company&apos;s current digital ecosystem
        against the standards used by modern search engines to assess quality,
        authority, trust, and long-term sustainability.
      </Paragraph>
      <Paragraph>
        The objective is to identify structural strengths, weaknesses, risks, and
        opportunities within the existing digital model, providing leadership
        with an evidence-based foundation for future strategic decisions.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          2.2  OBSERVATION PERIOD AND DISCOVERY PROCESS
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        2.2 Observation Period and Discovery Process
      </SectionHeading>

      <Paragraph>
        The audit originated from recurring patterns observed during normal
        content production activities. Initial observations revealed content
        structures that appeared repeatedly across multiple websites, with only
        service locations changing between pages. These recurring patterns
        prompted a broader review of the systems, workflows, and infrastructure
        supporting the company&apos;s digital presence.
      </Paragraph>
      <Paragraph>
        To ensure findings were based on complete understanding rather than
        isolated observations, the review was conducted independently over a
        period exceeding two months. This extended observation period allowed
        recurring patterns to be examined across the documented network and
        validated before inclusion in this report.
      </Paragraph>
      <Paragraph>
        The approach throughout the review was deliberate rather than reactive.
        Findings were documented only after sufficient investigation established
        whether they reflected isolated incidents or broader structural
        characteristics of the digital ecosystem.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          2.3  RESEARCH METHODOLOGY
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>2.3 Research Methodology</SectionHeading>

      <Paragraph>
        The findings presented throughout this report were developed through
        multiple complementary research methods.
      </Paragraph>

      <MiniHeading>Technical and Infrastructure Review</MiniHeading>
      <BulletList
        items={[
          "Website architecture review across the documented network",
          "Infrastructure and hosting analysis",
          "Content management system review",
          "Google Search Console configuration assessment",
        ]}
      />

      <MiniHeading>Content and Visibility Review</MiniHeading>
      <BulletList
        items={[
          "Content sampling across multiple websites and service pages",
          "Publicly observable search visibility review",
          "Evaluation of content structure, duplication patterns, and scalability",
        ]}
      />

      <MiniHeading>Portfolio and Strategic Review</MiniHeading>
      <BulletList
        items={[
          "Domain portfolio assessment",
          "Analysis of website network architecture",
          "Review of broader operational and structural patterns",
        ]}
      />

      <MiniHeading>Policy and Standards Review</MiniHeading>
      <BulletList
        items={[
          "Review of official Google Search documentation and published guidance",
          "Comparative analysis against current search quality standards",
          "Evaluation against documented search engine policies and best practices",
        ]}
      />

      <Paragraph>
        Every observation was independently researched and checked against
        official documentation, publicly observable evidence, or verifiable
        real-world data before being included in this report. No finding is based
        solely on assumption, speculation, or personal opinion.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          2.4  DATA SECURITY AND INTEGRITY STANDARDS
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        2.4 Data Security and Integrity Standards
      </SectionHeading>

      <Paragraph>
        Strict data handling standards were maintained throughout the research
        process.
      </Paragraph>
      <BulletList
        items={[
          "All research and analysis were conducted exclusively on company-provided equipment.",
          "No company information, research notes, or internal materials were transferred to personal devices or external systems.",
          "No proprietary, financial, or customer data was accessed, stored, copied, or referenced during the research process.",
          "The analysis did not require access to credentials, passwords, financial records, or sensitive internal systems.",
          "Findings are based on observable digital architecture, publicly accessible information, and documented marketing patterns.",
          "No findings were influenced by commercial incentives, external organizations, or third-party recommendations.",
        ]}
      />
      <Paragraph>
        These safeguards were maintained throughout the entire observation and
        research period.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          2.5  SCOPE AND LIMITATIONS
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>2.5 Scope and Limitations</SectionHeading>

      <Paragraph>
        The findings contained in this report are based on:
      </Paragraph>
      <BulletList
        items={[
          "The documented website portfolio provided for review",
          "Independent research conducted during the audit period",
          "Observations gathered through the methodology outlined in Section 2.3",
        ]}
      />

      <Paragraph>
        The technical findings primarily concern the documented network of 87
        websites, as this is the portion of the digital portfolio that could be
        reviewed in full technical detail. Where broader domain ownership becomes
        relevant to a finding, that distinction is explicitly identified within
        the relevant chapter.
      </Paragraph>

      <Paragraph>
        Certain internal datasets were not available during the audit process,
        including:
      </Paragraph>
      <BulletList
        items={[
          "Comprehensive Search Console exports",
          "Internal analytics datasets",
          "Paid advertising performance data",
          "Proprietary reporting systems",
        ]}
      />

      <Paragraph>
        Where access to additional internal data could strengthen a finding or
        recommendation, this is noted in the appropriate section of the report.
      </Paragraph>

      <MiniHeading>Precision of Company-Specific Details</MiniHeading>
      <Paragraph>
        This audit was conducted through direct observation and independent
        research rather than through a formal data-sharing process with access to
        the company&apos;s internal records. As a result, company-specific
        details referenced throughout the report, including the precise count of
        service areas per site, the exact number of domains in the broader
        portfolio, and the specific team sizes within each department, are based
        on the best information available during the audit period and may contain
        minor variance from the actual figures.
      </Paragraph>
      <Paragraph>
        The diagnostic framework and the standards against which the findings are
        measured, Google&apos;s published documentation, platform originality
        policies, and established search evaluation principles, are independently
        verifiable and are not affected by any variance in company-specific
        details. The structural diagnosis, the identified patterns, and the
        proposed architecture remain sound regardless of whether any individual
        figure is adjusted by a small margin.
      </Paragraph>
      <Paragraph>
        Where a figure used in the analysis is an estimate or a projection
        rather than a confirmed count, this distinction is stated explicitly in
        the chapter where the figure appears.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          2.6  EVIDENCE VALIDATION PROCESS
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>2.6 Evidence Validation Process</SectionHeading>

      <Paragraph>
        Every observation included in this report followed the same validation
        framework before being documented.
      </Paragraph>

      <MiniHeading>Validation Framework</MiniHeading>
      <OrderedList
        items={[
          "An observation was identified during the review process described in Section 2.2.",
          "The observation was researched in depth.",
          "Relevant search engine documentation and supporting evidence were reviewed.",
          "The observation was evaluated against the company\u2019s specific digital model.",
          "The finding was documented only after validation was complete.",
        ]}
      />

      <Paragraph>
        Throughout the review, recurring issues appeared consistently across
        multiple sites, workflows, and systems. This consistency indicated that
        the findings represented structural patterns rather than isolated
        incidents.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          2.7  ANALYTICAL FOCUS
          (was "Purpose of the Report" — retitled to avoid duplicating
          2.1's heading and to describe what this section actually covers)
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>2.7 Analytical Focus</SectionHeading>

      <Paragraph>
        This report evaluates the broader architecture responsible for producing
        the outcomes observed across the network, rather than examining isolated
        issues within individual pages, websites, or workflows.
      </Paragraph>
      <Paragraph>
        The central premise of this audit is that recurring problems are rarely
        independent events. When the same patterns appear repeatedly across a
        network, they are often symptoms of a deeper structural issue.
      </Paragraph>
      <Paragraph>
        Accordingly, this report focuses on three primary objectives:
      </Paragraph>
      <BulletList
        items={[
          "Identifying the structural characteristics of the current digital model",
          "Evaluating the long-term sustainability of that model",
          "Presenting strategic alternatives where appropriate",
        ]}
      />
      {/* FLAG #1 fixed: removed self-defense clause "not the performance
          of individual employees, teams, or departments." Rewritten to
          state the scope directly without raising and denying a concern. */}
      <Paragraph>
        The analysis concerns the sustainability, efficiency, scalability, and
        long-term viability of the existing digital architecture.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          2.8  RESEARCH CONFIDENCE
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>2.8 Research Confidence</SectionHeading>

      <Paragraph>
        The findings presented throughout this report are based on three primary
        sources of evidence:
      </Paragraph>
      <BulletList
        items={[
          "Direct observation of the documented website network",
          "Publicly observable digital evidence",
          "Official search engine documentation and published guidance",
        ]}
      />

      <MiniHeading>Confidence Considerations</MiniHeading>
      <Paragraph>
        Search engines continue to evolve, and future updates may influence
        specific implementation details discussed in later chapters. However, the
        core findings presented throughout this report are not dependent on any
        single algorithm update or temporary ranking factor.
      </Paragraph>
      <Paragraph>
        The structural characteristics identified during this audit, including
        network architecture, content production methodology, infrastructure
        configuration, and portfolio management practices, are evaluated against
        broader principles of quality, trust, efficiency, sustainability, and
        operational scalability. These principles remain relevant regardless of
        individual update cycles.
      </Paragraph>

      {/* Section 2.9 "Transition to Technical Findings" removed entirely.
          It was pure meta-narration: describing the document's own framework
          and announcing what the next chapter covers. The chapter ends
          cleanly on the confidence statement above. */}
      {/* 2.9 */}
      
    </main>
  );
}