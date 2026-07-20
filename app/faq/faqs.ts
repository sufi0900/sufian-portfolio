// faqs.ts

export interface FAQItem {
  cat: string;
  question: string;
  answer: string;
}

export const categoriesData = [
  { id: "all", label: "All", iconName: "Search" },
  { id: "identity", label: "Identity & Role", iconName: "Layers" },
  { id: "technical", label: "Technical", iconName: "Cpu" },
  { id: "lionxe", label: "LIONXE™", iconName: "Shield" },
  { id: "career", label: "Career & Gulf", iconName: "Globe2" },
  { id: "engagement", label: "Working Together", iconName: "Briefcase" },
];

export const faqsData: FAQItem[] = [
  // ==========================================
  // IDENTITY & ROLE
  // ==========================================
  {
    cat: "identity",
    question: "Who is Sufian Mustafa?",
    answer: "Sufian Mustafa is an AI-Augmented Web Systems Builder and Growth Systems Architect holding a BCS and an MSc in Computer Science from Abdul Wali Khan University Mardan (AWKUM). He specializes in building robust web architectures, technical search engines, and advanced optimization workflows. He is the solo founder of DoItWithAI.tools, the creator of the proprietary LIONXE™ quality framework, and a digital systems auditor who has stress-tested large-scale enterprise footprints. His work focuses on building digital ecosystems that survive search algorithm shifts and compound long-term organic authority."
  },
  {
    cat: "identity",
    question: "What is a Growth Systems Architect?",
    answer: "A Growth Systems Architect is a multi-disciplinary practitioner who designs and builds digital infrastructure where web engineering, technical SEO, structured content layout, and AI automation work as a single unified system. Instead of operating in isolated silos—where developers only write code and marketers only write keywords—a Growth Systems Architect ensures that server-side configurations, custom schema networks, programmatic pipelines, and topical cluster meshes align perfectly to secure organic visibility and AI search engine citations."
  },
  {
    cat: "identity",
    question: "Why doesn't Sufian Mustafa describe himself as a traditional Full-Stack Developer?",
    answer: "Traditional full-stack development typically centers on unaided, line-by-line manual code generation for isolated application logic. Sufian operates as an AI-augmented systems builder. Having spent years mastering the manual foundations—advancing from HTML, CSS, and core JavaScript to React, the MERN stack, and Next.js—he uses generative AI to accelerate structural execution and multi-thread production. His primary value lies in strategic architectural design, data modeling via Headless CMS (like Sanity), programmatic SEO deployment, and system integrity rather than basic manual line coding."
  },
  {
    cat: "identity",
    question: "What are the three platforms within Sufian Mustafa's ecosystem?",
    answer: "The ecosystem consists of three production nodes that cross-verify his capabilities: DoItWithAI.tools (a live authority platform focusing on generative search workflows with 8,000+ word deep-dive articles and comprehensive multi-schema injections), the LIONXE framework (a dedicated standard documented at lionxeframework.com outlining his digital audit doctrines), and sufianmustafa.com (this central portfolio and authority hub connecting his engineering proofs, live systems, and professional timeline)."
  },
  {
    cat: "identity",
    question: "What is Do It With AI Tools?",
    answer: "DoItWithAI.tools is a live, functional digital platform founded and engineered by Sufian Mustafa. It serves as an active production laboratory for technical SEO, Generative Engine Optimization (GEO), and Answer Engine Optimization (AEO). The site features highly comprehensive guides averaging over 8,000 words of deeply interlinked topic clusters and utilizes 7+ active JSON-LD schema layers, serving as real-world proof of his ability to design, build, optimize, and scale an organic authority network from scratch."
  },

  // ==========================================
  // THE LIONXE FRAMEWORK
  // ==========================================
  {
    cat: "lionxe",
    question: "What is the LIONXE® Framework?",
    answer: "The LIONXE™ Framework is a proprietary four-gate digital quality standard engineered by Sufian Mustafa to evaluate whether an online ecosystem is built to survive long-term market volatility and search engine updates. Comprising four binary evaluation gates—Logic & Longevity (L), Internal Optimization (IO), Non-Negotiable Integrity (N), and Exceptional Execution (XE)—the framework dictates that if an asset fails a single check, the entire audit halts. It shifts digital evaluation from surface-level metrics to vertical architecture resilience."
  },
  {
    cat: "lionxe",
    question: "How does the LIONXE® Framework evaluate digital assets?",
    answer: "The framework treats auditing as a sequential pipeline. First, Logic & Longevity checks if the technical foundation is future-proof and free from volatile quick-fixes. Second, Internal Optimization ensures every codebase, indexation path, and data junction runs flawlessly, adhering to the rule that total ecosystem value is capped by its weakest internal layer. Third, Non-Negotiable Integrity verifies clean data compliance and quality standards even at the cost of short-term conversions. Finally, Exceptional Execution tests if the asset possesses a distinct competitive advantage that cannot be automated or duplicated by cheap AI commodities."
  },
  {
    cat: "lionxe",
    question: "Why was the LIONXE® Framework created?",
    answer: "It was forged during an extensive enterprise audit of a massive US corporate carpet cleaning network encompassing 87 websites and over 226,200 URLs. Standard SEO tools and generic checklists failed to diagnose hidden structural fragmentation, fractured branding (which included 261 isolated social media accounts), and code inconsistencies across the network. Sufian engineered LIONXE™ to introduce a vertical, multi-layered auditing logic that assesses architectural debt, system compliance, and content authenticity simultaneously."
  },
  {
    cat: "lionxe",
    question: "How does Sufian Mustafa decide whether a digital strategy is worth pursuing?",
    answer: "Every potential digital campaign, feature roll-out, or technical architecture plan is filtered through the governing laws of the LIONXE™ principles. If a strategy depends on temporary, volatile search hacks, it violates the 'Post-Flood Collapse Rule' and is abandoned. If it optimizes one area while leaving structural flaws elsewhere, it fails the 'Weakest Link Axiom.' This rigorous filtering mechanism ensures that capital and engineering hours are only invested in scalable systems designed for long-term compounding returns."
  },

  // ==========================================
  // TECHNICAL EXPERTISE
  // ==========================================
  {
    cat: "technical",
    question: "What makes Sufian Mustafa's approach different from traditional SEO?",
    answer: "Traditional SEO often relies on superficial tracking, isolated keyword stuffing, and third-party backlink metrics. Sufian treats digital visibility as a software engineering problem. He constructs semantic pillar-cluster content architectures integrated with highly complex JSON-LD structured schemas and deploys them on high-performance frameworks like Next.js (App Router). This positions digital assets for GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization), ensuring content is structured perfectly for indexing by AI crawlers like ChatGPT, Gemini, and Perplexity while maintaining traditional Google rankings."
  },
  {
    cat: "technical",
    question: "How does Sufian Mustafa research complex digital ecosystems?",
    answer: "His research process uses an evidence-driven, cross-checked systems mapping workflow. Instead of relying on surface-level automated scoring tools, he reverse-engineers the target codebase, extracts complete URL trees, maps internal link distribution, inspects headless API nodes, and tests content against E-E-A-T guidelines. This empirical approach ensures that every optimization strategy is backed by verifiable data and structural proof—a methodology demonstrated in his 15-chapter corporate enterprise research report."
  },
  {
    cat: "technical",
    question: "How does AI fit into Sufian Mustafa's workflow?",
    answer: "AI is utilized exclusively as an operational multiplier and speed accelerator, never as a replacement for strategic thinking or core engineering understanding. Because Sufian spent years building web systems manually, he possesses the architectural judgment required to design complex prompt structures, debug automated script outputs, and manage programmatic content pipelines safely. AI handles repetitive script layouts and initial layout structures, while human review ensures that the final product maintains maximum technical precision, compliance, and uniqueness."
  },
  {
    cat: "technical",
    question: "What technologies and platforms does Sufian Mustafa specialize in?",
    answer: "His primary modern tech stack includes Next.js 14/15 (App Router utilizing Server-Side Rendering and Incremental Static Regeneration), React, Tailwind CSS, and Sanity CMS for managing highly structured content. On the backend and data layers, he utilizes Node.js, RESTful/GraphQL API endpoints, and advanced JSON-LD structured data mapping. Deployments are managed via Vercel edge networks, using modern Git workflows and AI-assisted development pipelines built on a robust foundation of core web languages."
  },

  // ==========================================
  // CAREER & GULF
  // ==========================================
  {
    cat: "career",
    question: "Why is Sufian Mustafa focused on the Gulf region?",
    answer: "The UAE, Dubai, and the broader GCC represent one of the world's fastest-growing, forward-thinking technology ecosystems, heavily investing in digital transformation, national AI strategies, and elite enterprise infrastructure. Sufian's unified skillset—combining Next.js engineering with high-level technical SEO and data quality systems—is designed to create maximum value in competitive, high-growth corporate markets. His target is long-term contribution to enterprise growth in the region, backed by fully attested documents (HEC, MOFA, UAE Embassy)."
  },
  {
    cat: "career",
    question: "What is Sufian Mustafa building next?",
    answer: "Sufian is focused on expanding the LIONXE™ auditing framework into an automated programmatic engine that can scan web systems for architectural debt, compliance gaps, and generative search visibility. Concurrently, he is building out advanced GEO tracking methodologies within the DoItWithAI.tools ecosystem to benchmark how modern AI search models cite corporate digital assets, keeping his production workflows ahead of search technology shifts."
  },

  // ==========================================
  // WORKING TOGETHER / ENGAGEMENT
  // ==========================================
  {
    cat: "engagement",
    question: "What type of organizations align best with Sufian Mustafa's expertise?",
    answer: "He aligns best with high-growth technology startups, forward-thinking digital agencies, enterprise-scale service brands, and corporate teams looking to integrate advanced web architectures with powerful organic search strategies. Organizations that value scalable systems, rigorous quality control frameworks (like LIONXE™), custom Headless CMS configurations, and AI-driven workflow transformation will gain the highest leverage from his intersectional capabilities."
  }
];