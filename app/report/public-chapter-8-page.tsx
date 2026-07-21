// app/report/chapter-7/page.tsx

import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { DataTable } from "@/components/report/DataTable";
import { CitationCard } from "@/components/report/CitationCard";
import { InlineLink } from "@/components/report/InlineLink";
import { ContrastCards } from "@/components/report/ContrastCards";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function PublicChapter8Page() {
  return (
    <main className="report-shell">
      {/* <DownloadPdfButton
        slug="portfolio-chapter-8"
        label="Chapter 8: Site Architecture and Keyword Strategy"
      /> */}

      <ChapterOpener
        chapterNumber={8}
        title="Site Architecture and Keyword Strategy"
        overview="This chapter examines the architecture into which the company's content is organized: the keyword strategy that determines what gets written, the structural relationships between pages, the absence of topical hierarchy, and the authority framework that supports (or fails to support) the portfolio's visibility."
      />

      {/* 7.1 */}
      <SectionHeading>8.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        The previous three chapters examined the content produced within the
        audited network: its quality (Chapter 4), the tools used to create it
        (Chapter 5), and the template imposed on it (Chapter 6). This chapter
        steps back from the content itself and examines the architecture into
        which it is organized: the keyword strategy that determines what gets
        written, the structural relationships between pages, and the authority
        framework that supports the portfolio&apos;s visibility.
      </Paragraph>
      <Paragraph>
        Where those chapters asked how good the content is, this chapter asks
        whether the system it sits within is designed to let it perform.
      </Paragraph>
      <Paragraph>
        The methodology described in Chapter 2 applies throughout what follows.
      </Paragraph>

      {/* 7.2 */}
      <SectionHeading>8.2 The Flat Keyword Model</SectionHeading>
      <Paragraph>
        The company&apos;s keyword strategy is organized as a dataset
        containing 809 independent rows. Each row specifies a primary keyword and
        a set of secondary keywords, and each row is treated as an instruction to
        produce one piece of content targeting that phrase. The rows have no
        declared relationship to one another.
      </Paragraph>

      <MiniHeading>What the Model Assumes</MiniHeading>
      <Paragraph>
        The flat-list model treats each keyword as a standalone destination. It
        assumes that producing a page for each phrase and placing the keywords
        within the text, following the repetition instructions described in
        Chapter 4, is sufficient to compete for that query. The model measures
        progress by the number of rows completed.
      </Paragraph>

      <MiniHeading>What the Model Omits</MiniHeading>
      <Paragraph>
        Modern search does not evaluate pages as isolated units. Google&apos;s
        systems assess the depth, breadth, and structure of a site&apos;s
        coverage of its subject area, a concept the industry refers to as
        topical authority. A site that covers a subject comprehensively, with
        pages that relate to one another in a clear hierarchy, signals expertise
        more effectively than a site that publishes isolated pages for individual
        phrases without connecting them.
      </Paragraph>
      <Paragraph>
        The 809-row model contains no hierarchy. There are no pillar pages
        designated as comprehensive hubs for the company&apos;s core services.
        There are no cluster relationships linking supporting content to those
        hubs. There is no internal linking strategy connecting related pages into
        a structure that communicates depth to the systems evaluating it.
      </Paragraph>

      <DataTable
        headers={["Architectural Element", "Present in Documented Network"]}
        align={["left", "center"]}
        rows={[
          { cells: ["Flat keyword list (809 rows)", "Yes"] },
          { cells: ["Pillar pages for core services", "No"] },
          { cells: ["Cluster relationships between related content", "No"] },
          { cells: ["Internal linking strategy", "No"] },
          { cells: ["Topical hierarchy / content map", "No"] },
          { cells: ["External link acquisition plan", "No"] },
        ]}
      />

      <Paragraph>
        Google&apos;s published guidance on{" "}
        <InlineLink href="https://developers.google.com/search/docs/crawling-indexing/links-crawlable">
          link best practices
        </InlineLink>{" "}
        addresses this directly, stating that every page a site considers
        important should be linked from at least one other page on the site, and
        that those links should appear within context that helps both people and
        search engines understand the relationship.
      </Paragraph>

      <CitationCard
        quote="Every page you care about should have a link from at least one other page on your site. Think about what other resources on your site could help your readers understand a given page on your site, and link to those pages in context."
        sourceLabel="Google Search Central, SEO Link Best Practices"
        sourceUrl="https://developers.google.com/search/docs/crawling-indexing/links-crawlable"
      />

      {/* 7.3 */}
      <SectionHeading>8.3 Keyword Cannibalization</SectionHeading>
      <Paragraph>
        When multiple pages on the same site target the same search intent
        without a structural relationship between them, they compete against each
        other rather than against external competitors. This condition is
        referred to as keyword cannibalization.
      </Paragraph>

      <MiniHeading>How It Occurs in the Documented Network</MiniHeading>
      <Paragraph>
        The 809-row keyword dataset, combined with the location-swap construction
        from Chapter 3, produces a large number of pages that target closely
        related or identical intents. A blog post on a given topic competes with
        the service page covering the same subject, and both compete with the
        location-specific versions of each generated across 104 service areas.
      </Paragraph>
      <Paragraph>
        The result is that for any given query, the search engine must choose
        between multiple pages from the same site, none of which has been
        designated as the primary resource. Without a clear signal from the
        site&apos;s own architecture about which page should be preferred, the
        engine makes the determination itself, often splitting crawl attention
        and ranking signals across several candidates rather than concentrating
        them on one authoritative page.
      </Paragraph>

      <MiniHeading>The Structural Consequence</MiniHeading>
      <Paragraph>
        Cannibalization dilutes the ranking potential of the pages the company
        most needs to perform. Instead of one comprehensive, well-linked resource
        earning the full weight of the site&apos;s authority for a given topic,
        that weight is scattered across dozens of near-identical pages. The pages
        most likely to rank are weakened by competition from within the same
        portfolio.
      </Paragraph>
      <Paragraph>
        This is compounded by the scale identified in Chapter 3. With
        approximately 226,200 URLs across the network, the number of pages
        competing internally for the same set of intents is not a minor
        duplication issue. It is a structural characteristic of the architecture
        itself.
      </Paragraph>

      {/* 7.4 */}
      <SectionHeading>8.4 The Absence of Topical Hierarchy</SectionHeading>
      <Paragraph>
        The flat keyword model and the cannibalization it produces are symptoms
        of a deeper architectural gap: the network has no topical hierarchy.
      </Paragraph>

      <MiniHeading>What a Topical Hierarchy Provides</MiniHeading>
      <Paragraph>
        A structured content architecture organizes a site&apos;s pages into
        layers with defined relationships. At the top sit broad, comprehensive
        pages covering the site&apos;s primary subjects. Beneath them, supporting
        pages address specific subtopics, practical questions, and detailed
        variations. Internal links connect each supporting page upward to the
        relevant hub and laterally to related supporting pages.
      </Paragraph>
      <Paragraph>
        This structure communicates to search systems that the site covers its
        subject in depth and that its pages are organized around genuine
        expertise rather than assembled as a flat collection of keyword targets.
        The resulting pattern is what modern search refers to as topical
        authority: the signal that a site has earned the right to rank across a
        subject area, not just for an individual phrase.
      </Paragraph>

      <ContrastCards
        figureNumber="7.1"
        title="Flat Keyword List vs. Pillar-Cluster Architecture"
        leftLabel="CURRENT MODEL: FLAT LIST"
        leftBody="809 independent rows. Each row produces one page targeting one phrase. No declared relationships between pages. No designated hubs. No internal linking plan. Progress measured by rows completed."
        rightLabel="STRUCTURED MODEL: PILLAR-CLUSTER"
        rightBody="Core pillar pages cover primary service topics comprehensively. Supporting cluster pages address specific subtopics. Internal links connect clusters upward to pillars and laterally to related content. Authority concentrates on the pages that matter most."
      />

      <MiniHeading>What the Documented Network Has Instead</MiniHeading>
      <Paragraph>
        The audited network replaces this hierarchy with volume. The 809-row
        keyword dataset produces content at scale, but without structural
        relationships. Pages exist in parallel rather than in a hierarchy. Blog
        posts do not link upward to the service pages they support. Service pages
        do not link to the detailed content that would deepen their coverage. The
        location-specific variants generated by the swap mechanism create
        hundreds of URLs, but those URLs carry no internal linking strategy
        connecting them into a coherent resource.
      </Paragraph>
      <Paragraph>
        The architecture produces breadth, the number of URLs is substantial, but
        not depth. From the perspective of a system evaluating topical authority,
        the network looks like a large collection of isolated pages rather than
        an organized body of expertise.
      </Paragraph>

      {/* 7.5 */}
      <SectionHeading>
        8.5 Authority Signals and the Missing Link Strategy
      </SectionHeading>
      <Paragraph>
        The architectural gap extends beyond internal structure. The documented
        network has no dedicated strategy for acquiring external links, which are
        the primary mechanism through which search engines evaluate a
        site&apos;s authority and trust.
      </Paragraph>

      <MiniHeading>How External Links Function in Ranking</MiniHeading>
      <Paragraph>
        When an independent, reputable site links to a page, that link functions
        as an external signal of the page&apos;s value. Google&apos;s ranking
        systems have used link signals as a core component of quality evaluation
        since the introduction of PageRank. While the specifics of how links are
        weighted have evolved, Google continues to state that links are among the
        signals it uses to determine which pages are relevant and authoritative.
      </Paragraph>
      <Paragraph>
        The strength of a site&apos;s external link profile directly influences
        its ability to compete for high-value queries. A site with strong,
        relevant external links from authoritative sources is better positioned
        to rank than a structurally similar site without them.
      </Paragraph>

      <MiniHeading>The Observed State</MiniHeading>
      <Paragraph>
        The audited network has no workflow, plan, or system for acquiring
        external links. The operational resources described throughout this
        report, the team&apos;s daily capacity, the content pipeline, the
        production schedule, are directed entirely toward content production and
        publication. No portion of the workflow is allocated to building the
        external authority that would allow the published content to compete.
      </Paragraph>
      <Paragraph>
        This means the company is investing heavily in producing pages that enter
        the search ecosystem without the authority signal that would give them a
        realistic chance of ranking for competitive queries. The scale of
        publication identified in Chapter 3, and the content quality issues
        identified in Chapters 4 through 6, amplify this limitation: the network
        produces a high volume of structurally similar pages, none of which has
        the authority profile to compete independently.
      </Paragraph>

      {/* 7.6 */}
      <SectionHeading>8.6 Scope and Confidence of These Findings</SectionHeading>
      <Paragraph>
        The 809-row keyword dataset, the absence of pillar-cluster relationships,
        the lack of internal linking strategy, and the absence of an external
        link acquisition plan are directly observable in the company&apos;s
        documented workflow and site architecture.
      </Paragraph>
      <Paragraph>
        The concept of topical authority, the function of internal linking, and
        the role of external links in ranking are well established in
        Google&apos;s published documentation and in the broader body of search
        evaluation research. Google&apos;s guidance on link best practices is
        cited directly.
      </Paragraph>
      <Paragraph>
        The observation that the documented architecture produces keyword
        cannibalization follows from the structure itself: a flat list of keyword
        targets, combined with the location-swap mechanism, produces multiple
        pages per site targeting identical or closely related intents without
        structural differentiation. This is a structural characteristic, not a
        projection.
      </Paragraph>

      {/* 7.7 */}
      <SectionHeading>8.7 Summary of Findings</SectionHeading>
      <BulletList
        items={[
          "The keyword strategy is organized as a flat dataset of 809 independent rows with no hierarchy, no pillar-cluster relationships, and no internal linking plan connecting related pages.",
          "The flat-list model, combined with the location-swap construction from Chapter 3, produces keyword cannibalization: multiple pages on the same site compete for the same intent without a designated primary resource.",
          "The network has no topical hierarchy. Pages exist in parallel rather than in a structured depth model, producing breadth (volume of URLs) without the depth (organized expertise) that modern search evaluates as topical authority.",
          "The audited network has no strategy, workflow, or system for acquiring external links, the primary mechanism through which search engines evaluate authority and trust.",
          "The operational investment is directed entirely toward production and publication, with no allocation toward building the authority signals that would allow the published content to compete.",
        ]}
      />
      <Paragraph>
        The factors examined in Chapters 3 through 7 concern the web presence:
        its infrastructure, content, tools, structure, and architecture. The next
        chapter examines a parallel channel: the company&apos;s video and social
        media strategy, where the same patterns of volume, automation, and
        structural fragmentation are present across a different medium.
      </Paragraph>
    </main>
  );
}
