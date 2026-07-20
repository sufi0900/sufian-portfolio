// app/report/chapter-7/page.tsx
//
// NEW Chapter 7: AI Symbols, Prohibited Phrases, and the Fear-Driven
// Workflow. This chapter was missing from the first draft sequence and
// sits between Chapter 6 (Template Uniformity) and the chapter on Site
// Architecture (now Chapter 8).
//
// NOTE ON RENUMBERING: This insertion shifts all subsequent chapters by
// +1. The old Chapter 7 (Site Architecture) becomes Chapter 8, old
// Chapter 8 (Social Media) becomes Chapter 9, and so on through to the
// conclusion. File renames and cross-reference updates should be applied
// as a separate pass after this content is confirmed.

import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { CitationCard } from "@/components/report/CitationCard";
import { InlineLink } from "@/components/report/InlineLink";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function PublicChapter7Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="portfolio-chapter-7"
        label="Chapter 7: AI Symbols, Prohibited Phrases, and the Fear-Driven Workflow"
      />

      <ChapterOpener
        chapterNumber={7}
        title="AI Symbols, Prohibited Phrases, and the Fear-Driven Workflow"
        overview="This chapter examines the company's decision to prohibit specific elements of standard English grammar from its content, not because they harm quality, but because automated language models use them frequently, and what that restriction reveals about the relationship between the company and the tools it uses."
      />

      {/* 7.1 */}
      <SectionHeading>7.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapter 5 examined the assumption that third-party AI detection scores
        influence ranking, and demonstrated through observable evidence that they
        do not. Chapter 6 documented the rigid template imposed on every blog
        post. This chapter examines a related consequence of the same fear: the
        company&apos;s decision to prohibit specific elements of standard
        English grammar from its content.
      </Paragraph>
      <Paragraph>
        The prohibition extends to punctuation marks, structural connectors, and
        commonly used phrases. The restriction is applied as a blanket editorial
        rule across all content production, regardless of context or topic.
      </Paragraph>

      {/* 7.2 */}
      <SectionHeading>7.2 The Prohibited Elements</SectionHeading>
      <Paragraph>
        The company&apos;s content workflow includes explicit editorial
        restrictions banning specific grammatical elements from published
        content. These restrictions are not based on style preferences or
        audience research. They exist because the prohibited elements are
        associated with AI-generated output.
      </Paragraph>

      <MiniHeading>Punctuation</MiniHeading>
      <Paragraph>
        The most prominent restriction targets the em dash, a standard English
        punctuation mark used to insert a parenthetical remark, add emphasis, or
        introduce a clarification within a sentence. The company treats its
        presence in published content as grounds for revision, because automated
        language models generate em dashes frequently.
      </Paragraph>
      <Paragraph>
        The same restriction extends to semicolons, which connect closely
        related independent clauses, and to colons used for introducing lists or
        explanations. All three are standard components of written English that
        predate the existence of AI by centuries.
      </Paragraph>

      <MiniHeading>Phrases and Structural Patterns</MiniHeading>
      <Paragraph>
        Beyond punctuation, the workflow restricts certain transitional phrases,
        structural connectors, and vocabulary choices perceived as AI
        indicators. The effect is a narrowing of the writer&apos;s available
        toolkit: the template is fixed (Chapter 6), the keyword placement is
        dictated (Chapter 4), and the range of permissible English grammar is
        artificially reduced.
      </Paragraph>

      {/* 7.3 */}
      <SectionHeading>7.3 The Origin of the Restriction</SectionHeading>
      <Paragraph>
        The restriction does not originate from a style guide, a readability
        standard, or reader feedback. It originates from the same fear
        documented in Chapter 5, Section 5.7: the belief that AI detection tools
        will flag the content, and that being flagged will result in a search
        penalty.
      </Paragraph>

      <MiniHeading>The Logic Behind the Ban</MiniHeading>
      <Paragraph>
        The reasoning is sequential: automated language models use em dashes
        frequently, third-party detection tools look for patterns associated
        with AI output, therefore removing em dashes reduces the chance of being
        flagged. The same reasoning applies to semicolons, colons, and certain
        transitional phrases.
      </Paragraph>

      <MiniHeading>Where the Logic Fails</MiniHeading>
      <Paragraph>
        The reasoning fails at every step. As documented in Chapter 5,
        third-party detection scores do not influence Google&apos;s ranking
        decisions. The tools that produce those scores are unreliable, with the
        creator of the most widely used language model abandoning its own
        detector after achieving only 26 percent accuracy.
      </Paragraph>
      <Paragraph>
        The elements being banned are features of standard English grammar, not
        signatures of artificial intelligence. Em dashes, semicolons, and colons
        were established in written English centuries before automated language
        models existed.
      </Paragraph>

      {/* 7.4 */}
      <SectionHeading>
        7.4 What Industry Leaders Actually Do
      </SectionHeading>
      <Paragraph>
        The evidence from the search results themselves, the same evidence
        examined in Chapter 5, directly contradicts the company&apos;s editorial
        restriction.
      </Paragraph>

      <MiniHeading>The Search Engine Land Example</MiniHeading>
      <Paragraph>
        The{" "}
        <InlineLink href="https://searchengineland.com/guide/what-is-ai-seo">
          Search Engine Land article
        </InlineLink>{" "}
        ranking at the top of Google for the high-difficulty query &ldquo;what is
        AI SEO,&rdquo; written by Veruska Anconitano, uses em dashes
        approximately 24 times within a single article. The article ranks at the
        top regardless of its use of a punctuation mark the company has banned.
      </Paragraph>
      <Paragraph>
        The editorial team at Search Engine Land does not restrict its
        writers&apos; use of standard punctuation because their content is built
        on original insights and genuine expertise. Their authority comes from
        what the content says, not from which punctuation marks it avoids.
      </Paragraph>

      <MiniHeading>The Broader Pattern</MiniHeading>
      <Paragraph>
        The same pattern holds across authoritative publications in every
        industry. High-authority sites use the full range of English grammar
        naturally, because they are not afraid of detection. They are not afraid
        of detection because their content is built on original value, not on
        automated generation that needs to be disguised.
      </Paragraph>
      <Paragraph>
        As one widely discussed analysis of AI punctuation patterns{" "}
        <InlineLink href="https://www.seangoedecke.com/em-dashes/">
          observed
        </InlineLink>
        , the presence of em dashes in text is a stylistic choice, not an
        authorship signal. The mark exists because it serves a communicative
        function in English, not because a machine invented it.
      </Paragraph>

      {/* 7.5 */}
      <SectionHeading>7.5 What the Restriction Reveals</SectionHeading>
      <Paragraph>
        The prohibition of standard grammar tells a specific story about the
        relationship between the company and the tools it uses.
      </Paragraph>

      <MiniHeading>AI Dominating the Workflow</MiniHeading>
      <Paragraph>
        The restriction means that the company&apos;s editorial rules are being
        set by the characteristics of an automated tool rather than by the needs
        of the reader or the standards of the language. The tool&apos;s output
        patterns have become the basis for banning elements of English grammar.
        In effect, AI is dictating what the writers are allowed to write.
      </Paragraph>

      <MiniHeading>The Reverse of the Intended Relationship</MiniHeading>
      <Paragraph>
        The stated goal of the content workflow is to produce content that
        appears human-written. The actual effect is the opposite: it produces
        content that is artificially constrained, unnaturally stripped of
        standard punctuation, and shaped by what a detection tool is less likely
        to flag rather than by what communicates best.
      </Paragraph>
      <Paragraph>
        The content does not read as naturally human-written. It reads as
        artificially limited. A writer who is permitted to use the full range of
        English grammar writes more naturally than a writer who must avoid
        specific marks because a machine also uses them.
      </Paragraph>

      {/* 7.6 */}
      <SectionHeading>7.6 The Connection to Quality</SectionHeading>
      <Paragraph>
        The restriction does not exist in isolation. It compounds the quality
        constraints documented in the previous chapters.
      </Paragraph>

      <MiniHeading>The Cumulative Constraint</MiniHeading>
      <Paragraph>
        A writer operating within the documented workflow produces content under
        the following simultaneous restrictions:
      </Paragraph>
      <BulletList
        items={[
          "A fixed 1,200-word ceiling (Chapter 4)",
          "A keyword repetition instruction consuming 13.7 percent of available words (Chapter 4)",
          "A rigid six-stage template with no permitted deviation (Chapter 6)",
          "An automated draft-to-humanizer pipeline with no original-research stage (Chapter 5)",
          "A ban on standard punctuation marks and transitional phrases (this chapter)",
        ]}
      />
      <Paragraph>
        The space remaining for genuine, naturally written, reader-focused
        content, after all of these constraints are applied, is minimal. The
        writer is not asked to write. The writer is asked to assemble text
        within a set of restrictions that leave almost no room for the qualities
        Google&apos;s systems are designed to reward.
      </Paragraph>

      <MiniHeading>What Google Actually Evaluates</MiniHeading>
      <Paragraph>
        Google&apos;s ranking systems evaluate whether content demonstrates
        experience, expertise, authoritativeness, and trustworthiness. None of
        these qualities are affected by whether a page contains em dashes or
        semicolons.
      </Paragraph>
      <Paragraph>
        They are affected by whether the content offers genuine insight, original
        information, and value a reader cannot find elsewhere, qualities the
        cumulative restrictions documented across Chapters 4 through 7
        systematically prevent.
      </Paragraph>

      {/* 7.7 */}
      <SectionHeading>7.7 Scope and Confidence of These Findings</SectionHeading>
      <Paragraph>
        The editorial restrictions on punctuation marks and phrases are directly
        observable in the company&apos;s documented content workflow and
        editorial guidelines. The use of em dashes in the Search Engine Land
        article is directly verifiable by reviewing the published article.
      </Paragraph>
      <Paragraph>
        The connection between the restriction and the fear of AI detection
        follows from the stated reasoning within the workflow. The observation
        that the restriction compounds the quality constraints documented in
        earlier chapters follows from the cumulative nature of the restrictions.
      </Paragraph>

      {/* 7.8 */}
      <SectionHeading>7.8 Summary of Findings</SectionHeading>
      <BulletList
        items={[
          "The content workflow prohibits em dashes, semicolons, and certain transitional phrases from published content, not based on style or readability standards, but because automated language models use them frequently.",
          "The restriction originates from the same fear documented in Chapter 5: the belief that AI detection scores influence ranking. That belief is inconsistent with the evidence.",
          "The top-ranking article for \u201Cwhat is AI SEO\u201D on Search Engine Land uses em dashes approximately 24 times. Industry leaders do not restrict standard grammar because their content is built on original insight.",
          "The restriction reveals that the company\u2019s editorial rules are being set by the characteristics of an automated tool rather than by the needs of the reader. AI is dictating what the writers are allowed to write.",
          "Combined with the word-count ceiling, keyword repetition, template rigidity, and automated pipeline, the grammar restriction further narrows the space available for naturally written, reader-focused content.",
        ]}
      />
      <Paragraph>
        The factors examined in Chapters 4 through 7 concern the content
        production system: its quality, tools, structure, and editorial
        constraints. The next chapter steps back from content to examine the
        architecture into which it is organized: the keyword strategy, the
        absence of topical hierarchy, and the cannibalization that results from
        the current structure.
      </Paragraph>
    </main>
  );
}
