// app/report/chapter-9/page.tsx

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
import { ContrastCards } from "@/components/report/ContrastCards";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";
import { TrustGapInfographic } from "@/components/report/TrustGapInfographic";

export default function PublicChapter9Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="portfolio-chapter-9"
        label="Chapter 9: Video and Social Media Strategy"
      />

      <ChapterOpener
        chapterNumber={9}
        title="Video and Social Media Strategy"
        overview="This chapter examines the company's video and social media operations across Facebook, Instagram, and YouTube: the scale of the account footprint, the production model, the platform originality policies that apply, and the structural consequences of operating 261 accounts without a consolidated brand identity."
      />

      <SectionHeading>9.1 Scope of This Chapter</SectionHeading>
      <Paragraph>
        Chapters 3 through 8 examined the company&apos;s web presence: the
        infrastructure, the content, the tools, the template, the editorial
        constraints, and the SEO framework. This chapter examines a parallel
        channel: the company&apos;s video and social media operations across
        Facebook, Instagram, and YouTube.
      </Paragraph>
      <Paragraph>
        The same structural patterns documented in the web analysis, high volume,
        automated production, fragmented footprint, and absence of original
        insight, are present here in a different medium. The findings are
        measured against the originality and content-quality policies each
        platform publishes and enforces.
      </Paragraph>
      <Paragraph>
        The methodology described in Chapter 2 applies throughout what follows.
      </Paragraph>

      <SectionHeading>9.2 The Scale of the Social Media Footprint</SectionHeading>
      <Paragraph>
        The company maintains three social media accounts for each of the 87
        documented sites: one on Facebook, one on Instagram, and one on YouTube.
      </Paragraph>

      <DataTable
        headers={["Metric", "Count"]}
        align={["left", "right"]}
        rows={[
          { cells: ["Documented sites", "87"] },
          { cells: ["Platforms per site", "3"] },
          {
            cells: ["Total active social media accounts", "261"],
            isViolation: true,
          },
          { cells: ["Social media coordinators", "2"] },
          { cells: ["Video editors", "2"] },
          {
            cells: ["Accounts per team member", "~65"],
            isViolation: true,
          },
        ]}
      />

      <MiniHeading>The Resource Equation</MiniHeading>
      <Paragraph>
        Managing a single brand&apos;s social media presence across three
        platforms with a team of four is a standard workload. Managing 261
        accounts with the same team is a fundamentally different task. The time
        available per account per day, measured in minutes rather than hours,
        leaves no operational space for the activities that drive engagement on
        modern social platforms: community interaction, audience-specific content
        planning, platform-native formatting, and iterative creative
        development.
      </Paragraph>
      <Paragraph>
        The constraint is not the team&apos;s capability. It is the mathematical
        relationship between the number of accounts and the number of people
        available to operate them.
      </Paragraph>

      <SectionHeading>
        9.3 Content Production for Social Channels
      </SectionHeading>
      <Paragraph>
        The video content published across these 261 accounts follows the same
        automated production model documented for the web content in Chapter 5.
        The workflow relies on AI video generation tools to produce visual
        assets, without original company footage, field documentation, or
        authentic business imagery feeding into the process.
      </Paragraph>

      <MiniHeading>What the Automated Pipeline Produces</MiniHeading>
      <Paragraph>
        The resulting videos consist of stock or AI-generated visuals paired with
        AI-generated narration or text overlays. The content covers generic
        service topics, repeating surface-level information available across
        thousands of similar videos on the same platforms. No original on-site
        footage, no before-and-after documentation from actual jobs, and no
        subject-matter commentary from the company&apos;s technicians enter the
        production pipeline.
      </Paragraph>

      <MiniHeading>What It Does Not Produce</MiniHeading>
      <Paragraph>
        Authentic social media content in a service business draws its value from
        the same qualities Google&apos;s guidance identifies for web content:
        first-hand experience, specific expertise, and information a viewer
        cannot find elsewhere. For a cleaning and restoration company, this means
        real job-site footage, technician explanations of specific challenges,
        documentation of actual results, and regional context that connects the
        content to the communities the business serves.
      </Paragraph>
      <Paragraph>
        The automated pipeline produces none of these. The output is structurally
        identical to what any competitor could generate with the same tools and
        the same prompts, published across 261 accounts rather than concentrated
        in a single brand presence.
      </Paragraph>

      <SectionHeading>9.4 Platform Originality Policies</SectionHeading>
      <Paragraph>
        Both Instagram and YouTube have published explicit policies on content
        originality, and both have strengthened enforcement throughout 2025 and
        2026. The company&apos;s current social media output sits squarely
        within the patterns these policies are designed to limit.
      </Paragraph>

      <MiniHeading>Instagram</MiniHeading>
      <Paragraph>
        Instagram&apos;s original content guidelines, updated in 2026, state
        that accounts which primarily post unoriginal content will no longer
        appear in the platform&apos;s recommendation surfaces. This applies
        across Reels, photos, and carousel posts.
      </Paragraph>
      <Paragraph>
        The platform defines original content as material created by the account
        holder or reflecting a distinct creative perspective. Accounts that
        repeatedly post content without meaningful transformation are excluded
        from recommendations to non-followers for a rolling 30-day period.
      </Paragraph>

      <CitationCard
        quote="If your account primarily posts unoriginal reels, photos, or carousels you didn't create or edit in a material way, your account may not be seen in recommendations to new audiences."
        sourceLabel="Instagram / Meta, Original Content Guidelines"
        sourceUrl="https://creators.instagram.com/original-content-guidelines"
      />

      <Paragraph>
        For the documented network, this policy means that AI-generated videos
        published identically or near-identically across dozens of accounts are
        exactly the type of content Instagram&apos;s recommendation system is
        designed to suppress.
      </Paragraph>

      <MiniHeading>YouTube</MiniHeading>
      <Paragraph>
        YouTube&apos;s spam policy explicitly names the pattern of using
        automated tools to produce high volumes of similar content with minimal
        variation as a policy violation. The platform&apos;s 2025 monetization
        update further tightened enforcement against mass-produced and
        repetitive content.
      </Paragraph>

      <CitationCard
        quote="Using automated tools or AI to churn out high volumes of similar content with minimal changes."
        sourceLabel="YouTube, Spam, Deceptive Practices, and Scams Policies"
        sourceUrl="https://support.google.com/youtube/answer/2801973"
      />

      <Paragraph>
        The policy targets exactly the production model the documented network
        uses for its video content: automated generation applied at scale,
        without original input, across multiple channels.
      </Paragraph>

      <SectionHeading>9.5 Brand Fragmentation</SectionHeading>
      <Paragraph>
        The structural choice to operate 261 separate accounts rather than a
        consolidated brand presence creates an additional problem that compounds
        the content quality issue: the company has no recognizable social media
        identity.
      </Paragraph>

      <MiniHeading>The Visibility Problem</MiniHeading>
      <Paragraph>
        Each of the 261 accounts operates independently, building its own
        minimal follower base, its own engagement history, and its own
        algorithmic profile. No single account accumulates the audience, the
        engagement signals, or the content history that platform algorithms use
        to determine which accounts deserve recommendation to new audiences.
      </Paragraph>

      <ContrastCards
        figureNumber="9.1"
        title="Fragmented Accounts vs. Consolidated Brand Presence"
        leftLabel="CURRENT MODEL: 261 FRAGMENTED ACCOUNTS"
        leftBody="Each account builds its own minimal follower base independently. Engagement history is fragmented across 261 profiles. No single account earns platform recommendation. The company's 30-year reputation is invisible online."
        rightLabel="CONSOLIDATED MODEL: ONE BRAND PER PLATFORM"
        rightBody="One Facebook page, one Instagram, one YouTube channel. All engagement concentrates into a single entity. Platform authority builds through consistent activity. One identity carries the full real-world reputation."
      />

      <MiniHeading>The Trust Gap</MiniHeading>
      <Paragraph>
        For a prospective customer who encounters one of the 261 accounts, there
        is no parent brand to recognize, no established reputation to verify, and
        no accumulated body of content to evaluate. The account looks like one of
        thousands of generic local service profiles, indistinguishable from
        competitors using the same tools.
      </Paragraph>
      <Paragraph>
        This contrasts with the company&apos;s real-world reputation: more than
        three decades of service delivery across the Northeast. The social media
        structure does not reflect or communicate that reputation; it fragments
        it across 261 disconnected accounts, each too thinly resourced to build
        the kind of presence that would convey the business&apos;s actual
        standing.
      </Paragraph>

      <TrustGapInfographic />

      <SectionHeading>9.6 Scope and Confidence of These Findings</SectionHeading>
      <Paragraph>
        The number of social media accounts (261), the team size (two
        coordinators and two video editors), and the use of AI video generation
        tools are directly observable in the company&apos;s documented
        operations.
      </Paragraph>
      <Paragraph>
        Instagram&apos;s original content guidelines and YouTube&apos;s spam
        policy are cited from each platform&apos;s own published documentation.
      </Paragraph>
      <Paragraph>
        The observation that 261 accounts managed by four people cannot receive
        the individual attention required for platform-native, audience-specific
        content follows from the resource ratio and is not a projection about
        the team&apos;s effort or capability.
      </Paragraph>

      <SectionHeading>9.7 Summary of Findings</SectionHeading>
      <BulletList
        items={[
          "The company operates 261 social media accounts (87 sites \u00d7 3 platforms), managed by a team of four, a ratio of approximately 65 accounts per team member.",
          "Video content is produced through AI generation tools without original company footage, field documentation, or technician input, producing output structurally identical to what any competitor could generate with the same tools.",
          "Instagram\u2019s updated original content guidelines suppress accounts that primarily post unoriginal content from recommendation surfaces, and YouTube\u2019s spam policy explicitly names automated mass-production of similar content as a violation.",
          "The 261-account structure fragments the company\u2019s social media identity rather than concentrating it, preventing any single account from building the engagement history, follower base, or algorithmic authority that platform recommendation systems reward.",
          "The company\u2019s three-decade real-world reputation is not reflected in or communicated through its social media presence.",
        ]}
      />
      <Paragraph>
        The factors examined in Chapters 3 through 9 concern the external-facing
        digital presence: web infrastructure, content, architecture, social
        channels, and the SEO framework. The next chapter examines the internal
        factors that sustain these patterns: the allocation of operational
        resources and the capacity of the team responsible for managing the
        portfolio.
      </Paragraph>
    </main>
  );
}
