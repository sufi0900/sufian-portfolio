// app/report/chapter-4/page.tsx

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
import { EraTimeline } from "@/components/report/EraTimeline";
import { ContrastCards } from "@/components/report/ContrastCards";
import { ThreeAudiencesDiagram } from "@/components/report/ThreeAudiencesDiagram";
import { ProductionComparison } from "@/components/report/ProductionComparison";
import { KeywordIntentDiagram } from "@/components/report/KeywordIntentDiagram";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function PublicChapter4Page() {
  return (
    <main className="report-shell">
      {/* <DownloadPdfButton
        slug="portfolio-chapter-4"
        label="Chapter 4: Content Quality and the Shift to Intent-Based Search"
      /> */}

      <ChapterOpener
        chapterNumber={4}
        title="Content Quality and the Shift to Intent-Based Search"
        overview="This chapter examines the quality of the written content within the audited network: how it is researched, how long it is permitted to run, how its keywords are placed, and how it reads to the person who arrives on the page, each measured against the standard modern search now applies."
      />

      {/* ══════════════ 4.1 ══════════════ */}
      <SectionHeading>4.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapter 3 established the structure and scale of the audited network.
        This chapter turns from the structure to the content held within it: the
        individual articles and pages the construction pattern reproduces across
        the portfolio.
      </Paragraph>
      <Paragraph>
        The analysis draws on a representative blog post and its keyword set,
        both consistent with patterns observed across the portfolio. The
        methodology described in Chapter 2 applies throughout what follows.
      </Paragraph>

      {/* ══════════════ 4.2 ══════════════ */}
      <SectionHeading>4.2 The Evolution of Search Content Standards</SectionHeading>
      <Paragraph>
        Content is not judged today by the standard that applied when search
        began. Three broad periods mark the progression, and placing the
        company&apos;s workflow against them shows which standard it was built
        for.
      </Paragraph>

      <MiniHeading>The Early Period: Keyword Matching</MiniHeading>
      <Paragraph>
        In the first period, few websites competed for any given term. A page
        could rank by placing its target phrase often enough for the engine to
        connect the two. Depth and originality were not yet decisive.
      </Paragraph>

      <MiniHeading>The Traditional Period: Quality Standards Arrive</MiniHeading>
      <Paragraph>
        That changed as the web grew. Search engines layered quality assessment
        on top of keyword matching. Ranking became a test of usefulness and
        relevance, requiring real subject coverage rather than repetition.
      </Paragraph>

      <MiniHeading>The Current Period: Content at AI Scale</MiniHeading>
      <Paragraph>
        The present period is defined by the volume of content the rules must
        sort. Automated tools have lowered the cost of producing text to the
        point where a single writer can generate in a day what once took weeks.
      </Paragraph>
      <Paragraph>
        Against that backdrop, Google&apos;s guidance has moved toward rewarding
        depth, originality, and first-hand experience, and away from content
        produced primarily to rank.
      </Paragraph>

      <EraTimeline
        figureNumber="4.1"
        title="The Evolution of Search Content Standards"
      />

      {/* ── Three Audiences ── */}
      <MiniHeading>Three Audiences, One Piece of Content</MiniHeading>
      <Paragraph>
        The current period has introduced a reality earlier eras did not have: a
        single piece of content must satisfy three distinct audiences
        simultaneously. Failing with any one undermines performance with the
        other two.
      </Paragraph>

      <MiniHeading>Audience 1: The Search Engine Crawler</MiniHeading>
      <Paragraph>
        The crawler is the gatekeeper. It determines whether a page enters the
        index and where it appears. A crawler encountering thin, duplicated, or
        keyword-stuffed content classifies it as low-value and either excludes
        or suppresses it.
      </Paragraph>

      <MiniHeading>Audience 2: The AI Citation System</MiniHeading>
      <Paragraph>
        AI-generated search results are increasingly the first thing a user
        sees. The system generating that answer has no reason to cite a page
        that restates what it already knows from training data. It will only
        cite a page offering original data, first-hand experience, or specific
        expertise it cannot produce itself.
      </Paragraph>

      <MiniHeading>Audience 3: The Human Reader</MiniHeading>
      <Paragraph>
        The reader&apos;s behavior feeds directly back to the first two
        audiences. A reader who recognizes content as generic leaves quickly,
        increasing bounce rate and decreasing dwell time, both behavioral
        signals the crawler and AI system use to reinforce their own
        assessments. The reader&apos;s judgment is an input to the algorithm,
        not separate from it.
      </Paragraph>

      <CitationCard
        quote="Creating helpful, reliable, people-first content."
        sourceLabel="Google Search Central, Creating Helpful, Reliable, People-First Content"
        sourceUrl="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      />

      <Paragraph>
        Those are the standards. The question this chapter turns to next is how
        the company&apos;s own content sits against them.
      </Paragraph>

      <ThreeAudiencesDiagram
        figureNumber="4.2"
        title="Three Audiences, One Piece of Content"
      />

      {/* ══════════════ 4.3 ══════════════ */}
      <SectionHeading>4.3 The Company&apos;s Content Within the Current Era</SectionHeading>
      <Paragraph>
        The company&apos;s output sits squarely within the volume-driven pattern
        of the current period. Chapter 3 documented approximately 226,200 URLs
        across the 87 sites, produced through rapid, automated generation.
      </Paragraph>

      <MiniHeading>What Each Site Requires</MiniHeading>
      <BulletList
        items={[
          "The homepage, including its primary headings",
          "16 service pages",
          "Standard pages, including contact, FAQ, and policy pages",
          "Approximately 5 blog posts",
        ]}
      />

      <MiniHeading>The Production Pace</MiniHeading>
      <Paragraph>
        The documented workflow assigns this entire set, approximately 25 pages,
        to two content writers in a single working day. The full content for a
        site is produced and delivered within this timeframe.
      </Paragraph>

      <ProductionComparison
        figureNumber="4.3"
        title="Company Workflow vs. Industry Standard"
        rows={[
          { dimension: "Writers assigned", company: "2", industry: "Cross-functional team" },
          { dimension: "Pages produced per day", company: "~25 (combined)", industry: "~1 long-form post per writer" },
          { dimension: "Time per blog post", company: "~30\u201340 minutes", industry: "3 hours 25 minutes (average)" },
          { dimension: "Total production time", company: "~8 hours", industry: "~85 hours (equivalent)" },
          { dimension: "Original research", company: "None", industry: "Subject-matter data gathering" },
          { dimension: "Expert consultation", company: "None", industry: "SME review and input" },
          { dimension: "Editorial review", company: "None", industry: "Accuracy and depth review" },
          { dimension: "Visual asset creation", company: "None", industry: "Custom graphics, images, or video" },
          { dimension: "SEO and distribution", company: "None", industry: "On-page SEO, schema, backlink outreach" },
        ]}
      />

      <MiniHeading>The Scale of the Gap</MiniHeading>
      <Paragraph>
        At the industry-average pace, those 25 pages would require approximately
        85 hours of work, more than two full work weeks per writer. The
        company&apos;s workflow compresses this into eight hours, one-tenth the
        time the industry allocates to content of comparable length.
      </Paragraph>
      <Paragraph>
        The gap is not a measure of efficiency. It is a measure of what is
        removed: original research, subject-matter consultation, editorial
        review, and the time required to produce content that a reader cannot
        find on a competing page.
      </Paragraph>

      <MiniHeading>The Scaled Content Abuse Standard</MiniHeading>
      <Paragraph>
        Google identifies the use of automated tools to produce pages at scale
        without adding value for users as a violation of its scaled content abuse
        policy. The line it draws is one of value added, not of tool used.
      </Paragraph>
      <CitationCard
        quote="To generate many pages without adding value for users may violate Google's spam policy on scaled content abuse."
        sourceLabel="Google Search Central, Guidance on Generative AI Content"
        sourceUrl="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content"
      />

      {/* ══════════════ 4.4 ══════════════ */}
      <SectionHeading>4.4 Content Depth and the Word-Count Ceiling</SectionHeading>
      <Paragraph>
        The company&apos;s workflow applies a fixed ceiling of 1,200 words to
        every blog post, regardless of topic or the depth a given subject
        requires.
      </Paragraph>

      <MiniHeading>Google&apos;s Position on Length</MiniHeading>
      <Paragraph>
        Google does not publish a required or recommended word count and has
        removed minimum-length references from its documentation. Its Search
        Liaison has addressed the question directly.
      </Paragraph>
      <CitationCard
        quote="The best word count needed to succeed in Google Search is … not a thing! It doesn't exist."
        sourceLabel="Danny Sullivan, Google Search Liaison (public statement)"
        sourceUrl="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
      />

      <MiniHeading>The Effect of a Fixed Ceiling</MiniHeading>
      <Paragraph>
        The issue is not that short articles are weak. It is that a fixed upper
        limit removes the writer&apos;s ability to match length to subject.
        Where a topic warrants fuller treatment, the ceiling requires that
        material be cut to fit a number.
      </Paragraph>
      <Paragraph>
        Industry data indicates that posts exceeding 2,000 words earn 77 percent
        more backlinks. A page capped at 1,200 words competes against
        comprehensive resources from a structural disadvantage. Length governs
        how much a page can say. The next characteristic governs what it says.
      </Paragraph>

      {/* ══════════════ 4.5 ══════════════ */}
      <SectionHeading>4.5 Keyword Repetition and the Keyword Set</SectionHeading>
      <Paragraph>
        Google&apos;s{" "}
        <InlineLink href="https://developers.google.com/search/docs/essentials/spam-policies">
          spam policies
        </InlineLink>{" "}
        define keyword stuffing and name, among their examples, a pattern that
        corresponds directly to the construction identified in Chapter 3.
      </Paragraph>
      <CitationCard
        quote="Blocks of text that list cities and regions that a web page is trying to rank for."
        sourceLabel="Google Search Central, Spam Policies for Google Web Search"
        sourceUrl="https://developers.google.com/search/docs/essentials/spam-policies"
      />

      <MiniHeading>A Practice From a Previous Era</MiniHeading>
      <Paragraph>
        Keyword stuffing was a standard technique in the earliest period of
        search optimization, when engines relied primarily on keyword matching.
        By 2015, successive algorithm updates, including Google&apos;s Panda and
        Hummingbird updates, had rendered the practice not just ineffective but
        actively penalized.
      </Paragraph>
      <Paragraph>
        The company&apos;s content workflow, in 2026, still applies the same
        repetition-based approach that search systems were specifically designed
        to detect and suppress over a decade ago. The strategy that guides it
        has not been updated to reflect any of the changes documented in section
        4.2.
      </Paragraph>

      <MiniHeading>The Keyword Set</MiniHeading>
      <Paragraph>
        One representative row from the company&apos;s{" "}
        
          keyword dataset
        
        , a sample entry, shows the structure every row follows. All six keywords point
        to the same underlying intent.
      </Paragraph>

      <KeywordIntentDiagram
        figureNumber="4.4"
        title="Six Keywords, One Intent — the keyword dataset"
        keywords={[
          { keyword: "how to get stains out of mattress", isPrimary: true },
          { keyword: "how to get stains out of a mattress" },
          { keyword: "how to clean stains off mattress" },
          { keyword: "how to remove stains from mattress" },
          { keyword: "clean stain from mattress" },
          { keyword: "how to get rid of stain on mattress" },
        ]}
        sharedIntent="Remove stains from a mattress"
      />

      <MiniHeading>The Repetition Instruction</MiniHeading>
      <Paragraph>
        The writing instruction is specific: the primary keyword twelve times,
        each secondary two to three times. Inside the 1,200-word ceiling, that
        directs more than thirty instances of one search intent into one short
        article.
      </Paragraph>

      <MiniHeading>The Word Consumption</MiniHeading>
      <DataTable
        headers={["Component", "Words/Instance", "Instances", "Total"]}
        align={["left", "center", "center", "right"]}
        rows={[
          { cells: ["Primary keyword", "7", "12", "84"] },
          { cells: ["5 secondary keywords", "~32", "2.5 avg", "80"] },
          { cells: ["Total keyword repetition", "", "", "~164"], isViolation: true },
          { cells: ["Share of 1,200-word post", "", "", "13.7%"], isViolation: true },
        ]}
        flagText="13.7%"
      />
      <Paragraph>
        Roughly one in every seven words exists to repeat a search phrase. The
        remaining 1,036 words carry the full burden of introduction,
        explanation, guidance, and conclusion.
      </Paragraph>

      <MiniHeading>Grammatically Incorrect Queries</MiniHeading>
      <Paragraph>
        The keyword dataset does not filter for grammatical correctness. If a
        query has search volume, it is added and assigned the same
        twelve-repetition instruction regardless of whether the phrase is
        well-formed.
      </Paragraph>
      <Paragraph>
        Grammatically incorrect queries are inserted twelve times verbatim. The
        writer&apos;s instruction is not to express the intent in correct
        English, but to reproduce the query exactly as the search data shows it.
      </Paragraph>

      <MiniHeading>Question-Based Queries Inside Explanatory Prose</MiniHeading>
      <Paragraph>
        The majority of keywords are &ldquo;how to&rdquo; queries. Inserting a
        complete question into the middle of a declarative sentence produces
        syntactically incoherent text.
      </Paragraph>
      <Paragraph>
        &ldquo;In order to how to clean carpet at home, you need these
        materials&rdquo; does not function as a sentence. The keyword is treated
        as a string to be inserted rather than an intent to be addressed.
        Google&apos;s systems evaluate intent satisfaction, not string matching.
      </Paragraph>

      <MiniHeading>The Scale Across the Full Sheet</MiniHeading>
      <Paragraph>
        The{" "}
        
          keyword dataset
        {" "}
        currently contains 809 rows and continues to grow. The same construction
        is applied from the first row to the last. No row reflects an
        intent-based strategy or a departure from the repetition-based approach.
      </Paragraph>
      <Paragraph>
        This consistency across 809 rows indicates the issue is a property of
        the keyword methodology itself, not an isolated oversight.
      </Paragraph>

      {/* ══════════════ 4.6 ══════════════ */}
      <SectionHeading>4.6 Query Variation and Search Intent</SectionHeading>
      <Paragraph>
        Each of the five secondary keywords in a sample entry is a rephrasing of the
        same request. Targeting each as a separate term treats a difference in
        phrasing as a difference in intent.
      </Paragraph>
      <Paragraph>
        That assumption runs against how search now resolves queries. The
        engine&apos;s task is to map varied expressions to the shared intent
        beneath them. Google&apos;s guidance states this directly.
      </Paragraph>
      <CitationCard
        quote="You don't have to worry that you don't have enough 'long-tail' keywords or haven't captured every variation of how someone might seek content like yours."
        sourceLabel="Google Search Central, Guide to Generative AI Features in Google Search"
        sourceUrl="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide"
      />
      <Paragraph>
        A single piece of content addressing the underlying need would serve
        every phrasing at once. Repetition and redundant variation affect how
        every audience reads the page.
      </Paragraph>

      {/* ══════════════ 4.7 — Three-audience impact ══════════════ */}
      <SectionHeading>4.7 How Each Audience Reads the Result</SectionHeading>
      <Paragraph>
        The combined effect of the ceiling, the repetition instruction, and the
        question-insertion pattern is observable in the experience of every
        audience that encounters the finished page.
      </Paragraph>

      <ContrastCards
        figureNumber="4.5"
        title="The Same Topic, With and Without the Repetition Pattern"
        leftLabel="WITH KEYWORD REPETITION"
        leftBody="In order to how to clean carpet at home, you need to have these materials with you. First, make sure you know how to clean carpet at home by gathering baking soda, white vinegar, and a brush. Many people wonder how to clean carpet at home, and these are the essential steps. When learning how to clean carpet at home, always start by vacuuming thoroughly."
        rightLabel="WRITTEN FOR THE READER"
        rightBody="Start by vacuuming the carpet thoroughly to remove loose dirt. Mix one tablespoon of white vinegar with one tablespoon of baking soda in a spray bottle, then add warm water. Spray the stained area lightly, let it sit for five minutes, and blot with a clean cloth. For deeper stains, use a soft-bristle brush to work the solution into the fibers. Avoid over-wetting, which can cause mold beneath the carpet pad."
      />

      <MiniHeading>How the Crawler Reads It</MiniHeading>
      <Paragraph>
        Google&apos;s crawler is designed to recognize keyword stuffing. The left
        version, with the query inserted four times in four sentences, matches
        the pattern its spam policies describe. The crawler reads repetition as
        the signature of content produced to manipulate rankings.
      </Paragraph>

      <MiniHeading>How the AI Citation System Reads It</MiniHeading>
      <Paragraph>
        An AI system deciding whether to cite this page evaluates whether it
        contains information the system cannot produce itself. The left version
        has no original data, no specific quantities, no practical warnings.
        There is nothing to cite.
      </Paragraph>
      <Paragraph>
        The right version, with specific measurements, a named technique, and a
        practical caution about mold risk, contains information worth
        referencing.
      </Paragraph>

      <MiniHeading>How the Human Reader Reads It</MiniHeading>
      <Paragraph>
        A reader on the left encounters the query repeated where it does not
        belong, surrounded by generic phrases that exist to carry the next
        repetition. The reader leaves without finding guidance, increasing the
        bounce rate.
      </Paragraph>
      <Paragraph>
        A reader on the right finds specific, actionable information. The page
        answers the question, extending dwell time. That behavioral difference
        feeds back to the crawler and AI system. The reader&apos;s judgment is
        an input to the algorithm, not separate from it.
      </Paragraph>

      {/* ══════════════ 4.8 ══════════════ */}
      <SectionHeading>4.8 Scope and Confidence of These Findings</SectionHeading>
      <Paragraph>
        The production workflow, the two-writer daily output, the 1,200-word
        ceiling, the a sample entry keyword set, the repetition instruction, the
        presence of grammatically incorrect queries, and the question-insertion
        pattern are directly observable in the company&apos;s own content
        process and keyword dataset. The sheet currently contains 809 rows.
      </Paragraph>
      <Paragraph>
        The industry data is drawn from Orbit Media (12,000+ bloggers, 2025)
        and Backlinko/Ahrefs (1,000,000+ articles). Google&apos;s guidance is
        cited from its own documentation and public statements.
      </Paragraph>

      {/* ══════════════ 4.9 ══════════════ */}
      <SectionHeading>4.9 Summary of Findings</SectionHeading>
      <BulletList
        items={[
          "A single piece of content in 2026 must satisfy three audiences: the search engine crawler, the AI citation system, and the human reader. Generic content fails all three.",
          "Two writers produce ~25 pages per site in one day. The industry average for a single post is 3 hours 25 minutes. The company compresses ~85 hours of equivalent work into eight.",
          "A fixed 1,200-word ceiling is applied regardless of subject. Google publishes no recommended word count.",
          "Keyword repetition consumes ~164 words (13.7%) of every post. The practice dates to early-era SEO and has been actively penalized for over a decade.",
          "The keyword dataset does not filter for grammar. Queries with errors are inserted verbatim. Question-based queries are placed inside sentences where they cannot function.",
          "The sheet contains 809 rows, all following the same repetition pattern. No row reflects an intent-based strategy.",
          "The five secondary keywords per row are rephrasings of one intent. Targeting each separately is inconsistent with modern search.",
          "The combined effect is observable across all three audiences: the crawler reads stuffing as a spam signal, the AI system finds nothing to cite, and the human reader bounces, reinforcing the negative evaluation.",
        ]}
      />
      <Paragraph>
        The factors examined here concern the quality of the written content.
        The chapters that follow examine the use of automated tools in
        producing it, the uniform structure imposed on it, and the architecture
        into which it is organized.
      </Paragraph>
    </main>
  );
}
