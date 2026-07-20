"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────────────────────────────────────
   SOCIAL LINKS
───────────────────────────────────────────────────────────────────────────── */
const SOCIALS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sufian-mustafa/",
    viewBox: "0 0 17 16",
    path: "M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z",
  },
  {
    id: "x",
    label: "X",
    href: "https://x.com/SufianWebDev",
    viewBox: "0 0 1200 1227",
    path: "M714.163 519.284L1160.89 0H1050.25L668.898 441.35L356.51 0H0L468.906 681.821L0 1226.55H110.636L512.154 762.19L843.49 1226.55H1200L714.163 519.284ZM562.82 699.363L518.069 636.986L150.797 79.4655H304.046L600.102 504.272L644.853 566.649L1026.71 1147.98H873.459L562.82 699.363Z",
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/sufi0900",
    viewBox: "0 0 24 24",
    path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
  },
  {
    id: "devto",
    label: "Dev.to",
    href: "https://dev.to/sufian",
    viewBox: "0 0 24 24",
    path: "M19.236 3H4.764C3.791 3 3.002 3.787 3.002 4.76v14.48c0 .973.789 1.76 1.762 1.76h14.472c.973 0 1.762-.787 1.762-1.76V4.76C21 3.787 20.209 3 19.236 3zM9.195 13.414c0 .755-.466 1.901-1.942 1.898H5.389V8.665h1.903c1.424 0 1.902 1.144 1.903 1.899v2.85zm4.045-3.562H11.1v1.544h1.309v1.188H11.1v1.543h2.142v1.188h-2.498a.813.813 0 0 1-.833-.792V9.497a.813.813 0 0 1 .833-.792h2.496v1.147zm4.165 4.632c-.531 1.235-1.481.99-1.906 0l-1.548-5.818h1.309l1.193 4.569 1.188-4.569h1.31l-1.546 5.818z",
  },
  {
    id: "substack",
    label: "Substack",
    href: "https://substack.com/@sufianai",
    viewBox: "0 0 24 24",
    path: "M22.539 8.242H1.46V5.406h21.079v2.836zM1.46 10.812V24L12 18.11L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.079V0z",
  },
  {
    id: "medium",
    label: "Medium",
    href: "https://medium.com/@sufianmustafa0900",
    viewBox: "0 0 24 24",
    path: "M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z",
  },
  {
    id: "website",
    label: "Portfolio",
    href: "https://sufianmustafa.com/",
    viewBox: "0 0 24 24",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:sufianmustafa0900@gmail.com",
    viewBox: "0 0 24 24",
    path: "M1.5 3.5c-.83 0-1.5.67-1.5 1.5v10c0 .83.67 1.5 1.5 1.5h21c.83 0 1.5-.67 1.5-1.5v-10c0-.83-.67-1.5-1.5-1.5h-21zm0 2h21v2l-10.5 6.5-10.5-6.5v-2zm0 3.5l10.5 6.5 10.5-6.5v7h-21v-7z",
  },
];

const ROLES = [
  { label: "AI SEO Architect", color: "#E3B341" },
  { label: "LIONXE® Creator", color: "#F2CC6B" },
  { label: "Digital Ecosystem Founder", color: "#C9952C" },
];

const STATS = [
  { value: "8K+", label: "Word articles" },
  { value: "99%", label: "Technical SEO" },
  { value: "GEO", label: "AI-era optimised" },
  { value: "MSc", label: "Computer Science" },
];

const SocialBtn = ({ social }) => {
  const isMail = social.href.startsWith("mailto:");

  return (
    <a
      href={social.href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      aria-label={`Connect with Sufian on ${social.label}`}
      title={social.label}
      className="abc-social-btn"
    >
      <svg
        width={social.id === "x" ? 14 : 16}
        height={social.id === "x" ? 14 : 16}
        viewBox={social.viewBox}
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={social.path} />
      </svg>
    </a>
  );
};

const AuthorBioCard = () => {
  return (
    <section className="abc-wrap" aria-label="About the author">
      <div className="abc-ambient" aria-hidden="true" />

      <div className="abc-frame">
        <div className="abc-card">
          <div className="abc-corner abc-corner--top" aria-hidden="true" />
          <div className="abc-corner abc-corner--bottom" aria-hidden="true" />
          <div className="abc-top-line" aria-hidden="true" />

          <div className="abc-inner">
            <div className="abc-eyebrow">
              <span />
              About the Author
            </div>

            <div className="abc-layout">
              <aside className="abc-photo-col">
                <Link
                  href="/author/sufian-mustafa"
                  className="abc-photo-link"
                  aria-label="Read Sufian Mustafa full profile"
                >
                  <div className="abc-photo-ring">
                    <div className="abc-photo-shell">
                      <Image
                        src="/sufian-mustafa-founder-doitwithaitools.png"
                        alt="Sufian Mustafa — AI SEO Systems Architect"
                        fill
                        sizes="128px"
                        className="abc-photo"
                      />
                    </div>
                  </div>

                  <div className="abc-available">
                    <span />
                    Available
                  </div>
                </Link>
              </aside>

              <div className="abc-content">
                <Link href="/author/sufian-mustafa" className="abc-name-link">
                  <h3>Sufian Mustafa</h3>
                </Link>

                <div className="abc-roles">
                  {ROLES.map((role) => (
                    <span
                      key={role.label}
                      className="abc-role"
                      style={{ "--role-color": role.color }}
                    >
                      <span />
                      {role.label}
                    </span>
                  ))}
                </div>

                <div className="abc-bio">
                  <p>
                    <strong>Sufian Mustafa</strong> is an AI SEO Systems
                    Architect and the founder of{" "}
                    <Link href="https://sufianmustafa.com/">
                      sufianmustafa.com
                    </Link>
                    . His path started with an MSc in Computer Science, moved
                    through years of manual front-end engineering, and landed in
                    the frontier of AI-era search.
                  </p>

                  <div className="abc-quote">
                    <p>
                      He created the <strong>LIONXE® framework</strong> — a
                      four-pillar auditing doctrine for{" "}
                      <strong>GEO and AEO optimisation</strong> that helps
                      brands build search authority built to last decades, not
                      quarters.
                    </p>
                  </div>

                  <p>
                    Every article here is engineered from scratch — no AI
                    filler, no thin content. Just deep research, 8K+ word
                    assets, and the same systems Sufian uses to maintain{" "}
                    <strong>99% technical SEO health</strong> across his own
                    digital properties.
                  </p>
                </div>

                <div className="abc-stats">
                  {STATS.map((stat) => (
                    <div key={stat.label} className="abc-stat">
                      <span>{stat.value}</span>
                      <small>{stat.label}</small>
                    </div>
                  ))}
                </div>

                <div className="abc-connect">
                  <p>Connect</p>

                  <div className="abc-socials">
                    {SOCIALS.map((social) => (
                      <SocialBtn key={social.id} social={social} />
                    ))}
                  </div>
                </div>

                <Link href="/author/sufian-mustafa" className="abc-cta">
                  View Full Profile
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .abc-wrap {
          --abc-gold: #e3b341;
          --abc-gold-deep: #c9952c;
          --abc-gold-soft: #f2cc6b;
          --abc-ink: #ede9dc;
          --abc-ink-strong: #f7f1df;
          --abc-accent-ink: #2e2106;

          position: relative;
          width: 100%;
          margin: 52px 0 8px;
          color: var(--abc-ink);
          font-family: inherit;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .abc-ambient {
          position: absolute;
          inset: -20px;
          z-index: 0;
          border-radius: 34px;
          background:
            radial-gradient(
              58% 58% at 28% 44%,
              rgba(227, 179, 65, 0.14),
              transparent 72%
            ),
            radial-gradient(
              42% 42% at 74% 58%,
              rgba(242, 204, 107, 0.09),
              transparent 72%
            ),
            radial-gradient(
              40% 42% at 88% 0%,
              rgba(82, 113, 255, 0.055),
              transparent 74%
            );
          filter: blur(24px);
          opacity: 0.66;
          pointer-events: none;
          transition: opacity 0.45s ease;
        }

        .abc-wrap:hover .abc-ambient {
          opacity: 1;
        }

        .abc-frame {
          position: relative;
          z-index: 1;
          padding: 1.5px;
          border-radius: 24px;
          background: linear-gradient(
            135deg,
            rgba(242, 204, 107, 0.52),
            rgba(227, 179, 65, 0.28),
            rgba(201, 149, 44, 0.34),
            rgba(82, 113, 255, 0.12)
          );
          box-shadow:
            0 20px 58px rgba(0, 0, 0, 0.46),
            0 0 42px rgba(227, 179, 65, 0.08);
          transition:
            background 0.35s ease,
            box-shadow 0.35s ease,
            transform 0.35s ease;
        }

        .abc-wrap:hover .abc-frame {
          background: linear-gradient(
            135deg,
            rgba(242, 204, 107, 0.74),
            rgba(227, 179, 65, 0.42),
            rgba(201, 149, 44, 0.46),
            rgba(82, 113, 255, 0.16)
          );
          box-shadow:
            0 26px 70px rgba(0, 0, 0, 0.52),
            0 0 48px rgba(227, 179, 65, 0.13);
        }

        .abc-card {
          position: relative;
          overflow: hidden;
          border-radius: 22.5px;
          background:
            radial-gradient(
              620px 280px at 20% 0%,
              rgba(227, 179, 65, 0.08),
              transparent 68%
            ),
            linear-gradient(
              160deg,
              rgba(8, 13, 29, 0.98) 0%,
              rgba(5, 9, 22, 0.98) 52%,
              rgba(6, 11, 26, 0.98) 100%
            );
          backdrop-filter: blur(20px);
        }

        .abc-corner {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
        }

        .abc-corner--top {
          top: -90px;
          right: -82px;
          width: 245px;
          height: 245px;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(227, 179, 65, 0.12),
            transparent 66%
          );
        }

        .abc-corner--bottom {
          bottom: -86px;
          left: -78px;
          width: 220px;
          height: 220px;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(201, 149, 44, 0.09),
            transparent 66%
          );
        }

        .abc-top-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--abc-gold-deep) 25%,
            var(--abc-gold) 52%,
            var(--abc-gold-soft) 76%,
            transparent 100%
          );
          box-shadow: 0 0 16px rgba(227, 179, 65, 0.48);
        }

        .abc-inner {
          position: relative;
          z-index: 1;
          padding: 36px 36px 32px;
        }

        .abc-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 24px;
          color: var(--abc-gold-soft);
          font-size: 10.5px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .abc-eyebrow span {
          width: 20px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            var(--abc-gold-deep),
            var(--abc-gold-soft)
          );
          box-shadow: 0 0 12px rgba(227, 179, 65, 0.5);
        }

        .abc-layout {
          display: flex;
          align-items: flex-start;
          gap: 32px;
        }

        .abc-photo-col {
          flex: 0 0 auto;
        }

        .abc-photo-link {
          display: block;
          text-decoration: none;
        }

        .abc-photo-ring {
          padding: 2px;
          border-radius: 21px;
          background: linear-gradient(
            135deg,
            var(--abc-gold-soft),
            var(--abc-gold),
            var(--abc-gold-deep)
          );
          box-shadow:
            0 0 28px rgba(227, 179, 65, 0.34),
            0 0 64px rgba(227, 179, 65, 0.11);
        }

        .abc-photo-shell {
          position: relative;
          width: 128px;
          height: 128px;
          overflow: hidden;
          border-radius: 19px;
          background: #040816;
        }

        .abc-photo {
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .abc-photo-link:hover .abc-photo {
          transform: scale(1.055);
        }

        .abc-available {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 10px;
          color: #22c55e;
          font-size: 11px;
          font-weight: 720;
          line-height: 1;
          letter-spacing: 0.06em;
        }

        .abc-available span {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: authorPulse 2s ease-in-out infinite;
        }

        .abc-content {
          min-width: 0;
          flex: 1 1 auto;
        }

        .abc-name-link {
          text-decoration: none;
          outline: none;
        }

        .abc-name-link h3 {
          margin: 0 0 7px;
          font-size: clamp(1.4rem, 2.5vw, 1.9rem);
          font-weight: 950;
          line-height: 1.1;
          letter-spacing: -0.035em;
          background: linear-gradient(
            160deg,
            #ffffff 0%,
            var(--abc-ink-strong) 52%,
            var(--abc-gold-soft) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter: drop-shadow(0 0 18px rgba(227, 179, 65, 0.18));
          transition: filter 180ms ease;
        }

        .abc-name-link:hover h3,
        .abc-name-link:focus-visible h3 {
          filter: drop-shadow(0 0 22px rgba(227, 179, 65, 0.3));
        }

        .abc-roles {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 20px;
        }

        .abc-role {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 5px 11px;
          border-radius: 10px 4px 10px 4px;
          color: var(--role-color);
          background: color-mix(in srgb, var(--role-color) 12%, transparent);
          border: 1px solid
            color-mix(in srgb, var(--role-color) 25%, transparent);
          font-size: 11px;
          font-weight: 720;
          line-height: 1;
          letter-spacing: 0.035em;
        }

        .abc-role span {
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: var(--role-color);
          box-shadow: 0 0 7px var(--role-color);
        }

        .abc-bio {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 22px;
        }

        .abc-bio p {
          margin: 0;
          color: rgba(237, 233, 220, 0.72);
          font-size: 13.5px;
          font-weight: 560;
          line-height: 1.74;
          letter-spacing: -0.006em;
        }

        .abc-bio strong {
          color: var(--abc-ink-strong);
          font-weight: 760;
        }

        .abc-bio a {
          color: var(--abc-gold-soft);
          font-weight: 720;
          text-decoration: none;
          border-bottom: 1px solid rgba(227, 179, 65, 0.34);
          transition:
            color 180ms ease,
            border-color 180ms ease;
        }

        .abc-bio a:hover {
          color: #fff4c7;
          border-color: rgba(242, 204, 107, 0.76);
        }

        .abc-quote {
          border-left: 2.5px solid var(--abc-gold);
          padding: 10px 14px;
          border-radius: 0 10px 10px 0;
          background: rgba(227, 179, 65, 0.06);
          box-shadow: inset 1px 0 0 rgba(242, 204, 107, 0.18);
        }

        .abc-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 24px;
          padding: 14px 16px;
          border-radius: 14px;
          border: 1px solid rgba(227, 179, 65, 0.13);
          background:
            radial-gradient(
              360px 120px at 0% 0%,
              rgba(227, 179, 65, 0.08),
              transparent 70%
            ),
            rgba(227, 179, 65, 0.035);
        }

        .abc-stat {
          display: flex;
          flex: 1 1 66px;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          text-align: center;
        }

        .abc-stat span {
          font-size: 17px;
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.025em;
          background: linear-gradient(
            135deg,
            #ffffff,
            var(--abc-gold-soft),
            var(--abc-gold)
          );
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .abc-stat small {
          color: rgba(237, 233, 220, 0.4);
          font-size: 10px;
          font-weight: 720;
          line-height: 1.25;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .abc-connect {
          margin-bottom: 22px;
        }

        .abc-connect p {
          margin: 0 0 10px;
          color: rgba(237, 233, 220, 0.42);
          font-size: 10.5px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .abc-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .abc-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          border-radius: 12px;
          border: 1px solid rgba(227, 179, 65, 0.18);
          background:
            linear-gradient(
              145deg,
              rgba(227, 179, 65, 0.08),
              rgba(255, 255, 255, 0.025)
            ),
            rgba(6, 10, 24, 0.66);
          color: rgba(237, 233, 220, 0.56);
          text-decoration: none;
          backdrop-filter: blur(9px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.045);
          transition:
            transform 180ms ease,
            color 180ms ease,
            border-color 180ms ease,
            background 180ms ease,
            box-shadow 180ms ease;
        }

        .abc-social-btn svg {
          display: block;
        }

        .abc-social-btn:hover,
        .abc-social-btn:focus-visible {
          transform: translateY(-2px) scale(1.045);
          color: var(--abc-gold-soft);
          border-color: rgba(227, 179, 65, 0.46);
          background:
            linear-gradient(
              145deg,
              rgba(227, 179, 65, 0.16),
              rgba(242, 204, 107, 0.06)
            ),
            rgba(6, 10, 24, 0.72);
          box-shadow:
            0 10px 26px rgba(227, 179, 65, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.07);
          outline: none;
        }

        .abc-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          border-radius: 12px 5px 12px 5px;
          color: var(--abc-accent-ink);
          background: linear-gradient(
            135deg,
            var(--abc-gold-soft) 0%,
            var(--abc-gold) 52%,
            var(--abc-gold-deep) 100%
          );
          border: none;
          text-decoration: none;
          font-size: 13px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.025em;
          box-shadow:
            0 8px 26px rgba(227, 179, 65, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            filter 180ms ease;
        }

        .abc-cta svg {
          transition: transform 180ms ease;
        }

        .abc-cta:hover,
        .abc-cta:focus-visible {
          transform: translateY(-2px);
          filter: brightness(1.05);
          box-shadow:
            0 13px 34px rgba(227, 179, 65, 0.38),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          outline: none;
        }

        .abc-cta:hover svg,
        .abc-cta:focus-visible svg {
          transform: translateX(2px);
        }

        @keyframes authorPulse {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(1.35);
          }
        }

        @media (max-width: 760px) {
          .abc-inner {
            padding: 30px 22px 26px;
          }

          .abc-layout {
            flex-direction: column;
            gap: 24px;
          }

          .abc-photo-col {
            width: 100%;
          }

          .abc-photo-link {
            display: inline-block;
          }

          .abc-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .abc-cta {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 430px) {
          .abc-inner {
            padding: 28px 18px 24px;
          }

          .abc-photo-shell {
            width: 116px;
            height: 116px;
          }

          .abc-social-btn {
            width: 36px;
            height: 36px;
            border-radius: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .abc-available span {
            animation: none !important;
          }

          .abc-frame,
          .abc-ambient,
          .abc-photo,
          .abc-social-btn,
          .abc-cta,
          .abc-cta svg,
          .abc-name-link h3 {
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default AuthorBioCard;