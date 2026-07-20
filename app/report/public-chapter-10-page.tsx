// app/report/chapter-10/page.tsx

import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

import { GroupBarChart } from "./GroupRadarChart";
import { UnifiedAssessmentMatrix } from "./UnifiedAssessmentMatrix";

export default function PublicChapter10Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="portfolio-chapter-10"
        label="Chapter 10: Resource Allocation and Departmental Capacity"
      />

      <ChapterOpener
        chapterNumber={10}
        title="Resource Allocation and Departmental Capacity"
        overview="This chapter examines the team responsible for the company's digital operations. Each department is evaluated through five lenses: current workflow, skill development trajectory, expected business outcome, the gap between investment and return, and budget impact. Departments are grouped by operational dependency to reveal where the structure supports its teams and where it structurally constrains them."
      />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.1 SCOPE                                                 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>10.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapters 3 through 8 examined the external-facing digital presence: the
        web infrastructure, the content, the architecture, and the social media
        channels. This chapter turns inward to examine the team responsible for
        producing and maintaining all of it: the allocation of operational
        resources across departments, the capacity of each team relative to the
        scale it is expected to manage, and the professional trajectory that the
        current workflow creates for each department.
      </Paragraph>
      <Paragraph>
        The purpose is not to evaluate individual performance. It is to assess
        whether the operational structure, the number of people, the workflows
        assigned to them, and the volume they are expected to sustain, is
        designed to produce the outcomes the business requires. The methodology
        described in Chapter 2 applies throughout what follows.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.2 OPERATIONAL COST                                      */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        10.2 The Operational Cost of the Current Model
      </SectionHeading>
      <Paragraph>
        The digital portfolio documented in this report requires ongoing
        investment across multiple cost categories. The 87 documented websites
        and 261 social media accounts carry recurring costs in hosting, domain
        renewals, content production labor, design and development hours, and
        management overhead.
      </Paragraph>
      <Paragraph>
        These costs are incurred regardless of whether the assets they support
        generate measurable business outcomes. The structural issues documented
        in Chapters 3 through 8, the doorway-page architecture, the keyword
        stuffing, the automated content pipeline, the fragmented social
        presence, mean that the portfolio&apos;s ability to convert this
        investment into organic visibility, customer acquisition, or brand equity
        is structurally constrained by factors that precede the team&apos;s daily
        effort.
      </Paragraph>
      <Paragraph>
        The operational investment is real. The question this chapter examines is
        whether the structure that investment supports is designed to produce a
        return.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.3 DESIGN & DEVELOPMENT                                  */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>10.3 Design and Development Teams</SectionHeading>
      <Paragraph>
        The design team (2 members) and development team (3 members) are grouped
        together because their workflows feed the same output pipeline: visual
        assets and functional websites. Neither team&apos;s deliverables depend
        on whether the underlying content ranks in search or converts visitors.
        Their operational health is evaluated below through five lenses. Team
        sizes reflect the current baseline and may carry minor flexibility as
        staffing evolves.
      </Paragraph>

      <MiniHeading>Current Workflow</MiniHeading>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Design Team
        </span>
        The daily output consists of generating visual templates for new website
        rollouts, designing graphics for the social media network, and producing
        creative assets to support the content pipeline. The volume is high, but
        the work itself exercises and develops the team&apos;s core creative
        skills on a daily basis.
      </Paragraph>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Development Team
        </span>
        The workflow centers on writing and maintaining code, launching new domain
        properties, and managing the backend infrastructure across the 87
        documented sites. The technical demands of the portfolio provide a
        consistent development environment that keeps coding proficiency and
        infrastructure management capabilities in active use.
      </Paragraph>

      <MiniHeading>Skill Development</MiniHeading>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Design Team
        </span>
        The continuous demand for new templates, graphics, and brand collateral
        keeps the creative skill set active and expanding. The limitation is not
        in the quality of the work itself but in the nature of the portfolio: the
        projects span a large number of scattered minor properties rather than a
        concentrated engagement with a single high-authority brand. A designer
        looking to showcase premium, industry-leading project work would find the
        portfolio weighted toward volume rather than landmark visibility.
      </Paragraph>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Development Team
        </span>
        Building, launching, and maintaining websites across the documented
        network keeps technical skills, coding proficiency, and infrastructure
        management capabilities in regular use. The same portfolio-level
        limitation applies: the work develops technical range, but the absence of
        a single premium authority project means the team&apos;s professional
        showcase reads as distributed volume work rather than a landmark
        engagement with a recognized brand.
      </Paragraph>

      <MiniHeading>Expected Business Outcome</MiniHeading>
      <Paragraph>
        The company&apos;s desired output from these teams is a continuous stream
        of functional websites and visual assets. This expectation is being met.
        Websites are launched, templates are delivered, and the visual pipeline
        operates on schedule.
      </Paragraph>

      <MiniHeading>The Return Gap</MiniHeading>
      <Paragraph>
        The gap emerges downstream. The websites these teams build and design are
        structurally unable to rank, acquire organic traffic, or generate revenue
        through search visibility, for reasons documented in Chapters 3 through
        6. The company receives the asset but not the business outcome the asset
        is intended to produce.
      </Paragraph>
      <Paragraph>
        The result is a growing library of professionally built properties that
        carry hosting and maintenance costs without generating measurable organic
        return. The output is real. The return on that output is structurally
        blocked.
      </Paragraph>

      <MiniHeading>Budget Impact</MiniHeading>
      <Paragraph>
        The investment in design and development produces tangible deliverables,
        but the business value of those deliverables is constrained by the same
        architectural issues that affect the entire portfolio. The budget is
        spent on building assets. The return that would justify that budget,
        ranking, authority, and customer acquisition, is not being generated.
      </Paragraph>

      <GroupBarChart
        figureNumber="10.1"
        title="Five-Lens Assessment: Design and Development"
        departments={[
          {
            name: "Design",
            color: "#3B82F6",
            scores: [75, 62, 80, 22, 28],
          },
          {
            name: "Development",
            color: "#0a1628",
            scores: [78, 65, 80, 22, 28],
          },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.4 VIDEO EDITING & SOCIAL MEDIA                          */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        10.4 Video Editing and Social Media Teams
      </SectionHeading>
      <Paragraph>
        The video editing team (2 members) and social media team (3 members) are
        grouped together because they form the company&apos;s media distribution
        pipeline: one team produces the visual content, the other distributes it
        across the account network. Both teams operate at a scale that is
        defined by volume rather than strategic depth.
      </Paragraph>

      <MiniHeading>Current Workflow</MiniHeading>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Video Editing Team
        </span>
        The daily workflow consists of compiling automated video content using
        stock databases and AI generation tools to meet the publishing volume
        required across 261 social media accounts. The production model
        documented in Chapter 8 relies on stock and synthetic assets rather than
        original footage.
      </Paragraph>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Social Media Team
        </span>
        The workflow is dominated by uploading and scheduling content across the
        account network. Three coordinators managing 261 accounts translates to
        approximately 87 accounts per person. The volume of platform interaction
        this requires leaves limited operational space for strategic activities
        such as community building, audience analysis, or conversion
        optimization.
      </Paragraph>

      <MiniHeading>Skill Development</MiniHeading>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Video Editing Team
        </span>
        Software proficiency and production speed are maintained through high
        volume. The constraint is that the current production model limits
        exposure to the higher-order skills the market increasingly rewards:
        original cinematography, narrative structure, on-location documentation,
        and audience-responsive creative development.
      </Paragraph>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Social Media Team
        </span>
        The team gains experience in platform mechanics and basic engagement
        monitoring. The structural constraint, the sheer number of accounts
        relative to available hours, prevents the kind of focused,
        strategy-driven social media management that builds real audience
        relationships and brand recognition. The skill trajectory is narrow
        rather than growing.
      </Paragraph>

      <MiniHeading>Expected Business Outcome</MiniHeading>
      <Paragraph>
        The company&apos;s desired output is a consistent flow of video content
        delivered to the social media pipeline, and active management of the 261
        account network. Both expectations are partially met: content is
        produced and accounts are maintained. Social engagement exists at a
        baseline level.
      </Paragraph>

      <MiniHeading>The Return Gap</MiniHeading>
      <Paragraph>
        Revenue and conversions attributable to video content are negligible. The
        social media network generates some minimal outreach leads, but the
        return is far below what the budget investment in 261 accounts should
        produce. Neither team&apos;s output translates into measurable business
        growth at a level proportional to the operational cost.
      </Paragraph>
      <Paragraph>
        The volume of likes and basic engagement does not change the underlying
        reality: the accounts are not consolidated under a single authority
        brand, the content is not driving traffic to a primary conversion
        property, and the audience that does engage is not being funneled toward
        revenue-generating outcomes.
      </Paragraph>

      <MiniHeading>Budget Impact</MiniHeading>
      <Paragraph>
        The combined budget for video production and social media management
        produces activity but not proportional business return. The cost of
        maintaining two people on video production and three on social media
        coordination is disproportionate to the leads, conversions, and revenue
        the output generates.
      </Paragraph>

      <GroupBarChart
        figureNumber="10.2"
        title="Five-Lens Assessment: Video Editing and Social Media"
        departments={[
          {
            name: "Video Editing",
            color: "#F59E0B",
            scores: [58, 48, 62, 15, 18],
          },
          {
            name: "Social Media",
            color: "#8B5CF6",
            scores: [50, 38, 52, 18, 22],
          },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.5 CONTENT WRITING & SEO                                 */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>10.5 Content Writing and SEO Teams</SectionHeading>
      <Paragraph>
        The content writing team (2 members) and SEO team (4 members: 1 senior,
        1 junior, 2 interns) are grouped together because they form the
        company&apos;s search visibility pipeline. Content quality determines
        whether pages can compete in search. SEO strategy determines whether
        those pages are positioned to be found. Each team&apos;s output directly
        depends on the other, and both operate under the constraints documented
        in Chapters 4 through 6.
      </Paragraph>

      <MiniHeading>Current Workflow</MiniHeading>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Content Writing Team
        </span>
        The workflow requires writers to process automated drafts through the
        humanizer pipeline, insert keywords at the specified frequency, and
        produce content within the fixed 1,200-word template. The skills this
        exercises, prompt management, tool operation, and format compliance, are
        operationally necessary but do not develop strategic content
        capabilities.
      </Paragraph>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          SEO Team
        </span>
        The workflow consists of maintaining the 809-row keyword spreadsheet,
        coordinating content transfers with the writing team, managing the
        sitemap rollout described in Chapter 3, and monitoring performance
        through Google Search Console across 87 sites. The two experienced team
        members carry the strategic load, placing the effective ratio at 43.5
        sites per experienced person. The workflow does not include pillar-page
        strategy, topical authority development, backlink acquisition, technical
        SEO auditing, or competitive analysis.
      </Paragraph>

      <MiniHeading>Skill Development</MiniHeading>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          Content Writing Team
        </span>
        This is where the current model causes the most damage. The daily work
        reinforces practices that are structurally misaligned with what the
        market rewards. Writers trained on the automated pipeline, the keyword
        repetition rules, and the fixed template do not develop the capabilities
        the industry values: original research, subject-matter analysis,
        audience-specific writing, and editorial judgment.
      </Paragraph>
      <Paragraph>
        <span
          className="mb-1 block text-[10px] font-bold uppercase tracking-[0.12em]"
          style={{ color: "var(--lionxe-blue)" }}
        >
          SEO Team
        </span>
        The trajectory mirrors the content team&apos;s constraint. The workflow
        exercises monitoring and uploading rather than the strategic activities
        that define modern search optimization. The team responsible for the
        single most important factor in the company&apos;s search visibility is
        structurally prevented from practicing the skills that would make the
        portfolio competitive.
      </Paragraph>

      <MiniHeading>Expected Business Outcome</MiniHeading>
      <Paragraph>
        The company&apos;s desired outcome from these two teams is clear:
        rankings, qualified organic traffic, and search-driven customer
        acquisition. This outcome is not being achieved. The portfolio does not
        rank competitively for commercial intent queries, and the content
        pipeline does not produce material that modern search algorithms reward
        with sustained visibility.
      </Paragraph>

      <MiniHeading>The Return Gap</MiniHeading>
      <Paragraph>
        The gap here is total. Neither team&apos;s skills are growing in the
        direction the business needs, and neither team&apos;s output is producing
        the competitive advantage the company requires. There is no clean
        organic traffic pipeline, no authority development, and no conversion
        funnel driven by search visibility. The two departments most responsible
        for the company&apos;s digital revenue potential are operating in a
        closed loop that reinforces the structural problems documented
        throughout this report.
      </Paragraph>

      <MiniHeading>Budget Impact</MiniHeading>
      <Paragraph>
        The budget allocated to content writing and SEO represents a complete
        loss in terms of business return. Neither skill development nor business
        outcomes justify the expenditure. The investment does not produce
        rankings, does not produce qualified traffic, and does not produce the
        search-driven customer acquisition that the company needs.
      </Paragraph>

      <GroupBarChart
        figureNumber="10.3"
        title="Five-Lens Assessment: Content Writing and SEO"
        departments={[
          {
            name: "Content Writing",
            color: "#c0392b",
            scores: [28, 12, 10, 5, 8],
          },
          {
            name: "SEO",
            color: "#7f1d1d",
            scores: [22, 10, 10, 5, 8],
          },
        ]}
      />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.6 CROSS-DEPARTMENT ASSESSMENT                           */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        10.6 The Cross-Department Assessment
      </SectionHeading>
      <Paragraph>
        The five-lens evaluation across all three department groups reveals a
        structural pattern that does not emerge from any single group in
        isolation. The company&apos;s digital operation divides into two tiers,
        separated not by effort or competence but by each tier&apos;s
        relationship to the pipeline that determines business outcomes.
      </Paragraph>

      <MiniHeading>The Upstream-Downstream Split</MiniHeading>
      <Paragraph>
        The design and development teams occupy the upstream position. They build
        the vessel: websites, templates, and visual assets. Their work is
        self-sufficient in the sense that it does not depend on content quality
        or search strategy to function as a deliverable. The content writing and
        SEO teams occupy the downstream position. They carry the responsibility
        of filling that vessel with the rankings, the traffic, and the authority
        that convert a website from a recurring cost into a revenue-generating
        asset.
      </Paragraph>
      <Paragraph>
        The five-lens analysis shows that the upstream teams are producing output
        that meets the company&apos;s operational expectations, while the
        downstream teams are constrained across every evaluation criterion. The
        vessel is being built consistently. It is not being filled.
      </Paragraph>

      <MiniHeading>The Load Inversion</MiniHeading>
      <Paragraph>
        The company&apos;s heaviest operational scale, 87 websites and 261 social
        media accounts, generates the highest workload on the teams with the
        narrowest strategic capability. The SEO team&apos;s effective experienced
        capacity is two people across 87 sites. The social media team manages 87
        accounts per coordinator. The content writing team produces material for
        a portfolio whose structural characteristics prevent that material from
        ranking regardless of volume.
      </Paragraph>
      <Paragraph>
        The departments carrying the lowest capacity relative to their
        operational scope are the same departments whose output determines
        whether the company&apos;s digital investment produces a return. This is
        not a staffing shortfall that additional hires resolve. It is a
        structural inversion where the greatest operational load falls on the
        narrowest strategic capability.
      </Paragraph>

      <MiniHeading>The Budget Flow</MiniHeading>
      <Paragraph>
        The combined investment across all six departments funds a continuous
        cycle of asset creation, content production, and account management. The
        design and development teams convert their share into tangible
        deliverables whose downstream value is blocked by the architectural
        issues documented in earlier chapters. The video and social media teams
        convert theirs into activity whose business return is disproportionately
        low. The content and SEO teams convert theirs into output that produces
        neither skill growth nor competitive advantage.
      </Paragraph>
      <Paragraph>
        The budget flows through every department. The return concentrates in
        none of them. Figure 10.4 presents this pattern across all six
        departments and all five evaluation lenses in a single view.
      </Paragraph>

      <UnifiedAssessmentMatrix
        figureNumber="10.4"
        title="Cross-Department Assessment: All Teams Across Five Lenses"
      />

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.7 NEW HIRES & INTERNS                                   */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        10.7 The Compounding Effect on New Hires and Interns
      </SectionHeading>
      <Paragraph>
        The company continues to hire both new employees and interns. Interns
        join specifically for skill development and professional growth. The
        five-lens analysis and cross-department assessment above reveal why the
        department a new hire enters determines whether that investment in talent
        compounds positively or negatively.
      </Paragraph>

      <MiniHeading>Where New Talent Grows</MiniHeading>
      <Paragraph>
        An intern joining the design or development teams enters a workflow that
        exercises real professional skills on a daily basis. The volume of
        projects provides consistent practice, and the technical demands of the
        portfolio create a functional learning environment. The portfolio
        limitation, the absence of premium brand projects, affects the resume
        but not the skill trajectory itself.
      </Paragraph>

      <MiniHeading>Where New Talent Stagnates</MiniHeading>
      <Paragraph>
        An intern entering the SEO or content writing teams under the current
        workflow does not receive training in modern search optimization, content
        strategy, or editorial quality standards. The workflow they are trained
        on, the keyword spreadsheet, the automated pipeline, the volume-first
        upload model, teaches practices that are structurally misaligned with
        what the market rewards.
      </Paragraph>
      <Paragraph>
        The recently hired interns on the SEO team illustrate this directly.
        Their daily work is reduced to raw uploading within a system that
        contains process violations, quality constraints, and practices that do
        not develop the strategic capabilities those interns were hired to build.
        Their skill development is negatively impacted from the first day.
      </Paragraph>
      <Paragraph>
        Every new hire trained within the current content and SEO workflow
        produces more output under the same constraints. The operational cost
        compounds without altering the structural factors that prevent that
        output from generating a return. The company&apos;s investment in new
        talent accelerates the existing problem rather than resolving it.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.8 STRUCTURAL HIRING FALLACY                             */}
      {/* ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>10.8 The Structural Hiring Fallacy</SectionHeading>
      <Paragraph>
        A common organizational response to underperformance at this scale is to
        expand the team: hire additional writers, editors, coordinators, or SEO
        specialists to increase capacity. The findings of this report suggest
        that this response, while intuitive, does not address the underlying
        issue.
      </Paragraph>

      <MiniHeading>
        Headcount Expansion Within a Constrained Model
      </MiniHeading>
      <Paragraph>
        The issues documented in Chapters 3 through 8 are not caused by
        insufficient staffing. They are caused by the structure of the system the
        staff operates within. Adding writers to the current content pipeline
        produces more content under the same constraints: the same word-count
        ceiling, the same keyword repetition rules, the same template, the same
        automated pipeline. The output increases in volume but not in quality,
        and the structural characteristics that limit the portfolio&apos;s search
        visibility remain unchanged.
      </Paragraph>
      <Paragraph>
        The same applies to each department. Additional social media
        coordinators managing the same 261-account structure distribute the
        workload but do not consolidate the fragmented brand presence. Additional
        SEO staff monitoring the same flat keyword model increase monitoring
        capacity but do not introduce the pillar-cluster architecture or backlink
        strategy that the portfolio lacks.
      </Paragraph>

      <MiniHeading>
        The Alternative: Structural Realignment
      </MiniHeading>
      <BulletList
        items={[
          <>
            Adding headcount to the current model increases monthly cost while
            leaving every structural constraint in place. More writers produce
            more content under the same ceiling, template, and keyword rules.
            More coordinators manage the same 261 fragmented accounts. More SEO
            staff monitor the same flat keyword list. The investment compounds
            without altering the return.
          </>,
          <>
            Addressing the underlying structure changes the equation. Consolidate
            the portfolio. Replace the flat keyword model with a pillar-cluster
            architecture. Replace the automated pipeline with an insight-led
            workflow. The same team then operates a system designed to produce
            outcomes rather than volume.
          </>,
        ]}
      />

      <MiniHeading>The Relationship Between Structure and Spend</MiniHeading>
      <Paragraph>
        Every hire made within the current operational model increases the
        company&apos;s monthly cost base without altering the structural factors
        that determine whether that investment produces a return. The cost of
        maintaining and staffing the current model compounds over time, while the
        return on that investment remains constrained by the architectural,
        content, and strategic issues the model carries.
      </Paragraph>
      <Paragraph>
        The resource question is therefore not how many people the company
        employs, but what system those people are asked to operate within.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════ */}
      {/* 10.9 SCOPE & CONFIDENCE                                    */}
      {/* ═══════════════════════════════════════════════════════════ */}
     {/* 10.9 SCOPE & CONFIDENCE */}
      <SectionHeading>
        10.9 Scope and Confidence of These Findings
      </SectionHeading>

      <BulletList
        items={[
          <>
            The department structure, team sizes, and workflows described in
            this chapter are directly observable in the company&apos;s
            documented operations. Team sizes reflect the current baseline and
            may carry minor flexibility as staffing evolves.
          </>,
          <>
            The professional trajectory assessments are based on the
            relationship between the tasks each team performs and the skills
            those tasks develop, not on evaluations of individual performance.
          </>,
          <>
            The five-lens evaluation framework applied to each department group
            is grounded in the operational evidence documented in Chapters 3
            through 8. The cross-department assessment, including the
            upstream-downstream split and load inversion observations, follows
            from comparing each group&apos;s findings against the others.
          </>,
          <>
            The observation that structural issues cannot be resolved by adding
            headcount to the existing model follows from the nature of the
            issues themselves, which are architectural and strategic rather than
            capacity-related.
          </>,
        ]}
      />
    </main>
  );
}