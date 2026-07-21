"use client";
import React from "react";

export default function StaticInsightsPageShell({ initialServerData, children }) {
  const currentDisplayCount = initialServerData?.totalCount || 0;

  return (
    <main className="idh-shell">
      <div className="idh-bg-grid" aria-hidden="true" />
      <div className="idh-orb idh-orb--left" aria-hidden="true" />
      <div className="idh-orb idh-orb--right" aria-hidden="true" />

      <div className="idh-container">
        <section className="idh-hero" aria-labelledby="insights-title">
          <div className="idh-hero-copy">
            <div className="idh-kicker">
              <span />
              Executive Intelligence
            </div>

            <h1 id="insights-title" className="idh-title">
              Strategic <strong>Insights</strong> for AI-era authority.
            </h1>

            <p className="idh-description">
              Essays, technical breakdowns, and executive-level analysis on AI
              SEO, search visibility, digital systems, and long-term authority
              building — written through the lens of strategy, execution, and
              compounding credibility.
            </p>

            <div className="idh-trust-row" aria-label="Insight focus areas">
              <span>AI Search</span>
              <span>Technical SEO</span>
              <span>Digital Systems</span>
              <span>LIONXE ™ Thinking</span>
            </div>
          </div>

          <aside className="idh-briefing-card" aria-label="Publication summary">
            <div className="idh-briefing-top">
              <span className="idh-briefing-dot" />
              Publication Index
            </div>

            <div className="idh-stat-stack">
              <div className="idh-stat idh-stat--primary">
                <strong>{currentDisplayCount}+</strong>
                <span>Published insights</span>
              </div>

              <div className="idh-stat">
                <strong>4</strong>
                <span>Strategic tracks</span>
              </div>

              <div className="idh-stat">
                <strong>∞</strong>
                <span>Authority-focused analysis</span>
              </div>
            </div>

            <p className="idh-briefing-note">
              Built as a premium knowledge base — not a casual blog archive.
            </p>
          </aside>
        </section>

        {children}
      </div>

      <style jsx global>{`
        .idh-shell {
          --idh-gold: #e3b341;
          --idh-gold-deep: #c9952c;
          --idh-gold-soft: #f2cc6b;
          --idh-ink: #ede9dc;
          --idh-ink-strong: #f7f1df;
          --idh-accent-ink: #2e2106;

          position: relative;
          min-height: 100vh;
          overflow: hidden;
          color: var(--idh-ink);
          background:
            radial-gradient(
              780px 420px at 16% 0%,
              rgba(227, 179, 65, 0.16),
              transparent 66%
            ),
            radial-gradient(
              620px 340px at 88% 4%,
              rgba(82, 113, 255, 0.07),
              transparent 68%
            ),
            linear-gradient(180deg, #050a18 0%, #071020 42%, #02050d 100%);
          font-family: inherit;
          -webkit-font-smoothing: antialiased;
          text-rendering: geometricPrecision;
        }

        .idh-bg-grid {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.105;
          background-image:
            linear-gradient(rgba(242, 204, 107, 0.12) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(242, 204, 107, 0.12) 1px,
              transparent 1px
            );
          background-size: 58px 58px;
          mask-image: linear-gradient(to bottom, black 0%, transparent 76%);
        }

        .idh-orb {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(110px);
        }

        .idh-orb--left {
          left: -180px;
          top: 180px;
          width: 420px;
          height: 420px;
          background: rgba(227, 179, 65, 0.12);
        }

        .idh-orb--right {
          right: -180px;
          top: 520px;
          width: 380px;
          height: 380px;
          background: rgba(201, 149, 44, 0.09);
        }

        .idh-container {
          position: relative;
          z-index: 2;
          width: min(100% - 32px, 1280px);
          margin: 0 auto;
          padding: clamp(72px, 8vw, 118px) 0 clamp(80px, 8vw, 130px);
        }

        .idh-hero {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(320px, 0.65fr);
          gap: clamp(30px, 5vw, 78px);
          align-items: end;
          margin-bottom: clamp(42px, 6vw, 72px);
        }

        .idh-kicker {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 22px;
          color: var(--idh-gold-soft);
          font-size: 11px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.2em;
          text-transform: uppercase;
        }

        .idh-kicker span {
          width: 28px;
          height: 2px;
          border-radius: 999px;
          background: linear-gradient(
            90deg,
            var(--idh-gold-deep),
            var(--idh-gold-soft)
          );
          box-shadow: 0 0 18px rgba(227, 179, 65, 0.5);
        }

        .idh-title {
       max-width: 850px;
  margin: 0;
  color: var(--smc-ink-strong);
  font-size: clamp(2.75rem, 6.1vw, 6.25rem);
  font-weight: 950;
  line-height: 0.94;
  letter-spacing: -0.075em;
        }

        .idh-title strong {
          color: transparent;
          background: linear-gradient(
            140deg,
            #ffffff 0%,
            var(--idh-gold-soft) 38%,
            var(--idh-gold) 64%,
            var(--idh-gold-deep) 100%
          );
          -webkit-background-clip: text;
          background-clip: text;
          filter: drop-shadow(0 0 24px rgba(227, 179, 65, 0.18));
        }

        .idh-description {
          max-width: 750px;
          margin: 28px 0 0;
          color: rgba(237, 233, 220, 0.66);
          font-size: clamp(1rem, 1.7vw, 1.18rem);
          font-weight: 560;
          line-height: 1.78;
          letter-spacing: -0.018em;
        }

        .idh-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .idh-trust-row span {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background: rgba(227, 179, 65, 0.055);
          padding: 0 13px;
          color: rgba(237, 233, 220, 0.72);
          font-size: 12px;
          font-weight: 720;
          line-height: 1;
          letter-spacing: -0.01em;
          backdrop-filter: blur(16px);
        }

        .idh-briefing-card {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid rgba(227, 179, 65, 0.18);
          background:
            radial-gradient(
              360px 190px at 15% 0%,
              rgba(227, 179, 65, 0.12),
              transparent 70%
            ),
            rgba(7, 16, 32, 0.72);
          padding: 24px;
          box-shadow:
            0 28px 90px rgba(0, 0, 0, 0.34),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(22px);
        }

        .idh-briefing-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 24px;
          right: 24px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(242, 204, 107, 0.64),
            transparent
          );
        }

        .idh-briefing-top {
          display: flex;
          align-items: center;
          gap: 9px;
          color: var(--idh-gold-soft);
          font-size: 11px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .idh-briefing-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--idh-gold);
          box-shadow: 0 0 18px rgba(227, 179, 65, 0.85);
        }

        .idh-stat-stack {
          display: grid;
          gap: 10px;
          margin-top: 22px;
        }

        .idh-stat {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-radius: 18px;
          border: 1px solid rgba(227, 179, 65, 0.12);
          background: rgba(255, 255, 255, 0.032);
          padding: 15px 16px;
        }

        .idh-stat strong {
          color: var(--idh-gold-soft);
          font-size: 1.55rem;
          font-weight: 950;
          line-height: 1;
          letter-spacing: -0.05em;
        }

        .idh-stat span {
          max-width: 150px;
          text-align: right;
          color: rgba(237, 233, 220, 0.55);
          font-size: 12px;
          font-weight: 720;
          line-height: 1.35;
          letter-spacing: -0.01em;
        }

        .idh-stat--primary {
          background: rgba(227, 179, 65, 0.085);
          border-color: rgba(227, 179, 65, 0.2);
        }

        .idh-briefing-note {
          margin: 18px 0 0;
          color: rgba(237, 233, 220, 0.48);
          font-size: 12.5px;
          font-weight: 560;
          line-height: 1.6;
        }

        @media (max-width: 980px) {
          .idh-hero {
            grid-template-columns: 1fr;
          }

          .idh-briefing-card {
            max-width: 560px;
          }
        }

        @media (max-width: 640px) {
          .idh-container {
            width: min(100% - 24px, 1280px);
            padding-top: 54px;
          }

          .idh-title {
          font-size: clamp(2rem, 10vw, 3.15rem);
  line-height: 1.04;
  letter-spacing: -0.055em;
          }

          .idh-description {
            margin-top: 22px;
          }

          .idh-trust-row span {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </main>
  );
}