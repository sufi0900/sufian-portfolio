"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  MessageCircle,
} from "lucide-react";

const FAQSection = ({ faqs }) => {
  const [openItems, setOpenItems] = useState(
    new Set(faqs?.map((_, index) => index) || [])
  );

  if (!faqs || faqs.length === 0) {
    return null;
  }

  const toggleItem = (index) => {
    const nextOpenItems = new Set(openItems);

    if (nextOpenItems.has(index)) {
      nextOpenItems.delete(index);
    } else {
      nextOpenItems.add(index);
    }

    setOpenItems(nextOpenItems);
  };

  return (
    <section className="gold-faq" aria-labelledby="article-faq-title">
      <div className="gold-faq__ambient" aria-hidden="true" />
      <div className="gold-faq__orb gold-faq__orb--right" aria-hidden="true" />
      <div className="gold-faq__orb gold-faq__orb--left" aria-hidden="true" />

      <div className="gold-faq__content">
        <header className="gold-faq__header">
          <div className="gold-faq__header-inner">
            <div className="gold-faq__heading-wrap">
              <span className="gold-faq__icon">
                <HelpCircle size={26} strokeWidth={2.25} />
              </span>

              <div>
                <p className="gold-faq__eyebrow">Quick Answers</p>

                <h2 id="article-faq-title" className="gold-faq__title">
                  Frequently Asked Questions
                </h2>

                <p className="gold-faq__description">
                  Clear answers to the most common questions related to this
                  article.
                </p>
              </div>
            </div>

            <div className="gold-faq__count">
              <span>{faqs.length}</span>
              Questions
            </div>
          </div>
        </header>

        <div className="gold-faq__items">
          {faqs.map((faq, index) => {
            const isOpen = openItems.has(index);

            return (
              <article
                key={index}
                className={`gold-faq__item ${
                  isOpen ? "gold-faq__item--open" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="gold-faq__question"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="gold-faq__question-left">
                    <span className="gold-faq__number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>{faq.question}</h3>
                  </div>

                  <span className="gold-faq__chevron">
                    <ChevronDown size={19} strokeWidth={2.4} />
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`gold-faq__answer-wrap ${
                    isOpen ? "gold-faq__answer-wrap--open" : ""
                  }`}
                >
                  <div className="gold-faq__answer-hidden">
                    <div className="gold-faq__divider" />

                    <div className="gold-faq__answer">
                      <span className="gold-faq__answer-icon">
                        <CheckCircle2 size={16} strokeWidth={2.4} />
                      </span>

                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <footer className="gold-faq__footer">
          <div className="gold-faq__footer-card">
            <div className="gold-faq__footer-copy">
              <span>
                <MessageCircle size={19} strokeWidth={2.25} />
              </span>

              <div>
                <p>Still have questions?</p>
                <small>
                  Reach out for a clearer answer or a deeper strategic
                  explanation.
                </small>
              </div>
            </div>

            <Link href="/contact" className="gold-faq__cta">
              Contact Me
            </Link>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        .gold-faq {
          --faq-gold: #e3b341;
          --faq-gold-deep: #c9952c;
          --faq-gold-soft: #f2cc6b;
          --faq-ink: #ede9dc;
          --faq-ink-strong: #f7f1df;
          --faq-accent-ink: #2e2106;

          position: relative;
          overflow: hidden;
          margin: 48px 0;
          border-radius: 34px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background:
            radial-gradient(
              720px 280px at 12% 0%,
              rgba(227, 179, 65, 0.12),
              transparent 70%
            ),
            linear-gradient(
              160deg,
              rgba(7, 16, 32, 0.9),
              rgba(3, 7, 16, 0.88)
            );
          padding: 20px;
          color: var(--faq-ink);
          box-shadow:
            0 30px 110px rgba(0, 0, 0, 0.38),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(22px);
          -webkit-backdrop-filter: blur(22px);
        }

        .gold-faq::before {
          content: "";
          position: absolute;
          top: 0;
          left: 28px;
          right: 28px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(242, 204, 107, 0.62),
            transparent
          );
        }

        .gold-faq__ambient {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(
              circle at 10% 0%,
              rgba(227, 179, 65, 0.14),
              transparent 36%
            ),
            radial-gradient(
              circle at 90% 15%,
              rgba(82, 113, 255, 0.06),
              transparent 30%
            ),
            linear-gradient(
              90deg,
              transparent,
              rgba(242, 204, 107, 0.035),
              transparent
            );
        }

        .gold-faq__orb {
          position: absolute;
          pointer-events: none;
          border-radius: 999px;
          filter: blur(88px);
        }

        .gold-faq__orb--right {
          top: -92px;
          right: -94px;
          width: 240px;
          height: 240px;
          background: rgba(227, 179, 65, 0.14);
        }

        .gold-faq__orb--left {
          bottom: -110px;
          left: -110px;
          width: 270px;
          height: 270px;
          background: rgba(201, 149, 44, 0.09);
        }

        .gold-faq__content {
          position: relative;
          z-index: 1;
        }

        .gold-faq__header {
          margin-bottom: 28px;
          border-bottom: 1px solid rgba(227, 179, 65, 0.12);
          padding-bottom: 24px;
        }

        .gold-faq__header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .gold-faq__heading-wrap {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          min-width: 0;
        }

        .gold-faq__icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 56px;
          height: 56px;
          flex: 0 0 56px;
          border-radius: 22px;
          border: 1px solid rgba(227, 179, 65, 0.34);
          background:
            radial-gradient(
              circle at 30% 0%,
              rgba(242, 204, 107, 0.22),
              transparent 62%
            ),
            rgba(227, 179, 65, 0.1);
          color: var(--faq-gold-soft);
          box-shadow:
            0 0 34px rgba(227, 179, 65, 0.16),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        .gold-faq__eyebrow {
          margin: 0;
          color: var(--faq-gold-soft);
          font-size: 11px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .gold-faq__title {
          margin: 10px 0 0;
          color: var(--faq-ink-strong);
          font-size: clamp(1.6rem, 3.6vw, 2.55rem);
          font-weight: 950;
          line-height: 1.05;
          letter-spacing: -0.055em;
        }

        .gold-faq__description {
          max-width: 680px;
          margin: 10px 0 0;
          color: rgba(237, 233, 220, 0.5);
          font-size: 15px;
          font-weight: 560;
          line-height: 1.65;
          letter-spacing: -0.01em;
        }

        .gold-faq__count {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 38px;
          flex-shrink: 0;
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background: rgba(227, 179, 65, 0.055);
          padding: 0 14px;
          color: rgba(237, 233, 220, 0.55);
          font-size: 11px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .gold-faq__count span {
          color: var(--faq-gold-soft);
          font-weight: 950;
        }

        .gold-faq__items {
          display: grid;
          gap: 14px;
        }

        .gold-faq__item {
          overflow: hidden;
          border-radius: 24px;
          border: 1px solid rgba(237, 233, 220, 0.08);
          background: rgba(255, 255, 255, 0.032);
          box-shadow: 0 16px 58px rgba(0, 0, 0, 0.16);
          transition:
            border-color 240ms ease,
            background 240ms ease,
            box-shadow 240ms ease,
            transform 240ms ease;
        }

        .gold-faq__item:hover {
          transform: translateY(-1px);
          border-color: rgba(227, 179, 65, 0.24);
          background: rgba(227, 179, 65, 0.045);
        }

        .gold-faq__item--open {
          border-color: rgba(227, 179, 65, 0.34);
          background:
            radial-gradient(
              480px 160px at 0% 0%,
              rgba(227, 179, 65, 0.095),
              transparent 72%
            ),
            rgba(227, 179, 65, 0.06);
          box-shadow:
            0 22px 70px rgba(0, 0, 0, 0.24),
            0 0 34px rgba(227, 179, 65, 0.07);
        }

        .gold-faq__question {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          width: 100%;
          border: 0;
          background: transparent;
          padding: 18px;
          text-align: left;
          cursor: pointer;
        }

        .gold-faq__question-left {
          display: flex;
          min-width: 0;
          flex: 1;
          gap: 15px;
        }

        .gold-faq__number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          border-radius: 16px;
          border: 1px solid rgba(227, 179, 65, 0.16);
          background: rgba(227, 179, 65, 0.065);
          color: var(--faq-gold-soft);
          font-size: 12px;
          font-weight: 950;
          line-height: 1;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.035);
          transition:
            border-color 220ms ease,
            background 220ms ease,
            color 220ms ease,
            box-shadow 220ms ease;
        }

        .gold-faq__item--open .gold-faq__number {
          border-color: rgba(227, 179, 65, 0.45);
          background: rgba(227, 179, 65, 0.16);
          color: #fff4c7;
          box-shadow: 0 0 26px rgba(227, 179, 65, 0.16);
        }

        .gold-faq__question h3 {
          margin: 0;
          padding-top: 5px;
          color: rgba(247, 241, 223, 0.84);
          font-size: clamp(1rem, 2vw, 1.12rem);
          font-weight: 850;
          line-height: 1.55;
          letter-spacing: -0.025em;
          transition: color 180ms ease;
        }

        .gold-faq__item:hover .gold-faq__question h3,
        .gold-faq__item--open .gold-faq__question h3 {
          color: var(--faq-ink-strong);
        }

        .gold-faq__chevron {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          border-radius: 16px;
          border: 1px solid rgba(227, 179, 65, 0.14);
          background: rgba(255, 255, 255, 0.035);
          color: var(--faq-gold-soft);
          transition:
            transform 240ms ease,
            border-color 220ms ease,
            background 220ms ease,
            color 220ms ease;
        }

        .gold-faq__item--open .gold-faq__chevron {
          transform: rotate(180deg);
          border-color: rgba(227, 179, 65, 0.42);
          background: rgba(227, 179, 65, 0.14);
          color: #fff4c7;
        }

        .gold-faq__answer-wrap {
          display: grid;
          grid-template-rows: 0fr;
          opacity: 0;
          transition:
            grid-template-rows 420ms ease,
            opacity 260ms ease;
        }

        .gold-faq__answer-wrap--open {
          grid-template-rows: 1fr;
          opacity: 1;
        }

        .gold-faq__answer-hidden {
          overflow: hidden;
        }

        .gold-faq__divider {
          height: 1px;
          margin: 0 18px 16px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(227, 179, 65, 0.35),
            transparent
          );
        }

        .gold-faq__answer {
          display: flex;
          gap: 13px;
          margin: 0 18px 18px;
          border-radius: 20px;
          border: 1px solid rgba(227, 179, 65, 0.12);
          background:
            radial-gradient(
              360px 120px at 0% 0%,
              rgba(227, 179, 65, 0.07),
              transparent 70%
            ),
            rgba(3, 7, 16, 0.48);
          padding: 16px;
        }

        .gold-faq__answer-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          flex: 0 0 28px;
          margin-top: 3px;
          border-radius: 12px;
          background: rgba(34, 197, 94, 0.12);
          color: #86efac;
        }

        .gold-faq__answer p {
          margin: 0;
          color: rgba(237, 233, 220, 0.68);
          font-size: clamp(0.92rem, 1.7vw, 1rem);
          font-weight: 560;
          line-height: 1.82;
          letter-spacing: -0.01em;
        }

        .gold-faq__footer {
          margin-top: 28px;
          border-top: 1px solid rgba(227, 179, 65, 0.12);
          padding-top: 24px;
        }

        .gold-faq__footer-card {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          border-radius: 24px;
          border: 1px solid rgba(227, 179, 65, 0.14);
          background: rgba(227, 179, 65, 0.045);
          padding: 20px;
        }

        .gold-faq__footer-copy {
          display: flex;
          align-items: flex-start;
          gap: 13px;
        }

        .gold-faq__footer-copy > span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          border-radius: 16px;
          background: rgba(227, 179, 65, 0.1);
          color: var(--faq-gold-soft);
        }

        .gold-faq__footer-copy p {
          margin: 0;
          color: var(--faq-ink-strong);
          font-size: 14px;
          font-weight: 850;
          line-height: 1.3;
        }

        .gold-faq__footer-copy small {
          display: block;
          margin-top: 5px;
          color: rgba(237, 233, 220, 0.5);
          font-size: 14px;
          font-weight: 560;
          line-height: 1.55;
        }

        .gold-faq__cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          flex-shrink: 0;
          border-radius: 16px;
          border: 1px solid rgba(227, 179, 65, 0.4);
          background: linear-gradient(
            135deg,
            var(--faq-gold-soft),
            var(--faq-gold),
            var(--faq-gold-deep)
          );
          color: var(--faq-accent-ink);
          padding: 0 20px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 900;
          line-height: 1;
          box-shadow:
            0 16px 42px rgba(227, 179, 65, 0.22),
            inset 0 1px 0 rgba(255, 255, 255, 0.22);
          transition:
            transform 180ms ease,
            box-shadow 180ms ease,
            filter 180ms ease;
        }

        .gold-faq__cta:hover,
        .gold-faq__cta:focus-visible {
          transform: translateY(-2px);
          filter: brightness(1.05);
          box-shadow:
            0 20px 52px rgba(227, 179, 65, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          outline: none;
        }

        @media (max-width: 760px) {
          .gold-faq {
            margin: 42px 0;
            border-radius: 28px;
            padding: 16px;
          }

          .gold-faq__header-inner {
            align-items: flex-start;
            flex-direction: column;
          }

          .gold-faq__heading-wrap {
            gap: 14px;
          }

          .gold-faq__icon {
            width: 50px;
            height: 50px;
            flex-basis: 50px;
            border-radius: 19px;
          }

          .gold-faq__question {
            padding: 16px;
          }

          .gold-faq__question-left {
            gap: 12px;
          }

          .gold-faq__number,
          .gold-faq__chevron {
            width: 38px;
            height: 38px;
            flex-basis: 38px;
            border-radius: 15px;
          }

          .gold-faq__answer {
            margin: 0 16px 16px;
            padding: 15px;
          }

          .gold-faq__footer-card {
            align-items: stretch;
            flex-direction: column;
          }

          .gold-faq__cta {
            width: 100%;
          }
        }

        @media (max-width: 460px) {
          .gold-faq__heading-wrap {
            flex-direction: column;
          }

          .gold-faq__question-left {
            min-width: 0;
          }

          .gold-faq__question h3 {
            padding-top: 2px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .gold-faq__item,
          .gold-faq__number,
          .gold-faq__chevron,
          .gold-faq__question h3,
          .gold-faq__answer-wrap,
          .gold-faq__cta {
            transition: none !important;
          }

          .gold-faq__item:hover,
          .gold-faq__cta:hover {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};

export default FAQSection;