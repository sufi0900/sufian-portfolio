// app/report/chapter-13/page.tsx

// force-dynamic: this chapter uses the Screenshot component, which checks
// the filesystem at render time for pending images.
import "@/styles/report.css";
import { ChapterOpener } from "@/components/report/ChapterOpener";
import {
  SectionHeading,
  MiniHeading,
  Paragraph,
} from "@/components/report/Headings";
import { BulletList } from "@/components/report/BulletList";
import { DataTable } from "@/components/report/DataTable";
import { ConsolidationBenefitsPanel } from "@/app/report/ConsolidationBenefitsPanel";
import { InlineLink } from "@/components/report/InlineLink";
import { CartsVsMallDiagram } from "@/app/report/CartsVsMallDiagram";
import { LocationArchitectureDiagram } from "@/app/report/LocationArchitectureDiagram";
import { PillarClusterTreeDiagram } from "@/components/report/PillarClusterDiagram";
import { WorkflowSteps } from "@/components/report/WorkflowSteps";
import { AquariumDiagram } from "@/app/report/AquariumDiagram";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function PublicChapter13Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="portfolio-chapter-13"
        label="Chapter 13: The Unified Digital Architecture"
      />

      <ChapterOpener
        chapterNumber={13}
        title="The Unified Digital Architecture: The Single Authority Brand"
        overview="The diagnosis is complete and the standard is established. This chapter presents the solution: the consolidation of the company's fragmented digital presence into a single authority brand, the structural answer to every finding documented in this report."
      />

      {/* 13.1 */}
      <SectionHeading>13.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapters 3 through 10 documented the problems. Chapter 11 placed them
        within the search landscape they must survive. Chapter 12 established
        the quality standard through which they were assessed and which any
        solution must pass.
      </Paragraph>
      <Paragraph>
        This chapter presents that solution. It describes the target
        architecture, answers the location question raised in Chapter 11,
        details the content and channel model the architecture requires, and
        maps every diagnostic finding to the component that resolves it.
      </Paragraph>

      {/* 13.2 */}
      <SectionHeading>
        13.2 The Answer to Every Finding: One Authority Brand
      </SectionHeading>
      <Paragraph>
        Every problem documented in this report traces to a single root:
        fragmentation. Authority fragmented across 87 domains. Content
        fragmented across 226,200 duplicated URLs. Brand identity fragmented
        across 261 social accounts. Team effort fragmented across endless
        repetitive production.
      </Paragraph>
      <Paragraph>
        The solution is therefore a single consolidation: the company&apos;s
        entire digital presence unifies into one authoritative domain,
        operating under one brand, fed by one quality-driven content operation.
        Every page published, every link earned, and every piece of engagement
        generated strengthens one asset instead of being divided 87 ways.
      </Paragraph>

      <ConsolidationBenefitsPanel
        figureNumber="13.1"
        title="Multi-Site Model vs. Single-Domain Model"
      />

      {/* 13.3 */}
      <SectionHeading>13.3 The Carts and the Shopping Mall</SectionHeading>
      <Paragraph>
        The structural difference between the two models can be stated as a
        physical retail comparison. The current model is 87 small carts placed
        in different cities. One owner operates all of them, but each cart
        stands alone: it builds its own reputation from zero, attracts its own
        foot traffic, and shares nothing with the others. No cart ever grows
        large enough to be known, because the owner&apos;s resources are divided
        across all of them.
      </Paragraph>
      <Paragraph>
        The proposed model is one shopping mall. Inside it, every shop, the
        locations wing, the services wing, the blog, the case studies, operates
        under one roof. Every customer any shop attracts, every reputation
        signal any shop earns, strengthens the mall itself. The mall becomes the
        destination, and every shop inside it inherits that status.
      </Paragraph>

      <CartsVsMallDiagram
        figureNumber="13.2"
        title="87 Scattered Carts vs. One Shopping Mall"
      />

      <Paragraph>
        In search terms: backlinks, content depth, engagement signals, and brand
        searches all accumulate on one domain. This concentration is what
        produces the authority that Chapter 11 identified as the deciding factor
        in both traditional rankings and AI citation.
      </Paragraph>

      {/* 13.4 */}
      <SectionHeading>13.4 The Location Question Answered</SectionHeading>
      <Paragraph>
        Chapter 11 named the company&apos;s primary internal concern: location
        coverage. The multi-site model exists because of the belief that serving
        104 areas requires many websites. This section answers that concern
        directly, because the consolidation does not reduce location coverage.
        It restructures how that coverage is built.
      </Paragraph>

      <MiniHeading>Google&apos;s Guidance for Multi-Location Businesses</MiniHeading>
      <Paragraph>
        Google&apos;s{" "}
        <InlineLink href="https://developers.google.com/search/docs/essentials/spam-policies#doorways">
          spam policies
        </InlineLink>{" "}
        explicitly identify multiple sites targeting city names with duplicated
        content as doorway abuse. Its guidance for businesses with multiple
        locations points the opposite way: one website, with a dedicated page
        for each location, where each page carries genuinely local content,
        the area&apos;s specific service considerations, the local team, local
        reviews, and local context, rather than a city name swapped into a
        shared template.
      </Paragraph>

      <MiniHeading>How Multi-Location Enterprises Actually Structure It</MiniHeading>
      <Paragraph>
        This is observable across every industry.{" "}
        <InlineLink href="https://www.apple.com/retail/">Apple</InlineLink>{" "}
        operates retail locations across dozens of countries and hundreds of
        cities through one domain, with each store as a path under
        apple.com/retail. National banks operate thousands of branches through a
        single domain with a branch locator and location pages. The pattern
        holds regardless of scale: the locations live inside the brand&apos;s
        single domain.
      </Paragraph>

      <MiniHeading>The Same Structure Inside the Company&apos;s Own Industry</MiniHeading>
      <Paragraph>
        The evidence is not limited to enterprises outside the cleaning sector.
        The dominant national cleaning brands each operate exactly this
        structure.{" "}
        <InlineLink href="https://www.stanleysteemer.com/locations">
          Stanley Steemer
        </InlineLink>{" "}
        serves hundreds of markets through one domain with a location directory,{" "}
        <InlineLink href="https://www.servicemasterclean.com/locations/">
          ServiceMaster Clean
        </InlineLink>{" "}
        lists every branch as a page within its single site, and{" "}
        <InlineLink href="https://www.coit.com/locations">COIT</InlineLink>{" "}
        structures each service area as a path under one domain. Each of these
        brands holds the rankings the audited network has been unable to
        reach with 87 separate sites.
      </Paragraph>
      <Paragraph>
        The pattern repeats at every scale of the industry.{" "}
        <InlineLink href="https://nysteamers.com/location/">
          NY Steamers
        </InlineLink>{" "}
        operates a dedicated location section within its single New York
        domain,{" "}
        <InlineLink href="https://merrymaids.com/home-cleaners">
          Merry Maids
        </InlineLink>{" "}
        covers its national home-cleaning footprint through one site, and{" "}
        <InlineLink href="https://www.mrrooter.com/locations/">
          Mr. Rooter
        </InlineLink>{" "}
        and{" "}
        <InlineLink href="https://servicemasterrestore.com/locations/search">
          ServiceMaster Restore
        </InlineLink>{" "}
        both run searchable location directories inside a single domain,
        covering hundreds of service areas each. None of these businesses
        operates a separate website per city.
      </Paragraph>
<MiniHeading>The Observable Ranking Evidence</MiniHeading>
      <Paragraph>
        Third-party ranking data makes the outcome of this structure directly
        visible. Single-domain cleaning businesses in the company&apos;s own
        market hold first-page positions on high-volume commercial queries,
        including &ldquo;near me&rdquo; searches in the tens of thousands of
        monthly searches, positions no site in the 87 audited-site network
        holds on any comparable term.
      </Paragraph>
      <Paragraph>
        The same data shows these domains building measurable authority
        ratings, with traffic spread across the full page structure: homepage,
        service pages, and location pages all ranking under one accumulated
        authority.
      </Paragraph>

      <MiniHeading>What Those Industry Location Pages Contain</MiniHeading>
      <Paragraph>
        What these industry location pages contain is as instructive as where
        they live. Each page carries genuinely local material: the local
        office&apos;s address and photographs, the staff serving that area,
        the services offered in that specific market, area reviews, and local
        contact details. The content is unique per location because the
        underlying facts are unique per location. This is the model the
        proposed architecture adopts.
      </Paragraph>

      <LocationArchitectureDiagram
        figureNumber="13.3"
        title="Location Coverage: 87 Sites vs. One Domain With Location Pages"
      />

      <MiniHeading>What Each Location Page Contains</MiniHeading>
      <Paragraph>
        Under the proposed architecture, each service area receives a dedicated
        page within the domain&apos;s location structure. The page is not a
        template with a swapped city name. It carries content specific to that
        area: the services most requested there, area-specific considerations
        such as common rug types or building access, the team serving that
        area, and reviews from customers in that area.
      </Paragraph>
      <Paragraph>
        Each of these pages inherits the full authority of the domain from the
        day it is published. A new location page on an established authority
        domain enters search with the domain&apos;s accumulated strength behind
        it, rather than starting from zero as every new site in the current
        model does.
      </Paragraph>

      {/* 13.5 */}
      <SectionHeading>
        13.5 The Pillar-Cluster Content Architecture
      </SectionHeading>
      <Paragraph>
        The flat 809-row keyword list identified in Chapter 8 is replaced by a
        structured topical hierarchy organized around the company&apos;s core
        services.
      </Paragraph>

      <MiniHeading>How the Architecture Works</MiniHeading>
      <Paragraph>
        Each of the company&apos;s primary services becomes a pillar page: a
        comprehensive, in-depth resource covering the service in full. Around
        each pillar, a cluster of supporting pages addresses specific subtopics,
        practical questions, regional considerations, and detailed aspects of the
        service.
      </Paragraph>

      <PillarClusterTreeDiagram
        figureNumber="13.4"
        title="Pillar-Cluster Architecture for Area Rug Cleaning"
      />

      <Paragraph>
        Internal links connect each cluster page upward to its pillar and
        laterally to related clusters. The result is a site architecture that
        communicates topical depth to both readers and search systems, directly
        building the topical authority signal documented as absent in Chapter 8.
      </Paragraph>

      <MiniHeading>An Example From the Company&apos;s Services</MiniHeading>
      <Paragraph>
        For the company&apos;s area rug cleaning service, the pillar page is a
        comprehensive guide covering materials, methods, risks, costs, and care.
        The cluster pages address specific rug materials, specific cleaning
        challenges, regional considerations, before-and-after case studies, and
        pricing transparency.
      </Paragraph>
      <Paragraph>
        Each cluster page links back to the pillar. The pillar links out to each
        cluster. The entire structure is internally connected, crawlable, and
        organized around genuine subject expertise rather than keyword
        repetition. Keyword cannibalization is resolved because each intent has
        one designated primary page within the hierarchy.
      </Paragraph>

      {/* 13.6 */}
      <SectionHeading>
        13.6 The Content Operating Model: From Production to Optimization
      </SectionHeading>
      <Paragraph>
        The architecture requires a change deeper than structure. The entire
        operating philosophy of the content function shifts: from maximizing
        production volume to maximizing quality and optimization. This is the
        standard operating model of every authority brand.
      </Paragraph>

      <MiniHeading>The Philosophical Shift</MiniHeading>
      <Paragraph>
        The current model measures output in pages per day. The proposed model
        measures output in impact per piece. Under the current model, two
        writers produce approximately 25 pages in a single day, none of which
        rank. Under the proposed model, a single piece may take days of
        research, drafting, review, and refinement, and that one piece is
        engineered to outrank everything the old model produced in a day.
      </Paragraph>
      <Paragraph>
        Production does not disappear. It is redirected. The time currently
        consumed by volume, and by the rephrasing and detection stages Chapter 5
        documented as valueless, is reinvested into research depth, editorial
        quality, and the optimization work the current model never reaches:
        internal linking, on-page refinement, backlink outreach, and performance
        iteration.
      </Paragraph>

      <MiniHeading>The Proposed Workflow</MiniHeading>
      <Paragraph>
        The current two-stage pipeline (AI draft followed by automated
        rephrasing) is replaced by a five-stage workflow that positions AI as an
        assistant to the writer rather than a replacement for the writer.
      </Paragraph>

      <WorkflowSteps
        figureNumber="13.5"
        title="The Insight-Led Content Workflow"
        steps={[
          {
            label: "Research",
            description:
              "Writer or subject-matter expert gathers original data, on-site observations, and customer insights.",
          },
          {
            label: "Structure",
            description:
              "Format, depth, and angle are determined by the subject and audience need, not a fixed template.",
          },
          {
            label: "AI-Assisted Draft",
            description:
              "AI tools assist with drafting and refining, working from the writer\u2019s research, not from a keyword prompt.",
          },
          {
            label: "Editorial Review",
            description:
              "Draft reviewed for accuracy, depth, originality, and brand compliance before publication.",
          },
          {
            label: "Publish",
            description:
              "Content placed within the pillar-cluster architecture with internal links and tracked for performance.",
          },
        ]}
      />

      <MiniHeading>What This Addresses</MiniHeading>
      <Paragraph>
        This workflow directly addresses the findings of Chapters 4, 5, 6, and
        7. The 1,200-word ceiling is removed; length matches the subject. The
        keyword repetition instructions are replaced by natural, intent-driven
        writing. The six-stage template is replaced by format flexibility. The
        grammar prohibitions are lifted because nothing needs to be disguised.
      </Paragraph>
      <Paragraph>
        The humanizer stage is eliminated entirely. Content is not produced to
        evade detection; it is produced to provide value. AI remains in the
        process, but in the role Google&apos;s guidance describes as
        appropriate: assisting a person who brings the expertise.
      </Paragraph>

      {/* 13.7 */}
      <SectionHeading>13.7 Brand and Channel Consolidation</SectionHeading>
      <Paragraph>
        The fragmented social media presence identified in Chapter 9
        consolidates under the same unified brand identity.
      </Paragraph>

      <MiniHeading>The Consolidated Model</MiniHeading>
      <Paragraph>
        The 261 social media accounts are replaced by one account per platform:
        one Facebook page, one Instagram account, one YouTube channel, each
        operating under the company&apos;s primary brand. All content,
        engagement, and audience growth concentrates on these central accounts.
      </Paragraph>

      <MiniHeading>The Content Shift</MiniHeading>
      <Paragraph>
        Social media content shifts from automated AI-generated videos to
        authentic material drawn from the company&apos;s actual operations: real
        job-site footage, technician expertise, before-and-after documentation,
        and community-specific content. This aligns with the platform
        originality policies identified in Chapter 9 and with the same
        first-hand-experience standard Google&apos;s guidance applies to web
        content.
      </Paragraph>

      <MiniHeading>The Industry Is Already Proving This on YouTube</MiniHeading>
      <Paragraph>
        The consolidated, authentic-content model is not hypothetical; cleaning
        businesses are running it publicly.{" "}
        <InlineLink href="https://www.youtube.com/@ACSrugcleaning/videos">
          ACS Rug Cleaning
        </InlineLink>{" "}
        and{" "}
        <InlineLink href="https://www.youtube.com/@SteamBossInc/videos">
          Steam Boss
        </InlineLink>{" "}
        each publish real job footage, restoration processes, and technician
        work on a single channel, and{" "}
        <InlineLink href="https://www.youtube.com/@merrymaids/videos">
          Merry Maids
        </InlineLink>{" "}
        runs its national brand presence the same way. Their videos accumulate
        views, subscriber bases, and audience engagement that build directly
        into brand awareness and customer acquisition.
      </Paragraph>
      <Paragraph>
        One established channel under the company&apos;s brand, publishing the
        same category of authentic footage the company&apos;s crews generate
        every working day, follows a path the industry has already validated.
        An established channel also qualifies for platform verification, a
        trust signal no collection of small scattered accounts can earn.
      </Paragraph>
<MiniHeading>The Same Pattern on Facebook</MiniHeading>
      <Paragraph>
        The identical structure holds on Facebook.{" "}
        <InlineLink href="https://www.facebook.com/SERVPRO">SERVPRO</InlineLink>{" "}
        and{" "}
        <InlineLink href="https://www.facebook.com/MerryMaids">
          Merry Maids
        </InlineLink>{" "}
        operate single, verified brand pages serving their entire national
        footprint. All engagement, reviews, and audience growth accumulate on
        one page, and the verification badge itself functions as a trust signal
        to every visitor.
      </Paragraph>
      <Paragraph>
        One verified page under the company&apos;s brand replaces the current
        scattered local profiles. Every follower gained, every review earned,
        and every piece of engagement builds one audience that converts into
        recurring clients, rather than being split into fragments too small for
        any of them to matter.
      </Paragraph>
<MiniHeading>Every Platform, One Brand</MiniHeading>
      <Paragraph>
        The consolidation principle extends to every channel where the
        company&apos;s customers are present. The proposed model establishes
        one branded, verifiable presence per platform and pursues every
        available distribution and outreach pathway from that base, so that
        each platform compounds the same single brand rather than diluting it.
      </Paragraph>

      <MiniHeading>What This Addresses</MiniHeading>
      <Paragraph>
        The 65:1 account-to-coordinator ratio is replaced by a manageable
        workload focused on quality and engagement. Platform originality
        policies are met through authentic content rather than automated
        production. The company&apos;s three-decade real-world reputation
        becomes visible through its social presence rather than fragmented
        across 261 generic local profiles.
      </Paragraph>

      {/* 13.8 */}
      <SectionHeading>
        13.8 The Keyword Opportunity: An Industry Open to Rank
      </SectionHeading>
      <Paragraph>
        The consolidation is not only a correction of structural problems. It
        opens into an unusually favorable competitive landscape, because the
        informational keywords in the company&apos;s industry carry low ranking
        difficulty in third-party SEO data.
      </Paragraph>

      <MiniHeading>What the Keyword Data Shows</MiniHeading>
      <Paragraph>
        Queries such as &ldquo;how to clean carpet,&rdquo; &ldquo;how to clean
        area rug,&rdquo; &ldquo;pet stain odor remover,&rdquo; and &ldquo;how
        to repair carpet&rdquo; register as low-difficulty terms in keyword
        research tools, while carrying substantial monthly search volume. The
        overwhelming majority of informational queries across the industry
        follow this pattern.
      </Paragraph>
      <Paragraph>
        Low difficulty means the pages currently ranking for these terms can be
        outperformed with well-researched content supported by modest authority
        signals. For an authority domain publishing genuinely researched
        content, this is a landscape in which broad keyword coverage is
        realistically attainable.
      </Paragraph>
<MiniHeading>The Contrast With the Current Output</MiniHeading>
      <Paragraph>
        The current model has published thin variants of these same topics
        across 87 sites, and holds rankings on none of them. The proposed model
        inverts the ratio: one research-based, comprehensive article per topic,
        published on the authority domain and supported by the backlink work the
        five-stage workflow includes.
      </Paragraph>
      <Paragraph>
        Under those conditions, the findings project competitive rankings
        becoming attainable across most of the industry&apos;s informational
        keyword set, topic by topic, as the domain&apos;s authority compounds.
        The projection is directional rather than guaranteed, but the
        difficulty data indicates the ceiling is set by execution rather than
        by competition.
      </Paragraph>

      <MiniHeading>Branded and Non-Branded Traffic</MiniHeading>
      <Paragraph>
        Third-party traffic data for single-domain cleaning businesses shows a
        second pattern the current model cannot produce: traffic arriving
        through both non-branded queries (the informational and service terms
        above) and branded queries, searches for the business by name. Branded
        search only exists where a memorable brand exists.
      </Paragraph>
      <Paragraph>
        The proposed model builds a distinct brand name for exactly this
        reason. It gives the company a second, compounding traffic stream that
        87 forgettable location-domains can never generate, and it makes both
        streams separately measurable, so leadership can see what the brand
        earns and what the content earns.
      </Paragraph>
{/* 13.9 */}
      <SectionHeading>13.9 Why Partial Fixes Fail: The Aquarium</SectionHeading>
      <Paragraph>
        A reasonable question at this point is whether the full consolidation is
        necessary. Could the company keep the 87 sites and simply improve the
        content? Fix the templates? Consolidate only the social accounts? The
        answer is structural, and an aquarium makes it visible.
      </Paragraph>
      <Paragraph>
        Picture a tank in which the water has turned foul. Taking out one fish,
        cleaning it, and returning it changes nothing; the water re-contaminates
        it immediately. Cleaning every fish changes nothing for the same reason.
        The only intervention that holds is replacing the water itself, and then
        returning the fish to a clean tank.
      </Paragraph>

      <AquariumDiagram
        figureNumber="13.6"
        title="Fixing the Fish vs. Changing the Water"
      />

      <Paragraph>
        The fish are the departments: the designers who built the sites, the
        developers who coded them, the video editors, the social coordinators,
        the writers, the SEO team. The water is the structure they all operate
        inside: the 87-site, duplication-based, volume-driven model. Chapter 10
        documented that the departments themselves are not the failure; the
        structure that consumes their work is.
      </Paragraph>
      <Paragraph>
        Improved content published into a doorway network is still content on a
        doorway network. Consolidated social accounts promoting 87 duplicated
        sites still promote a structure the platforms&apos; policies target. The
        structure re-contaminates every improvement placed inside it, which is
        why the consolidation is not one option among several fixes. It is the
        water change that makes every other fix hold.
      </Paragraph>

      {/* 13.9 */}
      <SectionHeading>
        13.10 How Each Diagnostic Finding Is Addressed
      </SectionHeading>
      <Paragraph>
        The following table maps each core diagnostic finding to the
        architectural component designed to resolve it.
      </Paragraph>

      <DataTable
        headers={["Chapter", "Diagnostic Finding", "Architectural Response"]}
        align={["center", "left", "left"]}
        rows={[
          {
            cells: [
              "3",
              "87-site doorway architecture, ~226,200 duplicated URLs",
              "Single domain with structured location subdirectories",
            ],
          },
          {
            cells: [
              "4",
              "Fixed word ceiling, keyword stuffing, intent mismatch",
              "Flexible-length, intent-driven writing within pillar-cluster structure",
            ],
          },
          {
            cells: [
              "5",
              "AI as replacement, humanizer pipeline, detection focus",
              "AI as assistant within a five-stage insight-led workflow",
            ],
          },
          {
            cells: [
              "6",
              "Uniform six-stage template across 45,240 pages",
              "Format matched to content type, no fixed template",
            ],
          },
          {
            cells: [
              "7",
              "Standard grammar banned due to AI detection fear",
              "Full English grammar permitted; quality comes from insight, not evasion",
            ],
          },
          {
            cells: [
              "8",
              "Flat keyword list, no hierarchy, no links, no backlink plan",
              "Pillar-cluster architecture with internal linking and authority-building strategy",
            ],
          },
          {
            cells: [
              "9",
              "261 social accounts, AI-generated video, brand fragmentation",
              "One account per platform, authentic content, consolidated brand",
            ],
          },
          {
            cells: [
              "10",
              "Team structurally constrained by the model they operate",
              "Same team operates a system designed for outcomes rather than volume",
            ],
          },
        ]}
      />

      {/* 13.10 */}
      <SectionHeading>13.11 Scope and Confidence</SectionHeading>
      <Paragraph>
        The architecture described in this chapter is a structural blueprint
        based on the principles established in Google&apos;s published guidance,
        modern content strategy practices, and the specific diagnostic findings
        of this report. The multi-location structure is directly observable in
        the public websites of Apple, national banking institutions, and the
        dominant US cleaning brands named in Section 13.4.
      </Paragraph>
      <Paragraph>
        The feasibility, cost, and timeline of implementing this architecture
        are operational questions addressed in Chapter 15. The architecture
        itself is not speculative: each component, single-domain consolidation,
        pillar-cluster hierarchy, insight-led content workflows, and brand
        consolidation, is a documented, widely practiced approach used by
        organizations that compete successfully in the current search
        environment.
      </Paragraph>
      <Paragraph>
        The industry examples cited in Sections 13.4 and 13.7, the location
        directories, YouTube channels, and Facebook pages, are publicly
        verifiable at the linked addresses. The keyword difficulty and traffic
        figures in Section 13.8 are third-party estimates from SEO research
        tools, not Google data, and the ranking outlook built on them is a
        directional projection dependent on execution quality, not a
        guaranteed outcome.
      </Paragraph>

      {/* 13.11 */}
      <SectionHeading>13.12 Summary</SectionHeading>
      <BulletList
        items={[
          "Every identified problem traces to fragmentation. The solution is one consolidation: a single authority brand on a single authoritative domain.",
          "The 87-site network consolidates into one domain, with geographic targeting achieved through structured location subdirectories carrying genuinely local content, the same structure used by Apple, national banks, and the dominant US cleaning brands.",
          "The flat 809-row keyword list is replaced by a pillar-cluster content architecture organized around the company\u2019s core services, resolving cannibalization and building topical authority.",
          "The operating philosophy shifts from production to optimization: one piece produced through research, drafting, review, and refinement is engineered to outrank the 25 pages the current model produces in a day.",
          "The two-stage automated pipeline is replaced by a five-stage insight-led workflow positioning AI as an assistant rather than a replacement.",
          "The 261 social media accounts consolidate to one account per platform under a single brand identity, with content drawn from authentic operations.",
          "Partial fixes fail structurally: improvements placed inside the current model are re-contaminated by it. The consolidation is the water change that makes every other improvement hold.",
          "The single-domain location structure is already standard inside the company's own industry: NY Steamers, Merry Maids, Mr. Rooter, and ServiceMaster Restore all operate location directories within one domain, and single-domain industry sites hold first-page rankings on high-volume commercial terms.",
          "Industry businesses already run the consolidated channel model publicly: single YouTube channels built on real job footage and single verified Facebook pages accumulating the entire audience. The proposed model establishes one verifiable presence per platform.",
          "The industry's informational keywords carry low ranking difficulty with substantial volume in third-party data. One researched article per topic on an authority domain projects toward broad keyword coverage, and a distinct brand name adds a second, separately measurable branded-traffic stream.",
        ]}
      />
      <Paragraph>
        The architecture is now fully described. The next chapter places it
        beside the current model as a formal choice: two paths, each with a
        projected trajectory, evaluated through the standard established in
        Chapter 12.
      </Paragraph>
    </main>
  );
}
