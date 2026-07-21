"use client";

import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import {
  Clock, Calendar, Share2, Copy, Check, Twitter, Linkedin, Link2,
  ArrowUp, List, Type, ChevronRight, Quote as QuoteIcon, Lightbulb,
  CheckCircle2, X, Maximize2, ArrowRight, Tag,
} from "lucide-react";
import "./blog.css";

const ACCENT = "#5271ff";

/* ════════════════════════════════════════════════════════════════════════
   ARTICLE DATA  (later: mapped from Sanity Portable Text)
   ════════════════════════════════════════════════════════════════════════ */
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ARTICLE = {
  category: "AI SEO Content Writing",
  title: "How to Write SEO Meta Titles With AI That Actually Rank",
  dek: "A repeatable, human-first framework for using AI to craft meta titles that win clicks in both Google and AI search — without sounding like a robot.",
  author: { name: "Sufian Mustafa", role: "AI SEO Strategist · LIONXE ™ Creator", initials: "SM", bio: "Founder of DoItWithAI.tools and creator of the LIONXE ™ framework. Sufian writes about engineering search authority that compounds in the AI-search era." },
  date: "March 18, 2026",
  feature: "Feature image — meta titles & AI search",
  tags: ["Meta Titles", "AI SEO", "On-Page SEO", "GEO"],
};

const h2 = (text) => ({ type: "h2", text, id: slug(text) });
const h3 = (text) => ({ type: "h3", text, id: slug(text) });
const p = (text, dropcap) => ({ type: "p", text, dropcap });
const ul = (items) => ({ type: "ul", items });
const ol = (items) => ({ type: "ol", items });
const quote = (text, cite) => ({ type: "quote", text, cite });
const image = (label, caption) => ({ type: "image", label, caption });
const callout = (title, text) => ({ type: "callout", title, text });
const takeaways = (items) => ({ type: "takeaways", items });
const table = (head, rows) => ({ type: "table", head, rows });
const code = (lang, lines) => ({ type: "code", lang, lines });

const BLOCKS = [
  p("Your meta title is the single most-read sentence you will ever write — and most of it is decided in the half-second before anyone clicks. In an era where Google and AI answer engines both compete for that attention, a great meta title is no longer a nice-to-have. It is the difference between an article that compounds traffic for years and one that quietly disappears.", true),
  takeaways([
    "A meta title is a promise — match it to search intent or the click never happens.",
    "AI is a drafting partner, not the author; your judgment sets the standard.",
    "Lead with the primary keyword, but write for a human skimming ten results.",
    "Optimize for AI search too: clarity and specificity get you cited, not just ranked.",
  ]),

  h2("Why meta titles still decide your traffic"),
  p("Rankings get the attention, but titles get the clicks. You can earn position three and still lose to position five if their title makes a sharper promise. Search engines reward titles that genuinely satisfy intent, and readers reward the ones that respect their time."),
  p("The mistake most people make is treating the meta title as an afterthought — something to paste in once the article is done. The professionals treat it as the headline of the whole operation: written deliberately, tested, and refined."),

  h2("The anatomy of a meta title that ranks"),
  p("Before bringing AI into the process, you need to know what a strong title is actually made of. Every high-performing meta title balances four forces:"),
  h3("1. The primary keyword, placed early"),
  p("Search engines and skimming readers both weight the opening words most heavily. Lead with the term people actually search."),
  h3("2. A specific, human promise"),
  ul([
    "Numbers and specifics ('5-step framework', '2026') signal substance.",
    "Active, confident language outperforms vague phrasing.",
    "The promise must match what the page truly delivers — no bait.",
  ]),
  h3("3. The right length"),
  p("Aim for roughly 50–60 characters so the title doesn't get truncated in results. Front-load meaning in case it does."),
  image("Anatomy diagram — keyword, promise, length, brand", "Each meta title balances keyword placement, a specific promise, and length."),

  h2("A 5-step framework for writing meta titles with AI"),
  p("Here is the repeatable process I use. AI accelerates every step, but the strategy and the final call stay human."),
  ol([
    "Define the intent. State, in one sentence, exactly what the searcher wants. This becomes the prompt's anchor.",
    "Generate ten variations. Ask the AI for ten distinct angles — not one 'best' title. Volume reveals options you wouldn't reach alone.",
    "Score against the anatomy. Check each for keyword placement, specificity, and length. Cut anything generic.",
    "Humanize the finalists. Rewrite the top three in your own voice so they sound written, not assembled.",
    "Pick the sharpest promise. Choose the title that makes the boldest claim you can actually keep.",
  ]),
  quote("Don't ask AI for the best title. Ask it for ten honest options, then bring the judgment AI can't. The title is yours; the speed is the machine's.", "The LIONXE ™ approach to AI-assisted writing"),

  h2("Meta title formulas (with examples)"),
  p("Formulas aren't crutches — they're starting points you adapt. Here are four that consistently perform, with examples you can model:"),
  table(
    ["Formula", "Pattern", "Example"],
    [
      ["The How-To", "How to [Outcome] (Without [Pain])", "How to Rank in AI Search Without Chasing Algorithms"],
      ["The Numbered List", "[N] [Things] for [Goal]", "7 On-Page Signals That Still Move Rankings in 2026"],
      ["The Framework", "The [Name] Framework for [Outcome]", "The LIONXE ™ Framework for Content Built to Last"],
      ["The Direct Promise", "[Primary Keyword]: [Specific Benefit]", "AI SEO: How to Become the Answer, Not Just a Result"],
    ]
  ),

  h2("Common mistakes to avoid"),
  ul([
    "Keyword stuffing — repeating the term until it reads like spam.",
    "Over-promising — a title the article can't honor erodes trust and rankings.",
    "Burying the keyword at the end where it gets truncated.",
    "Letting AI's default voice ship unedited — it's confident, generic, and forgettable.",
  ]),
  callout("A quick gut-check", "Read your title out loud as if you were telling a friend why they should read the article. If it sounds like a brochure, rewrite it until it sounds like you."),

  h2("Optimizing for AI search (GEO and AEO)"),
  p("Traditional SEO asks: will this rank? AI search asks: will this get cited? The good news is they reward the same thing — clarity and specificity. A title that states a precise, well-scoped answer is exactly what an answer engine wants to quote."),
  code("text", [
    "Weak:   Tips for better titles",
    "Strong: How to Write SEO Meta Titles With AI That Rank",
    "Why:    specificity + intent + keyword = quotable",
  ]),
  p("Write for the human skimming results and the machine parsing meaning, and you rarely have to choose between them."),

  h2("Conclusion"),
  p("A meta title is a small piece of text carrying an enormous amount of weight. Use AI to move faster and explore further, but keep your hand on the wheel: define the intent, generate options, score them honestly, and humanize the winner. Do that consistently and your titles stop chasing clicks — they start earning them."),
];

/* ════════════════════════════════════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════════════════════════════════════ */
export default function BlogPost() {
  const articleRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(null);
  const [fontSize, setFontSize] = useState("md"); // sm | md | lg
  const [copied, setCopied] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [tocOpen, setTocOpen] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [codeCopied, setCodeCopied] = useState(null);

  const toc = useMemo(() => BLOCKS.filter((b) => b.type === "h2").map((b) => ({ id: b.id, text: b.text })), []);
  const readTime = useMemo(() => {
    const words = BLOCKS.reduce((n, b) => n + ((b.text || "") + (b.items ? b.items.join(" ") : "") + (b.lines ? b.lines.join(" ") : "")).split(/\s+/).length, 0);
    return Math.max(1, Math.round(words / 200));
  }, []);

  /* load saved font size */
  useEffect(() => {
    try { const s = localStorage.getItem("blog-fontsize"); if (s) setFontSize(s); } catch {}
  }, []);
  const setSize = useCallback((s) => { setFontSize(s); try { localStorage.setItem("blog-fontsize", s); } catch {} }, []);

  /* reading progress + back-to-top */
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const top = el.offsetTop;
      const h = el.offsetHeight - window.innerHeight;
      const scrolled = window.scrollY - top;
      setProgress(Math.min(100, Math.max(0, (scrolled / Math.max(1, h)) * 100)));
      setShowTop(window.scrollY > 700);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* scroll-spy on h2 headings */
  useEffect(() => {
    const ids = toc.map((t) => t.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActiveId(vis[0].target.id);
      },
      { rootMargin: "-90px 0px -65% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [toc]);

  const copyLink = useCallback(() => {
    try { navigator.clipboard.writeText(window.location.href); setCopied(true); setTimeout(() => setCopied(false), 1800); } catch {}
  }, []);
  const copyCode = useCallback((i, text) => {
    try { navigator.clipboard.writeText(text); setCodeCopied(i); setTimeout(() => setCodeCopied(null), 1600); } catch {}
  }, []);
  const jumpTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) { window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" }); setTocOpen(false); }
  }, []);

  const shareX = typeof window !== "undefined" ? `https://twitter.com/intent/tweet?text=${encodeURIComponent(ARTICLE.title)}&url=${encodeURIComponent(window.location.href)}` : "#";
  const shareLi = typeof window !== "undefined" ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}` : "#";

  /* ── block renderer ── */
  const renderBlock = (b, i) => {
    switch (b.type) {
      case "p": return <p key={i} className={`bp-p ${b.dropcap ? "bp-p--dropcap" : ""}`}>{b.text}</p>;
      case "h2": return (
        <h2 key={i} id={b.id} className="bp-h2"><a className="bp-anchor" href={`#${b.id}`} aria-label="Link to section"><Link2 size={16} aria-hidden /></a>{b.text}</h2>
      );
      case "h3": return <h3 key={i} id={b.id} className="bp-h3">{b.text}</h3>;
      case "h4": return <h4 key={i} className="bp-h4">{b.text}</h4>;
      case "ul": return <ul key={i} className="bp-ul">{b.items.map((it, j) => <li key={j}><span className="bp-ul-dot" />{it}</li>)}</ul>;
      case "ol": return <ol key={i} className="bp-ol">{b.items.map((it, j) => <li key={j}><span className="bp-ol-num">{j + 1}</span><span>{it}</span></li>)}</ol>;
      case "quote": return (
        <blockquote key={i} className="bp-quote"><QuoteIcon size={22} aria-hidden className="bp-quote-mark" /><p>{b.text}</p>{b.cite && <cite>— {b.cite}</cite>}</blockquote>
      );
      case "image": return (
        <figure key={i} className="bp-figure">
          <button className="bp-figure-btn" onClick={() => setLightbox(b)} aria-label="Expand image">
            <div className="bp-figure-ph"><Maximize2 size={20} aria-hidden /><span>{b.label}</span></div>
          </button>
          {b.caption && <figcaption className="bp-figcaption">{b.caption}</figcaption>}
        </figure>
      );
      case "callout": return (
        <div key={i} className="bp-callout"><span className="bp-callout-icon"><Lightbulb size={18} aria-hidden /></span><div><strong className="bp-callout-title">{b.title}</strong><p className="bp-callout-text">{b.text}</p></div></div>
      );
      case "takeaways": return (
        <div key={i} className="bp-takeaways"><div className="bp-takeaways-head"><CheckCircle2 size={17} aria-hidden /> Key takeaways</div><ul>{b.items.map((it, j) => <li key={j}><Check size={15} aria-hidden />{it}</li>)}</ul></div>
      );
      case "table": return (
        <div key={i} className="bp-table-wrap"><table className="bp-table"><thead><tr>{b.head.map((h, j) => <th key={j}>{h}</th>)}</tr></thead><tbody>{b.rows.map((r, j) => <tr key={j}>{r.map((c, k) => <td key={k}>{c}</td>)}</tr>)}</tbody></table></div>
      );
      case "code": {
        const text = b.lines.join("\n");
        return (
          <div key={i} className="bp-code"><div className="bp-code-bar"><span className="bp-code-lang">{b.lang}</span><button className="bp-code-copy" onClick={() => copyCode(i, text)}>{codeCopied === i ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}</button></div><pre><code>{b.lines.map((l, j) => <span key={j} className="bp-code-line">{l}</span>)}</code></pre></div>
        );
      }
      default: return null;
    }
  };

  return (
    <div className="bp-root" style={{ "--accent": ACCENT }}>
      {/* progress bar */}
      <div className="bp-progress" aria-hidden><div className="bp-progress-fill" style={{ width: `${progress}%` }} /></div>

      {/* ── header ── */}
      <header className="bp-header">
        <div className="bp-header-inner">
          <a className="bp-category" href="/insights"><Tag size={13} aria-hidden /> {ARTICLE.category}</a>
          <h1 className="bp-title">{ARTICLE.title}</h1>
          <p className="bp-dek">{ARTICLE.dek}</p>
          <div className="bp-meta">
            <div className="bp-author">
              <span className="bp-avatar">{ARTICLE.author.initials}</span>
              <div className="bp-author-text"><span className="bp-author-name">{ARTICLE.author.name}</span><span className="bp-author-role">{ARTICLE.author.role}</span></div>
            </div>
            <span className="bp-meta-dot" />
            <span className="bp-meta-item"><Calendar size={14} aria-hidden /> {ARTICLE.date}</span>
            <span className="bp-meta-dot" />
            <span className="bp-meta-item"><Clock size={14} aria-hidden /> {readTime} min read</span>
          </div>
        </div>
      </header>

      {/* feature image */}
      <div className="bp-feature">
        <button className="bp-feature-btn" onClick={() => setLightbox({ label: ARTICLE.feature })} aria-label="Expand feature image">
          <div className="bp-feature-ph"><Maximize2 size={22} aria-hidden /><span>{ARTICLE.feature}</span></div>
        </button>
      </div>

      {/* ── layout ── */}
      <div className="bp-layout">
        {/* left: ToC + prefs */}
        <aside className="bp-rail bp-rail--left">
          <div className="bp-rail-sticky">
            <div className="bp-prefs">
              <span className="bp-prefs-label"><Type size={13} aria-hidden /> Text size</span>
              <div className="bp-prefs-btns">
                {["sm", "md", "lg"].map((s) => <button key={s} className={`bp-prefs-btn ${fontSize === s ? "is-on" : ""}`} onClick={() => setSize(s)} aria-label={`Text ${s}`}>{s === "sm" ? "A−" : s === "md" ? "A" : "A+"}</button>)}
              </div>
            </div>
            <nav className="bp-toc" aria-label="Table of contents">
              <div className="bp-toc-title"><List size={14} aria-hidden /> On this page</div>
              <ul>{toc.map((t) => <li key={t.id}><button className={`bp-toc-link ${activeId === t.id ? "is-active" : ""}`} onClick={() => jumpTo(t.id)}>{t.text}</button></li>)}</ul>
            </nav>
          </div>
        </aside>

        {/* center: article */}
        <article ref={articleRef} className={`bp-article bp-fs-${fontSize}`}>
          {/* mobile ToC */}
          <div className="bp-toc-mobile">
            <button className="bp-toc-mobile-btn" onClick={() => setTocOpen((v) => !v)} aria-expanded={tocOpen}><List size={15} aria-hidden /> On this page <ChevronRight size={15} className={`bp-toc-chev ${tocOpen ? "is-open" : ""}`} aria-hidden /></button>
            {tocOpen && <ul className="bp-toc-mobile-list">{toc.map((t) => <li key={t.id}><button className={activeId === t.id ? "is-active" : ""} onClick={() => jumpTo(t.id)}>{t.text}</button></li>)}</ul>}
          </div>

          {BLOCKS.map(renderBlock)}

          {/* share row */}
          <div className="bp-share-row">
            <span className="bp-share-label"><Share2 size={15} aria-hidden /> Share this article</span>
            <div className="bp-share-btns">
              <button className="bp-share-btn" onClick={copyLink} aria-label="Copy link">{copied ? <Check size={15} /> : <Link2 size={15} />}{copied ? "Copied" : "Copy link"}</button>
              <a className="bp-share-btn" href={shareX} target="_blank" rel="noopener noreferrer" aria-label="Share on X"><Twitter size={15} /> X</a>
              <a className="bp-share-btn" href={shareLi} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><Linkedin size={15} /> LinkedIn</a>
            </div>
          </div>

          {/* tags */}
          <div className="bp-tags">{ARTICLE.tags.map((t) => <a key={t} className="bp-tag" href={`/tag/${slug(t)}`}>#{t}</a>)}</div>

          {/* author bio */}
          <div className="bp-bio">
            <span className="bp-bio-avatar">{ARTICLE.author.initials}</span>
            <div className="bp-bio-text">
              <span className="bp-bio-by">Written by</span>
              <span className="bp-bio-name">{ARTICLE.author.name}</span>
              <span className="bp-bio-role">{ARTICLE.author.role}</span>
              <p className="bp-bio-desc">{ARTICLE.author.bio}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bp-cta">
            <h3 className="bp-cta-title">Build authority that compounds</h3>
            <p className="bp-cta-text">Get practical AI SEO frameworks and templates, straight from the workbench.</p>
            <a className="bp-cta-btn" href="https://doitwithai.tools" target="_blank" rel="noopener noreferrer">Explore DoItWithAI.tools <ArrowRight size={16} aria-hidden /></a>
          </div>
        </article>

        {/* right: share rail */}
        <aside className="bp-rail bp-rail--right">
          <div className="bp-rail-sticky bp-share-rail">
            <button className="bp-share-icon" onClick={copyLink} aria-label="Copy link">{copied ? <Check size={17} /> : <Link2 size={17} />}</button>
            <a className="bp-share-icon" href={shareX} target="_blank" rel="noopener noreferrer" aria-label="Share on X"><Twitter size={17} /></a>
            <a className="bp-share-icon" href={shareLi} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><Linkedin size={17} /></a>
          </div>
        </aside>
      </div>

      {/* back to top */}
      <button className={`bp-totop ${showTop ? "is-show" : ""}`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"><ArrowUp size={18} aria-hidden /></button>

      {/* lightbox */}
      {lightbox && (
        <div className="bp-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-label="Image preview">
          <button className="bp-lightbox-close" aria-label="Close"><X size={20} /></button>
          <div className="bp-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <div className="bp-lightbox-ph"><span>{lightbox.label}</span></div>
            {lightbox.caption && <p className="bp-lightbox-cap">{lightbox.caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
}