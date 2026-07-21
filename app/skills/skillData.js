// skillData.js
import { Layers, Search, Globe, PenTool, Megaphone } from "lucide-react";

export const ACCENT = "#E3B341";

export const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
export const sk = (name, tier, detail, tags) => ({ id: slug(name), name, tier, detail, tags });


/* ═══ SKILL EVIDENCE — WITH LIVE DOMAIN HUBS HYPERLINKED ═══ */
export const SKILL_EVIDENCE = {
  // 👑 APEX IDENTITY
  "growth-systems-architecture": {
    overview: "Growth Systems Architecture is the elite discipline of analyzing, engineering, and expanding digital platforms as single interconnected ecosystems. Rather than viewing engineering, UI/UX, technical SEO, and copywriting as separate operations, this layer evaluates a company's complete digital footprint through the lens of the LIONXE ™ Framework. I investigate the technical foundation, optimize the present execution layer, and structure clear roadmaps for long-term growth and technical performance immunity.",
    whyMatters: "Most online platforms suffer from severe conversion drops and visibility leaks because developers don't understand crawlability, and marketers don't understand codebase architecture. Approaching an asset as a unified growth system removes this friction entirely.",
    howApplied: "I analyze and design digital infrastructures using the structural lens of the four LIONXE ™ pillars: Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and Exceptional Execution.",
    evidence: (
      <span>
        Proven via the complete zero-to-one brand creation of{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>
        , handling everything from hosting configurations and Next.js data flows to topical mapping and monetization strategy. Further validated by authoring comprehensive Enterprise Research & Diagnostic Reports analyzing complex corporate web assets on{" "}
        <a href="https://sufianmustafa.com" target="_blank" rel="noopener noreferrer">sufianmustafa.com</a>.
      </span>
    ),
    related: ["Brand Ecosystem Design", "The LIONXE ™ Framework", "Digital Ecosystem Auditing"],
    tech: ["Ecosystem Mapping", "System Dependency Analysis", "LIONXE ™ Audit Methodology"],
    philosophy: "I look beyond the surface level of digital assets. True scale is unlocked when codebase engineering, search visibility, and structured content operate as a single synchronized engine."
  },

  // 🌿 BRANCH 1: CORE STRATEGY & FRAMEWORKS
  "systems-thinking-strategy": {
    overview: "The high-level ability to conceptualize, visualize, and orchestrate large-scale digital platforms by identifying hidden data relationships and bottlenecks across frontend, backend, and organic search indexing channels.",
    whyMatters: "Without systemic thinking, adding individual features to an application compounds technical debt and fragments brand authority. Systems strategy ensures that every code optimization expands long-term domain equity.",
    howApplied: "I explicitly blueprint data structures, schema hierarchies, and internal link routing structures inside tools like Sanity CMS before single lines of user interface code are scaffolded.",
    evidence: (
      <span>
        Utilized extensively across my Enterprise Research Reports to break down fragmented networks into clear single-domain consolidation models for corporate leadership, available on{" "}
        <a href="https://sufianmustafa.com" target="_blank" rel="noopener noreferrer">sufianmustafa.com</a>.
      </span>
    ),
    related: ["Growth Systems Architecture", "Digital Ecosystem Auditing"],
    tech: ["Data Topology Planning", "System Dependency Mapping"]
  },
  "the-lionxe-framework": {
    overview: "A proprietary, multi-layered digital quality evaluation standard and diagnostic framework that enforces four strict gates of architectural validation: Long-Term Logic, Internal Optimization, Non-Negotiable Integrity, and Exceptional Execution.",
    whyMatters: "Standard automated website checks miss structural flaws like duplicate content architectures or doorway schemas. LIONXE functions as a strict cascade filter—if an asset fails the Integrity gate, superficial frontend optimization is invalidated.",
    howApplied: "I use this rubric to run multi-layered evaluations on high-volume digital environments, delivering explicit scores across 16 critical structural criteria.",
    evidence: (
      <span>
        Fully developed and systemized via the independent documentation on{" "}
        <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer">LIONXE ™ Framework</a>
        , and applied to audit a sprawled 87-site commercial services network, pinpointing critical footprint risks and doorway page patterns.
      </span>
    ),
    related: ["Digital Ecosystem Auditing", "Technical Search Architecture"],
    tech: ["Quantitative Scoring Engines", "Ecosystem Liability Mapping"]
  },
  "brand-ecosystem-design": {
    overview: "The holistic technical capability to conceptualize, design, host, deploy, and scale a new digital brand property completely from scratch with absolute technical and strategic independence.",
    whyMatters: "Launching a modern web platform requires a founder-level alignment of domain authority rules, hosting reliability, UI/UX aesthetics, and precise monetization schemas.",
    howApplied: "I coordinate niche targeting parameters, design responsive UI layouts, write efficient database queries, and plan long-term search index routing loops.",
    evidence: (
      <span>
        Single-handedly executed for{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>
        , navigating the platform from an abstract concept into a fully functional, highly ranked authority resource built completely onto the parent blueprints of the{" "}
        <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer">LIONXE ™ Standard</a>.
      </span>
    ),
    related: ["Growth Systems Architecture", "Advanced 3-Tier Caching Systems"],
    tech: ["Hosting Optimization", "Revenue Schema Engineering", "Niche Validation Models"]
  },
  "digital-ecosystem-auditing": {
    overview: "Independent structural deep-dives into complex corporate web properties, programmatic content footprints, search indexing barriers, and architectural liabilities.",
    whyMatters: "Enterprises frequently waste capital trying to fix visibility loss with surface-level marketing when the root issue is an unmanageable technical footprint or keyword cannibalization cluster.",
    howApplied: "I trace indexation statuses, extract live data configurations, check hosting infrastructure alignment, and identify configuration vulnerabilities.",
    evidence: (
      <span>
        Successfully diagnosed systemic indexation and spam vulnerabilities across an active network comprising 87 sites and 226,200 near-identical target URLs, using data frameworks detailed on{" "}
        <a href="https://sufianmustafa.com" target="_blank" rel="noopener noreferrer">sufianmustafa.com</a>.
      </span>
    ),
    related: ["The LIONXE ™ Framework", "Technical Search Architecture"],
    tech: ["Google Search Console Modeling", "Network Footprint Analysis", "Root-Cause Diagnostics"]
  },

  // 🌿 BRANCH 2: AI SEARCH & TECH SEO
  "technical-search-architecture": {
    overview: "The complete configuration and structural orchestration of a web platform to maximize indexing health and crawler discovery loops while maintaining zero footprint anomalies.",
    whyMatters: "Crawl efficiency drops drastically under high-latency server environments. I engineer site mechanics so that automated spiders navigate code trees flawlessly, achieving absolute infrastructure immunity.",
    howApplied: "I manage dynamic server-side redirection, build optimized XML sitemaps, audit crawling bandwidth, and eliminate redirection loops or metadata fragmentation.",
    evidence: (
      <span>
        Engineered into the core directory routing pipelines of{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>
        , ensuring all automated dynamic paths maintain perfect technical execution boundaries.
      </span>
    ),
    tags: ["Crawl Budgets", "Indexation Rules", "Server Routing Optimization"]
  },
  "holistic-search-optimization": {
    overview: "An integrated framework that unifies On-Page precision and Off-Page amplification into a single high-impact strategy. My core goal is to engineer an On-Page environment so flawlessly optimized that relying on traditional link building becomes secondary.",
    whyMatters: "Siloed optimization causes keyword friction and link dilution. Combining deep semantic code architectures with calculated external referral signals builds permanent domain trust.",
    howApplied: "I code detailed JSON-LD knowledge graphs, establish clean internal links, map structural headlines, and research high-relevance backlink profiles and platform syndication hooks to scale visibility safely.",
    evidence: (
      <span>
        The architectural structural layout powering{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>
        , striking a balance between machine parsing clarity and clean user conversion signals.
      </span>
    ),
    tags: ["On-Page Dominance", "Off-Page Growth Loops", "JSON-LD Entity Graphs"]
  },
  "topical-intent-blueprinting": {
    overview: "The non-random, deeply calculated planning of a website's entire topical taxonomy and keyword hierarchy to secure absolute dominance in competitive market fields.",
    whyMatters: "Targeting disjointed, flat keyword lists results in massive keyword cannibalization. Scale is achieved only by engineering a comprehensive structural map of user intent.",
    howApplied: "I analyze semantic search landscapes, isolate core industry pillars, map sub-topic clusters, and dictate exact content boundaries before any article lines are scaffolded.",
    evidence: (
      <span>
        Deployed to structure the content architecture of{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>
        , avoiding random configurations by asserting high link structural dominance over focused developer keywords.
      </span>
    ),
    tags: ["Topical Hierarchies", "Cannibalization Auditing", "Intent Mapping"]
  },
  "multi-engine-optimization-aeo-geo": {
    overview: "Advanced structural cross-optimization across every emerging digital discovery engine, running parallel optimization pipelines for AEO (Answer Engine Optimization), GEO (Generative Engine Optimization), SGE (Search Generative Experience), and SXO (Search Experience Optimization).",
    whyMatters: "Traditional search engines are transitioning into zero-click environments. Web assets must be programmatically tailored to satisfy automated scraper bots, LLM retrieval systems, and human decision-makers simultaneously.",
    howApplied: "I implement answer-first typography layouts, absolute semantic graph definitions, bulleted knowledge hooks, and advanced UX data flows to guarantee real citation visibility inside ChatGPT and Perplexity threads.",
    evidence: (
      <span>
        Architected as a core visibility engine within{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>
        , ensuring seamless context delivery for AI scrapers aligned to the strict guidelines of the{" "}
        <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer">LIONXE ™ Standard</a>.
      </span>
    ),
    tags: ["AEO / GEO Parallel Control", "SGE Readiness", "SXO Conversions"]
  },

  // 🌿 BRANCH 3: AI-AUGMENTED WEB ENGINEERING
  "next-js-react-architecture": {
    overview: "Developing fast, scalable, and fully search-optimized frontend user interfaces utilizing modern Next.js React frameworks.",
    whyMatters: "Traditional client-side React apps send empty HTML targets to search crawlers, damaging indexation potential. Next.js App Router structures allow server components to render complete, metadata-rich semantic layers instantly.",
    howApplied: "I construct App Router directory maps, handle React Server Components, deploy Incremental Static Regeneration (ISR), and coordinate dynamic route path layouts.",
    evidence: (
      <span>
        The entire frontend execution engine of{" "}
        <a href="https://sufianmustafa.com" target="_blank" rel="noopener noreferrer">sufianmustafa.com</a>{" "}
        and{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>{" "}
        is engineered using highly responsive Next.js architectures.
      </span>
    ),
    related: ["Advanced 3-Tier Caching Systems", "Pixel-Perfect UI/UX Architecture"],
    tech: ["Next.js App Router", "React Server Components", "ISR Data Loops"]
  },
  "advanced-3-tier-caching-systems": {
    overview: "Designing and configuring a robust, multi-layered data caching network to guarantee exceptional edge speeds and total protection for database systems.",
    whyMatters: "Content-rich directory platforms can crash under sudden traffic spikes if every visitor hits the live database. Client-side caching helps but fails on hard reloads or first-time hits. A multi-tier system eliminates this point of failure.",
    howApplied: "I engineered a 3-tier caching system: Layer 1 is client-side caching via Stale-While-Revalidate concepts (SWR) for instant tab swapping. Layer 2 is server-side memory caching via Redis to store API responses and protect the database. Layer 3 is edge network caching via Cloudflare CDN to serve content instantly across international data hubs.",
    evidence: (
      <span>
        Independently deployed on{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>{" "}
        to protect Sanity CMS GROQ data streams, dropping backend server API latency to near zero.
      </span>
    ),
    related: ["Next.js & React Architecture", "Technical Search Architecture"],
    tech: ["Redis Cluster Config", "Cloudflare Edge Rules", "SWR Client Integration"]
  },
  "pixel-perfect-ui-ux-architecture": {
    overview: "A meticulous full-stack implementation philosophy dedicated to zero layout shifts, absolute responsive precision, and visual aesthetic perfection across all screen resolutions.",
    whyMatters: "A single misaligned pixel or jumpy layout shift damages user trust and breaks Core Web Vitals (CLS) parameters. Interfaces must display complete structural balance.",
    howApplied: "I hand-code clean CSS variables, structure highly responsive layout calculations, remove heavy inline block styles, and debug multi-browser rendering glitches.",
    evidence: (
      <span>
        Built directly into my custom portfolio tree map interface and layout structures on{" "}
        <a href="https://sufianmustafa.com" target="_blank" rel="noopener noreferrer">sufianmustafa.com</a>
        , managing complex canvas tracking mechanics cleanly.
      </span>
    ),
    related: ["Next.js & React Architecture", "AI-Augmented Implementation"]
  },
  "ai-augmented-implementation": {
    overview: "Utilizing advanced artificial intelligence prompting workflows as an extreme velocity multiplier to debug complex code libraries, test data variants, and deploy backend features at elite speeds.",
    whyMatters: "Traditional development can stall for weeks over complex routing errors or deployment bugs. AI-augmented engineering uses deep structural logic to solve integration blocks instantly.",
    howApplied: "I author multi-layered prompt frameworks containing exact system parameters and code logic constraints to guide AI generation, followed by rigorous manual code review.",
    evidence: (
      <span>
        Deployed to systematically construct code logic across both my portfolio site at{" "}
        <a href="https://sufianmustafa.com" target="_blank" rel="noopener noreferrer">sufianmustafa.com</a>{" "}
        and operational modules within the directory files of{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>.
      </span>
    ),
    related: ["Next.js & React Architecture", "AI Graphic Systems"],
    tech: ["Context Tuning", "Logic Prompt Frameworks", "Structural Review Engines"]
  },

  // 🌿 BRANCH 4: STRATEGIC CONTENT SYSTEMS
  "universal-topic-domination": {
    overview: "The exhaustive strategic capacity to enter any industry niche, completely master its core terminology and concepts through intense research, and outline an unassailable data-driven content strategy.",
    whyMatters: "Generic content creation yields shallow, unconvincing output. Establishing domain authority requires an absolute conceptual mastery of a topic before a single word is drafted.",
    howApplied: "I map complex industry frameworks, cross-examine statistical databases, run expert insight extraction loops, and translate raw data into authoritative outlines.",
    evidence: "The structural foundation behind my multi-regional US service network reports, translating complex carpet cleaning compliance rules into enterprise blueprints.",
    tags: ["Niche Research Mastery", "Topical Domination Maps", "Expert Insight Synthesis"]
  },
  "audience-alignment-matrix": {
    overview: "A sophisticated content production framework that designs data structures and syntax layouts to simultaneously clear the filters of search ranking spiders, LLM model scrapers, and highly analytical human decision-makers.",
    whyMatters: "Content written only for humans misses technical reach. Content written only for SEO triggers quality spam blocks. The modern web demands multi-layered alignment formatting.",
    howApplied: "I embed explicit semantic entities for crawler systems, format data blocks for LLM contextual scrapers, and inject high-end business value for human retention.",
    evidence: (
      <span>
        The formatting strategy used to drive all master tool reviews and platform breakdowns across{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>.
      </span>
    ),
    tags: ["Algorithmic Alignment", "LLM Scraper Readiness", "Human Conversion Logic"]
  },
  "cross-disciplinary-content-engineering": {
    overview: "The complete, professional execution of producing comprehensive, high-depth digital copy assets across all corporate and growth requirements.",
    whyMatters: "True growth systems require deep cross-disciplinary flexibility—from authoritative 15-chapter investigative reports down to quick short-form hooks, value-focused email marketing flows, and clear headlines.",
    howApplied: "I allocate multiple days purely to refine title structures, headline hooks, and statement positioning, treating content creation as an act of precision layout engineering.",
    evidence: (
      <span>
        The production behind the multi-thousand word comprehensive tool reviews and industry master guides deployed on{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>.
      </span>
    ),
    tags: ["Long-Form Authority Assets", "Short-Form Hook Engineering", "Conversion Email Copy"]
  },
  "omnichannel-copy-architecture": {
    overview: "The strategic engineering of textual assets tailored specifically for wide distribution nodes, including social media copy, platform-native updates, and audience pipelines.",
    whyMatters: "Copy-pasting flat text across diverse channels destroys audience retention. Every single digital ecosystem requires native formatting that aligns with that channel's specific psychology.",
    howApplied: "I craft platform-specific hooks, write concise video captions, script outreach materials, and design text architectures for Medium, Dev.to, Quora, and Substack deployment channels.",
    evidence: (
      <span>
        Funneled systematically to drive engaged platform click-through loops right back into owned ecosystems at{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>.
      </span>
    ),
    tags: ["Social Caption Architecture", "Syndicated Outreach Scripts", "Platform-Native Hooking"]
  },

  // 🌿 BRANCH 5: OMNICHANNEL BRAND SCALING
  "ai-graphic-systems": {
    overview: "Orchestrating long, detailed structural prompt scripts containing 500 to 700 words to force AI generation engines to deliver precise, on-brand graphic elements.",
    whyMatters: "Simple prompts produce generic, erratic artwork. Directing an AI with precise grid lines, stylistic guidelines, and specific hex values ensures asset design consistency.",
    howApplied: "I write comprehensive text layout rules, set precise aspect ratios, output visual assets, and finalize compositions using Canva Pro templates.",
    evidence: (
      <span>
        Every custom layout graphic, featured banner, and article hero icon across{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>{" "}
        is engineered using this system.
      </span>
    ),
    related: ["AI-Augmented Implementation", "AI Multimedia Production"],
    tech: ["Midjourney Scripting", "Canva Pro Production Layers", "Visual Parameter Optimization"]
  },
  "ai-multimedia-production": {
    overview: "Constructing engaging video scripts from complex article data and utilizing AI generation platforms to deploy high-retention educational multimedia layers.",
    whyMatters: "Modern target demographics engage deeply with short-form media. Converting text assets into rapid video summaries maximizes platform dwelling times and domain authority signals.",
    howApplied: "I outline video scripts, generate accurate scene assets with Canva AI, edit workflows, and deploy content onto social platforms.",
    evidence: "The visual asset loops and short video reviews built to scale outreach pipelines across my digital media footprints.",
    related: ["AI Graphic Systems", "Social Scaling Syndication"],
    tech: ["Canva AI Video Engines", "Script-to-Video Pipelines"]
  },
  "social-scaling-syndication": {
    overview: "Deploying and maintaining highly coordinated syndication architectures across major platforms to drive massive referral user flows back to owned web assets.",
    whyMatters: "Relying on a single acquisition channel introduces platform dependency risk. Spreading native content footprints across multiple hubs builds a highly resilient traffic ecosystem.",
    howApplied: "I establish synchronized presence networks across Pinterest, TikTok, Facebook, Instagram, LinkedIn, Medium, Dev.to, Quora, Reddit, and Substack.",
    evidence: (
      <span>
        Managed to drive high-intent, targeted developer and enthusiast traffic patterns back into my primary platform hubs at{" "}
        <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Do It With AI Tools</a>
        , completely aligned to policies hosted on the main framework profile at{" "}
        <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer">lionxeframework.com</a>.
      </span>
    ),
    related: ["Brand Ecosystem Design", "Audience-Specific Tailoring"]
  },
  "audience-specific-tailoring": {
    overview: "The strategic reformatting of a central content asset's tone, syntax, and presentation layout to naturally match the unique culture of individual communication networks.",
    whyMatters: "Copy-pasting identical links across different networks alienates communities. Content must be natively reformatted to appear organic to the specific platform.",
    howApplied: "I translate structured technical articles into long-form text posts for LinkedIn, quick answers for Quora, developer discussions for Dev.to, and clean newsletters for Substack.",
    evidence: "Executed daily across my syndication matrices to scale the brand authority of my platform properties safely.",
    related: ["Social Scaling Syndication", "Audience-Alignment Matrix"]
  }
};

export const CROWN = [
  sk("Growth Systems Architecture", "core", "The discipline that best represents how I think about building digital products—designing interconnected systems that compound long-term value.", ["System Design", "4-Layer Model", "Ecosystems"]),
];

export const BRANCHES = [
  {
    name: "Core Strategy & Frameworks", color: "#E3B341", tier: "core",
    blurb: "The strategic foundation: Systems design, zero-to-one brand creation, proprietary LIONXE standards, and independent ecosystem diagnostics.",
    skills: [
      sk("Systems Thinking & Strategy", "core", "Designing interconnected digital platforms.", ["Long-Term Architecture", "Data Loops"]),
      sk("The LIONXE ™ Framework", "core", "Proprietary 4-gate evaluation methodology.", ["Audit Standard", "Quality Engine"]),
      sk("Brand Ecosystem Design", "core", "End-to-end brand and platform creation from scratch.", ["Platform Ownership", "Brand Genesis"]),
      sk("Digital Ecosystem Auditing", "expert", "Independent technical diagnostics of complex enterprise setups.", ["Root-Cause Diagnostics", "Risk Mapping"]),
    ],
  },
  {
    name: "AI Search & Tech SEO", color: "#E3B341", tier: "core",
    blurb: "Building visibility frameworks optimized for absolute crawl immunity, holistic on/off-page synchronization, and dynamic multi-engine dominance.",
    skills: [
      sk("Technical SEO & Performance Architecture", "expert", "Crawler discovery optimization and dynamic indexation controls.", ["Crawl Budget", "Server Rules"]),
      sk("Holistic Search Optimization", "expert", "Unifying flawless On-Page entity graphs and strategic Off-Page authority loops.", ["On-Page Dominance", "Off-Page Loops"]),
      sk("Topical Intent Blueprinting", "expert", "Mapping calculated niche taxonomies to eliminate keyword cannibalization.", ["Taxonomies", "Intent Blueprints"]),
      sk("Multi-Engine Optimization (AEO/GEO)", "expert", "Parallel optimization pipelines targeting ChatGPT, Perplexity, SGE, and SXO.", ["AEO / GEO", "SXO Frameworks"]),
    ],
  },
  {
    name: "AI-Augmented Engineering", color: "#C9952C", tier: "expert",
    blurb: "Frontend UI perfectionism and highly complex server-side data pipelines deployed at elite speeds via AI acceleration frameworks.",
    skills: [
      sk("Next.js & React Architecture", "expert", "Component-driven, search-ready frontends.", ["Next.js", "React"]),
      sk("Advanced 3-Tier Caching Systems", "expert", "Engineering low-latency routes: SWR Client-side -> Redis Server-side -> Cloudflare CDN.", ["Redis", "Cloudflare Edge", "SWR"]),
      sk("Pixel-Perfect UI/UX Architecture", "expert", "Flawless responsive coding resulting in zero layout shifts or frontend layout friction.", ["Interface Precision", "Frictionless UX"]),
      sk("AI-Augmented Implementation", "core", "Advanced context prompt chains to build and debug enterprise systems with high efficiency.", ["Logic Debugging", "Prompt Architecture"]),
    ],
  },
  {
    name: "Strategic Content Systems", color: "#C9952C", tier: "expert",
    blurb: "Cross-disciplinary content architectures engineered to dominate any niche, balancing multi-audience copy layouts from audits to funnel assets.",
    skills: [
      sk("Universal Topic Domination", "expert", "Exhaustive research blueprints to master and command any complex niche layout.", ["Niche Mastery", "Topic Research"]),
      sk("Audience Alignment Matrix", "expert", "Syntactically balancing document structures for Google, AI scrapers, and Humans.", ["Algorithmic Alignment", "Conversions"]),
      sk("Cross-Disciplinary Content Engineering", "expert", "Orchestrating high-value text copy across long-form reports, hooks, headlines, and email assets.", ["Content Engineering", "Copy Systems"]),
      sk("Omnichannel Copy Architecture", "expert", "Designing custom hooks and native text formatting across specialized syndication channels.", ["Social Copy", "Outreach Scripts"]),
    ],
  },
  {
    name: "Omnichannel Brand Scaling", color: "#9A8B6E", tier: "proficient",
    blurb: "Massive digital footprint syndication leveraging heavy prompt text scripts, video timeline setups, and audience reformatting.",
    skills: [
      sk("AI Graphic Systems", "working", "Structural prompt engineering for visual assets.", ["Midjourney", "Design"]),
      sk("AI Multimedia Production", "working", "Script-to-scene video generation.", ["Video", "Editing"]),
      sk("Social Scaling Syndication", "working", "Multi-channel traffic routing.", ["Outreach", "Social"]),
      sk("Audience-Native Tailoring", "working", "Platform-specific messaging and reformatting.", ["Tailoring", "Psychology"]),
    ],
  },
];

export const BRANCH_ICONS = {
  "Core Strategy & Frameworks": Layers,
  "AI Search & Tech SEO": Search,
  "AI-Augmented Engineering": Globe,
  "Strategic Content Systems": PenTool,
  "Omnichannel Brand Scaling": Megaphone
};

export const ROOTS = [
  sk("Manual Web Development Foundation", "proficient", "The critical manual bedrock of HTML5, CSS3, core JavaScript, and full-stack MERN engineering that makes safe AI acceleration possible.", ["HTML/CSS/JS", "MERN Baseline"]),
  sk("Academic Systems Logic", "proficient", "Master of Computer Science (MSc) foundation. The logical and analytical algorithmic processing that birthed the digital journey.", ["Algorithms", "Problem Solving"]),
];

export const BG_BOLTS = [
  "M 150 0 L 188 96 L 146 128 L 214 248 L 178 282 L 236 392 M 188 96 L 256 132 M 178 282 L 120 312",
  "M 832 0 L 792 104 L 842 138 L 774 256 L 820 290 L 762 404 M 792 104 L 724 140 M 820 290 L 880 318",
  "M 498 0 L 534 88 L 486 118 L 544 222 L 508 256 L 566 360 M 534 88 L 600 120",
  "M 250 360 L 286 452 L 244 484 L 300 588 L 266 620 L 318 708 M 286 452 L 350 480 M 266 620 L 214 648",
  "M 740 372 L 704 468 L 752 500 L 690 604 L 732 636 L 678 724 M 704 468 L 640 498",
  "M 470 280 L 504 372 L 458 404 L 516 506 L 480 538 L 534 640 M 504 372 L 562 398 M 480 538 L 424 566",
  "M 556 320 L 524 410 L 570 442 L 510 542 L 550 574 L 500 668 M 524 410 L 462 438",
  "M 432 420 L 462 500 L 420 530 L 472 618 L 440 648 L 484 730 M 462 500 L 518 524",
  "M 320 1000 L 356 912 L 314 880 L 372 786 L 336 754 L 392 662 M 356 912 L 422 892 M 336 754 L 280 732",
  "M 700 1000 L 662 908 L 710 876 L 644 780 L 688 748 L 632 660 M 662 908 L 596 888 M 688 748 L 744 726",
  "M 520 1000 L 556 918 L 510 888 L 566 800 L 532 770 L 588 690 M 556 918 L 620 944"
];