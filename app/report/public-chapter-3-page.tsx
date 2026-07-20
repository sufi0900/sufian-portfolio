// app/report/chapter-3/page.tsx
//
// force-dynamic: without this, Next.js may statically render this page once
// at build time and cache it, which means the Screenshot component's
// filesystem check would only ever run once and wouldn't notice new images
// you drop into /public later during local development. Forcing dynamic
// rendering makes every request re-check the filesystem, so adding a
// screenshot and reloading the page is enough, no rebuild required.
export const dynamic = "force-dynamic";

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
import { Screenshot } from "@/components/report/Screenshot";
import { InlineLink } from "@/components/report/InlineLink";
import { MultiplicationChainDiagram } from "@/components/report/MultiplicationChainDiagram";
import { ScaleProjectionChart } from "@/components/report/ScaleProjectionChart";
import { DownloadPdfButton } from "@/components/report/DownloadPdfButton";

export default function PublicChapter3Page() {
  return (
    <main className="report-shell">
      <DownloadPdfButton
        slug="portfolio-chapter-3"
        label="Chapter 3: The Infrastructure of the Documented Network"
      />

      <ChapterOpener
        chapterNumber={3}
        title="The Infrastructure of the Documented Network"
        overview="This chapter documents the construction of the company's website network, the resulting URL volume across the documented 87 sites, the search index and crawl signals associated with that volume, and how the underlying construction pattern aligns with Google's published infrastructure and content policies."
      />

      {/* ═══════════════════════════════════════════════════════════
          3.1  SCOPE OF THIS CHAPTER
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>3.1 Scope of This Chapter</SectionHeading>

      <Paragraph>
        This chapter examines the structure of the company&apos;s documented
        website network and establishes how that structure is read by search
        engines. The findings concern the network&apos;s construction and scale,
        based on the internal site inventory provided for this audit.
      </Paragraph>
      <Paragraph>
        The chapters that follow examine internal factors: content quality,
        design, technical performance, and team capacity. Each of those is
        evaluated against the foundation established here, since the structure
        and scale of the network shape how every other factor performs across
        the portfolio.
      </Paragraph>
      <Paragraph>
        The methodology described in Chapter 2 applies throughout what follows.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          3.2  PAGE STRUCTURE AND URL GENERATION
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>3.2 Page Structure and URL Generation</SectionHeading>

      <MiniHeading>An Example From the Documented Network</MiniHeading>
      <Paragraph>
        The clearest way to see this pattern is to walk through it on one real
        site from the documented network:{" "}
        <InlineLink href="https://[location]cleaning.example.com">
          [location]cleaning.example.com
        </InlineLink>
        .
      </Paragraph>

      <Screenshot
        src="/report-assets/chapter-3/brooklyn-homepage.png"
        alt="Homepage of [location]cleaning.example.com"
        caption="Homepage of [location]cleaning.example.com"
      />

      <Paragraph>
        On the homepage, a{" "}
        <InlineLink href="https://www.[location]cleaning.example.com/brooklyn/service-area">
          service-area list
        </InlineLink>{" "}
        runs alphabetically from A to Z, covering each neighborhood the site
        targets.
      </Paragraph>

      <Screenshot
        src="/report-assets/chapter-3/service-area-list.png"
        alt="A-to-Z service area list"
        caption="The A-to-Z service area list on the site"
      />

      <Paragraph>
        Clicking an area from that list, say{" "}
        <InlineLink href="https://www.[location]cleaning.example.com/ocean-hill">
          Ocean Hill
        </InlineLink>
        , changes the URL to a dedicated address for that neighborhood. What
        changes on the page itself is far narrower than what a dedicated page
        implies. The homepage content stays exactly as written, with only the
        neighborhood name swapped into it.
      </Paragraph>
      <Paragraph>
        If the original line reads &ldquo;Living in Brooklyn means your carpets
        work tirelessly,&rdquo; the Ocean Hill version reads &ldquo;Living in
        Ocean Hill means your carpets work tirelessly.&rdquo; Clicking
        Kensington instead produces &ldquo;Living in Kensington means your
        carpets work tirelessly.&rdquo;
      </Paragraph>
      <Paragraph>
        This same substitution runs across all 16 service pages, the blog
        posts, and the standard pages including contact and FAQ. Every page
        keeps its original content. Only the area name moves.
      </Paragraph>

      <Screenshot
        src="/report-assets/chapter-3/ocean-hill-page.png"
        alt="Live Ocean Hill page showing swapped content"
        caption="The live Ocean Hill page showing the swapped content in place"
      />

      <MiniHeading>Building the Page Count, Step by Step</MiniHeading>
      <DataTable
        headers={["Step", "What It Covers", "Count"]}
        align={["left", "left", "right"]}
        rows={[
          { cells: ["Service pages", "16 confirmed service topics", "16"] },
          { cells: ["Standard pages", "Privacy, terms, home, offers", "4"] },
          { cells: ["Blog posts", "Approximately 5 per site", "5"] },
          { cells: ["Base pages per site", "", "25"], isTotal: true },
          {
            cells: [
              "Service areas per site",
              "Clickable neighborhoods, A to Z",
              "104",
            ],
          },
          {
            cells: [
              "URLs generated per site",
              "25 base pages × 104 areas",
              "2,600",
            ],
            isTotal: true,
          },
        ]}
      />
      <Paragraph>
        The number of service areas varies somewhat from site to site. The
        figure of 104 is used here as the average observed across the
        documented network, not as a fixed count for every individual site.
      </Paragraph>

      <MiniHeading>Multiplying Across the Network</MiniHeading>
      <Paragraph>
        A single site producing approximately 2,600 near-duplicate URLs would
        already be a significant finding. The documented network does not
        contain one site. It contains{" "}
        <InlineLink href="#">
          87
        </InlineLink>
        , and the same construction applies to every one of them.
      </Paragraph>

      <Screenshot
        src="/report-assets/chapter-3/site-inventory-spreadsheet.png"
        alt="Internal site inventory spreadsheet"
        caption="Internal site inventory spreadsheet, master list of the 87 documented sites"
      />

      <DataTable
        headers={["Step", "Calculation", "Result"]}
        align={["left", "left", "right"]}
        rows={[
          { cells: ["URLs per site", "25 pages × 104 areas", "2,600"] },
          {
            cells: [
              "Total URLs across the documented network",
              "2,600 × 87 sites",
              "226,200",
            ],
            isViolation: true,
          },
        ]}
      />

      <MultiplicationChainDiagram
        figureNumber="3.1"
        title="From Base Pages to Network-Wide URL Volume"
      />

      {/* ═══════════════════════════════════════════════════════════
          3.3  SITEMAP SUBMISSION AND SEARCH INDEX STATUS
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        3.3 Sitemap Submission and Search Index Status
      </SectionHeading>

      <Paragraph>
        The figures above describe what the construction pattern generates. Two
        further pieces of evidence confirm this volume is not theoretical: it
        was created through a repeatable construction process and submitted to
        Google in stages, and the search index reflects exactly the partial
        state that staged submission would produce.
      </Paragraph>

      <MiniHeading>The Sitemap</MiniHeading>
      <Paragraph>
        Sites are brought into the documented network in stages, not all at
        once. As each site reaches this stage, an XML sitemap is generated
        covering the full set of dynamically created service-area URLs for that
        site, calculated using the same method shown in section 3.2, and
        submitted to Google for crawling.
      </Paragraph>
      <Paragraph>
        As of this audit, 34 of the 87 documented sites have a sitemap of this
        kind submitted, with the remaining 53 sites pending in the same
        rotation. The{" "}
        <InlineLink href="https://arearugcleanerbrooklyn.com/sitemap.xml">
          sitemap for one such site
        </InlineLink>
        , a second property within the documented network, shows this structure
        directly, with each location-specific page listed as its own indexable
        URL.
      </Paragraph>

      <Screenshot
        src="/report-assets/chapter-3/sitemap-xml.png"
        alt="XML sitemap from a second documented site"
        caption="XML sitemap from a second documented site, listing dynamically generated service-area URLs"
      />

      <Paragraph>
        The sitemap reflects the same construction described in section 3.2.
        Each location-specific page generated by the swap pattern is listed as
        its own indexable URL, submitted to Google as a complete batch rather
        than added individually over time.
      </Paragraph>

      <MiniHeading>Search Index Status Across the Network</MiniHeading>
      <Paragraph>
        Submitting a sitemap does not guarantee that every URL in it is
        indexed. Checking the documented network directly, using a site:
        search in Google for individual pages, shows a result consistent with
        the staged rollout described above.
      </Paragraph>
      <BulletList
        items={[
          "For the 34 sites with a submitted sitemap, the homepage is indexed and service-area pages show variable indexing, some indexed and appearing in search results, others currently excluded.",
          "For the remaining 53 sites, the homepage is indexed, but service-area pages are largely not yet indexed, consistent with no sitemap having been submitted for them at this stage.",
        ]}
      />

      <Screenshot
        src="/report-assets/chapter-3/site-search-index.png"
        alt="Google site: search result"
        caption="A Google search results page using a site: search showing an indexed service-area URL from the network"
      />

      <Paragraph>
        Google&apos;s{" "}
        <InlineLink href="https://developers.google.com/search/help/crawling-index-faq">
          Search Console documentation
        </InlineLink>{" "}
        states directly that submitting a sitemap helps Google discover pages
        but does not guarantee they will be indexed.
      </Paragraph>

      <CitationCard
        quote="Keep in mind that while a sitemap file can help us learn about your site, it does not guarantee indexing or increase your site's ranking."
        sourceLabel="Google Search Central, Crawling and Indexing FAQ"
        sourceUrl="https://developers.google.com/search/help/crawling-index-faq"
      />

      <Paragraph>
        Some URLs are deliberately excluded, commonly because they are
        duplicates or do not contain meaningful standalone information. Pages
        in this state are categorized as crawled then excluded, or discovered
        but not yet crawled, with duplicate or low-value content named as a
        common cause in both cases.
      </Paragraph>
      <Paragraph>
        The partial indexing observed across the 34 sites already submitted is
        consistent with this exact mechanism, applied at the scale of hundreds
        of thousands of near-identical, location-swapped pages, before the
        remaining 53 sites have even reached that stage.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          3.4  SHARED INFRASTRUCTURE AND GOOGLE'S DETECTION SYSTEMS
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        3.4 Shared Infrastructure and Google&apos;s Detection Systems
      </SectionHeading>

      <MiniHeading>The Shared Infrastructure Footprint</MiniHeading>
      <Paragraph>
        This volume of near-identical content does not exist in isolation. The
        network carries two layers of shared signal.
      </Paragraph>
      <Paragraph>The shared infrastructure:</Paragraph>
      <BulletList
        items={[
          "Shared hosting infrastructure across all 87 sites",
          "A single Google Search Console account managing the entire portfolio",
          "The same content management system across every site",
          "The same underlying code base across every site",
        ]}
      />
      <Paragraph>The repeated content elements:</Paragraph>
      <BulletList
        items={[
          "The same claim about years of experience, appearing word for word across multiple sites",
          "The same discount offer, appearing across multiple sites",
          "Identical service-page structure, site to site",
          "Identical blog pattern, site to site",
          "Identical navigation bar, site to site",
        ]}
      />
      <Paragraph>
        It is worth being precise about what is and is not the problem here.
        Operating multiple sites from shared hosting infrastructure is
        completely normal and fully permitted. Large organizations routinely
        run several sites from one infrastructure, for different niches
        entirely, or even for the same niche targeting different areas,
        provided each site offers genuinely distinct, high-quality content for
        its specific audience.
      </Paragraph>
      <Paragraph>
        Google&apos;s systems are built to tell the difference between that
        legitimate pattern and a different one: many near-identical sites
        sharing every piece of infrastructure, competing against each other for
        the same keywords, built from thin repeated content. The documented
        network matches the second pattern, not the first.
      </Paragraph>

      <MiniHeading>SpamBrain and Infrastructure Pattern Detection</MiniHeading>
      <Paragraph>
        SpamBrain is Google&apos;s AI-based spam-prevention system, designed to
        identify spam patterns at scale. It is not based on a fixed checklist.
        It is built to recognize patterns, including networks of sites sharing
        infrastructure and templated content.
      </Paragraph>

      <CitationCard
        quote="SpamBrain is our AI-based spam-prevention system. From time-to-time, we improve that system to make it better at spotting spam and to help ensure it catches new types of spam."
        sourceLabel="Google Search Central, Search Spam Updates and Your Site"
        sourceUrl="https://developers.google.com/search/docs/appearance/spam-updates"
      />

      <Paragraph>
        This capability to detect shared infrastructure patterns is directly
        relevant to the network documented in this audit.
      </Paragraph>

      <MiniHeading>Doorway Pages in Google&apos;s Spam Policies</MiniHeading>
      <Paragraph>
        Google&apos;s{" "}
        <InlineLink href="https://developers.google.com/search/docs/essentials/spam-policies">
          published spam policies
        </InlineLink>{" "}
        describe two patterns of doorway abuse relevant here: networks of
        multiple websites with only slight variation, built to maximize
        footprint, and multiple pages or sites targeted at specific regions or
        cities that funnel toward the same outcome.
      </Paragraph>
      <Paragraph>
        The characteristics observed throughout the documented 87-site network,
        shared infrastructure, shared templates, and location-based variation,
        closely align with several patterns described within this published
        guidance.
      </Paragraph>

      <CitationCard
        quote="Having multiple websites with slight variations to the URL and home page to maximize their reach for any specific query. Having multiple domain names or pages targeted at specific regions or cities that funnel users to one page."
        sourceLabel="Google Search Central, Spam Policies for Google Web Search"
        sourceUrl="https://developers.google.com/search/docs/essentials/spam-policies"
      />

      <MiniHeading>Crawl Budget Across the Network</MiniHeading>
      <Paragraph>
        Every website operates under what Google calls a{" "}
        <InlineLink href="https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget">
          crawl budget
        </InlineLink>
        , the amount of time and resources Google allocates to crawling that
        site.
      </Paragraph>
      <Paragraph>
        When Google&apos;s crawler processes a page on one site and then
        encounters the same structure, wording, and layout on the next site
        with only the location changed, it is not evaluating 87 distinct
        sources of information. It is processing the same underlying content
        repeatedly across the network.
      </Paragraph>
      <Paragraph>
        Google&apos;s guidance indicates that wasted crawl activity of this kind
        can lead to reduced crawl frequency over time, which slows how quickly
        new content on the site is discovered and evaluated.
      </Paragraph>

      <CitationCard
        quote="If many of these URLs are duplicates, or you don't want them crawled for some other reason (removed, unimportant, and so on), this wastes a lot of Google crawling time on your site."
        sourceLabel="Google Search Central, Crawl Budget Management for Large Sites"
        sourceUrl="https://developers.google.com/search/docs/crawling-indexing/large-site-managing-crawl-budget"
      />

      {/* ═══════════════════════════════════════════════════════════
          3.5  DOMAIN PORTFOLIO SCALE AND URL PROJECTION
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        3.5 Domain Portfolio Scale and URL Projection
      </SectionHeading>

      <Paragraph>
        The 87 sites examined above are not the full extent of the
        company&apos;s domain holdings. Research conducted during this audit
        indicates the existence of a substantially larger portfolio, in the
        range of 2,000 or more domains.
      </Paragraph>
      <Paragraph>
        Applying the same construction ratio already established to this
        larger portfolio projects a very different number.
      </Paragraph>

      <DataTable
        headers={["Metric", "Documented (87 sites)", "Projected (2,000 domains)"]}
        align={["left", "right", "right"]}
        rows={[
          { cells: ["URLs per site", "2,600", "2,600"] },
          {
            cells: ["Total URLs", "226,200", "5,200,000+"],
            isTotal: true,
          },
        ]}
        flagText="5,200,000+"
      />

      <Paragraph>
        This projected total is not a count of pages independently confirmed
        to exist today. It is what the documented construction pattern produces
        if applied consistently across the full portfolio, a reasonable
        assumption given that both originate from the same documented strategy,
        though one that remains a projection rather than a directly observed
        fact.
      </Paragraph>
      <Paragraph>
        The sitemap rollout described in section 3.3 is this same pattern
        actively in motion. Each additional site brought into that rotation
        submits the identical construction to Google again, at the same scale
        shown above, before any change is made to the underlying pattern
        itself.
      </Paragraph>
      <Paragraph>
        Continuing the current construction pattern across the remaining
        documented sites, and into the wider portfolio, does not reduce this
        risk. It repeats it at greater scale.
      </Paragraph>

      <ScaleProjectionChart
        figureNumber="3.2"
        title="Documented vs. Projected URL Scale"
      />

      {/* ═══════════════════════════════════════════════════════════
          3.6  STRATEGIC IMPLICATIONS OF PORTFOLIO SCALE
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>
        3.6 Strategic Implications of Portfolio Scale
      </SectionHeading>

      <Paragraph>
        A portfolio of this size raises a separate question from the
        construction pattern itself: what role domain volume plays in search
        visibility, independent of the network&apos;s content. Google&apos;s
        site diversity system is the most direct way to examine that question.
      </Paragraph>

      <MiniHeading>The Site Diversity System</MiniHeading>
      <Paragraph>
        In{" "}
        <InlineLink href="https://developers.google.com/search/docs/appearance/ranking-systems-guide">
          June 2019, Google introduced a site diversity change
        </InlineLink>{" "}
        to its search results. Under this system, Google generally limits how
        many listings from the same domain appear together on the first page of
        results for a given query, and treats subdomains as part of their root
        domain for this purpose.
      </Paragraph>
      <Paragraph>
        This limit only applies once a domain is already competitive for a
        given query. It does not grant a domain ranking strength it does not
        otherwise have, and a portfolio of domains does not multiply visibility
        the way raw domain count alone might suggest.
      </Paragraph>
      <Paragraph>
        Ranking strength comes from a site&apos;s own authority, depth, and
        trust signals, not from domain ownership itself. A network of thin,
        templated, near-identical pages does not gain additional authority
        simply by being split across more domains.
      </Paragraph>
      <Paragraph>
        Each additional domain in the portfolio is, on these findings, one more
        instance of the same underlying content pattern, competing from the
        same limited authority base. Owning more domains increases the number
        of properties carrying this pattern. It does not increase the ranking
        strength any one of them has earned.
      </Paragraph>
      <Paragraph>
        For context, established competitors in this industry hold strong
        market positions through a single, well-resourced site rather than a
        large domain portfolio.
      </Paragraph>

      <MiniHeading>
        Google&apos;s Guidance on Content Built for Users Rather Than Search
        Engines
      </MiniHeading>
      <Paragraph>
        Google&apos;s published guidance on{" "}
        <InlineLink href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content">
          creating helpful, reliable, people-first content
        </InlineLink>{" "}
        states directly that content created primarily to attract search
        engine visits, rather than primarily to help the people who land on it,
        is not aligned with what its core ranking systems seek to reward. The
        same guidance states that using automation to produce content for the
        primary purpose of manipulating search rankings violates Google&apos;s
        spam policies.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          3.7  SCOPE AND CONFIDENCE OF THESE FINDINGS
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>3.7 Scope and Confidence of These Findings</SectionHeading>

      <Paragraph>
        The math in section 3.2 and the sitemap and indexing evidence in
        section 3.3 concern the documented 87-site network specifically. They
        are based on directly observable infrastructure, submitted sitemaps,
        and search index checks.
      </Paragraph>
      <Paragraph>
        Together with the policy alignment in section 3.4, they establish that
        the network&apos;s characteristics closely match criteria Google has
        publicly stated it evaluates. They do not establish that Google has
        reviewed this specific network and reached a final determination, since
        that determination is made by Google&apos;s systems and is not
        independently observable.
      </Paragraph>
      <Paragraph>
        The 5,200,000 URL figure in section 3.5 is a projection, derived
        directly from the construction ratio documented in the 87-site sample,
        and is presented as such rather than as a confirmed count.
      </Paragraph>
      <Paragraph>
        The site diversity finding and Google&apos;s published content-quality
        guidance in section 3.6 are both based on Google&apos;s own published
        statements and are not projections.
      </Paragraph>

      {/* ═══════════════════════════════════════════════════════════
          3.8  SUMMARY OF FINDINGS
          ═══════════════════════════════════════════════════════════ */}
      <SectionHeading>3.8 Summary of Findings</SectionHeading>

      <BulletList
        items={[
          "The documented 87-site network is built from approximately 25 core pages multiplied across approximately 104 service areas per site, producing approximately 2,600 URLs per site and 226,200 URLs across the documented network.",
          "These URLs follow the same construction pattern throughout, and have been submitted to Google through XML sitemaps in stages, with 34 of the 87 sites submitted as of this audit.",
          "Google\u2019s own indexing decisions show a mixed result consistent with that staged rollout: homepages indexed across the network, service-area pages indexed in some cases and excluded in others for the 34 submitted sites, and largely not yet indexed for the 53 sites still pending. This is consistent with how Google\u2019s documentation describes handling duplicate or low-value content at scale.",
          "The network shares hosting infrastructure, a single management account, and underlying code, detectable signals of common ownership, and its content structure closely aligns with patterns Google\u2019s published policies identify as doorway abuse.",
          "Applied at the same construction ratio, the wider portfolio of approximately 2,000 domains projects to approximately 5,200,000 URLs, presented as a projection rather than a confirmed count.",
          "Google\u2019s site diversity system limits listings per domain once a domain is competitive for a query, and does not grant additional ranking strength to domains that do not otherwise have it.",
        ]}
      />
      <Paragraph>
        The implications of this scale become more significant when considered
        alongside content quality, design, technical performance, and team
        capacity, examined in the chapters that follow.
      </Paragraph>
    </main>
  );
}
