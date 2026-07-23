// ─────────────────────────────────────────────────────────────────────────────
// components/pillar/pillarData.ts — All four pillars' content in one data file.
// The unified PillarPageClient renders from this. Each pillar's server page
// imports its slice and passes it as props.
// ─────────────────────────────────────────────────────────────────────────────

import { Brain, Gauge, Shield, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface CriterionData {
  id: string;
  name: string;
  statement: string;
  factors: string[];
  boundary: string;
}

export interface PillarData {
  code: string;
  name: string;
  letter: string;
  tagline: string;
  subtitle: string;
  gateNumber: number;
  icon: LucideIcon;
  governingLaw: string;
  governingLawExplanation: string;
  altitude: string;
  definition: string[];
  whyItMatters: string[];
  criteria: CriterionData[];
  passingExample: { title: string; description: string };
  failingExample: { title: string; description: string };
  selfAuditQuestions: string[];
  universalNote: string;
  nextPillar: { code: string; name: string; href: string; teaser: string } | null;
  prevPillar: { code: string; name: string; href: string } | null;
  seo: {
    title: string;
    description: string;
    keywords: string[];
    slug: string;
  };
}

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR L
// ─────────────────────────────────────────────────────────────────────────────

export const L_PILLAR: PillarData = {
  code: "L",
  name: "Long-Term Logic",
  letter: "L",
  tagline: "The Standard of Durable Benefit",
  subtitle: "Eliminating volatility to anchor every decision in permanent, compounding value",
  gateNumber: 1,
  icon: Brain,
  governingLaw: "The Post-Flood Collapse Rule",
  governingLawExplanation: "Any advantage built on a receding flood collapses when the water goes. If the trajectory trends toward zero after the initial spike, the architecture is a structural failure — regardless of how impressive the spike was.",
  altitude: "Assessed at model and strategy altitude only — never at execution detail, which belongs to Pillar IO.",
  definition: [
    "The Long-Term Logic standard is the first and most critical gate of the LIONXE™ framework. It tests whether an entity's existence, model, and decisions are justified by durable benefit rather than by conditions that are temporary, concentrated, or eroding.",
    "Every structure audited through this pillar is evaluated through a multi-year lens proportionate to its sector. The standard demands that every operational layer possesses a permanent, compounding benefit. If a system cannot demonstrate that it will be structurally stronger over time, it fails at the first gate — before any other pillar is even assessed.",
    "This pillar is not limited to digital projects. The same logic applies to any decision — business strategy, career architecture, investment choices, construction, or daily-life trade-offs. The principle is universal: prioritise long-term structural integrity over short-term convenience.",
  ],
  whyItMatters: [
    "Most modern systems are engineered for immediate results. They chase surface-level trends, temporary traffic loops, and short-sighted wins that decay the moment external conditions shift.",
    "The LIONXE™ standard was born from a necessity to survive systemic disruptions. Entities that optimised for fast, easy gains have historically collapsed under structural shifts — algorithmic changes, regulatory updates, market saturation, and platform enforcement.",
    "This pillar shifts the focus from fragile, high-maintenance shortcuts toward deep-level architectures that compound value over time. Our focus is not on what revenue a project generates today — it is on its long-term structural integrity. If a system generates impressive returns now but carries a high probability of collapse, it fails.",
  ],
  criteria: [
    { id: "L1", name: "Directional Clarity",
      statement: "Does an articulated multi-year direction exist — proportionate to the entity's natural cycle — that observably filters real decisions?",
      factors: ["An articulated direction exists and is discoverable", "It is specific enough to filter decisions", "Its horizon is proportionate to the sector", "Major observable decisions align with it", "The direction is stable over time"],
      boundary: "Whether the direction can survive (L2); how well it is executed (IO); whether it is distinctive (XE1)." },
    { id: "L2", name: "Foundational Durability",
      statement: "Is the entity's model built on a sustainable basis that creates real value — or on concentrated, extractive, or receding conditions?",
      factors: ["Basis of sustainment and value orientation", "Evidence of value delivered in the present", "Concentration of dependence", "Trajectory of the ground the model rests on", "Owned compounding capital versus rented position"],
      boundary: "Whether any mechanism conflicts with a written rule (N2); engineering quality (IO); the stated plan (L1)." },
    { id: "L3", name: "Decision Discipline",
      statement: "Do observable decisions show research, patience, and deliberate acceptance of short-term cost where it purchases durable benefit — calibrated to real constraints?",
      factors: ["Research depth before commitments", "Short-term cost accepted for durable benefit", "Calibration to real constraints", "Responsiveness to environmental feedback", "Consistency of the pattern across decisions"],
      boundary: "The quality of what decisions produced (IO); the plan they follow (L1); preparedness for shocks (L4)." },
    { id: "L4", name: "Resilience & Forward Risk",
      statement: "Are the entity's principal shocks and its exposure to obsolescence identified, with proportionate buffers and evidence of renewal?",
      factors: ["Identification of principal threats", "Buffers and reserves proportionate to means", "Redundancy in critical paths", "Exposure to obsolescence", "Evidence of ongoing renewal"],
      boundary: "Renewal of competitive distinction (XE4); durability of the model (L2); compliance-derived risk (N)." },
  ],
  passingExample: {
    title: "Durable Architecture",
    description: "An entity bypasses the low-effort path to build a single, concentrated, premium asset in a competitive space. Growth is slower initially, but the asset establishes deep root systems — accumulated authority, a recognised name, and a compounding body of documented expertise. Years later, while volume-first competitors have vanished, this asset stands as a market leader whose position strengthens with every passing year.",
  },
  failingExample: {
    title: "Post-Flood Collapse",
    description: "An entity deploys a network of thin, high-speed micro-structures to harvest rapid returns. Initial metrics spike, but the underlying infrastructure lacks any owned capital and depends entirely on temporary conditions. Within months, the conditions shift, the mechanism is phased out, and the entire operation collapses — leaving nothing behind. This setup fails the L pillar because it possesses no compounding foundation and no durable benefit.",
  },
  selfAuditQuestions: [
    "If the temporary conditions fuelling your current position vanished tomorrow, does your entity possess an underlying asset that remains valuable on its own?",
    "Look at your most important decisions over the past year: were they researched within your real constraints, or were they the fastest available path?",
    "Can your current model scale to several times its current size without breaking under its own weight — or does growth multiply fragility?",
  ],
  universalNote: "This framework is not limited to digital projects. You can apply the L pillar to any decision or project — business strategy, career moves, investment choices, construction, or daily-life trade-offs. The principle remains: prioritise long-term structural integrity over short-term convenience.",
  nextPillar: { code: "IO", name: "Internal Optimization", href: "/io", teaser: "Once direction is justified, every internal layer must be optimised to completion." },
  prevPillar: null,
  seo: {
    title: "Long-Term Logic (L) — The First Gate | LIONXE™ Framework",
    description: "The LIONXE™ Long-Term Logic pillar: the first and most critical gate. Tests whether an entity is justified by durable, compounding benefit — not by temporary conditions. Governed by the Post-Flood Collapse Rule. Applicable across websites, tools, organisations, and daily-life decisions.",
    keywords: ["LIONXE Long-Term Logic", "Post-Flood Collapse Rule", "long-term strategy audit", "digital longevity standard", "LIONXE L pillar", "Sufian Mustafa", "durable benefit framework"],
    slug: "l",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR IO
// ─────────────────────────────────────────────────────────────────────────────

export const IO_PILLAR: PillarData = {
  code: "IO",
  name: "Internal Optimization",
  letter: "IO",
  tagline: "The Standard of Complete Execution",
  subtitle: "Every internal element executed to a complete professional standard — because the audience always finds the weakest layer",
  gateNumber: 2,
  icon: Gauge,
  governingLaw: "The Weakest Link Axiom",
  governingLawExplanation: "The entity's real value is capped by its worst-executed layer. No amount of surface polish compensates for a structural weakness beneath it, because the audience — human or automated — always discovers the weakest point.",
  altitude: "Assessed at execution altitude — how well each internal element is built, produced, distributed, and maintained.",
  definition: [
    "The Internal Optimization standard is the second gate of the LIONXE™ framework. Once direction is justified at the L gate, this pillar tests whether every internal component is executed to a complete professional standard.",
    "This pillar partitions any built system's internals into four domains: the technical foundation it runs on, the output it produces, the systems by which it reaches its audience, and the supporting layer that completes and maintains everything. Every internal factor of any entity — from page speed to off-page authority to plumbing quality — has exactly one home in this partition.",
    "The Weakest Link Axiom governs this pillar because audiences do not average performance across layers. They experience the worst layer, and they judge the whole entity by it. A beautifully designed property with thin content, or a technically sound tool with no documentation, is capped by its weakest domain.",
  ],
  whyItMatters: [
    "Most entities invest heavily in their visible surface — the homepage, the launch feature, the showroom — while neglecting the layers beneath it. The audience discovers the neglect the moment it moves beyond the front surface.",
    "Internal Optimization demands that the standard applies everywhere, not just where the entity expects to be observed. It is the difference between a building that looks impressive from the front and a building that is sound throughout.",
    "Under the Weakest Link Axiom, optimising a strong layer further while a weak one remains unaddressed produces no net improvement. The return comes from bringing the weakest layer up to standard — which is why this pillar identifies exactly which domain is the weakest.",
  ],
  criteria: [
    { id: "IO1", name: "Technical Foundation & Integrity",
      statement: "Is the underlying build sound, secure, performant, and functionally intact throughout?",
      factors: ["Load performance and responsiveness", "Stability and availability", "Cross-device and cross-context operation", "Security fundamentals", "Architectural soundness and efficiency", "Machine-readability and discoverability", "Functional integrity — every path and control works"],
      boundary: "Whether an architectural pattern conflicts with a rule (N2); the quality of output (IO2); findability systems (IO3); the detail layer (IO4)." },
    { id: "IO2", name: "Output & Presentation Quality",
      statement: "Is everything the entity produces and presents — in every format and on every surface it controls — substantive, accurate, and made for the audience?",
      factors: ["Depth and completeness of written output", "Substance of service and product descriptions", "Quality of video, imagery, and non-written output", "Originality and first-hand knowledge", "Accuracy and verifiability", "Clarity of presentation", "Consistency of quality across formats and ages"],
      boundary: "Whether a production practice conflicts with a rule (N2); whether claims are true (N1); findability systems (IO3); metadata (IO4)." },
    { id: "IO3", name: "Visibility & Reach Systems",
      statement: "Are the systems that make the entity findable and reachable implemented competently — and producing measurable reach?",
      factors: ["Optimisation of controlled surfaces for discovery", "External standing, references, and authority", "Presence in venues the audience uses", "Coverage of the demand the entity serves", "Measurable reach outcomes relative to age", "Health and quality of the reach profile"],
      boundary: "Whether an acquisition practice conflicts with a rule (N2); whether reach figures are claimed accurately (N1); output quality (IO2); named demand (XE2); accumulated standing as model capital (L2)." },
    { id: "IO4", name: "Operational Completeness & Upkeep",
      statement: "Is the supporting detail layer complete across every surface, and is the whole actively maintained?",
      factors: ["Completeness of descriptive and supporting elements", "Structured and machine-readable information", "Alternatives for elements not perceivable by all", "Identity, contact, and legal surfaces present", "Currency of every operated surface", "Evidence of active maintenance and correction"],
      boundary: "Whether a supporting element is deceptive (N); engineering soundness (IO1); the substance it describes (IO2); findability (IO3)." },
  ],
  passingExample: {
    title: "Complete Execution",
    description: "An entity performs strongly across all four domains: the technical build is sound, performant, and functionally intact; the output carries genuine substance and first-hand documentation across every format; visibility systems produce measurable reach with a healthy authority profile; and the supporting layer is complete, current, and actively maintained across every surface the entity operates. No domain is noticeably weaker than the others.",
  },
  failingExample: {
    title: "Surface-Only Optimisation",
    description: "An entity presents a polished homepage and fast load times, but the substance behind it is thin and templated, the external standing is negligible after years of operation, and secondary surfaces are neglected and stale. The audience discovers the gap the moment it moves past the front surface. Under the Weakest Link Axiom, the strong homepage does not raise the entity — the weakest domain caps it.",
  },
  selfAuditQuestions: [
    "If a visitor moves three clicks beyond your front surface in any direction, does the quality hold — or does it visibly degrade?",
    "Is every format you publish — written, visual, video — produced to the same standard, or does quality drop on the surfaces you think nobody checks?",
    "Has every external profile and directory listing you operate been updated in the last twelve months — or are some carrying outdated, stale, or abandoned material?",
  ],
  universalNote: "This pillar applies to anything with internal components. A vehicle, a building, a tool, a team, a curriculum — all have a weakest internal layer, and the audience always finds it. The four domains (foundation, output, reach, upkeep) partition any system's internals.",
  nextPillar: { code: "N", name: "Non-Negotiable Integrity", href: "/n", teaser: "Once execution is verified, every claim and practice must be honest and compliant." },
  prevPillar: { code: "L", name: "Long-Term Logic", href: "/l" },
  seo: {
    title: "Internal Optimization (IO) — The Second Gate | LIONXE™ Framework",
    description: "The LIONXE™ Internal Optimization pillar: tests whether every internal element is executed to a complete professional standard. Governed by the Weakest Link Axiom. Covers technical foundation, output quality, visibility and reach, and operational completeness.",
    keywords: ["LIONXE Internal Optimization", "Weakest Link Axiom", "website audit IO pillar", "technical foundation audit", "output quality standard", "visibility and reach systems", "Sufian Mustafa"],
    slug: "io",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR N
// ─────────────────────────────────────────────────────────────────────────────

export const N_PILLAR: PillarData = {
  code: "N",
  name: "Non-Negotiable Integrity",
  letter: "N",
  tagline: "The Standard of Absolute Honesty",
  subtitle: "Integrity that bends to cost is not integrity — it is pricing",
  gateNumber: 3,
  icon: Shield,
  governingLaw: "The Cost-Indifferent Mandate",
  governingLawExplanation: "Integrity must be maintained even where dishonesty is cheaper, faster, or widely practised. The cost of doing the right thing is never a reason not to do it. Under this mandate, 'everyone does it' is evidence about the category, never a defence for the entity.",
  altitude: "Assessed at both altitudes: the honesty of the model and the honesty of its execution.",
  definition: [
    "The Non-Negotiable Integrity standard is the third gate of the LIONXE™ framework, and it carries a unique structural role: it is the exclusive home of every violation, deception, and false-claim finding in any LIONXE™ audit. No other pillar may characterise any practice as a breach.",
    "This pillar tests whether the entity remains honest and compliant even where dishonesty would be cheaper, faster, or common practice. It does not ask whether the entity is well-built (IO) or durable (L) — it asks whether it is truthful and clean.",
    "The scope is deliberately broad: claims made about the entity, compliance with the written rules of its arena, transparency with its audience, and the absence of patterns engineered to deceive — whether aimed at people or systems. Every violation finding in the entire audit is filed here, and only here.",
  ],
  whyItMatters: [
    "Integrity failures are structurally different from other weaknesses. A slow website can be speeded up. Thin content can be deepened. But a history of deception — false claims, policy violations, manipulated proof — permanently damages the trust an entity needs to operate.",
    "Under the Cost-Indifferent Mandate, the correct path must be followed regardless of its cost relative to the shortcut. An entity that is honest only where honesty is free has no integrity — it has a price list.",
    "This pillar exists to protect the audience. Every person and system that interacts with the entity deserves to know: are the claims true, are the rules followed, is what I see what actually exists?",
  ],
  criteria: [
    { id: "N1", name: "Claim Accuracy",
      statement: "Can every significant claim — quantitative, credential, historical, and social proof — be verified against real evidence?",
      factors: ["Quantitative claims verifiable", "Credential and certification claims accurate", "Historical claims substantiated", "Displayed social proof authentic and traceable", "Consistency between claims and the verifiable record"],
      boundary: "Whether relationships behind a claim are disclosed (N3); whether a claim is presented through deception (N4); the quality of what the claim describes (IO2)." },
    { id: "N2", name: "Compliance With Governing Rules",
      statement: "Does the entity comply with the written laws, regulations, and platform policies of its arena — even where violation is cheaper or widely practised?",
      factors: ["Platform and marketplace policies honoured", "Applicable laws and sector regulations followed", "Licensing and authorisations current", "Intellectual property compliance", "Data and privacy obligations met"],
      boundary: "Deception not covered by a written rule (N4); disclosure (N3); durability consequences (L2); engineering consequences (IO1)." },
    { id: "N3", name: "Transparency",
      statement: "Can the audience see who it is dealing with, on what terms, and what interests shape what it is shown?",
      factors: ["Identity and ownership disclosed", "Terms and pricing visible before commitment", "Material relationships disclosed", "Presented evidence traceable to its source", "Operational reality represented accurately"],
      boundary: "Whether a disclosed claim is true (N1); whether concealment is an active deceptive pattern (N4); the design of disclosures (IO3)." },
    { id: "N4", name: "Absence of Manipulation",
      statement: "Is the entity free of patterns engineered to deceive — whether the target is a person or a system?",
      factors: ["No interface patterns producing unintended actions", "No manufactured urgency or scarcity", "Entity presents as what it actually is", "No staged or manufactured social proof", "No differing substance shown to different audiences"],
      boundary: "Breaches of written rules (N2); whether individual claims are false (N1); absent disclosures (N3); design quality (IO3)." },
  ],
  passingExample: {
    title: "Clean Operation",
    description: "An entity makes claims that can be independently verified, complies with every written rule governing its arena, discloses its identity and material relationships clearly, and presents nothing to any audience — human or automated — that is different from what actually exists. Every piece of displayed social proof links to its original source. Integrity holds not because the entity has never been tested, but because it has been tested and did not bend.",
  },
  failingExample: {
    title: "Manufactured Trust",
    description: "An entity claims a customer volume its own review record contradicts by three orders of magnitude, displays testimonials with no attribution to any verifiable source, operates practices that match published platform prohibitions, and presents differently to automated systems than to human visitors. Each of these is a finding within a separate N-pillar domain — claim accuracy, compliance, transparency, and manipulation — and together they demonstrate that the trust surface is engineered rather than earned.",
  },
  selfAuditQuestions: [
    "Take every number on your homepage — customers, years, results — and ask: where is the independent evidence? If a sceptical journalist checked each one, would every figure hold?",
    "Read the written rules of the platform your entity operates on. Are you confident that every practice you run is on the right side of what is explicitly permitted?",
    "If your audience could see every layer of how you present yourself — to people and to systems — would anything surprise them?",
  ],
  universalNote: "This pillar applies to any context where trust is at stake. Buying a home, hiring a contractor, choosing a school, verifying a credential — the four domains (claims, rules, disclosure, manipulation) partition the integrity question universally.",
  nextPillar: { code: "XE", name: "eXceptional Distinction", href: "/xe", teaser: "Once integrity is verified, the entity must prove it offers something a generic alternative cannot replace." },
  prevPillar: { code: "IO", name: "Internal Optimization", href: "/io" },
  seo: {
    title: "Non-Negotiable Integrity (N) — The Third Gate | LIONXE™ Framework",
    description: "The LIONXE™ Non-Negotiable Integrity pillar: the exclusive home of every violation, deception, and false-claim finding. Governed by the Cost-Indifferent Mandate. Tests claim accuracy, compliance, transparency, and absence of manipulation.",
    keywords: ["LIONXE Integrity", "Cost-Indifferent Mandate", "digital integrity audit", "claim accuracy standard", "compliance audit", "manipulation detection", "Sufian Mustafa"],
    slug: "n",
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// PILLAR XE
// ─────────────────────────────────────────────────────────────────────────────

export const XE_PILLAR: PillarData = {
  code: "XE",
  name: "eXceptional Distinction",
  letter: "XE",
  tagline: "The Standard of Irreplaceability",
  subtitle: "If a generic alternative can replace you with no loss to your audience, your distinction is zero",
  gateNumber: 4,
  icon: Sparkles,
  governingLaw: "The Commodity Threshold Law",
  governingLawExplanation: "If the entity can be swapped for a generic alternative with no loss to its audience, its distinction is zero — whatever its marketing claims. This law is the final filter: an entity may be durable, well-built, and honest, and still be worthless if nothing about it is irreplaceable.",
  altitude: "Assessed at both altitudes: distinction claimed at model level and distinction proven in execution.",
  definition: [
    "The eXceptional Distinction standard is the fourth and final gate of the LIONXE™ framework. It tests whether the entity offers something genuinely distinctive that a generic alternative could not replace.",
    "This pillar moves through four domains in sequence: what distinction is claimed, whether the entity is recognised without its name, whether the advantage is provable and non-trivially replicable, and whether it is being maintained against a moving environment. The domains progress from assertion to proof to endurance.",
    "An entity can pass every prior gate — durable, optimised, honest — and still fail here if nothing about it is distinctive. A perfectly clean commodity is still a commodity. This pillar asks the final question: is there a reason this entity should exist rather than any alternative?",
  ],
  whyItMatters: [
    "In every market and every category, the number of entities exceeds the demand for them. Most entities are interchangeable — one can be substituted for another with no loss to the customer. The Commodity Threshold Law tests whether this entity is one of them.",
    "Distinction is not marketing. Marketing can claim difference; this pillar tests whether the difference is specific, provable, and non-trivially replicable. A stated difference that any peer could also claim is not distinction. A verifiable advantage that would require substantial investment to copy is.",
    "Distinction also has a shelf life. An advantage that was real three years ago but has not been renewed against a moving environment is an artefact, not a living edge. The final domain tests whether the entity is actively maintaining its relevance or coasting on a past position.",
  ],
  criteria: [
    { id: "XE1", name: "Articulated Distinction",
      statement: "Does the entity state a specific, defensible difference — or only claims every peer could also make?",
      factors: ["Specificity — identifies something concrete", "Defensibility — withstands checking", "Exclusivity — a peer could not truthfully make the same claim", "Relevance — the difference matters to the audience", "Consistency across surfaces"],
      boundary: "Whether the claim is true (N1); whether it is provable in practice (XE3); whether the entity is recognisable (XE2)." },
    { id: "XE2", name: "Recognizable Identity",
      statement: "Would the entity be recognised by its audience with its name removed — and is there measurable demand for it by name?",
      factors: ["Distinctiveness of voice and expression", "Distinctiveness of visual identity", "Measurable demand by name", "Consistency of identity across surfaces", "Whether identity survives name removal"],
      boundary: "Whether identity is stated as a claim (XE1); whether an advantage is provable (XE3); design quality (IO3)." },
    { id: "XE3", name: "Distinction in Practice",
      statement: "Does a verifiable advantage exist that a competitor could not trivially replicate?",
      factors: ["Exclusive access to inputs or distribution", "Superior economics at equal quality", "Proprietary method or system", "Documented first-hand expertise", "Replication cost — how hard the advantage is to copy"],
      boundary: "Whether the advantage is claimed (XE1); whether it is recognised (XE2); whether it is maintained (XE4); ordinary output quality (IO2)." },
    { id: "XE4", name: "Enduring Relevance",
      statement: "Is the distinction being actively renewed as the environment shifts — or is it a past advantage decaying in place?",
      factors: ["Evidence of renewal and reinvestment", "Adaptation to observable shifts", "Currency against present conditions", "Trajectory — strengthening or decaying"],
      boundary: "Original existence of the advantage (XE3); model durability (L2); decision discipline (L3)." },
  ],
  passingExample: {
    title: "Irreplaceable Position",
    description: "An entity holds a verifiable advantage — exclusive access, a proprietary method, or documented expertise — that competitors cannot replicate without substantial investment. It is recognised by its audience without needing its name attached. The advantage is actively maintained and renewed against a changing environment, and people search for it by name. Swapping it for a generic alternative would produce a measurable loss to its audience.",
  },
  failingExample: {
    title: "Commodity Position",
    description: "An entity describes itself as 'professional, experienced, and trusted' — descriptors every competitor in the same category also uses. No verifiable advantage exists that a competitor could not reproduce in a single working session. After years of operation, no one searches for it by name. Removing the logo, nothing in the design, voice, or output identifies it as this entity rather than the category generally. It can be replaced with no loss.",
  },
  selfAuditQuestions: [
    "State your difference in one sentence. Now check: could your closest competitor place that same sentence on their own page without it becoming false?",
    "If your name and logo were removed from everything you publish, would anyone recognise it as yours — by voice, form, or standard?",
    "Name one thing you offer that would require a competitor substantial time and investment to replicate. If you cannot name one, you are a commodity.",
  ],
  universalNote: "This pillar applies anywhere choice exists. A local shop, a professional, a content creator, a product — all face the same question: is there a reason to choose this over any alternative? The four domains (claim, recognition, proof, endurance) test distinction universally.",
  nextPillar: null,
  prevPillar: { code: "N", name: "Non-Negotiable Integrity", href: "/n" },
  seo: {
    title: "eXceptional Distinction (XE) — The Final Gate | LIONXE™ Framework",
    description: "The LIONXE™ eXceptional Distinction pillar: tests whether the entity offers something a generic alternative cannot replace. Governed by the Commodity Threshold Law. Covers articulated distinction, recognisable identity, distinction in practice, and enduring relevance.",
    keywords: ["LIONXE eXceptional Distinction", "Commodity Threshold Law", "brand distinction audit", "competitive differentiation standard", "recognizable identity", "irreplaceability framework", "Sufian Mustafa"],
    slug: "xe",
  },
};

export const ALL_PILLARS = [L_PILLAR, IO_PILLAR, N_PILLAR, XE_PILLAR];