// app/report/chapter-10/page.tsx

import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { DataTable } from "@/components/report/DataTable";
import { ContrastCards } from "@/components/report/ContrastCards";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function PublicChapter11Page() {
  return (
    <main className="report-shell">
      {/* <DownloadPdfButton
        slug="portfolio-chapter-11"
        label="Chapter 11: The Strategic Landscape and the Turning Point"
      /> */}

      <ChapterOpener
        chapterNumber={11}
        title="The Strategic Landscape and the Turning Point"
        overview="This chapter synthesizes the diagnostic findings from Chapters 3 through 10 into a single picture, places that picture against the direction search is moving in 2026, and frames the strategic question the remaining chapters are designed to address."
      />

      {/* 10.1 */}
      <SectionHeading>11.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapters 3 through 10 examined the organization&apos;s digital ecosystem
        factor by factor: the infrastructure, the content, the tools, the
        template, the architecture, the social channels, and the operational
        capacity of the team. Each chapter presented its findings against the
        published standards that apply.
      </Paragraph>
      <Paragraph>
        This chapter serves a different function. It synthesizes the diagnostic
        findings into a single picture, places that picture against the direction
        search is moving in 2026 and beyond, and frames the strategic question
        that the remaining chapters of this report are designed to address.
      </Paragraph>
      <Paragraph>
        No new diagnostic evidence is introduced here. The chapter draws entirely
        on the findings already established and on the publicly available
        trajectory of the search landscape.
      </Paragraph>

      {/* 10.2 */}
      <SectionHeading>11.2 The Cumulative Diagnostic Picture</SectionHeading>
      <Paragraph>
        Taken individually, each factor identified in Chapters 3 through 10
        represents a structural limitation. Taken together, they form a pattern.
        The following table summarizes the core finding of each diagnostic
        chapter and the standard it was measured against.
      </Paragraph>

      <DataTable
        headers={["Ch", "Factor", "Core Finding"]}
        align={["center", "left", "left"]}
        rows={[
          {
            cells: [
              "3",
              "Infrastructure",
              "87 sites produce ~226,200 URLs through location-swap duplication. The pattern aligns with Google\u2019s doorway page definition.",
            ],
          },
          {
            cells: [
              "4",
              "Content Quality",
              "Fixed 1,200-word ceiling, 30+ keyword repetitions per post, and query-variation targeting inconsistent with intent-based search.",
            ],
          },
          {
            cells: [
              "5",
              "AI Usage",
              "Two-stage pipeline (AI draft \u2192 humanizer) optimizes for a detection score Google does not use, without adding original insight.",
            ],
          },
          {
            cells: [
              "6",
              "Template",
              "A single six-stage template applied across 45,240 blog pages matches the default output of automated language models.",
            ],
          },
          {
            cells: [
              "7",
              "Architecture",
              "A flat 809-row keyword list with no pillar-cluster hierarchy, no internal linking, and no backlink strategy.",
            ],
          },
          {
            cells: [
              "8",
              "Social Media",
              "261 accounts across 3 platforms managed by 4 people, with AI-generated content that violates platform originality policies.",
            ],
          },
          {
            cells: [
              "9",
              "Operations",
              "Teams responsible for content and SEO are structurally constrained. Adding headcount does not resolve architectural issues.",
            ],
          },
        ]}
      />

      <Paragraph>
        The pattern these findings describe is not a collection of isolated
        issues. It is a single operational model, built around volume,
        automation, and geographic duplication, applied consistently across every
        dimension of the organization&apos;s digital presence. The individual findings
        are symptoms. The model is the condition.
      </Paragraph>

      {/* 10.3 */}
      <SectionHeading>11.3 The Shifting Search Landscape</SectionHeading>
      <Paragraph>
        The standards against which the diagnostic chapters measured the
        company&apos;s current model are not static. They are moving, and the
        direction of that movement makes the gap between the current model and
        the standard it must meet wider, not narrower.
      </Paragraph>

      <MiniHeading>The Rise of AI-Generated Search Results</MiniHeading>
      <Paragraph>
        Google&apos;s AI Overviews, the AI-generated summaries that appear above
        traditional search results, now appear on approximately 48 percent of all
        search queries as of early 2026, a 58 percent increase year over year.
        When an AI Overview appears, organic click-through rates to the
        traditional results beneath it drop by 34 to 61 percent, depending on
        the query type and measurement methodology.
      </Paragraph>
      <Paragraph>
        For informational queries, the category most relevant to the
        company&apos;s blog content, the impact is at the upper end of that
        range. Surface-level answers to common questions, precisely the type of
        content the company&apos;s pipeline produces at scale, are the queries
        most likely to be answered directly within the AI Overview, leaving no
        reason for the searcher to click through to the page that provided the
        information.
      </Paragraph>

      <MiniHeading>The Shift Toward Citation Authority</MiniHeading>
      <Paragraph>
        The sites that benefit in this environment are not the ones that produce
        the most pages. They are the ones that earn citations within the
        AI-generated answers. Research from 2025 and 2026 indicates that sites
        cited within AI Overviews receive approximately 35 percent more organic
        clicks than uncited sites on the same results page. Domain authority, the
        accumulated trust and link profile of a site, is the strongest single
        predictor of whether a site earns those citations.
      </Paragraph>
      <Paragraph>
        This represents a structural shift in how visibility is earned. The
        currency of search is moving from ranking position toward citation
        authority, and citation authority is built through the qualities the
        diagnostic chapters found absent in the company&apos;s current model:
        original content, concentrated domain strength, genuine expertise
        signals, and a coherent topical architecture.
      </Paragraph>

      <MiniHeading>Zero-Click Search</MiniHeading>
      <Paragraph>
        The broader trend reinforces the same direction. Across all query types,
        approximately 60 percent of searches in 2025 and 2026 end without a
        click to any external site. The searcher finds what they need within the
        results page itself, whether through an AI Overview, a featured snippet,
        a knowledge panel, or another on-page element.
      </Paragraph>
      <Paragraph>
        For a network of 87 sites publishing thin, templated, location-swapped
        content without a consolidated authority profile, this trend means that
        the already-limited window for earning organic traffic is narrowing
        further with each expansion of AI-generated results.
      </Paragraph>

      {/* 10.4 */}
      <SectionHeading>
        11.4 The Position of the Current Model
      </SectionHeading>
      <Paragraph>
        The diagnostic findings and the landscape trajectory converge on a single
        observation: the company&apos;s current digital model was built for an
        environment that no longer exists, and the environment it now operates in
        rewards the opposite of what the model produces.
      </Paragraph>

      <ContrastCards
        figureNumber="10.1"
        title="What the Current Model Produces vs. What the Current Environment Rewards"
        leftLabel="WHAT THE CURRENT MODEL PRODUCES"
        leftBody="Volume of URLs. Authority fragmented across 87 domains and 261 social accounts. Automated content with no original-insight stage. Keywords treated as isolated targets in a flat list. Detection-score optimization."
        rightLabel="WHAT THE CURRENT ENVIRONMENT REWARDS"
        rightBody="Depth of coverage. Authority concentrated in a single, trusted domain. Content with genuine expertise and first-hand experience. Structured topical architecture with pillar-cluster hierarchy. Citation authority and E-E-A-T signals."
      />

      <Paragraph>
        Each of these misalignments was already identified as a limitation
        against today&apos;s standards. The trajectory of the search landscape
        means these limitations will become more consequential over time, not
        less.
      </Paragraph>

      {/* 10.5 */}
      <SectionHeading>11.5 The Question of Structure</SectionHeading>
      <Paragraph>
        Before this report turns from diagnosis to solution, one internal
        concern must be named directly, because it is the primary justification
        for the current model and the primary objection any alternative must
        answer: location coverage.
      </Paragraph>
      <Paragraph>
        The multi-site model exists because of a belief that serving many
        geographic areas requires many websites, one for each area. Any proposal
        to consolidate must therefore answer a specific question: what happens
        to the company&apos;s presence in each of its service locations if the
        separate sites are retired? The chapters that follow address this
        question directly, with published guidance from Google and observable
        practice from multi-location enterprises.
      </Paragraph>

      <SectionHeading>11.6 The Turning Point</SectionHeading>
      <Paragraph>
        The findings of Chapters 3 through 10 do not point in many directions.
        They converge on a single structural conclusion, and the remaining
        chapters of this report present it: the diagnosis, the standard used to
        reach it, the architecture that resolves it, and the choice it places
        before leadership.
      </Paragraph>
      <Paragraph>
        Before the solution is presented, the next chapter establishes the
        quality standard through which this entire audit was conducted, the
        same standard the proposed solution will be required to pass.
      </Paragraph>

      {/* 10.6 */}
      <SectionHeading>11.7 Scope and Confidence of These Findings</SectionHeading>
      <Paragraph>
        The cumulative diagnostic summary draws on the findings established in
        Chapters 3 through 10. No new evidence is introduced.
      </Paragraph>
      <Paragraph>
        The search landscape data, AI Overview prevalence, click-through rate
        impacts, zero-click trends, and citation authority research, is drawn
        from published industry research conducted by Seer Interactive, Ahrefs,
        Pew Research Center, and other organizations, using datasets spanning
        millions of queries and impressions through early 2026. These are
        third-party research findings, not Google&apos;s own documentation, and
        are presented as the best available industry evidence rather than as
        confirmed internal Google metrics.
      </Paragraph>
      <Paragraph>
        The observation that the current model&apos;s characteristics are
        structurally misaligned with the direction of the search landscape
        follows from comparing the diagnostic findings to the published
        trajectory. It is a structural assessment, not a prediction about
        specific future algorithm changes.
      </Paragraph>
    </main>
  );
}
