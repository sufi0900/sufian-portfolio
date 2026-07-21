// app/report/chapter-14/page.tsx

import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { DataTable } from "@/components/report/DataTable";
import { PhaseRoadmapTimeline } from "@/app/report/PhaseRoadmapTimeline";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function PublicChapter15Page() {
  return (
    <main className="report-shell">
      {/* <DownloadPdfButton
        slug="portfolio-chapter-15"
        label="Chapter 15: Implementation Roadmap"
      /> */}

      <ChapterOpener
        chapterNumber={15}
        title="Implementation Roadmap"
        overview="This chapter presents the phased transition plan from the current model to the proposed architecture: the sequence of phases, their dependencies, the team-level changes each phase requires, and the principles that guide the order of operations."
      />

      {/* 15.1 */}
      <SectionHeading>15.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        The preceding chapters established the diagnosis (Chapters 3 through 10),
        the landscape context (Chapter 11), the quality standard (Chapter 12), the proposed architecture (Chapter 13), and the comparative analysis that recommends the transition (Chapter 14). This chapter addresses the
        practical question that follows: how does the company move from the
        current model to the proposed architecture?
      </Paragraph>
      <Paragraph>
        The roadmap presented here is a high-level sequencing plan. It identifies
        the phases, their order, their dependencies, and the team-level changes
        each phase requires. It is not a day-by-day project plan, because
        decisions about timeline, budget, and resource allocation belong to
        leadership and depend on factors outside the scope of this report.
      </Paragraph>

      {/* 15.2 */}
      <SectionHeading>15.2 Implementation Principles</SectionHeading>
      <Paragraph>
        Three principles guide the sequencing.
      </Paragraph>

      <MiniHeading>Build the Foundation Before the Content</MiniHeading>
      <Paragraph>
        The single-domain architecture must be in place before new content is
        produced for it. Publishing high-quality content into the current
        fragmented structure delivers the same limited results documented
        throughout this report. The architectural transition comes first.
      </Paragraph>

      <MiniHeading>Parallel Transition, Not Hard Cutover</MiniHeading>
      <Paragraph>
        The current network does not need to be shut down on a single date. The
        transition can operate in parallel: the new domain is built and populated
        while the existing network continues to operate, and the existing
        sites are then retired in stages as the new property proves itself.
        The retirement is a dismantling, not a migration: no site in the
        network is redirected into the new domain, so none of the
        network’s history passes into it. This reduces operational risk
        while keeping the new property fully insulated from the old one.
      </Paragraph>

      <MiniHeading>Consolidate Then Optimize</MiniHeading>
      <Paragraph>
        Each phase consolidates a layer of the current model before optimizing
        it. Consolidation removes the structural limitations. Optimization builds
        the quality. Attempting to optimize without consolidating first repeats
        the pattern identified in Chapter 9: investing effort into a system whose
        structure prevents the effort from producing results.
      </Paragraph>

      {/* Phase overview visual */}
      <PhaseRoadmapTimeline
        figureNumber="15.1"
        title="The Five-Phase Transition Roadmap"
        phases={[
          {
            name: "Clearing the Ground",
            objective:
              "Strategically retire the instruments of the current model while operations continue.",
            outputs: ["Asset inventory", "Wind-down sequence", "Carry-forward data"],
          },
          {
            name: "Foundation",
            objective:
              "Establish the single authoritative property the entire model will build on.",
            outputs: ["Primary domain", "Infrastructure", "URL architecture", "Brand identity"],
          },
          {
            name: "Content Architecture",
            objective:
              "Design the topical hierarchy that replaces the flat keyword list.",
            outputs: ["Pillar-cluster map", "Internal linking plan", "First pillar pages"],
          },
          {
            name: "Content Production",
            objective:
              "Activate the insight-led workflow and populate the architecture.",
            outputs: ["Five-stage workflow live", "Cluster content", "Location pages"],
          },
          {
            name: "Channel Consolidation",
            objective:
              "Unify the social and video presence under the single brand.",
            outputs: ["One account per platform", "Authentic content model"],
          },
          {
            name: "Authority Building",
            objective:
              "Compound the domain\u2019s strength through earned signals.",
            outputs: ["Backlink strategy", "Link-worthy assets", "Performance optimization"],
          },
        ]}
      />

      {/* 15.3 */}
      <SectionHeading>15.3 Phase 1: Clearing the Ground</SectionHeading>
      <Paragraph>
        No foundation is poured onto occupied land. Before the new architecture
        is built, the instruments of the current model are strategically
        retired: the keyword dataset and its repetition instructions, the fixed
        content templates, the humanizer pipeline, the per-site production
        quotas, and the quantity-based planning documents that direct the daily
        work of every department.
      </Paragraph>
      <Paragraph>
        This is a planning phase, not a demolition. Retiring the current model
        in a single step would halt every department at once and damage the
        operational continuity the transition depends on. The wind-down is
        therefore sequenced: existing workflows continue while the replacement
        strategy for each department is prepared, and each instrument of the
        old model is retired only when its replacement is ready to direct the
        work.
      </Paragraph>
      <MiniHeading>What This Phase Produces</MiniHeading>
      <Paragraph>
        The output is a controlled inventory and wind-down plan: which assets
        are retired, which are archived for reference, which data, such as
        service definitions and location facts, carries forward into the new
        architecture, and the order in which each department&apos;s current
        instruments are replaced. The phase ends with a cleared strategic
        foundation on which Phase 2 builds.
      </Paragraph>

      <SectionHeading>
        15.4 Phase 2: Domain and Infrastructure Foundation
      </SectionHeading>
      <Paragraph>
        The first phase establishes the technical foundation the rest of the
        transition builds on.
      </Paragraph>

      <MiniHeading>Core Tasks</MiniHeading>
      <BulletList
        items={[
          "Select and secure the primary domain for the consolidated site",
          "Design and implement the URL architecture: structured subdirectories for locations, services, and content types",
          "Establish the technical infrastructure: hosting, CMS, analytics, and webmaster tools for the new domain",
          "Design the brand identity for the unified digital presence",
          "Plan the staged decommissioning of the existing network: sites are dismantled entirely, with no redirects into the new domain",
        ]}
      />

      <MiniHeading>Dependencies and Team</MiniHeading>
      <Paragraph>
        This phase has no dependencies on other phases. It is the starting
        point. Design and development teams lead, and their skills, assessed in
        Chapter 9 as consistently developing, are directly applicable without
        role changes.
      </Paragraph>

      {/* 15.4 */}
      <SectionHeading>15.5 Phase 3: Content Architecture</SectionHeading>
      <Paragraph>
        With the domain and infrastructure in place, the second phase builds the
        content architecture that will organize everything published on the new
        site.
      </Paragraph>

      <MiniHeading>Core Tasks</MiniHeading>
      <BulletList
        items={[
          "Identify and map the company\u2019s core service topics to pillar pages",
          "Design the cluster structure for each pillar: subtopics, supporting content, practical guides, regional variations",
          "Create the internal linking plan connecting clusters to pillars and to each other",
          "Develop the first set of pillar pages, beginning with the highest-priority services",
          "Establish content standards and style guidelines for the new workflow",
        ]}
      />

      <MiniHeading>Dependencies and Team</MiniHeading>
      <Paragraph>
        Depends on Phase 1. SEO and content teams lead, supported by design.
        This phase begins the shift described in Chapter 9: the SEO team moves
        from managing a flat keyword list to building a structured topical
        architecture, and the content team moves from template-constrained
        production to subject-driven planning.
      </Paragraph>

      {/* 15.5 */}
      <SectionHeading>
        15.6 Phase 4: Content Production Under the New Model
      </SectionHeading>
      <Paragraph>
        The third phase activates the five-stage content workflow described in
        Chapter 13 and begins populating the architecture built in Phase 2.
      </Paragraph>

      <MiniHeading>Core Tasks</MiniHeading>
      <BulletList
        items={[
          "Implement the five-stage workflow: original research, structure, AI-assisted drafting, editorial review, publication",
          "Produce cluster content for each active pillar, prioritized by business value and competitive opportunity",
          "Incorporate original research, technician input, and on-site documentation into the content process",
          "Remove the 1,200-word ceiling, the keyword repetition instructions, and the six-stage template from the production workflow",
          "Eliminate the humanizer stage from the content pipeline",
        ]}
      />

      <MiniHeading>Dependencies and Team</MiniHeading>
      <Paragraph>
        Depends on Phase 2. Content writing team leads, with subject-matter
        input from operational staff. This phase represents the most significant
        role evolution: writers move from processing automated drafts to
        conducting research, structuring arguments, and producing original
        content with AI assistance.
      </Paragraph>

      {/* 15.6 */}
      <SectionHeading>15.7 Phase 5: Channel Consolidation</SectionHeading>
      <Paragraph>
        The fourth phase consolidates the fragmented social media and video
        presence under the unified brand.
      </Paragraph>

      <MiniHeading>Core Tasks</MiniHeading>
      <BulletList
        items={[
          "Establish one Facebook page, one Instagram account, and one YouTube channel under the primary brand",
          "Develop a content calendar built around authentic material: job-site footage, technician expertise, before-and-after documentation",
          "Migrate audience and engagement from the highest-performing existing accounts to the consolidated accounts",
          "Retire low-activity accounts from the 261-account network progressively",
          "Align social content with the pillar-cluster architecture so that social posts drive traffic to the corresponding web content",
        ]}
      />

      <MiniHeading>Dependencies and Team</MiniHeading>
      <Paragraph>
        Can begin in parallel with Phase 3. Social media and video teams lead.
        The 65:1 account-to-coordinator ratio is replaced by a focused,
        manageable workload. The video team shifts from AI-generated stock
        content to original footage production.
      </Paragraph>

      {/* 15.7 */}
      <SectionHeading>15.8 Phase 6: Authority Building</SectionHeading>
      <Paragraph>
        The fifth phase addresses the missing authority layer documented in
        Chapter 8: external link acquisition and ongoing domain authority
        development.
      </Paragraph>

      <MiniHeading>Core Tasks</MiniHeading>
      <BulletList
        items={[
          "Develop and execute a backlink acquisition strategy targeting authoritative, relevant external sources",
          "Build relationships with industry publications, local business organizations, and community resources",
          "Create link-worthy content assets: original research, data studies, comprehensive guides that earn links organically",
          "Monitor domain authority development and adjust strategy based on performance data",
          "Optimize existing content based on search performance, user engagement, and competitive analysis",
        ]}
      />

      <MiniHeading>Dependencies and Team</MiniHeading>
      <Paragraph>
        Depends on Phases 1 through 3. SEO team leads, supported by content.
        This is the strategic work that Chapter 9 identified as absent from the
        current SEO workflow: competitive analysis, relationship building, and
        authority development.
      </Paragraph>

      {/* 15.8 */}
      <SectionHeading>15.9 Team Role Evolution</SectionHeading>
      <Paragraph>
        The transition does not require replacing the existing team. It requires
        redirecting the same people into work that develops their capabilities
        and produces business outcomes.
      </Paragraph>

      <DataTable
        headers={["Department", "Current Role", "Evolved Role", "Begins"]}
        align={["left", "left", "left", "center"]}
        rows={[
          {
            cells: [
              "Design",
              "Visual templates for 87-site rollout",
              "Unified brand identity and UX for single domain",
              "Phase 1",
            ],
          },
          {
            cells: [
              "Development",
              "Launching and maintaining 87 separate sites",
              "Building and optimizing one authoritative platform",
              "Phase 1",
            ],
          },
          {
            cells: [
              "SEO",
              "Managing 809-row keyword dataset and sitemap rollout",
              "Pillar-cluster architecture, topical authority, backlink strategy",
              "Phase 2",
            ],
          },
          {
            cells: [
              "Content Writing",
              "Processing AI drafts through humanizer pipeline",
              "Original research, expert-led writing, AI-assisted production",
              "Phase 3",
            ],
          },
          {
            cells: [
              "Video",
              "AI-generated stock videos for 261 accounts",
              "Original footage production for consolidated channels",
              "Phase 4",
            ],
          },
          {
            cells: [
              "Social Media",
              "Uploading to 261 accounts (65:1 ratio)",
              "Strategic management of 3 consolidated brand accounts",
              "Phase 4",
            ],
          },
        ]}
      />

      <Paragraph>
        The evolution documented here is not a reduction in workload. It is a
        shift in the nature of the work: from repetitive production within a
        constrained system to strategic, skill-building work within a system
        designed for outcomes.
      </Paragraph>

      {/* 15.9 */}
      <MiniHeading>The Transition Management Approach</MiniHeading>
      <Paragraph>
        The redirection is managed department by department rather than through
        a single company-wide announcement. Each team receives its new
        direction as a forward-looking work plan: the SEO team is briefed on
        the authority strategy that replaces the keyword dataset, the content
        team on the insight-led method that replaces the template, the design
        and development teams on the single authority build that replaces
        per-site production, and the video and social teams on the
        consolidated, authentic-content model.
      </Paragraph>
      <Paragraph>
        Sequencing the briefings this way preserves workflow continuity and
        morale: no team experiences an abrupt halt, each team&apos;s existing
        skills are explicitly carried into its new mandate, and the transition
        is experienced as a redirection of effort toward higher-value work
        rather than as the dismantling of what came before. Each briefing is a
        planned change-management step with its own prepared strategy, not an
        improvised instruction.
      </Paragraph>

      <SectionHeading>15.10 The Next Level of Detail</SectionHeading>
      <Paragraph>
        This roadmap establishes the high-level sequencing and dependencies. Each
        phase, and each department&apos;s role within it, warrants its own
        detailed implementation strategy: specific workflows, production
        schedules, tool configurations, training requirements, and performance
        benchmarks.
      </Paragraph>
      <Paragraph>
        Each phase also carries its own decision layer: choices of tooling,
        sequencing, and standards that must be made deliberately as the work
        reaches them. A dedicated strategy report can be prepared for each
        phase at the point it is activated, so that every phase begins from an
        informed, documented plan rather than an improvised one.
      </Paragraph>
      <Paragraph>
        These per-department strategy documents represent the next phase of
        planning. They can be developed once leadership has evaluated this
        report&apos;s findings and made the strategic decisions that determine
        which elements of the proposed architecture to pursue and at what pace.
      </Paragraph>

      {/* 15.10 */}
      <SectionHeading>15.11 Scope and Confidence</SectionHeading>
      <Paragraph>
        The phased structure presented here follows established practices for
        digital infrastructure transitions. The sequencing is based on technical
        dependencies: architecture before content, content before authority,
        consolidation before optimization. These dependencies are structural,
        not speculative.
      </Paragraph>
      <Paragraph>
        The specific timeline, budget, and resource allocation for each phase
        depend on decisions that belong to leadership and are outside the scope
        of this report. The roadmap identifies what must happen and in what
        order, not when it must happen.
      </Paragraph>
      <Paragraph>
        The team role evolution described in Section 15.8 is based on the
        departmental analysis in Chapter 10 and the architectural requirements in
        Chapter 13. It represents a structural observation about how the work
        changes, not a recommendation about personnel decisions.
      </Paragraph>

      {/* 15.11 */}
      <SectionHeading>15.12 Summary</SectionHeading>
      <BulletList
        items={[
          "The transition follows five sequential phases: domain and infrastructure foundation, content architecture, content production, channel consolidation, and authority building.",
          "Three principles guide the sequencing: build the foundation before the content, transition in parallel rather than through hard cutover, and consolidate before optimizing.",
          "Each phase has defined dependencies: architecture before content, content before authority.",
          "The existing team is redirected rather than replaced, with each department moving from constrained, repetitive work to strategic, skill-building roles.",
          "Each phase and department warrants its own detailed implementation strategy, which can be developed once leadership has made the strategic decisions this report is designed to inform.",
          "Timeline, budget, and resource allocation are leadership decisions outside the scope of this report. The roadmap establishes what must happen and in what order.",
        ]}
      />
      <Paragraph>
        This chapter concludes the strategic and implementation content of the
        report. The final chapter presents the report&apos;s closing synthesis.
      </Paragraph>
    </main>
  );
}
