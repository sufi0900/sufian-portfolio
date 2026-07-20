
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */

//about page.jsx

"use client";

import React, {
  useEffect, useMemo, useRef, useState, useCallback, useLayoutEffect,
} from "react";
import {
  BookOpen, X, Search, Highlighter, ChevronLeft, ChevronRight, List,
  Home, GraduationCap, MapPin, Globe, Sparkles, Lightbulb,
  Shield, PenTool, BrainCircuit, Layers, Target, Code2,
  ArrowRight, Hash, ImageIcon, Bookmark, BookMarked,
  Copy, Check, Type, Maximize2, Minimize2, Clock, ExternalLink,
} from "lucide-react";
import "./about.css";

/* ═══════════════════════════════════════════════════════════════════════
   CONSTANTS
   ═══════════════════════════════════════════════════════════════════════ */

const ACCENT = "#E3B341";

const CH1_SLIDES = [
  { label: "Portrait — Sufian Mustafa", tint: "#E3B341" },
  { label: "At work — building the ecosystem", tint: "#C9952C" },
  { label: "Community & speaking", tint: "#F2CC6B" },
  { label: "The three-platform ecosystem", tint: "#B0893A" },
];

/* ── content-block helpers ── */
const eyebrow  = (text)              => ({ type: "eyebrow", text });
const h1       = (text)              => ({ type: "h1",      text });
const h3       = (text)              => ({ type: "h3",      text });
const p        = (text)              => ({ type: "p",       text });
const pull     = (text)              => ({ type: "pull",    text });
const callout  = (text, icon="insight") => ({ type: "callout", text, icon });
const olist    = (items)             => ({ type: "list", ordered: true,  items });
const ulist    = (items)             => ({ type: "list", ordered: false, items });
const image    = (label)             => ({ type: "image",  label });
const chips    = (items, label="")   => ({ type: "chips",  items, label });
const divider  = ()                  => ({ type: "divider" });
const timeline = (items)             => ({ type: "timeline", items });
const statrow  = (items)             => ({ type: "statrow", items });
const linkcard = (label, url, desc)  => ({ type: "linkcard", label, url, desc });

/* ═══════════════════════════════════════════════════════════════════════
   CHAPTERS
   ═══════════════════════════════════════════════════════════════════════ */

const CHAPTERS = [
  /* ── 01 ──────────────────────────────────────────────────────────── */
  {
    num: "01", title: "The Architect", color: "#E3B341",
    readTime: 3,
    leaves: [
      { kind: "ch1-content", blocks: [
        eyebrow("Chapter 01 · The Architect"),
        h1("Sufian Mustafa"),
        { type: "role", text: "Growth Systems Architect · LIONXE™ Creator · Digital Ecosystem Founder" },
        p("Sufian Mustafa is a Growth Systems Architect — combining technical SEO, AI-augmented web engineering, structured content systems, and the LIONXE™ evaluation framework to build digital authority engineered to outlast algorithms, market shifts, and time itself."),
        callout("This is not a portfolio of tasks completed. It is the record of a system being built — deliberately, layer by layer.", "insight"),
        h3("At a glance"),
        chips(["LIONXE™ Framework Creator","100% Solo-Built Ecosystem","MSc Computer Science","Rawalpindi, PK — Remote-first","Building since 2024","3-Platform Ecosystem"]),
        h3("What this book is"),
        p("The chapters ahead trace the real journey — from a single line of HTML in a university classroom to a proprietary auditing framework used to evaluate digital assets. Read it cover to cover, or jump to any chapter from the contents page."),
      ]},
      { kind: "ch1-slider" },
    ],
  },

  /* ── 02 ──────────────────────────────────────────────────────────── */
  {
    num: "02", title: "The Spark", color: "#E3B341",
    readTime: 4,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 02 · The Spark"),
        h1("One tag changed everything"),
        pull("I didn't know it yet, but <html> was the first line of a life I hadn't planned."),
        h3("The classroom"),
        p("It started at Abdul Wali Khan University, Mardan — inside a Master's in Computer Science, not in a server room or a startup garage, but in an ordinary web-fundamentals lecture. The instructor opened a blank file and typed a single tag: <html>. Most of the room saw an assignment. I saw a door."),
        callout("The foundation of my entire digital world wasn't a tool or a trend. It was a tag — and the realisation that everything online is built, deliberately, by someone. I wanted to be that someone.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("The Notepad years"),
        p("I went home and started building — in plain Notepad, no frameworks, no shortcuts. This was 2023, before AI coding assistants had penetrated the developer workflow and before the ecosystem of AI-first tools had matured. Every layout was hand-coded. Every component was studied, then rebuilt from scratch."),
        olist([
          "Structure before style — markup is architecture, not decoration.",
          "Cloning is learning — rebuilding great interfaces by hand wires the fundamentals in deep.",
          "Patience compounds — the slow, manual foundation is exactly what made everything after it fast.",
        ]),
        image("Early Notepad code & first hand-built interfaces"),
        h3("The first deployment"),
        p("Then came the moment every builder remembers — my first site live on the open web: awkum-mcs-2024.site.net. It was modest. It was mine. And it proved I could take an idea from a blank file to a working URL entirely on my own."),
        pull("Shipping something broken is still shipping. Waiting for perfect ships nothing."),
      ]},
    ],
  },

  /* ── 03 ──────────────────────────────────────────────────────────── */
  {
    num: "03", title: "The Foundation", color: "#E3B341",
    readTime: 6,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 03 · The Foundation"),
        h1("Building the muscle before the machine"),
        pull("Before AI could write a line for me, I had already written ten thousand by hand."),
        h3("Learning in the open"),
        p("After that first deployment, getting better became an obsession. There was no shortcut available — and honestly, I didn't want one. I watched long-form web development tutorials from start to finish, the kind most people skip through, and I rebuilt everything I learned with my own hands. Every concept had to survive the test of me typing it out, breaking it, and fixing it again."),
        callout("Learning slowly, before AI existed to speed me up, is the single reason everything afterward felt effortless. I wasn't memorising tools. I was understanding systems.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("The MERN years"),
        p("I went deep into full-stack development, cloning complete MERN-stack applications piece by piece — MongoDB, Express, React, Node. I wasn't copying to ship; I was copying to understand. Rebuilding someone else's architecture by hand is the fastest way to see why they made each decision."),
        olist([
          "Cloning reveals intent — you learn why a structure exists, not just that it does.",
          "Full-stack thinking — seeing data flow from database to interface changed how I designed everything.",
          "React fundamentals — components, state, and props became second nature through repetition.",
        ]),
        image("MERN-stack clones & early React practice projects"),
      ]},
      { kind: "content", blocks: [
        h3("Then I met Next.js"),
        p("Somewhere in that learning marathon, I started experimenting with Next.js — and it stopped me cold. It wasn't just another framework. It solved the exact problems I cared about most: speed, structure, and search visibility. I committed to it completely, and to this day almost everything I build starts with it."),
        ulist([
          "Performance — server-side rendering and edge delivery made sites genuinely fast.",
          "SEO power — search engines could read and rank my work the way I intended.",
          "Structure — the framework encouraged the clean architecture I already valued.",
        ]),
        callout("When I paired Next.js with Sanity CMS, it was the cherry on top — structured content management feeding a high-performance, SEO-ready front end. That combination became my signature stack.", "insight"),
        chips(["Next.js", "React", "Sanity CMS", "Node.js", "MongoDB", "Tailwind CSS"], "Signature stack emerging"),
      ]},
      { kind: "content", blocks: [
        h3("The first sufianmustafa.com"),
        p("In 2024, I built the first version of this very site — my original portfolio. It was the proof that I could design, code, and ship a personal brand from nothing."),
        p("Then reality intervened. In early 2025, on a tight budget, I couldn't cover the annual domain fee and had to take it offline. It stung. But it taught me something the LIONXE™ framework would later formalize: a foundation built on something fragile will eventually fall, no matter how good it looks."),
        p("The work continued anyway — because the skills don't expire when the domain does."),
        pull("Losing the site didn't lose the builder. Foundations live in you, not in a renewal invoice."),
        divider(),
        statrow([
          { label: "Months building",  value: "12+" },
          { label: "Sites shipped",    value: "10+"  },
          { label: "Stack layers",     value: "5"   },
        ]),
      ]},
    ],
  },

  /* ── 04 ──────────────────────────────────────────────────────────── */
  {
    num: "04", title: "The Catalyst", color: "#E3B341",
    readTime: 5,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 04 · The Catalyst"),
        h1("The golden ticket"),
        pull("The tool was new to everyone. The strategic mind to wield it was not."),
        h3("When ChatGPT arrived"),
        p("Then the world shifted. ChatGPT became publicly available and I started using it immediately. For many people it was a novelty — a party trick. For me, it was a key that fit a lock I had been standing in front of for years."),
        callout("Everything changed. Not because the AI was magic, but because I finally had an instrument worthy of how I already thought.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("Prompt engineering as leverage"),
        p("This is where my deep, strategic way of thinking turned into a genuine competitive advantage. Prompting well is not about typing requests — it is about decomposing a problem, sequencing instructions, and engineering an outcome. That is exactly how my mind already worked, so prompt architecture came naturally and became enormously powerful."),
        olist([
          "I stopped asking the AI for answers and started architecting how it should think.",
          "I built layered, reusable prompt systems instead of one-off requests.",
          "I treated every output as a draft to refine — never a final product to accept blindly.",
        ]),
        image("Prompt architecture system — layered input design"),
      ]},
      { kind: "content", blocks: [
        h3("The compounding effect"),
        p("The result was not a small improvement. It was a multiplication. A content research task that previously consumed a full afternoon could be fully scoped, structured, and outlined in under an hour — and the quality went up, not down, because I was directing the work with intent, not outsourcing the thinking."),
        divider(),
        chips(["Web development", "Content workflows", "SEO research", "Prompt systems", "Design & assets", "Technical analysis"], "Every workflow accelerated"),
        h3("The before / after"),
        statrow([
          { label: "2023 stack",  value: "HTML + CSS" },
          { label: "2025 stack",  value: "Next.js + AI"  },
          { label: "Multiplier",  value: "100×"   },
        ]),
      ]},
      { kind: "content", blocks: [
        h3("Learning at machine speed"),
        p("Beyond the speed, AI became the greatest learning partner I'd ever had. I could interrogate a concept from ten angles in minutes, test my understanding instantly, and move into new territory without waiting for a course or a mentor."),
        callout("AI never replaced my thinking — it amplified it. The strategy, the judgment, the standards stayed human. That distinction is the whole reason my output never reads as robotic.", "insight"),
        pull("A powerful tool in an ordinary hand is a convenience. In a prepared mind, it's a catapult."),
        divider(),
        chips(["2023: HTML, CSS, Notepad, basic React"], "Where the journey started"),
        chips(["2025: Next.js, Sanity, Redis, AI SEO, LIONXE™, Prompt Architecture, Technical SEO, Long-Form Content Systems"], "Where it arrived"),
      ]},
    ],
  },

  /* ── 05 ──────────────────────────────────────────────────────────── */
  {
    num: "05", title: "The Craft", color: "#E3B341",
    readTime: 5,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 05 · The Craft"),
        h1("From code to words"),
        pull("I could build the stage. Now I had to learn to fill it."),
        h3("Why content?"),
        p("As I spent more time inside the digital world — reading posts, studying blogs, watching how ideas travelled — a question started forming. If all of this is built on words, why couldn't I write them too? I had the technical foundation. What I didn't yet have was a voice."),
      ]},
      { kind: "content", blocks: [
        h3("Teaching myself to write"),
        p("So I did what I'd done with code: I started from zero and worked relentlessly. I studied content writing through videos, real examples, and deep reading of the industry leaders who were already doing it well. Then I practiced, revised, and practiced again."),
        olist([
          "Study the best — I read and dissected content that actually ranked and performed.",
          "Practice in volume — quantity in the early phase creates quality later.",
          "Revise without ego — every draft was raw material, never a finished product.",
        ]),
      ]},
      { kind: "content", blocks: [
        h3("The missing half: SEO"),
        p("Then came a realisation that reshaped everything: content without SEO is a voice in an empty room. You can write the most valuable article in the world, but if no one can find it, it may as well not exist. So I committed to learning, practising, and implementing SEO with the same intensity I'd given to writing and code."),
        callout("Writing earns the reader's attention. SEO earns the reader. I needed both, working as one system — or neither would matter.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("The compounding loop"),
        p("Through all of it, AI was right beside me — improving every step, sharpening every draft, and accelerating every cycle of learning. And as I used it more deliberately, my prompt engineering grew alongside my craft."),
        image("The compounding loop: writing × SEO × AI × prompt engineering"),
        ulist([
          "Content skill made my prompts more precise and contextually rich.",
          "Sharper prompts produced better research, outlines, and drafts.",
          "Better drafts taught me more about structure, intent, and SEO signals.",
          "And the whole loop compounded — each skill multiplying the next.",
        ]),
        pull("Every skill I built made every other skill stronger. That's the only kind of growth worth engineering toward."),
      ]},
    ],
  },

  /* ── 06 ──────────────────────────────────────────────────────────── */
  {
    num: "06", title: "The Awakening", color: "#E3B341",
    readTime: 5,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 06 · The Awakening"),
        h1("The likes that meant nothing"),
        pull("A featured post with no soul taught me more than any failure could."),
        h3("Into the communities"),
        p("To grow, I knew I had to be where the builders and marketers gathered. I joined the professional communities that mattered — LinkedIn, Dev.to, Medium, and Twitter — to stay connected, to learn in public, and to find my footing in the wider conversation."),
      ]},
      { kind: "content", blocks: [
        h3("The hollow wins"),
        p("In those early days, I posted generic, AI-generated articles on Medium and Dev.to. And they worked — on the surface. I collected likes, sometimes a lot of them. One post even got featured on Google Discover, the kind of reach most writers chase for months or years."),
        callout("But none of it carried my voice. It was assembled, not authored — echoes of other people's thinking rephrased into my account. Deep down I knew it had no real foundation and no long-term value.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("The mirror moment"),
        p("The turning point came quietly, while I was reading the blogs of established industry leaders — studying their traffic, their revenue, their portfolios, their authority. Something in me woke up. I kept thinking: why can't I be that person? Why am I borrowing voices when I could build my own?"),
        pull("That single question — why not me? — rearranged everything I thought I was working toward."),
      ]},
      { kind: "content", blocks: [
        h3("The decision"),
        p("So I made the decision that would define the next chapter of my life: I would stop chasing hollow reach and build my own brand from the ground up. Not a profile. Not a feed. A real, owned platform with my thinking at its centre."),
        olist([
          "What should the niche be — where could I build genuine, lasting authority?",
          "What should the brand be called — a name that would make sense in a decade?",
          "What should the domain be — the permanent home that everything points back to?",
          "What would I write, how would I build it, entirely alone?",
        ]),
        callout("These questions wouldn't leave me. They followed me into every hour of the day — and, soon, into the sleepless nights of the most important build of my life.", "insight"),
      ]},
    ],
  },

  /* ── 07 ──────────────────────────────────────────────────────────── */
  {
    num: "07", title: "The Isolation", color: "#E3B341",
    readTime: 8,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 07 · The Isolation"),
        h1("Eighteen months in the dark"),
        pull("I disappeared from every platform so I could come back with something real."),
        h3("The vanishing"),
        p("I made a choice almost no one understood at the time: I went silent. From mid-2023 through late 2024, roughly eighteen months, I stepped away from every social platform and poured everything into a single mission — building DoItWithAI.tools into something that deserved to exist. No posting, no performing, no chasing likes. Just the work."),
      ]},
      { kind: "content", blocks: [
        h3("A company of one"),
        p("And I did it as a company of one. There was no team, no co-founder, no budget for help. There was only me, my mind, and the AI tools I had learned to wield. Every responsibility that a whole agency would normally split between specialists landed on a single desk — mine."),
        ulist([
          "Strategist and founder — deciding what this thing even was.",
          "Developer — building every page, component, and system.",
          "Writer and editor — producing all the content from scratch.",
          "Designer, marketer, and operator — everything else, too.",
        ]),
        callout("Solo building is not romantic. It is relentless. But it forces a depth of ownership over every layer that you can never get any other way.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("The questions that stole my sleep"),
        p("Before a single line was written, I had to answer the hardest questions of all — the strategic foundation everything else would stand on. I thought about them constantly, around the clock. There were nights my sleep broke apart because my mind refused to stop turning them over."),
        olist([
          "The niche — where could I build genuine, lasting authority in the AI SEO space?",
          "The brand — a name that would outlive every trend in the market.",
          "The domain — the permanent home that everything in the ecosystem would point back to.",
          "The content and the build — what to say, how to ship it, entirely alone.",
        ]),
        pull("I didn't lose sleep from anxiety. I lost it because I was designing a foundation I refused to get wrong."),
      ]},
      { kind: "content", blocks: [
        h3("Building DoItWithAI.tools"),
        p("Then I built it. Using my signature stack — Next.js for the framework and Sanity for content management — along with AI tools and my own coding knowledge, I assembled the entire platform piece by piece. It was a long, complex, deeply demanding build, and I felt every hour of it."),
        ulist([
          "Next.js 14 (App Router) — performance and SEO as a default, not an afterthought.",
          "Sanity Studio CMS — structured content built to scale without entropy.",
          "Redis + React Query — multi-layer caching for sub-second response times.",
          "7+ Schema types — JSON-LD structured data for every content format.",
          "AI-native workflows — used to accelerate production, never to replace judgment.",
        ]),
        image("DoItWithAI.tools — architecture diagram & site structure"),
      ]},
      { kind: "content", blocks: [
        h3("The first article"),
        p("Then came the milestone that made it real — I published my very first article on the platform: a deep, comprehensive review of Merlin AI. Hitting publish on something fully mine, on a site I had built with my own hands, was a different feeling entirely from any borrowed post."),
        linkcard("DoItWithAI.tools · First Article", "https://doitwithai.tools/ai-tools/merlin-ai-review", "Merlin AI Review — the first piece published on a platform built entirely solo"),
        callout("Consistency was the whole strategy. One genuine, deeply-built article at a time, compounding into authority no shortcut could buy.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("Wearing every hat"),
        p("And I managed every single aspect of it myself — not a slice of it, all of it. The entire operation ran through one person, simultaneously."),
        chips(["Development", "Technical SEO", "On-page SEO", "Outreach", "UI design", "Blog imagery", "Video editing", "Social media", "Schema markup", "Performance optimisation", "Content strategy"], "Every role. One person."),
        pull("When you build every layer yourself, you stop guessing how the system works. You become the system."),
      ]},
    ],
  },

  /* ── 08 ──────────────────────────────────────────────────────────── */
  {
    num: "08", title: "The Forge", color: "#E3B341",
    readTime: 7,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 08 · The Forge"),
        h1("Coal, pressure, diamond"),
        pull("Pressure doesn't break the right material. It reveals it."),
        h3("The return"),
        p("After eighteen months in the dark, I came back into the light — and this time I had something to show for the silence. I returned to the social platforms and announced DoItWithAI.tools with full confidence, creating the brand's presence across every channel. The quiet builder walked back in as a founder."),
      ]},
      { kind: "content", blocks: [
        h3("The first job"),
        p("That platform became my proof of skill — and it opened a real door. I landed my first professional role as a content writer at Think Higher Consultant, hired on the strength of the website I'd built as my portfolio."),
        p("For the first time, I was inside a corporate environment, watching how the machine really ran from the inside — observing how digital marketing strategy translates into daily execution, how real client expectations differ from personal projects, and how to deliver consistently under external pressure."),
        olist([
          "How a corporate structure actually operates day to day.",
          "How digital marketing strategy gets executed in live, real-world conditions.",
          "How to deliver under real deadlines, client expectations, and changing briefs.",
        ]),
      ]},
      { kind: "content", blocks: [
        h3("The diamond"),
        p("It was my first job, and the pressure was immense. But I've come to believe pressure is not the enemy — it's the process. Coal becomes a diamond only under extreme heat and force, deep beneath the surface. Think Higher Consultant was that pressure for me, and in just three months it forged something far harder and more valuable than what walked in."),
        callout("Three months of intense professional pressure did what years of self-directed comfort never could. It compressed capability into clarity.", "insight"),
        pull("Knowing your worth isn't arrogance. It's the first audit you ever run on yourself."),
      ]},
      { kind: "content", blocks: [
        h3("Waywegaming — where the hidden skills surfaced"),
        p("When I moved to Waywegaming, the work demanded something different. The problems weren't single articles or individual pages — they were entire digital ecosystems, networks of connected sites, architectures that spanned dozens of properties. Faced with complexity at that scale, capabilities I didn't know I had began to surface."),
        ulist([
          "Deep organizational research — multi-factor diagnostic investigation before any recommendation.",
          "System-level auditing — evaluating an entire digital operation, not isolated symptoms.",
          "Root-cause thinking — tracing every surface problem back to its structural origin.",
          "Digital transformation strategy — designing the path from broken to permanently sound.",
          "Competitive intelligence — understanding market positioning at the ecosystem level.",
        ]),
        image("Waywegaming audit scope — from symptoms to structural root causes"),
      ]},
      { kind: "content", blocks: [
        h3("The scale of the problem"),
        p("The most defining project was a diagnostic audit of a multi-site digital network — 87 separate sites operating in close proximity, together generating over 226,000 indexed pages. Most people looked at the traffic numbers. I looked at the crawl budget implications."),
        callout("Everyone was treating the symptoms — individual rankings, traffic dips, content gaps. I went after the cause: the architecture itself was the problem. Fix the system, and the symptoms dissolve on their own.", "insight"),
        statrow([
          { label: "Sites audited",     value: "87"     },
          { label: "Indexed pages",     value: "226K+"  },
          { label: "Root causes found", value: "14"     },
        ]),
      ]},
      { kind: "content", blocks: [
        h3("What the diagnosis revealed"),
        p("The full diagnostic uncovered a cascade of structural failures operating simultaneously: URL architecture fragmentation generating mass duplicate content, thin content across the majority of indexed pages, keyword stuffing patterns triggering algorithmic penalties, crawl budget consumed entirely by low-value pages, and zero semantic content clustering — each problem compounding the others."),
        p("I built a complete transformation roadmap: a 12-month phased strategy covering site consolidation, content architecture redesign, technical SEO remediation, and a long-form authority-first content system to rebuild topical credibility from the ground up."),
        pull("A system designed to fail will fail, regardless of how hard each individual component works. The architecture is the strategy."),
      ]},
    ],
  },

  /* ── 09 ──────────────────────────────────────────────────────────── */
  {
    num: "09", title: "The Framework", color: "#E3B341",
    readTime: 7,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 09 · The Framework"),
        h1("The standard I had to invent"),
        pull("I kept auditing everything against a standard no one had written down. So I wrote it."),
        h3("The pattern behind every failure"),
        p("The Waywegaming diagnostic crystallised a question I couldn't stop asking: why do high-performing digital assets eventually collapse under algorithm shifts? I traced the pattern through example after example, and it was always the same — short-sighted foundations, dependence on loopholes, generic execution, and a tolerance for fractional quality that erodes the whole."),
        p("Once I could see the pattern of failure clearly, I could reverse-engineer its opposite: a permanent architecture, built so that the things that destroy ordinary assets simply can't take root."),
      ]},
      { kind: "content", blocks: [
        h3("LIONXE™ is born"),
        p("That reverse-engineered architecture became LIONXE™ — pronounced lee-ohn-zay — a proprietary four-pillar auditing standard. Each letter encodes a non-negotiable law. Every asset must satisfy every pillar. There are no partial passes."),
        olist([
          "L — Logic & Longevity: built to compound over a lifetime, not spike and fade.",
          "IO — Internal Optimization: complete across every layer; 95% optimised is a failure.",
          "N — Non-Negotiable Integrity: absolute ethical clarity, even when honesty costs revenue.",
          "XE — eXceptional Distinction: irreplaceable execution that no generic alternative can replicate.",
        ]),
        callout("The cascade logic is strict: if any pillar fails, the audit stops. A perfect XE score cannot override a failed L. The whole system is only as strong as its weakest foundation.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("A doctrine, not a checklist"),
        p("LIONXE™ was never meant to be a quick scorecard. It is an institutional doctrine — a vertical, multi-layered way of evaluating whether something is built to survive decades, not quarters. It governs how everything is built now, from a single article to an entire platform."),
        ulist([
          "Cascade failure logic — a failure at any pillar stops the audit; lower pillars don't compensate for upstream failures.",
          "Non-negotiable minimums — no partial credit; each pillar is binary: it passes or the system fails.",
          "Permanent architecture focus — every evaluation asks whether the asset compounds or decays over time.",
        ]),
        pull("Temporary wins and shallow shortcuts are recipes for structural collapse."),
      ]},
      { kind: "content", blocks: [
        h3("Tested in live conditions"),
        p("LIONXE™ wasn't theoretical. The Waywegaming diagnostic audit — a full organizational investigation spanning 87 sites, 226,000+ indexed pages, and a 12-month transformation roadmap — was the proof of concept. The framework didn't emerge from a whiteboard; it emerged from applying systematic thinking to a live, failing system and identifying exactly where the foundation had cracked."),
        callout("LIONXE™ is the standard I had always been measuring against in my head. Writing it down turned an instinct into a framework others could use.", "insight"),
        linkcard("LIONXE™ Framework Documentation", "https://lionxeframework.com", "The full four-pillar doctrine, governing laws, and audit methodology"),
        p("The full doctrine lives at lionxeframework.com — and the discipline behind it is what continues to shape every layer of the work today."),
      ]},
    ],
  },

  /* ── 10 ──────────────────────────────────────────────────────────── */
  {
    num: "10", title: "The Vision", color: "#E3B341",
    readTime: 4,
    leaves: [
      { kind: "content", blocks: [
        eyebrow("Chapter 10 · The Vision"),
        h1("Building what outlasts me"),
        pull("The goal was never to rank. It was to become the answer."),
        h3("The Gulf direction"),
        p("The next phase is clear: positioning for the premium enterprise markets of Dubai, Abu Dhabi, Saudi Arabia, and the wider GCC. Not as a freelancer or a generic hire — but as a Growth Systems Architect whose work operates across five layers: engineering, search, content, trust, and business strategy."),
        callout("The Gulf's tech ecosystem values systems thinking, governance, and longevity — exactly the language LIONXE™ speaks. The fit is structural, not aspirational.", "insight"),
        chips(["Dubai", "Abu Dhabi", "Saudi Arabia", "Qatar", "Bahrain", "GCC Enterprise"], "Target markets"),
      ]},
      { kind: "content", blocks: [
        h3("Three platforms, one system"),
        p("Everything I've built now operates as a single, connected ecosystem — three platforms, each playing a distinct role, all reinforcing one another. Together they form both the proof and the practice of the standard I live by."),
      ]},
      { kind: "content", blocks: [
        h3("The ecosystem"),
        ulist([
          "sufianmustafa.com — the authority layer. The founder platform and the strategic voice (you are here).",
          "DoItWithAI.tools — the proving ground. A live AI SEO hub where the theory is tested in public.",
          "lionxeframework.com — the doctrine. The institutional standard that governs everything.",
        ]),
        image("The three-platform ecosystem — authority, practice, doctrine"),
        callout("Each platform strengthens the others. Authority at sufianmustafa.com increases trust in the framework. The framework governs the platform. The platform validates the methodology. It compounds.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("The mission ahead"),
        p("The work is far from finished — by design. The aim is to become a recognised authority in the AI SEO niche, and I'm building toward it the only way that lasts: deliberately, layer by layer, with every asset engineered to compound rather than spike."),
        statrow([
          { label: "Platforms live", value: "3"     },
          { label: "Articles published", value: "Growing"  },
          { label: "Framework pillars", value: "4"   },
        ]),
        callout("Not optimising for this quarter. Building for the next decade — because authority that compounds always outperforms attention that fades.", "insight"),
      ]},
      { kind: "content", blocks: [
        h3("The standard everything is measured against"),
        p("Every article engineered for depth. Every system designed for permanence. Every decision measured against the LIONXE™ framework. The work compounds — that is the entire strategy."),
        chips(["LIONXE™ Standard", "AI SEO Architecture", "Content Systems", "Enterprise Research", "Technical SEO"], "The integrated discipline"),
        divider(),
        { type: "finalcta" },
      ]},
    ],
  },
];

/* ═══════════════════════════════════════════════════════════════════════
   GLOSSARY
   ═══════════════════════════════════════════════════════════════════════ */

const GLOSSARY = [
  { term: "LIONXE™",           def: "A proprietary four-gate quality standard (Logic & Longevity, Internal Optimization, Non-Negotiable Integrity, Exceptional Execution) for evaluating whether a digital asset is built to survive. Pronounced lee-ohn-zay. Created by Sufian Mustafa. Trademark pending." },
  { term: "Deep Research",     def: "A multi-factor investigative process that diagnoses digital asset problems at the structural root rather than the symptomatic surface. Distinguishes cause from symptom in order to redesign the foundation rather than patch the output." },
  { term: "AI SEO",            def: "Search optimisation adapted for the AI-search era — designing content so it ranks in traditional engines and is cited by AI answer systems (ChatGPT, Perplexity, Gemini)." },
  { term: "GEO",               def: "Generative Engine Optimisation — optimising content to be surfaced and quoted inside AI-generated answers, not just traditional search results." },
  { term: "AEO",               def: "Answer Engine Optimisation — structuring content to directly satisfy answer-style queries and featured result placements." },
  { term: "E-E-A-T",           def: "Experience, Expertise, Authoritativeness, Trust — Google's quality evaluation signals, maximised through deep author authority and demonstrable expertise." },
  { term: "Pillar-Cluster",    def: "A content architecture where comprehensive pillar pages are supported by interlinked cluster articles to build topical authority across a subject domain." },
  { term: "Schema Markup",     def: "Structured data (JSON-LD) that helps search engines and AI systems understand content context, enabling rich results and citation eligibility." },
  { term: "Next.js",           def: "A React framework optimised for performance and SEO — the technical foundation of the entire sufianmustafa.com ecosystem." },
  { term: "Sanity CMS",        def: "A headless content management platform paired with Next.js to manage structured content at scale without content-architecture entropy." },
  { term: "Prompt Architecture", def: "The disciplined design of reusable, layered prompt systems that produce consistent, humanised AI output across an entire workflow. A system design discipline, not a reactive skill — most people prompt; prompt architects build infrastructure." },
  { term: "Crawl Budget",      def: "The number of pages a search engine will crawl on a site within a given period. Wasted on low-value pages, it prevents high-value content from being discovered and indexed." },
];

/* ═══════════════════════════════════════════════════════════════════════
   LEAF BUILDER  (flat page array with TOC + Glossary bookends)
   ═══════════════════════════════════════════════════════════════════════ */

function buildLeaves() {
  const leaves = [];
  const chapterStart = {};
  leaves.push({ kind: "toc-a" }, { kind: "toc-b" });
  CHAPTERS.forEach((ch) => {
    chapterStart[ch.num] = leaves.length;
    ch.leaves.forEach((lf) => leaves.push({ ...lf, ch }));
    if (ch.leaves.length % 2 !== 0) leaves.push({ kind: "blank", ch });
  });
  const glossaryStart = leaves.length;
  leaves.push({ kind: "glossary-a" }, { kind: "glossary-b" });
  // final "what's next" spread
  const finalStart = leaves.length;
  leaves.push({ kind: "final-a" }, { kind: "final-b" });
  return { leaves, chapterStart, glossaryStart, finalStart };
}

const {
  leaves: LEAVES,
  chapterStart: CH_START,
  glossaryStart: GLOSSARY_START,
} = buildLeaves();

/* ── search index ── */
const SEARCH_INDEX = [];
CHAPTERS.forEach((ch) => {
  ch.leaves.forEach((lf, li) => {
    (lf.blocks || []).forEach((b) => {
      const txt = b.text || (Array.isArray(b.items) ? b.items.join(" ") : "");
      if (txt) SEARCH_INDEX.push({
        chNum: ch.num,
        title: ch.title,
        snippet: txt,
        leaf: CH_START[ch.num] + li,
      });
    });
  });
});

/* ═══════════════════════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */

export default function AboutBook() {
  const [view,       setView]       = useState("cover");
  const [leaf,       setLeaf]       = useState(0);
  const [isMobile,   setIsMobile]   = useState(false);
  const [flip,       setFlip]       = useState(null);
  const [anim,       setAnim]       = useState("");
  const [tocOpen,    setTocOpen]    = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query,      setQuery]      = useState("");
  const [highlighter,setHighlighter]= useState(false);
  const [highlights, setHighlights] = useState(() => new Set());
  const [focusMode,  setFocusMode]  = useState(false);
  const [fontSize,   setFontSize]   = useState("normal"); // 'compact' | 'normal' | 'large'
  const [bookmark,   setBookmark]   = useState(null);
  const [copied,     setCopied]     = useState(null);
  const [ch1Slide,   setCh1Slide]   = useState(0);
  const [resumeLeaf, setResumeLeaf] = useState(null);

  /* responsive */
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const update = () => setIsMobile(mq.matches);
    update(); mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  /* restore session position */
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem("bk-leaf");
      if (saved) setResumeLeaf(Number(saved));
    } catch {}
  }, []);

  /* save position on tab switch */
  useEffect(() => {
    const onVis = () => {
      if (document.hidden && view === "reading") {
        try { sessionStorage.setItem("bk-leaf", String(leaf)); } catch {}
      }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [view, leaf]);

  const step    = isMobile ? 1 : 2;
  const maxLeaf = LEAVES.length - 1;
  const progress = Math.round((leaf / maxLeaf) * 100);

  const snap = useCallback((idx) => {
    let i = Math.max(0, Math.min(maxLeaf, idx));
    if (!isMobile && i % 2 !== 0) i -= 1;
    return i;
  }, [isMobile, maxLeaf]);

  const FLIP_MS = 720;
  const flipRef = useRef(null);

  const finalizeFlip = useCallback(() => {
    const f = flipRef.current;
    if (!f) return;
    flipRef.current = null;
    setLeaf((cur) => snap(f.dir === "next" ? cur + step : cur - step));
    setFlip(null);
  }, [snap, step]);

  useEffect(() => {
    if (!flip) return;
    const t = setTimeout(finalizeFlip, FLIP_MS + 140);
    return () => clearTimeout(t);
  }, [flip, finalizeFlip]);

  useEffect(() => { flipRef.current = flip; }, [flip]);

  const goNext = useCallback(() => {
    if (flip || anim) return;
    if (leaf + step > maxLeaf) return;
    if (isMobile) {
      setFlip({ dir: "next", mobile: true, front: leaf, back: leaf + 1, under: leaf + 1 });
    } else {
      setFlip({ dir: "next", front: leaf + 1, back: leaf + 2, underLeft: leaf, underRight: leaf + 3 });
    }
  }, [flip, anim, leaf, step, maxLeaf, isMobile]);

  const goPrev = useCallback(() => {
    if (flip || anim) return;
    if (leaf - step < 0) return;
    if (isMobile) {
      setFlip({ dir: "prev", mobile: true, front: leaf, back: leaf - 1, under: leaf - 1 });
    } else {
      setFlip({ dir: "prev", front: leaf, back: leaf - 1, underLeft: leaf - 2, underRight: leaf + 1 });
    }
  }, [flip, anim, leaf, step, isMobile]);

  const jumpTo = useCallback((idx) => {
    if (flip || anim) return;
    setLeaf(snap(idx)); setTocOpen(false); setSearchOpen(false);
  }, [snap, flip, anim]);

  /* book open / close */
  const openBook = useCallback((startLeaf = 0) => {
    setLeaf(startLeaf); setAnim("opening");
    setTimeout(() => { setView("reading"); setAnim(""); }, 900);
  }, []);

  const closeBook = useCallback(() => {
    try { sessionStorage.setItem("bk-leaf", String(leaf)); } catch {}
    setAnim("closing");
    setTimeout(() => { setView("cover"); setAnim(""); }, 900);
  }, [leaf]);

  /* ch1 autoplay */
  useEffect(() => {
    const t = setInterval(() => setCh1Slide((s) => (s + 1) % CH1_SLIDES.length), 3500);
    return () => clearInterval(t);
  }, []);

  /* swipe */
  const touchRef = useRef(null);
  const onTouchStart = useCallback((e) => {
    touchRef.current = e.touches[0].clientX;
  }, []);
  const onTouchEnd = useCallback((e) => {
    if (touchRef.current === null) return;
    const dx = e.changedTouches[0].clientX - touchRef.current;
    touchRef.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) goNext(); else goPrev();
  }, [goNext, goPrev]);

  /* keyboard */
  useEffect(() => {
    if (view !== "reading") return;
    const onKey = (e) => {
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Escape") {
        if (searchOpen) { setSearchOpen(false); setQuery(""); }
        else if (tocOpen) setTocOpen(false);
        else if (focusMode) setFocusMode(false);
        else closeBook();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [view, goNext, goPrev, searchOpen, tocOpen, focusMode, closeBook]);

  const currentChapter = useMemo(() => {
    if (leaf >= GLOSSARY_START) return { num: "GL", title: "Glossary" };
    if (leaf < CH_START["01"])  return { num: "TOC", title: "Contents" };
    let cur = null;
    for (const ch of CHAPTERS) { if (CH_START[ch.num] <= leaf) cur = ch; }
    return cur;
  }, [leaf]);

  const chapterProgress = useMemo(() => {
    const ch = currentChapter;
    if (!ch || !ch.leaves) return null;
    const start = CH_START[ch.num];
    if (start === undefined) return null;
    const pos = leaf - start;
    const total = ch.leaves.length + (ch.leaves.length % 2 !== 0 ? 1 : 0);
    return { pos: Math.floor(pos / 2) + 1, total: Math.ceil(total / 2) };
  }, [leaf, currentChapter]);

  const toggleHighlight = useCallback((id) => {
    if (!highlighter) return;
    setHighlights((prev) => {
      const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n;
    });
  }, [highlighter]);

  const copyQuote = useCallback((text, id) => {
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  const bookmarkCurrent = useCallback(() => {
    setBookmark((prev) => prev === leaf ? null : leaf);
  }, [leaf]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX
      .filter((r) => r.snippet.toLowerCase().includes(q) || r.title.toLowerCase().includes(q))
      .slice(0, 12);
  }, [query]);

  /* ═══════════════════════════════════════════════════════════════════
     BLOCK RENDERER
     ═══════════════════════════════════════════════════════════════════ */

  const renderBlock = (b, key) => {
    switch (b.type) {
      case "eyebrow":
        return <div key={key} className="bk-eyebrow">{b.text}</div>;
      case "h1":
        return <h1 key={key} className="bk-h1">{b.text}</h1>;
      case "role":
        return <p key={key} className="bk-role">{b.text}</p>;
      case "h3":
        return <h3 key={key} className="bk-h3">{b.text}</h3>;
      case "p": {
        const active = highlights.has(key);
        return (
          <p
            key={key}
            className={`bk-p ${highlighter ? "bk-p--hl-mode" : ""} ${active ? "bk-p--hl" : ""}`}
            onClick={() => toggleHighlight(key)}
          >{b.text}</p>
        );
      }
      case "pull": {
        const pullId = `pull-${key}`;
        return (
          <blockquote key={key} className="bk-pull" id={pullId}>
            <span className="bk-pull-quote-icon" aria-hidden>"</span>
            <span>{b.text}</span>
            <button
              className={`bk-pull-copy ${copied === pullId ? "bk-pull-copy--done" : ""}`}
              onClick={() => copyQuote(b.text, pullId)}
              aria-label="Copy quote"
              title="Copy quote"
            >
              {copied === pullId ? <Check size={11} aria-hidden /> : <Copy size={11} aria-hidden />}
            </button>
          </blockquote>
        );
      }
      case "callout":
        return (
          <div key={key} className="bk-callout">
            <span className="bk-callout-icon"><Lightbulb size={14} aria-hidden /></span>
            <span>{b.text}</span>
          </div>
        );
      case "list":
        return b.ordered ? (
          <ol key={key} className="bk-ol">
            {b.items.map((it, i) => (
              <li key={i}><span className="bk-ol-num">{i + 1}</span><span>{it}</span></li>
            ))}
          </ol>
        ) : (
          <ul key={key} className="bk-ul">
            {b.items.map((it, i) => (
              <li key={i}><span className="bk-ul-dot" aria-hidden /><span>{it}</span></li>
            ))}
          </ul>
        );
      case "image":
        return (
          <figure key={key} className="bk-image">
            <div className="bk-image-inner">
              <ImageIcon size={24} aria-hidden />
              <span>{b.label}</span>
            </div>
          </figure>
        );
      case "chips":
        return (
          <div key={key} className="bk-chips-wrap">
            {b.label && <span className="bk-chips-label">{b.label}</span>}
            <div className="bk-chips">{b.items.map((it, i) => <span key={i} className="bk-chip">{it}</span>)}</div>
          </div>
        );
      case "divider":
        return <hr key={key} className="bk-divider" aria-hidden />;
      case "timeline":
        return (
          <div key={key} className="bk-timeline">
            {b.items.map((it, i) => (
              <div key={i} className="bk-timeline-item">
                <span className="bk-timeline-dot" aria-hidden />
                <div>
                  <span className="bk-timeline-year">{it.year}</span>
                  <span className="bk-timeline-text">{it.text}</span>
                </div>
              </div>
            ))}
          </div>
        );
      case "statrow":
        return (
          <div key={key} className="bk-statrow">
            {b.items.map((it, i) => (
              <div key={i} className="bk-stat">
                <span className="bk-stat-val">{it.value}</span>
                <span className="bk-stat-lbl">{it.label}</span>
              </div>
            ))}
          </div>
        );
      case "linkcard":
        return (
          <a key={key} className="bk-linkcard" href={b.url} target="_blank" rel="noopener noreferrer">
            <div className="bk-linkcard-inner">
              <span className="bk-linkcard-label">{b.label}</span>
              <span className="bk-linkcard-desc">{b.desc}</span>
            </div>
            <ExternalLink size={14} aria-hidden className="bk-linkcard-icon" />
          </a>
        );
      case "finalcta":
        return (
          <div key={key} className="bk-finalcta">
            <a href="/contact" className="bk-finalcta-btn bk-finalcta-btn--primary">
              Start a conversation <ArrowRight size={14} aria-hidden />
            </a>
            <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer" className="bk-finalcta-btn bk-finalcta-btn--secondary">
              Read the LIONXE™ Framework <ExternalLink size={13} aria-hidden />
            </a>
          </div>
        );
      default:
        return null;
    }
  };

  /* ═══════════════════════════════════════════════════════════════════
     LEAF RENDERER
     ═══════════════════════════════════════════════════════════════════ */

  const renderLeaf = (lf, leafIdx) => {
    if (!lf) return <div className="bk-page bk-page--empty" />;
    const key = `lf${leafIdx}`;

    if (lf.kind === "blank")
      return <div className="bk-page bk-page--blank" />;

    if (lf.kind === "toc-a") return (
      <div className="bk-page bk-page--toc-intro">
        <div className="bk-toc-brand">
          <div className="bk-toc-mark">S</div>
          <div>
            <div className="bk-toc-title">The Making of an Architect</div>
            <div className="bk-toc-sub">The journey of Sufian Mustafa</div>
          </div>
        </div>
        <p className="bk-toc-blurb">A first-person account — from a single line of HTML in a university classroom to a proprietary auditing framework. Ten chapters, built layer by layer.</p>
        <div className="bk-toc-meta">
          <span><GraduationCap size={13} aria-hidden /> MSc Computer Science</span>
          <span><MapPin size={13} aria-hidden /> Rawalpindi, PK</span>
          <span><Globe size={13} aria-hidden /> 3-platform ecosystem</span>
        </div>
        <div className="bk-toc-hint">Use ← → arrow keys or swipe to navigate · Esc to close</div>
      </div>
    );

    if (lf.kind === "toc-b") return (
      <div className="bk-page bk-page--toc">
        <div className="bk-eyebrow" style={{ marginBottom: "10px" }}>Table of Contents</div>
        <div className="bk-toc-list">
          {CHAPTERS.map((ch) => (
            <button key={ch.num} className="bk-toc-item" onClick={() => jumpTo(CH_START[ch.num])}>
              <span className="bk-toc-num">{ch.num}</span>
              <span className="bk-toc-name">{ch.title}</span>
              <span className="bk-toc-time"><Clock size={10} aria-hidden /> ~{ch.readTime}m</span>
              <ChevronRight size={13} className="bk-toc-arrow" aria-hidden />
            </button>
          ))}
          <button className="bk-toc-item bk-toc-item--gloss" onClick={() => jumpTo(GLOSSARY_START)}>
            <span className="bk-toc-num"><Hash size={12} aria-hidden /></span>
            <span className="bk-toc-name">Glossary</span>
            <span className="bk-toc-time" />
            <ChevronRight size={13} className="bk-toc-arrow" aria-hidden />
          </button>
        </div>
      </div>
    );

    if (lf.kind === "ch1-content") return (
      <div className="bk-page bk-page--content">
        {lf.blocks.map((b, i) => renderBlock(b, `${key}-${i}`))}
      </div>
    );

    if (lf.kind === "ch1-slider") return (
      <div className="bk-page bk-page--slider">
        <div className="bk-slider">
          <div className="bk-slider-stage">
            {CH1_SLIDES.map((s, i) => (
              <div
                key={i}
                className={`bk-slide ${i === ch1Slide ? "bk-slide--active" : ""}`}
                style={{ "--tint": s.tint }}
              >
                <div className="bk-slide-ph">
                  <ImageIcon size={28} aria-hidden />
                  <span>{s.label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bk-slider-dots">
            {CH1_SLIDES.map((_, i) => (
              <button
                key={i}
                className={`bk-slider-dot ${i === ch1Slide ? "bk-slider-dot--active" : ""}`}
                onClick={() => setCh1Slide(i)}
                aria-label={`Image ${i + 1}`}
              />
            ))}
          </div>
          <div className="bk-slider-labels">
            <p className="bk-slider-cap">Rawalpindi, Pakistan</p>
            <p className="bk-slider-cap">Solo-built ecosystem</p>
            <p className="bk-slider-cap">Every layer, one person</p>
            <p className="bk-slider-cap">Replace with your photos</p>
          </div>
        </div>
      </div>
    );

    if (lf.kind === "content") return (
      <div className="bk-page bk-page--content">
        {lf.blocks.map((b, i) => renderBlock(b, `${key}-${i}`))}
      </div>
    );

    if (lf.kind === "glossary-a") return (
      <div className="bk-page bk-page--content">
        <div className="bk-eyebrow">Reference</div>
        <h1 className="bk-h1">Glossary</h1>
        <p className="bk-p">Key terms and systems referenced throughout the journey.</p>
        <div className="bk-gloss-list">
          {GLOSSARY.slice(0, 6).map((g) => (
            <div key={g.term} className="bk-gloss-item">
              <span className="bk-gloss-term">{g.term}</span>
              <span className="bk-gloss-def">{g.def}</span>
            </div>
          ))}
        </div>
      </div>
    );

    if (lf.kind === "glossary-b") return (
      <div className="bk-page bk-page--content">
        <div className="bk-gloss-list" style={{ marginTop: "1.6rem" }}>
          {GLOSSARY.slice(6).map((g) => (
            <div key={g.term} className="bk-gloss-item">
              <span className="bk-gloss-term">{g.term}</span>
              <span className="bk-gloss-def">{g.def}</span>
            </div>
          ))}
        </div>
      </div>
    );

    if (lf.kind === "final-a") return (
      <div className="bk-page bk-page--final-a">
        <div className="bk-final-mark"><Sparkles size={22} aria-hidden /></div>
        <h2 className="bk-final-title">The story continues.</h2>
        <p className="bk-final-body">The most important chapters are the ones still being written — every system deepened, every platform strengthened, every article built to outlast the trend.</p>
        <p className="bk-final-body">If you've read this far, you understand how this work thinks and what it builds.</p>
      </div>
    );

    if (lf.kind === "final-b") return (
      <div className="bk-page bk-page--final-b">
        <div className="bk-final-next-label">What would you like to do next?</div>
        <div className="bk-final-next-grid">
          <a href="/contact" className="bk-final-next-card bk-final-next-card--primary">
            <Target size={20} aria-hidden />
            <span className="bk-final-next-card-title">Start a conversation</span>
            <span className="bk-final-next-card-sub">Strategy, consultation, or collaboration</span>
          </a>
          <a href="https://lionxeframework.com" target="_blank" rel="noopener noreferrer" className="bk-final-next-card">
            <Shield size={20} aria-hidden />
            <span className="bk-final-next-card-title">Read the LIONXE™ Framework</span>
            <span className="bk-final-next-card-sub">The full doctrine at lionxeframework.com</span>
          </a>
          <a href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer" className="bk-final-next-card">
            <Globe size={20} aria-hidden />
            <span className="bk-final-next-card-title">Explore DoItWithAI.tools</span>
            <span className="bk-final-next-card-sub">The live AI SEO authority platform</span>
          </a>
        </div>
      </div>
    );

    return <div className="bk-page bk-page--empty" />;
  };

  /* ═══════════════════════════════════════════════════════════════════
     RENDER
     ═══════════════════════════════════════════════════════════════════ */

  return (
    <section
      className={`about-root bk-font-${fontSize}`}
      style={{ "--accent": ACCENT }}
      aria-label="About Sufian Mustafa — The Making of an Architect"
    >
      {/* ambient bg */}
      <div className="about-bg" aria-hidden>
        <div className="about-bg-grid" />
        <div className="about-bg-glow about-bg-glow--1" />
        <div className="about-bg-glow about-bg-glow--2" />
      </div>

      {/* ═══════════════ COVER ═══════════════ */}
      {(view === "cover" || anim === "opening" || anim === "closing") && (
        <div className={`bk-cover-wrap ${anim === "opening" ? "bk-cover-wrap--opening" : ""} ${anim === "closing" ? "bk-cover-wrap--closing" : ""}`}>
          <div className="bk-cover">
            <div className="bk-cover-spine" aria-hidden />
            <div className="bk-cover-content">
              <div className="bk-cover-badge"><BookOpen size={13} aria-hidden /> An illustrated journey</div>
              <div className="bk-cover-mark">S</div>
              <h1 className="bk-cover-title">The Making of an Architect</h1>
              <p className="bk-cover-author">Sufian Mustafa</p>
              <p className="bk-cover-tag">Growth Systems Architect · LIONXE™ Creator · Digital Ecosystem Founder</p>

              <div className="bk-cover-actions">
                <button className="bk-cover-open" onClick={() => openBook(0)}>
                  Open the book <ArrowRight size={15} aria-hidden />
                </button>
                {resumeLeaf !== null && resumeLeaf > 0 && (
                  <button
                    className="bk-cover-resume"
                    onClick={() => { openBook(resumeLeaf); setResumeLeaf(null); }}
                  >
                    <BookMarked size={14} aria-hidden />
                    Continue reading
                  </button>
                )}
              </div>
            </div>
            <div className="bk-cover-foil"   aria-hidden />
            <div className="bk-cover-inner-shadow" aria-hidden />
          </div>
          <p className="bk-cover-hint">A first-person account, built layer by layer.</p>
        </div>
      )}

      {/* ═══════════════ READER ═══════════════ */}
      {(view === "reading" || anim === "opening" || anim === "closing") && (
        <div className={`bk-reader ${focusMode ? "bk-reader--focus" : ""} ${anim === "opening" ? "bk-reader--opening" : ""} ${anim === "closing" ? "bk-reader--closing" : ""}`}>

          {/* toolbar */}
          <div className={`bk-toolbar ${focusMode ? "bk-toolbar--focus" : ""}`}>
            <div className="bk-toolbar-left">
              <button className="bk-tool" onClick={closeBook} aria-label="Close book" title="Close book">
                <X size={16} aria-hidden />
              </button>
              <button className="bk-tool" onClick={() => setTocOpen((v) => !v)} aria-label="Table of contents" title="Contents">
                <List size={16} aria-hidden />
              </button>
              <button
                className={`bk-tool ${bookmark === leaf ? "bk-tool--on" : ""}`}
                onClick={bookmarkCurrent}
                aria-label={bookmark === leaf ? "Remove bookmark" : "Bookmark this page"}
                title="Bookmark"
              >
                {bookmark === leaf ? <BookMarked size={16} aria-hidden /> : <Bookmark size={16} aria-hidden />}
              </button>
            </div>

            <div className="bk-toolbar-center">
              <span className="bk-toolbar-chapter">
                {currentChapter?.num === "TOC" || currentChapter?.num === "GL"
                  ? currentChapter.title
                  : `Ch ${currentChapter?.num} · ${currentChapter?.title}`}
              </span>
              {chapterProgress && (
                <span className="bk-toolbar-chprog">
                  {chapterProgress.pos}/{chapterProgress.total}
                </span>
              )}
            </div>

            <div className="bk-toolbar-right">
              {/* font size */}
              <div className="bk-font-switcher" role="group" aria-label="Font size">
                {["compact","normal","large"].map((sz) => (
                  <button
                    key={sz}
                    className={`bk-font-btn ${fontSize === sz ? "bk-font-btn--on" : ""}`}
                    onClick={() => setFontSize(sz)}
                    aria-label={`Font size ${sz}`}
                    aria-pressed={fontSize === sz}
                  >
                    <Type size={sz === "compact" ? 11 : sz === "normal" ? 13 : 15} aria-hidden />
                  </button>
                ))}
              </div>
              <button
                className={`bk-tool ${highlighter ? "bk-tool--on" : ""}`}
                onClick={() => setHighlighter((v) => !v)}
                aria-label="Highlighter"
                aria-pressed={highlighter}
                title="Highlighter"
              >
                <Highlighter size={16} aria-hidden />
              </button>
              <button
                className={`bk-tool ${focusMode ? "bk-tool--on" : ""}`}
                onClick={() => setFocusMode((v) => !v)}
                aria-label={focusMode ? "Exit focus mode" : "Focus mode"}
                title="Focus mode"
              >
                {focusMode ? <Minimize2 size={16} aria-hidden /> : <Maximize2 size={16} aria-hidden />}
              </button>
              <button className="bk-tool" onClick={() => setSearchOpen(true)} aria-label="Search" title="Search">
                <Search size={16} aria-hidden />
              </button>
            </div>
          </div>

          {/* progress bar */}
          <div className="bk-progress">
            <div className="bk-progress-fill" style={{ width: `${progress}%` }} />
          </div>

          {/* chapter rail */}
          {!isMobile ? (
            <div className="bk-rail" aria-hidden>
              {CHAPTERS.map((ch) => {
                const isCur = currentChapter?.num === ch.num;
                return (
                  <button
                    key={ch.num}
                    className={`bk-rail-dot ${isCur ? "bk-rail-dot--active" : ""}`}
                    onClick={() => jumpTo(CH_START[ch.num])}
                    title={`Ch ${ch.num} — ${ch.title}`}
                  >
                    <span className="bk-rail-label">{ch.num}</span>
                  </button>
                );
              })}
            </div>
          ) : (
            <button className="bk-mobile-chap-btn" onClick={() => setTocOpen(true)} aria-label="Open table of contents">
              {currentChapter?.num === "TOC" || currentChapter?.num === "GL"
                ? currentChapter.title
                : `Ch ${currentChapter?.num} of 10 · ${currentChapter?.title}`}
              <ChevronRight size={13} aria-hidden />
            </button>
          )}

          {/* spread */}
          <div
            className="bk-stage"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <button
              className="bk-nav bk-nav--prev"
              onClick={goPrev}
              disabled={leaf <= 0 || !!flip}
              aria-label="Previous page"
            >
              <ChevronLeft size={21} aria-hidden />
            </button>

            <div className={`bk-spread ${flip ? "bk-spread--flipping" : ""}`}>
              {!isMobile && (
                <>
                  <div className="bk-leaf bk-leaf--left">
                    {renderLeaf(
                      LEAVES[flip ? flip.underLeft : leaf],
                      flip ? flip.underLeft : leaf,
                    )}
                  </div>
                  <div className="bk-spine" aria-hidden />
                  <div className="bk-leaf bk-leaf--right">
                    {renderLeaf(
                      LEAVES[flip ? flip.underRight : leaf + 1],
                      flip ? flip.underRight : leaf + 1,
                    )}
                  </div>
                  {flip && (
                    <div
                      className={`bk-flip bk-flip--${flip.dir}`}
                      onAnimationEnd={(e) => { if (e.target === e.currentTarget) finalizeFlip(); }}
                    >
                      <div className="bk-flip-face bk-flip-front">{renderLeaf(LEAVES[flip.front], flip.front)}</div>
                      <div className="bk-flip-face bk-flip-back">{renderLeaf(LEAVES[flip.back], flip.back)}</div>
                      <div className="bk-flip-shadow" aria-hidden />
                    </div>
                  )}
                </>
              )}
              {isMobile && (
                <>
                  <div className="bk-leaf bk-leaf--left">
                    {renderLeaf(LEAVES[flip ? flip.under : leaf], flip ? flip.under : leaf)}
                  </div>
                  {flip && (
                    <div
                      className={`bk-flip bk-flip--m-${flip.dir}`}
                      onAnimationEnd={(e) => { if (e.target === e.currentTarget) finalizeFlip(); }}
                    >
                      <div className="bk-flip-face bk-flip-front">{renderLeaf(LEAVES[flip.front], flip.front)}</div>
                      <div className="bk-flip-face bk-flip-back">{renderLeaf(LEAVES[flip.back], flip.back)}</div>
                      <div className="bk-flip-shadow" aria-hidden />
                    </div>
                  )}
                </>
              )}
            </div>

            <button
              className="bk-nav bk-nav--next"
              onClick={goNext}
              disabled={leaf + step > maxLeaf || !!flip}
              aria-label="Next page"
            >
              <ChevronRight size={21} aria-hidden />
            </button>
          </div>

          {/* footer */}
          <div className="bk-footer">
            <span>
              {isMobile
                ? `Page ${leaf + 1} of ${LEAVES.length}`
                : `Pages ${leaf + 1}–${Math.min(leaf + 2, LEAVES.length)} of ${LEAVES.length}`}
            </span>
            {highlighter && (
              <span className="bk-footer-hint">
                <Highlighter size={11} aria-hidden /> Tap any paragraph to highlight
              </span>
            )}
            {bookmark !== null && (
              <span className="bk-footer-bookmark">
                <Bookmark size={11} aria-hidden />
                Bookmarked p.{bookmark + 1}
                {bookmark !== leaf && (
                  <button className="bk-footer-jump" onClick={() => jumpTo(bookmark)}>
                    Jump there
                  </button>
                )}
              </span>
            )}
          </div>

          {/* ── focus mode overlay ── */}
          {focusMode && (
            <div className="bk-focus-overlay" aria-hidden onClick={() => setFocusMode(false)}>
              <button className="bk-focus-exit" onClick={() => setFocusMode(false)}>
                <Minimize2 size={14} aria-hidden /> Exit Focus
              </button>
            </div>
          )}

          {/* ── TOC drawer ── */}
          {tocOpen && (
            <div className="bk-drawer" role="dialog" aria-label="Table of contents" aria-modal="true">
              <div className="bk-drawer-head">
                <span>Contents</span>
                <button className="bk-tool" onClick={() => setTocOpen(false)} aria-label="Close contents">
                  <X size={15} aria-hidden />
                </button>
              </div>
              <div className="bk-drawer-list">
                {CHAPTERS.map((ch) => (
                  <button
                    key={ch.num}
                    className={`bk-drawer-item ${currentChapter?.num === ch.num ? "bk-drawer-item--active" : ""}`}
                    onClick={() => jumpTo(CH_START[ch.num])}
                  >
                    <span className="bk-toc-num">{ch.num}</span>
                    <span className="bk-toc-name">{ch.title}</span>
                    <span className="bk-toc-time"><Clock size={9} aria-hidden /> ~{ch.readTime}m</span>
                  </button>
                ))}
                <button className="bk-drawer-item" onClick={() => jumpTo(GLOSSARY_START)}>
                  <span className="bk-toc-num"><Hash size={11} aria-hidden /></span>
                  <span className="bk-toc-name">Glossary</span>
                  <span className="bk-toc-time" />
                </button>
              </div>
            </div>
          )}

          {/* ── Search overlay ── */}
          {searchOpen && (
            <div className="bk-search" role="dialog" aria-label="Search the book" aria-modal="true">
              <div className="bk-search-box">
                <div className="bk-search-input-row">
                  <Search size={15} aria-hidden />
                  <input
                    autoFocus
                    className="bk-search-input"
                    placeholder="Search the book…"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button
                    className="bk-tool"
                    onClick={() => { setSearchOpen(false); setQuery(""); }}
                    aria-label="Close search"
                  >
                    <X size={15} aria-hidden />
                  </button>
                </div>
                <div className="bk-search-results">
                  {query && searchResults.length === 0 && (
                    <p className="bk-search-empty">No matches found.</p>
                  )}
                  {searchResults.map((r, i) => (
                    <button
                      key={i}
                      className="bk-search-result"
                      onClick={() => { jumpTo(r.leaf); setSearchOpen(false); setQuery(""); }}
                    >
                      <span className="bk-search-result-ch">
                        Ch {r.chNum} · {r.title} · Page {r.leaf + 1}
                      </span>
                      <span className="bk-search-result-snip">
                        {r.snippet.length > 110 ? r.snippet.slice(0, 110) + "…" : r.snippet}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}