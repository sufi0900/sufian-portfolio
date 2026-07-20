//components/Card/Page.jsx of sufian website (updated for Insights design) 

"use client";

import Link from "next/link";
import OptimizedImage from "@/app/blogs/[slug]/OptimizedImage";
import { ArrowUpRight, Calendar, Clock3, Sparkles } from "lucide-react";

const cleanReadTime = (readTime) => {
  if (!readTime) return "Deep read";
  if (typeof readTime === "number") return `${readTime} min`;
  return `${readTime} min`;
};

export default function InsightCard({
  publishedAt,
  mainImage,
  title,
  overview,
  readTime,
  slug,
  tags,
  category = "Insight",
  featured = false,
}) {
  const primaryTag = tags?.[0]?.name || category || "Insight";
  const href = slug || "/insights";

  return (
    <article className={`ic-card ${featured ? "ic-card--featured" : ""}`}>
      <Link href={href} className="ic-media-link" aria-label={title}>
        <div className="ic-media">
          {mainImage ? (
            <OptimizedImage
              src={mainImage}
              alt={title || "Sufian Mustafa insight"}
              width={1200}
              height={760}
              quality={86}
              priority={featured}
              sizes={
                featured
                  ? "(max-width: 920px) 100vw, 58vw"
                  : "(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 33vw"
              }
            />
          ) : (
            <div className="ic-fallback">
              <Sparkles size={26} strokeWidth={1.8} />
              <span>Sufian Mustafa</span>
            </div>
          )}

          <span className="ic-tag">{primaryTag}</span>
          <span className="ic-media-sheen" aria-hidden="true" />
        </div>
      </Link>

      <div className="ic-content">
        <div className="ic-meta">
          <span>
            <Calendar size={13} strokeWidth={2.2} />
            {publishedAt || "Recently updated"}
          </span>

          <i />

          <span>
            <Clock3 size={13} strokeWidth={2.2} />
            {cleanReadTime(readTime)}
          </span>
        </div>

        <Link href={href} className="ic-title-link">
          <h2>{title}</h2>
        </Link>

        {overview && <p className="ic-overview">{overview}</p>}

        <Link href={href} className="ic-action">
          Read insight
          <ArrowUpRight size={15} strokeWidth={2.65} />
        </Link>
      </div>

      <span className="ic-corner" aria-hidden="true" />

      <style jsx global>{`
        .ic-card {
          --ic-gold: #e3b341;
          --ic-gold-deep: #c9952c;
          --ic-gold-soft: #f2cc6b;
          --ic-ink: #ede9dc;
          --ic-ink-strong: #f7f1df;
          --ic-accent-ink: #2e2106;

          position: relative;
          min-width: 0;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(227, 179, 65, 0.14);
          background:
            radial-gradient(
              420px 220px at 18% 0%,
              rgba(227, 179, 65, 0.08),
              transparent 72%
            ),
            rgba(7, 16, 32, 0.72);
          box-shadow:
            0 22px 70px rgba(0, 0, 0, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.035);
          backdrop-filter: blur(18px);
          transition:
            transform 220ms ease,
            border-color 220ms ease,
            background 220ms ease,
            box-shadow 220ms ease;
        }

        .ic-card:hover {
          transform: translateY(-5px);
          border-color: rgba(227, 179, 65, 0.3);
          background:
            radial-gradient(
              460px 240px at 18% 0%,
              rgba(227, 179, 65, 0.12),
              transparent 72%
            ),
            rgba(7, 16, 32, 0.84);
          box-shadow:
            0 30px 90px rgba(0, 0, 0, 0.38),
            0 0 44px rgba(227, 179, 65, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.055);
        }

        .ic-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 22px;
          right: 22px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(242, 204, 107, 0.55),
            transparent
          );
          opacity: 0.7;
        }

        .ic-media-link {
          display: block;
          color: inherit;
          text-decoration: none;
        }

        .ic-media {
          position: relative;
          height: 244px;
          overflow: hidden;
          background: #030710;
        }

        .ic-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1.01);
          transition:
            transform 700ms ease,
            filter 700ms ease;
        }

        .ic-card:hover .ic-media img {
          transform: scale(1.065);
          filter: saturate(1.04) contrast(1.04);
        }

        .ic-media::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(to top, rgba(3, 7, 16, 0.78), transparent 58%),
            radial-gradient(
              circle at 20% 0%,
              rgba(242, 204, 107, 0.16),
              transparent 44%
            );
          pointer-events: none;
        }

        .ic-media-sheen {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0;
          transform: translateX(-55%);
          background: linear-gradient(
            112deg,
            transparent 28%,
            rgba(255, 255, 255, 0.08) 44%,
            rgba(242, 204, 107, 0.16) 50%,
            transparent 64%
          );
          transition:
            opacity 240ms ease,
            transform 900ms ease;
        }

        .ic-card:hover .ic-media-sheen {
          opacity: 1;
          transform: translateX(55%);
        }

        .ic-fallback {
          width: 100%;
          height: 100%;
          display: grid;
          place-items: center;
          gap: 10px;
          color: var(--ic-gold-soft);
          background:
            radial-gradient(
              circle at 32% 20%,
              rgba(227, 179, 65, 0.18),
              transparent 42%
            ),
            linear-gradient(135deg, #071020, #030710);
        }

        .ic-fallback span {
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .ic-tag {
          position: absolute;
          z-index: 3;
          left: 16px;
          top: 16px;
          display: inline-flex;
          align-items: center;
          min-height: 31px;
          max-width: calc(100% - 32px);
          border-radius: 999px;
          border: 1px solid rgba(227, 179, 65, 0.28);
          background: rgba(5, 10, 24, 0.58);
          color: var(--ic-gold-soft);
          padding: 0 11px;
          font-size: 11px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: 0.025em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          backdrop-filter: blur(16px);
        }

        .ic-content {
          position: relative;
          z-index: 2;
          padding: 24px;
        }

        .ic-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
          color: rgba(237, 233, 220, 0.48);
          font-size: 12px;
          font-weight: 720;
          line-height: 1;
        }

        .ic-meta span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .ic-meta svg {
          color: var(--ic-gold);
        }

        .ic-meta i {
          width: 1px;
          height: 13px;
          background: rgba(237, 233, 220, 0.13);
        }

        .ic-title-link {
          text-decoration: none;
          outline: none;
        }

        .ic-title-link h2 {
          margin: 0;
          color: var(--ic-ink-strong);
          font-size: clamp(1.18rem, 2vw, 1.48rem);
          font-weight: 920;
          line-height: 1.12;
          letter-spacing: -0.045em;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition:
            color 180ms ease,
            text-shadow 180ms ease;
        }

        .ic-title-link:hover h2,
        .ic-title-link:focus-visible h2 {
          color: #fff4c7;
          text-shadow: 0 0 18px rgba(227, 179, 65, 0.16);
        }

        .ic-overview {
          margin: 14px 0 0;
          color: rgba(237, 233, 220, 0.58);
          font-size: 14px;
          font-weight: 560;
          line-height: 1.72;
          letter-spacing: -0.01em;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ic-action {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 22px;
          color: var(--ic-gold-soft);
          text-decoration: none;
          font-size: 13px;
          font-weight: 850;
          line-height: 1;
          letter-spacing: -0.01em;
          transition:
            color 180ms ease,
            transform 180ms ease;
        }

        .ic-action svg {
          transition: transform 180ms ease;
        }

        .ic-action:hover,
        .ic-action:focus-visible {
          color: #fff4c7;
          transform: translateX(2px);
          outline: none;
        }

        .ic-action:hover svg,
        .ic-action:focus-visible svg {
          transform: translate(2px, -2px);
        }

        .ic-corner {
          position: absolute;
          right: 0;
          bottom: 0;
          width: 92px;
          height: 92px;
          pointer-events: none;
          background: radial-gradient(
            circle at 100% 100%,
            rgba(227, 179, 65, 0.14),
            transparent 68%
          );
          opacity: 0;
          transition: opacity 220ms ease;
        }

        .ic-card:hover .ic-corner {
          opacity: 1;
        }

        @media (min-width: 920px) {
          .ic-card--featured {
            grid-column: span 2;
            display: grid;
            grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
            min-height: 380px;
          }

          .ic-card--featured .ic-media-link {
            height: 100%;
          }

          .ic-card--featured .ic-media {
            height: 100%;
            min-height: 380px;
          }

          .ic-card--featured .ic-content {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: clamp(28px, 4vw, 38px);
            border-left: 1px solid rgba(227, 179, 65, 0.12);
          }

          .ic-card--featured .ic-title-link h2 {
            font-size: clamp(1.75rem, 3.4vw, 2.65rem);
            line-height: 1.02;
            -webkit-line-clamp: 4;
          }

          .ic-card--featured .ic-overview {
            font-size: 15px;
            -webkit-line-clamp: 4;
          }
        }

        @media (max-width: 640px) {
          .ic-media {
            height: 210px;
          }

          .ic-content {
            padding: 21px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .ic-card,
          .ic-media img,
          .ic-media-sheen,
          .ic-title-link h2,
          .ic-action,
          .ic-action svg,
          .ic-corner {
            transition: none !important;
          }

          .ic-card:hover {
            transform: none;
          }
        }
      `}</style>
    </article>
  );
}